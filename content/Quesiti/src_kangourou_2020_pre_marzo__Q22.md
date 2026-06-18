---
tipo: quesito
quesito_id: quesito_src_kangourou_2020_pre_marzo__Q22
parent: src_kangourou_2020_pre_marzo
competition: Kangourou 2020 Pre - gara marzo
family: kangourou
year: '2020'
level: kangourou
country: Italia
modalita: individuale
quesito: '22'
summary: Numeri possibili nel cerchio con somme uguali
answer: E
topics:
  - topic_algebra
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2020
  - livello/kangourou
  - topic/algebra
  - topic/combinatoria
  - gara/individuale
---

# Kangourou 2020 Pre - gara marzo — Quesito 22

*Numeri possibili nel cerchio con somme uguali*

![[src_kangourou_2020_pre_marzo__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) circle (0.5) node {?};
  \draw (0,1.2) circle (0.5);
  \draw (0,-1.2) circle (0.5);
  \draw (-1.2,0) circle (0.5);
  \draw (1.2,0) circle (0.5);
  \draw (0,0.5) -- (0,0.7);
  \draw (0,-0.5) -- (0,-0.7);
  \draw (-0.5,0) -- (-0.7,0);
  \draw (0.5,0) -- (0.7,0);
\end{tikzpicture}
\end{document}
```

> Carlo ha scritto ciascuno dei numeri $1, 2, 3, 4$ e $5$ in uno dei cerchi della figura facendo in modo che la somma dei $3$ numeri allineati orizzontalmente sia uguale alla somma dei $3$ numeri in colonna. Quali numeri può aver scritto nel cerchio con il punto interrogativo?
> 
> (vedi figura)
> 
> (A) Solo $5$
> (B) Solo $3$
> (C) $2$ o $3$ o $4$
> (D) Solo $1$ o $3$
> (E) $1$ o $3$ o $5$

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** apri PDF p.22
