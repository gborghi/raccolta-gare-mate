---
tipo: quesito
quesito_id: quesito_src_kangourou_2009_ecolier_marzo__Q12
parent: src_kangourou_2009_ecolier_marzo
competition: Kangourou 2009 - Ecolier (gara 19 marzo)
family: kangourou
year: '2009'
level: kangourou
country: Italia
quesito: '12'
summary: In quanti modi completare il sudoku 4x4
answer: E
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_casework
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

# Kangourou 2009 - Ecolier (gara 19 marzo) — Quesito 12

*In quanti modi completare il sudoku 4x4*

![[src_kangourou_2009_ecolier_marzo__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw[thin] (0,0) grid (4,4);
  \draw[very thick] (0,0) rectangle (2,2);
  \draw[very thick] (2,0) rectangle (4,2);
  \draw[very thick] (0,2) rectangle (2,4);
  \draw[very thick] (2,2) rectangle (4,4);
  \node at (0.5, 2.5) {1};
  \node at (1.5, 2.5) {2};
  \node at (3.5, 1.5) {3};
  \node at (3.5, 0.5) {4};
\end{tikzpicture}
\end{document}
```

> Vuoi completare la griglia 4 x 4 in figura inserendo
> in ognuna delle caselle rimaste libere un numero scelto
> fra 1, 2, 3, 4. Vuoi farlo in modo che in ogni riga, in ogni
> colonna e in ognuna delle quattro sotto-griglie 2 x 2
> evidenziate, ogni numero appaia una e una sola volta. In
> quanti modi diversi puoi realizzare il tuo scopo?
> A) 1
> B) 2
> C) 4
> D) 8
> E) È impossibile realizzare quanto richiesto.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** apri PDF p.3
