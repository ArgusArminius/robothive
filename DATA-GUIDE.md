# Robot Hive — Data Guide

How the structured data works, and how to add to it.

## The model

Four record types, cross-linked by `id` (mirrors how a proper intelligence
graph works — every name on the site is clickable through to its profile):

```
COMPANIES ──makes──> ROBOTS
    │
    ├──makes──> COMPONENTS
    │
    └──supplies_to──> COMPANIES
```

- **Companies** — builders, suppliers, or both (`type: builder|supplier|both`)
- **Robots** — platforms, each linked to its maker company
- **Components** — parts, each linked to its maker and the robots it's used in
- **Suppliers** — not a separate table: any company with `type: supplier|both`

## Where it lives

All of it is in **`data.js`** — one file, plain JavaScript. The pages
(`companies.html`, `robots.html`, `suppliers.html`, `components.html`,
`company-profile.html`) read from it automatically via `datapages.js`.

Add a record to `data.js` → it appears on the site. No page edits needed.

## Adding a company

Copy an existing block and change the values:

```js
{ id:'my-company', name:'My Company', country:'Japan', flag:'🇯🇵', founded:2020,
  type:'builder',              // builder | supplier | both
  sector:'Humanoid', status:'private',   // private | public | ipo-filed
  hq:'Tokyo', funding:'$50M Series B', valuation:'$400M', employees:'~120',
  website:'https://example.com',
  summary:'One paragraph on what they do and why they matter.',
  notable:'The one fact a reader should remember.',
  robots:['my-robot'],         // ids from the robots array
  supplies_to:[] }             // company ids they supply
```

**`id` rules:** lowercase, hyphens, no spaces. It's permanent — it's what
links point to (`company-profile.html?id=my-company`).

## Adding a robot

```js
{ id:'my-robot', name:'My Robot', maker:'my-company', type:'Humanoid',
  country:'Japan', flag:'🇯🇵', year:2026, price:'~$20,000',
  status:'Shipping', height:'1.70 m', payload:'~15 kg',
  summary:'What it is and what makes it notable.',
  components:[] }              // component ids it uses
```

`maker` **must** match a company `id` — that's what makes the maker name
clickable through to the company profile.

## Adding a component

```js
{ id:'my-part', name:'Part Name', maker:'my-company', category:'Servo drive',
  country:'Germany', flag:'🇩🇪', spec:'Short spec line',
  summary:'What it does and why it matters in the stack.',
  used_in:['my-robot'] }       // robot ids that use it
```

## What makes a record good

- **`summary`** — one paragraph, plain language, why it matters (not marketing copy)
- **`notable`** — the single fact that makes a reader stop. This shows in a
  highlighted box on the profile.
- **Every number should be traceable.** If you can't source it, leave the field
  out rather than guessing.

## Editorial standard (important)

This dataset is **Robot Hive's own compilation**, built from primary sources:
company announcements and filings, exchange listings, market research, and
credible reporting. That's what makes it defensible and quotable.

**Do not copy datasets from competitors.** Beyond the legal exposure, a
compiled database is only as valuable as its credibility — and "we verified
this ourselves" is the entire product. When you add a record, note the source
in your own working file so a claim can always be traced back.

Where a figure is contested (e.g. Omdia vs Unitree on 2025 shipment share),
say so in the summary. Acknowledging the dispute is more authoritative than
picking a side silently.

## Moving to Airtable later

This `data.js` structure maps 1:1 onto Airtable tables (Companies, Robots,
Components) with linked-record fields for the relationships. When you set up
Airtable, the same schema carries over and the site reads from the API instead
of the file — no redesign needed.

## Current coverage

- 26 companies (11 builders, 15 suppliers)
- 17 robots
- 9 components
- Supply-chain context block on the Suppliers page

This is a foundation, not a finished database. Grow it steadily — a smaller
verified set beats a large unverified one.
