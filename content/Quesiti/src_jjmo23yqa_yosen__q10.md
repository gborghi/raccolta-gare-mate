---
title: Japan Junior Mathematical Olympiad 2025 — Yosen (Preliminary) — Quesito 10
tipo: quesito
lang: en
quesito_id: quesito_src_jjmo23yqa_yosen__Q10
parent: src_jjmo23yqa_yosen
competition: Japan Junior Mathematical Olympiad 2025 — Yosen (Preliminary)
family: jjmo
year: '2025'
level: JJMO Yosen
country: Giappone
modalita: individuale
quesito: '10'
summary: >-
  Count valid 30x30 permutation matrices satisfying row-window and connectivity
  conditions
qa_score: '3'
answer: '1136'
topics:
  - topic_combinatoria
methods:
  - method_conteggio
  - method_casework
  - method_invarianti
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/giappone
  - comp/jjmo
  - anno/2025
  - livello/JJMO-Yosen
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Count valid 30x30 permutation matrices satisfying row-window and connectivity conditions*

> Consider a $30 \times 30$ grid in which exactly $30$ cells are colored black, with exactly one black cell in each row and each column. The left-upper corner cell is black and is labeled $W_1$. Reading the black cells from left to right and top to bottom, label them $W_1, W_2, \ldots, W_{30}$. The following conditions must all be satisfied:
> 
> - $W_1, W_2, \ldots, W_{30}$ are pairwise distinct integers between $1$ and some bound.
> - For every $1 \le i \le n$, the integers $W_i$ and $W_{i+1}$ (indices mod $30$, so $W_{31} = W_1$) share a common side on the grid.
> - For each $1 \le n \le 30$, let $C_n$ denote the center of the cell labeled $W_n$; then $C_1, C_2, \ldots, C_{30}$ lie in the interior of the boundary formed by the black cells of the $n$-th column (or row).
> 
> Count the number of ways to color such a configuration. Colorings that are related by rotation or reflection are counted as different.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1136
**Fonte:** [apri PDF](https://drive.google.com/file/d/1ryLIQ7p6YVxrUfIGz0GlvSD0hn_g1ejO/view)


<span class="qlang-split" data-lang="it"></span>


*Contare le matrici di permutazione 30x30 valide che soddisfano le condizioni di finestra di riga e di connettività*

> Considera una griglia $30 \times 30$ in cui esattamente $30$ le celle sono di colore nero, con esattamente una cella nera in ogni riga e ogni colonna. La cella dell'angolo superiore sinistro è di colore nero ed è etichettata $W_1$. Leggere le celle nere da sinistra a destra e da cima a fondo, etichettarle $W_1, W_2, \ldots, W_{30}$. Tutte le seguenti condizioni devono essere soddisfatte:
> 
> - $W_1, W_2, \ldots, W_{30}$ sono integri separati in coppia tra $1$ e alcuni legati. - Per ogni $1 \le i \le n$, i numeri interi $W_i$ e $W_{i+1}$ (indici mod $30$, quindi $W_{31} = W_1$) condividono un lato comune sulla griglia. - Per ciascuna $1 \le n \le 30$, $C_n$ indica il centro della cella etichettata $W_n$; quindi $C_1, C_2, \ldots, C_{30}$ si trova all'interno del confine formato dalle celle nere della colonna (o riga) di $n$.
> 
> Contare il numero di modi per colorare una configurazione del genere. I colori collegati a rotazione o riflessione sono considerati diversi.

**Risposta:** 1136
[[src_jjmo23yqa_yosen__Q10]]
