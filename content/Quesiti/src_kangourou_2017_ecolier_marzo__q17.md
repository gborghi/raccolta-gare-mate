---
title: Kangourou 2017 Écolier (gara marzo) — Quesito 17
tipo: quesito
quesito_id: quesito_src_kangourou_2017_ecolier_marzo__Q17
parent: src_kangourou_2017_ecolier_marzo
competition: Kangourou 2017 Écolier (gara marzo)
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '17'
summary: Quadrati per raddoppiare il perimetro di un rettangolo 1x10
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2017
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Quadrati per raddoppiare il perimetro di un rettangolo 1x10*

![[src_kangourou_2017_ecolier_marzo__prob17.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[thick] (0,0) rectangle (10,1);
  \foreach \x in {1,2,...,9} {
    \draw[thick] (\x,0) -- (\x,1);
  }
\end{tikzpicture}
\end{document}
```

> Un rettangolo ha lati lunghi 1 cm e 10 cm (come suggerito dalla figura). Di quanti 
> quadrati di lato 1 cm lo si deve prolungare per ottenere un rettangolo di perimetro 
> doppio?
> A) 9	
> 	
> B) 10	
> 	
> C) 11	
> 	
> D) 12	
> 	
> E) 20

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1qBsZ2ryuPZr8adQsZ3WyVsWvpOn1ZiFC/view)
