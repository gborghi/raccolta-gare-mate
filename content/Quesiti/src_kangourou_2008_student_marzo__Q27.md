---
title: Kangourou 2008 - Student (gara 28 marzo) — Quesito 27
tipo: quesito
quesito_id: quesito_src_kangourou_2008_student_marzo__Q27
parent: src_kangourou_2008_student_marzo
competition: Kangourou 2008 - Student (gara 28 marzo)
family: kangourou
year: '2008'
level: kangourou
country: Italia
modalita: individuale
quesito: '27'
summary: Area regione ombreggiata nel quadrato (M medio)
answer: E
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
  - anno/2008
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Area regione ombreggiata nel quadrato (M medio)*

![[src_kangourou_2008_student_marzo__prob27.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (1,0);
  \coordinate (C) at (1,1);
  \coordinate (D) at (0,1);
  \coordinate (M) at (0.5,0);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (C);
  \draw (B) -- (D);
  \draw (D) -- (M);
  \draw (C) -- (M);
  \fill[gray!40] (0.5,0.5) -- ({1/3},{1/3}) -- (0.5,0) -- ({2/3},{1/3}) -- cycle;
  \node[below left] at (A) {$A$};
  \node[below] at (M) {$M$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Il quadrato ABCD ha il lato di lunghezza 1 e M è il
> punto medio di AB. L’area della regione ombreggiata vale
> A) 1/14    
> B) 1/16    
> C) 
> /18     
> D) 1/13    
> E) un valore diverso dai precedenti.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1MYmfkCn-GXkKWsIkiXzo_sU3G02yze2F/view)
