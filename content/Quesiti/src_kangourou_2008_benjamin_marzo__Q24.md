---
title: Kangourou 2008 - Benjamin (gara 28 marzo) — Quesito 24
tipo: quesito
quesito_id: quesito_src_kangourou_2008_benjamin_marzo__Q24
parent: src_kangourou_2008_benjamin_marzo
competition: Kangourou 2008 - Benjamin (gara 28 marzo)
family: kangourou
year: '2008'
level: kangourou
country: Italia
modalita: individuale
quesito: '24'
summary: Lunghezza percorso quarto autobus
answer: C
topics:
  - topic_algebra
  - topic_logica
skills:
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2008
  - livello/kangourou
  - topic/algebra
  - topic/logica
  - gara/individuale
---

*Lunghezza percorso quarto autobus*

![[src_kangourou_2008_benjamin_marzo__prob24.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5, every node/.style={font=\small}]
  \coordinate (A) at (0, 2);
  \coordinate (B) at (1, 2);
  \coordinate (H) at (0, 1);
  \coordinate (C) at (1, 1);
  \coordinate (D) at (2, 1);
  \coordinate (G) at (0, 0);
  \coordinate (F) at (1, 0);
  \coordinate (E) at (2, 0);
  \draw (A) -- (B) -- (C) -- (H) -- (A);
  \draw (H) -- (G) -- (F) -- (C);
  \draw (F) -- (E) -- (D) -- (C);
  \node[above left] at (A) {A};
  \node[above right] at (B) {B};
  \node[left] at (H) {H};
  \node[above right] at (C) {C};
  \node[right] at (D) {D};
  \node[below left] at (G) {G};
  \node[below] at (F) {F};
  \node[below right] at (E) {E};
\end{tikzpicture}
\end{document}
```

> Il disegno mostra la mappa dei trasporti di una città. Ci sono 4 autobus
> che seguono un percorso circolare:
> - il percorso del primo, C-D-E-F-G-H-C, è lungo 17 km; 
> - il percorso del secondo, A-B-C-F-G-H-A, è lungo 12 km;
> - il percorso del terzo, A-B-C-D-E-F-G-H-A, è lungo 20 km. 
> Quanti chilometri è lungo il percorso C-F-G-H-C del quarto?
> A) 5
> B) 8          
> C) 9
> D) 12
> E) 15

**Topic:** [[topic_algebra|Algebra]], [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1Msm317j_4xwCwtEK2r_CVq5nHPQPj3BK/view)
