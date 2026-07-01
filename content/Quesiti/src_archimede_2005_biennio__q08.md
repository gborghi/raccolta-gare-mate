---
title: Giochi di Archimede 2005 - Gara Biennio — Quesito 8
tipo: quesito
lang: it
quesito_id: quesito_src_archimede_2005_biennio__Q08
parent: src_archimede_2005_biennio
competition: Giochi di Archimede 2005 - Gara Biennio
family: archimede
year: '2005'
level: 'biennio, triennio'
country: Italia
modalita: individuale
quesito: '8'
summary: Area di un triangolo simile dentro un rettangolo
answer: A
topics:
  - topic_geometria_piana
  - topic_geometria_solida
skills:
  - skill_ragionamento_geometrico
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2005
  - livello/biennio
  - livello/triennio
  - topic/geometria_piana
  - topic/geometria_solida
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Area di un triangolo simile dentro un rettangolo*

![[src_archimede_2005_biennio__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (0,5);
  \coordinate (Bp) at (2.4,0);
  \coordinate (Cp) at (0,3);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (Bp) -- (Cp);
  \node[below left] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[left] at (C) {$C$};
  \node[below] at (Bp) {$B'$};
  \node[left] at (Cp) {$C'$};
\end{tikzpicture}
\end{document}
```

> Il triangolo ABC è rettangolo ed i cateti AB e AC misurano 3 m e 4 m rispettivamente. Siano B′ e C′ punti appartenenti ai lati AB e AC rispettivamente, tali che la retta
> contenente il segmento B′C′ sia parallela a quella contenente il segmento BC e distante 1 m da essa (vedi figura).
> Calcolare l’area del triangolo AB′C′.
>
> - **(A)** 49 24 m2,
> - **(B)** 2 m2,
> - **(C)** 65 24 m2,
> - **(D)** 7 2 m2,
> - **(E)** nessuna delle precedenti. A B’ B C’ C

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1dQPJ3pvuqmyEE5g3T4-glGozo_1X_H8j/view)
**Anche in triennio:** [apri PDF p.1](https://drive.google.com/file/d/1yq3dqYEwi11TSWDPLZ76IBOx7aI-xcMM/view)


<span class="qlang-split" data-lang="en"></span>


*Area of a similar triangle within a rectangle*

![[src_archimede_2005_biennio__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (0,5);
  \coordinate (Bp) at (2.4,0);
  \coordinate (Cp) at (0,3);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (Bp) -- (Cp);
  \node[below left] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[left] at (C) {$C$};
  \node[below] at (Bp) {$B'$};
  \node[left] at (Cp) {$C'$};
\end{tikzpicture}
\end{document}
```

> The triangle ABC is rectangular and the cathetes AB and AC measure 3 m and 4 m respectively. They are B′ and C′ points belonging to the sides AB and AC respectively, such that the straight containing the segment B′C′ is parallel to that containing the segment BC and 1 m away from it (see figure). Calculate the area of the triangle AB′C′.
>
> - **(A)** 49 24 m2,
> - **(B)** 2 m2,
> - **(C)** 65 24 m2,
> - **(D)** 7 2 m2,
> - **(E)** None of the previous ones. A B’ B C’ C

**Answer:** A
[[src_archimede_2005_biennio__Q08]]
