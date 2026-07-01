---
title: Kangourou Coppa squadre 2019 Finale — Quesito 12
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2019_squadre_finale__Q12
parent: src_kangourou_2019_squadre_finale
competition: Kangourou Coppa squadre 2019 Finale
family: kangourou
year: '2019'
level: squadre
country: Italia
modalita: squadre
quesito: '12'
summary: Minime diagonali per irrigidire reticolo 4x4
answer: '0007'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_estremalita
  - method_grafi
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2019
  - livello/squadre
  - topic/combinatoria
  - topic/logica
  - gara/squadre
---
<div class="qlang-switch" data-default="it"></div>


*Minime diagonali per irrigidire reticolo 4x4*

![[src_kangourou_2019_squadre_finale__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw[thick] (0,0) -- (1,0) -- (1,1) -- (0,1) -- cycle;
  \draw[fill=white] (0,0) circle (2pt);
  \draw[fill=white] (1,0) circle (2pt);
  \draw[fill=white] (1,1) circle (2pt);
  \draw[fill=white] (0,1) circle (2pt);
  \draw[->,thick] (1.3,0.5) -- (1.9,0.5);
  \draw[thick] (2.2,0) -- (3.2,0) -- (3.7,1) -- (2.7,1) -- cycle;
  \draw[fill=white] (2.2,0) circle (2pt);
  \draw[fill=white] (3.2,0) circle (2pt);
  \draw[fill=white] (3.7,1) circle (2pt);
  \draw[fill=white] (2.7,1) circle (2pt);
\end{tikzpicture}
\end{document}
```

> Il reticolo 
> Un reticolo è un assemblaggio di barre articolate nei loro 
> punti di congiunzione. Quando le sue maglie sono 
> quadrate o rettangolari la struttura, in generale, non è 
> rigida (vedi figura) senza l'aggiunta di barre diagonali. 
> Quante barre diagonali, al minimo, si devono aggiungere 
> a un reticolo 4 × 4 a maglie quadrate che non ne contiene alcuna affinché risulti rigido?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0007
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum diagonals for irrigation of 4x4 mesh *

![[src_kangourou_2019_squadre_finale__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw[thick] (0,0) -- (1,0) -- (1,1) -- (0,1) -- cycle;
  \draw[fill=white] (0,0) circle (2pt);
  \draw[fill=white] (1,0) circle (2pt);
  \draw[fill=white] (1,1) circle (2pt);
  \draw[fill=white] (0,1) circle (2pt);
  \draw[->,thick] (1.3,0.5) -- (1.9,0.5);
  \draw[thick] (2.2,0) -- (3.2,0) -- (3.7,1) -- (2.7,1) -- cycle;
  \draw[fill=white] (2.2,0) circle (2pt);
  \draw[fill=white] (3.2,0) circle (2pt);
  \draw[fill=white] (3.7,1) circle (2pt);
  \draw[fill=white] (2.7,1) circle (2pt);
\end{tikzpicture}
\end{document}
```

> The lattice A lattice is an assembly of bars articulated at their junction points. When its threads are square or rectangular the structure is generally not rigid (see figure) without the addition of diagonal bars. How many diagonal bars, at a minimum, must be added to a 4 < MSK0/> 4 square mesh mesh that contains none to make it rigid?

**Answer:** 0007
[[src_kangourou_2019_squadre_finale__Q12]]
