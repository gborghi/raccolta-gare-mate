---
title: Archimede Gara 2° livello 2008 (biennio/triennio)
tipo: gara
competition: Archimede Gara 2° livello 2008 (biennio/triennio)
family: archimede
year: '2008'
level: 2 livello
---
<div class="atom-reader" data-gara="Quesiti/src_archimede_2008_2livello"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Combinazioni di cassaforte a 5 cifre con vincoli di parità*

> Una banda di ladri vuole aprire la cassaforte di una banca. Un basista ha fatto ubriacare il direttore
> della banca ed è riuscito a sapere che:
> (a) la combinazione è formata da 5 cifre da 0 a 9;
> (b) la combinazione è un numero pari;
> (c) esattamente una delle 5 cifre della combinazione è dispari;
> (d) nella combinazione compaiono quattro cifre diverse, la cifra ripetuta è pari e compare in due
> posizioni non consecutive.
> Quante sono le combinazioni possibili in base a tali informazioni?
>
> - **(A)** 3150
> - **(B)** 4500
> - **(C)** 5400
> - **(D)** 7200
> - **(E)** 9000.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*Combinations of 5-digit safe deposit boxes with parity constraints*

> A band of thieves wants to open a bank vault. A bassist drove the bank manager drunk and managed to know that: (a) the combination is made up of 5 digits from 0 to 9; (b) the combination is an even number; (c) exactly one of the 5 digits of the combination is odd; (d) the combination has four different digits, the repeated number is equal and appears in two non-consecutive positions. How many possible combinations are based on this information?
>
> - **(A)** 3150
> - **(B)** 4500
> - **(C)** 5400
> - **(D)** 7200
> - **(E)** 9000.

**Answer:** B
[[src_archimede_2008_2livello__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,method_conteggio,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Differenza caselle nere e bianche nel So-poko di lato 203*

![[src_archimede_2008_2livello__prob2.png]]

> Il So-poko è un nuovo gioco enigmistico che si gioca su una tabella quadrata
> di lato 203 caselle. Le caselle sono colorate di bianco e di nero a cornici
> concentriche alternate; la cornice più esterna è nera, mentre la casella centrale è bianca (vedi a fianco un esempio 7 × 7). Qual è la differenza tra il
> numero di caselle nere e il numero di caselle bianche presenti nello schema?
>
> - **(A)** 103
> - **(B)** 203
> - **(C)** 207
> - **(D)** 303
> - **(E)** 407.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


Difference between black and white boxes in the So-poko on side 203

![[src_archimede_2008_2livello__prob2.png]]

> So-poko is a new enigmatic game that's played on a square table with 203 boxes. The boxes are coloured in white and black with alternating concentric frames; the outermost frame is black, while the central box is white (see next example 7 × 7). What is the difference between the number of black boxes and the number of white boxes in the pattern?
>
> - **(A)** 103
> - **(B)** 203
> - **(C)** 207
> - **(D)** 303
> - **(E)** 407.

**Answer:** E
[[src_archimede_2008_2livello__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area del trapezio isoscele data area di BOC e proporzioni*

![[src_archimede_2008_2livello__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (4.5,2.2);
  \coordinate (D) at (1.5,2.2);
  \coordinate (O) at (3,1.467);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (C);
  \draw (B) -- (D);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below right] at (O) {$O$};
  \fill (O) circle (1pt);
\end{tikzpicture}
\end{document}
```

> In un trapezio isoscele ABCD di base maggiore AB, le diagonali vengono
> divise dal loro punto di incontro O in parti proporzionali ai numeri 1
> e 3. Sapendo che l’area del triangolo BOC è 15, quanto misura l’area
> dell’intero trapezio?
>
> - **(A)** 60
> - **(B)** 75
> - **(C)** 80
> - **(D)** 90
> - **(E)** 105.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*Isosceles trapezoid area given BOC area and proportions*

![[src_archimede_2008_2livello__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (C) at (4.5,2.2);
  \coordinate (D) at (1.5,2.2);
  \coordinate (O) at (3,1.467);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (C);
  \draw (B) -- (D);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below right] at (O) {$O$};
  \fill (O) circle (1pt);
\end{tikzpicture}
\end{document}
```

> In an ABCD major base AB isosceles trapezoid, the diagonal is divided from its meeting point O into parts proportional to the numbers 1 and 3. Knowing that the area of the BOC triangle is 15, what is the area of the entire trapezoid?
>
> - **(A)** 60
> - **(B)** 75
> - **(C)** 80
> - **(D)** 90
> - **(E)** 105.

**Answer:** C
[[src_archimede_2008_2livello__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Stagioni di nascita da sistema lineare con soluzioni infinite/nessuna*

> Francesco e Andrea decidono di consultare l’oracolo matematico per sapere se hanno delle coppie
> (x, y) di numeri (reali) fortunati. Per determinare la coppia (o le coppie) di numeri fortunati,
> l’oracolo chiede sia a Francesco che a Andrea il giorno (g) e mese (m) di nascita, dopodich´e per
> ciascuno di loro risolve il sistema:
> (
> 13x −y = 181
> gx −my = 362
> .
> Il responso dell’oracolo è che Andrea non ha nessuna coppia di numeri fortunati, mentre le coppie
> di numeri fortunati di Francesco sono infinite. Quale delle affermazioni seguenti è corretta?
>
> - **(A)** Francesco e Andrea sono entrambi nati in primavera
> - **(B)** Francesco e Andrea sono entrambi nati in estate
> - **(C)** Francesco e Andrea sono entrambi nati in autunno
> - **(D)** Francesco e Andrea sono entrambi nati in inverno
> - **(E)** Francesco e Andrea sono nati in stagioni diverse.

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*Seasons of birth of linear system with infinite solutions/no*

> Francesco and Andrea decide to consult the mathematical oracle to find out if they have any (x, y) pairs of lucky (real) numbers. To determine the pair (or pairs) of lucky numbers, the oracle asks both Francis and Andrew the day (g) and month (m) of birth, and then for each of them solves the system: (13x −y = 181 gx −my = 362. The oracle's response is that Andrew has no pair of lucky numbers, while Francis's pair of lucky numbers are infinite. Which of the following is correct?
>
> - **(A)** Francis and Andrew were both born in the spring.
> - **(B)** Francesco and Andrea were both born in the summer.
> - **(C)** Francesco and Andrea were both born in the fall.
> - **(D)** Francesco and Andrea were both born in the winter.
> - **(E)** Francesco and Andrea were born in different seasons.

**Answer:** D
[[src_archimede_2008_2livello__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_funzionali,method_congruenze,method_ricorsione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo i>0 per cui a_i multiplo di 19 nella ricorrenza*

> Siano a0, a1, a2, . . . numeri interi tali che a0 = 19, a1 = 25, e per ogni n ≥0 valga an+2 = 2an+1−an.
> Qual è il più piccolo i > 0 per cui ai è multiplo di 19?
>
> - **(A)** 19
> - **(B)** 25
> - **(C)** 38
> - **(D)** 44
> - **(E)** 50.

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** A
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum i>0 for which a_i is a multiple of 19 in the recurrence*

> They're a0, a1, a2. . . integers such that a0 = 19, a1 = 25, and for each n ≥0 an+2 = 2an+1−an. What's the smallest i > 0 where a is a multiple of 19?
>
> - **(A)** 19
> - **(B)** 25
> - **(C)** 38
> - **(D)** 44
> - **(E)** 50.

**Answer:** A
[[src_archimede_2008_2livello__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti paggi sull'isola dato affermazioni in due giorni*

> Sull’isola che non c’è ci sono 2008 abitanti, divisi in tre clan: i furfanti che mentono sempre, i cavalieri
> che non mentono mai, i paggi che mentono un giorno sì e uno no. Lorenza, in visita per due giorni,
> li incontra tutti il primo giorno. Il primo dice: “c’è esattamente un furfante sull’isola”; il secondo
> dice: “ci sono esattamente due furfanti sull’isola”. . . il 2008-esimo dice: “ci sono esattamente 2008
> furfanti sull’isola”. Il giorno dopo Lorenza li interroga di nuovo tutti nello stesso ordine. Il primo
> dice: “c’è esattamente un cavaliere sull’isola”; il secondo dice: “ci sono esattamente due cavalieri
> sull’isola”. . . l’ultimo dice: “ci sono esattamente 2008 cavalieri sull’isola”.
> Quanti paggi ci sono sull’isola?
>
> - **(A)** 0
> - **(B)** 1
> - **(C)** 1004
> - **(D)** 2006
> - **(E)** non è possibile determinarlo con i dati del problema.

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*How many salaries on the island given claims in two days*

> On the island that doesn't exist, there are 2008 inhabitants, divided into three clans: the crooks who always lie, the knights who never lie, the payers who lie one day yes and one day no. Lorenza, visiting for two days, meets them all on the first day. The first one says, "There's exactly one crook on the island". The second one says, "There's exactly two crooks on the island". . . The 2008th says, "There are exactly 2008 crooks on the island". The next day, Lorenza interrogates them all in the same order. The first one says, there's exactly one rider on the island. The second one says, there's exactly two riders on the island. . . The last one says, "There are exactly 2008 knights on the island". How many pages are there on the island?
>
> - **(A)** 0
> - **(B)** 1
> - **(C)** 1004
> - **(D)** 2006
> - **(E)** It is not possible to determine this with the problem data.

**Answer:** B
[[src_archimede_2008_2livello__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Ordinamenti di 1,2,4,7,9 che danno multiplo di 11*

> In quanti modi si possono ordinare le cifre 1, 2, 4, 7 e 9 affinch´e formino un numero di cinque cifre
> divisibile per 11?
>
> - **(A)** 0
> - **(B)** 1
> - **(C)** 10
> - **(D)** 12
> - **(E)** 24.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*Orders of 1,2,4,7,9 giving a multiple of 11*

> How many ways can you arrange the numbers 1, 2, 4, 7 and 9 to form a five-digit number divisible by 11?
>
> - **(A)** 0
> - **(B)** 1
> - **(C)** 10
> - **(D)** 12
> - **(E)** 24.

**Answer:** D
[[src_archimede_2008_2livello__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_geometria_piana,method_inclusione_esclusione,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area zona ombreggiata da tre archi nel cerchio raggio 1*

![[src_archimede_2008_2livello__prob8.png]]

> All’interno di un cerchio di raggio 1 si tracciano 3 archi di circonferenza,
> anch’essi di raggio 1, centrando nei vertici di un triangolo equilatero inscritto
> nella circonferenza. Quanto vale l’area della zona ombreggiata?
>
> - **(A)** √ 3 4 π
> - **(B)** π −3 √ 3 4
> - **(C)** π −3 √ 3 2
> - **(D)** 3 √ 3 2
> - **(E)** 6 −π.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*Area area shaded by three arcs in radius circle 1*

![[src_archimede_2008_2livello__prob8.png]]

> Within a circle of radius 1 three arcs of circumference are drawn, also of radius 1, centering on the vertices of an equilateral triangle inscribed in the circumference. How much is the shaded area worth?
>
> - **(A)** √ 3 4 π
> - **(B)** π −3 √ 3 4
> - **(C)** π −3 √ 3 2
> - **(D)** 3 √ 3 2
> - **(E)** 6 −π.

**Answer:** D
[[src_archimede_2008_2livello__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_probabilita,method_congruenze,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Probabilità che la lancetta delle ore sia orizzontale*

> Eleonora gioca con un dado e un orologio (fermo) che all’inizio segna le 12. Per 2008 volte tira il
> dado e porta le lancette avanti di tante ore quanto è il risultato. Qual è alla fine la probabilità che
> la lancetta delle ore sia orizzontale?
>
> - **(A)** 0
> - **(B)** 1 2008
> - **(C)** 1 1004
> - **(D)** 1 12
> - **(E)** 1 6.

**Topic:** [[topic_probabilita|Probabilita e statistica]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*Probability that the time dial is horizontal*

> Eleonora plays with a dice and a clock (still) that at the beginning marks 12. For 2008 times he throws the dice and brings the pitches forward for as many hours as the result. What is the ultimate probability that the time slot is horizontal?
>
> - **(A)** 0
> - **(B)** 1 2008
> - **(C)** 1 1004
> - **(D)** 1 12
> - **(E)** 1 6.

**Answer:** E
[[src_archimede_2008_2livello__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma dei reciproci delle radici di equazione reciproca*

> Indicando con x1, x2, x3 e x4 le soluzioni dell’equazione x4 −2x3 −7x2 −2x + 1 = 0, quanto vale
> 1
> x1
> + 1
> x2
> + 1
> x3
> + 1
> x4
> ?
>
> - **(A)** 1
> - **(B)** 1 2
> - **(C)** 2
> - **(D)** 4
> - **(E)** 7.

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** C
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*sum of reciprocities of the roots of the reciprocal equation*

> When x1, x2, x3 and x4 are used to indicate the solutions of the equation x4 −2x3 −7x2 −2x + 1 = 0, what is 1 x1 + 1 x2 + 1 x3 + 1 x4 ?
>
> - **(A)** 1
> - **(B)** 1 2
> - **(C)** 2
> - **(D)** 4
> - **(E)** 7.

**Answer:** C
[[src_archimede_2008_2livello__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_aritmetica,method_conteggio,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Quale lampadina resta accesa (quadrati perfetti, divisori dispari)*

> Vi sono 10000 lampadine numerate da 1 in poi, ciascuna delle quali viene accesa e spenta con un
> normale interruttore. All’inizio tutte le lampadine sono spente; poi si premono una volta tutti gli
> interruttori delle lampadine contrassegnate dai multipli di 1 (di conseguenza tutte le lampadine
> vengono accese), successivamente vengono premuti una volta gli interruttori di tutte quelle di posto
> pari (cioè multiplo di 2), poi quelle contrassegnate con i multipli di 3, successivamente si cambiano
> di stato quelle relative ai multipli di 4 e così via, sino ai multipli di 10000. Quale delle seguenti
> lampadine rimane accesa al termine delle operazioni?
>
> - **(A)** La numero 9405
> - **(B)** la numero 9406
> - **(C)** la numero 9407
> - **(D)** la numero 9408
> - **(E)** la numero 9409.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** E
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*Which lamp remains on (perfect squares, odd dividers) *

> There are 10,000 bulbs numbered from 1 onwards, each of which is switched on and off with a normal switch. At the beginning all the lamps are turned off; then all the switches of the lamps marked by multiples of 1 are pressed once (hence all the lamps are turned on), then the switches of all those of equal position (i.e. multiples of 2), then those marked with multiples of 3, then those of the multiples of 4 and so on, are pressed once, until the multiples of 10000. Which of the following light bulbs remains on at the end of operations?
>
> - **(A)** Number 9405
> - **(B)** the number 9406
> - **(C)** the number 9407
> - **(D)** the number 9408
> - **(E)** The number is 9409.

**Answer:** E
[[src_archimede_2008_2livello__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Raggio della sfera dato ombra e asta verticale*

> In un giorno di sole una sfera è posata su un terreno orizzontale. In un certo istante l’ombra della
> sfera raggiunge la distanza di 10 metri dal punto in cui la sfera tocca il terreno. Nello stesso istante
> un’asta di lunghezza 1 metro posta verticalmente al terreno getta un’ombra lunga 2 metri. Qual è
> il raggio della sfera in metri?
>
> - **(A)** 5 2
> - **(B)** 9 −4 √ 5
> - **(C)** 10 √ 5 −20
> - **(D)** 8 √ 10 −23
> - **(E)** 6 − √ 15. Problemi a risposta numerica – 5 punti

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*Sphere radius given shadow and vertical axis*

> On a sunny day, a sphere is placed on a horizontal terrain. At a certain moment the shadow of the sphere reaches a distance of 10 meters from the point where the sphere touches the ground. At the same time, a 1 metre long raft placed vertically on the ground casts a 2 metre long shadow. What is the radius of the sphere in meters?
>
> - **(A)** 5 2
> - **(B)** 9 −4 √ 5
> - **(C)** 10 √ 5 −20
> - **(D)** 8 √ 10 −23
> - **(E)** 6 − √ 15. Problems with numerical answer  5 points

**Answer:** C
[[src_archimede_2008_2livello__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_aritmetica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Più grande primo di due cifre con varie condizioni di primalità*

> Determinare il più grande numero di due cifre tale che:
> a) sia un numero primo;
> b) scambiando di posto le due cifre resti un numero primo;
> c) il prodotto delle due cifre sia un numero primo.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 71
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*Most prime of two digits with different priority conditions*

> Determine the greatest number of two digits such that: (a) it is a prime number; (b) the two digits are replaced by a prime number; (c) the product of the two digits is a prime number.

**Answer:** 71
[[src_archimede_2008_2livello__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_geometria_piana,method_trigonometria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Prodotto BJ·CK nel triangolo rettangolo con proiezioni*

> Sia ABC un triangolo rettangolo in A, con $\widehat{ABC}$ = 15°. Sia H il piede dell’altezza da A e siano
> J, K le proiezioni di H su AB e su AC. Sapendo che l’area di AJHK è 45 cm2, quanti cm2 vale
> il prodotto BJ · CK?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 45
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*BJ·CK product in the rectangular triangle with projections*

> Whether ABC is a right triangle in A, with $\widehat{ABC}$ = 15°. If H is the height from A and if J, K are the projections of H on AB and AC. Knowing that the area of AJHK is 45 cm2, how many cm2 is the product BJ · CK worth?

**Answer:** 45
[[src_archimede_2008_2livello__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_algebra,method_simmetria,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Coppie reali (x,y) con 4/(x+y) = 1/x + 1/y*

> ESERCIZIO DIMOSTRATIVO
> Si determinino tutte le coppie (x, y) di numeri reali che verificano l’equazione
> 4
> x + y = 1
> x + 1
> y .

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** y=x con (0,0) escluso
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*Real pairs (x,y) with 4/(x+y) = 1/x + 1/y*

> Demonstrative Exercise Determine all pairs (x, y) of real numbers that prove the equation 4 x + y = 1 x + 1 y.

**Answer:** y=x con (0,0) escluso
[[src_archimede_2008_2livello__Q15]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Q punto medio di AP è ortocentro di ADE*

> ESERCIZIO DIMOSTRATIVO
> Sia AB una corda di una circonferenza e P un punto interno ad AB tale che AP = 2PB. Sia
> DE la corda passante per P e perpendicolare ad AB. Dimostrare che il punto medio Q di AP è
> l’ortocentro di ADE.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** dimostrazione
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


*Q the mean point of AP is the ORTOCENTRE of ADE*

> Whether AB is a rope of one circumference and P is an inner point of AB such that AP = 2PB. Either DE the string passing through P and perpendicular to AB. Demonstrate that the mean point Q of AP is the orthocenter of ADE.

**Answer:** dimostrazione
[[src_archimede_2008_2livello__Q16]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_aritmetica,method_fattorizzazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*sono cubi?*

> ESERCIZIO DIMOSTRATIVO
> a) Si hanno sette numeri interi positivi a, b, c, d, e, f, g tali che i prodotti ab, bc, cd, de, ef, fg,
> ga sono tutti cubi perfetti. Dimostrare che anche a, b, c, d, e, f, g sono cubi perfetti.
> b) Si hanno sei numeri interi positivi a, b, c, d, e, f tali che i prodotti ab, bc, cd, de, ef, fa sono
> tutti cubi perfetti. È sempre vero che a, b, c, d, e, f sono tutti cubi perfetti?
> Nota: si dice cubo perfetto un intero m tale che m = n3 per qualche intero n.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** dimostrazione (sì per 7, no per 6)
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/1oIbyp4ch1XvQ1pvuoOapUWstrspaawFM/view)


<span class="qlang-split" data-lang="en"></span>


Are they cubic?

> A) There are seven positive integers a, b, c, d, e, f, g such that the products ab, bc, cd, de, ef, fg, ga are all perfect cubes. Prove that a, b, c, d, e, f, g are perfect cubes too. (b) You have six positive integers a, b, c, d, e, f such that the products ab, bc, cd, de, ef, fa are all perfect cubes. Is it always true that a, b, c, d, e, f are all perfect cubes? Note: we say perfect cube an integer m such that m = n3 for some integer n.

**Answer:** dimostrazione (sì per 7, no per 6)
[[src_archimede_2008_2livello__Q17]]
