---
title: Kangourou Squadre 2022 Kangourou Finale 1 — Quesito 11
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2022_kangourou_squadre__Q11
parent: src_kangourou_2022_kangourou_squadre
competition: Kangourou Squadre 2022 Kangourou Finale 1
family: kangourou
year: '2022'
level: squadre
country: Italia
modalita: squadre
quesito: '11'
summary: 'Angolo ACB con punti M,N e angolo MCN 40°'
answer: '0100'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---
<div class="qlang-switch" data-default="it"></div>


*Angolo ACB con punti M,N e angolo MCN 40°*

![[src_kangourou_2022_kangourou_squadre__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.4]
  \coordinate (A) at (0,0);
  \coordinate (B) at (5,0);
  \coordinate (C) at (4,3);
  \pgfmathsetmacro{\AC}{sqrt((4-0)^2+(3-0)^2)}
  \pgfmathsetmacro{\BC}{sqrt((4-5)^2+(3-0)^2)}
  \coordinate (N) at (\AC,0);
  \pgfmathsetmacro{\Mx}{5-\BC}
  \coordinate (M) at (\Mx,0);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw (C) -- (M);
  \draw (C) -- (N);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[below] at (M) {$M$};
  \node[below] at (N) {$N$};
\end{tikzpicture}
\end{document}
```

> L’angolo 
> Nel triangolo ABC in figura il lato AB è più lungo di ciascuno 
> degli altri due. M e N sono due punti sul lato AB tali che AN sia 
> lungo quanto AC e BM sia lungo quanto BC. L’angolo 
> 	 
>  misura 40 gradi. Quanti gradi misura l’angolo 
> ?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0100
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<span class="qlang-split" data-lang="en"></span>


*ACB angle with M,N points and MCN angle 40°*

![[src_kangourou_2022_kangourou_squadre__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.4]
  \coordinate (A) at (0,0);
  \coordinate (B) at (5,0);
  \coordinate (C) at (4,3);
  \pgfmathsetmacro{\AC}{sqrt((4-0)^2+(3-0)^2)}
  \pgfmathsetmacro{\BC}{sqrt((4-5)^2+(3-0)^2)}
  \coordinate (N) at (\AC,0);
  \pgfmathsetmacro{\Mx}{5-\BC}
  \coordinate (M) at (\Mx,0);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw (C) -- (M);
  \draw (C) -- (N);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[below] at (M) {$M$};
  \node[below] at (N) {$N$};
\end{tikzpicture}
\end{document}
```

> The angle In the ABC triangle in the figure the side AB is longer than either of the other two. M and N are two points on the AB side such that AN is as long as AC and BM is as long as BC. The angle is 40 degrees. How many degrees is the angle ?

**Answer:** 0100
[[src_kangourou_2022_kangourou_squadre__Q11]]
