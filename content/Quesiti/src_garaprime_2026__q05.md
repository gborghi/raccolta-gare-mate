---
title: XI Gara Nazionale Classi Prime 2026 — Quesito 5
tipo: quesito
lang: it
quesito_id: quesito_src_garaprime_2026__Q05
parent: src_garaprime_2026
competition: XI Gara Nazionale Classi Prime 2026
family: archimede
year: '2026'
level: Classi Prime
country: Italia
modalita: individuale
quesito: '5'
summary: Modi di suddividere un rettangolo in 4 triangoli di area 1
answer: B
topics:
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2026
  - topic/geometria_piana
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Modi di suddividere un rettangolo in 4 triangoli di area 1*

![[src_garaprime_2026__prob5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (4,0);
  \coordinate (D) at (4,2.6);
  \coordinate (E) at (2,2.6);
  \coordinate (F) at (0,2.6);
  \draw (A)--(C)--(D)--(F)--cycle;
  \draw (A)--(E)--(C);
  \draw (B)--(E);
  \foreach \p in {A,B,C,D,E,F} \fill (\p) circle (1.6pt);
  \node[below left] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[above left] at (F) {$F$};
\end{tikzpicture}
\end{document}
```

> Dato il rettangolo ACDF, di area 4, siano B ed E rispettivamente i punti
> medi dei lati AC e DF. Si vuole suddividere il rettangolo in 4 triangoli di
> area 1, ciascuno dei quali abbia come vertici 3 dei punti A, B, C, D, E, F
> (come ad esempio i triangoli AEF, ABE, BCE, CDE mostrati nella figura
> qui accanto). In quanti modi si può fare?
>
> - **(A)** 5
> - **(B)** 6
> - **(C)** 4
> - **(D)** 8
> - **(E)** 2

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1F8eBxLs4bDWlyZJGhjIxQLaCXc18EKrk/view)


<span class="qlang-split" data-lang="en"></span>


*Mode of dividing a rectangle into 4 triangles of area 1*

![[src_garaprime_2026__prob5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (4,0);
  \coordinate (D) at (4,2.6);
  \coordinate (E) at (2,2.6);
  \coordinate (F) at (0,2.6);
  \draw (A)--(C)--(D)--(F)--cycle;
  \draw (A)--(E)--(C);
  \draw (B)--(E);
  \foreach \p in {A,B,C,D,E,F} \fill (\p) circle (1.6pt);
  \node[below left] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[above left] at (F) {$F$};
\end{tikzpicture}
\end{document}
```

> Given the ACDF rectangle, area 4, be B and E respectively the midpoints of the AC and DF sides. The rectangle is to be divided into 4 triangles of area 1, each of which has 3 vertices of points A, B, C, D, E, F (such as the AEF, ABE, ECB, CDE triangles shown in the figure below). How many ways can this be done?
>
> - **(A)** 5
> - **(B)** 6
> - **(C)** 4
> - **(D)** 8
> - **(E)** 2

**Answer:** B
[[src_garaprime_2026__Q05]]
