---
title: Japan Junior Mathematical Olympiad 2015 — Yosen (Preliminary) — Quesito 10
tipo: quesito
lang: en
quesito_id: quesito_src_jjmo13yq_yosen__Q10
parent: src_jjmo13yq_yosen
competition: Japan Junior Mathematical Olympiad 2015 — Yosen (Preliminary)
family: jjmo
year: '2015'
level: JJMO Yosen
country: Giappone
modalita: individuale
quesito: '10'
summary: Count reachable configs on 3x100 grid via set-row-heads / set-column-tails
qa_score: '3'
answer: '6\cdot 4^{100}-6\cdot 3^{100}+2^{100}'
topics:
  - topic_combinatoria
methods:
  - method_conteggio
  - method_inclusione_esclusione
  - method_invarianti
skills:
  - skill_conteggio_sistematico
  - skill_astrazione
tags:
  - kg/quesito
  - paese/giappone
  - comp/jjmo
  - anno/2015
  - livello/JJMO-Yosen
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Count reachable configs on 3x100 grid via set-row-heads / set-column-tails*

> There is a $3 \times 100$ grid of cells. On each cell a coin distinguishable by its two faces (heads and tails) is placed, all initially heads up. The following operations 1 and 2 are repeated in any order, any number of times. How many distinct coin configurations can be obtained?
> 
> Operation 1: Choose an integer $i$ with $1 \le i \le 3$ and turn every coin in the cells of row $i$ to heads up.
> 
> Operation 2: Choose an integer $j$ with $1 \le j \le 100$ and turn every coin in the cells of column $j$ to tails up.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_inclusione_esclusione|Inclusione-esclusione]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** $6\cdot 4^{100}-6\cdot 3^{100}+2^{100}$
**Fonte:** [apri PDF](https://drive.google.com/file/d/1BE-TTqjPF7agVmsyvYU0Cy1JWbvEYsDX/view)


<span class="qlang-split" data-lang="it"></span>


*Contare le configurazioni accessibili sulla griglia 3x100 tramite set-row-heads / set-column-tails*

> C'è una griglia di cellule $3 \times 100$. Su ciascuna cella si colloca una moneta che si distingue per le sue due facce (capelli e code), tutte inizialmente a testa in su. Le seguenti operazioni 1 e 2 sono ripetute in qualsiasi ordine e numero di volte. Quante singole configurazioni di monete si possono ottenere?
> 
> Operazione 1: Scegli un numero intero $i$ con $1 \le i \le 3$ e gira ogni moneta nelle celle della riga $i$ in testa.
> 
> Operazione 2: Scegli un numero intero $j$ con $1 \le j \le 100$ e gira ogni moneta nelle celle della colonna $j$ in coda in alto.

**Risposta:** 6\cdot 4^{100}-6\cdot 3^{100}+2^{100}
[[src_jjmo13yq_yosen__Q10]]
