---
title: Kangourou 2023 Junior — Gara 16 marzo — Quesito 23
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2023_junior__Q23
parent: src_kangourou_2023_junior
competition: Kangourou 2023 Junior — Gara 16 marzo
family: kangourou
year: '2023'
level: kangourou
country: Italia
modalita: individuale
quesito: '23'
summary: cerchio ?
answer: A
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_fattorizzazione
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2023
  - livello/kangourou
  - topic/combinatoria
  - topic/aritmetica
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*cerchio ?*

![[src_kangourou_2023_junior__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}[
  node/.style={circle, draw, very thick, minimum size=1cm, inner sep=0}
]
  \node[node] (TL) at (0, 2) {};
  \node[node] (TC) at (1.5, 2) {};
  \node[node] (TR) at (3, 2) {};
  \node[node] (ML) at (0, 0.5) {};
  \node[node] (MC) at (1.5, 0.5) {};
  \node[node] (MR) at (3, 0.5) {};
  \node[node] (B) at (1.5, -1) {?};
  \draw[very thick] (TL) -- (TC) -- (TR);
  \draw[very thick] (ML) -- (MC) -- (MR);
  \draw[very thick] (TC) -- (MC);
  \draw[very thick] (MC) -- (B);
\end{tikzpicture}
\end{document}
```

> Osserva la figura. Sette numeri interi non negativi di una 
> cifra, tutti diversi fra loro, vanno inseriti ognuno in uno dei 
> cerchi in figura in modo che il prodotto dei numeri inseriti 
> in ognuna delle tre terne di cerchi allineati sia lo stesso al 
> variare delle terne. Che numero dovrà essere inserito al posto 
> del punto di domanda?
> A) 2	
> 	
> B) 3	
> 	
> C) 4	
> 	
> D) 6	
> 	
> E) 8

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/16McGuArmIHqcFlHrVuvvrFgJbq1ecq0y/view)


<span class="qlang-split" data-lang="en"></span>


< MSK0/> circle ? < MSK1/>

![[src_kangourou_2023_junior__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}[
  node/.style={circle, draw, very thick, minimum size=1cm, inner sep=0}
]
  \node[node] (TL) at (0, 2) {};
  \node[node] (TC) at (1.5, 2) {};
  \node[node] (TR) at (3, 2) {};
  \node[node] (ML) at (0, 0.5) {};
  \node[node] (MC) at (1.5, 0.5) {};
  \node[node] (MR) at (3, 0.5) {};
  \node[node] (B) at (1.5, -1) {?};
  \draw[very thick] (TL) -- (TC) -- (TR);
  \draw[very thick] (ML) -- (MC) -- (MR);
  \draw[very thick] (TC) -- (MC);
  \draw[very thick] (MC) -- (B);
\end{tikzpicture}
\end{document}
```

> Look at the figure. Seven nonnegative integers of a digit, all different from each other, must each be inserted into one of the circles in the figure so that the product of the numbers inserted into each of the three threads of aligned circles is the same as the variation of the threads. What number shall be inserted in place of the question mark? A) 2
> 	
> B) 3
> 	
> C) 4
> 	
> D) 6
> 	
> E) 8

**Answer:** A
[[src_kangourou_2023_junior__Q23]]
