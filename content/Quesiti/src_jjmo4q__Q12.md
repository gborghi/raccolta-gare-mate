---
title: Japan Junior Mathematical Olympiad 2006 — Quesito 12
tipo: quesito
quesito_id: quesito_src_jjmo4q__Q12
parent: src_jjmo4q
competition: Japan Junior Mathematical Olympiad 2006
family: jjmo
year: '2006'
level: JJMO
country: Giappone
modalita: individuale
quesito: '12'
summary: >-
  Fill m×n grid with integers: nonzero in ≥1 cell per row-neighborhood, t(S)=0
  for each cell
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_algebra
methods:
  - method_casework
  - method_invarianti
  - method_ricorsione
skills:
  - skill_astrazione
  - skill_conteggio_sistematico
  - skill_ragionamento_geometrico
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/giappone
  - comp/jjmo
  - anno/2006
  - livello/JJMO
  - topic/combinatoria
  - topic/algebra
  - gara/individuale
---

*Fill m×n grid with integers: nonzero in ≥1 cell per row-neighborhood, t(S)=0 for each cell*

> Let $m, n$ be integers with $m, n \ge 2$. We want to fill each cell of an $m \times n$ grid with an integer, satisfying the following two conditions:
> 
> (i) There is at least one cell containing a nonzero integer.
> 
> (ii) For each cell $S$, if $t(S)$ denotes the sum of all integers written in the cells sharing a side with $S$ (i.e., the neighbors of $S$), then $t(S) = 0$.
> 
> For example, if $m = 3$, $n = 4$ and all cells contain $1$, then the value of $t(S)$ for each cell is as shown below (in this case condition (ii) is not satisfied).
> 
> When integers can be filled in satisfying both conditions, we call $(m, n)$ a \emph{good pair}. For example, $(2, 2)$ is a good pair.
> 
> (1) Let $m = 3$. Find all integers $n$ with $n \le 10$ such that $(3, n)$ is a good pair.
> 
> (2) For good pairs $(m, n)$ with $m, n \le 10$, find the number of such pairs. Note that $(9, 6)$ and $(6, 9)$ are counted as different pairs.

![[src_jjmo4q__Q12.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_casework|Casework]], [[method_invarianti|Invarianti]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** apri PDF
