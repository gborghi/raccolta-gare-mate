---
title: Kangourou 2012 Junior (gara marzo) — Quesito 6
tipo: quesito
quesito_id: quesito_src_kangourou_2012_junior__Q06
parent: src_kangourou_2012_junior
competition: Kangourou 2012 Junior (gara marzo)
family: kangourou
year: '2012'
level: kangourou
country: Italia
modalita: individuale
quesito: '6'
summary: Distanza del punto E dalla retta g
answer: C
topics:
  - topic_geometria_piana
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

*Distanza del punto E dalla retta g*

![[src_kangourou_2012_junior__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.6]
  \coordinate (A) at (4,0);
  \coordinate (B) at (4,4);
  \coordinate (C) at (0,4);
  \coordinate (D) at (0,0);
  \coordinate (E) at (-8,4);
  \draw[thin] (4,-0.5)--(4,5.5) node[above] {$g$};
  \draw (E)--(C)--(D)--cycle;
  \draw[thick] (A)--(B)--(C)--(D)--cycle;
  \node[below right] at (A) {$A$};
  \node[right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[below left] at (D) {$D$};
  \node[above] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> Osserva la figura: il quadrato ABCD ha lato
> di lunghezza 4 cm e ha la stessa area del
> triangolo ECD. Qual è la distanza del punto E
> dalla retta g?
> A) 8 cm
> B) (4+ 2       ) cm
> C) 12 cm
> D) 10      cm
> E) Non si può rispondere senza conoscere la posizione di E

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.2
