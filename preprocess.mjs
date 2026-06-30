// Preprocess the Obsidian "Knowledge Graph" vault into Quartz content.
// - copies notes into ./content
// - replaces dataview code blocks with <div class="qtable" ...> placeholders
// - strips links to local PDFs (we don't publish the competition PDFs)
// - emits ./quartz/static/quesiti.json consumed by the client table renderer
import { promises as fs, readFileSync } from "node:fs"
import path from "node:path"
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

const VAULT = "E:/giovanni/Dropbox/insegnamento/Wiligelmo/OlimpiadiMatematica/raccoltaGareMate/Knowledge Graph"
const ROOT = path.resolve(".")
const CONTENT = path.join(ROOT, "content")
const STATIC_JSON = path.join(ROOT, "quartz", "static", "quesiti.json")
const KW_JSON = path.join(ROOT, "quartz", "static", "quesiti_kw.json")

// --- Hidden full-text keyword index --------------------------------------------
// For each quesito we extract the meaningful words of its statement (and any
// solution) so the table search can offer a "search full content" mode without
// shipping whole notes. Stopwords (it/en/pt/fr) + domain boilerplate are removed;
// the result is a deduped, space-joined keyword string per note href. Never shown.
const STOPWORDS = new Set((
  // Italian
  "ad ai al alla alle allo agli anche ancora avere aveva avevano che chi ci coi col come con cosa cui da dai dal dalla dalle dallo degli dei del della delle dello di dove due ecco ed era erano essere fa fare fino fra gli ha hai hanno ho il in io la le lei li lo loro ma me mentre mi mia mie miei mio ne negli nei nel nella nelle nello no noi non nostra nostre nostri nostro o od ogni ognuno oppure per perche perché piu più po poi puo può qual quale quali quando quanta quante quanti quanto quasi quel quella quelle quelli quello questa queste questi questo qui se sei senza si sia siamo siete solo sono sopra sotto sta stata state stati stato su sua sue sui sul sulla sulle sullo suo suoi tra tre tu tua tue tuo tuoi tutta tutte tutti tutto un una uno vi voi " +
  // English
  "a об an and are as at be been but by can did do does each for from had has have he her here him his how i if in into is it its no not of on one or our so that the their them then there these they this to too two up was we were what when where which who will with you your " +
  // Portuguese / French common
  "as os um uma para com que dos das nao não por mais como ou se da de do em no na os un une le la les des du dans et est il elle pour qui que pas sur au aux ce " +
  // domain boilerplate that appears in every note
  "apri pdf fonte sorgente risposta topic area abilita abilità metodo metodi skill quesito problema gara testo soluzione soluzioni pag pagina prove prova"
).split(/\s+/).filter(Boolean))

function keywords(content) {
  // keep only the statement: drop the metadata footer (Topic/Area/Risposta/Fonte…)
  const body = content.split(/\n\*\*(?:Topic|Area|Abilit|Risposta|Fonte|Metod|Skill)/)[0]
  const cleaned = body
    .replace(/\[\[[^\]]*\]\]/g, " ")          // wikilinks
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")      // md links
    .replace(/[`*_>#|]/g, " ")                  // md syntax
    .toLowerCase()
    .replace(/[^a-zà-ÿ\s]/g, " ")               // letters only (drop digits/punct/symbols)
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
  content = content.replace(/\[([^\]]*)\]\(<([^>]*?\.pdf)(?:#[^>]*)?>\)/gi, (_m, a, p) => driveLink(a, p))
  // plain form: [alias](../../file.pdf#page=N) — no spaces
  content = content.replace(/\[([^\]]*)\]\(\s*([^)\s]*?\.pdf)(?:#[^)\s]*)?\s*\)/gi, (_m, a, p) => driveLink(a, p))
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
const decorSanitize = (s) => s.replace(/[^A-Za-z0-9_-]+/g, "-")
let decorSet = new Set()

async function main() {
  await fs.rm(CONTENT, { recursive: true, force: true })
  await fs.mkdir(CONTENT, { recursive: true })
  try { decorSet = new Set(await fs.readdir(DECOR_DIR)) } catch { decorSet = new Set() }
  const files = await walk(VAULT)
  const quesiti = []
  const kwIndex = {}
  let written = 0
  let decorated = 0
  for (const rel of files) {
    const raw = await fs.readFile(path.join(VAULT, rel), "utf8")
    const { data, content } = parseFrontmatter(raw)
    let newContent = transform(content)
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
  console.log(`keyword index: ${Object.keys(kwIndex).length} notes, ${(JSON.stringify(kwIndex).length / 1e6).toFixed(1)}MB`)

  // copy attachments so ![[img]] embeds render on the published site too
  try {
    await fs.cp(path.join(VAULT, "_attachments"), path.join(CONTENT, "_attachments"), { recursive: true })
  } catch (e) {
    console.log("attachments copy skipped:", e.message)
  }

  // Homepage
  const home = `---
title: Raccolta Gare di Matematica
---

Archivio di **${quesiti.length}** quesiti da gare di matematica (Giochi di Archimede, Kangourou e altre), con testo, risposta e classificazione per argomento, metodo e abilità.

## Esplora

- [[Algebra e Analisi]] · [[Aritmetica e Teoria dei Numeri]] · [[Combinatoria, Logica e Probabilita]] · [[Geometria]] — le quattro macro-aree
- **Argomenti**: vedi la cartella *Topics*
- **Metodi risolutivi**: vedi la cartella *Methods*
- **Abilità**: vedi la cartella *Skills*

Usa la **[ricerca per più tag](cerca)** per filtrare i quesiti combinando gara, anno, livello, argomento, metodo e abilità. Oppure usa la ricerca testuale (in alto) o il grafo per navigare. Ogni elenco di quesiti è una tabella ordinabile e filtrabile.
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

  console.log(`copied ${written} notes, indexed ${quesiti.length} quesiti`)
  if (missingPdf.size) {
    console.log(`WARN: ${missingPdf.size} PDF links had no Drive mapping (kept as plain text):`)
    for (const p of [...missingPdf].sort().slice(0, 40)) console.log("  -", p)
  } else {
    console.log("all PDF links resolved to Drive")
  }
}
main()
