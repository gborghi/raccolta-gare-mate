---
title: Giochi di Archimede 2006 - Gara Biennio — Quesito 9
tipo: quesito
quesito_id: quesito_src_archimede_2006_biennio__Q09
parent: src_archimede_2006_biennio
competition: Giochi di Archimede 2006 - Gara Biennio
family: archimede
year: '2006'
level: 'biennio, triennio'
country: Italia
modalita: individuale
quesito: '9'
summary: Lunghezza DC con DE parallelo ad AB e rapporto aree
answer: E
topics:
  - topic_geometria_piana
methods:
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2006
  - livello/biennio
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

*Lunghezza DC con DE parallelo ad AB e rapporto aree*

![[src_archimede_2006_biennio__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (C) at (0,4);
  \coordinate (D) at (0,1.5);
  \coordinate (E) at (1.875,1.5);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (D) -- (E);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above left] at (C) {$C$};
  \node[left] at (D) {$D$};
  \node[right] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> Nella figura a fianco, il segmento DE è parallelo ad AB.
> Sapendo che l’area di DEC è uguale ai 3
> 4 di quella di ABC
> e che AC misura 1 m, quanto misura DC?
>
> - **(A)** 2 − √ 3 2 m,
> - **(B)** (2 − √ 3) m,
> - **(C)** √ 3 3 m,
> - **(D)** 3 4 m,
> - **(E)** √ 3 2 m. C D E A B

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** apri PDF p.1
**Anche in triennio:** apri PDF p.1
