---
tipo: quesito
quesito_id: quesito_src_kangourou_2004_ecolier__Q18
parent: src_kangourou_2004_ecolier
competition: Kangourou 2004 Ecolier (18 marzo)
family: kangourou
year: '2004'
level: kangourou
country: Italia
quesito: '18'
summary: Da quanti triangoli il settimo (numeri quadrati)
answer: D
topics:
  - topic_combinatoria
  - topic_aritmetica
skills:
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2004
  - livello/kangourou
  - topic/combinatoria
  - topic/aritmetica
---

# Kangourou 2004 Ecolier (18 marzo) — Quesito 18

*Da quanti triangoli il settimo (numeri quadrati)*

![[src_kangourou_2004_ecolier__prob18.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  % Triangle 1: single right triangle
  \draw[thick] (0,3) -- (1,3) -- (0,4) -- cycle;
  % Triangle 2: 4 small triangles (2x2 subdivision)
  \draw[thick] (0,0.5) -- (2,0.5) -- (0,2.5) -- cycle;
  \draw[thick] (1,0.5) -- (0,1.5);
  \draw[thick] (0,1.5) -- (1,1.5);
  \draw[thick] (1,0.5) -- (1,1.5);
  % Triangle 3: 9 small triangles (3x3 subdivision)
  \draw[thick] (0,-3.5) -- (3,-3.5) -- (0,-0.5) -- cycle;
  \draw[thick] (0,-1.5) -- (2,-1.5);
  \draw[thick] (0,-2.5) -- (1,-2.5);
  \draw[thick] (1,-3.5) -- (1,-1.5);
  \draw[thick] (2,-3.5) -- (2,-1.5);
  \draw[thick] (0,-2.5) -- (1,-3.5);
  \draw[thick] (0,-1.5) -- (2,-3.5);
\end{tikzpicture}
\end{document}
```

> Qui vedi in successione tre triangoli. Il secondo ed il
> terzo sono ottenuti accostando nel modo indicato rispettivamente 4 e 9 triangoli uguali al primo. Immagina di proseguire a costruire triangoli in questo modo. Da quanti
> triangoli uguali al primo sarà costituito il settimo triangolo della serie (cioè il quarto che costruirai) ?
> A) 21      
> B) 25      
> C) 35
> D) 49                 E) 64

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** apri PDF p.4
