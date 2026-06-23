---
title: Kangourou 2022 Benjamin semifinale individuale — Quesito 14
tipo: quesito
quesito_id: quesito_src_kangourou_2022_benjamin_semifinale__Q14
parent: src_kangourou_2022_benjamin_semifinale
competition: Kangourou 2022 Benjamin semifinale individuale
family: kangourou
year: '2022'
level: kangourou
country: Italia
modalita: individuale
quesito: '14'
summary: Misura dell'angolo a+b dalla figura
answer: 0048
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Misura dell'angolo a+b dalla figura*

![[src_kangourou_2022_benjamin_semifinale__prob14.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw[thick] (0,-1.5) -- (0,1.5);
  \draw[thick] (-1.5,0) -- (1.5,0);
  \draw[thick] (0,0) -- ({1.4*cos(72)},{1.4*sin(72)});
  \draw[thick] (0,0) -- ({1.4*cos(54)},{1.4*sin(54)});
  \draw[thick] (0,0) -- ({1.4*cos(36)},{1.4*sin(36)});
  \draw[thick] (0,0) -- ({1.4*cos(330)},{1.4*sin(330)});
  \draw[thick] (0,0) -- ({1.4*cos(210)},{1.4*sin(210)});
  \node at ({0.7*cos(81)},{0.7*sin(81)}) {$a$};
  \node at ({0.7*cos(63)},{0.7*sin(63)}) {$a$};
  \node at ({0.7*cos(45)},{0.7*sin(45)}) {$a$};
  \node at ({0.9*cos(18)},{0.9*sin(18)}) {$2a$};
  \node at ({0.8*cos(345)},{0.8*sin(345)}) {$b$};
  \node at ({0.8*cos(300)},{0.8*sin(300)}) {$2b$};
  \node at ({0.8*cos(240)},{0.8*sin(240)}) {$2b$};
  \node at ({0.7*cos(150)},{0.7*sin(150)}) {$4b$};
\end{tikzpicture}
\end{document}
```

> (6 punti) La figura mostra alcuni angoli e le loro misure in gradi. 
> Quanti gradi misura l’angolo a + b?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0048
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1WLuxevdVfb6yR3VvoVIhFETdy5CmwHJ_/view)
