---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020 — Quesito 3
tipo: quesito
quesito_id: quesito_src_tfjm_2020__Q03
parent: src_tfjm_2020
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020
family: tfjm
year: '2020'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '3'
summary: 'Strategic pizza-sharing game: maximising gain on circular and square pizzas'
qa_score: '2'
topics:
  - topic_combinatoria
methods:
  - method_casework
  - method_estremalita
  - method_backward
  - method_grafi
skills:
  - skill_modellizzazione
  - skill_ragionamento_geometrico
  - skill_conteggio_sistematico
  - skill_casework_accurato
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

*Strategic pizza-sharing game: maximising gain on circular and square pizzas*

> Lily and Hadrien meet for a feast, and they both want to eat as much as possible.
> 
> A pizza is cut into $n$ parts, and each part has a certain positive weight equal to the quantity of topping on it. We denote by $S$ the sum of all the weights.
> 
> Lily goes first and takes a part of her choice. Then, starting from Hadrien, the two friends alternate turns: each player takes a part that is a neighbour of a part already taken, until there is no pizza left. The gain of a player is the sum of the weights of their parts divided by $S$.
> 
> For example, with the pizza illustrated in Figure 5 ($n = 5$, total weight $S = 7$), Lily starts by taking the part of weight $3$. Then Hadrien takes one of the two adjacent parts, here for example the one on the right. Then Lily takes the part of weight $2$, then the part of weight $1$, and finally Lily finishes by taking the part of weight $0$. In this case Lily's gain is $\frac{3+2+0}{7} = \frac{5}{7}$.
> 
> Given a distribution of the pizza parts, we denote by $g_{\max}$ the largest gain that Lily can guarantee for sure, whatever Hadrien's way of playing.
> 
> Nevertheless, she sometimes decides to think less and to play in the following way: she takes the heaviest part on the first turn, then at each step takes the heaviest of the (at most two) parts she may take; in case of a tie she may choose whichever part she wishes. The maximum gain she can guarantee by following these rules is denoted $g_{\text{glouton}}$. In particular, $g_{\max} \ge g_{\text{glouton}}$.
> 
> **1.** When $n = 2, 3, 4, 5$, what are the possible values of $g_{\max}$?
> 
> **2.** For which integers $n$ can one have $g_{\max} > g_{\text{glouton}}$, i.e., does there exist a strategy strictly better than any greedy strategy?
> 
> **3.** For which integers $n$ do we necessarily have $g_{\max} \ge \frac{1}{2}$?
> 
> **4.** Let $n$ be an integer. Bound as precisely as possible the smallest possible value of $g_{\max}$.
> 
> From now on, Lily and Hadrien play on a square brownie cut into $n \times n$ square parts. We begin by studying the case where $n$ parts are free.
> 
> **5.** Candles are now placed one per part (in the case where $n$ is odd, there must be $\left\lceil \frac{n^2}{2} \right\rceil$ or $\left\lfloor \frac{n^2}{2} \right\rfloor$ candles). How many parts containing candles can Lily ensure to obtain?
> 
> **6.** Hadrien has $k$ candles, with $k \le n^2$, and they are placed where he wishes before the start of the game. According to the values of $k$ and $n$, how many parts containing candles can Lily ensure to obtain?
> 
> **7.** Propose and study other avenues of research.

![[src_tfjm_2020__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_backward|Backward]], [[method_grafi|Grafi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
