---
title: Kangourou 2024 Student finale
tipo: gara
competition: Kangourou 2024 Student finale
family: kangourou
year: '2024'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2024_student_finale"></div>



<span class="atom-split" id="qs1" data-atom="qs1" data-title="Quesito S1" data-tags="topic_geometria_piana,method_casework,skill_ragionamento_geometrico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Due triangoli con due lati e un'altezza uguali sono congruenti?*

![[src_kangourou_2024_student_finale__probS1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (B) at (0,0);
  \coordinate (D) at (4,0);
  \coordinate (A) at (1.5,3);
  \coordinate (C) at (1.8,0);
  \fill[blue!40] (A) -- (C) -- (D) -- cycle;
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (A) -- (C) -- (D) -- cycle;
  \node[above] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[below right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Sono dati due triangoli. Le lunghezze di due dei lati dell'uno coincidono con le lunghezze di due dei lati dell'altro e l'altezza relativa al terzo lato di uno coincide con quella relativa al terzo lato dell'altro. I due triangoli risultano necessariamente congruenti?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]]
**Risposta:** no
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1pVmLuJsgtVZ0iaNk5NbfEj5LKn6f8UgH/view)


<div class="qlang-split" data-lang="en"></div>


*Are two triangles with two equal sides and an equal height congruent?*

![[src_kangourou_2024_student_finale__probS1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (B) at (0,0);
  \coordinate (D) at (4,0);
  \coordinate (A) at (1.5,3);
  \coordinate (C) at (1.8,0);
  \fill[blue!40] (A) -- (C) -- (D) -- cycle;
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (A) -- (C) -- (D) -- cycle;
  \node[above] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[below right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Two triangles are given. The lengths of two of the sides of one triangle coincide with the lengths of two of the sides of the other triangle, and the altitude corresponding to the third side of one triangle coincides with the altitude corresponding to the third side of the other triangle. Are the two triangles necessarily congruent?


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="qs2" data-atom="qs2" data-title="Quesito S2" data-tags="topic_aritmetica,topic_logica,method_casework,method_congruenze,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Citta operativa aereo nel primo giorno secondo mese*

> Io non bevo caffè nei soli giorni di lunedì e sabato. Un aereo viene impiegato a giorni alterni sulle rotte Milano – Cagliari e Milano – Palermo con voli di andata e ritorno giornalieri operati settimanalmente dal martedì alla domenica inclusi; ogni lunedì è fermo per manutenzione. Nel corso di un anno ci sono stati due mesi consecutivi nell'arco dei quali ha operato complessivamente per 53 giorni, il primo dei quali su Cagliari. Nel primo giorno del primo di questi due mesi non ho bevuto caffè. È possibile stabilire su quale città l'aereo ha operato nel primo giorno di operatività del secondo mese? È possibile stabilire se tale giorno coincide con il primo giorno del mese?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** si, Cagliari
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1pVmLuJsgtVZ0iaNk5NbfEj5LKn6f8UgH/view)


<div class="qlang-split" data-lang="en"></div>


*Aircraft operating city on the first day of the first month*

> I do not drink coffee on Mondays and Saturdays only. An aircraft is used on alternate days on the Milan–Cagliari and Milan–Palermo routes, with daily round-trip flights operated weekly from Tuesday to Sunday inclusive; every Monday it is grounded for maintenance. Over the course of a year, there were two consecutive months during which it operated for a total of 53 days, the first of those days being on the Cagliari route. On the first day of the first of these two months, I did not drink coffee. Is it possible to determine which city the aircraft operated in on the first day of operations in the second month? Is it possible to determine whether that day coincides with the first day of the month?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="qs3" data-atom="qs3" data-title="Quesito S3" data-tags="topic_geometria_piana,topic_combinatoria,method_estremalita,method_casework,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo N(P) intersezioni diagonali in un pentagono*

![[src_kangourou_2024_student_finale__probS3.png]]

> Per un poligono (piano) $P$, non necessariamente convesso, indichiamo con $N(P)$ il numero di punti che sono intersezioni di diagonali e non sono vertici. Se $P$ è un quadrilatero, $N(P)$ può essere solo $1$ oppure $0$. Se $P$ è un pentagono, il massimo valore possibile per $N(P)$ è $5$ (ad esempio se $P$ è regolare); qual è invece il minimo valore possibile? (In un qualunque poligono, per diagonale si intende un segmento che congiunge due vertici non adiacenti.)

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1pVmLuJsgtVZ0iaNk5NbfEj5LKn6f8UgH/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum number N(P) of diagonal intersections in a pentagon*

![[src_kangourou_2024_student_finale__probS3.png]]

> For a (plane) polygon $P$, not necessarily convex, let $N(P)$ denote the number of points that are intersections of diagonals and are not vertices. If $P$ is a quadrilateral, then $N(P)$ can only be $1$ or $0$. If $P$ is a pentagon, the maximum possible value of $N(P)$ is $5$ (for example, if $P$ is regular); what, however, is the minimum possible value? (In any polygon, a diagonal is a line segment joining two non-adjacent vertices.)


**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_casework|Case analysis]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="qs4" data-atom="qs4" data-title="Quesito S4" data-tags="topic_aritmetica,method_congruenze,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Esistono palindromi ABBA quadrati perfetti?*

> Esistono numeri interi palindromi di 4 cifre (cioè del tipo $\overline{ABBA}$ con $A \neq 0$) in notazione decimale, che siano quadrati perfetti?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** No
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1pVmLuJsgtVZ0iaNk5NbfEj5LKn6f8UgH/view)


<div class="qlang-split" data-lang="en"></div>


*Do perfect square ABBA palindromes exist?*

> Are there any 4-digit palindromic integers (that is, of the form $\overline{ABBA}$ with $A \neq 0$) in decimal notation that are perfect squares?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="qs5" data-atom="qs5" data-title="Quesito S5" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza XE con incerchio raggio 4 e YD=3*

![[src_kangourou_2024_student_finale__probS5.png]]

> Sia $ABC$ un triangolo e sia $O$ il centro della sua circonferenza inscritta $\gamma$. Il simbolo $|FG|$ denoti la lunghezza del segmento di estremi $F$ e $G$. Siano:
> - $D$ il punto medio del lato $BC$,
> - $Y$ il punto di contatto tra $\gamma$ e il lato $BC$,
> - $E$ il punto del lato $BC$ tale che $|AB| + |BE| = |AC| + |CE|$,
> - $X$ il punto di intersezione del segmento $AE$ con $\gamma$ più vicino a $A$.
> 
> Se il raggio di $\gamma$ è $4$ e $|YD| = 3$, quanto vale $|XE|$?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** 10
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1pVmLuJsgtVZ0iaNk5NbfEj5LKn6f8UgH/view)


<div class="qlang-split" data-lang="en"></div>


*XE length with a circle of radius 4 and YD=3*

![[src_kangourou_2024_student_finale__probS5.png]]

> Let $ABC$ be a triangle and let $O$ be the center of its incircle $\gamma$. Let the symbol $|FG|$ denote the length of the line segment with endpoints $F$ and $G$. Let:
> - $D$ the midpoint of side $BC$,
> - $Y$ the point of contact between $\gamma$ and side $BC$,
> - $E$ the point on side $BC$ such that $|AB| + |BE| = |AC| + |CE|$,
> - $X$ is the intersection point of the segment $AE$ with $\gamma$ that is closest to $A$.
>
> If the radius of $\gamma$ is $4$ and $|YD| = 3$, what is the value of $|XE|$?


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="qs6" data-atom="qs6" data-title="Quesito S6" data-tags="topic_probabilita,method_estremalita,skill_modellizzazione,skill_astrazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero dipendenti che massimizza giornate lavorative*

> Nel calendario di Kanglandia non esistono giorni festivi stabiliti a priori ma, in base ad un accordo sindacale, una ditta è costretta a dichiarare "giorno festivo per tutti" ogni giorno che sia di compleanno per almeno un dipendente. All'atto dell'assunzione di un dipendente non viene tenuta in alcun conto la sua data di nascita. Supponi che gli anni siano tutti di $365$ giorni e che le nascite a Kanglandia siano uniformemente distribuite nell'arco dell'anno. Una ditta vuole puntare a massimizzare il numero di giornate lavorative complessive dei suoi dipendenti nell'arco di un anno, ma deve stabilire in anticipo il numero dei dipendenti da assumere. Quanti dipendenti le conviene assumere? (Nota: le giornate lavorative complessive annuali con $1$ dipendente sarebbero $364$, con $2$ sarebbero $2 \times 363$ se i compleanni cadessero in giorni diversi, $2 \times 364$ se cadessero nello stesso giorno.)

**Topic:** [[topic_probabilita|Probabilita e statistica]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 364 o 365
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1pVmLuJsgtVZ0iaNk5NbfEj5LKn6f8UgH/view)


<div class="qlang-split" data-lang="en"></div>


*Number of employees that maximizes working days*

> In Kanglandia's calendar, there are no holidays established in advance; however, under a collective bargaining agreement, a company is required to declare "a holiday for everyone" on every day that is a birthday for at least one employee. When an employee is hired, their date of birth is not taken into account at all. Suppose all years have $365$ days and that births in Kanglandia are uniformly distributed throughout the year. A company wants to aim to maximize the total number of working days of its employees over the course of a year, but it must determine in advance how many employees to hire. How many employees should it hire to best advantage? (Note: the total annual working days with $1$ employees would be $364$; with $2$, they would be $2 \times 363$ if birthdays fell on different days, and $2 \times 364$ if they fell on the same day.)


**Topic:** [[topic_probabilita|Probability and statistics]]
**Metodo:** [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_astrazione|Abstraction / generalisation]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
