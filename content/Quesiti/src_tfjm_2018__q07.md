---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018 — Quesito 7
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2018__Q07
parent: src_tfjm_2018
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018
family: tfjm
year: '2018'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '7'
summary: >-
  A generalized knight that moves a squares then b squares perpendicular on the
  infinite board Z^2; determine for which (a,b) all squares are reachable, study
  the number reachable in k moves, the number on square (0,1), irregular
  squares, and an intervention-time quantity.
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_aritmetica
  - topic_geometria_analitica
methods:
  - method_casework
  - method_congruenze
  - method_coordinate
  - method_conteggio
skills:
  - skill_modellizzazione
  - skill_riconoscimento_pattern
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2018
  - livello/TFJM²
  - topic/combinatoria
  - topic/aritmetica
  - topic/geometria_analitica
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*A generalized knight that moves a squares then b squares perpendicular on the infinite board Z^2; determine for which (a,b) all squares are reachable, study the number reachable in k moves, the number on square (0,1), irregular squares, and an intervention-time quantity.*

> The stubborn knight. Ada plays chess. She studies the movement of her favourite piece, the knight, on an infinite chessboard (whose squares are indexed by $\mathbb{Z}^2$). More precisely, let $a$ and $b$ be two integers with $0\le a\le b$. Ada studies a piece she calls the knight of type $(a,b)$, which at each turn can move $a$ squares parallel to one axis of the board, then $b$ squares in the other, perpendicular direction. For example, the usual chess knight is the knight of type $(1,2)$. The knight starts from square $(0,0)$.
> 
> 1. As a function of $a$ and $b$, can the knight of type $(a,b)$ reach every square of the infinite board? One may consider the following values of $(a,b)$:
>  a) $(1,1)$;
>  b) $(1,2)$;
>  c) $(1,3)$;
>  d) $(2,3)$;
>  e) $(a,b)$ arbitrary.
> [Footnote: This question is studied in the article "Counting the Number of Squares Reachable in $k$ Knight's Moves", by A. Miller and B. Farnsworth. One may use the result found there but it is recommended to treat the issues of the problem.]
> 
> 2. Ada writes $u_k$ for the number of squares of the board reachable in $k$ moves (i.e. for which the minimal number of moves is $k$). Determine the sequence $(u_k)$. How does this sequence behave when $k\to+\infty$? Is it increasing?
> 
> 3. In the different cases, what is the number written on square $(0,1)$ (the minimal number of moves to reach it)? Propose an estimate.
> 
> 4. Ada says that a square $c$ is regular if, for every square $c'$ neighbouring $c$, the difference between the numbers written on $c$ and on $c'$ is always the same. How many squares are not regular? If this number is finite, estimate it. Otherwise, what is the greatest difference between two neighbouring squares that one can observe infinitely often?
> 
> 5. For an integer $n\in\mathbb{N}^*$, Ada writes $B_n$ for the set of squares of the form $(x,y)$ with $x,y\in\mathbb{Z}$ and $|x|,|y|\le n$. The intervention time of a knight in $B_n$ is the largest number written on the squares of $B_n$. For which values of $(a,b)$ is this intervention time in $B_n$ minimal? Ada writes $T_n$ for this value. Estimate $T_n$ as a function of $n$.
> 
> 6. Propose and study other directions of research.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_casework|Casework]], [[method_congruenze|Congruenze]], [[method_coordinate|Coordinate]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Un cavaliere generalizzato che muove un quadrato e poi b quadrati perpendicolari sulla tavola infinita Z^2; determinare per quale (a,b) tutti i quadrati sono raggiungibili, studiare il numero raggiungibile in k movimenti, il numero sul quadrato (0,1), quadrati irregolari e una quantità di tempo di intervento.*

> Il cavaliere testardo. Ada gioca a scacchi. Studia il movimento del suo pezzo preferito, il cavaliere, su una scacchiera infinita (le cui quadrate sono indicizzate da $\mathbb{Z}^2$). Più precisamente, $a$ e $b$ siano due integri con $0\le a\le b$. Ada studia un pezzo che chiama cavaliere di tipo $(a,b)$, che a ogni turno può spostare quadrati $a$ paralleli ad un asse della lavagna, quindi quadrati $b$ nell'altra direzione perpendicolare. Ad esempio, il solito cavaliere di scacchi è il cavaliere di tipo $(1,2)$. Il cavaliere parte dal quadrato $(0,0)$.
> 
> 1. Come funzione di $a$ e $b$, il cavaliere del tipo $(a,b)$ può raggiungere ogni quadrato della tavola infinita? Si possono considerare arbitrari i seguenti valori di $(a,b)$: a) $(1,1)$; b) $(1,2)$; c) $(1,3)$; d) $(2,3)$; e) $(a,b)$. [Nota di seguito: Questa domanda è studiata nell'articolo "Contando il numero di quadrati raggiungibili in $k$ Movimenti di Cavaliere", di A. Miller e B. Farnsworth. Si può usare il risultato trovato lì ma si raccomanda di trattare i problemi del problema.]
> 
> 2. Ada scrive $u_k$ per il numero di quadrati della scheda raggiungibili in $k$ mosse (cioè per il quale il numero minimo di mosse è $k$). Determinare la sequenza $(u_k)$. Come si comporta questa sequenza quando $k\to+\infty$? Sta aumentando?
> 
> 3. Qual è il numero scritto sul quadrato $(0,1)$ (il numero minimo di mosse per raggiungerlo)? Propone una stima.
> 
> 4. Ada dice che un quadrato $c$ è regolare se, per ogni quadrato $c'$ vicino $c$, la differenza tra i numeri scritti su $c$ e su $c'$ è sempre la stessa. Quanti quadrati non sono regolari? Se questo numero è finito, calcolalo. Altrimenti, qual è la più grande differenza tra due quadrati vicini che si può osservare infinitamente spesso?
> 
> 5. Per un intero $n\in\mathbb{N}^*$, Ada scrive $B_n$ per l'insieme di quadrati della forma $(x,y)$ con $x,y\in\mathbb{Z}$ e $|x|,|y|\le n$. Il tempo di intervento di un cavaliere in $B_n$ è il numero più grande scritto sui quadrati di $B_n$. Per quali valori di $(a,b)$ il tempo di intervento in $B_n$ è minimo? Ada scrive $T_n$ per questo valore. Valutare $T_n$ in funzione di $n$.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

[[src_tfjm_2018__Q07]]
