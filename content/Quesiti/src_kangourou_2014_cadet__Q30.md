---
tipo: quesito
quesito_id: quesito_src_kangourou_2014_cadet__Q30
parent: src_kangourou_2014_cadet
competition: Kangourou 2014 marzo Cadet
family: kangourou
year: '2014'
level: kangourou
country: Italia
modalita: individuale
quesito: '30'
summary: Minimo spigoli grigi sul bordo del quadrato piastrellato
answer: B
topics:
  - topic_combinatoria
methods:
  - method_colorazione
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2014
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---

# Kangourou 2014 marzo Cadet — Quesito 30

*Minimo spigoli grigi sul bordo del quadrato piastrellato*

![[src_kangourou_2014_cadet__prob30.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \fill[gray!40] (0,0) rectangle (1,1);
  \fill[black] (0,0) -- (1,0) -- (0.5, 0.5) -- cycle;
  \draw[thick] (0,0) rectangle (1,1);
\end{tikzpicture}
\end{document}
```

> Un quadrato di lato 5 deve essere piastrellato con pia­
> strelle quadrate di lato 1, tutte con lo stesso disegno: quello 
> mostrato in figura. Si vuole che due piastrelle adiacenti ab­
> biano sempre lo spigolo di contatto dello stesso colore, nero 
> o grigio che sia. Sul bordo del quadrato alcune piastrelle si 
> affacceranno con il loro spigolo nero e alcune con uno dei 
> loro spigoli grigi: qual è il più piccolo numero di spigoli 
> grigi che devono necessariamente comparire sul bordo del 
> quadrato? 
> A) 4	
> 	
> B) 5	
> 	
> C) 6	
> 	
> D) 7	
> 	
> E) 8
> 
> STRINGA CADET 2014
> 1
> 2
> 3
> 4
> 5
> 6
> 7
> 8
> 9
> 10
> 11
> 12
> 13
> 14
> 15
> 16
> 17
> 18
> 19
> 20
> 21
> 22
> 23
> 24
> 25
> 26
> 27
> 28
> 29
> 30
> D
> D
> A
> D
> E
> A
> B
> E
> B
> D
> E
> A
> C
> E
> E
> C
> B
> E
> D
> A
> E
> D
> B
> A
> C
> A
> B
> C
> A
> B

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** apri PDF p.6
