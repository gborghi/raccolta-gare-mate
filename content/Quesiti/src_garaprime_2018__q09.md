---
title: Gara Nazionale Classi Prime 2018 — Quesito 9
tipo: quesito
lang: it
quesito_id: quesito_src_garaprime_2018__Q09
parent: src_garaprime_2018
competition: Gara Nazionale Classi Prime 2018
family: archimede
year: '2018'
level: Classi Prime
country: Italia
modalita: individuale
quesito: '9'
summary: Area della parte piu piccola tagliando rettangolo
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2018
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Area della parte piu piccola tagliando rettangolo*

![[src_garaprime_2018__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (6,3);
  \coordinate (D) at (0,3);
  \coordinate (P) at (0,1.5);
  \coordinate (Q) at (6,1.5);
  \coordinate (T) at (3,1.5);
  \draw (A)--(B)--(C)--(D)--cycle;
  \draw (P)--(Q);
  \draw (A)--(C);
  \foreach \p in {A,B,C,D,P,Q,T}{\fill (\p) circle (1.6pt);}
  \node[below left] at (A){$A$};
  \node[below right] at (B){$B$};
  \node[above right] at (C){$C$};
  \node[above left] at (D){$D$};
  \node[left] at (P){$P$};
  \node[right] at (Q){$Q$};
  \node[below right] at (T){$T$};
\end{tikzpicture}
\end{document}
```

> Una retta taglia un rettangolo R in 2 parti rettangolari di area 40 e 60. Tagliando
> ulteriormente R lungo una sua diagonale si ottengono complessivamente 4 parti.
> Qual è l’area della parte più piccola?
> A 8
> B 10
> C 12
> D 4
> E 20
> F i dati sono insufficienti perch´e la
> risposta dipende dalla forma del rettangolo

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1XzoWDlSETOE6ynBaPWQsIvAiUafgaOrc/view)


<span class="qlang-split" data-lang="en"></span>


*Area of the smallest part by cutting rectangle*

![[src_garaprime_2018__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (6,3);
  \coordinate (D) at (0,3);
  \coordinate (P) at (0,1.5);
  \coordinate (Q) at (6,1.5);
  \coordinate (T) at (3,1.5);
  \draw (A)--(B)--(C)--(D)--cycle;
  \draw (P)--(Q);
  \draw (A)--(C);
  \foreach \p in {A,B,C,D,P,Q,T}{\fill (\p) circle (1.6pt);}
  \node[below left] at (A){$A$};
  \node[below right] at (B){$B$};
  \node[above right] at (C){$C$};
  \node[above left] at (D){$D$};
  \node[left] at (P){$P$};
  \node[right] at (Q){$Q$};
  \node[below right] at (T){$T$};
\end{tikzpicture}
\end{document}
```

> A straight cut an R rectangle into two rectangular parts of area 40 and 60. By further cutting R along its diagonal we get a total of 4 parts. What is the area of the smallest part? A 8 B 10 C 12 D 4 E 20 F the data are insufficient because the answer depends on the shape of the rectangle

**Answer:** A
[[src_garaprime_2018__Q09]]
