// Repair link/image defects in content/ (run at the end of preprocess.mjs, and once on
// the committed content). Same content -> same pages on GitHub Pages and on the
// Cloudflare mirror. Idempotent.
//  1. per-quesito wikilinks [[src_<gara>__Q07]] point at atom pages that no longer
//     exist since quesiti were merged into one page per gara -> [[Quesiti/src_<gara>#q07]]
//     (the gara page has <span id="q07">), visible text unchanged.
//  2. figure files with upper-case letters (src_obm_1998_n1_f1__Q08.png): Quartz
//     lower-cases wikilink targets, so these never resolved on the (case-sensitive)
//     hosts -> files renamed to lower case and embeds rewritten to match.
//  3. "Fonte" links to local PDFs (not published) -> Google Drive viewer via
//     pdf_drive_map.json (the mechanism preprocess.mjs already uses).
//  4. wikilinks to concept notes that do not exist -> plain text (alias kept).
//  5. absolute links to the Cloudflare host -> relative (GitHub is the reference).
import { readdirSync, readFileSync, writeFileSync, renameSync, existsSync, statSync } from "node:fs"
import path from "node:path"

const ROOT = process.env.GM_ROOT || "."
const CONTENT = process.env.GM_CONTENT || path.join(ROOT, "content") // preprocess passes its output dir
const ATT = path.join(CONTENT, "_attachments")
const DRIVE = JSON.parse(readFileSync(path.join(ROOT, "pdf_drive_map.json"), "utf8").replace(/^\uFEFF/, ""))
const stats = {}
const bump = (k, n = 1) => (stats[k] = (stats[k] || 0) + n)

// 2a. lower-case attachment file names
const attNames = new Set()
if (existsSync(ATT)) {
  for (const f of readdirSync(ATT)) {
    const lc = f.toLowerCase()
    if (lc !== f) {
      if (existsSync(path.join(ATT, lc)) && lc !== f) { console.warn("[fix] collision, kept", f); attNames.add(f); continue }
      renameSync(path.join(ATT, f), path.join(ATT, lc)); bump("attachment-renamed")
    }
    attNames.add(lc)
  }
}
const md = []
;(function walk(d, rel) {
  for (const e of readdirSync(d)) {
    const p = path.join(d, e), r = rel ? rel + "/" + e : e
    if (statSync(p).isDirectory()) { if (e !== "_attachments") walk(p, r) } else if (e.endsWith(".md")) md.push(r)
  }
})(CONTENT, "")
const pages = new Set(md.map((r) => r.replace(/\.md$/, "")))
const pageBase = new Set([...pages].map((p) => p.split("/").pop().toLowerCase()))
const garaIds = new Map()  // "Quesiti/src_x" -> Set(atom ids)
const idsOf = (g) => {
  if (!garaIds.has(g)) {
    const f = path.join(CONTENT, g + ".md")
    const s = existsSync(f) ? readFileSync(f, "utf8") : ""
    garaIds.set(g, new Set([...s.matchAll(/<span class="atom-split" id="([^"]+)"/g)].map((m) => m[1])))
  }
  return garaIds.get(g)
}
const normPdf = (p) => decodeURI(p).replace(/\\/g, "/").replace(/#.*$/, "").replace(/^<\s*|\s*>$/g, "").replace(/^(?:\.\.\/)+/, "").replace(/^\.\//, "").trim()

for (const rel of md) {
  const fp = path.join(CONTENT, rel)
  const src = readFileSync(fp, "utf8")
  let out = src
  // 1. atom links
  out = out.replace(/(?<!!)\[\[(src_[^\]|#]+?)__([A-Za-z]+\d+[^\]|#]*)(#[^\]|]*)?(\|[^\]]*)?\]\]/g, (full, stem, atom, _h, alias) => {
    const g = "Quesiti/" + stem
    const id = atom.toLowerCase()
    if (!pages.has(g) || !idsOf(g).has(id)) return full
    bump("atom-link")
    return `[[${g}#${id}${alias || "|" + stem + "__" + atom}]]`
  })
  // 2b. embeds -> lower-case file names
  out = out.replace(/!\[\[([^\]|#]+?\.(?:png|jpe?g|gif|svg|webp))((?:\|[^\]]*)?)\]\]/gi, (full, t, rest) => {
    const base = t.split("/").pop()
    if (base === base.toLowerCase() || !attNames.has(base.toLowerCase())) return full
    bump("embed-lowercased")
    return `![[${t.slice(0, t.length - base.length)}${base.toLowerCase()}${rest}]]`
  })
  // 3. local PDF links -> Drive
  out = out.replace(/\[([^\]]*)\]\((<[^>]*\.pdf[^>]*>|[^)\s]*\.pdf(?:#[^)\s]*)?)\)/gi, (full, label, target) => {
    if (/^<?https?:/i.test(target)) return full
    const key = normPdf(target)
    const id = DRIVE[key]
    const page = (target.match(/#page=(\d+)/) || [])[1]
    if (!id) { bump("pdf-unmapped-plain"); return label }
    bump("pdf-drive")
    return `[${label}](https://drive.google.com/file/d/${id}/view)`
  })
  // 4. dangling concept wikilinks (topic_/method_/skill_) -> plain text
  out = out.replace(/(?<!!)\[\[((?:topic|method|skill)_[a-z0-9_]+)(\|([^\]]*))?\]\]/g, (full, t, _a, alias) => {
    if (pageBase.has(t.toLowerCase())) return full
    bump("dangling-concept")
    return alias || t
  })
  // 5. absolute Cloudflare links in content -> relative to the site root
  if (rel === "index.md") out = out.replace(/href="https:\/\/raccolta-gare-mate\.pages\.dev\/([^"]*)"/g, (m, p) => { bump("abs-cf-link"); return `href="${p}"` })
  if (out !== src) writeFileSync(fp, out)
}
console.log("[fix-content-links]", JSON.stringify(stats))
