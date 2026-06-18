---
tipo: quesito
quesito_id: quesito_src_kangourou_2020_benjamin_finale__QB5
parent: src_kangourou_2020_benjamin_finale
competition: Kangourou 2020 Finale nazionale Benjamin
family: kangourou
year: '2020'
level: kangourou
country: Italia
modalita: individuale
quesito: B5
summary: Distanza di P da A per tragitto minimo C-M (riflessione)
answer: 8 mm
topics:
  - topic_geometria_piana
methods:
  - method_simmetria
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

# Kangourou 2020 Finale nazionale Benjamin — Quesito B5

*Distanza di P da A per tragitto minimo C-M (riflessione)*

![[src_kangourou_2020_benjamin_finale__probB5.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) rectangle (2,3);
  \draw (1,0) -- (1,3);
  \draw (0,1.5) -- (2,1.5);
  \node[below left] at (0,0) {$A$};
  \node[below] at (1,0) {$M$};
  \node[below right] at (2,0) {$B$};
  \node[above right] at (2,3) {$C$};
  \node[above left] at (0,3) {$D$};
  \filldraw (1,0) circle (2pt);
  \filldraw (2,3) circle (2pt);
\end{tikzpicture}
\end{document}
```

> In figura vedi un rettangolo $ABCD$ di lati 12 mm e 24 mm in cui una mediana interseca in $M$ il lato $AB$. Devo andare da $C$ a $M$ toccando il segmento $AD$ in un punto $P$: se voglio percorrere il tragitto più breve possibile, quanti millimetri deve distare $P$ da $A$? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 8 mm
**Fonte:** apri PDF p.1
