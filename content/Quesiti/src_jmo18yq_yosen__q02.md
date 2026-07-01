---
title: Japan Mathematical Olympiad 2008 — Yosen (Preliminary) — Quesito 2
tipo: quesito
lang: en
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
<div class="qlang-switch" data-default="en"></div>


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
**Fonte:** [apri PDF](https://drive.google.com/file/d/16UREagT5SatT4rS1Cd1YuLPR7swGJr05/view)


<span class="qlang-split" data-lang="it"></span>


*L'area del triangolo da una tangente al cerchio su un lato quadrato*

> C'è un quadrato $ABCD$ con lunghezza laterale $1$. Si deve $O$ essere il cerchio con $AD$ come diametro e prendere un punto $E$ sul lato $AB$ in modo che la linea $CE$ sia tangente a $O$. Trova l'area del triangolo $CBE$.

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

[[src_jmo18yq_yosen__Q02]]
