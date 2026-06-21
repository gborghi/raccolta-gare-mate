---
title: Kangourou 2020 Gara marzo Cadet — Quesito 4
tipo: quesito
quesito_id: quesito_src_kangourou_2020_cadet_marzo__Q04
parent: src_kangourou_2020_cadet_marzo
competition: Kangourou 2020 Gara marzo Cadet
family: kangourou
year: '2020'
level: kangourou
country: Italia
modalita: individuale
quesito: '4'
summary: Area del triangolo AEF nella griglia
answer: C
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
  - anno/2020
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Area del triangolo AEF nella griglia*

![[src_kangourou_2020_cadet_marzo__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw[thin, gray!60] (0,0) grid (3,3);
  \draw[thick] (0,0) -- (3,2) -- (1,3) -- cycle;
  \filldraw (0,0) circle (2pt) node[below left] {$A$};
  \filldraw (3,0) circle (1.5pt) node[below right] {$B$};
  \filldraw (3,3) circle (1.5pt) node[above right] {$C$};
  \filldraw (0,3) circle (1.5pt) node[above left] {$D$};
  \filldraw (3,2) circle (2pt) node[right] {$E$};
  \filldraw (1,3) circle (2pt) node[above] {$F$};
\end{tikzpicture}
\end{document}
```

> Osserva la figura: ognuno dei quadratini la cui unione dà il quadrato grande ha lato 1. Qual è l’area del triangolo AEF?
> A) 6	
> 	
> B) 9	
> 	
> C) 2,5	 	
> D) 4,5	 	
> E) 3

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.1
