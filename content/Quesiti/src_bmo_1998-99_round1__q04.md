---
title: British Mathematical Olympiad 1998-99 — Round 1 — Quesito 4
tipo: quesito
lang: en
quesito_id: quesito_src_bmo_1998-99_round1__Q04
parent: src_bmo_1998-99_round1
competition: British Mathematical Olympiad 1998-99 — Round 1
family: bmo
year: '1999'
level: BMO Round 1
country: Regno Unito
modalita: individuale
quesito: '4'
summary: 'Base-3 digit cube sum iteration eventually reaches 1, 2, or 17'
qa_score: '5'
topics:
  - topic_aritmetica
  - topic_combinatoria
methods:
  - method_invarianti
  - method_casework
  - method_estremalita
skills:
  - skill_riconoscimento_pattern
  - skill_manipolazione_algebrica
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/regno-unito
  - comp/bmo
  - anno/1999
  - livello/BMO-Round-1
  - topic/aritmetica
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Base-3 digit cube sum iteration eventually reaches 1, 2, or 17*

> Any positive integer $m$ can be written uniquely in base 3 form as a string of 0's, 1's and 2's (not beginning with a zero). For example,
> $$98 = (1 \times 81) + (0 \times 27) + (1 \times 9) + (2 \times 3) + (2 \times 1) = (10122)_3.$$
> Let $c(m)$ denote the sum of the cubes of the digits of the base 3 form of $m$; thus, for instance
> $$c(98) = 1^3 + 0^3 + 1^3 + 2^3 + 2^3 = 18.$$
> Let $n$ be any fixed positive integer. Define the sequence $(u_r)$ by
> $$u_1 = n \quad \text{and} \quad u_r = c(u_{r-1}) \quad \text{for } r \ge 2.$$
> Show that there is a positive integer $r$ for which $u_r = 1$, $2$ or $17$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_casework|Casework]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1tOfO5w6uysbOqI8KklY9Aj83wX_eK3Cu/view)


<span class="qlang-split" data-lang="it"></span>


*L'iterazione della somma di cubo di base a 3 cifre raggiunge infine 1, 2 o 17*

> Qualsiasi numero intero positivo $m$ può essere scritto in modo unico nella forma di base 3 come una stringa di 0's, 1's e 2's (non iniziando con uno zero). Ad esempio, $$98 = (1 \times 81) + (0 \times 27) + (1 \times 9) + (2 \times 3) + (2 \times 1) = (10122)_3.$$ $c(m)$ indichi la somma dei cubi dei numeri della forma base 3 di $m$; quindi, ad esempio $$c(98) = 1^3 + 0^3 + 1^3 + 2^3 + 2^3 = 18.$$ $n$ sia un intero positivo fisso. Definire la sequenza $(u_r)$ con $$u_1 = n \quad \text{and} \quad u_r = c(u_{r-1}) \quad \text{for } r \ge 2.$$ Mostra che esiste un intero positivo $r$ per il quale $u_r = 1$, $2$ o $17$.

[[src_bmo_1998-99_round1__Q04]]
