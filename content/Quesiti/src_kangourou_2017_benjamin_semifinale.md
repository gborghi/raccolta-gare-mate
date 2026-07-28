---
title: Kangourou 2017 Benjamin (semifinale individuale)
tipo: gara
competition: Kangourou 2017 Benjamin (semifinale individuale)
family: kangourou
year: '2017'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2017_benjamin_semifinale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*prezzo di 9 pezzi 3_72,98*

> (Punti 2) Ho acquistato 9 pezzi di uno stesso prodotto, ma non so che cosa devo pagare perché una delle
> cifre sul foglio con la richiesta di pagamento è macchiata e si vede solo la scritta 3    72,98. Qual è la cifra sotto
> la macchia nera?
>
> - **(A)** 3
> - **(B)** 4
> - **(C)** 5
> - **(D)** 6
> - **(E)** 7

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


Price of 9 pieces 3_72.98

> I bought 9 pieces of the same product, but I don't know what I have to pay because one of the numbers on the payment request sheet is stained and you only see the word 3 72.98. What's the number under the black spot?
>
> - **(A)** 3
> - **(B)** 4
> - **(C)** 5
> - **(D)** 6
> - **(E)** 7

**Answer:** E
[[src_kangourou_2017_benjamin_semifinale__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Frazione del triangolo occupata dalla M bianca*

![[src_kangourou_2017_benjamin_semifinale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
\pgfmathsetmacro{\h}{0.866025}
\fill[black] (2,\h) -- (1.5,{2*\h}) -- (2,{3*\h}) -- (2.5,{2*\h}) -- cycle;
\fill[black] (0,0) -- (1,0) -- (0.5,\h) -- cycle;
\fill[black] (3,0) -- (4,0) -- (3.5,\h) -- cycle;
\draw[thick] (0,0) -- (4,0) -- (2,3.4641) -- cycle;
\end{tikzpicture}
\end{document}
```

> (Punti 3) Per ottenere il logo in figura ho diviso in 4 parti uguali un lato di un triangolo
> equilatero, poi ho tracciato quattro rette parallele agli altri lati passanti  per i tre punti di
> divisione e infine ho annerito il rombo e i triangolini che vedi in figura. Quale frazione del
> triangolo iniziale è occupata dalla M bianca?
>
> - **(A)** 7/11
> - **(B)** 2/3
> - **(C)** 3/4
> - **(D)** 3/5
> - **(E)** 5/7

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


*Fraction of the triangle occupied by the white M*

![[src_kangourou_2017_benjamin_semifinale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
\pgfmathsetmacro{\h}{0.866025}
\fill[black] (2,\h) -- (1.5,{2*\h}) -- (2,{3*\h}) -- (2.5,{2*\h}) -- cycle;
\fill[black] (0,0) -- (1,0) -- (0.5,\h) -- cycle;
\fill[black] (3,0) -- (4,0) -- (3.5,\h) -- cycle;
\draw[thick] (0,0) -- (4,0) -- (2,3.4641) -- cycle;
\end{tikzpicture}
\end{document}
```

> (Points 3) To get the logo in the figure I divided into 4 equal parts one side of an equilateral triangle, then I drew four lines parallel to the other sides passing through the three dividing points, and finally I blacked out the rim and the triangles you see in the figure. What fraction of the starting triangle is occupied by the white M?
>
> - **(A)** 7/11
> - **(B)** 2/3
> - **(C)** 3/4
> - **(D)** 3/5
> - **(E)** 5/7

**Answer:** C
[[src_kangourou_2017_benjamin_semifinale__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,method_estremalita,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area del triangolo piu esteso su griglia 4x4 di puntini*

![[src_kangourou_2017_benjamin_semifinale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) rectangle (3,3);
  \foreach \x in {0,1,2,3} {
    \foreach \y in {0,1,2,3} {
      \fill (\x,\y) circle (3pt);
    }
  }
\end{tikzpicture}
\end{document}
```

> (Punti 3) In figura è rappresentato un foglio quadrato su cui sono disegnati 16 puntini
> che sono vertici di 9 quadratini congruenti di lato 1 cm. Puoi tracciare vari triangoli usan­
> do i puntini come vertici. Quanti centimetri quadrati misura la superficie del più esteso
> triangolo che puoi tracciare in questo modo?
>
> - **(A)** 3
> - **(B)** 3,5
> - **(C)** 4
> - **(D)** 6
> - **(E)** Nessuna delle precedenti misure è corretta

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** E
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


*Area of the largest triangle on a 4x4 grid of points*

![[src_kangourou_2017_benjamin_semifinale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) rectangle (3,3);
  \foreach \x in {0,1,2,3} {
    \foreach \y in {0,1,2,3} {
      \fill (\x,\y) circle (3pt);
    }
  }
\end{tikzpicture}
\end{document}
```

> The figure shows a square sheet on which 16 points are drawn, which are vertices of 9 squares corresponding to a side of 1 cm. You can plot various triangles using points as vertices. How many square centimeters is the area of the widest triangle you can trace this way?
>
> - **(A)** 3
> - **(B)** 3,5
> - **(C)** 4
> - **(D)** 6
> - **(E)** None of the above measures are correct

**Answer:** E
[[src_kangourou_2017_benjamin_semifinale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Il piu grande e il piu piccolo tra A,B,C da implicazioni*

> (Punti 4) Su tre numeri A, B e C si hanno le seguenti informazioni:
> 	
> - se A non è il più grande dei tre, allora il più grande è C;
> 	
> - se C non è il più piccolo dei tre, allora il più grande è B. 
> Quali sono, nell’ordine, il più grande e il più piccolo? 
> (A) B e C                    	 (B) A e C               	
> (C) C e B               	
> (D) B e A                 	
> (E) A e B

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


The largest and smallest of A,B,C by implications

> (Points 4) Three numbers A, B and C have the following information:
> 	
> - if A is not the largest of the three, then the largest is C;
> 	
> - if C is not the smallest of the three, then the largest is B. What are the largest and smallest in order? (A) B e C                    	 (B) A e C (C) C e B (D) B e A (E) A e B

**Answer:** B
[[src_kangourou_2017_benjamin_semifinale__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Collezioni di figurine ottenibili nel gioco JUMP*

> (Punti 4) Nel gioco da tavola JUMP ogni giocatore parte dalla casella con la scritta INIZIO e a ogni mossa
> può saltare una o due caselle muovendosi sempre in avanti e con l’ultimo salto deve arrivare esattamente
> nella casella FINE, altrimenti perde. In ogni casella c’è una figurina e il giocatore raccoglie tutte le figurine
> su cui atterra.
> INIZIO
> a
> n
> n
> s
> s
> s
> a
> s
> n
> n
> a
> FINE
> Tra le seguenti collezioni di figurine quali può ottenere?
>
> (1) n n s s s         	 (2) a n n s
> (3)  n n s
>
> (4) a a n s
> (5) n n s s
> (Attenzione: le figurine nelle collezioni non sono ordinate secondo l’ordine con cui sono collezionate.)
>
> - **(A)** Solo 1 e 3
> - **(B)** Solo 2 e 5
> - **(C)** Solo 1, 4 e 5
> - **(D)** Tutte tranne la 4 (E) Tutte

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


*Collections of figures available in the game JUMP*

> (Points 4) In the JUMP board game each player leaves the box with the inscription INICIO and at each move can jump one or two boxes moving forward and with the last jump he must get exactly into the box FINE, otherwise he loses. In each box there is a figure and the player collects all the figures on which they land. What is the collection of figurines you can obtain?
>
> (1) n n s s s         	 (2) a n n s (3)  n n s
>
> (4) to paragraphs 5 to 5 (Note: the figures in the collections are not in the order in which they were collected.)
>
> - **(A)** Just one and three.
> - **(B)** Just two and five.
> - **(C)** Just one, four and five.
> - **(D)** All but 4 (E) All

**Answer:** D
[[src_kangourou_2017_benjamin_semifinale__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Modi di inserire 1..5 con catena di disuguaglianze*

> (Punti 4) Vuoi inserire in ciascuno degli spazi denotati dai puntini uno dei numeri 1, 2, 3, 4, 5  in modo che
> ogni numero sia utilizzato una sola volta e che le disuguaglianze:
> … < … > … < … < ….
> siano tutte vere. In quanti modi puoi farlo?
>
> - **(A)** 1
> - **(B)** 3
> - **(C)** 6
> - **(D)** 9
> - **(E)** 15

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


*Mode of inserting 1.5. with chain of inequalities*

> (Points 4) You want to insert in each of the spaces marked by the dots one of the numbers 1, 2, 3, 4, 5 so that each number is used only once and that the inequalities: ... < ... > ... < ... < .... They're all true. How many ways can you do that?
>
> - **(A)** 1
> - **(B)** 3
> - **(C)** 6
> - **(D)** 9
> - **(E)** 15

**Answer:** D
[[src_kangourou_2017_benjamin_semifinale__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Quante volte Daria sorpassa Baldo sulla pista*

> (Punti 5) Nonno Baldo e sua nipote Daria corrono, nello stesso verso, per 10 km su una pista di atletica
> lunga 400 m, partendo nello stesso istante dallo stesso punto. Entrambi per tutta la corsa vanno a velocità
> costante; intanto che Daria percorre 20 m, Baldo ne percorre 17. Quante volte durante la corsa Daria sorpassa
> Baldo?
>
> - **(A)** 1
> - **(B)** 2
> - **(C)** 3
> - **(D)** 4
> - **(E)** 5

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** C
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


How many times does Daria overtake Baldo on the track?

> Grandfather Baldo and his granddaughter Daria run in the same direction for 10 km on a 400 m long track, starting at the same moment from the same point. Both run at a constant speed; while Daria runs 20 m, Baldo runs 17. How many times during the race does Daria overtake Baldo?
>
> - **(A)** 1
> - **(B)** 2
> - **(C)** 3
> - **(D)** 4
> - **(E)** 5

**Answer:** C
[[src_kangourou_2017_benjamin_semifinale__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_geometria_solida,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Immagine del cubo non coerente con le altre*

![[src_kangourou_2017_benjamin_semifinale__prob8.png]]

> (Punti 5) Rita ha rivestito
> ognuna delle sei facce di un
> cubo con carte di colori tutti
> diversi. Quale tra le imma­
> gini a fianco non è in accor­
> do con le altre tre e quindi
> certamente non rappresenta
> il cubo rivestito da Rita?
>
> - **(A)** 1
> - **(B)** 2
> - **(C)** 3
> - **(D)** 4
> - **(E)** Nessuna

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


*Image of the cube not consistent with the others*

![[src_kangourou_2017_benjamin_semifinale__prob8.png]]

> Rita covered each of the six faces of a cube with cards of different colors. Which of the images next to it is not in agreement with the other three and therefore certainly does not represent the cube wrapped by Rita?
>
> - **(A)** 1
> - **(B)** 2
> - **(C)** 3
> - **(D)** 4
> - **(E)** None of them .

**Answer:** C
[[src_kangourou_2017_benjamin_semifinale__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_combinatoria,topic_logica,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo treni per il servizio ferroviario settimanale*

> (Punti 6) Due città A e B (che stanno entro lo stesso fuso orario) sono collegate da una ferrovia. Il percorso
> in treno tra le due città dura 5 ore. Ogni giorno, i treni partono da A per B ogni ora a partire dalle 6:00 fino
> alle 18:00 comprese; partono da B verso A ogni ora a partire dalle 6:30 fino alle 18:30 comprese. Supponi che i
> treni siano sempre in orario e che non subiscano guasti: qual è il minimo numero di treni che rende possibile
> attuare il servizio settimanale?
>
> - **(A)** 26
> - **(B)** 13
> - **(C)** 6
> - **(D)** 24
> - **(E)** 11 Quesiti a risposta aperta

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** E
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum trains for the weekly train service*

> (Points 6) Two cities A and B (which are within the same time zone) are connected by rail. The train journey between the two cities takes five hours. Every day, trains depart from A to B every hour from 6:00 to 18:00 inclusive; depart from B to A every hour from 6:30 to 18:30 inclusive. Suppose trains are always on time and without failures: what is the minimum number of trains that makes it possible to run the weekly service?
>
> - **(A)** 26
> - **(B)** 13
> - **(C)** 6
> - **(D)** 24
> - **(E)** 11 Questions Answered

**Answer:** E
[[src_kangourou_2017_benjamin_semifinale__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Biglietto venduto insieme al numero 374 (650 biglietti)*

> (Punti 4) Carlo ha deciso di vendere a coppie i biglietti di una lotteria di beneficenza. Ha 650 biglietti nu­
> merati da 1 a 650 e vende il primo biglietto (quello col numero 1) insieme all’ultimo (quello col numero 650), 
> il secondo con il penultimo e così via. Qual è il numero del biglietto che Carlo vende insieme con il biglietto 
> numero 374?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 277
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


Tickets sold together with number 374 (650 tickets)

> Charles decided to sell the lottery tickets to a charity. It has 650 tickets numbered from 1 to 650 and sells the first ticket (the one with the number 1) together with the last one (the one with the number 650), the second one with the penultimate one and so on. What's the number of the ticket that Carlo sells along with the number 374 ticket?

**Answer:** 277
[[src_kangourou_2017_benjamin_semifinale__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Piu piccolo numero piccante di due cifre*

> (Punti 5) Chiamiamo “piccante” un numero di due cifre che sia la somma della somma delle sue cifre e 
> del prodotto delle sue cifre. Ad es. 89 è un numero piccante poiché 89 = (8 + 9) + (8×9) = 17 + 72. Qual è il più 
> piccolo numero piccante?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 19
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


*Small spicy two-digit number *

> (Points 5) We call a two-digit number piccante which is the sum of the sum of its digits and the product of its digits. Ad es. 89 is a spicy number because 89 = (8 + 9) + (8×9) = 17 + 72. What's the smallest spicy number?

**Answer:** 19
[[src_kangourou_2017_benjamin_semifinale__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,method_congruenze,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma naturali con resto uguale al quoziente diviso 6*

> (Punti 5) Qual è la somma di tutti i numeri naturali che divisi per 6 danno un resto uguale al quoziente?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 105
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


*Natural sum with remainder equal to quotient 6*

> (Points 5) What is the sum of all the natural numbers that divided by 6 gives a residual equal to the quotient?

**Answer:** 105
[[src_kangourou_2017_benjamin_semifinale__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*ritorno piu lento di un quinto*

> (Punti 6) Stefania parte da casa a piedi per andare a trovare un’amica in una città vicina, si ferma da lei 
> un’ora e ritorna a casa. Per la stanchezza, al ritorno in ogni ora di cammino copre una distanza inferiore di un 
> quinto a quella coperta in un’ora di cammino all’andata. In questo modo, tornando a casa impiega comples­
> sivamente un’ora in più che all’andata. Per quante ore è stata lontana da casa?

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


* slower than a fifth *

> Stephania leaves home on foot to visit a friend in a nearby town, stops by her for an hour and returns home. For fatigue, on return every hour of walking it covers a distance less than one fifth of that covered in an hour of walking. In this way, returning home generally takes an hour longer than usual. How many hours have you been away from home?

[[src_kangourou_2017_benjamin_semifinale__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*4 figli, 2 padri, 2 zii con nipote*

> (Punti 6) In una stanza sono presenti esattamente quattro figli, ciascuno con il proprio padre, esattamente 
> due padri ed esattamente due zii ciascuno con un nipote. Qual è il più piccolo numero di persone presenti 
> nella stanza per cui ciò potrebbe accadere?

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


4 children, 2 fathers, 2 uncles and nephews

> (Points 6) In one room there are exactly four children, each with their father, exactly two fathers and exactly two uncles each with a grandson. What's the smallest number of people in the room that this could happen to?

[[src_kangourou_2017_benjamin_semifinale__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo intero che moltiplicato per 2017,316 da un intero*

> (Punti 6)  La gara di marzo si è svolta il 16-3-2017. Qual è il più piccolo numero intero positivo che  mol­
> tiplicato per il numero (non intero) 2017,316  dà come risultato un numero intero?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 250
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


*Integer minimum that multiplied by 2017,316 by an integer*

> The March competition took place on 16-3-2017. What is the smallest positive integer multiplied by the (non-integer) number 2017,316 giving an integer?

**Answer:** 250
[[src_kangourou_2017_benjamin_semifinale__Q15]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_aritmetica,topic_geometria_solida,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Cubetti di ciascun cubo costruito da Paola e Giovanna*

> (Punti 7)  Pietro, Paola e Giovanna hanno complessivamente 2017 cubetti, tutti della stessa dimensione. 
> Accostandone più della metà, Pietro ha costruito un cubo grande e ha detto a Paola e Giovanna: “Avrei po­
> tuto costruire un cubo più grande ma in questo modo, utilizzando tutti e soli i cubetti rimasti, voi potete co­
> struire un cubo ciascuna e i vostri due cubi saranno della stessa dimensione”. Da quanti cubetti sarà formato 
> ognuno dei due cubi?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_solida|Geometria solida]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


*Cubs of each cube built by Paola and Giovanna*

> (Points 7) Pietro, Paola and Giovanna have a total of 2017 cubes, all of the same size. Approaching more than half of it, Peter constructed a large cube and said to Paola and Joan: 'I could have built a larger cube but this way, using all but the remaining cubes, you can construct a cube each and your two cubes will be of the same size. How many cubes will each of the two cubes be made of?

[[src_kangourou_2017_benjamin_semifinale__Q16]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_aritmetica,topic_combinatoria,method_grafi,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Prime quattro cifre della sequenza multipli di 17 o 23*

> (Punti 7) Una sequenza di 2017 cifre è tale che ogni numero di due cifre che si può ottenere accostando 
> due cifre consecutive della sequenza (nell’ordine in cui compaiono) è multiplo di 17 oppure di 23. L’ultima 
> cifra della sequenza è 1. Quali sono le prime quattro cifre della sequenza?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


*First four digits of the multiple sequence of 17 or 23*

> (Points 7) A sequence of 2017 digits is such that any number of two digits that can be obtained by approaching two consecutive digits of the sequence (in the order in which they appear) is a multiple of 17 or 23. The last digit of the sequence is 1. What are the first four digits of the sequence?

[[src_kangourou_2017_benjamin_semifinale__Q17]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_algebra,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero di condotti della piscina dati tempi di riempimento*

> (Punti 8) Una piscina è alimentata da vari condotti. Se, a piscina vuota, tutti vengono aperti, la piscina si 
> riempie in un’ora. Se, a piscina vuota, tutti vengono aperti e dopo 10 minuti ne vengono chiusi 10, per riem­
> pire la piscina occorrono 10 minuti in più. Quanti sono i condotti di cui è dotata la piscina?
> 1
> 2
> 3
> 4
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
> 5
> 5
> 6
> 6
> 6
> 7
> 7
> 8
> risposta
> 0277
> 0019
> 0105
> 0010
> 0005
> 0250
> 0343
> 2346
> 0060

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 60
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1uSb-8ZS0ZxgQE-rDkGuF4RrLMjBY_qKl/view)


<span class="qlang-split" data-lang="en"></span>


*Number of pool pipes data filling times*

> (Points 8) A swimming pool is powered by various pipes. If the pool is empty and everyone is open, the pool fills up in an hour. If, in an empty pool, everyone opens and closes after 10 minutes, it takes 10 more minutes to recall the pool. How many pipes does the pool have? 1 2 3 4
> 
> Question No. The Commission shall adopt delegated acts in accordance with the opinion of the Committee on Budgetary Control and the opinion of the Committee on Budgetary Control.

**Answer:** 60
[[src_kangourou_2017_benjamin_semifinale__Q18]]
