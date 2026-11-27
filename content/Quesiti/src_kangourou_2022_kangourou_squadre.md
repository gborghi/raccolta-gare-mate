---
title: Kangourou Squadre 2022 Kangourou Finale 1
tipo: gara
competition: Kangourou Squadre 2022 Kangourou Finale 1
family: kangourou
year: '2022'
level: squadre
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2022_kangourou_squadre"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,topic_logica,method_invarianti,method_ricorsione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero fisso processo differenza max-min cifre*

> La differenza 
> Scegliete quattro cifre non tutte uguali fra loro, formate con esse il numero più grande e il più piccolo 
> (entrambi interi positivi) e calcolate la differenza fra i due (ad esempio, se sceglieste le cifre 0, 7, 2 e 
> 1, dovreste calcolare 7.210 – 127 = 7.083). Ripetete l’operazione con le quattro cifre del numero che 
> avete ottenuto (se fosse un numero con meno di quattro cifre, premettete gli zeri necessari) e 
> proseguite in questo modo. Da un certo momento in poi otterrete sempre uno stesso numero. Quale?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 6174
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*Which number is it?*

> The difference
>
> Choose four digits, not all equal to one another, form with them the largest number and the smallest (both positive integers) and calculate the difference between the two (for example, if you chose the digits 0, 7, 2 and 1, you would have to calculate 7.210 – 127 = 7.083). Repeat the operation with the four digits of the number you have obtained (if it were a number with fewer than four digits, put the necessary zeros in front) and continue in this way. From a certain moment on you will always obtain one and the same number. Which?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_invarianti|Invariants / monovariants]], [[method_ricorsione|Recursion]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 6174



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,topic_algebra,method_fattorizzazione,skill_modellizzazione,skill_manipolazione_algebrica,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero strisce quadrato dato perimetro nero*

![[src_kangourou_2022_kangourou_squadre__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \fill[gray!40] (0,0) rectangle (1,3);
  \fill[black] (1,0) rectangle (2,3);
  \fill[gray!40] (2,0) rectangle (3,3);
  \draw[thick] (0,0) rectangle (3,3);
  \draw[thick] (1,0) -- (1,3);
  \draw[thick] (2,0) -- (2,3);
\end{tikzpicture}
\end{document}
```

> Il quadrato a strisce  
> Un quadrato è ripartito in un numero dispari di strisce verticali tutte della stessa larghezza 
> e colorate, a strisce alterne, di grigio e nero. Il numero di strisce grigie è di uno maggiore 
> di quello delle strisce nere (vedi esempio con 3 strisce in figura). Si sa che la frazione di 
> perimetro del quadrato che delimita la totalità delle strisce nere è i 
> 
>  dell’intero perimetro. In quante 
> strisce è ripartito il quadrato?

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]], [[Algebra e Analisi]]
**Risposta:** 0025
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*Into how many strips is the square divided?*

![[src_kangourou_2022_kangourou_squadre__prob2.png]]

> The striped square
>
> A square is divided into an odd number of vertical strips, all of the same width and coloured, in alternate strips, grey and black. The number of grey strips is one greater than that of the black strips (see the example with 3 strips in the picture). It is known that the fraction of the perimeter of the square that bounds the whole of the black strips is ripartito in un numero dispari di strisce verticali tutte of the whole perimeter. Into how many strips is the square divided?

**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]], [[Algebra e Analisi|Algebra and analysis]]
**Answer:** 0025



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero 5 cifre con cifra 1 spostata, triplo*

> Il triplo 
> C’è un solo numero intero positivo di cinque cifre che gode di questa proprietà: mettendo la cifra 1 
> dopo le sue cinque cifre, si ottiene un numero che è il triplo di quello che si ottiene mettendo la cifra 
> 1 prima delle sue cinque cifre. Trovate questo numero di cinque cifre e togliete la cifra delle decine 
> di migliaia. Che numero ottenete?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** 2857
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*What number do you obtain?*

> The triple
>
> There is only one positive five-digit integer with this property: putting the digit 1 after its five digits, one obtains a number that is three times the one obtained by putting the digit 1 before its five digits. Find this five-digit number and remove the tens-of-thousands digit. What number do you obtain?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]
**Answer:** 2857



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_algebra,topic_geometria_solida,method_fattorizzazione,skill_modellizzazione,skill_manipolazione_algebrica,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Altezza scatola dato nastro regalo*

![[src_kangourou_2022_kangourou_squadre__prob4.png]]

> Il regalo 
> In figura vedete un pacco regalo legato con un nastro. La scatola ha la forma 
> di un parallelepipedo rettangolo: lunghezza e larghezza della base 
> differiscono di 5,5 cm, l’altezza è più corta di 5 cm rispetto alla minore delle 
> due dimensioni della base. La parte di nastro usata per il nodo e il fiocco è 
> lunga complessivamente 47 cm e la lunghezza totale del nastro è 162 cm. 
> Qual è l’altezza della scatola in millimetri?

**Topic:** [[topic_algebra|Algebra]], [[topic_geometria_solida|Geometria solida]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** 0105
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*What is the height of the box in millimetres?*

![[src_kangourou_2022_kangourou_squadre__prob4.png]]

> The present
>
> In the picture you see a present tied with a ribbon. The box has the shape of a rectangular parallelepiped: the length and the width of the base differ by 5,5 cm, and the height is 5 cm shorter than the smaller of the two dimensions of the base. The part of the ribbon used for the knot and the bow is 47 cm long in all, and the total length of the ribbon is 162 cm. What is the height of the box in millimetres?

**Topic:** [[topic_algebra|Algebra]], [[topic_geometria_solida|Solid geometry]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Geometria|Geometry]]
**Answer:** 0105



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo n con tre divisioni per 7 resto 1 poi 0*

> Diviso 7 
> Anna divide un numero intero positivo n di quattro cifre per 7 e ottiene resto 1. Divide allora il 
> quoziente per 7 e ottiene ancora resto 1. Divide questo nuovo quoziente per 7 e ancora il resto è 1. 
> Ora divide questo ultimo quoziente per 7 e ottiene resto 0. Qual è il più grande intero n dal quale 
> Anna potrebbe essere partita?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 9661
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*What is the largest integer n from which Anna could have started?*

> Divided by 7
>
> Anna divides a positive four-digit integer n by 7 and obtains remainder 1. She then divides the quotient by 7 and again obtains remainder 1. She divides this new quotient by 7 and the remainder is again 1. Now she divides this last quotient by 7 and obtains remainder 0. What is the largest integer n from which Anna could have started?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Method:** [[method_congruenze|Modular arithmetic / congruences]]
**Skill:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** 9661



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Valore n perché 1/n moltiplicata per 2022*

> Il denominatore 
> Se al numeratore e al denominatore della frazione 1/3 aggiungiamo il denominatore, otteniamo  
> 4/6 = 2/3 che è il doppio della frazione da cui eravamo partiti. Se vogliamo che, eseguendo 
> un’operazione analoga, la frazione 1/n venga moltiplicata per 2022, quanto deve valere n? 
> C
> V
> 
>  
> 2

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 4043
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*What must n be?*

> The denominator
>
> If to the numerator and the denominator of the fraction 1/3 we add the denominator, we obtain 4/6 = 2/3, which is twice the fraction we started from. If we want, by carrying out an analogous operation, the fraction 1/n to be multiplied by 2022, what must n be?

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]
**Answer:** 4043



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_geometria_solida,method_conteggio,skill_ragionamento_geometrico,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Spigoli tronco piramide con 2022 facce*

![[src_kangourou_2022_kangourou_squadre__prob7.png]]

> Gli spigoli 
> In figura vedete un tronco di piramide che ha 6 facce e 12 spigoli. Immaginate un 
> tronco di piramide con 2022 facce: quanti spigoli deve avere?

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Geometria]]
**Risposta:** 6060
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*How many edges must it have?*

![[src_kangourou_2022_kangourou_squadre__prob7.png]]

> The edges
>
> In the picture you see a frustum of a pyramid that has 6 faces and 12 edges. Imagine a frustum of a pyramid with 2022 faces: how many edges must it have?

**Topic:** [[topic_geometria_solida|Solid geometry]]
**Metodo:** [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Geometria|Geometry]]
**Answer:** 6060



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,topic_aritmetica,method_estremalita,method_simmetria,skill_astrazione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma diametrale minima poligono 2022 lati*

> Numeri allineati 
> In corrispondenza di ciascuno dei vertici e nel centro di un poligono regolare di 2022 lati è stato scritto 
> un numero intero positivo. I 2023 numeri scritti sono tutti diversi tra loro e, al variare delle coppie di 
> vertici opposti (cioè allineati con il centro), la somma dei tre numeri allineati (nei due vertici e nel 
> centro) è sempre la stessa ed è la minore possibile con questi presupposti. Quanto vale questa somma?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 2026
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*What is the value of this sum?*

> Numbers in a line
>
> At each of the vertices and at the centre of a regular polygon with 2022 sides a positive integer has been written. The 2023 numbers written are all different from one another and, as the pairs of opposite vertices vary (that is, vertices aligned with the centre), the sum of the three aligned numbers (at the two vertices and at the centre) is always the same and is the smallest possible on these assumptions. What is the value of this sum?

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Answer:** 2026



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_geometria_piana,topic_trigonometria,method_trigonometria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area rettangolo da piega con angolo 30°*

![[src_kangourou_2022_kangourou_squadre__prob9.png]]

> L’area 
> Come suggerito dalla figura, una striscia di carta rettangolare ABCD è 
> piegata in modo che il punto A si sovrapponga al punto C. Chiamiamo E 
> il punto del lato AB da cui parte la piega. Se l’angolo 
>  misura 30° e 
> l’area del triangolo ECB è 15 cm2, quanti centimetri quadrati misura 
> l’area del rettangolo ABCD?

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0090
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*How many square centimetres is the area of the rectangle ABCD?*

![[src_kangourou_2022_kangourou_squadre__prob9.png]]

> The area
>
> As the picture suggests, a rectangular strip of paper ABCD is folded so that the point A lies on top of the point C. Call E the point of the side AB from which the fold starts. If the angle 
>  measures 30° and the area of the triangle ECB is 15 cm2, how many square centimetres is the area of the rectangle ABCD?

**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_trigonometria|Trigonometry]]
**Metodo:** [[method_trigonometria|Trigonometric techniques]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]
**Answer:** 0090



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_algebra,method_fattorizzazione,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minuti di Bruno tra tre velocità*

> Tre amici 
> Ada va in bicicletta, Bruno corre, Carla cammina. La velocità di Ada è il doppio di quella di Bruno 
> che, a sua volta, è il doppio di quella di Carla. Se partono insieme per fare lo stesso percorso e Carla 
> arriva un’ora dopo Ada, quanti minuti occorrono a Bruno per coprire l’intero percorso?

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0040
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*How many minutes does Bruno need to cover the whole path?*

> Three friends
>
> Ada goes by bicycle, Bruno runs, Carla walks. Ada's speed is twice Bruno's, which in turn is twice Carla's. If they set off together to cover the same path and Carla arrives one hour after Ada, how many minutes does Bruno need to cover the whole path?

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]
**Answer:** 0040



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_geometria_piana,skill_ragionamento_geometrico,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Angolo ACB con punti M,N e angolo MCN 40°*

![[src_kangourou_2022_kangourou_squadre__prob11.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.4]
  \coordinate (A) at (0,0);
  \coordinate (B) at (5,0);
  \coordinate (C) at (4,3);
  \pgfmathsetmacro{\AC}{sqrt((4-0)^2+(3-0)^2)}
  \pgfmathsetmacro{\BC}{sqrt((4-5)^2+(3-0)^2)}
  \coordinate (N) at (\AC,0);
  \pgfmathsetmacro{\Mx}{5-\BC}
  \coordinate (M) at (\Mx,0);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw (C) -- (M);
  \draw (C) -- (N);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[below] at (M) {$M$};
  \node[below] at (N) {$N$};
\end{tikzpicture}
\end{document}
```

> L’angolo 
> Nel triangolo ABC in figura il lato AB è più lungo di ciascuno 
> degli altri due. M e N sono due punti sul lato AB tali che AN sia 
> lungo quanto AC e BM sia lungo quanto BC. L’angolo 
> 	 
>  misura 40 gradi. Quanti gradi misura l’angolo 
> ?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Geometria]]
**Risposta:** 0100
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*How many degrees does the angle measure?*

![[src_kangourou_2022_kangourou_squadre__prob11.png]]

> The angle
>
> In the triangle ABC in the picture the side AB is longer than each of the other two. M and N are two points on the side AB such that AN is as long as AC and BM is as long as BC. The angle Nel triangolo ABC in figura il lato AB è più lungo di ciascuno 
> degli altri due. M e N sono due punti sul lato AB tali che AN sia 
> lungo quanto AC e BM sia lungo quanto BC. L’angolo 
> 	 
>  measures 40 degrees. How many degrees does the angle  measure?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Geometria|Geometry]]
**Answer:** 0100



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_combinatoria,method_conteggio,method_bigezione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri 10..9999 con cifre strettamente crescenti*

> Strettamente crescente 
> Quanti sono i numeri interi compresi tra 10 e 9999 le cui cifre sono disposte in ordine strettamente 
> crescente? (I numeri di 2 cifre NON devono essere pensati come numeri di 4 cifre di cui le prime due 
> cifre siano 0; ad es. 23 è accettabile)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_bigezione|Bigezione / corrispondenza]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0246
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*How many integers between 10 and 9999 have their digits arranged in strictly increasing order?*

> Strictly increasing
>
> How many integers between 10 and 9999 have their digits arranged in strictly increasing order? (Two-digit numbers are NOT to be thought of as four-digit numbers whose first two digits are 0; for example 23 is acceptable.)

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_bigezione|Bijection / correspondence]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 0246



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza ED in triangolo rettangolo partizionato*

![[src_kangourou_2022_kangourou_squadre__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.045]
  \coordinate (A) at (0,0);
  \coordinate (B) at (75,0);
  \coordinate (C) at (0,100);
  \coordinate (D) at (48,36);
  \coordinate (E) at (0,36);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw (E) -- (D);
  \draw (A) -- (D);
  \draw (0,4) -- (4,4) -- (4,0);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above left] at (C) {$C$};
  \node[left] at (E) {$E$};
  \node[right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Triangoli  
> In figura vedete un triangolo rettangolo ABC ripartito in tre triangoli rettangoli EDC, 
> EDA e ABD. Se AB misura 75 e AC misura 100, quanto misura ED?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** 0048
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*How long is ED?*

![[src_kangourou_2022_kangourou_squadre__prob13.png]]

> Triangles
>
> In the picture you see a right-angled triangle ABC divided into three right-angled triangles EDC, EDA and ABD. If AB measures 75 and AC measures 100, how long is ED?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]
**Answer:** 0048



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_combinatoria,method_conteggio,method_bigezione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di distribuire 16 gettoni in 6 sacchetti*

> Gettoni 
> Marta deve distribuire 16 gettoni tutti uguali fra loro in 6 sacchetti tutti diversi fra loro in modo che 
> in ogni sacchetto finiscano almeno due gettoni. In quanti modi diversi può farlo? (Due modi sono 
> diversi se è diverso il contenuto di almeno uno stesso sacchetto.)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_bigezione|Bigezione / corrispondenza]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0126
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*In how many different ways can she do it?*

> Counters
>
> Marta has to distribute 16 counters, all equal to one another, in 6 bags, all different from one another, so that at least two counters end up in each bag. In how many different ways can she do it? (Two ways are different if the contents of at least one and the same bag are different.)

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_bigezione|Bijection / correspondence]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Answer:** 0126



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_geometria_piana,method_coordinate,method_simmetria,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Lato quadrati laterali in semicerchio*

![[src_kangourou_2022_kangourou_squadre__prob15.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \pgfmathsetmacro{\R}{sqrt(5)}
  \draw[thick] (-\R,0) -- (\R,0);
  \draw[thick] (\R,0) arc(0:180:\R);
  \draw[thick] (-1,0) -- (1,0) -- (1,2) -- (-1,2) -- cycle;
  \draw[thick] (-2,0) -- (-1,0) -- (-1,1) -- (-2,1) -- cycle;
  \draw[thick] (1,0) -- (2,0) -- (2,1) -- (1,1) -- cycle;
\end{tikzpicture}
\end{document}
```

> I quadrati laterali  
> La figura mostra un semicerchio che ospita tre quadrati, ognuno dei quali ha un lato 
> sul diametro e almeno un vertice sulla semicirconferenza. Il punto medio del lato di 
> base di quello centrale è il punto medio del diametro; gli altri due quadrati sono 
> accostati in posizione simmetrica a quello centrale. Se il lato del quadrato centrale 
> misura 2.100, quanto misura il lato dei quadrati laterali? 
>  
> A
> N 
> M 
> V 
> V
> V
> A 
> B 
> C
> D
> E 
> 
> 3 
>  
> Quesiti e soluzioni

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** 1050
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1kPr4pxe9JLW6PscULmAS1patprSg1xRs/view)


<div class="qlang-split" data-lang="en"></div>


*How long is the side of the side squares?*

![[src_kangourou_2022_kangourou_squadre__prob15.png]]

> The side squares
>
> The picture shows a semicircle that holds three squares, each of which has one side on the diameter and at least one vertex on the semicircle. The midpoint of the base side of the central one is the midpoint of the diameter; the other two squares are placed symmetrically against the central one. If the side of the central square measures 2.100, how long is the side of the side squares?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate method]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]
**Answer:** 1050
