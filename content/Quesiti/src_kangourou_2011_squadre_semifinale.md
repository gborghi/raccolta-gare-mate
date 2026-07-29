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


<span class="qlang-split" data-lang="en"></span>


Now in San Francisco on arrival from London.

> A long journey When I'm in London, it's five o'clock in the afternoon, Francisco is 9:00 (the same day). A direct flight to London  S. Francisco lasts 12 and a half hours. A plane leaves London at 1:05 p.m. for a direct flight. Francisco, when's the plane coming? (Write the four digits of the hour without the dot, e.g. 1011 to 10.11.)

**Answer:** 1735
[[src_kangourou_2011_squadre_semifinale__Q01]]



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


<span class="qlang-split" data-lang="en"></span>


*N value with error map scale and price +6%*

> What a mistake! Alfredo, a very careless gardener, is assigned to cover with grass a plot of land on which he has a scale map: n. He calculates the area of his image on the map, multiplies it by n and buys the grass plots that allow him to cover a plot of area equal to the result, spending 14 euros. Once on the spot, he naturally realizes that he needs many more pieces of grass: he goes to buy them, but in the meantime the price has gone up by 6% and he spends 42 euros more than he would have spent if he had bought them together with the first ones. How much is n?

**Answer:** 51
[[src_kangourou_2011_squadre_semifinale__Q02]]



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


<span class="qlang-split" data-lang="en"></span>


*Measures angle X with three squares in the rectangle*

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

> Three squares Within a rectangle three squares are arranged as shown in the figure. Some of the angles formed by the various sides present are measured in degrees (the figure is purely indicative, it does not correspond exactly to the measurements declared). What is the value of the measurement in degrees given by X?

**Answer:** 41
[[src_kangourou_2011_squadre_semifinale__Q03]]



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


<span class="qlang-split" data-lang="en"></span>


% of problems solved by Gigi*

> Carlo and Gigi were assigned some math problems as vacation assignments. The number of problems assigned to Carlo is four times the number of problems assigned to Gigi. When they meet again after the holidays, they find that they have solved the same number of problems, but the percentage of problems Carlo solved is equal to the percentage of problems Gigi did not solve. What's the percentage of problems Gigi solved?

**Answer:** 80
[[src_kangourou_2011_squadre_semifinale__Q04]]



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


<span class="qlang-split" data-lang="en"></span>


*Civil number of cousin (left side odd) *

> My cousin and I live in the street where my cousin and I live. There are 17 houses. The houses on the left side are numbered using progressively all odd numbers from 1 onwards, those on the right side are numbered using progressively all even numbers from 2 onwards. My house is the last one on the right and it has the number 12, my cousin's house is the last one on the left. What's my cousin's civilian number?

**Answer:** 21
[[src_kangourou_2011_squadre_semifinale__Q05]]



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


<span class="qlang-split" data-lang="en"></span>


*Maximum cubes seen simultaneously in the cube 11x11x11*

> Look at the cube A cube of 11 cm on the side is obtained by approaching cubes of 1 cm on the side. What is the maximum number of these cubes that can be seen simultaneously by a single person?

**Answer:** 331
[[src_kangourou_2011_squadre_semifinale__Q06]]



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


<span class="qlang-split" data-lang="en"></span>


*Total numbers are 20 times the sum of the digits *

> How many positive integers, written in decimal notation, are 20 times the sum of their digits? (Write [9999] if you believe there are infinitesimal.)

**Answer:** 1
[[src_kangourou_2011_squadre_semifinale__Q07]]



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


<span class="qlang-split" data-lang="en"></span>


This is the total value of the assets under management of the institution.

> How many addons! What 's the sum of 5 + 10 + 15 + ... + 295 + 300 ?

**Answer:** 9150
[[src_kangourou_2011_squadre_semifinale__Q08]]



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


<span class="qlang-split" data-lang="en"></span>


*Total figures for the number of articles of the Treaty*

> A long treaty A treaty consists of four parts. His articles are numbered in the first part from 1.1 to 1.59, the second from 2.1 to 2.54, the third from 3.1 to 3.342, and the fourth from 4.1 to 4.10. How many digits in total were written to count all these articles?

**Answer:** 1602
[[src_kangourou_2011_squadre_semifinale__Q09]]



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


<span class="qlang-split" data-lang="en"></span>


*Number in place 2009 in two successions together*

> Two progressions Consider the sets of positive integers A ={0, 3, 6, 9, ...} (arithmetic progression of reason 3 starting from 0) and B = {0, 13, 26, 39, ...} (arithmetic progression of reason 13 starting from 0). Consider now the set A ∪ B and arrange its elements in ascending order (i.e. A ∪ B = {0, 3, 6, 9, 12, 13, 15, ...}. What number occupies the 2009 position in A ∪ B?

**Answer:** 5220
[[src_kangourou_2011_squadre_semifinale__Q10]]



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


<span class="qlang-split" data-lang="en"></span>


*Maximum number of integers of 10 digits (one non-integer) *

> Whole results are assigned 10 positive numbers. The only information we have about them is that at least one of them is not complete. If they are added to pairs in all possible ways (i.e. two different ones are chosen from each other in all possible ways and are added together) what is the maximum number of whole results all different from each other that can be achieved?

**Answer:** 45
[[src_kangourou_2011_squadre_semifinale__Q11]]



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


<span class="qlang-split" data-lang="en"></span>


*Now meeting cyclist and podium runner (60 km) *

> The cyclist and the podium runner Stephen's house is 60 km from Andrea's. Every Saturday Stefano, a keen cyclist, goes to see Andrea on his bike, leaving at noon, cycling at a steady pace and taking two hours. Today, however, Andrew, who is a good walker, has no time to wait for him. So he decides to go on foot to meet him, leaving at noon. Andrea's speed is also constant and it's 6 km/h. What time will they meet? (Write the time using the digits of a digital clock with no other signs, for example write 1539 to indicate 3 and 39 p.m.)

**Answer:** 1340
[[src_kangourou_2011_squadre_semifinale__Q12]]



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


<span class="qlang-split" data-lang="en"></span>


*Total matches with 20% teams without wins*

> The Tournament In a fly-ball tournament (where matches cannot end in a draw), each team has played each other twice (way and back) against each other. Twenty percent of the teams haven't won a game. How many games were played in total in that tournament?

**Answer:** 20
[[src_kangourou_2011_squadre_semifinale__Q13]]



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


<span class="qlang-split" data-lang="en"></span>


*Numbers remaining after repeated deletions (1997 deleted) *

> /deleted numbers The integers from 1 to 2011 included are written in the order: 1, 2, ... , 2011. They are then deleted, in order, the second, fourth, sixth and so on. Then, of the remaining numbers, they are deleted in the order, the third, the sixth, the ninth and so on. Of the remaining numbers, the fourth, eighth, twelfth and so on are now deleted. This criterion continues, increasing the deletion step by one unit over the remaining numbers. The 1997 issue has just been deleted: how many numbers are still written?

**Answer:** 673
[[src_kangourou_2011_squadre_semifinale__Q14]]



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


<span class="qlang-split" data-lang="en"></span>


*Number of books by Elizabeth (novel, poetry, science) *

> Elisabeth's books She likes to read, so on her birthday she was given books. The genres of books she received were: novel, poetry, science. Three of the books are not novels, four are not books of poetry, five are not science books. How many books did Elizabeth receive as a gift?
> 
>  
> Kangourou of Mathematics 2011 Kangourou Team Cup Semifinal round at Cervia, 7 May 2011
>                            
>                        
> Questions and solutions

**Answer:** 6
[[src_kangourou_2011_squadre_semifinale__Q15]]
