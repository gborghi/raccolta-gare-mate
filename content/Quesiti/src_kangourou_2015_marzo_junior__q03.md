---
title: Kangourou 2015 gara 19 marzo Junior — Quesito 3
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2015_marzo_junior__Q03
parent: src_kangourou_2015_marzo_junior
competition: Kangourou 2015 gara 19 marzo Junior
family: kangourou
year: '2015'
level: kangourou
country: Italia
modalita: individuale
quesito: '3'
summary: valore
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
  - comp/kangourou
  - anno/2015
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*valore*

![[src_kangourou_2015_marzo_junior__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Square side 2, shaded region bounded by semicircle and two quarter-circles
  % Semicircle: center (1,2), radius 1, sweeping downward from (0,2) to (2,2)
  % Quarter circle at bottom-left (0,0): radius 1, from (1,0) to (0,1)
  % Quarter circle at bottom-right (2,0): radius 1, from (2,1) to (1,0)
  \fill[gray!50] (0,2) arc[start angle=180, end angle=0, radius=1] -- cycle;
  \fill[gray!50] (1,0) arc[start angle=0, end angle=90, radius=1] -- cycle;
  \fill[gray!50] (2,1) arc[start angle=90, end angle=180, radius=1] -- cycle;
  \draw[thick] (0,0) rectangle (2,2);
  \draw[thick] (0,2) arc[start angle=180, end angle=0, radius=1];
  \draw[thick] (1,0) arc[start angle=0, end angle=90, radius=1];
  \draw[thick] (2,1) arc[start angle=90, end angle=180, radius=1];
\end{tikzpicture}
\end{document}
```

> La regione all’interno del quadrato che in figura appare om­
> breggiata è delimitata da una semicirconferenza e da due quarti 
> di circonferenza. Il quadrato ha area 1. Quanto vale l’area della 
> regione ombreggiata? 
> A) π/8	 	
> B) 1/2	
> 	
> C) π/2	 	
> D) 1/4	 	
> E) π/4

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)


<span class="qlang-split" data-lang="en"></span>


The value of the underlying asset shall be reported in accordance with the following column:

![[src_kangourou_2015_marzo_junior__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Square side 2, shaded region bounded by semicircle and two quarter-circles
  % Semicircle: center (1,2), radius 1, sweeping downward from (0,2) to (2,2)
  % Quarter circle at bottom-left (0,0): radius 1, from (1,0) to (0,1)
  % Quarter circle at bottom-right (2,0): radius 1, from (2,1) to (1,0)
  \fill[gray!50] (0,2) arc[start angle=180, end angle=0, radius=1] -- cycle;
  \fill[gray!50] (1,0) arc[start angle=0, end angle=90, radius=1] -- cycle;
  \fill[gray!50] (2,1) arc[start angle=90, end angle=180, radius=1] -- cycle;
  \draw[thick] (0,0) rectangle (2,2);
  \draw[thick] (0,2) arc[start angle=180, end angle=0, radius=1];
  \draw[thick] (1,0) arc[start angle=0, end angle=90, radius=1];
  \draw[thick] (2,1) arc[start angle=90, end angle=180, radius=1];
\end{tikzpicture}
\end{document}
```

> The region within the square shown in the figure is bounded by a semicircle and two quarters of its circumference. The square has area 1. How much is the shaded area worth? A) π/8 B) 1/2
> 	
> C) π/2 D) 1/4 E) π/4

**Answer:** B
[[src_kangourou_2015_marzo_junior__Q03]]
