---
title: >-
  Olimpíada Brasileira de Matemática 2019 — Nível Universitário — Fase 2 —
  Quesito 6
tipo: quesito
quesito_id: quesito_src_obm_2019_nu_f2__Q06
parent: src_obm_2019_nu_f2
competition: Olimpíada Brasileira de Matemática 2019 — Nível Universitário — Fase 2
family: obm
year: '2019'
level: OBM Nível Universitário
country: Brasile
modalita: individuale
nivel: u
fase: '2'
quesito: '6'
summary: >-
  Limit of f(n)/n! where f(n) counts derangements with no 2-cycles (secret
  friend with no 'jam')
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_probabilita
methods:
  - method_inclusione_esclusione
  - method_conteggio
skills:
  - skill_conteggio_sistematico
  - skill_stima
  - skill_astrazione
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2019
  - livello/OBM-Nível-Universitário
  - nivel/u
  - fase/2
  - topic/combinatoria
  - topic/probabilita
  - gara/individuale
---

*Limit of f(n)/n! where f(n) counts derangements with no 2-cycles (secret friend with no 'jam')*

> In a friends gathering, suppose no one is their own secret friend. We say that two people $A$ and $B$ have a "jam" (marmelada) if there exist two people $A$ and $B$ such that $B$ is $A$'s secret friend and $A$ is $B$'s secret friend. For each positive integer $n$, let $f(n)$ be the number of secret-friend drawings with $n$ people that have no "jam", i.e. $f(n)$ is the number of permutations $\sigma$ of $\{1, 2, \ldots, n\}$ such that:
> 
> $\circ$ $\sigma(i) \neq i$ for all $i = 1, 2, \ldots, n$;
> 
> $\circ$ there do not exist $1 \leq i < j \leq n$ such that $\sigma(i) = j$ and $\sigma(j) = i$.
> 
> Determine the limit
> $$\lim_{n \to +\infty} \frac{f(n)}{n!}.$$

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF
