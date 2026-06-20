---
tipo: quesito
quesito_id: quesito_src_jmo18yq_yosen__Q02
parent: src_jmo18yq_yosen
competition: Japan Mathematical Olympiad 2008 — Yosen (Preliminary)
family: jmo
year: '2008'
level: JMO Yosen
country: Giappone
modalita: individuale
quesito: '2'
summary: Area of triangle from a tangent to the circle on a square side
qa_score: '5'
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/giappone
  - comp/jmo
  - anno/2008
  - livello/JMO-Yosen
  - topic/geometria_piana
  - gara/individuale
---

# Japan Mathematical Olympiad 2008 — Yosen (Preliminary) — Quesito 2

*Area of triangle from a tangent to the circle on a square side*

> There is a square $ABCD$ with side length $1$. Let $O$ be the circle having $AD$ as a diameter, and take a point $E$ on side $AB$ so that the line $CE$ is tangent to $O$. Find the area of triangle $CBE$.

```tikz
\begin{tikzpicture}[scale=2.2]
\coordinate (A) at (0,1);
\coordinate (B) at (0,0);
\coordinate (C) at (1,0);
\coordinate (D) at (1,1);
\coordinate (O) at (0.5,1);
\coordinate (E) at (0,0.25);
\draw (A)--(B)--(C)--(D)--cycle;
\draw (O) circle (0.5);
\draw (C)--(E);
\foreach \p/\n in {A/{above left},B/{below left},C/{below right},D/{above right},E/{left},O/{above}}{\fill (\p) circle (0.6pt) node[\n]{$\p$};}
\end{tikzpicture}
```

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Fonte:** apri PDF
