---
title: Kangourou 2003 Student (20 marzo) — Quesito 25
tipo: quesito
quesito_id: quesito_src_kangourou_2003_student__Q25
parent: src_kangourou_2003_student
competition: Kangourou 2003 Student (20 marzo)
family: kangourou
year: '2003'
level: kangourou
country: Italia
modalita: individuale
quesito: '25'
summary: Frazione area triangolo APM nel rettangolo
answer: E
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2003
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Frazione area triangolo APM nel rettangolo*

![[src_kangourou_2003_student__prob25.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (2,2);
  \coordinate (D) at (0,2);
  \coordinate (P) at (2,1);
  \coordinate (Q) at (1,2);
  \coordinate (R) at (0,1);
  \coordinate (M) at (0.5,1.5);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \fill[gray!30] (A) -- (P) -- (M) -- cycle;
  \draw (A) -- (P) -- (M) -- cycle;
  \draw (Q) -- (R);
  \filldraw (A) circle (1.5pt);
  \filldraw (B) circle (1.5pt);
  \filldraw (C) circle (1.5pt);
  \filldraw (D) circle (1.5pt);
  \filldraw[draw=black, fill=white] (P) circle (2pt);
  \filldraw[draw=black, fill=white] (Q) circle (2pt);
  \filldraw[draw=black, fill=white] (R) circle (2pt);
  \filldraw[draw=black, fill=white] (M) circle (2pt);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[right] at (P) {$P$};
  \node[above] at (Q) {$Q$};
  \node[left] at (R) {$R$};
  \node[above right] at (M) {$M$};
\end{tikzpicture}
\end{document}
```

> In un rettangolo ABCD,  siano P, Q e R i punti medi
> dei lati BC, CD e AD, rispettivamente, e sia M il punto
> medio del segmento QR. Quale frazione dell'area di
> ABCD è coperta dal triangolo APM?
> A) 1/4 
> B) 1/6
> C) 3/8
> D) 1/3
> E) 5/16

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** apri PDF p.5
