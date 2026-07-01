---
title: Japan Junior Mathematical Olympiad 2024 — Yosen (Preliminary) — Quesito 9
tipo: quesito
lang: en
quesito_id: quesito_src_jjmo22yqa_yosen__Q09
parent: src_jjmo22yqa_yosen
competition: Japan Junior Mathematical Olympiad 2024 — Yosen (Preliminary)
family: jjmo
year: '2024'
level: JJMO Yosen
country: Giappone
modalita: individuale
quesito: '9'
summary: >-
  Count 2024-step Hamiltonian tours on 2024 cells with restricted moves
  returning to cell 1
qa_score: '4'
answer: '2026'
topics:
  - topic_combinatoria
methods:
  - method_casework
  - method_grafi
  - method_conteggio
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/giappone
  - comp/jjmo
  - anno/2024
  - livello/JJMO-Yosen
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Count 2024-step Hamiltonian tours on 2024 cells with restricted moves returning to cell 1*

> There are $2024$ cells labelled $1, 2, \ldots, 2024$, and a piece that starts on cell $1$. For an integer $k$ with $1 \le k \le 2024$, when the piece is on cell $k$, any of the following moves may be performed:
> 
> 1. Move the piece to cell $k - 1$.
> 2. Move the piece to cell $k + 1$.
> 3. Move the piece to cell $k - 2$ (only allowed when $k$ is even).
> 4. Move the piece to cell $k + 2$ (only allowed when $k$ is odd).
> 
> Find the number of sequences of exactly $2024$ moves such that the piece visits every cell other than cell $1$ exactly once and returns to cell $1$ at the end, without visiting cell $1$ in between.
> 
> (Here cells $0$ and $2025$ represent cells $2024$ and $1$, respectively.)

![[src_jjmo22yqa_yosen__Q09.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_grafi|Grafi]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2026
**Fonte:** [apri PDF](https://drive.google.com/file/d/1MpOoffmNfAlSJnrNvYxGLF27kPgwbEmW/view)


<span class="qlang-split" data-lang="it"></span>


*Conta i tour hamiltoniani in fase 2024 sulle cellule 2024 con movimenti ristretti che ritornano alla cellula 1*

> Ci sono $2024$ celle etichettate $1, 2, \ldots, 2024$, e un pezzo che inizia sulla cella $1$. Per un numero intero $k$ con $1 \le k \le 2024$, quando il pezzo si trova nella cella $k$, può essere eseguita una delle seguenti mosse:
> 
> 1. Traslocare il pezzo nella cella < MSK0/>. 2. Trasferire il pezzo nella cella $k + 1$. 3. Trasferire il pezzo nella cella $k - 2$ (autorizzato solo quando $k$ è pari). 4. Trasferire il pezzo nella cella $k + 2$ (autorizzato solo quando $k$ è pari).
> 
> Trovare il numero di sequenze di movimenti $2024$ esattamente in modo che il pezzo visita ogni cella diversa dalla cella $1$ esattamente una volta e ritorni alla cella $1$ alla fine, senza visitare la cella $1$ in mezzo.
> 
> (Qui le celle $0$ e $2025$ rappresentano le celle $2024$ e $1$, rispettivamente.)

![[src_jjmo22yqa_yosen__Q09.png]]

**Risposta:** 2026
[[src_jjmo22yqa_yosen__Q09]]
