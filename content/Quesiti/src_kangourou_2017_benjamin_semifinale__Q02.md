---
tipo: quesito
quesito_id: quesito_src_kangourou_2017_benjamin_semifinale__Q02
parent: src_kangourou_2017_benjamin_semifinale
competition: Kangourou 2017 Benjamin (semifinale individuale)
family: kangourou
year: '2017'
level: kangourou
country: Italia
quesito: '2'
summary: Frazione del triangolo occupata dalla M bianca
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2017
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou 2017 Benjamin (semifinale individuale) — Quesito 2

*Frazione del triangolo occupata dalla M bianca*

![[src_kangourou_2017_benjamin_semifinale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
\pgfmathsetmacro{\h}{0.866025}
\fill[black] (2,\h) -- (1.5,{2*\h}) -- (2,{3*\h}) -- (2.5,{2*\h}) -- cycle;
\fill[black] (0,0) -- (1,0) -- (0.5,\h) -- cycle;
\fill[black] (3,0) -- (4,0) -- (3.5,\h) -- cycle;
\draw[thick] (0,0) -- (4,0) -- (2,3.4641) -- cycle;
\end{tikzpicture}
\end{document}
```

> (Punti 3) Per ottenere il logo in figura ho diviso in 4 parti uguali un lato di un triangolo 
> equilatero, poi ho tracciato quattro rette parallele agli altri lati passanti  per i tre punti di 
> divisione e infine ho annerito il rombo e i triangolini che vedi in figura. Quale frazione del 
> triangolo iniziale è occupata dalla M bianca? 
> (A) 7/11               	
> (B) 2/3           	 	
> (C) 3/4           	 	
> (D) 3/5                	
> (E) 5/7

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.1
