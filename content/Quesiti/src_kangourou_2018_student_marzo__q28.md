---
title: Kangourou 2018 Gara di Marzo Student — Quesito 28
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2018_student_marzo__Q28
parent: src_kangourou_2018_student_marzo
competition: Kangourou 2018 Gara di Marzo Student
family: kangourou
year: '2018'
level: kangourou
country: Italia
modalita: individuale
quesito: '28'
summary: Rapporto aree triangolo GIF e trapezio IHDE esagono
answer: A
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2018
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Rapporto aree triangolo GIF e trapezio IHDE esagono*

![[src_kangourou_2018_student_marzo__prob28.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
\coordinate (A) at (-0.5, 0.866025);
\coordinate (B) at (0.5, 0.866025);
\coordinate (C) at (1, 0);
\coordinate (D) at (0.5, -0.866025);
\coordinate (E) at (-0.5, -0.866025);
\coordinate (F) at (-1, 0);
\coordinate (G) at (0, 0.866025);
\coordinate (H) at (0.25, 0);
\coordinate (I) at (-0.25, 0);
\fill[gray!40] (G) -- (I) -- (F) -- cycle;
\fill[gray!40] (I) -- (H) -- (D) -- (E) -- cycle;
\draw (A) -- (B) -- (C) -- (D) -- (E) -- (F) -- cycle;
\draw (G) -- (D);
\draw (G) -- (E);
\draw (F) -- (C);
\node[above left, font=\small] at (A) {$A$};
\node[above, font=\small] at (G) {$G$};
\node[above right, font=\small] at (B) {$B$};
\node[right, font=\small] at (C) {$C$};
\node[below right, font=\small] at (D) {$D$};
\node[below left, font=\small] at (E) {$E$};
\node[left, font=\small] at (F) {$F$};
\node[below right, font=\small] at (H) {$H$};
\node[below left, font=\small] at (I) {$I$};
\end{tikzpicture}
\end{document}
```

> 28. ABCDEF è un esagono regolare. G è il punto medio di AB. H ed I sono i punti di intersezione rispettivamente dei segmenti GD e GE con FC. Qual è il rapporto tra l’area del triangolo GIF e quella del trapezio IHDE? A) 1/2 B) 1/3 C) 1/4 D) 1/√3 E) √3/4

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/1e6WZ2apl4gi-5bHd-yJtZquuH76eyJJZ/view)


<span class="qlang-split" data-lang="en"></span>


*Report areas of GIF triangle and IHDE hexagon trapezoid *

![[src_kangourou_2018_student_marzo__prob28.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
\coordinate (A) at (-0.5, 0.866025);
\coordinate (B) at (0.5, 0.866025);
\coordinate (C) at (1, 0);
\coordinate (D) at (0.5, -0.866025);
\coordinate (E) at (-0.5, -0.866025);
\coordinate (F) at (-1, 0);
\coordinate (G) at (0, 0.866025);
\coordinate (H) at (0.25, 0);
\coordinate (I) at (-0.25, 0);
\fill[gray!40] (G) -- (I) -- (F) -- cycle;
\fill[gray!40] (I) -- (H) -- (D) -- (E) -- cycle;
\draw (A) -- (B) -- (C) -- (D) -- (E) -- (F) -- cycle;
\draw (G) -- (D);
\draw (G) -- (E);
\draw (F) -- (C);
\node[above left, font=\small] at (A) {$A$};
\node[above, font=\small] at (G) {$G$};
\node[above right, font=\small] at (B) {$B$};
\node[right, font=\small] at (C) {$C$};
\node[below right, font=\small] at (D) {$D$};
\node[below left, font=\small] at (E) {$E$};
\node[left, font=\small] at (F) {$F$};
\node[below right, font=\small] at (H) {$H$};
\node[below left, font=\small] at (I) {$I$};
\end{tikzpicture}
\end{document}
```

> 28. ABCDEF is a regular hexagon. G is the middle point of AB. H and I are the intersection points of the GD and GE segments with FC respectively. What is the relationship between the area of the GIF triangle and that of the IHDE trapezoid? A) 1/2 B) 1/3 C) 1/4 D) 1/√3 E) √3/4

**Answer:** A
[[src_kangourou_2018_student_marzo__Q28]]
