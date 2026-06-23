---
title: Kangourou 2006 Student (marzo) — Quesito 26
tipo: quesito
quesito_id: quesito_src_kangourou_2006_student_marzo__Q26
parent: src_kangourou_2006_student_marzo
competition: Kangourou 2006 Student (marzo)
family: kangourou
year: '2006'
level: kangourou
country: Italia
modalita: individuale
quesito: '26'
summary: Modi di disporre 1..6 con vincolo differenza non 3
answer: A
topics:
  - topic_combinatoria
methods:
  - method_casework
  - method_conteggio
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2006
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---

*Modi di disporre 1..6 con vincolo differenza non 3*

![[src_kangourou_2006_student_marzo__prob26.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) rectangle (3,3);
  \draw (0,2) -- (3,2);
  \draw (1,2) -- (1,3);
  \draw (2,2) -- (2,3);
  \draw (2,0) -- (2,2);
  \draw (2,1) -- (3,1);
\end{tikzpicture}
\end{document}
```

> Voglio scrivere i numeri 1, 2, 3, 4, 5, 6 all'interno
> dei quadrati che compongono la figura (uno per ogni
> quadrato) in modo che, se due quadrati sono adiacenti,
> la differenza (positiva) dei numeri scritti in essi non sia
> 3. In quanti diversi modi lo posso fare? (Quadrati che
> abbiano in comune solo un vertice non vengono considerati adiacenti.)  
> A) 3 x 25
> B) 36
> C) 63
> D) 2 x 35
> E) 3 x 52

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1PShA8Gf9KAurNlhLMnqzLgjc0kCQ4O6R/view)
