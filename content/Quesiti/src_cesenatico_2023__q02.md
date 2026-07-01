---
title: Olimpiade Italiana (Cesenatico) 2023 - testi e soluzioni — Quesito 2
tipo: quesito
lang: it
quesito_id: quesito_src_cesenatico_2023__Q02
parent: src_cesenatico_2023
competition: Olimpiade Italiana (Cesenatico) 2023 - testi e soluzioni
family: archimede
year: '2023'
level: nazionale
country: Italia
modalita: individuale
quesito: '2'
summary: stabilita e minimo k
answer: k=2n+1
topics:
  - topic_combinatoria
methods:
  - method_estremalita
  - method_invarianti
skills:
  - skill_astrazione
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2023
  - livello/nazionale
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*stabilita e minimo k*

> Sia n un intero positivo. Su una lavagna Bobo scrive n interi maggiori o uguali a zero.
> Successivamente, ad ogni mossa Bobo
> • per ogni i = 1, . . . , n calcola il numero ai di interi scritti in quel momento sulla lavagna
> e minori o uguali a i,
> • cancella tutti i numeri scritti,
> • scrive sulla lavagna i numeri a1, a2, . . . , an.
> Ad esempio, se n = 5 e i numeri scritti inizialmente sono 0, 7, 2, 6, 2, dopo la prima mossa
> saranno 1, 3, 3, 3, 3, dopo la seconda mossa saranno 1, 1, 5, 5, 5, e così via.
> (a) Dimostrare che, per ogni n e per ogni configurazione iniziale, da un certo punto in poi
> i numeri scritti sulla lavagna non cambiano più.
> (b) Determinare, in funzione di n, il minimo intero positivo k con la proprietà che, per
> qualsiasi configurazione iniziale, le mosse dalla k-esima in poi non cambiano più i numeri
> scritti sulla lavagna.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** k=2n+1
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1K2tSI9y0Z1EOzNjwEfT72n8wgtnVThOH/view)


<span class="qlang-split" data-lang="en"></span>


< MSK0/>stability and minimum k< MSK1/>

> Let it be a positive integer. On a board, Bobo writes n integers greater than or equal to zero. Next, for every Bobo move • for every i = 1, . . . , n calculates the number a of integers written at that time on the board and less than or equal to i, • deletes all the numbers written, • writes on the board the numbers a1, a2, . . . , an. For example, if n = 5 and the numbers written initially are 0, 7, 2, 6, 2, after the first move will be 1, 3, 3, 3, 3, after the second move will be 1, 1, 5, 5, 5, and so on. (a) Demonstrate that, for each n and for each initial configuration, the numbers written on the board do not change from a certain point onwards. (b) Determine, as a function of n, the positive minimum integer k with the property that, for any initial configuration, moves from k-eighth to next no longer change the numbers written on the board.

**Answer:** k=2n+1
[[src_cesenatico_2023__Q02]]
