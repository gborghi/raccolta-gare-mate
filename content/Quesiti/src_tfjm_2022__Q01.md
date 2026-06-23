---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022 — Quesito 1
tipo: quesito
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
