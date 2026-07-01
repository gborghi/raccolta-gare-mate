---
title: Giochi di Archimede 2013 - Triennio — Quesito 12
tipo: quesito
lang: it
quesito_id: quesito_src_archimede_2013_triennio__Q12
parent: src_archimede_2013_triennio
competition: Giochi di Archimede 2013 - Triennio
family: archimede
year: '2013'
level: triennio
country: Italia
modalita: individuale
quesito: '12'
summary: Perimetro triangolo da teorema della bisettrice
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2013
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Perimetro triangolo da teorema della bisettrice*

![[src_archimede_2013_triennio__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (B) at (0,0);
  \coordinate (C) at (6,0);
  \coordinate (A) at (5,2.8);
  \coordinate (D) at (3.7,0);
  \draw (A)--(B)--(C)--cycle;
  \draw (A)--(D);
  \node[above] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[below] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Dato un triangolo ABC, si tracci la bisettrice dal vertice A, che
> incontra il lato BC nel punto D. Se CD + CA = 12 m, e CD =
> 1
> 3BC, quanto misura il perimetro del triangolo?
>
> - **(A)** meno di 32 m
> - **(B)** 32 m
> - **(C)** 36 m
> - **(D)** più di 36 m
> - **(E)** non si può determinare dai dati forniti

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/14DK4Mka2JsMKM16koGHIwEE8RcJ4B8Rd/view)


<span class="qlang-split" data-lang="en"></span>


*Triangle perimeter by the theorem of the biset *

![[src_archimede_2013_triennio__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (B) at (0,0);
  \coordinate (C) at (6,0);
  \coordinate (A) at (5,2.8);
  \coordinate (D) at (3.7,0);
  \draw (A)--(B)--(C)--cycle;
  \draw (A)--(D);
  \node[above] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[below] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Given an ABC triangle, the bisector is plotted from the vertex A, which meets the side BC at point D. If CD + CA = 12 m, and CD = 1 3BC, what is the circumference of the triangle?
>
> - **(A)** less than 32 m
> - **(B)** 32 m
> - **(C)** 36 m
> - **(D)** of a width of not more than 36 m
> - **(E)** cannot be determined from the data provided

**Answer:** C
[[src_archimede_2013_triennio__Q12]]
