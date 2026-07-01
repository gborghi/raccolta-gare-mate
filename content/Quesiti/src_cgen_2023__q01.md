---
title: Concours Général des Lycées 2023 — Matematica — Quesito 1
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2023__Q01
parent: src_cgen_2023
competition: Concours Général des Lycées 2023 — Matematica
family: concours_generale
year: '2023'
level: Concours Général
country: Francia
modalita: individuale
quesito: '1'
summary: >-
  A recursively defined sequence built from the function r(n) (largest k with
  n/k integer); show its terms are positive rationals and that every positive
  rational appears exactly once.
qa_score: '2'
topics:
  - topic_aritmetica
  - topic_insiemi_funzioni
methods:
  - method_induzione
  - method_ricorsione
  - method_fattorizzazione
  - method_bigezione
skills:
  - skill_manipolazione_algebrica
  - skill_lettura_attenta
  - skill_riconoscimento_pattern
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2023
  - livello/Concours-Général
  - topic/aritmetica
  - topic/insiemi_funzioni
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*A recursively defined sequence built from the function r(n) (largest k with n/k integer); show its terms are positive rationals and that every positive rational appears exactly once.*

> Problem 1: Let us be rational.
> 
> For every integer $n \ge 1$, let $r(n)$ denote the largest integer $k$ such that $\frac{n}{k}$ is an integer (so $r(n) = n$). One defines a sequence $(u_n)_{n \ge 1}$ by: $u_1 = 1$ and, for every integer $n \ge 2$,
> $$u_n = \begin{cases} 0 & \text{if } u_{n-1} = 0, \\ 1 + 2\,r(n) - \dfrac{1}{u_{n-1}} & \text{if } u_{n-1} \ne 0. \end{cases}$$
> 
> 1. Give the values of $u_1$, $u_2$, $u_3$, $u_4$ and $u_5$.
> 
> 2. Show that for every integer $n \ge 1$, one has $r(n) = 0$ if and only if $n$ is odd, and (if $n$ is even) $r(n) = r\!\left(\frac{n}{2}\right) + 1$.
> 
> 3. Determine the smallest values of $n$ for which $u_n = 4$.
> 
> 4. Show that, for every integer $n \ge 1$ for which $u_n \ne 0$, the term $u_n$ is a strictly positive rational number.
> 
> 5. Show that every strictly positive rational number is equal to some term $u_n$ of the sequence.
> 
> 6. Show that every strictly positive rational number is equal to a unique term $u_n$ of the sequence.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]], [[method_fattorizzazione|Fattorizzazione]], [[method_bigezione|Biiezione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1UEmDklBRoLwyCF47wsu7dNuzbiS9gQhj/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Una sequenza definita ricorritivamente costruita dalla funzione r(n) (k più grande con n/k intero); mostrare che i suoi termini sono razionali positivi e che ogni razionale positivo appare esattamente una volta.*

> Il problema 1: siamo razionali.
> 
> Per ogni numero intero $n \ge 1$, $r(n)$ indichi il numero intero più grande $k$ in modo tale che $\frac{n}{k}$ sia un numero intero (così $r(n) = n$). Una sequenza $(u_n)_{n \ge 1}$ viene definita da: $u_1 = 1$ e, per ogni numero intero $n \ge 2$, $$u_n = \begin{cases} 0 & \text{if } u_{n-1} = 0, \\ 1 + 2\,r(n) - \dfrac{1}{u_{n-1}} & \text{if } u_{n-1} \ne 0. \end{cases}$$
> 
> 1. Indicare i valori di $u_1$, $u_2$, $u_3$, $u_4$ e $u_5$.
> 
> 2. Mostrare che per ogni intero $n \ge 1$, si ha $r(n) = 0$ se e solo se $n$ è odd, e (se $n$ è pari) $r(n) = r\!\left(\frac{n}{2}\right) + 1$.
> 
> 3. Determinare i valori più piccoli di $n$ per i quali $u_n = 4$.
> 
> 4. Mostra che per ogni numero intero $n \ge 1$ per il quale $u_n \ne 0$, il termine $u_n$ è un numero razionale rigorosamente positivo.
> 
> 5. Mostrare che ogni numero razionale rigorosamente positivo è uguale a qualche termine $u_n$ della sequenza.
> 
> 6. Mostrare che ogni numero razionale rigorosamente positivo è uguale a un termine unico $u_n$ della sequenza.

[[src_cgen_2023__Q01]]
