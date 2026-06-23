---
title: Kangourou 2013 marzo Junior — Quesito 17
tipo: quesito
quesito_id: quesito_src_kangourou_2013_junior__Q17
parent: src_kangourou_2013_junior
competition: Kangourou 2013 marzo Junior
family: kangourou
year: '2013'
level: kangourou
country: Italia
modalita: individuale
quesito: '17'
summary: Segmento più lungo tra triangoli con angoli dati
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2013
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Segmento più lungo tra triangoli con angoli dati*

![[src_kangourou_2013_junior__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2.0]
  \coordinate (P) at (-1.1, 0);
  \coordinate (S) at (0, 0.85);
  \coordinate (Q) at (0, -0.85);
  \coordinate (R) at (1.1, 0);
  \draw[fill=gray!20] (P) -- (S) -- (Q) -- cycle;
  \draw[fill=gray!40] (S) -- (Q) -- (R) -- cycle;
  \draw (P) -- (S) -- (R) -- (Q) -- (P);
  \draw (S) -- (Q);
  \node[left] at (P) {$P$};
  \node[above] at (S) {$S$};
  \node[right] at (R) {$R$};
  \node[below] at (Q) {$Q$};
  \node[right, font=\small] at (-0.85, 0) {$59^\circ$};
  \node[below right, font=\small] at (-0.05, 0.65) {$60^\circ$};
  \node[above right, font=\small] at (-0.05, -0.65) {$61^\circ$};
  \node[left, font=\small] at (0.85, 0) {$60^\circ$};
\end{tikzpicture}
\end{document}
```

> Osserva la figura. Nel triangolo PQS, l’angolo SPQ misura 
> 59° e l’angolo PSQ misura 60°; nel triangolo QRS, l’angolo 
> SQR misura 61° e l’angolo QRS misura 60°. 
> Quale dei seguenti segmenti  è il più lungo?
> A) PS	
> 	
> B) RS   	 	
> C) QS 	 	
> D) QR 	 	
> E) PQ

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1Cf2YSFVV_3507mEpFlY6gOllWb7-ck9P/view)
