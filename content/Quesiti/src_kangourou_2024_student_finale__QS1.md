---
tipo: quesito
quesito_id: quesito_src_kangourou_2024_student_finale__QS1
parent: src_kangourou_2024_student_finale
competition: Kangourou 2024 Student finale
family: kangourou
year: '2024'
level: kangourou
country: Italia
quesito: S1
summary: Due triangoli con due lati e un'altezza uguali sono congruenti?
answer: 'no'
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
---

# Kangourou 2024 Student finale — Quesito S1

*Due triangoli con due lati e un'altezza uguali sono congruenti?*

![[src_kangourou_2024_student_finale__probS1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (B) at (0,0);
  \coordinate (D) at (4,0);
  \coordinate (A) at (1.5,3);
  \coordinate (C) at (1.8,0);
  \fill[blue!40] (A) -- (C) -- (D) -- cycle;
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (A) -- (C) -- (D) -- cycle;
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
**Risposta:** no
**Fonte:** apri PDF p.1
