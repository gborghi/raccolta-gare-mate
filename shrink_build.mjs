// Post-build: shrink heavy assets so the site is usable on low-RAM mobile.
// 1) contentIndex.json (~19MB): truncate each `content` field to a short snippet
//    (search still matches titles + lead text). `links` are KEPT because the
//    on-demand graph uses them. ~19MB -> ~9MB.
// 2) Quesiti/index.html (~15MB FolderPage listing all ~18k notes): replace with a
//    tiny redirect stub, so a stray click/breadcrumb to /Quesiti/ no longer ships
//    a 15MB document to the phone.
import { promises as fs } from "node:fs"

const PUB = "public"
const SNIPPET = 150

async function shrinkIndex() {
  const p = `${PUB}/static/contentIndex.json`
  let before, idx
  try {
    const raw = await fs.readFile(p, "utf8")
    before = raw.length
    idx = JSON.parse(raw)
  } catch (e) { console.log("contentIndex: skip -", e.message); return }
  for (const k of Object.keys(idx)) {
    if (k.includes("#")) continue
    const e = idx[k]
    if (e && typeof e === "object") {
      if (typeof e.content === "string" && e.content.length > SNIPPET) {
        e.content = e.content.slice(0, SNIPPET)
      }
    }
  }
  const out = JSON.stringify(idx)
  await fs.writeFile(p, out)
  console.log(`contentIndex.json: ${(before / 1e6).toFixed(1)}MB -> ${(out.length / 1e6).toFixed(1)}MB`)
}

async function stubFolderPage(rel, redirectTo, label) {
  const p = `${PUB}/${rel}`
  let sz = 0
  try { sz = (await fs.stat(p)).size } catch { console.log(`${rel}: not found, skip`); return }
  const html = `<!DOCTYPE html><html lang="it"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="refresh" content="0; url=${redirectTo}">
<link rel="canonical" href="${redirectTo}">
<title>${label}</title></head>
<body style="font-family:system-ui,sans-serif;padding:2rem">
<p>Elenco completo troppo grande per il browser mobile. Reindirizzamento a <a href="${redirectTo}">${label}</a>…</p>
</body></html>`
  await fs.writeFile(p, html)
  console.log(`${rel}: ${(sz / 1e6).toFixed(1)}MB -> stub redirect (${redirectTo})`)
}

async function writeMobileIndex() {
  const p = `${PUB}/static/contentIndex.json`
  let idx
  try { idx = JSON.parse(await fs.readFile(p, "utf8")) } catch (e) {
    console.log("contentIndexMobile: skip -", e.message); return
  }
  const mobile = {}
  for (const [k, e] of Object.entries(idx)) {
    if (!e || typeof e !== "object") continue
    mobile[k] = {
      slug: e.slug ?? k,
      title: e.title,
      tags: e.tags || [],
      content: typeof e.content === "string" ? e.content.slice(0, 120) : "",
    }
  }
  const out = JSON.stringify(mobile)
  await fs.writeFile(`${PUB}/static/contentIndexMobile.json`, out)
  console.log(`contentIndexMobile.json: ${(out.length / 1e6).toFixed(1)}MB (${Object.keys(mobile).length} entries)`)
}

await shrinkIndex()
await writeMobileIndex()
// from /Quesiti/index.html, "../cerca/" is the faceted search page
await stubFolderPage("Quesiti/index.html", "../cerca/", "Cerca quesiti")
// --- single published output (GitHub Pages = reference, Cloudflare = byte-exact mirror) ---
// Everything that used to run only in the Cloudflare job now runs here, so both hosts
// serve the same files. These steps are idempotent (the CF job may run them again
// before mirroring; its own build output is then discarded).
await import("./scripts/inject-quesito-search.mjs")   // per-quesito search atoms
await import("./scripts/fix-404.mjs")                 // 404.html works under /<repo>/ and /
await import("./scripts/fix-link-case.mjs")           // Quartz lower-cases path links; folders are Capitalised
await fs.writeFile(`${PUB}/robots.txt`, "User-agent: *\nAllow: /\n\nSitemap: https://raccolta-gare-mate.pages.dev/sitemap.xml\n")
await fs.writeFile(`${PUB}/.nojekyll`, "")
await import("./scripts/make-search-meta.mjs")       // static/searchMeta.json (search: metadata / campo:valore)
process.env.HOST = "github"; await import("./scripts/host-urls.mjs") // sitemap/robots/RSS -> GitHub base URL
await import("./scripts/write-mirror-manifest.mjs")   // LAST: hashes of every published file
console.log("shrink_build done")
