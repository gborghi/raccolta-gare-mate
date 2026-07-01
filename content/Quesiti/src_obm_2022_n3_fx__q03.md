---
title: Olimpíada Brasileira de Matemática 2022 — Nível 3 — Fase x — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_obm_2022_n3_fx__Q03
parent: src_obm_2022_n3_fx
competition: Olimpíada Brasileira de Matemática 2022 — Nível 3 — Fase x
family: obm
year: '2022'
level: OBM Nível 3
country: Brasile
modalita: individuale
nivel: '3'
fase: x
quesito: '3'
summary: >-
  Self-referential sequence: find smallest M making it M-self-referential in
  2022
qa_score: '3'
topics:
  - topic_algebra
  - topic_combinatoria
methods:
  - method_ricorsione
  - method_induzione
skills:
  - skill_manipolazione_algebrica
  - skill_astrazione
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2022
  - livello/OBM-Nível-3
  - nivel/3
  - fase/x
  - topic/algebra
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Self-referential sequence: find smallest M making it M-self-referential in 2022*

> Let $(a_n)_{n \ge 0}$ be a sequence of integers. Define $\Delta^1 a_n = a_{n+1} - a_n$ for every non-negative integer $n$. For $N \ge 2$, define $\Delta^N a_n = \Delta^{N-1} a_{n+1} - \Delta^{N-1} a_n$, and so on; that is, $\Delta^N a_n = \Delta^{N-1}(\Delta^1 a_n) = \Delta^{M-1} a_{n+1} - \Delta^{M-1} a_n$ for every non-negative integer $n$.
> 
> A sequence is called $M$-self-referential if there exist positive integers $k$ and $\ell$ such that $a_{n+k} = \Delta^M a_n$ for every non-negative integer $n$. Determine, with proof, whether there exists some sequence such that the smallest value of $M$ for which the sequence is $M$-self-referential is $2022$.

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1zz_BBn8K4_LsZ6QfCiVpK3gqOIlQZ9ly/view)


<span class="qlang-split" data-lang="it"></span>


*Sequenza autoreferenziale: trovare il più piccolo M che lo rende autoreferenziale nel 2022*

> Lasciate che $(a_n)_{n \ge 0}$ sia una sequenza di numeri interi. Definire $\Delta^1 a_n = a_{n+1} - a_n$ per ogni numero intero non negativo $n$. Per $N \ge 2$, definire $\Delta^N a_n = \Delta^{N-1} a_{n+1} - \Delta^{N-1} a_n$ e così via; cioè $\Delta^N a_n = \Delta^{N-1}(\Delta^1 a_n) = \Delta^{M-1} a_{n+1} - \Delta^{M-1} a_n$ per ogni numero intero non negativo $n$.
> 
> Una sequenza è chiamata $M$-auto-referenziale se esistono interi positivi $k$ e $\ell$ in modo tale che $a_{n+k} = \Delta^M a_n$ per ogni intero non negativo $n$. Determinare, con la prova, se esiste una sequenza tale che il valore più piccolo di $M$ per la quale la sequenza è $M$-auto-referenziale è $2022$.

[[src_obm_2022_n3_fx__Q03]]
