---
title: Kangourou 2014 marzo Cadet — Quesito 12
tipo: quesito
quesito_id: quesito_src_kangourou_2014_cadet__Q12
parent: src_kangourou_2014_cadet
competition: Kangourou 2014 marzo Cadet
family: kangourou
year: '2014'
level: kangourou
country: Italia
modalita: individuale
quesito: '12'
summary: Area regione coperta dai 5 cerchi sovrapposti
answer: A
topics:
  - topic_geometria_piana
methods:
  - method_inclusione_esclusione
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2014
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Area regione coperta dai 5 cerchi sovrapposti*

![[src_kangourou_2014_cadet__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \foreach \i in {0,1,2,3,4} {
    \draw[thick] (\i*1.5, 0) circle[radius=0.85];
  }
\end{tikzpicture}
\end{document}
```

> L’area di ciascuno dei cerchi in figura è di
> 1 cm2; l’area comune a due cerchi sovrapposti è 
> di     cm2. Qual è, in centimetri quadrati, l’area 
> della regione coperta dai 5 cerchi?
> A) 	
> 	
> B) 4 	
> 	
> C)  35
> ------ 
>   8  	
> D)  39
> ------ 
>   8   	
> E)  19
> ------ 
>   4   
>  9---- 
>  2
>  1---- 
>  8
> 
> Kangourou 2014
> pagina 17
> CADET

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.2
