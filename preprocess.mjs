// Preprocess the Obsidian "Knowledge Graph" vault into Quartz content.
// - copies notes into ./content
// - replaces dataview code blocks with <div class="qtable" ...> placeholders
// - strips links to local PDFs (we don't publish the competition PDFs)
// - emits ./quartz/static/quesiti.json consumed by the client table renderer
import { promises as fs, readFileSync } from "node:fs"
import path from "node:path"
import { execFile } from "node:child_process"
import matter from "gray-matter"

const NUL = String.fromCharCode(0)

// The competition PDFs are NOT published with the site (too heavy). They live on
// Google Drive (anyone-with-link). pdf_drive_map.json maps each vault-relative PDF
// path -> Drive fileId; transform() rewrites every [..](<../../path.pdf#page=N>)
// link into a Drive viewer URL. Keyed by forward-slash path from the vault root.
const PDF_DRIVE = JSON.parse(
  readFileSync(new URL("./pdf_drive_map.json", import.meta.url), "utf8").replace(/^﻿/, ""),
)
const missingPdf = new Set()

// Normalize a link target to a vault-root-relative forward-slash path (drop ../,
// ./, surrounding <>, a #fragment, and convert backslashes).
function normPdfPath(p) {
  return p
    .replace(/\\/g, "/")
    .replace(/#.*$/, "")
    .replace(/^<\s*/, "")
    .replace(/\s*>$/, "")
    .replace(/^(?:\.\.\/)+/, "")
    .replace(/^\.\//, "")
    .trim()
}
function driveLink(alias, rawPath) {
  const label = (alias && alias.trim()) || "📄 Testo (PDF)"
  const rel = normPdfPath(rawPath)
  const id = PDF_DRIVE[rel]
  if (!id) {
    missingPdf.add(rel)
    return label // keep the text, never emit a broken local link
  }
  return `[${label}](https://drive.google.com/file/d/${id}/view)`
}

// Flat-frontmatter parser. The vault's frontmatter is non-nested key: value /
// key: [a, b] pairs, but some values contain stray quotes/apostrophes/NUL bytes
// that break strict YAML. We parse leniently, then re-emit clean YAML on write.
function parseFrontmatter(raw) {
  raw = raw.split(NUL).join("")
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) return { data: {}, content: raw }
  const data = {}
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w[\w.-]*):\s?(.*)$/)
    if (!kv) continue
    const key = kv[1]
    let v = kv[2].trim()
    if (v.startsWith("[") && v.endsWith("]")) {
      data[key] = v
        .slice(1, -1)
        .split(",")
        .map((x) => x.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean)
    } else {
      if (
        (v.startsWith('"') && v.endsWith('"') && v.length > 1) ||
        (v.startsWith("'") && v.endsWith("'") && v.length > 1)
      ) {
        v = v.slice(1, -1)
      }
      data[key] = v
    }
  }
  return { data, content: m[2] }
}

const VAULT =
  "E:/giovanni/Dropbox/insegnamento/Wiligelmo/OlimpiadiMatematica/raccoltaGareMate/Knowledge Graph"
const ROOT = path.resolve(".")
const CONTENT = path.join(ROOT, "content")
const STATIC_JSON = path.join(ROOT, "quartz", "static", "quesiti.json")
const KW_JSON = path.join(ROOT, "quartz", "static", "quesiti_kw.json")

// Re-stamp content/ as Dropbox-ignored (NTFS com.dropbox.ignored alternate data stream)
// after each regen — main() recreates the dir, which drops any prior flag. content/ stays
// git-tracked (git syncs it to CI); this only stops Dropbox cloud-syncing the thousands of
// generated files. Windows-only, best-effort (never fail the build).
async function markDropboxIgnored(dir) {
  // Windows: NTFS alternate data stream. macOS: xattr com.dropbox.ignored. Both are the
  // per-OS way Dropbox marks a path "ignored". Linux (CI) has no Dropbox → no-op. Never
  // throws — the flag is a nicety, not required for the build.
  try {
    if (process.platform === "win32") {
      await fs.writeFile(`${dir}:com.dropbox.ignored`, "1")
    } else if (process.platform === "darwin") {
      await new Promise((res) =>
        execFile("xattr", ["-w", "com.dropbox.ignored", "1", dir], () => res()),
      )
    }
  } catch {}
}

// Public site base (must match baseUrl in quartz.config.yaml). Used to build ABSOLUTE
// links inside raw-HTML blocks — wikilinks ([[..]]) are only resolved in markdown text,
// never inside a raw HTML block, so the area-hero chips below can't use them. The
// homepage generator further down hardcodes the same base.
const SITE = "https://gborghi.github.io/raccolta-gare-mate"
// Per-tipo eyebrow + fallback lead for the concept-page hero (Design "area" view).
const TIPO_HERO = {
  cluster: { eyebrow: "Macro-area", lead: "quesiti in questa macro-area." },
  topic: { eyebrow: "Argomento", lead: "quesiti classificati sotto questo argomento." },
  method: { eyebrow: "Metodo", lead: "quesiti risolti con questo metodo." },
  skill: { eyebrow: "Abilità", lead: "quesiti che richiedono questa abilità." },
}
// 2832 -> "2.832" (Italian thousands separator)
const itNum = (n) =>
  String(n)
    .replace(/\./g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
// ["a","b","c"] -> "a, b e c"
const joinE = (a) =>
  a.length <= 1 ? a.join("") : a.slice(0, -1).join(", ") + " e " + a[a.length - 1]

// Concept pages (Clusters/Topics/Methods/Skills) get the Claude-Design "area" hero: a
// surface card carrying eyebrow + title + a lead line with the quesito count, and — for
// clusters — chips linking each child topic. Returns { hero, tail } (tail = the untouched
// "## Quesiti" section, still markdown, transformed by the caller) or null for other notes.
function buildSectionHero(data, content) {
  const meta = TIPO_HERO[data.tipo]
  if (!meta) return null
  const title = String(data.title || "").trim()
  const qIdx = content.search(/^##\s+Quesiti\s*$/m)
  const intro = qIdx >= 0 ? content.slice(0, qIdx) : content
  const tail = qIdx >= 0 ? content.slice(qIdx) : ""
  const countM = intro.match(/\*\*\s*([\d.]+)\s*\*\*/)
  const count = countM ? itNum(countM[1]) : ""
  // cluster child topics: "- [[topic_id|Name]] — N quesiti"
  const chips = [...intro.matchAll(/^-\s*\[\[([^\]|]+)\|([^\]]+)\]\]\s*—\s*(\d[\d.]*)/gm)].map(
    (m) => ({
      id: m[1].trim(),
      name: m[2].trim(),
      n: itNum(m[3]),
    }),
  )
  const leadBody = chips.length
    ? "quesiti su " + joinE(chips.map((c) => c.name.toLowerCase())) + "."
    : meta.lead
  const lead = count ? `<p class="area-hero-lead"><strong>${count}</strong> ${leadBody}</p>` : ""
  const chipHtml = chips.length
    ? `<div class="area-hero-chips">${chips
        .map(
          (c) =>
            `<a class="area-chip" href="${SITE}/Topics/${c.id}"><span class="area-chip-name">${c.name}</span><span class="area-chip-n">${c.n}</span></a>`,
        )
        .join("")}</div>`
    : ""
  const hero = `<div class="area-hero"><div class="area-hero-eyebrow">${meta.eyebrow}</div><h1 class="area-hero-title">${title}</h1>${lead}${chipHtml}</div>`
  return { hero, tail }
}

// --- Hidden full-text keyword index --------------------------------------------
// For each quesito we extract the meaningful words of its statement (and any
// solution) so the table search can offer a "search full content" mode without
// shipping whole notes. Stopwords (it/en/pt/fr) + domain boilerplate are removed;
// the result is a deduped, space-joined keyword string per note href. Never shown.
const STOPWORDS = new Set(
  // Italian
  (
    "ad ai al alla alle allo agli anche ancora avere aveva avevano che chi ci coi col come con cosa cui da dai dal dalla dalle dallo degli dei del della delle dello di dove due ecco ed era erano essere fa fare fino fra gli ha hai hanno ho il in io la le lei li lo loro ma me mentre mi mia mie miei mio ne negli nei nel nella nelle nello no noi non nostra nostre nostri nostro o od ogni ognuno oppure per perche perché piu più po poi puo può qual quale quali quando quanta quante quanti quanto quasi quel quella quelle quelli quello questa queste questi questo qui se sei senza si sia siamo siete solo sono sopra sotto sta stata state stati stato su sua sue sui sul sulla sulle sullo suo suoi tra tre tu tua tue tuo tuoi tutta tutte tutti tutto un una uno vi voi " +
    // English
    "a об an and are as at be been but by can did do does each for from had has have he her here him his how i if in into is it its no not of on one or our so that the their them then there these they this to too two up was we were what when where which who will with you your " +
    // Portuguese / French common
    "as os um uma para com que dos das nao não por mais como ou se da de do em no na os un une le la les des du dans et est il elle pour qui que pas sur au aux ce " +
    // domain boilerplate that appears in every note
    "apri pdf fonte sorgente risposta topic area abilita abilità metodo metodi skill quesito problema gara testo soluzione soluzioni pag pagina prove prova"
  )
    .split(/\s+/)
    .filter(Boolean),
)

function keywords(content) {
  // keep only the statement: drop the metadata footer (Topic/Area/Risposta/Fonte…)
  const body = content.split(/\n\*\*(?:Topic|Area|Abilit|Risposta|Fonte|Metod|Skill)/)[0]
  const cleaned = body
    .replace(/\[\[[^\]]*\]\]/g, " ") // wikilinks
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ") // md links
    .replace(/[`*_>#|]/g, " ") // md syntax
    .toLowerCase()
    .replace(/[^a-zà-ÿ\s]/g, " ") // letters only (drop digits/punct/symbols)
  const seen = new Set()
  for (const w of cleaned.split(/\s+/)) {
    if (w.length < 3 || STOPWORDS.has(w)) continue
    seen.add(w)
  }
  return [...seen].join(" ")
}

// Replicate Quartz's slugifyFilePath (quartz/util/path.ts: sluggify)
function sluggify(s) {
  return s
    .split("/")
    .map((seg) =>
      seg
        .replace(/\s/g, "-")
        .replace(/&/g, "-and-")
        .replace(/%/g, "-percent")
        .replace(/\?/g, "")
        .replace(/#/g, ""),
    )
    .join("/")
    .replace(/\/$/, "")
}
function slugFromRel(rel) {
  const noExt = rel.replace(/\.md$/, "").split(path.sep).join("/")
  return sluggify(noExt)
}
// Lowercase only the basename (keep folder case). Quartz v5 emits each page at its
// FILE path (case-preserved) while OFM resolves wikilinks to lowercase hrefs, so the
// content filenames must be lowercase for links/graph/backlinks to resolve.
function loRel(rel) {
  return path.join(path.dirname(rel), path.basename(rel).toLowerCase())
}

// Parse dataview body -> {field, values[]} from contains(FIELD, "VAL") pairs
function parseDataview(body) {
  const m = [...body.matchAll(/contains\(\s*(\w+)\s*,\s*"([^"]+)"\s*\)/g)]
  if (!m.length) return null
  return { field: m[0][1], values: m.map((x) => x[2]) }
}

function transform(content) {
  content = content.replace(/```dataview\s*\n([\s\S]*?)```/g, (full, body) => {
    const spec = parseDataview(body)
    if (!spec) return ""
    return `<div class="qtable" data-field="${spec.field}" data-values="${spec.values.join(",")}"></div>`
  })
  // angle-bracket form: [alias](<../../some path/file.pdf#page=N>) — path may contain spaces
  content = content.replace(/\[([^\]]*)\]\(<([^>]*?\.pdf)(?:#[^>]*)?>\)/gi, (_m, a, p) =>
    driveLink(a, p),
  )
  // plain form: [alias](../../file.pdf#page=N) — no spaces
  content = content.replace(/\[([^\]]*)\]\(\s*([^)\s]*?\.pdf)(?:#[^)\s]*)?\s*\)/gi, (_m, a, p) =>
    driveLink(a, p),
  )
  // drop the now-redundant backticked source path in "Sorgente: `path.pdf` · …"
  content = content.replace(/`[^`]*\.pdf`/gi, "")
  content = content.replace(/Sorgente:\s*·\s*/g, "Sorgente: ")
  content = content.replace(/·\s*·/g, "·")
  content = content.replace(/ ·\s*$/gm, "")
  return content
}

async function walk(dir, base = dir, out = []) {
  for (const ent of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) await walk(full, base, out)
    else if (ent.name.endsWith(".md")) out.push(path.relative(base, full))
  }
  return out
}

// Decorative section illustrations (quartz/static/decor/<file>.png) are injected at
// the top of each Cluster/Topic/Method/Skill note. The decor filename is the note
// basename sanitized the same way as gen_decor.mjs.
const DECOR_DIR = path.join(ROOT, "quartz", "static", "decor")
const DECOR_FOLDERS = new Set(["Clusters", "Topics", "Methods", "Skills"])
// lowercase: crawl-links slugifies img src to lowercase, and GitHub Pages is
// case-sensitive, so the decor files (and refs) must be lowercase to match.
const decorSanitize = (s) => s.toLowerCase().replace(/[^a-z0-9_-]+/g, "-")
let decorSet = new Set()

async function main() {
  await fs.rm(CONTENT, { recursive: true, force: true })
  await fs.mkdir(CONTENT, { recursive: true })
  await markDropboxIgnored(CONTENT)
  try {
    decorSet = new Set(await fs.readdir(DECOR_DIR))
  } catch {
    decorSet = new Set()
  }
  const files = await walk(VAULT)
  const quesiti = []
  const kwIndex = {}
  let written = 0
  let decorated = 0
  let merged = 0

  // Bilingual pass 1: collect hidden translation siblings, keyed by the default
  // slug they translate. Siblings are NEVER written or indexed (skipped in the
  // main loop); their body is merged into the default page below.
  const siblings = new Map()
  for (const rel of files) {
    const raw = await fs.readFile(path.join(VAULT, rel), "utf8")
    const { data, content } = parseFrontmatter(raw)
    if (String(data.secondary) === "true" && data.translation_of) {
      siblings.set(String(data.translation_of).toLowerCase(), {
        lang: data.lang,
        body: transform(content),
      })
    }
  }

  for (const rel of files) {
    const raw = await fs.readFile(path.join(VAULT, rel), "utf8")
    const { data, content } = parseFrontmatter(raw)
    if (String(data.secondary) === "true") continue // never emit / index siblings
    // Concept pages render the design's area-hero card; everything else transforms as-is.
    const built = buildSectionHero(data, content)
    let newContent = built ? built.hero + "\n\n" + transform(built.tail) : transform(content)
    // inject decor image for section notes
    const top = rel.split(path.sep)[0]
    if (DECOR_FOLDERS.has(top)) {
      const fileName = decorSanitize(path.basename(rel, ".md")) + ".webp"
      if (decorSet.has(fileName)) {
        const slug = slugFromRel(rel)
        const prefix = "../".repeat((slug.match(/\//g) || []).length)
        newContent =
          `<img class="section-decor" src="${prefix}static/decor/${fileName}" alt="" loading="lazy">\n\n` +
          newContent
        decorated++
      }
    }
    // Bilingual merge: append the translated sibling body after a split marker, so
    // qlang.inline.ts can partition the article DOM and toggle language. Only for
    // quesito pages that actually have a translation.
    if (data.tipo === "quesito") {
      const sib = siblings.get(path.basename(rel, ".md").toLowerCase())
      if (sib) {
        const origin = data.lang || "it"
        newContent =
          `<div class="qlang-switch" data-default="${origin}"></div>\n\n` +
          newContent +
          `\n\n<span class="qlang-split" data-lang="${sib.lang}"></span>\n\n` +
          sib.body
        merged++
      }
    }
    const dest = path.join(CONTENT, loRel(rel))
    await fs.mkdir(path.dirname(dest), { recursive: true })
    await fs.writeFile(dest, matter.stringify(newContent, data))
    written++
    if (data.tipo === "quesito") {
      const href = slugFromRel(loRel(rel))
      const kw = keywords(content)
      if (kw) kwIndex[href] = kw
      quesiti.push({
        href,
        competition: data.competition ?? "",
        quesito: data.quesito ?? "",
        summary: data.summary ?? "",
        answer: data.answer ?? "",
        topics: data.topics ?? [],
        methods: data.methods ?? [],
        skills: data.skills ?? [],
        level: data.level ?? "",
        family: data.family ?? "",
        year: data.year ?? "",
        country: data.country ?? "",
        modalita: data.modalita ?? "",
      })
    }
  }
  await fs.mkdir(path.dirname(STATIC_JSON), { recursive: true })
  await fs.writeFile(STATIC_JSON, JSON.stringify(quesiti))
  await fs.writeFile(KW_JSON, JSON.stringify(kwIndex))
  console.log(
    `keyword index: ${Object.keys(kwIndex).length} notes, ${(JSON.stringify(kwIndex).length / 1e6).toFixed(1)}MB`,
  )

  // copy attachments so ![[img]] embeds render on the published site too
  try {
    await fs.cp(path.join(VAULT, "_attachments"), path.join(CONTENT, "_attachments"), {
      recursive: true,
    })
  } catch (e) {
    console.log("attachments copy skipped:", e.message)
  }

  // Homepage
  const home = `---
title: Raccolta Gare di Matematica
---

<section class="home-hero">
  <img class="home-hero-ornament" src="static/decor/hero-ornament.webp" alt="" aria-hidden="true" loading="lazy">
  <div class="home-hero-inner home-hero-grid">
    <div class="home-hero-copy">
      <div class="home-hero-eyebrow">Archivio didattico · Open · it / en</div>
      <h1 class="home-hero-title">Le gare di matematica,<br><em>coltivate</em> e catalogate.</h1>
      <p class="home-hero-lead">Un archivio vivo di <strong>17.800 quesiti</strong> — Giochi di Archimede, Kangourou, Cesenatico e gare internazionali — con testo, risposta e classificazione per argomento, metodo e abilità.</p>
      <div class="home-hero-cta">
        <a class="btn-primary" href="https://gborghi.github.io/raccolta-gare-mate/Clusters/">Esplora l'archivio</a>
        <a class="btn-ghost" href="https://gborghi.github.io/raccolta-gare-mate/cerca">Ricerca per tag →</a>
      </div>
      <div class="home-hero-stats">
        <div class="stat"><span class="stat-n">17.800</span><span class="stat-l">Quesiti</span></div>
        <div class="stat"><span class="stat-n">572</span><span class="stat-l">Gare</span></div>
        <div class="stat"><span class="stat-n">12</span><span class="stat-l">Argomenti</span></div>
      </div>
    </div>
    <div class="home-hero-media">
      <div class="home-hero-figure">
        <img src="static/decor/hero-compass.webp" alt="Emblema della geometria — compasso e figure" loading="lazy">
      </div>
      <div class="home-hero-chip">
        <div class="home-hero-chip-label">Classificato per</div>
        <div class="home-hero-chip-tags"><span>argomento</span><span>metodo</span><span>abilità</span></div>
      </div>
    </div>
  </div>
</section>

<section class="home-section">
  <div class="home-section-head">
    <div>
      <div class="eyebrow">— Le quattro macro-aree</div>
      <h2 class="home-h2">Esplora per area</h2>
    </div>
    <p class="home-section-note">Ogni quesito è ricondotto a una delle quattro aree fondamentali della matematica olimpica.</p>
  </div>
  <div class="area-grid">
    <a class="area-card" href="https://gborghi.github.io/raccolta-gare-mate/Clusters/aritmetica-e-teoria-dei-numeri">
      <span class="area-banner"><img class="area-emblem" src="static/decor/aritmetica-e-teoria-dei-numeri.webp" alt="" loading="lazy"></span>
      <span class="area-body">
        <span class="area-n">3.259</span>
        <span class="area-name">Aritmetica e Teoria dei Numeri</span>
        <span class="area-desc">Interi, divisibilità, congruenze, cifre.</span>
        <span class="area-go">apri →</span>
      </span>
    </a>
    <a class="area-card" href="https://gborghi.github.io/raccolta-gare-mate/Clusters/combinatoria,-logica-e-probabilita">
      <span class="area-banner"><img class="area-emblem" src="static/decor/combinatoria-logica-e-probabilita.webp" alt="" loading="lazy"></span>
      <span class="area-body">
        <span class="area-n">3.328</span>
        <span class="area-name">Combinatoria, Logica e Probabilità</span>
        <span class="area-desc">Conteggi, strategie, casualità.</span>
        <span class="area-go">apri →</span>
      </span>
    </a>
    <a class="area-card" href="https://gborghi.github.io/raccolta-gare-mate/Clusters/geometria">
      <span class="area-banner"><img class="area-emblem" src="static/decor/geometria.webp" alt="" loading="lazy"></span>
      <span class="area-body">
        <span class="area-n">2.832</span>
        <span class="area-name">Geometria</span>
        <span class="area-desc">Piano, spazio, analitica, trigonometria.</span>
        <span class="area-go">apri →</span>
      </span>
    </a>
    <a class="area-card" href="https://gborghi.github.io/raccolta-gare-mate/Clusters/algebra-e-analisi">
      <span class="area-banner"><img class="area-emblem" src="static/decor/algebra-e-analisi.webp" alt="" loading="lazy"></span>
      <span class="area-body">
        <span class="area-n">1.829</span>
        <span class="area-name">Algebra e Analisi</span>
        <span class="area-desc">Equazioni, funzioni, disuguaglianze.</span>
        <span class="area-go">apri →</span>
      </span>
    </a>
  </div>
</section>

<section class="home-section">
  <div class="class-lists">
    <div class="class-col">
      <div class="class-eyebrow">Argomenti · 12</div>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Topics/topic_aritmetica"><span>Aritmetica / Teoria dei Numeri</span><span class="class-n">3.295</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Topics/topic_combinatoria"><span>Combinatoria</span><span class="class-n">2.191</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Topics/topic_geometria_piana"><span>Geometria piana</span><span class="class-n">2.179</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Topics/topic_algebra"><span>Algebra</span><span class="class-n">1.504</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Topics/topic_logica"><span>Logica, giochi, strategie</span><span class="class-n">1.257</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Topics/topic_geometria_solida"><span>Geometria solida</span><span class="class-n">603</span></a>
      <a class="class-more" href="https://gborghi.github.io/raccolta-gare-mate/Topics/">Tutti gli argomenti →</a>
    </div>
    <div class="class-col">
      <div class="class-eyebrow">Metodi · 21</div>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Methods/method_conteggio"><span>Conteggio combinatorio</span><span class="class-n">1.189</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Methods/method_congruenze"><span>Congruenze</span><span class="class-n">976</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Methods/method_casework"><span>Analisi per casi</span><span class="class-n">779</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Methods/method_fattorizzazione"><span>Fattorizzazione</span><span class="class-n">570</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Methods/method_coordinate"><span>Metodo delle coordinate</span><span class="class-n">440</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Methods/method_estremalita"><span>Principio di estremalità</span><span class="class-n">424</span></a>
      <a class="class-more" href="https://gborghi.github.io/raccolta-gare-mate/Methods/">Tutti i metodi →</a>
    </div>
    <div class="class-col">
      <div class="class-eyebrow">Abilità · 9</div>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Skills/skill_ragionamento_geometrico"><span>Ragionamento geometrico</span><span class="class-n">2.275</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Skills/skill_conteggio_sistematico"><span>Conteggio sistematico</span><span class="class-n">1.436</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Skills/skill_casework_accurato"><span>Casework accurato</span><span class="class-n">1.397</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Skills/skill_manipolazione_algebrica"><span>Manipolazione algebrica</span><span class="class-n">1.367</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Skills/skill_modellizzazione"><span>Modellizzazione</span><span class="class-n">875</span></a>
      <a class="class-row" href="https://gborghi.github.io/raccolta-gare-mate/Skills/skill_riconoscimento_pattern"><span>Riconoscimento di pattern</span><span class="class-n">601</span></a>
      <a class="class-more" href="https://gborghi.github.io/raccolta-gare-mate/Skills/">Tutte le abilità →</a>
    </div>
  </div>
</section>

<section class="home-closing">
  <div class="closing-grid">
    <div class="closing-credits">
      <h2>Crediti e fonti</h2>
      <p>I testi delle prove sono proprietà dei rispettivi <strong>enti organizzatori</strong>, qui citati come fonte. Questo è un archivio <strong>didattico, senza scopo di lucro</strong>: i quesiti sono raccolti, tradotti e classificati a fini di studio. Per segnalazioni o richieste di rimozione: <a href="mailto:gio.borghi@gmail.com">gio.borghi@gmail.com</a>.</p>
      <p><strong>Italia.</strong> I <em>Giochi di Archimede</em>, la <em>Gara Nazionale</em> (Cesenatico) e la <em>Gara a Squadre</em> fanno parte del Progetto Olimpiadi della Matematica dell'<strong><a href="https://umi.dm.unibo.it/">UMI – Unione Matematica Italiana</a></strong>, per conto del Ministero dell'Istruzione e del Merito — sito delle olimpiadi: <a href="https://olimpiadi.dm.unibo.it/">olimpiadi.dm.unibo.it</a>. Il <em>Kangourou della Matematica</em> è organizzato da <strong><a href="https://www.kangourou.it/">Kangourou Italia</a></strong> (Università degli Studi di Milano), parte dell'<em>Association Kangourou Sans Frontières</em>. I <em>Giochi d'Autunno</em> e i <em>Giochi Matematici</em> sono organizzati dal <strong><a href="https://giochimatematici.unibocconi.it/">Centro PRISTEM – Università Bocconi</a></strong>.</p>
      <p><strong>Competizioni internazionali.</strong> <a href="https://www.imo-official.org/">IMO – International Mathematical Olympiad</a>.</p>
      <p><strong>Altri paesi (enti organizzatori).</strong> Brasile — <em>OBM</em>, <a href="https://www.sbm.org.br/">SBM – Sociedade Brasileira de Matemática</a> (<a href="https://www.obm.org.br/">obm.org.br</a>); Regno Unito — <em>BMO</em>, <em>Senior Mathematical Challenge</em>, <a href="https://www.ukmt.org.uk/">UKMT – United Kingdom Mathematics Trust</a>; Giappone — <em>JMO / JJMO / JGMO / EGMO selection</em>, <a href="https://www.imojp.org/">数学オリンピック財団 – Japan Mathematical Olympiad Foundation</a>; India — <em>IOQM</em> a cura della <a href="https://www.mtai.org.in/">MTA(I) – Mathematics Teachers' Association (India)</a>, <em>RMO / INMO</em> a cura di <a href="https://olympiads.hbcse.tifr.res.in/">HBCSE–TIFR</a>; Cina — <em>CMO / CMC / CWMO / CGMO / CSMO / CTST</em>, <a href="https://www.cms.org.cn/">CMS – Chinese Mathematical Society</a>; Francia — <em>Coupe Animath / TFJM² / Olympiades de Première</em>, <a href="https://www.animath.fr/">Animath</a>, e <em>Concours Général des Lycées</em>, <a href="https://www.education.gouv.fr/">Ministère de l'Éducation nationale</a>; Polonia — <em>Olimpiada Matematyczna</em>, <a href="https://om.sem.edu.pl/">Komitet Główny Olimpiady Matematycznej</a> (Stowarzyszenie na rzecz Edukacji Matematycznej, già Polskie Towarzystwo Matematyczne).</p>
      <p>Se un ente desidera una citazione diversa o la rimozione dei propri materiali, lo aggiorneremo o rimuoveremo prontamente.</p>
    </div>
    <aside class="graph-promo">
      <a class="graph-promo-thumb" href="https://gborghi.github.io/raccolta-gare-mate/Clusters/" title="Apri il grafo della conoscenza">
        <img src="static/decor/hero-graph.webp" alt="Grafo della conoscenza — una rete di nodi" loading="lazy">
      </a>
      <div class="eyebrow">— Un grafo della conoscenza</div>
      <h2>Ogni quesito, un nodo di una rete che cresce.</h2>
      <p>Argomenti, metodi e abilità collegano i quesiti fra loro. Naviga il grafo locale di ogni pagina o filtra per più tag con la <a href="https://gborghi.github.io/raccolta-gare-mate/cerca">ricerca faceted</a>.</p>
      <div class="graph-promo-points">
        <div><strong>Testo bilingue</strong> — molti quesiti in italiano e inglese.</div>
        <div><strong>Fonte tracciabile</strong> — link al PDF originale dell'ente.</div>
        <div><strong>Ricerca combinata</strong> — gara, anno, livello, argomento, metodo, abilità.</div>
      </div>
      <a class="graph-promo-link" href="https://gborghi.github.io/raccolta-gare-mate/Clusters/">Apri il grafo →</a>
    </aside>
  </div>
</section>
`
  await fs.writeFile(path.join(CONTENT, "index.md"), home)

  // Faceted multi-tag search page (rendered client-side into #cerca)
  const cerca = `---
title: Ricerca per più tag
---

Seleziona uno o più tag per filtrare i ${quesiti.length} quesiti. Usa l'interruttore **TUTTI / QUALSIASI** per richiedere tutti i tag (intersezione) o almeno uno (unione).

<div id="cerca"></div>
`
  await fs.writeFile(path.join(CONTENT, "cerca.md"), cerca)

  console.log(
    `copied ${written} notes, indexed ${quesiti.length} quesiti, merged ${merged} bilingual siblings`,
  )
  if (missingPdf.size) {
    console.log(`WARN: ${missingPdf.size} PDF links had no Drive mapping (kept as plain text):`)
    for (const p of [...missingPdf].sort().slice(0, 40)) console.log("  -", p)
  } else {
    console.log("all PDF links resolved to Drive")
  }
}
main()
