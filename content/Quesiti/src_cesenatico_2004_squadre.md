---
title: Gara a Squadre Cesenatico 2004 - Finale Nazionale
tipo: gara
competition: Gara a Squadre Cesenatico 2004 - Finale Nazionale
family: archimede
year: '2004'
level: squadre
---
<div class="atom-reader" data-gara="Quesiti/src_cesenatico_2004_squadre"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

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
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 5971
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


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

> The palace of Herrovaccio, king of Franquvia, has a square plan covering an area of 1600 square miles. Four sentinels each guard one side of the palace, arranged as in the figure (the sentinels form four equilateral triangles with the sides of the palace). What is the area (in square miles) of the quadrilateral topped by the four sentinels?

**Answer:** 5971
[[src_cesenatico_2004_squadre__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,method_trigonometria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo lato di triangolo equilatero per contenere tre monete circolari*

> Una ricorrenza importante
> In occasione del 1000mo anniversario dalla fondazione del regno di Franquvia, la zecca reale ha deciso
> di coniare tre monete, di raggi rispettivamente 20, 30 e 40mm. Le monete sono vendute in un elegante
> astuccio a forma di triangolo equilatero. Qual è la minima lunghezza, in millimetri, del lato di tale
> triangolo, in modo che sia possibile collocare le tre monete nell’astuccio senza che si sovrappongano?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0190
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum side of an equilateral triangle to contain three circular coins*

> On the occasion of the 1000th anniversary of the founding of the kingdom of Franquie, the royal mint decided to coin three coins, of 20, 30 and 40 mm radius respectively. The coins are sold in an elegant triangle-shaped trick. What is the minimum length, in millimetres, of the side of this triangle, so that it is possible to place the three coins in the stucco without overlapping them?

**Answer:** 0190
[[src_cesenatico_2004_squadre__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo biscotti con divisibilita per 3,5,7 con resti dati*

> Prodotti tipici
> Le dame Elissa, Fiammetta e Neifile hanno acquistato una confezione cadauna dei tipici biscotti di
> Franquvia. Madama Elissa distribuisce equamente i biscotti della sua confezione ai suoi 3 figli, madama Fiammetta ne mangia due e poi divide in parti uguali i rimanenti biscotti della sua confezione
> ai suoi 5 figli, infine madama Neifile ne mangia due e distribuisce equamente i suoi biscotti rimanenti
> ai suoi 7 figli. Quanti biscotti contiene, al minimo, una confezione?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0072
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum biscuits with divisible by 3,5,7 with data residues*

> Ladies Elissa, Fiammetta and Neifile have bought a box of typical Franquvian cookies. Madame Elissa equally distributes the cookies of her packaging to her 3 children, Madame Fiammetta eats two and then divides in equal parts the remaining cookies of her packaging to her 5 children, finally Madame Neifile eats two and equally distributes her remaining cookies to her 7 children. How many cookies does a package contain, at least?

**Answer:** 0072
[[src_cesenatico_2004_squadre__Q03]]



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


<span class="qlang-split" data-lang="en"></span>


*Probability that the MCD of two dice is 1*

> The vice of gambling in the most sordid neighborhoods of the capital of the kingdom of Franquie, is used to bet on dice. What's the probability that by throwing two dice you get two numbers whose maximum common divisor is 1? Express the probability as an irreducible fraction m n, write the sum m + n in the answer. Team competition 2004  National stage  Problem texts  Pag. 1 di 4

**Answer:** 0059
[[src_cesenatico_2004_squadre__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti numeri di tre cifre con somma cifre divisibile per 11*

> Il genetliaco della regina
> In occasione del genetliaco della regina, Il re Herrovaccio desidera compiere un atto di magnanimità.
> Poich´e nelle segrete del palazzo di Franquvia ogni cella è numerata con un numero di esattamente tre
> cifre, egli decreta che sia graziato ogni prigioniero rinchiuso in una cella il cui numero ha la somma
> delle cifre divisibili per 11. Quanti prigionieri al più saranno graziati?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0082
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*Three-digit numbers with a digit sum divisible by 11*

> On the occasion of the Queen's funeral, King Herovaccio wishes to perform an act of magnanimity. Since in the secrets of the palace of Franquie each cell is numbered with a number of exactly three digits, he decrees that every prisoner locked in a cell whose number has the sum of the digits divisible by 11 be pardoned. How many prisoners will be pardoned at most?

**Answer:** 0082
[[src_cesenatico_2004_squadre__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,topic_aritmetica,method_ricorsione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Eliminazione iterata dei pari da 9999 soldati, soldato di mezzo*

> Un volontario coatto
> Ai 9999 soldati della guardia reale di Franquvia è assegnato un numero identificativo, da 1 a 9999. Il
> comandante vuole scegliere un volontario e procede nel seguente modo: dispone i soldati, in ordine
> di numero, su un’unica linea, indi fa uscire dai ranghi tutti i soldati che occupano un posto pari.
> Una volta serrati i ranghi, ripete la stessa procedura, finch´e rimangono solo tre soldati. Di questi, il
> soldato di mezzo è il volontario. A quale numero corrisponde il volontario?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 4097
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


Iterate elimination of peers by 9999 soldiers, middle soldier

> The 9999 soldiers of the Royal Guards of Franquie are assigned an identification number, from 1 to 9999. The commander wants to select a volunteer and proceeds as follows: he places the soldiers, in order of number, on a single line, and brings out of the ranks all the soldiers who occupy an equal place. Once the ranks are closed, repeat the same procedure until there are only three soldiers left. Of these, the middle soldier is the volunteer. Which number does the volunteer match?

**Answer:** 4097
[[src_cesenatico_2004_squadre__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_funzionali,topic_aritmetica,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Primo termine della ricorrenza a=7a+1 divisibile per 30*

> Dinastie
> Per antica tradizione, tutti i re di Franquvia portano il nome di Herrovaccio e si distinguono tra loro
> mediante un numero. Il primo re portava il numero a1 = 1, e poi, via via, ad ogni re successivo è
> stato assegnato un numero, ottenuto dal precedente, secondo la regola
> an+1 = 7an + 1.
> Qual è stato il primo re della dinastia a portare un numero divisibile per 30?

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0012
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*First term of recurrence a=7a+1 divisible by 30*

> Dynasties According to ancient tradition, all kings of Franquie bear the name of Herrovaccio and are distinguished by a number. The first king carried the number a1 = 1, and then, by way, to each subsequent king was assigned a number, obtained from the previous one, according to the rule an+1 = 7an + 1. Who was the first king of the dynasty to bring a number divisible by 30?

**Answer:** 0012
[[src_cesenatico_2004_squadre__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_geometria_piana,method_inclusione_esclusione,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area unione di 6 cerchi su lati di esagono regolare*

> Il giardino cadetto
> Il giardino del castello del principe cadetto di Franquvia è ottenuto dall’unione di 6 cerchi di raggio
> 10m, i cui diametri sono lati di un esagono regolare. Qual è l’area del giardino?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 1776
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*Area of union of 6 circles on the sides of the regular hexagon*

> The garden of the castle of the cadet prince of Franquie is obtained from the union of 6 circles of a radius of 10 m, the diameters of which are sides of a regular hexagon. What's the area of the garden?

**Answer:** 1776
[[src_cesenatico_2004_squadre__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_aritmetica,method_simmetria,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Piu piccolo numero di 3 cifre distinte pari alla media delle permutazioni*

> La camera delle torture
> Ogni cella delle segrete del palazzo è numerata con un numero di esattamente tre cifre. Il carnefice
> reale si accorge che la cella delle torture ha il più piccolo, tra i numeri di tre cifre tutte distinte, che
> sia pari alla media aritmetica dei sei numeri ottenibili permutandone le cifre. Qual è questo numero?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0370
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*Little number of 3 distinct digits equal to the mean of permutations*

> The torture chamber Each secret cell of the palace is numbered with a number of exactly three digits. The royal carpenter notices that the torture cell has the smallest of the three-digit numbers all distinct, which is equal to the arithmetic mean of the six numbers obtained by exchanging their numbers. What's this number?

**Answer:** 0370
[[src_cesenatico_2004_squadre__Q09]]



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


<span class="qlang-split" data-lang="en"></span>


*Value of x2-y2+z2 given two linear constraints*

> Judgment Solomon The king of Franconia adopts unique methods of administering justice. In a bankruptcy proceedings he revealed to the parties that he had in mind three real numbers x, y, z for which x −7y + 8z = 4 and 8x + 4y −z = 7. The first person to reveal the value of x2 −y2 + z2 is awarded the cause. While the debtor's lawyer protested that there were not enough conditions to answer, the creditors shouted a number, winning the case. What number did they yell at?

**Answer:** 0001
[[src_cesenatico_2004_squadre__Q10]]



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


<span class="qlang-split" data-lang="en"></span>


*Common area of two tangent-circumference mixed trapezoids*

> A court is open war between the clergyman Didymus and the enchantress Dianora. The reason for the dispute is the realization of a mystical quadrilateral. Didimo proposes to construct it according to alchemical rules: consider two radii 4 and 16 tangent circumferences externally, and a straight tangent to both circles at two distinct points. The mystic quadrilateral shall be the trapezoid of vertices the two centers of the circumferences and the two points of tangency with the straight. Dianora, on the other hand, prefers magic: she considers the same circumferences and the same straight, but the mystical quadrilateral must be the trapezoid of vertices the two centers of the circumferences and the two points of intersection of the straight with the perpendiculars, led by the two centers, to the connecting centers. Hoping to appease the altercation, the king proposes that the mystical quadrilateral be the common part of the two quadrilaterals proposed by Didymus and Dianora. What is the area of this common part? Team competition 2004  National stage  Problem texts  Pag. 2 di 4

**Answer:** 0154
[[src_cesenatico_2004_squadre__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma interi n con (n-1)/(401-n) quadrato perfetto*

> Un noioso turno di guardia
> I 9999 soldati della guardia reale devono concordare a chi toccherà il prossimo turno di guardia a
> palazzo. Didimo, il chierico di corte, passando per caso, ascolta la loro conversazione e propone una

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 1277
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*Interest sum n with (n-1)/(401-n) perfect square*

> The 9999 soldiers of the Royal Guard must agree on who will play the next watch at the palace. Didimo, the clergyman of the court, passing by, hears their conversation and proposes

**Answer:** 1277
[[src_cesenatico_2004_squadre__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero segmenti unitari che dividono triangolo in area 1/4*

> La piazza del mercato
> La piazza del mercato di Franquvia ha la forma di un triangolo le cui misure dei lati sono pari a 2, 5
> e 6 miglia franquviane. La gilda dei mercanti vuole dividere la piazza con un segmento i cui estremi
> siano su due lati del triangolo, in modo che il segmento abbia lunghezza 1 miglio e che la porzione più
> piccola abbia area pari a un quarto dell’area totale. Quanti di questi segmenti si possono tracciare?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0002
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*Number of unit segments dividing a triangle by area 1/4*

> Market Square The market square of Franquie is in the shape of a triangle with sides measuring 2, 5 and 6 Franquie miles. The merchant guild wants to divide the square by a segment whose ends are on two sides of the triangle, so that the segment is 1 mile long and the smallest portion has an area equal to a quarter of the total area. How many of these segments can be traced?

**Answer:** 0002
[[src_cesenatico_2004_squadre__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_aritmetica,method_congruenze,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Ultime 4 cifre somma interi divisibili per 30 con 30 divisori*

> Carovita
> Messer Guiglielmo Guardastagno, mercante franquviano, ha fissato i prezzi delle sue merci in modo
> che siano tutti numeri interi positivi che siano divisibili per 30 ed abbiano esattamente 30 divisori.
> Se S è la somma di tutti gli interi positivi di questo tipo, quali sono le ultime quattro cifre di S?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 6340
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*Last 4 digits whole sum divisible by 30 by 30 divisors*

> Carovita Messer Guiglielmo Guardastagno, a Frankish merchant, set the prices of his goods so that they are all positive integers that are divisible by 30 and have exactly 30 divisors. If S is the sum of all positive integers of this kind, what are the last four digits of S?

**Answer:** 6340
[[src_cesenatico_2004_squadre__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_aritmetica,method_casework,skill_riconoscimento_pattern"></span>

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
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0201
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*Most large number not expressed in palindrome coins (Frobenius) *

> French numismatic The national currency of France is the franc. However, there are no coins worth one franc: the smallest coin is 11 francs, and all coins have a palindrome number of francs as their value. Messer Guiglielmo Guardastagno and the merchant guild complained that with these coin cuts it is not possible to compose exactly any whole quantity of Franqi (for example, 37 Franqi cannot be composed with the available coins). What is the largest number that can certainly not be expressed in Franquvian coins? A palindrome number is a number that remains unchanged if its digits (based 10) are read from right or left: for example, palindromes 11, 10001, 949.

**Answer:** 0201
[[src_cesenatico_2004_squadre__Q15]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_aritmetica,topic_combinatoria,method_casi_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero soluzioni intere positive di 4x+12y+3z^2=2004*

> Un singolare processo
> Il re di Franquvia si distingue per la sua stravaganza. Ad un altro processo ha richiesto alle parti in
> causa di determinare il numero delle soluzioni intere positive dell’equazione
> 4x + 12y + 3z2 = 2004.
> Quante sono?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1342
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*Number of positive whole solutions of 4x+12y+3z^2=2004*

> A singular trial The King of Franquie is distinguished by his extravagance. In another case, it asked the parties concerned to determine the number of positive integer solutions of the equation 4x + 12y + 3z2 = 2004. How many are there?

**Answer:** 1342
[[src_cesenatico_2004_squadre__Q16]]



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


<span class="qlang-split" data-lang="en"></span>


*How to write 2004 as the sum of 1 (partitions) *

> The clergyman Didymus, an expert in numerology and magical manipulation of symbols, discovered a spell. To activate it, you must write the magic number 2004 in all possible ways using only the symbol 1 and the sum operation. How many of these ways are possible? Watch your step! For the purpose of counting, two sums which differ only in order of additions shall be counted only once.

**Answer:** 2118
[[src_cesenatico_2004_squadre__Q17]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,skill_riconoscimento_pattern"></span>

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
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0020
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*How many binomial coefficients C(37,k) divided by 5*

> The lot of Franquvia To fill the coffers of the kingdom, the Grand Chamberlain decided to launch a new type of lot. Each week two separate issues are drawn. If N is the largest and n the smallest, you have to guess how many of the numbers N 0 N 1 are. . . N k  . . . N N Team competition 2004  National stage  Problem texts  Pag. 3 di 4
> 
> are divisible by n. If the numbers 5 and 37 were extracted this week, what number did you have to bet on to win the Franquvia lottery? Remember that the binomial coefficient is the positive integer given by n k = n! k!(n−k)!.

**Answer:** 0020
[[src_cesenatico_2004_squadre__Q18]]



<span class="atom-split" id="q19" data-atom="q19" data-title="Quesito 19" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

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
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0064
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*Difference between equal and odd ways of illuminating 6 windows*

> The throne room The throne room of Franquie is illuminated by 6 large windows. The windows can be completely darkened from the inside with a tent, or from the outside with a wooden panel. The Queen's maid of honor counted all the different ways of opening or closing, regardless, curtains and panels, so that light would enter through an equal number of windows. The king's shield, on the other hand, counted all the different ways of opening or closing the curtains and panels, for which the windows illuminating the hall are in odd number. What's the difference between these two numbers?

**Answer:** 0064
[[src_cesenatico_2004_squadre__Q19]]



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


<span class="qlang-split" data-lang="en"></span>


*Minimum number of links between cities on different islands*

> Imperialism The prince of Franquie decides to enlarge his dominions by founding 25 cities on an uninhabited archipelago of 13 islands so that on each island there is at least one city. However, he wants every pair of cities on different islands to be connected by vessels. Determine the minimum number of such connections.

**Answer:** 0222
[[src_cesenatico_2004_squadre__Q20]]



<span class="atom-split" id="q21" data-atom="q21" data-title="Quesito 21" data-tags="topic_algebra,topic_funzionali,skill_manipolazione_algebrica"></span>

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
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0150
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*Clara wine after cyclical bridges between five friends*

> At the inn Agilulfo, Barnabas, Clara, Dioneo and Elisa used to meet at the Inn Alla Brocca. One night they share a vineyard. After filling their glasses, they decide to redistribute the wine. Agylulph divides the entire contents of his glass into equal parts among the other four friends, so does Barnabas and so on. After Elissa finally divided the entire contents of her glass into equal parts in the glasses of the other four young men, the five find that they have exactly the same amount of wine in the glasses as they had at the beginning. Knowing the barley contained 750ml of wine, how much wine did Chiara have in the glass?

**Answer:** 0150
[[src_cesenatico_2004_squadre__Q21]]



<span class="atom-split" id="q22" data-atom="q22" data-title="Quesito 22" data-tags="topic_combinatoria,method_ricorsione,skill_conteggio_sistematico"></span>

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
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 6564
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*Colorations of 8 gems in a circle with 4 types, adjacent to each other*

> The crown The crown for the prince of Franquie is of circular leaf, with a frontal diadem. There are also eight precious stones arranged at regular intervals around the crown. To decorate the crown, the goldsmith has stones of four different types: diamonds, rubies, amethyst and emeralds. How many different ways can he decorate the crown, so that two any stones framed consecutively are of different types? It also means the stones separated by the diadem.

**Answer:** 6564
[[src_cesenatico_2004_squadre__Q22]]



<span class="atom-split" id="q23" data-atom="q23" data-title="Quesito 23" data-tags="topic_logica,topic_combinatoria,skill_riconoscimento_pattern"></span>

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
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0066
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


After which move Chiara will have more Franqi (iterized process)

> Again at the inn, Agylus, Barnabas, Clare, Dionysius and Elisabeth have their own hobby. Each one brings to the inn a bag of Frankies: they count them and, if they all have them in different quantities, then the one who has the most of them all, from one of his Frankies to each of the others. As soon as more than one person has the same number of Franqi, the game is over. At the beginning, Agilulfo has 101 Franqi, Bernabéu 70, Clara 17, Dioneo has 104 and Elissa 113. After what move will Chiara have more Frankies than anyone?

**Answer:** 0066
[[src_cesenatico_2004_squadre__Q23]]



<span class="atom-split" id="q24" data-atom="q24" data-title="Quesito 24" data-tags="topic_aritmetica,topic_combinatoria,method_fattorizzazione,skill_manipolazione_algebrica"></span>

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
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0010
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1_LEGKvPB34N72I_xMIFjTTyBY9JWper8/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum product of factors to be removed to make K square*

> The colonisation of the archipelago has cost an unprecedented amount. The real cash deficit K is the product of the following 20 factors: K = 1! · 2! · 3! · · · 19! · 20!. What is the minimum value of the product of the numbers, chosen from 1, 2, . . . , 20, such that, by eliminating the factorial correspondence from K, the number K becomes a perfect square? Team competition 2004  National stage  Problem texts  Pag. 4 di 4

**Answer:** 0010
[[src_cesenatico_2004_squadre__Q24]]
