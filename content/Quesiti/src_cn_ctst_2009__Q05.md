---
title: China National Team Selection Test 2009 — Quesito 5
tipo: quesito
quesito_id: quesito_src_cn_ctst_2009__Q05
parent: src_cn_ctst_2009
competition: China National Team Selection Test 2009
family: ctst
year: '2009'
level: China National Team Selection Test
country: Cina
modalita: individuale
quesito: '5'
summary: Find minimum of max column sum in constrained integer array
qa_score: '4'
answer: $(2l+1)m - l^2$ where $l = \lfloor (n-1)/2 \rfloor$
topics:
  - topic_combinatoria
  - topic_algebra
methods:
  - method_estremalita
  - method_induzione
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/cina
  - comp/ctst
  - anno/2009
  - livello/China-National-Team-Selection-Test
  - topic/combinatoria
  - topic/algebra
  - gara/individuale
---

*Find minimum of max column sum in constrained integer array*

> Let $m$ be an integer greater than $1$, and let $n$ be an odd number with $3 \leq n \leq 2m$. Let $i$, $j \in \mathbb{N}$, $1 \leq i \leq m$, $1 \leq j \leq n$ satisfy:
> (1) For every $1 \leq j \leq n$: $a_{1j}, a_{2j}, \ldots, a_{mj}$ is a permutation of $1, 2, \ldots, m$;
> (2) $|a_{i,j} - a_{i,j+1}| \leq 1$ for every $1 \leq i \leq m$, $1 \leq j \leq n-1$.
> 
> Find the minimal possible value of $M = \max_{j} \sum_{i=1}^{m} a_{ij}$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_induzione|Induzione]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Risposta:** $(2l+1)m - l^2$ where $l = \lfloor (n-1)/2 \rfloor$
**Fonte:** [apri libro PDF](https://drive.google.com/file/d/1WZGXm4nA5dcZd9asSbnzGZkeWDSjqbF6/view)
