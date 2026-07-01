---
title: Kangourou 2023 Cadet — Finale (risposta aperta) — Quesito C6
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2023_cadet_finale__QC6
parent: src_kangourou_2023_cadet_finale
competition: Kangourou 2023 Cadet — Finale (risposta aperta)
family: kangourou
year: '2023'
level: kangourou
country: Italia
modalita: individuale
quesito: C6
summary: lunghezza traiettoria di P
answer: (π/2)(1+√5)
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2023
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*lunghezza traiettoria di P*

![[src_kangourou_2023_cadet_finale__probC6.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (C) at (3,3);
  \coordinate (D) at (0,3);
  \coordinate (P) at (1.5,0);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \filldraw (P) circle (2pt);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below] at (P) {$P$};
\end{tikzpicture}
\end{document}
```

> Osserva la figura. Il segmento $AK$ è lungo 5, il lato del quadrato $ABCD$ è lungo 1 e il punto $P$ è il punto medio del lato $AB$. Facciamo ruotare il quadrato con perno nel vertice $B$ fino a quando il vertice $C$ viene a cadere (per la prima volta) sul segmento $AK$; a partire da questa posizione del quadrato, eseguiamo ora la stessa operazione con perno in $C$ e così via fino a che il lato $AB$ torna ad essere contenuto (per la prima volta dopo la prima rotazione) nel segmento $AK$. Fornisci un disegno qualitativo della traiettoria del punto $P$ che possa chiarire come è stata determinata e calcolane la lunghezza. (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** (π/2)(1+√5)
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1bJuiCbcoel8J7cfRIkcf2rQAovPdj2GI/view)


<span class="qlang-split" data-lang="en"></span>


*trajectory length of P*

![[src_kangourou_2023_cadet_finale__probC6.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (C) at (3,3);
  \coordinate (D) at (0,3);
  \coordinate (P) at (1.5,0);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \filldraw (P) circle (2pt);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below] at (P) {$P$};
\end{tikzpicture}
\end{document}
```

> Look at the figure. The $AK$ segment is length 5, the side of the square $ABCD$ is length 1 and the point $P$ is the middle point of the side $AB$. Let's rotate the square with a spindle in the $B$ vertex until the $C$ vertex falls (for the first time) on the $AK$ segment; starting from this position of the square, we now perform the same operation with a spindle in $C$ and so on until the $AB$ side is contained again (for the first time after the first rotation) in the $AK$ segment. Provide a qualitative drawing of the trajectory of the point $P$ that can clarify how it was determined and calculate the length. (see figure)

**Answer:** (π/2)(1+√5)
[[src_kangourou_2023_cadet_finale__QC6]]
