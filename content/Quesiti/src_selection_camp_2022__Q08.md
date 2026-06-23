---
title: Japan IMO Selection Camp 2022 — Selection Camp — Quesito 8
tipo: quesito
quesito_id: quesito_src_selection_camp_2022__Q08
parent: src_selection_camp_2022
competition: Japan IMO Selection Camp 2022 — Selection Camp
family: jcamp
year: '2022'
level: CAMP Selection Camp
country: Giappone
modalita: individuale
quesito: '8'
summary: Minimum operations for chairman to achieve majority preference ordering
qa_score: '4'
topics:
  - topic_combinatoria
methods:
  - method_estremalita
  - method_invarianti
  - method_casework
  - method_conteggio
skills:
  - skill_modellizzazione
  - skill_conteggio_sistematico
  - skill_ragionamento_geometrico
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/giappone
  - comp/jcamp
  - anno/2022
  - livello/CAMP-Selection-Camp
  - topic/combinatoria
  - gara/individuale
---

*Minimum operations for chairman to achieve majority preference ordering*

> Let $m$ be an odd integer with $m \ge 3$, and let $n$ be an integer with $n \ge 3$. For each integer $i$ with $1 \le i \le m$, let $a_{i,1}, a_{i,2}, \ldots, a_{i,n}$ be a permutation of $1, 2, \ldots, n$.
> 
> A chairman and $m$ delegates (delegate $1$, delegate $2$, $\ldots$, delegate $m$) are holding a meeting to select problems for this year's IMO. There are $n$ candidate problems (problem $1$, problem $2$, $\ldots$, problem $n$). Each delegate has a **preference score** for each problem, which is an integer from $1$ to $n$; the initial preference score of delegate $i$ for problem $j$ is $a_{i,j}$. The chairman can repeatedly perform the following operation:
> 
> > Choose integers $i, j, k$ with $1 \le i \le m$ and $1 \le j, k \le n$ such that the difference between delegate $i$'s preference scores for problem $j$ and problem $k$ is exactly $1$, and swap those two preference scores of delegate $i$.
> 
> Regardless of the values of the $mn$ integers $a_{i,j}$ ($1 \le i \le m$, $1 \le j \le n$), find the minimum non-negative integer $L$ such that the chairman can achieve the following condition by performing the operation at most $L$ times:
> 
> > For any two distinct integers $x, y$ with $1 \le x, y \le n$, there exist an integer $s \ge 2$ and a sequence $p_1, p_2, \ldots, p_s$ of integers from $1$ to $n$ with $p_1 = x$ and $p_s = y$, such that for every integer $t$ with $1 \le t \le s-1$, at least $\dfrac{m+1}{2}$ delegates have a strictly higher preference score for problem $p_{t+1}$ than for problem $p_t$.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_invarianti|Invarianti]], [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1IbxW-7wHAbocY02LPUXVJ2fiAgki09kb/view)
