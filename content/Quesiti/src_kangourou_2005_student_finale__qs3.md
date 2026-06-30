---
title: Kangourou 2005 - Student (finale nazionale) — Quesito S3
tipo: quesito
quesito_id: quesito_src_kangourou_2005_student_finale__QS3
parent: src_kangourou_2005_student_finale
competition: Kangourou 2005 - Student (finale nazionale)
family: kangourou
year: '2005'
level: kangourou
country: Italia
modalita: individuale
quesito: S3
summary: Angolo ottuso con incentro e circocentro simmetrici
answer: 108 gradi
topics:
  - topic_geometria_piana
methods:
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2005
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Angolo ottuso con incentro e circocentro simmetrici*

![[src_kangourou_2005_student_finale__probS3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
% Obtuse triangle ABC (angle C = 108 deg) inscribed in circumcircle, center O
% Incircle with center I, tangent to AB at T
% I and O are symmetric with respect to side AB
% R=2, A and B symmetric, C at top
\coordinate (O) at (0,0);
\coordinate (A) at (-1.902, 0.618);
\coordinate (B) at (1.902, 0.618);
\coordinate (C) at (0, 2);
\coordinate (T) at (0, 0.618);
\coordinate (I) at (0, 1.236);
% Circumcircle
\draw (O) circle [radius=2];
% Triangle
\draw (A)--(B)--(C)--cycle;
% Incircle (radius 0.618)
\draw (I) circle [radius=0.618];
% Dashed vertical axis (I to T to O)
\draw[dashed] (I)--(T);
\draw[dashed] (T)--(O);
% Labels
\node[above] at (C) {$C$};
\node[left] at (A) {$A$};
\node[right] at (B) {$B$};
\fill (O) circle [radius=0.04] node[below right] {$O$};
\fill (I) circle [radius=0.04] node[right] {$I$};
\fill (T) circle [radius=0.04] node[below right] {$T$};
\end{tikzpicture}
\end{document}
```

> I centri della circonferenza inscritta e di quella circoscritta a un triangolo ottusangolo sono simmetrici rispetto ad uno dei suoi lati. Quanto misura in gradi l'angolo ottuso?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 108 gradi
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17jy_hcOypk4l2PIs-W5a2ozUpvF5XmFy/view)
