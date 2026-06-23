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

async function main() {
  await fs.rm(CONTENT, { recursive: true, force: true })
  await fs.mkdir(CONTENT, { recursive: true })
  const files = await walk(VAULT)
  const quesiti = []
  let written = 0
  for (const rel of files) {
    const raw = await fs.readFile(path.join(VAULT, rel), "utf8")
    const { data, content } = parseFrontmatter(raw)
    const newContent = transform(content)
    const dest = path.join(CONTENT, rel)
    await fs.mkdir(path.dirname(dest), { recursive: true })
    await fs.writeFile(dest, matter.stringify(newContent, data))
    written++
    if (data.tipo === "quesito") {
      quesiti.push({
        href: slugFromRel(rel),
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
