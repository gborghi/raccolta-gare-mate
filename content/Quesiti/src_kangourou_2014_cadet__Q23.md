---
title: Kangourou 2014 marzo Cadet — Quesito 23
tipo: quesito
quesito_id: quesito_src_kangourou_2014_cadet__Q23
parent: src_kangourou_2014_cadet
competition: Kangourou 2014 marzo Cadet
family: kangourou
year: '2014'
level: kangourou
country: Italia
modalita: individuale
quesito: '23'
summary: Area del trapezio dai triangoli delle diagonali
answer: B
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2014
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Area del trapezio dai triangoli delle diagonali*

![[src_kangourou_2014_cadet__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
  \coordinate (A) at (0, 3);
  \coordinate (B) at (2, 3);
  \coordinate (C) at (4, 0);
  \coordinate (D) at (0, 0);
  \draw[thick] (A) -- (B) -- (C) -- (D) -- cycle;
  \draw[thin] (A) -- (C);
  \draw[thin] (B) -- (D);
  \node[above left] at (A) {$A$};
  \node[above right] at (B) {$B$};
  \node[below right] at (C) {$C$};
  \node[below left] at (D) {$D$};
  \node[font=\small] at (1.0, 2.6) {$5$};
  \node[font=\small] at (0.4, 1.5) {$10$};
\end{tikzpicture}
\end{document}
```

> In figura vedi un trapezio rettangolo 
> ABCD. I numeri inseriti in due dei trian­
> goli determinati dalle diagonali del trape­
> zio denotano l’area in metri quadrati dei 
> rispettivi triangoli. Quanto vale, in metri 
> quadrati, l’area del trapezio ABCD ?
> A) 60	
> 	
> B) 45	
> 	
> C) 40	
> 	
> D) 35	
> 	
> E) 30
> A
> B
> C
> D
> 5
> 10
> 

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1quz9t5wsEEot3GuEgNf2ZiWIq5aCkB5u/view)
