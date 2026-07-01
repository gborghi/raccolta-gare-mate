---
title: Japan Junior Mathematical Olympiad 2026 — Yosen (Preliminary) — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_jjmo24yqa_yosen__Q03
parent: src_jjmo24yqa_yosen
competition: Japan Junior Mathematical Olympiad 2026 — Yosen (Preliminary)
family: jjmo
year: '2026'
level: JJMO Yosen
country: Giappone
modalita: individuale
quesito: '3'
summary: >-
  Count 2026-digit ternary integers satisfying parity-dependent min/max
  digit-frequency conditions
qa_score: '3'
answer: '3 \cdot 2^{508}'
topics:
  - topic_combinatoria
methods:
  - method_ricorsione
  - method_conteggio
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_lettura_attenta
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/giappone
  - comp/jjmo
  - anno/2026
  - livello/JJMO-Yosen
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Count 2026-digit ternary integers satisfying parity-dependent min/max digit-frequency conditions*

> Consider positive integers with exactly $2026$ digits, each digit being $1$, $2$, or $3$. How many such integers satisfy the following conditions for every integer $i$ with $1 \le i \le 2025$? (Digits are counted from the least significant end, i.e., position $1$ is the units digit.)
> 
> - If $i$ is even: the digit at position $i+1$ (from the bottom) is one of the digits among $1, 2, 3$ that appears most frequently among the first $i$ digits (from the bottom).
> - If $i$ is odd: the digit at position $i+1$ (from the bottom) is one of the digits among $1, 2, 3$ that appears least frequently among the first $i$ digits (from the bottom).

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_conteggio|Conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** $3 \cdot 2^{508}$
**Fonte:** [apri PDF](https://drive.google.com/file/d/1EEKbZ7RSD6mLY9XkB2kvGd6XjLvAdfmk/view)


<span class="qlang-split" data-lang="it"></span>


*Contare interi terzi di 2026 cifre che soddisfano le condizioni di frequenza minima/massima di cifre paritarie*

> Considerate i numeri interi positivi con esattamente $2026$ cifre, ciascuna cifra è $1$, $2$, o $3$. Quanti tali integri soddisfano le seguenti condizioni per ogni integro $i$ con $1 \le i \le 2025$? (Le cifre vengono contate dall'estremità meno significativa, ovvero la posizione $1$ è la cifra unità.)
> 
> - Se $i$ è pari: la cifra in posizione $i+1$ (dal basso) è una delle cifre tra $1, 2, 3$ che appare più frequentemente tra le prime cifre $i$ (dal basso). - Se $i$ è odd: la cifra in posizione $i+1$ (dal basso) è una delle cifre tra $1, 2, 3$ che appare meno frequentemente tra le prime cifre $i$ (dal basso).

**Risposta:** 3 \cdot 2^{508}
[[src_jjmo24yqa_yosen__Q03]]
