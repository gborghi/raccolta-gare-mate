---
tipo: quesito
quesito_id: quesito_src_archimede_2002_biennio__Q04
parent: src_archimede_2002_biennio
competition: Giochi di Archimede 2002 - Biennio
family: archimede
year: '2002'
level: 'biennio, triennio'
country: Italia
quesito: '4'
summary: Rapporto perimetro figura ad archi su perimetro quadrato
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2002
  - livello/biennio
  - livello/triennio
  - topic/geometria_piana
---

# Giochi di Archimede 2002 - Biennio — Quesito 4

*Rapporto perimetro figura ad archi su perimetro quadrato*

![[src_archimede_2002_biennio__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!60] (2,0) arc (0:90:2) arc (270:360:2) arc (180:270:2) arc (90:180:2) -- cycle;
  \draw[thick] (0,0) rectangle (4,4);
  \draw[thick] (2,0) arc (0:90:2);
  \draw[thick] (4,2) arc (90:180:2);
  \draw[thick] (2,4) arc (180:270:2);
  \draw[thick] (0,2) arc (270:360:2);
\end{tikzpicture}
\end{document}
```

> Nel quadrato a fianco, gli archi sono tutti dei quarti di circonferenze e hanno, a due a due, gli estremi in comune. Il
> rapporto fra il perimetro della figura in grigio e il perimetro
> del quadrato
> (A) è 1
> 4
> (B) è 1
> π
> (C) è π
> 4
> (D) è 1
> 2
> (E) non può essere determinato con le informazioni date.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** apri PDF p.1
**Anche in triennio:** apri PDF p.1
