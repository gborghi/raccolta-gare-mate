---
title: Kangourou 2003 Junior finale nazionale
tipo: gara
competition: Kangourou 2003 Junior finale nazionale
family: kangourou
year: '2003'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2003_junior_finale"></div>



<span class="atom-split" id="qj1" data-atom="qj1" data-title="Quesito J1" data-tags="topic_aritmetica,topic_logica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Quali parole denotano tre interi consecutivi*

> Indichiamo con:
> - $s$ qualunque numero intero positivo divisibile per 6;
> - $e$ qualunque numero intero positivo pari che non sia divisibile per 6;
> - $t$ qualunque numero intero positivo divisibile per 3 che non sia già stato indicato con $s$ o con $e$;
> - $x$ qualunque numero intero positivo dei rimanenti.
> 
> Quali delle seguenti sei parole
> $$\text{ese} \quad \text{ete} \quad \text{exe} \quad \text{ets} \quad \text{exs} \quad \text{ext}$$
> possono corrispondere a tre interi consecutivi?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** ete, exs
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1DYCQm1nF2PohR5Hfzk5zl6q-PHPzDsMy/view)


<span class="qlang-split" data-lang="en"></span>


*Which words denote three consecutive integers*

> We indicate with: - $s$ any positive integer divisible by 6; - $e$ any positive integer equal to not divisible by 6; - $t$ any positive integer divisible by 3 that has not already been indicated with $s$ or with $e$; - $x$ any positive integer of the remaining ones.
> 
> Which of the following six words $$\text{ese} \quad \text{ete} \quad \text{exe} \quad \text{ets} \quad \text{exs} \quad \text{ext}$$ can correspond to three consecutive integers?

**Answer:** ete, exs
[[src_kangourou_2003_junior_finale__QJ1]]



<span class="atom-split" id="qj2" data-atom="qj2" data-title="Quesito J2" data-tags="topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minima differenza tra numeri detti contemporaneamente*

> Cristina e Roberta iniziano a contare nello stesso istante e con la stessa cadenza. Cristina conta di due in due crescendo a partire da 110 (110, 112, 114, $\ldots$), mentre Roberta conta di cinque in cinque decrescendo a partire da 953 (953, 948, 943, $\ldots$). Di quanto differiranno i due numeri più vicini che esse pronunceranno nello stesso istante?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 3
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1DYCQm1nF2PohR5Hfzk5zl6q-PHPzDsMy/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum difference between simultaneous numbers*

> Cristina and Roberta start counting at the same instant and with the same frequency. Cristina has two in two growing from 110 (110, 112, 114, $\ldots$), while Roberta has five in five growing from 953 (953, 948, 943, $\ldots$). How different will the two closest numbers they will utter at the same time be?

**Answer:** 3
[[src_kangourou_2003_junior_finale__QJ2]]



<span class="atom-split" id="qj3" data-atom="qj3" data-title="Quesito J3" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area del max cerchio inscritto nel triangolo mistilineo*

![[src_kangourou_2003_junior_finale__probJ3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (P) at (-1,0);
  \coordinate (R) at (1,0);
  \coordinate (Q) at (0,1.5);
  \draw (P) -- (Q) -- (R) -- cycle;
  \draw (0,0.5352) circle (0.5352);
  \node[below left] at (P) {P};
  \node[below right] at (R) {R};
  \node[above] at (Q) {Q};
  \node[below] at (0,0) {2};
\end{tikzpicture}
\end{document}
```

> La figura rappresenta un triangolo mistilineo $PQR$. Il suo contorno è costituito da un segmento $PR$ di lunghezza 2 e da due archi di circonferenza $PQ$ e $QR$ di centri rispettivamente $R$ e $P$. Quanto vale l'area del più grande cerchio che si può inscrivere nel triangolo? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 9pi/16
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1DYCQm1nF2PohR5Hfzk5zl6q-PHPzDsMy/view)


<span class="qlang-split" data-lang="en"></span>


*Area of the max circle inscribed in the mythological triangle*

![[src_kangourou_2003_junior_finale__probJ3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (P) at (-1,0);
  \coordinate (R) at (1,0);
  \coordinate (Q) at (0,1.5);
  \draw (P) -- (Q) -- (R) -- cycle;
  \draw (0,0.5352) circle (0.5352);
  \node[below left] at (P) {P};
  \node[below right] at (R) {R};
  \node[above] at (Q) {Q};
  \node[below] at (0,0) {2};
\end{tikzpicture}
\end{document}
```

> The figure represents a mystilinear triangle $PQR$. Its outline consists of a segment $PR$ of length 2 and two arcs of circumference $PQ$ and $QR$ of centers $R$ and $P$ respectively. How much is the area of the largest circle that can be inscribed in a triangle? (see figure)

**Answer:** 9pi/16
[[src_kangourou_2003_junior_finale__QJ3]]



<span class="atom-split" id="qj4" data-atom="qj4" data-title="Quesito J4" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Rapporto velocita dei due ciclisti*

> Due ciclisti corrono su una pista circolare ciascuno a velocità costante. Se corrono nello stesso verso, ogni dieci minuti il ciclista più veloce raggiunge l'altro; se corrono in versi opposti, si incontrano ogni due minuti. Qual è il rapporto fra la velocità del ciclista più veloce e quella del ciclista più lento?

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 3/2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1DYCQm1nF2PohR5Hfzk5zl6q-PHPzDsMy/view)


<span class="qlang-split" data-lang="en"></span>


*Speed ratio of two cyclists*

> Two cyclists run on a circular track each at a constant speed. If they run in the same direction, every ten minutes the fastest rider reaches the other; if they run in opposite directions, they meet every two minutes. What is the relationship between the speed of the fastest rider and the speed of the slowest rider?

**Answer:** 3/2
[[src_kangourou_2003_junior_finale__QJ4]]



<span class="atom-split" id="qj5" data-atom="qj5" data-title="Quesito J5" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area triangolo da tre triangoli interni paralleli*

> Per un punto fissato internamente ad un triangolo rettangolo si traccino le parallele ai lati. Siano $a$, $b$ e $c$ le aree dei tre triangoli rettangoli che vengono così individuati. Quanto vale l'area del triangolo di partenza?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** (a+b+c)^2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1DYCQm1nF2PohR5Hfzk5zl6q-PHPzDsMy/view)


<span class="qlang-split" data-lang="en"></span>


*Triangle area with three parallel inner triangles*

> For a point fixed internally to a rectangular triangle the parallels to the sides are drawn. These are $a$, $b$ and $c$ the areas of the three rectangular triangles that are thus identified. How much is the area of the starting triangle?

**Answer:** (a+b+c)^2
[[src_kangourou_2003_junior_finale__QJ5]]



<span class="atom-split" id="qj6" data-atom="qj6" data-title="Quesito J6" data-tags="topic_aritmetica,topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero autodescrittivo di dieci cifre*

> Un solo numero intero positivo di dieci cifre (significative) ha una rappresentazione decimale tale che la sua prima cifra (da sinistra) corrisponde al numero delle sue cifre che sono uguali a zero, la sua seconda cifra corrisponde al numero delle sue cifre che sono uguali a uno, la sua terza cifra corrisponde al numero delle sue cifre che sono uguali a due e così via fino alla sua decima cifra che corrisponde al numero delle sue cifre uguali a nove. Determina tale numero.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 6210001000
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1DYCQm1nF2PohR5Hfzk5zl6q-PHPzDsMy/view)


<span class="qlang-split" data-lang="en"></span>


*Auto-descriptive number of 10 digits *

> A single positive integer of ten digits (significant) has a decimal representation such that its first digit (left) corresponds to the number of its digits that are equal to zero, its second digit corresponds to the number of its digits that are equal to one, its third digit corresponds to the number of its digits that are equal to two and so on until its tenth digit corresponds to the number of its digits equal to nine. Find that number.

**Answer:** 6210001000
[[src_kangourou_2003_junior_finale__QJ6]]
