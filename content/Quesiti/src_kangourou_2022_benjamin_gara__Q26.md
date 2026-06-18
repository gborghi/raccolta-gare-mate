---
tipo: quesito
quesito_id: quesito_src_kangourou_2022_benjamin_gara__Q26
parent: src_kangourou_2022_benjamin_gara
competition: Kangourou 2022 Benjamin gara individuale
family: kangourou
year: '2022'
level: kangourou
country: Italia
quesito: '26'
summary: Somma dei tre numeri nei vertici del triangolo ombreggiato
answer: D
topics:
  - topic_aritmetica
methods:
  - method_casework
skills:
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/kangourou
  - topic/aritmetica
---

# Kangourou 2022 Benjamin gara individuale — Quesito 26

*Somma dei tre numeri nei vertici del triangolo ombreggiato*

![[src_kangourou_2022_benjamin_gara__prob26.png]]

```tikz
\begin{document}
\begin{tikzpicture}[every node/.style={draw,circle,minimum size=8mm,inner sep=0}]
\node (top) at (0,2) {};
\node (left) at (-1.5,0) {};
\node (cen) at (0,0) {};
\node (right) at (1.5,0) {};
\node (bot) at (0,-2) {};
\draw (top) -- (left);
\draw (top) -- (right);
\draw (top) -- (cen);
\draw (left) -- (cen);
\draw (right) -- (cen);
\draw (bot) -- (left);
\draw (bot) -- (right);
\draw (bot) -- (cen);
\fill[gray!40] (0,0) -- (1.5,0) -- (0,-2) -- cycle;
\draw (0,0) -- (1.5,0) -- (0,-2) -- cycle;
\node[draw=none,fill=white,inner sep=1pt] at (-0.85,1.1) {\small 105};
\node[draw=none,fill=white,inner sep=1pt] at (0.85,1.1) {\small 84};
\node[draw=none,fill=white,inner sep=1pt] at (-0.55,-1.1) {\small 210};
\foreach \p in {top,left,cen,right,bot}
  \draw (\p.center) circle (4mm);
\end{tikzpicture}
\end{document}
```

> Inserisci i numeri 3, 4, 5, 6 e 7 nei 
> cinque cerchi in figura in modo che il 
> numero scritto all’interno di ciascun 
> triangolo sia il prodotto dei numeri scritti 
> nei suoi vertici. Qual è la somma dei tre 
> numeri che vanno inseriti nei vertici del triangolo 
> ombreggiato? 
> A) 12  
>   
> B) 14  
>   
> C) 15  
> D) 17  
>   
> E) 18

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** apri PDF p.6
