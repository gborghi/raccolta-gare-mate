---
tipo: quesito
quesito_id: quesito_src_kangourou_2024_cadet_finale__QC3
parent: src_kangourou_2024_cadet_finale
competition: Kangourou Finale Cadet 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: C3
summary: Due triangoli con due lati e un'altezza uguali sono congruenti
topics:
  - topic_geometria_piana
methods:
  - method_casework
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

# Kangourou Finale Cadet 2024 — Quesito C3

*Due triangoli con due lati e un'altezza uguali sono congruenti*

![[src_kangourou_2024_cadet_finale__probC3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (1,3);
  \coordinate (B) at (0,0);
  \coordinate (C) at (1.5,0);
  \coordinate (D) at (4,0);
  \fill[blue!40] (A) -- (C) -- (D) -- cycle;
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (A) -- (C) -- (D) -- cycle;
  \node[above] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[below right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Sono dati due triangoli. Le lunghezze di due dei lati dell'uno coincidono con le lunghezze di due dei lati dell'altro e l'altezza relativa al terzo lato di uno coincide con quella relativa al terzo lato dell'altro. I due triangoli risultano necessariamente congruenti? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** apri PDF p.1
