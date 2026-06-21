---
title: Kangourou Categoria Student 2023 — Quesito 19
tipo: quesito
quesito_id: quesito_src_kangourou_2023_student__Q19
parent: src_kangourou_2023_student
competition: Kangourou Categoria Student 2023
family: kangourou
year: '2023'
level: kangourou
country: Italia
modalita: individuale
quesito: '19'
summary: Distanza di E dal lato BC in trapezio rettangolo
answer: C
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
  - anno/2023
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Distanza di E dal lato BC in trapezio rettangolo*

![[src_kangourou_2023_student__prob19.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (4,3);
  \coordinate (D) at (3,3);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (C);
  \draw (B) -- (D);
  \coordinate (E) at (3.2,2.4);
  \fill (E) circle (1.5pt);
  \node[left] at (E) {$E$};
  \draw[dashed] (E) -- (4,2.4);
  \node[above] at (3.6,2.4) {$d$};
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> La figura mostra un trapezio rettangolo ABCD la cui base 
> AB misura 120 e la cui base CD misura 30. Sia E il punto in cui 
> si intersecano le diagonali. Qual è la distanza di E dal lato BC ? 
> A) 22	
> 	
> B) 23    		
> C) 24    		
> D) 25    		
> E) La misura dipende dalla distanza delle basi

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.3
