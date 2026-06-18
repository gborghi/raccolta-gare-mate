---
tipo: quesito
quesito_id: quesito_src_kangourou_2007_student_marzo__Q01
parent: src_kangourou_2007_student_marzo
competition: Kangourou 2007 Student (marzo)
family: kangourou
year: '2007'
level: kangourou
country: Italia
quesito: '1'
summary: Area triangolo ABC (zona ombreggiata)
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2007
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou 2007 Student (marzo) — Quesito 1

*Area triangolo ABC (zona ombreggiata)*

![[src_kangourou_2007_student_marzo__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw (0,0) circle (1);
  \coordinate (O) at (0,0);
  \coordinate (A) at (-1,0);
  \coordinate (C) at (1,0);
  \coordinate (B) at ({cos(130)},{sin(130)});
  \draw (A) -- (C);
  \fill[gray!50] (A) -- (B) -- (O) -- cycle;
  \draw (A) -- (B) -- (O) -- cycle;
  \draw (B) -- (C);
  \node[left] at (A) {$A$};
  \node[right] at (C) {$C$};
  \node[above] at (B) {$B$};
  \node[below] at (O) {$O$};
\end{tikzpicture}
\end{document}
```

> Nella figura, O è il centro del cerchio e l’area della zona
> ombreggiata è      . Qual è l’area del triangolo ABC?
> A)           
> B) 2       
> C) 5    
> D) 4     
> E)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.1
