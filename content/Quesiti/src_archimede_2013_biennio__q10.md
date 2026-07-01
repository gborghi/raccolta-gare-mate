---
title: Giochi di Archimede 2013 - Biennio — Quesito 10
tipo: quesito
lang: it
quesito_id: quesito_src_archimede_2013_biennio__Q10
parent: src_archimede_2013_biennio
competition: Giochi di Archimede 2013 - Biennio
family: archimede
year: '2013'
level: 'biennio, triennio'
country: Italia
modalita: individuale
quesito: '10'
summary: Rapporto area triangolo CDE e trapezio
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
  - livello/biennio
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Rapporto area triangolo CDE e trapezio*

![[src_archimede_2013_biennio__prob10.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (D) at (2,2.6);
  \coordinate (C) at (4,2.6);
  \coordinate (E) at (4,1.3);
  \fill[gray!50] (C) -- (D) -- (E) -- cycle;
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (B) -- (D);
  \draw (D) -- (E);
  \fill (E) circle (1.5pt);
  \node[above left] at (D) {$D$};
  \node[above right] at (C) {$C$};
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[below right] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> In un trapezio ABCD la base maggiore AB è tripla della base
> minore CD. Indicato con E il punto medio della diagonale
> BD, qual è il rapporto fra l’area del triangolo CDE e l’area
> del trapezio?
>
> - **(A)** 1/3
> - **(B)** 1/6
> - **(C)** 1/8
> - **(D)** 1/12
> - **(E)** non può essere determinata dai dati forniti

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1LF_ulQktHd0ceVHNtwxam86iRnhlYI-E/view)
**Anche in triennio:** [apri PDF p.1](https://drive.google.com/file/d/14DK4Mka2JsMKM16koGHIwEE8RcJ4B8Rd/view)


<span class="qlang-split" data-lang="en"></span>


*Report area CDE triangle and trapezoid *

![[src_archimede_2013_biennio__prob10.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (D) at (2,2.6);
  \coordinate (C) at (4,2.6);
  \coordinate (E) at (4,1.3);
  \fill[gray!50] (C) -- (D) -- (E) -- cycle;
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (B) -- (D);
  \draw (D) -- (E);
  \fill (E) circle (1.5pt);
  \node[above left] at (D) {$D$};
  \node[above right] at (C) {$C$};
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[below right] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> In an ABCD trapezoid the major base AB is triple the minor base CD. Indicated by E the middle point of the BD diagonal, what is the ratio between the area of the CDE triangle and the area of the trapezoid?
>
> - **(A)** 1/3
> - **(B)** 1/6
> - **(C)** 1/8
> - **(D)** 1/12
> - **(E)** cannot be determined by the data provided

**Answer:** C
[[src_archimede_2013_biennio__Q10]]
