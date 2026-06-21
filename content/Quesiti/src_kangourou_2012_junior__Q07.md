---
title: Kangourou 2012 Junior (gara marzo) — Quesito 7
tipo: quesito
quesito_id: quesito_src_kangourou_2012_junior__Q07
parent: src_kangourou_2012_junior
competition: Kangourou 2012 Junior (gara marzo)
family: kangourou
year: '2012'
level: kangourou
country: Italia
modalita: individuale
quesito: '7'
summary: Area del quadrilatero dato dalle mediane
answer: E
topics:
  - topic_geometria_piana
methods:
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2012
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Area del quadrilatero dato dalle mediane*

![[src_kangourou_2012_junior__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.6]
  \coordinate (A) at (-3,0);
  \coordinate (B) at (0,6);
  \coordinate (C) at (3,0);
  \coordinate (M) at (-1.5,3);
  \coordinate (N) at (1.5,3);
  \coordinate (P) at (0,2);
  \fill[gray!30] (A)--(M)--(P)--cycle;
  \fill[gray!30] (C)--(N)--(P)--cycle;
  \fill[gray!60] (A)--(P)--(C)--cycle;
  \draw[thick] (A)--(B)--(C)--cycle;
  \draw (M)--(C);
  \draw (N)--(A);
  \node[above left] at (M) {$M$};
  \node[above right] at (N) {$N$};
  \node at (-1.2,1) {$3$};
  \node at (1.2,1) {$3$};
  \node at (0,0.7) {$6$};
  \node at (0,4) {$?$};
\end{tikzpicture}
\end{document}
```

> Osserva la figura: M e N sono i punti medi dei
> due lati di uguale lunghezza di un triangolo isoscele,
> che risulta suddiviso dalle due mediane in tre triangoli e in un quadrilatero. Di ciascuno dei tre triangoli è indicata l’area. Qual è l’area del quadrilatero?
> A) 3
> B) 4
> C) 7
> D) 8
> E) Un numero diverso dai precedenti

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** apri PDF p.2
