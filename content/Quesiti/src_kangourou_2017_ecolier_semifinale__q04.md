---
title: Kangourou 2017 Ecolier - Semifinale individuale — Quesito 4
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2017_ecolier_semifinale__Q04
parent: src_kangourou_2017_ecolier_semifinale
competition: Kangourou 2017 Ecolier - Semifinale individuale
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '4'
summary: Area dei quadrati piccoli in rettangolo suddiviso
answer: E
topics:
  - topic_geometria_piana
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


*Area dei quadrati piccoli in rettangolo suddiviso*

![[src_kangourou_2017_ecolier_semifinale__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.12]
  % S=12, M=16, L=24. Width=40, Height=48.
  % Rectangle ABCD: A=(0,0), B=(40,0), C=(40,48), D=(0,48)
  \draw[thick] (0,0) rectangle (40,48);
  % Large square top-left (24x24)
  \draw (0,24) rectangle (24,48);
  % 4 small squares (12x12) bottom-left
  \draw (0,0) rectangle (24,24);
  \draw (12,0) -- (12,24);
  \draw (0,12) -- (24,12);
  % 3 shaded medium squares right (16x16)
  \fill[gray!30] (24,0) rectangle (40,16);
  \fill[gray!30] (24,16) rectangle (40,32);
  \fill[gray!30] (24,32) rectangle (40,48);
  \draw (24,0) rectangle (40,16);
  \draw (24,16) rectangle (40,32);
  \draw (24,32) rectangle (40,48);
  % Labels
  \node[below left] at (0,0) {$A$};
  \node[below right] at (40,0) {$B$};
  \node[above right] at (40,48) {$C$};
  \node[above left] at (0,48) {$D$};
\end{tikzpicture}
\end{document}
```

> (Punti 4) Osserva la figura. Il rettangolo ABCD è suddiviso in otto quadrati
> di tre taglie diverse: il lato di ogni quadrato ombreggiato è lungo 16 cm. Quanti
> centimetri quadrati misura l’area di ciascuno dei quadretti più piccoli?
>
> - **(A)** 72
> - **(B)** 192
> - **(C)** 256
> - **(D)** 108
> - **(E)** 144

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


*Area of small squares in a subdivided rectangle*

![[src_kangourou_2017_ecolier_semifinale__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.12]
  % S=12, M=16, L=24. Width=40, Height=48.
  % Rectangle ABCD: A=(0,0), B=(40,0), C=(40,48), D=(0,48)
  \draw[thick] (0,0) rectangle (40,48);
  % Large square top-left (24x24)
  \draw (0,24) rectangle (24,48);
  % 4 small squares (12x12) bottom-left
  \draw (0,0) rectangle (24,24);
  \draw (12,0) -- (12,24);
  \draw (0,12) -- (24,12);
  % 3 shaded medium squares right (16x16)
  \fill[gray!30] (24,0) rectangle (40,16);
  \fill[gray!30] (24,16) rectangle (40,32);
  \fill[gray!30] (24,32) rectangle (40,48);
  \draw (24,0) rectangle (40,16);
  \draw (24,16) rectangle (40,32);
  \draw (24,32) rectangle (40,48);
  % Labels
  \node[below left] at (0,0) {$A$};
  \node[below right] at (40,0) {$B$};
  \node[above right] at (40,48) {$C$};
  \node[above left] at (0,48) {$D$};
\end{tikzpicture}
\end{document}
```

> (Point 4) Look at the figure. The ABCD rectangle is divided into eight squares of three different sizes: the side of each shaded square is 16 cm long. How many square centimetres is the area of each of the smallest squares?
>
> - **(A)** 72
> - **(B)** 192
> - **(C)** 256
> - **(D)** 108
> - **(E)** 144

**Answer:** E
[[src_kangourou_2017_ecolier_semifinale__Q04]]
