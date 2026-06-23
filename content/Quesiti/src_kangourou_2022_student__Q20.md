---
title: Kangourou 2022 Student — Gara 17 marzo — Quesito 20
tipo: quesito
quesito_id: quesito_src_kangourou_2022_student__Q20
parent: src_kangourou_2022_student
competition: Kangourou 2022 Student — Gara 17 marzo
family: kangourou
year: '2022'
level: kangourou
country: Italia
modalita: individuale
quesito: '20'
summary: punti a coordinate intere
answer: C
topics:
  - topic_geometria_analitica
  - topic_aritmetica
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/kangourou
  - topic/geometria_analitica
  - topic/aritmetica
  - gara/individuale
---

*punti a coordinate intere*

![[src_kangourou_2022_student__prob20.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.5]
  \draw[->] (-5.5,0) -- (6,0) node[right] {$x$};
  \draw[->] (0,-5.5) -- (0,6) node[above] {$y$};
  \draw (0,0) circle (5);
  \foreach \x in {-5,-4,-3,-2,-1,1,2,3,4,5} \draw[thin] (\x,0.1) -- (\x,-0.1);
  \foreach \y in {-5,-4,-3,-2,-1,1,2,3,4,5} \draw[thin] (0.1,\y) -- (-0.1,\y);
  \node[below right] at (5,0) {$5$};
  \node[left] at (0,5) {$5$};
\end{tikzpicture}
\end{document}
```

> Il cerchio in figura è centrato nell’origine di un 
> sistema cartesiano ortogonale e ha raggio 5. Quanti punti 
> della circonferenza che lo delimita hanno entrambe le 
> coordinate intere?  
> A) 4  
>   
> B) 8  
>   
> C) 12    
> D) 16               
> E) 2 
> I quesiti dal N. 21 al N. 30 valgono 5 
> punti ciascuno

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/1FVXTeP7yJ2BOAV7-CyvpmHU_gHT1CPsr/view)
