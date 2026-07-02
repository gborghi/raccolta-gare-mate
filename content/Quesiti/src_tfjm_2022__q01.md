---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022 — Quesito 1
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2022__Q01
parent: src_tfjm_2022
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022
family: tfjm
year: '2022'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '1'
summary: >-
  Folding polygons: study the flattened polygons (plies) obtainable by
  repeatedly folding a convex polygon with convex creases, including periodicity
  of resulting sequences.
qa_score: '3'
topics:
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_simmetria
  - method_ricorsione
  - method_casework
skills:
  - skill_ragionamento_geometrico
  - skill_astrazione
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2022
  - livello/TFJM²
  - topic/geometria_piana
  - topic/combinatoria
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Folding polygons: study the flattened polygons (plies) obtainable by repeatedly folding a convex polygon with convex creases, including periodicity of resulting sequences.*

> Folding of polygons.
> 
> Eulalie has sheets of polygons that she folds to obtain other polygons.
> 
> She always folds the polygons by the same procedure: she chooses two distinct vertices $A$ and $B$ of the polygon and a line $(d)$, the mediatrix (perpendicular bisector) of the segment $[AB]$; she then performs an axial symmetry with axis $(d)$ on the part of the polygon lying on the same side of $(d)$ as $A$. In particular, the image of $A$ is folded onto the vertex $B$.
> 
> We say that a polygon is $convex$ when all its interior angles are less than $180^\circ$. To avoid ending up with peculiar shapes, Eulalie requires herself to fold only convex polygons. A polygon is said to be $convex$ if the polygon obtained is convex.
> 
> A shape obtained by a convex fold from a convex starting polygon is called a $pli$ (ply) of the starting polygon.
> 
> 1. Describe all the plies of the following polygons.
>   a) Equilateral, isosceles or right triangles.
>   b) Quadrilaterals (arbitrary).
>   c) Regular polygons.
> 
> 2. Let $n \ge 3$ be an integer.
>   a) At most how many sides can the convex ply of a convex polygon with $n$ sides have?
>   b) And at minimum?
> 
> 3. In this question only, the plies performed are not required to be convex, but the polygon to be folded is always convex. Redo question 2 in this setting.
> 
> Two polygons $P$ and $Q$ with $n$ sides are said to be $similar$ if there is an enlargement $\lambda \in \mathbb{R}_+^*$ such that one can number their vertices cyclically respectively $A_1, A_2, \cdots, A_n$ and $B_1, B_2, \cdots, B_n$ so that the angles internal at $A_i$ and $B_i$ are equal and one has $A_i A_{i-1} = \lambda B_i B_{i-1}$ for all $1 \le i \le n$, with $A_0 = A_n$, $B_0 = B_n$. Figure 3 illustrates two polygons that are similar for an enlargement $\lambda = 2$.
> 
> 4. Eulalie wants to perform a succession of plies starting from a polygon and then come back to her starting polygon. A $period$ of plies is a succession of convex plies $P_0, P_1, \cdots, P_k$ such that each polygon precedes the next one. The polygon $P_0$ being arbitrary, one then has a sequence of plies of starting polygon $P_0$, issued from $P_0$. One says further that a sequence of plies $P_0, P_1, \ldots, P_k$ is $periodic$ when $P_0$ and $P_k$ are similar and $k$ is the smallest strictly positive integer verifying this property; it is then required that $P_0$ and $P_i$ are not similar for all $1 \le i < k$. The integer $k$ is called the $period$ of the sequence. A polygon $P$ is said to be of $finite period$ if there exists a periodic sequence of plies issued from $P$. In this case, the minimal period of the sequence of plies issued from $P$ is called the period of $P$.
>   a) What is the period of the square? Describe the periodic sequences of plies of the square.
>   b) Let $n \ge 3$ be an integer. Do there exist periodic sequences of plies issued from a regular polygon with $n$ sides? If possible, give an enclosure (bounds) of the period of a regular polygon with $n$ sides.
> 
> 5. In this question, one is interested in periodic sequences of plies of period 1. Do there exist similar polygons that are their own plies? How many sides can such a polygon have?
> 
> 6. For which $k \ge 1$ do there exist polygons of period $k$?
> 
> 7. In this question, one is interested in periodic sequences of plies all having the same number of sides. A sequence of plies of polygons with $n$ sides then has a $constant number of sides$, or is a $sequence of n sides$, if all the polygons of the periodic sequence have $n$ sides. Redo questions 4 and 6, further imposing periodic sequences with a constant number of $n$ sides.
> 
> 8. Propose and study other avenues of research.

![[src_tfjm_2022__Q01.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<span class="qlang-split" data-lang="it"></span>


*Poligoni pieghevoli: studiare i poligoni piatti ottenuti piegando ripetutamente un poligono convex con pieghe convex, compresa la periodicità delle sequenze risultanti.*

> Piegare i poligoni.
> 
> Eulalie ha fogli di poligoni che piega per ottenere altri poligoni.
> 
> Pieghe sempre i poligoni con la stessa procedura: sceglie due vertici distinti $A$ e $B$ del poligono e una linea $(d)$, la mediatrice (bisettore perpendicolare) del segmento $[AB]$; esegue quindi una simmetria assiale con asse $(d)$ sulla parte del poligono che si trova sullo stesso lato di $(d)$ come $A$. In particolare, l'immagine di $A$ è piegata sul vertice $B$.
> 
> Diciamo che un poligono è $convex$ quando tutti i suoi angoli interni sono inferiori a $180^\circ$. Per evitare di finire con forme peculiari, Eulalie si richiede di piegare solo poligoni convexi. Si dice che un poligono sia $convex$ se il poligono ottenuto è convexo.
> 
> Una forma ottenuta con un piego convexo da un poligono di partenza convexo è chiamata $pli$ (piano) del poligono di partenza.
> 
> 1. Descrivere tutte le pieghe dei seguenti poligoni. a) Equilaterali, igosceles o triangolari rettangolari. b) Quadrilaterali (arbitrari). c) Poligoni regolari.
> 
> 2. $n \ge 3$ sia un numero intero. a) Quanti lati può avere, al massimo, la strata convexa di un poligono convexo con lati $n$? b) E come minimo?
> 
> 3. Solo in questa domanda, non è necessario che le pieghe eseguite siano conveche, ma il poligono da piegare è sempre conveco. Rendi la domanda 2 in questo contesto.
> 
> Due poligoni $P$ e $Q$ con lati $n$ sono $similar$ se vi è un'ampliamento $\lambda \in \mathbb{R}_+^*$ tale da poter numerare i loro vertici ciclicamente rispettivamente $A_1, A_2, \cdots, A_n$ e $B_1, B_2, \cdots, B_n$ in modo che gli angoli interni a $A_i$ e $B_i$ siano uguali e uno abbia $A_i A_{i-1} = \lambda B_i B_{i-1}$ per tutti $1 \le i \le n$, con $A_0 = A_n$, $B_0 = B_n$. La figura 3 illustra due poligoni simili per un ingrandimento $\lambda = 2$.
> 
> 4. Eulalie vuole eseguire una successione di pieghe partendo da un poligono e poi tornare al suo poligono di partenza. Un $period$ di pie è una successione di pie convexe $P_0, P_1, \cdots, P_k$ in modo tale che ogni poligono preceda quello successivo. Il poligono $P_0$ essendo arbitrario, si ha quindi una sequenza di pieghe del poligono iniziale $P_0$, emessa da $P_0$. Si dice inoltre che una sequenza di pie $P_0, P_1, \ldots, P_k$ è $periodic$ quando $P_0$ e $P_k$ sono simili e $k$ è il numero intero più piccolo rigorosamente positivo che verifica questa proprietà; è quindi richiesto che $P_0$ e $P_i$ non siano simili per tutti $1 \le i < k$. Il numero intero $k$ è chiamato $period$ della sequenza. Si dice che un poligono $P$ sia di $finite period$ se esiste una sequenza periodica di pieghe emesse da $P$. In questo caso, il periodo minimo della sequenza di pieghe emesse da $P$ è denominato periodo di $P$. a) Qual è il periodo della piazza? Descrivere le sequenze periodiche di pie di quadrato. b) Il $n \ge 3$ deve essere un numero intero. Esistono sequenze periodiche di pieghe emesse da un poligono regolare con lati $n$? Se possibile, indicare un rivestimento (limitati) del periodo di un poligono regolare con lati $n$.
> 
> 5. In questa questione, si sono interessate le sequenze periodiche di pie di periodo 1. Esistono poligoni simili che hanno le proprie pieghe? Quanti lati può avere un tale poligono?
> 
> 6. Per quale $k \ge 1$ esistono poligoni del periodo $k$?
> 
> 7. In questa domanda, si interessano sequenze periodiche di piele che hanno tutte lo stesso numero di lati. Una sequenza di pieghe di poligoni con lati $n$ ha quindi un $constant number of sides$, o è un $sequence of n sides$, se tutti i poligoni della sequenza periodica hanno lati $n$. Riprendi le domande 4 e 6, imponendo ulteriormente sequenze periodiche con un numero costante di lati $n$.
> 
> 8. Proporre e studiare altre vie di ricerca.

![[src_tfjm_2022__Q01.png]]

[[src_tfjm_2022__Q01]]
