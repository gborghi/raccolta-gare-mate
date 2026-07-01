---
title: Kangourou 2021 Junior Semifinale individuale — Quesito 13
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2021_junior_semifinale__Q13
parent: src_kangourou_2021_junior_semifinale
competition: Kangourou 2021 Junior Semifinale individuale
family: kangourou
year: '2021'
level: kangourou
country: Italia
modalita: individuale
quesito: '13'
summary: Massimo numero di stanze visitabili in triangolo n=100
answer: '9901'
topics:
  - topic_combinatoria
methods:
  - method_colorazione
  - method_grafi
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2021
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Massimo numero di stanze visitabili in triangolo n=100*

![[src_kangourou_2021_junior_semifinale__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  % Equilateral triangle n=3, subdivided into 9 unit equilateral triangles
  % Grid points: p(i,j) = (i + j/2, j*sqrt(3)/2) for i+j <= 3, i,j >= 0

  % Horizontal segments (constant j)
  \draw (0,0) -- (1,0) -- (2,0) -- (3,0);
  \draw (0.5,0.866) -- (1.5,0.866) -- (2.5,0.866);
  \draw (1,1.732) -- (2,1.732);

  % Left-leaning segments (constant i)
  \draw (0,0) -- (0.5,0.866) -- (1,1.732) -- (1.5,2.598);
  \draw (1,0) -- (1.5,0.866) -- (2,1.732);
  \draw (2,0) -- (2.5,0.866);

  % Right-leaning segments (constant i+j)
  \draw (3,0) -- (2.5,0.866) -- (2,1.732) -- (1.5,2.598);
  \draw (2,0) -- (1.5,0.866) -- (1,1.732);
  \draw (1,0) -- (0.5,0.866);
\end{tikzpicture}
\end{document}
```

> (6 punti) Un triangolo equilatero di lato n =100 è ripartito 
> in triangoli equilateri di lato 1 secondo lo schema che ti 
> suggerisce la figura, in cui è rappresentato il caso n = 3. 
> Immagina che ogni triangolo piccolo rappresenti una stanza e 
> che, in ogni suo muro condiviso con una stanza adiacente, ci sia 
> una porta. Scegliendo opportunamente la stanza da cui partire, 
> qual è il massimo numero di stanze che puoi visitare se puoi 
> passare una sola volta da ogni stanza che visiti?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 9901
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1GoDhUy1jRCZDEodIhDemC22Gf3TP9oCU/view)


<span class="qlang-split" data-lang="en"></span>


*Maximum number of rooms to be visited in triangle n=100*

![[src_kangourou_2021_junior_semifinale__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  % Equilateral triangle n=3, subdivided into 9 unit equilateral triangles
  % Grid points: p(i,j) = (i + j/2, j*sqrt(3)/2) for i+j <= 3, i,j >= 0

  % Horizontal segments (constant j)
  \draw (0,0) -- (1,0) -- (2,0) -- (3,0);
  \draw (0.5,0.866) -- (1.5,0.866) -- (2.5,0.866);
  \draw (1,1.732) -- (2,1.732);

  % Left-leaning segments (constant i)
  \draw (0,0) -- (0.5,0.866) -- (1,1.732) -- (1.5,2.598);
  \draw (1,0) -- (1.5,0.866) -- (2,1.732);
  \draw (2,0) -- (2.5,0.866);

  % Right-leaning segments (constant i+j)
  \draw (3,0) -- (2.5,0.866) -- (2,1.732) -- (1.5,2.598);
  \draw (2,0) -- (1.5,0.866) -- (1,1.732);
  \draw (1,0) -- (0.5,0.866);
\end{tikzpicture}
\end{document}
```

> (6 points) An equilateral triangle of side n =100 is divided into equilateral triangles of side 1 according to the pattern suggested by the figure, in which case n = 3 is represented. Imagine that each small triangle represents a room and that in each of its walls shared with an adjacent room, there is a door. When choosing the appropriate room to leave, what is the maximum number of rooms you can visit if you can only pass once from each room you visit?

**Answer:** 9901
[[src_kangourou_2021_junior_semifinale__Q13]]
