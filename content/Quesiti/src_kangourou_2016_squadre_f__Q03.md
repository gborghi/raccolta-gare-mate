---
tipo: quesito
quesito_id: quesito_src_kangourou_2016_squadre_f__Q03
parent: src_kangourou_2016_squadre_f
competition: Kangourou Coppa Squadre 2016 Finale
family: kangourou
year: '2016'
level: squadre
country: Italia
quesito: '3'
summary: Perimetro triangolo CXA dato area e rapporti lati
answer: '48'
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
  - anno/2016
  - livello/squadre
  - topic/geometria_piana
---

# Kangourou Coppa Squadre 2016 Finale — Quesito 3

*Perimetro triangolo CXA dato area e rapporti lati*

![[src_kangourou_2016_squadre_f__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (4,3);
  \coordinate (X) at (4,1.667);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (A) -- (X);
  \draw (3.8,0) -- (3.8,0.2) -- (4,0.2);
  \node[left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[right] at (X) {$X$};
\end{tikzpicture}
\end{document}
```

> Il triangolo spezzato 
> Nel seguito denotiamo con WZ la lunghezza del generico segmento di estremi W 
> e Z. Osservate la figura. Nel triangolo ABC l’angolo in B è retto e il punto X è 
> tale che BX/XC  5/4 e AB  3CX. L’area del triangolo CXA è 54 cm2. Qual è la 
> lunghezza in centimetri del perimetro di CXA ?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 48
**Fonte:** apri PDF p.1
