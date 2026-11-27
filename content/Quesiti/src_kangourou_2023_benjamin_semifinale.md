---
title: Kangourou 2023 Benjamin — Semifinale individuale
tipo: gara
competition: Kangourou 2023 Benjamin — Semifinale individuale
family: kangourou
year: '2023'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2023_benjamin_semifinale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,method_congruenze,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*min cifre dispari*

> (Punti 2) Adele ha scritto un numero formato da 3 cifre dispari e alcune cifre pari, Marco ha scritto un nu­
> mero formato da 2 cifre dispari e alcune cifre pari. Gianna ha sommato il numero di Adele a quello di Marco. 
> Quante cifre dispari avrà al minimo il numero ottenuto da Gianna?
> A) 0 (cioè può non averne) 	
>             B) 1               C) 2            D) 3              E) 4

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*How many odd digits will the number obtained by Gianna have, at least?*

> (2 points) Adele wrote a number made up of 3 odd digits and some even digits; Marco wrote a number made up of 2 odd digits and some even digits. Gianna added Adele's number to Marco's. How many odd digits will the number obtained by Gianna have, at least?
>
> A) 0 (that is, it may have none)
> B) 1
> C) 2
> D) 3
> E) 4

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,method_congruenze,method_casework,skill_conteggio_sistematico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*somma Renata tripla di Gabriele, numero scartato*

![[src_kangourou_2023_benjamin_semifinale__prob2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[thick] (0,0) rectangle (3,3);
  \draw[thick] (1,0) -- (1,3);
  \draw[thick] (2,0) -- (2,3);
  \draw[thick] (0,1) -- (3,1);
  \draw[thick] (0,2) -- (3,2);
  \node at (0.5,2.5) {1};
  \node at (1.5,2.5) {2};
  \node at (2.5,2.5) {3};
  \node at (0.5,1.5) {4};
  \node at (1.5,1.5) {5};
  \node at (2.5,1.5) {6};
  \node at (0.5,0.5) {7};
  \node at (1.5,0.5) {8};
  \node at (2.5,0.5) {9};
\end{tikzpicture}
\end{document}
```

> (Punti 3) Osserva la griglia a destra in cui sono riportati i numeri interi da 1 a 9. Gabriele 
> ha scelto 4 di questi numeri, Renata ne ha scelti altri 4. La somma dei numeri scelti da Renata 
> è il triplo della somma dei numeri scelti da Gabriele. Qual è il numero che nessuno dei due 
> ha scelto?
> A) 1           B) 5             C) 7             D) 8           E) 9

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*What is the number that neither of them chose?*

![[src_kangourou_2023_benjamin_semifinale__prob2.png]]

> (3 points) Look at the grid on the right, in which the integers from 1 to 9 are written. Gabriele chose 4 of these numbers, and Renata chose another 4. The sum of the numbers Renata chose is three times the sum of the numbers Gabriele chose. What is the number that neither of them chose?
>
> A) 1
> B) 5
> C) 7
> D) 8
> E) 9

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_casework|Case analysis]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_logica,method_casework,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="it"></div>


*min carte da rovesciare*

> (Punti 3) Aldo possiede cinque carte: per ognuna di esse su una faccia c’è una lettera dell’alfabeto, sulla 
> faccia opposta un numero intero. Le carte sono disposte sul tavolo e mostrano le seguenti facce: E, G, 4, 7, 8. 
> Aldo dichiara che, per ogni carta, se su una delle facce c’è una vocale, su quella opposta c’è un numero pari. 
> Marta vuole controllare se Aldo dice la verità, ma vuole rovesciare il minor numero possibile di carte. Quante 
> carte dovrà rovesciare al massimo? 
> A) 1           B) 2             C) 3            D) 4            E) 5

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*How many cards will she have to turn over, at most?*

> (3 points) Aldo has five cards: for each of them there is a letter of the alphabet on one face, and an integer on the opposite face. The cards are laid on the table and show the following faces: E, G, 4, 7, 8. Aldo states that, for every card, if there is a vowel on one of the faces, there is an even number on the opposite one. Marta wants to check whether Aldo is telling the truth, but she wants to turn over as few cards as possible. How many cards will she have to turn over, at most?
>
> A) 1
> B) 2
> C) 3
> D) 4
> E) 5

**Topic:** [[topic_logica|Logic, games and strategies]]
**Method:** [[method_casework|Case analysis]]
**Skill:** [[skill_lettura_attenta|Careful reading]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*colonna di 2023*

![[src_kangourou_2023_benjamin_semifinale__prob4.png]]

> (Punti 4) I numeri interi da 1 a 9.000 sono stati inseriti in 
> una enorme tabella a 9 colonne secondo il criterio indicato 
> in figura. In quale colonna è stato inserito il numero 2.023?
> A) A           B) D           C) F            D) H           E) I

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*In which column was the number 2.023 entered?*

![[src_kangourou_2023_benjamin_semifinale__prob4.png]]

> (4 points) The integers from 1 to 9.000 have been entered in a huge table of 9 columns according to the rule indicated in the picture. In which column was the number 2.023 entered?
>
> A) A
> B) D
> C) F
> D) H
> E) I

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Method:** [[method_congruenze|Modular arithmetic / congruences]]
**Skill:** [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,method_congruenze,method_inclusione_esclusione,skill_modellizzazione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*orario*

> (Punti 4) In una centrale vi sono due guardiani. Vi sono anche due segnalatori acustici di sicurezza: uno 
> emette uno squillo ogni due minuti, l’altro lo emette ogni tre. Quando squillano contemporaneamente si sen­
> te uno squillo solo. Alle 12:00 hanno squillato contemporaneamente e vi era un solo guardiano nella centrale; 
> quando il secondo dei guardiani è entrato nella centrale, hanno squillato ancora contemporaneamente e, dal­
> le 12:00 a quell’istante inclusi, il primo guardiano, sempre presente, ha udito 13 squilli. A che ora il secondo 
> guardiano è entrato nella centrale?
> A) 12:12         B) 12:15          C) 12:18            D) 12:24           E) 12:30

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_inclusione_esclusione|Inclusione-esclusione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*At what time did the second guard enter the control room?*

> (4 points) In a control room there are two guards. There are also two acoustic safety signals: one gives a beep every two minutes, the other gives one every three. When they beep at the same time only one beep is heard. At 12:00 they beeped at the same time and there was only one guard in the control room; when the second of the guards entered the control room, they beeped at the same time again and, from 12:00 up to and including that instant, the first guard, who was always present, heard 13 beeps. At what time did the second guard enter the control room?
>
> A) 12:12
> B) 12:15
> C) 12:18
> D) 12:24
> E) 12:30

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_inclusione_esclusione|Inclusion–exclusion]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,method_congruenze,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*differenza possibile*

> (Punti 4) Clara ha scritto un numero intero di tre cifre, Dalia ha scritto il numero che ha le stesse cifre di 
> quello di Clara, ma scritte in ordine opposto (cioè, nei due numeri, la cifra delle centinaia e quella delle unità 
> sono scambiate fra loro, mentre quella delle decine è la stessa). Quale, fra quelli elencati nelle risposte, può 
> essere la differenza fra il numero di Clara e quello di Dalia?  
> A) 378            B) 295            C) 196             D) 495            E) 504

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*Which of those listed in the answers can be the difference between Clara's number and Dalia's?*

> (4 points) Clara wrote a three-digit integer, and Dalia wrote the number that has the same digits as Clara's, but written in the opposite order (that is, in the two numbers, the hundreds digit and the units digit are swapped, while the tens digit is the same). Which of those listed in the answers can be the difference between Clara's number and Dalia's?
>
> A) 378
> B) 295
> C) 196
> D) 495
> E) 504

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_logica,method_congruenze,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*giro di Bill*

![[src_kangourou_2023_benjamin_semifinale__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[thick] (0,0) circle(2.5);
  \node[draw, circle, inner sep=1.5pt, minimum size=16pt, fill=white] (n1) at (0.000,2.500) {\small 1};
  \node[draw, circle, inner sep=1.5pt, minimum size=16pt, fill=white] (n2) at (1.162,2.214) {\small 2};
  \node[draw, circle, inner sep=1.5pt, minimum size=16pt, fill=white] (n3) at (2.057,1.420) {\small 3};
  \node[draw, circle, inner sep=1.5pt, minimum size=16pt, fill=white] (n4) at (2.482,0.301) {\small 4};
  \node[draw, circle, inner sep=1.5pt, minimum size=16pt, fill=white] (n5) at (2.338,-0.887) {\small 5};
  \node[draw, circle, inner sep=1.5pt, minimum size=16pt, fill=white] (n6) at (1.658,-1.871) {\small 6};
  \node[draw, circle, inner sep=1.5pt, minimum size=16pt, fill=white] (n7) at (0.598,-2.427) {\small 7};
  \node[draw, circle, inner sep=1.5pt, minimum size=16pt, fill=white] (n8) at (-0.598,-2.427) {\small 8};
  \node[draw, circle, inner sep=1.5pt, minimum size=16pt, fill=white] (n9) at (-1.658,-1.871) {\small 9};
  \node[draw, circle, inner sep=1.5pt, minimum size=16pt, fill=white] (n10) at (-2.338,-0.887) {\small 10};
  \node[draw, circle, inner sep=1.5pt, minimum size=16pt, fill=white] (n11) at (-2.482,0.301) {\small 11};
  \node[draw, circle, inner sep=1.5pt, minimum size=16pt, fill=white] (n12) at (-2.057,1.420) {\small 12};
  \node[draw, circle, inner sep=1.5pt, minimum size=16pt, fill=white] (n13) at (-1.162,2.214) {\small 13};
\end{tikzpicture}
\end{document}
```

> (Punti 5) Lungo una pista circolare sono poste delle piazzole numerate come 
> in figura; la distanza tra due piazzole adiacenti è sempre la stessa. Due canguri 
> Bill e Kan saltano da una piazzola a quella adiacente, Bill in verso orario, Kan 
> nel verso opposto, ciascuno a velocità costante, ma diversa: infatti sono partiti 
> nello stesso istante dalla piazzola 1 e si sono incrociati per la prima volta quan­
> do entrambi sono arrivati sulla piazzola 6. Si sa che prima o poi si incroceranno 
> entrambi sulla piazzola 7: quando ciò accadrà per la prima volta, quale giro di 
> pista starà facendo Bill?  
> A) Il primo.         B) Il secondo.          C) Il terzo.            D) Il quarto.          E) Il quinto.
> A
> B
> C
> D
> E
> F
> G
> H
> I
> 1
> 2
> 3
> 4
> 5
> 9
> 8
> 7
> 6
> 10
> 11
> 12
> 13
> 14
> 18
> 17
> 16
> 15
> 19
> 20
> ...
> ...
> ...

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*When this happens for the first time, which lap of the track will Bill be on?*

![[src_kangourou_2023_benjamin_semifinale__prob7.png]]

> (5 points) Along a circular track there are bays numbered as in the picture; the distance between two adjacent bays is always the same. Two kangaroos, Bill and Kan, jump from one bay to the adjacent one, Bill clockwise, Kan in the opposite direction, each at constant but different speed: indeed they set off at the same instant from bay 1 and crossed for the first time when both arrived at bay 6. It is known that sooner or later they will both cross at bay 7: when this happens for the first time, which lap of the track will Bill be on?
>
> A) The first.
> B) The second.
> C) The third.
> D) The fourth.
> E) The fifth.

**Topic:** [[topic_logica|Logic, games and strategies]]
**Method:** [[method_congruenze|Modular arithmetic / congruences]]
**Skill:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_geometria_piana,method_casework,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*quale ora dà l'angolo acuto minore*

> (Punti 5) In quale delle seguenti ore e minuti le due lancette di un orologio (con un quadrante di 12 ore) 
> formano l’angolo acuto minore?
> A) 02:11             B) 04:22               C) 06:33            D) 08:44              E) 10:55

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*At which of the following hours and minutes do the two hands of a clock form the smaller acute angle?*

> (5 points) At which of the following hours and minutes do the two hands of a clock (with a 12-hour face) form the smaller acute angle?
>
> A) 02:11
> B) 04:22
> C) 06:33
> D) 08:44
> E) 10:55

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_aritmetica,method_conteggio,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numeri <40 con somma dei quadrati delle cifre quadrato*

> (Punti 6) Quanti numeri interi positivi minori di 40 hanno la proprietà che la somma dei quadrati delle 
> loro due cifre è essa stessa un quadrato perfetto? (I numeri vanno pensati comunque di due cifre, ad esempio 4 va 
> pensato scritto come 04.)
> A) 1             B) 9               C) 12            D) 13              E) 14
> Quesiti a risposta aperta

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*How many positive integers less than 40 have the property that the sum of the squares of their two digits is itself a perfect square?*

> (6 points) How many positive integers less than 40 have the property that the sum of the squares of their two digits is itself a perfect square? (The numbers are in any case to be thought of as having two digits; for example 4 is to be thought of as written 04.)
>
> A) 1
> B) 9
> C) 12
> D) 13
> E) 14
>
> Open-ended questions

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_aritmetica,method_casework,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*totale famiglia*

> (Punti 4) Ho tanti fratelli quante sorelle. Per ognuno dei miei fratelli, accade che il numero delle sue sorel­
> le è il doppio del numero dei suoi fratelli. Con mamma e papà, in quanti siamo in famiglia?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*With mum and dad, how many are we in the family?*

> (4 points) I have as many brothers as sisters. For each of my brothers, it happens that the number of his sisters is twice the number of his brothers. With mum and dad, how many are we in the family?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*altezza e bisettrice, angolo ACB*

![[src_kangourou_2023_benjamin_semifinale__prob11.png]]

> (Punti 5) Nel triangolo ABC in figura, l’altezza EC condotta da C incontra la biset­
> trice AD dell’angolo BAC nel punto O. L’angolo ABC misura 60 gradi, l’angolo AOE 
> ne misura 70. Quanti gradi misura l’angolo ACB?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*How many degrees does the angle ACB measure?*

![[src_kangourou_2023_benjamin_semifinale__prob11.png]]

> (5 points) In the triangle ABC in the picture, the altitude EC drawn from C meets the bisector AD of the angle BAC at the point O. The angle ABC measures 60 degrees, and the angle AOE measures 70. How many degrees does the angle ACB measure?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Skill:** [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_geometria_piana,method_casework,skill_conteggio_sistematico,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*quanti bastano per il disegno*

![[src_kangourou_2023_benjamin_semifinale__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[thick] (0,0) rectangle (3,3);
  \draw[thick] (1,0) -- (1,3);
  \draw[thick] (2,0) -- (2,3);
  \draw[thick] (0,1) -- (3,1);
  \draw[thick] (0,2) -- (3,2);
\end{tikzpicture}
\end{document}
```

> (Punti 5) Con un pennarello nero, Lorenzo ha disegnato su un foglio di carta tra­
> sparente 10 quadrati di lato 1 cm, 10 quadrati di lato 2 cm e 10 quadrati di lato 3 cm 
> e poi li ha ritagliati (i bordi sono rimasti ben visibili dopo il taglio). Ora deve usarne 
> alcuni per ottenere lo stesso disegno che compare in figura.  Per eseguire questo com­
> pito può accostarli o sovrapporli parzialmente. Quanti gliene bastano?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*How many are enough for him?*

![[src_kangourou_2023_benjamin_semifinale__prob12.png]]

> (5 points) With a black marker, Lorenzo drew on a sheet of transparent paper 10 squares of side 1 cm, 10 squares of side 2 cm and 10 squares of side 3 cm, and then cut them out (the borders remained clearly visible after the cut). Now he has to use some of them to obtain the same drawing that appears in the picture. To carry out this task he may place them side by side or overlap them partly. How many are enough for him?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_logica,topic_disuguaglianze,method_estremalita,method_casework,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*pere non usate*

> (Punti 6) Avevo 10 mele di pesi diversi fra loro e 10 pere di pesi diversi fra loro. Ogni pera pesava più di 
> ogni mela, ma meno di una qualunque coppia di mele. Sono stato fortunato e sono riuscito a confezionare tre 
> sacchetti misti, in ognuno dei quali il complesso delle pere pesa quanto il complesso delle mele. Certamente 
> non avrei potuto sperare di utilizzare più pere di quelle che ho utilizzato. Quante pere non ho utilizzato?

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*How many pears did I not use?*

> (6 points) I had 10 apples of weights all different from one another and 10 pears of weights all different from one another. Every pear weighed more than every apple, but less than any pair of apples. I was lucky and managed to make up three mixed bags, in each of which the pears together weigh as much as the apples together. I certainly could not have hoped to use more pears than the ones I used. How many pears did I not use?

**Topic:** [[topic_logica|Logic, games and strategies]], [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_aritmetica,method_fattorizzazione,method_casework,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*peso Maurizio*

> (Punti 6) Maurizio e Carlo hanno ciascuno una scatola di palline. Ogni pallina pesa un numero intero di 
> grammi; in ognuna delle scatole, le palline hanno tutte lo stesso peso, ma quelle della scatola di Maurizio 
> sono più leggere di quelle della scatola di Carlo. Moltiplicando il peso di una pallina di Maurizio per quello 
> di una pallina di Carlo si ottiene 81; sommando i pesi di tutte le palline si ottiene 1001. Quanti grammi pesa 
> ognuna delle palline di Maurizio?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*How many grams does each of Maurizio's balls weigh?*

> (6 points) Maurizio and Carlo each have a box of balls. Each ball weighs a whole number of grams; in each of the boxes, the balls all have the same weight, but those in Maurizio's box are lighter than those in Carlo's box. Multiplying the weight of one of Maurizio's balls by that of one of Carlo's balls gives 81; adding the weights of all the balls gives 1001. How many grams does each of Maurizio's balls weigh?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_casework|Case analysis]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_aritmetica,method_congruenze,method_fattorizzazione,skill_casework_accurato,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*n sia 23*

> (Punti 6) Quanti sono i numeri interi positivi n tali che il resto della divisione 2023 : n sia 23?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*How many positive integers n are there such that the remainder of the division 2023 : n is 23?*

> (6 points) How many positive integers n are there such that the remainder of the division 2023 : n is 23?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_algebra,topic_funzionali,method_ricorsione,skill_riconoscimento_pattern,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*quanti*

> (Punti 7) Alcuni numeri, tutti diversi fra loro, sono scritti in corrispondenza di punti distinti di una cir­
> conferenza in modo che ognuno sia il prodotto dei due numeri scritti a esso adiacenti. Quanti sono i numeri 
> scritti?

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*How many numbers are written?*

> (7 points) Some numbers, all different from one another, are written at distinct points of a circle so that each is the product of the two numbers written next to it. How many numbers are written?

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_ricorsione|Recursion]]
**Abilita:** [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_aritmetica,method_casework,method_congruenze,skill_manipolazione_algebrica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*trova n*

> (Punti 7) Gaia gioca così. Scrive un numero intero n, poi lo moltiplica a caso o per 5 o per 6. Al prodotto 
> somma a caso o 5 o 6. Alla somma sottrae a caso o 5 o 6. Se il risultato finale è 78, che numero è n?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*What number is n?*

> (7 points) Gaia plays like this. She writes an integer n, then multiplies it at random either by 5 or by 6. To the product she adds at random either 5 or 6. From the sum she subtracts at random either 5 or 6. If the final result is 78, what number is n?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_aritmetica,method_congruenze,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*somma cifre eliminabili*

> (Punti 8) È dato il numero 7 2 3 1 1 2 3 7 7 2 1 3 7 3 2 1: da esso si vuole eliminare esattamente una cifra e 
> ottenere dall’allineamento di cifre rimanenti (una in meno di prima) un nuovo numero che risulti divisibile 
> per 9. Vi sono diversi modi di farlo. Qual è la somma delle cifre che possono essere eliminate al variare dei 
> modi possibili?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1mF2rVbrNP5wIK8iQldHBHcyFNDzq0vZz/view)


<div class="qlang-split" data-lang="en"></div>


*What is the sum of the digits that can be eliminated, as the possible ways vary?*

> (8 points) The number 7 2 3 1 1 2 3 7 7 2 1 3 7 3 2 1 is given: from it one wants to eliminate exactly one digit and obtain, from the line of the remaining digits (one fewer than before), a new number that is divisible by 9. There are several ways of doing it. What is the sum of the digits that can be eliminated, as the possible ways vary?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Method:** [[method_congruenze|Modular arithmetic / congruences]]
**Skill:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
