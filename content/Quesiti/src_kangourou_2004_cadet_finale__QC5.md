---
tipo: quesito
quesito_id: quesito_src_kangourou_2004_cadet_finale__QC5
parent: src_kangourou_2004_cadet_finale
competition: Kangourou 2004 Cadet finale nazionale
family: kangourou
year: '2004'
level: kangourou
country: Italia
modalita: individuale
quesito: C5
summary: Gradi dell'angolo NBM (rotazione)
answer: '45'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2004
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

# Kangourou 2004 Cadet finale nazionale — Quesito C5

*Gradi dell'angolo NBM (rotazione)*

![[src_kangourou_2004_cadet_finale__probC5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (B) at (0,0);
  \coordinate (C) at (2,0);
  \coordinate (D) at (2,2);
  \coordinate (A) at (0,2);
  \coordinate (N) at (1,2);
  \coordinate (M) at (2,1);
  \draw (A) -- (D) -- (C) -- (B) -- (A);
  \draw (B) -- (N);
  \draw (B) -- (M);
  \node[above left]  at (A) {$A$};
  \node[above right] at (D) {$D$};
  \node[below right] at (C) {$C$};
  \node[below left]  at (B) {$B$};
  \node[above]       at (N) {$N$};
  \node[right]       at (M) {$M$};
\end{tikzpicture}
\end{document}
```

> Il lato del quadrato $ABCD$ in figura misura $6$ cm e i segmenti $AN$ e $CM$ misurano rispettivamente $2$ cm e $3$ cm. Quanti gradi misura l'angolo $NBM$? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 45
**Fonte:** apri PDF p.1
