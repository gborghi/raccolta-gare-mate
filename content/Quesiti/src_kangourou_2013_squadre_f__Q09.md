---
tipo: quesito
quesito_id: quesito_src_kangourou_2013_squadre_f__Q09
parent: src_kangourou_2013_squadre_f
competition: Kangourou Coppa Squadre 2013 Finale
family: kangourou
year: '2013'
level: squadre
country: Italia
modalita: squadre
quesito: '9'
summary: Angolo ACB da due triangoli isosceli sul lato AB
answer: '98'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2013
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

# Kangourou Coppa Squadre 2013 Finale — Quesito 9

*Angolo ACB da due triangoli isosceli sul lato AB*

![[src_kangourou_2013_squadre_f__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (2.2,3.2);
  \coordinate (M) at (0.33,0);
  \coordinate (N) at (3.88,0);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (C) -- (M);
  \draw (C) -- (N);
  \draw (2.2,3.2) ++(220:0.3) arc[start angle=220, end angle=290, radius=0.3];
  \node[below left] at (A) {A};
  \node[below right] at (B) {B};
  \node[above] at (C) {C};
  \node[below] at (M) {M};
  \node[below] at (N) {N};
  \node at (2.6,2.6) {$41^\circ$};
\end{tikzpicture}
\end{document}
```

> L’angolo      
> Nel triangolo ABC in figura i punti M e  sul lato AB sono 
> determinati in modo che il segmento A sia lungo quanto il 
> segmento AC e il segmento BM sia lungo quanto il segmento BC. 
> L’angolo MC misura 41 gradi. Quanti gradi misura l’angolo 
> ACB?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 98
**Fonte:** apri PDF p.2
