---
tipo: quesito
quesito_id: quesito_src_archimede_1996_biennio__Q16
parent: src_archimede_1996_biennio
competition: Giochi di Archimede 1996 - Biennio
family: archimede
year: '1996'
level: 'biennio, triennio'
country: Italia
modalita: individuale
quesito: '16'
summary: Rapporto fra aree di triangoli equilateri inscritti
answer: D
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
  - anno/1996
  - livello/biennio
  - livello/triennio
  - topic/geometria_piana
  - gara/individuale
---

# Giochi di Archimede 1996 - Biennio — Quesito 16

*Rapporto fra aree di triangoli equilateri inscritti*

![[src_archimede_1996_biennio__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (1,1.732);
  \coordinate (E) at (1,0);
  \coordinate (D) at (0.5,0.866);
  \coordinate (F) at (1.5,0.866);
  \draw[thick] (A)--(B)--(C)--cycle;
  \draw[thick] (D)--(E)--(F)--cycle;
  \foreach \p/\n in {A/below left,B/below right,C/above,D/left,E/below,F/right}
    \node[\n] at (\p) {$\p$};
\end{tikzpicture}
\end{document}
```

> Sia ABC un triangolo equilatero e DEF un altro triangolo
> equilatero in esso inscritto con AB perpendicolare a ED. Il
> rapporto fra le aree di ABC e di DEF è
> (A)
> √
> 3
> (B) 2
> (C) 5
> 2
> (D) 3
> (E) 3
> √
> 2.
> A
> E
> B
> C
> F
> D

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** apri PDF p.2
**Anche in triennio:** apri PDF p.2
