---
title: Kangourou Coppa squadre 2020 Finale — Quesito 9
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2020_squadre_finale__Q09
parent: src_kangourou_2020_squadre_finale
competition: Kangourou Coppa squadre 2020 Finale
family: kangourou
year: '2020'
level: squadre
country: Italia
modalita: squadre
quesito: '9'
summary: Altezza delle lastre rettangolari della vetrata
answer: '0075'
topics:
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2020
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---
<div class="qlang-switch" data-default="it"></div>


*Altezza delle lastre rettangolari della vetrata*

![[src_kangourou_2020_squadre_finale__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.04]
  \draw[thick] (-125,0) -- (125,0);
  \draw[thick] (125,0) arc (0:180:125);
  \foreach \x in {-100,-75,-50,-25,0,25,50,75,100} {
    \draw (\x,0) -- (\x,{sqrt(125*125-\x*\x)});
  }
  \draw[thick] (-100,75) -- (100,75);
\end{tikzpicture}
\end{document}
```

> La vetrata 
> La figura ti mostra lo schema di una finestra semicircolare chiusa con 
> una vetrata, costituita dalle lastre di vetro che vengono evidenziate. 
> Le basi (lati orizzontali) delle lastre hanno tutte la stessa lunghezza, 
> un decimo del diametro che misura 250 centimetri. Quanti centimetri 
> misura l’altezza di ognuna delle lastre rettangolari?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0075
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ouvUikm9jtg5T9XqFtDuhZcgJZXEsFwU/view)


<span class="qlang-split" data-lang="en"></span>


*Height of the rectangular sheets of the window*

![[src_kangourou_2020_squadre_finale__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.04]
  \draw[thick] (-125,0) -- (125,0);
  \draw[thick] (125,0) arc (0:180:125);
  \foreach \x in {-100,-75,-50,-25,0,25,50,75,100} {
    \draw (\x,0) -- (\x,{sqrt(125*125-\x*\x)});
  }
  \draw[thick] (-100,75) -- (100,75);
\end{tikzpicture}
\end{document}
```

> The window The figure shows you the pattern of a semi-circular window closed with a window, made up of the glass plates that are highlighted. The bases (horizontal sides) of the plates are all the same length, one tenth of a centimeter in diameter. How many centimetres does the height of each rectangular plate measure?

**Answer:** 0075
[[src_kangourou_2020_squadre_finale__Q09]]
