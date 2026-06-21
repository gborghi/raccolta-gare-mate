---
title: Coppa/Gara di febbraio 2005 — Quesito 8
tipo: quesito
quesito_id: quesito_src_febbraio_2005__Q08
parent: src_febbraio_2005
competition: Coppa/Gara di febbraio 2005
family: archimede
year: '2005'
level: ''
country: Italia
modalita: individuale
quesito: '8'
summary: massimo volume di tali parti del cubo
topics:
  - topic_geometria_solida
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2005
  - topic/geometria_solida
  - gara/individuale
---

*massimo volume di tali parti del cubo*

![[src_febbraio_2005__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (Bt) at (3,3);
  \coordinate (E) at (0,3);
  \coordinate (F) at (1.2,1.0);
  \coordinate (G) at (4.2,1.0);
  \coordinate (D) at (4.2,4.0);
  \coordinate (C) at (1.2,4.0);
  \draw (A)--(B)--(Bt)--(E)--cycle;
  \draw (E)--(Bt)--(D)--(C)--cycle;
  \draw (B)--(G)--(D);
  \draw[dashed] (A)--(F);
  \draw[dashed] (F)--(G);
  \draw[dashed] (F)--(C);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above left] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[left] at (E) {$E$};
  \node[right] at (G) {$F$};
\end{tikzpicture}
\end{document}
```

> Dato un cubo di lato unitario (vedi figura), consideriamo il piano cui appartengono gli spigoli $\overline{AB}$ e $\overline{CD}$ e quello cui appartengono gli spigoli $\overline{AE}$ e $\overline{FD}$. Questi due piani tagliano il cubo in quattro parti. Qual è il massimo tra i volumi di tali parti?
> 
> **(A)** $\dfrac{1}{4}$ **(B)** $\dfrac{1}{3}$ **(C)** $\dfrac{\sqrt{2}}{4}$ **(D)** $\dfrac{3}{8}$ **(E)** $\dfrac{1}{2}$.
> 
> (vedi figura)

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Area:** [[Geometria]]
**Fonte:** apri PDF p.3
