---
title: Kangourou 2006 Junior (marzo) — Quesito 30
tipo: quesito
quesito_id: quesito_src_kangourou_2006_junior_marzo__Q30
parent: src_kangourou_2006_junior_marzo
competition: Kangourou 2006 Junior (marzo)
family: kangourou
year: '2006'
level: kangourou
country: Italia
modalita: individuale
quesito: '30'
summary: Quale somma di aree vale S8 (quadrato suddiviso)
answer: A
topics:
  - topic_geometria_piana
methods:
  - method_doppio_conteggio
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2006
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Quale somma di aree vale S8 (quadrato suddiviso)*

![[src_kangourou_2006_junior_marzo__prob30.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2.5]
  % Square ABCD: A bottom-left, B top-left, C top-right, D bottom-right
  \draw (0,0) -- (0,1) -- (1,1) -- (1,0) -- cycle;
  % Points: M on AD (bottom side), N on DC (right side)
  \coordinate (M) at (0.4,0);
  \coordinate (N) at (1,0.55);
  % Lines: M and N connected to B and C forming 8 regions
  \draw (0,0) -- (M);
  \draw (M) -- (0,1);
  \draw (M) -- (1,1);
  \draw (N) -- (0,0);
  \draw (N) -- (0,1);
  % Labels
  \node[below left] at (0,0) {$A$};
  \node[above left] at (0,1) {$B$};
  \node[above right] at (1,1) {$C$};
  \node[below right] at (1,0) {$D$};
  \node[below] at (M) {$M$};
  \node[right] at (N) {$N$};
  % Region labels
  \node at (0.55,0.85) {$S_1$};
  \node at (0.9,0.75) {$S_2$};
  \node at (0.8,0.58) {$S_3$};
  \node at (0.72,0.22) {$S_4$};
  \node at (0.42,0.1) {$S_5$};
  \node at (0.17,0.08) {$S_6$};
  \node at (0.1,0.47) {$S_7$};
  \node at (0.48,0.52) {$S_8$};
\end{tikzpicture}
\end{document}
```

> Osserva la figura: ABCD è un quadrato; i punti M e N, scelti a caso rispettivamente all'interno del lato AD e del
> lato DC, sono congiunti rispettivamente
> con B e C e con A e B. Il quadrato risulta così suddiviso in otto regioni alle cui
> aree vengono attribuiti, come indicato, i
> simboli S1, S2, …, S8. Quale delle seguenti somme vale S8?
> A) S2 + S4 + S6
> B) S1 + S3 + S5 + S7
> C) S1 + S4 + S7
> D) S2 + S5 + S7
> E) S3 + S4 + S5
> S8
> S1
> S2
> S3
> S7
> S4
> S5
> S6
> B
> C
> A
> M
> D
> N
> junior_06.qxp  20/02/2006  23.44  Pagina 27
> 
>  
> 1
> Categoria Junior 
> Per studenti di seconda o terza superiore

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_doppio_conteggio|Doppio conteggio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/1UurIFSPWZThHtoTZZAXYhRKHM-eZHg4I/view)
