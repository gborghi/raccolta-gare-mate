// Inject one Flexsearch entry per quesito (Quesiti/<gara>#qNN) into
// contentIndex.json + contentIndexMobile.json, same idea as site-fisica
// scripts/make-search-index.mjs.
//
// Native Quartz index has ONE row per gara page after the SPA collapse.
// /cerca already uses quesiti.json; the magnifying-glass search does not
// unless we merge the atoms here.
//
// Run AFTER shrink_build.mjs (which truncates native gara snippets).
import fs from "node:fs"
import path from "node:path"

const PUB = process.env.QUARTZ_OUT || "public"
const DESKTOP = path.join(PUB, "static", "contentIndex.json")
const MOBILE = path.join(PUB, "static", "contentIndexMobile.json")
const QUESITI = path.join(PUB, "static", "quesiti.json")
const KW = path.join(PUB, "static", "quesiti_kw.json")
const DESKTOP_BUDGET = 15_000_000
const MOBILE_BUDGET = 8_000_000

function loadJson(p) {
  if (!fs.existsSync(p)) throw new Error(`missing ${p}`)
  return JSON.parse(fs.readFileSync(p, "utf8"))
}

function unwrap(raw) {
  return raw.content && !raw.content.slug ? raw.content : raw
}

function atomOf(q, kwMap, withKw) {
  const href = q.href || ""
  const hash = href.indexOf("#")
  const slug = hash >= 0 ? href.slice(0, hash) : href
  const frag = hash >= 0 ? href.slice(hash + 1) : ""
  const tags = [...(q.topics || []), ...(q.methods || []), ...(q.skills || [])]
  const title = [q.competition, q.quesito != null ? `Q${q.quesito}` : ""]
    .filter(Boolean)
    .join(" · ")
  let content = (q.summary || "").trim()
  if (withKw) {
    const bag = kwMap[href] || ""
    if (bag) content = (content + " " + bag).trim()
  }
  return {
    slug,
    frag,
    title,
    tags,
    content,
  }
}

function mergeWrite(native, atoms, dest, budget, label) {
  const merged = { ...native, ...atoms }
  let str = JSON.stringify(merged)
  let size = Buffer.byteLength(str)
  if (size > budget) {
    throw new Error(`${label}: ${size} bytes exceeds budget ${budget}`)
  }
  fs.writeFileSync(dest, str)
  console.log(
    `${label}: ${(size / 1e6).toFixed(2)} MB  native=${Object.keys(native).length} atoms=${Object.keys(atoms).length} total=${Object.keys(merged).length}`,
  )
}

const native = unwrap(loadJson(DESKTOP))
const kept = {}
for (const [k, v] of Object.entries(native)) {
  if (k.includes("#")) continue
  kept[k] = v
}
const quesiti = loadJson(QUESITI)
const kwMap = fs.existsSync(KW) ? loadJson(KW) : {}

function buildAtoms(withKw, contentCap) {
  const out = {}
  for (const q of quesiti) {
    if (!q?.href || !q.href.includes("#")) continue
    const a = atomOf(q, kwMap, withKw)
    if (contentCap && a.content.length > contentCap) a.content = a.content.slice(0, contentCap)
    out[q.href] = a
  }
  return out
}

let atoms = buildAtoms(true, 0)
let trial = JSON.stringify({ ...kept, ...atoms })
if (Buffer.byteLength(trial) > DESKTOP_BUDGET) {
  atoms = buildAtoms(true, 220)
  trial = JSON.stringify({ ...kept, ...atoms })
}
if (Buffer.byteLength(trial) > DESKTOP_BUDGET) {
  atoms = buildAtoms(false, 180)
}
mergeWrite(kept, atoms, DESKTOP, DESKTOP_BUDGET, "desktop index")

const mobileNative = {}
for (const [k, v] of Object.entries(kept)) {
  mobileNative[k] = {
    slug: v.slug ?? k,
    title: v.title,
    tags: v.tags || [],
    content: typeof v.content === "string" ? v.content.slice(0, 120) : "",
  }
}
const mobileAtoms = {}
for (const [k, v] of Object.entries(atoms)) {
  mobileAtoms[k] = {
    slug: v.slug,
    frag: v.frag,
    title: v.title,
    tags: v.tags,
    content: v.content || "",
  }
}
function capAtoms(src, n) {
  const out = {}
  for (const [k, v] of Object.entries(src)) {
    out[k] = { ...v, content: (v.content || "").slice(0, n) }
  }
  return out
}
let wrote = false
for (const cap of [200, 160, 120, 80]) {
  try {
    mergeWrite(mobileNative, capAtoms(mobileAtoms, cap), MOBILE, MOBILE_BUDGET, `mobile index (cap ${cap})`)
    wrote = true
    break
  } catch {
    /* try a shorter cap */
  }
}
if (!wrote) throw new Error("mobile index: could not fit budget")
