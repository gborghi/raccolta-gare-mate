---
title: Kangourou Squadre 2023 Kangourou Finale 2 — Quesito 14
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2023_kangourou_squadre_f2__Q14
parent: src_kangourou_2023_kangourou_squadre_f2
competition: Kangourou Squadre 2023 Kangourou Finale 2
family: kangourou
year: '2023'
level: squadre
country: Italia
modalita: squadre
quesito: '14'
summary: Area rettangolo ABCD da area triangolo FMN
answer: '0264'
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2023
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---
<div class="qlang-switch" data-default="it"></div>


*Area rettangolo ABCD da area triangolo FMN*

![[src_kangourou_2023_kangourou_squadre_f2__prob14.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,2);
  \coordinate (B) at (0,0);
  \coordinate (C) at (3,0);
  \coordinate (D) at (3,2);
  \coordinate (F) at (0,1);
  \coordinate (N) at (1.5,0);
  \coordinate (M) at (0,-2);
  \draw (A) -- (D) -- (C) -- (B) -- cycle;
  \draw (D) -- (M);
  \draw (F) -- (N);
  \node[above left] at (A) {$A$};
  \node[above right] at (D) {$D$};
  \node[left] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[left] at (F) {$F$};
  \node[below] at (N) {$N$};
  \node[left] at (M) {$M$};
\end{tikzpicture}
\end{document}
```

> L’area del rettangolo 
> In figura, ABCD è un rettangolo, F è il punto medio del lato AB, N è il 
> punto medio del lato BC e M è il punto comune alle rette che contengono 
> una il lato AB, l’altra il segmento DN. L’area del triangolo FMN vale 99. 
> Quanto vale l’area del rettangolo ABCD?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0264
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1CmLSHw389QtxIh-Wjity4OpGnT2Nasn8/view)


<span class="qlang-split" data-lang="en"></span>


*Rectangular area ABCD from area triangle FMN*

![[src_kangourou_2023_kangourou_squadre_f2__prob14.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,2);
  \coordinate (B) at (0,0);
  \coordinate (C) at (3,0);
  \coordinate (D) at (3,2);
  \coordinate (F) at (0,1);
  \coordinate (N) at (1.5,0);
  \coordinate (M) at (0,-2);
  \draw (A) -- (D) -- (C) -- (B) -- cycle;
  \draw (D) -- (M);
  \draw (F) -- (N);
  \node[above left] at (A) {$A$};
  \node[above right] at (D) {$D$};
  \node[left] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[left] at (F) {$F$};
  \node[below] at (N) {$N$};
  \node[left] at (M) {$M$};
\end{tikzpicture}
\end{document}
```

> The area of the rectangle In the figure, ABCD is a rectangle, F is the middle point of the side AB, N is the middle point of the side BC and M is the common point to the straight lines containing one side AB, the other the DN segment. The area of the triangle FMN is 99. What is the area of the rectangle ABCD?

**Answer:** 0264
[[src_kangourou_2023_kangourou_squadre_f2__Q14]]
