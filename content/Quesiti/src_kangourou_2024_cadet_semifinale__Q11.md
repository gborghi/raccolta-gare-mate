---
title: Kangourou Semifinale individuale Cadet 2024 — Quesito 11
tipo: quesito
quesito_id: quesito_src_kangourou_2024_cadet_semifinale__Q11
parent: src_kangourou_2024_cadet_semifinale
competition: Kangourou Semifinale individuale Cadet 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: '11'
summary: Somma minima di sei numeri coprimi sulle facce di un cubo
answer: '0022'
topics:
  - topic_aritmetica
  - topic_geometria_solida
methods:
  - method_estremalita
  - method_grafi
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

![[src_kangourou_2024_cadet_semifinale__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \draw[thick] (0,0) rectangle (1,1);
  \draw[thick] (1,1) rectangle (2,2);
  \draw[thick] (1,0) rectangle (2,1);
  \draw[thick] (2,0) rectangle (3,1);
  \draw[thick] (3,0) rectangle (4,1);
  \draw[thick] (1,-1) rectangle (2,0);
  \node at (0.5,0.5) {\textbf{1}};
  \node at (1.5,1.5) {\textbf{2}};
  \node at (1.5,0.5) {\textbf{3}};
  \node at (2.5,0.5) {\textbf{5}};
  \node at (3.5,0.5) {\textbf{7}};
  \node at (1.5,-0.5) {\textbf{4}};
\end{tikzpicture}
\end{document}
```

> (Punti 5) Su ogni faccia di un cubo è scritto un numero intero positivo e i sei numeri sono tutti 
> diversi fra loro. Sai che, comunque tu consideri due facce adiacenti, l’unico divisore comune ai due 
> numeri che vi compaiono è 1. Quanto deve valere, al minimo, la somma dei sei numeri? Ricordiamo 
> che si dice che due facce sono adiacenti se hanno uno spigolo in comune. 
> Risposta: 0022. Soluzione. È chiaro che il numero 6 non può venire impiegato in 
> quanto si verrebbe necessariamente a trovare in una faccia adiacente a quella con 2 o 
> a quella con 3 o a quella con 4.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_solida|Geometria solida]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** 0022
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1YuKlYOQSjLPYC0cQWHZFjw49wPVl8dfH/view)
