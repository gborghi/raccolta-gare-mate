// Post-build (LAST step of the GitHub Pages build): write public/mirror-manifest.json
// = sha256 + size of every published file. The Cloudflare mirror job downloads the
// GitHub Pages site file-by-file from this list and verifies each hash, so Cloudflare
// serves exactly the bytes GitHub serves (GitHub = reference, Cloudflare = mirror).
import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"

const PUB = process.env.QUARTZ_OUT || process.env.RGF_PUBLIC || "public"
const NAME = "mirror-manifest.json"
const files = {}
;(function walk(d, rel) {
  for (const e of fs.readdirSync(d, { withFileTypes: true }).sort((a, b) => (a.name < b.name ? -1 : 1))) {
    const p = path.join(d, e.name), r = rel ? rel + "/" + e.name : e.name
    if (e.isDirectory()) walk(p, r)
    else if (r !== NAME) {
      const buf = fs.readFileSync(p)
      files[r] = [buf.length, crypto.createHash("sha256").update(buf).digest("hex")]
    }
  }
})(PUB, "")
const sha = process.env.GITHUB_SHA || ""
fs.writeFileSync(path.join(PUB, NAME), JSON.stringify({ version: 1, source_sha: sha, files }))
console.log(`[mirror-manifest] ${Object.keys(files).length} files`)
