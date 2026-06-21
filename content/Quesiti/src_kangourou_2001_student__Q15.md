---
title: Kangourou 2001 - Student (15 marzo) — Quesito 15
tipo: quesito
quesito_id: quesito_src_kangourou_2001_student__Q15
parent: src_kangourou_2001_student
competition: Kangourou 2001 - Student (15 marzo)
family: kangourou
year: '2001'
level: kangourou
country: Italia
modalita: individuale
quesito: '15'
summary: Vettore coincidente nell'esagono regolare
answer: E
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2001
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Vettore coincidente nell'esagono regolare*

![[src_kangourou_2001_student__prob15.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (-1,-1.732);
  \coordinate (B) at (1,-1.732);
  \coordinate (C) at (2,0);
  \coordinate (D) at (1,1.732);
  \coordinate (E) at (-1,1.732);
  \coordinate (F) at (-2,0);
  \draw (A)--(B)--(C)--(D)--(E)--(F)--cycle;
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[above left] at (E) {$E$};
  \node[left] at (F) {$F$};
\end{tikzpicture}
\end{document}
```

> ABCDEF è un esagono regolare.  Allora il vettore
> coincide con il vettore

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** apri PDF p.4
