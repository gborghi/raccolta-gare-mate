---
tipo: quesito
quesito_id: quesito_src_kangourou_2024_benjamin__Q16
parent: src_kangourou_2024_benjamin
competition: Kangourou Categoria Benjamin 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
quesito: '16'
summary: Area ombreggiata nella seconda figura di quadrati uguali
answer: B
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou Categoria Benjamin 2024 — Quesito 16

*Area ombreggiata nella seconda figura di quadrati uguali*

![[src_kangourou_2024_benjamin__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw (0,0) rectangle (3,3);
  \fill[gray!50] (0,0) -- (1.5,0) -- (0,1.5) -- cycle;
  \fill[gray!50] (3,0) -- (3,1.5) -- (1.5,0) -- cycle;
  \fill[gray!50] (3,3) -- (1.5,3) -- (3,1.5) -- cycle;
  \fill[gray!50] (0,3) -- (0,1.5) -- (1.5,3) -- cycle;
  \draw (1.5,0) -- (3,1.5) -- (1.5,3) -- (0,1.5) -- cycle;
  \begin{scope}[xshift=4cm]
    \draw (0,0) rectangle (3,3);
    \fill[gray!50] (1,0) rectangle (2,1);
    \fill[gray!50] (2,1) rectangle (3,2);
    \fill[gray!50] (1,2) rectangle (2,3);
    \fill[gray!50] (0,1) rectangle (1,2);
    \draw (1,0) rectangle (2,1);
    \draw (2,1) rectangle (3,2);
    \draw (1,2) rectangle (2,3);
    \draw (0,1) rectangle (1,2);
  \end{scope}
\end{tikzpicture}
\end{document}
```

> La figura mostra due quadrati grandi che han­
> no la stessa area. Nel primo quadrato sono stati 
> congiunti i punti medi dei lati e sono stati ombreg­
> giati i triangoli che si sono così formati. Nel se­
> condo quadrato sono stati disegnati e ombreggiati 
> quattro quadratini identici, il cui lato è un terzo 
> del lato del quadrato grande. La superficie ombreggiata nel primo quadrato misura 
> 9 cm2. Quanti centimetri quadrati misura la superficie ombreggiata nella seconda 
> figura?
> A) 4 	
> 	
> B) 8 	
> 	
> C) 9 	
> 	
> D) 10 	
> 	
> E) 12

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** apri PDF p.4
