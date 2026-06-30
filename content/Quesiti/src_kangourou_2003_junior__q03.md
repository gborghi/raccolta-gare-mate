---
title: Kangourou 2003 Junior (20 marzo) — Quesito 3
tipo: quesito
quesito_id: quesito_src_kangourou_2003_junior__Q03
parent: src_kangourou_2003_junior
competition: Kangourou 2003 Junior (20 marzo)
family: kangourou
year: '2003'
level: kangourou
country: Italia
modalita: individuale
quesito: '3'
summary: Quale striscia ha area maggiore
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2003
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Quale striscia ha area maggiore*

![[src_kangourou_2003_junior__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.8]
\draw[thick] (-0.5,2) -- (7.5,2) node[right] {$r$};
\draw[thick] (-0.5,0) -- (7.5,0) node[right] {$s$};
\draw[fill=gray!20] (0,0) -- (0,2) -- (1.5,2) -- (1.5,0) -- cycle;
\node at (0.75,1) {1};
\draw[<->] (0,2.4) -- (1.5,2.4) node[midway,above] {$a$};
\draw[fill=gray!20] (2,0) -- (3,2) -- (4.5,2) -- (3.5,0) -- cycle;
\node at (3.25,1) {2};
\draw[<->] (3,2.4) -- (4.5,2.4) node[midway,above] {$a$};
\draw[fill=gray!20] (4.5,0) -- (6,2) -- (7,2) -- (5.5,0) -- cycle;
\node at (5.75,1) {3};
\draw[<->] (6,2.4) -- (7,2.4) node[midway,above] {$a$};
\end{tikzpicture}
\end{document}
```

> Nella figura sono indicate tre strisce  tutte  aventi  la  stessa  ampiezza
> orizzontale  pari ad “a”.  Le due rette “r” ed
> “s” che delimitano queste strisce sono parallele. Quale striscia ha area maggiore?
> A) Le strisce hanno la stessa area
> B) La striscia 1
> C) La striscia 2
> D) La striscia 3
> E) Non è possibile rispondere se non si conosce “a”

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Xwl6H49U1GJgqlal-e-LF8SWUIVOQpLv/view)
