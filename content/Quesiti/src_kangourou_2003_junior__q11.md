---
title: Kangourou 2003 Junior (20 marzo) — Quesito 11
tipo: quesito
quesito_id: quesito_src_kangourou_2003_junior__Q11
parent: src_kangourou_2003_junior
competition: Kangourou 2003 Junior (20 marzo)
family: kangourou
year: '2003'
level: kangourou
country: Italia
modalita: individuale
quesito: '11'
summary: Frazione area triangolo PQT nel rettangolo
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
  - anno/2003
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Frazione area triangolo PQT nel rettangolo*

![[src_kangourou_2003_junior__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
\coordinate (A) at (0,0);
\coordinate (B) at (2,0);
\coordinate (C) at (2,1.5);
\coordinate (D) at (0,1.5);
\draw[thick] (A) -- (B) -- (C) -- (D) -- cycle;
\node[below left] at (A) {$A$};
\node[below right] at (B) {$B$};
\node[above right] at (C) {$C$};
\node[above left] at (D) {$D$};
\coordinate (P) at (1,0);
\coordinate (Q) at (2,0.75);
\coordinate (R) at (1,1.5);
\coordinate (S) at (0,0.75);
\node[below] at (P) {$P$};
\node[right] at (Q) {$Q$};
\node[above] at (R) {$R$};
\node[left] at (S) {$S$};
\fill[white] (P) circle (2pt);
\draw (P) circle (2pt);
\fill[white] (Q) circle (2pt);
\draw (Q) circle (2pt);
\fill[white] (R) circle (2pt);
\draw (R) circle (2pt);
\fill[white] (S) circle (2pt);
\draw (S) circle (2pt);
\coordinate (T) at (0.5,1.125);
\fill[white] (T) circle (2pt);
\draw (T) circle (2pt);
\node[above left] at (T) {$T$};
\fill[gray!40] (P) -- (Q) -- (T) -- cycle;
\draw (P) -- (Q) -- (T) -- cycle;
\end{tikzpicture}
\end{document}
```

> Nel rettangolo ABCD siano P,Q,R e S i punti
> medi dei lati, come illustrato dalla figura. Se T è il
> punto medio del segmento RS, quale frazione dell'area di ABCD è occupata dal triangolo PQT ?
> A) 5/16
> B) 1/4 
> C) 1/5 
> D) 1/6
> E) 3/8

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1Xwl6H49U1GJgqlal-e-LF8SWUIVOQpLv/view)
