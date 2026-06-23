---
title: Giochi di Archimede 2006 - Gara Triennio — Quesito 23
tipo: quesito
quesito_id: quesito_src_archimede_2006_triennio__Q23
parent: src_archimede_2006_triennio
competition: Giochi di Archimede 2006 - Gara Triennio
family: archimede
year: '2006'
level: triennio
country: Italia
modalita: individuale
quesito: '23'
summary: Area triangolo HCD da segmenti in un quadrato
answer: C
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2006
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

*Area triangolo HCD da segmenti in un quadrato*

![[src_archimede_2006_triennio__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (6,6);
  \coordinate (D) at (0,6);
  \coordinate (E) at (2,0);
  \coordinate (F) at (4,0);
  \coordinate (H) at (3,1.5);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (E) -- (C);
  \draw (F) -- (D);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below] at (E) {$E$};
  \node[below] at (F) {$F$};
  \node[above right] at (H) {$H$};
\end{tikzpicture}
\end{document}
```

> Nel quadrato ABCD, avente il lato lungo 12 m, il lato AB
> viene diviso in tre segmenti AE, EF e FB di uguale lunghezza. Si tracciano i segmenti EC e FD che si intersecano
> nel punto H. Quanto è l’area del triangolo HCD?
>
> - **(A)** 36 m2,
> - **(B)** 48 m2,
> - **(C)** 54 m2,
> - **(D)** 60 m2,
> - **(E)** 72 m2. C D E F A B H

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1a3nkp3X6eDfTP4CCiaNXR3spkcwUbj_2/view)
