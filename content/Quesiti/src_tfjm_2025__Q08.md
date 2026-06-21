---
tipo: quesito
quesito_id: quesito_src_tfjm_2025__Q08
parent: src_tfjm_2025
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025
family: tfjm
year: '2025'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '8'
summary: >-
  Two-player game coloring 2n points on a circle (orange/blue); winner forms the
  longest monochromatic arc. Study strategies and winning probabilities versus
  random and skilled opponents.
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_probabilita
  - topic_logica
methods:
  - method_casework
  - method_simmetria
  - method_conteggio
skills:
  - skill_casework_accurato
  - skill_modellizzazione
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2025
  - livello/TFJM²
  - topic/combinatoria
  - topic/probabilita
  - topic/logica
  - gara/squadre
  - qa/da-verificare
---

# Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025 — Quesito 8

*Two-player game coloring 2n points on a circle (orange/blue); winner forms the longest monochromatic arc. Study strategies and winning probabilities versus random and skilled opponents.*

> Problem 8 - Colored points on a circle.
> 
> Lucie has invented a game for two players. The rules are as follows.
> 
> The game takes place on a circle. At the start, the points of the circle are uncolored. One of the two adversaries is designated to play first. In turn, Lucie and her adversary each choose a point, which is then colored in their respective color: Orange for Lucie, Blue for her adversary. When they play, it is forbidden to choose a point already colored by one of them. Lucie agrees in advance on the number of moves the game will last. Both play the same number of moves, so the number of moves is an even integer, denoted $2n$. For example, if the number of moves is $2n = 6$, they each play $n = 3$ moves. The game stops once the $2n$ moves are played.
> 
> At the end of the game, the circle is cut into arcs whose endpoints are either orange or blue. In such a configuration, a primitive arc is an arc whose two endpoints are colored (in orange or blue) and which contains no other colored point (for example, the whole circle, seen as an arc, is never primitive). Primitive arcs whose two endpoints have different colors are neutral; but the winner is the one who has formed the longest arc, not necessarily primitive, entirely colored in his own color. If there is a tie of such arcs, or if none exists, the game is declared null (a draw).
> 
> Throughout the problem, we call strategy a deterministic way of describing what to play as a function of the moves played previously. In other words, a strategy is an algorithm that indicates which move to play depending on the current situation, so that in two identical situations it always indicates the same move.
> 
> Since Lucie does not like to lose, she begins by choosing as adversary the Village Idiot, who, true to his name, plays his moves randomly, without thinking. Each move played then follows a uniform law on the circle. Lucie seeks strategies that maximize her probability of winning against this adversary. (Figure 11: two ends of game for $2n = 6$ and one for $2n = 10$. On the left, there are no colored arcs: the game is null. In the center, Lucie (orange) wins: she managed to build an arc of maximal size. On the right, the adversary (blue) wins because he formed a (non-primitive) blue arc of maximal size.)
> 
> Lucie and her adversary agree to begin by fixing $2n = 4$.
> 
> 1. If Lucie lets her adversary play first, does she have a strategy allowing her to win with certainty?
> 
> 2. After she wins a game, her adversary lets her play first. a) Does Lucie have a strategy allowing her to win whatever happens? b) Study the set of $p \in [0, 1]$ such that there exists a strategy allowing Lucie to win with probability exactly $p$. c) Same question for the probabilities of not losing.
> 
> 3. Lucie and her adversary now choose $2n > 4$. a) Repeat the previous question for $2n > 4$. One may begin with the case $2n = 6$. b) Same question for the probabilities of not losing.
> 
> Lucie proposes to change the rules. They agree on an integer $k$, and the rules are changed so that Lucie's adversary places $k$ points rather than $n$. The adversary plays all his points first. He still plays randomly on the circle, but Lucie places all her points afterward, so that she then has full liberty to choose where to place her points. Lucie thus has more information than her adversary, but in return the latter plays more points than she does.
> 
> 4. As a function of $n$ and $k$, does Lucie have a strategy allowing her to win with probability $1$?
> 
> To try, Lucie and her adversary take exactly the same configuration as before, but exchanging the roles. Lucie places $k$ points, her adversary places $n$. The latter still plays randomly, and Lucie places all her points first.
> 
> 5. Study the set of $p \in [0, 1]$ such that there exists a strategy allowing Lucie to win with probability $p$.
> 
> Tired of playing with the Village Idiot, Lucie finds an adversary of her caliber: Lucien. One of the two players is designated to play first, and $2n \in \mathbb{N}$ is fixed. The turn-by-turn rule is then applied. Lucien begins to play.
> 
> 6. Does one of the two players have a strategy allowing him to win for sure? If yes, describe one.
> 
> 7. Repeat the problem if Lucie had agreed from the start that the winner is not the one having the longest arc, but the one who managed to maximize the sum of the lengths of the primitive arcs of his color.
> 
> 8. Propose and study other lines of research.

![[src_tfjm_2025__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_simmetria|Simmetria]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
