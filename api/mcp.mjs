// api/mcp.mjs
// Correct pattern per Vercel's current Functions API (Web Handler style) +
// the official mcp-handler package, which implements the MCP protocol correctly.

import { createMcpHandler } from 'mcp-handler';
import { z } from 'zod';
import crypto from 'crypto';

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function makeGhostToken(keyId, secretHex) {
  const header = { alg: 'HS256', typ: 'JWT', kid: keyId };
  const now = Math.floor(Date.now() / 1000);
  const payload = { iat: now, exp: now + 300, aud: '/admin/' };
  const encodedHeader = base64url(JSON.stringify(header));
  const encodedPayload = base64url(JSON.stringify(payload));
  const signingInput = `${encodedHeader}.${encodedPayload}`;
  const signature = crypto
    .createHmac('sha256', Buffer.from(secretHex, 'hex'))
    .update(signingInput)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  return `${signingInput}.${signature}`;
}

async function createGhostDraft({ title, html, tags }) {
  const [keyId, secretHex] = process.env.GHOST_ADMIN_API_KEY.split(':');
  const token = makeGhostToken(keyId, secretHex);
  const base = process.env.GHOST_API_URL.replace(/\/+$/, '');

  const res = await fetch(`${base}/ghost/api/admin/posts/?source=html`, {
    method: 'POST',
    headers: {
      Authorization: `Ghost ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      posts: [
        {
          title,
          html,
          tags: tags && tags.length ? tags : ['wire'],
          status: 'draft',
        },
      ],
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Ghost API error: ${JSON.stringify(data)}`);
  }
  return data.posts[0];
}

const mcpHandler = createMcpHandler(
  (server) => {
    server.tool(
      'create_ghost_draft',
      'Create a DRAFT post on the Robot Hive Ghost blog (robothive.ghost.io). Never publishes â always creates status=draft for human review.',
      {
        title: z.string().describe('Post headline, ideally under 10 words, leading with the company/subject name'),
        html: z.string().describe('Post body as simple HTML, e.g. "<p>...</p><p>Source: https://...</p>"'),
        tags: z.array(z.string()).optional().describe('Tags to apply; defaults to ["wire"] if omitted'),
      },
      async ({ title, html, tags }) => {
        const post = await createGhostDraft({ title, html, tags });
        return {
          content: [
            {
              type: 'text',
              text: `Draft created successfully: "${post.title}" (id: ${post.id}, status: ${post.status})`,
            },
          ],
        };
      }
    );
  },
  {},
  {}
);

// Wrap the handler with our shared-secret check before letting MCP requests through.
// Accepts the secret via (in order of preference): Authorization: Bearer <secret>,
// a custom x-bridge-secret header, or a ?secret= query param â whichever the
// calling client actually supports.
async function authenticatedHandler(request) {
  try {
    const url = new URL(request.url);
    const authHeader = request.headers.get('authorization') || '';
    const bearerToken = authHeader.toLowerCase().startsWith('bearer ')
      ? authHeader.slice(7).trim()
      : null;
    const provided = bearerToken || request.headers.get('x-bridge-secret') || url.searchParams.get('secret');

    if (provided !== process.env.BRIDGE_SECRET) {
      return new Response(JSON.stringify({ error: 'Unauthorized', gotSecret: provided ? 'yes-but-wrong' : 'none-provided' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    try {
      return await mcpHandler(request);
    } catch (innerErr) {
      // Surface the real error directly in the response so we can see it
      // without depending on Vercel's log viewer.
      return new Response(
        JSON.stringify({
          error: 'mcpHandler threw',
          message: innerErr?.message || String(innerErr),
          stack: innerErr?.stack || null,
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (outerErr) {
    return new Response(
      JSON.stringify({
        error: 'authenticatedHandler threw',
        message: outerErr?.message || String(outerErr),
        stack: outerErr?.stack || null,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
