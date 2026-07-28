---
title: Kangourou 2019 Finale Nazionale Cadet
tipo: gara
competition: Kangourou 2019 Finale Nazionale Cadet
family: kangourou
year: '2019'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2019_cadet_finale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,topic_algebra,method_disuguaglianze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Segno della differenza A-B tra i due prodotti*

> Considera i due numeri
> $$A = 201920192019 \times 20202020 \quad \text{e} \quad B = 202020202020 \times 20192019.$$
> La differenza $A - B$ è positiva, nulla o negativa?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** nulla
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1smvCpL_hdFhIZi16iX73KtjPyMEZu5zx/view)


<span class="qlang-split" data-lang="en"></span>


*Table A-B of difference between the two products*

> Does the difference between the two numbers $$A = 201920192019 \times 20202020 \quad \text{e} \quad B = 202020202020 \times 20192019.$$ $A - B$ be positive, zero or negative?

**Answer:** nulla
[[src_kangourou_2019_cadet_finale__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Misura dell angolo ITE nel pentagono e triangolo equilatero*

![[src_kangourou_2019_cadet_finale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
  \coordinate (I) at (0, 2.5);
  \coordinate (B) at (-2.378, 0.773);
  \coordinate (L) at (-1.469, -2.023);
  \coordinate (E) at (1.469, -2.023);
  \coordinate (C) at (2.378, 0.773);
  \coordinate (R) at (4.343, -1.411);
  \coordinate (T) at (2.275, 0.450);
  \draw (B) -- (I) -- (C) -- (E) -- (L) -- cycle;
  \draw (I) -- (E);
  \draw (C) -- (R) -- (E);
  \draw (I) -- (R);
  \node[above] at (I) {$I$};
  \node[left] at (B) {$B$};
  \node[below left] at (L) {$L$};
  \node[below] at (E) {$E$};
  \node[above right] at (C) {$C$};
  \node[right] at (R) {$R$};
  \node[above right] at (T) {$T$};
  \fill (T) circle (1.5pt);
\end{tikzpicture}
\end{document}
```

> Osserva la figura. $IBLEC$ è un pentagono regolare e il triangolo $CER$ è equilatero. $T$ è il punto di intersezione tra i segmenti $CE$ e $IR$. Quanti gradi misura l'angolo $ITE$? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 114
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1smvCpL_hdFhIZi16iX73KtjPyMEZu5zx/view)


<span class="qlang-split" data-lang="en"></span>


*Measurement of the ITE angle in the equilateral pentagon and triangle*

![[src_kangourou_2019_cadet_finale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1]
  \coordinate (I) at (0, 2.5);
  \coordinate (B) at (-2.378, 0.773);
  \coordinate (L) at (-1.469, -2.023);
  \coordinate (E) at (1.469, -2.023);
  \coordinate (C) at (2.378, 0.773);
  \coordinate (R) at (4.343, -1.411);
  \coordinate (T) at (2.275, 0.450);
  \draw (B) -- (I) -- (C) -- (E) -- (L) -- cycle;
  \draw (I) -- (E);
  \draw (C) -- (R) -- (E);
  \draw (I) -- (R);
  \node[above] at (I) {$I$};
  \node[left] at (B) {$B$};
  \node[below left] at (L) {$L$};
  \node[below] at (E) {$E$};
  \node[above right] at (C) {$C$};
  \node[right] at (R) {$R$};
  \node[above right] at (T) {$T$};
  \fill (T) circle (1.5pt);
\end{tikzpicture}
\end{document}
```

> Look at the figure. $IBLEC$ is a regular pentagon and the triangle $CER$ is equilateral. $T$ is the intersection point between $CE$ and $IR$ segments. How many degrees does the angle $ITE$ measure? (see figure)

**Answer:** 114
[[src_kangourou_2019_cadet_finale__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_logica,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Perche Elvira vuole iniziare nel gioco dei 66 gettoni*

> Gianni ed Elvira giocano in questo modo. Ci sono 66 gettoni sul tavolo: ad ogni turno ognuno di essi può prendere 1 o 2 o 3 o 4 o 5 gettoni. Chi è costretto a prendere l'ultimo gettone perde. Elvira, che vuole vincere, vuole a tutti i costi essere lei ad iniziare. Perché?

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** strategia vincente
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1smvCpL_hdFhIZi16iX73KtjPyMEZu5zx/view)


<span class="qlang-split" data-lang="en"></span>


Because Elvira wants to start playing the 66-figure game.

> Gianni and Elvira play like this. There are 66 tokens on the table, each of which can take 1 or 2 or 3 or 4 or 5 tokens at each turn. Whoever is forced to take the last token loses. Elvira, who wants to win, wants to be the one to start at all costs. Why? Why?

**Answer:** strategia vincente
[[src_kangourou_2019_cadet_finale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,method_congruenze,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Tra quanti anni la luna piena tornera a Ferragosto*

> Il 15 agosto scorso, giorno di Ferragosto, c'è stata la luna piena. Ammettendo che il ciclo lunare sia di 28 giorni esatti, fra quanti anni per la prima volta ci sarà nuovamente la luna piena a Ferragosto? (Se, ad esempio, accadesse l'anno prossimo, dovresti rispondere: fra 1 anno.)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 22
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1smvCpL_hdFhIZi16iX73KtjPyMEZu5zx/view)


<span class="qlang-split" data-lang="en"></span>


In a few years the full moon will return to February.

> Last August 15th, a full moon day in February. Assuming that the lunar cycle is exactly 28 days long, how many years from now will there be a full moon again in February? (If, for example, it happens next year, you should answer: in 1 year.)

**Answer:** 22
[[src_kangourou_2019_cadet_finale__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minima somma dei 4 interi ai vertici del quadrato (divisibilita)*

> In ogni vertice di un quadrato è stato scritto un intero positivo. Se due vertici sono adiacenti, uno dei due interi corrispondenti divide l'altro; se due vertici sono opposti, nessuno dei due interi corrispondenti divide l'altro. Qual è il più piccolo valore possibile per la somma di questi quattro interi?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 35
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1smvCpL_hdFhIZi16iX73KtjPyMEZu5zx/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum sum of 4 integers at the vertices of the square (divisibility) *

> Every vertex of a square has a positive integer written on it. If two vertices are adjacent, one of the two corresponding integers divides the other; if two vertices are opposite, neither of the two corresponding integers divides the other. What's the smallest possible value for the sum of these four integers?

**Answer:** 35
[[src_kangourou_2019_cadet_finale__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_geometria_solida,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza dello spigolo VD della piramide a base rettangolare*

![[src_kangourou_2019_cadet_finale__prob6.png]]

> Di una piramide a base rettangolare sono note le lunghezze di tre dei quattro spigoli obliqui che ne congiungono il vertice $V$ con i vertici $A$, $B$, $C$, $D$ della base:
> $$VA = 90 \text{ m}, \quad VB = 70 \text{ m}, \quad VC = 20 \text{ m}.$$
> È possibile determinare la lunghezza dello spigolo $VD$? In caso affermativo determina tale lunghezza, in caso negativo individua le misure di due piramidi che rispettino i dati del problema in cui la lunghezza dello spigolo $VD$ sia diversa.

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 60
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1smvCpL_hdFhIZi16iX73KtjPyMEZu5zx/view)


<span class="qlang-split" data-lang="en"></span>


*Length of the VD beam of the rectangular base pyramid*

![[src_kangourou_2019_cadet_finale__prob6.png]]

> A rectangular-based pyramid is known for the lengths of three of the four oblique vertices connecting its vertex $V$ with the vertices $A$, $B$, $C$, $D$ of the base: $$VA = 90 \text{ m}, \quad VB = 70 \text{ m}, \quad VC = 20 \text{ m}.$$ Can the length of the vertex $VD$ be determined? If yes, it determines that length; if not, it identifies the measurements of two pyramids that meet the problem data where the length of the $VD$ beam is different.

**Answer:** 60
[[src_kangourou_2019_cadet_finale__Q06]]
