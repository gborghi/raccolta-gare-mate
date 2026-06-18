---
tipo: quesito
quesito_id: quesito_src_kangourou_2013_benjamin__Q11
parent: src_kangourou_2013_benjamin
competition: Kangourou 2013 marzo Benjamin
family: kangourou
year: '2013'
level: kangourou
country: Italia
modalita: individuale
quesito: '11'
summary: Massimo numero di regioni con due quadrati
answer: D
topics:
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_casework
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2013
  - livello/kangourou
  - topic/geometria_piana
  - topic/combinatoria
  - gara/individuale
---

# Kangourou 2013 marzo Benjamin — Quesito 11

*Massimo numero di regioni con due quadrati*

![[src_kangourou_2013_benjamin__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!60] (0,0) circle (1.34);
  \begin{scope}
    \clip (1.67,0) circle (1.0);
    \clip (0,0) circle (1.34);
    \fill[gray!40] (0,0) circle (1.34);
  \end{scope}
  \fill[gray!25] (1.67,0) circle (1.0);
  \begin{scope}
    \clip (0,0) circle (1.34);
    \clip (1.67,0) circle (1.0);
    \fill[gray!50] (1.67,0) circle (1.0);
  \end{scope}
  \draw (0,0) circle (1.34);
  \draw (1.67,0) circle (1.0);
\end{tikzpicture}
\end{document}
```

> Osserva la figura: tracciando due cerchi, Stefano ha delimitato tre diverse regioni. Qual è il massimo numero di regioni 
> diverse che può delimitare tracciando due quadrati?
> A) 3	
>         B) 5	
> C) 7	
>       D) 9	           E) 12

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** D
**Fonte:** apri PDF p.3
