---
tipo: quesito
quesito_id: quesito_src_kangourou_2024_junior_semifinale__Q02
parent: src_kangourou_2024_junior_semifinale
competition: Kangourou Semifinale individuale Junior 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
quesito: '2'
summary: Area dell'ottagono regolare con quadrato inscritto di area 2
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou Semifinale individuale Junior 2024 — Quesito 2

*Area dell'ottagono regolare con quadrato inscritto di area 2*

![[src_kangourou_2024_junior_semifinale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A0) at (0.924, 0.383);
  \coordinate (A1) at (0.383, 0.924);
  \coordinate (A2) at (-0.383, 0.924);
  \coordinate (A3) at (-0.924, 0.383);
  \coordinate (A4) at (-0.924, -0.383);
  \coordinate (A5) at (-0.383, -0.924);
  \coordinate (A6) at (0.383, -0.924);
  \coordinate (A7) at (0.924, -0.383);
  \draw (A0) -- (A1) -- (A2) -- (A3) -- (A4) -- (A5) -- (A6) -- (A7) -- cycle;
  \draw (A1) -- (A3) -- (A5) -- (A7) -- cycle;
  \fill (A1) circle (0.04);
  \fill (A3) circle (0.04);
  \fill (A5) circle (0.04);
  \fill (A7) circle (0.04);
\end{tikzpicture}
\end{document}
```

> (Punti 3) La figura mostra un ottagono regolare e un quadrato inscritto in esso, i 
> cui vertici sono quattro dei vertici dell’ottagono. L’area del quadrato è 2. Quanto 
> vale l’area dell’ottagono?  
> A) 1 + √2              B) 5/2             C) 2√2             D) 3            E) 3√2 – 1  
> Risposta C). Soluzione. Il lato del quadrato misura √2 e la sua 
> diagonale misura 2. L’ottagono è esprimibile come unione degli otto triangoli isosceli 
> che si ottengono congiungendo i vertici con il centro, i cui lati congruenti sono metà 
> della diagonale del quadrato e quindi misurano 1 e la cui altezza rispetto a tali lati è metà 
> del lato del quadrato e quindi vale √2/2. L’area di ogni triangolo vale allora √2/4.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.1
