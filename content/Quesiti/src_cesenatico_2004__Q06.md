---
tipo: quesito
quesito_id: quesito_src_cesenatico_2004__Q06
parent: src_cesenatico_2004
competition: XX Olimpiade Italiana Cesenatico 2004 - individuale
family: archimede
year: '2004'
level: nazionale
country: Italia
quesito: '6'
summary: dimostrare xyz = x+y+z+2
answer: identita dimostrata
topics:
  - topic_geometria_piana
methods:
  - method_doppio_conteggio
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2004
  - livello/nazionale
  - topic/geometria_piana
---

# XX Olimpiade Italiana Cesenatico 2004 - individuale — Quesito 6

*dimostrare xyz = x+y+z+2*

![[src_cesenatico_2004__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.9]
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (2.2,4.2);
  \coordinate (P) at (2.6,1.5);
  \coordinate (Ap) at (3.942,2.274);
  \coordinate (Bp) at (1.126,2.15);
  \coordinate (Cp) at (2.822,0);
  \draw (A)--(B)--(C)--cycle;
  \draw (A)--(Ap);
  \draw (B)--(Bp);
  \draw (C)--(Cp);
  \foreach \pt in {A,B,C,P,Ap,Bp,Cp}{\fill (\pt) circle (1.4pt);}
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[above right] at (P) {$P$};
  \node[right] at (Ap) {$A'$};
  \node[left] at (Bp) {$B'$};
  \node[below] at (Cp) {$C'$};
\end{tikzpicture}
\end{document}
```

> Sia P un punto interno ad un triangolo ABC. Le rette AP, BP
> e CP intersecano i lati di ABC in A′, B′ e C′ rispettivamente.
> Ponendo
> x = AP
> PA′,
> y = BP
> PB′,
> z = CP
> PC′,
> dimostrare che xyz = x + y + z + 2.
> 
> 
> 
> 
> 
> 
> 
> 
> A
> B
> C
> P
> C′
> A′
> E
> B′
> D
> G
> F

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_doppio_conteggio|Doppio conteggio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** identita dimostrata
**Fonte:** apri PDF p.3
