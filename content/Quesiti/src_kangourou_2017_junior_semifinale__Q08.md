---
tipo: quesito
quesito_id: quesito_src_kangourou_2017_junior_semifinale__Q08
parent: src_kangourou_2017_junior_semifinale
competition: Kangourou 2017 Junior - Semifinale individuale
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '8'
summary: Rapporto aree quadrilatero e triangolo dai punti medi
answer: E
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
  - anno/2017
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

# Kangourou 2017 Junior - Semifinale individuale — Quesito 8

*Rapporto aree quadrilatero e triangolo dai punti medi*

![[src_kangourou_2017_junior_semifinale__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,4);
  \coordinate (C) at (4,0);
  \coordinate (M) at (2,2);
  \coordinate (N) at (3,1);
  \coordinate (P) at (4,1.3333);
  \fill[gray!40] (A) -- (M) -- (N) -- (P) -- cycle;
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (M) -- (C);
  \draw (A) -- (N) -- (B);
  \draw (M) -- (P);
  \node[left] at (A) {$A$};
  \node[above right] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above left] at (M) {$M$};
  \node[right] at (N) {$N$};
  \node[below right] at (P) {$P$};
\end{tikzpicture}
\end{document}
```

> (Punti 5) Osserva la figura: ABC è un triangolo, M è il punto medio 
> del lato AB e N è il punto medio del segmento MC. Qual è il rapporto fra 
> l’area del quadrilatero AMNP (colorato in grigio) e l’area della rimanente 
> parte del triangolo ABC? 
> (A) 5 : 12    	
> 	
> (B) 1 : 2    	
> 	
> (C) 2 : 3         
> (D) 3 : 5        	 	
> (E) 5 : 7

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** apri PDF p.2
