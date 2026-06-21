---
title: Kangourou 2013 marzo Cadet — Quesito 16
tipo: quesito
quesito_id: quesito_src_kangourou_2013_cadet__Q16
parent: src_kangourou_2013_cadet
competition: Kangourou 2013 marzo Cadet
family: kangourou
year: '2013'
level: kangourou
country: Italia
modalita: individuale
quesito: '16'
summary: Vertice con rapporto y/x minimo nel rettangolo
answer: A
topics:
  - topic_geometria_analitica
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2013
  - livello/kangourou
  - topic/geometria_analitica
  - gara/individuale
---

*Vertice con rapporto y/x minimo nel rettangolo*

![[src_kangourou_2013_cadet__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[->] (0,0) -- (4.5,0) node[right] {$x$};
  \draw[->] (0,0) -- (0,2.5) node[above] {$y$};
  \fill[gray!30] (1,-2) rectangle (4,-0.8);
  \draw (1,-2) rectangle (4,-0.8);
  \node[below left] at (1,-2) {$A$};
  \node[below right] at (4,-2) {$B$};
  \node[above right] at (4,-0.8) {$C$};
  \node[above left] at (1,-0.8) {$D$};
\end{tikzpicture}
\end{document}
```

> In figura è rappresentato un rettangolo ABCD che 
>      •   ha lati paralleli agli assi coordinati, 
>      •   giace “sotto”  l’asse x e “a destra” dell’asse y.
> Per ciascuno dei vertici calcoliamo il rapporto tra la sua 
> coordinata y e la sua coordinata x. Per quale dei quattro 
> punti tale rapporto è minimo?
> A) A	
>      B) B	            C) C	
>        D) D              
> E) dipende dal rettangolo.

**Topic:** [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.3
