---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023 — Quesito 3
tipo: quesito
quesito_id: quesito_src_tfjm_2023__Q03
parent: src_tfjm_2023
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023
family: tfjm
year: '2023'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '3'
summary: >-
  Monetary systems S: S-appoints (exact payments), S-primary prices, and
  S-decompositions; finiteness and uniqueness conditions
qa_score: '2'
topics:
  - topic_aritmetica
  - topic_combinatoria
  - topic_insiemi_funzioni
methods:
  - method_conteggio
  - method_casework
  - method_fattorizzazione
skills:
  - skill_lettura_attenta
  - skill_casework_accurato
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2023
  - livello/TFJM²
  - topic/aritmetica
  - topic/combinatoria
  - topic/insiemi_funzioni
  - gara/squadre
  - qa/da-verificare
---

*Monetary systems S: S-appoints (exact payments), S-primary prices, and S-decompositions; finiteness and uniqueness conditions*

> Monetary change (Appoint monétaire). In a galaxy far, far away, the little prince moves from planet to planet aboard his margarine spaceship. Each planet has its own monetary system $S$, a set of coin values, and the prince must give exact change for his purchases. We always assume $1 \\in S$. For example, the monetary system $S = \\{1, 2, 5\\}$.\n\nWhen the prince arrives on a new planet with a certain amount of money $x \\in \\mathbb{N}$, he converts it into the system $S$. We say he can give change (faire l'appoint) for a price $p$ on an amount $x$ if he can write $p$ as a sub-sum of the coins making up $x$. We denote by $\\mathcal{A}_S(x)$ the set of prices for which he can give change in the system $S$ having an amount $x$ of money. For example $\\mathcal{A}_{\\{1,2,5\\}}(4) = \\{0, 2, 4\\}$ for one decomposition of $x = 4$ into two coins of value 2; with $1+1+2$ instead he gets $\\{0,1,2,3,4\\}$.\n\n1. The little prince arrives on a planet where $S = \\{1, 3, 10\\}$. For which prices is he sure of giving change if:\n   a) he has an amount $x = 10$?\n   b) he has an amount $x = 100$?\n   c) he has an amount $x = 10^n$ for $n \\in \\mathbb{N}^*$?\n\nThe daisy/margarine merchants charge a price $p \\geqslant 1$ such that one is sure of being able to give change for $p$ on any amount of money: such a price $p$ is called $S$-primary (by convention, $0$ is never $S$-primary). For example, for $S = \\{1, 2, 5\\}$, the price 6 is $S$-primary because $6 = 5 + 1 = 2 + 2 + 2$, whereas it is not for prices 1, 2, 3, 4 or 5. The set of $S$-primary prices is denoted $\\mathcal{P}_S$. For example $1, 2, 5, 6 \\in \\mathcal{P}_{\\{1,2,5\\}}$ but $0, 3, 4 \\notin \\mathcal{P}_{\\{1,2,5\\}}$.\n\n2. Which sets $S$ are such that one can characterize the $S$-primary prices if:\n   a) $S = \\{1, u\\}$ for $u \\geqslant 2$?\n   b) $S = 1 + 2\\mathbb{N}$ the set of odd numbers?\n   c) $S = \\{2^n, n \\in \\mathbb{N}\\}$ the set of powers of 2?\n   d) $S = \\{1, v, w\\}$ for $w > v > 2$?\n   e) $S$ the set of prime numbers together with 1?\n\n3. Determine the subsets $S$ of $\\mathbb{N}^*$ such that $\\mathcal{P}_S$ is finite.\n\n4. Give an estimate (frame from below and above) of the value of the largest $S$-primary price when $S$ is finite, as a function of the values of the elements of $S$. One may begin by treating cases (a) and (d) of question 2.\n\n5. Find necessary and/or sufficient conditions for $\\mathcal{P}_S = \\mathbb{N}^*$.\n\nGiven a price $x$, an $m$-tuple $(p_1, \\dots, p_m)$ of $S$-primary prices whose sum is $x$ is called an $S$-decomposition of $x$ if for every subset $J \\subseteq [\\![1, m]\\!]$, the price $x_J = \\sum_{j \\in J} p_j$ is an $S$-appoint of $x$; in other words, every sub-sum (including the empty sum and the full sum) of these prices is an $S$-appoint of $x$. For example, for $S = \\{1, 2, 5\\}$ and $x = 4$, the unique $S$-decomposition of $x$ is the triplet $(1, 1, 2)$ but not the pair $(2, 2)$, because $1 + 2 = 3$ is not an $S$-appoint of 4. Likewise, $(4)$ is not an $S$-decomposition of 4 because 4 is not $S$-primary.\n\n6. For which systems $S$ does every $x$ admit at least one $S$-decomposition?\n\n7. Do there exist systems $S$ for which:\n   a) $S$ is finite and every $S$-decomposition is unique (up to permutation of the $S$-primary numbers)?\n   b) $S$ is infinite and every $S$-decomposition is unique?\n   c) $S$ is of the form $S = \\{1, u, v\\}$ with $1 < u < v$ and every $S$-decomposition is unique?\n   d) at least one price $x$ admits at least two $S$-decompositions that are not permutations of one another?\n\n8. Find necessary and/or sufficient conditions for a system $S$ to verify the property of the preceding question.\n\n9. Propose and study other lines of research.

![[src_tfjm_2023__Q03.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
