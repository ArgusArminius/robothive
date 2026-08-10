# Robot Hive — Publishing & Tagging Guide

Everything you (and future writers) need to publish a post and have it land in
the right place on the website. Read this once; it becomes second nature.

---

## The golden rule

**Tags decide where your post appears.** You write once, add tags, publish — and
the website automatically places it everywhere it belongs. You never post the
same thing twice or manually place anything.

---

## The tag list (use these EXACT words)

Tags must be spelled exactly as below — all lowercase. The website looks for
these precise words, so `Defense` or `defence` won't work; it must be `defense`.

### Industry tags — WHERE the post appears
| Tag | Post appears on |
|-----|-----------------|
| `civil` | Civil industry page (+ homepage + news) |
| `agriculture` | Agriculture page (+ homepage + news) |
| `defense` | Defense page (+ homepage + news) |
| `drones` | Drones page (+ homepage + news) |

### Type tags — WHAT kind of post it is
| Tag | Use for |
|-----|---------|
| `editorial` | Your opinion / analysis pieces |
| `news` | Straight news reporting |
| `teardown` | Teardown videos / breakdowns |
| `analysis` | Deeper investigative pieces |

### Topic tags — optional, for the data sections (later)
`company` · `robot` · `investment` · `regulation` · `technology` · `embodied-ai`

---

## How tags route your post (the important part)

- **Homepage** and **News page** show **everything**, newest first — every post
  lands here no matter its tags.
- **Industry pages** show **only their tag** — the Defense page shows only posts
  tagged `defense`.

**So a post tagged `defense` appears in THREE places automatically:**
1. Homepage (newest posts)
2. News page (full list)
3. Defense industry page (filtered)

You can add **more than one** industry tag. A dual-use story tagged both
`defense` AND `civil` shows on *both* industry pages. Tags are additive.

### Examples

| Your post | Tags to add | Where it lands |
|-----------|-------------|----------------|
| "FPV drone economics" (opinion) | `defense` `editorial` | Home, News, Defense page |
| "Japan funds harvest robots" (news) | `agriculture` `news` | Home, News, Agriculture page |
| "Unitree G1 teardown" (video) | `defense` `civil` `teardown` | Home, News, Defense + Civil pages |
| "Why humanoids are overhyped" (pure opinion, no industry) | `editorial` | Home, News only |

---

## Publishing a post — step by step

1. In Ghost admin, click **Posts → New post** (or the **+** next to Posts).
2. **Title** — write your headline at the top.
3. **Body** — write below the title. To add:
   - **Image:** click the **+** on a new line → Image → upload.
   - **YouTube video:** paste the video URL on its own line → it auto-embeds.
   - **Link:** highlight text → click the link icon → paste URL.
4. **Feature image** (the card thumbnail): open post settings (gear icon,
   top-right) → **Feature image** → upload. This is what shows on the news card.
5. **Excerpt** (the card preview text): post settings → **Excerpt** → write 1–2
   sentences. If you skip it, the site uses the first ~120 characters.
6. **Tags** — post settings → **Tags** field → type your tags (from the list
   above), pressing Enter after each. **This is the step that routes the post.**
7. **Author** — post settings → make sure the right author/byline is set.
8. Click **Publish** (top-right) → **Publish now** (or schedule for later).

Within a minute, refresh your website — the post appears in every place its
tags route it to.

---

## Setting up the tags once (first-time setup)

Before your tags work perfectly, create them once in Ghost so they're clean:

1. Ghost admin → **Tags** (left menu) → **New tag**.
2. Create each tag from the list above, spelled exactly (lowercase).
3. Optionally give each a description (shows on Ghost's own tag pages).

After this, they'll autocomplete when you type them on a post.

---

## Common mistakes to avoid

- ❌ **Capital letters or typos** — `Defense`, `defence`, `Defense ` (trailing
  space) all fail. Use exactly `defense`.
- ❌ **Forgetting the industry tag** — post still shows on Home/News, but won't
  appear on its industry page.
- ❌ **No feature image** — card shows a plain grey block. Always add one for a
  polished look.
- ❌ **No excerpt** — works, but the auto-preview may cut awkwardly. Write one.

---

## Quick reference card (pin this)

```
EVERY POST NEEDS:
  □ Title
  □ Feature image
  □ Excerpt (1–2 sentences)
  □ At least one TYPE tag (editorial / news / teardown / analysis)
  □ Industry tag(s) if relevant (civil / agriculture / defense / drones)
  □ Correct author
  □ Publish

TAG = WHERE IT GOES.  No tag = Home + News only.
```

---

## For paid / member-only posts (later)

When you turn on memberships, each post has a **visibility** setting
(post settings → **Access**): Public / Members only / Paid-members only. That
controls who can read it — separate from tags, which control *where* it appears.
We'll cover this when payments are set up.
