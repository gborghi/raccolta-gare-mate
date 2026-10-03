// Post-build (shrink_build.mjs, before searchMeta and the mirror manifest): keep the URLs
// of vanished gara pages working. quartz/static/redirects.json "pages" maps a gara
// that no longer exists to its successor (e.g. a Kangourou individual final whose
// problems were moved to a new team-final gara). For each one this writes
// public/<Quesiti dir>/<old>.html: the same page the alias-redirects plugin emits
// (canonical + noindex + meta refresh), plus one inline script that carries the
// #qNN fragment over -- mapped through "atoms" when the problem got a new id --
// because a meta refresh drops the fragment. Atoms moved out of a gara that still
// exists are handled client-side by atomRouter.inline.ts with the same file.
// Fails the build if a successor page is missing; never overwrites a real page.
import fs from "node:fs"
import path from "node:path"

const PUB = process.env.QUARTZ_OUT || process.env.RGF_PUBLIC || "public"
const MAP = path.join(PUB, "static", "redirects.json")
if (!fs.existsSync(MAP)) {
  console.log("[redirects] no static/redirects.json, skipped")
} else {
  const { pages = {}, atoms = {} } = JSON.parse(fs.readFileSync(MAP, "utf8"))
  // gara pages live in public/Quesiti (fix-link-case) -- accept either casing
  const dir = ["Quesiti", "quesiti"].map((d) => path.join(PUB, d)).find((d) => fs.existsSync(d))
  if (!dir && Object.keys(pages).length) throw new Error("[redirects] no Quesiti/ folder in " + PUB)
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")
  let n = 0
  for (const [oldStem, newStem] of Object.entries(pages)) {
    const target = path.join(dir, newStem + ".html")
    if (!fs.existsSync(target)) throw new Error(`[redirects] ${oldStem} -> ${newStem}: successor page missing`)
    const out = path.join(dir, oldStem + ".html")
    if (fs.existsSync(out) && !fs.readFileSync(out, "utf8").includes("data-gara-redirect"))
      throw new Error(`[redirects] ${oldStem}.html is a real page, refusing to overwrite`)
    const map = JSON.stringify(atoms[oldStem] || {})
    const html = `<!DOCTYPE html>
<html lang="it">
<head>
<title>${esc(newStem)}</title>
<link rel="canonical" href="${esc(newStem)}">
<meta name="robots" content="noindex">
<meta charset="utf-8">
<script data-gara-redirect>(function(){var m=${map},h=decodeURIComponent(location.hash.slice(1));location.replace(m[h]||(${JSON.stringify(newStem)}+location.hash))})()</script>
<meta http-equiv="refresh" content="0; url=${esc(newStem)}">
</head>
<body><p>Questa gara è stata spostata: <a href="${esc(newStem)}">${esc(newStem)}</a>.</p></body>
</html>
`
    fs.writeFileSync(out, html)
    n++
  }
  console.log(`[redirects] ${n} redirect pages`)
}
