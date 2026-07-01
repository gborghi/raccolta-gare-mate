---
title: Kangourou 2017 Cadet (gara marzo) — Quesito 28
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2017_cadet_marzo__Q28
parent: src_kangourou_2017_cadet_marzo
competition: Kangourou 2017 Cadet (gara marzo)
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '28'
summary: Massimo numeri dispari nella piramide di somme
answer: E
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_colorazione
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2017
  - livello/kangourou
  - topic/combinatoria
  - topic/aritmetica
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Massimo numeri dispari nella piramide di somme*

![[src_kangourou_2017_cadet_marzo__prob28.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \foreach \row/\n in {0/5, 1/4, 2/3, 3/2, 4/1} {
    \foreach \col in {1,...,\n} {
      \draw (\col - \n/2 - 0.5, \row*0.7) rectangle (\col - \n/2 + 0.5, \row*0.7 + 0.6);
    }
  }
\end{tikzpicture}
\end{document}
```

> Sara vuole scrivere un numero intero positi­
> vo in ogni casella del disegno in modo che ogni 
> numero al disopra della riga inferiore sia la som­
> ma dei due numeri nelle caselle immediatamente 
> sotto a esso. Quanti numeri dispari può scrivere al 
> massimo Sara?
> A) 5	
> 	
> B) 7	
> 	
> C) 8	
> 	
> D) 10	
> 	
> E) 11

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1LIdvi3Dl-_VtUivy8qww_dZcJFordvMh/view)


<span class="qlang-split" data-lang="en"></span>


*Most odd numbers in the sum pyramid*

![[src_kangourou_2017_cadet_marzo__prob28.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \foreach \row/\n in {0/5, 1/4, 2/3, 3/2, 4/1} {
    \foreach \col in {1,...,\n} {
      \draw (\col - \n/2 - 0.5, \row*0.7) rectangle (\col - \n/2 + 0.5, \row*0.7 + 0.6);
    }
  }
\end{tikzpicture}
\end{document}
```

> Sarah wants to write a positive integer in each box of the drawing so that each number above the bottom line is the sum of the two numbers in the boxes immediately below it. How many odd numbers can Sara write at most? A) 5
> 	
> B) 7
> 	
> C) 8
> 	
> D) 10
> 	
> E) 11

**Answer:** E
[[src_kangourou_2017_cadet_marzo__Q28]]
