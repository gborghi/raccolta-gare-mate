---
title: Kangourou Finale Benjamin 2024 — Quesito B1
tipo: quesito
lang: it
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
<div class="qlang-switch" data-default="it"></div>


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
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1yfwrv2r59EZD9BNqD2rssm5Ubv6rpykv/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum number of keys and arrangement between four friends*

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

> Four friends live alone, each in a different house from the others. The four of them are never absent at the same time, and they want that if something happens in one's house when he is absent, at least one of the other three, finding himself at home, can step in with the key. They then decide to leave a key to at least one friend who will keep it in his home in a place known to all four of them. What is the minimum number of keys to your own home that each of you must leave to your friends, considering them as a whole? And how are the left keys to be arranged?

[[src_kangourou_2024_benjamin_finale__QB1]]
