---
title: Concours Général des Lycées 2006 — Matematica — Quesito 3
tipo: quesito
quesito_id: quesito_src_cgen_2006__Q03
parent: src_cgen_2006
competition: Concours Général des Lycées 2006 — Matematica
family: concours_generale
year: '2006'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  Plane sections of a cube through its center: a projected-area formula, then
  bounding the area of triangular/quadrilateral/hexagonal cross-sections
qa_score: '4'
topics:
  - topic_geometria_solida
  - topic_geometria_analitica
  - topic_disuguaglianze
methods:
  - method_coordinate
  - method_casework
  - method_disuguaglianze
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
  - skill_manipolazione_algebrica
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2006
  - livello/Concours-Général
  - topic/geometria_solida
  - topic/geometria_analitica
  - topic/disuguaglianze
  - gara/individuale
---

*Plane sections of a cube through its center: a projected-area formula, then bounding the area of triangular/quadrilateral/hexagonal cross-sections*

> The aim of this exercise is to study the intersections of a cube with planes passing through its center, and to bound the area of the plane sections thus obtained.
> 
> 3.1 A formula for computing plane areas
> Space is referred to an orthonormal frame $(O; \vec{i}, \vec{j}, \vec{k})$.
> Let $\mathscr{P}$ be a plane, with unit normal vector $\vec{n}$. Set $\vec{n} \cdot \vec{k} = \cos\gamma$, and denote by $\mathscr{P}_0$ the plane with frame $(O, \vec{i}, \vec{j})$.
> 1. Assume in this question that $\mathscr{P}$ and the plane $\mathscr{P}_0$ are not parallel.
>    Let $\mathscr{D}$ be the line of intersection of the planes $\mathscr{P}$ and $\mathscr{P}_0$, $A$ and $B$ points of $\mathscr{D}$, $C$ a point of $\mathscr{P}$, $C'$ the orthogonal projection of $C$ on the plane $\mathscr{P}_0$ and finally $H$ the orthogonal projection of $C$ on the line $(AB)$.
>    a. Justify the fact that $H$ is also the orthogonal projection of $C'$ on the line $(AB)$.
>    b. Deduce a relation between the lengths $CH$, $C'H$ and the angle $\gamma$, then between the areas $S$ and $S'$ of the triangles $ABC$ and $ABC'$.
>    c. Let $Q$ be a polygon contained in the plane $\mathscr{P}$, $Q'$ its orthogonal projection on the plane $\mathscr{P}_0$ and $S$ and $S'$ their respective areas. Show that:
>    $$S' = S |\cos\gamma|$$
> 2. What can be said in the particular case where $\mathscr{P}$ and the plane $(O, \vec{i}, \vec{j})$ are parallel?
> 3. Set $\vec{n} \cdot \vec{i} = \cos\alpha$ and $\vec{n} \cdot \vec{j} = \cos\beta$.
>    a. Show that the absolute values of the coordinates of $\vec{n}$ in the basis $(\vec{i}, \vec{j}, \vec{k})$ are $|\cos\alpha|$, $|\cos\beta|$ and $|\cos\gamma|$.
>    b. Let $Q$ be a polygon contained in the plane $\mathscr{P}$, $S$ its area, $S'$, $S''$ and $S'''$ the areas of its projections respectively onto the frame planes $(O, \vec{i}, \vec{j})$, $(O, \vec{j}, \vec{k})$ and $(O, \vec{k}, \vec{i})$.
>       Show that: $S^2 = S'^2 + S''^2 + S'''^2$.
> 
> 3.2 Plane sections of a cube
> 3.2.1 Generalities
> Space being referred to the orthonormal frame $(O; \vec{i}, \vec{j}, \vec{k})$, consider the cube $\mathscr{K}$ with center $O$ represented opposite, whose vertices have coordinates:
> $A(1, 1, 1)$, $B(-1, 1, 1)$, $C(-1, -1, 1)$, $D(1, -1, 1)$, $A'(-1, -1, -1)$, $B'(1, -1, -1)$, $C'(1, 1, -1)$, $D'(-1, 1, -1)$,
> as well as a plane $\mathscr{P}$ passing through $O$, whose intersection with $\mathscr{K}$ is a polygon $\mathscr{A}$.
> 1. Show that $\mathscr{P}$ contains $0$, $2$ or $4$ vertices of $\mathscr{K}$.
> 2. How many planes $\mathscr{P}$ containing $4$ vertices of $\mathscr{K}$ are there? Determine in that case the nature of $\mathscr{A}$ as well as its area.
> 3. Suppose $\mathscr{P}$ contains exactly two vertices of $\mathscr{K}$, $A$ and $A'$.
>    a. Show that $\mathscr{P}$ meets one of the three edges $[BC]$, $[CD]$ or $[BD']$.
>    b. Suppose $\mathscr{P}$ meets the edge $[BC]$ at a point of coordinates $(-1, y, 1)$. Determine, according to the value of $y$, the exact nature of $\mathscr{A}$ and compute its area.
>    c. Give, in this case, the best possible bound on the area of $\mathscr{A}$ when $y$ varies.
> 4. Suppose $\mathscr{P}$ contains no vertex of $\mathscr{K}$.
>    a. Show that each of the half-spaces bounded by $\mathscr{P}$ contains exactly $4$ vertices of $\mathscr{K}$.
>    b. Prove that $\mathscr{P}$ meets $4$ or $6$ edges of $\mathscr{K}$.
> From now on one considers only planes $\mathscr{P}$ containing no vertex of $\mathscr{K}$.
> 
> 3.2.2 Planes $\mathscr{P}$ meeting 4 edges of $\mathscr{K}$
> Consider a plane $\mathscr{P}$ meeting the edge $[AB]$ at a point $M$ of coordinates $(u, 1, 1)$ and the edge $[CD]$ at a point $N$ of coordinates $(v, -1, 1)$.
> 1. Determine, according to the values of $u$ and $v$, the exact nature of $\mathscr{A}$ and compute its area.
> 2. Give, in this case, the best possible bound on the area of $\mathscr{A}$ when $u$ and $v$ vary.
> 
> 3.2.3 Planes $\mathscr{P}$ meeting 6 edges of $\mathscr{K}$
> Consider a plane $\mathscr{P}$ meeting the edge $[AB]$ at a point $M$ of coordinates $(x, 1, 1)$ and the edge $[BC]$ at a point $N$ of coordinates $(-1, y, 1)$.
> 1. Show that $\mathscr{P}$ meets the edge $[C'A]$ at a point $R$ of coordinates $(-1, -1, z)$. Give, on a freehand sketch, the geometric construction of the point $R$, the points $M$ and $N$ being given.
> 2. Establish that the three real numbers $x$, $y$ and $z$ are linked by the relation:
>    $$(1) \qquad x + y + z + xyz = 0$$
> 3. Draw the polygon $\mathscr{A}$ for $x = y = z = 0$ and compute its area.
> 4. Show that the area $S$ of $\mathscr{A}$ satisfies the relation:
>    $$S^2 = (3 - x + y + xy)^2 + (3 + x - z + xz)^2 + (3 - y + z + yz)^2$$
>    One sets from now on:
>    $$f(x, y, z) = (3 - x + y + xy)^2 + (3 + x - z + xz)^2 + (3 - y + z + yz)^2$$
> 5. Determine the set of values of $S$ when the points $M$ and $N$ vary in such a way that $x + y = 0$.
> 6. Given strictly positive reals $u$, $v$ and $w$, set $x = \frac{u-1}{u+1}$, $y = \frac{v-1}{v+1}$ and $z = \frac{w-1}{w+1}$.
>    a. Verify that, when the triple $(x, y, z)$ satisfies relation $(1)$, one has $uvw = 1$ and $z = \frac{1 - uv}{1 + uv}$.
>    b. One sets:
>       $$g(u, v) = f\left(\frac{u-1}{u+1}, \frac{v-1}{v+1}, \frac{1-uv}{1+uv}\right)$$
>       and one admits that one has the relation:
>       $$g(u, v) = 32 \frac{(1 + v + uv)^2 \left(1 + u + u^2 + uv + u^2 v + u^2 v^2\right)}{(1 + u)^2 (1 + v)^2 (1 + uv)^2}$$
>       Show that one has, for every couple $(u, v)$ of strictly positive reals, the bound:
>       $$24 \le g(u, v) \le 32$$
>       Deduce, in this case of figure, the best possible bound on the area of $\mathscr{A}$ when $x$ and $y$ vary.

![[src_cgen_2006__Q03.png]]

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_geometria_analitica|Geometria analitica]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_casework|Casework]], [[method_disuguaglianze|Disuguaglianze]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1g6KpfZ2CgV1vLC5RFzksxLovNhazAWfz/view)
