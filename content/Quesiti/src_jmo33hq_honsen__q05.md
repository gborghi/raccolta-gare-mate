---
title: Japan Mathematical Olympiad 2023 — Honsen (Final) — Quesito 5
tipo: quesito
lang: en
quesito_id: quesito_src_jmo33hq_honsen__Q05
parent: src_jmo33hq_honsen
competition: Japan Mathematical Olympiad 2023 — Honsen (Final)
family: jmo
year: '2023'
level: JMO Honsen
country: Giappone
modalita: individuale
quesito: '5'
summary: >-
  S={1,...,3000}; find max X such that for any bijection f, some bijection g
  makes sum >= X
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_insiemi_funzioni
methods:
  - method_estremalita
  - method_doppio_conteggio
  - method_simmetria
  - method_casework
skills:
  - skill_modellizzazione
  - skill_conteggio_sistematico
  - skill_astrazione
  - skill_stima
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/giappone
  - comp/jmo
  - anno/2023
  - livello/JMO-Honsen
  - topic/combinatoria
  - topic/insiemi_funzioni
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*S={1,...,3000}; find max X such that for any bijection f, some bijection g makes sum >= X*

> Let $S = \{1, 2, \ldots, 3000\}$. Find the maximum integer $X$ such that the following condition holds:
> 
> For any bijection $f : S \to S$, there exists a bijection $g : S \to S$ such that
> $$\sum_{k=1}^{3000} \Bigl(\max\{f(f(k)),\, f(g(k)),\, g(f(k)),\, g(g(k))\} - \min\{f(f(k)),\, f(g(k)),\, g(f(k)),\, g(g(k))\}\Bigr) \ge X.$$
> 
> Here, a bijection from $S$ to $S$ is a function $f : S \to S$ such that for every element $y \in S$ there exists exactly one element $x \in S$ with $f(x) = y$. For positive integers $x_1, x_2, x_3, x_4$, $\max\{x_1, x_2, x_3, x_4\}$ and $\min\{x_1, x_2, x_3, x_4\}$ denote their maximum and minimum respectively.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_doppio_conteggio|Doppio conteggio]], [[method_simmetria|Simmetria]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_stima|Stima]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1VHuJXp0L8AAwmYvzBeWsGkyY-LQ1btx2/view)


<span class="qlang-split" data-lang="it"></span>


*S={1,...,3000}; trovare il massimo X in modo che per qualsiasi bijezione f, qualche bijezione g faccia la somma >= X*

> Let $S = \{1, 2, \ldots, 3000\}$. Trova il numero intero massimo $X$ in modo tale che la seguente condizione sia valida:
> 
> Per qualsiasi bizione $f : S \to S$, esiste una bizione $g : S \to S$ tale che $$\sum_{k=1}^{3000} \Bigl(\max\{f(f(k)),\, f(g(k)),\, g(f(k)),\, g(g(k))\} - \min\{f(f(k)),\, f(g(k)),\, g(f(k)),\, g(g(k))\}\Bigr) \ge X.$$
> 
> Qui, una bijezione da $S$ a $S$ è una funzione $f : S \to S$ tale che per ogni elemento $y \in S$ esiste esattamente un elemento $x \in S$ con $f(x) = y$. Per i numeri interi positivi $x_1, x_2, x_3, x_4$, $\max\{x_1, x_2, x_3, x_4\}$ e $\min\{x_1, x_2, x_3, x_4\}$ indicano rispettivamente il loro massimo e il loro minimo.

[[src_jmo33hq_honsen__Q05]]
