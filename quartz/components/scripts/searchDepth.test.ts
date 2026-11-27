import { describe, test } from "node:test"
import assert from "node:assert/strict"
import {
  parseBooleanQuery,
  hayMatchesQuery,
  fieldsMatchQuery,
  mergeTier,
  clampStop,
  defaultTiers,
  normalizeTiers,
  parseStoredTiers,
  mergeDesiredTiers,
  formatBytes,
  mergeSelectedEntries,
  MOBILE_MAX_TIER,
  type Entry,
  type Doc,
} from "./searchDepth"

describe("parseBooleanQuery", () => {
  test("bare words follow defaultOp AND as one clause", () => {
    const q = parseBooleanQuery("triangolo isoscele", "and")
    assert.equal(q.explicit, false)
    assert.equal(q.clauses.length, 1)
    assert.deepEqual(q.clauses[0].terms.map((t) => t.v), ["triangolo", "isoscele"])
  })
  test("lowercase and/or are ordinary words", () => {
    const q = parseBooleanQuery("sea and shore", "and")
    assert.equal(q.explicit, false)
    assert.deepEqual(q.clauses[0].terms.map((t) => t.v), ["sea", "and", "shore"])
  })
  test("uppercase AND/OR and quoted exact terms", () => {
    const q = parseBooleanQuery('"frase esatta" AND (foo OR bar)')
    assert.equal(q.explicit, true)
    assert.ok(q.clauses.length >= 1)
    assert.ok(q.clauses.some((c) => c.terms.some((t) => t.exact && t.v === "frase esatta")))
  })
})

describe("hayMatchesQuery", () => {
  const hay = "Dimostrare che esiste un unico triangolo isoscele. Prove that there is a unique isosceles triangle."
  test("Italian and English words both match", () => {
    assert.equal(hayMatchesQuery(hay, "triangolo", "and"), true)
    assert.equal(hayMatchesQuery(hay, "isosceles", "and"), true)
    assert.equal(hayMatchesQuery(hay, "pentagono", "and"), false)
  })
  test("AND requires every term", () => {
    assert.equal(hayMatchesQuery(hay, "triangolo AND unico", "and"), true)
    assert.equal(hayMatchesQuery(hay, "triangolo AND pentagono", "and"), false)
  })
})

describe("fieldsMatchQuery / mergeTier / clampStop", () => {
  test("fieldsMatchQuery joins fields", () => {
    assert.equal(fieldsMatchQuery(["IMO 1968", "Quesito 1"], "1968", "and"), true)
  })
  test("mergeTier replaces content of existing slugs", () => {
    const store = new Map<string, Doc>()
    const a: Entry[] = [{ s: "Quesiti/x#q01", t: "Q1", c: "short", g: ["topic_a"] }]
    mergeTier(store, a)
    mergeTier(store, [{ s: "Quesiti/x#q01", c: "short longer" }])
    assert.equal(store.get("Quesiti/x#q01")?.content, "short longer")
    assert.equal(store.get("Quesiti/x#q01")?.title, "Q1")
  })
  test("clampStop caps mobile at 1, desktop at 3", () => {
    assert.equal(clampStop(3, true), 1)
    assert.equal(clampStop(3, false), 3)
    assert.equal(clampStop(-2, false), 0)
  })
})

describe("normalizeTiers / storage", () => {
  test("default is 0+1+2 on desktop and mobile", () => {
    assert.deepEqual(defaultTiers(false), [0, 1, 2])
    assert.deepEqual(defaultTiers(true), [0, 1, 2])
    assert.equal(MOBILE_MAX_TIER, 2)
  })
  test("desktop accepts any combination, sorted and unique", () => {
    assert.deepEqual(normalizeTiers([3, 0, 3, 2], false), [0, 2, 3])
    assert.deepEqual(normalizeTiers([1], false), [1])
  })
  test("mobile drops t3 and falls back to default if nothing remains", () => {
    assert.deepEqual(normalizeTiers([0, 1, 2, 3], true), [0, 1, 2])
    assert.deepEqual(normalizeTiers([3], true), [0, 1, 2])
    assert.deepEqual(normalizeTiers([2], true), [2])
  })
  test("invalid or empty input uses the default", () => {
    assert.deepEqual(normalizeTiers(null, false), [0, 1, 2])
    assert.deepEqual(normalizeTiers("nope", false), [0, 1, 2])
    assert.deepEqual(normalizeTiers([], false), [0, 1, 2])
    assert.deepEqual(parseStoredTiers(null, false), [0, 1, 2])
    assert.deepEqual(parseStoredTiers("[0,3]", false), [0, 3])
    assert.deepEqual(parseStoredTiers("[0,3]", true), [0])
    assert.deepEqual(parseStoredTiers("not-json", true), [0, 1, 2])
  })
  test("saving from a phone keeps a previously chosen t3", () => {
    assert.deepEqual(mergeDesiredTiers([0, 2], [0, 1, 2, 3], true), [0, 2, 3])
    assert.deepEqual(mergeDesiredTiers([0, 3], [0, 3], false), [0, 3])
  })
})

describe("formatBytes", () => {
  test("Italian decimal megabytes", () => {
    assert.equal(formatBytes(2018781), "2,0 MB")
    assert.equal(formatBytes(23573127), "23,6 MB")
    assert.equal(formatBytes(8500), "8,5 kB")
    assert.equal(formatBytes(80), "80 B")
  })
})

describe("mergeSelectedEntries", () => {
  const t0: Entry[] = [{ s: "p", t: "Page", g: ["tag"], c: "short" }]
  const t1: Entry[] = [{ s: "p", t: "Page", g: ["tag"], c: "short longer" }]
  const t2: Entry[] = [{ s: "p#q01", t: "Q1", g: ["it"], c: "enunciato IT EN FR" }]
  const t3: Entry[] = [
    { s: "p", t: "Page", g: ["tag"], c: "full page text" },
    { s: "p#q01", t: "Q1", g: ["it"], c: "full atom text" },
  ]
  test("later tiers replace content of the same slug; union otherwise", () => {
    const only0 = mergeSelectedEntries([{ id: 0, entries: t0 }])
    assert.equal(only0.length, 1)
    assert.equal(only0[0].content, "short")
    const mid = mergeSelectedEntries([
      { id: 0, entries: t0 },
      { id: 2, entries: t2 },
    ])
    assert.equal(mid.length, 2)
    assert.equal(mid.find((d) => d.id === "p")?.content, "short")
    assert.equal(mid.find((d) => d.id === "p#q01")?.content, "enunciato IT EN FR")
    const max = mergeSelectedEntries([
      { id: 0, entries: t0 },
      { id: 1, entries: t1 },
      { id: 2, entries: t2 },
      { id: 3, entries: t3 },
    ])
    assert.equal(max.find((d) => d.id === "p")?.content, "full page text")
    assert.equal(max.find((d) => d.id === "p#q01")?.content, "full atom text")
  })
  test("order of the input list does not matter", () => {
    const a = mergeSelectedEntries([
      { id: 3, entries: t3 },
      { id: 0, entries: t0 },
    ])
    assert.equal(a.find((d) => d.id === "p")?.content, "full page text")
  })
  test("no duplicate slugs", () => {
    const docs = mergeSelectedEntries([
      { id: 0, entries: t0 },
      { id: 1, entries: t1 },
    ])
    assert.equal(docs.length, 1)
  })
})
