---
title: Kangourou Finale Junior 2024 — Quesito J2
tipo: quesito
quesito_id: quesito_src_kangourou_2024_junior_finale__QJ2
parent: src_kangourou_2024_junior_finale
competition: Kangourou Finale Junior 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: J2
summary: Due triangoli con due lati e un'altezza uguali sono congruenti
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Due triangoli con due lati e un'altezza uguali sono congruenti*

![[src_kangourou_2024_junior_finale__probJ2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (B) at (0,0);
  \coordinate (C) at (2,0);
  \coordinate (D) at (4.5,0);
  \coordinate (A) at (2,2.5);
  \fill[blue!30] (A) -- (C) -- (D) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (A) -- (C) -- (D) -- (A);
  \node[above] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[below right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Sono dati due triangoli. Le lunghezze di due dei lati dell'uno coincidono con le lunghezze di due dei lati dell'altro e l'altezza relativa al terzo lato di uno coincide con quella relativa al terzo lato dell'altro. I due triangoli risultano necessariamente congruenti?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** apri PDF p.1
