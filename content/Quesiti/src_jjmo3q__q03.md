---
title: Japan Junior Mathematical Olympiad 2005 — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_jjmo3q__Q03
parent: src_jjmo3q
competition: Japan Junior Mathematical Olympiad 2005
family: jjmo
year: '2005'
level: JJMO
country: Giappone
modalita: individuale
quesito: '3'
summary: Area of quadrilateral formed by two medians
qa_score: '3'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/giappone
  - comp/jjmo
  - anno/2005
  - livello/JJMO
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Area of quadrilateral formed by two medians*

> In triangle $OAB$ of area $6$, let $P$ and $Q$ be the midpoints of the sides $OA$ and $OB$, respectively. Let $G$ be the intersection point of $PB$ and $QA$. Find the area of the quadrilateral $OPGQ$.

```tikz
\begin{tikzpicture}[scale=1.2]
\coordinate (O) at (0,0);
\coordinate (A) at (4,0);
\coordinate (B) at (1.2,2.6);
\coordinate (P) at (2,0);
\coordinate (Q) at (0.6,1.3);
\coordinate (G) at (1.6,0.866);
\draw (O)--(A)--(B)--cycle;
\draw (P)--(B);
\draw (Q)--(A);
\fill (G) circle (1.5pt);
\node[below left] at (O) {$O$};
\node[below right] at (A) {$A$};
\node[above] at (B) {$B$};
\node[below] at (P) {$P$};
\node[left] at (Q) {$Q$};
\node[above right] at (G) {$G$};
\end{tikzpicture}
```

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1HkqI1STeIhyrK-Nxz8XApzegeSbRZJJP/view)


<span class="qlang-split" data-lang="it"></span>


*Area quadrilaterale formata da due mediani*

> Nel triangolo $OAB$ di superficie $6$, $P$ e $Q$ siano rispettivamente i punti medi dei lati $OA$ e $OB$. $G$ sia il punto di intersezione di $PB$ e $QA$. Trova l'area del quadrilaterale $OPGQ$.

```tikz
\begin{tikzpicture}[scale=1.2]
\coordinate (O) at (0,0);
\coordinate (A) at (4,0);
\coordinate (B) at (1.2,2.6);
\coordinate (P) at (2,0);
\coordinate (Q) at (0.6,1.3);
\coordinate (G) at (1.6,0.866);
\draw (O)--(A)--(B)--cycle;
\draw (P)--(B);
\draw (Q)--(A);
\fill (G) circle (1.5pt);
\node[below left] at (O) {$O$};
\node[below right] at (A) {$A$};
\node[above] at (B) {$B$};
\node[below] at (P) {$P$};
\node[left] at (Q) {$Q$};
\node[above right] at (G) {$G$};
\end{tikzpicture}
```

[[src_jjmo3q__Q03]]
