---
title: Kangourou 2018 Cadet - Gara 15 marzo — Quesito 28
tipo: quesito
quesito_id: quesito_src_kangourou_2018_cadet_marzo__Q28
parent: src_kangourou_2018_cadet_marzo
competition: Kangourou 2018 Cadet - Gara 15 marzo
family: kangourou
year: '2018'
level: kangourou
country: Italia
modalita: individuale
quesito: '28'
summary: Area del triangolo LMN dentro l'equilatero
answer: B
topics:
  - topic_geometria_piana
methods:
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2018
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Area del triangolo LMN dentro l'equilatero*

![[src_kangourou_2018_cadet_marzo__prob28.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.1]
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (3,5.196);
  \coordinate (L) at (4,0);
  \coordinate (M) at (4,3.464);
  \coordinate (N) at (1,1.732);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \fill[gray!30] (L) -- (M) -- (N) -- cycle;
  \draw[thick] (L) -- (M) -- (N) -- cycle;
  \draw (4,0.18) -- (3.82,0.18) -- (3.82,0);
  \draw (3.88,3.55) -- (3.76,3.42) -- (3.9,3.35);
  \draw (1.14,1.64) -- (1.01,1.77) -- (0.87,1.65);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[below] at (L) {$L$};
  \node[right] at (M) {$M$};
  \node[left] at (N) {$N$};
\end{tikzpicture}
\end{document}
```

> I punti L, M e N che si vedono sui lati del triangolo equilatero 
> ABC sono stati fissati in modo che ML sia perpendicolare ad AB, 
> NM sia perpendicolare a BC e LN sia perpendicolare a CA. Il trian­
> golo ABC ha area 36 cm2. Quanti centimetri quadrati misura l’area 
> del triangolo LMN ?
> A) 9	
> 	
> B) 12	
> 	
> C) 15	
> 	
> D) 16	
> 	
> E) 18

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** apri PDF p.5
