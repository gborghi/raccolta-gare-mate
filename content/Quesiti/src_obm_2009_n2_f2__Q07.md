---
title: Olimpíada Brasileira de Matemática 2009 — Nível 2 — Fase 2 — Quesito 7
tipo: quesito
quesito_id: quesito_src_obm_2009_n2_f2__Q07
parent: src_obm_2009_n2_f2
competition: Olimpíada Brasileira de Matemática 2009 — Nível 2 — Fase 2
family: obm
year: '2009'
level: OBM Nível 2
country: Brasile
modalita: individuale
nivel: '2'
fase: '2'
quesito: '7'
summary: Recurrence sequence S_k=ar^k+bs^k; find S_7 given S_1..S_4
qa_score: '3'
topics:
  - topic_algebra
methods:
  - method_ricorsione
  - skill_manipolazione_algebrica
skills:
  - skill_manipolazione_algebrica
  - skill_riconoscimento_pattern
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2009
  - livello/OBM-Nível-2
  - nivel/2
  - fase/2
  - topic/algebra
  - gara/individuale
---

*Recurrence sequence S_k=ar^k+bs^k; find S_7 given S_1..S_4*

> Observe that
> $$(x-r)(x-s) = x^2 - (r+s)x + rs.$$
> Substituting $x$ by $r$ and then by $s$, we obtain:
> $$\begin{cases} r^2 - (r+s)r + rs = 0 \\ s^2 - (r+s)s + rs = 0. \end{cases}$$
> Multiplying the first equation by $a r^{n-1}$ and the second by $b s^{n-1}$ and adding:
> $$a r^{n+1} - (r+s)\,a r^n + rs\,a r^{n-1} = 0 \quad \text{and} \quad b s^{n+1} - (r+s)\,b s^n + rs\,b s^{n-1} = 0.$$
> Summing these two equations and writing $S_k = a r^k + b s^k$, one verifies that
> $$S_{n+1} = (r+s)\,S_n - rs\,S_{n-1}.$$
> Given
> $$S_1 = ar + bs = 1, \quad S_2 = ar^2 + bs^2 = 2, \quad S_3 = ar^3 + bs^3 = 5, \quad S_4 = ar^4 + bs^4 = 6,$$
> determine $S_7$.

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[skill_manipolazione_algebrica|skill_manipolazione_algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Algebra e Analisi]]
**Fonte:** apri PDF
