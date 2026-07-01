---
title: Kangourou 2017 Ecolier - Semifinale individuale — Quesito 15
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2017_ecolier_semifinale__Q15
parent: src_kangourou_2017_ecolier_semifinale
competition: Kangourou 2017 Ecolier - Semifinale individuale
family: kangourou
year: '2017'
level: kangourou
country: Italia
modalita: individuale
quesito: '15'
summary: Triangoli con vertici in punti dati non allineati
answer: '0070'
topics:
  - topic_combinatoria
  - topic_geometria_piana
methods:
  - method_conteggio
  - method_inclusione_esclusione
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2017
  - livello/kangourou
  - topic/combinatoria
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Triangoli con vertici in punti dati non allineati*

![[src_kangourou_2017_ecolier_semifinale__prob15.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % 4 dots on top row (centered between 5 bottom dots)
  \foreach \x in {0.5, 1.5, 2.5, 3.5}
    \fill (\x, 1) circle (0.18);
  % 5 dots on bottom row
  \foreach \x in {0, 1, 2, 3, 4}
    \fill (\x, 0) circle (0.18);
\end{tikzpicture}
\end{document}
```

> (Punti 8) Quanti sono i triangoli che hanno i vertici in 3 dei punti che 
> vedi in figura? (Attenzione: un triangolo non può avere vertici in tre punti 
> allineati e, dei punti in figura, i 4 sopra e i 5 sotto sono allineati.) 
>  
> Quesito N.
> punteggio
> 2
> 3
> 3
> 4
> 4
> 4
> 5
> 5
> 6
> 4
> 4
> 6
> 6
> 8
> 8
> risposta
> 0228
> 0627
> 0022
> 0018
> 0005
> 0070
> Tra le risposte al quesito 6 non compare la risposta corretta che è 8.
> B

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 0070
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


*Triangles with vertices at non-aligned data points*

![[src_kangourou_2017_ecolier_semifinale__prob15.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % 4 dots on top row (centered between 5 bottom dots)
  \foreach \x in {0.5, 1.5, 2.5, 3.5}
    \fill (\x, 1) circle (0.18);
  % 5 dots on bottom row
  \foreach \x in {0, 1, 2, 3, 4}
    \fill (\x, 0) circle (0.18);
\end{tikzpicture}
\end{document}
```

> (Points 8) How many triangles have the vertices in 3 of the points you see in the figure? (Note: a triangle cannot have vertices at three points aligned and, of the points in the figure, the 4 above and the 5 below are aligned.)
>  
> Question No. The answer to question 6 does not appear to be the correct answer which is 8. B

**Answer:** 0070
[[src_kangourou_2017_ecolier_semifinale__Q15]]
