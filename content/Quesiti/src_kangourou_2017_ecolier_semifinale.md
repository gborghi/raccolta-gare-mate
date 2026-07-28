---
title: Kangourou 2017 Ecolier - Semifinale individuale
tipo: gara
competition: Kangourou 2017 Ecolier - Semifinale individuale
family: kangourou
year: '2017'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2017_ecolier_semifinale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_logica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Ordine di arrivo di una gara da indizi*

> (Punti 2) Andrea, Bruno, Carlo e Davide hanno partecipato a una gara. Carlo è arrivato secondo;
> Bruno non è arrivato primo né quarto e anche Andrea non è arrivato quarto. Chi è arrivato primo?
>
> - **(A)** Andrea
> - **(B)** Bruno
> - **(C)** Carlo
> - **(D)** Davide
> - **(E)** Non ci sono dati sufficienti per stabilirlo.

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


*Order of arrival of an index call*

> Andrea, Bruno, Carlo, and Davide took part in a competition. Carlo came second; Bruno did not come first nor fourth and neither did Andrea. Who came first?
>
> - **(A)** Andres
> - **(B)** Bruno
> - **(C)** Charles
> - **(D)** David , please .
> - **(E)** There's not enough data to establish it.

**Answer:** A
[[src_kangourou_2017_ecolier_semifinale__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Cifra diversa in numero a cinque cifre con somma 42*

> (Punti 3) Un numero di cinque cifre ha quattro cifre uguali e la somma delle cinque cifre è 42.
> Qual è la cifra diversa dalle altre?
>
> - **(A)** 5
> - **(B)** 6
> - **(C)** 7
> - **(D)** 8
> - **(E)** 9

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


*Different five-digit number with sum of 42*

> (Points 3) A five-digit number has four digits equal and the sum of the five digits is 42. What's the difference from the others?
>
> - **(A)** 5
> - **(B)** 6
> - **(C)** 7
> - **(D)** 8
> - **(E)** 9

**Answer:** B
[[src_kangourou_2017_ecolier_semifinale__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,topic_logica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Palloncini di Francesca da somme parziali*

> (Punti 3) Cinque bambini sono in fila e ciascuno di loro ha legati alla mano sinistra diversi
> palloncini colorati: in tutto 37. A destra di Andrea ci sono 14 palloncini; a destra di Caterina ce ne
> sono 32; a destra di Eva ce ne sono 20 e a destra di Daniele ce ne sono 8. Quanti palloncini ha
> Francesca?
>
> - **(A)** 4
> - **(B)** 6
> - **(C)** 8
> - **(D)** 10
> - **(E)** 12

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


French balloons of partial sums

> Three points: Five children stand in line, each holding several colored balloons in his left hand - 37 in all. To Andrew's right there are 14 balloons; to Catherine's right there are 32; to Eva's right there are 20 and to Daniel's right there are 8. How many balloons does Francesca have?
>
> - **(A)** 4
> - **(B)** 6
> - **(C)** 8
> - **(D)** 10
> - **(E)** 12

**Answer:** C
[[src_kangourou_2017_ecolier_semifinale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area dei quadrati piccoli in rettangolo suddiviso*

![[src_kangourou_2017_ecolier_semifinale__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.12]
  % S=12, M=16, L=24. Width=40, Height=48.
  % Rectangle ABCD: A=(0,0), B=(40,0), C=(40,48), D=(0,48)
  \draw[thick] (0,0) rectangle (40,48);
  % Large square top-left (24x24)
  \draw (0,24) rectangle (24,48);
  % 4 small squares (12x12) bottom-left
  \draw (0,0) rectangle (24,24);
  \draw (12,0) -- (12,24);
  \draw (0,12) -- (24,12);
  % 3 shaded medium squares right (16x16)
  \fill[gray!30] (24,0) rectangle (40,16);
  \fill[gray!30] (24,16) rectangle (40,32);
  \fill[gray!30] (24,32) rectangle (40,48);
  \draw (24,0) rectangle (40,16);
  \draw (24,16) rectangle (40,32);
  \draw (24,32) rectangle (40,48);
  % Labels
  \node[below left] at (0,0) {$A$};
  \node[below right] at (40,0) {$B$};
  \node[above right] at (40,48) {$C$};
  \node[above left] at (0,48) {$D$};
\end{tikzpicture}
\end{document}
```

> (Punti 4) Osserva la figura. Il rettangolo ABCD è suddiviso in otto quadrati
> di tre taglie diverse: il lato di ogni quadrato ombreggiato è lungo 16 cm. Quanti
> centimetri quadrati misura l’area di ciascuno dei quadretti più piccoli?
>
> - **(A)** 72
> - **(B)** 192
> - **(C)** 256
> - **(D)** 108
> - **(E)** 144

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


*Area of small squares in a subdivided rectangle*

![[src_kangourou_2017_ecolier_semifinale__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.12]
  % S=12, M=16, L=24. Width=40, Height=48.
  % Rectangle ABCD: A=(0,0), B=(40,0), C=(40,48), D=(0,48)
  \draw[thick] (0,0) rectangle (40,48);
  % Large square top-left (24x24)
  \draw (0,24) rectangle (24,48);
  % 4 small squares (12x12) bottom-left
  \draw (0,0) rectangle (24,24);
  \draw (12,0) -- (12,24);
  \draw (0,12) -- (24,12);
  % 3 shaded medium squares right (16x16)
  \fill[gray!30] (24,0) rectangle (40,16);
  \fill[gray!30] (24,16) rectangle (40,32);
  \fill[gray!30] (24,32) rectangle (40,48);
  \draw (24,0) rectangle (40,16);
  \draw (24,16) rectangle (40,32);
  \draw (24,32) rectangle (40,48);
  % Labels
  \node[below left] at (0,0) {$A$};
  \node[below right] at (40,0) {$B$};
  \node[above right] at (40,48) {$C$};
  \node[above left] at (0,48) {$D$};
\end{tikzpicture}
\end{document}
```

> (Point 4) Look at the figure. The ABCD rectangle is divided into eight squares of three different sizes: the side of each shaded square is 16 cm long. How many square centimetres is the area of each of the smallest squares?
>
> - **(A)** 72
> - **(B)** 192
> - **(C)** 256
> - **(D)** 108
> - **(E)** 144

**Answer:** E
[[src_kangourou_2017_ecolier_semifinale__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_logica,topic_combinatoria,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Maggior differenza tra due tiri di freccette*

> (Punti 4) Cinque bambine giocano a freccette: ciascuna tira due freccette allo stesso bersaglio 
> composto di dieci regioni di diverso valore, da 1 fino a 10. Tutti i tiri colpiscono il bersaglio e in 
> ogni regione cade una freccetta. Alla fine del gioco Ada ha in tutto 11 punti, Bea ne ha 4, Camilla 
> ne ha 7,  Doris ne ha 16 e Eva ne ha 17. Quale delle cinque ha realizzato i due tiri con la maggior 
> differenza di punti? 
> (A) Ada        (B) Bea         (C) Camilla         (D) Doris            (E) Eva

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


*Most difference between two arrows*

> Five girls play arrows: each arrows two arrows at the same target composed of ten regions of different values, from 1 to 10. Every shot hits the target and an arrow falls in every region. By the end of the game, Ada has a total of 11 points, Bea has 4, Camilla has 7, Doris has 16, and Eva has 17. Which of the five made the two shots with the most points difference? I 'm going to tell you something .

**Answer:** D
[[src_kangourou_2017_ecolier_semifinale__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_geometria_piana,topic_combinatoria,method_casework,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo numero di quadrati visibili con 12 cannucce*

> (Punti 4) Usando 12 cannucce tutte uguali tra loro puoi costruire tre quadrati. Se sovrapponi in 
> parte i tre quadrati, quanti quadrati puoi arrivare a vedere al massimo? 
> (A) 3         (B) 5 
> (C) 7 
> (D) 9 
> (E) 11

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 8
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


*Maximum number of visible squares with 12 reeds*

> (Points 4) Using 12 canes all equal to each other, you can build three squares. If you overlap the three squares in part, how many squares can you see at most? (A) 3         (B) 5 (C) 7 (D) 9 (E) 11

**Answer:** 8
[[src_kangourou_2017_ecolier_semifinale__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Eta del penultimo figlio con eta in progressione*

> (Punti 5) Un padre ha cinque figli: ognuno di quelli nati dopo il primo è nato esattamente due 
> anni dopo il precedente. Oggi l’età del figlio più vecchio è il doppio di quella del più giovane. 
> Quanti anni ha oggi il penultimo nato? 
> (A) 9             (B) 10              (C) 11             (D) 12            (E) 13

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


*Age of the second child with age progression*

> (Point 5) A father has five children: each of those born after the first was born exactly two years after the previous one. Today the age of the eldest son is twice that of the youngest. How old is the penultimate born today? (A) 9             (B) 10              (C) 11             (D) 12            (E) 13

**Answer:** C
[[src_kangourou_2017_ecolier_semifinale__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_algebra,topic_aritmetica,method_disuguaglianze,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di adulti dato incasso a teatro*

> (Punti 5) Oggi a teatro c’erano adulti e bambini. Il teatro ha 100 posti ma non tutti erano
> occupati. Il prezzo del biglietto per gli adulti è 20 euro, per i bambini è 10 euro e a fine spettacolo
> l’incasso è stato di 1200 euro. Qual è il minimo numero di adulti che può essere stato presente allo
> spettacolo?
>
> - **(A)** 20
> - **(B)** 21
> - **(C)** 25
> - **(D)** 30
> - **(E)** 50

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum number of adults charged for theatre*

> Today, the theatre was attended by adults and children. The theater has 100 seats, but not all were occupied. Tickets for adults are €20, for children €10, and at the end of the show, the price was €1200. What is the minimum number of adults who may have been present at the show?
>
> - **(A)** 20
> - **(B)** 21
> - **(C)** 25
> - **(D)** 30
> - **(E)** 50

[[src_kangourou_2017_ecolier_semifinale__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_logica,topic_combinatoria,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Partite di Tris gia concluse su griglia avvolta*

![[src_kangourou_2017_ecolier_semifinale__prob9.png]]

> (Punti 6)  Il gioco del Tris si gioca a mosse alterne e vince il primo dei due giocatori che riesce a
> mettere in fila, su una griglia 3×3, tre simboli uguali in orizzontale, verticale o diagonale. Otto
> giocatori sono impegnati in quattro partite e in ciascuna partita uno dei
> giocatori ha fatto 3 mosse e l’altro 2: nel disegno vedi la
> foto delle quattro griglie. Avvolgiamo ora ciascuna
> delle quattro griglie su un tubo (come mostra l’altra
> figura) in modo che i suoi lati opposti verticali si uniscano. Se le regole rimangono
> le stesse, quante delle quattro partite con griglia avvolta sul tubo sono già concluse?
>
> - **(A)** 0
> - **(B)** 1
> - **(C)** 2
> - **(D)** 3 (E) 4 Quesiti a risposta aperta

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


*Tris matches already completed on wrapped grid *

![[src_kangourou_2017_ecolier_semifinale__prob9.png]]

> (Points 6) The game of Tris is played in alternate moves and the first of the two players who manages to line up, on a grid of 3×3, three equal symbols in horizontal, vertical or diagonal, wins. Eight players are involved in four matches and in each match one of the players made 3 moves and the other 2: in the drawing you see the photo of the four grids. We now wrap each of the four grids on a tube (as shown in the other figure) so that its opposite vertical sides join. If the rules remain the same, how many of the four matches with the grid wrapped around the tube are already over?
>
> - **(A)** 0
> - **(B)** 1
> - **(C)** 2
> - **(D)** 3 (E) 4 Open-ended questions

[[src_kangourou_2017_ecolier_semifinale__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_algebra,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Due numeri con somma 30 e prodotto 56*

> (Punti 4) La somma di due numeri è 30 e il loro prodotto è 56. Quanto valgono i due numeri? 
> (Nella risposta indica prima il più piccolo; ad es. se i due numeri fossero 5 e 8, dovresti scrivere 
> 0508).

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0228
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


*Two numbers with a sum of 30 and a product of 56*

> (Four points) The sum of two numbers is 30 and their product is 56. How much are the two numbers worth? (In the answer, the smallest is first indicated; e.g. If the two numbers are 5 and 8, you should write 0508.

**Answer:** 0228
[[src_kangourou_2017_ecolier_semifinale__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_aritmetica,topic_logica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero del cavaliere che balla con la dama 374*

> (Punti 4) A un gran ballo ci sono 500 dame e 500 cavalieri: nell’elenco degli invitati le prime 
> sono numerate con numeri da 1 a 500, i secondi con numeri da 501 a 1000. Viene chiesto all’ultimo 
> cavaliere dell’elenco di ballare con la prima dama, al penultimo di ballare con la seconda e così via. 
> Qual è il numero del cavaliere che ballerà con la dama numero 374?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0627
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


The number of the knight dancing with the lady 374

> (Points 4) There are 500 ladies and 500 knights at a grand ball. The first ones on the guest list are numbered from 1 to 500, the second ones are numbered from 501 to 1000. The last knight on the list is asked to dance with the first lady, the penultimate to dance with the second lady and so on. What is the number of the knight who will dance with the lady number 374?

**Answer:** 0627
[[src_kangourou_2017_ecolier_semifinale__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo piante da aggiungere per distanze uguali*

> (Punti 6) Lungo un lato di una strada crescono quattro piante; le distanze tra una pianta e la 
> successiva sono 7,5 m, 9 m e 21 m. Qual è il minimo numero di piante che basta aggiungere perché 
> tutte le distanze tra due piante successive siano uguali?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0022
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum plants to be added for equal distances*

> Four plants grow along one side of a road; the distances between one plant and the next are 7.5 m, 9 m and 21 m. What is the minimum number of plants that you need to add so that all the distances between two successive plants are equal?

**Answer:** 0022
[[src_kangourou_2017_ecolier_semifinale__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_combinatoria,topic_aritmetica,method_casework,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Costo minimo strisce per ricoprire figure*

![[src_kangourou_2017_ecolier_semifinale__prob13.png]]

> (Punti 6) In cartoleria si possono acquistare strisce corte di cartoncino come 
> quelle che vedi nella prima figura: alcune sono costituite da tre quadratini allineati, 
> altre da cinque; i quadratini sono tutti identici fra loro. Ogni striscia, 
> indipendentemente dalla sua lunghezza, costa un euro. Usando strisce come queste, Giuliana vuole 
> ricoprire le cinque strisce che vedi nella 
> seconda figura, costituite da 10, 12, 16, 
> 18 e 20 quadratini allineati identici ai 
> precedenti. Le strisce corte che usa 
> devono sovrapporsi perfettamente a 
> quelle da ricoprire, dunque non devono 
> debordare da esse, e non devono 
> sovrapporsi tra loro. Quanti euro dovrà spendere Giuliana per realizzare il suo piano?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0018
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum cost of strips to cover figures*

![[src_kangourou_2017_ecolier_semifinale__prob13.png]]

> (Points 6) You can buy short strips of cardboard like the ones you see in the first figure at the cartel. Some are made up of three squares lined up, others are made up of five; the squares are all identical. Each strip, regardless of its length, costs one euro. Using strips like these, Giuliana wants to cover the five strips you see in the second figure, made up of 10, 12, 16, 18, and 20 squares aligned with the previous ones. The short strips you use must overlap perfectly with the ones you cover, so they must not overlap, and they must not overlap. How much will Juliana have to spend to make her plan come true?

**Answer:** 0018
[[src_kangourou_2017_ecolier_semifinale__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_logica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di persone con 4 figli e 2 padri*

> (Punti 8) In una stanza sono presenti esattamente quattro figli, ciascuno con il proprio padre, ed 
> esattamente due padri. Qual è il più piccolo numero di persone presenti nella stanza per cui ciò 
> potrebbe accadere?

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0005
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


Minimum number of persons with 4 children and 2 fathers

> (Points 8) In a room there are exactly four children, each with their own father, and exactly two fathers. What's the smallest number of people in the room that this could happen to?

**Answer:** 0005
[[src_kangourou_2017_ecolier_semifinale__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_combinatoria,topic_geometria_piana,method_conteggio,method_inclusione_esclusione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Triangoli con vertici in punti dati non allineati*

![[src_kangourou_2017_ecolier_semifinale__prob15.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % 4 dots on top row (centered between 5 bottom dots)
  \foreach \x in {0.5, 1.5, 2.5, 3.5}
    \fill (\x, 1) circle (0.18);
  % 5 dots on bottom row
  \foreach \x in {0, 1, 2, 3, 4}
    \fill (\x, 0) circle (0.18);
\end{tikzpicture}
\end{document}
```

> (Punti 8) Quanti sono i triangoli che hanno i vertici in 3 dei punti che 
> vedi in figura? (Attenzione: un triangolo non può avere vertici in tre punti 
> allineati e, dei punti in figura, i 4 sopra e i 5 sotto sono allineati.) 
>  
> Quesito N.
> punteggio
> 2
> 3
> 3
> 4
> 4
> 4
> 5
> 5
> 6
> 4
> 4
> 6
> 6
> 8
> 8
> risposta
> 0228
> 0627
> 0022
> 0018
> 0005
> 0070
> Tra le risposte al quesito 6 non compare la risposta corretta che è 8.
> B

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 0070
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1co8VLY7eX2IFrsdR8dsym0lqRaZR1RfW/view)


<span class="qlang-split" data-lang="en"></span>


*Triangles with vertices at non-aligned data points*

![[src_kangourou_2017_ecolier_semifinale__prob15.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  % 4 dots on top row (centered between 5 bottom dots)
  \foreach \x in {0.5, 1.5, 2.5, 3.5}
    \fill (\x, 1) circle (0.18);
  % 5 dots on bottom row
  \foreach \x in {0, 1, 2, 3, 4}
    \fill (\x, 0) circle (0.18);
\end{tikzpicture}
\end{document}
```

> (Points 8) How many triangles have the vertices in 3 of the points you see in the figure? (Note: a triangle cannot have vertices at three points aligned and, of the points in the figure, the 4 above and the 5 below are aligned.)
>  
> Question No. The answer to question 6 does not appear to be the correct answer which is 8. B

**Answer:** 0070
[[src_kangourou_2017_ecolier_semifinale__Q15]]
