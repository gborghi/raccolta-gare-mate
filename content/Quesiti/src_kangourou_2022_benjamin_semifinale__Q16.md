---
tipo: quesito
quesito_id: quesito_src_kangourou_2022_benjamin_semifinale__Q16
parent: src_kangourou_2022_benjamin_semifinale
competition: Kangourou 2022 Benjamin semifinale individuale
family: kangourou
year: '2022'
level: kangourou
country: Italia
quesito: '16'
summary: Misura dell'angolo ABC tra due esagoni regolari
answer: '0015'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou 2022 Benjamin semifinale individuale — Quesito 16

*Misura dell'angolo ABC tra due esagoni regolari*

![[src_kangourou_2022_benjamin_semifinale__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw[thick, fill=yellow!70]
    ({-0.5+cos(240)},{-0.866+sin(240)}) --
    ({-0.5+cos(300)},{-0.866+sin(300)}) --
    ({-0.5+cos(0)},{-0.866+sin(0)}) --
    ({-0.5+cos(60)},{-0.866+sin(60)}) --
    ({-0.5+cos(120)},{-0.866+sin(120)}) --
    ({-0.5+cos(180)},{-0.866+sin(180)}) -- cycle;
  \draw[thick, fill=yellow!70]
    ({0.866+cos(30)},{0.5+sin(30)}) --
    ({0.866+cos(90)},{0.5+sin(90)}) --
    ({0.866+cos(150)},{0.5+sin(150)}) --
    ({0.866+cos(210)},{0.5+sin(210)}) --
    ({0.866+cos(270)},{0.5+sin(270)}) --
    ({0.866+cos(330)},{0.5+sin(330)}) -- cycle;
  \draw (0.1,0) -- (0.1,0.1) -- (0,0.1);
  \fill (0,-1.732) circle (1.5pt) node[below] {$A$};
  \fill (1.732,1) circle (1.5pt) node[right] {$B$};
  \fill (0,0) circle (1.5pt) node[below right] {$C$};
  \draw[thick] (0,-1.732) -- (0,0) -- (1.732,1);
  \draw[red, thick] (1.732,1) +({cos(210)*0.2},{sin(210)*0.2}) arc[start angle=210, end angle=240, radius=0.2];
\end{tikzpicture}
\end{document}
```

> (7 punti) La figura mostra due esagoni regolari congruenti che 
> hanno in comune solo un vertice. Due dei lati che confluiscono in quel 
> vertice sono perpendicolari. Quanti gradi misura l’angolo 𝐴𝐵𝐶
> ̂ 
> indicato?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0015
**Fonte:** apri PDF p.3
