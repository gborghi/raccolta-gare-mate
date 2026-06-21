---
title: Giochi di Archimede 2014 - Triennio (Testo 1) — Quesito 20
tipo: quesito
quesito_id: quesito_src_archimede_2014_triennio__Q20
parent: src_archimede_2014_triennio
competition: Giochi di Archimede 2014 - Triennio (Testo 1)
family: archimede
year: '2014'
level: triennio
country: Italia
modalita: individuale
quesito: '20'
summary: Lunghezza DF in triangolo equilatero diviso in due aree
answer: A
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2014
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

*Lunghezza DF in triangolo equilatero diviso in due aree*

![[src_archimede_2014_triennio__prob20.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=5]
  \coordinate (A) at (0,0);
  \coordinate (B) at (1,0);
  \coordinate (C) at (0.5,0.866);
  \coordinate (D) at (0.1464,0.2537);
  \coordinate (E) at (0.8536,0.2537);
  \coordinate (F) at (0.3536,0.6124);
  \coordinate (G) at (0.7071,0);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (D) -- (E);
  \draw (G) -- (F);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[left] at (D) {$D$};
  \node[right] at (E) {$E$};
  \node[above left] at (F) {$F$};
  \node[below] at (G) {$G$};
\end{tikzpicture}
\end{document}
```

> Un triangolo equilatero ABC di lato 1 m viene diviso in due
> parti di area uguale dal segmento DE parallelo ad AB, come
> in figura; ugualmente, viene diviso in due parti di area uguale
> dal segmento GF parallelo a BC.
> Quanti metri è lungo il
> segmento DF?
> (A) (
> √
> 2 −1), (B)
> √
> 2
> 2 , (C) (1 −
> √
> 3
> 2 ), (D)
> √
> 3
> 3 , (E) 1
> 2.
> F
> B
> C
> A
> E
> G
> D

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.2
