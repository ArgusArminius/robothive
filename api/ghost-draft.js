// api/ghost-draft.js
// Bridge endpoint: Claude calls this, this calls Ghost's Admin API.
// No npm dependencies — uses Node's built-in crypto + fetch (both included on Vercel).

const crypto = require('crypto');

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

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed, use POST' });
  }

  // Simple shared-secret check so this endpoint can't be used by randoms who find the URL
  if (req.headers['x-bridge-secret'] !== process.env.BRIDGE_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { title, html, tags, status } = req.body || {};
  if (!title || !html) {
    return res.status(400).json({ error: 'title and html are required fields' });
  }

  try {
    const [keyId, secretHex] = process.env.GHOST_ADMIN_API_KEY.split(':');
    const token = makeGhostToken(keyId, secretHex);

    const ghostRes = await fetch(
      `${process.env.GHOST_API_URL}/ghost/api/admin/posts/?source=html`,
      {
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
              tags: tags || ['wire'],
              status: status || 'draft', // always defaults to draft, never published
            },
          ],
        }),
      }
    );

    const data = await ghostRes.json();

    if (!ghostRes.ok) {
      return res.status(ghostRes.status).json({ error: data });
    }

    return res.status(200).json({
      success: true,
      id: data.posts[0].id,
      title: data.posts[0].title,
      status: data.posts[0].status,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
