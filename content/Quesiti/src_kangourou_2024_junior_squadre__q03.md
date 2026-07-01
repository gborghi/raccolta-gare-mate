---
title: Kangourou Squadre 2024 Junior Finale 1 — Quesito 3
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2024_junior_squadre__Q03
parent: src_kangourou_2024_junior_squadre
competition: Kangourou Squadre 2024 Junior Finale 1
family: kangourou
year: '2024'
level: squadre
country: Italia
modalita: squadre
quesito: '3'
summary: Quanti percorsi chiusi senza ripetere segmenti
answer: '1458'
topics:
  - topic_combinatoria
methods:
  - method_grafi
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/squadre
  - topic/combinatoria
  - gara/squadre
---
<div class="qlang-switch" data-default="it"></div>


*Quanti percorsi chiusi senza ripetere segmenti*

![[src_kangourou_2024_junior_squadre__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Regular hexagon, pointy-top: vertices at unit radius
  % V1=(0,1), V2=(-0.866,0.5), V3=(-0.866,-0.5), V4=(0,-1), V5=(0.866,-0.5), V6=(0.866,0.5)
  \draw (0,1) -- (-0.866,0.5) -- (-0.866,-0.5) -- (0,-1) -- (0.866,-0.5) -- (0.866,0.5) -- (0,1);
  % Arrow indicators at midpoints of each edge (directed, all clockwise)
  \draw[->] (-0.413,0.76) -- (-0.453,0.74);
  \draw[->] (-0.866,0.02) -- (-0.866,-0.02);
  \draw[->] (-0.453,-0.74) -- (-0.413,-0.76);
  \draw[->] (0.413,-0.76) -- (0.453,-0.74);
  \draw[->] (0.866,-0.02) -- (0.866,0.02);
  \draw[->] (0.453,0.74) -- (0.413,0.76);
  % Point A at midpoint of top-right edge (between V6=(0.866,0.5) and V1=(0,1))
  \fill (0.433,0.75) circle (1.5pt) node[above] {$A$};
\end{tikzpicture}
\end{document}
```

> I percorsi  
> Osservate la figura. Partendo dal punto A si vuole ritornare in A percorrendo 
> solo segmenti presenti in figura, non necessariamente tutti, ma senza 
> percorrere più di una volta alcun segmento (pur potendo passare più di una 
> volta per qualche estremo dei segmenti). Quanti sono i diversi percorsi 
> possibili?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1458
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/19twDyCIYYYLPZm2ICyi_V91n9zEgBbys/view)


<span class="qlang-split" data-lang="en"></span>


*How many routes are closed without repeating segments*

![[src_kangourou_2024_junior_squadre__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Regular hexagon, pointy-top: vertices at unit radius
  % V1=(0,1), V2=(-0.866,0.5), V3=(-0.866,-0.5), V4=(0,-1), V5=(0.866,-0.5), V6=(0.866,0.5)
  \draw (0,1) -- (-0.866,0.5) -- (-0.866,-0.5) -- (0,-1) -- (0.866,-0.5) -- (0.866,0.5) -- (0,1);
  % Arrow indicators at midpoints of each edge (directed, all clockwise)
  \draw[->] (-0.413,0.76) -- (-0.453,0.74);
  \draw[->] (-0.866,0.02) -- (-0.866,-0.02);
  \draw[->] (-0.453,-0.74) -- (-0.413,-0.76);
  \draw[->] (0.413,-0.76) -- (0.453,-0.74);
  \draw[->] (0.866,-0.02) -- (0.866,0.02);
  \draw[->] (0.453,0.74) -- (0.413,0.76);
  % Point A at midpoint of top-right edge (between V6=(0.866,0.5) and V1=(0,1))
  \fill (0.433,0.75) circle (1.5pt) node[above] {$A$};
\end{tikzpicture}
\end{document}
```

> The paths. Look at the figure. Starting from point A, you want to return to A by traveling only segments present in the figure, not necessarily all, but without traveling more than once any segment (although you can go more than once for some end of the segments). How many different routes are possible?

**Answer:** 1458
[[src_kangourou_2024_junior_squadre__Q03]]
