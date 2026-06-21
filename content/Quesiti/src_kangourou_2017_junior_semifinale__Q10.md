---
title: Kangourou 2017 Junior - Semifinale individuale — Quesito 10
tipo: quesito
quesito_id: quesito_src_kangourou_2017_junior_semifinale__Q10
parent: src_kangourou_2017_junior_semifinale
competition: Kangourou 2017 Junior - Semifinale individuale
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '10'
summary: Area regione tratteggiata con corde uguali al raggio
answer: '0100'
topics:
  - topic_geometria_piana
methods:
  - method_trigonometria
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

*Area regione tratteggiata con corde uguali al raggio*

![[src_kangourou_2017_junior_semifinale__prob10.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw (0,0) circle (2);
  \draw (-2,0) -- (2,0);
  \coordinate (A) at (-2,0);
  \coordinate (B) at (2,0);
  \coordinate (D) at (1,1.732);
  \coordinate (C) at (1,-1.732);
  \begin{scope}
    \clip (D) -- (B) -- (C) -- (1.95,-1.80) arc(-62.5:62.5:2) -- cycle;
    \foreach \y in {-1.9,-1.7,...,1.9}
      \draw[thin] (-0.5,\y) -- (2.5,\y);
  \end{scope}
  \draw (D) -- (B) -- (C);
  \draw (D) arc(60:-60:2);
  \node[left] at (A) {$A$};
  \node[right] at (B) {$B$};
  \node[above right] at (D) {$D$};
  \node[below right] at (C) {$C$};
\end{tikzpicture}
\end{document}
```

> (Punti 6) In figura vedi un cerchio di area 600. AB è un diametro e le 
> corde DB e BC sono lunghe quanto il raggio. Quanto vale l’area della re­
> gione tratteggiata?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0100
**Fonte:** apri PDF p.2
