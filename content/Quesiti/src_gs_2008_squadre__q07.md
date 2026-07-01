---
title: Coppa Fermat 2008 - Gara a squadre — Quesito 7
tipo: quesito
lang: it
quesito_id: quesito_src_gs_2008_squadre__Q07
parent: src_gs_2008_squadre
competition: Coppa Fermat 2008 - Gara a squadre
family: archimede
year: '2008'
level: squadre
country: Italia
modalita: squadre
quesito: '7'
summary: Punto del trapezio piu lontano dall incontro diagonali
answer: '89.04'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2008
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---
<div class="qlang-switch" data-default="it"></div>


*Punto del trapezio piu lontano dall incontro diagonali*

![[src_gs_2008_squadre__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (6,2.8);
  \coordinate (D) at (0,3.2);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (C);
  \draw (B) -- (D);
  \node[below] at (3,0) {$a$};
  \node[left] at (D) {$b_2$};
  \node[right] at (C) {$b_1$};
\end{tikzpicture}
\end{document}
```

> A Tadfield, il *Divine Quad* è una piazza a forma di trapezio rettangolo con i lati paralleli di lunghezza $66\,\text{m}$ e $84\,\text{m}$ e il lato perpendicolare a questi di lunghezza $135\,\text{m}$. Sul pavimento della piazza sono tracciate le diagonali del trapezio. I quattro segmenti dal punto di incontro delle diagonali verso ciascuno degli angoli della piazza sono chiamati *percorsi dell'estasi*.
> 
> Qual è la lunghezza in centimetri del percorso dell'estasi più lungo?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 89.04
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/16XB_pRvNM9TV-SqGuZR9r6CYMjNuQEb6/view)


<span class="qlang-split" data-lang="en"></span>


*Point of the trapezoid farthest from the diagonal meeting*

![[src_gs_2008_squadre__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (6,2.8);
  \coordinate (D) at (0,3.2);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (C);
  \draw (B) -- (D);
  \node[below] at (3,0) {$a$};
  \node[left] at (D) {$b_2$};
  \node[right] at (C) {$b_1$};
\end{tikzpicture}
\end{document}
```

> In Tadfield, the *Divine Quad* is a square in the shape of a rectangular trapezoid with the parallel sides of length $66\,\text{m}$ and $84\,\text{m}$ and the side perpendicular to these of length $135\,\text{m}$. On the floor of the square are drawn the diagonal of the trapezoid. The four segments from the meeting point of the diagonals towards each corner of the square are called *paths of ecstasy*.
> 
> What is the length in centimeters of the path of the longest ecstasy?

**Answer:** 89.04
[[src_gs_2008_squadre__Q07]]
