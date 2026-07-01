---
title: Olimpíada Brasileira de Matemática 2016 — Nível 2 — Fase 3 — Quesito 5
tipo: quesito
lang: en
quesito_id: quesito_src_obm_2016_n2_f3__Q05
parent: src_obm_2016_n2_f3
competition: Olimpíada Brasileira de Matemática 2016 — Nível 2 — Fase 3
family: obm
year: '2016'
level: OBM Nível 2
country: Brasile
modalita: individuale
nivel: '2'
fase: '3'
quesito: '5'
summary: Two-player coprime-halving number game; determine the winner for given N
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_aritmetica
  - topic_logica
methods:
  - method_backward
  - method_casework
  - method_congruenze
skills:
  - skill_casework_accurato
  - skill_astrazione
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2016
  - livello/OBM-Nível-2
  - nivel/2
  - fase/3
  - topic/combinatoria
  - topic/aritmetica
  - topic/logica
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Two-player coprime-halving number game; determine the winner for given N*

> Let $N$ be an integer, $N \ge 2$.
> 
> The OBM game has the participation of two players $A$ and $B$ and begins with player $A$ receiving the number $N$. He must then choose a new number $m$, with $m$ and $N$ coprime and $m$ greater than or equal to half of $N$ and less than $N$. This number is passed to player $B$.
> 
> Player $B$ then receives the number $n$ and must choose a new number, namely a number $p$, with $p$ and $n$ coprime and $p$ greater than or equal to half of $n$ and less than $n$. Then he passes to his opponent the number $p$. The process repeats until one of the two players can only choose the number $1$. That player is the winner!
> 
> For example, for $N = 9$, player $A$ can choose the number $5$ (observe that the choices are $5$, $7$ or $8$); if $B$ then chooses the number $3$, $A$ is forced to choose the number $2$ (this being the only option respecting the rules of the game), and then $B$ chooses $1$ and wins.
> 
> Determine, for each value of $N$ below, which player has a winning strategy, i.e., manages to win no matter what the plays of his opponent are.
> 
> a) $N = 7$.
> 
> b) $N = 2016$.
> 
> Remark: we say that two numbers are coprime if they do not have a common divisor greater than or equal to $2$ (greater than $1$). For instance, $9$ and $4$ are coprime, since $1$ is their only common divisor.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica]]
**Metodo:** [[method_backward|Backward]], [[method_casework|Casework]], [[method_congruenze|Congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1pFIjmivzjoZv5XiNmeuw7FxzBsl4gRIj/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Gioco a due giocatori di coprime-halving numero; determinare il vincitore per un dato N*

> $N$ sia un numero intero, $N \ge 2$.
> 
> Il gioco OBM ha la partecipazione di due giocatori $A$ e $B$ e inizia con il giocatore $A$ che riceve il numero $N$. Deve quindi scegliere un nuovo numero $m$, con coprimo $m$ e $N$ e $m$ maggiore o uguale alla metà di $N$ e inferiore a $N$. Questo numero viene trasmesso al giocatore $B$.
> 
> Il giocatore $B$ riceve quindi il numero $n$ e deve scegliere un nuovo numero, vale a dire un numero $p$, con coprimo $p$ e $n$ e $p$ maggiore o uguale alla metà di $n$ e inferiore a $n$. Poi passa al suo avversario il numero $p$. Il processo si ripete fino a quando uno dei due giocatori può scegliere solo il numero $1$. Quel giocatore è il vincitore!
> 
> Per esempio, per $N = 9$, il giocatore $A$ può scegliere il numero $5$ (nota che le scelte sono $5$, $7$ o $8$); se $B$ sceglie il numero $3$, $A$ è costretto a scegliere il numero $2$ (questo è l'unica opzione rispetto alle regole del gioco), e quindi $B$ sceglie $1$ e vince.
> 
> Determinare, per ogni valore $N$ di seguito, quale giocatore ha una strategia vincente, ovvero riesce a vincere indipendentemente dalle mosse del suo avversario.
> 
> a) $N = 7$.
> 
> b) $N = 2016$.
> 
> Nota: diciamo che due numeri sono copriemi se non hanno un divisore comune maggiore o uguale a $2$ (più grande di $1$). Ad esempio, $9$ e $4$ sono coprime, poiché $1$ è il loro unico divisore comune.

[[src_obm_2016_n2_f3__Q05]]
