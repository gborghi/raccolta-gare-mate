---
title: Gara Nazionale Classi Prime 2015 — Quesito 7
tipo: quesito
lang: it
quesito_id: quesito_src_archimede_2015_classiprime__Q07
parent: src_archimede_2015_classiprime
competition: Gara Nazionale Classi Prime 2015
family: archimede
year: '2015'
level: Classi Prime
country: Italia
modalita: individuale
quesito: '7'
summary: Area del piu piccolo triangolo equilatero che contiene esagono
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2015
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Area del piu piccolo triangolo equilatero che contiene esagono*

![[src_archimede_2015_classiprime__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.9]
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (3,5.196);
  \coordinate (P1) at (2,0);
  \coordinate (P2) at (4,0);
  \coordinate (P3) at (5,1.732);
  \coordinate (P4) at (4,3.464);
  \coordinate (P5) at (2,3.464);
  \coordinate (P6) at (1,1.732);
  \fill[gray!40] (P1)--(P2)--(P3)--(P4)--(P5)--(P6)--cycle;
  \fill[gray!15] (A)--(P1)--(P6)--cycle;
  \fill[gray!15] (B)--(P2)--(P3)--cycle;
  \fill[gray!15] (C)--(P4)--(P5)--cycle;
  \draw (A)--(B)--(C)--cycle;
  \draw (P1)--(P2)--(P3)--(P4)--(P5)--(P6)--cycle;
  \draw (P6)--(P3);
  \draw (P1)--(P4);
  \draw (P2)--(P5);
\end{tikzpicture}
\end{document}
```

> Un esagono regolare ha l’area di 144cm2. Qual è l’area del più piccolo
> triangolo equilatero che lo contiene?
> A 216cm2
> B 192cm2
> C 288cm2
> D 180cm2
> E 240cm2
> F 256cm2

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1TUYhrUJzIcIcTlfnz-zfxmf4iT-f9HHJ/view)


<span class="qlang-split" data-lang="en"></span>


*Area of the smallest equilateral triangle containing hexagon*

![[src_archimede_2015_classiprime__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.9]
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (3,5.196);
  \coordinate (P1) at (2,0);
  \coordinate (P2) at (4,0);
  \coordinate (P3) at (5,1.732);
  \coordinate (P4) at (4,3.464);
  \coordinate (P5) at (2,3.464);
  \coordinate (P6) at (1,1.732);
  \fill[gray!40] (P1)--(P2)--(P3)--(P4)--(P5)--(P6)--cycle;
  \fill[gray!15] (A)--(P1)--(P6)--cycle;
  \fill[gray!15] (B)--(P2)--(P3)--cycle;
  \fill[gray!15] (C)--(P4)--(P5)--cycle;
  \draw (A)--(B)--(C)--cycle;
  \draw (P1)--(P2)--(P3)--(P4)--(P5)--(P6)--cycle;
  \draw (P6)--(P3);
  \draw (P1)--(P4);
  \draw (P2)--(P5);
\end{tikzpicture}
\end{document}
```

> A regular hexagon has an area of 144 cm2. What is the area of the smallest equilateral triangle that contains it? A 216cm2 B 192cm2 C 288cm2 D 180cm2 E 240cm2 F 256cm2

**Answer:** A
[[src_archimede_2015_classiprime__Q07]]
