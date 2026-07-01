---
title: Japan Junior Mathematical Olympiad 2026 — Honsen (Final) — Quesito 1
tipo: quesito
lang: en
quesito_id: quesito_src_jjmo24hq_honsen__Q01
parent: src_jjmo24hq_honsen
competition: Japan Junior Mathematical Olympiad 2026 — Honsen (Final)
family: jjmo
year: '2026'
level: JJMO Honsen
country: Giappone
modalita: individuale
quesito: '1'
summary: 'Grid integers with adjacency and per-row-pair conditions, find max n'
qa_score: '5'
topics:
  - topic_combinatoria
methods:
  - method_estremalita
  - method_casework
  - method_conteggio
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/giappone
  - comp/jjmo
  - anno/2026
  - livello/JJMO-Honsen
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Grid integers with adjacency and per-row-pair conditions, find max n*

> Let $n$ be an integer with $n \ge 2$. We write one integer in each cell of a grid with $n$ rows and $2026$ columns. The writing is done so that, for any two cells adjacent left-right, the integer written in the right cell either equals the integer written in the left cell or is exactly $1$ greater. Moreover, for any two distinct integers $i, j$ with $1 \le i, j \le n$, the following two conditions are both satisfied:
> 
> - There exists an integer $k$ with $1 \le k \le 2026$ such that the integer written in the cell of row $i$ (from the top) and column $k$ (from the left) differs from the integer written in the cell of row $j$ (from the top) and column $k$ (from the left).
> - There exists an integer $k$ with $1 \le k \le 2026$ such that the integer written in the cell of row $i$ (from the top) and column $k$ (from the left) equals the integer written in the cell of row $j$ (from the top) and column $k$ (from the left).
> 
> Find the largest value that $n$ can take.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1I0LRY7GCUGrK3CaQym2-0VxiENqQdLFa/view)


<span class="qlang-split" data-lang="it"></span>


*Integri di griglia con condizioni di adiacenza e di coppia a fila, trovare max n*

> $n$ sia un numero intero con $n \ge 2$. Scriviamo un intero in ogni cella di una griglia con le righe $n$ e le colonne $2026$. La scrittura è fatta in modo che, per due celle adiacenti sinistra-destra, il numero intero scritto nella cella destra sia uguale al numero intero scritto nella cella sinistra o sia esattamente $1$ maggiore. Inoltre, per due integri distinti $i, j$ e $1 \le i, j \le n$, sono soddisfatte entrambe le seguenti due condizioni:
> 
> - Esiste un numero intero $k$ con $1 \le k \le 2026$ tale che l'intero scritto nella cella della riga $i$ (da sopra) e della colonna $k$ (da sinistra) differisca dal numero intero scritto nella cella della riga $j$ (da sopra) e dalla colonna $k$ (da sinistra). - Esiste un numero intero $k$ con $1 \le k \le 2026$ tale che l'intero scritto nella cella della riga $i$ (da sopra) e la colonna $k$ (da sinistra) sia uguale all'intero scritto nella cella della riga $j$ (da sopra) e alla colonna $k$ (da sinistra).
> 
> Trova il valore più grande che $n$ può assumere.

[[src_jjmo24hq_honsen__Q01]]
