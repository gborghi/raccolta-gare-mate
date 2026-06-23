---
title: Kangourou 2015 gara 19 marzo Junior — Quesito 12
tipo: quesito
quesito_id: quesito_src_kangourou_2015_marzo_junior__Q12
parent: src_kangourou_2015_marzo_junior
competition: Kangourou 2015 gara 19 marzo Junior
family: kangourou
year: '2015'
level: kangourou
country: Italia
modalita: individuale
quesito: '12'
summary: percorso minimo
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
  - anno/2015
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*percorso minimo*

![[src_kangourou_2015_marzo_junior__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % 8 unit squares in a 4x2 grid
  \draw[thick] (0,0) grid (4,2);
  % Mark the two opposite vertices (top-left and bottom-right)
  \filldraw (0,2) circle (3pt);
  \filldraw (4,0) circle (3pt);
\end{tikzpicture}
\end{document}
```

> Il rettangolo in figura è ottenuto accostando 8 quadrati 
> tutti di lato 1. Nel rettangolo ci si può muovere solo lungo i 
> lati o le diagonali dei singoli quadrati. Con questo vincolo, 
> quanto è lungo il percorso più breve che collega due vertici 
> opposti del rettangolo (ad esempio quelli marcati)? 
> A) 2√5	 	
> B) √10 + √2	
> C) 2 + 2√2	
> D) 4√2	 	
> E) 6

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)
