# Efficient GitHub workflow (no more full-folder uploads)

The problem: dragging the whole site folder (400+ images, ~123MB) into github.com's
"Upload files" box every time is why GitHub "thinks it's a lot" — that web uploader
isn't built for this. The fix is to use **GitHub Desktop** once to set up a real local
clone, then every future update only sends the handful of files that actually changed.

## One-time setup (~10 minutes, mostly waiting for the img/ download)

1. Install **GitHub Desktop**: https://desktop.github.com — sign in with the GitHub
   account/org that owns the `behindrobotics-site` (or whatever it's named) repo.
2. In GitHub Desktop: **File → Clone repository → GitHub.com tab** → select your
   repo → pick a **new, empty folder** to clone into, e.g.
   `C:\Users\9011788\Documents\behindrobotics-site-repo`.
   - This downloads everything already on GitHub once, including the `img/` folder
     you already uploaded — that's expected, it's a one-time cost.
   - Don't clone into the existing `Downloads\behindrobotics-site` folder — start a
     clean, separate folder that Git manages from the start.
3. From now on, **this cloned folder is your one working copy** of the site. Any file
   I (Claude) hand you gets copied into this folder, not the old Downloads one.

## Every future update (seconds, not minutes)

1. Copy the changed file(s) into the cloned repo folder, overwriting the old version
   (e.g. drop in a new `map.html` or `mapdb.js`).
2. Open **GitHub Desktop** — it automatically shows a diff of exactly what changed.
   Since only those files were touched, the `img/` folder won't show up at all.
3. Type a short summary in the "Summary" box (e.g. "Update map: real world geometry,
   blue heatmap").
4. Click **Commit to main**.
5. Click **Push origin** (top right) — this uploads only the changed bytes, so it's
   fast even though the repo overall is large.

That's the whole loop. No zips, no drag-and-drop into the browser, no size warnings.

## If you ever prefer the command line instead

Same idea, three commands from inside the cloned folder after copying in changed files:

```
git add -A
git commit -m "Update map: real world geometry, blue heatmap"
git push
```

## Notes

- Keep editing only inside the cloned repo folder going forward — if you keep both
  the old Downloads copy and the new cloned copy around, they will drift apart and
  it'll be easy to accidentally edit (or send me) a stale version.
- The `_geo-source/` folder (raw downloaded map data) and `_vault_status.txt` /
  `_failed.log` files from the image-vault run aren't needed by the live site —
  feel free to add them to a `.gitignore` or just delete them before your first
  commit from the new clone.
