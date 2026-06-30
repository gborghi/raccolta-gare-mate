---
title: Kangourou 2016 gara 17 marzo Benjamin — Quesito 23
tipo: quesito
quesito_id: quesito_src_kangourou_2016_marzo_benjamin__Q23
parent: src_kangourou_2016_marzo_benjamin
competition: Kangourou 2016 gara 17 marzo Benjamin
family: kangourou
year: '2016'
level: kangourou
country: Italia
modalita: individuale
quesito: '23'
summary: Max tasselli ritagliabili da quadrato 5x5
answer: D
topics:
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_colorazione
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2016
  - livello/kangourou
  - topic/geometria_piana
  - topic/combinatoria
  - gara/individuale
---

*Max tasselli ritagliabili da quadrato 5x5*

![[src_kangourou_2016_marzo_benjamin__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % 3 squares bottom row + 1 square on top of rightmost
  \draw (0,0) -- (3,0) -- (3,2) -- (2,2) -- (2,1) -- (0,1) -- cycle;
  \draw (1,0) -- (1,1);
  \draw (2,0) -- (2,1);
  \draw (2,1) -- (3,1);
\end{tikzpicture}
\end{document}
```

> Qual è il massimo numero di tasselli come quello in figura 
> (eventualmente ribaltato) che possono essere ritagliati da un 
> quadrato 5×5?
> A) 2	
> 	
> B) 4	
> 	
> C) 5	
> 	
> D) 6	
> 	
> E) 7
> 

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1nld6l3RD6emhTglIXueL7F2OJGTBOKRG/view)
