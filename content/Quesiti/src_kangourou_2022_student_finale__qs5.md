---
title: Kangourou 2022 Student — Finale (risposta aperta) — Quesito S5
tipo: quesito
quesito_id: quesito_src_kangourou_2022_student_finale__QS5
parent: src_kangourou_2022_student_finale
competition: Kangourou 2022 Student — Finale (risposta aperta)
family: kangourou
year: '2022'
level: kangourou
country: Italia
modalita: individuale
quesito: S5
summary: Asse di un segmento con metrica del max (distanza Chebyshev)
answer: descrizione luogo
topics:
  - topic_geometria_analitica
  - topic_insiemi_funzioni
methods:
  - method_coordinate
skills:
  - skill_astrazione
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/kangourou
  - topic/geometria_analitica
  - topic/insiemi_funzioni
  - gara/individuale
---

*Asse di un segmento con metrica del max (distanza Chebyshev)*

![[src_kangourou_2022_student_finale__probS5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw[->] (-2.2,0) -- (2.2,0) node[right] {$x$};
  \draw[->] (0,-2.2) -- (0,2.2) node[above] {$y$};
  \node[below left] at (0,0) {$O$};
  \fill (-1,0) circle (2pt) node[below] {$(-1,0)$};
  \fill  (1,0) circle (2pt) node[below] {$(1,0)$};
  % Upper shaded triangle
  \fill[blue!20] (0,1) -- (-1,2) -- (1,2) -- cycle;
  \draw (0,1) -- (-1,2) -- (1,2) -- cycle;
  % Lower shaded triangle
  \fill[blue!20] (0,-1) -- (-1,-2) -- (1,-2) -- cycle;
  \draw (0,-1) -- (-1,-2) -- (1,-2) -- cycle;
  % Dashed rectangles (Chebyshev balls)
  \draw[red,  dashed, thick] (0,-1) rectangle (2,1);
  \draw[blue, dashed, thick] (-2,-1) rectangle (0,1);
  % Line labels
  \node[above left]  at (-1,2)  {$y-1=-x$};
  \node[above right] at (1,2)   {$y-1=x$};
  \node[below left]  at (-1,-2) {$y+1=x$};
  \node[below right] at (1,-2)  {$y+1=-x$};
\end{tikzpicture}
\end{document}
```

> Nel piano dotato di un sistema cartesiano ortogonale monometrico $Oxy$, introduciamo una nuova nozione di distanza: la distanza del punto $(x, y)$ dal punto $(a, b)$ è il maggiore fra i numeri $|x-a|$ e $|y-b|$ (che possono coincidere). L'asse di un segmento viene definito, rispetto a questa nuova nozione di distanza, nel modo usuale, cioè come luogo dei punti equidistanti dagli estremi del segmento. Descrivi l'asse del segmento di estremi $(-1, 0)$ e $(1, 0)$ rispetto alla nuova nozione di distanza (NON rispetto alla distanza euclidea). (vedi figura)

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** descrizione luogo
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1xkM8usCvbEkYYISsMrLicq6kvtHNww5g/view)
