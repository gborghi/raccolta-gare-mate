---
title: Kangourou Categoria Student 2023 — Quesito 8
tipo: quesito
quesito_id: quesito_src_kangourou_2023_student__Q08
parent: src_kangourou_2023_student
competition: Kangourou Categoria Student 2023
family: kangourou
year: '2023'
level: kangourou
country: Italia
modalita: individuale
quesito: '8'
summary: Area dipinta di nero in suddivisione infinita di un quadrato
answer: B
topics:
  - topic_geometria_piana
  - topic_algebra
methods:
  - method_ricorsione
skills:
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2023
  - livello/kangourou
  - topic/geometria_piana
  - topic/algebra
  - gara/individuale
---

*Area dipinta di nero in suddivisione infinita di un quadrato*

![[src_kangourou_2023_student__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) rectangle (4,4);
  \fill[black] (0,2) rectangle (2,4);
  \draw (2,0) -- (2,4);
  \draw (0,2) -- (4,2);
  \draw (3,0) -- (3,2);
  \draw (2,1) -- (4,1);
  \fill[black] (2,1) rectangle (3,2);
  \draw (3.5,0) -- (3.5,1);
  \draw (3,0.5) -- (4,0.5);
  \fill[black] (3,0.5) rectangle (3.5,1);
  \draw (3.75,0) -- (3.75,0.5);
  \draw (3.5,0.25) -- (4,0.25);
  \fill[black] (3.5,0.25) rectangle (3.75,0.5);
\end{tikzpicture}
\end{document}
```

> Un quadrato di area 84 viene suddiviso in 4 quadrati e il qua­
> drato nell’angolo in alto a sinistra viene dipinto di nero. Il qua­
> drato nell’angolo in basso a destra viene a sua volta suddiviso in 
> 4 quadrati, di cui quello nell’angolo in alto a sinistra viene dipinto 
> di nero. Il processo viene ripetuto infinite volte. In totale, che area 
> avrà la parte di quadrato che risulterà dipinta di nero?
> A) 24 	         	
> B) 28	
>  	
> C) 31	
> 	
> D)  35	 	
> E) 42

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_algebra|Algebra]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** B
**Fonte:** apri PDF p.2
