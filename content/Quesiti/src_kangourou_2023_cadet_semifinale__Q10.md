---
tipo: quesito
quesito_id: quesito_src_kangourou_2023_cadet_semifinale__Q10
parent: src_kangourou_2023_cadet_semifinale
competition: Kangourou 2023 Cadet — Semifinale individuale
family: kangourou
year: '2023'
level: kangourou
country: Italia
quesito: '10'
summary: misura angolo ACB
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
---

# Kangourou 2023 Cadet — Semifinale individuale — Quesito 10

*misura angolo ACB*

![[src_kangourou_2023_cadet_semifinale__prob10.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0, 2);
  \coordinate (B) at (3, 0);
  \coordinate (C) at (3, 2);
  \coordinate (E) at (27/13, 8/13);
  \coordinate (D) at (3, 1.092);
  \coordinate (O) at (2.3, 1.46);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[dash dot] (C) -- (E);
  \draw[dashed] (A) -- (D);
  \node[above left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[below left] at (E) {$E$};
  \node[right] at (D) {$D$};
  \node[above right] at (O) {$O$};
\end{tikzpicture}
\end{document}
```

> (Punti 4) Nel triangolo ABC in figura, l’altezza EC condotta da C incontra la 
> bisettrice AD dell’angolo BAC nel punto O. L’angolo ABC misura 60 gradi, l’angolo 
> AOE ne misura 70. Quanti gradi misura l’angolo ACB?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** apri PDF p.2
