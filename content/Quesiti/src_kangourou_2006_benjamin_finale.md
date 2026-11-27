---
title: Kangourou 2006 - Benjamin (finale nazionale)
tipo: gara
competition: Kangourou 2006 - Benjamin (finale nazionale)
family: kangourou
year: '2006'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2006_benjamin_finale"></div>



<span class="atom-split" id="qb1" data-atom="qb1" data-title="Quesito B1" data-tags="topic_aritmetica,topic_combinatoria,method_conteggio,method_estremalita,skill_casework_accurato,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero MALE dato MELA minimo a cifre distinte*

> *(5 punti)* Le lettere della parola "MALE" sono tutte distinte fra loro. Fa corrispondere ad ogni lettera di questa parola una cifra in modo tale che la parola "MALE" rappresenti il più piccolo numero di quattro cifre tutte distinte tra loro. Mantenendo questa scelta delle cifre, che numero è rappresentato dalla parola "MALE"?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1320
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1SgavtoqL9VQ-oYTP6QSn5-u44sFmrisW/view)


<div class="qlang-split" data-lang="en"></div>


*Male number given: smallest MELA with distinct digits*

> *(5 points)* The letters of the word "MALE" are all distinct from one another. Assign a digit to each letter of this word in such a way that the word "MALE" represents the smallest four-digit number whose digits are all distinct. Keeping this choice of digits, what number is represented by the word "MALE"?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="qb2" data-atom="qb2" data-title="Quesito B2" data-tags="topic_aritmetica,topic_funzionali,method_conteggio,skill_conteggio_sistematico,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma dei primi 40 numeri della sequenza ripetuta*

> *(7 punti)* Qual è la somma dei primi 40 numeri della sequenza: $1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, \ldots$? (La regola con cui è costruita la sequenza è la seguente: ogni numero intero positivo, a partire da $1$, viene ripetuto consecutivamente tante volte quante è il suo valore.)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** 240
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1SgavtoqL9VQ-oYTP6QSn5-u44sFmrisW/view)


<div class="qlang-split" data-lang="en"></div>


*Sum of the first 40 numbers of the repeated sequence*

> *(7 points)* What is the sum of the first 40 numbers in the sequence: $1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, \ldots$? (The rule by which the sequence is constructed is as follows: each positive integer, starting from $1$, is repeated consecutively as many times as its value.)


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="qb3" data-atom="qb3" data-title="Quesito B3" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

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
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 90 gradi
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1SgavtoqL9VQ-oYTP6QSn5-u44sFmrisW/view)


<div class="qlang-split" data-lang="en"></div>


*Measure the NYC angle between CM and BN in the square*

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

> *(11 points)* Observe the figure: $ABCD$ is a square, $M$ is the midpoint of $AB$, and $N$ is the midpoint of $BC$. The line segments $AN$ and $BM$ intersect at $Y$. What is the measure of angle $NYC$? (see figure)


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



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


<div class="qlang-split" data-lang="en"></div>


*Three-digit numbers whose digits differ by at least 4*

> *(14 points)* How many 3-digit numbers (significant digits, meaning the first digit is not 0) are there such that any two of their digits differ by at least 4?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="qb5" data-atom="qb5" data-title="Quesito B5" data-tags="topic_combinatoria,method_colorazione,method_grafi,skill_casework_accurato,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di colori per gli spicchi del cerchio*

![[src_kangourou_2006_benjamin_finale__probB5.png]]

> *(18 punti)* Un cerchio è stato diviso in un certo numero di spicchi (almeno 4), ad esempio come in figura. Sei stato chiesto di colorare l'interno di ogni spicchio in modo che tra due spicchi di ugual colore ce ne siano sempre almeno due di colore diverso, ma non conosci il numero degli spicchi del cerchio (in figura ne sono 5, solo un esempio). Qual è il più piccolo numero di colori che ti garantisce di riuscire indipendentemente dal numero degli spicchi? (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 5
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1SgavtoqL9VQ-oYTP6QSn5-u44sFmrisW/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum number of colors for the sectors of the circle*

![[src_kangourou_2006_benjamin_finale__probB5.png]]

> *(18 points)* A circle has been divided into a certain number of sectors (at least 4), for example as shown in the figure. You have been asked to color the interior of each sector so that between two sectors of the same color there are always at least two sectors of a different color, but you do not know how many sectors the circle has (in the figure there are 5—just an example). What is the smallest number of colors that guarantees your success regardless of the number of sectors? (see figure)


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_colorazione|Colouring / parity]], [[method_grafi|Graph theory]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="qb6" data-atom="qb6" data-title="Quesito B6" data-tags="topic_aritmetica,topic_logica,method_casework,method_congruenze,skill_casework_accurato,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Risultato della somma ORE+ORE+ORE=VIVE*

![[src_kangourou_2006_benjamin_finale__probB6.png]]

> *(22 punti)* Nell'operazione indicata a lato ogni lettera rappresenta una cifra; lettere uguali rappresentano cifre uguali e lettere diverse rappresentano cifre diverse; inoltre nessuna lettera rappresenta la cifra 0. Quanto vale il risultato?
> 
> $$\begin{array}{r} ORE \\ + ORE \\ + ORE \\ \hline VIVE \end{array}$$

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2625
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1SgavtoqL9VQ-oYTP6QSn5-u44sFmrisW/view)


<div class="qlang-split" data-lang="en"></div>


*Result of the sum HOURS+HOURS+HOURS=LIVE*

![[src_kangourou_2006_benjamin_finale__probB6.png]]

> *(22 points)* In the operation shown beside, each letter represents a digit; identical letters represent identical digits, and different letters represent different digits; moreover, no letter represents the digit 0. What is the value of the result?
>
> $$\begin{array}{r} ORE \\ + ORE \\ + ORE \\ \hline VIVE \end{array}$$


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
