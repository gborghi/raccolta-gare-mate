---
tipo: quesito
quesito_id: quesito_src_kangourou_2021_ecolier_semifinale__Q01
parent: src_kangourou_2021_ecolier_semifinale
competition: Kangourou 2021 Ecolier - semifinale
family: kangourou
year: '2021'
level: kangourou
country: Italia
quesito: '1'
summary: Max stanze visitabili nel triangolo di 9 stanze
answer: E
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_grafi
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2021
  - livello/kangourou
  - topic/combinatoria
  - topic/logica
---

# Kangourou 2021 Ecolier - semifinale — Quesito 1

*Max stanze visitabili nel triangolo di 9 stanze*

![[src_kangourou_2021_ecolier_semifinale__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \draw[thick] (0,0) -- (3,0) -- (1.5,2.598) -- cycle;
  \draw[thick] (0.5,0.866) -- (2.5,0.866);
  \draw[thick] (1.0,1.732) -- (2.0,1.732);
  \draw[thick] (1,0) -- (1.5,0.866);
  \draw[thick] (2,0) -- (2.5,0.866);
  \draw[thick] (0.5,0.866) -- (1.0,1.732);
  \draw[thick] (1.5,0.866) -- (2.0,1.732);
  \draw[thick] (1,0) -- (0.5,0.866);
  \draw[thick] (2,0) -- (1.5,0.866);
  \draw[thick] (1.5,0.866) -- (1.0,1.732);
  \draw[thick] (2.5,0.866) -- (2.0,1.732);
  \draw[thick] (1.46,1.692) -- (1.54,1.772);
  \draw[thick] (0.96,0.826) -- (1.04,0.906);
  \draw[thick] (1.96,0.826) -- (2.04,0.906);
  \draw[thick] (0.70,1.249) -- (0.80,1.349);
  \draw[thick] (0.70,1.349) -- (0.80,1.249);
  \draw[thick] (1.20,1.249) -- (1.30,1.349);
  \draw[thick] (1.20,1.349) -- (1.30,1.249);
  \draw[thick] (0.70,0.383) -- (0.80,0.483);
  \draw[thick] (0.70,0.483) -- (0.80,0.383);
  \draw[thick] (1.20,0.383) -- (1.30,0.483);
  \draw[thick] (1.20,0.483) -- (1.30,0.383);
  \draw[thick] (1.70,0.383) -- (1.80,0.483);
  \draw[thick] (1.70,0.483) -- (1.80,0.383);
  \draw[thick] (2.20,0.383) -- (2.30,0.483);
  \draw[thick] (2.20,0.483) -- (2.30,0.383);
\end{tikzpicture}
\end{document}
```

> (2 punti) In figura vedi un triangolo grande ripartito in 9 triangoli 
> piccoli. Immagina che ogni triangolo piccolo rappresenti una stanza e 
> che le sbarrette sui suoi lati rappresentino altrettante porte che 
> permettono di passare da una stanza a quelle adiacenti. Partendo dalla 
> stanza in alto, quante stanze puoi visitare al massimo passando una sola 
> volta da ogni stanza che visiti?  
> A) 3 
>  
> B) 4 
>  
> C) 5 
>  
> D) 6 
>  
> E) 7

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** apri PDF p.1
