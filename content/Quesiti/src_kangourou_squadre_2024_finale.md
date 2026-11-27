---
title: Kangourou Coppa a squadre 2024 - Finale 2 (Cervia)
tipo: gara
competition: Kangourou Coppa a squadre 2024 - Finale 2 (Cervia)
family: kangourou
year: '2024'
level: squadre
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_squadre_2024_finale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Perimetro pentagono ombreggiato da triangoli equilateri annidati*

![[src_kangourou_squadre_2024_finale__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=4]
  \coordinate (A) at (0.5, 0.866);
  \coordinate (B) at (0, 0);
  \coordinate (C) at (1, 0);
  \coordinate (F) at (0.5, 0);
  \coordinate (G) at (0.75, 0);
  \coordinate (D) at (0.75, 0.433);
  \coordinate (E) at (0.625, 0.2165);
  \fill[gray!30] (A) -- (B) -- (G) -- (E) -- (D) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (E) -- (F) -- (G) -- cycle;
  \draw[thick] (D) -- (E);
  \node[above] at (A) {$A$};
  \node[left] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[left] at (E) {$E$};
  \node[below] at (F) {$F$};
  \node[below] at (G) {$G$};
\end{tikzpicture}
\end{document}
```

> Il pentagono  
> Osservate la figura. ABC e EFG sono triangoli equilateri; F è il punto medio 
> di BC, G è il punto medio di FC e D è allineato con F ed E. Il perimetro del 
> triangolo ABC è 132. Qual è il perimetro del pentagono ombreggiato ABGED?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0121
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*Perimeter of a pentagon shaded by nested equilateral triangles*

![[src_kangourou_squadre_2024_finale__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=4]
  \coordinate (A) at (0.5, 0.866);
  \coordinate (B) at (0, 0);
  \coordinate (C) at (1, 0);
  \coordinate (F) at (0.5, 0);
  \coordinate (G) at (0.75, 0);
  \coordinate (D) at (0.75, 0.433);
  \coordinate (E) at (0.625, 0.2165);
  \fill[gray!30] (A) -- (B) -- (G) -- (E) -- (D) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (E) -- (F) -- (G) -- cycle;
  \draw[thick] (D) -- (E);
  \node[above] at (A) {$A$};
  \node[left] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[left] at (E) {$E$};
  \node[below] at (F) {$F$};
  \node[below] at (G) {$G$};
\end{tikzpicture}
\end{document}
```

> The pentagon Observe the figure. ABC and EFG are equilateral triangles; F is the midpoint of BC, G is the midpoint of FC, and D lies on the same line as F and E. The perimeter of triangle ABC is 132. What is the perimeter of the shaded pentagon ABGED?


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,method_congruenze,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo intero somma di 9 e di 10 interi consecutivi*

> Somme di positivi  
> Qual è il più piccolo numero intero positivo che è esprimibile come somma sia di nove interi positivi 
> consecutivi sia di dieci interi positivi consecutivi?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0135
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum integer sum of 9 and 10 consecutive integers*

> Sums of Positives: What is the smallest positive integer that can be expressed as the sum of either nine consecutive positive integers or ten consecutive positive integers?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza segmento PQ in un quadrato con perpendicolari note*

![[src_kangourou_squadre_2024_finale__prob3.png]]

> Il segmento PQ  
> Nella figura, l’estremo P del segmento PQ è un vertice del quadrato mentre 
> l’estremo Q è un punto interno a un lato del quadrato che non ha un estremo in 
> P. Gli altri due segmenti interni al quadrato hanno entrambi un estremo in un 
> vertice del quadrato e l’altro sul segmento PQ e sono perpendicolari a PQ. La 
> figura, che non è in scala, riporta le loro lunghezze in centimetri. Quanti 
> millimetri è lungo il segmento PQ?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0136
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*Length of segment PQ in a square with known perpendiculars*

![[src_kangourou_squadre_2024_finale__prob3.png]]

> Segment PQ. In the figure, endpoint P of segment PQ is a vertex of the square, while endpoint Q is a point inside a side of the square that does not have an endpoint at P. The other two segments inside the square both have one endpoint at a vertex of the square and the other on segment PQ, and they are perpendicular to PQ. The figure, which is not drawn to scale, gives their lengths in centimeters. How many millimeters long is segment PQ?


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,method_casework,skill_casework_accurato,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero ABC = B x CB con B e CB primi*

> Numeri primi  
> Il numero di tre cifre n = ABC (A ≠ 0) è tale che n = B × CB dove sia B sia CB sono numeri primi. 
> Quanto vale n?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0679
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*ABC number = B × CB, where B and CB are prime*

> Prime numbers The three-digit number n = ABC (A ≠ 0) satisfies n = B × CB, where both B and CB are prime numbers. What is the value of n?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,method_fattorizzazione,method_casework,skill_manipolazione_algebrica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Anno del primo romanzo data la somma degli anni*

> Il primo romanzo  
> In un certo periodo della sua vita, uno scrittore ha pubblicato ogni due anni un romanzo. Ne ha 
> pubblicati sicuramente più di 7 e meno di 14. Sommando gli anni nei quali sono stati pubblicati i suoi 
> romanzi, si ottiene 21.945. In quale anno ha pubblicato il suo primo romanzo?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 1985
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*The year of the first novel is given by the sum of the years*

> The First Novel At a certain period in his life, a writer published a novel every two years. He certainly published more than 7 and fewer than 14 novels. Adding together the years in which his novels were published gives 21,945. In which year did he publish his first novel?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_casework|Case analysis]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,topic_algebra,method_casework,skill_riconoscimento_pattern,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Ultimo intero scritto con somma alternata uguale a 2024*

> La somma è 2024  
> Simeone ha incominciato a scrivere i numeri interi positivi, partendo da 1, ma premettendo il segno 
> meno a tutti e soli i numeri pari. Ha iniziato dunque scrivendo 1 – 2 + 3 – 4 + 5 – 6 + …. Si è fermato 
> esattamente quando la somma algebrica che risulta scritta ha dato come risultato 2024. Qual è l’ultimo 
> intero che ha scritto?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** 4047
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*Last complete written sequence with alternating sum equal to 2024*

> The sum is 2024. Simeone began writing positive integers, starting from 1, but he put a minus sign in front of all and only the even numbers. So he started by writing 1 – 2 + 3 – 4 + 5 – 6 + …. He stopped exactly when the algebraic sum that had been written came to 2024. What is the last integer he wrote?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Area tra due circonferenze tangenti internamente diviso pi*

![[src_kangourou_squadre_2024_finale__prob7.png]]

> La regione ombreggiata  
> La figura evidenzia due circonferenze tangenti internamente in un punto, 
> il diametro della circonferenza esterna che ha quel punto come uno degli 
> estremi e il diametro della stessa circonferenza ad esso perpendicolare. 
> Sono inoltre precisate le lunghezze in metri, 20 e 36, dei due segmenti 
> indicati. Quanto vale, in metri quadrati, l’area della regione 
> (ombreggiata) compresa tra le due circonferenze divisa per π? 
>  
> } 36 
> 20 
> }  
> P 
> Q 
> A 
> B 
> C 
> D 
> E 
> F 
> G

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** 3276
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*Area between two internally tangent circles, divided by pi*

![[src_kangourou_squadre_2024_finale__prob7.png]]

> The shaded region. The figure shows two circles that are internally tangent at a point, the diameter of the outer circle having that point as one endpoint, and the diameter of the same circle that is perpendicular to it. The lengths, in metres, of the two indicated line segments—20 and 36—are also specified. What is the value, in square metres, of the area of the (shaded) region between the two circles divided by π?
>
> } 36 20 } P Q A B C D E F G


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_algebra,topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Aumento percentuale del volume di un parallelepipedo*

> La scatola  
> Una scatola ha la forma di un parallelepipedo rettangolo. Se si aumentano la lunghezza del 50% e la 
> larghezza del 40%, e si diminuisce l’altezza del 10%, di quale percentuale aumenta il volume della 
> scatola? (Rispondete senza il simbolo %.)

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0089
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*Percentage increase in the volume of a parallelepiped*

> The Box A box is in the shape of a rectangular parallelepiped. If its length is increased by 50% and its width by 40%, and its height is decreased by 10%, by what percentage does the volume of the box increase? (Answer without the % symbol.)


**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_aritmetica,method_casi_conteggio,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero di incroci tra due nuotatrici in un'ora*

> Le nuotatrici  
> Due nuotatrici si allenano in una piscina: partono da uno dei lati e, quando raggiungono il lato 
> opposto, invertono il verso del nuoto. Per raggiungere il lato opposto una impiega 45 secondi, l’altra 
> 30. Se partono contemporaneamente da lati opposti e nuotano in corsie adiacenti entrambe per un’ora 
> esatta a velocità costante, quante volte si troveranno affiancate per un incrocio o un sorpasso?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0100
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*Number of crossings between two female swimmers in one hour*

> The Swimmers Two swimmers are training in a pool: they start from one side and, when they reach the opposite side, reverse direction. It takes one of them 45 seconds to reach the opposite side; the other
> 30. If they set off at the same time from opposite sides and both swim in adjacent lanes for an hour
> Moving exactly at a constant speed, how many times will they be side by side during an intersection or an overtaking maneuver?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casi_conteggio|Counting by cases]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_aritmetica,method_fattorizzazione,skill_conteggio_sistematico,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo intero il cui prodotto delle cifre e 540*

> Il più piccolo  
> Qual è il più piccolo numero intero positivo il prodotto delle cui cifre è 540? (Scrivete 0000 se ritenete 
> che un tale numero non esista.)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 2569
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*The smallest integer whose digits multiply to 540*

> Smallest What is the smallest positive integer whose digits multiply to 540? (Write 0000 if you think such a number does not exist.)


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_combinatoria,topic_aritmetica,method_colorazione,method_estremalita,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma diagonali griglia nxn minima con celle 3 e 17*

> La griglia  
> In ogni cella di una griglia quadrata n × n, dove n è un numero intero positivo, è collocato un numero 
> intero in modo che i numeri che si trovano in due celle adiacenti (cioè che condividono un lato) 
> differiscano esattamente di 1. I numeri 3 e 17 compaiono nella griglia. Se n è il più piccolo valore 
> possibile compatibile con l’enunciato del problema, quanto vale la somma dei numeri che compaiono 
> sulle diagonali della griglia?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_colorazione|Colorazione / parita]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0160
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum sum of the diagonals of an n×n grid with cells 3 and 17*

> The Grid In each cell of a square n × n grid, where n is a positive integer, an integer is placed such that the numbers in two adjacent cells (that is, cells that share a side) differ by exactly 1. The numbers 3 and 17 appear in the grid. If n is the smallest possible value consistent with the problem statement, what is the sum of the numbers that appear on the diagonals of the grid?


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_colorazione|Colouring / parity]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,method_simmetria,skill_riconoscimento_pattern,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma dei numeri nella 25a riga di schema triangolare*

> Schema a triangolo  
> Immaginate che i numeri interi positivi siano elencati in uno 
> schema triangolare (illimitato) come suggerito dalla figura. 
> Quanto vale la somma dei numeri contenuti nella 
> venticinquesima riga?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 7825
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*Sum of the numbers in the 25th row of the triangular array*

> Triangular array Imagine that the positive integers are listed in a (limitless) triangular array as suggested by the figure. What is the sum of the numbers in the twenty-fifth row?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_logica,topic_combinatoria,method_casework,method_backward,skill_casework_accurato,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Risultato incontro A-D in torneo di calcio a 4 squadre*

![[src_kangourou_squadre_2024_finale__prob13.png]]

> Il torneo  
> Ad un torneo di calcio partecipano le quattro squadre A, B, C, D. Ognuna incontra una e una sola 
> volta ognuna delle altre tre. La classifica finale (3 punti per la vittoria, 1 
> per il pareggio, 0 per la sconfitta) è quella che vedi in figura. A e C hanno 
> incassato solo una rete ciascuna, B e C hanno segnato solo una rete 
> ciascuna, A ha segnato 3 reti. Qual è il risultato dell’incontro tra A e D?  
> Se l’incontro è terminato m per A e n per D (ad esempio 1 a 0), scrivete 
> [0m0n] (nel caso dell’esempio [0100]).

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0201
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*Result of the A-D match in the 4-team football tournament*

![[src_kangourou_squadre_2024_finale__prob13.png]]

> The Tournament Four teams, A, B, C, and D, take part in a football tournament. Each team plays each of the other three teams once and only once. The final standings (3 points for a win, 1 for a draw, 0 for a loss) are the ones you see in the figure. A and C have each conceded only one goal; B and C have each scored only one goal; A has scored 3 goals. What is the result of the match between A and D? If the match ended with m goals for A and n goals for D (for example, 1–0), write [0m0n] (in the case of the example, [0100]).


**Topic:** [[topic_logica|Logic, games and strategies]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_casework|Case analysis]], [[method_backward|Working backwards]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_logica,topic_aritmetica,topic_combinatoria,method_estremalita,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma massima dei punteggi di 24 lanci di dado vincolati*

> Il dado  
> Mauro ha lanciato un dado equo 24 volte. Tutti i punteggi da 1 a 6 sono usciti almeno una volta, ma 
> 1 è uscito più di ogni altro. La somma di tutti i punteggi ottenuti da 
> Mauro è la più alta possibile compatibilmente con quanto detto in 
> precedenza: qual è questa somma?

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0090
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum sum of the scores of 24 constrained dice rolls*

> Mauro rolled a fair die 24 times. Every score from 1 to 6 came up at least once, but 1 came up more often than any other score. The sum of all the scores Mauro obtained is the highest possible consistent with what was said earlier: what is this sum?


**Topic:** [[topic_logica|Logic, games and strategies]], [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Area regione ombreggiata in quadrato ripartito*

![[src_kangourou_squadre_2024_finale__prob15.png]]

> Il quadrato ripartito 
> I lati del quadrato nella figura a destra sono ripartiti in segmenti delle 
> lunghezze indicate in centimetri; collegando con altri segmenti gli 
> estremi di alcuni di essi si sono ottenute le due regioni che appaiono, 
> una bianca e una ombreggiata. Qual è l’area, in centimetri quadrati, 
> della regione ombreggiata?  
> Squadra Punti 
> A 
> 7 
> B 
> 5 
> C 
> 4 
> D 
> 0 
> 1 
> 2      3 
> 4      5      6 
> 7       8      9      10 
> 11     12     13     14     15 
>   16     17     …       …                 . 
> 
> Kangourou della Matematica 2024
> Coppa Kangourou a squadre
> Finale 2
> Cervia, 4 maggio 2024
>  
> Titoli e risposte

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** 0218
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<div class="qlang-split" data-lang="en"></div>


*Area, region, shaded in a divided square*

![[src_kangourou_squadre_2024_finale__prob15.png]]

> The divided square: In the figure on the right, the sides of the square are divided into line segments whose lengths are given in centimeters; by connecting the endpoints of some of these segments with other line segments, the two regions shown—one white and one shaded—were formed. What is the area, in square centimeters, of the shaded region? Ruler Points A 7 B 5 C 4 D 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 … … .
>
> Kangaroo Mathematics Competition 2024 Kangaroo Team Cup Final 2 Cervia, 4 May 2024
>
> Titles and answers


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]
