---
title: Kangourou Finale Ecolier 2024
tipo: gara
competition: Kangourou Finale Ecolier 2024
family: kangourou
year: '2024'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2024_ecolier_finale"></div>



<span class="atom-split" id="qe1" data-atom="qe1" data-title="Quesito E1" data-tags="topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quale risultato ottiene Marco (sempre 1089)*

> Marco prova ad eseguire le seguenti operazioni: sceglie un numero di tre cifre tutte diverse fra loro, scrive il numero che ottiene invertendo l'ordine delle cifre e calcola la differenza fra il maggiore e il minore dei due numeri. Se questa differenza ha solo due cifre, premette a questa differenza la cifra 0, altrimenti la lascia inalterata. Infine, somma al numero così ottenuto il numero che ricava invertendo l'ordine delle sue cifre. Quale risultato ottiene?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 1089
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1w21FKv9v3Gf8h_K0skpT381-6hGBkHto/view)


<div class="qlang-split" data-lang="en"></div>


*What result does Marco get (always 1089)?*

> Marco tries to carry out the following operations: he chooses a three-digit number whose digits are all different, writes the number obtained by reversing the order of the digits, and calculates the difference between the larger and the smaller of the two numbers. If this difference has only two digits, he prefixes the digit 0 to this difference; otherwise, he leaves it unchanged. Finally, he adds to the number thus obtained the number he gets by reversing the order of its digits. What result does he obtain?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="qe2" data-atom="qe2" data-title="Quesito E2" data-tags="topic_logica,topic_combinatoria,method_cassetti,method_casework,skill_astrazione,skill_modellizzazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di chiavi e disposizione fra quattro amici*

![[src_kangourou_2024_ecolier_finale__probE2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[dashed, blue!60!gray, line width=2pt, dash pattern=on 6pt off 4pt]
    (90:2) arc (90:0:2);
  \draw[dashed, blue!60!gray, line width=2pt, dash pattern=on 6pt off 4pt]
    (0:2) arc (0:-90:2);
  \draw[dashed, blue!60!gray, line width=2pt, dash pattern=on 6pt off 4pt]
    (-90:2) arc (-90:-180:2);
  \draw[dashed, blue!60!gray, line width=2pt, dash pattern=on 6pt off 4pt]
    (180:2) arc (180:90:2);
  \node at (90:2.35) {$A$};
  \node at (0:2.35) {$B$};
  \node at (-90:2.35) {$C$};
  \node at (180:2.35) {$D$};
  \node at (45:2.35) {$b$};
  \node at (-45:2.35) {$c$};
  \node at (-135:2.35) {$d$};
  \node at (135:2.35) {$a$};
\end{tikzpicture}
\end{document}
```

> Quattro amici vivono da soli, ciascuno in una casa diversa da quella degli altri. Non sono mai assenti da casa tutti e quattro contemporaneamente e vogliono che, se succede qualcosa nella casa di uno di loro quando è assente, almeno uno degli altri tre, trovandosi a casa propria, possa intervenire entrando con la chiave. Decidono allora di lasciare una chiave ad almeno un amico che la custodirà in casa sua in un posto noto a tutti e quattro. Qual è il minimo numero di chiavi della propria casa che ognuno deve lasciare agli amici, considerati nel loro insieme? E come vanno disposte le chiavi lasciate?

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_cassetti|Principio dei cassetti]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 1
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1w21FKv9v3Gf8h_K0skpT381-6hGBkHto/view)


<div class="qlang-split" data-lang="en"></div>


*Minimum number of keys and arrangement among four friends*

![[src_kangourou_2024_ecolier_finale__probE2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[dashed, blue!60!gray, line width=2pt, dash pattern=on 6pt off 4pt]
    (90:2) arc (90:0:2);
  \draw[dashed, blue!60!gray, line width=2pt, dash pattern=on 6pt off 4pt]
    (0:2) arc (0:-90:2);
  \draw[dashed, blue!60!gray, line width=2pt, dash pattern=on 6pt off 4pt]
    (-90:2) arc (-90:-180:2);
  \draw[dashed, blue!60!gray, line width=2pt, dash pattern=on 6pt off 4pt]
    (180:2) arc (180:90:2);
  \node at (90:2.35) {$A$};
  \node at (0:2.35) {$B$};
  \node at (-90:2.35) {$C$};
  \node at (180:2.35) {$D$};
  \node at (45:2.35) {$b$};
  \node at (-45:2.35) {$c$};
  \node at (-135:2.35) {$d$};
  \node at (135:2.35) {$a$};
\end{tikzpicture}
\end{document}
```

> Four friends live alone, each in a house different from the others'. The four are never all away from home at the same time, and they want that, if something happens in one of their houses while its occupant is away, at least one of the other three, who is at home in their own house, can intervene by entering with a key. They therefore decide to leave a key with at least one friend, who will keep it at their own home in a place known to all four. What is the minimum number of keys to their own house that each person must leave with their friends, considered as a group? And how should the keys that are left be arranged?


**Topic:** [[topic_logica|Logic, games and strategies]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_cassetti|Pigeonhole principle]], [[method_casework|Case analysis]]
**Abilita:** [[skill_astrazione|Abstraction / generalisation]], [[skill_modellizzazione|Modelling / translating the text]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="qe3" data-atom="qe3" data-title="Quesito E3" data-tags="topic_aritmetica,topic_algebra,method_fattorizzazione,skill_manipolazione_algebrica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Peso della bombola vuota di gas*

> Una bombola di gas liquido è piena e pesa 28 chili. Inizialmente viene consumata la metà del contenuto. Dopo qualche tempo viene consumata la metà del contenuto restante e a quel punto il peso della bombola con quanto rimane è sceso a 10 chili. Quanti chili pesa la bombola vuota?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Risposta:** 4
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1w21FKv9v3Gf8h_K0skpT381-6hGBkHto/view)


<div class="qlang-split" data-lang="en"></div>


*Weight of empty gas cylinder*

> A liquefied gas cylinder is full and weighs 28 kilograms. Initially, half of its contents are used up. After some time, half of the remaining contents are used up, and at that point the weight of the cylinder together with what remains has dropped to 10 kilograms. How many kilograms does the empty cylinder weigh?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="qe4" data-atom="qe4" data-title="Quesito E4" data-tags="topic_logica,method_casework,skill_lettura_attenta,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Si puo dedurre il significato di KAB*

> Nella strana lingua di Kanglandia, le parole «sì» e «no» si traducono in «KAB» e «BAK», ma non necessariamente in quest'ordine. Incontri una persona, della quale ti puoi fidare, che conosce sia l'italiano sia la lingua di Kanglandia e le chiedi: «È vero che KAB significa 'sì'?». La persona risponde: «KAB». Puoi dedurre se «KAB» significa «sì» oppure «no»?

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** no
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1w21FKv9v3Gf8h_K0skpT381-6hGBkHto/view)


<div class="qlang-split" data-lang="en"></div>


*The meaning of KAB can be deduced*

> In the strange language of Kanglandia, the words "yes" and "no" translate to "KAB" and "BAK", but not necessarily in that order. You meet a person you can trust who knows both Italian and the language of Kanglandia, and you ask them: "Is it true that KAB means 'yes'?" The person replies: "KAB". Can you deduce whether "KAB" means "yes" or "no"?


**Topic:** [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]]
**Abilita:** [[skill_lettura_attenta|Careful reading]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="qe5" data-atom="qe5" data-title="Quesito E5" data-tags="topic_aritmetica,method_estremalita,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Quali numeri puo aver scritto Bruno (somma massima)*

> Alice ha scritto un numero intero di tre cifre (dunque maggiore di 99), Bruno ne ha scritto uno di due cifre (dunque maggiore di 9) e Carla uno di una cifra. Il caso ha voluto che le sei cifre che compongono i tre numeri siano tutte diverse fra loro e che la somma dei tre numeri sia la più grande possibile con queste condizioni. Quali sono i numeri che può avere scritto Bruno?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 86,85,84,76,75,74
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1w21FKv9v3Gf8h_K0skpT381-6hGBkHto/view)


<div class="qlang-split" data-lang="en"></div>


*What numbers could Bruno have written (maximum sum)?*

> Alice wrote a three-digit integer (so greater than 99), Bruno wrote a two-digit integer (so greater than 9), and Carla wrote a one-digit integer. By chance, the six digits that make up the three numbers are all different from one another, and the sum of the three numbers is as large as possible under these conditions. What numbers could Bruno have written?


**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_casework|Case analysis]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="qe6" data-atom="qe6" data-title="Quesito E6" data-tags="topic_combinatoria,method_conteggio,method_casi_conteggio,skill_conteggio_sistematico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Colorazioni di 8 oggetti con adiacenti diversi*

> Otto oggetti sono allineati. Vanno dipinti quattro in rosso, tre in blu e uno in giallo, ma in modo che oggetti adiacenti ricevano colori diversi. Quante diverse colorazioni sono ammissibili?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casi_conteggio|Conteggio per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 14
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1w21FKv9v3Gf8h_K0skpT381-6hGBkHto/view)


<div class="qlang-split" data-lang="en"></div>


*Colorings of 8 objects with different adjacencies*

> Eight objects are arranged in a line. Four of them are to be painted red, three blue, and one yellow, but in such a way that adjacent objects receive different colors. How many different colorings are permissible?


**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_conteggio|Combinatorial counting]], [[method_casi_conteggio|Counting by cases]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
