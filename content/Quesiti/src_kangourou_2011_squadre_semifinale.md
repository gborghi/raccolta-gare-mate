---
title: Kangourou 2011 squadre semifinale turno A
tipo: gara
competition: Kangourou 2011 squadre semifinale turno A
family: kangourou
year: '2011'
level: squadre
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2011_squadre_semifinale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,topic_logica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Ora a S.Francisco all'arrivo del volo da Londra*

> Un lungo viaggio 
> Quando a Londra sono le 17.00, a S. Francisco sono le 09.00 (dello stesso giorno). Un volo diretto 
> Londra – S. Francisco dura 12 ore e mezza. Un aereo parte da Londra alle 13.05 per un volo diretto; 
> che ora sarà a S. Francisco quando l’aereo arriverà? (Scrivete le quattro cifre dell'ora senza il punto, 
> ad es. 1011 per 10.11.)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1735
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*Now in San Francisco, on the arrival of the flight from London*

> A long journey
> When it is 5:00 p.m. in London, it is 9:00 a.m. in San Francisco (on the same day). A direct flight from London to San Francisco lasts 12 and a half hours. A plane departs from London at 1:05 p.m. on a direct flight; what time will it be in San Francisco when the plane arrives? (Write the four digits of the time without a dot, e.g., 1011 for 10:11.)

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_logica|Logic, games and strategies]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q01|src_kangourou_2011_squadre_semifinale__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Valore n con errore di scala mappa e prezzo +6%*

> Che errore!   
> Alfredo, un giardiniere molto disattento, è incaricato di tappezzare di erba un appezzamento di 
> terreno di cui possiede la mappa in scala 1 : n. Calcola l’area della sua immagine sulla mappa, la 
> moltiplica per n e compra le zolle d’erba che consentono di tappezzare un appezzamento di area 
> uguale al risultato ottenuto, spendendo 14 euro. Una volta sul posto, si rende naturalmente conto 
> che gli servono molte altre zolle d’erba: le va a comprare, ma nel frattempo il prezzo è salito del 6% 
> e lui spende 42 euro in più di quanto avrebbe speso se le avesse comperate insieme alle prime. 
> Quanto vale n?

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 51
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*Value n with map scale error and price +6%*

> What a mistake! Alfredo, a very careless gardener, is tasked with covering a plot of land with turf; he has the map of the plot in a scale of 1:n. He calculates the area of the plot's image on the map, multiplies that by n, and buys the turf rolls needed to cover a plot whose area equals the result obtained, spending 14 euros. Once on site, he naturally realizes that he needs many more turf rolls: he goes and buys them, but in the meantime the price has risen by 6%, and he spends 42 euros more than he would have spent if he had bought them together with the first ones. What is the value of n?

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q02|src_kangourou_2011_squadre_semifinale__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Misura angolo X con tre quadrati nel rettangolo*

![[src_kangourou_2011_squadre_semifinale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.35]
\pgfmathsetmacro{\H}{3.0}
\pgfmathsetmacro{\tI}{60}
\pgfmathsetmacro{\sI}{\H/(sin(\tI)+cos(\tI))}
\pgfmathsetmacro{\AxI}{0}
\pgfmathsetmacro{\AyI}{0}
\pgfmathsetmacro{\BxI}{\AxI+\sI*cos(\tI)}
\pgfmathsetmacro{\ByI}{\sI*sin(\tI)}
\pgfmathsetmacro{\CxI}{\BxI-\sI*sin(\tI)}
\pgfmathsetmacro{\CyI}{\H}
\pgfmathsetmacro{\DxI}{\AxI-\sI*sin(\tI)}
\pgfmathsetmacro{\DyI}{\sI*cos(\tI)}
\pgfmathsetmacro{\tII}{26}
\pgfmathsetmacro{\sII}{\H/(sin(\tII)+cos(\tII))}
\pgfmathsetmacro{\AxII}{\BxI}
\pgfmathsetmacro{\AyII}{0}
\pgfmathsetmacro{\BxII}{\AxII+\sII*cos(\tII)}
\pgfmathsetmacro{\ByII}{\sII*sin(\tII)}
\pgfmathsetmacro{\CxII}{\BxII-\sII*sin(\tII)}
\pgfmathsetmacro{\CyII}{\H}
\pgfmathsetmacro{\DxII}{\AxII-\sII*sin(\tII)}
\pgfmathsetmacro{\DyII}{\sII*cos(\tII)}
\pgfmathsetmacro{\tIII}{41}
\pgfmathsetmacro{\sIII}{\H/(sin(\tIII)+cos(\tIII))}
\pgfmathsetmacro{\AxIII}{\BxII}
\pgfmathsetmacro{\AyIII}{0}
\pgfmathsetmacro{\BxIII}{\AxIII+\sIII*cos(\tIII)}
\pgfmathsetmacro{\ByIII}{\sIII*sin(\tIII)}
\pgfmathsetmacro{\CxIII}{\BxIII-\sIII*sin(\tIII)}
\pgfmathsetmacro{\CyIII}{\H}
\pgfmathsetmacro{\DxIII}{\AxIII-\sIII*sin(\tIII)}
\pgfmathsetmacro{\DyIII}{\sIII*cos(\tIII)}
\draw[thick] (\DxI,0) rectangle (\BxIII,\H);
\draw[thick] (\AxI,\AyI)--(\BxI,\ByI)--(\CxI,\CyI)--(\DxI,\DyI)--cycle;
\draw[thick] (\AxII,\AyII)--(\BxII,\ByII)--(\CxII,\CyII)--(\DxII,\DyII)--cycle;
\draw[thick] (\AxIII,\AyIII)--(\BxIII,\ByIII)--(\CxIII,\CyIII)--(\DxIII,\DyIII)--cycle;
\draw[thin] (\AxI,0.42) arc[start angle=90, end angle=\tI, radius=0.42];
\node at (\AxI+0.30, 0.20) {$30^\circ$};
\draw[thin] (\BxI-0.42, \ByI) arc[start angle=180, end angle=180+\tI, radius=0.42];
\node at (\BxI-0.62, \ByI-0.25) {$60^\circ$};
\draw[thin] (\AxII, 0.42) arc[start angle=90, end angle=\tII, radius=0.42];
\node at (\AxII+0.38, 0.22) {$64^\circ$};
\draw[thin] (\BxII-0.42, \ByII) arc[start angle=180, end angle=180+\tII, radius=0.42];
\node at (\BxII-0.65, \ByII-0.18) {$26^\circ$};
\draw[thin] (\AxIII, 0.42) arc[start angle=90, end angle=\tIII, radius=0.42];
\node at (\AxIII+0.36, 0.22) {$49^\circ$};
\draw[thin] (\BxIII-0.42, \ByIII) arc[start angle=180, end angle=180+\tIII, radius=0.42];
\node at (\BxIII-0.60, \ByIII-0.20) {$X$};
\end{tikzpicture}
\end{document}
```

> Tre quadrati   
> All’interno di un rettangolo sono stati collocati 3 quadrati disposti come in figura. Di alcuni degli 
> angoli formati dai vari lati presenti sono  indicate le misure in gradi (la figura è puramente 
> indicativa, non rispetta esattamente le misure dichiarate). Quanto vale la misura in gradi indicata 
> con X?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 41
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*Measure angle X using three squares in the rectangle*

![[src_kangourou_2011_squadre_semifinale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.35]
\pgfmathsetmacro{\H}{3.0}
\pgfmathsetmacro{\tI}{60}
\pgfmathsetmacro{\sI}{\H/(sin(\tI)+cos(\tI))}
\pgfmathsetmacro{\AxI}{0}
\pgfmathsetmacro{\AyI}{0}
\pgfmathsetmacro{\BxI}{\AxI+\sI*cos(\tI)}
\pgfmathsetmacro{\ByI}{\sI*sin(\tI)}
\pgfmathsetmacro{\CxI}{\BxI-\sI*sin(\tI)}
\pgfmathsetmacro{\CyI}{\H}
\pgfmathsetmacro{\DxI}{\AxI-\sI*sin(\tI)}
\pgfmathsetmacro{\DyI}{\sI*cos(\tI)}
\pgfmathsetmacro{\tII}{26}
\pgfmathsetmacro{\sII}{\H/(sin(\tII)+cos(\tII))}
\pgfmathsetmacro{\AxII}{\BxI}
\pgfmathsetmacro{\AyII}{0}
\pgfmathsetmacro{\BxII}{\AxII+\sII*cos(\tII)}
\pgfmathsetmacro{\ByII}{\sII*sin(\tII)}
\pgfmathsetmacro{\CxII}{\BxII-\sII*sin(\tII)}
\pgfmathsetmacro{\CyII}{\H}
\pgfmathsetmacro{\DxII}{\AxII-\sII*sin(\tII)}
\pgfmathsetmacro{\DyII}{\sII*cos(\tII)}
\pgfmathsetmacro{\tIII}{41}
\pgfmathsetmacro{\sIII}{\H/(sin(\tIII)+cos(\tIII))}
\pgfmathsetmacro{\AxIII}{\BxII}
\pgfmathsetmacro{\AyIII}{0}
\pgfmathsetmacro{\BxIII}{\AxIII+\sIII*cos(\tIII)}
\pgfmathsetmacro{\ByIII}{\sIII*sin(\tIII)}
\pgfmathsetmacro{\CxIII}{\BxIII-\sIII*sin(\tIII)}
\pgfmathsetmacro{\CyIII}{\H}
\pgfmathsetmacro{\DxIII}{\AxIII-\sIII*sin(\tIII)}
\pgfmathsetmacro{\DyIII}{\sIII*cos(\tIII)}
\draw[thick] (\DxI,0) rectangle (\BxIII,\H);
\draw[thick] (\AxI,\AyI)--(\BxI,\ByI)--(\CxI,\CyI)--(\DxI,\DyI)--cycle;
\draw[thick] (\AxII,\AyII)--(\BxII,\ByII)--(\CxII,\CyII)--(\DxII,\DyII)--cycle;
\draw[thick] (\AxIII,\AyIII)--(\BxIII,\ByIII)--(\CxIII,\CyIII)--(\DxIII,\DyIII)--cycle;
\draw[thin] (\AxI,0.42) arc[start angle=90, end angle=\tI, radius=0.42];
\node at (\AxI+0.30, 0.20) {$30^\circ$};
\draw[thin] (\BxI-0.42, \ByI) arc[start angle=180, end angle=180+\tI, radius=0.42];
\node at (\BxI-0.62, \ByI-0.25) {$60^\circ$};
\draw[thin] (\AxII, 0.42) arc[start angle=90, end angle=\tII, radius=0.42];
\node at (\AxII+0.38, 0.22) {$64^\circ$};
\draw[thin] (\BxII-0.42, \ByII) arc[start angle=180, end angle=180+\tII, radius=0.42];
\node at (\BxII-0.65, \ByII-0.18) {$26^\circ$};
\draw[thin] (\AxIII, 0.42) arc[start angle=90, end angle=\tIII, radius=0.42];
\node at (\AxIII+0.36, 0.22) {$49^\circ$};
\draw[thin] (\BxIII-0.42, \ByIII) arc[start angle=180, end angle=180+\tIII, radius=0.42];
\node at (\BxIII-0.60, \ByIII-0.20) {$X$};
\end{tikzpicture}
\end{document}
```

> Three squares
> Inside a rectangle, 3 squares have been placed as shown in the figure. For some of the angles formed by the various sides present, the measures in degrees are indicated (the figure is purely illustrative and does not exactly reflect the stated measures). What is the measure in degrees indicated by X?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q03|src_kangourou_2011_squadre_semifinale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Percentuale problemi risolti da Gigi*

> Carlo e Gigi  
> A Carlo e Gigi sono stati assegnati alcuni problemi di Matematica come compiti delle vacanze. Il 
> numero dei problemi assegnati a Carlo è il quadruplo del numero dei problemi assegnati a Gigi. 
> Quando si ritrovano dopo le vacanze, scoprono di avere risolto lo stesso numero di problemi, ma la 
> percentuale dei problemi risolti da Carlo è uguale alla percentuale dei problemi non risolti da Gigi. 
> Qual è la percentuale dei problemi risolti da Gigi?

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 80
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*Percentage of problems solved by Gigi*

> Carlo and Gigi
> Some math problems were assigned to Carlo and Gigi as holiday homework. The number of problems assigned to Carlo is four times the number assigned to Gigi. When they meet again after the holidays, they find that they have solved the same number of problems, but the percentage of problems Carlo solved is equal to the percentage of problems Gigi did not solve. What is the percentage of problems Gigi solved?

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q04|src_kangourou_2011_squadre_semifinale__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero civico della cugina (lato sinistro dispari)*

> Io e mia cugina 
> Nella via dove abitiamo sia io sia mia cugina vi sono 17 case. Le case sul lato sinistro sono 
> numerate utilizzando progressivamente tutti i numeri dispari da 1 in poi, quelle sul lato destro sono 
> numerate utilizzando progressivamente tutti i numeri pari da 2 in poi. La mia casa è l’ultima del lato 
> destro e porta il numero 12, quella di mia cugina è l’ultima del lato sinistro. Qual è il numero civico 
> di mia cugina?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 21
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*Cousin's house number (odd numbers on the left side)*

> Me and my cousin
> On the street where both my cousin and I live, there are 17 houses. The houses on the left side are numbered by successively using all the odd numbers starting from 1, and those on the right side are numbered by successively using all the even numbers starting from 2. My house is the last one on the right side and has the number 12; my cousin's house is the last one on the left side. What is my cousin's house number?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Abilita:** [[skill_lettura_attenta|Careful reading]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q05|src_kangourou_2011_squadre_semifinale__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_geometria_solida,topic_combinatoria,method_conteggio,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo cubetti visti simultaneamente in cubo 11x11x11*

> Guarda il cubo   
> Un cubo di 11 cm di lato è ottenuto accostando cubetti di 1 cm di lato. Qual è il massimo numero di 
> questi cubetti che possono essere visti simultaneamente da una sola persona?

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 331
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum number of cubes visible simultaneously in an 11x11x11 cube*

> Look at the cube
> A cube with an edge length of 11 cm is formed by joining together 1-cm cubes. What is the maximum number of these small cubes that a single person can see at the same time?

**Topic:** [[topic_geometria_solida|Solid geometry]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Geometria|Geometry]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q06|src_kangourou_2011_squadre_semifinale__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti interi sono 20 volte la somma delle cifre*

> Sommiamo le cifre  
> Quanti numeri interi positivi, scritti in notazione decimale, sono 20 volte la somma delle loro cifre? 
> (Scrivete [9999] se ritenete che ce se siano infiniti.)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 1
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*How many integers are 20 times the sum of the digits?*

> Let's add the numbers.
> How many positive integers, written in decimal notation, are 20 times the sum of their digits? (Write [9999] if you think there are infinitely many.)

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q07|src_kangourou_2011_squadre_semifinale__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_algebra,method_telescoping,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Valore somma 5+10+15+...+300*

> Quanti addendi!  
> Quanto vale la somma  5 + 10 + 15 + … + 295 + 300 ?

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_telescoping|Somme telescopiche]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 9150
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*Sum of 5+10+15+...+300*

> So many addends! What is the value of the sum 5 + 10 + 15 + … + 295 + 300?

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_telescoping|Telescoping sums]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q08|src_kangourou_2011_squadre_semifinale__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_aritmetica,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Cifre totali per numerare articoli del trattato*

> Un lungo trattato  
> Un trattato è formato da quattro parti. I suoi articoli sono numerati nella prima parte da 1.1 a 1.59, 
> nella seconda da 2.1 a 2.54, nella terza da 3.1 a 3.342 e nella quarta da 4.1 a 4.10. Quante cifre sono 
> state scritte in totale per numerare tutti questi articoli?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 1602
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*Total figures for numbering the articles of the treaty*

> A long treatise
> A treaty consists of four parts. Its articles are numbered from 1.1 to 1.59 in the first part, from 2.1 to 2.54 in the second part, from 3.1 to 3.342 in the third part, and from 4.1 to 4.10 in the fourth part. How many digits were written in total to number all these articles?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q09|src_kangourou_2011_squadre_semifinale__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_aritmetica,method_inclusione_esclusione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero al posto 2009 in unione due progressioni*

> Due progressioni  
> Considerate gli insiemi di numeri interi positivi A ={0, 3, 6, 9, …} (progressione aritmetica di 
> ragione 3 con partenza da 0) e B = {0, 13, 26, 39, …} (progressione aritmetica di ragione 13 con 
> partenza da 0). Considerate ora l’insieme A ∪ B e ordinate i suoi elementi in ordine crescente (sia 
> cioè A ∪ B = {0, 3, 6, 9, 12, 13, 15, …}. Quale numero occupa in A ∪ B il posto 2009?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 5220
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*Number at position 2009 in the union of two progressions*

> Two progressions
> Consider the sets of positive integers A = {0, 3, 6, 9, …} (an arithmetic progression with common difference 3 starting at 0) and B = {0, 13, 26, 39, …} (an arithmetic progression with common difference 13 starting at 0). Now consider the set A ∪ B and order its elements in ascending order (that is, let A ∪ B = {0, 3, 6, 9, 12, 13, 15, …}). Which number occupies the 2009th position in A ∪ B?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_inclusione_esclusione|Inclusion–exclusion]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q10|src_kangourou_2011_squadre_semifinale__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_combinatoria,method_estremalita,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo somme intere distinte di 10 numeri (uno non intero)*

> Risultati interi   
> Sono assegnati 10 numeri positivi. L'unica informazione che abbiamo su di essi è che almeno uno di 
> essi non è intero. Se vengono sommati a coppie in tutti i modi possibili (cioè se ne vengono scelti 
> due diversi tra loro in tutti i modi possibili e vengono sommati) qual è il massimo numero di 
> risultati interi tutti diversi fra loro che è possibile vengano realizzati?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 45
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*Maximum distinct whole sums of 10 numbers (one of which is not a whole number)*

> Whole results
> Ten positive numbers are given. The only information we have about them is that at least one of them is not an integer. If they are added in pairs in all possible ways (that is, if two distinct numbers are chosen in all possible ways and added), what is the maximum number of distinct integer results that can possibly be obtained?

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q11|src_kangourou_2011_squadre_semifinale__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Ora incontro ciclista e podista (60 km)*

> Il ciclista e il podista   
> La casa di Stefano dista 60 km da quella di Andrea. Ogni sabato Stefano, appassionato ciclista, va a 
> trovare Andrea in bicicletta, partendo a mezzogiorno, pedalando a velocità costante e impiegando due 
> ore. Oggi però Andrea, che è un buon camminatore, non ha tempo di aspettarlo: decide quindi di 
> andargli incontro a piedi partendo anch’egli a mezzogiorno. Anche la velocità di Andrea è costante ed 
> è di 6 km orari. A che ora si incontreranno? (Scrivete l’ora usando le cifre di un orologio digitale 
> senza altri segni, ad esempio scrivete 1539 per indicare le 3 e 39 di pomeriggio.)

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 1340
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*Now: cycling and running meet (60 km)*

> The cyclist and the runner
> Stefano's house is 60 km from Andrea's. Every Saturday, Stefano, an avid cyclist, goes to visit Andrea by bicycle, setting off at noon, pedaling at a constant speed, and taking two hours. Today, however, Andrea, who is a good walker, doesn't have time to wait for him: so he decides to walk out to meet him, also setting off at noon. Andrea's speed is also constant and is 6 km per hour. What time will they meet? (Write the time using the digits of a digital clock with no other symbols; for example, write 1539 to indicate 3:39 p.m.)

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q12|src_kangourou_2011_squadre_semifinale__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_combinatoria,topic_logica,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Partite totali con 20% squadre senza vittorie*

> Il torneo   
> In un torneo di palla a volo (dove le partite non possono terminare in pareggio), ogni squadra ha 
> giocato due volte (andata e ritorno) contro ciascuna delle altre. Il 20 % delle squadre non hanno 
> vinto alcuna partita. Quante partite si sono giocate in totale in quel torneo?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 20
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*Total matches with 20% of teams having no wins*

> The tournament
> In a volleyball tournament (where matches cannot end in a draw), each team played twice (home and away) against each of the other teams. 20% of the teams did not win any matches. How many matches were played in total in that tournament?

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q13|src_kangourou_2011_squadre_semifinale__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_aritmetica,topic_combinatoria,method_ricorsione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri rimasti dopo cancellazioni iterate (1997 cancellato)*

> /umeri cancellati   
> I numeri interi da 1 a 2011 inclusi sono scritti nell’ordine: 1, 2, … , 2011. Vengono poi cancellati, 
> nell’ordine, il secondo, il quarto, il sesto e così via. Quindi, dei numeri rimasti, vengono cancellati 
> nell’ordine, il terzo, il sesto, il nono e così via. Dei numeri rimasti, vengono ora cancellati 
> nell’ordine il quarto, l’ottavo, il dodicesimo e così via. Si prosegue con questo criterio, sempre 
> aumentando di un’unità, sui numeri rimasti, il passo di cancellazione. È stato appena cancellato il 
> numero 1997: quanti numeri rimangono scritti?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 673
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*Numbers remaining after repeated deletions (1997 deleted)*

> /deleted numbers
> The integers from 1 to 2011 inclusive are written in order: 1, 2, …, 2011. Then, in order, the second, the fourth, the sixth, and so on are crossed out. Next, from the numbers that remain, the third, the sixth, the ninth, and so on are crossed out in order. From the numbers that remain, the fourth, the eighth, the twelfth, and so on are now crossed out in order. This rule is continued, with the deletion step always increasing by one, applied to the numbers that remain. The number 1997 has just been crossed out: how many numbers are still written?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_ricorsione|Recursion]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q14|src_kangourou_2011_squadre_semifinale__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_logica,topic_insiemi_funzioni,method_inclusione_esclusione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero libri di Elisabetta (romanzo,poesia,scienza)*

> I  libri di Elisabetta  
> Ad Elisabetta piace leggere, per cui al suo compleanno le sono stati regalati dei libri. I generi dei 
> libri che ha ricevuto sono: romanzo, poesia, scienza. 3 dei libri non sono romanzi, 4 non sono libri 
> di poesia, 5 non sono libri scientifici. Quanti libri ha ricevuto in regalo Elisabetta?                   
> 
>  
> Kangourou  della  Matematica  2011 
> Coppa  a  squadre  Kangourou   
> Semifinale  turno  A 
> Cervia,  7 maggio 2011  
>                            
>                        
>     Quesiti e soluzioni

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 6
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)


<div class="qlang-split" data-lang="en"></div>


*Number of books by Elisabetta (novel, poetry, science)*

> Elisabetta's books
> Elisabetta likes reading, so she was given some books for her birthday. The genres of the books she received are: novel, poetry, and science. Three of the books are not novels, four are not poetry books, and five are not science books. How many books did Elisabetta receive as a gift?
>
>
> Kangaroo Mathematics Competition 2011 Team Cup Kangaroo Semifinal Round A Cervia, 7 May 2011
>
>
> Questions and Solutions

**Topic:** [[topic_logica|Logic, games and strategies]], [[topic_insiemi_funzioni|Sets and functions]]
**Metodo:** [[method_inclusione_esclusione|Inclusion–exclusion]]
**Abilita:** [[skill_lettura_attenta|Careful reading]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]

[[Quesiti/src_kangourou_2011_squadre_semifinale#q15|src_kangourou_2011_squadre_semifinale__Q15]]
