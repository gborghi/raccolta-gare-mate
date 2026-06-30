---
title: Kangourou 2007 Benjamin finale (maggio) — Quesito B1
tipo: quesito
quesito_id: quesito_src_kangourou_2007_benjamin_maggio__QB1
parent: src_kangourou_2007_benjamin_maggio
competition: Kangourou 2007 Benjamin finale (maggio)
family: kangourou
year: '2007'
level: kangourou
country: Italia
modalita: individuale
quesito: B1
summary: Area del triangolo ADE (parallelogramma)
answer: '1,5 cm^2'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2007
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Area del triangolo ADE (parallelogramma)*

![[src_kangourou_2007_benjamin_maggio__probB1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (5,0);
  \coordinate (D) at (1.2,2);
  \coordinate (C) at (6.2,2);
  \coordinate (E) at (3.7,2);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (E);
  \draw (E) -- (B);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[above] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> Se il parallelogramma $ABCD$ ha area $7 \ \text{cm}^2$, e il triangolo $EBC$ ha area $2 \ \text{cm}^2$, quanto misura l'area del triangolo $ADE$ in figura? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 1,5 cm^2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbmAAkHVqbo7EOEVBYt8x1-cdr8_snEU/view)
