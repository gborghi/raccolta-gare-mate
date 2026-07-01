---
title: Kangourou 2005 - Junior (marzo) — Quesito 30
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2005_junior__Q30
parent: src_kangourou_2005_junior
competition: Kangourou 2005 - Junior (marzo)
family: kangourou
year: '2005'
level: kangourou
country: Italia
modalita: individuale
quesito: '30'
summary: Angolo CPE con tre quadrati accostati
answer: B
topics:
  - topic_geometria_piana
methods:
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2005
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Angolo CPE con tre quadrati accostati*

![[src_kangourou_2005_junior__prob30.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Problem 30: Three adjacent unit squares
  % H(0,1)-A(0,0)-B(1,0)-G(1,1), G(1,1)-B(1,0)-C(2,0)-F(2,1), F-C-D(3,0)-E(3,1)
  % AE: from A(0,0) to E(3,1); CH: from C(2,0) to H(0,1)
  % Intersection P = (6/5, 2/5)
  \draw (0,0) rectangle (3,1);
  \draw (1,0) -- (1,1);
  \draw (2,0) -- (2,1);
  \draw (0,0) -- (3,1);
  \draw (2,0) -- (0,1);
  \node[below left] at (0,0) {A};
  \node[below] at (1,0) {B};
  \node[below] at (2,0) {C};
  \node[below right] at (3,0) {D};
  \node[above left] at (0,1) {H};
  \node[above] at (1,1) {G};
  \node[above] at (2,1) {F};
  \node[above right] at (3,1) {E};
  \node[above] at (1.2,0.4) {P};
  \node at (1.55,0.42) {?};
\end{tikzpicture}
\end{document}
```

> Tre quadrati sono accostati
> come in figura. I segmenti AE e
> CH si intersecano nel punto P.
> Quanto misura l'angolo  CPE ?
> A) 30° 
> B) 45°
> C) 60° 
> D) 50°
> E) 40°
> A
> E
> C
> D
> B
> X
> X
> H
> G
> F
> E
> A
> D
> B
> C
> P
> ?
> 3
> 5
> 6
> junior_05_D.qxp  21/02/2005  16.13  Pagina 27

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/1e8iPo9MMdPbC2VKpYSfyey4g0a-pI6TH/view)


<span class="qlang-split" data-lang="en"></span>


*CPE angle with three adjacent squares*

![[src_kangourou_2005_junior__prob30.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Problem 30: Three adjacent unit squares
  % H(0,1)-A(0,0)-B(1,0)-G(1,1), G(1,1)-B(1,0)-C(2,0)-F(2,1), F-C-D(3,0)-E(3,1)
  % AE: from A(0,0) to E(3,1); CH: from C(2,0) to H(0,1)
  % Intersection P = (6/5, 2/5)
  \draw (0,0) rectangle (3,1);
  \draw (1,0) -- (1,1);
  \draw (2,0) -- (2,1);
  \draw (0,0) -- (3,1);
  \draw (2,0) -- (0,1);
  \node[below left] at (0,0) {A};
  \node[below] at (1,0) {B};
  \node[below] at (2,0) {C};
  \node[below right] at (3,0) {D};
  \node[above left] at (0,1) {H};
  \node[above] at (1,1) {G};
  \node[above] at (2,1) {F};
  \node[above right] at (3,1) {E};
  \node[above] at (1.2,0.4) {P};
  \node at (1.55,0.42) {?};
\end{tikzpicture}
\end{document}
```

> Three squares are aligned as shown in the figure. The segments AE and CH intersect at point P. What's the size of the CPE angle? A) 30° B) 45° C) 60° D) 50° E) 40° A E C D B X X H G F E A D B C P ? The Commission has decided to extend the period of validity of this Regulation to the following areas:

**Answer:** B
[[src_kangourou_2005_junior__Q30]]
