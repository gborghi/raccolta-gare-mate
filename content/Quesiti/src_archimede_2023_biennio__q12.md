---
title: Giochi di Archimede 2023 - Gara Biennio — Quesito 12
tipo: quesito
lang: it
quesito_id: quesito_src_archimede_2023_biennio__Q12
parent: src_archimede_2023_biennio
competition: Giochi di Archimede 2023 - Gara Biennio
family: archimede
year: '2023'
level: biennio
country: Italia
modalita: individuale
quesito: '12'
summary: Punto su sponda di biliardo per imbucare con rimbalzo
answer: B
topics:
  - topic_geometria_piana
methods:
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2023
  - livello/biennio
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Punto su sponda di biliardo per imbucare con rimbalzo*

![[src_archimede_2023_biennio__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.018]
  \coordinate (A) at (0,0);
  \coordinate (B) at (280,0);
  \coordinate (C) at (280,140);
  \coordinate (D) at (0,140);
  \coordinate (P) at (228,70);
  \coordinate (X) at (124,0);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw[dashed] (P) -- (X) -- (D);
  \fill (P) circle (3);
  \node[above right] at (P) {$P$};
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Francesca gioca su un biliardo di dimensioni 280 × 140 cm.
> La palla si trova nel punto P, equidistante ripetto alle
> sponde AB e CD, a distanza 52 cm dalla sponda BC. Francesca vuole mandare la palla in buca nell’angolo D, con una
> traiettoria come quella tracciata in figura (la palla rimbalza
> formando angoli uguali con la sponda AB). A quanti cm da
> B occorre colpire la sponda AB per realizzare la traiettoria?
> A
> B
> C
> D
> P
>
> - **(A)** 120
> - **(B)** 128
> - **(C)** 124
> - **(D)** 130
> - **(E)** 126

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1cdaCakhnUhZtz4LlgOmVvJJRpalObqKb/view)


<span class="qlang-split" data-lang="en"></span>


*Billboard edge point for bouncing *

![[src_archimede_2023_biennio__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.018]
  \coordinate (A) at (0,0);
  \coordinate (B) at (280,0);
  \coordinate (C) at (280,140);
  \coordinate (D) at (0,140);
  \coordinate (P) at (228,70);
  \coordinate (X) at (124,0);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw[dashed] (P) -- (X) -- (D);
  \fill (P) circle (3);
  \node[above right] at (P) {$P$};
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Francesca plays on a billiards player measuring 280 × 140 cm. The ball is located at the point P, equidistant repeated at the edges AB and CD, 52 cm from the edge BC. Francesca wants to send the ball into the hole in the D-angle, with a trajectory similar to that traced in the figure (the ball bounces forming equal angles with the shore AB). How many centimeters from B do you need to hit the AB shore to make the trajectory? A B C D P
>
> - **(A)** 120
> - **(B)** 128
> - **(C)** 124
> - **(D)** 130
> - **(E)** 126

**Answer:** B
[[src_archimede_2023_biennio__Q12]]
