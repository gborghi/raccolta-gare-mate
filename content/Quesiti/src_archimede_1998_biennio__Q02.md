---
title: Giochi di Archimede 1998 - Biennio — Quesito 2
tipo: quesito
quesito_id: quesito_src_archimede_1998_biennio__Q02
parent: src_archimede_1998_biennio
competition: Giochi di Archimede 1998 - Biennio
family: archimede
year: '1998'
level: biennio
country: Italia
modalita: individuale
quesito: '2'
summary: Area del cerchio circoscritto a un rettangolo
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/1998
  - livello/biennio
  - topic/geometria_piana
  - gara/individuale
---

*Area del cerchio circoscritto a un rettangolo*

![[src_archimede_1998_biennio__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) circle (5);
  \coordinate (A) at (-4,3);
  \coordinate (D) at (4,3);
  \coordinate (C) at (4,-3);
  \coordinate (B) at (-4,-3);
  \draw (A)--(D)--(C)--(B)--cycle;
  \node[above left] at (A) {$A$};
  \node[above right] at (D) {$D$};
  \node[below right] at (C) {$C$};
  \node[below left] at (B) {$B$};
\end{tikzpicture}
\end{document}
```

> ABCD è un rettangolo con AB = 8 cm e BC = 6 cm.
> Quanto vale l’area del cerchio circoscritto?
> (A) 25π cm2
> (B) 24 cm2
> (C) 24π cm2
> (D) 50π cm2
> (E) nessuna delle precedenti.
> A
> B
> C
> D

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.1
