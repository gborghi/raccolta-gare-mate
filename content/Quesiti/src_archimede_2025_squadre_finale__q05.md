---
title: Gara a Squadre Nazionale 2025 - Finale Nazionale — Quesito 5
tipo: quesito
lang: it
quesito_id: quesito_src_archimede_2025_squadre_finale__Q05
parent: src_archimede_2025_squadre_finale
competition: Gara a Squadre Nazionale 2025 - Finale Nazionale
family: archimede
year: '2025'
level: squadre
country: Italia
modalita: squadre
quesito: '5'
summary: Area minima esagono su reticolo con vincoli su lati
answer: 0078
topics:
  - topic_geometria_analitica
  - topic_geometria_piana
methods:
  - method_coordinate
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2025
  - livello/squadre
  - topic/geometria_analitica
  - topic/geometria_piana
  - gara/squadre
---
<div class="qlang-switch" data-default="it"></div>


*Area minima esagono su reticolo con vincoli su lati*

![[src_archimede_2025_squadre_finale__prob5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.5]
  \coordinate (A) at (0,0);
  \coordinate (B) at (8,0);
  \coordinate (C) at (12,3);
  \coordinate (D) at (12,9);
  \coordinate (E) at (8,9);
  \coordinate (F) at (0,3);
  \draw[fill=gray!30] (A) -- (B) -- (C) -- (D) -- (E) -- (F) -- cycle;
  \foreach \p in {A,B,C,D,E,F} \fill (\p) circle (3pt);
  \node[below left] at (A) {$A=(0,0)$};
  \node[below] at (B) {$B=(8,0)$};
  \node[right] at (C) {$C=(12,3)$};
  \node[right] at (D) {$D=(12,9)$};
  \node[above] at (E) {$E=(8,9)$};
  \node[left] at (F) {$F=(0,3)$};
\end{tikzpicture}
\end{document}
```

> La macchina del tempo
> Dopo aver costruito le montagne russe, ϕ-neas e Ferbmat si mettono alla prova creando un portale che
> permette di viaggiare nel tempo! Hanno tracciato il progetto della loro ultima creazione su un foglio. Sul
> foglio è disegnato il portale, che è un esagono convesso ABCDEF, con le seguenti annotazioni:
> I vertici dell’esagono si trovano in punti a coordinate intere (in metri).
> I lati dell’esagono hanno lunghezze intere (in metri), tutte diverse tra loro.
> I lati opposti dell’esagono sono paralleli.
> L’angolo ˆA è retto.
> Tre lati consecutivi dell’esagono misurano, in quest’ordine, 3m, 8m e 5m.
> Per evitare paradossi temporali, il portale deve avere la forma dell’esagono di area minima che soddisfa
> tutte queste condizioni. Quanti m2 misura l’area del portale?

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]]
**Risposta:** 0078
**Fonte:** [apri PDF p.8](https://drive.google.com/file/d/1sWBJ4nme7gGHWMg0oUz1kYs-fhR87X47/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum exaggeration area on the lattice with side-boundary constraints*

![[src_archimede_2025_squadre_finale__prob5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.5]
  \coordinate (A) at (0,0);
  \coordinate (B) at (8,0);
  \coordinate (C) at (12,3);
  \coordinate (D) at (12,9);
  \coordinate (E) at (8,9);
  \coordinate (F) at (0,3);
  \draw[fill=gray!30] (A) -- (B) -- (C) -- (D) -- (E) -- (F) -- cycle;
  \foreach \p in {A,B,C,D,E,F} \fill (\p) circle (3pt);
  \node[below left] at (A) {$A=(0,0)$};
  \node[below] at (B) {$B=(8,0)$};
  \node[right] at (C) {$C=(12,3)$};
  \node[right] at (D) {$D=(12,9)$};
  \node[above] at (E) {$E=(8,9)$};
  \node[left] at (F) {$F=(0,3)$};
\end{tikzpicture}
\end{document}
```

> After building the Russian Mountains, φ-neas and Ferbmat put themselves to the test by creating a portal that allows time travel! They drew up the design of their latest creation on a sheet of paper. On the sheet is drawn the portal, which is a convex hexagon ABCDEF, with the following annotations: The vertices of the hexagon are in points of full coordinates (in meters). The sides of the hexagon have entire lengths (in meters), all different from each other. The opposite sides of the hexagon are parallel. The angle A is straight. Three consecutive sides of the axis measure, in this order, 3m, 8m and 5m. In order to avoid time paradoxes, the portal must be in the form of a minimum area hexagon that satisfies all these conditions. How many m2 is the area of the portal?

**Answer:** 0078
[[src_archimede_2025_squadre_finale__Q05]]
