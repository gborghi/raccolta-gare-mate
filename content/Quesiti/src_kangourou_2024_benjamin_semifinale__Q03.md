---
title: Kangourou Semifinale individuale Benjamin 2024 — Quesito 3
tipo: quesito
quesito_id: quesito_src_kangourou_2024_benjamin_semifinale__Q03
parent: src_kangourou_2024_benjamin_semifinale
competition: Kangourou Semifinale individuale Benjamin 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: '3'
summary: 'Numero al posto del punto interrogativo, consecutivi non connessi'
answer: B
topics:
  - topic_logica
  - topic_combinatoria
methods:
  - method_casework
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/logica
  - topic/combinatoria
  - gara/individuale
---

*Numero al posto del punto interrogativo, consecutivi non connessi*

![[src_kangourou_2024_benjamin_semifinale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[every node/.style={draw,circle,minimum size=0.7cm,thick}]
  \node (q) at (0,0) {?};
  \node (c) at (1.5,0) {};
  \node (t) at (3,0.8) {};
  \node (b) at (3,-0.8) {};
  \node (r) at (4.5,0) {};
  \draw[thick] (q)--(c)--(t)--(r)--(b)--(c);
\end{tikzpicture}
\end{document}
```

> (Punti 3) Ciascuno dei numeri 1, 2, 3, 4, 5 va collocato in 
> uno dei cerchi in figura (uno solo per cerchio) in modo che 
> due numeri consecutivi non stiano mai in due cerchi 
> connessi da un segmento. Quale numero va collocato al 
> posto del punto di domanda?  
> A) Solo 2.                   B) Solo 3.               C) 2 oppure 4. 
> D) 1 oppure 5.          E) Solo 1. 
> Risposta: B). Soluzione. Per verifica diretta sui 5 numeri. (bisogna che i vertici del rombo contengano 
> coppie di numeri consecutivi disposti ai vertici opposti)

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** apri PDF p.1
