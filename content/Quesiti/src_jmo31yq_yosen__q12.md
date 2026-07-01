---
title: Japan Mathematical Olympiad 2021 — Yosen (Preliminary) — Quesito 12
tipo: quesito
lang: en
quesito_id: quesito_src_jmo31yq_yosen__Q12
parent: src_jmo31yq_yosen
competition: Japan Mathematical Olympiad 2021 — Yosen (Preliminary)
family: jmo
year: '2021'
level: JMO Yosen
country: Giappone
modalita: individuale
quesito: '12'
summary: 'Coins on 7x7 board, four spreading operations; maximize total coins'
qa_score: '4'
answer: '19'
topics:
  - topic_combinatoria
methods:
  - method_invarianti
  - method_estremalita
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_lettura_attenta
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/giappone
  - comp/jmo
  - anno/2021
  - livello/JMO-Yosen
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Coins on 7x7 board, four spreading operations; maximize total coins*

> There is a $7\times 7$ array of cells. One coin is placed on the cell in the $1$st row from the top and the $4$th column from the left. We say cell $Y$ is to the lower-left of cell $X$ if, for some positive integer $k$, $Y$ is $k$ cells left and $k$ cells below $X$; similarly, $Y$ is to the lower-right of $X$ if, for some positive integer $k$, $Y$ is $k$ cells right and $k$ cells below $X$. For a cell $X$ not in the bottom row that has a coin on it, one may perform exactly one of the following four operations:
> (a) Remove a coin from $X$ and place one coin on the cell $1$ below $X$.
> (b) Remove a coin from $X$ and place one coin on each of the cells to the lower-left of $X$.
> (c) Remove a coin from $X$ and place one coin on each of the cells to the lower-right of $X$.
> (d) Remove a coin from $X$ and place one coin on each of the cell $1$ left and $1$ below $X$ and the cell $1$ right and $1$ below $X$; however, if only one of these two cells exists, place a coin only on that one cell.
> If one tries to place a coin on a cell that already has a coin, no coin is placed there. After performing such operations any number of times, find the maximum possible number of coins that can be on the cells.

![[src_jmo31yq_yosen__Q12.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 19
**Fonte:** [apri PDF](https://drive.google.com/file/d/1OaNH9dsPASreVzt0kNEfXrpZaywkBl-p/view)


<span class="qlang-split" data-lang="it"></span>


< MSK0/>Monete su tavolo 7x7, quattro operazioni di diffusione; massimizzazione del totale delle monete< MSK1/>

> C'è un array di celle $7\times 7$. Una moneta viene posta sulla cella nella riga $1$st dall'alto e nella colonna $4$th dalla sinistra. Diciamo che la cellula $Y$ è a basso a sinistra della cellula $X$ se, per qualche intero positivo $k$, $Y$ è $k$ cellule a sinistra e $k$ cellule al di sotto $X$; allo stesso modo, $Y$ è a basso a destra di $X$ se, per qualche intero positivo $k$, $Y$ è $k$ cellule a destra e $k$ cellule al di sotto $X$. Per una cella $X$ che non è nella riga inferiore che ha una moneta sopra, si può eseguire esattamente una delle seguenti quattro operazioni: (a) Rimuovere una moneta da $X$ e inserire una moneta nella cella $1$ sotto $X$. b) Rimuovere una moneta da $X$ e posizionare una moneta su ciascuna delle celle situate in basso a sinistra di $X$. (c) Rimuovere una moneta da $X$ e posizionare una moneta su ciascuna delle celle in basso a destra di $X$. (d) Rimuovere una moneta da $X$ e posizionare una moneta su ciascuna delle celle $1$ a sinistra e $1$ sotto $X$ e la cella $1$ a destra e $1$ sotto $X$; tuttavia, se esiste solo una di queste due celle, posizionare una moneta solo su quella cella. Se si cerca di mettere una moneta su una cella che già ha una moneta, non viene messa lì. Dopo aver eseguito tali operazioni un certo numero di volte, trova il numero massimo possibile di monete che possono essere sulle celle.

![[src_jmo31yq_yosen__Q12.png]]

**Risposta:** 19
[[src_jmo31yq_yosen__Q12]]
