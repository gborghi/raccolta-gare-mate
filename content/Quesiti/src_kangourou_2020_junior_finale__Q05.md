---
tipo: quesito
quesito_id: quesito_src_kangourou_2020_junior_finale__Q05
parent: src_kangourou_2020_junior_finale
competition: Kangourou Coppa Junior squadre 2020 Finale
family: kangourou
year: '2020'
level: kangourou
country: Italia
quesito: '5'
summary: Lunghezza del piu lungo tra CD e CE
answer: 0081
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_stima
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2020
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou Coppa Junior squadre 2020 Finale — Quesito 5

*Lunghezza del piu lungo tra CD e CE*

![[src_kangourou_2020_junior_finale__prob5.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (B) at (0,4);
  \coordinate (C) at (0,0);
  \coordinate (A) at (5,0);
  \coordinate (D) at (10/3, 4/3);
  \coordinate (H) at (10/3, 0);
  \draw (B) -- (C) -- (A) -- (B);
  \draw (C) -- (D);
  \draw[dashed] (D) -- (H);
  \node[above left] at (B) {$B$};
  \node[below left] at (C) {$C$};
  \node[below right] at (A) {$A$};
  \node[right] at (D) {$D$};
  \node[below] at (H) {$H$};
\end{tikzpicture}
\end{document}
```

> Il più lungo  
> In un triangolo ABC la misura di AB è 123 quella di BC è 27 e quella di CA è 120. Considerate i due 
> punti D e E che ripartiscono il lato AB in tre segmenti di uguale lunghezza. Qual è la lunghezza del 
> più lungo tra i segmenti CD e CE? (Rispondete scrivendo l’intero più vicino).

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_stima|Stima e approssimazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0081
**Fonte:** apri PDF p.1
