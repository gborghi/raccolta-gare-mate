---
title: Japan Junior Mathematical Olympiad 2026 — Yosen (Preliminary) — Quesito 3
tipo: quesito
quesito_id: quesito_src_jjmo24yqa_yosen__Q03
parent: src_jjmo24yqa_yosen
competition: Japan Junior Mathematical Olympiad 2026 — Yosen (Preliminary)
family: jjmo
year: '2026'
level: JJMO Yosen
country: Giappone
modalita: individuale
quesito: '3'
summary: >-
  Count 2026-digit ternary integers satisfying parity-dependent min/max
  digit-frequency conditions
qa_score: '3'
answer: '3 \cdot 2^{508}'
topics:
  - topic_combinatoria
methods:
  - method_ricorsione
  - method_conteggio
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_lettura_attenta
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/giappone
  - comp/jjmo
  - anno/2026
  - livello/JJMO-Yosen
  - topic/combinatoria
  - gara/individuale
---

*Count 2026-digit ternary integers satisfying parity-dependent min/max digit-frequency conditions*

> Consider positive integers with exactly $2026$ digits, each digit being $1$, $2$, or $3$. How many such integers satisfy the following conditions for every integer $i$ with $1 \le i \le 2025$? (Digits are counted from the least significant end, i.e., position $1$ is the units digit.)
> 
> - If $i$ is even: the digit at position $i+1$ (from the bottom) is one of the digits among $1, 2, 3$ that appears most frequently among the first $i$ digits (from the bottom).
> - If $i$ is odd: the digit at position $i+1$ (from the bottom) is one of the digits among $1, 2, 3$ that appears least frequently among the first $i$ digits (from the bottom).

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_conteggio|Conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** $3 \cdot 2^{508}$
**Fonte:** apri PDF
