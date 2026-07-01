---
title: Kangourou 2014 marzo Junior — Quesito 29
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2014_junior__Q29
parent: src_kangourou_2014_junior
competition: Kangourou 2014 marzo Junior
family: kangourou
year: '2014'
level: kangourou
country: Italia
modalita: individuale
quesito: '29'
summary: Area del quadrilatero AFDE nel triangolo con quadrato
answer: B
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
  - anno/2014
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Area del quadrilatero AFDE nel triangolo con quadrato*

![[src_kangourou_2014_junior__prob29.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.65]
  \fill[gray!40] (3.6,4.8) -- (8.6,1.05) -- (9.8,1.4) -- (8.4,6.2) -- cycle;
  \draw (0,0) -- (10,0) -- (3.6,4.8) -- cycle;
  \draw (3.6,4.8) -- (5,0) -- (9.8,1.4) -- (8.4,6.2) -- cycle;
  \draw (5,0) -- (9.8,1.4);
  \foreach \p in {(0,0),(5,0),(10,0),(3.6,4.8),(9.8,1.4),(8.4,6.2),(8.6,1.05)}
    \draw[fill=black] \p circle (1.5pt);
  \node[below left] at (0,0) {$B$};
  \node[below] at (5,0) {$M$};
  \node[below right] at (10,0) {$C$};
  \node[above left] at (3.6,4.8) {$A$};
  \node[right] at (9.8,1.4) {$D$};
  \node[above right] at (8.4,6.2) {$E$};
  \node[below right] at (8.6,1.05) {$F$};
\end{tikzpicture}
\end{document}
```

> Osserva la figura. ABC è un triangolo in cui il lato 
> AB è lungo 6 cm, il lato AC è lungo 8 cm e il lato BC è 
> lungo 10 cm. M è il punto medio del lato BC, AMDE 
> è un quadrato il cui lato MD interseca il lato AC del 
> triangolo nel punto F. Quanto vale, in cm2, l’area del 
> quadrilatero AFDE ?
> ATTENZIONE: la figura è puramente indicativa del­
> la disposizione dei punti e non rispetta, neppure in 
> scala, le misure fornite dai dati (o che da essi si pos­
> sono desumere).
> A) 15,175	
> B) 15,625	
> C) 15,825	
> D) 15	
> 	
> E) 15,375

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/1fBP_q0OyAvs7RstYy9yZzEOGO0Xw8tzI/view)


<span class="qlang-split" data-lang="en"></span>


*Area of the AFDE quadrilateral in the triangle with square*

![[src_kangourou_2014_junior__prob29.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.65]
  \fill[gray!40] (3.6,4.8) -- (8.6,1.05) -- (9.8,1.4) -- (8.4,6.2) -- cycle;
  \draw (0,0) -- (10,0) -- (3.6,4.8) -- cycle;
  \draw (3.6,4.8) -- (5,0) -- (9.8,1.4) -- (8.4,6.2) -- cycle;
  \draw (5,0) -- (9.8,1.4);
  \foreach \p in {(0,0),(5,0),(10,0),(3.6,4.8),(9.8,1.4),(8.4,6.2),(8.6,1.05)}
    \draw[fill=black] \p circle (1.5pt);
  \node[below left] at (0,0) {$B$};
  \node[below] at (5,0) {$M$};
  \node[below right] at (10,0) {$C$};
  \node[above left] at (3.6,4.8) {$A$};
  \node[right] at (9.8,1.4) {$D$};
  \node[above right] at (8.4,6.2) {$E$};
  \node[below right] at (8.6,1.05) {$F$};
\end{tikzpicture}
\end{document}
```

> Look at the figure. ABC is a triangle in which the side AB is 6 cm long, the side AC is 8 cm long and the side BC is 10 cm long. M is the middle point of the BC side, AMDE is a square whose MD side intersects the AC side of the triangle at point F. What is the area of the AFDE quadrilateral in cm2? ATTENTION: the figure is purely indicative of the arrangement of the points and does not respect, even on a scale, the measures provided by the data (or which can be deduced from them). A) 15,175 B) 15,625 C) 15,825 D) 15
> 	
> E) 15,375

**Answer:** B
[[src_kangourou_2014_junior__Q29]]
