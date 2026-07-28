---
title: Kangourou 2024 Student finale
tipo: gara
competition: Kangourou 2024 Student finale
family: kangourou
year: '2024'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2024_student_finale"></div>



<span class="atom-split" id="qs1" data-atom="qs1" data-title="Quesito S1" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

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
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** no
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1pVmLuJsgtVZ0iaNk5NbfEj5LKn6f8UgH/view)


<span class="qlang-split" data-lang="en"></span>


*Two triangles with two sides of equal height are congruent?*

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

> Two triangles are given. The lengths of two sides of the one coincide with the lengths of two sides of the other and the height relative to the third side of one coincides with that relative to the third side of the other. Are the two triangles necessarily congruent?

**Answer:** no
[[src_kangourou_2024_student_finale__QS1]]



<span class="atom-split" id="qs2" data-atom="qs2" data-title="Quesito S2" data-tags="topic_aritmetica,topic_logica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Citta operativa aereo nel primo giorno secondo mese*

> Io non bevo caffè nei soli giorni di lunedì e sabato. Un aereo viene impiegato a giorni alterni sulle rotte Milano – Cagliari e Milano – Palermo con voli di andata e ritorno giornalieri operati settimanalmente dal martedì alla domenica inclusi; ogni lunedì è fermo per manutenzione. Nel corso di un anno ci sono stati due mesi consecutivi nell'arco dei quali ha operato complessivamente per 53 giorni, il primo dei quali su Cagliari. Nel primo giorno del primo di questi due mesi non ho bevuto caffè. È possibile stabilire su quale città l'aereo ha operato nel primo giorno di operatività del secondo mese? È possibile stabilire se tale giorno coincide con il primo giorno del mese?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** si, Cagliari
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1pVmLuJsgtVZ0iaNk5NbfEj5LKn6f8UgH/view)


<span class="qlang-split" data-lang="en"></span>


*City of air operations on the first day of the second month*

> I don't drink coffee only on Mondays and Saturdays. An aircraft is used on alternate days on the Milan  Cagliari and Milan  Palermo routes with daily round-trip flights operated weekly from Tuesday to Sunday included; every Monday it is stationary for maintenance. During a year there were two consecutive months during which he operated for a total of 53 days, the first of which was in Cagliari. On the first day of the first of these two months, I didn't drink coffee. Is it possible to determine which city the aircraft operated in on the first day of operation in the second month? Is it possible to determine whether that day coincides with the first day of the month?

**Answer:** si, Cagliari
[[src_kangourou_2024_student_finale__QS2]]



<span class="atom-split" id="qs3" data-atom="qs3" data-title="Quesito S3" data-tags="topic_geometria_piana,topic_combinatoria,method_estremalita,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo N(P) intersezioni diagonali in un pentagono*

![[src_kangourou_2024_student_finale__probS3.png]]

> Per un poligono (piano) $P$, non necessariamente convesso, indichiamo con $N(P)$ il numero di punti che sono intersezioni di diagonali e non sono vertici. Se $P$ è un quadrilatero, $N(P)$ può essere solo $1$ oppure $0$. Se $P$ è un pentagono, il massimo valore possibile per $N(P)$ è $5$ (ad esempio se $P$ è regolare); qual è invece il minimo valore possibile? (In un qualunque poligono, per diagonale si intende un segmento che congiunge due vertici non adiacenti.)

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 0
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1pVmLuJsgtVZ0iaNk5NbfEj5LKn6f8UgH/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum N(P) diagonal intersections in a pentagon*

![[src_kangourou_2024_student_finale__probS3.png]]

> For a polygon (plane) $P$, not necessarily convex, we indicate with $N(P)$ the number of points that are diagonal intersections and not verticals. If $P$ is a quadrilateral, $N(P)$ may be only $1$ or $0$. If $P$ is a pentagon, the maximum possible value for $N(P)$ is $5$ (e.g. if $P$ is regular); instead, what is the minimum possible value? (In any polygon, by diagonal means a segment that joins two non-adjacent vertices.)

**Answer:** 0
[[src_kangourou_2024_student_finale__QS3]]



<span class="atom-split" id="qs4" data-atom="qs4" data-title="Quesito S4" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Esistono palindromi ABBA quadrati perfetti?*

> Esistono numeri interi palindromi di 4 cifre (cioè del tipo $\overline{ABBA}$ con $A \neq 0$) in notazione decimale, che siano quadrati perfetti?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** No
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1pVmLuJsgtVZ0iaNk5NbfEj5LKn6f8UgH/view)


<span class="qlang-split" data-lang="en"></span>


Are there any perfectly square ABBA palindromes?

> Are there 4-digit palindromes (i.e. $\overline{ABBA}$ with $A \neq 0$) in decimal notation, which are perfect squares?

**Answer:** No
[[src_kangourou_2024_student_finale__QS4]]



<span class="atom-split" id="qs5" data-atom="qs5" data-title="Quesito S5" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

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
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 10
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1pVmLuJsgtVZ0iaNk5NbfEj5LKn6f8UgH/view)


<span class="qlang-split" data-lang="en"></span>


*Length XE with uncertainty of radius 4 and YD=3*

![[src_kangourou_2024_student_finale__probS5.png]]

> either $ABC$ a triangle and $O$ the center of its inscribed circumference $\gamma$. The $|FG|$ symbol shall indicate the length of the $F$ and $G$ end segments. They shall be: - $D$ the middle point of the $BC$ side, - $Y$ the point of contact between $\gamma$ and $BC$ side, - $E$ the point of the $BC$ side such that $|AB| + |BE| = |AC| + |CE|$, - $X$ the point of intersection of the $AE$ segment with $\gamma$ nearest to $A$.
> 
> If the radius of $\gamma$ is $4$ and $|YD| = 3$, how much is $|XE|$?

**Answer:** 10
[[src_kangourou_2024_student_finale__QS5]]



<span class="atom-split" id="qs6" data-atom="qs6" data-title="Quesito S6" data-tags="topic_probabilita,skill_modellizzazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero dipendenti che massimizza giornate lavorative*

> Nel calendario di Kanglandia non esistono giorni festivi stabiliti a priori ma, in base ad un accordo sindacale, una ditta è costretta a dichiarare "giorno festivo per tutti" ogni giorno che sia di compleanno per almeno un dipendente. All'atto dell'assunzione di un dipendente non viene tenuta in alcun conto la sua data di nascita. Supponi che gli anni siano tutti di $365$ giorni e che le nascite a Kanglandia siano uniformemente distribuite nell'arco dell'anno. Una ditta vuole puntare a massimizzare il numero di giornate lavorative complessive dei suoi dipendenti nell'arco di un anno, ma deve stabilire in anticipo il numero dei dipendenti da assumere. Quanti dipendenti le conviene assumere? (Nota: le giornate lavorative complessive annuali con $1$ dipendente sarebbero $364$, con $2$ sarebbero $2 \times 363$ se i compleanni cadessero in giorni diversi, $2 \times 364$ se cadessero nello stesso giorno.)

**Topic:** [[topic_probabilita|Probabilita e statistica]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 364 o 365
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1pVmLuJsgtVZ0iaNk5NbfEj5LKn6f8UgH/view)


<span class="qlang-split" data-lang="en"></span>


*Number of employees maximising working days*

> There are no fixed holidays in the Kanglandia calendar, but under a trade union agreement, a company is obliged to declare a "holiday for all" every day that is a birthday for at least one employee. The date of birth of an employee shall not be taken into account when he is hired. Suppose that the years are all $365$ days and that the Kangland births are evenly distributed throughout the year. A company wants to maximize the total number of working days of its employees over the course of a year, but it must determine in advance the number of employees to be hired. How many employees should you hire? (Note: the annual total working days with $1$ employee would be $364$, with $2$ would be $2 \times 363$ if birthdays fell on different days, $2 \times 364$ if they fell on the same day.)

**Answer:** 364 o 365
[[src_kangourou_2024_student_finale__QS6]]
