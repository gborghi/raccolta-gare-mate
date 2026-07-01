---
title: Kangourou 2014 finale Junior — Quesito 2
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2014_junior_finale__Q02
parent: src_kangourou_2014_junior_finale
competition: Kangourou 2014 finale Junior
family: kangourou
year: '2014'
level: kangourou
country: Italia
modalita: individuale
quesito: '2'
summary: Angolo NMB con punti medi di tre corde
answer: '75'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2014
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Angolo NMB con punti medi di tre corde*

![[src_kangourou_2014_junior_finale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \draw (0,0) circle (1);
  \coordinate (A) at ({cos(50)},{sin(50)});
  \coordinate (B) at ({cos(-40)},{sin(-40)});
  \coordinate (C) at ({cos(200)},{sin(200)});
  \coordinate (D) at ({cos(140)},{sin(140)});
  \coordinate (M) at ({(cos(50)+cos(-40))/2},{(sin(50)+sin(-40))/2});
  \coordinate (N) at ({(cos(-40)+cos(200))/2},{(sin(-40)+sin(200))/2});
  \coordinate (K) at ({(cos(200)+cos(140))/2},{(sin(200)+sin(140))/2});
  \draw (A) -- (B);
  \draw (B) -- (C);
  \draw (C) -- (D);
  \draw (C) -- (N) -- (B);
  \draw (K) -- (N);
  \draw (M) -- (N);
  \node[above right] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[left] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[right] at (M) {$M$};
  \node[below] at (N) {$N$};
  \node[left] at (K) {$K$};
  \filldraw (A) circle (0.02);
  \filldraw (B) circle (0.02);
  \filldraw (C) circle (0.02);
  \filldraw (D) circle (0.02);
  \filldraw (M) circle (0.02);
  \filldraw (N) circle (0.02);
  \filldraw (K) circle (0.02);
\end{tikzpicture}
\end{document}
```

> In figura si vede una circonferenza della quale i segmenti $AB$, $BC$ e $CD$ sono tre corde. I punti $M$, $N$ e $K$ sono i loro rispettivi punti medi. L'angolo $CKN$ misura 75 gradi. Quanti gradi misura l'angolo $NMB$? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 75
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1gsyU7EVfAmWfdKlyvCj0UIdYJSndEpVE/view)


<span class="qlang-split" data-lang="en"></span>


*NMB angle with three-string mean points*

![[src_kangourou_2014_junior_finale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \draw (0,0) circle (1);
  \coordinate (A) at ({cos(50)},{sin(50)});
  \coordinate (B) at ({cos(-40)},{sin(-40)});
  \coordinate (C) at ({cos(200)},{sin(200)});
  \coordinate (D) at ({cos(140)},{sin(140)});
  \coordinate (M) at ({(cos(50)+cos(-40))/2},{(sin(50)+sin(-40))/2});
  \coordinate (N) at ({(cos(-40)+cos(200))/2},{(sin(-40)+sin(200))/2});
  \coordinate (K) at ({(cos(200)+cos(140))/2},{(sin(200)+sin(140))/2});
  \draw (A) -- (B);
  \draw (B) -- (C);
  \draw (C) -- (D);
  \draw (C) -- (N) -- (B);
  \draw (K) -- (N);
  \draw (M) -- (N);
  \node[above right] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[left] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[right] at (M) {$M$};
  \node[below] at (N) {$N$};
  \node[left] at (K) {$K$};
  \filldraw (A) circle (0.02);
  \filldraw (B) circle (0.02);
  \filldraw (C) circle (0.02);
  \filldraw (D) circle (0.02);
  \filldraw (M) circle (0.02);
  \filldraw (N) circle (0.02);
  \filldraw (K) circle (0.02);
\end{tikzpicture}
\end{document}
```

> The figure shows a circumference of which the segments $AB$, $BC$ and $CD$ are three strings. The $M$, $N$ and $K$ points are their respective mean points. The angle $CKN$ is 75 degrees. How many degrees does the angle $NMB$ measure? (see figure)

**Answer:** 75
[[src_kangourou_2014_junior_finale__Q02]]
