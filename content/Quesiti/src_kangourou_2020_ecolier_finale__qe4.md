---
title: Kangourou 2020 Finale nazionale Ecolier — Quesito E4
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2020_ecolier_finale__QE4
parent: src_kangourou_2020_ecolier_finale
competition: Kangourou 2020 Finale nazionale Ecolier
family: kangourou
year: '2020'
level: kangourou
country: Italia
modalita: individuale
quesito: E4
summary: Somma dei quattro numeri di Giulia (somme uguali sulle diagonali)
answer: '22'
topics:
  - topic_aritmetica
skills:
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2020
  - livello/kangourou
  - topic/aritmetica
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Somma dei quattro numeri di Giulia (somme uguali sulle diagonali)*

![[src_kangourou_2020_ecolier_finale__probE4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw[line width=2pt] (0.25,0) -- (1.75,0);
  \draw[line width=2pt] (0.25,2) -- (1.75,2);
  \draw[line width=2pt] (0,0.25) -- (0,1.75);
  \draw[line width=2pt] (2,0.25) -- (2,1.75);
  \draw[line width=2pt] (1.79,1.79) -- (1.21,1.21);
  \draw[line width=2pt] (0.79,0.79) -- (0.21,0.21);
  \draw[line width=2pt, dotted] (0.21,1.79) -- (0.79,1.21);
  \draw[line width=2pt, dotted] (1.21,0.79) -- (1.79,0.21);
  \draw[fill=white] (0,0) circle (0.25);
  \draw[fill=white] (2,0) circle (0.25);
  \draw[fill=white] (0,2) circle (0.25);
  \draw[fill=white] (2,2) circle (0.25);
  \filldraw[fill=gray!40] (1,1) circle (0.3);
  \node at (1,1) {11};
\end{tikzpicture}
\end{document}
```

> Giulia deve scrivere un numero in ogni cerchio bianco della figura qui a fianco. Vuole fare in modo che la somma dei quattro numeri che scriverà sia uguale sia alla somma dei tre numeri che compariranno nei tre cerchi collegati dalla linea tratteggiata, sia alla somma dei tre numeri che compariranno nei tre cerchi collegati dalla linea a puntini. Quanto vale la somma dei quattro numeri che scriverà Giulia?
> 
> (vedi figura)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 22
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1VUBD9s41NCMylc2DpExxWccVy-xFuGrT/view)


<span class="qlang-split" data-lang="en"></span>


*sum of the four Julian numbers (equal sums on the diagonals) *

![[src_kangourou_2020_ecolier_finale__probE4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw[line width=2pt] (0.25,0) -- (1.75,0);
  \draw[line width=2pt] (0.25,2) -- (1.75,2);
  \draw[line width=2pt] (0,0.25) -- (0,1.75);
  \draw[line width=2pt] (2,0.25) -- (2,1.75);
  \draw[line width=2pt] (1.79,1.79) -- (1.21,1.21);
  \draw[line width=2pt] (0.79,0.79) -- (0.21,0.21);
  \draw[line width=2pt, dotted] (0.21,1.79) -- (0.79,1.21);
  \draw[line width=2pt, dotted] (1.21,0.79) -- (1.79,0.21);
  \draw[fill=white] (0,0) circle (0.25);
  \draw[fill=white] (2,0) circle (0.25);
  \draw[fill=white] (0,2) circle (0.25);
  \draw[fill=white] (2,2) circle (0.25);
  \filldraw[fill=gray!40] (1,1) circle (0.3);
  \node at (1,1) {11};
\end{tikzpicture}
\end{document}
```

> Julia has to write a number in each white circle of the figure next to her. He wants to make sure that the sum of the four numbers he writes is equal to both the sum of the three numbers that will appear in the three circles connected by the dotted line, and the sum of the three numbers that will appear in the three circles connected by the dotted line. How much is the sum of the four numbers that Julia will write?
> 
> (see figure)

**Answer:** 22
[[src_kangourou_2020_ecolier_finale__QE4]]
