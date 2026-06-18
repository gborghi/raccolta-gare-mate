---
tipo: quesito
quesito_id: quesito_src_kangourou_2017_cadet_marzo__Q30
parent: src_kangourou_2017_cadet_marzo
competition: Kangourou 2017 Cadet (gara marzo)
family: kangourou
year: '2017'
level: kangourou
country: Italia
quesito: '30'
summary: Rapporto area EOFM su ABCD nel parallelogramma
answer: D
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
---

# Kangourou 2017 Cadet (gara marzo) — Quesito 30

*Rapporto area EOFM su ABCD nel parallelogramma*

![[src_kangourou_2017_cadet_marzo__prob30.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (5,2);
  \coordinate (D) at (1,2);
  \coordinate (M) at (3,2);
  \coordinate (O) at (2.5,1);
  \coordinate (E) at (2,1.333);
  \coordinate (F) at (3.333,1.333);
  \draw[thick] (A) -- (B) -- (C) -- (D) -- cycle;
  \fill (M) circle (1.5pt);
  \draw[thin] (A) -- (C);
  \draw[thin] (B) -- (D);
  \draw[thin] (A) -- (M);
  \draw[thin] (B) -- (M);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[above] at (M) {$M$};
  \node[above left] at (O) {$O$};
  \node[above left] at (E) {$E$};
  \node[above right] at (F) {$F$};
  \fill (O) circle (1.5pt);
  \fill (E) circle (1.5pt);
  \fill (F) circle (1.5pt);
\end{tikzpicture}
\end{document}
```

> La figura (solo indicativa) mostra un parallelo­
> gramma ABCD di area S. Abbiamo denotato con O 
> il punto di intersezione delle diagonali, con M un 
> punto del segmento DC, con E il punto di interse­
> zione tra AM e BD e con F quello di intersezione 
> tra BM e AC. La somma delle aree dei triangoli 
> AED e BFC è S/3. Qual è il rapporto tra l’area del 
> quadrilatero EOFM e quella di ABCD?
> A) 1 / 6	 	
> B) 1 / 8 		
> C) 1 / 10	
> D) 1 / 12	
> E) 1 / 14
> A
> B
> C
> D
> M
> O
> E
> F
> 
> 1
> 2
> 3
> 4
> 5
> 6
> 7
> 8
> 9
> 10
> 11
> 12
> 13
> 14
> 15
> 16
> 17
> 18
> 19
> 20
> 21
> 22
> 23
> 24
> 25
> 26
> 27
> 28
> 29
> 30
> B
> A
> C
> E
> C
> D
> D
> D
> B
> E
> B
> A
> B
> E
> A
> A
> C
> D
> B
> D
> E
> C
> C
> B
> A
> D
> A
> D
> E
> D

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** apri PDF p.5
