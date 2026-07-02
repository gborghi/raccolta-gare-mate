---
title: Japan Junior Mathematical Olympiad 2026 — Honsen (Final) — Quesito 5
tipo: quesito
lang: en
quesito_id: quesito_src_jjmo24hq_honsen__Q05
parent: src_jjmo24hq_honsen
competition: Japan Junior Mathematical Olympiad 2026 — Honsen (Final)
family: jjmo
year: '2026'
level: JJMO Honsen
country: Giappone
modalita: individuale
quesito: '5'
summary: 'Card placement uniquely determined by position constraints, minimize m'
qa_score: '5'
topics:
  - topic_combinatoria
methods:
  - method_casework
  - method_estremalita
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


*Card placement uniquely determined by position constraints, minimize m*

> Let $m$ be a positive integer. There are $2026$ cells arranged in a single row, and there are $2026$ cards in total, each bearing one of the integers from $1$ to $2026$ (one card for each integer). There are also tuples $(a_1, b_1, c_1), (a_2, b_2, c_2), \dots, (a_m, b_m, c_m)$ such that for every integer $i$ with $1 \le i \le m$, the inequalities $b_i \le a_i$ and $c_i \le a_i$ hold. We consider performing operations of choosing a cell on which no card has been placed and placing a card on it, carried out in the order: the card written $1$, then the card written $2$, ..., up to the card written $2026$. It turned out that the number of placements (arrangements) for which the following holds was exactly $1$:
> 
> For every integer $i$ with $1 \le i \le m$, immediately after placing the card written $a_i$, among the $a_i$ cards then lined up in the cells, the integer written on the $b_i$-th one counting from the left is $c_i$.
> 
> Find the smallest value that $m$ can take.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1I0LRY7GCUGrK3CaQym2-0VxiENqQdLFa/view)


<span class="qlang-split" data-lang="it"></span>


*Posizione della carta determinata in modo unico da vincoli di posizione, riducendo al minimo m*

> $m$ sia un numero intero positivo. Ci sono celle $2026$ disposte in una singola riga, e ci sono carte $2026$ in totale, ciascuna con uno degli entieri da $1$ a $2026$ (una carta per ogni intero). Esistono anche tupli $(a_1, b_1, c_1), (a_2, b_2, c_2), \dots, (a_m, b_m, c_m)$ tali che per ogni numero intero $i$ con $1 \le i \le m$, le disuguaglianze $b_i \le a_i$ e $c_i \le a_i$ si mantengano. Consideramo di eseguire operazioni di selezione di una cella su cui non è stata posta alcuna carta e di inserimento di una carta su di essa, eseguite nell'ordine: la carta scritta $1$, poi la carta scritta $2$, ..., fino alla carta scritta $2026$. Si è rivelato che il numero di posizionamenti (arrangiamenti) per i quali le seguenti posizioni sono state esattamente $1$:
> 
> Per ogni numero intero $i$ con $1 \le i \le m$, immediatamente dopo aver inserito la carta scritta $a_i$, tra le carte $a_i$ poi allineate nelle celle, il numero intero scritto sulla $b_i$-a contare da sinistra è $c_i$.
> 
> Trova il valore più piccolo che $m$ può assumere.

[[src_jjmo24hq_honsen__Q05]]
