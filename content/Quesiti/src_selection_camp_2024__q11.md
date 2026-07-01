---
title: Japan IMO Selection Camp 2024 — Selection Camp — Quesito 11
tipo: quesito
lang: en
quesito_id: quesito_src_selection_camp_2024__Q11
parent: src_selection_camp_2024
competition: Japan IMO Selection Camp 2024 — Selection Camp
family: jcamp
year: '2024'
level: CAMP Selection Camp
country: Giappone
modalita: individuale
quesito: '11'
summary: n x n grid filled bijectively under a congruence; maximize adjacent +1 pairs
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_congruenze
  - method_estremalita
  - method_conteggio
skills:
  - skill_conteggio_sistematico
  - skill_casework_accurato
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/giappone
  - comp/jcamp
  - anno/2024
  - livello/CAMP-Selection-Camp
  - topic/combinatoria
  - topic/aritmetica
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*n x n grid filled bijectively under a congruence; maximize adjacent +1 pairs*

> Let $n$ be an integer with $n \ge 2$. Each cell of an $n \times n$ grid is filled with one of the distinct integers from $1$ to $n^2$, each used exactly once. Let $a_{i,j}$ be the integer written in the cell of the $i$-th row from the top and the $j$-th column from the left. Suppose the following holds:
> $$\text{for all integers } i, j \text{ with } 1 \le i \le n,\ 1 \le j \le n, \quad n \mid a_{i,j} - (i + j - 1).$$
> Determine the maximum possible number of pairs $(i, j)$, with $1 \le i \le n$ and $1 \le j \le n-1$, such that $a_{i,j+1} = a_{i,j} + 1$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1PL_Bn-4WncGMxFABFvS--QrLAcF9eVC7/view)

> [!warning] Estratto da scansione giapponese a bassa risoluzione — enunciato tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*n x n griglia riempita bietivamente sotto una congruenza; massimizzare le coppie adiacenti +1*

> $n$ sia un numero intero con $n \ge 2$. Ogni cella di una griglia $n \times n$ è riempita di uno dei numeri interi distinti da $1$ a $n^2$, ciascuna utilizzata esattamente una volta. $a_{i,j}$ sia il numero intero scritto nella cella della prima riga $i$ dall'alto e della seconda colonna $j$ dalla sinistra. Supponiamo le seguenti sostanze: $$\text{for all integers } i, j \text{ with } 1 \le i \le n,\ 1 \le j \le n, \quad n \mid a_{i,j} - (i + j - 1).$$ Determinare il numero massimo possibile di coppie $(i, j)$, con $1 \le i \le n$ e $1 \le j \le n-1$, in modo tale che $a_{i,j+1} = a_{i,j} + 1$.

[[src_selection_camp_2024__Q11]]
