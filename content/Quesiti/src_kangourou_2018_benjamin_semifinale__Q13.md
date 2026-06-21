---
title: Kangourou 2018 Benjamin - Semifinale individuale — Quesito 13
tipo: quesito
quesito_id: quesito_src_kangourou_2018_benjamin_semifinale__Q13
parent: src_kangourou_2018_benjamin_semifinale
competition: Kangourou 2018 Benjamin - Semifinale individuale
family: kangourou
year: '2018'
level: kangourou
country: Italia
modalita: individuale
quesito: '13'
summary: Lunghezze del sesto listello per triangolo equilatero
answer: '0004'
topics:
  - topic_aritmetica
  - topic_geometria_piana
methods:
  - method_casework
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2018
  - livello/kangourou
  - topic/aritmetica
  - topic/geometria_piana
  - gara/individuale
---

*Lunghezze del sesto listello per triangolo equilatero*

![[src_kangourou_2018_benjamin_semifinale__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \coordinate (A) at (0,0);
  \coordinate (B) at (8,0);
  \coordinate (C) at (4,6.9282);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (1.8,3.1) -- (2.2,3.75);
  \draw[thick] (4.8,4.85) -- (5.2,5.54);
  \draw[thick] (2.9,-0.15) -- (3.1,0.15);
  \node at (1.2,4.5) {4 \textit{cm}};
  \node at (0.3,2.0) {4 \textit{cm}};
  \node at (4.8,6.2) {2 \textit{cm}};
  \node at (7.0,3.5) {6 \textit{cm}};
  \node at (1.5,-0.4) {3 \textit{cm}};
  \node at (5.5,-0.4) {5 \textit{cm}};
\end{tikzpicture}
\end{document}
```

> (Punti 6) Paola ha 5 listelli di lunghezze 2, 3, 4, 5 e 6 centimetri e può 
> scegliere la lunghezza di un sesto listello in modo da formare, usandoli 
> tutti e sei, un triangolo equilatero. Quante diverse lunghezze può avere il 
> sesto listello? (La figura ti mostra come si può costruire il triangolo con un 
> sesto listello di lunghezza 4 cm, e questa è una delle lunghezze possibili).

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** 0004
**Fonte:** apri PDF p.2
