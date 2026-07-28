---
title: Archimede 2001 - Gara del Pubblico (Cesenatico)
tipo: gara
competition: Archimede 2001 - Gara del Pubblico (Cesenatico)
family: archimede
year: '2001'
level: gara del pubblico
---
<div class="atom-reader" data-gara="Quesiti/src_archimede_2001_pubblico"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,method_ricorsione,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*cerchi e quadrati inscritti, raggio oltre 200*

> La confederazione IMO è una pacifica civiltà aliena che si trova nella Galassia Asip. La galassia è formata da $n$ gruppi di stelle, ciascuno dei quali forma un cerchio. Il cerchio più piccolo (chiamato $I_1$) ha raggio $1$ Imoparsec. Se ad esso si circoscrive un quadrato e a questo si circoscrive un cerchio si trova la seconda cintura di stelle ($I_2$). In maniera analoga a partire da $I_2$ si ottiene $I_3$, e poi $I_4$, $I_5$, $\ldots$. L'ultima cintura è l'unica che ha un raggio più grande di $200$ Imoparsec. Quante sono in tutto le cinture?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0017
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


* inscribed circles and squares, radius greater than 200*

> The IMO Confederation is a peaceful alien civilization located in the Asip Galaxy. The galaxy is made up of $n$ groups of stars, each of which forms a circle. The smallest circle (called $I_1$) has a radius $1$ Imoparsec. If a square is circled to it and a circle is circled to it, the second star belt ($I_2$) is found. Similarly starting from $I_2$ you get $I_3$, and then $I_4$, $I_5$, $\ldots$. The last belt is the only one with a greater radius than $200$ Imoparsec. How many are in all the belts?

**Answer:** 0017
[[src_archimede_2001_pubblico__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Posizione del pianeta (15,30) nella numerazione a coppie*

> I pianeti della confederazione vengono identificati da una coppia di numeri naturali. La capitale (il pianeta d'origine della civiltà) è $(0, 0)$ e il primo pianeta colonizzato viene identificato con la coppia $(1, 0)$, il secondo da $(0, 1)$, il terzo da $(2, 0)$, il quarto da $(1, 1)$ e così via. Che posizione occupa il pianeta $(15, 30)$ nella storia dei pianeti colonizzati dagli Imo?
> 
> (NB: Più formalmente $(a, b)$ viene prima di $(c, d)$ se e solo se: $a + b < c + d$ oppure $a + b = c + d$ e $a > c$.)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1065
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


The position of the planet (15.30) in the pair numbering

> The confederation's planets are identified by a pair of natural numbers. The capital (the planet of origin of civilization) is $(0, 0)$ and the first colonized planet is identified by the pair $(1, 0)$, the second by $(0, 1)$, the third by $(2, 0)$, the fourth by $(1, 1)$ and so on. What position does the planet $(15, 30)$ occupy in the history of the Imo-colonized planets?
> 
> (NB: More formally $(a, b)$ comes before $(c, d)$ if and only if: $a + b < c + d$ or $a + b = c + d$ and $a > c$.)

**Answer:** 1065
[[src_archimede_2001_pubblico__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,topic_aritmetica,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*perimetro massimo intero*

> Il parlamento della confederazione ha come base un triangolo di cui un angolo è doppio dell'altro. Tutti i lati del triangolo hanno lunghezza intera e uno misura $35$ imometri. Quanto può essere lungo, al massimo, il perimetro dell'edificio?

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Risposta:** 0630
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*full maximum perimeter *

> The confederation's parliament is based on a triangle whose angle is twice that of the other. All sides of the triangle have full length and a measurement of $35$ imometres. How long can the perimeter of the building be, at most?

**Answer:** 0630
[[src_archimede_2001_pubblico__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*misura DC*

![[src_archimede_2001_pubblico__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (0,5);
  \coordinate (D) at (2,2.5);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (A) -- (D);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above left] at (C) {$C$};
  \node[right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> Nel parco davanti al parlamento c'è un'aiuola a forma di triangolo rettangolo tagliata in due parti dalla strada che porta all'ingresso del Senato (vedi figura). I lati dell'aiuola, il tratto di strada $AD$ e i lati $BD$ e $DC$ hanno lunghezza intera e $BC$ misura $20$ imometri. Quanti imometri misura $DC$ (scrivere $0$ se i dati sono insufficienti a risolvere il problema)? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0010
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


The measurement shall be carried out in accordance with the following conditions:

![[src_archimede_2001_pubblico__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (0,5);
  \coordinate (D) at (2,2.5);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (A) -- (D);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above left] at (C) {$C$};
  \node[right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> In the park in front of Parliament there is a rectangular triangle-shaped awning cut in two by the road leading to the entrance to the Senate (see figure). The sides of the windscreen, the road section $AD$ and the sides $BD$ and $DC$ have a full length and $BC$ measure $20$ imometers. How many imometers measure $DC$ (write $0$ if the data are insufficient to solve the problem)? (see figure)

**Answer:** 0010
[[src_archimede_2001_pubblico__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*cruciverba di numeri primi e prodotti*

![[src_archimede_2001_pubblico__prob5.png]]

> Uno dei provvedimenti più contestati del Senato imese è una legge che proibisce la pubblicazione di cruciverba. Alcune associazioni studentesche hanno lanciato per protesta il crucinumero sul mensile "Contestazione". Completare il seguente crucinumero:
> 
> $$\begin{array}{|c|c|c|c|}
> \hline
> \mathbf{1} & & \mathbf{2} & \\
> \hline
>  & & & \\
> \hline
> \mathbf{3} & & & \\
> \hline
> \mathbf{4} & & & \\
> \hline
> \end{array}$$
> 
> **Orizzontali:**
> - (1) La risposta esatta a questo gioco.
> - (2) È un numero primo, uguale al prodotto di più primi consecutivi meno $1$ (esempio $5 \cdot 7 \cdot 11 - 1$, anche se questo non è un numero primo).
> - (3) Prodotto di tre numeri consecutivi (esempio $4 \cdot 5 \cdot 6$).
> - (4) È prodotto di due primi.
> 
> **Verticali:**
> - (1) Somma di cubi di due numeri primi.
> - (2) Numero palindromo di $4$ cifre potenza di un primo (un numero palindromo è un numero che non cambia se lo si legge da destra a sinistra).
> - (3) È un numero primo.
> - (4) $3$ verticale al quadrato.
> 
> (NB: La risposta a una qualsiasi delle definizioni può anche essere un numero minore di $1000$. Se una delle risposte dovesse essere, ad esempio, $13$ nella tabella si inserisca $0013$.)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 2100
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*crossword of prime numbers and products*

![[src_archimede_2001_pubblico__prob5.png]]

> One of the most controversial measures of the Senate this month is a law banning the publication of crosswords. Some student associations have launched the monthly "Contestation" cross-number to protest. Complete the following cross-section:
> 
> $$\begin{array}{|c|c|c|c|} \hline \mathbf{1} & & \mathbf{2} & \\ \hline & & & \\ \hline \mathbf{3} & & & \\ \hline \mathbf{4} & & & \\ \hline \end{array}$$
> 
> **Horizontal: ** - (1) The exact answer to this game. - (2) It is a prime number, equal to the product of more consecutive prime numbers less $1$ (e.g. $5 \cdot 7 \cdot 11 - 1$, even if this is not a prime number). - (3) Product of three consecutive numbers (e.g. $4 \cdot 5 \cdot 6$). - (4) It is a product of two primes.
> 
> **Vertical: ** - (1) Sum of cubes of two prime numbers. - (2) Palindrome number of $4$ prime power digits (a palindrome number is a number that does not change if read from right to left). - (3) It is a prime number. - (4) $3$ vertical to square.
> 
> (NB: The answer to any of the definitions can also be less than $1000$. If one of the answers should be, for example, $13$ in the table, enter $0013$.)

**Answer:** 2100
[[src_archimede_2001_pubblico__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*in quanti modi*

> Per abbonarsi a "Contestazione" bisogna pagare $40$ Scudi all'Associazione Liberi Studenti Imesi. Nella confederazione si possono trovare banconote di ogni valore da $1$ a $100$ Scudi. In quanti modi un Imese può pagare l'abbonamento a "Contestazione" usando tre banconote diverse tra loro?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0114
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


* in how many ways*

> In order to subscribe to the contest you must pay $40$ Shields to the Free Students' Association Imesi. In the Confederation, you can find banknotes of any value from $1$ to $100$ Shields. How many ways can an Imese pay for a contest subscription using three different bills?

**Answer:** 0114
[[src_archimede_2001_pubblico__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_geometria_piana,method_invarianti,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*cifre decimali dopo 1000 mosse*

> I periodici imesi sono ricchi di rubriche su solitari e passatempi. Eccone uno. Si parte con tre punti su una circonferenza; una mossa consiste nel tracciare le bisettrici del triangolo individuato dai tre punti e considerare i punti che tali bisettrici intercettano sulla circonferenza. Xam inizia a giocare con dei punti che sulla circonferenza individuano archi di lunghezza $1$, $2$ e $3$. Xam si ferma dopo $1000$ mosse. Quante cifre dopo la virgola ha il prodotto delle lunghezze dei $3$ archi individuati dagli ultimi punti disegnati?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Geometria]]
**Risposta:** 1999
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*decimal digits after 1000 moves*

> The newspapers are full of articles on loneliness and hobbies. Here's one of them. Starting with three points on a circumference; one move consists of tracing the vertices of the triangle identified by the three points and considering the points that these vertices intercept on the circumference. Xam starts playing with points on the circumference that identify length arcs $1$, $2$ and $3$. Xam stops after $1000$ moves. How many digits after the comma does the product of the lengths of the $3$ arcs identified by the last points drawn have?

**Answer:** 1999
[[src_archimede_2001_pubblico__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,topic_logica,method_invarianti,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*unioni e divisioni, numero massimo di mucchi*

> Eccone un altro. Si parte con un certo numero di mucchi di pietre e sono consentite le seguenti operazioni: se ne possono unire due e se ne può dividere uno in due mucchi uguali (se il numero delle sue pietre è pari). Supponendo che Obob parta con $3$ mucchi fatti rispettivamente di $88$, $215$, e $72$ pietre qual è il numero massimo di mucchi a cui può arrivare?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0375
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*units and divisions, maximum number of heaps*

> Here's another one. The following operations are permitted: two can be joined and one can be divided into two equal piles (if the number of its stones is equal). Assuming Obob leaves with $3$ heaps made of $88$, $215$, and $72$ stones respectively, what is the maximum number of heaps he can reach?

**Answer:** 0375
[[src_archimede_2001_pubblico__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_algebra,topic_aritmetica,method_estremalita,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*massimo termine noto*

> Uno dei più importanti problemi dell'archeologia Imese è la decifrazione dei numeri della civiltà Qwghlm, della quale si conosce piuttosto bene la scrittura. È dato per scontato che i Qwghlmiani usassero un sistema in base $8$, avendo $8$ tentacoli. Un brillante archeologo ha appena trovato una pagina di un vecchio quaderno di matematica con su scritto:
> 
> "usando il metodo di 'R tennio [NDR: un noto matematico Qwghlmiano] si conclude che le radici del polinomio
> $$x^4 - \alpha x^2 + \beta x + \gamma = 0$$
> sono tutte intere"
> 
> Le lettere greche rappresentano due diverse cifre Qwghlmiane ignote. Calcolare il massimo valore che può assumere il termine noto.

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0600
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*maximum known term*

> One of the most important problems of Imese archaeology is the deciphering of the numbers of the Qwghlm civilization, whose writing is quite well known. It is assumed that the Qwghlmians used a $8$ base system, having $8$ tentacles. A brilliant archaeologist just found a page in an old math book that said:
> 
> "Using the 'R tennio method [NDR: a well-known Qwghlmian mathematician] we conclude that the roots of the $$x^4 - \alpha x^2 + \beta x + \gamma = 0$$ polynomial are all integers"
> 
> The Greek letters represent two different unknown Qwghlmian figures. Calculate the maximum value that the known term can assume.

**Answer:** 0600
[[src_archimede_2001_pubblico__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_geometria_solida,topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*raggio minimo cono*

> La tipica casa imese è formata da tre camere quadrate di lato lungo $30$ imometri collegate da un vano a forma triangolare, in modo che ogni lato di questo vano coincida con un lato di una delle camere. Il tetto è un cono circolare retto. Qual è il raggio minimo che la base del tetto deve avere affinché tutta la casa sia coperta? (Nella risposta indicate solo la parte intera del numero trovato)

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0041
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*minimum cone radius*

> The typical imese house consists of three square chambers of length $30$ imometres connected by a triangular-shaped compartment, so that each side of this compartment coincides with one side of one of the chambers. The roof is a straight circular cone. What is the minimum radius that the base of the roof must have to cover the entire house? (Only the full part of the number found is indicated in the answer)

**Answer:** 0041
[[src_archimede_2001_pubblico__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*lunghezza del segmento minore*

> Gli orologi a muro in uso nella confederazione hanno tutti la forma di un rettangolo avente l'angolo tra le diagonali di $45°$. Il lato maggiore è parallelo al suolo, mentre il lato minore misura $1336$ imopollici. Vi è solamente una lunga lancetta delle ore che si muove come la nostra e dopo mezza giornata ha compiuto un giro esatto. Nella capitale un giorno dura $20$ ore; in questo momento è l'una e un quarto e la lancetta individua un punto che divide in due segmenti il lato maggiore del rettangolo. Qual è la lunghezza del minore dei due segmenti?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0944
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*length of the minor segment*

> The wall clocks in use in the Confederation are all in the shape of a rectangle with the angle between the $45°$ diagonals. The upper side is parallel to the ground, while the lower side measures $1336$ unpolished. There is only a long handful of hours that moves like ours and after half a day he has made an exact turn. In the capital, a day lasts $20$ hours; at this time it is 1:15 and the bid identifies a point that divides the main side of the rectangle into two segments. What is the length of the lesser of the two segments?

**Answer:** 0944
[[src_archimede_2001_pubblico__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*numero minimo per fare 1000*

> Un altro antico popolo esistito prima della nascita della confederazione rappresentava ogni numero mediante una sequenza di due simboli: $|$ e $\uparrow$. Il simbolo $|$ in fondo a una sequenza significava aggiungere un'unità, mentre il simbolo $\uparrow$ significava moltiplicare per $7$. Ad esempio, la sequenza $|||\uparrow|$ rappresentava il numero $29$. Qual è il numero minimo di simboli necessari per rappresentare il numero $1000$?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0019
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*minimum number to make 1000*

> Another ancient people that existed before the birth of the confederation represented each number by a sequence of two symbols: $|$ and $\uparrow$. The $|$ symbol at the end of a sequence meant adding a unit, while the $\uparrow$ symbol meant multiplying by $7$. For example, the $|||\uparrow|$ sequence represented the $29$ number. What is the minimum number of symbols required to represent the number $1000$?

**Answer:** 0019
[[src_archimede_2001_pubblico__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_combinatoria,topic_aritmetica,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Anni bisestili con somma cifre 6 tra 0 e 7000*

> Nel calendario imese gli anni bisestili sono quelli corrispondenti a numeri la cui somma delle cifre è $6$ (ad esempio l'anno $1060$ è bisestile). Quanti anni bisestili ci sono stati tra l'anno zero e l'anno $7000$?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0084
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*Bisexual years with a sum of 6 digits between 0 and 7000*

> In the IMES calendar, even years are those corresponding to numbers whose sum of digits is $6$ (e.g. year $1060$ is even). How many leap years have there been between year zero and year$7000$?

**Answer:** 0084
[[src_archimede_2001_pubblico__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_geometria_piana,method_estremalita,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*area massima base*

> Il presidente della confederazione Ocram Itrof vuole farsi una piscina nel giardino della sua villa. Poiché non ama le figure geometriche troppo complicate decide che la sua piscina avrà forma rettangolare, così come è rettangolare il suo giardino. Inoltre vorrebbe mettere intorno alla vasca un vialetto costituito da tre tratti diritti in modo da formare un triangolo. Considerando trascurabile la larghezza del vialetto, quale sarà al più l'area base della piscina (in $\text{im}^2$) se il giardino si estende per $5200 \text{ im}^2$?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 1300
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*maximum base area*

> Confederation president Ocram Itrof wants to make a pool in his villa garden. Because he doesn't like too complicated geometric figures, he decides that his pool will be rectangular, just like his garden is rectangular. In addition, he would like to put a three-lane road around the basin to form a triangle. Considering the width of the alley is negligible, what will be the base area of the pool (in $\text{im}^2$) at most if the garden extends for $5200 \text{ im}^2$?

**Answer:** 1300
[[src_archimede_2001_pubblico__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_probabilita,topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*probabilita di max 5 punti consecutivi*

> Due fratelli Imesi in orbita attorno alla Terra hanno appena assistito in Imo-visione al quinto set della partita di pallavolo Italia-Jugoslavia, che si è concluso con il punteggio di $15$-$10$ a favore della Jugoslavia. "Peccato, dopo i $6$ punti consecutivi di Sartoretti pensavo proprio che potessimo rimontare", dice Oloap, che tifa per l'Italia. "Ti sbagli", dice Aerdna, "l'Italia non ha mai conquistato più di $5$ punti consecutivi". Oloap guarda le statistiche, vede che in tutto il set ci sono stati $7$ cambi palla e si mette a calcolare la probabilità che lui abbia ragione (calcolando il numero di tutti i possibili andamenti del punteggio, quelli che gli darebbero ragione e ricavando la percentuale trascurando le cifre decimali). Che percentuale troverà Oloap?
> 
> NB: Una squadra fa punto anche quando ottiene il cambio palla.

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0028
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*probability of up to 5 consecutive points*

> Two brothers stationed in orbit around the Earth have just watched the fifth set of the Italy-Yugoslavia volleyball game in Imo-Vision, which ended with the score of $15$-$10$ in favour of Yugoslavia. "Sadly, after Sartoretti's $6$ consecutive points I thought we could get back together", says Oloap, who plays for Italy. "You're wrong", says Aerdna, "Italy has never scored more than $5$ points in a row". Oloap looks at the statistics, sees that throughout the set there have been $7$ ball changes and he starts to calculate the probability that he is right (calculating the number of all possible moves of the score, those that would give him right and getting the percentage by ignoring the decimal digits). What percentage will Oloap find?
> 
> NB: A team scores even when they get the ball.

**Answer:** 0028
[[src_archimede_2001_pubblico__Q15]]



<span class="atom-split" id="q16" data-atom="q16" data-title="Quesito 16" data-tags="topic_geometria_piana,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*rapporto tra le aree*

> Di ritorno dal loro viaggio Aerdna ed Oloap ereditano da un prozio un campo di forma quadrata il cui lato è lungo $200$ imotavole. Nel testamento si dice che la divisione del campo deve essere fatta tracciando una retta che taglia due lati opposti in modo che la differenza dei perimetri delle due parti sia $300$ imotavole. Qual è il rapporto tra l'area della parte più estesa e l'area di quella meno estesa?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Risposta:** 0007
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*relationship between areas*

> Returning from their journey, Aerdna and Oloap inherited a square-shaped field whose side is $200$ unchanging. The will says that the division of the field must be done by drawing a line that cuts two opposite sides so that the difference in the perimeter of the two sides is $300$ unchanging. What is the relationship between the area of the largest part and the area of the smallest?

**Answer:** 0007
[[src_archimede_2001_pubblico__Q16]]



<span class="atom-split" id="q17" data-atom="q17" data-title="Quesito 17" data-tags="topic_algebra,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*ultime 4 cifre*

> Grazie anche al vostro aiuto il sistema di numerazione della civiltà Qwghlm è stato finalmente decifrato. Ora potete apprezzare un altro problema trovato da alcuni valenti archeologi e tradotto nel nostro sistema decimale:
> 
> "Quali sono le ultime quattro cifre del coefficiente più grande (in valore assoluto) del polinomio
> $$(x-1)(x-2)(x-4)(x-8)(x-16)(x-32)?"$$

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 4512
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*last 4 digits *

> Thanks also to your help the Qwghlm civilization numbering system has finally been deciphered. Now you can appreciate another problem found by some good archaeologists and translated into our decimal system:
> 
> 'What are the last four digits of the greatest (in absolute value) coefficient of the $$(x-1)(x-2)(x-4)(x-8)(x-16)(x-32)?"$$ polynomial?

**Answer:** 4512
[[src_archimede_2001_pubblico__Q17]]



<span class="atom-split" id="q18" data-atom="q18" data-title="Quesito 18" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*conto quadruplicato in 20 anni, ultime 4 cifre dopo 20000*

> L'economia Imese è soggetta a una forte svalutazione e quindi i tassi di interesse sono molti alti. In particolare con gli attuali tassi della BCI dopo $20$ anni l'ammontare di un conto corrente viene quadruplicato. Supponendo che oggi Ocnarf depositi uno scudo e che i tassi rimangano sempre gli stessi, quali saranno le ultime $4$ cifre dell'estratto conto che gli eredi di Ocnarf potranno leggere tra $20000$ anni?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0076
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*count quadrupled in 20 years, last 4 digits after 20000*

> The Imese economy is subject to a strong devaluation and therefore interest rates are very high. In particular, at current rates of the BCI after $20$ years, the amount of a current account is quadrupled. Assuming that Ocnarf deposits a shield today and the rates remain the same, what will be the last $4$ figures in the statement that Ocnarf's heirs will be able to read in $20000$ years?

**Answer:** 0076
[[src_archimede_2001_pubblico__Q18]]



<span class="atom-split" id="q19" data-atom="q19" data-title="Quesito 19" data-tags="topic_algebra,topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*quanti sono*

> Nei libri di testo della confederazione vengono detti "onesti" quei polinomi i cui coefficienti sono numeri interi tali che la somma dei loro quadrati sia minore o uguale al grado del polinomio. Quanti sono i polinomi onesti (di una variabile) di grado minore o uguale a quattro?
> 
> (NB: I polinomi costanti non nulli hanno grado $0$ e il polinomio $0$ per convenzione ha grado $-1$: pertanto quest'ultimo non è un polinomio onesto)

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0182
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*how many are *

> In the textbooks of the confederation, those polynomials whose coefficients are such integers that the sum of their squares is less than or equal to the degree of the polynomial are called "honest". How many honest polynomials (of a variable) of degree less than or equal to four?
> 
> (NB: Non-zero constant polynomials have degree $0$ and the convention polynomial $0$ has degree $-1$; therefore the latter is not an honest polynomial)

**Answer:** 0182
[[src_archimede_2001_pubblico__Q19]]



<span class="atom-split" id="q20" data-atom="q20" data-title="Quesito 20" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*raggio terza*

> Vicino al palazzo del parlamento c'è una piazza con tre fontane circolari. Due di esse hanno raggio $64$ imometri, sono tangenti esternamente e tangenti a un viale alberato. La terza è tangente esternamente alle prime due ed al viale. Quanti imometri è lungo il suo raggio?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0016
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1S_H-CSwnsUGuUppDQ3opmQfAPSpfUr-a/view)


<span class="qlang-split" data-lang="en"></span>


*third radius *

> There is a square next to the parliament building with three circular fountains. Two of them have a radius of $64$ imometres, are tangent externally and tangent to a tree-lined avenue. The third is tangent externally to the first two and the avenue. How many imometers is its radius?

**Answer:** 0016
[[src_archimede_2001_pubblico__Q20]]
