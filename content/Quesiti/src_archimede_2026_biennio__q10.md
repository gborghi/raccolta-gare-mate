---
title: Giochi di Archimede 2026 - Biennio — Quesito 10
tipo: quesito
quesito_id: quesito_src_archimede_2026_biennio__Q10
parent: src_archimede_2026_biennio
competition: Giochi di Archimede 2026 - Biennio
family: archimede
year: '2026'
level: biennio
country: Italia
modalita: individuale
quesito: '10'
summary: Area quadrilatero CDEF con lati perpendicolari
answer: B
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2026
  - livello/biennio
  - topic/geometria_piana
  - gara/individuale
---

*Area quadrilatero CDEF con lati perpendicolari*

![[src_archimede_2026_biennio__prob10.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.25]
  \coordinate (D) at (0,0);
  \coordinate (C) at (0,15);
  \coordinate (E) at (20,0);
  \coordinate (F) at (24.93,13.10);
  \draw (D)--(C)--(F)--(E)--cycle;
  \draw (1.2,0)--(1.2,1.2)--(0,1.2);
  \node[left] at (C) {$C$};
  \node[below left] at (D) {$D$};
  \node[below] at (E) {$E$};
  \node[right] at (F) {$F$};
  \node[left] at (0,7.5) {$15$};
  \node[below] at (10,0) {$20$};
  \node[above] at (12,14.5) {$25$};
  \node[right] at (22.5,6.5) {$14$};
\end{tikzpicture}
\end{document}
```

> Nel quadrilatero CDEF, i lati CD e DE sono tra loro
> perpendicolari. Le lunghezze (in mm) dei lati sono le
> seguenti: CD = 15,
> DE = 20,
> EF = 14,
> FC = 25.
> Quanti mm2 misura l’area del quadrilatero CDEF ?
> D
> E
> F
> C
> 15
> 20
> 14
> 25
>
> - **(A)** 324
> - **(B)** 318
> - **(C)** 306
> - **(D)** 308
> - **(E)** 304

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1P1KucAyr87TDEYECzIGrLze5Bc8c3UAH/view)
