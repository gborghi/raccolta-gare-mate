---
title: Kangourou 2018 Cadet - Semifinale individuale — Quesito 11
tipo: quesito
quesito_id: quesito_src_kangourou_2018_cadet_semifinale__Q11
parent: src_kangourou_2018_cadet_semifinale
competition: Kangourou 2018 Cadet - Semifinale individuale
family: kangourou
year: '2018'
level: kangourou
country: Italia
modalita: individuale
quesito: '11'
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

![[src_kangourou_2018_cadet_semifinale__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.8]
  \coordinate (A) at (0,0);
  \coordinate (B) at (8,0);
  \coordinate (C) at (4,6.928);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (3,-0.12) -- (3,0.12);
  \node[below] at (1.5,-0.05) {$3\,cm$};
  \node[below] at (5.5,-0.05) {$5\,cm$};
  \draw (2.130, 3.389) -- (1.870, 3.539);
  \node[left] at (1.5, 5.2) {$4\,cm$};
  \node[left] at (1.0, 1.73) {$4\,cm$};
  \draw (5.130, 5.271) -- (4.870, 5.121);
  \node[right] at (6.5, 5.5) {$2\,cm$};
  \node[right] at (7.0, 2.0) {$6\,cm$};
\end{tikzpicture}
\end{document}
```

> (Punti 5) Cinzia ha 5 listelli di lunghezze 2, 3, 4, 5 e 6 centimetri e può 
> scegliere la lunghezza di un sesto listello in modo da formare, usandoli 
> tutti e sei, un triangolo equilatero. Quante diverse lunghezze può avere il 
> sesto listello? (La figura ti mostra come si può costruire il triangolo con un 
> sesto listello di lunghezza 4 cm, e questa è una delle lunghezze possibili).

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** 0004
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1kVLsfgriHzHWeJPk7c69FlUrtxeTTMzS/view)
