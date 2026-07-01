---
title: Kangourou 2022 Student — Finale (risposta aperta) — Quesito S4
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2022_student_finale__QS4
parent: src_kangourou_2022_student_finale
competition: Kangourou 2022 Student — Finale (risposta aperta)
family: kangourou
year: '2022'
level: kangourou
country: Italia
modalita: individuale
quesito: S4
summary: Area punti del pentagono a distanza >1 da un vertice
answer: √3/2 - π/3
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Area punti del pentagono a distanza >1 da un vertice*

![[src_kangourou_2022_student_finale__probS4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  % Regular pentagon ABCDE, circumradius ~ 0.8507, side 1
  \coordinate (A) at (0, 0.8507);
  \coordinate (B) at (-0.8090, 0.2629);
  \coordinate (C) at (-0.5, -0.6882);
  \coordinate (D) at (0.5, -0.6882);
  \coordinate (E) at (0.8090, 0.2629);
  \draw (A) -- (B) -- (C) -- (D) -- (E) -- cycle;
  \node[above] at (A) {$A$};
  \node[left]  at (B) {$B$};
  \node[below left]  at (C) {$C$};
  \node[below right] at (D) {$D$};
  \node[right] at (E) {$E$};
  % Circular arcs of radius 0.5 at each vertex (interior angle 108 deg)
  \draw[blue, dashed] (A) +(-36:0.5)  arc[start angle=-36,  end angle=-144, radius=0.5];
  \draw[blue, dashed] (B) +(36:0.5)   arc[start angle=36,   end angle=-72,  radius=0.5];
  \draw[blue, dashed] (C) +(108:0.5)  arc[start angle=108,  end angle=0,    radius=0.5];
  \draw[blue, dashed] (D) +(180:0.5)  arc[start angle=180,  end angle=72,   radius=0.5];
  \draw[blue, dashed] (E) +(144:0.5)  arc[start angle=144,  end angle=36,   radius=0.5];
  \node at (0.05, 0.0) {$F$};
\end{tikzpicture}
\end{document}
```

> Determina l'area della regione luogo dei punti interni ad un pentagono regolare di lato 1 che sono a distanza maggiore di 1 da almeno uno dei vertici. (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** √3/2 - π/3
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1xkM8usCvbEkYYISsMrLicq6kvtHNww5g/view)


<span class="qlang-split" data-lang="en"></span>


*Area of pentagon points at a distance >1 from a vertex*

![[src_kangourou_2022_student_finale__probS4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  % Regular pentagon ABCDE, circumradius ~ 0.8507, side 1
  \coordinate (A) at (0, 0.8507);
  \coordinate (B) at (-0.8090, 0.2629);
  \coordinate (C) at (-0.5, -0.6882);
  \coordinate (D) at (0.5, -0.6882);
  \coordinate (E) at (0.8090, 0.2629);
  \draw (A) -- (B) -- (C) -- (D) -- (E) -- cycle;
  \node[above] at (A) {$A$};
  \node[left]  at (B) {$B$};
  \node[below left]  at (C) {$C$};
  \node[below right] at (D) {$D$};
  \node[right] at (E) {$E$};
  % Circular arcs of radius 0.5 at each vertex (interior angle 108 deg)
  \draw[blue, dashed] (A) +(-36:0.5)  arc[start angle=-36,  end angle=-144, radius=0.5];
  \draw[blue, dashed] (B) +(36:0.5)   arc[start angle=36,   end angle=-72,  radius=0.5];
  \draw[blue, dashed] (C) +(108:0.5)  arc[start angle=108,  end angle=0,    radius=0.5];
  \draw[blue, dashed] (D) +(180:0.5)  arc[start angle=180,  end angle=72,   radius=0.5];
  \draw[blue, dashed] (E) +(144:0.5)  arc[start angle=144,  end angle=36,   radius=0.5];
  \node at (0.05, 0.0) {$F$};
\end{tikzpicture}
\end{document}
```

> Determine the area of the region where the interior points on a regular pentagon on side 1 are more than 1 distance from at least one of the vertices. (see figure)

**Answer:** √3/2 - π/3
[[src_kangourou_2022_student_finale__QS4]]
