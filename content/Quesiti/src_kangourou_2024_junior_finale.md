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


<span class="qlang-split" data-lang="en"></span>


*More are reducing or non-reducing fractions (1..12) *

> Consider all possible fractions of less than 1 in which both the numerator and denominator are integers between 1 and 12 included. Are these more reducing fractions or irreducible fractions?

[[src_kangourou_2024_junior_finale__QJ1]]



<span class="atom-split" id="qj2" data-atom="qj2" data-title="Quesito J2" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Due triangoli con due lati e un'altezza uguali sono congruenti*

![[src_kangourou_2024_junior_finale__probJ2.png]]

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


<span class="qlang-split" data-lang="en"></span>


*Two triangles with two sides and equal height are congruent*

![[src_kangourou_2024_junior_finale__probJ2.png]]

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

> Two triangles are given. The lengths of two of the sides of one shall coincide with the lengths of two of the sides of the other and the height relative to the third side of one shall coincide with that relative to the third side of the other. Are the two triangles necessarily congruent?

[[src_kangourou_2024_junior_finale__QJ2]]



<span class="atom-split" id="qj3" data-atom="qj3" data-title="Quesito J3" data-tags="topic_logica,topic_aritmetica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Stabilire su quale citta l'aereo opera (calendario, caffe)*

> Io non bevo caffè nei soli giorni di lunedì e sabato. Un aereo viene impiegato a giorni alterni sulle rotte Milano – Cagliari e Milano – Palermo con voli di andata e ritorno giornalieri operati settimanalmente dal martedì alla domenica inclusi; ogni lunedì è fermo per manutenzione. Nel corso di un anno ci sono stati due mesi consecutivi nell'arco dei quali ha operato complessivamente per 53 giorni, il primo dei quali su Cagliari. Nel primo giorno del primo di questi due mesi non ho bevuto caffè. È possibile stabilire su quale città l'aereo ha operato nel primo giorno di operatività del secondo mese? È possibile stabilire se tale giorno coincide con il primo giorno del mese?

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Y-tp_mTp0sC1jmwY30azSLfiSncH3a5p/view)


<span class="qlang-split" data-lang="en"></span>


*Establish which city the aircraft operates in (calendar, cafe) *

> I don't drink coffee only on Mondays and Saturdays. An aircraft is used on alternate days on the Milan  Cagliari and Milan  Palermo routes with daily round-trip flights operated weekly from Tuesday to Sunday included; every Monday it is stationary for maintenance. During a year there were two consecutive months during which he operated for a total of 53 days, the first of which was in Cagliari. On the first day of the first of these two months, I didn't drink coffee. Is it possible to determine which city the aircraft operated in on the first day of operation in the second month? Is it possible to determine whether that day coincides with the first day of the month?

[[src_kangourou_2024_junior_finale__QJ3]]



<span class="atom-split" id="qj4" data-atom="qj4" data-title="Quesito J4" data-tags="topic_geometria_piana,topic_combinatoria,method_estremalita,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo valore di N(P) per un pentagono*

![[src_kangourou_2024_junior_finale__probJ4.png]]

> Per un poligono (piano) $P$, non necessariamente convesso, indichiamo con $N(P)$ il numero di punti che sono intersezioni di diagonali e non sono vertici. Se $P$ è un quadrilatero, $N(P)$ può essere solo $1$ oppure $0$. Se $P$ è un pentagono, il massimo valore possibile per $N(P)$ è $5$ (ad esempio se $P$ è regolare); qual è invece il minimo valore possibile? (In un qualunque poligono, per diagonale si intende un segmento che congiunge due vertici non adiacenti.)

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Y-tp_mTp0sC1jmwY30azSLfiSncH3a5p/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum value of N(P) for a pentagon*

![[src_kangourou_2024_junior_finale__probJ4.png]]

> For a polygon (plane) $P$, not necessarily convex, we indicate with $N(P)$ the number of points that are diagonal intersections and not verticals. If $P$ is a quadrilateral, $N(P)$ may be only $1$ or $0$. If $P$ is a pentagon, the maximum possible value for $N(P)$ is $5$ (e.g. if $P$ is regular); but what is the minimum possible value? (In any polygon, by diagonal means a segment that joins two non-adjacent vertices.)

[[src_kangourou_2024_junior_finale__QJ4]]



<span class="atom-split" id="qj5" data-atom="qj5" data-title="Quesito J5" data-tags="topic_combinatoria,topic_geometria_analitica,method_estremalita,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di rette per coprire i vertici dei quadretti*

> Su un enorme foglio quadrato $2024 \times 2024$ di carta a quadretti si vogliono tracciare delle rette, nessuna parallela a quelle che delimitano i quadretti, in modo che tutti i vertici dei quadretti che appaiono sul foglio vengano coperti da almeno una retta. Qual è il più piccolo numero di rette che è sufficiente tracciare?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Y-tp_mTp0sC1jmwY30azSLfiSncH3a5p/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum number of lines to cover the vertices of the squares*

> On a huge square sheet of square paper you want to draw lines, none parallel to the ones that delimit the squares, so that all the vertices of the squares that appear on the sheet are covered by at least one line. What is the smallest number of lines that is sufficient to trace?

[[src_kangourou_2024_junior_finale__QJ5]]



<span class="atom-split" id="qj6" data-atom="qj6" data-title="Quesito J6" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Esistono palindromi ABBA di 4 cifre quadrati perfetti*

> Esistono numeri interi palindromi di 4 cifre (cioè del tipo $\overline{ABBA}$ con $A \neq 0$) in notazione decimale, che siano quadrati perfetti?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Y-tp_mTp0sC1jmwY30azSLfiSncH3a5p/view)


<span class="qlang-split" data-lang="en"></span>


There are four perfect square ABBA palindromes.

> Are there 4-digit palindromes (i.e. $\overline{ABBA}$ with $A \neq 0$) in decimal notation, which are perfect squares?

[[src_kangourou_2024_junior_finale__QJ6]]
