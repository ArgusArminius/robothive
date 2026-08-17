# Hive Wire — Claude + Ghost Setup

This connects your daily Claude (Cowork) monitor to Ghost, so it produces
short `wire`-tagged draft posts that appear in the Hive Wire strip on your site.

Nothing publishes automatically — every item is created as a DRAFT for you to review.

---

## STEP 1 — In Ghost: create the `wire` tag (one-time)

1. Ghost admin (robothive.ghost.io/ghost) → **Tags** → **New tag**
2. Name it: `wire`  (slug becomes `wire` automatically)
3. Save. That's it — the site already looks for this tag.

## STEP 2 — In Ghost: get an Admin API key (one-time)

The monitor needs permission to create drafts.

1. Ghost admin → **Settings** → **Integrations** → **Add custom integration**
2. Name it: `Hive Wire Monitor`
3. Copy the **Admin API Key** (looks like `xxxxx:yyyyy`) and the **API URL**
   (`https://robothive.ghost.io`)
4. Keep these private — they let a program post to your Ghost.

## STEP 3 — In Claude Cowork: set the daily task

Open your existing "Robot Hive Daily News Digest" trigger (or create one:
schedule `0 6 * * *` = 8am Berlin, push on). Paste the PROMPT below as its
instructions. Where it says [PASTE ADMIN KEY] / [PASTE API URL], put your
Step 2 values.

---

## THE TASK PROMPT (paste this into the Cowork task)

You are the daily news monitor for Robot Hive, a robotics/drones/embodied-AI
intelligence outlet. Run this once now.

SOURCES — check these 5 only (RSS / news search):
1. The Robot Report (therobotreport.com)
2. IEEE Spectrum Robotics (spectrum.ieee.org/robotics)
3. TechCrunch robotics (techcrunch.com/tag/robotics)
4. Google News RSS: "robot OR humanoid OR drone funding OR IPO OR supplier"
5. Google News RSS: "robotics actuator OR reducer OR sensor OR defense drone contract"

SELECT — from everything found in the last 24 hours, keep ONLY items genuinely
about robotics, drones, embodied AI, or their supply chain (actuators, reducers,
sensors, compute). Rank by importance to the industry. Keep the TOP 3 only.

WRITE — for each of the 3, write in your OWN words (never copy the article's text):
- headline: max ~10 words, lead with the company name
- summary: 2 sentences, factual, why it matters to the robotics industry
- always include the original source URL

For each item, create a Ghost DRAFT post via the Ghost Admin API:
- endpoint: [PASTE API URL]/ghost/api/admin/posts/
- authenticate with Admin API key: [PASTE ADMIN KEY]
- title = your headline
- html = your 2-sentence summary + a line: Source: <url>
- tags = ["wire"]
- status = "draft"   (IMPORTANT: never "published")

Then send me a push summary: the 3 headlines you drafted, so I can review in
Ghost and publish the good ones.

RULES:
- Never publish — drafts only.
- Never copy article text — original summary + link only.
- If nothing meets the bar, create nothing and tell me "no wire-worthy items today."
- Stop after 3 items. Do not exceed 5 source checks.

---

## STEP 4 — Daily, on your side (30 seconds)

1. Get the morning push (3 headlines)
2. Open Ghost → Posts → filter by `wire` tag → drafts are waiting
3. Read, fix wording if needed, hit **Publish** on the good ones
4. Published `wire` posts appear in the Hive Wire strip on robothive.com automatically

## When to graduate to Make/n8n (later)

Only when you want: (a) it running independent of your Claude usage, or
(b) auto-posting these to X / LinkedIn. Until then, Claude + Ghost is enough.
