---
title: Kangourou 2011 Junior (gara marzo) — Quesito 2
tipo: quesito
quesito_id: quesito_src_kangourou_2011_junior__Q02
parent: src_kangourou_2011_junior
competition: Kangourou 2011 Junior (gara marzo)
family: kangourou
year: '2011'
level: kangourou
country: Italia
modalita: individuale
quesito: '2'
summary: Area del trapezio dato rettangolo ombreggiato 13
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2011
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Area del trapezio dato rettangolo ombreggiato 13*

![[src_kangourou_2011_junior__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \coordinate (BL) at (0, 0);
  \coordinate (BR) at (5, 0);
  \coordinate (TR) at (4, 1.5);
  \coordinate (TL) at (1.5, 1.5);
  \coordinate (A) at (0.75, 0.75);
  \coordinate (B) at (4.5, 0.75);
  \fill[gray!40] (0.75, 0) rectangle (4.5, 0.75);
  \draw (0.75, 0) rectangle (4.5, 0.75);
  \draw[thick] (BL) -- (BR) -- (TR) -- (TL) -- cycle;
  \filldraw (A) circle (1.5pt);
  \filldraw (B) circle (1.5pt);
  \node[above left] at (A) {$A$};
  \node[above right] at (B) {$B$};
\end{tikzpicture}
\end{document}
```

> In figura vedi un trapezio. A e B sono i
> punti medi dei lati obliqui e l’area del rettangolo ombreggiato vale 13 cm2. Quanti centimetri quadrati misura l’area del trapezio?
> A) 24
> B) 25
> C) 26
> D) 27
> E) 28

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.1
