---
tipo: quesito
quesito_id: quesito_src_kangourou_2017_student_marzo__Q11
parent: src_kangourou_2017_student_marzo
competition: Kangourou 2017 Student - Gara 16 marzo
family: kangourou
year: '2017'
level: kangourou
country: Italia
quesito: '11'
summary: Area triangolo ABC con cerchi tangenti
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2017
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou 2017 Student - Gara 16 marzo — Quesito 11

*Area triangolo ABC con cerchi tangenti*

![[src_kangourou_2017_student_marzo__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \draw (0,0) circle (3);
  \draw (5,0) circle (2);
  \draw (1.8,3.566) circle (1);
  \node at (0,0) {$A$};
  \node at (5,0) {$B$};
  \node at (1.8,3.566) {$C$};
  \fill (0,0) circle (1.5pt);
  \fill (5,0) circle (1.5pt);
  \fill (1.8,3.566) circle (1.5pt);
  \draw (0,0) -- (5,0) -- (1.8,3.566) -- cycle;
\end{tikzpicture}
\end{document}
```

> Tre cerchi, di centri A, B, C e raggi rispettivamente 
> 3, 2 e 1, sono a due a due tangenti. Qual è l’area del 
> triangolo ABC ?
> A) 6	
> 	
> B) 4√3	 	
> C) 3√2	
> D) 9	
> 	
> E) 2√6

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.2
