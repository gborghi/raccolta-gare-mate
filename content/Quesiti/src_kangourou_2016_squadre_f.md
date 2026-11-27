---
title: Kangourou Coppa Squadre 2016 Finale
tipo: gara
competition: Kangourou Coppa Squadre 2016 Finale
family: kangourou
year: '2016'
level: squadre
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2016_squadre_f"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma m+M numeri di due cifre con vincoli su somma cifre*

> Somme 
> Chiamate m il più piccolo numero di due cifre la somma delle quali sia ancora un numero di due 
> cifre. Chiamate M il più grande numero di due cifre la cui somma sia un numero con una cifra sola.  
> Quanto vale m + M?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 109
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<div class="qlang-split" data-lang="en"></div>


*Sum m+M two-digit numbers with constraints on the sum of the digits*

> Let m be the smallest two-digit number whose digits add up to another two-digit number. Let M be the largest two-digit number whose digits add up to a single-digit number. What is the value of m + M?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_probabilita,topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Probabilita su 100 che primo e ultimo siano quadrati*

> Gli oggetti di Gertrude  
> Gertrude ha cinque oggetti: tre quadrati e due cerchi. Se li dispone in fila a caso sul tavolo, quante 
> probabilità su 100 ci sono che il primo e l’ultimo oggetto siano due quadrati?

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 30
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<div class="qlang-split" data-lang="en"></div>


*Probability out of 100 that the first and the last are squares*

> Gertrude's Objects Gertrude has five objects: three squares and two circles. If she arranges them in a random line on the table, what is the probability, out of 100, that the first and the last objects are both squares?

**Topic:** [[topic_probabilita|Probability and statistics]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Perimetro triangolo CXA dato area e rapporti lati*

![[src_kangourou_2016_squadre_f__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (4,3);
  \coordinate (X) at (4,1.667);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (A) -- (X);
  \draw (3.8,0) -- (3.8,0.2) -- (4,0.2);
  \node[left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[right] at (X) {$X$};
\end{tikzpicture}
\end{document}
```

> Il triangolo spezzato 
> Nel seguito denotiamo con WZ la lunghezza del generico segmento di estremi W 
> e Z. Osservate la figura. Nel triangolo ABC l’angolo in B è retto e il punto X è 
> tale che BX/XC  5/4 e AB  3CX. L’area del triangolo CXA è 54 cm2. Qual è la 
> lunghezza in centimetri del perimetro di CXA ?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** 48
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<div class="qlang-split" data-lang="en"></div>


*Perimeter of triangle CXA given area and side ratios*

![[src_kangourou_2016_squadre_f__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (4,3);
  \coordinate (X) at (4,1.667);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (A) -- (X);
  \draw (3.8,0) -- (3.8,0.2) -- (4,0.2);
  \node[left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[right] at (X) {$X$};
\end{tikzpicture}
\end{document}
```

> The Broken Triangle In what follows, we denote by WZ the length of an arbitrary line segment with endpoints W and Z. Observe the figure. In triangle ABC, the angle at B is a right angle, and point X satisfies BX/XC = 5/4 and AB = 3CX. The area of triangle CXA is 54 cm². What is the perimeter of triangle CXA, in centimeters?


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_algebra,method_backward,skill_lettura_attenta,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Velocita restanti due terzi per media 21 (impossibile)*

> Gianni il ciclista 
> Gianni deve compiere un certo tragitto in bicicletta. Fino a questo istante ne ha percorso un terzo 
> alla velocità media di 7 km/h. Quale deve essere la sua velocità media nei restanti due terzi se vuole 
> che la sua velocità media su tutto il percorso sia di 21 km/h? (Scrivete [9999] se pensate che gli sia 
> impossibile ottenere quello che vuole.)

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 9999
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<div class="qlang-split" data-lang="en"></div>


*Remaining speed: two-thirds at an average of 21 (impossible)*

> Gianni the cyclist: Gianni must cover a certain distance by bicycle. Up to now, he has covered one third of it at an average speed of 7 km/h. What must his average speed be for the remaining two thirds if he wants his average speed over the entire route to be 21 km/h? (Write [9999] if you think it is impossible for him to achieve what he wants.)


**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_backward|Working backwards]]
**Abilita:** [[skill_lettura_attenta|Careful reading]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,method_congruenze,skill_casework_accurato,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma cifre del minimo multiplo di 35 con cifre uguali*

> Per 35 
> M è il più piccolo multiplo (intero positivo) di 35 le cui cifre sono tutte uguali fra loro. Qual è la 
> somma delle cifre di M?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 30
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<div class="qlang-split" data-lang="en"></div>


*Sum of the digits of the smallest multiple of 35 with identical digits*

> Per 35 M is the smallest multiple (a positive integer) of 35 whose digits are all equal to one another. What is the sum of the digits of M?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_geometria_solida,topic_combinatoria,method_conteggio,skill_riconoscimento_pattern,skill_ragionamento_geometrico,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Segmenti per disegnare cubo da 1000 cubetti*

![[src_kangourou_2016_squadre_f__prob6.png]]

> Disegnar cubetti 
> Le figure mostrano, in prospettiva, due cubi; il secondo è ottenuto accostando 8 
> cubi uguali al primo. Quanti segmenti occorrerà tracciare per 
> disegnare, con lo stesso tipo di prospettiva, il cubo ottenuto 
> accostando 1000 cubi uguali al primo? Per intenderci su che cosa 
> intendiamo per “segmento”, vi diciamo che per disegnare il primo 
> cubo sono stati tracciati 9 segmenti, per disegnare il secondo ne 
> sono stati tracciati 15.

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 63
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<div class="qlang-split" data-lang="en"></div>


*Segments for drawing a cube made of 1000 cubes*

![[src_kangourou_2016_squadre_f__prob6.png]]

> Drawing Cubes The figures show two cubes in perspective; the second cube is obtained by placing 8 identical cubes next to the first one. How many line segments will need to be drawn to draw, using the same type of perspective, the cube obtained by placing 1000 identical cubes next to the first one? To make clear what we mean by "line segment", let us tell you that 9 line segments were drawn to draw the first cube, and 15 were drawn to draw the second.


**Topic:** [[topic_geometria_solida|Solid geometry]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_aritmetica,method_congruenze,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimi confetti iniziali con frazioni prese da due*

> Confetti 
> Un vaso contiene dei confetti. Passa Simone e ne prende 1/15; poi passa Sara e ne prende 1/8 di 
> quelli lasciati da Simone. Prima che arrivasse Simone, nel vaso c’era la più piccola quantità di 
> confetti con la quale è stato possibile che ciò avvenisse. Quanti confetti c’erano?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 60
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<div class="qlang-split" data-lang="en"></div>


*Minimal initial confetti with fractions taken from two*

> Confetti: A jar contains some confetti. Simone comes by and takes 1/15 of it; then Sara comes by and takes 1/8 of what Simone left. Before Simone arrived, the jar contained the smallest number of confetti with which it was possible for this to happen. How many confetti were there?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_logica,topic_aritmetica,method_congruenze,skill_astrazione,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero totale sorpassi tra i tre pattinatori*

> I pattinatori 
> Aldo, Bruno e Carlo si divertono a pattinare su una pista circolare. Partono allo stesso istante da uno 
> stesso punto e nello stesso verso; ognuno pattina a velocità costante: Bruno va più veloce di Carlo, 
> ma meno veloce di Aldo. Si fermano non appena si ritrovano tutti e tre insieme: quando si fermano 
> Aldo ha sorpassato Carlo 10 volte. Quanti sorpassi fra loro tre sono avvenuti complessivamente 
> prima di quel momento? (Scrivete [9999] se pensate che la situazione descritta sia impossibile.)

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 19
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<div class="qlang-split" data-lang="en"></div>


*Total number of overtakes among the three skaters*

> The skaters Aldo, Bruno, and Carlo are having fun skating on a circular track. They start at the same instant from the same point and in the same direction; each skates at a constant speed: Bruno is faster than Carlo but slower than Aldo. They stop as soon as all three are together again: when they stop, Aldo has overtaken Carlo 10 times. How many overtakes among the three of them have taken place in total before that moment? (Write [9999] if you think the situation described is impossible.)


**Topic:** [[topic_logica|Logic, games and strategies]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_geometria_piana,method_trigonometria,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Perimetro triangolo coi punti medi nell’esagono*

![[src_kangourou_2016_squadre_f__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (V0) at (2,0);
  \coordinate (V1) at (1,1.732);
  \coordinate (V2) at (-1,1.732);
  \coordinate (V3) at (-2,0);
  \coordinate (V4) at (-1,-1.732);
  \coordinate (V5) at (1,-1.732);
  \draw (V0) -- (V1) -- (V2) -- (V3) -- (V4) -- (V5) -- cycle;
  \coordinate (M01) at (1.5,0.866);
  \coordinate (M23) at (-1.5,0.866);
  \coordinate (M45) at (0,-1.732);
  \draw (M01) -- (M23) -- (M45) -- cycle;
\end{tikzpicture}
\end{document}
```

> Un triangolo nell’esagono 
> Un esagono regolare di lato 12 cm contiene un triangolo i cui vertici sono i punti medi 
> di tre lati a due a due non adiacenti (vedi figura). Quanti centimetri misura il perimetro 
> del triangolo?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 54
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<div class="qlang-split" data-lang="en"></div>


*Perimeter of the triangle with the midpoints in the hexagon*

![[src_kangourou_2016_squadre_f__prob9.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (V0) at (2,0);
  \coordinate (V1) at (1,1.732);
  \coordinate (V2) at (-1,1.732);
  \coordinate (V3) at (-2,0);
  \coordinate (V4) at (-1,-1.732);
  \coordinate (V5) at (1,-1.732);
  \draw (V0) -- (V1) -- (V2) -- (V3) -- (V4) -- (V5) -- cycle;
  \coordinate (M01) at (1.5,0.866);
  \coordinate (M23) at (-1.5,0.866);
  \coordinate (M45) at (0,-1.732);
  \draw (M01) -- (M23) -- (M45) -- cycle;
\end{tikzpicture}
\end{document}
```

> A Triangle Inside a Hexagon A regular hexagon with sides 12 cm long contains a triangle whose vertices are the midpoints of three sides that are not adjacent in pairs (see figure). How many centimeters is the perimeter of the triangle?


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_trigonometria|Trigonometric techniques]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_aritmetica,topic_algebra,method_fattorizzazione,skill_riconoscimento_pattern,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma interi consecutivi i cui cubi danno 2016*

> 2016 e i cubi  
> 2016 è esprimibile come somma delle terze potenze di alcuni numeri interi positivi consecutivi. 
> Quanto vale la somma di questi numeri?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** 42
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<div class="qlang-split" data-lang="en"></div>


*Sum of consecutive integers whose cubes equal 2016*

> 2016 and the cubes 2016 can be expressed as the sum of the cubes of some consecutive positive integers. What is the sum of these numbers?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*2016 somma di potenze di 2 consecutive*

> 2016 e potenze di 2 
> 2016 è esprimibile come somma di potenze di 2 con esponenti che sono numeri interi positivi 
> consecutivi. Quanto vale la somma di questi esponenti?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 45
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<div class="qlang-split" data-lang="en"></div>


*2016 sum of consecutive powers of 2*

> 2016 and powers of 2: 2016 can be expressed as the sum of powers of 2 whose exponents are consecutive positive integers. What is the sum of these exponents?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,method_conteggio,method_fattorizzazione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti divisori ha il numero 2016*

> I divisori di 2016 
> Quanti divisori ha il numero 2016?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 36
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<div class="qlang-split" data-lang="en"></div>


*How many divisors does the number 2016 have?*

> Divisors of 2016: How many divisors does the number 2016 have?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_combinatoria,method_conteggio,method_casi_conteggio,skill_conteggio_sistematico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di colorare i vertici del quadrato con 3 colori*

> Colora i vertici 
> Avete a disposizione tre colori diversi per colorare i vertici ABCD di un quadrato. Volete che vertici 
> adiacenti ricevano colori diversi. In quanti diversi modi potete farlo? Tenete presente che ogni 
> vertice ha un nome, quindi due colorazioni vanno ritenute diverse quando qualche vertice riceve 
> colori diversi.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 18
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<div class="qlang-split" data-lang="en"></div>


*Ways to color the vertices of a square using 3 colors*

> Color the vertices You have three different colors available to color the vertices A, B, C, and D of a square. You want adjacent vertices to receive different colors. In how many different ways can you do this? Keep in mind that each vertex has a name, so two colorings should be considered different when some vertex receives different colors.


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casi_conteggio|Counting by cases]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_combinatoria,topic_aritmetica,method_conteggio,method_estremalita,skill_casework_accurato,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quante esacoppie con somma massima dei due numeri*

> Le esacoppie 
> Chiamo esacoppia una coppia di numeri interi di tre cifre scritti utilizzando tutte e sole le cifre da 1 
> a 6. Quante sono le esacoppie tali che sia massima la somma dei due numeri che le compongono? 
> Attenzione: le esacoppie sono coppie non ordinate;  in altre parole, l’esacoppia {123,456} coincide 
> con l’esacoppia {456,123}. 
> Kangourou della Matematica 2016 
> Coppa a squadre Kangourou   
> Finale - Cervia, 8 maggio 2016 
>  
>  
>    Quesiti e soluzioni

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 4
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1Uih0VpIOW40GBf8mxXkEFst7nixVBxJu/view)


<div class="qlang-split" data-lang="en"></div>


*How many sexuples have the maximum sum of the two numbers?*

> Esacoppie I call an esacoppia a pair of three-digit integers written using only the digits from 1 to 6. How many esacoppie are there such that the sum of the two numbers that make up the pair is maximal? Attention: esacoppie are unordered pairs; in other words, the esacoppia {123,456} is the same as the esacoppia {456,123}. Kangourou de la Mathématique 2016 Team Cup Kangourou Final - Cervia, 8 May 2016
>
>
> Questions and Solutions


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
