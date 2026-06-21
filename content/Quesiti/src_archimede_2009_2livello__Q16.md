---
title: Archimede Gara 2° livello 2009 (biennio/triennio) — Quesito 16
tipo: quesito
quesito_id: quesito_src_archimede_2009_2livello__Q16
parent: src_archimede_2009_2livello
competition: Archimede Gara 2° livello 2009 (biennio/triennio)
family: archimede
year: '2009'
level: 2 livello
country: Italia
modalita: individuale
quesito: '16'
summary: Angolo OMN doppio di ACB e rapporto tra aree
answer: dimostrazione
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2009
  - livello/2-livello
  - topic/geometria_piana
  - gara/individuale
---

*Angolo OMN doppio di ACB e rapporto tra aree*

![[src_archimede_2009_2livello__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (0,5);
  \coordinate (M) at (2,2.5);
  \coordinate (N) at (4.878,3.902);
  \coordinate (H) at (2.439,1.951);
  \coordinate (O) at (11.111,-8.889);
  \draw (A)--(B)--(C)--cycle;
  \draw (M) circle (3.20156);
  \draw (B)--(O);
  \draw (N)--(O);
  \draw[dashed] (A)--(N);
  \draw[dashed] (M)--(N);
  \foreach \p in {A,B,C,M,N,H,O}{\fill (\p) circle (2pt);}
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above left] at (C) {$C$};
  \node[above left] at (M) {$M$};
  \node[above right] at (N) {$N$};
  \node[below left] at (H) {$H$};
  \node[below right] at (O) {$O$};
\end{tikzpicture}
\end{document}
```

> ESERCIZIO DIMOSTRATIVO
> È dato un triangolo ABC, rettangolo in A e con AC cateto maggiore; sia M il punto medio di
> BC, N il simmetrico di A rispetto a BC, O l’intersezione fra la perpendicolare ad MN passante
> per N e la retta contenente BC.
> a) Dimostrare che l’angolo OMN è il doppio dell’angolo ACB.
> b) Dimostrare che il rapporto fra le aree di MNO e ABC vale un quarto del rapporto fra le
> lunghezze di BC e HM, dove H è il piede dell’altezza relativa all’ipotenusa di ABC.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** dimostrazione
**Fonte:** apri PDF p.5
