# Per-gara SPA (Sub-project 1) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:executing-plans to implement
> task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Collapse ~19k per-quesito Quartz pages into one client-routed reader page per gara
(2064), gaining a per-gara TOC sidebar, so the site fits Cloudflare Pages' ~20k-file cap
while the browsing experience stays essentially unchanged.

**Architecture:** Port the physics site's per-gara SPA pattern. `preprocess.mjs` gains a
grouping pass + a container-emission pass: it stops writing a page per quesito and instead
writes one `content/Quesiti/<stem>.md` per gara, concatenating every quesito body behind an
inline `<span class="atom-split" id="qNN" …>` marker under a `<div class="atom-reader">`
mount. A new client script `atomRouter.inline.ts` partitions that page at the markers, shows
one quesito at a time in a reading pane, and renders the TOC rail (the per-gara sidebar) with
`#qNN` deep-links. The existing qlang IT/EN toggle rides along inside each atom blob
unchanged. `quesiti.json` / keyword hrefs are repointed to the `#qNN` fragment form so
`/cerca` and the concept-note qtables still deep-link correctly.

**Tech Stack:** Node 22, ESM `.mjs`, `gray-matter`; Quartz v5 community-plugin architecture;
TypeScript inline browser scripts; SCSS.

## Global Constraints

- Node `22`; build heap `NODE_OPTIONS=--max-old-space-size=13312` (unchanged).
- No new npm dependencies.
- `content/` filenames: **basename lowercased, folder case preserved** (`loRel`); Quartz
  emits at file paths, OFM resolves wikilinks to lowercase hrefs, GitHub Pages is
  case-sensitive — so slugs must match existing (`Quesiti/…`, capital Q folder).
- Reader container for a gara is emitted at the **gara index note's own slug**
  (`Quesiti/<stem>`), replacing that page — the gara URL does NOT change.
- Quesito atom id = lowercased suffix after `__` (`__Q05` → `q05`); fragment = `#q05`.
- `og-image` stays disabled; `explorer` keeps excluding `Quesiti/`.
- Match the existing `preprocess.mjs` style (helper functions, `transform()`, `sluggify`,
  `slugFromRel`, `loRel`, the bilingual sibling-merge block at lines 288–337).
- All work on branch `cloudflare-spa-migration`. Commit after each task.

## File Structure

| File | Responsibility |
|---|---|
| `preprocess.mjs` (modify) | grouping pass, container-emission pass, skip per-quesito writes, repoint quesiti.json/kw hrefs |
| `quartz/components/scripts/atomRouter.inline.ts` (create) | client SPA engine: partition atoms, reading pane, TOC sidebar, `#qNN` routing, fire `atomrender` |
| `quartz/components/scripts/qlang.inline.ts` (modify if needed) | ensure it re-binds on `atomrender` (physics parity) |
| `quartz/plugins/emitters/componentResources.ts` (modify) | register `atomRouterScript` after `qlangScript` |
| CustomEventMap declaration (modify) | add `atomrender` event type |
| `quartz/styles/custom.scss` (modify) | `.ar-bar/.ar-shell/.ar-toc/.ar-pane/reading-page` styles |
| `shrink_build.mjs` (modify) | stub the heavy `public/Quesiti/index.html` folder listing → `/cerca` |

Reference implementation to port from (read-only): `../OlimpiadiFisica/site-fisica/`
(`preprocess.mjs` lines 606–803, `quartz/components/scripts/atomRouter.inline.ts`,
`quartz/components/scripts/qlang.inline.ts`, `quartz/styles/custom.scss` `.ar-*` block).

---

### Task 1: Grouping pass — map quesiti to gara stems

**Files:**
- Modify: `preprocess.mjs` (inside `main()`, after the bilingual `siblings` pass ~line 301,
  before the `for (const rel of files)` main loop ~line 303)

**Interfaces:**
- Produces: `gareAtoms: Map<stemSlug, {rel,base,atomId}[]>`, `gareParents: Map<stemSlug, rel>`,
  `atomFrag: Map<oldHref, "Quesiti/<stem>#<atomId>">`, and a module-level `esc()` helper.
  `stemSlug` = `slugFromRel(loRel(<dir>/<stemBase>.md))` (e.g. `Quesiti/src_archimede_1996_biennio`).
  `oldHref` = `slugFromRel(loRel(rel))` (e.g. `Quesiti/src_archimede_1996_biennio__q05`).

- [ ] **Step 1: Add the `esc` helper** near the other top-level helpers (after `loRel`, ~line 222):

```js
// Escape HTML-significant chars for values embedded in raw-HTML marker attributes.
const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c])
```

- [ ] **Step 2: Insert the grouping pass** right before the main `for (const rel of files)` loop:

```js
  // --- SPA: group quesiti by gara stem -> ONE reader page per gara ---
  // Quesito files are Quesiti/src_<family>_<year>_<level>__QNN.md; the gara index note
  // is Quesiti/src_<...>.md (no __QNN). We group atoms under the stem's slug so the
  // container pass below emits one reader page at the gara's own slug (Quesiti/<stem>),
  // replacing BOTH the ~19k per-quesito pages AND the old gara index page.
  const gareAtoms = new Map()   // stemSlug -> [{ rel, base, atomId }]
  const gareParents = new Map() // stemSlug -> rel of the <stem>.md gara index note
  // old atom href (Quesiti/<stem>__qnn) -> Quesiti/<stem>#<atomId>. Built HERE (not in the
  // container pass) because the main loop below repoints quesiti.json / keyword hrefs.
  const atomFrag = new Map()
  for (const rel of files) {
    if (rel.split(path.sep)[0] !== "Quesiti") continue
    if (String((parseFrontmatter(await fs.readFile(path.join(VAULT, rel), "utf8")).data).secondary) === "true")
      continue // translation sibling, merged not atomized
    const base = path.basename(rel, ".md")
    const usc = base.indexOf("__")
    const stemSlugOf = (b) => slugFromRel(loRel(path.join(path.dirname(rel), b + ".md")))
    if (usc < 0) {
      gareParents.set(stemSlugOf(base), rel) // gara index note
      continue
    }
    const stem = stemSlugOf(base.slice(0, usc))
    const atomId = base.slice(usc + 2).toLowerCase() // "q05"
    if (!gareAtoms.has(stem)) gareAtoms.set(stem, [])
    gareAtoms.get(stem).push({ rel, base, atomId })
    atomFrag.set(slugFromRel(loRel(rel)), `${stem}#${atomId}`)
  }
  for (const list of gareAtoms.values())
    list.sort((a, b) => a.atomId.localeCompare(b.atomId, "en", { numeric: true }))
```

- [ ] **Step 3: Run preprocess, verify the maps populate**:

```bash
cd garaMate-pages && node --max-old-space-size=13312 preprocess.mjs 2>&1 | tail -5
```

Expected: build finishes without error (grouping pass reads files but doesn't yet change
output). Reading each file twice is acceptable for a local build.

- [ ] **Step 4: Commit**

```bash
git add preprocess.mjs && git commit -m "feat(spa): group quesiti by gara stem (grouping pass + atomFrag map)"
```

---

### Task 2: Skip per-quesito pages + repoint quesiti.json hrefs

**Files:**
- Modify: `preprocess.mjs` main loop (~lines 303–362)

**Interfaces:**
- Consumes: `gareAtoms`, `atomFrag` (Task 1).
- Produces: no per-quesito `.md` written for atoms or gara-index parents; `quesiti[]` entries
  carry `href = atomFrag.get(oldHref) ?? oldHref` (fragment form).

- [ ] **Step 1: Add the skip guard** at the top of the main loop body, right after
`if (String(data.secondary) === "true") continue`:

```js
    // SPA: quesito atoms and gara-index parents-with-atoms are emitted by the container
    // pass below (one reader page per gara) -- skip their classic per-file page.
    let skipQuesitoPage = false
    if (rel.split(path.sep)[0] === "Quesiti") {
      const slug = slugFromRel(loRel(rel))
      if (path.basename(rel, ".md").includes("__") || gareAtoms.has(slug)) skipQuesitoPage = true
    }
```

- [ ] **Step 2: Guard the page write** — replace the unconditional write block (~lines 338–341):

```js
    const dest = path.join(CONTENT, loRel(rel))
    await fs.mkdir(path.dirname(dest), { recursive: true })
    await fs.writeFile(dest, matter.stringify(newContent, data))
    written++
```

with:

```js
    if (!skipQuesitoPage) {
      const dest = path.join(CONTENT, loRel(rel))
      await fs.mkdir(path.dirname(dest), { recursive: true })
      await fs.writeFile(dest, matter.stringify(newContent, data))
      written++
    }
```

- [ ] **Step 3: Repoint the quesito href** — in the `if (data.tipo === "quesito")` push block
(~line 342), replace `const href = slugFromRel(loRel(rel))` with:

```js
      const oldHref = slugFromRel(loRel(rel))
      const href = atomFrag.get(oldHref) ?? oldHref
```

(the `kwIndex[href]` and `quesiti.push({ href, … })` below now use the fragment href unchanged).

- [ ] **Step 4: Run preprocess, verify per-quesito pages are gone and hrefs are fragments**:

```bash
cd garaMate-pages && node --max-old-space-size=13312 preprocess.mjs 2>&1 | tail -3
node -e "const q=require('./quartz/static/quesiti.json'); console.log('n=',q.length, 'sample href=', q[0].href, 'hasFrag=', q.filter(x=>x.href.includes('#')).length)"
```

Expected: `hasFrag` ≈ total quesiti count; sample href contains `#q…`. (Per-quesito `.md`
files no longer emitted — verified in Task 3 once the container replaces them.)

- [ ] **Step 5: Commit**

```bash
git add preprocess.mjs && git commit -m "feat(spa): skip per-quesito pages, repoint quesiti.json hrefs to #qNN fragments"
```

---

### Task 3: Container-emission pass — one reader page per gara

**Files:**
- Modify: `preprocess.mjs` (insert after the main loop, before `STATIC_JSON` write ~line 363)

**Interfaces:**
- Consumes: `gareAtoms`, `gareParents`, `siblings` (bilingual map), `transform`, `esc`,
  `loRel`, `parseFrontmatter`.
- Produces: `content/Quesiti/<stem>.md` per gara, each = `<div class="atom-reader"
  data-gara="<stem>">` + per-atom `<span class="atom-split" id="qNN" data-atom …>` blocks
  (with qlang blocks folded in for bilingual atoms).

- [ ] **Step 1: Insert the container pass**:

```js
  // --- SPA: emit one reader page per gara stem ---
  // Each page concatenates every quesito's transformed body behind an inline atom-split
  // marker; atomRouter.inline.ts partitions on those markers client-side. Bilingual atoms
  // keep their qlang-switch/qlang-split blocks inside the atom blob (qlang.inline.ts owns
  // them; atomRouter carries the blob opaquely and re-pokes qlang after each swap).
  let gareEmitted = 0
  for (const [stemSlug, atoms] of gareAtoms) {
    const parentRel = gareParents.get(stemSlug)
    const pdata = parentRel
      ? parseFrontmatter(await fs.readFile(path.join(VAULT, parentRel), "utf8")).data
      : {}
    const blocks = []
    for (const a of atoms) {
      const { data: adata, content: acontent } = parseFrontmatter(
        await fs.readFile(path.join(VAULT, a.rel), "utf8"),
      )
      let body = transform(acontent)
      // bilingual merge: identical shape to the main-loop block at ~lines 326-337
      const sib = siblings.get(path.basename(a.rel, ".md").toLowerCase())
      if (sib) {
        const origin = adata.lang || "it"
        body =
          `<div class="qlang-switch" data-default="${origin}"></div>\n\n` +
          body +
          `\n\n<span class="qlang-split" data-lang="${sib.lang}"></span>\n\n` +
          sib.body
      }
      const atomTitle = adata.quesito ? `Quesito ${adata.quesito}` : a.atomId.toUpperCase()
      const atags = [].concat(adata.topics || [], adata.methods || [], adata.skills || [])
      blocks.push(
        `\n\n<span class="atom-split" id="${a.atomId}" data-atom="${a.atomId}" ` +
          `data-title="${esc(atomTitle)}" data-tags="${esc(atags.join(","))}"></span>\n\n` +
          body.trim(),
      )
    }
    const data = {
      title: pdata.title || stemSlug,
      tipo: "gara",
      competition: pdata.competition ?? "",
      family: pdata.family ?? "",
      year: pdata.year ?? "",
      level: pdata.level ?? "",
    }
    const dest = path.join(CONTENT, parentRel ? loRel(parentRel) : `${stemSlug}.md`)
    await fs.mkdir(path.dirname(dest), { recursive: true })
    await fs.writeFile(
      dest,
      matter.stringify(`<div class="atom-reader" data-gara="${esc(stemSlug)}"></div>\n\n` + blocks.join("\n\n"), data),
    )
    gareEmitted++
  }
  console.log(`SPA: emitted ${gareEmitted} gara reader pages`)
```

- [ ] **Step 2: Run preprocess, verify container pages replace per-quesito pages**:

```bash
cd garaMate-pages && node --max-old-space-size=13312 preprocess.mjs 2>&1 | tail -4
echo "Quesiti/*.md files:"; ls content/Quesiti | grep -c '\.md$'
echo "atoms with __ (should be 0):"; ls content/Quesiti | grep -c '__q'
echo "atom-reader mounts:"; grep -rl 'class="atom-reader"' content/Quesiti | wc -l
```

Expected: `Quesiti/*.md` ≈ 2064; `__q` files = 0; atom-reader mounts ≈ 2064.

- [ ] **Step 3: Verify a sample container has markers + a fragment target resolves**:

```bash
cd garaMate-pages && f=$(grep -rl 'class="atom-reader"' content/Quesiti | head -1); echo "$f"; grep -c 'atom-split' "$f"
```

Expected: file printed; `atom-split` count = number of quesiti in that gara (≥1).

- [ ] **Step 4: Commit**

```bash
git add preprocess.mjs && git commit -m "feat(spa): emit one atom-reader container page per gara"
```

---

### Task 4: Port `atomRouter.inline.ts`

**Files:**
- Create: `quartz/components/scripts/atomRouter.inline.ts`
- Reference: `../OlimpiadiFisica/site-fisica/quartz/components/scripts/atomRouter.inline.ts`

**Interfaces:**
- Consumes: pages carrying `<div class="atom-reader">` with `.atom-split` markers (Task 3);
  `window.addCleanup` (spa.inline.ts); `CustomEventMap["atomrender"]` (Task 6).
- Produces: dispatches `atomrender` after each atom swap; toggles `body.reading-page`.

- [ ] **Step 1: Copy the physics file verbatim** to
`quartz/components/scripts/atomRouter.inline.ts`. It is domain-neutral except the mount's
`data-` attribute name.

- [ ] **Step 2: Apply the one adaptation** — the mount attribute is `data-gara` here (physics
uses `data-prova`). The script reads the mount via `document.querySelectorAll("div.atom-reader")`
and never reads `data-prova`/`data-gara` itself (it's metadata only), so **no code change is
required** — confirm by grepping:

```bash
cd garaMate-pages && grep -n 'data-prova\|data-gara\|dataset.prova\|dataset.gara' quartz/components/scripts/atomRouter.inline.ts
```

Expected: no matches (the script keys off `.atom-split`, not the mount's data attr). If a match
exists, rename `prova`→`gara`.

- [ ] **Step 3: Type-check**:

```bash
cd garaMate-pages && npx tsc --noEmit 2>&1 | grep -i atomRouter || echo "atomRouter: no type errors"
```

Expected: `no type errors` (after Task 6 adds the `atomrender` event type; if run before Task
6, a single `atomrender` CustomEventMap error is expected and fixed there).

- [ ] **Step 4: Commit**

```bash
git add quartz/components/scripts/atomRouter.inline.ts && git commit -m "feat(spa): add atomRouter client SPA engine (ported from physics)"
```

---

### Task 5: Register atomRouter + confirm qlang re-binds on `atomrender`

**Files:**
- Modify: `quartz/plugins/emitters/componentResources.ts` (~lines 8–16 imports, ~line 277 push)
- Modify (if needed): `quartz/components/scripts/qlang.inline.ts`
- Reference: `../OlimpiadiFisica/site-fisica/quartz/components/scripts/qlang.inline.ts`

**Interfaces:**
- Consumes: `atomRouterScript`.
- Produces: atomRouter runs after qlang on every page; qlang re-scans the visible atom when
  `atomrender` fires.

- [ ] **Step 1: Add the import** next to the other inline-script imports (~line 16):

```ts
// @ts-ignore
import atomRouterScript from "../../components/scripts/atomRouter.inline"
```

- [ ] **Step 2: Push it after qlang** — after the `componentResources.afterDOMLoaded.push(qlangScript)`
line (~277), add:

```ts
  componentResources.afterDOMLoaded.push(atomRouterScript)
```

(Order matters: atomRouter fires `atomrender` on first render; qlang must already be registered.)

- [ ] **Step 3: Verify math qlang handles `atomrender`** — diff against physics:

```bash
diff <(grep -n 'atomrender\|qlangReady\|addEventListener' garaMate-pages/quartz/components/scripts/qlang.inline.ts) \
     <(grep -n 'atomrender\|qlangReady\|addEventListener' ../OlimpiadiFisica/site-fisica/quartz/components/scripts/qlang.inline.ts)
```

Expected: if math's qlang lacks an `atomrender` listener that physics has, port the
`document.addEventListener("atomrender", …)` re-scan handler and the `qlangReady` reset logic
from physics into math's qlang (mirror physics exactly). If math already listens for
`atomrender`, no change.

- [ ] **Step 4: Commit**

```bash
git add quartz/plugins/emitters/componentResources.ts quartz/components/scripts/qlang.inline.ts && \
git commit -m "feat(spa): register atomRouter after qlang; qlang re-binds on atomrender"
```

---

### Task 6: Declare the `atomrender` custom event type

**Files:**
- Modify: the file declaring `CustomEventMap` (find it — Quartz declares it in a `.d.ts` or
  `spa.inline.ts` global augmentation).

**Interfaces:**
- Produces: `CustomEventMap["atomrender"]` type so `atomRouter.inline.ts` type-checks.

- [ ] **Step 1: Locate the declaration**:

```bash
cd garaMate-pages && grep -rn 'interface CustomEventMap' quartz
```

- [ ] **Step 2: Add the event** to that interface, alongside the existing `nav` entry:

```ts
  atomrender: CustomEvent<{}>
```

- [ ] **Step 3: Type-check the whole project**:

```bash
cd garaMate-pages && npx tsc --noEmit 2>&1 | tail -20 || echo "tsc clean"
```

Expected: no `atomrender` / atomRouter errors.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat(spa): declare atomrender in CustomEventMap"
```

---

### Task 7: Reader styles (`.ar-*` / reading-page)

**Files:**
- Modify: `quartz/styles/custom.scss`
- Reference: `../OlimpiadiFisica/site-fisica/quartz/styles/custom.scss` (`.ar-*` block)

**Interfaces:**
- Consumes: DOM classes emitted by atomRouter (`ar-bar`, `ar-tocbtn`, `ar-crumb`, `ar-pager`,
  `ar-prev`, `ar-next`, `ar-shell`, `ar-toc`, `ar-toc-list`, `ar-toc-link`, `ar-pane`,
  `ar-count`, `toc-open`, `body.reading-page`).

- [ ] **Step 1: Extract the physics `.ar-*` rules**:

```bash
cd garaMate-pages && grep -n '\.ar-\|reading-page\|toc-open' ../OlimpiadiFisica/site-fisica/quartz/styles/custom.scss | head -40
```

- [ ] **Step 2: Copy the full `.ar-*` / `reading-page` rule block** from the physics
`custom.scss` into math's `custom.scss` (append near the end, before any closing media
queries). Re-map any physics-specific color tokens to math's palette variables (cream/forest/
sage — check the `:root` block at the top of math's `custom.scss` for the exact variable names;
substitute like-for-like, e.g. accent → math's accent var).

- [ ] **Step 3: Build and eyeball the reader**:

```bash
cd garaMate-pages && npx quartz build --serve
```

Open a gara page (e.g. `/Quesiti/src_archimede_1996_biennio`). Expected: TOC rail on the left,
one quesito in the reading pane, working prev/next + hamburger, IT/EN flag toggle on bilingual
quesiti, `#qNN` in the URL updates on navigation.

- [ ] **Step 4: Commit**

```bash
git add quartz/styles/custom.scss && git commit -m "feat(spa): reader/TOC-sidebar styles (ported from physics)"
```

---

### Task 8: Stub the heavy gara folder index

**Files:**
- Modify: `shrink_build.mjs`
- Reference: `../OlimpiadiFisica/site-fisica/shrink_build.mjs` (prove/index stub)

**Interfaces:**
- Consumes: built `public/Quesiti/index.html` (Quartz FolderPage listing 2064 entries).
- Produces: a tiny redirect stub → `/cerca`.

- [ ] **Step 1: Confirm the folder index is heavy after a build**:

```bash
cd garaMate-pages && ls -la public/Quesiti/index.html 2>/dev/null && grep -c '<a ' public/Quesiti/index.html
```

Expected: a large file with ~2064 links. (Confirm the exact folder-name case in `public/`.)

- [ ] **Step 2: Add a stub step** in `shrink_build.mjs` mirroring the physics `prove/index`
replacement, targeting `public/Quesiti/index.html`:

```js
// Replace the heavy gara folder listing (2064 rows) with a tiny redirect to /cerca.
{
  const idx = path.join(PUBLIC, "Quesiti", "index.html")
  try {
    await fs.writeFile(
      idx,
      `<!doctype html><meta charset="utf-8"><title>Quesiti</title>` +
        `<meta http-equiv="refresh" content="0; url=/cerca">` +
        `<link rel="canonical" href="/cerca"><a href="/cerca">Vai alla ricerca</a>`,
    )
  } catch {}
}
```

(Match `shrink_build.mjs`'s existing `PUBLIC`/`fs`/`path` bindings — adapt names if they differ.)

- [ ] **Step 3: Rebuild + run shrink, verify the stub**:

```bash
cd garaMate-pages && npx quartz build && node shrink_build.mjs && wc -c public/Quesiti/index.html
```

Expected: `public/Quesiti/index.html` is now a few hundred bytes.

- [ ] **Step 4: Commit**

```bash
git add shrink_build.mjs && git commit -m "feat(spa): stub heavy gara folder index -> /cerca redirect"
```

---

### Task 9: Full verification gate (SP1 done)

**Files:** none (verification only)

- [ ] **Step 1: Clean build from the vault**:

```bash
cd garaMate-pages && node --max-old-space-size=13312 preprocess.mjs && \
NODE_OPTIONS=--max-old-space-size=13312 npx quartz build && \
node concept_cooccurrence.mjs && node shrink_build.mjs
```

Expected: all steps succeed.

- [ ] **Step 2: File-count gate** (headroom for SP2):

```bash
cd garaMate-pages && find public -type f | wc -l
```

Expected: well under 20000 (~6–7k).

- [ ] **Step 3: No dangling per-quesito hrefs** — every `#qNN` fragment target exists in some
container:

```bash
cd garaMate-pages && node -e "
const q=require('./quartz/static/quesiti.json');
const bad=q.filter(x=>!x.href.includes('#'));
console.log('quesiti without fragment href:', bad.length);
"
```

Expected: `0` (all quesiti addressed as fragments).

- [ ] **Step 4: Concept-note qtables + /cerca deep-link correctly** — serve and click through:

```bash
cd garaMate-pages && npx quartz build --serve
```

Manually: on a Topic page, a qtable row link goes to `/Quesiti/<stem>#qNN` and lands on that
quesito in the reader; `/cerca` results do the same; browser back/forward + arrow keys navigate
atoms; KaTeX renders in the reading pane after an atom swap.

- [ ] **Step 5 (conditional): repoint stray in-body wikilinks.** If any page links directly to a
now-collapsed quesito slug, repoint it. Detect:

```bash
cd garaMate-pages && grep -rlE 'href="[^"]*Quesiti/[a-z0-9_-]+__q[0-9]' public | head
```

Expected: no matches. If matches exist, add an `atomFrag` rewrite inside `transform()` (or a
post-pass over emitted bodies) mapping old atom slugs → fragment hrefs, then rebuild. Commit as
`fix(spa): repoint in-body links to collapsed quesiti`.

- [ ] **Step 6: Update CLAUDE.md** — note the SPA model (one reader page per gara, `#qNN`
fragments, atomRouter) so the vault-conventions section stays accurate. Commit.

---

## Self-Review notes

- **Spec coverage:** grouping+container (SP1 §Preprocess) → Tasks 1–3; qlang (Q1=B, already
  built) → preserved in Task 3 + verified Task 5; atomFrag repoint → Tasks 1–2 + Task 9 Step 5;
  atomRouter + TOC sidebar → Tasks 4–7; shrink stub → Task 8; file-count budget → Task 9.
- **Deviation from spec:** containers emit under `Quesiti/<stem>` (the gara index note's own
  slug), NOT a new `gare/` folder — this keeps every gara URL unchanged and is strictly better
  for "UX unaltered." Spec to be annotated.
- **Open items:** exact `CustomEventMap` file (Task 6 Step 1 locates it); whether math qlang
  already listens for `atomrender` (Task 5 Step 3 diffs it); presence of in-body quesito
  wikilinks (Task 9 Step 5, conditional).
- SP2 (Cloudflare migration) is a separate plan, written after this plan is executed and the
  Task 9 gate passes.
