---
tipo: quesito
quesito_id: quesito_src_kangourou_2015_marzo_junior__Q25
parent: src_kangourou_2015_marzo_junior
competition: Kangourou 2015 gara 19 marzo Junior
family: kangourou
year: '2015'
level: kangourou
country: Italia
quesito: '25'
summary: segmento piu corto
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
  - anno/2015
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou 2015 gara 19 marzo Junior — Quesito 25

*segmento piu corto*

![[src_kangourou_2015_marzo_junior__prob25.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Rectangle ABCD: A=(0,0), B=(5,0), C=(5,2), D=(0,2) (indicative, not to scale)
  % Diagonal DB from D=(0,2) to B=(5,0)
  % E on top side DC, F on bottom side AB
  % Segment AE from A=(0,0) to E on DC, Segment CF from C=(5,2) to F on AB
  \coordinate (A) at (0,0);
  \coordinate (B) at (5,0);
  \coordinate (C) at (5,2);
  \coordinate (D) at (0,2);
  \coordinate (E) at (1.8,2);
  \coordinate (F) at (3.5,0);
  \draw[thick] (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (D) -- (B);
  \draw (A) -- (E);
  \draw (C) -- (F);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[above] at (E) {$E$};
  \node[below] at (F) {$F$};
  \node at (0.6,1.3) {$4\,\mathrm{cm}^2$};
  \node at (4.2,0.8) {$5\,\mathrm{cm}^2$};
\end{tikzpicture}
\end{document}
```

> Il rettangolo ABCD in figura è ripartito in 
> quattro triangoli  mediante la diagonale DB e i 
> segmenti AE e CF. La sua area è 24 cm2, mentre 
> le aree dei triangoli AED e FBC sono  rispet­
> tivamente 4 cm2 e 5 cm2. Quale fra i seguenti 
> segmenti  è il più corto?  (Attenzione: la figura 
> è solo indicativa, non rispetta i dati numerici). 
> A) AE	
> 	
> B) BF	
> 	
> C) CF	 	
> D) DE	 	
> E) EF

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** apri PDF p.4
