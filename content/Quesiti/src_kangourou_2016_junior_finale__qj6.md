---
title: Kangourou 2016 Junior (finale Cervia) — Quesito J6
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2016_junior_finale__QJ6
parent: src_kangourou_2016_junior_finale
competition: Kangourou 2016 Junior (finale Cervia)
family: kangourou
year: '2016'
level: kangourou
country: Italia
modalita: individuale
quesito: J6
summary: Massimo rapporto area parallelogramma su esagono regolare
answer: 2/3
topics:
  - topic_geometria_piana
methods:
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2016
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Massimo rapporto area parallelogramma su esagono regolare*

![[src_kangourou_2016_junior_finale__probJ6.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (-0.5,0.866);
  \coordinate (F) at (0.5,0.866);
  \coordinate (B) at (-1,0);
  \coordinate (E) at (1,0);
  \coordinate (C) at (-0.5,-0.866);
  \coordinate (D) at (0.5,-0.866);
  \draw (A)--(F)--(E)--(D)--(C)--(B)--cycle;
  \draw[dashed] (A)--(C)--(D)--(F)--cycle;
  \draw[dotted] (C)--(F);
  \node[above left] at (A) {$A$};
  \node[above right] at (F) {$F$};
  \node[left] at (B) {$B$};
  \node[right] at (E) {$E$};
  \node[below left] at (C) {$C$};
  \node[below right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Un parallelogramma è inscritto in un esagono regolare (cioè i suoi vertici sono punti di qualche lato dell'esagono) e i centri (di simmetria) dei due poligoni coincidono. Quanto può valere, al massimo, il rapporto fra l'area del parallelogramma e l'area dell'esagono?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 2/3
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1BU30qu2TCa9fts5FiD2Cc0ESbI7oLEr9/view)


<span class="qlang-split" data-lang="en"></span>


*Most parallelogram area ratio over regular hexagon*

![[src_kangourou_2016_junior_finale__probJ6.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (-0.5,0.866);
  \coordinate (F) at (0.5,0.866);
  \coordinate (B) at (-1,0);
  \coordinate (E) at (1,0);
  \coordinate (C) at (-0.5,-0.866);
  \coordinate (D) at (0.5,-0.866);
  \draw (A)--(F)--(E)--(D)--(C)--(B)--cycle;
  \draw[dashed] (A)--(C)--(D)--(F)--cycle;
  \draw[dotted] (C)--(F);
  \node[above left] at (A) {$A$};
  \node[above right] at (F) {$F$};
  \node[left] at (B) {$B$};
  \node[right] at (E) {$E$};
  \node[below left] at (C) {$C$};
  \node[below right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> A parallelogram is inscribed in a regular hexagon (i.e. its vertices are points on some side of the hexagon) and the centers (of symmetry) of the two polygons coincide. What is the maximum value of the ratio between the area of the parallelogram and the area of the hexagon?

**Answer:** 2/3
[[src_kangourou_2016_junior_finale__QJ6]]
