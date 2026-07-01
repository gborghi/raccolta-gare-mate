---
title: Olympiades Nationales de Mathématiques (Première) 2024 — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_oprem_2024__Q03
parent: src_oprem_2024
competition: Olympiades Nationales de Mathématiques (Première) 2024
family: olympiades_premiere
year: '2024'
level: Olympiades Première
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  Exercise 3 (general track without maths speciality, and all technological
  track): Pascal pyramids of absolute differences — construction, counting
  entries, perfect pyramids, and where the largest entry must lie via a
  greatest-neighbour path argument.
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_aritmetica
  - topic_geometria_piana
methods:
  - method_estremalita
  - method_casework
  - method_conteggio
  - method_induzione
skills:
  - skill_ragionamento_geometrico
  - skill_conteggio_sistematico
  - skill_astrazione
  - skill_riconoscimento_pattern
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/olimpiadi-premiere
  - anno/2024
  - livello/Olympiades-Première
  - topic/combinatoria
  - topic/aritmetica
  - topic/geometria_piana
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Exercise 3 (general track without maths speciality, and all technological track): Pascal pyramids of absolute differences — construction, counting entries, perfect pyramids, and where the largest entry must lie via a greatest-neighbour path argument.*

> **Exercise 3 (candidates of the general track NOT following the « spé maths » option AND ALL candidates of the technological track)**
> 
> *Pascal Pyramids (Pyramides de Pascal)*
> 
> A **Pascal pyramid** is a triangular array of natural integers formed in the following manner: its top line contains one number, the next two numbers, etc. Moreover, on every line except the last (the one at the bottom), each number must equal the distance between the two numbers situated just below it, one to its left and the other to its right (i.e. the absolute difference). Below is represented, in a few steps, the construction of such a triangle with $4$ lines (for instance, from the base line $8,\ 4,\ 10,\ 7$ one obtains $4,\ 6,\ 3$, then $2,\ 3$, then $1$).
> 
> **1. Preliminary question.** Recall why the sum $1+2+\cdots+n$ of the first $n$ positive integers, with $n\ge 1$, equals $\dfrac{n(n+1)}{2}$.
> 
> **2. Some examples.**
> 
> **a.** Construct the Pascal pyramid with $4$ lines whose last line is constituted, in this order of exposition, of the integers $4,\ 3,\ 9$ and $7$ ($4$ is therefore at the far left and $7$ at the far right).
> 
> **b.** Construct a Pascal pyramid with $3$ lines using exclusively the integers $1$, $2$, $3$.
> 
> **3. Number of integers in a Pascal pyramid.**
> 
> **a.** How many numbers (distinct or not) are written in a Pascal pyramid with $3$ lines? With $4$ lines?
> 
> **b.** Let $n\ge 2$. How many numbers (distinct or not) are written in a Pascal pyramid with $n$ lines?
> 
> *In what follows, we say a Pascal pyramid is* **perfect** *if it contains exactly once each of the integers between $1$ and the total number of integers of the triangle. For example, the Pascal pyramid with $3$ lines having top $2$, middle line $3$ $5$, and base line $4$ $1$ $6$ is perfect.*
> 
> **4.** Let $n\ge 2$. Show that if a perfect pyramid with $n$ lines exists, then the largest integer it possesses is situated on the bottom line. What is this integer?
> 
> **5.** Construct a perfect Pascal pyramid with $3$ lines in which the number $6$ is situated at the bottom and in the middle.
> 
> **6.** The object of this question is to show that in a perfect Pascal pyramid with $n$ lines, and except when $n\le 3$, the number $n(n+1)/2$ cannot be situated either at the bottom far right or at the bottom far left.
> 
> **a.** Justify that it suffices to establish that it cannot be situated at the bottom far right. We assume in what follows that the number $n(n+1)/2$ is situated at the bottom far right.
> 
> **b.** Consider then the path that starts from the top of the pyramid and descends progressively, connecting the number reached on each line to the larger of the two numbers of the line below situated to its left and to its right. In the example above question 4 this path would be $2\to 5\to 6$. Show that, in the general case, this path can only follow the right edge of the pyramid and end at $n(n+1)/2$.
> 
> **c.** Conclude by considering the equilateral triangle whose bottom base is composed of the $n-2$ leftmost numbers of the last line.

![[src_oprem_2024__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_induzione|Induzione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1zCUBghOB28ZpdNrjC68r0u1mIzIpp_46/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Esercizio 3 (traccia generale senza specialità matematica, e tutta la traccia tecnologica): Piramide di Pascal di differenze assolute  costruzione, conteggio di entrate, piramidi perfette, e dove la più grande entrata deve essere attraverso un argomento di percorso più grande vicino.*

> **Esercizio 3 (candidati della pista generale NON seguendo l'opzione  spé maths  E TUTTI i candidati della pista tecnologica) **
> 
> *Piramidi di Pascal (Piramidi di Pascal) *
> 
> Una piramide Pascal è un array triangolare di numeri interi naturali formato in modo seguente: la sua linea superiore contiene un numero, i due numeri successivi, ecc. Inoltre, su ogni linea, tranne l'ultima (la di sotto), ogni numero deve essere uguale alla distanza tra i due numeri situati appena sotto di esso, uno a sinistra e l'altro a destra (cioè la differenza assoluta). Qui di seguito è rappresentata, in pochi passi, la costruzione di un triangolo con linee $4$ (ad esempio, dalla linea di base $8,\ 4,\ 10,\ 7$ si ottiene $4,\ 6,\ 3$, quindi $2,\ 3$, quindi $1$).
> 
> **1. Domanda preliminare.** Ricordi perché la somma $1+2+\cdots+n$ dei primi $n$ enti interi positivi, con $n\ge 1$, è uguale a $\dfrac{n(n+1)}{2}$.
> 
> **2. Alcuni esempi.**
> 
> **a.** Costruire la piramide Pascal con linee $4$ la cui ultima linea è costituita, in questo ordine di esposizione, dai numeri interi $4,\ 3,\ 9$ e $7$ ($4$ si trova quindi all'estrema sinistra e $7$ all'estrema destra).
> 
> **b.** Costruire una piramide Pascal con linee $3$ utilizzando esclusivamente gli integri $1$, $2$, $3$.
> 
> **3. Numero di integri in una piramide di Pascal.**
> 
> **a.** Quanti numeri (distinti o meno) sono scritti in una piramide Pascal con linee $3$? Con linee $4$?
> 
> < MSK2/>b.< MSK3/> Lasciate < MSK0/>. Quanti numeri (distinti o meno) sono scritti in una piramide di Pascal con linee $n$?
> 
> In quanto segue, diciamo che una piramide di Pascal è perfetta se contiene esattamente una volta ciascuno degli enti tra MSK0 e il numero totale di enti del triangolo. Ad esempio, la piramide Pascal con linee $3$ che hanno $2$ in alto, linea media $3$ $5$ e linea base $4$ $1$ $6$ è perfetta.*
> 
> < MSK2/>4. < MSK3/> Lasciate < MSK0/>. Mostrare che se esiste una piramide perfetta con linee $n$, il numero intero più grande che possiede si trova sulla linea inferiore. Qual è questo numero intero?
> 
> **5.** Costruire una piramide Pascal perfetta con linee $3$ in cui il numero $6$ sia situato in basso e in mezzo.
> 
> L'obiettivo di questa domanda è dimostrare che in una piramide Pascal perfetta con linee $n$, e tranne quando $n\le 3$, il numero $n(n+1)/2$ non può essere situato né in basso a destra né in basso a sinistra.
> 
> **a.** giustificare che sia sufficiente a dimostrare che non può essere situato in fondo a destra. Supponiamo, in quanto segue, che il numero $n(n+1)/2$ sia situato in basso a destra.
> 
> **b.** Considera quindi il percorso che parte dalla cima della piramide e scende progressivamente, collegando il numero raggiunto su ogni linea al più grande dei due numeri della linea inferiore situato a sinistra e a destra. Nell'esempio di cui sopra la domanda 4 questo percorso sarebbe $2\to 5\to 6$. Mostrare che, nel caso generale, questo percorso può seguire solo il bordo destro della piramide e terminare a $n(n+1)/2$.
> 
> **c.** Concludi considerando il triangolo equilaterale la cui base inferiore è composta dai numeri $n-2$ più a sinistra dell'ultima linea.

![[src_oprem_2024__Q03.png]]

[[src_oprem_2024__Q03]]
