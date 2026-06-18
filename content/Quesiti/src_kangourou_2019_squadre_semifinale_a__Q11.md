---
tipo: quesito
quesito_id: quesito_src_kangourou_2019_squadre_semifinale_a__Q11
parent: src_kangourou_2019_squadre_semifinale_a
competition: Kangourou Coppa squadre 2019 Semifinale A
family: kangourou
year: '2019'
level: squadre
country: Italia
modalita: squadre
quesito: '11'
summary: Somma lunghezze 4 segmenti paralleli ad AC
answer: '0016'
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
  - anno/2019
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

# Kangourou Coppa squadre 2019 Semifinale A — Quesito 11

*Somma lunghezze 4 segmenti paralleli ad AC*

![[src_kangourou_2019_squadre_semifinale_a__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,5);
  \coordinate (C) at (6,0);
  \coordinate (K) at (0.4,1.0);
  \coordinate (L) at (0.8,2.0);
  \coordinate (M) at (1.2,3.0);
  \coordinate (N) at (1.6,4.0);
  \coordinate (K2) at (5.2,1.0);
  \coordinate (L2) at (4.4,2.0);
  \coordinate (M2) at (3.6,3.0);
  \coordinate (N2) at (2.8,4.0);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (K) -- (K2);
  \draw (L) -- (L2);
  \draw (M) -- (M2);
  \draw (N) -- (N2);
  \node[below left] at (A) {$A$};
  \node[above] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[left] at (K) {$K$};
  \node[left] at (L) {$L$};
  \node[left] at (M) {$M$};
  \node[left] at (N) {$N$};
\end{tikzpicture}
\end{document}
```

> Il triangolo affettato 
> I quattro punti K, L, M, N che nel disegno vedi segnati sul lato AB del 
> triangolo ABC sono tali che il segmento AK risulti congruente a NB e il 
> segmento KL risulti congruente a MN.  Da ciascuno dei quattro punti è stato 
> tracciato un segmento parallelo ad AC avente il secondo estremo sul lato BC. 
> Qual è la somma delle lunghezze di questi quattro segmenti, se AC è lungo 8?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0016
**Fonte:** apri PDF p.3
