---
title: Giochi di Archimede 2008 - Biennio — Quesito 16
tipo: quesito
quesito_id: quesito_src_archimede_2008_biennio__Q16
parent: src_archimede_2008_biennio
competition: Giochi di Archimede 2008 - Biennio
family: archimede
year: '2008'
level: 'biennio, triennio'
country: Italia
modalita: individuale
quesito: '16'
summary: Area delimitata da corde e arco in cerchio diviso in tre
answer: A
topics:
  - topic_geometria_piana
methods:
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2008
  - livello/biennio
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

*Area delimitata da corde e arco in cerchio diviso in tre*

![[src_archimede_2008_biennio__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) circle (2cm);
  \coordinate (A) at (150:2);
  \coordinate (B) at (30:2);
  \coordinate (C) at (270:2);
  \draw (A) -- (C);
  \draw (B) -- (C);
  \fill (A) circle (1pt);
  \fill (B) circle (1pt);
  \fill (C) circle (1pt);
  \node[above left] at (A) {$A$};
  \node[above right] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[above] at (90:2) {$D$};
\end{tikzpicture}
\end{document}
```

> Il raggio della circonferenza a fianco è di 5 cm; inoltre i punti A, B e C dividono la circonferenza in tre archi di uguale
> lunghezza. Calcolare l’area delimitata dalle corde AC e BC e
> dall’arco di estremi A e B contenente D.
>
> - **(A)** 25( π 3 + √ 3 2 ) cm2,
> - **(B)** 25( π 6 + √ 3) cm2,
> - **(C)** 15( π 3 + √ 3 2 ) cm2,
> - **(D)** 25 √ 3 2 cm2,
> - **(E)** 25 2 ( π 3 + √ 3 2 ) cm2. C A B D

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.2
**Anche in triennio:** apri PDF p.2
