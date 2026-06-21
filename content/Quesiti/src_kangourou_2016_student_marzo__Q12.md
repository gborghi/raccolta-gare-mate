---
title: Kangourou 2016 Student (gara marzo) — Quesito 12
tipo: quesito
quesito_id: quesito_src_kangourou_2016_student_marzo__Q12
parent: src_kangourou_2016_student_marzo
competition: Kangourou 2016 Student (gara marzo)
family: kangourou
year: '2016'
level: kangourou
country: Italia
modalita: individuale
quesito: '12'
summary: Numero impossibile in cima alla piramide di prodotti
answer: D
topics:
  - topic_aritmetica
methods:
  - method_congruenze
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2016
  - livello/kangourou
  - topic/aritmetica
  - gara/individuale
---

*Numero impossibile in cima alla piramide di prodotti*

![[src_kangourou_2016_student_marzo__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\w{1.2}
  \def\h{0.6}
  \draw (-1.5*\w, 0) rectangle (-0.5*\w, \h);
  \draw (-0.5*\w, 0) rectangle (0.5*\w, \h);
  \draw (0.5*\w, 0) rectangle (1.5*\w, \h);
  \draw (-\w, \h) rectangle (0, 2*\h);
  \draw (0, \h) rectangle (\w, 2*\h);
  \draw (-0.5*\w, 2*\h) rectangle (0.5*\w, 3*\h);
\end{tikzpicture}
\end{document}
```

> In ciascuno dei rettangoli che compaiono in figura si vuole scrivere un numero in modo tale che 
> tutti i rettangoli della fila più bassa contengano numeri naturali maggiori di 1 e, per ogni rettangolo 
> delle file superiori, il numero che vi è scritto sia il 
> prodotto dei numeri contenuti nei due rettangoli su 
> cui esso appoggia. Quale dei numeri seguenti non potrà mai comparire nel rettangolo 
> in cima alla figura?
> A) 56	
> 	
> B) 84	
> 	
> C) 90	
> 	
> D) 105	 	
> E) 220

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** D
**Fonte:** apri PDF p.3
