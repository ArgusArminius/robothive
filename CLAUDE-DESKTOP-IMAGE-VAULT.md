# Instruction for Claude Desktop — build the behindrobotics image vault

Copy everything inside the box below and paste it into Claude Desktop (with the
behindrobotics site folder open / accessible to it).

---

```
I need you to build a local image vault for my website behindrobotics.com.

CONTEXT
My site folder contains a file called `image-manifest.json`. It is a JSON array of
421 objects, each shaped like:

  {
    "dest": "img/components/cmp-2f-140-adaptive-gripper.jpg",
    "src":  "https://....supabase.co/storage/v1/render/image/public/robotics_assets/...jpg?width=512...",
    "name": "2F-140 Adaptive Gripper"
  }

`src` is where the image currently lives on an external CDN.
`dest` is the local path inside my site folder where I want it saved permanently.

WHAT I WANT YOU TO DO
1. Read `image-manifest.json` from my site folder.
2. Create the folders `img/components/` and `img/robots/` if they don't exist.
3. For every entry, download `src` and save it to `dest`.
4. Skip any file that already exists and is non-empty (so I can re-run this safely).
5. Be polite to the host: no more than ~5 downloads per second, and set a
   reasonable timeout (about 25 seconds) per file.
6. If a download fails, don't stop the whole run — record the failure and continue.
7. When finished, write `img/_failed.log` listing any `dest` paths that failed,
   and print a summary: total, succeeded, failed.
8. Finally, verify: report how many files now exist under `img/` and their total
   size on disk, and tell me if any are 0 bytes (those should be deleted and retried).

NOTES
- Do NOT rename the files. The site's data already points at these exact `dest`
  paths, so the names must match the manifest exactly.
- Do NOT re-compress or resize. Save the bytes as downloaded.
- If a `src` URL 404s or is blocked, just log it — I'll re-source that image
  manually later.

After the download completes, tell me the failure count so I know whether to
re-source any images before I commit the `img/` folder to GitHub.
```

---

## After Claude Desktop finishes

1. Check `img/_failed.log`. A handful of failures is normal.
2. Commit the whole `img/` folder to your GitHub repo alongside the site files.
3. Deploy. The site already points at the local `img/...` paths, so images will
   appear as soon as the folder is live — no code change needed.

## Why this matters

Once the vault exists, every product image is served from **your own domain**.
No dependency on anyone else's CDN, no risk of the links being changed or blocked,
and no third-party hotlinking. The `imgSrc` field stays in the data purely as a
record of where each asset was originally fetched from.
