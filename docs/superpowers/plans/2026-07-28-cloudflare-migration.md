# Cloudflare Migration (Sub-project 2) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:executing-plans. Steps use checkbox
> (`- [ ]`) syntax.

**Goal:** Publish `public/` to Cloudflare Pages (primary, `raccolta-gare-mate.pages.dev`) with
a GitHub Pages `gh-pages` mirror, built and deployed **fully locally** (physics parity) — no CF
git-integration, no `wrangler.toml`, no `functions/`.

**Prereq:** SP1 (per-gara SPA) complete + verified — `public/` is ~5.4k files (< 20k CF cap).

## Global Constraints

- Fully local build+deploy; wrangler direct-upload; `wrangler login` holds the credential (no
  repo secrets).
- Domain switch `gborghi.github.io/raccolta-gare-mate` → `raccolta-gare-mate.pages.dev` (root).
- `content/` regeneration only rewrites the ~47 files embedding absolute site URLs.

## File Structure

| File | Responsibility |
|---|---|
| `emit-cf-files.mjs` (create, root) | write `public/_headers` (immutable asset cache) + `robots.txt` + `.nojekyll` |
| `quartz.config.yaml` (modify) | `baseUrl` → CF domain |
| `preprocess.mjs` (modify) | replace hardcoded `gborghi.github.io/raccolta-gare-mate` base → CF domain |
| `DEPLOY.md` (create) | local deploy runbook |

---

### Task 1: `emit-cf-files.mjs`

- [ ] Create `emit-cf-files.mjs` at repo root (math is flat — `shrink_build.mjs`/`gen_*.mjs`
  live at root):

```js
// Post-build: Cloudflare Pages _headers (immutable-asset caching) + robots.txt + .nojekyll.
import fs from "node:fs"
import path from "node:path"

const PUB = "public"
const BASE = "https://raccolta-gare-mate.pages.dev"
const EXTS = ["js", "css", "woff2", "svg", "png", "jpg", "jpeg", "webp", "avif"]
const headers = EXTS.map((e) => `/*.${e}\n  Cache-Control: public, max-age=604800, immutable`).join("\n")
fs.writeFileSync(path.join(PUB, "_headers"), headers + "\n")
const robots = ["User-agent: *", "Allow: /", "", `Sitemap: ${BASE}/sitemap.xml`].join("\n")
fs.writeFileSync(path.join(PUB, "robots.txt"), robots + "\n")
fs.writeFileSync(path.join(PUB, ".nojekyll"), "")
console.log("[emit-cf-files] wrote _headers + robots.txt + .nojekyll")
```

- [ ] Verify against the existing build: `node emit-cf-files.mjs && head -2 public/_headers && cat public/robots.txt`
- [ ] Commit.

### Task 2: baseUrl + hardcoded-URL switch

- [ ] `quartz.config.yaml`: `baseUrl: gborghi.github.io/raccolta-gare-mate` →
  `baseUrl: raccolta-gare-mate.pages.dev`.
- [ ] `preprocess.mjs`: replace every `https://gborghi.github.io/raccolta-gare-mate` →
  `https://raccolta-gare-mate.pages.dev` (SITE const + homepage/hero/closing literals).
- [ ] Regenerate: `node --max-old-space-size=13312 preprocess.mjs`.
- [ ] Verify diff is small + no stale base remains in content:
  `grep -rl 'gborghi.github.io/raccolta-gare-mate' content | wc -l` → expect 0.
- [ ] Commit source + regenerated content.

### Task 3: DEPLOY.md runbook

- [ ] Create `DEPLOY.md` (see body below).
- [ ] Commit.

### Task 4: One-time CF setup + first deploy (USER-run, interactive)

Handed to the user as `!` commands (interactive login can't run headless):

```bash
npx wrangler login                                                   # gio.borghi@gmail.com
npx wrangler pages project create raccolta-gare-mate --production-branch main
```

Then the full local deploy (Task 3 runbook), ending with:

```bash
npx wrangler pages deploy public --project-name raccolta-gare-mate --branch main
```

### Verification (SP2 gate)

- `raccolta-gare-mate.pages.dev` loads; reader/search/math/graph work.
- gh-pages mirror still loads.
- `find public -type f | wc -l` < 20000 before publish.
