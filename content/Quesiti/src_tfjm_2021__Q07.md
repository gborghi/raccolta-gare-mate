---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021 — Quesito 7
tipo: quesito
quesito_id: quesito_src_tfjm_2021__Q07
parent: src_tfjm_2021
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021
family: tfjm
year: '2021'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '7'
summary: >-
  Frog/water-lily combinatorial game on a graph: Antoine protects a lily and
  Benoit sinks one each turn (infinitely); Antoine wins if the frog can reach
  infinitely many surviving lilies; analyze who wins on various ponds
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_grafi
  - method_casework
  - method_estremalita
  - method_induzione
skills:
  - skill_astrazione
  - skill_casework_accurato
  - skill_ragionamento_geometrico
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2021
  - livello/TFJM²
  - topic/combinatoria
  - topic/logica
  - gara/squadre
  - qa/da-verificare
---

*Frog/water-lily combinatorial game on a graph: Antoine protects a lily and Benoit sinks one each turn (infinitely); Antoine wins if the frog can reach infinitely many surviving lilies; analyze who wins on various ponds*

> Long live the free frogs!
> 
> A frog jumps from lily pad to lily pad on an infinite pond. Antoine and Benoit play on this pond.
> 
> The lily pads are represented by blue points; the frog can jump from one lily pad to another lily pad connected to it by a line.
> 
> The rules of the game are as follows. Antoine begins by protecting a lily pad. Then Benoit sinks a lily pad different from the one protected by Antoine. Then Antoine protects a second lily pad that has not already been sunk, then Benoit sinks a new lily pad that is not one of those protected by Antoine, and so on.
> 
> Antoine and Benoit play in turn an infinite number of times, Antoine during turns $1,3,5,\ldots$ and Benoit during turns $2,4,6,\ldots$ Once each has played an infinite number of times, an infinite number of lily pads have been sunk, an infinite number have been protected, and there may remain zero, one, several, or an infinite number of lily pads that have not been sunk.
> 
> Antoine wins if he can place the frog on a non-sunk lily pad from which the frog can reach an infinite number of other lily pads by jumping only on neighboring lily pads that have not been sunk. Otherwise Benoit wins.
> 
> A strategy for a player is a rule that, for each configuration of the game, associates a move to play. We say a player has a winning strategy if he can, by playing this strategy, win the game whatever the way the other player plays.
> 
> An example of a game is illustrated by Figure 9, where the lily pads of a same color are joined by a line. On a complete straight line, it is Benoit who wins this game because, whatever the lily pad on which the frog is placed, it can only reach a finite number of lily pads, since the protected lily pads are all isolated.
> 
> **(1)** Determine, in terms of $k$, whether Antoine or Benoit has a winning strategy in the pond with $k$ rows illustrated by Figure 11. One may begin by studying the cases $k=1$ and $k=2$.
> 
> **(2)** Determine, for each of the ponds illustrated in Figure 12, whether Antoine or Benoit has a winning strategy.
> 
> **(3)** Now suppose that, once Antoine and Benoit have played an infinite number of times, all the lily pads that have not been protected by Antoine are sunk. In the example presented at the beginning on the complete straight line, Antoine has therefore still lost since the protected lily pads are all isolated. Revisit questions (1) and (2) in this framework.
> 
> **(4)** Antoine and Benoit decide to change the rules of the game: Antoine no longer places the frog after the game, but before his first turn. Suppose the corresponding lily pad is automatically protected.
> - (a) Revisit questions (1) and (2) with this new rule by studying all the possible initial positions of the frog for each pond.
> - (b) Revisit question (3) in the same way.
> 
> **(5)** Is there a pond such that Antoine has a winning strategy for the rule of question (2) but Benoit has a winning strategy for the rule of question (3)? And the inverse? More generally, compare with each other the rules of questions (2), (3), (4a) and (4b): for each sub-set of these four rules, is there a pond such that Antoine has a winning strategy for each rule of the sub-set, but Benoit has a winning strategy for each other rule?
> 
> **(6)** Instead of playing in turn, Antoine now plays $A$ moves, then Benoit plays $B$ moves, then Antoine again $A$ moves, and so on. Revisit questions (1) and (2) with this new rule for different values of $A$ and $B$.
> 
> **(7)** Study other ponds and find criteria and general results to determine the person having the winning strategy.

![[src_tfjm_2021__Q07.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_induzione|Induzione]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
