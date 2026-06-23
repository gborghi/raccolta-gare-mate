---
title: Giochi di Archimede 1996 - Biennio — Quesito 20
tipo: quesito
quesito_id: quesito_src_archimede_1996_biennio__Q20
parent: src_archimede_1996_biennio
competition: Giochi di Archimede 1996 - Biennio
family: archimede
year: '1996'
level: 'biennio, triennio'
country: Italia
modalita: individuale
quesito: '20'
summary: Angolo ECD in un pentagono regolare con triangolo equilatero
answer: D
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/1996
  - livello/biennio
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

*Angolo ECD in un pentagono regolare con triangolo equilatero*

![[src_archimede_1996_biennio__prob20.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.8]
  \coordinate (A)   at (-0.5878,-0.8090);
  \coordinate (B)   at (0.5878,-0.8090);
  \coordinate (D)   at (0.9511,0.3090);
  \coordinate (top) at (0,1.0);
  \coordinate (E)   at (-0.9511,0.3090);
  \coordinate (C)   at (0,0.2093);
  \draw[thick] (A)--(B)--(D)--(top)--(E)--cycle;
  \draw[thick] (A)--(C)--(B);
  \draw[dashed] (E)--(C)--(D);
  \foreach \p/\n in {A/below,B/below,D/right,E/left}
    \node[\n] at (\p) {$\p$};
  \node[above right] at (C) {$C$};
\end{tikzpicture}
\end{document}
```

> Nel pentagono regolare disegnato a fianco, il triangolo ABC
> è equilatero. Quanto vale l’angolo convesso E bCD?
>
> - **(A)** 120°
> - **(B)** 144°
> - **(C)** 150°
> - **(D)** 168°
> - **(E)** 170°. D E B A C

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ARzIV3wHmzpV455NSIYGulflPgheKY6p/view)
**Anche in triennio:** [apri PDF p.2](https://drive.google.com/file/d/15qfoYH-L7XVAB0AqkLpKKTlskF3_jqAj/view)
