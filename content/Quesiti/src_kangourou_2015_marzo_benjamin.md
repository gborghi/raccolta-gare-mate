---
title: Kangourou 2015 gara 19 marzo Benjamin
tipo: gara
competition: Kangourou 2015 gara 19 marzo Benjamin
family: kangourou
year: '2015'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2015_marzo_benjamin"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*In quale figura l’area ombreggiata e meta del totale*

![[src_kangourou_2015_marzo_benjamin__prob1.png]]

> In quale delle figure seguenti l’area della parte ombreggiata è metà dell’area totale?
>          A)		
>          B)		
>          C)		
>           D)	
>         E)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*In which the shaded area and the target of the total* appear

![[src_kangourou_2015_marzo_benjamin__prob1.png]]

> In which of the following figures is the area of the shaded part half the total area? A) B) C) D) E)

**Answer:** B
[[src_kangourou_2015_marzo_benjamin__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_logica,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*quale non e il mio*

![[src_kangourou_2015_marzo_benjamin__prob2.png]]

> Guardando il mio ombrello dall’alto, come mostrato  nella figu­
> ra a fianco, si legge la parola KANGAROO.
> Quale dei disegni nelle risposte mostra un ombrello che certamen­
> te non è il mio?   
>         A)	 	
>        B)	 	
>        C)	 	
>        D)	 	
>        E)

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*which is not my *

![[src_kangourou_2015_marzo_benjamin__prob2.png]]

> Looking at my umbrella from above, as shown in the accompanying figure, you read the word KANGAROO. Which of the drawings in the answers shows an umbrella that is certainly not mine? A) B) C) D) E)

**Answer:** C
[[src_kangourou_2015_marzo_benjamin__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,method_colorazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Min quadratini da riverniciare (no adiacenti uguali)*

![[src_kangourou_2015_marzo_benjamin__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\cell#1#2#3{
    \fill[#3] (#1,#2) rectangle (#1+1,#2+1);
    \draw (#1,#2) rectangle (#1+1,#2+1);
  }
  \cell{0}{0}{white}
  \cell{1}{0}{black}
  \cell{2}{0}{black}
  \cell{0}{1}{gray!50}
  \cell{1}{1}{black}
  \cell{2}{1}{white}
  \cell{0}{2}{white}
  \cell{1}{2}{gray!50}
  \cell{2}{2}{gray!50}
\end{tikzpicture}
\end{document}
```

> Samuele ha dipinto i nove quadratini in cui è suddiviso il qua­
> drato grande con vernice bianca, grigia e nera come vedi in figura. 
> Ha poi deciso di ridipingerne alcuni in modo che due quadratini 
> verniciati allo stesso modo non abbiano lati in comune. Qual è il 
> numero minimo di quadratini che gli basta riverniciare?
> A) 2          B) 3            C) 4           D) 5               E) 6

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*Min squares to be repainted (not adjacent to each other) *

![[src_kangourou_2015_marzo_benjamin__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\cell#1#2#3{
    \fill[#3] (#1,#2) rectangle (#1+1,#2+1);
    \draw (#1,#2) rectangle (#1+1,#2+1);
  }
  \cell{0}{0}{white}
  \cell{1}{0}{black}
  \cell{2}{0}{black}
  \cell{0}{1}{gray!50}
  \cell{1}{1}{black}
  \cell{2}{1}{white}
  \cell{0}{2}{white}
  \cell{1}{2}{gray!50}
  \cell{2}{2}{gray!50}
\end{tikzpicture}
\end{document}
```

> Samuel painted the nine squares into which the large square is divided by white, gray and black paint as you can see in the picture. He then decided to repaint some of them so that two squares painted the same way do not have sides in common. What's the minimum number of squares he can repaint? A) 2          B) 3            C) 4           D) 5               E) 6

**Answer:** A
[[src_kangourou_2015_marzo_benjamin__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*10 galline, uova in 10 giorni*

> In un pollaio ci sono dieci galline. Cinque di esse fanno, ciascuna, un uovo al giorno 
> mentre ciascuna delle altre fa un uovo a giorni alterni. Quante uova fanno complessi­
> vamente le galline in un periodo di 10 giorni?
> A) 75	
> 	
> B) 60	
> 	
> C) 50	
> 	
> D) 25	
> 	
> E) 10

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*10 chickens, eggs in 10 days*

> There are ten chickens in a chicken coop. Five of them each lay one egg a day while the others each lay one egg on alternate days. How many eggs do chickens make in a 10-day period? A) 75
> 	
> B) 60
> 	
> C) 50
> 	
> D) 25
> 	
> E) 10

**Answer:** A
[[src_kangourou_2015_marzo_benjamin__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,skill_stima"></span>

<div class="qlang-switch" data-default="it"></div>


*Quale frazione fornisce numero piu piccolo di 2*

> Quale delle frazioni seguenti fornisce un numero più piccolo di 2 ?
> A) 19/8	 	
> B) 20/9	 	
> C) 21/10	
> D) 22/11	
> E) 23/12
> R
> A
> G
> N
> A
> K
> O
> O
> 

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_stima|Stima e approssimazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*Which fraction gives a number smaller than 2*

> Which of the following fractions gives a number smaller than 2 ? A) 19/8 B) 20/9 C) 21/10 D) 22/11 E) 23/12 R A G N A K O O
>

**Answer:** E
[[src_kangourou_2015_marzo_benjamin__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza della linea evidenziata (quadratini 4 cm2)*

![[src_kangourou_2015_marzo_benjamin__prob6.png]]

> L’area di ciascuno dei quadratini con cui è composta la figura 
> misura 4 cm2. Qual è a lunghezza della linea evidenziata nella 
> figura?
> A) 16 cm	
> 	
> B) 18 cm	
> 	
> C) 20 cm 
> D) 21 cm	
> 	
> E) 23 cm

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*Length of the highlighted line (4 cm2 squares) *

![[src_kangourou_2015_marzo_benjamin__prob6.png]]

> The area of each of the squares composed of the figure is 4 cm2. What is the length of the line highlighted in the figure? A) 16 cm
> 	
> B) 18 cm
> 	
> C) 20 cm D) 21 cm
> 	
> E) 23 cm

**Answer:** B
[[src_kangourou_2015_marzo_benjamin__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_algebra,method_fattorizzazione,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanto pesa Dita (bilance)*

![[src_kangourou_2015_marzo_benjamin__prob7.png]]

> Osserva le figure: quanto pesa Dita?
> A) 2 kg	 	
> B) 3 kg	 	
> C) 4 kg	 	
> D) 5 kg	 	
> E) 6 kg

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** D
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*Weight of thumb (balance sheet) *

![[src_kangourou_2015_marzo_benjamin__prob7.png]]

> Look at the figures: how much does Dita weigh? A) 2 kg B) 3 kg C) 4 kg D) 5 kg E) 6 kg

**Answer:** D
[[src_kangourou_2015_marzo_benjamin__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_logica,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quale immagine non compare mai nella lente*

![[src_kangourou_2015_marzo_benjamin__prob8.png]]

> Con una lente di ingrandimento Pietro esamina pezzo per pez­
> zo questo disegno. Quale delle seguenti immagini non compare 
> mai nella lente?
>         A)	 	
>         B)	 	
>        C)	 	
>        D)	 	
>       E)

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*Which image never appears in the lens*

![[src_kangourou_2015_marzo_benjamin__prob8.png]]

> With an enlargement lens, Peter examines this drawing piece by piece. Which of the following images never appears in the lens? A) B) C) D) E)

**Answer:** E
[[src_kangourou_2015_marzo_benjamin__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_algebra,method_fattorizzazione,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*quante piante*

> Nel giardino di Giovanni ci sono solo piante di due tipi: quelle di 
> un tipo hanno 5 foglie, le altre 2 foglie e 1 fiore. Giovanni ha scoperto 
> che ci sono in tutto 32 foglie e 6 fiori. Quante sono in tutto le piante?
> A) 10             B) 12            C) 13             D) 15                E) 16

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** A
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*how many plants*

> In John's garden there are only two types of plants: those of one type have 5 leaves, the other 2 leaves and 1 flower. Giovanni discovered that there are 32 leaves and 6 flowers in all. How many are all over the plants? A) 10             B) 12            C) 13             D) 15                E) 16

**Answer:** A
[[src_kangourou_2015_marzo_benjamin__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_aritmetica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*di quanto sovrapporre*

![[src_kangourou_2015_marzo_benjamin__prob10.png]]

> Sara ha 4 strisce di carta tutte della stessa lunghezza. Ne incolla insieme due 
> in modo che si sovrappongano per 10 cm ed ottiene un’unica striscia lunga 50 cm. 
> Adesso vuole incollare le altre 2 in modo che esse formino una striscia lunga 56 cm. 
> Di quanti centimetri deve farle sovrapporre? 
> A) 4 cm		
> B) 6 cm		
> C) 7 cm		
> D) 10 cm	
>      E) 12 cm 
> 10 cm
> 10 cm
> 50 cm
> 
> I quesiti dal N. 11 al N. 20 valgono 4 punti ciascuno

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** A
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


* of what is overlapping *

![[src_kangourou_2015_marzo_benjamin__prob10.png]]

> Sara has four strips of paper all the same length. He glues two of them together so that they overlap by 10 cm and gets a single strip 50 cm long. Now he wants to paste the other two together so that they form a 56 cm long strip. How many centimeters does he have to overlay them? A) 4 cm B) 6 cm C) 7 cm D) 10 cm E) 12 cm 10 cm 10 cm 50 cm
> 
> The questions from N. 11 al N. 20 is worth 4 points each.

**Answer:** A
[[src_kangourou_2015_marzo_benjamin__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_geometria_piana,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Perimetro figura con 6 quadrati*

![[src_kangourou_2015_marzo_benjamin__prob11.png]]

> Tommaso accosta 6 quadrati uguali, di lato 1 cm, per formare la 
> figura che vedi nel disegno. Quanti centimetri misura il perimetro 
> della figura costruita da Tommaso?   
> A) 9             B) 10               C) 11                D) 12              E) 13

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*Perimeter is shown in 6 squares*

![[src_kangourou_2015_marzo_benjamin__prob11.png]]

> Thomas approaches six equal squares, one centimeter on each side, to form the figure you see in the drawing. How many centimeters does the perimeter of the figure built by Thomas measure? A) 9             B) 10               C) 11                D) 12              E) 13

**Answer:** D
[[src_kangourou_2015_marzo_benjamin__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Massima somma cifre data gg/mm dell'anno*

> Ogni sera Maria scrive la data del giorno (senza l’anno) in cifre e poi calcola la 
> somma delle cifre scritte. Ad esempio il 19 marzo scrive 19/03 e calcola 
> 1 + 9 + 0 + 3 = 13. 
> Qual è il numero più grande che riesce a scrivere in questo modo durante l’anno?
> A) 7	
> 	
> B) 13	
> 	
> C) 14	
> 	
> D) 16	
> 	
> E) 20

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** E
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*Maximum number given g/mm for the year*

> Every evening Mary writes the date of the day (without the year) in numbers and then calculates the sum of the numbers written. For example, on March 19, write 19/03 and calculate 1 + 9 + 0 + 3 = 13. What is the largest number that can write this way during the year? A) 7
> 	
> B) 13
> 	
> C) 14
> 	
> D) 16
> 	
> E) 20

**Answer:** E
[[src_kangourou_2015_marzo_benjamin__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*AB*

![[src_kangourou_2015_marzo_benjamin__prob13.png]]

> Il rettangolo ABCD in figura è formato accostando 
> 4 rettangoli uguali. Se la lunghezza di  BC è 1 cm, 
> quanto è lungo AB ?
> A) 4 cm		
> B) 3 cm		
> C) 2 cm
> D) 1 cm		
> E) 0,5 cm

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*AB*

![[src_kangourou_2015_marzo_benjamin__prob13.png]]

> The ABCD rectangle in the figure is formed by approaching 4 equal rectangles. If the length of BC is 1 cm, how long is AB? A) 4 cm B) 3 cm C) 2 cm D) 1 cm E) 0,5 cm

**Answer:** C
[[src_kangourou_2015_marzo_benjamin__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_geometria_solida,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quale sagoma non forma una piramide*

![[src_kangourou_2015_marzo_benjamin__prob14.png]]

> Piegando opportunamente ciascuna di queste sagome di carta lungo i segmenti 
> tracciati all’interno di essa, in un solo caso non si riesce ad ottenere una piramide. 
> Quale?
>           A)		
>          B)		
>        C)	 	
>        D)	 	
>        E)

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*Which shape does not form a pyramid*

![[src_kangourou_2015_marzo_benjamin__prob14.png]]

> By folding each of these paper shapes along the segments drawn within it, in one case a pyramid cannot be obtained. What kind? A) B) C) D) E)

**Answer:** C
[[src_kangourou_2015_marzo_benjamin__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_combinatoria,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*min bottiglie*

> In Via del Salto ci sono solo 9 case, tutte su uno stesso lato della strada. In ogni 
> casa vive almeno una persona, e il numero totale delle persone che vivono in una 
> coppia di case adiacenti non supera mai 6. Un lattaio deve consegnare una bottiglia di 
> latte per ogni persona che abita in Via del Salto. Qual è il numero minimo di bottiglie 
> che deve mettere sul furgone per essere sicuro di averne abbastanza?
> A) 23	
> 	
> B) 25	
> 	
> C) 27	
> 	
> D) 28	
> 	
> E) 29

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*min bottles*

> There's only nine houses on Via del Salto, all on the same side of the road. At least one person lives in each house, and the total number of people living in a pair of adjacent houses never exceeds 6. A milkman must deliver one bottle of milk for every person living in Via del Salto. What's the minimum number of bottles you have to put on the truck to make sure you have enough? A) 23
> 	
> B) 25
> 	
> C) 27
> 	
> D) 28
> 	
> E) 29

**Answer:** E
[[src_kangourou_2015_marzo_benjamin__Q15]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_algebra,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma anni e eta di Lucia e mamma*

> Sia Lucia che la sua mamma sono nate in Gennaio. Oggi, 19 Marzo 2015, Lucia 
> somma l’anno di nascita della mamma con l’età della mamma e poi somma al risultato 
> il proprio anno di nascita e la propria età. Che numero ottiene? 
> A) 4028		
> B) 4029		
> C) 4030		
> D) 4031		
> E) 4032
> A
> B
> C
> D
> 1 cm
> 

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** C
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


Summary of age and age of Lucia and mother

> Both Lucia and her mother were born in January. Today, March 19, 2015, Lucia adds the year of her mother's birth to her mother's age and then adds her year of birth and her age to the result. What's your number? A) 4028 B) 4029 C) 4030 D) 4031 E) 4032 A B C D 1 cm
>

**Answer:** C
[[src_kangourou_2015_marzo_benjamin__Q16]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_aritmetica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*perimetro possibile*

> L’area di un rettangolo è 12 cm2 e le lunghezze (in cm) dei suoi lati sono numeri 
> interi. Quale, tra i valori seguenti, può essere la lunghezza del perimetro del rettan­
> golo? 
> A) 20 cm	
> B) 26 cm	
> C) 28 cm	
> D) 32 cm	
> E) 48 cm

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** B
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*perimeter possible*

> The area of a rectangle is 12 cm2 and the lengths (in cm) of its sides are integers. Which of the following values can be the length of the perimeter of the rectangle? A) 20 cm B) 26 cm C) 28 cm D) 32 cm E) 48 cm

**Answer:** B
[[src_kangourou_2015_marzo_benjamin__Q17]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_combinatoria,topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*colore x*

![[src_kangourou_2015_marzo_benjamin__prob18.png]]

> Si deve colorare ognuno dei 9 segmenti in figura 
> scegliendo tra i colori rosso, verde e blu e facendo in 
> modo che, in ciascun triangolo, i 3 lati abbiano colori 
> diversi. Come vedi, in figura sono già stati assegnati 
> i colori a tre segmenti. Di che colore può essere il 
> segmento segnato con x ? 
> A) Solo blu.	
> B) Solo verde.	
> C) Solo rosso.	
> D) Ogni colore va bene.         
> E) Nessun colore va bene.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*color x*

![[src_kangourou_2015_marzo_benjamin__prob18.png]]

> Each of the nine segments in the figure must be coloured by choosing between the colours red, green and blue and making sure that, in each triangle, the three sides have different colours. As you can see, three segments have already been assigned colours in the figure. What color can the segment marked with x be ? A) Only blue. B) Only green. C) Only red. D) Any color is fine. E) No color is right.

**Answer:** C
[[src_kangourou_2015_marzo_benjamin__Q18]]



<span class="atom-split" id="q19" data-atom="q19" data-title="Quesito 19" data-tags="topic_combinatoria,method_cassetti,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*quanti frutti per mela e pera stesso colore*

> In una stanza completamente buia, Simona prende a caso della frutta da un cesto 
> che contiene 3 mele verdi, 5 mele gialle, 7 pere verdi e 2 pere gialle. Quanti frutti deve 
> prendere Simona per essere sicura di avere almeno una mela e una pera dello stesso 
> colore?  
> A) 9	
> 	
> B) 10	
> 	
> C) 11	
> 	
> D) 12	
> 	
> E) 13

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_cassetti|Principio dei cassetti]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*how many fruits per apple and pear of the same colour*

> In a completely dark room, Simona randomly picks up the fruit from a basket containing 3 green apples, 5 yellow apples, 7 green pears and 2 yellow pears. How many fruits does Simona need to take to make sure she has at least an apple and a pear of the same color? A) 9
> 	
> B) 10
> 	
> C) 11
> 	
> D) 12
> 	
> E) 13

**Answer:** E
[[src_kangourou_2015_marzo_benjamin__Q19]]



<span class="atom-split" id="q20" data-atom="q20" data-title="Quesito 20" data-tags="topic_combinatoria,topic_logica,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*min mosse per raggiungere A*

![[src_kangourou_2015_marzo_benjamin__prob20.png]]

> In una nuova versione del gioco degli scacchi esi­
> ste anche un pezzo chiamato “Kang”. Le mosse che 
> “Kang” può fare sono solo due: spostarsi di 3 caselle in 
> verticale e di una 1 in orizzontale, oppure di 3 caselle 
> in orizzontale e di una 1 in verticale, come mostrato in 
> figura. Qual è il numero minimo di mosse che permette 
> a “Kang” di passare dalla casella attuale a quella indi­
> cata con A?
> A) 2	
> 	
> B) 3	
> 	
> C) 4	
> 	
> D) 5	
> 	
> E) 6 
> I quesiti dal N. 21 al N. 30 valgono 5 punti ciascuno

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*min moves to A*

![[src_kangourou_2015_marzo_benjamin__prob20.png]]

> In a new version of the game of chess there is also a piece called Kang. The moves that Kang can make are only two: move 3 boxes vertically and 1 horizontally, or 3 boxes horizontally and 1 vertically, as shown in the figure. What is the minimum number of moves that will allow Kang to move from the current box to the one with A? A) 2
> 	
> B) 3
> 	
> C) 4
> 	
> D) 5
> 	
> E) 6 Questions from N. 21 al N. 30 is worth 5 points each.

**Answer:** B
[[src_kangourou_2015_marzo_benjamin__Q20]]



<span class="atom-split" id="q21" data-atom="q21" data-title="Quesito 21" data-tags="topic_aritmetica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*cifra X*

> Nella somma qui indicata, lettere uguali rappresentano la stessa cifra, 
> e lettere diverse cifre diverse. 
> Quale cifra è rappresentata dalla lettera X ?
> A) 2	
>   B) 3	
>      C) 4	         D) 5          E) 6

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** E
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*number X *

> In the sum shown here, the same letters represent the same number, and different letters represent different numbers. What number is represented by the letter X ? A) 2 B) 3 C) 4	         D) 5          E) 6

**Answer:** E
[[src_kangourou_2015_marzo_benjamin__Q21]]



<span class="atom-split" id="q22" data-atom="q22" data-title="Quesito 22" data-tags="topic_algebra,method_backward,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*quanto speso*

> Giovanna ha comprato 3 giocattoli. Per il primo ha pagato 1 euro più della metà 
> dei soldi che aveva. Aggiungendo 2 euro a metà dei soldi che le erano rimasti ha com­
> prato il secondo giocattolo e aggiungendo 3 euro alla metà di quello che le era rimasto 
> dopo aver acquistato i primi due giocattoli ha comprato il terzo. In questo modo ha 
> speso tutti i soldi che aveva.  Quanti euro ha speso in tutto?
> A) 34	
> 	
> B) 36	
> 	
> C) 45	
> 	
> D) 65	
> 	
> E) 100
> rosso
> rosso
> blu
> x
> A
> X
> +            X
> +       Y   Y
> -------------
> Z   Z   Z
> 

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** A
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*how much *

> Joan bought three toys. For the first one, he paid a euro more than half of what he had. She bought the second toy by adding 2 euros to half of her remaining money and by adding 3 euros to half of what she had left after buying the first two toys she bought the third. That's how he spent all his money. How many euros did you spend on everything? A) 34
> 	
> B) 36
> 	
> C) 45
> 	
> D) 65
> 	
> E) 100 red red blue x A X + X + Y Y ------------- Z Z Z
>

**Answer:** A
[[src_kangourou_2015_marzo_benjamin__Q22]]



<span class="atom-split" id="q23" data-atom="q23" data-title="Quesito 23" data-tags="topic_geometria_solida,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*quale eliminare*

![[src_kangourou_2015_marzo_benjamin__prob23.png]]

> Voglio rivestire di carta una scatola a forma di 
> cubo, senza sovrapposizioni. Per questo ho disegnato 
> su un foglio di carta e ritagliato la figura che vedi qui 
> a fianco (composta da quadrati tutti uguali tra loro e 
> uguali alle facce della scatola), che poi piegherò lungo 
> ciascun lato comune a due quadrati. Per errore, però, 
> ho disegnato 7 quadrati invece di 6. Devo quindi eli­
> minarne uno, ma voglio che il foglio di carta non si spezzi in due e in particolare che 
> non ci sia alcun quadrato unito solo per un vertice ad un altro. Quale quadrato posso 
> eliminare? 
> A) Solo il 4.	
> B) Solo il 7.	
> C)  Solo il 3 o il 4.	
> D) Solo il 3 o il 7.
> E) Il 3, il 4 o il 7.

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*which should be deleted*

![[src_kangourou_2015_marzo_benjamin__prob23.png]]

> I want to cover a cube-shaped box with paper, no overlapping. So I drew on a piece of paper and cut out the figure you see here next to it (composed of squares all equal to each other and equal to the sides of the box), which I'll then fold along each side of the box into two squares. But by mistake, I drew 7 squares instead of 6. I must therefore remove one, but I want the paper not to break in two and in particular that there is no square connected only by one vertex to another. Which square can I delete? A) Only four. B) Only 7. C) Only 3 or 4. D) Only 3 or 7. E) Il 3, il 4 o il 7.

**Answer:** D
[[src_kangourou_2015_marzo_benjamin__Q23]]



<span class="atom-split" id="q24" data-atom="q24" data-title="Quesito 24" data-tags="topic_aritmetica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*numero scritto*

> Aster deve indovinare un numero intero scritto da Laura. Laura dice che non ricor­
> da bene come lo ha ottenuto: sa che è partita da 100, poi ha moltiplicato per 2 o per 3, 
> ha aggiunto 1 o 2 e infine ha diviso per 3 o per 4. Qual è il numero scritto da Laura?
> A) 50	
> 	
> B) 51	
> 	
> C) 67	
> 	
> D) 68
> E) Le informazioni non sono sufficienti per determinarlo.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** C
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*written number*

> Aster must guess a whole number written by Laura. Laura says she doesn't remember how she got it: she knows she started from 100, then multiplied by 2 or by 3, added 1 or 2 and finally divided by 3 or by 4. What's the number Laura wrote? A) 50
> 	
> B) 51
> 	
> C) 67
> 	
> D) 68 E) The information is not sufficient to determine this.

**Answer:** C
[[src_kangourou_2015_marzo_benjamin__Q24]]



<span class="atom-split" id="q25" data-atom="q25" data-title="Quesito 25" data-tags="topic_aritmetica,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*max BD-AC*

> ABCD è un numero di 4 cifre; le cifre A, B, C e D sono in ordine crescente da 
> sinistra a destra. Considera i due numeri BD e AC: qual è il massimo valore possibile 
> della differenza BD - AC ?
> A) 86	
> 	
> B) 61	
> 	
> C) 56	
> 	
> D) 50	
> 	
> E) 16

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** B
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


This is the maximum BD-AC *

> ABCD is a 4-digit number; the digits A, B, C and D are in increasing order from left to right. Consider the two numbers BD and AC: what is the maximum possible value of the difference BD-AC ? A) 86
> 	
> B) 61
> 	
> C) 56
> 	
> D) 50
> 	
> E) 16

**Answer:** B
[[src_kangourou_2015_marzo_benjamin__Q25]]



<span class="atom-split" id="q26" data-atom="q26" data-title="Quesito 26" data-tags="topic_algebra,topic_geometria_solida,method_fattorizzazione,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*vertice F*

![[src_kangourou_2015_marzo_benjamin__prob26.png]]

> Maria scrive un numero su ogni faccia del cubo in figura. 
> Poi attribuisce ad ogni vertice del cubo la somma dei numeri 
> scritti sulle 3 facce che contengono quel vertice (ad esempio, 
> per il vertice B somma i numeri sulle facce BCDA, BAEF e 
> BFGC). I numeri che Maria ottiene per i vertici C, D ed E 
> sono rispettivamente 14, 16 e 24. Che numero ottiene per il 
> vertice F ?
> A) 15	
> 	
> B) 19	
> 	
> C) 22	
> 	
> D) 24	
> 	
> E) 26

**Topic:** [[topic_algebra|Algebra]], [[topic_geometria_solida|Geometria solida]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*top F *

![[src_kangourou_2015_marzo_benjamin__prob26.png]]

> Mary writes a number on each side of the cube in the figure. It then assigns to each vertex of the cube the sum of the numbers written on the 3 faces containing that vertex (e.g., for vertex B it sums the numbers on the faces BCDA, BAEF and BFGC). The numbers that Mary gets for the vertices C, D and E are 14, 16 and 24 respectively. What number do you get for the F-summit ? A) 15
> 	
> B) 19
> 	
> C) 22
> 	
> D) 24
> 	
> E) 26

**Answer:** C
[[src_kangourou_2015_marzo_benjamin__Q26]]



<span class="atom-split" id="q27" data-atom="q27" data-title="Quesito 27" data-tags="topic_aritmetica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Treno 12 carrozze, scompartimenti per carrozza*

> Un treno ha 12 carrozze, ciascuna divisa in uno stesso numero di scompartimenti. 
> Michele viaggia sulla terza carrozza, e, contando a partire dal primo dopo il locomoto­
> re, si trova nel 18-simo scompartimento. Sofia siede nella settima carrozza e, sempre 
> contando a partire dal locomotore, il suo scompartimento è il 50-simo.
> Quanti scompartimenti ci sono in ogni carrozza?  
> A) 9	
> 	
> B) 8	
> 	
> C) 7	
> 	
> D) 6	
> 	
> E) 12  
> 

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** B
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*Train 12 carriages, compartments for each carriage*

> A train has 12 carriages, each divided into the same number of compartments. Michele is travelling on the third carriage and, counting from the first after the locomotive, is in the 18th compartment. Sofia sits in the seventh carriage and, counting from the locomotive, her compartment is the 50th. How many compartments are there in each carriage? A) 9
> 	
> B) 8
> 	
> C) 7
> 	
> D) 6
> 	
> E) 12
>

**Answer:** B
[[src_kangourou_2015_marzo_benjamin__Q27]]



<span class="atom-split" id="q28" data-atom="q28" data-title="Quesito 28" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di mettere 3 canguri in 7 caselle non adiacenti*

![[src_kangourou_2015_marzo_benjamin__prob28.png]]

> In quanti modi diversi si possono mettere i tre canguri nelle 7 caselle, non più di 
> uno per casella, se non vogliamo avere 2 canguri in caselle adiacenti?
> A) 7	
> 	
> B) 8	
> 	
> C) 9	
> 	
> D) 10	
> 	
> E) 11

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*How to place 3 kangaroos in 7 boxes not adjacent*

![[src_kangourou_2015_marzo_benjamin__prob28.png]]

> How many different ways can you put the three kangaroos in seven boxes, no more than one per box, if you don't want to have two kangaroos in adjacent boxes? A) 7
> 	
> B) 8
> 	
> C) 9
> 	
> D) 10
> 	
> E) 11

**Answer:** D
[[src_kangourou_2015_marzo_benjamin__Q28]]



<span class="atom-split" id="q29" data-atom="q29" data-title="Quesito 29" data-tags="topic_combinatoria,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*quella mancante*

> Alberto ha segnato quattro punti distinti su una retta e ora, per ogni coppia di punti, 
> misura la loro distanza. Dei sei numeri diversi fra loro che ottiene, cinque sono (elen­
> cati in ordine crescente): 2, 3, 11, 12, 14. Quello mancante è minore di 14. Qual è? 
> A) 1	
> 	
> B) 5	
> 	
> C) 6	
> 	
> D) 9        
> E) Potrebbe essere 1 oppure 9.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


*the missing one*

> Alberto scored four distinct points on a straight line and now, for each pair of points, he measures their distance. Of the six different numbers he gets, five are (in increasing order): 2, 3, 11, 12, 14. The missing one is under 14. What is it? A) 1
> 	
> B) 5
> 	
> C) 6
> 	
> D) 9 E) It could be 1 or 9.

**Answer:** E
[[src_kangourou_2015_marzo_benjamin__Q29]]



<span class="atom-split" id="q30" data-atom="q30" data-title="Quesito 30" data-tags="topic_geometria_solida,method_conteggio,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*cubetti con rosso e blu*

> Brando ha usato dei cubetti di lato 1 cm per costruire un cubo di lato 4 cm. Ha 
> poi dipinto di rosso 3 facce del cubo grande e di blu le altre 3.  Quando ha finito, si è 
> accorto che nessuno dei cubetti piccoli aveva tre facce rosse. Quanti sono i cubetti che 
> hanno sia facce rosse sia facce blu?
> A) 0	
> 	
> B) 8	
> 	
> C) 12	
> 	
> D) 24	
> 	
> E) 32
> 
> STRINGA BENJAMIN 2015

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** D
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/1AiqamuCK6oQtEOLFArlQVHEyWohLlfzH/view)


<span class="qlang-split" data-lang="en"></span>


* cube with red and blue *

> Brando used 1cm side cubes to build a 4cm side cube. He then painted three faces of the large cube red and the other three blue. When he finished, he noticed that none of the little cubes had three red faces. How many cubes have both red and blue faces? A) 0
> 	
> B) 8
> 	
> C) 12
> 	
> D) 24
> 	
> E) 32
> 
> I'm going to take a look.

**Answer:** D
[[src_kangourou_2015_marzo_benjamin__Q30]]
