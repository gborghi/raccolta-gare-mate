---
title: Kangourou 2014 marzo Ecolier — Quesito 22
tipo: quesito
quesito_id: quesito_src_kangourou_2014_ecolier__Q22
parent: src_kangourou_2014_ecolier
competition: Kangourou 2014 marzo Ecolier
family: kangourou
year: '2014'
level: kangourou
country: Italia
modalita: individuale
quesito: '22'
summary: Minimo linee per pareggiare i vagoni nelle stazioni
answer: A
topics:
  - topic_combinatoria
methods:
  - method_grafi
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2014
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---

*Minimo linee per pareggiare i vagoni nelle stazioni*

![[src_kangourou_2014_ecolier__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.9, every node/.style={circle, fill=black, inner sep=2pt}]
  \node[label=above left:{\small 2}] (n2) at (0, 2.2) {};
  \node[label=below left:{\small 7}] (n7) at (0, 0) {};
  \node[label=above:{\small 6}] (n6) at (1.1, 1.1) {};
  \node[label=above:{\small 1}] (n1) at (2.0, 1.1) {};
  \node[label=right:{\small 4}] (n4) at (3.0, 1.1) {};
  \draw (n2) -- (n6);
  \draw (n2) -- (n1);
  \draw (n2) -- (n4);
  \draw (n2) -- (n7);
  \draw (n6) -- (n4);
  \draw (n7) -- (n6);
  \draw (n7) -- (n1);
  \draw (n7) -- (n4);
\end{tikzpicture}
\end{document}
```

> Osserva la figura. I 5 punti rappresentano altrettante stazioni 
> e i segmenti che le collegano rappresentano delle linee ferro­
> viarie. Il numero accanto ad ogni stazione indica quanti vagoni 
> sono presenti in quella stazione. Una locomotiva fa servizio fra 
> le varie stazioni: ad ogni stazione può lasciare o prelevare alcuni 
> vagoni. Se parte dalla stazione dove ci sono più vagoni, qual è il 
> minor numero di linee che le basta percorrere per fare in modo 
> che, al termine dei suoi viaggi, in tutte le stazioni sia presente lo 
> stesso numero di vagoni? 
> A) 3	
> 	
> B) 4	
> 	
> C) 5	
> 	
> D) 6	
> 	
> E) 7

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1bTZAHwigvfKa7LzCS0m6BPHbgPYI-FWO/view)
