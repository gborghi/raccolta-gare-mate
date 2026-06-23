---
title: Giochi di Archimede 1999 - Triennio — Quesito 1
tipo: quesito
quesito_id: quesito_src_archimede_1999_triennio__Q01
parent: src_archimede_1999_triennio
competition: Giochi di Archimede 1999 - Triennio
family: archimede
year: '1999'
level: triennio
country: Italia
modalita: individuale
quesito: '1'
summary: Perimetro di un frutteto rettangolare con 35 alberi
answer: C
topics:
  - topic_aritmetica
  - topic_geometria_piana
skills:
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/1999
  - livello/triennio
  - topic/aritmetica
  - topic/geometria_piana
  - gara/individuale
---

*Perimetro di un frutteto rettangolare con 35 alberi*

![[src_archimede_1999_triennio__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \foreach \y in {0,1,2,3,4} {
    \fill (0,\y) circle (2.2pt);
    \fill (1,\y) circle (2.2pt);
    \fill (4,\y) circle (2.2pt);
  }
  \foreach \y in {0,4} { \node at (2.5,\y) {$\cdots$}; }
  \node[above left] at (0,4) {$D$};
  \node[above right] at (4,4) {$C$};
  \node[below left] at (0,0) {$A$};
  \node[below right] at (4,0) {$B$};
\end{tikzpicture}
\end{document}
```

> In un frutteto rettangolare c’è un albero ogni 4 metri (come
> in figura). Sapendo che ci sono 35 alberi, quanto misura il
> perimetro del rettangolo che ha per vertici i punti in cui ci
> sono gli alberi A, B, C, D?
>
> - **(A)** 70
> - **(B)** 80
> - **(C)** 96
> - **(D)** 140
> - **(E)** non si può determinare univocamente. b A b b b b b B b b b b b b b b b b b b b b b b D b b C b b b

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/18xbub-mJ9kvsKbPPlnn6r6WueqOOsVkM/view)
