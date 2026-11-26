---
title: Kangourou Finale Junior 2024
tipo: gara
competition: Kangourou Finale Junior 2024
family: kangourou
year: '2024'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2024_junior_finale"></div>



<span class="atom-split" id="qj1" data-atom="qj1" data-title="Quesito J1" data-tags="topic_aritmetica,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Sono di piu le frazioni riducibili o irriducibili (1..12)*

> Considera tutte le possibili frazioni di valore minore di 1, nelle quali sia il numeratore sia il denominatore sono numeri interi tra 1 e 12 inclusi. Sono di più le frazioni riducibili o quelle irriducibili?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Y-tp_mTp0sC1jmwY30azSLfiSncH3a5p/view)


<div class="qlang-split" data-lang="en"></div>


*There are more reducible fractions or irreducible fractions (1..12)*

> Consider all possible fractions with a value less than 1, in which both the numerator and the denominator are integers between 1 and 12 inclusive. Are there more reducible fractions or more irreducible fractions?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]

[[Quesiti/src_kangourou_2024_junior_finale#qj1|src_kangourou_2024_junior_finale__QJ1]]



<span class="atom-split" id="qj2" data-atom="qj2" data-title="Quesito J2" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Due triangoli con due lati e un'altezza uguali sono congruenti*

![[src_kangourou_2024_junior_finale__probj2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (B) at (0,0);
  \coordinate (C) at (2,0);
  \coordinate (D) at (4.5,0);
  \coordinate (A) at (2,2.5);
  \fill[blue!30] (A) -- (C) -- (D) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (A) -- (C) -- (D) -- (A);
  \node[above] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[below right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Sono dati due triangoli. Le lunghezze di due dei lati dell'uno coincidono con le lunghezze di due dei lati dell'altro e l'altezza relativa al terzo lato di uno coincide con quella relativa al terzo lato dell'altro. I due triangoli risultano necessariamente congruenti?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Y-tp_mTp0sC1jmwY30azSLfiSncH3a5p/view)


<div class="qlang-split" data-lang="en"></div>


*Two triangles with two equal sides and an equal height are congruent*

![[src_kangourou_2024_junior_finale__probj2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (B) at (0,0);
  \coordinate (C) at (2,0);
  \coordinate (D) at (4.5,0);
  \coordinate (A) at (2,2.5);
  \fill[blue!30] (A) -- (C) -- (D) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (A) -- (C) -- (D) -- (A);
  \node[above] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[below right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Two triangles are given. The lengths of two of the sides of one triangle coincide with the lengths of two of the sides of the other triangle, and the altitude corresponding to the third side of one triangle coincides with the altitude corresponding to the third side of the other triangle. Are the two triangles necessarily congruent?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]

[[Quesiti/src_kangourou_2024_junior_finale#qj2|src_kangourou_2024_junior_finale__QJ2]]



<span class="atom-split" id="qj3" data-atom="qj3" data-title="Quesito J3" data-tags="topic_logica,topic_aritmetica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Stabilire su quale citta l'aereo opera (calendario, caffe)*

> Io non bevo caffè nei soli giorni di lunedì e sabato. Un aereo viene impiegato a giorni alterni sulle rotte Milano – Cagliari e Milano – Palermo con voli di andata e ritorno giornalieri operati settimanalmente dal martedì alla domenica inclusi; ogni lunedì è fermo per manutenzione. Nel corso di un anno ci sono stati due mesi consecutivi nell'arco dei quali ha operato complessivamente per 53 giorni, il primo dei quali su Cagliari. Nel primo giorno del primo di questi due mesi non ho bevuto caffè. È possibile stabilire su quale città l'aereo ha operato nel primo giorno di operatività del secondo mese? È possibile stabilire se tale giorno coincide con il primo giorno del mese?

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Y-tp_mTp0sC1jmwY30azSLfiSncH3a5p/view)


<div class="qlang-split" data-lang="en"></div>


*Determine which city the plane operates in (calendar, coffee)*

> I do not drink coffee on Mondays and Saturdays only. An aircraft is used on alternate days on the Milan–Cagliari and Milan–Palermo routes, with daily round-trip flights operated weekly from Tuesday to Sunday inclusive; every Monday it is grounded for maintenance. Over the course of a year, there were two consecutive months during which it operated for a total of 53 days, the first of those days being on the Cagliari route. On the first day of the first of these two months, I did not drink coffee. Is it possible to determine which city the aircraft operated in on the first day of operations in the second month? Is it possible to determine whether that day coincides with the first day of the month?

**Topic:** [[topic_logica|Logic, games and strategies]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]

[[Quesiti/src_kangourou_2024_junior_finale#qj3|src_kangourou_2024_junior_finale__QJ3]]



<span class="atom-split" id="qj4" data-atom="qj4" data-title="Quesito J4" data-tags="topic_geometria_piana,topic_combinatoria,method_estremalita,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo valore di N(P) per un pentagono*

![[src_kangourou_2024_junior_finale__probj4.png]]

> Per un poligono (piano) $P$, non necessariamente convesso, indichiamo con $N(P)$ il numero di punti che sono intersezioni di diagonali e non sono vertici. Se $P$ è un quadrilatero, $N(P)$ può essere solo $1$ oppure $0$. Se $P$ è un pentagono, il massimo valore possibile per $N(P)$ è $5$ (ad esempio se $P$ è regolare); qual è invece il minimo valore possibile? (In un qualunque poligono, per diagonale si intende un segmento che congiunge due vertici non adiacenti.)

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Y-tp_mTp0sC1jmwY30azSLfiSncH3a5p/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum value of N(P) for a pentagon*

![[src_kangourou_2024_junior_finale__probj4.png]]

> For a (planar) polygon $P$, not necessarily convex, let $N(P)$ denote the number of points that are intersections of diagonals and are not vertices. If $P$ is a quadrilateral, then $N(P)$ can only be $1$ or $0$. If $P$ is a pentagon, the maximum possible value of $N(P)$ is $5$ (for example, if $P$ is regular); what, however, is the minimum possible value? (In any polygon, a diagonal means a line segment joining two non-adjacent vertices.)

**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Geometria|Geometry]]

[[Quesiti/src_kangourou_2024_junior_finale#qj4|src_kangourou_2024_junior_finale__QJ4]]



<span class="atom-split" id="qj5" data-atom="qj5" data-title="Quesito J5" data-tags="topic_combinatoria,topic_geometria_analitica,method_estremalita,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di rette per coprire i vertici dei quadretti*

> Su un enorme foglio quadrato $2024 \times 2024$ di carta a quadretti si vogliono tracciare delle rette, nessuna parallela a quelle che delimitano i quadretti, in modo che tutti i vertici dei quadretti che appaiono sul foglio vengano coperti da almeno una retta. Qual è il più piccolo numero di rette che è sufficiente tracciare?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Y-tp_mTp0sC1jmwY30azSLfiSncH3a5p/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum number of straight lines needed to cover the vertices of the small squares*

> On an enormous square sheet $2024 \times 2024$ of graph paper, one wants to draw straight lines—none of which are parallel to the lines that bound the squares—so that all the vertices of the squares visible on the sheet are covered by at least one line. What is the smallest number of lines that suffice to draw?

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_geometria_analitica|Coordinate geometry]]
**Metodo:** [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Geometria|Geometry]]

[[Quesiti/src_kangourou_2024_junior_finale#qj5|src_kangourou_2024_junior_finale__QJ5]]



<span class="atom-split" id="qj6" data-atom="qj6" data-title="Quesito J6" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Esistono palindromi ABBA di 4 cifre quadrati perfetti*

> Esistono numeri interi palindromi di 4 cifre (cioè del tipo $\overline{ABBA}$ con $A \neq 0$) in notazione decimale, che siano quadrati perfetti?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Y-tp_mTp0sC1jmwY30azSLfiSncH3a5p/view)


<div class="qlang-split" data-lang="en"></div>


*There exist ABBA palindromic 4-digit perfect squares*

> Are there any 4-digit palindromic integers (that is, of the form $\overline{ABBA}$ with $A \neq 0$) in decimal notation that are perfect squares?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]

[[Quesiti/src_kangourou_2024_junior_finale#qj6|src_kangourou_2024_junior_finale__QJ6]]
