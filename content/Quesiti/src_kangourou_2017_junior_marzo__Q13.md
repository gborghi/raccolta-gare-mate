---
title: Kangourou 2017 Junior - Gara 16 marzo — Quesito 13
tipo: quesito
quesito_id: quesito_src_kangourou_2017_junior_marzo__Q13
parent: src_kangourou_2017_junior_marzo
competition: Kangourou 2017 Junior - Gara 16 marzo
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '13'
summary: Lunghezza AE che divide trapezio in aree uguali
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
  - gara/individuale
---

*Lunghezza AE che divide trapezio in aree uguali*

![[src_kangourou_2017_junior_marzo__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (5,0);
  \coordinate (C) at (4.2,2);
  \coordinate (D) at (1.2,2);
  \coordinate (E) at (3.5,0);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (D) -- (E);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> La figura (solo indicativa) mostra un trapezio 
> ABCD. I lati paralleli AB e CD hanno lunghezza ri­
> spettivamente 50 e 20 cm e il punto E di AB è in 
> posizione tale da rendere uguali le aree del triangolo 
> AED e del quadrilatero DEBC. Quanti centimetri è 
> lungo AE ? 
> A) 25	
> 	
> B) 30	
> 	
> C) 35	
> 	
> D) 40	
> 	
> E) 45

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.3
