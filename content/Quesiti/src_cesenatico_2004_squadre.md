---
title: Gara a Squadre Cesenatico 2004 - Finale Nazionale
tipo: gara
competition: Gara a Squadre Cesenatico 2004 - Finale Nazionale
family: archimede
year: '2004'
level: squadre
---
<div class="atom-reader" data-gara="Quesiti/src_cesenatico_2004_squadre"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,method_coordinate,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area del quadrilatero formato da sentinelle su triangoli equilateri*

![[src_cesenatico_2004_squadre__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (2,2);
  \coordinate (D) at (0,2);
  \coordinate (Tb) at (1,-1.732);
  \coordinate (Tr) at (3.732,1);
  \coordinate (Tt) at (1,3.732);
  \coordinate (Tl) at (-1.732,1);
  \draw (A)--(B)--(C)--(D)--cycle;
  \draw (A)--(Tb)--(B);
  \draw (B)--(Tr)--(C);
  \draw (C)--(Tt)--(D);
  \draw (D)--(Tl)--(A);
\end{tikzpicture}
\end{document}
```

> Le sentinelle
> Il palazzo di Herrovaccio, re di Franquvia, ha pianta quadrata che ricopre
> un area di 1600 miglia franquviane quadrate. Quattro sentinelle sorvegliano
> ognuna un lato del palazzo, disposte come in figura (le sentinelle formano con i
> lati del palazzo quattro triangoli equilateri). Qual è l’area (in miglia quadrate)
> del quadrilatero che ha per vertici le quattro sentinelle?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 5971
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Area of the quadrilateral formed by sentinels on equilateral triangles*

![[src_cesenatico_2004_squadre__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (2,2);
  \coordinate (D) at (0,2);
  \coordinate (Tb) at (1,-1.732);
  \coordinate (Tr) at (3.732,1);
  \coordinate (Tt) at (1,3.732);
  \coordinate (Tl) at (-1.732,1);
  \draw (A)--(B)--(C)--(D)--cycle;
  \draw (A)--(Tb)--(B);
  \draw (B)--(Tr)--(C);
  \draw (C)--(Tt)--(D);
  \draw (D)--(Tl)--(A);
\end{tikzpicture}
\end{document}
```

> The Sentinels
> The palace of Herrovaccio, king of Franquvia, has a square floor plan covering an area of 1600 square Franquvian miles. Four sentinels each guard one side of the palace, arranged as in the figure (the sentinels and the sides of the palace form four equilateral triangles). What is the area (in square miles) of the quadrilateral whose vertices are the four sentinels?


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,method_trigonometria,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo lato di triangolo equilatero per contenere tre monete circolari*

> Una ricorrenza importante
> In occasione del 1000mo anniversario dalla fondazione del regno di Franquvia, la zecca reale ha deciso
> di coniare tre monete, di raggi rispettivamente 20, 30 e 40mm. Le monete sono vendute in un elegante
> astuccio a forma di triangolo equilatero. Qual è la minima lunghezza, in millimetri, del lato di tale
> triangolo, in modo che sia possibile collocare le tre monete nell’astuccio senza che si sovrappongano?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** 0190
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum side length of an equilateral triangle to contain three circular coins*

> An important occasion
> On the occasion of the 1000th anniversary of the founding of the Kingdom of Franquvia, the Royal Mint has decided to mint three coins with diameters of 20, 30, and 40 mm, respectively. The coins are sold in an elegant case shaped like an equilateral triangle. What is the minimum length, in millimetres, of a side of this triangle such that the three coins can be placed in the case without overlapping?


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_trigonometria|Trigonometric techniques]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern,skill_lettura_attenta,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo biscotti con divisibilita per 3,5,7 con resti dati*

> Prodotti tipici
> Le dame Elissa, Fiammetta e Neifile hanno acquistato una confezione cadauna dei tipici biscotti di
> Franquvia. Madama Elissa distribuisce equamente i biscotti della sua confezione ai suoi 3 figli, madama Fiammetta ne mangia due e poi divide in parti uguali i rimanenti biscotti della sua confezione
> ai suoi 5 figli, infine madama Neifile ne mangia due e distribuisce equamente i suoi biscotti rimanenti
> ai suoi 7 figli. Quanti biscotti contiene, al minimo, una confezione?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0072
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum biscuits with divisibility by 3, 5, 7 and given remainders*

> Typical products
> Ladies Elissa, Fiammetta, and Neifile each bought one pack of the typical Franquvian biscuits. Lady Elissa distributes the biscuits in her pack equally among her 3 children; Lady Fiammetta eats two and then divides the remaining biscuits in her pack equally among her 5 children; finally, Lady Neifile eats two and distributes her remaining biscuits equally among her 7 children. What is the minimum number of biscuits a pack must contain?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_lettura_attenta|Careful reading of the text]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_probabilita,topic_aritmetica,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Probabilita che il MCD di due dadi sia 1*

> Il vizio del gioco
> Nelle bische dei quartieri più sordidi della capitale del regno di Franquvia, si usa scommettere ai
> dadi. Qual è la probabilità che lanciando due dadi si ottengano due numeri il cui massimo comun
> divisore sia 1?
> Espressa la probabilità come frazione m
> n irriducibile, si scriva nella risposta la somma m + n.
> Gara a Squadre 2004 – Fase Nazionale – Testi dei problemi – Pag. 1 di 4

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0059
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Probability that the GCD of two dice is 1*

> The Gambling Addiction
> In the gambling dens of the seediest neighborhoods of the capital of the Kingdom of Franquvia, people usually bet on dice. What is the probability that, when two dice are rolled, the two numbers obtained have a greatest common divisor of 1? Express the probability as an irreducible fraction m/n, and in your answer write the sum m + n.
> 2004 Team Competition – National Stage – Problem Statements – Page 1 of 4

**Topic:** [[topic_probabilita|Probability and statistics]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,topic_combinatoria,method_conteggio,method_casi_conteggio,skill_conteggio_sistematico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti numeri di tre cifre con somma cifre divisibile per 11*

> Il genetliaco della regina
> In occasione del genetliaco della regina, Il re Herrovaccio desidera compiere un atto di magnanimità.
> Poich´e nelle segrete del palazzo di Franquvia ogni cella è numerata con un numero di esattamente tre
> cifre, egli decreta che sia graziato ogni prigioniero rinchiuso in una cella il cui numero ha la somma
> delle cifre divisibili per 11. Quanti prigionieri al più saranno graziati?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0082
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*How many three-digit numbers have a digit sum divisible by 11?*

> The Queen's Birthday
> On the occasion of the Queen's birthday, King Herrovaccio wishes to perform an act of magnanimity. Since in the dungeons of the Palace of Franquvia every cell is numbered with an exactly three-digit number, he decrees that every prisoner confined in a cell whose number has a digit sum divisible by 11 shall be pardoned. At most, how many prisoners will be pardoned?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casi_conteggio|Counting by cases]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,topic_aritmetica,method_ricorsione,method_congruenze,skill_riconoscimento_pattern,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Eliminazione iterata dei pari da 9999 soldati, soldato di mezzo*

> Un volontario coatto
> Ai 9999 soldati della guardia reale di Franquvia è assegnato un numero identificativo, da 1 a 9999. Il
> comandante vuole scegliere un volontario e procede nel seguente modo: dispone i soldati, in ordine
> di numero, su un’unica linea, indi fa uscire dai ranghi tutti i soldati che occupano un posto pari.
> Una volta serrati i ranghi, ripete la stessa procedura, finch´e rimangono solo tre soldati. Di questi, il
> soldato di mezzo è il volontario. A quale numero corrisponde il volontario?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 4097
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Repeated elimination of the even-numbered ones from 9999 soldiers: the middle soldier*

> A forced volunteer
> Each of the 9999 soldiers of the Royal Guard of Franquvia is assigned an identification number from 1 to 9999. The commander wants to choose a volunteer and proceeds as follows: the commander arranges the soldiers in order of their numbers in a single line, then has all the soldiers in even positions step out of the ranks. Once the ranks have been closed up, the commander repeats the same procedure until only three soldiers remain. Of these, the middle soldier is the volunteer. What number does the volunteer correspond to?


**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_ricorsione|Recursion]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_funzionali,topic_aritmetica,method_congruenze,method_ricorsione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Primo termine della ricorrenza a=7a+1 divisibile per 30*

> Dinastie
> Per antica tradizione, tutti i re di Franquvia portano il nome di Herrovaccio e si distinguono tra loro
> mediante un numero. Il primo re portava il numero a1 = 1, e poi, via via, ad ogni re successivo è
> stato assegnato un numero, ottenuto dal precedente, secondo la regola
> an+1 = 7an + 1.
> Qual è stato il primo re della dinastia a portare un numero divisibile per 30?

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0012
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*First term of the sequence: a = 7a + 1, divisible by 30*

> Dynasty
> According to ancient tradition, all kings of Franquvia bear the name Herrovaccio and are distinguished from one another by a number. The first king had the number a1 = 1, and thereafter, in succession, each subsequent king was assigned a number derived from the previous one according to the rule an+1 = 7an + 1. Which was the first king of the dynasty to have a number divisible by 30?


**Topic:** [[topic_funzionali|Functional equations / sequences]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_ricorsione|Recursion]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_geometria_piana,topic_trigonometria,method_inclusione_esclusione,method_trigonometria,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area unione di 6 cerchi su lati di esagono regolare*

> Il giardino cadetto
> Il giardino del castello del principe cadetto di Franquvia è ottenuto dall’unione di 6 cerchi di raggio
> 10m, i cui diametri sono lati di un esagono regolare. Qual è l’area del giardino?

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]], [[method_trigonometria|Tecniche trigonometriche]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 1776
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Area of the union of 6 circles on the sides of a regular hexagon*

> The Cadet Garden
> The garden of the castle of the cadet prince of Franquvia is formed by combining 6 circles with a radius of 10 m, whose diameters are the sides of a regular hexagon. What is the area of the garden?


**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_trigonometria|Trigonometry]]
**Metodo:** [[method_inclusione_esclusione|Inclusion–exclusion]], [[method_trigonometria|Trigonometric techniques]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_aritmetica,topic_combinatoria,method_simmetria,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Piu piccolo numero di 3 cifre distinte pari alla media delle permutazioni*

> La camera delle torture
> Ogni cella delle segrete del palazzo è numerata con un numero di esattamente tre cifre. Il carnefice
> reale si accorge che la cella delle torture ha il più piccolo, tra i numeri di tre cifre tutte distinte, che
> sia pari alla media aritmetica dei sei numeri ottenibili permutandone le cifre. Qual è questo numero?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0370
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*The smallest three-digit number with distinct digits equal to the average of the permutations*

> The Chamber of Torture
> Each cell in the palace dungeons is numbered with a three-digit number exactly. The royal executioner realizes that the torture cell has the smallest, among all three-digit numbers with distinct digits, number that is equal to the arithmetic mean of the six numbers obtainable by permuting its digits. What is this number?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Valore di x2-y2+z2 dati due vincoli lineari*

> Giudizio salomonico
> Il re di Franquvia adotta metodi singolari per amministrare la giustizia. In un processo per bancarotta
> ha rivelato alle parti di avere in mente tre numeri reali x, y, z per cui
> x −7y + 8z = 4
> e
> 8x + 4y −z = 7.
> Si aggiudica la causa il primo che riesce a rivelare quanto vale x2 −y2 + z2. Mentre l’avvocato del
> debitore protesta, sostenendo che non ci sono abbastanza condizioni per rispondere, i creditori urlano
> un numero, vincendo la causa. Quale numero hanno urlato?

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0001
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Value of x2-y2+z2 given two linear constraints*

> Solomonic judgment
> The King of Franquvia employs peculiar methods to administer justice. In a bankruptcy proceeding, he revealed to the parties that he had in mind three real numbers, x, y, and z, such that x − 7y + 8z = 4 and 8x + 4y − z = 7. The first person to manage to reveal the value of x² − y² + z² wins the case. While the debtor's lawyer protests, arguing that there are not enough conditions to answer, the creditors shout out a number and win the case. What number did they shout?

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area comune di due trapezi mistici da circonferenze tangenti*

> Disputa mistica
> A corte è guerra aperta tra il chierico Didimo e l’incantatrice Dianora. Motivo del contendere è la
> realizzazione di un quadrilatero mistico. Didimo propone di costruirlo seguendo regole alchemiche:
> si considerano due circonferenze di raggi 4 e 16 tangenti esternamente, ed una retta tangente ad
> entrambe le circonferenze in due punti distinti. Il quadrilatero mistico dovrà essere il trapezio di
> vertici i due centri delle circonferenze e i due punti di tangenza con la retta.
> Dianora, invece, predilige la magia: considera le stesse circonferenze e la stessa retta, ma il quadrilatero mistico dovrà essere il trapezio di vertici i due centri delle circonferenze e i due punti di
> intersezione della retta con le perpendicolari, condotte dai due centri, alla congiungente i centri.
> Sperando di sedare l’alterco, il re propone che il quadrilatero mistico sia la parte comune ai due
> quadrilateri proposti da Didimo e Dianora. Qual è l’area di questa parte comune?
> Gara a Squadre 2004 – Fase Nazionale – Testi dei problemi – Pag. 2 di 4

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0154
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Common area of two mystical trapezoids formed by tangent circles*

> Mystical dispute
> At court, there is open war between the cleric Didimo and the enchantress Dianora. The subject of dispute is the construction of a mystical quadrilateral. Didimo proposes constructing it according to alchemical rules: two circles with radii 4 and 16 are considered, externally tangent to each other, along with a straight line tangent to both circles at two distinct points. The mystical quadrilateral is to be the trapezoid whose vertices are the two centers of the circles and the two points of tangency with the line. Dianora, on the other hand, prefers magic: she considers the same circles and the same line, but the mystical quadrilateral is to be the trapezoid whose vertices are the two centers of the circles and the two points of intersection of the line with the perpendiculars drawn from the two centers to the line joining the centers. Hoping to quell the dispute, the king proposes that the mystical quadrilateral be the common part of the two quadrilaterals proposed by Didimo and Dianora. What is the area of this common part?
> 2004 Team Competition – National Round – Problem Statements – Page 2 of 4

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,topic_algebra,method_fattorizzazione,method_casework,skill_manipolazione_algebrica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma interi n con (n-1)/(401-n) quadrato perfetto*

> Un noioso turno di guardia
> I 9999 soldati della guardia reale devono concordare a chi toccherà il prossimo turno di guardia a
> palazzo. Didimo, il chierico di corte, passando per caso, ascolta la loro conversazione e propone una

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** 1277
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Sum of integers n such that (n-1)/(401-n) is a perfect square*

> A boring guard shift
> The 9,999 soldiers of the Royal Guard must agree on who will get the next palace guard shift. Didymus, the court chaplain, passing by by chance, overhears their conversation and proposes a


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_casework|Case analysis]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_geometria_piana,method_coordinate,method_casework,skill_ragionamento_geometrico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero segmenti unitari che dividono triangolo in area 1/4*

> La piazza del mercato
> La piazza del mercato di Franquvia ha la forma di un triangolo le cui misure dei lati sono pari a 2, 5
> e 6 miglia franquviane. La gilda dei mercanti vuole dividere la piazza con un segmento i cui estremi
> siano su due lati del triangolo, in modo che il segmento abbia lunghezza 1 miglio e che la porzione più
> piccola abbia area pari a un quarto dell’area totale. Quanti di questi segmenti si possono tracciare?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]]
**Risposta:** 0002
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Number of unit segments that divide the triangle into area 1/4*

> The market square
> The market square of Franquvia is triangular, with side lengths of 2, 5, and 6 Franquvian miles. The merchants' guild wants to divide the square with a line segment whose endpoints lie on two sides of the triangle, such that the segment is 1 mile long and the smaller portion has an area equal to one quarter of the total area. How many such segments can be drawn?


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]], [[method_casework|Case analysis]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_aritmetica,method_congruenze,method_conteggio,method_casework,skill_conteggio_sistematico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Ultime 4 cifre somma interi divisibili per 30 con 30 divisori*

> Carovita
> Messer Guiglielmo Guardastagno, mercante franquviano, ha fissato i prezzi delle sue merci in modo
> che siano tutti numeri interi positivi che siano divisibili per 30 ed abbiano esattamente 30 divisori.
> Se S è la somma di tutti gli interi positivi di questo tipo, quali sono le ultime quattro cifre di S?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 6340
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Last 4 digits of the sum of integers divisible by 30 with 30 divisors*

> Carovita
> Messire Guiglielmo Guardastagno, a Frankvian merchant, has set the prices of his goods so that each price is a positive integer divisible by 30 and has exactly 30 divisors. If S is the sum of all such positive integers, what are the last four digits of S?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_conteggio|Combinatorial counting]], [[method_casework|Case analysis]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_aritmetica,method_casework,method_congruenze,skill_riconoscimento_pattern,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Piu grande numero non esprimibile con monete palindrome (Frobenius)*

> Numismatica franquviana
> La moneta nazionale franquviana è il Franqo. Non esistono però monete del valore di un Franqo: la
> moneta più piccola vale 11 Franqi, e tutte le monete hanno come valore un numero palindromo di
> Franqi. Messer Guiglielmo Guardastagno e la gilda dei mercanti si sono lamentati perch´e con questi
> tagli di monete non è possibile comporre esattamente una qualsivoglia quantità intera di Franqi (ad
> esempio, non si possono comporre 37 Franqi con le monete disponibili). Qual è il più grande numero
> che sicuramente non si può esprimere con le monete Franquviane?
> Un numero palindromo è un numero che resta invariato se si leggono le sue cifre (in base 10) da destra o da
> sinistra: ad esempio sono palindromi 11, 10001, 949.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0201
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Largest number not expressible with palindrome coins (Frobenius)*

> Francquian Numismatics
> The national currency of Franquvia is the Franqo. However, there are no coins worth one Franqo: the smallest coin is worth 11 Franqi, and all coins have a value that is a palindromic number of Franqi. Messer Guiglielmo Guardastagno and the merchants' guild have complained because, with these coin denominations, it is impossible to make up exactly any whole number of Franqi (for example, 37 Franqi cannot be made up with the available coins). What is the largest number that certainly cannot be expressed using Franquvian coins? A palindromic number is a number that remains unchanged when its digits (in base 10) are read from right to left or from left to right: for example, 11, 10001, and 949 are palindromes.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_aritmetica,topic_combinatoria,method_casi_conteggio,method_congruenze,skill_conteggio_sistematico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero soluzioni intere positive di 4x+12y+3z^2=2004*

> Un singolare processo
> Il re di Franquvia si distingue per la sua stravaganza. Ad un altro processo ha richiesto alle parti in
> causa di determinare il numero delle soluzioni intere positive dell’equazione
> 4x + 12y + 3z2 = 2004.
> Quante sono?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casi_conteggio|Conteggio per casi]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1342
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Number of positive integer solutions to 4x+12y+3z^2=2004*

> A peculiar trial
> The King of Franquvia is distinguished by his eccentricity. In another trial, he asked the parties involved to determine the number of positive integer solutions to the equation 4x + 12y + 3z² = 2004. How many are there?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_casi_conteggio|Counting by cases]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_combinatoria,method_ricorsione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di scrivere 2004 come somma di 1 (partizioni)*

> Incantesimi
> Il chierico Didimo, esperto di numerologia e manipolazioni magiche di simboli, ha scoperto un incantesimo. Per attivarlo deve scrivere il numero magico 2004 in tutti i modi possibili che usino solo
> il simbolo 1 e l’operazione di somma. Quanti sono questi modi possibili?
> Attenzione! Ai fini del conteggio, due somme che differiscono solo per l’ordine degli addendi, vanno contate
> una volta sola.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2118
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Ways of writing 2004 as a sum of 1s (partitions)*

> Spells
> The cleric Didimo, an expert in numerology and in the magical manipulation of symbols, has discovered a spell. To activate it, he must write the magic number 2004 in all possible ways that use only the symbol 1 and the addition operation. How many such possible ways are there? Attention! For the purpose of counting, two sums that differ only in the order of the addends should be counted only once.

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_ricorsione|Recursion]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_conteggio,skill_riconoscimento_pattern,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti coefficienti binomiali C(37,k) divisibili per 5*

> Il lotto di Franquvia
> Per rimpinguare le casse del regno, il Gran Ciambellano ha deciso di lanciare un nuovo tipo di lotto.
> Ogni settimana sono estratti due numeri distinti. Se N è il più grande e n il più piccolo, si deve
> indovinare quanti tra i numeri
> N
> 0
> 
> N
> 1
> 
> . . .
> N
> k
> 
> . . .
> N
> N
> 
> Gara a Squadre 2004 – Fase Nazionale – Testi dei problemi – Pag. 3 di 4
> 
> sono divisibili per n.
> Se in questa settimana sono stati estratti i numeri 5 e 37, su che numero si doveva scommettere per
> vincere il lotto di Franquvia?
> Si ricorda che il coefficiente binomiale è l’intero positivo dato da
> n
> k
> 
> =
> n!
> k!(n−k)!.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0020
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*How many binomial coefficients C(37,k) are divisible by 5?*

> The Franquvia Lot
> To replenish the kingdom's coffers, the Lord Chamberlain has decided to launch a new type of lottery. Each week, two distinct numbers are drawn. If N is the largest and n is the smallest, one must guess how many of the numbers $\binom{N}{0}$ $\binom{N}{1}$ ... $\binom{N}{k}$ ... $\binom{N}{N}$
> 2004 Team Competition – National Stage – Problem Statements – Page 3 of 4
>
> They are divisible by n. If the numbers 5 and 37 were drawn this week, which number should have been bet on to win the Franquvia lottery? Recall that the binomial coefficient is the positive integer given by $\binom{n}{k}$ = n! k!(n−k)!.


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q19" data-atom="q19" data-title="Quesito 19" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Differenza tra modi pari e dispari di illuminare 6 finestre*

> La sala del trono
> La sala del trono di Franquvia è illuminata da 6 grandi finestre. Le finestre possono essere completamente oscurate dall’interno con una tenda, oppure dall’esterno con un pannello di legno. La
> damigella di compagnia della regina ha contato tutti i modi differenti di aprire o chiudere, indipendentemente, le tende e i pannelli, in modo che la luce entri da un numero pari di finestre. Lo scudiero
> del re invece ha conteggiato tutti i modi differenti di aprire o chiudere le tende e i pannelli, per i
> quali le finestre che illuminano la sala sono in numero dispari. Qual è la differenza tra questi due
> numeri?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0064
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Difference between even and odd ways of illuminating 6 windows*

> The Throne Room
> The throne room of Franquvia is illuminated by 6 large windows. The windows can be completely darkened from the inside with a curtain, or from the outside with a wooden panel. The queen's lady-in-waiting has counted all the different ways of opening or closing the curtains and panels independently, so that light comes in through an even number of windows. The king's squire, on the other hand, has counted all the different ways of opening or closing the curtains and panels in which the number of windows illuminating the room is odd. What is the difference between these two numbers?


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q20" data-atom="q20" data-title="Quesito 20" data-tags="topic_combinatoria,method_estremalita,method_grafi,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero collegamenti tra citta su isole diverse*

> Imperialismo
> Il principe di Franquvia decide di ingrandire i suoi domini fondando 25 città su un arcipelago disabitato composto da 13 isole in modo che su ogni isola vi sia almeno una città. Vuole però che tra
> ogni coppia di città su isole differenti vi sia un collegamento tramite vascelli. Determinare il minimo
> numero possibile di tali collegamenti.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0222
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum number of connections between cities on different islands*

> Imperialism
> The Prince of Franquvia decides to expand his domains by founding 25 cities on an uninhabited archipelago consisting of 13 islands, so that each island has at least one city. However, he wants there to be a connection by ship between every pair of cities on different islands. Determine the minimum possible number of such connections.

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_grafi|Graph theory]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q21" data-atom="q21" data-title="Quesito 21" data-tags="topic_algebra,topic_funzionali,method_backward,skill_manipolazione_algebrica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Vino di Chiara dopo travasi ciclici tra cinque amici*

> In locanda
> Agilulfo, Bernabò, Chiara, Dioneo ed Elissa sono soliti incontrarsi alla locanda Alla Brocca. Una
> sera si dividono un orcio di vino. Dopo aver riempito i loro bicchieri, decidono di ri-dividere il vino.
> Agilulfo divide in parti uguali l’intero contenuto del suo bicchiere tra gli altri quattro amici, lo stesso
> fa poi Bernabò e così via. Dopo che, alla fine, anche Elissa ha diviso in parti uguali l’intero contenuto
> del suo bicchiere nei bicchieri degli altri quattro giovani, i cinque si accorgono di avere nei bicchieri
> esattamente le stesse quantità di vino che avevano all’inizio. Sapendo che l’orcio conteneva 750ml di
> vino, quanto vino aveva Chiara nel bicchiere?

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0150
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Chiara's wine, after cyclical transfers among five friends*

> In an inn
> Agilulfo, Bernabò, Chiara, Dioneo, and Elissa usually meet at the Alla Brocca inn. One evening, they share a jug of wine. After filling their glasses, they decide to divide the wine again. Agilulfo divides the entire contents of his glass equally among the other four friends; Bernabò then does the same, and so on. After Elissa, too, has finally divided the entire contents of her glass equally among the glasses of the other four young people, the five of them realize that their glasses contain exactly the same amounts of wine as they did at the beginning. Knowing that the jug held 750 ml of wine, how much wine did Chiara have in her glass?


**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_backward|Working backwards]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q22" data-atom="q22" data-title="Quesito 22" data-tags="topic_combinatoria,method_ricorsione,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Colorazioni di 8 gemme in cerchio con 4 tipi, adiacenti diverse*

> La corona
> La corona per il principe di Franquvia è di foggia circolare, con un diadema frontale. Ci sono poi 8
> pietre preziose incastonate a intervalli regolari attorno alla corona. Il mastro orefice, per decorare
> la corona, ha a disposizione pietre di quattro differenti tipi: diamanti, rubini, ametiste e smeraldi.
> In quanti differenti modi egli può decorare la corona, in modo che due qualsiasi pietre incastonate
> consecutivamente siano di tipi diversi?
> Si intendono consecutive anche le pietre separate dal diadema.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 6564
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Colorings of 8 gems in a circle with 4 types, adjacent ones different*

> The crown
> The crown for the Prince of Franquvia is circular in shape, with a frontal diadem. There are then 8 precious stones set at regular intervals around the crown. To decorate the crown, the master goldsmith has at his disposal stones of four different types: diamonds, rubies, amethysts, and emeralds. In how many different ways can he decorate the crown so that any two consecutively set stones are of different types? Stones separated by the diadem are also considered consecutive.


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_ricorsione|Recursion]], [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q23" data-atom="q23" data-title="Quesito 23" data-tags="topic_logica,topic_combinatoria,method_invarianti,skill_riconoscimento_pattern,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Dopo quale mossa Chiara avra piu Franqi (processo iterato)*

> Di nuovo in locanda
> Agilulfo, Bernabò, Chiara, Dioneo ed Elissa hanno un loro passatempo. Ciascuno porta in locanda
> un sacco con dei Franqi: li contano e, se ne hanno tutti in quantità differenti, allora quello che ne
> ha più di tutti, d´a uno dei suoi Franqi a ciascuno degli altri. Non appena più di una persona ha lo
> stesso numero di Franqi il gioco finisce.
> All’inizio, Agilulfo ha 101 Franqi, Bernabò 70, Chiara 17, Dioneo ne ha 104 ed Elissa 113. Dopo
> quale mossa sarà Chiara ad avere più Franqi di tutti?

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0066
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*After which move will Chiara have more Franqi (iterated process)?*

> Back at the inn
> Agilulfo, Bernabò, Chiara, Dioneo, and Elissa have their own pastime. Each of them brings a bag containing some Franqi to the inn; they count them, and if everyone has a different number, then the one who has the most gives one of his Franqi to each of the others. As soon as more than one person has the same number of Franqi, the game ends. At the start, Agilulfo has 101 Franqi, Bernabò has 70, Chiara has 17, Dioneo has 104, and Elissa has 113. After which move will Chiara have more Franqi than anyone else?


**Topic:** [[topic_logica|Logic, games and strategies]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_invarianti|Invariants / monovariants]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q24" data-atom="q24" data-title="Quesito 24" data-tags="topic_aritmetica,topic_combinatoria,method_fattorizzazione,method_congruenze,skill_manipolazione_algebrica,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo prodotto di fattoriali da eliminare per rendere K quadrato*

> Voragine finanziaria
> La colonizzazione dell’arcipelago è costata uno sproposito. Il deficit K delle casse reali è pari al
> prodotto dei 20 fattori seguenti:
> K = 1! · 2! · 3! · · · 19! · 20!.
> Qual è il minimo valore del prodotto dei numeri, scelti tra 1, 2, . . ., 20, tali che, eliminando il
> corrispondente fattoriale da K, si renda il numero K un quadrato perfetto?
> Gara a Squadre 2004 – Fase Nazionale – Testi dei problemi – Pag. 4 di 4

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0010
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum product of factorials to be eliminated to make K square*

> Financial abyss
> The colonization of the archipelago cost an outrageous amount. The deficit K of the royal coffers equals the product of the following 20 factors: K = 1! · 2! · 3! · · · 19! · 20!. What is the minimum value of the product of numbers chosen from 1, 2, . . ., 20 such that, by removing the corresponding factorial from K, K becomes a perfect square?
> 2004 Team Competition – National Stage – Problem Statements – Page 4 of 4


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
