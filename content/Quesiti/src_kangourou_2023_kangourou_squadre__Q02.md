---
title: Kangourou Squadre 2023 Kangourou Finale 1 — Quesito 2
tipo: quesito
quesito_id: quesito_src_kangourou_2023_kangourou_squadre__Q02
parent: src_kangourou_2023_kangourou_squadre
competition: Kangourou Squadre 2023 Kangourou Finale 1
family: kangourou
year: '2023'
level: squadre
country: Italia
modalita: squadre
quesito: '2'
summary: Segmento AE in trapezio isoscele con triangolo
answer: '0070'
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
  - anno/2023
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

*Segmento AE in trapezio isoscele con triangolo*

![[src_kangourou_2023_kangourou_squadre__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.025]
  \coordinate (A) at (0,0);
  \coordinate (B) at (220,0);
  \coordinate (C) at (200,60);
  \coordinate (D) at (20,60);
  \coordinate (E) at (70,0);
  \coordinate (F) at (120,60);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \fill[gray!30] (D) -- (E) -- (F) -- cycle;
  \draw (D) -- (E) -- (F) -- cycle;
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below] at (E) {$E$};
  \node[above] at (F) {$F$};
\end{tikzpicture}
\end{document}
```

> Il trapezio  
> Il trapezio ABCD in figura è isoscele; anche il triangolo DEF 
> ombreggiato è isoscele e la sua area è un quarto dell’area del 
> trapezio. La base maggiore e la base minore del trapezio ABCD 
> misurano rispettivamente 220 e 180 cm. Quanti centimetri misura 
> il segmento AE?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0070
**Fonte:** apri PDF p.1
