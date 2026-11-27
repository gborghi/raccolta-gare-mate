---
title: Kangourou Squadre 2023 Kangourou Finale 1
tipo: gara
competition: Kangourou Squadre 2023 Kangourou Finale 1
family: kangourou
year: '2023'
level: squadre
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2023_kangourou_squadre"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,topic_insiemi_funzioni,topic_algebra,method_inclusione_esclusione,skill_conteggio_sistematico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Persone con tre caramelle stesso gusto*

> Le caramelle 
> In un certo gruppo di persone, ciascuno ha tre caramelle che possono essere esclusivamente al limone 
> o all’arancia. 90 persone hanno almeno due caramelle al limone, 45 hanno almeno due caramelle 
> all’arancia, 34 hanno due caramelle di gusto diverso. Quante persone hanno tre caramelle dello stesso 
> gusto?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_algebra|Algebra]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Risposta:** 0101
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<div class="qlang-split" data-lang="en"></div>


*How many people have three sweets of the same flavour?*

> The sweets
>
> In a certain group of people, each has three sweets, which can only be lemon or orange. 90 people have at least two lemon sweets, 45 have at least two orange sweets, and 34 have two sweets of different flavour. How many people have three sweets of the same flavour?

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_insiemi_funzioni|Sets and functions]], [[topic_algebra|Algebra]]
**Metodo:** [[method_inclusione_esclusione|Inclusion–exclusion]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Answer:** 0101



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


<div class="qlang-split" data-lang="en"></div>


*How many centimetres long is the segment AE?*

![[src_kangourou_2023_kangourou_squadre__prob2.png]]

> The trapezium
>
> The trapezium ABCD in the picture is isosceles; the shaded triangle DEF is also isosceles and its area is a quarter of the area of the trapezium. The longer base and the shorter base of the trapezium ABCD measure 220 and 180 cm respectively. How many centimetres long is the segment AE?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Method:** [[method_simmetria|Using symmetry]]
**Skill:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]
**Answer:** 0070



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_algebra,topic_aritmetica,method_disuguaglianze,method_congruenze,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo iscritti al campo estivo, quota agevolata*

> Il campo estivo 
> Marco e suo fratello si sono iscritti a un campo estivo. Il costo settimanale dell’iscrizione di un 
> ragazzo a tale campo è di 60 euro, ma se una famiglia iscrive più di un figlio ha diritto alla quota 
> agevolata di 54 euro per ogni figlio dal secondo in poi. Per le iscrizioni alla prima settimana sono 
> stati raccolti 3.000 euro e più della metà degli iscritti sono figli unici. Qual è al minimo il numero 
> degli iscritti?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0051
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<div class="qlang-split" data-lang="en"></div>


*What is the least number of those enrolled?*

> The summer camp
>
> Marco and his brother enrolled in a summer camp. The weekly cost of enrolling one child in that camp is 60 euros, but if a family enrols more than one child it is entitled to the reduced fee of 54 euros for every child from the second onwards. For enrolments in the first week, 3.000 euros were collected and more than half of those enrolled are only children. What is the least number of those enrolled?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_disuguaglianze|Classical inequalities]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** 0051



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_algebra,method_fattorizzazione,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza pista circolare due corridori*

> La pista circolare 
> Paolo e Gino si allenano alla corsa lungo una pista circolare. Partono da uno stesso punto, ma corrono 
> in versi opposti, ciascuno alla propria velocità mantenuta costante. Quando si incontrano per la prima 
> volta, Paolo ha percorso 100 metri dalla partenza; quando si incontrano per la seconda, Gino ha 
> percorso 150 metri dal punto del primo incontro. Quanti metri è lunga la pista?

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0250
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<div class="qlang-split" data-lang="en"></div>


*How many metres long is the track?*

> The circular track
>
> Paolo and Gino train by running along a circular track. They set off from the same point, but run in opposite directions, each at his own constant speed. When they meet for the first time, Paolo has covered 100 metres from the start; when they meet for the second time, Gino has covered 150 metres from the point of the first meeting. How many metres long is the track?

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]
**Answer:** 0250



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,method_conteggio,method_casework,skill_conteggio_sistematico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Inserimenti SUDOKU griglia 2x3 con vincolo U*

> SUDOKU 
> Le sei lettere della parola SUDOKU vanno inserite nelle sei celle di una griglia 2 × 3 in modo che 
> nessuna riga e nessuna colonna ospiti entrambe le lettere U. Quanti diversi inserimenti sono possibili?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0144
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<div class="qlang-split" data-lang="en"></div>


*How many different insertions are possible?*

> SUDOKU
>
> The six letters of the word SUDOKU are to be entered in the six cells of a 2 × 3 grid so that no row and no column holds both letters U. How many different insertions are possible?

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casework|Case analysis]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 0144



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica,skill_modellizzazione"></span>

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
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0600
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<div class="qlang-split" data-lang="en"></div>


*How many people attend the gym?*

> At the gym
>
> The people who attend a gym are divided into groups all equally numerous, each supervised by an instructor. By hiring 10 more instructors, each group could be reduced by 5; by hiring 20 more instead, each group could be reduced by 8. How many people attend the gym?

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]
**Answer:** 0600



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

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
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0176
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<div class="qlang-split" data-lang="en"></div>


*How many square centimetres is the area of the original square?*

![[src_kangourou_2023_kangourou_squadre__prob7.png]]

> The area of the square
>
> A square is divided into six plane figures as shown in the picture. The white ones are two isosceles right-angled triangles, a square and a parallelogram; one of the two black ones is an isosceles right-angled triangle, the other (which has only one point in common with the previous one) can be divided into two isosceles right-angled triangles. The area of the part of the square left white is 99 cm2. How many square centimetres is the area of the original square?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]
**Answer:** 0176



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,topic_insiemi_funzioni,method_inclusione_esclusione,method_estremalita,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo studenti corretti tre domande*

> Le tre domande 
> A un certo numero di studenti sono state rivolte le stesse tre domande. 1260 di essi hanno risposto 
> correttamente alla prima domanda: rappresentano esattamente il 70% del totale. La percentuale degli 
> studenti che hanno risposto correttamente alla seconda è il 79%, la percentuale degli studenti che 
> hanno risposto correttamente alla terza è il 53%. Gli studenti che hanno risposto correttamente a tutte 
> le tre domande sono il minimo compatibile con queste percentuali. Quanti sono?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Risposta:** 0036
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<div class="qlang-split" data-lang="en"></div>


*How many are there?*

> The three questions
>
> A certain number of students were asked the same three questions. 1260 of them answered the first question correctly: they are exactly 70% of the total. The percentage of the students who answered the second correctly is 79%, and the percentage of the students who answered the third correctly is 53%. The students who answered all three questions correctly are the least number compatible with these percentages. How many are there?

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_insiemi_funzioni|Sets and functions]]
**Metodo:** [[method_inclusione_esclusione|Inclusion–exclusion]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Answer:** 0036



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


<div class="qlang-split" data-lang="en"></div>


*What is the value of a + b + c + d, where a, b, c, d are the measures in degrees of the angles indicated in the picture?*

![[src_kangourou_2023_kangourou_squadre__prob9.png]]

> The sum of the angles
>
> What is the value of a + b + c + d, where a, b, c, d are the measures in degrees of the angles indicated in the picture?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Skill:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]
**Answer:** 0540



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_algebra,topic_aritmetica,method_estremalita,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma min e max dell'espressione AB0/(A+B)*

> La frazione 
> Sia AB0 il generico numero intero positivo di tre cifre (A ≠ 0), la cui cifra delle unità sia zero. Quanto 
> vale la somma del più piccolo e del più grande fra i valori che l’espressione 
> 𝐴𝐵0
> 𝐴+𝐵  può assumere?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0119
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<div class="qlang-split" data-lang="en"></div>


*What is the sum of the smallest and the largest of the values that the expression can take?*

> The fraction
>
> Let AB0 be the generic positive three-digit integer (A ≠ 0) whose units digit is zero. What is the sum of the smallest and the largest of the values that the expression
>
> AB0
> A+B
>
> can take?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** 0119



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area KLM in triangolo equilatero ABC*

![[src_kangourou_2023_kangourou_squadre__prob11.png]]

> Due triangoli equilateri 
> All’interno del triangolo equilatero ABC in figura è stato ottenuto il triangolo 
> KLM che ha ogni lato perpendicolare ad uno dei lati di ABC. L’area di ABC è 
> 150. Quanto vale l’area di KLM?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0050
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<div class="qlang-split" data-lang="en"></div>


*What is the area of KLM?*

![[src_kangourou_2023_kangourou_squadre__prob11.png]]

> Two equilateral triangles
>
> Inside the equilateral triangle ABC in the picture, the triangle KLM has been obtained, which has each side perpendicular to one of the sides of ABC. The area of ABC is 150. What is the area of KLM?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]
**Answer:** 0050



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_algebra,topic_logica,method_invarianti,skill_astrazione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo di 100 numeri in cerchio, media adiacenti*

> Cento numeri in cerchio 
> Su una circonferenza sono scritti 100 numeri, ognuno dei quali è la media aritmetica dei due che gli 
> sono adiacenti. Uno di essi è 2.023 e non ve ne sono di maggiori. Quanto vale il più piccolo?

**Topic:** [[topic_algebra|Algebra]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2023
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum of 100 numbers in a circle, average of adjacent numbers*

> A Hundred Numbers in a Circle On a circumference, 100 numbers are written, each of which is the arithmetic mean of the two numbers adjacent to it. One of them is 2,023, and none are larger. What is the value of the smallest one?


**Topic:** [[topic_algebra|Algebra]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_invarianti|Invariants / monovariants]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_aritmetica,method_inclusione_esclusione,skill_conteggio_sistematico,skill_stima"></span>

<div class="qlang-switch" data-default="it"></div>


*500-mo termine non quadrato né cubo perfetto*

> Il 500-esimo termine 
> Pensate di ordinare in successione crescente tutti i numeri interi positivi che non sono né quadrati 
> perfetti, né cubi perfetti. Qual è il 500-mo termine della successione?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima e approssimazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0528
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<div class="qlang-split" data-lang="en"></div>


*500 is neither a perfect square nor a perfect cube*

> The 500th term: Suppose you list in increasing order all positive integers that are neither perfect squares nor perfect cubes. What is the 500th term of the sequence?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_inclusione_esclusione|Inclusion–exclusion]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_stima|Estimation and approximation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_aritmetica,method_congruenze,method_fattorizzazione,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Prodotto cifre di n con 3n=ABCDE1*

> Il triplo di n 
> Sia n un numero intero di sei cifre 1ABCDE. Se il numero 3 × n è ABCDE1, quanto vale il prodotto 
> delle cifre di n?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 2240
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<div class="qlang-split" data-lang="en"></div>


*Product of digits of n with 3n=ABCDE1*

> Three times n Let n be a six-digit integer 1ABCDE. If the number 3 × n is ABCDE1, what is the product of the digits of n?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_geometria_piana,skill_ragionamento_geometrico,skill_modellizzazione"></span>

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
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Geometria]]
**Risposta:** 0153
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nKEk1ALhWjpzgX8LU7yX2aIPmgB2FDjn/view)


<div class="qlang-split" data-lang="en"></div>


*06*

> The Clock: A traditional clock with 12 hours and hour and minute hands shows 8 o'clock and 6 minutes. How many degrees is the smaller of the angles between the two hands? a b c d
>
>
> Questions and Solutions


**Topic:** [[topic_geometria_piana|Plane geometry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Geometria|Geometry]]
