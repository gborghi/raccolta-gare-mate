---
title: Kangourou Coppa Squadre Junior 2017 Finale — Quesito 8
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2017_squadre_junior_f__Q08
parent: src_kangourou_2017_squadre_junior_f
competition: Kangourou Coppa Squadre Junior 2017 Finale
family: kangourou
year: '2017'
level: squadre
country: Italia
modalita: squadre
quesito: '8'
summary: Quadrato somma aree trapezi S1 e S4 negli esagoni
answer: '48'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2017
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---
<div class="qlang-switch" data-default="it"></div>


*Quadrato somma aree trapezi S1 e S4 negli esagoni*

![[src_kangourou_2017_squadre_junior_f__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A1) at ({3*cos(90)},{3*sin(90)});
  \coordinate (A2) at ({3*cos(150)},{3*sin(150)});
  \coordinate (A3) at ({3*cos(210)},{3*sin(210)});
  \coordinate (A4) at ({3*cos(270)},{3*sin(270)});
  \coordinate (A5) at ({3*cos(330)},{3*sin(330)});
  \coordinate (A6) at ({3*cos(30)},{3*sin(30)});
  \coordinate (B1) at ({1*cos(90)},{1*sin(90)});
  \coordinate (B2) at ({1*cos(150)},{1*sin(150)});
  \coordinate (B3) at ({1*cos(210)},{1*sin(210)});
  \coordinate (B4) at ({1*cos(270)},{1*sin(270)});
  \coordinate (B5) at ({1*cos(330)},{1*sin(330)});
  \coordinate (B6) at ({1*cos(30)},{1*sin(30)});
  \draw (A1)--(A2)--(A3)--(A4)--(A5)--(A6)--cycle;
  \draw (B1)--(B2)--(B3)--(B4)--(B5)--(B6)--cycle;
  \draw (A1)--(B1); \draw (A2)--(B2); \draw (A3)--(B3);
  \draw (A4)--(B4); \draw (A5)--(B5); \draw (A6)--(B6);
  \node at ({2*cos(180)},{2*sin(180)}) {$S_1$};
  \node at ({2*cos(120)},{2*sin(120)}) {$S_2$};
  \node at ({2*cos(60)},{2*sin(60)}) {$S_3$};
  \node at ({2*cos(0)},{2*sin(0)}) {$S_4$};
  \node at ({2*cos(300)},{2*sin(300)}) {$S_5$};
  \node at ({2*cos(240)},{2*sin(240)}) {$S_6$};
\end{tikzpicture}
\end{document}
```

> Gli esagoni 
> La figura mostra due esagoni regolari contenuti uno nell’altro, che hanno i 
> lati paralleli e i due bordi privi di punti in comune. Il più piccolo ha il lato 
> di 1 cm, il più grande di 3 cm. Quanto vale il quadrato della somma delle 
> aree dei trapezi S1 e S4 ?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 48
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ijd-2yBvSFtAjZLHBy1eB7gi1gQlwwfw/view)


<span class="qlang-split" data-lang="en"></span>


*Square sum of trapezoidal areas S1 and S4 in the hexagons*

![[src_kangourou_2017_squadre_junior_f__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A1) at ({3*cos(90)},{3*sin(90)});
  \coordinate (A2) at ({3*cos(150)},{3*sin(150)});
  \coordinate (A3) at ({3*cos(210)},{3*sin(210)});
  \coordinate (A4) at ({3*cos(270)},{3*sin(270)});
  \coordinate (A5) at ({3*cos(330)},{3*sin(330)});
  \coordinate (A6) at ({3*cos(30)},{3*sin(30)});
  \coordinate (B1) at ({1*cos(90)},{1*sin(90)});
  \coordinate (B2) at ({1*cos(150)},{1*sin(150)});
  \coordinate (B3) at ({1*cos(210)},{1*sin(210)});
  \coordinate (B4) at ({1*cos(270)},{1*sin(270)});
  \coordinate (B5) at ({1*cos(330)},{1*sin(330)});
  \coordinate (B6) at ({1*cos(30)},{1*sin(30)});
  \draw (A1)--(A2)--(A3)--(A4)--(A5)--(A6)--cycle;
  \draw (B1)--(B2)--(B3)--(B4)--(B5)--(B6)--cycle;
  \draw (A1)--(B1); \draw (A2)--(B2); \draw (A3)--(B3);
  \draw (A4)--(B4); \draw (A5)--(B5); \draw (A6)--(B6);
  \node at ({2*cos(180)},{2*sin(180)}) {$S_1$};
  \node at ({2*cos(120)},{2*sin(120)}) {$S_2$};
  \node at ({2*cos(60)},{2*sin(60)}) {$S_3$};
  \node at ({2*cos(0)},{2*sin(0)}) {$S_4$};
  \node at ({2*cos(300)},{2*sin(300)}) {$S_5$};
  \node at ({2*cos(240)},{2*sin(240)}) {$S_6$};
\end{tikzpicture}
\end{document}
```

> Hexagons The figure shows two regular hexagons contained in each other, which have parallel sides and the two edges without points in common. The smallest has a side of 1 cm, the largest 3 cm. What is the square of the sum of the areas of trapezoids S1 and S4 ?

**Answer:** 48
[[src_kangourou_2017_squadre_junior_f__Q08]]
