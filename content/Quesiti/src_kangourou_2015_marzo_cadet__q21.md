---
title: Kangourou 2015 gara 19 marzo Cadet — Quesito 21
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2015_marzo_cadet__Q21
parent: src_kangourou_2015_marzo_cadet
competition: Kangourou 2015 gara 19 marzo Cadet
family: kangourou
year: '2015'
level: kangourou
country: Italia
modalita: individuale
quesito: '21'
summary: numero centrale
answer: C
topics:
  - topic_algebra
  - topic_logica
methods:
  - method_fattorizzazione
skills:
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2015
  - livello/kangourou
  - topic/algebra
  - topic/logica
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*numero centrale*

![[src_kangourou_2015_marzo_cadet__prob21.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Seven regions: center circle + inner ring (3 sectors) + outer ring (3 sectors)
  % Three radial lines at 90, 210, 330 degrees (120 degree spacing)
  \def\ri{0.45}
  \def\ro{1.2}
  \draw[thick] (0,0) circle (\ro);
  \draw[thick] (0,0) circle (\ri);
  \draw[thick] (0,0) -- (0,\ro);
  \draw[thick] (0,0) -- ({-\ro*0.866},{-\ro*0.5});
  \draw[thick] (0,0) -- ({\ro*0.866},{-\ro*0.5});
  \node at (0,0) {$?$};
  \node at (-0.75,0) {$-4$};
  \node at (0.62,-0.35) {$2$};
\end{tikzpicture}
\end{document}
```

> Rosa vuole scrivere un numero in ciascuna delle sette regio­
> ni limitate rappresentate nel disegno. Diciamo che due regioni 
> sono confinanti se hanno una parte del contorno in comune. In 
> ogni regione il numero che viene scritto deve essere la somma 
> di tutti i numeri scritti nelle regioni con essa confinanti. Come 
> si vede, Rosa ha già inserito due numeri. Quale numero deve 
> scrivere nella regione centrale?
> A) 1 	
> 	
> B) - 2	
> 	
>  C) 6 	
> 	
> D) - 4 	 	
> E) 0

**Topic:** [[topic_algebra|Algebra]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1YFjkxNHfYQMQHrnbq7aZOresN8swX7ft/view)


<span class="qlang-split" data-lang="en"></span>


*central number*

![[src_kangourou_2015_marzo_cadet__prob21.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Seven regions: center circle + inner ring (3 sectors) + outer ring (3 sectors)
  % Three radial lines at 90, 210, 330 degrees (120 degree spacing)
  \def\ri{0.45}
  \def\ro{1.2}
  \draw[thick] (0,0) circle (\ro);
  \draw[thick] (0,0) circle (\ri);
  \draw[thick] (0,0) -- (0,\ro);
  \draw[thick] (0,0) -- ({-\ro*0.866},{-\ro*0.5});
  \draw[thick] (0,0) -- ({\ro*0.866},{-\ro*0.5});
  \node at (0,0) {$?$};
  \node at (-0.75,0) {$-4$};
  \node at (0.62,-0.35) {$2$};
\end{tikzpicture}
\end{document}
```

> Rosa wants to write a number in each of the seven limited regions in the drawing. Let's say two regions are neighbouring if they have a part of the contour in common. In each region the number to be written must be the sum of all the numbers written in the regions adjacent to it. As you can see, Rosa has already entered two numbers. What number should you write in the central region? A) 1
> 	
> B) - 2
> 	
> C) 6
> 	
> D) - 4 E) 0

**Answer:** C
[[src_kangourou_2015_marzo_cadet__Q21]]
