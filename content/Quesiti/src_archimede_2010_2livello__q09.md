---
title: Archimede Gara 2° livello 2010 (biennio/triennio) — Quesito 9
tipo: quesito
quesito_id: quesito_src_archimede_2010_2livello__Q09
parent: src_archimede_2010_2livello
competition: Archimede Gara 2° livello 2010 (biennio/triennio)
family: archimede
year: '2010'
level: 2 livello
country: Italia
modalita: individuale
quesito: '9'
summary: Area al sicuro dentro base triangolare equilatera lato 8
answer: A
topics:
  - topic_geometria_piana
  - topic_trigonometria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2010
  - livello/2-livello
  - topic/geometria_piana
  - topic/trigonometria
  - gara/individuale
---

*Area al sicuro dentro base triangolare equilatera lato 8*

![[src_archimede_2010_2livello__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.6]
  \coordinate (A) at (0,0);
  \coordinate (B) at (8,0);
  \coordinate (C) at (4,6.928);
  \coordinate (Ap) at (1.732,1);
  \coordinate (Bp) at (6.268,1);
  \coordinate (Cp) at (4,4.928);
  \coordinate (H) at (1.732,0);
  \coordinate (K) at (6.268,0);
  \draw (A)--(B)--(C)--cycle;
  \draw (Ap)--(Bp)--(Cp)--cycle;
  \draw[dashed] (A)--(Cp);
  \draw (Ap)--(H);
  \draw (Bp)--(K);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above] at (C) {$C$};
  \node[below] at (Ap) {$A'$};
  \node[below] at (Bp) {$B'$};
  \node[above] at (Cp) {$C'$};
  \node[below] at (H) {$H$};
  \node[below] at (K) {$K$};
\end{tikzpicture}
\end{document}
```

> I rossi e i verdi stanno facendo una battaglia a gavettoni. La base dei rossi è un’area a forma di
> triangolo equilatero di lato 8 metri. I verdi non possono entrare nella base dei rossi, ma possono
> lanciare i loro proiettili nella base stando comunque fuori dal perimetro.
> Sapendo che i verdi
> riescono a colpire un bersaglio fino ad una distanza massima di 1 metro, quanto è grande (in metri
> quadrati) la zona all’interno della base dei rossi al sicuro dalla portata di tiro dei verdi?
>
> - **(A)** 19 √ 3 −24
> - **(B)** 4 √ 3
> - **(C)** 3 √ 3
> - **(D)** 19 −8 √ 3
> - **(E)** ogni punto dell’area rossa è a portata di tiro dei verdi.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/1tedTZXLU_TRRufsNP-Far7qtMsF684Nj/view)
