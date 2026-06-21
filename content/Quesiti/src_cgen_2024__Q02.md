---
title: Concours Général des Lycées 2024 — Matematica — Quesito 2
tipo: quesito
quesito_id: quesito_src_cgen_2024__Q02
parent: src_cgen_2024
competition: Concours Général des Lycées 2024 — Matematica
family: concours_generale
year: '2024'
level: Concours Général
country: Francia
modalita: individuale
quesito: '2'
summary: >-
  Probability game with opaque boxes hiding candies; Monty-Hall-style choices,
  optimal strategies for Sophie and Germain over n-1 rounds
qa_score: '2'
topics:
  - topic_probabilita
  - topic_combinatoria
methods:
  - method_casework
  - method_conteggio
  - method_ricorsione
skills:
  - skill_modellizzazione
  - skill_casework_accurato
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2024
  - livello/Concours-Général
  - topic/probabilita
  - topic/combinatoria
  - gara/individuale
  - qa/da-verificare
---

*Probability game with opaque boxes hiding candies; Monty-Hall-style choices, optimal strategies for Sophie and Germain over n-1 rounds*

> Problem 2: Hidden candies.
> 
> Part 1: Sophie and Germain test three boxes.
> 
> Germain has three opaque boxes. He proposes a game to Sophie that could allow her to win a packet of candies.
> 
> 1. At first, after having hidden a packet of candies in one of the three boxes, he leaves the three boxes closed in front of Sophie, who chooses one of these boxes at random to try to win the eventual content. As Sophie does not know which box hides the candies, she chooses at random. With what probability does Sophie manage to choose the box containing the packet of candies?
> 
> 2. In a second time, after having hidden a new packet of candies in one of the three boxes, Germain makes Sophie play as follows:
> - At the first step, Sophie chooses one of the three boxes provided; she designates it to Germain but changes nothing.
> - At the second step, Germain eliminates one of the boxes that Sophie did not choose, then leaves Sophie the possibility of modifying her choice.
> Once this second step is completed, Sophie opens the box she chose and discovers whether she has won the packet of candies.
> 
> a. With what probability has Sophie chosen the winning box at the first step of the game?
> b. Does Sophie have interest in conserving her initial choice or in modifying her choice?
> c. What is the better strategy for Sophie: conserve her initial choice, or modify it?
> 
> In all the rest of this problem, one considers an integer $n$ at least equal to $3$. Germain has $n$ opaque boxes, numbered from $1$ to $n$. He hides one packet of candies in one of these boxes; the $n-1$ other boxes are left empty. Sophie and Germain will now play following several different rules. The goal for Sophie is, in all cases, to choose a box maximizing the probability of winning the packet of candies.
> 
> Part 2: A strategy for Sophie.
> 
> 3. After Germain has hidden a packet of candies in one of the boxes, in a first time he leaves the $n$ boxes closed in front of Sophie. The game takes place in two rounds:
> - At the first round of the game, Sophie chooses a box, she designates it to Germain but does not change.
> - At the second round, Germain eliminates $n-2$ empty boxes among the $n-1$ boxes that Sophie did not choose, then proposes to Sophie one of the two remaining boxes: the box she designated initially, or the box that Germain did not eliminate.
> Once this second round is completed, Sophie opens the box she chose and discovers whether she has won the packet of candies.
> 
> a. With what probability has Sophie chosen the winning box at the first round of the game?
> b. The second time, does Sophie have interest in conserving her initial choice or in modifying her choice?
> 
> For the situation, Sophie and Germain invent a second game which now takes place over $n-1$ rounds. Before the start of the game, Germain hides a packet of candies in one of the boxes. At the first round: Sophie chooses one of the $n$ boxes, she designates it to Germain but changes nothing. At each following round between $2$ and $n-1$:
> - At the $\ell$-th round of the game: Germain eliminates, as he pleases, one box among the empty boxes other than the one Sophie chose at the preceding round; then he leaves Sophie the possibility of modifying her choice.
> Once the $n-1$ rounds are completed, Sophie opens the box she chose at the last round and discovers whether she has won the packet of candies. From now on, and until the end of this problem, Sophie and Germain play this game.
> 
> a. If Sophie conserves her initial choice during the $n-1$ rounds, what probability does she have of winning?
> b. How can she proceed to ensure she wins with probability at least $(n-1)/n$?
> 
> Part 3: A strategy for Germain.
> 
> Let $n \ge 3$ be an integer. Germain and Sophie continue to play this same game over $n-1$ rounds. Germain wishes to prevent Sophie from winning with a probability strictly greater than $(n-1)/n$. For this, he adopts the following strategy: before the start of the game, Germain selects at random the box in which he hides the packet of candies.
> 
> 4. Sophie does not know which is the box in which the packet of candies is hidden. For a round $\ell$ with $1 \le \ell \le n-1$, let $g_\ell$ be the number associated to the box Germain eliminates at round $\ell$. (Let $z_1, z_2, \ldots, z_{\ell-1}$ denote Sophie's successive designations and $g_2, \ldots, g_\ell$ the eliminated boxes.) Let $p_\ell(b)$ be the probability, knowing the numbers $z_1, z_2, \ldots, z_{\ell-1}$ and $g_2, \ldots, g_\ell$, that the box number $b$ contains the packet of candies.
> 
> 5. Give, for every integer $b$ such that $1 \le b \le n$, the probability $p_1(b)$.
> 
> 6. Let $\ell$ be an integer such that $2 \le \ell \le n-1$, and let $b$ be a box number distinct from $g_2, g_3, \ldots, g_\ell$. Demonstrate that
> $$\frac{p_\ell(z_{\ell-1})}{p_\ell(b)} = \frac{n-\ell}{n+1-\ell} \cdot \frac{p_{\ell-1}(z_{\ell-1})}{p_{\ell-1}(b)}.$$
> 
> 7. Let $\ell$ be an integer such that $2 \le \ell \le n-1$, and let $b$ and $c$ be two box numbers distinct from $g_2, g_3, \ldots, g_\ell$. Demonstrate that
> $$p_\ell(b) = \frac{n-\ell}{n-1}\, p_\ell(c).$$
> 
> 8. Deduce from this that, if Germain applies the strategy presented above, Sophie can never ensure winning with a probability strictly greater than $(n-1)/n$.
> 
> Part 4: A strategy for Sophie and Germain.
> 
> Evariste, a friend of Sophie and Germain, decides to give them a packet of candies if they play one last game (always under the same conditions) and if, at the end of this game, Sophie finds the right box. Germain has the obligation to place the packet in a box at random, without having the right to communicate to Sophie the box where he has placed the packet. Before beginning this ultimate game, can Sophie and Germain agree on a common strategy?
> 
> 9. For which values of $n \ge 3$ can Sophie and Germain devise a common strategy that ensures Sophie finds the box with the packet?

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF

> [!warning] Estratto/tradotto da verificare con la fonte.
