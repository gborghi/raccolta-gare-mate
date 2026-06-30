---
title: Japan Mathematical Olympiad 2025 — Yosen (Preliminary) — Quesito 11
tipo: quesito
quesito_id: quesito_src_jmo35yqa_yosen__Q11
parent: src_jmo35yqa_yosen
competition: Japan Mathematical Olympiad 2025 — Yosen (Preliminary)
family: jmo
year: '2025'
level: JMO Yosen
country: Giappone
modalita: individuale
quesito: '11'
summary: >-
  Directed-graph 'star cluster' importance-propagation operation; sum of
  importances of stars built in the 100th step
answer: '\frac{2^{68}(2^{102}-1)}{3}'
topics:
  - topic_combinatoria
  - topic_algebra
methods:
  - method_grafi
  - method_ricorsione
  - method_induzione
skills:
  - skill_astrazione
  - skill_modellizzazione
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/giappone
  - comp/jmo
  - anno/2025
  - livello/JMO-Yosen
  - topic/combinatoria
  - topic/algebra
  - gara/individuale
---

*Directed-graph 'star cluster' importance-propagation operation; sum of importances of stars built in the 100th step*

> A star cluster called JMO initially consists of $5$ stars $O, A, B, C, D$, each star being assigned a value called its importance. The importance of $O$ is $0$, and the importances of $A, B, C, D$ are each $1$. Moreover, one-way direct flights are open as follows, and no others: from $O$ to $A$ and to $C$; from $A$ to $B$ and to $D$; from $B$ to $O$; from $C$ to $B$ and to $D$; from $D$ to $O$. To prevent the stars of the JMO cluster from ageing, the following sequence of actions (one operation) is performed periodically:
> (1) Abolish all current direct flights and destroy all stars.
> (2) For each direct flight $f$ abolished in (1), build one corresponding star $S_f$. Then, as the importance of $S_f$, assign the sum of the importances of the star from which $f$ departs and the star at which $f$ arrives.
> (3) For every pair $(f, f')$ of direct flights abolished in (1) such that the star at which $f$ arrives coincides with the star from which $f'$ departs, open a one-way direct flight from $S_f$ to $S_{f'}$.
> Find the sum of the importances of all stars built in the $100$-th operation.

![[src_jmo35yqa_yosen__Q11.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_grafi|Grafi]], [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Risposta:** $\frac{2^{68}(2^{102}-1)}{3}$
**Fonte:** [apri PDF](https://drive.google.com/file/d/16jnfzDmXiM-Sqg9lgU-HkV7DRTfBHwYp/view)
