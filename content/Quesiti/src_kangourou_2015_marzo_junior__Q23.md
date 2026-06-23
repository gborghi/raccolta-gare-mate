---
title: Kangourou 2015 gara 19 marzo Junior — Quesito 23
tipo: quesito
quesito_id: quesito_src_kangourou_2015_marzo_junior__Q23
parent: src_kangourou_2015_marzo_junior
competition: Kangourou 2015 gara 19 marzo Junior
family: kangourou
year: '2015'
level: kangourou
country: Italia
modalita: individuale
quesito: '23'
summary: regione centrale
answer: A
topics:
  - topic_algebra
  - topic_logica
methods:
  - method_backward
skills:
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2015
  - livello/kangourou
  - topic/algebra
  - topic/logica
  - gara/individuale
---

*regione centrale*

![[src_kangourou_2015_marzo_junior__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % Three circles arranged in a Venn diagram
  % Centers at distance 1.2 from origin at 90, 210, 330 degrees, radius 1.5
  \draw[thick] (90:1.2) circle (1.5);
  \draw[thick] (210:1.2) circle (1.5);
  \draw[thick] (330:1.2) circle (1.5);
  % Label "1" in left petal (overlap of top and bottom-left circles)
  \node at (-0.65,0.3) {$1$};
  % Label "2" in right petal (overlap of top and bottom-right circles)
  \node at (0.65,0.3) {$2$};
  % Label "?" in central region (triple overlap)
  \node at (0,-0.25) {$?$};
\end{tikzpicture}
\end{document}
```

> I tre cerchi in figura individuano sette regioni, ognu­
> na all’interno di almeno uno di essi. In ogni regione va 
> scritto un numero, in modo che sia la somma dei numeri 
> scritti nelle regioni ad essa adiacenti (due regioni sono 
> considerate adiacenti se i loro bordi hanno più di un pun­
> to in comune). In due delle regioni il numero è già stato 
> scritto. Quale numero va scritto nella regione centrale 
> contrassegnata dal punto di domanda?
> A) 0	
> 	
> B) - 3	
> 	
> C) 3	
> 	
> D) - 6	 	
> E) 6

**Topic:** [[topic_algebra|Algebra]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1lv8vPzK3uXmG94tNsM2uWmmnksIo2fLI/view)
