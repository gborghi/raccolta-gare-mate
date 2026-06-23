---
title: Gara Nazionale Classi Prime 2014 — Quesito 11
tipo: quesito
quesito_id: quesito_src_archimede_2014_classiprime__Q11
parent: src_archimede_2014_classiprime
competition: Gara Nazionale Classi Prime 2014
family: archimede
year: '2014'
level: ''
country: Italia
modalita: individuale
quesito: '11'
summary: Rapporto aree dividendo trapezio coi punti medi dei lati
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2014
  - topic/geometria_piana
  - gara/individuale
---

*Rapporto aree dividendo trapezio coi punti medi dei lati*

![[src_archimede_2014_classiprime__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.1]
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (4.5,2);
  \coordinate (D) at (1.5,2);
  \coordinate (P) at (0.75,1);
  \coordinate (Q) at (5.25,1);
  \fill[black!22] (A)--(B)--(Q)--(P)--cycle;
  \fill[black!8] (P)--(Q)--(C)--(D)--cycle;
  \draw (A)--(B)--(C)--(D)--cycle;
  \draw (P)--(Q);
  \foreach \pt in {A,B,C,D,P,Q} \fill (\pt) circle (1.8pt);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[left] at (P) {$P$};
  \node[right] at (Q) {$Q$};
\end{tikzpicture}
\end{document}
```

> Nel trapezio ABCD la base maggiore AB è il doppio della base minore CD.
> Congiungendo i punti medi dei lati obliqui, il trapezio rimane diviso in due parti
> di area α e β (α è la più piccola e β la più grande). Qual è il rapporto tra α e
> β?
> A 5
> 7
> B 1
> 2
> C 2
> 3
> D 3
> 4
> E 7
> 9
> F non è determinabile dai soli dati forniti

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1n3w-XtaAUypQE2nORLZ0vfSweJgCFb2P/view)
