---
title: Kangourou 2015 gara 19 marzo Ecolier — Quesito 19
tipo: quesito
quesito_id: quesito_src_kangourou_2015_marzo_ecolier__Q19
parent: src_kangourou_2015_marzo_ecolier
competition: Kangourou 2015 gara 19 marzo Ecolier
family: kangourou
year: '2015'
level: kangourou
country: Italia
modalita: individuale
quesito: '19'
summary: colore x
answer: C
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
  - anno/2015
  - livello/kangourou
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---

*colore x*

![[src_kangourou_2015_marzo_ecolier__prob19.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (1,0);
  \coordinate (C) at (2,0);
  \coordinate (D) at (3,0);
  \coordinate (P) at (0.5,1);
  \coordinate (Q) at (1.5,1);
  \coordinate (R) at (2.5,1);
  \draw (A)--(P); \draw (P)--(B); \draw (B)--(Q); \draw (Q)--(C);
  \draw (C)--(R); \draw (R)--(D);
  \draw (A)--(B); \draw (B)--(C); \draw (C)--(D);
  \node[above] at (1,1.05) {\small $x$};
  \node[above] at (2,1.05) {\small blu};
  \node[below] at (0.5,-0.05) {\small rosso};
  \node[below] at (2,-0.05) {\small rosso};
\end{tikzpicture}
\end{document}
```

> Si deve colorare ognuno dei 9 segmenti in figura sce­
> gliendo tra i colori rosso, verde e blu e facendo in modo 
> che, in ciascun triangolo, i 3 lati ricevano colori diversi. 
> Come vedi, in figura sono già stati assegnati i colori a tre 
> segmenti. Di che colore può essere il segmento segnato 
> con x? 
> A) Solo blu.	
> 	
> B) Solo verde.	
> 	
> C) Solo rosso.
> D) Ogni colore va bene.	
> E) Nessun colore va bene.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1uyscqszQ7Ea_lQVMzuEiajMqEDIWv_Tg/view)
