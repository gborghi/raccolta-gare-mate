---
tipo: quesito
quesito_id: quesito_src_kangourou_2015_marzo_cadet__Q07
parent: src_kangourou_2015_marzo_cadet
competition: Kangourou 2015 gara 19 marzo Cadet
family: kangourou
year: '2015'
level: kangourou
country: Italia
quesito: '7'
summary: spigolo che coincide con UV
answer: C
topics:
  - topic_geometria_solida
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2015
  - livello/kangourou
  - topic/geometria_solida
---

# Kangourou 2015 gara 19 marzo Cadet — Quesito 7

*spigolo che coincide con UV*

![[src_kangourou_2015_marzo_cadet__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
  % Triangular prism net: 3 rectangles in a row + top triangle + bottom triangle
  \def\rw{1.5}
  \def\rh{2.0}
  % Three rectangles
  \draw[thick] (0,0) rectangle (\rw,\rh);
  \draw[thick] (\rw,0) rectangle (2*\rw,\rh);
  \draw[thick] (2*\rw,0) rectangle (3*\rw,\rh);
  % Top triangle (apex V)
  \draw[thick] (\rw,\rh) -- (1.5*\rw,\rh+1.2) -- (2*\rw,\rh);
  % Bottom triangle (apex R)
  \draw[thick] (\rw,0) -- (1.5*\rw,-1.2) -- (2*\rw,0);
  % Vertex labels
  \node[above] at (1.5*\rw,\rh+1.2) {$V$};
  \node[above left] at (0,\rh) {$Y$};
  \node[above] at (\rw,\rh) {$X$};
  \node[above] at (2*\rw,\rh) {$W$};
  \node[above right] at (3*\rw,\rh) {$U$};
  \node[below left] at (0,0) {$P$};
  \node[below] at (\rw,0) {$Q$};
  \node[below] at (2*\rw,0) {$S$};
  \node[below right] at (3*\rw,0) {$T$};
  \node[below] at (1.5*\rw,-1.2) {$R$};
\end{tikzpicture}
\end{document}
```

> In figura è rappresentato lo sviluppo piano di un prisma a 
> base triangolare. Quale spigolo coincide con lo spigolo UV 
> quando si piega lo sviluppo in modo da ricostruire il prisma?
> A) WV 	 	
> B) XW 	 	
> C) XY	
> 	
> D) QR 	 	
> E) RS

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.2
