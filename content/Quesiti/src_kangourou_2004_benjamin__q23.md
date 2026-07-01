---
title: Kangourou 2004 Benjamin (18 marzo) — Quesito 23
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2004_benjamin__Q23
parent: src_kangourou_2004_benjamin
competition: Kangourou 2004 Benjamin (18 marzo)
family: kangourou
year: '2004'
level: kangourou
country: Italia
modalita: individuale
quesito: '23'
summary: Secondo numero nelle 9 caselle (somma terne 21)
answer: B
topics:
  - topic_algebra
  - topic_aritmetica
skills:
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2004
  - livello/kangourou
  - topic/algebra
  - topic/aritmetica
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Secondo numero nelle 9 caselle (somma terne 21)*

![[src_kangourou_2004_benjamin__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\w{0.7}
  \foreach \i in {0,1,2,3,4,5,6,7,8} {
    \draw (\i*\w, 0) rectangle (\i*\w+\w, \w);
  }
  \node[font=\bfseries] at (0.5*\w, 0.5*\w) {7};
  \node[font=\bfseries] at (8.5*\w, 0.5*\w) {6};
\end{tikzpicture}
\end{document}
```

> In figura sono allineate 9 caselle: nella prima compare il numero
> 7 e nell'ultima il numero 6.  Che numero dobbiamo scrivere nella
> seconda, se vogliamo che, per ogni terna di caselle consecutive, la
> somma dei numeri che vi compaiono sia 21?
> A) 7       
> B) 8
> C) 6
> D) 10
> E) 21

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** B
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1lCyipLviIwkhD5xx1GnJVDe-Npb5ew6U/view)


<span class="qlang-split" data-lang="en"></span>


*Second number in 9 boxes (sum of 21 bits) *

![[src_kangourou_2004_benjamin__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\w{0.7}
  \foreach \i in {0,1,2,3,4,5,6,7,8} {
    \draw (\i*\w, 0) rectangle (\i*\w+\w, \w);
  }
  \node[font=\bfseries] at (0.5*\w, 0.5*\w) {7};
  \node[font=\bfseries] at (8.5*\w, 0.5*\w) {6};
\end{tikzpicture}
\end{document}
```

> In the figure, 9 boxes are aligned: the first contains the number 7 and the last contains the number 6. What number do we have to write in the second, if we want for every set of consecutive boxes, the sum of the numbers that appear to you to be 21? A) 7 B) 8 C) 6 D) 10 E) 21

**Answer:** B
[[src_kangourou_2004_benjamin__Q23]]
