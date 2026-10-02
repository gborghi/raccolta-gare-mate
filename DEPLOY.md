# Deploy runbook — raccolta-gare-mate

Reference host: **GitHub Pages** → https://gborghi.github.io/raccolta-gare-mate/ (built by CI,
`.github/workflows/deploy.yml`, on every push to `main` of this repo).
Mirror: **Cloudflare Pages** → https://raccolta-gare-mate.pages.dev/ (project `raccolta-gare-mate`,
wrangler direct-upload from the private repo `gborghi/garaMate-pages`). Cloudflare serves a
byte-exact copy of the GitHub site: see "Mirror flow (GitHub = reference)" at the end. The local
steps below remain valid for producing/publishing content; the Cloudflare upload now mirrors GitHub.

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

# 7. RESTART Dropbox.
```

The **GitHub Pages mirror is auto-deployed by CI** (`.github/workflows/deploy.yml`) on every
push to `main` — no manual gh-pages step needed. (That CI build is independent of this local
build: it rebuilds `public/` from the committed `content/` and publishes to GitHub Pages.)

## Notes / gotchas

- **Dropbox must be stopped** for steps 1 + 3 (they `rm` content/ + public/; Dropbox locks →
  EBUSY, intermittent mid-run crash). Restart at step 8.
- **No CF git-integration / `wrangler.toml` / `functions/` / `_redirects`** — direct-upload only.
- **No repo secrets** — the credential lives in the local `wrangler login` session.
- **File-count headroom**: the per-gara SPA keeps `public/` at ~5.4k files; the 20k CF cap is
  the reason quesiti are collapsed into per-gara reader pages (see `../CLAUDE.md`).
- The mirror serves via relative links; its homepage/hero buttons point at the CF domain
  (fine — the mirror is a fallback).

## Mirror flow (GitHub = reference, Cloudflare = mirror) — since 2026-10-02

1. Push to `main` of `gborghi/raccolta-gare-mate` → `deploy.yml` builds Quartz, runs
   `concept_cooccurrence.mjs` and `shrink_build.mjs`. `shrink_build.mjs` ends with
   `scripts/inject-quesito-search.mjs`, `scripts/fix-404.mjs` (base-path-independent 404),
   `robots.txt`/`.nojekyll` and, LAST, `scripts/write-mirror-manifest.mjs` →
   `public/mirror-manifest.json` (sha256 + size of every file, `source_sha` = commit built).
2. Content link fixes are committed in `content/` (and re-applied by `preprocess.mjs`, which calls
   `scripts/fix-content-links.mjs`): lower-case `_attachments` names, `[[src_X__Qnn]]` atom links →
   `[[Quesiti/src_X#qnn|…]]`, unconverted PDFs → Google Drive (`pdf_drive_map.json`).
3. Cloudflare job (`garaMate-pages`, `cf-deploy.yml`): its last post-build step
   `node emit-cf-files.mjs` runs in mirror mode in CI (`CF_MIRROR=1` implied by `CI`):
   `scripts/mirror-from-github.mjs` waits until GitHub Pages serves the manifest whose
   `source_sha` is the latest `main` commit of this repo (max `MIRROR_WAIT_MIN`=45 min), downloads
   every listed file, verifies each hash, and replaces `public/` with that copy; only `_headers` is
   added. Any mismatch → the job fails instead of deploying a divergent site.
   `CF_MIRROR=0 node emit-cf-files.mjs` restores the old "deploy the local build" behaviour.
4. Navbar links, logo and `body[data-basepath]` are computed relative to the page (patched
   `Navbar.tsx`, `renderPage.tsx`, `spa.inline.ts`), so the same bytes work under `/` (Cloudflare)
   and `/raccolta-gare-mate/` (GitHub).
5. Verify with `check.py` (gare-mirror): every reference file must be identical on both hosts.
