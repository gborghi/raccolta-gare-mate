---
title: Kangourou 2014 finale Cadet
tipo: gara
competition: Kangourou 2014 finale Cadet
family: kangourou
year: '2014'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2014_cadet_finale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,method_conteggio,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Perché numero coppie = somma primi n-1 interi*

> Hai $n$ oggetti e vuoi formare con essi tutte le coppie possibili (ad esempio, se gli oggetti sono le lettere A, B e C, le coppie possibili sono tre: $\{A,B\}$, $\{A,C\}$ e $\{B,C\}$). Qualunque sia il numero $n$ di oggetti (almeno 2), si scopre che il numero delle coppie che puoi formare coincide con la somma dei primi $n-1$ numeri interi positivi. Senza usare alcuna formula, sapresti spiegare il motivo di questa coincidenza?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1AnnZ-qUV6dWWweXJXKQibDtTu2LV1ZDz/view)


<span class="qlang-split" data-lang="en"></span>


*Why number pairs = sum of prime n-1 integers*

> You have $n$ objects and you want to form all possible pairs with them (for example, if the objects are the letters A, B and C, the possible pairs are three: $\{A,B\}$, $\{A,C\}$ and $\{B,C\}$). Whatever the $n$ number of objects (at least 2), it turns out that the number of pairs you can form coincides with the sum of the first $n-1$ positive integers. Without using any formula, would you be able to explain the reason for this coincidence?

[[src_kangourou_2014_cadet_finale__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti primi p con 4p+1 quadrato perfetto*

> Quanti numeri primi $p$ sono tali che $4p + 1$ sia un quadrato perfetto?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 1 (p=2)
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1AnnZ-qUV6dWWweXJXKQibDtTu2LV1ZDz/view)


<span class="qlang-split" data-lang="en"></span>


*How many prime p with perfect square 4p+1*

> How many prime numbers $p$ are such that $4p + 1$ is a perfect square?

**Answer:** 1 (p=2)
[[src_kangourou_2014_cadet_finale__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_aritmetica,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo visite per svuotare i 15 piattini*

> In una casetta nel bosco ci sono 15 piattini in fila: sul primo c'è 1 noce, sul secondo ci sono 2 noci, sul terzo 3 e così via fino al quindicesimo piattino su cui ci sono 15 noci. Ogni tanto uno scoiattolo entra nella casetta, sceglie alcuni piattini e mangia delle noci prendendone lo stesso numero da ognuno dei piattini scelti. Qual è il più piccolo numero di visite alla casetta che gli consente di mangiare tutte le noci?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 4
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1AnnZ-qUV6dWWweXJXKQibDtTu2LV1ZDz/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum visits to empty 15 plates*

> In a cabin in the woods, there are 15 plates in a row: the first one has 1 nut, the second one has 2 nuts, the third one has 3 nuts, and so on until the 15th plate has 15 nuts. Every now and then a squirrel comes into the cage, picks up a few plates and eats nuts, taking the same number from each of the plates chosen. What's the smallest number of visits to the cottage that allows him to eat all the nuts?

**Answer:** 4
[[src_kangourou_2014_cadet_finale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area del triangolo rettangolo dalla bisettrice (4 e 5)*

![[src_kangourou_2014_cadet_finale__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (C) at (0,3);
  \coordinate (B) at (5,0);
  \coordinate (K) at (0,1.5);
  \coordinate (H) at (1.5,2.1);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (B) -- (K);
  \draw (C) -- (H);
  \node[left] at (C) {$C$};
  \node[left] at (A) {$A$};
  \node[right] at (B) {$B$};
  \node[left] at (K) {$K$};
  \node[above right] at (H) {$H$};
\end{tikzpicture}
\end{document}
```

> La bisettrice di uno degli angoli acuti di un triangolo rettangolo divide il cateto opposto in due segmenti, uno lungo 4 cm e l'altro lungo 5 cm. Calcola l'area del triangolo.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 54 cm^2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1AnnZ-qUV6dWWweXJXKQibDtTu2LV1ZDz/view)


<span class="qlang-split" data-lang="en"></span>


*Area of the rectangular triangle from the beam (4 and 5) *

![[src_kangourou_2014_cadet_finale__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (C) at (0,3);
  \coordinate (B) at (5,0);
  \coordinate (K) at (0,1.5);
  \coordinate (H) at (1.5,2.1);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (B) -- (K);
  \draw (C) -- (H);
  \node[left] at (C) {$C$};
  \node[left] at (A) {$A$};
  \node[right] at (B) {$B$};
  \node[left] at (K) {$K$};
  \node[above right] at (H) {$H$};
\end{tikzpicture}
\end{document}
```

> The beam of one of the sharp corners of a rectangular triangle divides the opposite triangle into two segments, one 4 cm long and the other 5 cm long. Calculate the area of the triangle.

**Answer:** 54 cm^2
[[src_kangourou_2014_cadet_finale__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,method_colorazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Dipingere 20 quadrati 8x8 con copertura adiacente*

![[src_kangourou_2014_cadet_finale__prob5.png]]

> $n$ quadrati di una griglia $8 \times 8$ sono dipinti di nero, gli altri sono bianchi. Ogni quadrato della griglia, bianco o nero che sia, è adiacente a (cioè ha un lato in comune con) un quadrato nero (diverso da esso nel caso sia nero). Dimostra che puoi riuscirci annerendo solo 20 quadrati. (Rispondi annerendo opportunamente 20 quadrati della griglia riportata sotto.) (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1AnnZ-qUV6dWWweXJXKQibDtTu2LV1ZDz/view)


<span class="qlang-split" data-lang="en"></span>


*Paint 20 8x8 squares with adjacent cover*

![[src_kangourou_2014_cadet_finale__prob5.png]]

> $n$ squares of one grid $8 \times 8$ are painted black, the others are white. Each square of the grid, whether white or black, is adjacent to (i.e. has a side in common with) a black square (different from it in the case of black). It shows you can do it by just blacking out 20 squares. (Answer by appropriately blacking 20 squares of the grid shown below.) (see figure)

[[src_kangourou_2014_cadet_finale__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,method_conteggio,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Per quanti n il prodotto (p+1) è divisibile per n*

> Un numero naturale $n$ è scomposto in 2014 fattori primi (non necessariamente tutti distinti fra loro). Ad ogni fattore primo viene sommato 1 e i nuovi 2014 numeri ottenuti vengono moltiplicati fra loro, dando come risultato un numero $m$. Per quanti interi $n$ succede che, con queste premesse, $m$ è divisibile per $n$?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 336
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1AnnZ-qUV6dWWweXJXKQibDtTu2LV1ZDz/view)


<span class="qlang-split" data-lang="en"></span>


*For quantities n the product (p+1) is divisible by n*

> A natural number $n$ is broken down into prime factors in 2014 (not necessarily all of them distinct from each other). Each prime factor is added to 1 and the new 2014 numbers obtained are multiplied by each other, resulting in a number $m$. For how many integers $n$ does it happen that, with these premises, $m$ is divisible by $n$?

**Answer:** 336
[[src_kangourou_2014_cadet_finale__Q06]]
