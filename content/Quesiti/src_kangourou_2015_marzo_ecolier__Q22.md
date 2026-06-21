---
title: Kangourou 2015 gara 19 marzo Ecolier — Quesito 22
tipo: quesito
quesito_id: quesito_src_kangourou_2015_marzo_ecolier__Q22
parent: src_kangourou_2015_marzo_ecolier
competition: Kangourou 2015 gara 19 marzo Ecolier
family: kangourou
year: '2015'
level: kangourou
country: Italia
modalita: individuale
quesito: '22'
summary: max numero
answer: D
topics:
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_casework
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2015
  - livello/kangourou
  - topic/geometria_piana
  - topic/combinatoria
  - gara/individuale
---

*max numero*

![[src_kangourou_2015_marzo_ecolier__prob22.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.8]
  \foreach \x in {0,1,2,3} {
    \foreach \y in {0,1,2,3} {
      \fill (\x, \y) circle (3pt);
    }
  }
\end{tikzpicture}
\end{document}
```

> I punti che vedi marcati in figura sono i 16 vertici di nove 
> quadratini che, accostati, formano a loro volta un quadrato. Sce­
> gliendo di volta in volta 4 fra questi 16 punti, si possono formare 
> vari quadrati, anche di aree diverse. Qual è il massimo numero di 
> quadrati ottenibile, che abbiano aree tutte diverse fra loro?
> A) 2	
>         B) 3	
>       C) 4	               D) 5	
>      E) 6

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** D
**Fonte:** apri PDF p.5
