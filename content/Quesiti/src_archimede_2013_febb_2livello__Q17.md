---
title: Archimede Gara di Febbraio 2013 - 2 livello — Quesito 17
tipo: quesito
quesito_id: quesito_src_archimede_2013_febb_2livello__Q17
parent: src_archimede_2013_febb_2livello
competition: Archimede Gara di Febbraio 2013 - 2 livello
family: archimede
year: '2013'
level: 2 livello
country: Italia
modalita: individuale
quesito: '17'
summary: parallela per P bisecata e PQ biseca la base minore
topics:
  - topic_geometria_piana
methods:
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2013
  - livello/2-livello
  - topic/geometria_piana
  - gara/individuale
---

*parallela per P bisecata e PQ biseca la base minore*

![[src_archimede_2013_febb_2livello__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.8]
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (Q) at (3,9);
  \coordinate (D) at (1.35,4.05);
  \coordinate (C) at (4.65,4.05);
  \coordinate (P) at (3,2.613);
  \coordinate (X) at (0.871,2.613);
  \coordinate (Y) at (5.129,2.613);
  \coordinate (M) at (3,4.05);
  \draw (A) -- (B) -- (Q) -- cycle;
  \draw (D) -- (C);
  \draw (A) -- (C);
  \draw (B) -- (D);
  \draw (X) -- (Y);
  \draw (Q) -- (P);
  \fill (P) circle (1.5pt);
  \fill (M) circle (1.5pt);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (Q) {$Q$};
  \node[left] at (D) {$D$};
  \node[right] at (C) {$C$};
  \node[below] at (P) {$P$};
  \node[left] at (X) {$X$};
  \node[right] at (Y) {$Y$};
  \node[above] at (M) {$M$};
\end{tikzpicture}
\end{document}
```

> ESERCIZIO DIMOSTRATIVO
> Sia ABCD un trapezio che non sia un parallelogramma.
> Siano P il punto d’incontro delle
> diagonali e Q il punto di intersezione dei prolungamenti dei lati obliqui.
> (a) Si tracci la parallela alle basi passante per il punto P e siano X e Y i punti di incontro di
> essa con i lati obliqui: si dimostri che XP = Y P.
> (b) Si dimostri che la retta PQ interseca la base minore nel suo punto medio.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** apri PDF p.7
