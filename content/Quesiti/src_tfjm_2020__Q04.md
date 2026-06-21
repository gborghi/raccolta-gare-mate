---
tipo: quesito
quesito_id: quesito_src_tfjm_2020__Q04
parent: src_tfjm_2020
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020
family: tfjm
year: '2020'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '4'
summary: Two-player furniture-moving game in a 1D and 2D warehouse
qa_score: '2'
topics:
  - topic_combinatoria
methods:
  - method_casework
  - method_invarianti
  - method_backward
  - method_grafi
skills:
  - skill_modellizzazione
  - skill_casework_accurato
  - skill_ragionamento_geometrico
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2020
  - livello/TFJM²
  - topic/combinatoria
  - gara/squadre
  - qa/da-verificare
---

# Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020 — Quesito 4

*Two-player furniture-moving game in a 1D and 2D warehouse*

> Olivier tries to fit furniture in the storage warehouse of Animath, while Chloé tries to defend it.
> 
> Let $d \ge 2$ be an integer. We consider furniture of size $1 \times d$ and $d \times 1$ stored in a warehouse.
> 
> **1.** We place pieces in a warehouse of size $(d+1) \times (d+1)$. The warehouse is said to be **full** if no new piece of furniture can be added, as illustrated by Figure 7. What is the minimum number of pieces of furniture needed to fill a warehouse? What is the maximum number?
> 
> Let $n \in \mathbb{N}^*$. We consider a warehouse of size $1 \times n$. Olivier and Chloé act in turn as follows:
> - On his turn, Olivier places a piece of furniture in the warehouse if possible.
> - On her turn, Chloé can move a piece of furniture horizontally by one cell.
> 
> A piece of furniture cannot be moved beyond empty spaces, and cannot cross another piece during a move. A piece of furniture is said to be **blocked** when Chloé cannot move it. She loses it if she cannot place it. Olivier wins if at some point a piece of furniture is blocked.
> 
> Figure 8 shows an example of a game in a warehouse of length $n = 7$ with $d = 2$: Olivier places a piece all the way to the right, then Chloé moves three cells to the left, Olivier places a piece all the way to the left. Olivier has won by placing a piece to the left, which is blocked.
> 
> **2.** Let $n$ and $d$ be fixed. Can Olivier ensure to win? We will start by studying the cases $d = 2, 3$.
> 
> **3.** After a short renovation, the warehouse is now an infinite strip of width $1$. Chloé can move pieces along this strip indefinitely, meaning there is never a blocked piece. Let $n$ and $d$ be fixed. Can Olivier always guarantee a win? We will start by studying the cases $d = 2, 3$.
> 
> After a longer renovation, the warehouse is now an infinite plane. Chloé can no longer move furniture that is along the border of the longest side of horizontal furniture. As in Figure 9, two configurations in a two-dimensional warehouse for $d = 2$ are shown.
> 
> **4.** For which integers $d$ can Olivier ensure to win? We will start by studying the cases $d = 2, 3$.
> 
> **5.** To cope with the diversification of her activities, Animath now needs furniture of various lengths (at least $2$) and always of width $1$. Revisit the previous question under the following conditions:
> a) At each turn, Olivier chooses the size of the piece he wishes to place;
> b) At each turn, Chloé chooses the size of the piece that Olivier must place;
> c) At each turn, Olivier chooses the sequence of sizes he will place;
> d) At the beginning of the game, Chloé chooses the sequence of sizes of pieces that Olivier will place.
> 
> The new-generation furniture is of size $d \times d$ and can move in two directions. In Figure 10, a configuration with the new furniture is shown.
> 
> **6.** Revisit the previous questions for this case.
> 
> **7.** Propose and study other avenues of research.

![[src_tfjm_2020__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_invarianti|Invarianti]], [[method_backward|Backward]], [[method_grafi|Grafi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
