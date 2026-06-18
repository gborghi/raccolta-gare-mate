---
tipo: quesito
quesito_id: quesito_src_garaprime_2026__Q04
parent: src_garaprime_2026
competition: XI Gara Nazionale Classi Prime 2026
family: archimede
year: '2026'
level: ''
country: Italia
quesito: '4'
summary: Area dell'esagono dall'intersezione di due quadrati
answer: A
topics:
  - topic_geometria_piana
methods:
  - method_inclusione_esclusione
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2026
  - topic/geometria_piana
---

# XI Gara Nazionale Classi Prime 2026 — Quesito 4

*Area dell'esagono dall'intersezione di due quadrati*

![[src_garaprime_2026__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (2,2);
  \coordinate (D) at (0,2);
  \coordinate (E) at (1,1);
  \coordinate (F) at (3,1);
  \coordinate (G) at (3,3);
  \coordinate (H) at (1,3);
  \draw (A)--(B)--(C)--(D)--cycle;
  \draw (E)--(F)--(G)--(H)--cycle;
  \fill[black!12] (1,1)--(2,1)--(2,2)--(1,2)--cycle;
  \foreach \p in {A,B,C,D,E,F,G,H} \fill (\p) circle (1.6pt);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below left] at (E) {$E$};
  \node[below right] at (F) {$F$};
  \node[above right] at (G) {$G$};
  \node[above left] at (H) {$H$};
\end{tikzpicture}
\end{document}
```

> Nel disegno, l’intersezione dei quadrati ABCD e EFGH, entrambi di area 12,
> è un quadrato di area 3. Quanto vale l’area dell’esagono ABFGHD?
> (A)
> 24
> (B) 36
> (C) 28
> (D) 22
> (E) 26
> A
> B
> C
> D
> E
> F
> G
> H

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.1
