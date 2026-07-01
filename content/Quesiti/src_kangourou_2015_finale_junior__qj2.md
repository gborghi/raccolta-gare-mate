---
title: Kangourou 2015 finale nazionale Junior — Quesito J2
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2015_finale_junior__QJ2
parent: src_kangourou_2015_finale_junior
competition: Kangourou 2015 finale nazionale Junior
family: kangourou
year: '2015'
level: kangourou
country: Italia
modalita: individuale
quesito: J2
summary: misura angolo ABC
answer: 45 gradi
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2015
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*misura angolo ABC*

![[src_kangourou_2015_finale_junior__probJ2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Two equal squares sharing a common vertex (top center).
  % Left square: A (top-left), shared vertex E (top-right of left sq / top-left of right sq), C (bottom-right of left sq), bottom-left of left sq.
  % Right square: E, D (top-right), bottom-right, B (bottom-left of right sq).
  % Labels: A, C, B as in the problem (angle ABC at vertex B).
  \draw (-1.879, 0.684) -- (0,0) -- (-0.684, -1.879) -- (-2.563, -1.195) -- cycle;
  \draw (0,0) -- (1.879, 0.684) -- (2.563, -1.195) -- (0.684, -1.879) -- cycle;
  \draw[dashed] (-1.879, 0.684) -- (0.684, -1.879);
  \draw[dashed] (-0.684, -1.879) -- (0.684, -1.879);
  \draw (0.529, -1.724) arc (135:180:0.22);
  \node[above left] at (-1.879, 0.684) {A};
  \node[below] at (-0.684, -2.0) {C};
  \node[below] at (0.684, -2.0) {B};
\end{tikzpicture}
\end{document}
```

> La figura mostra due quadrati uguali che hanno in comune esattamente un vertice $A$. È possibile precisare la misura dell'angolo $ABC$? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 45 gradi
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ylw9Axt3o-px4Hc7cLKCrBJqpxAwiuVv/view)


<span class="qlang-split" data-lang="en"></span>


The measurement shall be carried out in accordance with the methodology set out in Annex II.

![[src_kangourou_2015_finale_junior__probJ2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Two equal squares sharing a common vertex (top center).
  % Left square: A (top-left), shared vertex E (top-right of left sq / top-left of right sq), C (bottom-right of left sq), bottom-left of left sq.
  % Right square: E, D (top-right), bottom-right, B (bottom-left of right sq).
  % Labels: A, C, B as in the problem (angle ABC at vertex B).
  \draw (-1.879, 0.684) -- (0,0) -- (-0.684, -1.879) -- (-2.563, -1.195) -- cycle;
  \draw (0,0) -- (1.879, 0.684) -- (2.563, -1.195) -- (0.684, -1.879) -- cycle;
  \draw[dashed] (-1.879, 0.684) -- (0.684, -1.879);
  \draw[dashed] (-0.684, -1.879) -- (0.684, -1.879);
  \draw (0.529, -1.724) arc (135:180:0.22);
  \node[above left] at (-1.879, 0.684) {A};
  \node[below] at (-0.684, -2.0) {C};
  \node[below] at (0.684, -2.0) {B};
\end{tikzpicture}
\end{document}
```

> The figure shows two equal squares that have exactly one vertex $A$ in common. Is it possible to specify the angle $ABC$? (see figure)

**Answer:** 45 gradi
[[src_kangourou_2015_finale_junior__QJ2]]
