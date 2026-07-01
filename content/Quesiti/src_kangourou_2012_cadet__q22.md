---
title: Kangourou 2012 Cadet (gara marzo) — Quesito 22
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2012_cadet__Q22
parent: src_kangourou_2012_cadet
competition: Kangourou 2012 Cadet (gara marzo)
family: kangourou
year: '2012'
level: kangourou
country: Italia
modalita: individuale
quesito: '22'
summary: Rapporto tra area triangolo CMN e quadrato ABCD
answer: D
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
  - anno/2012
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Rapporto tra area triangolo CMN e quadrato ABCD*

![[src_kangourou_2012_cadet__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \draw (0,0) -- (1,0) -- (1,1) -- (0,1) -- cycle;
  \draw (0,0) -- (1,1);
  \draw (0,0.5) -- (1,1);
  \draw (0,0.5) -- (0.25,0.25);
  \fill[gray!40] (0,0.5) -- (0.25,0.25) -- (1,1) -- cycle;
  \draw (0,0.5) -- (0.25,0.25) -- (1,1) -- cycle;
  \node[above left] at (0,1) {$D$};
  \node[above right] at (1,1) {$C$};
  \node[left] at (0,0.5) {$M$};
  \node[below right] at (0.25,0.25) {$N$};
  \node[below left] at (0,0) {$A$};
  \node[below right] at (1,0) {$B$};
\end{tikzpicture}
\end{document}
```

> Trova il rapporto tra l’area del triangolo
> CMN (evidenziato in grigio in figura) e quella del
> quadrato ABCD, sapendo che M è il punto medio
> di AD e MN è perpendicolare ad AC.
> A) 1:6
> B) 1:5
> C) 7:36
> D) 3:16
> E) 7:40

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1YL4hkGzks5mxynuV0oWkB9Z8qsmierT2/view)


<span class="qlang-split" data-lang="en"></span>


*Ratio between area of CMN triangle and square ABCD*

![[src_kangourou_2012_cadet__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \draw (0,0) -- (1,0) -- (1,1) -- (0,1) -- cycle;
  \draw (0,0) -- (1,1);
  \draw (0,0.5) -- (1,1);
  \draw (0,0.5) -- (0.25,0.25);
  \fill[gray!40] (0,0.5) -- (0.25,0.25) -- (1,1) -- cycle;
  \draw (0,0.5) -- (0.25,0.25) -- (1,1) -- cycle;
  \node[above left] at (0,1) {$D$};
  \node[above right] at (1,1) {$C$};
  \node[left] at (0,0.5) {$M$};
  \node[below right] at (0.25,0.25) {$N$};
  \node[below left] at (0,0) {$A$};
  \node[below right] at (1,0) {$B$};
\end{tikzpicture}
\end{document}
```

> Find the ratio between the area of the CMN triangle (highlighted in gray in the figure) and that of the ABCD square, knowing that M is the middle point of AD and MN is perpendicular to AC. A) 1:6 B) 1:5 C) 7:36 D) 3:16 E) 7:40

**Answer:** D
[[src_kangourou_2012_cadet__Q22]]
