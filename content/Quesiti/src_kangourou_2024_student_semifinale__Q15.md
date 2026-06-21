---
title: Kangourou 2024 Student semifinale — Quesito 15
tipo: quesito
quesito_id: quesito_src_kangourou_2024_student_semifinale__Q15
parent: src_kangourou_2024_student_semifinale
competition: Kangourou 2024 Student semifinale
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: '15'
summary: Minimo n con area AnBnC < 10 in triangolo rettangolo
answer: '5'
topics:
  - topic_geometria_piana
methods:
  - method_ricorsione
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/geometria_piana
  - gara/individuale
---

*Minimo n con area AnBnC < 10 in triangolo rettangolo*

![[src_kangourou_2024_student_semifinale__prob15.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (0,2);
  \coordinate (C) at (3.464,0);
  \coordinate (A1) at (1.1547,0);
  \coordinate (B1) at (1.732,1);
  \draw[thick] (A)--(B)--(C)--cycle;
  \draw (B)--(A1);
  \draw (A1)--(B1);
  \node[left] at (B) {$B$};
  \node[below left] at (A) {$A$};
  \node[right] at (C) {$C$};
  \node[below] at (A1) {$A_1$};
  \node[above right] at (B1) {$B_1$};
\end{tikzpicture}
\end{document}
```

> (Punti 6) È dato un triangolo ABC, rettangolo in A e il cui angolo in B misura 60 gradi; tale 
> triangolo ha area 2024. Con la procedura che segue vengono individuate due sequenze di punti: 
> A1, A2, A3, … sul lato AC e B1, B2, B3, … sul lato BC:  
> • 
> A1 è sulla bisettrice dell’angolo ABC, il segmento A1B1 è perpendicolare al lato BC;  
> • 
> B2 è sulla bisettrice dell’angolo B1A1C, il segmento B2A2 è perpendicolare al lato AC;  
> • 
> A3 è sulla bisettrice dell’angolo A2B2C, il segmento A3B3 è perpendicolare al lato BC  
> e così via. Qual è il più piccolo intero n tale che l’area del triangolo AnBnC sia minore di 10? 
> Risposta: 0005. Soluzione. I triangoli ABA1, A1BB1 e A1B1C sono congruenti: 
> quindi l’area di A1B1C è 1/3 di quella di ABC. Dato che tutti i triangoli AhBhC 
> sono simili ad ABC, la situazione si ripropone per ogni triangolo AhBhC rispetto 
> ad Ah-1Bh-1C e per n = 5 l’area 2024/35 = 2024/243 di AnBnC diventa per la prima 
> volta minore di 10.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 5
**Fonte:** apri PDF p.4
