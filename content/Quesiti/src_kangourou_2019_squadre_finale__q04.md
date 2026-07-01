---
title: Kangourou Coppa squadre 2019 Finale — Quesito 4
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2019_squadre_finale__Q04
parent: src_kangourou_2019_squadre_finale
competition: Kangourou Coppa squadre 2019 Finale
family: kangourou
year: '2019'
level: squadre
country: Italia
modalita: squadre
quesito: '4'
summary: Percorsi da A a B sugli spigoli del cubo
answer: '0016'
topics:
  - topic_combinatoria
  - topic_geometria_solida
methods:
  - method_conteggio
  - method_grafi
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2019
  - livello/squadre
  - topic/combinatoria
  - topic/geometria_solida
  - gara/squadre
---
<div class="qlang-switch" data-default="it"></div>


*Percorsi da A a B sugli spigoli del cubo*

![[src_kangourou_2019_squadre_finale__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw (0,0) -- (1,0) -- (1,1) -- (0,1) -- cycle;
  \draw (0.4,0.4) -- (1.4,0.4) -- (1.4,1.4) -- (0.4,1.4) -- cycle;
  \draw (0,0) -- (0.4,0.4);
  \draw (1,0) -- (1.4,0.4);
  \draw (1,1) -- (1.4,1.4);
  \draw (0,1) -- (0.4,1.4);
  \fill (0,0) circle (2pt) node[left] {$A$};
  \fill (1.4,0.4) circle (2pt) node[right] {$B$};
\end{tikzpicture}
\end{document}
```

> Da A a B 
> Osservate il cubo in figura. Volete andare da A a B muovendovi lungo gli spigoli del 
> cubo senza mai ripassare per uno stesso vertice. In quanti modi diversi potete farlo?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_solida|Geometria solida]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 0016
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*Routes from A to B on the cube shafts*

![[src_kangourou_2019_squadre_finale__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw (0,0) -- (1,0) -- (1,1) -- (0,1) -- cycle;
  \draw (0.4,0.4) -- (1.4,0.4) -- (1.4,1.4) -- (0.4,1.4) -- cycle;
  \draw (0,0) -- (0.4,0.4);
  \draw (1,0) -- (1.4,0.4);
  \draw (1,1) -- (1.4,1.4);
  \draw (0,1) -- (0.4,1.4);
  \fill (0,0) circle (2pt) node[left] {$A$};
  \fill (1.4,0.4) circle (2pt) node[right] {$B$};
\end{tikzpicture}
\end{document}
```

> From A to B, look at the cube in the figure. You want to go from A to B by moving along the ends of the cube without ever going back over the same summit. How many different ways can you do that?

**Answer:** 0016
[[src_kangourou_2019_squadre_finale__Q04]]
