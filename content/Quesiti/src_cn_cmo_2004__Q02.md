---
title: China Mathematical Olympiad 2004 — Quesito 2
tipo: quesito
quesito_id: quesito_src_cn_cmo_2004__Q02
parent: src_cn_cmo_2004
competition: China Mathematical Olympiad 2004
family: cmo
year: '2004'
level: China Mathematical Olympiad
country: Cina
modalita: individuale
quesito: '2'
summary: Sequence with floor-function recurrence; find closed form in terms of n and c
qa_score: '2'
answer: >-
  x_n = \frac{c-1}{6}(n+1)(n+2)+1 \text{ for } c\equiv1\pmod3; \
  x_n=\frac{c-2}{6}(n+1)(n+2)+n+1 \text{ for } c\equiv2\pmod3; \
  x_n=\frac{c-3}{6}(n+1)(n+2)+\left\lfloor\frac{(n+2)^2}{4}\right\rfloor+1
  \text{ for } c\equiv0\pmod3
topics:
  - topic_algebra
  - topic_aritmetica
methods:
  - method_ricorsione
  - method_induzione
  - method_casework
skills:
  - skill_manipolazione_algebrica
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/cina
  - comp/cmo
  - anno/2004
  - livello/China-Mathematical-Olympiad
  - topic/algebra
  - topic/aritmetica
  - gara/individuale
  - qa/da-verificare
---

*Sequence with floor-function recurrence; find closed form in terms of n and c*

> Let $c$ be a positive integer, and a number sequence $x_1, x_2, \ldots$ satisfy $x_1 = c$ and
> $$x_n = x_{n-1} + \left\lfloor \frac{2(x_{n-1} - 1)}{n} \right\rfloor + 1, \quad n = 2, 3, \ldots,$$
> where $\lfloor x \rfloor$ denotes the largest integer not greater than $x$. Determine the expression of $x_n$ in terms of $n$ and $c$. (posed by Huang Yumin)

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]], [[method_casework|Casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** $x_n = \frac{c-1}{6}(n+1)(n+2)+1 \text{ for } c\equiv1\pmod3; \ x_n=\frac{c-2}{6}(n+1)(n+2)+n+1 \text{ for } c\equiv2\pmod3; \ x_n=\frac{c-3}{6}(n+1)(n+2)+\left\lfloor\frac{(n+2)^2}{4}\right\rfloor+1 \text{ for } c\equiv0\pmod3$
**Fonte:** apri libro PDF

> [!warning] Estratto da verificare con la fonte.
