---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024 — Quesito 8
tipo: quesito
quesito_id: quesito_src_tfjm_2024__Q08
parent: src_tfjm_2024
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024
family: tfjm
year: '2024'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '8'
summary: >-
  Game creation: number N cards 1..N so that each authorized/forbidden pair is
  decided by reading the manual page indexed by the sum (or GCD, LCM, product)
  of the two card numbers; characterize admissible configurations and find the
  minimal M (>=N) making every configuration M-admissible.
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_congruenze
  - method_casework
  - method_fattorizzazione
skills:
  - skill_conteggio_sistematico
  - skill_astrazione
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2024
  - livello/TFJM²
  - topic/combinatoria
  - topic/aritmetica
  - gara/squadre
---

*Game creation: number N cards 1..N so that each authorized/forbidden pair is decided by reading the manual page indexed by the sum (or GCD, LCM, product) of the two card numbers; characterize admissible configurations and find the minimal M (>=N) making every configuration M-admissible.*

> Anaïs wants to create a board game. This game requires numbering cards with certain constraints. The game consists of cards, each card bearing a number comprised between $1$ and $N \ge 2$ and possibly a (distinct) symbol, together with a rule manual. Each pair of (distinct) symbols is $\textbf{authorized}$ or $\textbf{forbidden}$. One calls $\textbf{configuration}$ the set of authorized pairs.
> 
> Anaïs wants to let the players know exactly which pairs are authorized, but rather than giving the exhaustive list of authorized pairs, she proceeds as follows: she writes on each card a different number between $1$ and $N$ and provides the players with a rule manual. To know the status of a pair, it suffices for the players to add the numbers written on the two cards and look at the corresponding page of the manual. It is possible that certain page numbers are not attainable as a sum of card numbers. In that case, what is written on them does not matter.
> 
> A configuration is $\textbf{admissible}$ if it is possible for Anaïs to carry out the preceding construction, that is, to number the cards and create the corresponding manual.
> 
> An example with $N = 5$ is the following: the game has $5$ cards $A$, $B$, $C$, $D$, $E$ and the only authorized pairs are $(A, D)$ and $(C, D)$. This configuration is admissible, because Anaïs can make the following construction: she attributes to cards $A$, $B$, $C$, $D$, $E$ the numbers $3$, $5$, $2$, $1$, $4$ respectively, and writes "authorized" on pages $3$ and $4$ of her manual and "forbidden" on all other pages.
> 
> $\textbf{1.}$ For which $N$ is every configuration admissible?
> 
> $\textbf{2.}$ For which $N$ is every configuration admissible among those for which:
>   a) each card belongs to at least one authorized pair?
>   b) each card belongs to at most one authorized pair?
>   c) each card belongs to at most two authorized pairs?
> 
> $\textbf{3.}$ Reprise questions $\textbf{1.}$ and $\textbf{2.}$ if, instead of summing the cards, the players compute their GCD.
> 
> $\textbf{4.}$ Reprise questions $\textbf{1.}$ and $\textbf{2.}$ if, instead of summing the cards, the players compute their LCM (the manual then has $N^2$ pages).
> 
> $\textbf{5.}$ Reprise questions $\textbf{1.}$ and $\textbf{2.}$ if, instead of summing the cards, the players compute their product (the manual then has $N^2$ pages).
> 
> To be able to build her game whatever happens, Anaïs allows herself to number the cards with pairwise distinct numbers from $1$ to $M$ with $M \ge N$. A configuration for which Anaïs can construct such a numbering and an associated manual is said $M$-$\textbf{admissible}$.
> 
> $\textbf{6.}$ Estimate, as a function of $N$, the minimal $M$ for which every configuration is $M$-admissible. Give examples of configurations for which one can compute the minimal $M$ for which they are $M$-admissible. One will be interested in the various modes of combining the cards (sum, GCD, ...).
> 
> $\textbf{7.}$ Propose and study other avenues of research.

![[src_tfjm_2024__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** apri PDF
