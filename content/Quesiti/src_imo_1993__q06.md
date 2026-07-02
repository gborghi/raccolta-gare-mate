---
title: IMO 1993 (34th IMO) — Quesito 6
tipo: quesito
lang: it
quesito_id: quesito_src_imo_1993__Q06
parent: src_imo_1993
competition: IMO 1993 (34th IMO)
family: imo
year: '1993'
level: IMO
country: Italia
modalita: individuale
quesito: '6'
summary: return-to-all-on step counts
topics:
  - topic_combinatoria
methods:
  - method_invarianti
skills:
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/italia
  - comp/imo
  - anno/1993
  - livello/IMO
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*return-to-all-on step counts*

> Ci sono $n$ lampade $L_0, \ldots, L_{n-1}$ disposte in cerchio ($n > 1$), dove si intende $L_{n+k} = L_k$. (Una lampada è sempre accesa o spenta.) Si eseguono i passi $s_0, s_1, \ldots$ come segue: al passo $s_i$, se $L_{i-1}$ è accesa, si commuta $L_i$ (da accesa a spenta o viceversa); altrimenti non si fa nulla. Inizialmente tutte le lampade sono accese. Dimostrare che:
> 
> (a) Esiste un intero positivo $M(n)$ tale che dopo $M(n)$ passi tutte le lampade siano di nuovo accese;
> 
> (b) Se $n = 2^k$, si può prendere $M(n) = n^2 - 1$;
> 
> (c) Se $n = 2^k + 1$, si può prendere $M(n) = n^2 - n + 1$.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Go0gpsCj9HK8rw7A_MFaoiSJsC9e1hL9/view)


<span class="qlang-split" data-lang="en"></span>


This is the total number of steps to be taken to achieve the desired results.

> There are $n$ lamps $L_0, \ldots, L_{n-1}$ arranged in a circle ($n > 1$), where $L_{n+k} = L_k$ is meant. (A lamp is always switched on or off.) The steps $s_0, s_1, \ldots$ are performed as follows: at step $s_i$, if $L_{i-1}$ is switched on, switch to $L_i$ (from switched on or vice versa); otherwise nothing is done. Initially, all the lamps are lit. Demonstrate that:
> 
> (a) There is a positive integer $M(n)$ such that after $M(n)$ all lamps are switched on again;
> 
> (b) If $n = 2^k$, $M(n) = n^2 - 1$ may be taken;
> 
> (c) If $n = 2^k + 1$, you may take $M(n) = n^2 - n + 1$.

[[src_imo_1993__Q06]]
