---
tipo: quesito
quesito_id: quesito_src_kangourou_2017_benjamin_marzo__Q29
parent: src_kangourou_2017_benjamin_marzo
competition: Kangourou 2017 Benjamin (gara marzo)
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '29'
summary: Massimo numeri dispari nella piramide di somme
answer: D
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_colorazione
skills:
  - skill_casework_accurato
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

# Kangourou 2017 Benjamin (gara marzo) — Quesito 29

*Massimo numeri dispari nella piramide di somme*

![[src_kangourou_2017_benjamin_marzo__prob29.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Row 1 (bottom): 4 boxes
  \draw (0,0) rectangle (1.5,0.8);
  \draw (1.5,0) rectangle (3.0,0.8);
  \draw (3.0,0) rectangle (4.5,0.8);
  \draw (4.5,0) rectangle (6.0,0.8);
  % Row 2: 3 boxes (offset by 0.75)
  \draw (0.75,0.8) rectangle (2.25,1.6);
  \draw (2.25,0.8) rectangle (3.75,1.6);
  \draw (3.75,0.8) rectangle (5.25,1.6);
  % Row 3: 2 boxes
  \draw (1.5,1.6) rectangle (3.0,2.4);
  \draw (3.0,1.6) rectangle (4.5,2.4);
  % Row 4 (top): 1 box
  \draw (2.25,2.4) rectangle (3.75,3.2);
\end{tikzpicture}
\end{document}
```

> Sara vuole scrivere un numero intero positivo in ogni 
> casella del disegno in modo che ogni numero al di sopra 
> della riga inferiore sia la somma dei due numeri nelle ca­
> selle immediatamente sotto a esso. Quanti numeri dispari 
> può scrivere al massimo Sara?
> A) 4	
> 	
> B) 5	
> 	
> C) 6	
> D) 7	
> 	
> E) 8

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** apri PDF p.6
