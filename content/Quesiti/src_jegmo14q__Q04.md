---
title: Japan EGMO Selection / Girls MO 2025 — Quesito 4
tipo: quesito
quesito_id: quesito_src_jegmo14q__Q04
parent: src_jegmo14q
competition: Japan EGMO Selection / Girls MO 2025
family: jegmo
year: '2025'
level: JEGMO
country: Giappone
modalita: individuale
quesito: '4'
summary: Minimum stones left in box 1 after stone-moving operations
qa_score: '5'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_invarianti
  - method_estremalita
  - method_conteggio
skills:
  - skill_modellizzazione
  - skill_conteggio_sistematico
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/giappone
  - comp/jegmo
  - anno/2025
  - livello/JEGMO
  - topic/combinatoria
  - topic/aritmetica
  - gara/individuale
---

*Minimum stones left in box 1 after stone-moving operations*

> There are $2025$ boxes numbered $1, 2, \ldots, 2025$, and for each integer $i$ with $1 \le i \le 2025$, box $i$ initially contains $2^{i-1}$ stones. The following operation is repeated.
> 
> Choose an integer $n \ge 2$ and integers $a_1, a_2, \ldots, a_n$ satisfying $1 \le a_1 < a_2 < \cdots < a_n \le 2025$ such that for every integer $i$ with $2 \le i \le n$, box $a_i$ contains at least one stone. Put $1$ stone into box $a_1$, and for each integer $i$ with $2 \le i \le n$, remove one stone from box $a_i$.
> 
> When the state is reached in which no box other than box $1$ contains any stones, the operation is terminated. Find the minimum possible value of the number of stones in box $1$ when the operation has terminated.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/16-NqAuK58hCzJs_f8zhLcVk4UkEgeo1H/view)
