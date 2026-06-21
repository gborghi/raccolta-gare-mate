---
title: Gara Nazionale Classi Prime 2020 — Quesito 12
tipo: quesito
quesito_id: quesito_src_garaprime_2020__Q12
parent: src_garaprime_2020
competition: Gara Nazionale Classi Prime 2020
family: archimede
year: '2020'
level: ''
country: Italia
modalita: individuale
quesito: '12'
summary: Area del trapezio ABCD in un ottagono regolare
answer: A
topics:
  - topic_geometria_piana
methods:
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2020
  - topic/geometria_piana
  - gara/individuale
---

*Area del trapezio ABCD in un ottagono regolare*

![[src_garaprime_2020__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \def\r{2}
  \coordinate (A) at (-67.5:\r);
  \coordinate (B) at (-22.5:\r);
  \coordinate (C) at (22.5:\r);
  \coordinate (D) at (67.5:\r);
  \coordinate (E) at (112.5:\r);
  \coordinate (F) at (157.5:\r);
  \coordinate (G) at (202.5:\r);
  \coordinate (H) at (247.5:\r);
  \fill[gray!25] (A)--(B)--(C)--(D)--cycle;
  \draw (A)--(B)--(C)--(D)--(E)--(F)--(G)--(H)--cycle;
  \draw (A)--(D);
  \foreach \p in {A,B,C,D,E,F,G,H} \fill (\p) circle (1.2pt);
  \node[right] at (A) {$A$};
  \node[right] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[left]  at (F) {$F$};
  \node[left]  at (G) {$G$};
  \node[left]  at (H) {$H$};
\end{tikzpicture}
\end{document}
```

> L’ottagono regolare ABCDEFGH ha area 1440.
> Qual è l’area del trapezio
> ABCD?
> A 360
> B 480
> C 288
> D 432
> E 400
> F 384

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.1
