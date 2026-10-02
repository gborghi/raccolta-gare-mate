// Cloudflare Pages step. GitHub Pages is the reference: in CI (or with
// CF_MIRROR=1) public/ is REPLACED by a byte-exact copy of the live GitHub Pages
// site (scripts/mirror-from-github.mjs, verified against mirror-manifest.json), then
// only the Cloudflare config file _headers is added. CF_MIRROR=0 keeps the old
// behaviour (deploy the local build as is) for emergencies.
import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"

const PUB = "public"
const mirror = process.env.CF_MIRROR ? process.env.CF_MIRROR === "1" : !!process.env.CI
if (mirror) {
  execFileSync(process.execPath, ["scripts/mirror-from-github.mjs"], {
    stdio: "inherit",
    env: { ...process.env, MIRROR_SOURCE: process.env.MIRROR_SOURCE || "https://gborghi.github.io/raccolta-gare-mate/",
      MIRROR_EXPECT_REPO: process.env.MIRROR_EXPECT_REPO ?? "gborghi/raccolta-gare-mate" },
  })
  // sitemap/robots/RSS advertise the Cloudflare base URL on Cloudflare (all else byte-identical)
  execFileSync(process.execPath, ["scripts/host-urls.mjs"], { stdio: "inherit", env: { ...process.env, HOST: "cloudflare" } })
}
const EXTS = ["js", "css", "woff2", "svg", "png", "jpg", "jpeg", "webp", "avif"]
const headers = [
  "/*",
  "  X-Content-Type-Options: nosniff",
  "  Referrer-Policy: strict-origin-when-cross-origin",
  "  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://gc.zgo.at; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net data:; img-src 'self' data: blob:; connect-src 'self' https://cdn.jsdelivr.net https://gc.zgo.at; frame-src https://drive.google.com https://docs.google.com; object-src 'none'; base-uri 'self'",
  ...EXTS.map((e) => `/*.${e}\n  Cache-Control: public, max-age=604800, immutable`),
].join("\n")
fs.writeFileSync(path.join(PUB, "_headers"), headers + "\n")
if (!mirror) {
  fs.writeFileSync(path.join(PUB, "robots.txt"), "User-agent: *\nAllow: /\n\nSitemap: https://raccolta-gare-mate.pages.dev/sitemap.xml\n")
  fs.writeFileSync(path.join(PUB, ".nojekyll"), "")
}
console.log(`[emit-cf-files] ${mirror ? "mirrored GitHub Pages + " : ""}_headers written`)
