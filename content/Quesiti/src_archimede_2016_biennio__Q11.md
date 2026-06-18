---
tipo: quesito
quesito_id: quesito_src_archimede_2016_biennio__Q11
parent: src_archimede_2016_biennio
competition: Giochi di Archimede 2016 - Biennio
family: archimede
year: '2016'
level: biennio
country: Italia
quesito: '11'
summary: Ampiezza angolo AOC con OD=DP e angolo esterno
answer: B
topics:
  - topic_geometria_piana
methods:
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2016
  - livello/biennio
  - topic/geometria_piana
---

# Giochi di Archimede 2016 - Biennio — Quesito 11

*Ampiezza angolo AOC con OD=DP e angolo esterno*

![[src_archimede_2016_biennio__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.35]
  \coordinate (O) at (0,0);
  \coordinate (A) at (-8,0);
  \coordinate (B) at (8,0);
  \coordinate (P) at (15.22,0);
  \coordinate (C) at (-4.70,6.47);
  \coordinate (D) at (7.61,2.47);
  \draw (O) circle (8);
  \draw (A) -- (P);
  \draw (C) -- (P);
  \draw (O) -- (C);
  \draw (O) -- (D);
  \foreach \p in {O,C,D} \fill (\p) circle (4pt);
  \node[above left] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[below] at (O) {$O$};
  \node[below left] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[below right] at (P) {$P$};
\end{tikzpicture}
\end{document}
```

> Data un circonferenza γ avente centro O e diametro AB
> lungo 16 cm, sia P un punto sul prolungamento di AB dalla
> parte di B e sia r una retta passante per P, che interseca γ
> nei punti C e D (con D compreso tra C e P). Supponiamo,
> inoltre, che si abbia OD = DP e A bPC = 18°.
> Qual è
> l’ampiezza dell’angolo A bOC?
> (A) 48°
> (B) 54°
> (C) 60°
> (D) 45°
> (E) 72°
> O
> A
> B
> C
> D
> P

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** apri PDF p.2
