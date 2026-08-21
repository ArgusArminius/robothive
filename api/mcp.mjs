// api/mcp.mjs
// A minimal remote MCP server exposing one tool: create_ghost_draft.
// Uses the official @modelcontextprotocol/sdk — add it to your package.json (see below).
// .mjs extension = always treated as an ES module by Vercel, regardless of your
// existing package.json "type" setting, so this can't break your other files.

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
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
  const base = process.env.GHOST_API_URL.replace(/\/+$/, ''); // strip trailing slash if present

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
          status: 'draft', // hard-coded — this tool can never publish
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

function buildServer() {
  const server = new McpServer({ name: 'robothive-ghost-bridge', version: '1.0.0' });

  server.tool(
    'create_ghost_draft',
    'Create a DRAFT post on the Robot Hive Ghost blog (robothive.ghost.io). Never publishes — always creates status=draft for human review.',
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

  return server;
}

export default async function handler(req, res) {
  // Auth: accept the shared secret via header OR query string, whichever the
  // connector setup ends up supporting.
  const provided = req.headers['x-bridge-secret'] || req.query?.secret;
  if (provided !== process.env.BRIDGE_SECRET) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const server = buildServer();
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined, // stateless — each request is independent
  });

  res.on('close', () => {
    transport.close();
    server.close();
  });

  await server.connect(transport);

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      // leave as-is; handleRequest will surface a parse error
    }
  }

  await transport.handleRequest(req, res, body);
}
