---
title: Kangourou 2004 - Student (marzo) — Quesito 22
tipo: quesito
quesito_id: quesito_src_kangourou_2004_student__Q22
parent: src_kangourou_2004_student
competition: Kangourou 2004 - Student (marzo)
family: kangourou
year: '2004'
level: kangourou
country: Italia
modalita: individuale
quesito: '22'
summary: Aree dei quattro triangoli in un parallelogramma
answer: A
topics:
  - topic_geometria_piana
methods:
  - method_casework
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2004
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Aree dei quattro triangoli in un parallelogramma*

![[src_kangourou_2004_student__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (5,2);
  \coordinate (D) at (1,2);
  \coordinate (P) at (2.8,0.8);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (P) -- (B);
  \draw (C) -- (P) -- (D);
  \node at (1.5,0.5) {$a$};
  \node at (3.2,0.3) {$b$};
  \node at (3.5,1.2) {$c$};
  \node at (2.0,1.5) {$d$};
\end{tikzpicture}
\end{document}
```

> Un parallelogramma è suddiviso in 4
> triangoli, seguendo un criterio analogo a
> quello mostrato in figura. Allora :
> A) le aree dei quattro triangoli, in m2 , 
> possono essere 4, 5, 8, 9         
> B) le aree dei quattro triangoli, in m2 , 
> possono essere  5, 6, 7, 12       
> C) le aree dei quattro triangoli, in m2 , possono essere 10, 11, 12, 19    
> D) le aree dei quattro triangoli, in m2 , possono essere: 11, 13, 15, 16
> E) nessuna delle precedenti affermazioni è corretta

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1c0DxcoZ2bea8xIkdznDVGGq9JkRNucyJ/view)
