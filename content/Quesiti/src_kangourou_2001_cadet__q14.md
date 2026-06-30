---
title: Kangourou 2001 - Cadet (15 marzo) — Quesito 14
tipo: quesito
quesito_id: quesito_src_kangourou_2001_cadet__Q14
parent: src_kangourou_2001_cadet
competition: Kangourou 2001 - Cadet (15 marzo)
family: kangourou
year: '2001'
level: kangourou
country: Italia
modalita: individuale
quesito: '14'
summary: Angolo BED con CE massima
answer: D
topics:
  - topic_geometria_piana
methods:
  - method_estremalita
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

*Angolo BED con CE massima*

![[src_kangourou_2001_cadet__prob14.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (D) at (4,0);
  \coordinate (C) at (1,1.732);
  \draw (A) node[below left] {A} -- (B) node[below] {B} -- (D) node[below right] {D};
  \draw (A) -- (C) node[above] {C} -- (B);
\end{tikzpicture}
\end{document}
```

> ABC è un triangolo equilatero e B è il punto
> medio del segmento AD (v. figura). Un punto E
> è scelto nello stesso piano in modo che DE  =
> AB. Si sa che la distanza tra C ed E è la massima possibile. Quanto misura
> l'angolo BED?
>
> - **(A)** 45°
> - **(B)** 30°
> - **(C)** 20°
> - **(D)** 15°
> - **(E)** 10°.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1Unyra_qQ9OtPb6r_NhtKaBMBDyYJLbHd/view)
