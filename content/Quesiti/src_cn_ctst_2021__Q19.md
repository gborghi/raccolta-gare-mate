---
title: China National Team Selection Test 2021 — Quesito 19
tipo: quesito
quesito_id: quesito_src_cn_ctst_2021__Q19
parent: src_cn_ctst_2021
competition: China National Team Selection Test 2021
family: ctst
year: '2021'
level: China National Team Selection Test
country: Cina
modalita: individuale
quesito: '19'
summary: >-
  n^2 distinct reals in n×n grid satisfying row/column max conditions; find min
  m
qa_score: '3'
answer: 2n - 1
topics:
  - topic_combinatoria
methods:
  - method_estremalita
  - method_casework
  - method_conteggio
skills:
  - skill_modellizzazione
  - skill_conteggio_sistematico
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/cina
  - comp/ctst
  - anno/2021
  - livello/China-National-Team-Selection-Test
  - topic/combinatoria
  - gara/individuale
---

*n^2 distinct reals in n×n grid satisfying row/column max conditions; find min m*

> Given integer $n \ge 2$. Find the least positive integer $m$, such that there are $n^2$ distinct positive real numbers $x_{i,j}$ ($1 \le i, j \le n$) satisfying the following conditions:
> \begin{enumerate}
> \item[(1)] For every $i$, $j$:
> $$x_{i,j} = \max\{x_{i,1}, x_{i,2}, \ldots, x_{i,j}\} \quad \text{or} \quad x_{i,j} = \max\{x_{1,j}, x_{2,j}, \ldots, x_{i,j}\};$$
> \item[(2)] For every $i$, there are at most $m$ indices $k$ with $x_{i,k} = \max\{x_{i,1}, x_{i,2}, \ldots, x_{i,k}\}$;
> \item[(3)] For every $j$, there are at most $m$ indices $k$ with $x_{k,j} = \max\{x_{1,j}, x_{2,j}, \ldots, x_{k,j}\}$.
> \end{enumerate}

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2n - 1
**Fonte:** apri libro PDF
