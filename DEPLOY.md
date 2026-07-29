# Deploy runbook — raccolta-gare-mate

Primary host: **Cloudflare Pages** → https://raccolta-gare-mate.pages.dev/ (project
`raccolta-gare-mate`, wrangler **direct-upload**, NOT git-integrated).
Mirror: **GitHub Pages** → `gborghi.github.io/raccolta-gare-mate` (branch `gh-pages`).

`baseUrl` in `quartz.config.yaml` = `raccolta-gare-mate.pages.dev`. Build + deploy are **fully
local** (the CF Pages build container can't do the 13 GB heap / 19k-source build). Auth:
`npx wrangler login` (once, gio.borghi@gmail.com).

## One-time setup (already-done markers in parentheses)

```bash
npx wrangler login                                                   # gio.borghi@gmail.com
npx wrangler pages project create raccolta-gare-mate --production-branch main
```

## Full deploy (from `garaMate-pages/`)

```bash
# 0. STOP Dropbox — preprocess/quartz-build `rm` content/ + public/, which Dropbox locks
#    (EBUSY, intermittent crash mid-run). (PowerShell) Get-Process Dropbox | Stop-Process -Force
#    Restart it at the end. (Flagging content/ Dropbox-ignored does NOT win the race.)

# 1. Regenerate content (ONLY if the vault changed; deterministic + baseUrl-independent except
#    the ~5 files embedding the absolute site URL, so usually skippable if content/ is current):
node --max-old-space-size=13312 preprocess.mjs

# 2. Plugin cache (only if `.quartz/` is missing OR a build crashes with
#    "Cannot destructure property 'css' of 'component'"): re-clone fresh from quartz.lock.json.
#    The top-level plugins/graph fork is untouched.
rm -rf .quartz && npx quartz plugin restore

# 3. Build:
NODE_OPTIONS=--max-old-space-size=13312 npx quartz build

# 4. Post-build (concept graph links + mobile shrink + CF files):
node concept_cooccurrence.mjs
node shrink_build.mjs                 # stubs the heavy public/Quesiti/index.html -> /cerca
node emit-cf-files.mjs               # _headers (immutable caching) + robots.txt + .nojekyll

# 5. Gates:
find public -type f | wc -l          # MUST be < 20000 (currently ~5.4k)
find public -type f -size +25M       # MUST be empty

# 6. Deploy Cloudflare Pages (primary):
npx wrangler pages deploy public --project-name raccolta-gare-mate --branch main

# 7. Deploy gh-pages mirror (worktree push of the SAME public/, preserve CNAME if present):
GHP="<path OUTSIDE Dropbox, e.g. E:/giovanni/gare-mate-ghpages>"
git worktree add --no-checkout "$GHP" gh-pages
cp -a public/. "$GHP"/
git -C "$GHP" show gh-pages:CNAME > "$GHP/CNAME" 2>/dev/null || true
git -C "$GHP" add -A && git -C "$GHP" commit -m "Deploy" && git -C "$GHP" push origin gh-pages
git worktree remove --force "$GHP" && git worktree prune

# 8. RESTART Dropbox.
```

## Notes / gotchas

- **Dropbox must be stopped** for steps 1 + 3 (they `rm` content/ + public/; Dropbox locks →
  EBUSY, intermittent mid-run crash). Restart at step 8.
- **No CF git-integration / `wrangler.toml` / `functions/` / `_redirects`** — direct-upload only.
- **No repo secrets** — the credential lives in the local `wrangler login` session.
- **File-count headroom**: the per-gara SPA keeps `public/` at ~5.4k files; the 20k CF cap is
  the reason quesiti are collapsed into per-gara reader pages (see `../CLAUDE.md`).
- The mirror serves via relative links; its homepage/hero buttons point at the CF domain
  (fine — the mirror is a fallback).
