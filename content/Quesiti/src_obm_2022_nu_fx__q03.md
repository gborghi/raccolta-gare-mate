---
title: >-
  Olimpíada Brasileira de Matemática 2022 — Nível Universitário — Fase x —
  Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_obm_2022_nu_fx__Q03
parent: src_obm_2022_nu_fx
competition: Olimpíada Brasileira de Matemática 2022 — Nível Universitário — Fase x
family: obm
year: '2022'
level: OBM Nível Universitário
country: Brasile
modalita: individuale
nivel: u
fase: x
quesito: '3'
summary: Self-referential integer sequences and minimal M
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_algebra
methods:
  - method_ricorsione
  - method_induzione
  - method_invarianti
skills:
  - skill_astrazione
  - skill_lettura_attenta
  - skill_riconoscimento_pattern
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2022
  - livello/OBM-Nível-Universitário
  - nivel/u
  - fase/x
  - topic/combinatoria
  - topic/algebra
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Self-referential integer sequences and minimal M*

> Let $(a_n)_{n \in \mathbb{N}}$ be a sequence of integers. Define $a_n^{(0)} = a_n$ for every natural number $n$. For every integer $M \ge 0$, define
> $$a_n^{(M+1)} = a_{n+1}^{(M)} - a_n^{(M)}, \quad \forall n \in \mathbb{N}.$$
> We say $(a_n)_{n \in \mathbb{N}}$ is $(M+1)$-self-referential if there exist fixed natural numbers $k_1$ and $k_2$ such that
> $$a_{n+k_1}^{(M)} = a_{a_n^{(M+1)}+k_2}^{(M)}, \quad \forall n \in \mathbb{N}.$$
> (a) Does there exist a sequence of integers such that the smallest $M$ for which it is $M$-self-referential is $M = 2022$?
> (b) Does there exist a strictly increasing sequence of positive integers that is $M$-self-referential with smallest such $M = 2022$?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1vvbw-B2DJRObe_76KIsYb4Kbcb_CZYrb/view)


<span class="qlang-split" data-lang="it"></span>


*Sequenze di numeri interi autoreferenziali e M * minimo

> Let $(a_n)_{n \in \mathbb{N}}$ essere una sequenza di numeri interi. Definire $a_n^{(0)} = a_n$ per ogni numero naturale $n$. Per ogni numero intero $M \ge 0$, definire $$a_n^{(M+1)} = a_{n+1}^{(M)} - a_n^{(M)}, \quad \forall n \in \mathbb{N}.$$ Diciamo $(a_n)_{n \in \mathbb{N}}$ è $(M+1)$-auto-referenziale se esistono numeri naturali fissi $k_1$ e $k_2$ in modo tale che $$a_{n+k_1}^{(M)} = a_{a_n^{(M+1)}+k_2}^{(M)}, \quad \forall n \in \mathbb{N}.$$ (a) Esiste una sequenza di numeri interi in modo tale che il più piccolo $M$ per il quale è $M$-auto-referenziale è $M = 2022$? b) Esiste una sequenza di numeri interi positivi in stretta crescita che è $M$-auto-referenziale con il più piccolo di tali $M = 2022$?

[[src_obm_2022_nu_fx__Q03]]
