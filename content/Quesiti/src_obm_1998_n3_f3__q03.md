---
title: Olimpíada Brasileira de Matemática 1998 — Nível 3 — Fase 3 — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_obm_1998_n3_f3__Q03
parent: src_obm_1998_n3_f3
competition: Olimpíada Brasileira de Matemática 1998 — Nível 3 — Fase 3
family: obm
year: '1998'
level: OBM Nível 3
country: Brasile
modalita: individuale
nivel: '3'
fase: '3'
quesito: '3'
summary: >-
  Two-player number game with n rounds and increment t; gcd scoring; determine
  the winner
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_casework
  - method_estremalita
  - method_congruenze
skills:
  - skill_modellizzazione
  - skill_casework_accurato
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/1998
  - livello/OBM-Nível-3
  - nivel/3
  - fase/3
  - topic/combinatoria
  - topic/aritmetica
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Two-player number game with n rounds and increment t; gcd scoring; determine the winner*

> Two people play a game described as follows. Initially they choose two natural numbers $n \ge 2$ (the number of rounds) and $t \ge 1$ (the maximum increment). In the first round, player $A$ chooses a natural number $m_1 > 0$ and, afterwards, player $B$ chooses a natural number $n_1$ with $0 < n_1 < m_1$. In round $k$, for $2 \le k \le n$, player $A$ chooses a natural number $m_k$ with $n_{k-1} < m_k \le n_{k-1} + t$ and, afterwards, player $B$ chooses a natural number $n_k$ with $m_k < n_k \le m_k + t$. After these choices, in round $k$, player $A$ gains $\mathrm{mdc}(m_k, n_{k-1})$ points and player $B$ gains $\mathrm{mdc}(m_k, n_k)$ points. The player who gains the larger total number of points at the end of the $n$ rounds is considered the winner. In case of equal total scores, player $A$ is considered the winner. For each choice of $n$ and $t$, determine which of the two players has a winning strategy.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_congruenze|Congruenze]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1nWtV7C2tyKGwEtjDx0aPHhPIGRni99uC/view)


<span class="qlang-split" data-lang="it"></span>


*Gioco numero per due giocatori con n round e incremento t; punteggio gcd; determina il vincitore*

> Due persone giocano a un gioco descritto come segue. Inizialmente scelgono due numeri naturali $n \ge 2$ (numero di round) e $t \ge 1$ (incremento massimo). Nel primo round, il giocatore $A$ sceglie un numero naturale $m_1 > 0$ e, successivamente, il giocatore $B$ sceglie un numero naturale $n_1$ con $0 < n_1 < m_1$. Nel round $k$, per $2 \le k \le n$, il giocatore $A$ sceglie un numero naturale $m_k$ con $n_{k-1} < m_k \le n_{k-1} + t$ e, successivamente, il giocatore $B$ sceglie un numero naturale $n_k$ con $m_k < n_k \le m_k + t$. Dopo queste scelte, nel round $k$, il giocatore $A$ guadagna $\mathrm{mdc}(m_k, n_{k-1})$ punti e il giocatore $B$ guadagna $\mathrm{mdc}(m_k, n_k)$ punti. Il giocatore che guadagna il maggior numero totale di punti alla fine dei round $n$ è considerato vincitore. In caso di punteggi totali uguali, il giocatore $A$ è considerato vincitore. Per ciascuna scelta di $n$ e $t$, determinare quale dei due giocatori ha una strategia vincente.

[[src_obm_1998_n3_f3__Q03]]
