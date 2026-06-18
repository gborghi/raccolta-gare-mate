---
tipo: quesito
quesito_id: quesito_src_kangourou_2000_studenti__Q27
parent: src_kangourou_2000_studenti
competition: Kangourou 2000 - 3 maggio (individuale)
family: kangourou
year: '2000'
level: kangourou
country: Italia
modalita: individuale
quesito: '27'
summary: Misura angolo BAC in figura
answer: A
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2000
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

# Kangourou 2000 - 3 maggio (individuale) — Quesito 27

*Misura angolo BAC in figura*

![[src_kangourou_2000_studenti__prob27.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \coordinate (A) at (0.5, 1.866);
  \coordinate (B) at (0, 1);
  \coordinate (C) at (0, 0);
  \coordinate (D) at (1, 0);
  \coordinate (E) at (1, 1);
  \draw[line width=1.5pt] (A) -- (B) -- (C) -- (D) -- (E) -- (A);
  \draw[dotted, line width=1.2pt] (A) -- (C);
  \node[above] at (A) {$A$};
  \node[left] at (B) {$B$};
  \node[below left] at (C) {$C$};
  \node[below right] at (D) {$D$};
  \node[right] at (E) {$E$};
  \node[left, font=\small] at (0.25, 1.433) {$1$};
  \node[right, font=\small] at (0.75, 1.433) {$1$};
  \node[left, font=\small] at (0, 0.5) {$1$};
  \node[right, font=\small] at (1, 0.5) {$1$};
  \node[below, font=\small] at (0.5, 0) {$1$};
\end{tikzpicture}
\end{document}
```

> Nella figura, l'angolo BÂC misura:
> A) 15° 
> B)12°  
> C) 30°  
> D) 20°  
> E) altro

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** A
**Fonte:** apri PDF p.2
