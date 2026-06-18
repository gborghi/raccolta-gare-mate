---
tipo: quesito
quesito_id: quesito_src_kangourou_2009_benjamin_marzo__Q30
parent: src_kangourou_2009_benjamin_marzo
competition: Kangourou 2009 - Benjamin (gara 19 marzo)
family: kangourou
year: '2009'
level: kangourou
country: Italia
quesito: '30'
summary: Con quali colori la cella ombreggiata (4 colori)
answer: D
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_colorazione
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2009
  - livello/kangourou
  - topic/combinatoria
  - topic/logica
---

# Kangourou 2009 - Benjamin (gara 19 marzo) — Quesito 30

*Con quali colori la cella ombreggiata (4 colori)*

![[src_kangourou_2009_benjamin_marzo__prob30.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \fill[gray!50] (4,1) rectangle (5,2);
  \draw (0,0) grid (5,5);
  \node at (0.5,4.5) {$X$};
  \node at (1.5,4.5) {$Y$};
  \node at (0.5,3.5) {$Z$};
  \node at (1.5,3.5) {$W$};
  \node at (2.5,2.5) {$Y$};
  \node at (0.5,0.5) {$Y$};
\end{tikzpicture}
\end{document}
```

> Vogliamo colorare le celle della griglia in figura
> usando i quattro colori diversi X, Y, Z, W, in modo che
> due celle che sono a contatto non ricevano mai lo
> stesso colore (due celle si considerano a contatto se
> hanno in comune almeno un vertice). La figura mostra
> che alcuni colori sono già stati assegnati. Con quali
> colori può essere colorata la cella ombreggiata?
> A) Solo Y.
> B) Solo Z.
> C) Solo W.
> D) Indifferentemente Z o W.
> E) Non è possibile realizzare la colorazione.
> 1
> 5
> 6
> 4
> 2 10
> 12 8
> X
> Y
> Z W
> Y
> Y
> Testi_09.qxp  15-04-2009  20:25  Pagina 15
> 
> 2009 
> Categoria Benjamin 
> Per studenti del primo e secondo anno della scuola media inferiore

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** apri PDF p.6
