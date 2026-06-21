---
tipo: quesito
quesito_id: quesito_src_cgen_2023__Q01
parent: src_cgen_2023
competition: Concours Général des Lycées 2023 — Matematica
family: concours_generale
year: '2023'
level: Concours Général
country: Francia
modalita: individuale
quesito: '1'
summary: >-
  A recursively defined sequence built from the function r(n) (largest k with
  n/k integer); show its terms are positive rationals and that every positive
  rational appears exactly once.
qa_score: '2'
topics:
  - topic_aritmetica
  - topic_insiemi_funzioni
methods:
  - method_induzione
  - method_ricorsione
  - method_fattorizzazione
  - method_bigezione
skills:
  - skill_manipolazione_algebrica
  - skill_lettura_attenta
  - skill_riconoscimento_pattern
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2023
  - livello/Concours-Général
  - topic/aritmetica
  - topic/insiemi_funzioni
  - gara/individuale
  - qa/da-verificare
---

# Concours Général des Lycées 2023 — Matematica — Quesito 1

*A recursively defined sequence built from the function r(n) (largest k with n/k integer); show its terms are positive rationals and that every positive rational appears exactly once.*

> Problem 1: Let us be rational.
> 
> For every integer $n \ge 1$, let $r(n)$ denote the largest integer $k$ such that $\frac{n}{k}$ is an integer (so $r(n) = n$). One defines a sequence $(u_n)_{n \ge 1}$ by: $u_1 = 1$ and, for every integer $n \ge 2$,
> $$u_n = \begin{cases} 0 & \text{if } u_{n-1} = 0, \\ 1 + 2\,r(n) - \dfrac{1}{u_{n-1}} & \text{if } u_{n-1} \ne 0. \end{cases}$$
> 
> 1. Give the values of $u_1$, $u_2$, $u_3$, $u_4$ and $u_5$.
> 
> 2. Show that for every integer $n \ge 1$, one has $r(n) = 0$ if and only if $n$ is odd, and (if $n$ is even) $r(n) = r\!\left(\frac{n}{2}\right) + 1$.
> 
> 3. Determine the smallest values of $n$ for which $u_n = 4$.
> 
> 4. Show that, for every integer $n \ge 1$ for which $u_n \ne 0$, the term $u_n$ is a strictly positive rational number.
> 
> 5. Show that every strictly positive rational number is equal to some term $u_n$ of the sequence.
> 
> 6. Show that every strictly positive rational number is equal to a unique term $u_n$ of the sequence.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]], [[method_fattorizzazione|Fattorizzazione]], [[method_bigezione|Biiezione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
