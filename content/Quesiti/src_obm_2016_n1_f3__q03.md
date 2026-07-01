---
title: Olimpíada Brasileira de Matemática 2016 — Nível 1 — Fase 3 — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_obm_2016_n1_f3__Q03
parent: src_obm_2016_n1_f3
competition: Olimpíada Brasileira de Matemática 2016 — Nível 1 — Fase 3
family: obm
year: '2016'
level: OBM Nível 1
country: Brasile
modalita: individuale
nivel: '1'
fase: '3'
quesito: '3'
summary: >-
  Two-player game replacing numbers by differing in k binary digits; count
  losing positions
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_invarianti
  - method_induzione
  - method_casework
skills:
  - skill_lettura_attenta
  - skill_ragionamento_geometrico
  - skill_riconoscimento_pattern
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2016
  - livello/OBM-Nível-1
  - nivel/1
  - fase/3
  - topic/combinatoria
  - topic/aritmetica
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Two-player game replacing numbers by differing in k binary digits; count losing positions*

> Let $N_0$ be a fixed positive integer. Alberto and Beraldo play the following game starting from $N_0$: they alternately perform the following operation — given a number $n$, replace it by a number $m$ such that $m < n$ and, in their base-$2$ representations, $m$ and $n$ differ in exactly $\ell$ digits for some $\ell$ with $1 \le \ell \le k$. The player who cannot move loses. We say that a player receiving $n$ has a winning strategy if they can always choose a move that leads to a win regardless of the opponent's play; otherwise we say they lose. Prove that, for every positive integer $N$, the number of non-negative losing integers less than $2^N$ is at most $2^N - \lfloor \log_2(\lfloor N/1 \rfloor) \rfloor$. (Observation: $\lfloor x \rfloor$ denotes the greatest integer less than or equal to $x$. For example, $\lfloor 3.14 \rfloor = 3$, $\lfloor 2 \rfloor = 2$, $\lfloor -4.6 \rfloor = -5$.)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_induzione|Induzione]], [[method_casework|Casework]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1FTPhBzZbiZWvXsDRSCaClgLp-YMTQevY/view)


<span class="qlang-split" data-lang="it"></span>


*Gioco a due giocatori che sostituiscono i numeri con k di cifre binarie; contare le posizioni perdenti*

> $N_0$ sia un intero positivo fisso. Alberto e Beraldo giocano il seguente gioco a partire da $N_0$: eseguono alternativamente la seguente operazione  data un numero $n$, sostituendolo con un numero $m$ in modo tale che $m < n$ e, nelle loro rappresentazioni di base-$2$, $m$ e $n$ differiscono esattamente in $\ell$ cifre per alcuni $\ell$ con $1 \le \ell \le k$. Il giocatore che non può muoversi perde. Diciamo che un giocatore che riceve $n$ ha una strategia vincente se può sempre scegliere una mossa che porta alla vittoria indipendentemente dal gioco dell'avversario; altrimenti diciamo che perde. Prove che per ogni intero positivo $N$, il numero di interi non negativi perdenti inferiori a $2^N$ è massimo $2^N - \lfloor \log_2(\lfloor N/1 \rfloor) \rfloor$. (Osservazione: $\lfloor x \rfloor$ indica il numero intero più grande inferiore o uguale a $x$. Ad esempio, $\lfloor 3.14 \rfloor = 3$, $\lfloor 2 \rfloor = 2$, $\lfloor -4.6 \rfloor = -5$.)

[[src_obm_2016_n1_f3__Q03]]
