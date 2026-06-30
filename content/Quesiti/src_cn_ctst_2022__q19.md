---
title: China National Team Selection Test 2022 — Quesito 19
tipo: quesito
quesito_id: quesito_src_cn_ctst_2022__Q19
parent: src_cn_ctst_2022
competition: China National Team Selection Test 2022
family: ctst
year: '2022'
level: China National Team Selection Test
country: Cina
modalita: individuale
quesito: '19'
summary: >-
  n×n grid colored red/yellow/blue with cyclic update rule: non-monochromatic
  iff never monochromatic
qa_score: '3'
topics:
  - topic_combinatoria
methods:
  - method_invarianti
  - method_induzione
  - method_casework
skills:
  - skill_modellizzazione
  - skill_ragionamento_geometrico
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/cina
  - comp/ctst
  - anno/2022
  - livello/China-National-Team-Selection-Test
  - topic/combinatoria
  - gara/individuale
---

*n×n grid colored red/yellow/blue with cyclic update rule: non-monochromatic iff never monochromatic*

> Initially, each unit square of an $n \times n$ ($n \ge 2$) grid is coloured red, yellow, or blue. In each second, the colours of the unit squares simultaneously change according to the following rules:
> (1) if $A$ is red and $A$ shares a common side with a yellow square, then $A$ turns yellow;
> (2) if $B$ is yellow and $B$ shares a common side with a blue square, then $B$ turns blue;
> (3) if $C$ is blue and $C$ shares a common side with a red square, then $C$ turns red;
> (4) in all other cases, the colour does not change.
> Prove: if the grid does not become monochromatic after $2n - 2$ seconds, then it will never become monochromatic in finite time.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_induzione|Induzione]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)
