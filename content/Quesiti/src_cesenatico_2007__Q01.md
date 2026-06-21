---
title: XXIII Olimpiade Italiana Cesenatico 2007 — Quesito 1
tipo: quesito
quesito_id: quesito_src_cesenatico_2007__Q01
parent: src_cesenatico_2007
competition: XXIII Olimpiade Italiana Cesenatico 2007
family: archimede
year: '2007'
level: nazionale
country: Italia
modalita: individuale
quesito: '1'
summary: punti con somma distanze da rette/vertici minima
answer: (a) interno/bordo esagono; (b) il centro
topics:
  - topic_geometria_piana
methods:
  - method_disuguaglianze
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2007
  - livello/nazionale
  - topic/geometria_piana
  - gara/individuale
---

*punti con somma distanze da rette/vertici minima*

![[src_cesenatico_2007__prob1a.png]]
![[src_cesenatico_2007__prob1b.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (-1,-1.732);
  \coordinate (B) at (1,-1.732);
  \coordinate (C) at (2,0);
  \coordinate (D) at (1,1.732);
  \coordinate (E) at (-1,1.732);
  \coordinate (F) at (-2,0);
  \coordinate (P) at (0,0);
  \draw (A)--(B)--(C)--(D)--(E)--(F)--cycle;
  \draw (A)--(D); \draw (B)--(E); \draw (C)--(F);
  \fill (P) circle (1.5pt);
  \node[below] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[left] at (F) {$F$};
  \node[below right] at (P) {$P$};
\end{tikzpicture}
\end{document}
```

> Sia dato nel piano un esagono regolare. Per ogni punto P del piano, chiamiamo l(P) la somma delle sei
> distanze tra P e le rette su cui giacciono i lati dell’esagono, e v(P) la somma delle sei distanze di P dai
> vertici dell’esagono.
> (a) Per quali punti P del piano l(P) è minima?
> (b) Per quali punti P del piano v(P) è minima?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** (a) interno/bordo esagono; (b) il centro
**Fonte:** apri PDF p.1
