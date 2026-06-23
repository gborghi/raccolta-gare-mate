---
title: Gara Nazionale Classi Prime 2014 — Quesito 6
tipo: quesito
quesito_id: quesito_src_archimede_2014_classiprime__Q06
parent: src_archimede_2014_classiprime
competition: Gara Nazionale Classi Prime 2014
family: archimede
year: '2014'
level: ''
country: Italia
modalita: individuale
quesito: '6'
summary: Angolo APE in ottagono regolare con diagonali
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2014
  - topic/geometria_piana
  - gara/individuale
---

*Angolo APE in ottagono regolare con diagonali*

![[src_archimede_2014_classiprime__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (3,0);
  \coordinate (B) at (2.121,2.121);
  \coordinate (C) at (0,3);
  \coordinate (D) at (-2.121,2.121);
  \coordinate (E) at (-3,0);
  \coordinate (F) at (-2.121,-2.121);
  \coordinate (G) at (0,-3);
  \coordinate (H) at (2.121,-2.121);
  \coordinate (O) at (0,0);
  \coordinate (P) at (1.243,1.757);
  \draw (A)--(B)--(C)--(D)--(E)--(F)--(G)--(H)--cycle;
  \draw (A)--(C);
  \draw (B)--(E);
  \draw (C)--(O)--(A);
  \draw (O)--(B);
  \foreach \pt in {A,B,C,D,E,F,G,H,O,P} \fill (\pt) circle (1.6pt);
  \node[right] at (A) {$A$};
  \node[above right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[left] at (E) {$E$};
  \node[below left] at (F) {$F$};
  \node[below] at (G) {$G$};
  \node[below right] at (H) {$H$};
  \node[below] at (O) {$O$};
  \node[above left] at (P) {$P$};
\end{tikzpicture}
\end{document}
```

> Nell’ottagono regolare ABCDEFGH le diagonali AC e BE si intersecano nel punto P. Quanto vale l’angolo d
> APE?
> A 112, 5°
> B 120°
> C 117, 5°
> D 144°
> E 108°
> F 115, 5°

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1n3w-XtaAUypQE2nORLZ0vfSweJgCFb2P/view)
