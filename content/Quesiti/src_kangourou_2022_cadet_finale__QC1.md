---
title: Kangourou 2022 Cadet finale individuale — Quesito C1
tipo: quesito
quesito_id: quesito_src_kangourou_2022_cadet_finale__QC1
parent: src_kangourou_2022_cadet_finale
competition: Kangourou 2022 Cadet finale individuale
family: kangourou
year: '2022'
level: kangourou
country: Italia
modalita: individuale
quesito: C1
summary: Misura dell'angolo evidenziato con tre quadrati accostati
answer: '90'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Misura dell'angolo evidenziato con tre quadrati accostati*

![[src_kangourou_2022_cadet_finale__probC1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Three squares: top-left (0,1)-(1,2), bottom-left (0,0)-(1,1), bottom-right (1,0)-(2,1)
  \draw[thick] (0,1) rectangle (1,2);
  \draw[thick] (0,0) rectangle (1,1);
  \draw[thick] (1,0) rectangle (2,1);
  % Diagonal from top-left of top square to bottom-right of bottom-right square
  \draw[blue] (0,2) -- (2,0);
  % Diagonal from top-right of top square to bottom-left of bottom-left square
  \draw[blue] (1,2) -- (0,0);
  % Arc marking the highlighted angle at intersection
  \draw[blue] (0.667,1.333) ++(200:0.15) arc(200:315:0.15);
\end{tikzpicture}
\end{document}
```

> In figura appaiono accostati tre quadrati. Quanti gradi misura l'angolo evidenziato? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 90
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbo9K2jytgSW3Apd8Ui4HwgiuetWkwYM/view)
