// Bilingual siblings: a quesito with several translation siblings (__en.md AND __it.md)
// must keep ALL of them -- one qlang-split block per language, deterministic order
// (it, en, then others alphabetically), same-lang-as-original skipped, duplicate lang
// deduped (newest mtime wins). Runs preprocess.mjs against a tiny synthetic vault in a
// temp dir (PREPROCESS_VAULT / PREPROCESS_OUT), never touching the committed content/.
import { test } from "node:test"
import assert from "node:assert/strict"
import { execFileSync } from "node:child_process"
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, utimesSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")

function note(fm, body) {
  return (
    "---\n" +
    Object.entries(fm)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n") +
    "\n---\n" +
    body
  )
}

test("preprocess merges every translation sibling into qlang-split blocks", () => {
  const tmp = mkdtempSync(path.join(tmpdir(), "gm-siblings-"))
  try {
    const vault = path.join(tmp, "vault")
    const out = path.join(tmp, "out")
    const Q = path.join(vault, "Quesiti")
    mkdirSync(Q, { recursive: true })
    const w = (name, fm, body) => writeFileSync(path.join(Q, name), note(fm, body))
    w("src_test_2020.md", { title: "Test 2020", tipo: "gara" }, "Gara di prova\n")
    // Q01: original fr, siblings __en and __it -> both kept, it before en
    w("src_test_2020__Q01.md", { tipo: "quesito", quesito: "1", lang: "fr" }, "TESTO_Q01_FR\n")
    w(
      "src_test_2020__Q01__en.md",
      { secondary: "true", translation_of: "src_test_2020__Q01", lang: "en" },
      "TESTO_Q01_EN\n",
    )
    w(
      "src_test_2020__Q01__it.md",
      { secondary: "true", translation_of: "src_test_2020__Q01", lang: "it" },
      "TESTO_Q01_IT\n",
    )
    // Q02: original it, only __en
    w("src_test_2020__Q02.md", { tipo: "quesito", quesito: "2", lang: "it" }, "TESTO_Q02_IT\n")
    w(
      "src_test_2020__Q02__en.md",
      { secondary: "true", translation_of: "src_test_2020__Q02", lang: "en" },
      "TESTO_Q02_EN\n",
    )
    // Q03: original en; an en sibling (same lang -> skipped), a de sibling, and two it
    // siblings (duplicate -> newest by mtime kept)
    w("src_test_2020__Q03.md", { tipo: "quesito", quesito: "3", lang: "en" }, "TESTO_Q03_EN\n")
    w(
      "src_test_2020__Q03__en.md",
      { secondary: "true", translation_of: "src_test_2020__Q03", lang: "en" },
      "TESTO_Q03_EN_SIB\n",
    )
    w(
      "src_test_2020__Q03__de.md",
      { secondary: "true", translation_of: "src_test_2020__Q03", lang: "de" },
      "TESTO_Q03_DE\n",
    )
    w(
      "src_test_2020__Q03__it.md",
      { secondary: "true", translation_of: "src_test_2020__Q03", lang: "it" },
      "TESTO_Q03_IT_NEW\n",
    )
    w(
      "src_test_2020__Q03__it_old.md",
      { secondary: "true", translation_of: "src_test_2020__Q03", lang: "it" },
      "TESTO_Q03_IT_OLD\n",
    )
    utimesSync(
      path.join(Q, "src_test_2020__Q03__it_old.md"),
      new Date(2020, 0, 1),
      new Date(2020, 0, 1),
    )

    const log = execFileSync(process.execPath, ["preprocess.mjs"], {
      cwd: REPO,
      env: { ...process.env, PREPROCESS_VAULT: vault, PREPROCESS_OUT: out },
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    })
    assert.match(log, /merged 5 translation siblings into 3 quesiti/)
    assert.match(log, /1 same-lang, 1 duplicate-lang/)

    const page = readFileSync(path.join(out, "content", "Quesiti", "src_test_2020.md"), "utf8")
    const atoms = Object.fromEntries(
      page
        .split(/<span class="atom-split" id="/)
        .slice(1)
        .map((s) => [s.slice(0, 3), s]),
    )
    const order = (s, needles) => needles.map((n) => s.indexOf(n))
    const ascending = (a) => a.every((x, i) => x >= 0 && (i === 0 || x > a[i - 1]))

    // Q01: switch(default=fr) + fr body, then it block, then en block
    const q1 = atoms.q01
    assert.ok(q1.includes('<div class="qlang-switch" data-default="fr"></div>'))
    const q1o = order(q1, [
      "qlang-switch",
      "TESTO_Q01_FR",
      '<div class="qlang-split" data-lang="it"></div>',
      "TESTO_Q01_IT",
      '<div class="qlang-split" data-lang="en"></div>',
      "TESTO_Q01_EN",
    ])
    assert.ok(ascending(q1o), "Q01 order: " + q1o)
    assert.equal(q1.match(/qlang-split/g).length, 2)

    // Q02: single en block
    const q2 = atoms.q02
    assert.ok(q2.includes('<div class="qlang-switch" data-default="it"></div>'))
    assert.ok(
      ascending(
        order(q2, [
          "TESTO_Q02_IT",
          '<div class="qlang-split" data-lang="en"></div>',
          "TESTO_Q02_EN",
        ]),
      ),
    )
    assert.equal(q2.match(/qlang-split/g).length, 1)

    // Q03: en sibling skipped, it (newest) before de
    const q3 = atoms.q03
    assert.ok(q3.includes('<div class="qlang-switch" data-default="en"></div>'))
    assert.ok(!q3.includes("TESTO_Q03_EN_SIB") && !q3.includes('data-lang="en"'))
    assert.ok(!q3.includes("TESTO_Q03_IT_OLD"))
    assert.ok(
      ascending(
        order(q3, [
          "TESTO_Q03_EN",
          '<div class="qlang-split" data-lang="it"></div>',
          "TESTO_Q03_IT_NEW",
          '<div class="qlang-split" data-lang="de"></div>',
          "TESTO_Q03_DE",
        ]),
      ),
    )
  } finally {
    rmSync(tmp, { recursive: true, force: true })
  }
})
