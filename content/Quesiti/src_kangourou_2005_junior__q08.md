---
title: Kangourou 2005 - Junior (marzo) — Quesito 8
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2005_junior__Q08
parent: src_kangourou_2005_junior
competition: Kangourou 2005 - Junior (marzo)
family: kangourou
year: '2005'
level: kangourou
country: Italia
modalita: individuale
quesito: '8'
summary: Area regione ombreggiata con tre semicirconferenze
answer: D
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2005
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Area regione ombreggiata con tre semicirconferenze*

![[src_kangourou_2005_junior__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Problem 8: Three semicircles radius 2
  % Large upper semicircle: center (0,0), radius 2
  % Two lower semicircles: centers E=(-2,0) and F=(2,0), radius 2
  \begin{scope}
    \clip (-2,0) arc[start angle=180, end angle=0, radius=2] -- cycle;
    \fill[gray!40] (-4,0) rectangle (4,3);
    \fill[white] (-4,0) arc[start angle=180, end angle=0, radius=2] -- cycle;
    \fill[white] (0,0) arc[start angle=180, end angle=0, radius=2] -- cycle;
  \end{scope}
  \draw (-2,0) arc[start angle=180, end angle=0, radius=2];
  \draw (-4,0) arc[start angle=180, end angle=0, radius=2];
  \draw (0,0) arc[start angle=180, end angle=0, radius=2];
  \draw (-4,0) -- (4,0);
  \node[above left] at (-1,1.73) {A};
  \node[above right] at (1,1.73) {B};
  \node[below] at (-2,0) {E};
  \node[below] at (2,0) {F};
\end{tikzpicture}
\end{document}
```

> In figura sono disegnate 3 semicirconferenze
> aventi raggio 2 cm; i centri E ed F delle due semicirconferenze inferiori, le quali sono tangenti,
> sono le proiezioni ortogonali rispettivamente dei
> punti A e B di intersezione della semicirconferenza superiore con le altre due. Quanto misura
> in cm2 l'area della regione ombreggiata?
> A) 2π
> B) 7    C) 2π+1
> D) 8       E) 2π+2

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1e8iPo9MMdPbC2VKpYSfyey4g0a-pI6TH/view)


<span class="qlang-split" data-lang="en"></span>


*Area shaded region with three semicircles*

![[src_kangourou_2005_junior__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Problem 8: Three semicircles radius 2
  % Large upper semicircle: center (0,0), radius 2
  % Two lower semicircles: centers E=(-2,0) and F=(2,0), radius 2
  \begin{scope}
    \clip (-2,0) arc[start angle=180, end angle=0, radius=2] -- cycle;
    \fill[gray!40] (-4,0) rectangle (4,3);
    \fill[white] (-4,0) arc[start angle=180, end angle=0, radius=2] -- cycle;
    \fill[white] (0,0) arc[start angle=180, end angle=0, radius=2] -- cycle;
  \end{scope}
  \draw (-2,0) arc[start angle=180, end angle=0, radius=2];
  \draw (-4,0) arc[start angle=180, end angle=0, radius=2];
  \draw (0,0) arc[start angle=180, end angle=0, radius=2];
  \draw (-4,0) -- (4,0);
  \node[above left] at (-1,1.73) {A};
  \node[above right] at (1,1.73) {B};
  \node[below] at (-2,0) {E};
  \node[below] at (2,0) {F};
\end{tikzpicture}
\end{document}
```

> The figure shows three semicirculars with a radius of 2 cm; the centers E and F of the two lower semicirculars, which are tangent, are the orthogonal projections of the points A and B respectively at the intersection of the upper semicircular with the other two. What is the area of the shaded region in cm2? A) 2π B) 7    C) 2π+1 D) 8       E) 2π+2

**Answer:** D
[[src_kangourou_2005_junior__Q08]]
