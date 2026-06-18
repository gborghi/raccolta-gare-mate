---
tipo: quesito
quesito_id: quesito_src_kangourou_2023_junior_squadre__Q07
parent: src_kangourou_2023_junior_squadre
competition: Kangourou Squadre 2023 Junior Finale 1
family: kangourou
year: '2023'
level: squadre
country: Italia
modalita: squadre
quesito: '7'
summary: 'Lunghezza FE in quadrato con AG, GF'
answer: '0216'
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
  - anno/2023
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

# Kangourou Squadre 2023 Junior Finale 1 — Quesito 7

*Lunghezza FE in quadrato con AG, GF*

![[src_kangourou_2023_junior_squadre__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.6]
  \coordinate (A) at (0,3);
  \coordinate (B) at (0,0);
  \coordinate (C) at (3,0);
  \coordinate (D) at (3,3);
  \coordinate (E) at (9,0);
  \coordinate (F) at (3,2);
  \coordinate (G) at (2.25,2.25);
  \draw (A) -- (B) -- (E) -- cycle;
  \draw (B) -- (C) -- (D) -- (A);
  \draw (B) -- (D);
  \node[above left] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[below right] at (E) {$E$};
  \node[right] at (F) {$F$};
  \node[below right] at (G) {$G$};
  \fill (G) circle (1.5pt);
  \fill (F) circle (1.5pt);
\end{tikzpicture}
\end{document}
```

> Il segmento FE 
> Osservate la figura. ABCD è un quadrato, il segmento 
> AG è lungo 81 e il segmento GF è lungo 27. Quanto è 
> lungo il segmento FE?  
>  
> F 
> G 
> D 
> B 
> A 
> C 
> E

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0216
**Fonte:** apri PDF p.2
