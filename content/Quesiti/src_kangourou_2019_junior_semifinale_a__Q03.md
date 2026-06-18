---
tipo: quesito
quesito_id: quesito_src_kangourou_2019_junior_semifinale_a__Q03
parent: src_kangourou_2019_junior_semifinale_a
competition: Kangourou Coppa Junior squadre 2019 Semifinale A
family: kangourou
year: '2019'
level: kangourou
country: Italia
quesito: '3'
summary: Modi di assegnare interi all'ottagono con somme diagonali
answer: '1152'
topics:
  - topic_combinatoria
methods:
  - method_conteggio
  - method_simmetria
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2019
  - livello/kangourou
  - topic/combinatoria
---

# Kangourou Coppa Junior squadre 2019 Semifinale A — Quesito 3

*Modi di assegnare interi all'ottagono con somme diagonali*

![[src_kangourou_2019_junior_semifinale_a__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (-0.765, 1.848);
  \coordinate (B) at ( 0.765, 1.848);
  \coordinate (C) at ( 1.848, 0.765);
  \coordinate (D) at ( 1.848,-0.765);
  \coordinate (E) at ( 0.765,-1.848);
  \coordinate (F) at (-0.765,-1.848);
  \coordinate (G) at (-1.848,-0.765);
  \coordinate (H) at (-1.848, 0.765);
  \coordinate (J) at (0,0);
  \draw[thick] (A)--(B)--(C)--(D)--(E)--(F)--(G)--(H)--cycle;
  \foreach \pt in {A,B,C,D,E,F,G,H} { \fill (\pt) circle (2pt); }
  \fill (J) circle (2pt);
  \node[above]      at (A) {$A$};
  \node[above]      at (B) {$B$};
  \node[right]      at (C) {$C$};
  \node[right]      at (D) {$D$};
  \node[below]      at (E) {$E$};
  \node[below]      at (F) {$F$};
  \node[left]       at (G) {$G$};
  \node[left]       at (H) {$H$};
  \node[right]      at (J) {$J$};
\end{tikzpicture}
\end{document}
```

> Tra 1 e 9 
> I vertici e il centro dell’ottagono regolare in figura hanno ricevuto un 
> nome. In quanti diversi modi a ciascuno dei punti, vertici e centro, può 
> venire assegnato un intero tra 1 e 9 in modo che punti diversi ricevano 
> numeri diversi ma, per ogni assegnazione fissata, la somma dei tre 
> numeri che interessano le singole diagonali passanti per il centro sia 
> sempre la stessa al variare delle diagonali?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1152
**Fonte:** apri PDF p.1
