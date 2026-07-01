---
title: Kangourou 2017 Benjamin (semifinale individuale) — Quesito 3
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2017_benjamin_semifinale__Q03
parent: src_kangourou_2017_benjamin_semifinale
competition: Kangourou 2017 Benjamin (semifinale individuale)
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '3'
summary: Area del triangolo piu esteso su griglia 4x4 di puntini
answer: E
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
  - anno/2017
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Area del triangolo piu esteso su griglia 4x4 di puntini*

![[src_kangourou_2017_benjamin_semifinale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) rectangle (3,3);
  \foreach \x in {0,1,2,3} {
    \foreach \y in {0,1,2,3} {
      \fill (\x,\y) circle (3pt);
    }
  }
\end{tikzpicture}
\end{document}
```

> (Punti 3) In figura è rappresentato un foglio quadrato su cui sono disegnati 16 puntini
> che sono vertici di 9 quadratini congruenti di lato 1 cm. Puoi tracciare vari triangoli usan­
> do i puntini come vertici. Quanti centimetri quadrati misura la superficie del più esteso
> triangolo che puoi tracciare in questo modo?
>
> - **(A)** 3
> - **(B)** 3,5
> - **(C)** 4
> - **(D)** 6
> - **(E)** Nessuna delle precedenti misure è corretta

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


< MSK0/>Area of the largest triangle on a 4x4 grid of points< MSK1/>

![[src_kangourou_2017_benjamin_semifinale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) rectangle (3,3);
  \foreach \x in {0,1,2,3} {
    \foreach \y in {0,1,2,3} {
      \fill (\x,\y) circle (3pt);
    }
  }
\end{tikzpicture}
\end{document}
```

> The figure shows a square sheet on which 16 points are drawn, which are vertices of 9 squares corresponding to a side of 1 cm. You can plot various triangles using points as vertices. How many square centimeters is the area of the widest triangle you can trace this way?
>
> - **(A)** 3
> - **(B)** 3,5
> - **(C)** 4
> - **(D)** 6
> - **(E)** None of the above measures are correct

**Answer:** E
[[src_kangourou_2017_benjamin_semifinale__Q03]]
