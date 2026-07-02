---
title: Kangourou 2019 Semifinale Benjamin — Quesito 17
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2019_benjamin_semif__Q17
parent: src_kangourou_2019_benjamin_semif
competition: Kangourou 2019 Semifinale Benjamin
family: kangourou
year: '2019'
level: kangourou
country: Italia
modalita: individuale
quesito: '17'
summary: Massimo pedine sul 21-agono con distanze tutte diverse
answer: '5'
topics:
  - topic_combinatoria
  - topic_geometria_piana
methods:
  - method_estremalita
skills:
  - skill_astrazione
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2019
  - livello/kangourou
  - topic/combinatoria
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Massimo pedine sul 21-agono con distanze tutte diverse*

![[src_kangourou_2019_benjamin_semif__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw
    (0.000,2.500) -- (-0.737,2.389) -- (-1.408,2.066) -- (-1.955,1.559) -- (-2.327,0.913) --
    (-2.493,0.187) -- (-2.437,-0.556) -- (-2.165,-1.250) -- (-1.700,-1.833) -- (-1.085,-2.252) --
    (-0.373,-2.472) -- (0.373,-2.472) -- (1.085,-2.252) -- (1.700,-1.833) -- (2.165,-1.250) --
    (2.437,-0.556) -- (2.493,0.187) -- (2.327,0.913) -- (1.955,1.559) -- (1.408,2.066) --
    (0.737,2.389) -- cycle;
  \foreach \x/\y in {
    0.000/2.500, -0.737/2.389, -1.408/2.066, -1.955/1.559, -2.327/0.913,
    -2.493/0.187, -2.437/-0.556, -2.165/-1.250, -1.700/-1.833, -1.085/-2.252,
    -0.373/-2.472, 0.373/-2.472, 1.085/-2.252, 1.700/-1.833, 2.165/-1.250,
    2.437/-0.556, 2.493/0.187, 2.327/0.913, 1.955/1.559, 1.408/2.066, 0.737/2.389
  } {
    \draw[fill=white] (\x,\y) circle (0.12);
  }
\end{tikzpicture}
\end{document}
```

> (Punti 7) In figura vedi un poligono regolare di 21 lati. Andrea ha molte pedine 
> che vuole disporre sui vertici di tale poligono in modo tale che, per ogni coppia di 
> vertici coperti da pedine, le distanze tra i vertici siano tutte differenti. Quante pedine 
> al massimo può posizionare?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 5
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1GyY7FcsM8sclOO2bS-pBXVTpUEtuUikn/view)


<span class="qlang-split" data-lang="en"></span>


*Major pedals on the 21-axle with all different distances*

![[src_kangourou_2019_benjamin_semif__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw
    (0.000,2.500) -- (-0.737,2.389) -- (-1.408,2.066) -- (-1.955,1.559) -- (-2.327,0.913) --
    (-2.493,0.187) -- (-2.437,-0.556) -- (-2.165,-1.250) -- (-1.700,-1.833) -- (-1.085,-2.252) --
    (-0.373,-2.472) -- (0.373,-2.472) -- (1.085,-2.252) -- (1.700,-1.833) -- (2.165,-1.250) --
    (2.437,-0.556) -- (2.493,0.187) -- (2.327,0.913) -- (1.955,1.559) -- (1.408,2.066) --
    (0.737,2.389) -- cycle;
  \foreach \x/\y in {
    0.000/2.500, -0.737/2.389, -1.408/2.066, -1.955/1.559, -2.327/0.913,
    -2.493/0.187, -2.437/-0.556, -2.165/-1.250, -1.700/-1.833, -1.085/-2.252,
    -0.373/-2.472, 0.373/-2.472, 1.085/-2.252, 1.700/-1.833, 2.165/-1.250,
    2.437/-0.556, 2.493/0.187, 2.327/0.913, 1.955/1.559, 1.408/2.066, 0.737/2.389
  } {
    \draw[fill=white] (\x,\y) circle (0.12);
  }
\end{tikzpicture}
\end{document}
```

> (Points 7) In the figure you see a regular polygon of 21 sides. Andrea has a lot of pedals that she wants to place on the vertices of this polygon so that, for each pair of pedal-covered vertices, the distances between the vertices are all different. How many pedals can he place?

**Answer:** 5
[[src_kangourou_2019_benjamin_semif__Q17]]
