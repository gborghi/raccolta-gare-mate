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

# 2b. Boolean search (AND/OR/NOT, -parola, "frase", parentesi): patch the search fork and
#     recompile its dist/. Idempotent; re-run after EVERY plugin restore, BEFORE the build.
#     CI: .github/workflows/deploy.yml needs the same step right after
#     "Restore Quartz plugins" (run: node scripts/patch-search-boolean.mjs). Since Cloudflare
#     mirrors GitHub Pages, that step is what puts the boolean search on BOTH hosts.
node scripts/patch-search-boolean.mjs
# Ricerca v2 (metadati + sinonimi), nessun passo CI extra:
#  - campo:valore (nazione:Japan, anno:2019, gara:..., argomento:...) e parole nude che
#    cercano anche nei metadati: static/searchMeta.json, generato da
#    scripts/make-search-meta.mjs (chiamato da shrink_build.mjs) da static/quesiti.json.
#  - sinonimi multilingua: quartz/static/sinonimi.json (committato). Per aggiornarlo dal
#    dizionario di lavoro: node scripts/sync-sinonimi.mjs   (poi commit)
#  - vale anche per le caselle di ricerca nelle pagine (elenchi di concetti/aree/argomenti,
#    /cerca): quartz/components/scripts/searchBoolean.ts (test: searchBoolean.test.ts)

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

## Lingue dei quesiti

Convenzione (già in uso; modello: `content/prove/cuadernillo_2019.md`, atomo `q02`, nella raccolta di fisica; stessa struttura nei `content/Quesiti/` di mate).
Obiettivo: ogni quesito in **lingua originale + italiano + inglese**, tutto **nello stesso file**, dentro lo stesso
atomo (niente file separati per lingua, niente campi nel frontmatter):

```markdown
<span class="atom-split" id="q02" data-atom="q02" ...></span>
<div class="qlang-switch" data-default="es"></div>      <!-- data-default = codice della lingua ORIGINALE -->

**Titolo originale**
Testo originale ...

**Topic:** [[...]]
**Metodi:** ... / **Competenze:** ... / **Objects:** ...
**Fonte:** [Testo (PDF) — p.116](https://drive.google.com/file/d/.../view)

<div class="qlang-split" data-lang="it"></div>          <!-- div vuoto, poi la versione italiana -->

**Titolo in italiano**
Testo in italiano ...

<div class="qlang-split" data-lang="en"></div>          <!-- div vuoto, poi la versione inglese -->

**Title in English**
Text in English ...
```

- Se l'originale è già italiano o inglese, quel blocco `qlang-split` si omette (l'originale fa da versione in quella lingua).
- Figure, Topic/Fonte e link restano nel blocco originale; nelle traduzioni si ripetono solo le figure citate nel testo.
- Le traduzioni arrivano come PR di contenuto (branch `kepler/traduzioni-gare-N`) e passano dalla stessa build unica:
  tutti i blocchi `qlang` stanno nella stessa pagina, quindi la ricerca full-text di Quartz (inclusa quella booleana)
  e l'indice per quesito li indicizzano tutti; lo switch lingua è solo lato client e non cambia i file pubblicati,
  quindi GitHub Pages e il mirror Cloudflare restano identici byte per byte.

## Immagini e limiti Cloudflare (20.000 file / 25 MiB per file)

Cloudflare deve essere identico a GitHub Pages: nessuna immagine può essere esclusa o trasformata in link.
Stato al 2026-10-02: nessun file supera i limiti (fisica ~2,7k file, mate ~5,4k, file max ~11 MB), quindi tutte
le figure sono servite così:
- **fisica**: `<img>` verso `https://gborghi.github.io/olifis-assets/_attachments/...` (stesso URL assoluto su
  entrambi gli host; `build-pages.sh` sincronizza in add-only anche `content/prove/_attachments`);
  figure TikZ → SVG inline nella pagina (`scripts/inline-tikz.mjs`).
- **mate**: file nel sito (`_attachments/`), copiati byte per byte sul mirror tramite `mirror-manifest.json`.
- Elenco per figura: `/workspace/gare-align/figure-methods.csv` (riepilogo `figure-methods.md`).

Se in futuro una figura superasse i limiti, deve restare un `<img>` identico, in quest'ordine di preferenza:
1. **jsDelivr** dal repo pubblico, fissato a un commit/tag: `https://cdn.jsdelivr.net/gh/gborghi/<repo>@<commit>/<path>`
   (max 50 MB/file); va aggiunto `https://cdn.jsdelivr.net` a `img-src` in `_headers` (emit-cf-files).
2. **Google Drive** (cartella `olimpiadifisica`, sottocartella dedicata, condivisione pubblica):
   `https://lh3.googleusercontent.com/d/<ID>` o `https://drive.google.com/thumbnail?id=<ID>&sz=w2000`
   (non `uc?export=view`); aggiungere il dominio a `img-src`.
3. Cloudflare R2 solo come ultima scelta.
Annotare qui ogni figura che usa uno di questi meccanismi.
