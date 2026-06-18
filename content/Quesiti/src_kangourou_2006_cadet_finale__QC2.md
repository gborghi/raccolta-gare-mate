---
tipo: quesito
quesito_id: quesito_src_kangourou_2006_cadet_finale__QC2
parent: src_kangourou_2006_cadet_finale
competition: Kangourou 2006 - Cadet (finale nazionale)
family: kangourou
year: '2006'
level: kangourou
country: Italia
quesito: C2
summary: Traiettoria del punto medio della sbarra che scivola
answer: quarto di circonferenza
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2006
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou 2006 - Cadet (finale nazionale) — Quesito C2

*Traiettoria del punto medio della sbarra che scivola*

![[src_kangourou_2006_cadet_finale__probC2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \fill[gray!40] (-0.3,-0.3) rectangle (3.5,0);
  \fill[gray!40] (-0.3,-0.3) rectangle (0,3.5);
  \draw[thick] (0,3.5) -- (0,0) -- (3.5,0);
  \draw[line width=1.5pt] (0,3) -- (3,0);
  \filldraw (1.5,1.5) circle (3pt);
  \node[right] at (1.6,1.5) {$M$};
\end{tikzpicture}
\end{document}
```

> Una sbarra metallica, che per semplicità supponiamo filiforme e il cui punto medio è denotato con $M$, è appoggiata in piedi contro un muro e aderisce ad una parete con cui il muro fa angolo. Il muro ed il pavimento sono di marmo molto lucido, per cui lentamente la sbarra scivola, mantenendosi sempre aderente alla parete, fino ad adagiarsi sul pavimento (la figura schematizza la posizione della sbarra in un singolo istante durante il movimento: la parete è simboleggiata dal foglio). Che traiettoria descrive $M$ sulla parete? Motiva la tua affermazione. (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** quarto di circonferenza
**Fonte:** apri PDF p.1
