---
title: China National Team Selection Test 2022 — Quesito 15
tipo: quesito
lang: en
quesito_id: quesito_src_cn_ctst_2022__Q15
parent: src_cn_ctst_2022
competition: China National Team Selection Test 2022
family: ctst
year: '2022'
level: China National Team Selection Test
country: Cina
modalita: individuale
quesito: '15'
summary: >-
  Odd integers a_1≤…≤a_n: find all tuples for which a packing code of size M
  exists
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_congruenze
  - method_conteggio
  - method_induzione
skills:
  - skill_modellizzazione
  - skill_conteggio_sistematico
  - skill_astrazione
tags:
  - kg/quesito
  - paese/cina
  - comp/ctst
  - anno/2022
  - livello/China-National-Team-Selection-Test
  - topic/combinatoria
  - topic/aritmetica
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Odd integers a_1≤…≤a_n: find all tuples for which a packing code of size M exists*

> Given a positive integer $n \ge 2$. Find all $(a_1, a_2, \ldots, a_n) \in \mathbb{Z}^n$ satisfying the following conditions:
> (1) Each $a_i$ is odd and $1 < a_1 \le a_2 \le \cdots \le a_n$, and $M = \dfrac{1}{2^n}\prod_{i=1}^{n}(a_i - 1)$ is a positive integer;
> (2) There exist $M$ tuples $(c_{1,1}, \ldots, c_{1,n}), (c_{2,1}, \ldots, c_{2,n}), \ldots, (c_{M,1}, \ldots, c_{M,n}) \in \mathbb{Z}^n$ such that for any $1 \le i < j \le M$, there exists some index $k \in \{1, 2, \ldots, n\}$ with $c_{i,k} - c_{j,k} \not\equiv 0, \pm 1 \pmod{a_k}$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_conteggio|Conteggio]], [[method_induzione|Induzione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1OFC5fmTEMyWQSx2doV1_Jplo27sQCZ_A/view)


<span class="qlang-split" data-lang="it"></span>


*Odd integri a_1≤...≤a_n: trovare tutti i tuppi per i quali esiste un codice di imballaggio di dimensione M*

> Date un numero intero positivo $n \ge 2$. Trova tutte le $(a_1, a_2, \ldots, a_n) \in \mathbb{Z}^n$ che soddisfano le seguenti condizioni: (1) Ogni $a_i$ è pari e $1 < a_1 \le a_2 \le \cdots \le a_n$, e $M = \dfrac{1}{2^n}\prod_{i=1}^{n}(a_i - 1)$ è un intero positivo; (2) Esistono $M$ tuples $(c_{1,1}, \ldots, c_{1,n}), (c_{2,1}, \ldots, c_{2,n}), \ldots, (c_{M,1}, \ldots, c_{M,n}) \in \mathbb{Z}^n$ in modo che per qualsiasi $1 \le i < j \le M$, esiste un indice $k \in \{1, 2, \ldots, n\}$ con $c_{i,k} - c_{j,k} \not\equiv 0, \pm 1 \pmod{a_k}$.

[[src_cn_ctst_2022__Q15]]
