---
title: Kangourou Coppa a squadre 2024 - Finale 2 (Cervia) — Quesito 1
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_squadre_2024_finale__Q01
parent: src_kangourou_squadre_2024_finale
competition: Kangourou Coppa a squadre 2024 - Finale 2 (Cervia)
family: kangourou
year: '2024'
level: squadre
country: Italia
modalita: squadre
quesito: '1'
summary: Perimetro pentagono ombreggiato da triangoli equilateri annidati
answer: '0121'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---
<div class="qlang-switch" data-default="it"></div>


*Perimetro pentagono ombreggiato da triangoli equilateri annidati*

![[src_kangourou_squadre_2024_finale__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=4]
  \coordinate (A) at (0.5, 0.866);
  \coordinate (B) at (0, 0);
  \coordinate (C) at (1, 0);
  \coordinate (F) at (0.5, 0);
  \coordinate (G) at (0.75, 0);
  \coordinate (D) at (0.75, 0.433);
  \coordinate (E) at (0.625, 0.2165);
  \fill[gray!30] (A) -- (B) -- (G) -- (E) -- (D) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (E) -- (F) -- (G) -- cycle;
  \draw[thick] (D) -- (E);
  \node[above] at (A) {$A$};
  \node[left] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[left] at (E) {$E$};
  \node[below] at (F) {$F$};
  \node[below] at (G) {$G$};
\end{tikzpicture}
\end{document}
```

> Il pentagono  
> Osservate la figura. ABC e EFG sono triangoli equilateri; F è il punto medio 
> di BC, G è il punto medio di FC e D è allineato con F ed E. Il perimetro del 
> triangolo ABC è 132. Qual è il perimetro del pentagono ombreggiato ABGED?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0121
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*Pentagon perimeter shaded by nested equilateral triangles*

![[src_kangourou_squadre_2024_finale__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=4]
  \coordinate (A) at (0.5, 0.866);
  \coordinate (B) at (0, 0);
  \coordinate (C) at (1, 0);
  \coordinate (F) at (0.5, 0);
  \coordinate (G) at (0.75, 0);
  \coordinate (D) at (0.75, 0.433);
  \coordinate (E) at (0.625, 0.2165);
  \fill[gray!30] (A) -- (B) -- (G) -- (E) -- (D) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (E) -- (F) -- (G) -- cycle;
  \draw[thick] (D) -- (E);
  \node[above] at (A) {$A$};
  \node[left] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[left] at (E) {$E$};
  \node[below] at (F) {$F$};
  \node[below] at (G) {$G$};
\end{tikzpicture}
\end{document}
```

> Look at the figure. ABC and EFG are equilateral triangles; F is the mean point of BC, G is the mean point of FC and D is aligned with F and E. The perimeter of the ABC triangle is 132. What is the perimeter of the shaded pentagon ABGED?

**Answer:** 0121
[[src_kangourou_squadre_2024_finale__Q01]]
