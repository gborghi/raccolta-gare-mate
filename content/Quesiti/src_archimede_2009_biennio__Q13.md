---
title: Giochi di Archimede 2009 - Biennio — Quesito 13
tipo: quesito
quesito_id: quesito_src_archimede_2009_biennio__Q13
parent: src_archimede_2009_biennio
competition: Giochi di Archimede 2009 - Biennio
family: archimede
year: '2009'
level: 'biennio, triennio'
country: Italia
modalita: individuale
quesito: '13'
summary: Area coperta da rombo ruotato di 60 gradi
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2009
  - livello/biennio
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

*Area coperta da rombo ruotato di 60 gradi*

![[src_archimede_2009_biennio__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (C) at (0,2);
  \coordinate (D) at (-1.732,1);
  \coordinate (B) at (1.732,1);
  \draw (D)--(C)--(B)--(A)--cycle;
  \draw (A)--(C);
  \node[below] at (A) {$A$};
  \node[above] at (C) {$C$};
  \node[left] at (D) {$D$};
  \node[right] at (B) {$B$};
\end{tikzpicture}
\end{document}
```

> Nel rombo in figura, i triangoli ABC e ACD sono equilateri
> ed hanno lato di lunghezza 1 m. Se ruotiamo il rombo di 60°
> rispetto al vertice A, qual è l’area della superficie coperta
> dal rombo nella rotazione?
> (A) π
> 2 m2,
> (B) 1 m2,
> (C) π m2,
> (D) π
> 3 m2,
> (E) 2 m2.
> A
> B
> C
> D

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.2
**Anche in triennio:** apri PDF p.1
