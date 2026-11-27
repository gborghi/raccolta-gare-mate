// Build the pre-compression contentIndex: one entry per gara/concept page and one
// atom per quesito (`Quesiti/<gara>#qNN`). Every language block inside the atom
// (qlang-split) goes into `content`, not only the mother-language summary.
// Tags (topics/methods/skills) and aggregator pages (Topics, Methods, Skills,
// Clusters) are entries too, with title + body words.
//
// Run BEFORE compress-search-index.mjs. compress projects the desktop file and
// writes data/search-full-index.json; make-mobile-index and build-search-shards
// consume that master. Do not truncate here.
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

const PUB = process.env.QUARTZ_OUT || "public"
const CONTENT = process.env.CONTENT_DIR || "content"
const DESKTOP = path.join(PUB, "static", "contentIndex.json")

export function slugOf(rel) {
  const noExt = rel.replace(/\\/g, "/").replace(/\.md$/i, "")
  const parts = noExt.split("/")
  const file = parts.pop() || ""
  const slugFile = file.normalize("NFC").trim().replace(/\s+/g, "-").toLowerCase()
  return [...parts, slugFile].join("/")
}

export function textOf(md) {
  return String(md || "")
    .replace(/^---[\s\S]*?\n---\s*/, "")
    .replace(/<span class="atom-split"[^>]*>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2 $1")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#>*_`]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function frontmatter(md) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(md)
  if (!m) return {}
  const out = {}
  let key = null
  let list = null
  for (const line of m[1].split(/\r?\n/)) {
    const lm = /^([A-Za-z0-9_]+):\s*(.*)$/.exec(line)
    if (lm && !/^\s/.test(line)) {
      if (key && list) out[key] = list
      key = lm[1]
      list = null
      let v = lm[2].trim()
      if (v.startsWith("[") && v.endsWith("]")) {
        out[key] = v
          .slice(1, -1)
          .split(",")
          .map((s) => s.trim().replace(/^["']|["']$/g, ""))
          .filter(Boolean)
        key = null
      } else if (v === "" || v === "|" || v === ">") {
        list = []
      } else {
        out[key] = v.replace(/^["']|["']$/g, "")
        key = null
      }
    } else if (key && list && /^\s*-\s+/.test(line)) {
      list.push(line.replace(/^\s*-\s+/, "").trim().replace(/^["']|["']$/g, ""))
    }
  }
  if (key && list) out[key] = list
  return out
}

function tagList(fm, attr) {
  const fromAttr = String(attr || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
  const extra = []
  for (const k of ["topics", "methods", "skills", "tags"]) {
    const v = fm[k]
    if (Array.isArray(v)) extra.push(...v)
    else if (typeof v === "string" && v) extra.push(v)
  }
  return [...new Set([...fromAttr, ...extra])]
}

export function parseGara(rel, md) {
  const fm = frontmatter(md)
  const pageSlug = slugOf(rel)
  const re = /<span class="atom-split" id="([^"]+)"([^>]*)>/g
  const marks = []
  let m
  while ((m = re.exec(md))) marks.push({ id: m[1], attrs: m[2], index: m.index, end: re.lastIndex })
  const intro = marks.length ? md.slice(0, marks[0].index) : md
  const atoms = []
  for (let i = 0; i < marks.length; i++) {
    const body = md.slice(marks[i].end, marks[i + 1]?.index ?? md.length)
    const tags = tagList(fm, /data-tags="([^"]*)"/.exec(marks[i].attrs)?.[1] || "")
    const titleAttr = /data-title="([^"]*)"/.exec(marks[i].attrs)?.[1] || marks[i].id
    const garaTitle = fm.title || fm.competition || pageSlug
    const n = marks[i].id.replace(/^q0*/, "")
    atoms.push({
      slug: `${pageSlug}#${marks[i].id}`,
      title: [garaTitle, titleAttr || `Q${n}`].filter(Boolean).join(" · "),
      tags,
      content: textOf(body),
    })
  }
  const atomTitles = atoms.map((a) => a.title).join(" ")
  const page = {
    slug: pageSlug,
    title: fm.title || fm.competition || pageSlug,
    tags: tagList(fm, ""),
    content: [textOf(intro), atomTitles].filter(Boolean).join(" "),
  }
  return { page, atoms }
}

export function parsePage(rel, md) {
  const fm = frontmatter(md)
  const slug = slugOf(rel)
  const tags = tagList(fm, "")
  if (fm.concept_id && !tags.includes(fm.concept_id)) tags.push(fm.concept_id)
  if (fm.tipo && !tags.includes(fm.tipo)) tags.push(String(fm.tipo))
  return {
    slug,
    title: fm.title || slug.split("/").pop() || slug,
    tags,
    content: textOf(md),
  }
}

export function indexFromContent(contentDir) {
  const index = {}
  const walk = (dir, relBase) => {
    for (const name of fs.readdirSync(dir)) {
      if (name.startsWith(".")) continue
      const abs = path.join(dir, name)
      const rel = relBase ? `${relBase}/${name}` : name
      const st = fs.statSync(abs)
      if (st.isDirectory()) {
        if (name === "_attachments") continue
        walk(abs, rel)
        continue
      }
      if (!name.endsWith(".md")) continue
      const md = fs.readFileSync(abs, "utf8")
      if (md.includes('class="atom-split"')) {
        const { page, atoms } = parseGara(rel, md)
        index[page.slug] = page
        for (const a of atoms) index[a.slug] = a
      } else {
        const page = parsePage(rel, md)
        index[page.slug] = page
      }
    }
  }
  walk(contentDir, "")
  return index
}

function unwrap(raw) {
  return raw && raw.content && !raw.content.slug ? raw.content : raw
}

function main() {
  if (!fs.existsSync(CONTENT)) {
    console.error(`inject-quesito-search: ${CONTENT} not found — skipping (no atoms)`)
    process.exit(0)
  }
  const built = indexFromContent(CONTENT)
  let index = {}
  if (fs.existsSync(DESKTOP)) {
    index = unwrap(JSON.parse(fs.readFileSync(DESKTOP, "utf8"))) || {}
  }
  let replaced = 0
  for (const [k, v] of Object.entries(built)) {
    const prev = index[k]
    const prevLen = prev && typeof prev.content === "string" ? prev.content.length : 0
    if (!prev || k.includes("#") || (v.content || "").length >= prevLen) {
      index[k] = {
        slug: v.slug,
        title: v.title || prev?.title || k,
        tags: v.tags?.length ? v.tags : prev?.tags || [],
        content: v.content || prev?.content || "",
        links: prev?.links || [],
      }
      replaced++
    }
  }
  fs.mkdirSync(path.dirname(DESKTOP), { recursive: true })
  fs.writeFileSync(DESKTOP, JSON.stringify(index))
  const atoms = Object.keys(index).filter((k) => k.includes("#")).length
  const concepts = Object.keys(index).filter((k) => /^(Topics|Methods|Skills|Clusters)\//.test(k)).length
  console.log(
    `inject-quesito-search: ${Object.keys(index).length} entries (atoms=${atoms} concepts=${concepts} refreshed=${replaced})`,
  )
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()
