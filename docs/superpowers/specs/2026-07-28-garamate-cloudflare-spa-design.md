# garaMate → Cloudflare Pages, per-gara SPA — Design

Date: 2026-07-28
Status: approved (design), pre-plan
Repo: `garaMate-pages/` (Quartz v5, community-plugin architecture)
Reference implementation: sibling `../OlimpiadiFisica/site-fisica/` (already migrated to Cloudflare Pages)

## Goal

Migrate the garaMate math-competition site from GitHub Pages to **Cloudflare Pages**,
replicating the approach already used for the physics site. Preserve the user's browsing
experience (near-identical), and add the per-gara reader navigation the physics site has.

Two sub-projects, executed and verified in order:

1. **Per-gara SPA** — collapse ~19k per-quesito pages into **one page per gara** (2064)
   with client-side switching, to fit Cloudflare Pages' ~20k-file cap and to gain the
   per-gara reader sidebar.
2. **Cloudflare migration** — publish `public/` to Cloudflare Pages (primary) while keeping
   GitHub Pages as a mirror, built and deployed **fully locally** (physics parity).

## Context / current state (facts)

- `garaMate-pages/preprocess.mjs` runs **locally**; its output `content/` (~23,126 files,
  incl. 3,722 images) is committed. CI (`.github/workflows/deploy.yml`) then runs
  `npx quartz build` (heap `--max-old-space-size=13312`) → `concept_cooccurrence.mjs`
  → `shrink_build.mjs` → upload to GitHub Pages.
- Vault holds **2064 gare** (index notes `src_<family>_<year>_<level>.md`) covering ~19k
  quesiti (`src_..._QNN.md`), plus `__en` bilingual siblings.
- Concept notes: 12 Topics + 21 Methods + 9 Skills + 4 Clusters (46), each a qtable
  hydrated client-side from `quartz/static/quesiti.json`.
- Quesiti carry `competition` / `family` frontmatter (grouping key already present).
- Current URL: `gborghi.github.io/raccolta-gare-mate` (project subpath baseUrl).

### File-count budget (post-SPA)

| bucket | count |
|---|---|
| gara pages (was ~19k quesiti) | 2064 |
| images (content/) | 3722 |
| concept notes | 46 |
| foreign archives + static + misc | few hundred |
| **estimated public/ total** | **~6–7k** |

Comfortably under the 20k cap. **Unlike physics, math does NOT need the external
assets-repo offload** (`sync-assets-repo.mjs` / `rewrite-asset-urls.mjs`) — those are out of
scope.

## Decisions (locked with user)

- **Bilingual:** adopt the physics **qlang IT/EN per-quesito toggle** (`qlang.inline.ts`);
  stop flattening `__en` into the body. Preprocess emits `qlang-split` (IT + EN variants)
  per atom.
- **Host:** Cloudflare Pages **primary** (`raccolta-gare-mate.pages.dev`) + GitHub Pages
  **mirror** (`gh-pages`).
- **Builder:** **fully local**, exactly like physics — you run `preprocess.mjs`
  → `quartz build` → post-build scripts → `wrangler pages deploy` from your machine; the
  gh-pages mirror is pushed locally too. GitHub Actions is **retired** as the deploy driver.
  (No Cloudflare git-integration — the CF Pages build container can't do the 13 GB heap /
  19k-page build. No `wrangler.toml`, no `functions/`, no `_redirects` — direct-upload only,
  matching physics.)

---

## Sub-project 1 — Per-gara SPA

### Architecture

Mirror the physics `preprocess.mjs` grouping+container passes and the `atomRouter` client
engine.

**Preprocess passes (in `preprocess.mjs`):**

1. **Grouping pass** — walk quesiti, split filename `src_<family>_<year>_<level>__QNN` into
   `stem` + `atomId`; build:
   - `gareAtoms: Map<stemSlug, [{ rel, base, atomId }]>` (ordered by QNN),
   - `atomFrag: Map<"gare/<stem>__qnn", "gare/<stem>#qnn">` (link-repoint table).
2. **Main file loop** — skip atom files and any parent stem that has atoms; push each
   quesito into the `quesiti[]` array that becomes `quesiti.json`, with its **href set to the
   fragment form** `gare/<stem>#qNN`.
3. **Container-emission pass** — per gara stem: read each atom `.md`, strip its H1,
   `transform()` the body, wrap IT + EN sibling bodies in a `qlang-split` (with a
   `qlang-switch` toggle), concatenate all atoms behind
   `<span class="atom-split" id="qNN" data-atom="qNN" data-title=… data-tags=…>`, prepend
   the mount `<div class="atom-reader" data-gara="<stem>">`, and write a single
   `content/gare/<stemSlug>.md` (`tipo: gara`).
4. **Static JSON** — `quesiti.json` (all quesiti, fragment hrefs) + `quesiti_kw.json`
   (keyword index) as today; only the href field changes shape.

**Link repoint** — every internal wikilink/markdown link that resolved to a specific quesito
page is rewritten through `atomFrag` to the fragment URL. Single source of truth consumed by
both the wikilink rewrite and the `quesiti.json` / qtable data, so `/cerca` and the
Topic/Method/Skill/Cluster tables all deep-link correctly.

**Client SPA engine — `quartz/components/scripts/atomRouter.inline.ts`** (ported from physics):
- Mounts on any page containing `div.atom-reader`.
- Partitions the rendered DOM at `.atom-split` markers into per-atom node blobs; detaches
  them; shows ONE atom at a time in a reading pane (`article.ar-pane` inside `.ar-shell`).
- Builds the **TOC rail** (`nav.ar-toc` → `ul.ar-toc-list`, one `a.ar-toc-link` per atom):
  **this is the per-gara sidebar**. Plus `ar-bar` (hamburger `ar-tocbtn`, breadcrumb
  `ar-crumb`, pager `ar-prev`/`ar-next`) and an `N / total` counter.
- Deep-links `#qNN` (history + arrow keys); highlights + scrolls the active TOC link; fires
  an `atomrender` event after each swap.

**Client bilingual — `quartz/components/scripts/qlang.inline.ts`** (ported): per-atom IT/EN
flag toggle inside `qlang-switch` / `qlang-split`; re-poked by `atomRouter` after each atom
swap.

**Wiring** — register both inline scripts through the same client-resource mechanism the math
site already uses for its `/cerca` and qtable-hydration scripts. (Physics uses a forked
`componentResources.ts` `afterDOMLoaded.push`; the math site's exact hook is confirmed during
planning — reuse whatever already ships the existing quesiti.json/cerca scripts.)

**Post-build — `shrink_build.mjs`** — add a step replacing the heavy `public/gare/index.html`
folder listing (2064 rows) with a tiny redirect stub → `/cerca`.

### Layout / plugin gotchas (preserve existing constraints)

- `explorer` plugin: currently excludes `Quesiti/`; switch it to exclude `gare/` (2064 nodes
  still too heavy to render every load). Browse via `/cerca`.
- graph plugin: nodes = gare + concept notes (Topics/Methods/Skills/Clusters), not 19k
  quesiti. Keep `concept_cooccurrence.mjs` behavior.
- `og-image` stays disabled (still >20k satori PNGs otherwise).

### Data flow

```
vault Quesiti/*.md (+__en)
  → preprocess.mjs grouping pass  → gareAtoms, atomFrag
  → preprocess.mjs container pass → content/gare/<gara>.md (.atom-split + .atom-reader + qlang-split)
  → preprocess.mjs                → quesiti.json (fragment hrefs), quesiti_kw.json
  → quartz build                  → public/gare/<gara>.html (all atoms inline, one page)
  → browser: atomRouter.inline.ts → partitions atoms, shows one, TOC rail sidebar, #qNN routing
             qlang.inline.ts      → IT/EN toggle per atom
             cerca + qtable       → deep-link via fragment hrefs
```

### Error handling / edge cases

- Gara with a single quesito → still emit reader (TOC of one), no special-case.
- Missing `__en` sibling → qlang shows only IT variant (toggle hidden/disabled for that atom).
- Quesito link that has no `atomFrag` entry (orphan) → keep label text, never emit a broken
  local link (matches existing PDF-link policy in preprocess).
- No-JS / SEO: full text of every quesito remains in the static HTML (atoms concatenated);
  only DOM visibility is JS-controlled.

### Testing / verification (SP1 gate)

- `npx quartz build --serve` — a gara page shows the reader, TOC sidebar, prev/next,
  `#qNN` deep-links, IT/EN toggle.
- `find public -type f | wc -l` < 20000 (expect ~6–7k).
- Spot-check: `/cerca` result → clicking a quesito lands on `gare/<stem>#qNN`; a
  Topic/Method qtable link does the same.
- Grep `public/` for any surviving `/quesiti/…` hrefs (should be none, or all repointed).

---

## Sub-project 2 — Cloudflare migration

### Local deploy pipeline (run from the machine, physics parity)

`DEPLOY.md` runbook, executed locally in order:

0. **Stop Dropbox sync** if `preprocess.mjs` / `quartz build` `rm` `content/` or `public/`
   (EBUSY otherwise, as on physics); restart at the end. Confirm during planning whether the
   math preprocess actually deletes those dirs.
1. `node preprocess.mjs` (regenerate `content/` from vault; heap
   `--max-old-space-size=13312` as needed).
2. `npx quartz build` (heap `--max-old-space-size=13312`).
3. `node concept_cooccurrence.mjs` → `node shrink_build.mjs`.
4. **`node emit-cf-files.mjs`** — writes `public/_headers` (immutable cache for `*.js *.css
   *.woff2` + images) + `public/robots.txt`; ensure `public/.nojekyll`.
5. **File-count gate** — `find public -type f | wc -l` MUST be < 20000; abort otherwise.
6. **Cloudflare publish** — `npx wrangler pages deploy public --project-name
   raccolta-gare-mate --branch main`.
7. **gh-pages mirror** — push the same lean `public/` to the `gh-pages` branch via a git
   worktree, preserving `CNAME`.
8. **Restart Dropbox.**

`baseUrl` in `quartz.config.yaml` → `raccolta-gare-mate.pages.dev` (root). Mirror serves via
relative links; canonical/sitemap point at CF.

### One-time setup (user-run, interactive — handed over as `!` commands)

- `npx wrangler login` (gio.borghi@gmail.com);
- `npx wrangler pages project create raccolta-gare-mate --production-branch main`.

No repo secrets needed (deploy is local, authenticated via `wrangler login`).

### Verification (SP2 gate)

- `raccolta-gare-mate.pages.dev` loads with working reader, search, math (KaTeX), graph.
- gh-pages mirror still loads.
- File-count gate passed before publish.

## Post-planning refinements (2026-07-28)

Two facts found while writing the SP1 plan
(`docs/superpowers/plans/2026-07-28-per-gara-spa.md`) refine this design:

1. **Containers reuse `Quesiti/<stem>`, not a new `gare/` folder.** Math quesiti already live
   under `Quesiti/` and each gara's index note already sits at slug `Quesiti/<stem>`. Emitting
   the reader container at that same slug replaces the index page and keeps every gara URL
   unchanged — strictly better for "UX unaltered." References to `content/gare/<gara>.md` above
   should read `content/Quesiti/<stem>.md`; `explorer` keeps excluding `Quesiti/` (no new
   exclusion needed).
2. **The qlang IT/EN toggle (Q1=B) is already built.** `preprocess.mjs` (lines ~288–337)
   already collects `translation_of` siblings and merges them with `qlang-switch` /
   `qlang-split` markers, and `qlang.inline.ts` already ships. SP1 only has to preserve those
   markers inside each concatenated atom blob (atomRouter carries them opaquely) and ensure
   qlang re-binds on the `atomrender` event.

## Out of scope

- External assets repo / image offload (not needed under the cap).
- Cloudflare Functions, `_redirects`, `wrangler.toml`, CF git-integration builds.
- Any change to vault content or the upstream extraction pipeline.

## Open items (resolve during planning)

- Exact client-resource registration hook the math site currently uses for its
  quesiti.json/cerca/qtable scripts (reuse it for atomRouter + qlang).
- Whether the math `qtable` hydration script needs a change beyond the fragment-href data
  (likely data-only).
- Confirm KaTeX still renders inside detached/re-attached atom DOM (physics handles this; verify).
