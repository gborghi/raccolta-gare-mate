---
tipo: quesito
quesito_id: quesito_src_kangourou_2014_benjamin__Q24
parent: src_kangourou_2014_benjamin
competition: Kangourou 2014 marzo Benjamin
family: kangourou
year: '2014'
level: kangourou
country: Italia
modalita: individuale
quesito: '24'
summary: Lunghezza AD nel triangolo suddiviso in 4 aree uguali
answer: D
topics:
  - topic_geometria_piana
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

# Kangourou 2014 marzo Benjamin — Quesito 24

*Lunghezza AD nel triangolo suddiviso in 4 aree uguali*

![[src_kangourou_2014_benjamin__prob24.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (D) at (1.5,0);
  \coordinate (F) at (3.5,0);
  \coordinate (B) at (5.5,0);
  \coordinate (C) at (4.2,4);
  \coordinate (E) at (4.2,2);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (D) -- (C);
  \draw (E) -- (C);
  \draw (D) -- (E);
  \draw (F) -- (E);
  \draw (E) -- (B);
  \node[below left] at (A) {$A$};
  \node[below] at (D) {$D$};
  \node[below] at (F) {$F$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[right] at (E) {$E$};
  \node[below] at (4.5,0) {$15$};
\end{tikzpicture}
\end{document}
```

> Il triangolo ABC in figura è suddiviso nei quattro trian­
> goli ADC, DEC, FED e FBE che hanno tutti la stessa area 
> (la figura è solo indicativa). Il segmento FB è lungo 15 me­
> tri. Quanti metri misura il segmento AD ?
> A) 7             B) 8              C) 9              D) 10            E) 11

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** apri PDF p.4
