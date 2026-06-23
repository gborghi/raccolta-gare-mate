---
title: Kangourou Semifinale individuale Benjamin 2024 — Quesito 14
tipo: quesito
quesito_id: quesito_src_kangourou_2024_benjamin_semifinale__Q14
parent: src_kangourou_2024_benjamin_semifinale
competition: Kangourou Semifinale individuale Benjamin 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: '14'
summary: Somma minima di sei numeri coprimi sulle facce di un cubo
answer: '0022'
topics:
  - topic_aritmetica
  - topic_geometria_solida
methods:
  - method_estremalita
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/aritmetica
  - topic/geometria_solida
  - gara/individuale
---

*Somma minima di sei numeri coprimi sulle facce di un cubo*

![[src_kangourou_2024_benjamin_semifinale__prob14.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\s{0.8}
  \draw[thick] (\s*0.5,-\s*0.5) rectangle (\s*1.5,\s*0.5); \node at (\s*1,0) {2};
  \draw[thick] (-\s*0.5,-\s*1.5) rectangle (\s*0.5,-\s*0.5); \node at (0,-\s) {1};
  \draw[thick] (\s*0.5,-\s*1.5) rectangle (\s*1.5,-\s*0.5); \node at (\s,-\s) {3};
  \draw[thick] (\s*1.5,-\s*1.5) rectangle (\s*2.5,-\s*0.5); \node at (\s*2,-\s) {5};
  \draw[thick] (\s*2.5,-\s*1.5) rectangle (\s*3.5,-\s*0.5); \node at (\s*3,-\s) {7};
  \draw[thick] (\s*0.5,-\s*2.5) rectangle (\s*1.5,-\s*1.5); \node at (\s,-\s*2) {4};
\end{tikzpicture}
\end{document}
```

> (Punti 6) Su ogni faccia di un cubo è scritto un numero intero positivo e i sei numeri sono tutti 
> diversi fra loro. Sai che, comunque tu consideri due facce adiacenti, l’unico divisore comune ai due 
> numeri che vi compaiono è 1. Quanto deve valere, al minimo, la somma dei sei numeri? Ricordiamo 
> che si dice che due facce sono adiacenti se hanno uno spigolo in comune. 
> Risposta: 0022. Soluzione. È chiaro che il numero 6 non può venire impiegato in quanto 
> si verrebbe necessariamente a trovare in una faccia adiacente a quella con 2 o a quella con 
> 3 o a quella con 4.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_solida|Geometria solida]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** 0022
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1OAmusb-x449TC7MxeV09o-WNl3U7P-Sn/view)
