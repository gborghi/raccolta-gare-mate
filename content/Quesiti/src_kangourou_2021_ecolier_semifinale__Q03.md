---
tipo: quesito
quesito_id: quesito_src_kangourou_2021_ecolier_semifinale__Q03
parent: src_kangourou_2021_ecolier_semifinale
competition: Kangourou 2021 Ecolier - semifinale
family: kangourou
year: '2021'
level: kangourou
country: Italia
modalita: individuale
quesito: '3'
summary: Somma dei quattro numeri invisibili nel diagramma
answer: C
topics:
  - topic_logica
  - topic_combinatoria
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2021
  - livello/kangourou
  - topic/logica
  - topic/combinatoria
  - gara/individuale
---

# Kangourou 2021 Ecolier - semifinale — Quesito 3

*Somma dei quattro numeri invisibili nel diagramma*

![[src_kangourou_2021_ecolier_semifinale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2, >=latex, thick]
  \draw (0.6,3.4) rectangle (1.4,4.2);
  \draw (-0.9,1.6) rectangle (-0.1,2.4);
  \node at (-0.5,2.0) {\textbf{8}};
  \draw (0.6,1.6) rectangle (1.4,2.4);
  \draw (2.1,1.6) rectangle (2.9,2.4);
  \draw (-0.9,-0.4) rectangle (-0.1,0.4);
  \node at (-0.5,0.0) {\textbf{3}};
  \draw (0.6,-0.4) rectangle (1.4,0.4);
  \draw (2.1,-0.4) rectangle (2.9,0.4);
  \node at (2.5,0.0) {\textbf{2}};
  \draw[->] (0.6,3.4) -- (-0.1,2.4);
  \draw[->] (1.4,3.4) -- (2.1,2.4);
  \draw[->] (-0.1,2.0) -- (0.6,2.0);
  \draw[->] (2.1,2.0) -- (1.4,2.0);
  \draw[->] (1.0,1.6) -- (1.0,0.4);
  \draw[->] (0.6,0.0) -- (-0.1,0.0);
  \draw[->] (1.4,0.0) -- (2.1,0.0);
\end{tikzpicture}
\end{document}
```

> (3 punti) In questo diagramma ogni quadrato contiene un numero 
> intero diverso da tutti quelli contenuti negli altri, ma in quattro quadrati il 
> numero è invisibile. Le frecce presenti tra due quadrati sono dirette dal 
> quadrato contenente il numero più grande a quello contenente il più 
> piccolo. Qual è la somma dei numeri invisibili?  
> A) 30  
>  
> B) 28   
> C) 22   
> D) 16   
> E) 14

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** apri PDF p.1
