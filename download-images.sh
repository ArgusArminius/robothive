#!/usr/bin/env bash
# behindrobotics.com — build the self-hosted image vault
# Run this once, from the site root, then commit the img/ folder.
# It reads image-manifest.json and downloads each asset to its local path.

set -u
MANIFEST="image-manifest.json"
[ -f "$MANIFEST" ] || { echo "image-manifest.json not found"; exit 1; }

mkdir -p img/components img/robots
total=$(python3 -c "import json;print(len(json.load(open('$MANIFEST'))))")
i=0; ok=0; fail=0

python3 - "$MANIFEST" <<'PY' > /tmp/_imglist.tsv
import json,sys
for r in json.load(open(sys.argv[1])):
    print(r["dest"]+"\t"+r["src"])
PY

while IFS=$'\t' read -r dest src; do
  i=$((i+1))
  if [ -s "$dest" ]; then ok=$((ok+1)); continue; fi          # skip already-downloaded
  if curl -fsSL --max-time 25 -o "$dest" "$src"; then
    ok=$((ok+1))
  else
    fail=$((fail+1)); rm -f "$dest"
    echo "FAILED: $dest" >> img/_failed.log
  fi
  printf "\r[%d/%d] ok=%d fail=%d" "$i" "$total" "$ok" "$fail"
  sleep 0.15                                                  # be polite to the host
done < /tmp/_imglist.tsv

echo ""
echo "Done. ok=$ok failed=$fail"
[ -f img/_failed.log ] && echo "See img/_failed.log for misses."
