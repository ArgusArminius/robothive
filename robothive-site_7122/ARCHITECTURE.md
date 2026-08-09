# Robot Hive — Architecture

The plan for how Robot Hive is built, in plain terms. Keep this; share it with
any developer or editorial hire so everyone understands the pieces.

## Principle

Build only our differentiator; buy everything else. Our differentiator is
**editorial judgment** and **structured robotics data**. Auth, payments, email
sending, subscriber management are solved problems — we use mature products for
those and never rebuild them.

## The three parts

```
   ┌─────────────────────────────────────────────────────────┐
   │                  ROBOT HIVE FRONT-END                    │
   │      (our custom design — the site visitors see)         │
   │   pulls articles from Ghost + data from Airtable,        │
   │            presents everything as one site               │
   └───────────────┬─────────────────────────┬───────────────┘
                   │                          │
        reads articles/news           reads structured data
                   │                          │
        ┌──────────▼──────────┐    ┌──────────▼──────────────┐
        │        GHOST         │    │        AIRTABLE          │
        │  editorial + audience │    │   the data matrix        │
        │─────────────────────│    │─────────────────────────│
        │ • News, editorials   │    │ • Companies              │
        │ • Teardowns          │    │ • Robots                 │
        │ • Newsletter send    │    │ • Investment             │
        │ • Memberships        │    │ • Suppliers              │
        │ • Payments (Stripe)  │    │ • (linked to each other) │
        │ • Subscriber CRM     │    │                          │
        │ • Staff roles        │    │ Edited like spreadsheets │
        │ Web login /ghost     │    │ Web login, non-technical │
        └─────────────────────┘    └─────────────────────────┘
```

## Who edits what

| Task | Where | Who |
|---|---|---|
| Write news / teardown / editorial | Ghost (browser) | You + editorial staff |
| Send newsletter | Ghost (browser) | You / editor |
| See paid vs free subscribers | Ghost members area | You |
| Take payments | Ghost + Stripe | (automatic) |
| Add / edit a company, robot, supplier | Airtable (browser) | You + data staff |
| Change the site's design | Front-end code | You / developer |

## Staff roles (Ghost, built-in)

- **Owner** — you. Full control.
- **Administrator** — trusted lead; manage everything incl. members/settings.
- **Editor** — publish and manage any author's posts.
- **Author** — write and publish own posts.
- **Contributor** — write drafts only; cannot publish.

Invite by email; they log in through the browser. No terminal, ever.

## Why each choice

- **Ghost, not a custom CMS:** rebuilding auth, roles, editor, newsletter,
  payments = months reinventing solved problems. Ghost is one maintained product
  that does all of it, web-based, with staff roles. Fits solo-founder + future
  team.
- **Airtable, not Ghost, for the matrix:** Ghost handles *articles*, not
  *relational data*. Companies↔Robots↔Suppliers need linked records and
  filtering. Airtable does this, editable by non-technical staff, reshapeable
  anytime (add/remove fields yourself).
- **Stripe (via Ghost), never self-built payments:** money handling is a
  security/compliance minefield; Stripe owns that risk.
- **Custom front-end, owned by us:** the design *is* part of the brand and the
  differentiator, so we own it. It reads from Ghost + Airtable via their APIs.

## Rough monthly cost (starting)

- Ghost: self-hosted ~$0 + server, or Ghost(Pro) from ~$9–25/mo
- Airtable: free to start, ~$20/user/mo when data grows
- Stripe: no monthly fee, ~2.9% + 30¢ per transaction
- Front-end hosting (Netlify/Vercel): free tier to start

## Build order (agreed)

1. **Design every page** (front-end, no data yet) ← we are here
2. Set up Ghost, connect articles
3. Set up Airtable, connect the data matrix
4. Wire payments + newsletter
5. Deploy

## Later (from the brief)

- RSS "what's hot" feed across our categories
- Robot Hive email address (receiving mail, subscriber notifications)
- Member dashboard for paid subscribers (built after the above)
