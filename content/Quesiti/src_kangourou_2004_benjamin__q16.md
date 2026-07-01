---
title: Kangourou 2004 Benjamin (18 marzo) — Quesito 16
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2004_benjamin__Q16
parent: src_kangourou_2004_benjamin
competition: Kangourou 2004 Benjamin (18 marzo)
family: kangourou
year: '2004'
level: kangourou
country: Italia
modalita: individuale
quesito: '16'
summary: Min quadratini da verniciare per asse simmetria
answer: B
topics:
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2004
  - livello/kangourou
  - topic/geometria_piana
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Min quadratini da verniciare per asse simmetria*

![[src_kangourou_2004_benjamin__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\w{0.8}
  \foreach \c/\r in {2/3, 3/3, 2/2, 0/1, 3/0} {
    \fill[black] (\c*\w, \r*\w) rectangle (\c*\w+\w, \r*\w+\w);
  }
  \draw[thick] (0,0) grid[step=\w] (4*\w, 4*\w);
  \draw[very thick] (0,0) rectangle (4*\w, 4*\w);
\end{tikzpicture}
\end{document}
```

> Qual è il minimo numero di quadratini che occorre
> verniciare ancora, se vogliamo che il quadrato grande
> in figura presenti almeno un asse di simmetria?
> A) 1
> B) 2
> C) 3
> D) 4
> E) 5

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1lCyipLviIwkhD5xx1GnJVDe-Npb5ew6U/view)


<span class="qlang-split" data-lang="en"></span>


*Min squares to be painted by axis of symmetry*

![[src_kangourou_2004_benjamin__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\w{0.8}
  \foreach \c/\r in {2/3, 3/3, 2/2, 0/1, 3/0} {
    \fill[black] (\c*\w, \r*\w) rectangle (\c*\w+\w, \r*\w+\w);
  }
  \draw[thick] (0,0) grid[step=\w] (4*\w, 4*\w);
  \draw[very thick] (0,0) rectangle (4*\w, 4*\w);
\end{tikzpicture}
\end{document}
```

> What's the minimum number of squares we need to paint if we want the large square in the figure to have at least one axis of symmetry? A) 1 B) 2 C) 3 D) 4 E) 5

**Answer:** B
[[src_kangourou_2004_benjamin__Q16]]
