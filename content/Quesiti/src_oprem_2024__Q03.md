---
title: Olympiades Nationales de Mathématiques (Première) 2024 — Quesito 3
tipo: quesito
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
