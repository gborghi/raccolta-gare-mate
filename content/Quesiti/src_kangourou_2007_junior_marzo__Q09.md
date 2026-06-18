---
tipo: quesito
quesito_id: quesito_src_kangourou_2007_junior_marzo__Q09
parent: src_kangourou_2007_junior_marzo
competition: Kangourou 2007 Junior (marzo)
family: kangourou
year: '2007'
level: kangourou
country: Italia
modalita: individuale
quesito: '9'
summary: Numero regioni con 4 segmenti da A e B
answer: B
topics:
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2007
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---

# Kangourou 2007 Junior (marzo) — Quesito 9

*Numero regioni con 4 segmenti da A e B*

![[src_kangourou_2007_junior_marzo__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2.5]
  \coordinate (A) at (2,0);
  \coordinate (B) at (1.2,1.5);
  \coordinate (C) at (0,0);
  \draw[line width=1.2pt] (A) -- (B) -- (C) -- cycle;
  \node[above right] at (B) {B};
  \node[below left] at (C) {C};
  \node[below right] at (A) {A};
  \draw (A) -- (0.4,0.5);
  \draw (A) -- (0.8,1.0);
  \draw (B) -- (0.667,0);
  \draw (B) -- (1.333,0);
\end{tikzpicture}
\end{document}
```

> Nella figura vedi un triangolo ABC in cui
> dal vertice A partono due diversi segmenti
> con secondo estremo sul lato opposto, e lo
> stesso accade dal vertice B. I quattro segmenti così tracciati ripartiscono il triangolo
> in 9 regioni disgiunte (salvo per i bordi). Se
> da ciascuno dei due vertici A e B si tracciano quattro diversi segmenti, invece di due, fino ad incontrare il lato opposto, qual è il numero di regioni (disgiunte, salvo per i bordi) in cui risulta ripartito il triangolo?
> A) 16          
> B) 25    
> C) 36         
> D) 42        
> E) 49

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** apri PDF p.2
