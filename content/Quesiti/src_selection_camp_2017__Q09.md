---
tipo: quesito
quesito_id: quesito_src_selection_camp_2017__Q09
parent: src_selection_camp_2017
competition: Japan IMO Selection Camp 2017 — Selection Camp
family: jcamp
year: '2017'
level: CAMP Selection Camp
country: Giappone
modalita: individuale
quesito: '9'
summary: >-
  Ferry network on n islands: prove some island eventually connected to all
  others
qa_score: '3'
topics:
  - topic_combinatoria
methods:
  - method_invarianti
  - method_grafi
  - method_induzione
  - method_estremalita
skills:
  - skill_modellizzazione
  - skill_ragionamento_geometrico
  - skill_astrazione
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/giappone
  - comp/jcamp
  - anno/2017
  - livello/CAMP-Selection-Camp
  - topic/combinatoria
  - gara/individuale
---

# Japan IMO Selection Camp 2017 — Selection Camp — Quesito 9

*Ferry network on n islands: prove some island eventually connected to all others*

> Let $n \ge 3$ be an integer. A country has $n$ islands. Initially, IMO Company operates bidirectional ferry routes between some pairs of distinct islands so that any two islands are connected (possibly via intermediate islands). At the beginning of each year, IMO Company updates its ferry routes as follows:
> 
> (1) Choose two distinct islands $X$ and $Y$ such that a ferry operated between them in the previous year.
> (2) Cancel the ferry route between $X$ and $Y$.
> (3) For each island $Z \neq X, Y$ such that a ferry operated between exactly one of $\{X, Z\}$ and $\{Y, Z\}$ in the previous year, add a new ferry route between $Z$ and the other one of $X, Y$.
> (4) No other ferry routes are added or cancelled.
> 
> The selection of $X$ and $Y$ in step (1) must satisfy the following condition at every point in time:
> 
> Condition: For every non-empty subset $\mathcal{S}$ of islands with $|\mathcal{S}| \le n-1$, at least one of $X, Y$ is in $\mathcal{S}$ and the other is not.
> 
> Prove that there exist some year and some island such that in that year a ferry operates between that island and every other island.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_grafi|Grafi]], [[method_induzione|Induzione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF
