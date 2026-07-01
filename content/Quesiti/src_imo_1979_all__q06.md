---
title: IMO 1979 (Twenty-first International Olympiad) — Quesito 6
tipo: quesito
lang: it
quesito_id: quesito_src_imo_1979_all__Q06
parent: src_imo_1979_all
competition: IMO 1979 (Twenty-first International Olympiad)
family: imo
year: '1979'
level: IMO
country: Italia
modalita: individuale
quesito: '6'
summary: prove formula for count of n-jump paths
topics:
  - topic_combinatoria
methods:
  - method_induzione
  - method_ricorsione
tags:
  - kg/quesito
  - paese/italia
  - comp/imo
  - anno/1979
  - livello/IMO
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*prove formula for count of n-jump paths*

> Siano $A$ ed $E$ vertici opposti di un ottagono regolare. Una rana comincia a saltare dal vertice $A$. Da qualsiasi vertice dell'ottagono eccetto $E$, essa può saltare verso uno qualsiasi dei due vertici adiacenti. Quando raggiunge il vertice $E$, la rana si ferma e rimane lì. Sia $a_n$ il numero di percorsi distinti di esattamente $n$ salti che terminano in $E$. Dimostrare che $a_{2n-1} = 0$ e
> $$a_{2n} = \frac{1}{\sqrt{2}}\left(x^{n-1} - y^{n-1}\right), \quad n = 1, 2, 3, \ldots,$$
> dove $x = 2 + \sqrt{2}$ e $y = 2 - \sqrt{2}$.
> 
> *Nota.* Un percorso di $n$ salti è una sequenza di vertici $(P_0, \ldots, P_n)$ tale che:
> (i) $P_0 = A$, $P_n = E$;
> (ii) per ogni $i$, $0 \leq i \leq n-1$, $P_i$ è distinto da $E$;
> (iii) per ogni $i$, $0 \leq i \leq n-1$, $P_i$ e $P_{i+1}$ sono adiacenti.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1zEPuPBU2bBcA_YKZy9BbfgTGEtgtWSpu/view)


<span class="qlang-split" data-lang="en"></span>


*prove formula for count of n-jump paths*

> They are $A$ and $E$ opposite vertices of a regular octagon. A frog starts jumping from the summit. From any vertex of the octagon except $E$, it can jump to any of the two adjacent vertices. When it reaches the summit, the frog stops and stays there. Whether $a_n$ the number of distinct paths of exactly $n$ jumps ending in $E$. Show that $a_{2n-1} = 0$ and $$a_{2n} = \frac{1}{\sqrt{2}}\left(x^{n-1} - y^{n-1}\right), \quad n = 1, 2, 3, \ldots,$$ where $x = 2 + \sqrt{2}$ and $y = 2 - \sqrt{2}$.
> 
> *Note.* A $n$ jump path is a sequence of vertices $(P_0, \ldots, P_n)$ such that: (i) $P_0 = A$, $P_n = E$; (ii) for each $i$, $0 \leq i \leq n-1$, $P_i$ is distinct from $E$; (iii) for each $i$, $0 \leq i \leq n-1$, $P_i$ and $P_{i+1}$ are adjacent.

[[src_imo_1979_all__Q06]]
