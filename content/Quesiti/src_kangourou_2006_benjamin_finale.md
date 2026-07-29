---
title: Kangourou 2006 - Benjamin (finale nazionale)
tipo: gara
competition: Kangourou 2006 - Benjamin (finale nazionale)
family: kangourou
year: '2006'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2006_benjamin_finale"></div>



<span class="atom-split" id="qb1" data-atom="qb1" data-title="Quesito B1" data-tags="topic_aritmetica,topic_combinatoria,method_conteggio,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero MALE dato MELA minimo a cifre distinte*

> *(5 punti)* Le lettere della parola "MALE" sono tutte distinte fra loro. Fa corrispondere ad ogni lettera di questa parola una cifra in modo tale che la parola "MALE" rappresenti il più piccolo numero di quattro cifre tutte distinte tra loro. Mantenendo questa scelta delle cifre, che numero è rappresentato dalla parola "MALE"?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1320
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1SgavtoqL9VQ-oYTP6QSn5-u44sFmrisW/view)


<span class="qlang-split" data-lang="en"></span>


*MALE number given MELA minimum with distinct digits*

> *(5 points) * The letters of the word "MALE" are all distinct from each other. He makes each letter of this word correspond to a digit so that the word "BLE" represents the smallest number of four digits all distinct from each other. While maintaining this choice of numbers, what number is represented by the word "MALE"?

**Answer:** 1320
[[src_kangourou_2006_benjamin_finale__QB1]]



<span class="atom-split" id="qb2" data-atom="qb2" data-title="Quesito B2" data-tags="topic_aritmetica,topic_funzionali,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma dei primi 40 numeri della sequenza ripetuta*

> *(7 punti)* Qual è la somma dei primi 40 numeri della sequenza: $1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, \ldots$? (La regola con cui è costruita la sequenza è la seguente: ogni numero intero positivo, a partire da $1$, viene ripetuto consecutivamente tante volte quante è il suo valore.)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 240
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1SgavtoqL9VQ-oYTP6QSn5-u44sFmrisW/view)


<span class="qlang-split" data-lang="en"></span>


*sum of the first 40 numbers of the repeated sequence*

> *(7 points) * What is the sum of the first 40 numbers of the sequence: $1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, \ldots$? (The rule by which the sequence is constructed is as follows: every positive integer, starting with $1$, is repeated consecutively as many times as its value.)

**Answer:** 240
[[src_kangourou_2006_benjamin_finale__QB2]]



<span class="atom-split" id="qb3" data-atom="qb3" data-title="Quesito B3" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Misura angolo NYC tra CM e BN nel quadrato*

![[src_kangourou_2006_benjamin_finale__probB3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,2);
  \coordinate (D) at (2,2);
  \coordinate (C) at (2,0);
  \coordinate (B) at (0,0);
  \coordinate (M) at (0,1);
  \coordinate (N) at (1,2);
  \draw (A) -- (D) -- (C) -- (B) -- cycle;
  \draw (C) -- (M);
  \draw (B) -- (N);
  \node[above left] at (A) {$A$};
  \node[above right] at (D) {$D$};
  \node[below right] at (C) {$C$};
  \node[below left] at (B) {$B$};
  \node[left] at (M) {$M$};
  \node[above] at (N) {$N$};
  \coordinate (Y) at (0.4,0.8);
  \node[right] at (Y) {$Y$};
  \fill (Y) circle (1pt);
\end{tikzpicture}
\end{document}
```

> *(11 punti)* Osserva la figura: $ABCD$ è un quadrato, $M$ è il punto medio di $AB$ ed $N$ è il punto medio di $BC$. I segmenti $AN$ e $BM$ si incrociano in $Y$. Quanto misura l'angolo $NYC$? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 90 gradi
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1SgavtoqL9VQ-oYTP6QSn5-u44sFmrisW/view)


<span class="qlang-split" data-lang="en"></span>


*Measuring the angle NYC between CM and BN in square*

![[src_kangourou_2006_benjamin_finale__probB3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,2);
  \coordinate (D) at (2,2);
  \coordinate (C) at (2,0);
  \coordinate (B) at (0,0);
  \coordinate (M) at (0,1);
  \coordinate (N) at (1,2);
  \draw (A) -- (D) -- (C) -- (B) -- cycle;
  \draw (C) -- (M);
  \draw (B) -- (N);
  \node[above left] at (A) {$A$};
  \node[above right] at (D) {$D$};
  \node[below right] at (C) {$C$};
  \node[below left] at (B) {$B$};
  \node[left] at (M) {$M$};
  \node[above] at (N) {$N$};
  \coordinate (Y) at (0.4,0.8);
  \node[right] at (Y) {$Y$};
  \fill (Y) circle (1pt);
\end{tikzpicture}
\end{document}
```

> *(11 points) * Note the figure: $ABCD$ is a square, $M$ is the mean point of $AB$ and $N$ is the mean point of $BC$. The segments $AN$ and $BM$ cross in $Y$. What is the angle $NYC$? (see figure)

**Answer:** 90 gradi
[[src_kangourou_2006_benjamin_finale__QB3]]



<span class="atom-split" id="qb4" data-atom="qb4" data-title="Quesito B4" data-tags="topic_aritmetica,topic_combinatoria,method_conteggio,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri di 3 cifre con cifre che differiscono di almeno 4*

> *(14 punti)* Quanti sono i numeri di 3 cifre (significative, cioè la cui prima cifra non sia 0), tali che 2 di esse comunque prese non differiscono per meno di 4?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 18
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1SgavtoqL9VQ-oYTP6QSn5-u44sFmrisW/view)


<span class="qlang-split" data-lang="en"></span>


*Three-digit numbers with digits that differ by at least 4*

> *(14 points) * How many 3-digit numbers (significant, i.e. the first digit of which is not 0) are such that 2 of them are not less than 4?

**Answer:** 18
[[src_kangourou_2006_benjamin_finale__QB4]]



<span class="atom-split" id="qb5" data-atom="qb5" data-title="Quesito B5" data-tags="topic_combinatoria,method_colorazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di colori per gli spicchi del cerchio*

![[src_kangourou_2006_benjamin_finale__probB5.png]]

> *(18 punti)* Un cerchio è stato diviso in un certo numero di spicchi (almeno 4), ad esempio come in figura. Sei stato chiesto di colorare l'interno di ogni spicchio in modo che tra due spicchi di ugual colore ce ne siano sempre almeno due di colore diverso, ma non conosci il numero degli spicchi del cerchio (in figura ne sono 5, solo un esempio). Qual è il più piccolo numero di colori che ti garantisce di riuscire indipendentemente dal numero degli spicchi? (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 5
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1SgavtoqL9VQ-oYTP6QSn5-u44sFmrisW/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum number of colours for spikes of the circle*

![[src_kangourou_2006_benjamin_finale__probB5.png]]

> *(18 points) * A circle has been divided into a number of points (at least 4), for example as shown in Figure 1. You've been asked to color the inside of each spike so that between two spikes of the same color there are always at least two of different color, but you don't know the number of spikes in the circle (in the figure there are 5, just an example). What is the smallest number of colors that guarantees you'll succeed regardless of the number of spots? (see figure)

**Answer:** 5
[[src_kangourou_2006_benjamin_finale__QB5]]



<span class="atom-split" id="qb6" data-atom="qb6" data-title="Quesito B6" data-tags="topic_aritmetica,topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Risultato della somma ORE+ORE+ORE=VIVE*

![[src_kangourou_2006_benjamin_finale__probB6.png]]

> *(22 punti)* Nell'operazione indicata a lato ogni lettera rappresenta una cifra; lettere uguali rappresentano cifre uguali e lettere diverse rappresentano cifre diverse; inoltre nessuna lettera rappresenta la cifra 0. Quanto vale il risultato?
> 
> $$\begin{array}{r} ORE \\ + ORE \\ + ORE \\ \hline VIVE \end{array}$$

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2625
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1SgavtoqL9VQ-oYTP6QSn5-u44sFmrisW/view)


<span class="qlang-split" data-lang="en"></span>


*Result of the sum of ORE+ORE+ORE=VIVE*

![[src_kangourou_2006_benjamin_finale__probB6.png]]

> *(22 points) * In the side operation each letter represents a digit; equal letters represent equal numbers and different letters represent different numbers; furthermore, no letter represents the digit 0. How much is the result worth?
> 
> $$\begin{array}{r} ORE \\ + ORE \\ + ORE \\ \hline VIVE \end{array}$$

**Answer:** 2625
[[src_kangourou_2006_benjamin_finale__QB6]]
