---
title: Concours Général des Lycées 2018 — Matematica — Quesito 2
tipo: quesito
quesito_id: quesito_src_cgen_2018__Q02
parent: src_cgen_2018
competition: Concours Général des Lycées 2018 — Matematica
family: concours_generale
year: '2018'
level: Concours Général
country: Francia
modalita: individuale
quesito: '2'
summary: >-
  Discrete Dirichlet problem on a connected graph: assign reals to blue points
  so each equals the average of its neighbors, with given values at yellow
  points; existence (monotone iteration) and uniqueness of the solution.
qa_score: '4'
topics:
  - topic_combinatoria
  - topic_funzionali
  - topic_algebra
methods:
  - method_induzione
  - method_grafi
  - method_estremalita
  - method_casework
skills:
  - skill_astrazione
  - skill_modellizzazione
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2018
  - livello/Concours-Général
  - topic/combinatoria
  - topic/funzionali
  - topic/algebra
  - gara/individuale
---

*Discrete Dirichlet problem on a connected graph: assign reals to blue points so each equals the average of its neighbors, with given values at yellow points; existence (monotone iteration) and uniqueness of the solution.*

> Problem 2: A so discreet Mr. Dirichlet.
> 
> Let $\mathscr{S}$ be a non-empty finite set of points of the plane. Certain pairs of points of $\mathscr{S}$ are joined by segments, in such a way that, by following these segments, possibly in several steps, it is always possible to go from one point of $\mathscr{S}$ to any other (possible intersections between the segments are not taken into account, and a point is never joined to itself).
> 
> Two points of $\mathscr{S}$ joined by a segment are called neighbors.
> 
> If $M$ is a point of $\mathscr{S}$, we denote by $V(M)$ the set of neighbors of $M$, and we denote by $d(M)$ the number of neighbors of $M$, called the degree of $M$.
> 
> Each point of $\mathscr{S}$ has been colored either blue or yellow, and there is at least one yellow point in the set $\mathscr{S}$. To each yellow point, Gustav has assigned a real number of his choice. The mathematician Maryam then wishes to assign a real to each blue point (not necessarily the same number for one blue point as another) so as to satisfy the following property $(\mathscr{P})$:
> $(\mathscr{P})$ The number assigned to any blue point is the average of the numbers assigned to its neighbors.
> 
> Part 2.1 - Some examples to begin with.
> 1. In this question only, suppose that $\mathscr{S}=\{A,B,C\}$, with $A$ neighbor of $B$, itself neighbor of $C$ as in the drawing below. Moreover, $A$ is the only yellow point and Gustav has assigned to it the real $a$. What numbers must Maryam then assign to $B$ and to $C$ in order to satisfy the property $(\mathscr{P})$?
> 
> 2. For the three following questions suppose that $\mathscr{S}=\{A,B,C,D,E\}$. The points $A$ and $E$ are the only yellow points, and Gustav has assigned to them respectively the reals $a$ and $e$.
>    a. The links being indicated according to the following scheme, what numbers must Maryam then assign to each of the points $B$, $C$ and $D$ in order to satisfy the property $(\mathscr{P})$? (linear path $A-B-C-D-E$)
>    b. Same question for the following scheme.
>    c. Same question for the following scheme (complete-graph type, see figure).
> 
> 3. In this question only one generalizes the scheme of question 2.c with an arbitrary number of points.
> Suppose that $n\ge 1$ is an integer, that $\mathscr{S}=\{P_0,P_1,P_2,\ldots,P_n,P_{n+1}\}$ and that every point of $\mathscr{S}$ is a neighbor of every other point of $\mathscr{S}$. Moreover, $P_0$ and $P_{n+1}$ are the only yellow points, and Gustav has assigned to them respectively the reals $a$ and $b$. What numbers must Maryam then assign to each of the points $P_i$ for $i=1,\ldots,n$ in order to satisfy the property $(\mathscr{P})$?
> 
> Part 2.2 - Study of the general case.
> We denote respectively by $\mathscr{J}$ the set of yellow points, and by $\mathscr{B}$ the set of blue points. Thus $\mathscr{S}=\mathscr{J}\cup\mathscr{B}$.
> When Gustav assigns a real to each yellow point, this amounts to defining a function $k$ from $\mathscr{J}$ into $\mathbb{R}$. The objective of Maryam is therefore to construct a function $f:\mathscr{S}\to\mathbb{R}$ such that:
> $$f(M)=k(M)\ \text{if }M\text{ is yellow}\quad(1)$$
> $$f(M)=\frac{f(P_1)+\ldots+f(P_d)}{d}\ \text{if }M\text{ is blue}\quad(2)$$
> where $d=d(M)$ is the degree of $M$ (which depends on $M$) and $P_1,\ldots,P_d$ are the neighbors of $M$.
> We then say that $f$ is a solution for the attribution $k$.
> In this part, suppose given such an attribution $k$.
> We denote by $K$ the largest of the numbers $k(M)$ when $M$ ranges over the set $\mathscr{J}$.
> 
> Part 2.3 - Existence of a solution.
> 1. Suppose in this question that $k(M)\ge 0$ for every point $M\in\mathscr{J}$. We construct then, by recurrence, the following sequence $(f_n)$ of functions:
> We set $f_0(M)=k(M)$ if $M$ is yellow, and $f_0(M)=0$ if $M$ is blue. Then, for every integer $n\ge 0$, we set:
> $$f_{n+1}(M)=k(M)\ \text{if }M\text{ is yellow,}$$
> $$f_{n+1}(M)=\frac{f_n(P_1)+\ldots+f_n(P_d)}{d}\ \text{if }M\text{ is blue,}$$
> where $d=d(M)$ is the degree of $M$ and $P_1,\ldots,P_d$ are the neighbors of $M$.
>    a. Prove that, for all $n\ge 0$ and every point $M\in\mathscr{S}$, one has $0\le f_n(M)\le f_{n+1}(M)\le K$.
>    b. Deduce the existence of a solution for the attribution $k$.
> 2. Prove that if $f$ is a solution for the attribution $k$ and if $\alpha$ is a constant, then the function $f+\alpha$ is also a solution for the attribution $k+\alpha$.
> 3. Deduce that there always exists a solution to our problem in general, that is, without the hypothesis of question 1: $k(M)\ge 0$ for every point $M\in\mathscr{J}$.
> 
> Part 2.4 - Uniqueness of the solution.
> Suppose in this subpart that we have a solution $f$ for this attribution $k$.
> 4. Prove that, for every point $M\in\mathscr{S}$, one has $f(M)\le K$.
> 5. Suppose that $g$ is also a solution for the attribution $k$.
>    a. Justify that the function $f-g$ satisfies condition (2).
>    b. What is $f-g$ on $\mathscr{J}$?
>    c. Deduce that $f=g$.
> 6. What can be said about $f$ if there is only one yellow point?

![[src_cgen_2018__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_funzionali|Equazioni funzionali]], [[topic_algebra|Algebra]]
**Metodo:** [[method_induzione|Induzione]], [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** apri PDF
