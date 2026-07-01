---
title: Kangourou 2017 Benjamin (gara marzo) — Quesito 22
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2017_benjamin_marzo__Q22
parent: src_kangourou_2017_benjamin_marzo
competition: Kangourou 2017 Benjamin (gara marzo)
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '22'
summary: Modi di inserire 1..5 con regole maggiore sotto/destra
answer: D
topics:
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2017
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Modi di inserire 1..5 con regole maggiore sotto/destra*

![[src_kangourou_2017_benjamin_marzo__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Top row: 3 cells
  \draw (0,1) rectangle (1,2);
  \draw (1,1) rectangle (2,2);
  \draw (2,1) rectangle (3,2);
  % Below the leftmost: 2 cells
  \draw (0,0) rectangle (1,1);
  \draw (0,-1) rectangle (1,0);
\end{tikzpicture}
\end{document}
```

> Voglio inserire nelle cinque celle della figura a lato i numeri 1, 2, 3, 4, 5, 
> seguendo le seguenti regole:
> •     se un numero si trova sotto un altro numero deve essere più 
>       grande di questo;
> •     se un numero è a destra di un altro numero, deve essere più
>       grande di questo.
> In quanti modi diversi posso farlo?
> A) 3	
> 	
> B) 4	
> 	
> C) 5	
> 	
> D) 6	
> 	
> E) 8
> 

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1JIywXZWbfWc4ql93ciPsXbJYv-d7cjwP/view)


<span class="qlang-split" data-lang="en"></span>


*Mode of entering 1.5. with major rules below/right*

![[src_kangourou_2017_benjamin_marzo__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Top row: 3 cells
  \draw (0,1) rectangle (1,2);
  \draw (1,1) rectangle (2,2);
  \draw (2,1) rectangle (3,2);
  % Below the leftmost: 2 cells
  \draw (0,0) rectangle (1,1);
  \draw (0,-1) rectangle (1,0);
\end{tikzpicture}
\end{document}
```

> I want to insert the numbers 1, 2, 3, 4, 5 into the five cells of the figure next to me, following the following rules: • if a number is below another number it must be larger than this; • if a number is to the right of another number it must be larger than this. How many different ways can I do this? A) 3
> 	
> B) 4
> 	
> C) 5
> 	
> D) 6
> 	
> E) 8
>

**Answer:** D
[[src_kangourou_2017_benjamin_marzo__Q22]]
