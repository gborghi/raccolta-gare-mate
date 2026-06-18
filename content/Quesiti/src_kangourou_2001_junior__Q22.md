---
tipo: quesito
quesito_id: quesito_src_kangourou_2001_junior__Q22
parent: src_kangourou_2001_junior
competition: Kangourou 2001 - Junior (15 marzo)
family: kangourou
year: '2001'
level: kangourou
country: Italia
quesito: '22'
summary: Valore di q in funzione di p e c
answer: B
topics:
  - topic_geometria_piana
  - topic_algebra
skills:
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2001
  - livello/kangourou
  - topic/geometria_piana
  - topic/algebra
---

# Kangourou 2001 - Junior (15 marzo) — Quesito 22

*Valore di q in funzione di p e c*

![[src_kangourou_2001_junior__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (0,2.5);
  \coordinate (C) at (5,0);
  \coordinate (X) at (2.2,0);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (0.18,0) -- (0.18,0.18) -- (0,0.18);
  \draw (X) ++(0,0.08) -- ++(0,-0.16);
  \node[left] at (B) {$B$};
  \node[below left] at (A) {$A$};
  \node[below right] at (C) {$C$};
  \node[above] at (X) {$X$};
  \node[left] at (0,1.25) {$c$};
  \node[below] at (1.1,0) {$p$};
  \node[below] at (3.6,0) {$q$};
\end{tikzpicture}
\end{document}
```

> Un triangolo rettangolo ABC come in figura, con
> AB = c, AX = p  e XC = q, rappresenta un
> terreno. Jenny e Vicky camminano alla stessa
> velocità in direzioni opposte sul bordo del
> terreno, partendo entrambe allo stesso istante
> dalla posizione X. Le due ragazze si incontrano in B. Qual è il valore di q in
> funzione di p e c?

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** B
**Fonte:** apri PDF p.5
