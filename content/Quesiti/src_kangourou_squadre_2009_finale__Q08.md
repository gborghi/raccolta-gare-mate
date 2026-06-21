---
title: Kangourou Coppa a squadre 2009 - Finale (Mirabilandia) — Quesito 8
tipo: quesito
quesito_id: quesito_src_kangourou_squadre_2009_finale__Q08
parent: src_kangourou_squadre_2009_finale
competition: Kangourou Coppa a squadre 2009 - Finale (Mirabilandia)
family: kangourou
year: '2009'
level: squadre
country: Italia
modalita: squadre
quesito: '8'
summary: rettangolo 36x81 ricomposto in quadrato
answer: '0027'
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2009
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

*rettangolo 36x81 ricomposto in quadrato*

![[src_kangourou_squadre_2009_finale__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.06]
  \draw (0,0) rectangle (81,36);
  \draw (0,36) -- (27,0);
  \draw (27,36) -- (81,0);
  \draw[<->] (0,39) -- (27,39) node[midway,above] {x};
  \node[left] at (0,18) {36};
  \node[below] at (40.5,0) {81};
\end{tikzpicture}
\end{document}
```

> Il rettangolo diventa un quadrato  
> La figura mostra le linee lungo le quali Marco ha tagliato un rettangolo 
> di cartoncino, i cui lati misuravano 36 e 81 centimetri, ottenendo due 
> triangoli e un pentagono. Accostando opportunamente i tre pezzi 
> ricavati, Marco ha potuto realizzare un quadrato. Quanti centimetri è 
> lungo il segmento indicato con x?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0027
**Fonte:** apri PDF p.11
