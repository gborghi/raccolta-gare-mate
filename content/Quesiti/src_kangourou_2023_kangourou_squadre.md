---
title: Kangourou Squadre 2023 Kangourou Finale 1
tipo: gara
competition: Kangourou Squadre 2023 Kangourou Finale 1
family: kangourou
year: '2023'
level: squadre
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2023_kangourou_squadre"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,topic_insiemi_funzioni,method_inclusione_esclusione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Persone con tre caramelle stesso gusto*

> Le caramelle 
> In un certo gruppo di persone, ciascuno ha tre caramelle che possono essere esclusivamente al limone 
> o all’arancia. 90 persone hanno almeno due caramelle al limone, 45 hanno almeno due caramelle 
> all’arancia, 34 hanno due caramelle di gusto diverso. Quante persone hanno tre caramelle dello stesso 
> gusto?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0101
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*People with three candies of the same taste*

> Candies In a certain group of people, each person has three candies that can be exclusively lemon or orange. 90 people have at least two lemon candies, 45 have at least two orange candies, 34 have two candies of different taste. How many people have three candies of the same taste?

**Answer:** 0101
[[src_kangourou_2023_kangourou_squadre__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Segmento AE in trapezio isoscele con triangolo*

![[src_kangourou_2023_kangourou_squadre__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.025]
  \coordinate (A) at (0,0);
  \coordinate (B) at (220,0);
  \coordinate (C) at (200,60);
  \coordinate (D) at (20,60);
  \coordinate (E) at (70,0);
  \coordinate (F) at (120,60);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \fill[gray!30] (D) -- (E) -- (F) -- cycle;
  \draw (D) -- (E) -- (F) -- cycle;
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below] at (E) {$E$};
  \node[above] at (F) {$F$};
\end{tikzpicture}
\end{document}
```

> Il trapezio  
> Il trapezio ABCD in figura è isoscele; anche il triangolo DEF 
> ombreggiato è isoscele e la sua area è un quarto dell’area del 
> trapezio. La base maggiore e la base minore del trapezio ABCD 
> misurano rispettivamente 220 e 180 cm. Quanti centimetri misura 
> il segmento AE?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0070
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*Ae segment in isosceles trapezoid with triangle *

![[src_kangourou_2023_kangourou_squadre__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.025]
  \coordinate (A) at (0,0);
  \coordinate (B) at (220,0);
  \coordinate (C) at (200,60);
  \coordinate (D) at (20,60);
  \coordinate (E) at (70,0);
  \coordinate (F) at (120,60);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \fill[gray!30] (D) -- (E) -- (F) -- cycle;
  \draw (D) -- (E) -- (F) -- cycle;
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below] at (E) {$E$};
  \node[above] at (F) {$F$};
\end{tikzpicture}
\end{document}
```

> The ABCD trapezoid in the figure is isosceles; the shaded DEF triangle is also isosceles and its area is one quarter of the trapezoid area. The greater base and the lesser base of the ABCD trapezoid measure 220 and 180 cm respectively. How many centimeters is the AE segment?

**Answer:** 0070
[[src_kangourou_2023_kangourou_squadre__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_algebra,topic_aritmetica,method_disuguaglianze,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo iscritti al campo estivo, quota agevolata*

> Il campo estivo 
> Marco e suo fratello si sono iscritti a un campo estivo. Il costo settimanale dell’iscrizione di un 
> ragazzo a tale campo è di 60 euro, ma se una famiglia iscrive più di un figlio ha diritto alla quota 
> agevolata di 54 euro per ogni figlio dal secondo in poi. Per le iscrizioni alla prima settimana sono 
> stati raccolti 3.000 euro e più della metà degli iscritti sono figli unici. Qual è al minimo il numero 
> degli iscritti?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0051
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum summer camp entries, allowance*

> The summer camp Marco and his brother enrolled in a summer camp. The weekly cost of enrolling a child in this camp is €60, but if a family enrolls more than one child, they are entitled to the reduced allowance of €54 per child from the second. The first week's enrollment has raised €3,000 and more than half of those enrolled are single children. What is the minimum number of applicants?

**Answer:** 0051
[[src_kangourou_2023_kangourou_squadre__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza pista circolare due corridori*

> La pista circolare 
> Paolo e Gino si allenano alla corsa lungo una pista circolare. Partono da uno stesso punto, ma corrono 
> in versi opposti, ciascuno alla propria velocità mantenuta costante. Quando si incontrano per la prima 
> volta, Paolo ha percorso 100 metri dalla partenza; quando si incontrano per la seconda, Gino ha 
> percorso 150 metri dal punto del primo incontro. Quanti metri è lunga la pista?

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0250
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*Length of two runners circular track*

> Circular track Paul and Gino train to run along a circular track. They start at the same point, but run in opposite directions, each at its own constant speed. When they meet for the first time, Paul has traveled 100 meters from the start; when they meet for the second time, Gino has traveled 150 meters from the first meeting point. How long is the runway?

**Answer:** 0250
[[src_kangourou_2023_kangourou_squadre__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Inserimenti SUDOKU griglia 2x3 con vincolo U*

> SUDOKU 
> Le sei lettere della parola SUDOKU vanno inserite nelle sei celle di una griglia 2 × 3 in modo che 
> nessuna riga e nessuna colonna ospiti entrambe le lettere U. Quanti diversi inserimenti sono possibili?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0144
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*Insertions SUDOKU 2x3 grid with U-link *

> SUDOKU The six letters of the word SUDOKU must be inserted into the six cells of a grid 2 × 3 so that no row and no column host both letters U. How many different insertions are possible?

**Answer:** 0144
[[src_kangourou_2023_kangourou_squadre__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_algebra,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Frequentatori palestra date condizioni gruppi*

> In palestra 
> I frequentatori di una palestra sono ripartiti in gruppi tutti ugualmente numerosi, ciascuno seguito da 
> un istruttore. Assumendo 10 istruttori in più, ogni gruppo potrebbe ridursi di 5 unità; assumendone 
> invece 20 in più, ogni gruppo potrebbe ridursi di 8 unità. Quanti sono i frequentatori della palestra?  
>  
>  
> A 
> B 
> D 
> C 
> F 
> E

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0600
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*Frequents of fitness conditions groups*

> In a gym, the attendees of a gym are divided into groups of equal number, each followed by an instructor. By hiring 10 more instructors, each group could be reduced by 5 units; instead, by hiring 20 more, each group could be reduced by 8 units. How many people are in the gym?
>  
>  
> A B D C F E

**Answer:** 0600
[[src_kangourou_2023_kangourou_squadre__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area quadrato originale da porzione bianca*

![[src_kangourou_2023_kangourou_squadre__prob7.png]]

> L’area del quadrato 
> Un quadrato è scomposto in sei figure piane come mostrato in figura. Quelle 
> in bianco sono due triangoli rettangoli isosceli, un quadrato e un 
> parallelogramma; una delle due in nero è un triangolo rettangolo isoscele, 
> l’altra (che ha in comune un solo punto con la precedente) è scomponibile in 
> due triangoli rettangoli isosceli. L’area della porzione del quadrato rimasta 
> bianca è 99 cm2. Di quanti centimetri quadrati è l’area del quadrato 
> originario?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0176
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*Original square area of white portion*

![[src_kangourou_2023_kangourou_squadre__prob7.png]]

> The area of the square A square is divided into six flat figures as shown in the figure. Those in white are two isosceles rectangular triangles, a square and a parallelogram; one of the two in black is an isosceles rectangle triangle, the other (which has only one point in common with the previous one) is divisible into two isosceles rectangles. The area of the portion of the square remaining white is 99 cm2. How many square centimetres is the area of the original square?

**Answer:** 0176
[[src_kangourou_2023_kangourou_squadre__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,topic_insiemi_funzioni,method_inclusione_esclusione,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo studenti corretti tre domande*

> Le tre domande 
> A un certo numero di studenti sono state rivolte le stesse tre domande. 1260 di essi hanno risposto 
> correttamente alla prima domanda: rappresentano esattamente il 70% del totale. La percentuale degli 
> studenti che hanno risposto correttamente alla seconda è il 79%, la percentuale degli studenti che 
> hanno risposto correttamente alla terza è il 53%. Gli studenti che hanno risposto correttamente a tutte 
> le tre domande sono il minimo compatibile con queste percentuali. Quanti sono?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0036
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum students correct three questions*

> The three questions A number of students were asked the same three questions. 1260 of them answered the first question correctly, representing exactly 70% of the total. The percentage of students who answered correctly to the second is 79%, the percentage of students who answered correctly to the third is 53%. The students who answered all three questions correctly are the least compatible with these percentages. How many are there?

**Answer:** 0036
[[src_kangourou_2023_kangourou_squadre__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma angoli a+b+c+d in figura*

![[src_kangourou_2023_kangourou_squadre__prob9.png]]

> La somma degli angoli 
> Quanto vale a + b + c + d, dove a, b, c, d sono le misure 
> in gradi degli angoli indicati in figura?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0540
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*sum of angles a+b+c+d in figure*

![[src_kangourou_2023_kangourou_squadre__prob9.png]]

> The sum of the angles What is a + b + c + d, where a, b, c, d are the degree measurements of the angles shown in the figure?

**Answer:** 0540
[[src_kangourou_2023_kangourou_squadre__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_algebra,topic_aritmetica,method_estremalita,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma min e max dell'espressione AB0/(A+B)*

> La frazione 
> Sia AB0 il generico numero intero positivo di tre cifre (A ≠ 0), la cui cifra delle unità sia zero. Quanto 
> vale la somma del più piccolo e del più grande fra i valori che l’espressione 
> 𝐴𝐵0
> 𝐴+𝐵  può assumere?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0119
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*sum min and max of the expression AB0/(A+B) *

> The fraction Be AB0 the generic positive three-digit integer (A ≠ 0), the unit number of which is zero. What is the sum of the smallest and largest of the values that AB0 A+B can assume?

**Answer:** 0119
[[src_kangourou_2023_kangourou_squadre__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area KLM in triangolo equilatero ABC*

![[src_kangourou_2023_kangourou_squadre__prob11.png]]

> Due triangoli equilateri 
> All’interno del triangolo equilatero ABC in figura è stato ottenuto il triangolo 
> KLM che ha ogni lato perpendicolare ad uno dei lati di ABC. L’area di ABC è 
> 150. Quanto vale l’area di KLM?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0050
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*KLM area in equilateral triangle ABC*

![[src_kangourou_2023_kangourou_squadre__prob11.png]]

> Two equilateral triangles Within the equilateral triangle ABC in the figure the KLM triangle has each side perpendicular to one of the sides of ABC. The area of ABC is 150. How much is the KLM area worth?

**Answer:** 0050
[[src_kangourou_2023_kangourou_squadre__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_algebra,topic_logica,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo di 100 numeri in cerchio, media adiacenti*

> Cento numeri in cerchio 
> Su una circonferenza sono scritti 100 numeri, ognuno dei quali è la media aritmetica dei due che gli 
> sono adiacenti. Uno di essi è 2.023 e non ve ne sono di maggiori. Quanto vale il più piccolo?

**Topic:** [[topic_algebra|Algebra]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2023
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum of 100 numbers in a circle, adjacent mean*

> One hundred numbers in a circle On a circle are written 100 numbers, each of which is the arithmetic mean of the two adjacent to it. One of them is 2,023, and there are no more. How much is the smallest?

**Answer:** 2023
[[src_kangourou_2023_kangourou_squadre__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_aritmetica,method_inclusione_esclusione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*500-mo termine non quadrato né cubo perfetto*

> Il 500-esimo termine 
> Pensate di ordinare in successione crescente tutti i numeri interi positivi che non sono né quadrati 
> perfetti, né cubi perfetti. Qual è il 500-mo termine della successione?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0528
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*500-th term not square or perfect cube*

> The 500th term Think of ordering in increasing succession all positive integers that are neither perfect squares nor perfect cubes. What's the 500th anniversary of the succession?

**Answer:** 0528
[[src_kangourou_2023_kangourou_squadre__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Prodotto cifre di n con 3n=ABCDE1*

> Il triplo di n 
> Sia n un numero intero di sei cifre 1ABCDE. Se il numero 3 × n è ABCDE1, quanto vale il prodotto 
> delle cifre di n?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 2240
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*Product of n digits with 3n=ABCDE1*

> The triple of n Sia n is a six digit integer 1ABCDE. If the number 3 × n is ABCDE1, what is the product of the numbers of n?

**Answer:** 2240
[[src_kangourou_2023_kangourou_squadre__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*06*

> L’orologio 
> Un orologio tradizionale con le 12 ore e le lancette delle ore e dei minuti segna le 8 e 6 minuti. Quanti 
> gradi misura il minore degli angoli tra le due lancette? 
> a 
> b 
> c 
> d 
> 
>  
> Quesiti e soluzioni

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0153
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<span class="qlang-split" data-lang="en"></span>


*06*

> The clock A traditional clock with 12 hours and the hours and minutes mark 8 and 6 minutes. How many degrees does the least angle between the two hands measure? a b c d
> 
>  
> Questions and solutions

**Answer:** 0153
[[src_kangourou_2023_kangourou_squadre__Q15]]
