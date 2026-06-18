---
tipo: quesito
quesito_id: quesito_src_kangourou_2014_squadre_f__Q03
parent: src_kangourou_2014_squadre_f
competition: Kangourou Coppa Squadre 2014 Finale
family: kangourou
year: '2014'
level: squadre
country: Italia
quesito: '3'
summary: Area regione ombreggiata cerchio inscritto in quadrato
answer: '27'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2014
  - livello/squadre
  - topic/geometria_piana
---

# Kangourou Coppa Squadre 2014 Finale — Quesito 3

*Area regione ombreggiata cerchio inscritto in quadrato*

![[src_kangourou_2014_squadre_f__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) rectangle (4,4);
  \draw (2,2) circle (2);
  \begin{scope}
    \clip (0,0) rectangle (4,4);
    \fill[gray!50] (2,2) circle (2);
    \fill[white] (0,4) -- (4,4) -- (0,0) -- cycle;
  \end{scope}
  \draw (0,0) rectangle (4,4);
  \draw (2,2) circle (2);
\end{tikzpicture}
\end{document}
```

> Cerchio e quadrato  
> Osservate la figura. Un cerchio è inscritto in un quadrato di lato 8 metri. Qual è 
> l'area, in metri quadrati, della regione ombreggiata? (Scrivete il numero intero 
> più vicino al risultato esatto.)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 27
**Fonte:** apri PDF p.1
