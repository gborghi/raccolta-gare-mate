---
tipo: quesito
quesito_id: quesito_src_kangourou_2021_student_semifinale__Q16
parent: src_kangourou_2021_student_semifinale
competition: Kangourou 2021 Student semifinale individuale
family: kangourou
year: '2021'
level: kangourou
country: Italia
modalita: individuale
quesito: '16'
summary: Valore di n per stanze visitate vicino a 2021
answer: '0045'
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
  - anno/2021
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---

# Kangourou 2021 Student semifinale individuale — Quesito 16

*Valore di n per stanze visitate vicino a 2021*

![[src_kangourou_2021_student_semifinale__prob16.png]]

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
\end{tikzpicture}
\end{document}
```

> (7 punti) Un triangolo equilatero di lato n è ripartito in 
> triangoli equilateri di lato 1 secondo lo schema che ti suggerisce 
> la figura, in cui è rappresentato il caso n = 3. Immagina che ogni 
> triangolo piccolo rappresenti una stanza e che, in ogni suo muro 
> condiviso con una stanza adiacente, ci sia una porta. Scegliendo 
> opportunamente la stanza da cui partire, il massimo numero di 
> stanze che possono essere visitate passando una sola volta da ogni 
> stanza visitata è il più vicino possibile a 2021. Quanto vale n?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0045
**Fonte:** apri PDF p.3
