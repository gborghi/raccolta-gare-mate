---
title: Kangourou Coppa Squadre Ecolier 2015 Finale
tipo: gara
competition: Kangourou Coppa Squadre Ecolier 2015 Finale
family: kangourou
year: '2015'
level: squadre
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2015_squadre_ecolier_f"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Costo del quotidiano (con inserto totale 1.70)*

> Il giornale con l'inserto       
>         Un quotidiano con l'inserto costa 1 euro e 70 centesimi. Quotidiano e inserto possono essere 
> acquistati separatamente e il quotidiano costa 70 centesimi più dell'inserto. Quanti centesimi costa il 
> quotidiano?

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 120
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


*Today's cost (with total input of 1.70) *

> The newspaper with the insert A newspaper with the insert costs 1 euro 70 cents. Daily and insert can be purchased separately and the daily costs 70 cents more than the insert. How many cents does a daily cost?

**Answer:** 120
[[src_kangourou_2015_squadre_ecolier_f__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Quante monete da 10 centesimi (20 monete, 5 euro)*

> Le monete di Isabella             
>         Isabella ha 20 monete nel suo borsellino,  per un valore totale di 5 euro. Alcune monete sono 
> da 10 centesimi, altre da 20 centesimi, altre da 50 centesimi. Le monete da 50 centesimi sono più di 
> quelle da 10 centesimi. Quante sono quelle da 10 centesimi?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


*How many 10-cent coins (20 coins, 5 euro) *

> Isabella Isabella's coins have 20 coins in her purse, for a total value of 5 euros. Some coins are 10 cents, others 20 cents, others 50 cents. Fifty-cent coins are more than ten-cent coins. How much are those 10 cents?

**Answer:** 2
[[src_kangourou_2015_squadre_ecolier_f__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Ultime quattro cifre dopo aver scritto 1788 cifre*

> Uno dopo l'altro     
>         Alberto scrive di seguito i numeri interi, partendo da 1, in questo modo:                                    
> 1 2 3 4 5 6 7 8 9 10 11 12... . Quando ha scritto 1788 cifre si stanca e smette. Quali sono le ultime 
> quattro cifre che ha scritto?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 1632
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


*Last four digits after writing 1788 digits*

> One by one Alberto writes down the whole numbers starting from 1, this way: 1 2 3 4 5 6 7 8 9 10 11 12... . When you write 1788 digits, you get tired and stop. What are the last four digits you wrote?

**Answer:** 1632
[[src_kangourou_2015_squadre_ecolier_f__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_logica,topic_combinatoria,method_grafi,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Percorso piu lungo nei 9 vialetti del parco*

![[src_kangourou_2015_squadre_ecolier_f__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \coordinate (B) at (1, 1.732);
  \coordinate (BL) at (0, 0);
  \coordinate (A) at (2, 0);
  \coordinate (M1) at (0.5, 0.866);
  \coordinate (M2) at (1.5, 0.866);
  \coordinate (M3) at (1, 0);
  \draw (B) -- (BL);
  \draw (B) -- (A);
  \draw (BL) -- (A);
  \draw (M1) -- (M2);
  \draw (M1) -- (M3);
  \draw (M2) -- (M3);
  \node[above] at (B) {$B$};
  \node[right] at (A) {$A$};
\end{tikzpicture}
\end{document}
```

> %el parco            
>         In figura vedete lo schema dei 9 vialetti di un parco ognuno dei quali è lungo 
> 100 metri. Cesare vuole camminare dal punto A al punto B senza percorrere due 
> volte alcun vialetto,  passando anche più di una volta per qualcuno dei punti dove 
> due o più vialetti si incontrano. Quanti metri è lungo il percorso più lungo che può 
> fare?

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 700
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


The longest route in the nine park alleys

![[src_kangourou_2015_squadre_ecolier_f__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \coordinate (B) at (1, 1.732);
  \coordinate (BL) at (0, 0);
  \coordinate (A) at (2, 0);
  \coordinate (M1) at (0.5, 0.866);
  \coordinate (M2) at (1.5, 0.866);
  \coordinate (M3) at (1, 0);
  \draw (B) -- (BL);
  \draw (B) -- (A);
  \draw (BL) -- (A);
  \draw (M1) -- (M2);
  \draw (M1) -- (M3);
  \draw (M2) -- (M3);
  \node[above] at (B) {$B$};
  \node[right] at (A) {$A$};
\end{tikzpicture}
\end{document}
```

> In the figure, you can see the layout of nine park avenues, each 100 meters long. Caesar wants to walk from point A to point B without going through any avenue twice, even passing more than once by any of the points where two or more avenues meet. How many meters is the longest path you can take?

**Answer:** 700
[[src_kangourou_2015_squadre_ecolier_f__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Quante case sullo stesso lato della mia*

> La mia via        
>         Nella via in cui abito le case sono numerate, partendo da un'estremità della via, su un lato con 
> numeri interi dispari consecutivi iniziando da 1, sull'altro con numeri interi pari consecutivi 
> iniziando da 2. La mia casa ha il numero 137. Se la numerazione fosse partita dall'altra estremità 
> della via, la mia casa avrebbe il numero 85. Quante sono le case sullo stesso lato della mia, 
> compresa la mia?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 111
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


*How many houses on the same side of mine *

> My way In the street where I live, the houses are numbered, starting at one end of the street, on one side with consecutive odd integers starting at 1, on the other side with consecutive even integers starting at 2. My house is number 137. If the numbering had started at the other end of the street, my house would have the number 85. How many houses are on the same side as mine, including mine?

**Answer:** 111
[[src_kangourou_2015_squadre_ecolier_f__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,method_conteggio,method_inclusione_esclusione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Rettangoli senza quadrato nero nella griglia 6x5*

![[src_kangourou_2015_squadre_ecolier_f__prob6.png]]

> I rettangoli   
>         Nella figura vedi una griglia con 6 righe e 5 colonne, formata accostando 30 
> quadrati tutti della stessa dimensione. Cinque di questi quadrati sono anneriti. Quanti 
> rettangoli che non contengano alcun quadrato nero si possono individuare nella 
> griglia? Attenzione: fra i rettangoli vanno considerati anche i quadrati, qualunque sia 
> la loro dimensione!

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 99
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


*Rectangles without a black square in the 6x5 grid*

![[src_kangourou_2015_squadre_ecolier_f__prob6.png]]

> The rectangles In the figure you see a grid with 6 rows and 5 columns, formed by approaching 30 squares all of the same size. Five of these squares are blackened. How many rectangles that do not contain any black squares can be found in the grid? Attention: among rectangles should also be considered squares, regardless of their size!

**Answer:** 99
[[src_kangourou_2015_squadre_ecolier_f__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza strada salita e discesa raddoppiando velocita*

> Il ciclista                   
>         Un ciclista sale una strada di montagna mantenendo costantemente la velocità di 21 chilometri 
> all'ora. Quando ridiscende la stessa strada raddoppia la sua velocità: così facendo impiega 50 minuti 
> in meno del tempo che ha impiegato a salire. Quanti chilometri è lunga quella strada?

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 35
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


*Route length up and down doubling speed*

> A cyclist climbs a mountain road constantly maintaining a speed of 21 kilometers per hour. When it goes down the same road, it doubles its speed, taking 50 minutes less time to climb. How many miles is that road?

**Answer:** 35
[[src_kangourou_2015_squadre_ecolier_f__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_aritmetica,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Massima differenza scambiando due cifre di 4129*

> La differenza     
>        Emma scambia fra loro due delle cifre del numero 4129. La stessa cosa fa Luigi, senza sapere 
> quali cifre ha scambiato Emma. Quale può essere, al massimo, la differenza fra il numero ottenuto 
> da Emma e quello ottenuto da Luigi? 
> B
> A

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 7695
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


*Maximum difference by exchanging two digits of 4129*

> The difference Emma exchanges between them two of the digits of the number 4129. Luigi does the same thing, not knowing what numbers Emma traded. What is the maximum difference between Emma's number and Luigi's? B A

**Answer:** 7695
[[src_kangourou_2015_squadre_ecolier_f__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Torte con 13 gusti su 15 senza limone e pistacchio insieme*

> La torta gelato           
>        Per festeggiare il compleanno di Roberta, la mamma ha chiesto al gelataio di confezionare una 
> torta gelato con il maggior numero di gusti possibile. Il gelataio, che ha a disposizione 15 gusti tra i 
> quali limone e pistacchio, le ha detto che nella torta può metterne al massimo 13 a sua scelta. La 
> mamma di Roberta non vuole che nella torta ci siano insieme i gusti limone e pistacchio. Tra quante 
> diverse torte con 13 gusti ciascuna può scegliere la mamma di Roberta? (Due torte sono diverse se 
> in una c'è almeno un gusto che non c'è nell'altra.)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 27
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


Turtles with 13 flavors out of 15 without lemon and pistachio together*

> The ice cream cake To celebrate Roberta's birthday, Mom asked the ice cream maker to pack an ice cream cake with as many flavors as possible. The ice cream maker, who has 15 flavors, including lemon and pistachio, told her that she can put up to 13 of them in her cake. Roberta's mom doesn't want the lemon and pistachio flavours in the cake. How many different cakes with 13 flavors can each choose Roberta's mom? (Two cakes are different if one has at least one taste that is not in the other.)

**Answer:** 27
[[src_kangourou_2015_squadre_ecolier_f__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_aritmetica,topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*prodotto di due primi non consecutivi*

> Quanti anni ha il maestro?               
>         Un numero intero maggiore di 1 viene detto primo se è divisibile solo per 1 e per se stesso 
> (ad esempio, 13 è primo e 15 non lo è). Due numeri primi vengono detti consecutivi se non vi sono 
> altri numeri primi tra di essi (ad esempio, 31 e 37 sono numeri primi consecutivi). Ad Angelo, che 
> gli aveva chiesto la sua età, il maestro ha risposto: "Ho più di 30 anni e la mia età è il prodotto di 
> due numeri primi che non sono consecutivi: infatti fra di essi vi è esattamente un numero primo 
> diverso da essi". Naturalmente, il maestro di Angelo non è ancora in pensione. Quanti anni ha?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 55
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


*product of two non-consecutive primes*

> How old is the teacher? An integer greater than 1 is said to be prime if it is divisible only by 1 and for itself (e.g., 13 is prime and 15 is not). Two prime numbers are called consecutive if there are no other prime numbers between them (e.g., 31 and 37 are consecutive prime numbers). To Angelo, who asked his age, the teacher replied: "I am over 30 years old and my age is the product of two prime numbers that are not consecutive: in fact, there is exactly one prime number between them that is different from them". Of course, Angelo's teacher is not retired yet. How old is he?

**Answer:** 55
[[src_kangourou_2015_squadre_ecolier_f__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Cucchiai piccoli per riempire il vasetto di zucchero*

> Il vasetto di zucchero              
>        Giulia può riempire di zucchero un vasetto versandovi 
> - 6 cucchiai piccoli, 3 cucchiai medi e 1 cucchiaio grande,  
> - oppure 2 cucchiai piccoli, 1 cucchiaio medio e 3 cucchiai grandi,  
> - oppure 4 cucchiai medi e 2 cucchiai grandi,  
> tutti pieni di zucchero. Quanti cucchiai piccoli pieni di zucchero occorrono per riempire il vasetto?

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 16
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


*Little knives to fill the sugar container*

> The sugar container Giulia can fill with sugar by pouring a sugar container into it - 6 small spoons, 3 medium spoons and 1 large spoon, - or 2 small spoons, 1 medium spoon and 3 large spoons, - or 4 medium spoons and 2 large spoons, all filled with sugar. How many small spoons full of sugar do you need to fill the jar?

**Answer:** 16
[[src_kangourou_2015_squadre_ecolier_f__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,topic_logica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Data scritta oggi contando mesi tutti di 30 giorni*

> Che sbadato!               
>        A Natale Alessandro ha ricevuto un quaderno con 365 pagine. Ogni giorno, a partire dal primo 
> gennaio scorso e iniziando dalla prima pagina, Alessandro ha scritto la data del giorno (senza 
> l'anno) sulla prima pagina che ha trovato libera: ha cominciato dunque scrivendo 0101, poi 0201 e 
> così via (in qualche giorno di febbraio ha scritto ad esempio 1302). Per sua sbadataggine, però, ha 
> scritto le date come se tutti i mesi avessero 30 giorni. Che data ha scritto questa mattina?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 805
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


*Date written today counting months every 30 days*

> What a carelessness! At Christmas, Alexander received a notebook of 365 pages. Every day, starting from the first of January last year and starting on the first page, Alexander wrote the date of the day (without the year) on the first page he found free: he started by writing 0101, then 0201 and so on (in some days of February he wrote for example 1302). To his hesitation, however, he wrote the dates as if every month had 30 days. What date did you write this morning?

**Answer:** 805
[[src_kangourou_2015_squadre_ecolier_f__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_combinatoria,topic_geometria_piana,method_conteggio,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Differenza tessere nere e bianche bordo 4000 nere*

![[src_kangourou_2015_squadre_ecolier_f__prob13.png]]

> Il mosaico             
>        Quello che vedete in figura è un mosaico formato accostando tessere 
> quadrate bianche e tessere quadrate nere, tutte della stessa dimensione. Il bordo 
> esterno del mosaico è costituito da 16 tessere nere. Immaginate un mosaico 
> costruito allo stesso modo, il cui bordo esterno, però, è costituito da 4000 tessere 
> nere. In questo mosaico immaginario, quante tessere nere vi sono in più rispetto 
> alle tessere bianche?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 2001
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


*Difference between black and white tiles 4000 black edge *

![[src_kangourou_2015_squadre_ecolier_f__prob13.png]]

> The mosaic you see in the figure is a mosaic formed by joining white square sheets and black square sheets, all of the same size. The outer edge of the mosaic consists of 16 black tiles. Imagine a mosaic built in the same way, but the outer edge of which, however, is made up of 4,000 black tiles. In this imaginary mosaic, how many more black tiles are there than white tiles?

**Answer:** 2001
[[src_kangourou_2015_squadre_ecolier_f__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_aritmetica,topic_logica,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Ultimo anno con quoziente dell'anno massimo*

> In questo millennio          
>       Per un anno compreso fra il 2010 e il 2999, chiamiamo quoziente dell'anno il prodotto della 
> prima con l'ultima cifra dell'anno diviso per la somma delle due cifre centrali. Per esempio, il 
> quoziente di quest'anno è 2 × 5 : (0 + 1) = 10. In qualcuno dei prossimi anni, il quoziente dell'anno 
> sarà maggiore di 10. Quale sarà l'ultimo anno di questo terzo millennio in cui il quoziente dell'anno 
> sarà il maggiore possibile?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2109
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


*Last year with maximum year ratio*

> In this millennium, for a year between 2010 and 2999, we call the product of the year the quotient of the first with the last digit of the year divided by the sum of the two central digits. For example, this year's coefficient is 2 × 5: (0 + 1) = 10. In some of the next few years, the annual rate will be higher than 10. What will be the last year of this third millennium in which the annual rate will be as high as possible?

**Answer:** 2109
[[src_kangourou_2015_squadre_ecolier_f__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_geometria_solida,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Euro per verniciare il solido di 4 cubi (EXPO)*

![[src_kangourou_2015_squadre_ecolier_f__prob15.png]]

> Quattro cubi                 
>        Il solido che vedete in figura, preparato per EXPO 2015,  è ottenuto accostando 
> 4 cubi, ciascuno di due metri e mezzo di lato. Va verniciato da ogni lato, base 
> compresa, perché ogni sua faccia dovrà poter essere visibile al pubblico. La vernice 
> costa due euro al chilo e occorrono 5 chili di vernice per verniciare una superficie di 
> quattro metri quadrati e mezzo. Quanti euro si spenderanno per la vernice necessaria 
> a dare una mano di colore al solido? 
> Kangourou della Matematica 2015   
> Coppa a squadre Kangourou Ecolier Popotus   
> Cervia, 8 maggio 2015 
>  
>  
>  
> Quesiti e soluzioni

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Geometria]]
**Risposta:** 250
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1iZrTBi-soab93JlVJUtlAaAcp-N69n0R/view)


<span class="qlang-split" data-lang="en"></span>


*Euro for painting the solid of 4 cubes (EXPO) *

![[src_kangourou_2015_squadre_ecolier_f__prob15.png]]

> Four cubes The solid you see in the figure, prepared for EXPO 2015, is made by approaching four cubes, each two and a half meters by the side. It has to be painted on all sides, including the base, because every face of it has to be visible to the public. The cost of painting is two euros a kilogram and it takes five kilograms of paint to paint an area of four and a half square meters. How many euros will be spent on the paint needed to give a colorful hand to the solid?
>  
> 
>  
>  
>  
> Kangourou of Mathematics 2015 Kangourou Ecolier Popotus Cervia team cup, 8 May 2015
>  
>  
>  
> Questions and solutions

**Answer:** 250
[[src_kangourou_2015_squadre_ecolier_f__Q15]]
