---
title: Kangourou 2021 Cadet - semifinale — Quesito 17
tipo: quesito
quesito_id: quesito_src_kangourou_2021_cadet_semifinale__Q17
parent: src_kangourou_2021_cadet_semifinale
competition: Kangourou 2021 Cadet - semifinale
family: kangourou
year: '2021'
level: kangourou
country: Italia
modalita: individuale
quesito: '17'
summary: Max stanze visitabili nel triangolo lato 100
answer: '9901'
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
  - anno/2021
  - livello/kangourou
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---

*Max stanze visitabili nel triangolo lato 100*

![[src_kangourou_2021_cadet_semifinale__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw[thick] (0,0) -- (3,0) -- (1.5,2.598) -- cycle;
  \draw (0.5,0.866) -- (2.5,0.866);
  \draw (1.0,1.732) -- (2.0,1.732);
  \draw (1,0) -- (0.5,0.866);
  \draw (2,0) -- (1.5,0.866);
  \draw (1.5,0.866) -- (1.0,1.732);
  \draw (2.5,0.866) -- (2.0,1.732);
  \draw (1,0) -- (1.5,0.866);
  \draw (2,0) -- (2.5,0.866);
  \draw (0.5,0.866) -- (1.0,1.732);
  \draw (1.5,0.866) -- (2.0,1.732);
\end{tikzpicture}
\end{document}
```

> (7 punti) Un triangolo equilatero di lato n =100 è ripartito in 
> triangoli equilateri di lato 1 secondo lo schema che ti suggerisce la 
> figura, in cui è rappresentato il caso n = 3. Immagina che ogni 
> triangolo piccolo rappresenti una stanza e che, in ogni suo muro 
> condiviso con una stanza adiacente, ci sia una porta. Scegliendo 
> opportunamente la stanza da cui partire, qual è il massimo numero di 
> stanze che puoi visitare se puoi passare una sola volta da ogni stanza 
> che visiti?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 9901
**Fonte:** apri PDF p.3
