---
title: IMO 1981 (Twenty-second International Olympiad) — Quesito 6
tipo: quesito
lang: it
quesito_id: quesito_src_imo_1981_all__Q06
parent: src_imo_1981_all
competition: IMO 1981 (Twenty-second International Olympiad)
family: imo
year: '1981'
level: IMO
country: Italia
modalita: individuale
quesito: '6'
summary: 'Compute Ackermann-type function f(4,1981)'
topics:
  - topic_funzionali
methods:
  - method_ricorsione
skills:
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/italia
  - comp/imo
  - anno/1981
  - livello/IMO
  - topic/funzionali
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Compute Ackermann-type function f(4,1981)*

> La funzione $f(x, y)$ soddisfa le condizioni:
> 
> (1) $f(0, y) = y + 1$,
> 
> (2) $f(x+1, 0) = f(x, 1)$,
> 
> (3) $f(x+1, y+1) = f(x, f(x+1, y))$,
> 
> per tutti gli interi non negativi $x$, $y$. Determinare $f(4, 1981)$.

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1J1b7EGoN_5JsjzdgRDEDkEXvbhWyzsge/view)


<span class="qlang-split" data-lang="en"></span>


This is the case with the Ackermann type function.

> The $f(x, y)$ function satisfies the following conditions:
> 
> (1) $f(0, y) = y + 1$,
> 
> (2) $f(x+1, 0) = f(x, 1)$,
> 
> (3) $f(x+1, y+1) = f(x, f(x+1, y))$,
> 
> for all non-negative integers $x$, $y$. Determine $f(4, 1981)$.

[[src_imo_1981_all__Q06]]
