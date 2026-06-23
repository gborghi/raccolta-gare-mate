---
title: Kangourou 2012 squadre semifinale turno A — Quesito 3
tipo: quesito
quesito_id: quesito_src_kangourou_2012_squadre_semifinale__Q03
parent: src_kangourou_2012_squadre_semifinale
competition: Kangourou 2012 squadre semifinale turno A
family: kangourou
year: '2012'
level: squadre
country: Italia
modalita: squadre
quesito: '3'
summary: Percentuale bianca del trapezio colorato
answer: '42'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2012
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

*Percentuale bianca del trapezio colorato*

![[src_kangourou_2012_squadre_semifinale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.8]
  \coordinate (A) at (0,0);
  \coordinate (D) at (7,0);
  \coordinate (B) at (2,3);
  \coordinate (C) at (5,3);
  \coordinate (E) at (3.5,2.1);
  \fill[gray!50] (B) -- (C) -- (E) -- cycle;
  \fill[gray!50] (A) -- (D) -- (E) -- cycle;
  \draw (A) -- (D) -- (C) -- (B) -- cycle;
  \draw (A) -- (C);
  \draw (B) -- (D);
  \node[below] at (3.5,0) {7};
  \node[above] at (3.5,3) {3};
\end{tikzpicture}
\end{document}
```

> Il trapezio colorato 
> In figura vedete un trapezio, una parte del quale è stata colorata in grigio. La base maggiore del 
> trapezio è lunga 7 metri, la base minore è lunga 3 metri. Quale percentuale della superficie del  
> trapezio è rimasta bianca?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 42
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1jWvO_7IjC7nzhpSM0RUGkconfBzpdWG8/view)
