---
title: Kangourou 2015 gara 19 marzo Cadet — Quesito 17
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2015_marzo_cadet__Q17
parent: src_kangourou_2015_marzo_cadet
competition: Kangourou 2015 gara 19 marzo Cadet
family: kangourou
year: '2015'
level: kangourou
country: Italia
modalita: individuale
quesito: '17'
summary: area quadrato
answer: C
topics:
  - topic_geometria_piana
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
<div class="qlang-switch" data-default="it"></div>


*area quadrato*

![[src_kangourou_2015_marzo_cadet__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  % Square with top-right corner folded to the center
  % Square: (0,0),(1,0),(1,1),(0,1); Center: (0.5,0.5)
  % Fold crease: from (0.5,1) to (1,0.5)
  % Pentagon vertices: (0,0),(1,0),(1,0.5),(0.5,1),(0,1)
  % Folded triangle (darker): (0.5,0.5),(0.5,1),(1,0.5)
  \fill[gray!25] (0,0) -- (1,0) -- (1,0.5) -- (0.5,1) -- (0,1) -- cycle;
  \fill[gray!55] (0.5,0.5) -- (0.5,1) -- (1,0.5) -- cycle;
  \draw[thick] (0,0) -- (1,0) -- (1,0.5) -- (0.5,1) -- (0,1) -- cycle;
  \draw[thick] (0.5,1) -- (1,0.5);
  \draw[thick] (0.5,0.5) -- (0.5,1);
  \draw[thick] (0.5,0.5) -- (1,0.5);
\end{tikzpicture}
\end{document}
```

> Uno degli angoli di un quadrato è stato piegato in modo da 
> portare il vertice al centro del quadrato. L’area del pentagono ir­
> regolare così formato (vedi figura) e quella del quadrato sono 
> interi consecutivi. Qual è l’area del quadrato?
> A) 2	
> 	
> B) 4	
> 	
> C) 8	
> 	
> D) 16	
> 	
> E) 32

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1YFjkxNHfYQMQHrnbq7aZOresN8swX7ft/view)


<span class="qlang-split" data-lang="en"></span>


*square area*

![[src_kangourou_2015_marzo_cadet__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  % Square with top-right corner folded to the center
  % Square: (0,0),(1,0),(1,1),(0,1); Center: (0.5,0.5)
  % Fold crease: from (0.5,1) to (1,0.5)
  % Pentagon vertices: (0,0),(1,0),(1,0.5),(0.5,1),(0,1)
  % Folded triangle (darker): (0.5,0.5),(0.5,1),(1,0.5)
  \fill[gray!25] (0,0) -- (1,0) -- (1,0.5) -- (0.5,1) -- (0,1) -- cycle;
  \fill[gray!55] (0.5,0.5) -- (0.5,1) -- (1,0.5) -- cycle;
  \draw[thick] (0,0) -- (1,0) -- (1,0.5) -- (0.5,1) -- (0,1) -- cycle;
  \draw[thick] (0.5,1) -- (1,0.5);
  \draw[thick] (0.5,0.5) -- (0.5,1);
  \draw[thick] (0.5,0.5) -- (1,0.5);
\end{tikzpicture}
\end{document}
```

> One of the corners of a square has been folded so as to bring the top to the center of the square. The area of the irregular pentagon thus formed (see figure) and that of the square are consecutive integers. What's the area of the square? A) 2
> 	
> B) 4
> 	
> C) 8
> 	
> D) 16
> 	
> E) 32

**Answer:** C
[[src_kangourou_2015_marzo_cadet__Q17]]
