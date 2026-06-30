---
title: Kangourou 2019 Semifinale Benjamin — Quesito 9
tipo: quesito
quesito_id: quesito_src_kangourou_2019_benjamin_semif__Q09
parent: src_kangourou_2019_benjamin_semif
competition: Kangourou 2019 Semifinale Benjamin
family: kangourou
year: '2019'
level: kangourou
country: Italia
modalita: individuale
quesito: '9'
summary: Quanti diversi decori di esagoni con triangolini colorati
answer: B
topics:
  - topic_combinatoria
methods:
  - method_conteggio
  - method_simmetria
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

*Quanti diversi decori di esagoni con triangolini colorati*

![[src_kangourou_2019_benjamin_semif__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!60] (2.500,4.344) -- (2.511,1.500) -- (0.000,0.014) -- cycle;
  \fill[gray!60] (5.000,0.000) -- (2.511,1.487) -- (2.500,4.330) -- cycle;
  \draw (0.000,0.014) -- (5.000,0.000) -- (2.500,4.344) -- cycle;
  \draw (2.500,4.344) -- (2.511,1.494);
  \draw (0.000,0.014) -- (2.511,1.494);
  \draw (5.000,0.000) -- (2.511,1.494);
\end{tikzpicture}
\end{document}
```

> (Punti 6) Accostando sei triangoli equilateri uguali si ottiene un esagono rego­
> lare. Supponi che i triangoli equilateri di partenza siano ripartiti ciascuno in tre 
> triangolini (uguali) con un vertice nel centro del triangolo equilatero, di cui due 
> grigi e uno bianco (vedi figura). Supponi di accostarli in modo che lungo ciascu­
> no dei lati di congiunzione dei triangoli equilateri compaiano sempre triangolini 
> di ugual colore. Quanti diversi “decori” di esagoni potresti ottenere?
> A) 6	
> 	
> B) 5	
> 	
> C) 4	
> 	
> D) 3	
> 	
> E) 2	
> 	
> 	
> Quesiti a risposta aperta

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GyY7FcsM8sclOO2bS-pBXVTpUEtuUikn/view)
