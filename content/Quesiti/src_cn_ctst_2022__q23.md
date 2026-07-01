---
title: China National Team Selection Test 2022 — Quesito 23
tipo: quesito
lang: en
quesito_id: quesito_src_cn_ctst_2022__Q23
parent: src_cn_ctst_2022
competition: China National Team Selection Test 2022
family: ctst
year: '2022'
level: China National Team Selection Test
country: Cina
modalita: individuale
quesito: '23'
summary: >-
  Nonnegative reals summing to 4 on a cycle: find a window with both partial
  sums ≤ 1
qa_score: '3'
topics:
  - topic_algebra
  - topic_disuguaglianze
methods:
  - method_disuguaglianze
  - method_estremalita
  - method_induzione
skills:
  - skill_modellizzazione
  - skill_stima
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/cina
  - comp/ctst
  - anno/2022
  - livello/China-National-Team-Selection-Test
  - topic/algebra
  - topic/disuguaglianze
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Nonnegative reals summing to 4 on a cycle: find a window with both partial sums ≤ 1*

> Let $n$ be a fixed positive integer. Let $x_1, x_2, \ldots, x_{2n}$ be nonnegative real numbers satisfying
> $$x_1 + x_2 + \cdots + x_{2n} = 4.$$
> Prove that there exist nonnegative integers $p$ and $q$ with $q \le n - 1$ such that
> $$x_{2p+1} + x_{2p+3} + \cdots + x_{2p+2q-1} \le 1 \quad \text{and} \quad x_{2p+2} + x_{2p+4} + \cdots + x_{2p+2q} \le 1,$$
> where the subscripts are taken modulo $2n$ (i.e., $x_{2n+k} = x_k$ for all $k$).
> 
> (Note 1: subscripts are modulo $2n$, so $x_k = x_1$ when $k \equiv 1 \pmod{2n}$. Note 2: if $q = 0$, the first sum is $0$; if $q = n - 1$, the second sum is $0$.)

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_estremalita|Estremalità]], [[method_induzione|Induzione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Reali non negativi sommati a 4 su un ciclo: trovare una finestra con entrambe le somme parziali ≤ 1*

> Il valore $n$ è un intero positivo fisso. Che $x_1, x_2, \ldots, x_{2n}$ siano numeri reali non negativi che soddisfino $$x_1 + x_2 + \cdots + x_{2n} = 4.$$ Prove che esistono integri non negativi $p$ e $q$ con $q \le n - 1$ in modo tale che $$x_{2p+1} + x_{2p+3} + \cdots + x_{2p+2q-1} \le 1 \quad \text{and} \quad x_{2p+2} + x_{2p+4} + \cdots + x_{2p+2q} \le 1,$$ dove i sottoscrizioni sono prese modulo $2n$ (cioè, $x_{2n+k} = x_k$ per tutti $k$).
> 
> (Nota 1: i sottoscrizioni sono modulo $2n$, quindi $x_k = x_1$ quando $k \equiv 1 \pmod{2n}$. Nota 2: se $q = 0$, la prima somma è $0$; se $q = n - 1$, la seconda somma è $0$.)

[[src_cn_ctst_2022__Q23]]
