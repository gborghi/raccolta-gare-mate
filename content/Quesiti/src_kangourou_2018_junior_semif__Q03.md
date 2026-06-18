---
tipo: quesito
quesito_id: quesito_src_kangourou_2018_junior_semif__Q03
parent: src_kangourou_2018_junior_semif
competition: Kangourou 2018 Semifinale Junior
family: kangourou
year: '2018'
level: kangourou
country: Italia
modalita: individuale
quesito: '3'
summary: 'triangolo equilatero, quadrato o cerchio'
answer: A
topics:
  - topic_geometria_analitica
  - topic_geometria_piana
methods:
  - method_casework
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2018
  - livello/kangourou
  - topic/geometria_analitica
  - topic/geometria_piana
  - gara/individuale
---

# Kangourou 2018 Semifinale Junior — Quesito 3

*triangolo equilatero, quadrato o cerchio*

![[src_kangourou_2018_junior_semif__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[x=0.5cm,y=0.5cm]
  % Squared paper: 11 columns (0..10), 5 rows (0..4), y increases upward
  \draw[gray, thin] (0,0) grid (10,4);
  % B=(col 3, row 0 from top) => tikz (3,4)
  % C=(col 6, row 0 from top) => tikz (6,4)
  % A=(col 2, row 3 from top) => tikz (2,1)
  % D=(col 8, row 3 from top) => tikz (8,1)
  \filldraw (3,4) circle[radius=2.5pt] node[below right, font=\small] {$B$};
  \filldraw (6,4) circle[radius=2.5pt] node[below right, font=\small] {$C$};
  \filldraw (2,1) circle[radius=2.5pt] node[below right, font=\small] {$A$};
  \filldraw (8,1) circle[radius=2.5pt] node[below right, font=\small] {$D$};
\end{tikzpicture}
\end{document}
```

> (Punti 3) Su un foglio di carta quadrettata (in figura ne vedi 
> una porzione) sono marcati i quattro punti A, B, C, D.  Enrico 
> vuole individuare una figura che sia un triangolo equilatero, op­
> pure un quadrato, oppure un cerchio il cui bordo passi per tutti i 
> quattro punti. Allora la figura potrà essere
> A) sia un triangolo equilatero, sia un quadrato, ma non un cerchio.
> B) un quadrato, ma non un triangolo equilatero né un cerchio.
> C) sia un quadrato, sia un cerchio, ma non un triangolo equilatero. 
> D) una qualunque di quelle elencate.
> E) nessuna di quelle elencate.

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.1
