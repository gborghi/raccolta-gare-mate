---
tipo: quesito
quesito_id: quesito_src_tfjm_2026__Q01
parent: src_tfjm_2026
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026
family: tfjm
year: '2026'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '1'
summary: >-
  Chip-eating game on a layout of n piles of n chips: two players alternate, a
  chip may be eaten only if its neighbours are still covered; count states and
  analyse optimal strategies, then repeat on a pyramid layout.
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_casework
  - method_backward
  - method_ricorsione
  - method_estremalita
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2026
  - livello/TFJM²
  - topic/combinatoria
  - topic/logica
  - gara/squadre
---

# Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026 — Quesito 1

*Chip-eating game on a layout of n piles of n chips: two players alternate, a chip may be eaten only if its neighbours are still covered; count states and analyse optimal strategies, then repeat on a pyramid layout.*

> 1. War at the aperitif.
> 
> Anita and Auriane take an aperitif together. They do not finish it, and instead have before them a heap of old-fashioned plain chips, composed of $n$ piles of $n$ chips, with $n \ge 1$ an integer. They eat the chips in turn, each in turn playing the role of eater. A chip in a pile or at the end of a row may be eaten only if the chips beside it have not yet been uncovered, that is, only the chip at the top of a pile, or at the end of a row. They must eat the chips one at a time, taking at least one chip and at most all the uncovered chips. The game continues as long as there are chips, but in the end no chip is left lying on the table. Anita begins.
> 
> An example of a game is shown in figure 1. At each step, the chips in blue are those that can be eaten. In total, Anita ate $7$ chips and Auriane ate $2$ chips during this game.
> 
> 1. How many different possible states are there for the heap of chips?
> 
> 2. Anita and Auriane are gourmands and each therefore seeks to eat as many chips as possible during the game.
> 
>    a) In this question, Auriane plays in a gluttonous manner: on her turn, she always takes all the chips she can. How many chips at most can Anita guarantee to eat, as a function of $n$?
>    b) Now Auriane thinks before playing. How many chips at most can Anita guarantee to eat, no matter how Auriane plays, as a function of $n$?
> 
> 3. In this question, the chip at the bottom left is a delicious barbecue chip that Anita absolutely wants to eat. As a function of $n$, how can Anita guarantee to eat it?
> 
> 4. In this question, the row number $k$ (counted from the bottom) is made of chips with a particular flavour. We call satisfaction the value $C + S \cdot v$, where $C$ is the number of ordinary chips and $S$ the number of special chips Anita eats, $v$ being the value of a special chip. As a function of $n$ and $k$, what is the maximal satisfaction Anita can guarantee to obtain, no matter how Auriane plays, in the following special cases:
> 
>    a) the chips are not good, so of value $v = -1$;
>    b) the chips are particularly good, so of value $v = 3$?
> 
> Now the chips are laid out as a pyramid: on the bottom row there are $n$ chips, on the row above $n-1$, and so on up to the top, where there is a single chip. A chip can no longer be eaten as before: a chip may be eaten if the two chips just below it are no longer there.
> 
> An example of a game is shown in figure 2. At each step, the chips in blue are those that can be eaten. In total, Anita ate $6$ chips and Auriane ate $4$ chips during this game.
> 
> 5. Repeat questions 1 to 3 in this setting.
> 
> Complementary question. Propose and study other directions of research.

![[src_tfjm_2026__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_backward|Backward]], [[method_ricorsione|Ricorsione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF
