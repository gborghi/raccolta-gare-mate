---
title: Kangourou Squadre 2022 Junior Finale 1 — Quesito 6
tipo: quesito
quesito_id: quesito_src_kangourou_2022_junior_squadre__Q06
parent: src_kangourou_2022_junior_squadre
competition: Kangourou Squadre 2022 Junior Finale 1
family: kangourou
year: '2022'
level: squadre
country: Italia
modalita: squadre
quesito: '6'
summary: Lunghezza BC dato aree triangoli in rettangolo
answer: '0015'
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

*Lunghezza BC dato aree triangoli in rettangolo*

![[src_kangourou_2022_junior_squadre__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,3);
  \coordinate (B) at (4,3);
  \coordinate (C) at (4,0);
  \coordinate (D) at (0,0);
  \coordinate (E) at (2.56,1.08);
  \fill[yellow!80] (A) -- (B) -- (E) -- cycle;
  \fill[blue!30] (A) -- (C) -- (D) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- (D) -- cycle;
  \draw[thick] (A) -- (C);
  \draw[thick] (B) -- (E);
  \draw (E) -- ++(0.15,0.2) -- ++(-0.12,0.09) -- ++(-0.15,-0.2);
  \node[above left] at (A) {$A$};
  \node[above right] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[below left] at (D) {$D$};
  \node[below right] at (E) {$E$};
  \node at (2.8,2.3) {\textbf{96}};
  \node at (1.2,1.3) {\textbf{150}};
\end{tikzpicture}
\end{document}
```

> Triangoli rettangoli  
> Con riferimento alla figura, ABCD è un rettangolo, BE è 
> perpendicolare alla diagonale AC e le aree dei triangoli ABE e 
> ACD sono rispettivamente 96 e 150 m2. Qual è la lunghezza in 
> metri di BC?  
>  
>  
> 96 
> 150 
> D
> B
> A 
> C 
> E 
> 
>  
> 2

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0015
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GRkoKlR7UzS2vN9Rw8S5kI9fFvcXtFvX/view)
