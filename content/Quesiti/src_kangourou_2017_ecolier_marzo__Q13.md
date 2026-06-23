---
title: Kangourou 2017 Écolier (gara marzo) — Quesito 13
tipo: quesito
quesito_id: quesito_src_kangourou_2017_ecolier_marzo__Q13
parent: src_kangourou_2017_ecolier_marzo
competition: Kangourou 2017 Écolier (gara marzo)
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '13'
summary: Massima somma di un quadrato 2x2 nella griglia 4x4
answer: D
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_estremalita
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2017
  - livello/kangourou
  - topic/combinatoria
  - topic/aritmetica
  - gara/individuale
---

*Massima somma di un quadrato 2x2 nella griglia 4x4*

![[src_kangourou_2017_ecolier_marzo__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[thick] (0,0) grid (4,4);
  \node at (0.5,3.5) {1};
  \node at (1.5,3.5) {2};
  \node at (2.5,3.5) {1};
  \node at (3.5,3.5) {3};
  \node at (0.5,2.5) {4};
  \node at (1.5,2.5) {1};
  \node at (2.5,2.5) {1};
  \node at (3.5,2.5) {2};
  \node at (0.5,1.5) {1};
  \node at (1.5,1.5) {7};
  \node at (2.5,1.5) {3};
  \node at (3.5,1.5) {2};
  \node at (0.5,0.5) {2};
  \node at (1.5,0.5) {1};
  \node at (2.5,0.5) {3};
  \node at (3.5,0.5) {1};
\end{tikzpicture}
\end{document}
```

> La figura mostra una griglia quadrata 434: in ogni sua cella 
> sono stati inseriti dei numeri. Cerca in tale griglia il quadrato 232 
> tale che la somma dei numeri nelle sue quattro celle sia la più 
> grande possibile. Quanto vale tale somma? 
> A) 11	
> 	
> B) 12	
> 	
> C) 13	
> 	
> D) 14	
> 	
> E) 15

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1qBsZ2ryuPZr8adQsZ3WyVsWvpOn1ZiFC/view)
