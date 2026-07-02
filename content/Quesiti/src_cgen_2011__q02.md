---
title: Concours Général des Lycées 2011 — Matematica — Quesito 2
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2011__Q02
parent: src_cgen_2011
competition: Concours Général des Lycées 2011 — Matematica
family: concours_generale
year: '2011'
level: Concours Général
country: Francia
modalita: individuale
quesito: '2'
summary: >-
  Capacity of a coin purse: largest M such that every amount from 1 to M can be
  paid, first without change then with change; optimize the denominations.
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_casework
  - method_conteggio
  - method_estremalita
skills:
  - skill_conteggio_sistematico
  - skill_casework_accurato
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2011
  - livello/Concours-Général
  - topic/combinatoria
  - topic/aritmetica
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Capacity of a coin purse: largest M such that every amount from 1 to M can be paid, first without change then with change; optimize the denominations.*

> **Problem 2: Give the change!**
> 
> A buyer has in his purse $n$ coins. We denote $a_1, \ldots, a_n$ the face values of these coins - these are strictly positive integers. Let us agree to call the *capacity* of this purse the largest integer $M$ such that one can pay, without giving change, every (whole) sum from $1$ to $M$. We denote $C(a_1, \ldots, a_n)$ the capacity of the purse containing the coins $a_1, \ldots, a_n$.
> 
> **1. Without change.** In this question we assume that $a_1 = 1$ and $a_1 \le a_2 \le \ldots \le a_n$.
> 
> **a.** Compute the capacities $C(1,2,4)$, $C(1,2,5)$ and $C(1,2,3,4,5)$.
> 
> **b.** Let $j$ be a whole number between $1$ and $n-1$, and let us fix the numbers $a_1, \ldots, a_j$. Under what condition on $a_{j+1}$ does one have $C(a_1, \ldots, a_j) \ne C(a_1, \ldots, a_j, a_{j+1})$?
> 
> **c.** Give a method to compute $C(a_1, \ldots, a_n)$.
> 
> **d.** Fix $n$. How should one choose the integers $a_1, \ldots, a_n$ so that the capacity $C(a_1, \ldots, a_n)$ is as large as possible?
> 
> **2. With change.** The merchant at whose shop our buyer goes shopping also has a purse, allowing him to give change. Let us fix integers $n$ and $p$. Let us call *common capacity* the largest integer $M$ such that one can pay (i.e. carry out the transaction) every whole sum from $1$ to $M$. How should one choose the purses $(a_1, \ldots, a_n)$ of the buyer and $(v_1, \ldots, v_p)$ of the seller so that they offer the largest possible common capacity?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/163UddjoW74HzYM11ncOycs88qAZ5uQV4/view)


<span class="qlang-split" data-lang="it"></span>


*Capacità di una borsa di monete: M più grande in modo che ogni importo da 1 a M possa essere versato, prima senza cambiamento e poi con cambiamento; ottimizzare le denominazioni.*

> **Problema 2: Date il cambio!**
> 
> Un acquirente ha nella borsa delle monete $n$. Indichiamo $a_1, \ldots, a_n$ i valori facciali di queste monete - sono numeri interi strettamente positivi. Accordiamo di chiamare la capacità ** di questa borsa il numero intero più grande $M$ in modo che si possa pagare, senza cambiare, ogni somma (intera) da $1$ a $M$. Indichiamo $C(a_1, \ldots, a_n)$ la capacità della borsa contenente le monete $a_1, \ldots, a_n$.
> 
> **1. In questa domanda presumiamo che $a_1 = 1$ e $a_1 \le a_2 \le \ldots \le a_n$.
> 
> **a.** Calcolare le capacità $C(1,2,4)$, $C(1,2,5)$ e $C(1,2,3,4,5)$.
> 
> **b.** $j$ sia un numero intero tra $1$ e $n-1$, e fichiamo i numeri $a_1, \ldots, a_j$. In quale condizione si ha un $C(a_1, \ldots, a_j) \ne C(a_1, \ldots, a_j, a_{j+1})$ su $a_{j+1}$?
> 
> **c.** Indicare un metodo per calcolare $C(a_1, \ldots, a_n)$.
> 
> **d.** Risolvi $n$. Come si scelgono gli enti $a_1, \ldots, a_n$ in modo che la capacità $C(a_1, \ldots, a_n)$ sia il più grande possibile?
> 
> **2. Con il cambio.** Il commerciante al quale il nostro acquirente va a fare acquisti ha anche una borsa, che gli consente di dare il cambio. Fissamo gli integri $n$ e $p$. Chiamiamo *capacità comune* il numero intero più grande $M$ in modo che si possa pagare (cioè effettuare l'operazione) ogni importo intero da $1$ a $M$. Come si possono scegliere i portafogli $(a_1, \ldots, a_n)$ dell'acquirente e $(v_1, \ldots, v_p)$ del venditore, in modo da offrire la massima capacità comune possibile?

[[src_cgen_2011__Q02]]
