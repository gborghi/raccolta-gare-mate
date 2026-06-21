---
tipo: quesito
quesito_id: quesito_src_tfjm_2025__Q01
parent: src_tfjm_2025
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025
family: tfjm
year: '2025'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '1'
summary: >-
  Propagation of good mood among leprechauns on a friendship graph; a number j
  is realizable if good mood can spread to all leprechauns starting from one.
qa_score: '2'
topics:
  - topic_probabilita
  - topic_combinatoria
methods:
  - method_grafi
  - method_casework
  - method_ricorsione
skills:
  - skill_modellizzazione
  - skill_conteggio_sistematico
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2025
  - livello/TFJM²
  - topic/probabilita
  - topic/combinatoria
  - gara/squadre
  - qa/da-verificare
---

# Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025 — Quesito 1

*Propagation of good mood among leprechauns on a friendship graph; a number j is realizable if good mood can spread to all leprechauns starting from one.*

> Problem 1 - A contagious good mood.
> 
> In the Marvels, the leprechauns know good and bad mood. Will a single leprechaun manage to make everyone smile?
> 
> The country of the Marvels, denoted $M$, consists of $n \ge 3$ leprechauns who can each be in good or bad mood. Each pair of leprechauns either knows each other or not, this knowledge being mutual and unchanging. Each day, a leprechaun in good mood makes a certain number of his friends smile simultaneously (the number being specified more precisely below); the others stay in their mood, good or bad. We want to put everyone in good mood. Initially, only one leprechaun is in good mood.
> 
> We say that a number $j \in \mathbb{N}$ is realizable if it is possible that all the good-mood leprechauns make exactly $j$ of their bad-mood friends smile each day, so that, starting from a single leprechaun in good mood (placed wherever we want), everyone ends up in good mood. If at some moment a good-mood leprechaun cannot make $j$ leprechauns smile, then good mood never arrives.
> 
> For example, if each leprechaun knows exactly $3$ other leprechauns (no matter who) and $M$ consists of $3$ leprechauns, then the only realizable numbers are $2$ and $3$ (the numbers $0$ and $1$ are not realizable). We denote $A(M, \ell)$ the set of realizable numbers, where $\ell$ is the starting leprechaun.
> 
> 1. From now on in this problem, a leprechaun smiles at exactly two of his friends, with priority to leprechauns in bad mood (that is, he only puts in good mood the leprechauns in bad mood if possible). Determine $A(M, \ell)$ (denoted $A_1(M, \ell)$ for question 1) when each leprechaun knows the same number $\ell$ of leprechauns and $M$ has $a \cdot b$ leprechauns arranged in a grid. Distinguish the cases: a) the leprechaun $\ell$ is at a corner; b) the leprechaun $\ell$ is on a side; c) the leprechaun $\ell$ is in the interior (neither corner nor side). (See Figure 2, the country of the Marvels for question 1, with $a = 3$ and $b = 6$.)
> 
> 2. Which sets $E$ are such that there exists a configuration $M$ and a starting leprechaun $\ell \in M$ with $A_1(M, \ell) = E$?
> 
> 3. Which sets $E$ are such that there exists a configuration $M$ such that the union over all $\ell \in M$ of $A_1(M, \ell)$ equals $E$?
> 
> 4. For this question, replace the rule of question 1 by the following: a leprechaun smiles at exactly two of his friends, with priority to those already in good mood. We denote $A_2(M, \ell)$. Answer questions 1, 2 and 3 in this case.
> 
> From now on, we drop the rules of questions 1 and 4. We fix $p \in [0, 1]$. If $\ell \in M$ is in good mood, then for any $\ell' \in M$ such that $\ell$ and $\ell'$ know each other, $\ell$ makes $\ell'$ smile with probability $p$. Let $\tau$ be the random variable equal to the number of the first day when everyone is in good mood (and $\tau = +\infty$ if it never arrives).
> 
> 5. Compute, as a function of $n$ and $p$, the expectation of $\tau$: a) if each leprechaun knows the two others; b) if the leprechauns are numbered $1$ to $n$, each leprechaun $\ell_k$ knowing $\ell_{k-1}$ and $\ell_{k+1}$ (with $\ell_1$ and $\ell_n$ also acquainted); c) if $n$ is large and the population is separated into two classes of size $n/2$, each leprechaun knowing two friends in its own class and two friends in the other class; for this question, with $p$ fixed, also determine the limit of the expectation of $\tau$ as $n \to \infty$; d) if $M$ is the country of question 1 (here the result must depend on $a$, $b$ and the starting leprechaun).
> 
> 6. For $p \in [0, 1]$, $n \ge 3$ and $k \le n - 1$, consider the country $M$ with $n$ leprechauns and $k$ pairs of friends. How large can the expectation of $\tau$ be at maximum: a) if $p = 1$? b) if $0 < p < 1$ and $k = n - 1$? c) in the general case?
> 
> 7. Repeat question 6 replacing 'maximum' with 'minimum'.
> 
> 8. Propose and study other lines of research.

![[src_tfjm_2025__Q01.png]]

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
