---
title: Indian National Mathematical Olympiad 2016 — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_inmo_2016__Q03
parent: src_inmo_2016
competition: Indian National Mathematical Olympiad 2016
family: inmo
year: '2016'
level: INMO
country: India
modalita: individuale
quesito: '3'
summary: >-
  Function T on naturals, show iterations reach 1, Fibonacci recurrence for
  counts
qa_score: '4'
topics:
  - topic_aritmetica
  - topic_combinatoria
methods:
  - method_induzione
  - method_ricorsione
skills:
  - skill_riconoscimento_pattern
  - skill_manipolazione_algebrica
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/india
  - comp/inmo
  - anno/2016
  - livello/INMO
  - topic/aritmetica
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Function T on naturals, show iterations reach 1, Fibonacci recurrence for counts*

> Let $\mathbb{N}$ denote the set of all natural numbers. Define a function $T : \mathbb{N} \to \mathbb{N}$ by $T(2k) = k$ and $T(2k+1) = 2k + 2$. We write $T^1(n) = T(T(n))$ and in general $T^k(n) = T(T^{k-1}(n))$ for any $k \ge 1$.
> (i) Show that for each $n \in \mathbb{N}$, there exists $k$ such that $T^k(n) = 1$.
> (ii) For $k \in \mathbb{N}$, let $c_k$ denote the number of elements in the set $\{n : T^k(n) = 1\}$. Prove that $c_{k+2} = c_{k+1} + c_k$ for $k \ge 1$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1woBuE2HYjU-e_MK1TenDn20fm5TAalE-/view)


<span class="qlang-split" data-lang="it"></span>


*Funzione T su naturali, mostrare iterazioni raggiungono 1, ricorrenza di Fibonacci per i conti*

> $\mathbb{N}$ indichi l'insieme di tutti i numeri naturali. Definire una funzione $T : \mathbb{N} \to \mathbb{N}$ da $T(2k) = k$ e $T(2k+1) = 2k + 2$. Scriviamo $T^1(n) = T(T(n))$ e in generale $T^k(n) = T(T^{k-1}(n))$ per qualsiasi $k \ge 1$. (i) Indicare che per ogni $n \in \mathbb{N}$, esiste un $k$ tale che $T^k(n) = 1$. (ii) Per $k \in \mathbb{N}$, $c_k$ indichi il numero di elementi dell'insieme $\{n : T^k(n) = 1\}$. Provare che $c_{k+2} = c_{k+1} + c_k$ per $k \ge 1$.

[[src_inmo_2016__Q03]]
