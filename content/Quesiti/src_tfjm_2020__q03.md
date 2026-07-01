---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020 — Quesito 3
tipo: quesito
lang: en
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
<div class="qlang-switch" data-default="en"></div>


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


<span class="qlang-split" data-lang="it"></span>


*Gioco strategico di pizza-sharing: massimizzazione del guadagno con le pizze circolari e quadrate*

> Lily e Hadrien si incontrano per un banchetto, e entrambi vogliono mangiare il piu' possibile.
> 
> Una pizza è tagliata in parti $n$, e ciascuna parte ha un certo peso positivo pari alla quantità di topping su di essa. Indichiamo con $S$ la somma di tutti i pesi.
> 
> Lily e' la prima a prendere una parte della sua scelta. Poi, partendo da Hadrien, i due amici si alternano: ogni giocatore prende una parte che è vicina di una parte già presa, finché non rimane nessuna pizza. Il guadagno di un giocatore è la somma dei pesi delle sue parti divise da $S$.
> 
> Per esempio, con la pizza illustrata nella figura 5 ($n = 5$, peso totale $S = 7$), Lily inizia prendendo la parte di peso $3$. Poi Hadrien prende una delle due parti adiacenti, qui per esempio quella a destra. Poi Lily prende la parte di peso $2$, poi la parte di peso $1$, e infine Lily finisce prendendo la parte di peso $0$. In questo caso il guadagno di Lily è $\frac{3+2+0}{7} = \frac{5}{7}$.
> 
> Data la distribuzione delle parti della pizza, indichiamo con $g_{\max}$ il più grande guadagno che Lily possa garantire con certezza, qualunque sia il modo di giocare di Hadrien.
> 
> Tuttavia, a volte decide di pensare meno e di giocare in questo modo: prende la parte più pesante alla prima curva, poi ad ogni passo prende la parte più pesante delle due parti che può prendere; in caso di pareggio può scegliere la parte che desidera. Il guadagno massimo che può garantire seguendo queste regole è indicato come $g_{\text{glouton}}$. In particolare, $g_{\max} \ge g_{\text{glouton}}$.
> 
> < MSK2/>1.< MSK3/> Quando < MSK0/>, quali sono i valori possibili di < MSK1/>?
> 
> **2.** Per quali integri $n$ si può avere $g_{\max} > g_{\text{glouton}}$, vale a dire, esiste una strategia strettamente migliore di qualsiasi strategia avida?
> 
> **3.** Per quali integri $n$ abbiamo necessariamente $g_{\max} \ge \frac{1}{2}$?
> 
> **4.** $n$ sia un numero intero. Legato con la massima precisione possibile il minimo valore possibile di $g_{\max}$.
> 
> D'ora in poi, Lily e Hadrien giocano su un brownie quadrato tagliato in parti quadrate. Iniziamo studiando il caso in cui le parti $n$ sono gratuite.
> 
> < MSK3/>5. < MSK4/> Le candele sono ora posizionate una per ogni parte (nel caso in cui < MSK0/> sia imparato, devono esserci < MSK1/> o < MSK2/> candele). Quante parti contenenti candele può Lily assicurarsi di ottenere?
> 
> **6. ** Hadrien ha le candele $k$, con $k \le n^2$, e vengono posizionate dove vuole prima dell'inizio della partita. Secondo i valori di $k$ e $n$, quante parti contenenti candele può Lily garantire di ottenere?
> 
> **7.** Proporre e studiare altre vie di ricerca.

![[src_tfjm_2020__Q03.png]]

[[src_tfjm_2020__Q03]]
