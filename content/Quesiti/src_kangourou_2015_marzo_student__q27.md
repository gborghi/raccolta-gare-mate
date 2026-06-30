---
title: Kangourou 2015 gara 19 marzo Student — Quesito 27
tipo: quesito
quesito_id: quesito_src_kangourou_2015_marzo_student__Q27
parent: src_kangourou_2015_marzo_student
competition: Kangourou 2015 gara 19 marzo Student
family: kangourou
year: '2015'
level: kangourou
country: Italia
modalita: individuale
quesito: '27'
summary: rapporto aree
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
  - anno/2015
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*rapporto aree*

![[src_kangourou_2015_marzo_student__prob27.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.4]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (C) at (3,2);
  \coordinate (D) at (0,2);
  \coordinate (M1) at (1.5,2);
  \coordinate (M2) at (0.75,1);
  \coordinate (M3) at (1.875,0.5);
  \coordinate (M4) at (2.4375,1.25);
  \draw[thick] (A) -- (B) -- (C) -- (D) -- cycle;
  \draw[thin] (A) -- (M1);
  \draw[thin] (B) -- (M2);
  \draw[thin] (C) -- (M3);
  \draw[thick] (M1) -- (M2) -- (M3) -- (M4) -- cycle;
  \fill (M1) circle (1.5pt);
  \fill (M2) circle (1.5pt);
  \fill (M3) circle (1.5pt);
  \fill (M4) circle (1.5pt);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[above] at (M1) {$M_1$};
  \node[left] at (M2) {$M_2$};
  \node[below] at (M3) {$M_3$};
  \node[right] at (M4) {$M_4$};
\end{tikzpicture}
\end{document}
```

> Nel rettangolo ABCD disegnato in fi­
> gura, M1  è il punto medio di DC, M2 è il 
> punto medio di AM1, M3 è il punto medio 
> di BM2 e M4 è il punto medio di CM3. Qual 
> è il rapporto tra l’area del quadrilatero 
> M1M2M3M4 e quella del rettangolo ABCD?
> A) 7/16	 	
> B) 3/16
> C) 7/32	 	
> D) 9/32	 	
> E) 1/5
> 

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/14QpE6Rn84V5s-LpsVRJxUJF9I1sKByTa/view)
