---
title: Kangourou 2014 gara 20 marzo Student — Quesito 22
tipo: quesito
quesito_id: quesito_src_kangourou_2014_marzo_student__Q22
parent: src_kangourou_2014_marzo_student
competition: Kangourou 2014 gara 20 marzo Student
family: kangourou
year: '2014'
level: kangourou
country: Italia
modalita: individuale
quesito: '22'
summary: rapporto PQ/QR
answer: D
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
  - anno/2014
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*rapporto PQ/QR*

![[src_kangourou_2014_marzo_student__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \coordinate (P) at (0,0);
  \coordinate (Q) at (1.414,0);
  \coordinate (R) at (1.414,1);
  \coordinate (S) at (0,1);
  \coordinate (T) at (0.707,1);
  \draw (P) -- (Q) -- (R) -- (S) -- cycle;
  \draw (P) -- (R);
  \draw (Q) -- (T);
  \node[below left] at (P) {$P$};
  \node[below right] at (Q) {$Q$};
  \node[above right] at (R) {$R$};
  \node[above left] at (S) {$S$};
  \node[above] at (T) {$T$};
  \fill (P) circle (1pt);
  \fill (Q) circle (1pt);
  \fill (R) circle (1pt);
  \fill (S) circle (1pt);
  \fill (T) circle (1pt);
\end{tikzpicture}
\end{document}
```

> Nel rettangolo PQRS, chiamiamo T il punto medio del lato RS. 
> Si sa che QT è perpendicolare alla diagonale PR. Quanto vale il 
> rapporto tra la lunghezza di PQ e quella di QR ?           
> A) 2 : 1	 	
> B) √3 : 1	
> C) 3 : 2	 	
> D) √2 : 1	
> E) 5 : 4

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** apri PDF p.4
