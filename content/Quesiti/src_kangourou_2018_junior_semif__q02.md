---
title: Kangourou 2018 Semifinale Junior — Quesito 2
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2018_junior_semif__Q02
parent: src_kangourou_2018_junior_semif
competition: Kangourou 2018 Semifinale Junior
family: kangourou
year: '2018'
level: kangourou
country: Italia
modalita: individuale
quesito: '2'
summary: Lunghezza circonferenza C inscritta nell occhio
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
  - anno/2018
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Lunghezza circonferenza C inscritta nell occhio*

![[src_kangourou_2018_junior_semif__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Eye shape: two quarter-circle arcs (each 90 deg) meeting at tips (±1.5, 0)
  % Upper arc: center (0, -1.5), radius 2.12132, from 45 to 135 deg
  \draw (1.5,0) arc[start angle=45, end angle=135, radius=2.12132];
  % Lower arc: center (0, 1.5), radius 2.12132, from 225 to 315 deg
  \draw (-1.5,0) arc[start angle=225, end angle=315, radius=2.12132];
  % Inscribed circle C tangent to both arcs: center (0,0), radius 0.62132
  \filldraw[fill=black] (0,0) circle[radius=0.62132];
\end{tikzpicture}
\end{document}
```

> (Punti 3) L’occhio in figura è realizzato da due quarti di circonferenza 
> ciascuno di lunghezza 1 e dal cerchio C di raggio più grande possibile con­
> tenuto nella regione limitata da essi individuata. Quanto è lunga la circon­
> ferenza che delimita C?
> A) 2           B) π - 1            C) 3√2 - 2            D) 4√2 - π          
> E) Un numero diverso dai precedenti.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/17csch1-7f-cVvjGdqKXJQd6PNOelNdNG/view)


<span class="qlang-split" data-lang="en"></span>


*Length of circumference C inscribed in the eye*

![[src_kangourou_2018_junior_semif__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Eye shape: two quarter-circle arcs (each 90 deg) meeting at tips (±1.5, 0)
  % Upper arc: center (0, -1.5), radius 2.12132, from 45 to 135 deg
  \draw (1.5,0) arc[start angle=45, end angle=135, radius=2.12132];
  % Lower arc: center (0, 1.5), radius 2.12132, from 225 to 315 deg
  \draw (-1.5,0) arc[start angle=225, end angle=315, radius=2.12132];
  % Inscribed circle C tangent to both arcs: center (0,0), radius 0.62132
  \filldraw[fill=black] (0,0) circle[radius=0.62132];
\end{tikzpicture}
\end{document}
```

> (Documents 3) The eye in the figure is made up of two quarters of the circumference of each of the lengths 1 and the circle C of the largest possible radius contained in the region bounded by them. How long is the circumference of C? A) 2 B) π - 1 C) 3√2 - 2 D) 4√2 - π E) A number different from the previous ones.

**Answer:** E
[[src_kangourou_2018_junior_semif__Q02]]
