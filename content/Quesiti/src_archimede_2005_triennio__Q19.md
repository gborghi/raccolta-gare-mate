---
tipo: quesito
quesito_id: quesito_src_archimede_2005_triennio__Q19
parent: src_archimede_2005_triennio
competition: Giochi di Archimede 2005 - Gara Triennio
family: archimede
year: '2005'
level: triennio
country: Italia
modalita: individuale
quesito: '19'
summary: Rapporto aree triangolo interno PQR e ABC equilatero
answer: A
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2005
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

# Giochi di Archimede 2005 - Gara Triennio — Quesito 19

*Rapporto aree triangolo interno PQR e ABC equilatero*

![[src_archimede_2005_triennio__prob19.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.9]
  \coordinate (A) at (0,0);
  \coordinate (B) at (5,0);
  \coordinate (C) at (2.5,4.330);
  \coordinate (P) at (4,0);
  \coordinate (Q) at (3,3.464);
  \coordinate (R) at (1,1.732);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (P) -- (Q) -- (R) -- cycle;
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[below] at (P) {$P$};
  \node[above right] at (Q) {$Q$};
  \node[left] at (R) {$R$};
  \fill (P) circle (1.2pt); \fill (Q) circle (1.2pt); \fill (R) circle (1.2pt);
\end{tikzpicture}
\end{document}
```

> Il triangolo ABC in figura è equilatero e ha lato 5
> m. Sapendo che AP = 4 m, BQ = 4 m, CR = 3 m,
> calcolare il rapporto tra l’area del triangolo PQR e
> l’area del triangolo ABC.
> (A) 2
> 5,
> (B) 9
> 25,
> (C) 11
> 20,
> (D) 3
> 7,
> (E) nessuna
> delle precedenti.
> C
> R
> A
> P
> B
> Q

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.2
