// Post-build: repair internal links whose letter case does not match the published file.
// Quartz lower-cases path-form links ([[Quesiti/x]], <a href="Clusters/y">) while the
// folders are Capitalised (Quesiti/, Clusters/, Topics/...); GitHub Pages and Cloudflare are
// case-sensitive -> 404. For every relative href/src in every HTML file: if the target does
// not exist but exactly one file matches case-insensitively, rewrite it with the real case.
import fs from "node:fs"
import path from "node:path"

const PUB = process.env.QUARTZ_OUT || "public"
const files = []
;(function walk(d, rel) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const r = rel ? rel + "/" + e.name : e.name
    if (e.isDirectory()) walk(path.join(d, e.name), r)
    else files.push(r)
  }
})(PUB, "")
const exact = new Set(files)
const lower = new Map()
for (const f of files) {
  const k = f.toLowerCase()
  lower.set(k, lower.has(k) && lower.get(k) !== f ? null : f)
}
const exists = (p) => exact.has(p) || exact.has(p + ".html") || exact.has(p + "/index.html") || (p === "" && exact.has("index.html"))
function realCase(p) {
  for (const [suffix, strip] of [["", 0], [".html", 5], ["/index.html", 11]]) {
    const hit = lower.get((p + suffix).toLowerCase())
    if (hit) return strip ? hit.slice(0, -strip) : hit
  }
  return null
}
let changed = 0, pages = 0
for (const f of files) {
  if (!f.endsWith(".html")) continue
  const dir = path.posix.dirname(f) === "." ? "" : path.posix.dirname(f)
  const src = fs.readFileSync(path.join(PUB, f), "utf8")
  const out = src.replace(/\b(href|src)="([^"#?:]*?)([#?][^"]*)?"/g, (m, attr, url, tail = "") => {
    if (!url || url.startsWith("/") || url.startsWith("data")) return m
    let dec
    try { dec = decodeURIComponent(url) } catch { return m }
    const trail = dec.endsWith("/")
    const target = path.posix.normalize(path.posix.join(dir, dec)).replace(/^\.\/?$/, "").replace(/\/$/, "")
    if (target.startsWith("..") || exists(target)) return m
    const real = realCase(target)
    if (!real) return m
    // keep the original ../ ./ prefix, replace the rest segment-wise with the real case
    const segs = url.split("/"), lead = []
    while (segs.length && (segs[0] === ".." || segs[0] === ".")) lead.push(segs.shift())
    const n = segs.filter((s) => s !== "").length
    const realSegs = real.split("/").slice(-n)
    if (realSegs.length !== n) return m
    const fixed = [...lead, ...realSegs.map(encodeURI)].join("/") + (trail ? "/" : "")
    changed++
    return `${attr}="${fixed}${tail}"`
  })
  if (out !== src) { fs.writeFileSync(path.join(PUB, f), out); pages++ }
}
console.log(`[fix-link-case] ${changed} links in ${pages} pages`)
