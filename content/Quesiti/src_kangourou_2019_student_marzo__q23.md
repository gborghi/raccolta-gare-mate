---
title: Kangourou 2019 Gara marzo Student (triennio) — Quesito 23
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2019_student_marzo__Q23
parent: src_kangourou_2019_student_marzo
competition: Kangourou 2019 Gara marzo Student (triennio)
family: kangourou
year: '2019'
level: kangourou
country: Italia
modalita: individuale
quesito: '23'
summary: Minimo valore di S nel reticolo numerato
answer: C
topics:
  - topic_combinatoria
methods:
  - method_estremalita
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2019
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Minimo valore di S nel reticolo numerato*

![[src_kangourou_2019_student_marzo__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \tikzset{dot/.style={circle, fill=black, inner sep=0pt, minimum size=5pt}}
  \draw[thick] (0,0) -- (1,1) -- (2,0) -- (1,-1) -- cycle;
  \draw[thick] (2,0) -- (3,1) -- (4,0) -- (3,-1) -- cycle;
  \draw[thick] (4,0) -- (5,1) -- (6,0) -- (5,-1) -- cycle;
  \foreach \x/\y in {0/0, 1/1, 2/0, 3/1, 4/0, 5/1, 6/0, 1/-1, 3/-1, 5/-1} {
    \node[dot] at (\x,\y) {};
  }
\end{tikzpicture}
\end{document}
```

> I vertici del reticolo in figura sono stati nu­
> merati da 1 a 10, in modo che la somma S dei 
> numeri nei quattro vertici di ciascun quadrato 
> sia sempre la stessa. Qual è il minimo valore 
> che può avere S?
> A) 18	
> 	
> B) 19	
> 	
> C) 20	
> 	
> D) 21	
> 	
> E) 22

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1HwjFU12BtxFf61HsPYXKD4UpynNobrII/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum value of S in the numbered grid*

![[src_kangourou_2019_student_marzo__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \tikzset{dot/.style={circle, fill=black, inner sep=0pt, minimum size=5pt}}
  \draw[thick] (0,0) -- (1,1) -- (2,0) -- (1,-1) -- cycle;
  \draw[thick] (2,0) -- (3,1) -- (4,0) -- (3,-1) -- cycle;
  \draw[thick] (4,0) -- (5,1) -- (6,0) -- (5,-1) -- cycle;
  \foreach \x/\y in {0/0, 1/1, 2/0, 3/1, 4/0, 5/1, 6/0, 1/-1, 3/-1, 5/-1} {
    \node[dot] at (\x,\y) {};
  }
\end{tikzpicture}
\end{document}
```

> The vertices of the grid in the figure have been numbered from 1 to 10, so that the sum S of the numbers at the four vertices of each square is always the same. What is the minimum value that S can have? A) 18
> 	
> B) 19
> 	
> C) 20
> 	
> D) 21
> 	
> E) 22

**Answer:** C
[[src_kangourou_2019_student_marzo__Q23]]
