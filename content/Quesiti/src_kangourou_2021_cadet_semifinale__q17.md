---
title: Kangourou 2021 Cadet - semifinale — Quesito 17
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2021_cadet_semifinale__Q17
parent: src_kangourou_2021_cadet_semifinale
competition: Kangourou 2021 Cadet - semifinale
family: kangourou
year: '2021'
level: kangourou
country: Italia
modalita: individuale
quesito: '17'
summary: Max stanze visitabili nel triangolo lato 100
answer: '9901'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_colorazione
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2021
  - livello/kangourou
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Max stanze visitabili nel triangolo lato 100*

![[src_kangourou_2021_cadet_semifinale__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw[thick] (0,0) -- (3,0) -- (1.5,2.598) -- cycle;
  \draw (0.5,0.866) -- (2.5,0.866);
  \draw (1.0,1.732) -- (2.0,1.732);
  \draw (1,0) -- (0.5,0.866);
  \draw (2,0) -- (1.5,0.866);
  \draw (1.5,0.866) -- (1.0,1.732);
  \draw (2.5,0.866) -- (2.0,1.732);
  \draw (1,0) -- (1.5,0.866);
  \draw (2,0) -- (2.5,0.866);
  \draw (0.5,0.866) -- (1.0,1.732);
  \draw (1.5,0.866) -- (2.0,1.732);
\end{tikzpicture}
\end{document}
```

> (7 punti) Un triangolo equilatero di lato n =100 è ripartito in 
> triangoli equilateri di lato 1 secondo lo schema che ti suggerisce la 
> figura, in cui è rappresentato il caso n = 3. Immagina che ogni 
> triangolo piccolo rappresenti una stanza e che, in ogni suo muro 
> condiviso con una stanza adiacente, ci sia una porta. Scegliendo 
> opportunamente la stanza da cui partire, qual è il massimo numero di 
> stanze che puoi visitare se puoi passare una sola volta da ogni stanza 
> che visiti?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 9901
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/192haU1dJ1xBqMu3y_ohONdnFUA6Bf3rI/view)


<span class="qlang-split" data-lang="en"></span>


*Max rooms to be visited in the triangle side 100*

![[src_kangourou_2021_cadet_semifinale__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw[thick] (0,0) -- (3,0) -- (1.5,2.598) -- cycle;
  \draw (0.5,0.866) -- (2.5,0.866);
  \draw (1.0,1.732) -- (2.0,1.732);
  \draw (1,0) -- (0.5,0.866);
  \draw (2,0) -- (1.5,0.866);
  \draw (1.5,0.866) -- (1.0,1.732);
  \draw (2.5,0.866) -- (2.0,1.732);
  \draw (1,0) -- (1.5,0.866);
  \draw (2,0) -- (2.5,0.866);
  \draw (0.5,0.866) -- (1.0,1.732);
  \draw (1.5,0.866) -- (2.0,1.732);
\end{tikzpicture}
\end{document}
```

> (7 points) An equilateral triangle of side n =100 is divided into equilateral triangles of side 1 according to the pattern suggested by the figure, in which case n = 3 is represented. Imagine that each small triangle represents a room and that in each of its walls shared with an adjacent room, there is a door. When choosing the appropriate room to leave, what is the maximum number of rooms you can visit if you can only pass once from each room you visit?

**Answer:** 9901
[[src_kangourou_2021_cadet_semifinale__Q17]]
