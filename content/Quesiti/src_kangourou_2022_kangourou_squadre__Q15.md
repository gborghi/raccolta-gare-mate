---
tipo: quesito
quesito_id: quesito_src_kangourou_2022_kangourou_squadre__Q15
parent: src_kangourou_2022_kangourou_squadre
competition: Kangourou Squadre 2022 Kangourou Finale 1
family: kangourou
year: '2022'
level: squadre
country: Italia
quesito: '15'
summary: Lato quadrati laterali in semicerchio
answer: '1050'
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/squadre
  - topic/geometria_piana
---

# Kangourou Squadre 2022 Kangourou Finale 1 — Quesito 15

*Lato quadrati laterali in semicerchio*

![[src_kangourou_2022_kangourou_squadre__prob15.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \pgfmathsetmacro{\R}{sqrt(5)}
  \draw[thick] (-\R,0) -- (\R,0);
  \draw[thick] (\R,0) arc(0:180:\R);
  \draw[thick] (-1,0) -- (1,0) -- (1,2) -- (-1,2) -- cycle;
  \draw[thick] (-2,0) -- (-1,0) -- (-1,1) -- (-2,1) -- cycle;
  \draw[thick] (1,0) -- (2,0) -- (2,1) -- (1,1) -- cycle;
\end{tikzpicture}
\end{document}
```

> I quadrati laterali  
> La figura mostra un semicerchio che ospita tre quadrati, ognuno dei quali ha un lato 
> sul diametro e almeno un vertice sulla semicirconferenza. Il punto medio del lato di 
> base di quello centrale è il punto medio del diametro; gli altri due quadrati sono 
> accostati in posizione simmetrica a quello centrale. Se il lato del quadrato centrale 
> misura 2.100, quanto misura il lato dei quadrati laterali? 
>  
> A
> N 
> M 
> C
> B
> A 
> B 
> C 
> D 
> E 
> V 
> V
> V
> A 
> B 
> C
> D
> E 
> 
>  
> 3 
>  
>  
> Quesiti e soluzioni

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 1050
**Fonte:** apri PDF p.2
