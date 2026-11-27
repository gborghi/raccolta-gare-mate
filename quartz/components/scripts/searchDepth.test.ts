import { describe, test } from "node:test"
import assert from "node:assert/strict"
import {
  parseBooleanQuery,
  hayMatchesQuery,
  fieldsMatchQuery,
  mergeTier,
  clampStop,
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
