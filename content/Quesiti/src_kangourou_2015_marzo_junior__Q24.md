---
title: Kangourou 2015 gara 19 marzo Junior — Quesito 24
tipo: quesito
quesito_id: quesito_src_kangourou_2015_marzo_junior__Q24
parent: src_kangourou_2015_marzo_junior
competition: Kangourou 2015 gara 19 marzo Junior
family: kangourou
year: '2015'
level: kangourou
country: Italia
modalita: individuale
quesito: '24'
summary: 'XA=4:1: BY:YA'
answer: D
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
  - anno/2015
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*XA=4:1: BY:YA*

![[src_kangourou_2015_marzo_junior__prob24.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Left triangle: trapezoid shaded (BX:XA=4:1, so X is 1/5 from A, i.e. 4/5 from B)
  % Triangle ABC: A=(0,0), B=(1.5,3), C=(3,0)
  % X on AB at XA:BX=1:4, so X = A + 1/5*(B-A) = (0.3, 0.6)
  % X' on BC (parallel to AC through X): X' = C + 1/5*(B-C) = (2.7, 0.6)
  % Shaded trapezoid: A, C, X', X
  \begin{scope}[xshift=0cm]
    \fill[gray!40] (0,0) -- (0.3,0.6) -- (2.7,0.6) -- (3,0) -- cycle;
    \draw[thick] (0,0) -- (1.5,3) -- (3,0) -- cycle;
    \draw (0.3,0.6) -- (2.7,0.6);
    \node[below left] at (0,0) {$A$};
    \node[above] at (1.5,3) {$B$};
    \node[below right] at (3,0) {$C$};
    \node[left] at (0.3,0.6) {$X$};
  \end{scope}
  % Right triangle: small triangle at top shaded (Y closer to B)
  % Using an illustrative ratio, say BY:YA = 3:2 (answer D)
  % Y = A + 2/5*(B-A) = (0.6, 1.2), Y' = C + 2/5*(B-C) = (2.4, 1.2)
  \begin{scope}[xshift=4.5cm]
    \fill[gray!40] (0.6,1.2) -- (1.5,3) -- (2.4,1.2) -- cycle;
    \draw[thick] (0,0) -- (1.5,3) -- (3,0) -- cycle;
    \draw (0.6,1.2) -- (2.4,1.2);
    \node[below left] at (0,0) {$A$};
    \node[above] at (1.5,3) {$B$};
    \node[below right] at (3,0) {$C$};
    \node[left] at (0.6,1.2) {$Y$};
  \end{scope}
\end{tikzpicture}
\end{document}
```

> Sul lato AB di un triangolo ABC sono indi­
> viduati due punti X e Y e da ciascuno di essi è 
> tracciato il segmento parallelo al lato AC che 
> va a terminare sul lato BC: la figura evidenzia 
> separatamente le due situazioni. Si sa che le 
> aree delle due regioni ombreggiate così indivi­
> duate (un trapezio e un triangolo) sono uguali e 
> che BX :  XA = 4 : 1. Quanto vale BY : YA ? 
> A) 1 : 1	 	
> B) 2 : 1	 	
> C) 3 : 3	 	
> D) 3 : 2	 	
> E) 4 : 3

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** apri PDF p.4
