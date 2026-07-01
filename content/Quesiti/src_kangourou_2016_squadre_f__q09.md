---
title: Kangourou Coppa Squadre 2016 Finale — Quesito 9
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2016_squadre_f__Q09
parent: src_kangourou_2016_squadre_f
competition: Kangourou Coppa Squadre 2016 Finale
family: kangourou
year: '2016'
level: squadre
country: Italia
modalita: squadre
quesito: '9'
summary: Perimetro triangolo coi punti medi nell’esagono
answer: '54'
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
  - anno/2016
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---
<div class="qlang-switch" data-default="it"></div>


*Perimetro triangolo coi punti medi nell’esagono*

![[src_kangourou_2016_squadre_f__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (V0) at (2,0);
  \coordinate (V1) at (1,1.732);
  \coordinate (V2) at (-1,1.732);
  \coordinate (V3) at (-2,0);
  \coordinate (V4) at (-1,-1.732);
  \coordinate (V5) at (1,-1.732);
  \draw (V0) -- (V1) -- (V2) -- (V3) -- (V4) -- (V5) -- cycle;
  \coordinate (M01) at (1.5,0.866);
  \coordinate (M23) at (-1.5,0.866);
  \coordinate (M45) at (0,-1.732);
  \draw (M01) -- (M23) -- (M45) -- cycle;
\end{tikzpicture}
\end{document}
```

> Un triangolo nell’esagono 
> Un esagono regolare di lato 12 cm contiene un triangolo i cui vertici sono i punti medi 
> di tre lati a due a due non adiacenti (vedi figura). Quanti centimetri misura il perimetro 
> del triangolo?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 54
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<span class="qlang-split" data-lang="en"></span>


*Triangle perimeter with midpoints in the hexagon*

![[src_kangourou_2016_squadre_f__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (V0) at (2,0);
  \coordinate (V1) at (1,1.732);
  \coordinate (V2) at (-1,1.732);
  \coordinate (V3) at (-2,0);
  \coordinate (V4) at (-1,-1.732);
  \coordinate (V5) at (1,-1.732);
  \draw (V0) -- (V1) -- (V2) -- (V3) -- (V4) -- (V5) -- cycle;
  \coordinate (M01) at (1.5,0.866);
  \coordinate (M23) at (-1.5,0.866);
  \coordinate (M45) at (0,-1.732);
  \draw (M01) -- (M23) -- (M45) -- cycle;
\end{tikzpicture}
\end{document}
```

> A regular hexagon of 12 cm side contains a triangle whose vertices are the midpoints of three two to two non-adjacent sides (see figure). How many centimeters does the perimeter of the triangle measure?

**Answer:** 54
[[src_kangourou_2016_squadre_f__Q09]]
