# Robot Hive — Live Stock Quotes (Finnhub)

Two features, both powered by `finnhub.js` using the free Finnhub key.

## 1. Site-wide ticker (custom site)
A scrolling price band under the nav on every page. Already built.
Symbols: NVDA, TSLA, ISRG, SYM, SERV, PATH, ROK, TER, ZBRA (US-listed).
To change them: edit `data-symbols="..."` on the `#rh-ticker` div (tell Claude).

## 2. In-article stock widget (works on Ghost AND custom site)
Show a live quote for any US-listed stock inside an article.

### How to add one in Ghost:
1. In the Ghost editor, on a new line, type `/html` and press Enter (inserts an HTML card).
2. Paste this, changing the symbol:

    <div data-stock="TSLA"></div>

3. For the quote to render, the article must load finnhub.js. Add this ONCE per
   article (or better, site-wide via Ghost Settings → Code Injection → Site Footer):

    <script src="https://YOUR-VERCEL-URL/finnhub.js"></script>

   Replace YOUR-VERCEL-URL with your real domain (e.g. robothive.vercel.app).

### Examples:
    <div data-stock="NVDA"></div>   → Nvidia live
    <div data-stock="SYM"></div>    → Symbotic live

## IMPORTANT NOTES
- **US stocks only** on the free tier. Tokyo/Chinese/European stocks (Harmonic
  Drive 6324, Fanuc, ABB non-ADR) need Finnhub's PAID international tier.
- The key is **public** in the code — it's the free/disposable one. If abused,
  regenerate it at finnhub.io and tell Claude to swap it.
- **Commercial use:** Finnhub's free tier is for personal/non-commercial use.
  Once Robot Hive runs ads/subscriptions, move to a paid Finnhub plan
  (~$12–100/mo) to stay compliant.
- Quotes refresh every 60 seconds.
