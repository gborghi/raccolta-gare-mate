---
title: China Southeastern Mathematical Olympiad 2021 — Quesito 4
tipo: quesito
quesito_id: quesito_src_cn_csmo_2021__Q04
parent: src_cn_csmo_2021
competition: China Southeastern Mathematical Olympiad 2021
family: csmo
year: '2021'
level: China Southeastern Mathematical Olympiad
country: Cina
modalita: individuale
quesito: '4'
summary: >-
  Permutations on circle with descending-chain deletion; find average number of
  chains
qa_score: '4'
topics:
  - topic_combinatoria
methods:
  - method_conteggio
  - method_induzione
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_riconoscimento_pattern
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/cina
  - comp/csmo
  - anno/2021
  - livello/China-Southeastern-Mathematical-Olympiad
  - topic/combinatoria
  - gara/individuale
---

*Permutations on circle with descending-chain deletion; find average number of chains*

> There are $n \ge 5$ points, labeled $1, 2, \ldots, n$, arbitrarily arranged on a circle. We call such an arrangement a permutation $S$. For a permutation $S$, a "descending chain" is a clockwise sequence of consecutive points (at least two) with descending labels that is not a sub-chain of any longer such sequence; the "pivot" of a descending chain is the point with the largest label, and all other points are "non-pivots". For example, the clockwise permutation $5, 2, 4, 1, 3$ contains two descending chains $5, 2$ and $4, 1$, where $5, 4$ are pivots and $2, 1$ are non-pivots. Apply the following operations on $S$: first, find all descending chains of $S$ and delete all non-pivots; then, if more than one point remains, repeat finding descending chains and deleting non-pivots, and so on, until no descending chain remains. Let $G(S)$ be the total number of descending chains that appeared in the whole process, and let $A(n)$ be the average of $G(S)$ over all permutations $S$ of $1, 2, \ldots, n$.
> (1) Find $A(5)$.
> (2) For $n \ge 6$, prove that $\frac{83}{120} + \frac{n-1}{2} \le A(n) \le \frac{101}{120} + \frac{n-1}{2}$.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_induzione|Induzione]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)
