---
title: Gara a Squadre 2026 - Semifinale 2 (nazionale) — Quesito 4
tipo: quesito
quesito_id: quesito_src_squadre_2026_semifinale_cd__Q04
parent: src_squadre_2026_semifinale_cd
competition: Gara a Squadre 2026 - Semifinale 2 (nazionale)
family: archimede
year: '2026'
level: squadre
country: Italia
modalita: squadre
quesito: '4'
summary: BG^2 con triangoli equilateri su quadrato
answer: '0373'
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2026
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

*BG^2 con triangoli equilateri su quadrato*

![[src_squadre_2026_semifinale_cd__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \coordinate (A) at (0,0);
  \coordinate (B) at (1,0);
  \coordinate (C) at (1,1);
  \coordinate (D) at (0,1);
  \coordinate (E) at (0.5,-0.866);
  \coordinate (F) at (1.866,0.5);
  \coordinate (G) at (2.366,-1.366);
  \coordinate (O) at (0.5,0.5);
  \fill[gray!20] (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw[blue] (A) -- (E) -- (B);
  \draw[blue] (B) -- (F) -- (C);
  \draw[green!70!black] (E) -- (F) -- (G) -- cycle;
  \draw[green!70!black, dashed] (B) -- (G);
  \draw[dotted,gray] (O) -- (F);
  \draw (B) ++(110:0.25) arc (110:290:0.25);
  \node[above left] at (D) {D};
  \node[above right] at (C) {C};
  \node[right] at (B) {B};
  \node[left] at (A) {A};
  \node[below] at (E) {E};
  \node[right] at (F) {F};
  \node[below right] at (G) {G};
  \node[above left] at (O) {O};
  \node[right] at (1.35,-0.15) {$150^\circ$};
  \fill (A) circle(1.5pt);
  \fill (B) circle(1.5pt);
  \fill (C) circle(1.5pt);
  \fill (D) circle(1.5pt);
  \fill (E) circle(1.5pt);
  \fill (F) circle(1.5pt);
  \fill (G) circle(1.5pt);
  \fill (O) circle(1.5pt);
\end{tikzpicture}
\end{document}
```

> L’incantesimo di Geomanzia
> Pietro Scaglioni
> Svolgendo il compito di Geomanzia, Hardy disegna un quadrato ABCD di lato 10 millibacchette; Ron costruisce
> due triangoli equilateri ABE e BCF esterni al quadrato. Hermita completa la configurazione aggiungendo il
> triangolo equilatero EFG con G dalla parte opposta di B rispetto a EF. L’incantesimo si attiverà declamando
> quanto vale BG2 (in millibacchette quadre). Cosa devono dire i tre amici?
> 150°
> A
> B
> C
> D
> E
> F
> G
> O

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0373
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1xJcBV7zza5jtyy2EFIZ1XhOIFmjz_tMy/view)
