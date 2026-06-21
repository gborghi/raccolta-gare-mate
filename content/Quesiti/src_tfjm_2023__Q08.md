---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023 — Quesito 8
tipo: quesito
quesito_id: quesito_src_tfjm_2023__Q08
parent: src_tfjm_2023
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023
family: tfjm
year: '2023'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '8'
summary: >-
  Card-deck shuffles as permutations; finding the shuffle sigma in minimum
  games, and realizable objectives (target partitions) per shuffle
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_algebra
methods:
  - method_conteggio
  - method_casework
  - method_invarianti
skills:
  - skill_conteggio_sistematico
  - skill_astrazione
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2023
  - livello/TFJM²
  - topic/combinatoria
  - topic/algebra
  - gara/squadre
  - qa/da-verificare
---

*Card-deck shuffles as permutations; finding the shuffle sigma in minimum games, and realizable objectives (target partitions) per shuffle*

> Deck seed (Graine de deck). Nicolas plays a deck-construction card game and seeks the perfect deck, ready to start over many times. Let $k, n \\in \\mathbb{N}^*$ with $k$ dividing $n$ and $k \\geqslant 2$. Nicolas's deck holds $n$ cards in total, each bearing a symbol, with possibly identical cards. There are in the deck several types of cards distinguished by their symbol; some cards may be identical (in which case the shuffle does not change anything since the cards have the same appearance).\n\nAt the start of the game Nicolas knows the composition of his deck but not the shuffle. He must give an initial order to his deck, which he may do as he wishes. The shuffle of the deck is a permutation $\\sigma$ which, applied to the initial order of the cards, gives a new order; it is the shuffle. Then, at the start of each game $P_i$, the deck whose order is $\\sigma$ applied to the initial order is drawn, cards being played $k$ by $k$ (so a game has $n/k$ turns). When the deck has cards in $n/k$ copies, two identical cards cannot be distinguished after the shuffle.\n\nFor example, with $n = 6$ cards, 3 cards $A$ and 3 cards $B$ initially in order $(A, B, A, B, A, B)$, where cards are played $k = 3$ by 3 (so a game has $n/k = 2$ turns) and where the shuffle is $\\sigma = \\begin{pmatrix} 123456 \\\\ 152346 \\end{pmatrix}$, the objects $(ABABAB, AAABBB)$ or $(ABABAB, AAB, ABB)$ are realizable for the shuffle $\\sigma$ (see question 3). The second choice lets one distinguish $\\sigma$ from $\\begin{pmatrix} 123456 \\\\ 153246 \\end{pmatrix}$ but the first does not (because the final state of the deck is the same).\n\n1. In this question, Nicolas's goal is to find the shuffle $\\sigma$ as fast as possible. The initial order, before a game starts, is always the same. How many games does he need at minimum when:\n   a) $k = n$, and all the cards are different?\n   b) $k = n$, and the deck consists of 2 different cards, one unique and the other in $n - 1$ copies?\n   c) $k = n$, and the deck consists of 2 different cards, each in $n/2$ copies?\n   d) $k = 2$, and the deck consists of 2 different cards, each in $n/2$ copies, and the initial order is a perfect alternation of these cards?\n   e) $k = n$, and the deck consists of $a$ different cards, each in $n/a$ copies, for some $a$ dividing $n$?\n\n2. As a function of $k$ and $n$, characterize the ordered initial compositions of the starting deck for which Nicolas can be sure to find $\\sigma$.\n\nNicolas is now no longer interested in the shuffle $\\sigma$ but only wants to obtain the perfect game. He knows which cards he wants to draw at the first turn, then at the second turn, and so on. We denote by $P_i$ the set of $k$ cards Nicolas wants to draw at the $i$-th turn after shuffling, in a game. We call objective the data of an ordered initial composition $\\mathcal{O}$ of the deck and a partition of the set of cards into $n/k$ parts of size $k$, of the form $(P_1, \\dots, P_{n/k})$. The order of cards within each $P_i$ does not matter since they are drawn in the same turn. An objective is said realizable for a shuffle $\\sigma$ if Nicolas can draw his cards in a certain order starting from $\\mathcal{O}$ so that, after shuffling, he obtains exactly the cards corresponding to the set $P_1$, then $P_2$, etc.\n\n3. Which objectives are realizable whatever the shuffle $\\sigma$?\n\n4. Which $\\sigma$ make the fewest objectives realizable, in the following cases:\n   a) $k = 2$, and all the cards are different?\n   b) $k = 2$, and the deck consists of 2 different cards, each in $n/2$ copies, alternating perfectly?\n\n5. Redo the preceding question, but making the most objectives realizable. Nicolas now wants to know whether his objective, whose initial order is that of the game, is realizable. The order of the cards, before each game, is always the same.\n\n6. As a function of his objective, how many games does Nicolas need at minimum to know whether it is realizable in the following cases:\n   a) $k = 2$, and all the cards are different?\n   b) $k = 2$, and the deck consists of 2 different cards, each in $n/2$ copies, alternating perfectly?\n\n7. As a function of $k$, $n$ and the card distribution, which are the objectives for which it is hardest to know whether they are realizable (i.e. such that the minimum number of games Nicolas needs to know whether they are realizable is the largest)?\n\n8. Propose and study other lines of research.

![[src_tfjm_2023__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
