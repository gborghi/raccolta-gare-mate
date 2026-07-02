---
title: >-
  Olimpíada Brasileira de Matemática 2021 — Nível Universitário — Fase x —
  Quesito 6
tipo: quesito
lang: en
quesito_id: quesito_src_obm_2021_nu_fx__Q06
parent: src_obm_2021_nu_fx
competition: Olimpíada Brasileira de Matemática 2021 — Nível Universitário — Fase x
family: obm
year: '2021'
level: OBM Nível Universitário
country: Brasile
modalita: individuale
nivel: u
fase: x
quesito: '6'
summary: 'Recursively defined bacana word pairs; prove (α,β) bacana iff αβ is palindrome'
qa_score: '5'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_induzione
  - method_invarianti
skills:
  - skill_lettura_attenta
  - skill_astrazione
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2021
  - livello/OBM-Nível-Universitário
  - nivel/u
  - fase/x
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Recursively defined bacana word pairs; prove (α,β) bacana iff αβ is palindrome*

> We recursively define **bacana** pairs of words $(\alpha, \beta)$ over the alphabet $\{a, b\}$ as follows: $(\alpha, \beta)$ is a bacana pair if and only if there exists a bacana pair $(u, w)$ such that $(\alpha, \beta) = (u, w)$ or $(\alpha, \beta) = (w, u)$; or there exist $c_i \in \{a, b\}$ for all $i$, and a positive integer $n$, such that $\alpha = c_1 c_2 \ldots c_n$ with $c_{n+1-j} = c_j$ for all $1 \le j \le n$.
> 
> We say a word $c_1 c_2 \ldots c_n$ with $c_i \in \{a, b\}$ is a **palindrome** if $c_{n+1-j} = c_j$ for all $1 \le j \le n$.
> 
> Prove that $(\alpha, \beta)$ is a bacana pair if and only if the concatenation $\alpha\beta$ is a palindrome.
> 
> *Remark:* We agree that the empty word (with $0$ letters) is a palindrome. Given words $u = a_1 a_2 \ldots a_i$ and $v = b_1 b_2 \ldots b_j$, the symbol $uv$ denotes their concatenation $a_1 a_2 \ldots a_i b_1 b_2 \ldots b_j$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_induzione|Induzione]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_astrazione|Astrazione]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1MgR4bVfP7Fq55ZFrheOqs-UCf6k35qyg/view)


<span class="qlang-split" data-lang="it"></span>


*Parli di parole bacana definiti ricorrentemente; prove (α,β) bacana se αβ è palindromo*

> Difiniamo ricorrentemente **bacana** coppie di parole $(\alpha, \beta)$ sull'alfabeto $\{a, b\}$ come segue: $(\alpha, \beta)$ è una coppia di bacana se e solo se esiste una coppia di bacana $(u, w)$ tale che $(\alpha, \beta) = (u, w)$ o $(\alpha, \beta) = (w, u)$; oppure esiste $c_i \in \{a, b\}$ per tutti $i$, e un intero positivo $n$, tale che $\alpha = c_1 c_2 \ldots c_n$ con $c_{n+1-j} = c_j$ per tutti $1 \le j \le n$.
> 
> Diciamo che una parola $c_1 c_2 \ldots c_n$ con $c_i \in \{a, b\}$ è un **palindromo** se $c_{n+1-j} = c_j$ per tutti $1 \le j \le n$.
> 
> Prova che $(\alpha, \beta)$ è una coppia di bacana se e solo se la concatenamento $\alpha\beta$ è un palindromo.
> 
> *Ricordo: * Siamo d'accordo che la parola vuota (con lettere $0$) è un palindromo. Se le parole $u = a_1 a_2 \ldots a_i$ e $v = b_1 b_2 \ldots b_j$ sono indicate, il simbolo $uv$ indica la loro concatenamento $a_1 a_2 \ldots a_i b_1 b_2 \ldots b_j$.

[[src_obm_2021_nu_fx__Q06]]
