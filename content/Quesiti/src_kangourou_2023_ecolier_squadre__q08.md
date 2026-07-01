---
title: Kangourou Squadre 2023 Ecolier Finale 1 — Quesito 8
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2023_ecolier_squadre__Q08
parent: src_kangourou_2023_ecolier_squadre
competition: Kangourou Squadre 2023 Ecolier Finale 1
family: kangourou
year: '2023'
level: squadre
country: Italia
modalita: squadre
quesito: '8'
summary: Modi di riempire griglia con somme div per 3
answer: '0024'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_congruenze
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2023
  - livello/squadre
  - topic/combinatoria
  - topic/aritmetica
  - gara/squadre
---
<div class="qlang-switch" data-default="it"></div>


*Modi di riempire griglia con somme div per 3*

![[src_kangourou_2023_ecolier_squadre__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \foreach \i in {0,1,2,3,4,5,6,7,8} {
    \draw (\i,0) rectangle (\i+1,1);
  }
  \node at (1.5,0.5) {7};
  \node at (3.5,0.5) {9};
\end{tikzpicture}
\end{document}
```

> Nella griglia 
> Tutti i numeri interi tra 1 e 9 inclusi vanno inseriti nella 
> griglia in figura, uno per ogni casella, in modo che la somma dei numeri che si trovano in tre caselle 
> consecutive, qualunque esse siano, sia divisibile per 3. Come potete vedere, i numeri 7 e 9 sono già 
> stati collocati. In quanti diversi modi potete completare l’inserimento?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0024
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/106K8XmralkXud0FCT7Eczyct88Hgj-sM/view)


<span class="qlang-split" data-lang="en"></span>


*Mode of filling grid with sums div for 3*

![[src_kangourou_2023_ecolier_squadre__prob8.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \foreach \i in {0,1,2,3,4,5,6,7,8} {
    \draw (\i,0) rectangle (\i+1,1);
  }
  \node at (1.5,0.5) {7};
  \node at (3.5,0.5) {9};
\end{tikzpicture}
\end{document}
```

> In the grid All integers between 1 and 9 included must be entered into the grid in the figure, one for each box, so that the sum of the numbers in three consecutive boxes, whatever they are, is divisible by 3. As you can see, numbers 7 and 9 have already been placed. How many different ways can you complete your enrolment?

**Answer:** 0024
[[src_kangourou_2023_ecolier_squadre__Q08]]
