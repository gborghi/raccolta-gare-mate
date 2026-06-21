---
title: Kangourou Finale Benjamin 2024 — Quesito B1
tipo: quesito
quesito_id: quesito_src_kangourou_2024_benjamin_finale__QB1
parent: src_kangourou_2024_benjamin_finale
competition: Kangourou Finale Benjamin 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: B1
summary: Minimo numero di chiavi e disposizione fra quattro amici
topics:
  - topic_logica
  - topic_combinatoria
methods:
  - method_estremalita
skills:
  - skill_astrazione
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/logica
  - topic/combinatoria
  - gara/individuale
---

*Minimo numero di chiavi e disposizione fra quattro amici*

![[src_kangourou_2024_benjamin_finale__probB1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\R{2}
  \draw[blue!70, line width=4pt, dash pattern=on 6pt off 4pt]
    (90:\R) arc[start angle=90, end angle=0, radius=\R];
  \draw[blue!70, line width=4pt, dash pattern=on 6pt off 4pt]
    (0:\R) arc[start angle=0, end angle=-90, radius=\R];
  \draw[blue!70, line width=4pt, dash pattern=on 6pt off 4pt]
    (-90:\R) arc[start angle=-90, end angle=-180, radius=\R];
  \draw[blue!70, line width=4pt, dash pattern=on 6pt off 4pt]
    (180:\R) arc[start angle=180, end angle=90, radius=\R];
  \node[above] at (90:\R) {$A$};
  \node[right] at (0:\R)  {$B$};
  \node[below] at (-90:\R) {$C$};
  \node[left]  at (180:\R) {$D$};
  \node at (45:1.6)   {$b$};
  \node at (-45:1.6)  {$c$};
  \node at (-135:1.6) {$d$};
  \node at (135:1.6)  {$a$};
\end{tikzpicture}
\end{document}
```

> Quattro amici vivono da soli, ciascuno in una casa diversa da quella degli altri. Non sono mai assenti da casa tutti e quattro contemporaneamente e vogliono che, se succede qualcosa nella casa di uno di loro quando è assente, almeno uno degli altri tre, trovandosi a casa propria, possa intervenire entrando con la chiave. Decidono allora di lasciare una chiave ad almeno un amico che la custodirà in casa sua in un posto noto a tutti e quattro. Qual è il minimo numero di chiavi della propria casa che ognuno deve lasciare agli amici, considerati nel loro insieme? E come vanno disposte le chiavi lasciate?

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** apri PDF p.1
