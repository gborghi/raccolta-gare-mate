---
title: Kangourou 2018 Cadet - Finale nazionale Cervia — Quesito C6
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2018_cadet_finale__QC6
parent: src_kangourou_2018_cadet_finale
competition: Kangourou 2018 Cadet - Finale nazionale Cervia
family: kangourou
year: '2018'
level: kangourou
country: Italia
modalita: individuale
quesito: C6
summary: Area B in funzione di A nel pentagono regolare
answer: doppio di A
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
  - anno/2018
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Area B in funzione di A nel pentagono regolare*

![[src_kangourou_2018_cadet_finale__probC6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
\coordinate (P1) at (90:1);
\coordinate (P2) at (162:1);
\coordinate (P3) at (234:1);
\coordinate (P4) at (306:1);
\coordinate (P5) at (18:1);
\coordinate (I1) at (54:0.382);
\coordinate (I2) at (126:0.382);
\coordinate (I3) at (198:0.382);
\coordinate (I4) at (270:0.382);
\coordinate (I5) at (342:0.382);
\fill[gray!30] (P1)--(I1)--(I2)--cycle;
\fill[gray!30] (P3)--(I3)--(I4)--(I5)--(P4)--cycle;
\draw[thick] (P1)--(P2)--(P3)--(P4)--(P5)--cycle;
\draw (P1)--(P3);
\draw (P1)--(P4);
\draw (P2)--(P4);
\draw (P2)--(P5);
\draw (P3)--(P5);
\node at (0, 0.55) {$B$};
\node at (0, -0.22) {$A$};
\end{tikzpicture}
\end{document}
```

> In figura vedi un pentagono regolare di cui sono state tracciate quattro diagonali che individuano due regioni ombreggiate $A$ e $B$. Esprimi l'area di $B$ in dipendenza dall'area di $A$. (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** doppio di A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1awWRc26fxuhAuA2B9ihEhXsIlMGONtXu/view)


<span class="qlang-split" data-lang="en"></span>


*Area B as a function of A in the regular pentagon*

![[src_kangourou_2018_cadet_finale__probC6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
\coordinate (P1) at (90:1);
\coordinate (P2) at (162:1);
\coordinate (P3) at (234:1);
\coordinate (P4) at (306:1);
\coordinate (P5) at (18:1);
\coordinate (I1) at (54:0.382);
\coordinate (I2) at (126:0.382);
\coordinate (I3) at (198:0.382);
\coordinate (I4) at (270:0.382);
\coordinate (I5) at (342:0.382);
\fill[gray!30] (P1)--(I1)--(I2)--cycle;
\fill[gray!30] (P3)--(I3)--(I4)--(I5)--(P4)--cycle;
\draw[thick] (P1)--(P2)--(P3)--(P4)--(P5)--cycle;
\draw (P1)--(P3);
\draw (P1)--(P4);
\draw (P2)--(P4);
\draw (P2)--(P5);
\draw (P3)--(P5);
\node at (0, 0.55) {$B$};
\node at (0, -0.22) {$A$};
\end{tikzpicture}
\end{document}
```

> In the figure you can see a regular pentagon of which four diagonal lines have been drawn which identify two shaded regions $A$ and $B$. Express the area of $B$ depending on the area of $A$. (see figure)

**Answer:** doppio di A
[[src_kangourou_2018_cadet_finale__QC6]]
