---
title: Kangourou 2008 - Student (gara 28 marzo) — Quesito 6
tipo: quesito
quesito_id: quesito_src_kangourou_2008_student_marzo__Q06
parent: src_kangourou_2008_student_marzo
competition: Kangourou 2008 - Student (gara 28 marzo)
family: kangourou
year: '2008'
level: kangourou
country: Italia
modalita: individuale
quesito: '6'
summary: Misura angolo ACB (triangolo isoscele con D)
answer: D
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2008
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Misura angolo ACB (triangolo isoscele con D)*

![[src_kangourou_2008_student_marzo__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (C) at ({1.854*0.809}, {1.854*0.588});
  \coordinate (D) at ({1.854}, 0);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (C) -- (D);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[below] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> È dato un triangolo isoscele ABC (CA = CB). Il punto D
> sul lato AB è tale che AD = AC e DB = DC (vedi figura).
> Allora la misura dell’angolo ACB è
> A) 98° 
> B) 100°
> C) 104°
> D) 108°
> E) 110°

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1MYmfkCn-GXkKWsIkiXzo_sU3G02yze2F/view)
