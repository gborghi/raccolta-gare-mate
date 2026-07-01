---
title: Concours Général des Lycées 2018 — Matematica — Quesito 1
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2018__Q01
parent: src_cgen_2018
competition: Concours Général des Lycées 2018 — Matematica
family: concours_generale
year: '2018'
level: Concours Général
country: Francia
modalita: individuale
quesito: '1'
summary: >-
  Bernstein polynomials (properties, recurrence, partition of unity,
  probabilistic sums) and the geometric study of degree 0/1/2 Bezier curves.
qa_score: '4'
topics:
  - topic_algebra
  - topic_geometria_analitica
  - topic_probabilita
methods:
  - method_coordinate
  - method_casework
  - method_conteggio
skills:
  - skill_manipolazione_algebrica
  - skill_ragionamento_geometrico
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2018
  - livello/Concours-Général
  - topic/algebra
  - topic/geometria_analitica
  - topic/probabilita
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Bernstein polynomials (properties, recurrence, partition of unity, probabilistic sums) and the geometric study of degree 0/1/2 Bezier curves.*

> Problem 1: Approximations of curves.
> 
> Part 1.1 - The Bernstein polynomials.
> For every natural number $n$ and every natural number $i$ between $0$ and $n$, we denote by $B_{n,i}$ the polynomial defined, for $p$ varying in the interval $[0;1]$, by:
> $$B_{n,i}(p)=\binom{n}{i}p^i(1-p)^{n-i}$$
> with $\binom{n}{i}$ the binomial coefficient, $i$ among $n$. Thus $B_{0,0}(p)=1$, $B_{1,0}(p)=1-p$ and $B_{1,1}(p)=p$. These polynomials are called Bernstein polynomials.
> 
> 1. a. Give the expression of $B_{2,0}(p)$, $B_{2,1}(p)$ and $B_{2,2}(p)$.
>    b. Determine the expression of the Bernstein polynomials for $n=3$, namely $B_{3,0}(p)$, $B_{3,1}(p)$, $B_{3,2}(p)$ and $B_{3,3}(p)$.
> 
> 2. a. What is the expression of $B_{n,0}(p)$ and of $B_{n,n}(p)$?
>    b. Show that for all $n\ge 1$ and all $i$ between $1$ and $n-1$,
>    $$B_{n,i}(p)=(1-p)B_{n-1,i}(p)+pB_{n-1,i-1}(p)$$
> 
> 3. a. At which value(s) $p\in[0;1]$ does a Bernstein polynomial vanish? (One should reason by distinguishing cases according to the values of $n$ and of $i$.)
>    b. What about its sign on $[0;1]$?
> 
> 4. Show that the Bernstein polynomials of the same degree $n$ form a partition of unity: that is, for every natural number $n$,
> $$\sum_{i=0}^{n}B_{n,i}(p)=B_{n,0}(p)+B_{n,1}(p)+\ldots+B_{n,n-1}(p)+B_{n,n}(p)=1$$
> 
> 5. Determine the value of the sums:
> $$\sum_{i=0}^{n}i\,B_{n,i}(p)\quad\text{and}\quad\sum_{i=0}^{n}i^2\,B_{n,i}(p)$$
> What do these sums represent in probabilistic terms?
> 
> Part 1.2 - Bezier curves.
> The plane is equipped with an orthonormal frame $(O,I,J)$. Let $n$ be a natural number. We are given $n+1$ non-aligned points of the plane $P_0,P_1,\ldots,P_{n-1},P_n$. The Bezier curve of degree $n$ and of control points $P_0,P_1,\ldots,P_{n-1},P_n$ is the set of points $M(p)$ of the plane, with $p$ varying in the interval $[0;1]$, such that:
> $$\overrightarrow{OM(p)}=\sum_{i=0}^{n}B_{n,i}(p)\,\overrightarrow{OP_i}$$
> In what follows we focus on Bezier curves of degree $0$, $1$ or $2$. We fix therefore $A$, $B$, $C$ three non-aligned points of the plane.
> 
> 1. Recognize the geometric nature
>    a. of the Bezier curve of degree $0$ and control point $A$.
>    b. of the Bezier curve of degree $1$ and control points $B$ and $C$.
> 
> 2. We consider the Bezier curve of degree $2$ and control points $A$, $B$ and $C$.
>    a. Justify that the points $A$ and $C$ belong to this curve. Does the point $B$ belong to it?
>    b. In this question we take the points of coordinates $A(-2;5)$, $B(2;1)$ and $C(4;3)$. Propose a construction of the points of this curve for $p=\tfrac{1}{4}$, $p=\tfrac{1}{2}$ and $p=\tfrac{3}{4}$. Sketch the curve freehand.
> 
> 3. Show that this curve is necessarily inscribed in the triangle $ABC$.
> 
> 4. What could be the geometric nature of this Bezier curve of degree $2$? Justify your answer.

![[src_cgen_2018__Q01.png]]

**Topic:** [[topic_algebra|Algebra]], [[topic_geometria_analitica|Geometria analitica]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]]
**Area:** [[Algebra e Analisi]], [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1ndY2rTBhYsNW1k5eeouIHRqR2THD_a96/view)


<span class="qlang-split" data-lang="it"></span>


*Polinomi di Bernstein (proprietà, ricorrenza, divisione di unità, somme probabilistiche) e lo studio geometrico delle curve di Bezier di grado 0/1/2.*

> Problema 1: Approximation delle curve.
> 
> Parte 1.1 - I polinomi di Bernstein. Per ogni numero naturale $n$ e per ogni numero naturale $i$ tra $0$ e $n$, indichiamo con $B_{n,i}$ il polinomio definito, per $p$ che varia nell'intervallo $[0;1]$, da: $$B_{n,i}(p)=\binom{n}{i}p^i(1-p)^{n-i}$$ con $\binom{n}{i}$ il coefficiente binomio, $i$ tra $n$. Quindi $B_{0,0}(p)=1$, $B_{1,0}(p)=1-p$ e $B_{1,1}(p)=p$. Questi polinomi sono chiamati polinomi di Bernstein.
> 
> 1. a. Indicare l'espressione di $B_{2,0}(p)$, $B_{2,1}(p)$ e $B_{2,2}(p)$. b. Determinare l'espressione dei polinomi di Bernstein per $n=3$, vale a dire $B_{3,0}(p)$, $B_{3,1}(p)$, $B_{3,2}(p)$ e $B_{3,3}(p)$.
> 
> 2. a. Qual è l'espressione di $B_{n,0}(p)$ e di $B_{n,n}(p)$? b. Indicare che per tutti i $n\ge 1$ e tutti i $i$ tra $1$ e $n-1$, $$B_{n,i}(p)=(1-p)B_{n-1,i}(p)+pB_{n-1,i-1}(p)$$
> 
> 3. a. A quale valore (s) $p\in[0;1]$ un polinomio di Bernstein scompare? (Si deve ragionare distinguendo i casi secondo i valori di $n$ e di $i$.) b. E il suo segno su $[0;1]$?
> 
> 4. Mostrare che i polinomi di Bernstein dello stesso grado $n$ formano una partizione di unità: cioè, per ogni numero naturale $n$, $$\sum_{i=0}^{n}B_{n,i}(p)=B_{n,0}(p)+B_{n,1}(p)+\ldots+B_{n,n-1}(p)+B_{n,n}(p)=1$$
> 
> 5. Determinare il valore delle somme: $$\sum_{i=0}^{n}i\,B_{n,i}(p)\quad\text{and}\quad\sum_{i=0}^{n}i^2\,B_{n,i}(p)$$ Cosa rappresentano queste somme in termini di probabilità?
> 
> Parte 1.2 - Curve di Bezier. L'aereo è dotato di una cornice ortonormale $(O,I,J)$. $n$ sia un numero naturale. Ci sono dati $n+1$ punti non allineati del piano $P_0,P_1,\ldots,P_{n-1},P_n$. La curva di Bezier di grado $n$ e dei punti di controllo $P_0,P_1,\ldots,P_{n-1},P_n$ è l'insieme dei punti $M(p)$ del piano, con $p$ che varia nell'intervallo $[0;1]$, in modo tale che: $$\overrightarrow{OM(p)}=\sum_{i=0}^{n}B_{n,i}(p)\,\overrightarrow{OP_i}$$ In quanto segue ci concentriamo sulle curve di Bezier di grado $0$, $1$ o $2$. Quindi, fissamo $A$, $B$, $C$ tre punti non allineati del piano.
> 
> 1. Riconoscere la natura geometrica a. della curva di Bezier di grado $0$ e del punto di controllo $A$. b. della curva di Bezier di grado $1$ e dei punti di controllo $B$ e $C$.
> 
> 2. Si considera la curva di Bezier di grado $2$ e i punti di controllo $A$, $B$ e $C$. a. giustificare che i punti $A$ e $C$ appartengono a questa curva. Il punto $B$ ne appartiene? b. In questa domanda prendiamo i punti delle coordinate $A(-2;5)$, $B(2;1)$ e $C(4;3)$. Proporre una costruzione dei punti di questa curva per $p=\tfrac{1}{4}$, $p=\tfrac{1}{2}$ e $p=\tfrac{3}{4}$. Segna la curva a mano libera.
> 
> 3. Mostrare che questa curva è necessariamente inserita nel triangolo $ABC$.
> 
> 4. Qual potrebbe essere la natura geometrica di questa curva di Bezier di grado $2$? Giustifica la tua risposta.

![[src_cgen_2018__Q01.png]]

[[src_cgen_2018__Q01]]
