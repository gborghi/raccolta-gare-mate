---
title: Kangourou 2003 Cadet (20 marzo) — Quesito 22
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2003_cadet__Q22
parent: src_kangourou_2003_cadet
competition: Kangourou 2003 Cadet (20 marzo)
family: kangourou
year: '2003'
level: kangourou
country: Italia
modalita: individuale
quesito: '22'
summary: Area triangolo PQT in frazione del rettangolo
answer: B
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
  - anno/2003
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Area triangolo PQT in frazione del rettangolo*

![[src_kangourou_2003_cadet__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (C) at (3,2);
  \coordinate (D) at (0,2);
  \coordinate (P) at (1.5,0);
  \coordinate (Q) at (3,1);
  \coordinate (R) at (1.5,2);
  \coordinate (S) at (0,1);
  \coordinate (T) at (0.75,1.5);
  \draw (A) rectangle (C);
  \fill[gray!30] (P) -- (Q) -- (T) -- cycle;
  \draw (P) -- (Q) -- (T) -- cycle;
  \draw (S) -- (T);
  \draw (S) -- (P);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below] at (P) {$P$};
  \node[right] at (Q) {$Q$};
  \node[above] at (R) {$R$};
  \node[left] at (S) {$S$};
  \node[above left] at (T) {$T$};
  \foreach \pt in {P,Q,R,S,T}
    \fill (\pt) circle (1.5pt);
\end{tikzpicture}
\end{document}
```

> Denotiamo con P, Q, R e S i punti medi rispettivamente dei lati AB, BC, CD e AD  del rettangolo
> ABCD in figura e con T il punto medio del segmento
> RS. Allora l'area del triangolo PQT è 
> A) 5/16
> B) 1/4 
> C) 1/5
> D) 1/6
> E) 3/8
> dell'area del rettangolo ABCD.
> 
> Pag. 
> Pag. 20
> 20
> Kang 2003
> Kang 2003

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1eygrPRLv8IqHr90bPrLsox-FA6V93kRL/view)


<span class="qlang-split" data-lang="en"></span>


*PQT triangle area by fraction of the rectangle*

![[src_kangourou_2003_cadet__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (C) at (3,2);
  \coordinate (D) at (0,2);
  \coordinate (P) at (1.5,0);
  \coordinate (Q) at (3,1);
  \coordinate (R) at (1.5,2);
  \coordinate (S) at (0,1);
  \coordinate (T) at (0.75,1.5);
  \draw (A) rectangle (C);
  \fill[gray!30] (P) -- (Q) -- (T) -- cycle;
  \draw (P) -- (Q) -- (T) -- cycle;
  \draw (S) -- (T);
  \draw (S) -- (P);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below] at (P) {$P$};
  \node[right] at (Q) {$Q$};
  \node[above] at (R) {$R$};
  \node[left] at (S) {$S$};
  \node[above left] at (T) {$T$};
  \foreach \pt in {P,Q,R,S,T}
    \fill (\pt) circle (1.5pt);
\end{tikzpicture}
\end{document}
```

> We denote with P, Q, R and S the mean points of the sides AB, BC, CD and AD respectively of the ABCD rectangle in the figure and with T the mean point of the RS segment. So the area of the PQT triangle is A) 5/16 B) 1/4 C) 1/5 D) 1/6 E) 3/8 of the area of the ABCD rectangle.
> 
> I'm going to pay. I'm going to pay. 20 20 Kang 2003 Kang

**Answer:** B
[[src_kangourou_2003_cadet__Q22]]
