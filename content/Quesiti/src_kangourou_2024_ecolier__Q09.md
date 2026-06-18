---
tipo: quesito
quesito_id: quesito_src_kangourou_2024_ecolier__Q09
parent: src_kangourou_2024_ecolier
competition: Kangourou Categoria Ecolier 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
quesito: '9'
summary: Numero da inserire in E con tre somme uguali a 11
answer: C
topics:
  - topic_algebra
  - topic_combinatoria
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/algebra
  - topic/combinatoria
---

# Kangourou Categoria Ecolier 2024 — Quesito 9

*Numero da inserire in E con tre somme uguali a 11*

![[src_kangourou_2024_ecolier__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}[every node/.style={circle,draw,minimum size=8mm}]
  \node (E) at (0,0) {$E$};
  \node (A) at (-1.5,1.5) {$A$};
  \node (B) at (1.5,1.5) {$B$};
  \node (D) at (-1.5,-1.5) {$D$};
  \node (C) at (1.5,-1.5) {$C$};
  \draw (E) -- (A);
  \draw (E) -- (B);
  \draw (E) -- (D);
  \draw (E) -- (C);
  \draw (D) -- (C);
\end{tikzpicture}
\end{document}
```

> Lisa vuole sostituire a ciascuna delle cinque lettere in figura 
> uno dei numeri 1, 2, 4, 5 e 6, senza ripeterli. Vuole inoltre che 
> valgano 11 tutte e tre le seguenti somme: la somma dei numeri 
> sostituiti ad A, E, e C, quella dei numeri sostituiti a B, E e D e 
> quella dei numeri sostituiti a C e D. Che numero dovrà inserire 
> Lisa nella casella E? 
> A) 1 	
> 	
> B) 2 	
> 	
> C) 4 	
> 	
> D) 5 	
> 	
> E) 6

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** apri PDF p.2
