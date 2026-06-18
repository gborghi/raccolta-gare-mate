---
tipo: quesito
quesito_id: quesito_src_kangourou_2024_ecolier_finale__QE2
parent: src_kangourou_2024_ecolier_finale
competition: Kangourou Finale Ecolier 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
quesito: E2
summary: Minimo numero di chiavi e disposizione fra quattro amici
answer: '1'
topics:
  - topic_logica
  - topic_combinatoria
methods:
  - method_cassetti
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
---

# Kangourou Finale Ecolier 2024 — Quesito E2

*Minimo numero di chiavi e disposizione fra quattro amici*

![[src_kangourou_2024_ecolier_finale__probE2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[dashed, blue!60!gray, line width=2pt, dash pattern=on 6pt off 4pt]
    (90:2) arc (90:0:2);
  \draw[dashed, blue!60!gray, line width=2pt, dash pattern=on 6pt off 4pt]
    (0:2) arc (0:-90:2);
  \draw[dashed, blue!60!gray, line width=2pt, dash pattern=on 6pt off 4pt]
    (-90:2) arc (-90:-180:2);
  \draw[dashed, blue!60!gray, line width=2pt, dash pattern=on 6pt off 4pt]
    (180:2) arc (180:90:2);
  \node at (90:2.35) {$A$};
  \node at (0:2.35) {$B$};
  \node at (-90:2.35) {$C$};
  \node at (180:2.35) {$D$};
  \node at (45:2.35) {$b$};
  \node at (-45:2.35) {$c$};
  \node at (-135:2.35) {$d$};
  \node at (135:2.35) {$a$};
\end{tikzpicture}
\end{document}
```

> Quattro amici vivono da soli, ciascuno in una casa diversa da quella degli altri. Non sono mai assenti da casa tutti e quattro contemporaneamente e vogliono che, se succede qualcosa nella casa di uno di loro quando è assente, almeno uno degli altri tre, trovandosi a casa propria, possa intervenire entrando con la chiave. Decidono allora di lasciare una chiave ad almeno un amico che la custodirà in casa sua in un posto noto a tutti e quattro. Qual è il minimo numero di chiavi della propria casa che ognuno deve lasciare agli amici, considerati nel loro insieme? E come vanno disposte le chiavi lasciate?

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_cassetti|Principio dei cassetti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1
**Fonte:** apri PDF p.1
