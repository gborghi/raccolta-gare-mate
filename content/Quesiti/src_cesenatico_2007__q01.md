---
title: XXIII Olimpiade Italiana Cesenatico 2007 — Quesito 1
tipo: quesito
lang: it
quesito_id: quesito_src_cesenatico_2007__Q01
parent: src_cesenatico_2007
competition: XXIII Olimpiade Italiana Cesenatico 2007
family: archimede
year: '2007'
level: nazionale
country: Italia
modalita: individuale
quesito: '1'
summary: punti con somma distanze da rette/vertici minima
answer: (a) interno/bordo esagono; (b) il centro
topics:
  - topic_geometria_piana
methods:
  - method_disuguaglianze
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2007
  - livello/nazionale
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*punti con somma distanze da rette/vertici minima*

![[src_cesenatico_2007__prob1a.png]]
![[src_cesenatico_2007__prob1b.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (-1,-1.732);
  \coordinate (B) at (1,-1.732);
  \coordinate (C) at (2,0);
  \coordinate (D) at (1,1.732);
  \coordinate (E) at (-1,1.732);
  \coordinate (F) at (-2,0);
  \coordinate (P) at (0,0);
  \draw (A)--(B)--(C)--(D)--(E)--(F)--cycle;
  \draw (A)--(D); \draw (B)--(E); \draw (C)--(F);
  \fill (P) circle (1.5pt);
  \node[below] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[left] at (F) {$F$};
  \node[below right] at (P) {$P$};
\end{tikzpicture}
\end{document}
```

> Sia dato nel piano un esagono regolare. Per ogni punto P del piano, chiamiamo l(P) la somma delle sei
> distanze tra P e le rette su cui giacciono i lati dell’esagono, e v(P) la somma delle sei distanze di P dai
> vertici dell’esagono.
> (a) Per quali punti P del piano l(P) è minima?
> (b) Per quali punti P del piano v(P) è minima?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** (a) interno/bordo esagono; (b) il centro
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1f34U527qzfJNiSRUXGF8n4qcd2jD3ko5/view)


<span class="qlang-split" data-lang="en"></span>


*points with sum of minimum vertical/straight distances*

![[src_cesenatico_2007__prob1a.png]]
![[src_cesenatico_2007__prob1b.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (-1,-1.732);
  \coordinate (B) at (1,-1.732);
  \coordinate (C) at (2,0);
  \coordinate (D) at (1,1.732);
  \coordinate (E) at (-1,1.732);
  \coordinate (F) at (-2,0);
  \coordinate (P) at (0,0);
  \draw (A)--(B)--(C)--(D)--(E)--(F)--cycle;
  \draw (A)--(D); \draw (B)--(E); \draw (C)--(F);
  \fill (P) circle (1.5pt);
  \node[below] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[left] at (F) {$F$};
  \node[below right] at (P) {$P$};
\end{tikzpicture}
\end{document}
```

> A regular hexagon is given in the plan. For each point P of the plane, we call P the sum of the six distances between P and the lines on which the sides of the hexagon lie, and v(P) the sum of the six distances of P from the vertices of the hexagon. (a) For which P points of the plan is the minimum P? (b) For which points P of the plan v(P) is the minimum?

**Answer:** (a) interno/bordo esagono; (b) il centro
[[src_cesenatico_2007__Q01]]
