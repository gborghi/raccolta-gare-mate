---
title: Kangourou Coppa squadre 2019 Finale
tipo: gara
competition: Kangourou Coppa squadre 2019 Finale
family: kangourou
year: '2019'
level: squadre
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2019_squadre_finale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_algebra,topic_aritmetica,method_telescoping,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Risultato del prodotto telescopico di frazioni*

> L’espressione 
> Qual è il risultato della seguente espressione 
> 6/3 × 9/6 × 12/9 × ... × (3n + 3)/(3n) × ... × 2019/2016 ?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_telescoping|Somme telescopiche]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0673
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*Result of the fractional telescopic product*

> Lexpression What is the result of the following expression 6/3 × 9/6 × 12/9 × ... × (3n + 3)/(3n) × ... × 2019/2016 ?

**Answer:** 0673
[[src_kangourou_2019_squadre_finale__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Angolo alfa tra listelli equispaziati*

![[src_kangourou_2019_squadre_finale__prob2.png]]

> I listelli 
> La figura a destra mostra un’intelaiatura costituita da listelli di legno, tutti 
> dello stesso spessore; 12 di questi sono smussati a un’estremità (in modo 
> simmetrico come suggerisce l’altra 
> figura) così da poterli incollare nel 
> centro di simmetria dell’intelaiatura, 
> distribuendoli in modo che la misura 
> dell’angolo tra ogni listello e quello che lo segue (in verso orario) sia 
> costante. Quanti gradi misura l’angolo denotato in figura con α?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0015
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*Alpha angle between the equally spaced lists*

![[src_kangourou_2019_squadre_finale__prob2.png]]

> The lists shown in the figure to the right show a lining of wooden lists, all of the same thickness; 12 of these are moved to one end (symmetrically as the other figure suggests) so that they can be glued to the center of symmetry of the lining, distributing them so that the measurement of the angle between each list and the one following it (clockwise) is constant. How many degrees does the angle denoted by α measure?

**Answer:** 0015
[[src_kangourou_2019_squadre_finale__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_logica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Codice del lucchetto dalle indicazioni*

> Il lucchetto 
> Il codice per aprire un lucchetto è formato da 4 cifre tutte diverse fra loro. Rispetto a quel codice, 
> ognuno dei seguenti quattro numeri 
> 6427            4271            6412            2671 
> ha due cifre nella posizione corretta, una cifra in posizione non corretta e una cifra che non è 
> presente. Qual è il codice?

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 6471
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*Lock code with the entries *

> The lock The code for opening a lock is made up of four different digits. Compared to that code, each of the following four numbers 6427 4271 6412 2671 has two digits in the correct position, one in the incorrect position and one not present. What's the code?

**Answer:** 6471
[[src_kangourou_2019_squadre_finale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_combinatoria,topic_geometria_solida,method_conteggio,method_grafi,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Percorsi da A a B sugli spigoli del cubo*

![[src_kangourou_2019_squadre_finale__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw (0,0) -- (1,0) -- (1,1) -- (0,1) -- cycle;
  \draw (0.4,0.4) -- (1.4,0.4) -- (1.4,1.4) -- (0.4,1.4) -- cycle;
  \draw (0,0) -- (0.4,0.4);
  \draw (1,0) -- (1.4,0.4);
  \draw (1,1) -- (1.4,1.4);
  \draw (0,1) -- (0.4,1.4);
  \fill (0,0) circle (2pt) node[left] {$A$};
  \fill (1.4,0.4) circle (2pt) node[right] {$B$};
\end{tikzpicture}
\end{document}
```

> Da A a B 
> Osservate il cubo in figura. Volete andare da A a B muovendovi lungo gli spigoli del 
> cubo senza mai ripassare per uno stesso vertice. In quanti modi diversi potete farlo?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_solida|Geometria solida]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 0016
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*Routes from A to B on the cube shafts*

![[src_kangourou_2019_squadre_finale__prob4.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw (0,0) -- (1,0) -- (1,1) -- (0,1) -- cycle;
  \draw (0.4,0.4) -- (1.4,0.4) -- (1.4,1.4) -- (0.4,1.4) -- cycle;
  \draw (0,0) -- (0.4,0.4);
  \draw (1,0) -- (1.4,0.4);
  \draw (1,1) -- (1.4,1.4);
  \draw (0,1) -- (0.4,1.4);
  \fill (0,0) circle (2pt) node[left] {$A$};
  \fill (1.4,0.4) circle (2pt) node[right] {$B$};
\end{tikzpicture}
\end{document}
```

> From A to B, look at the cube in the figure. You want to go from A to B by moving along the ends of the cube without ever going back over the same summit. How many different ways can you do that?

**Answer:** 0016
[[src_kangourou_2019_squadre_finale__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quanti fattori 55 per ottenere 5^55*

> Un numero enorme 
> Quanti fattori 55 occorre moltiplicare tra loro per ottenere come risultato 5 elevato a 55 ?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0625
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*How many factors 55 to get 5^55*

> How many factors of 55 do you have to multiply to get a result of 5 high at 55 ?

**Answer:** 0625
[[src_kangourou_2019_squadre_finale__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,topic_funzionali,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Salti dalla casa dopo 2019 salti del canguro*

> Il canguro 
> Un giorno un canguro fa un salto verso nord fuori dalla sua casa e ritorna a casa con un salto verso 
> sud; il giorno dopo fa due salti verso nord e ritorna a casa con due salti verso sud; il giorno dopo 
> ancora fa tre salti verso nord e ritorna a casa con tre salti verso sud, e così via per un po’ di giorni. 
> In questo momento, contando tutti i salti fatti a partire dal primo giorno, ne ha fatti 2019. A quanti 
> salti si trova da casa?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0039
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*Jumps out of the house after 2019 kangaroo jumps*

> The kangaroo One day a kangaroo makes a northward jump out of his house and returns home with a southward jump; the next day he makes two northward jumps and returns home with two southward jumps; the next day he again makes three northward jumps and returns home with three southward jumps, and so on for a few days. Right now, counting all the jumps he's made since day one, he's made 2019. How many jumps is it from home?

**Answer:** 0039
[[src_kangourou_2019_squadre_finale__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_probabilita,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Probabilita contenuto sacchetti uguale all'iniziale*

> Ada e Bice  
> Ada e Bice hanno due sacchetti di identico contenuto: una biglia per ciascuno dei cinque colori A, 
> B, C, D ed E. Ada prende a caso una biglia dal suo sacchetto e la infila in quello di Bice, subito 
> dopo Bice sceglie una biglia a caso dal suo sacchetto e la infila in quello di Ada. Ora i due sacchetti 
> hanno di nuovo 5 biglie ciascuno. Qual è la probabilità che il contenuto dei sacchetti sia equivalente 
> a quello iniziale?  (Scrivete la probabilità come frazione di numeri interi p/q ridotta ai minimi 
> termini e scrivete nell'ordine p e q; ad esempio, se la risposta fosse 7/9, scrivete [0709].) 
>  
> α

**Topic:** [[topic_probabilita|Probabilita e statistica]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0103
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*Probability of bags containing the initial *

> Ada and Bice Ada and Bice have two bags of identical content: one bag for each of the five colors A, B, C, D and E. Ada randomly picks a pie from her bag and inserts it into Bice's, immediately after Bice picks a pie randomly from her bag and inserts it into Ada's. Now the two bags have five bags each again. What is the probability that the contents of the bags are equivalent to the original? (Write the probability as a fraction of integers p/q reduced to minimum terms and write in the order p and q; for example, if the answer was 7/9, write [0709].)
>  
> α

**Answer:** 0103
[[src_kangourou_2019_squadre_finale__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma fattori primi di 12345*

> Fattori primi 
> Uno dei fattori primi di 12345 è un numero maggiore di 500. Qual è la somma di tutti i suoi fattori 
> primi?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0831
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*Total of prime factors of 12345*

> First factors One of the first factors of 12345 is a number greater than 500. What is the sum of all its prime factors?

**Answer:** 0831
[[src_kangourou_2019_squadre_finale__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_geometria_piana,skill_stima,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza contorno del cerchio piegato*

![[src_kangourou_2019_squadre_finale__prob9.png]]

> Il cerchio piegato 
> Un segmento circolare di un cerchio di raggio 9 è ripiegato all’interno del cerchio 
> in modo che l’arco passi per il centro O della circonferenza come mostra la 
> figura. Quale numero intero è il più vicino alla lunghezza del contorno della 
> figura risultante che è evidenziato a tratto continuo?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_stima|Stima e approssimazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0053
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*Length of the outline of the folded circle*

![[src_kangourou_2019_squadre_finale__prob9.png]]

> The folded circle A circular segment of a circle of radius 9 is folded inside the circle so that the arc passes through the centre O of the circumference as shown in the figure. Which integer is closest to the length of the outline of the resulting figure that is highlighted continuously?

**Answer:** 0053
[[src_kangourou_2019_squadre_finale__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Quarte potenze con 1 o 6 come cifra unita*

> Quarte potenze 
> Quante tra le prime mille potenze quarte perfette di numeri interi positivi hanno 1 o 6 come cifra 
> delle unità?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0800
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*Quite power with 1 or 6 as a unit *

> How many of the first thousand perfect fourth powers of positive integers have 1 or 6 as a unit number?

**Answer:** 0800
[[src_kangourou_2019_squadre_finale__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_aritmetica,topic_logica,method_casework,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di donne in parlamento 300 deputati*

> In parlamento 
> In un parlamento siedono 300 deputati; i quattro partiti rappresentati hanno nell’ordine un numero 
> di deputati che è esattamente il 10%, 20%, 25% e 45% del totale. In nessuno dei partiti la differenza 
> fra i due numeri degli eletti dei due sessi supera 1. Qual è il minimo numero di donne (o uomini) 
> che possono essere presenti in quel parlamento?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0149
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


Minimum number of women in parliament 300 MPs

> Parliament has 300 members; the four parties represented have exactly 10%, 20%, 25% and 45% of the total. In neither party the difference between the two numbers of elected representatives of both sexes is greater than 1. What is the minimum number of women (or men) who can be present in that parliament?

**Answer:** 0149
[[src_kangourou_2019_squadre_finale__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_combinatoria,topic_logica,method_estremalita,method_grafi,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Minime diagonali per irrigidire reticolo 4x4*

![[src_kangourou_2019_squadre_finale__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw[thick] (0,0) -- (1,0) -- (1,1) -- (0,1) -- cycle;
  \draw[fill=white] (0,0) circle (2pt);
  \draw[fill=white] (1,0) circle (2pt);
  \draw[fill=white] (1,1) circle (2pt);
  \draw[fill=white] (0,1) circle (2pt);
  \draw[->,thick] (1.3,0.5) -- (1.9,0.5);
  \draw[thick] (2.2,0) -- (3.2,0) -- (3.7,1) -- (2.7,1) -- cycle;
  \draw[fill=white] (2.2,0) circle (2pt);
  \draw[fill=white] (3.2,0) circle (2pt);
  \draw[fill=white] (3.7,1) circle (2pt);
  \draw[fill=white] (2.7,1) circle (2pt);
\end{tikzpicture}
\end{document}
```

> Il reticolo 
> Un reticolo è un assemblaggio di barre articolate nei loro 
> punti di congiunzione. Quando le sue maglie sono 
> quadrate o rettangolari la struttura, in generale, non è 
> rigida (vedi figura) senza l'aggiunta di barre diagonali. 
> Quante barre diagonali, al minimo, si devono aggiungere 
> a un reticolo 4 × 4 a maglie quadrate che non ne contiene alcuna affinché risulti rigido?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0007
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum diagonals for irrigation of 4x4 mesh *

![[src_kangourou_2019_squadre_finale__prob12.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \draw[thick] (0,0) -- (1,0) -- (1,1) -- (0,1) -- cycle;
  \draw[fill=white] (0,0) circle (2pt);
  \draw[fill=white] (1,0) circle (2pt);
  \draw[fill=white] (1,1) circle (2pt);
  \draw[fill=white] (0,1) circle (2pt);
  \draw[->,thick] (1.3,0.5) -- (1.9,0.5);
  \draw[thick] (2.2,0) -- (3.2,0) -- (3.7,1) -- (2.7,1) -- cycle;
  \draw[fill=white] (2.2,0) circle (2pt);
  \draw[fill=white] (3.2,0) circle (2pt);
  \draw[fill=white] (3.7,1) circle (2pt);
  \draw[fill=white] (2.7,1) circle (2pt);
\end{tikzpicture}
\end{document}
```

> The lattice A lattice is an assembly of bars articulated at their junction points. When its threads are square or rectangular the structure is generally not rigid (see figure) without the addition of diagonal bars. How many diagonal bars, at a minimum, must be added to a 4 × 4 square mesh mesh that contains none to make it rigid?

**Answer:** 0007
[[src_kangourou_2019_squadre_finale__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Minima media di tre interi consecutivi divisibile 6!*

> Media 
> Il prodotto di tre interi positivi consecutivi è divisibile per  
> 6! = 6 × 5 × 4 × 3 × 2 × 1. 
> Qual è la più piccola media possibile per i tre numeri?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0009
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum mean of three consecutive integers divisible by 6!*

> Average The product of three consecutive positive integers is divisible by 6! = 6 × 5 × 4 × 3 × 2 × 1. What's the smallest possible average for the three numbers?

**Answer:** 0009
[[src_kangourou_2019_squadre_finale__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_aritmetica,method_fattorizzazione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Per quanti n sia n-2019 sia n+6000 quadrati*

> Quadrati perfetti 
> Per quanti interi positivi n accade che sia n  2019 sia n + 6000 sono quadrati perfetti?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0007
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*For quantities n being n-2019 and n+6000 squares*

> Perfect squares For how many positive integers n happens that both n  2019 and n + 6000 are perfect squares?

**Answer:** 0007
[[src_kangourou_2019_squadre_finale__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_aritmetica,method_conteggio,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo numero di cifre per braccialetto 20 perline*

![[src_kangourou_2019_squadre_finale__prob15.png]]

> Alice 
> Alice compone dei braccialetti di perline bianche e nere, che iniziano e finiscono con dei fermagli, 
> seguendo questa regola: pensa un numero, lo divide per due e se non ottiene resto infila una perlina 
> nera, se ottiene resto infila una perlina bianca; poi ripete l’operazione sul quoziente che ha ottenuto 
> con la divisione precedente e va avanti così finché non ottiene come quoziente 1: a questo punto 
> infila una perlina bianca (e aggiunge il fermaglio di chiusura). Ad esempio, qui sotto vedete a 
> sinistra il risultato se pensa 5, a destra il risultato se pensa 6: 
>  
> (la forma non circolare a sinistra rappresenta il fermaglio che ha messo prima di iniziare il lavoro, 
> quella a destra rappresenta il fermaglio che ha messo alla fine). 
> Alice ha un generatore di numeri casuali cui può chiedere di fornire numeri con un predeterminato 
> numero di cifre (significative). Se vuole essere certa di arrivare a comporre un braccialetto con 
> almeno 20 perline, qual è il minimo numero di cifre che deve richiedere? 
> O 
> 
> 1 
>  
> Kangourou della Matematica 2019 
> Coppa Kangourou a squadre 
> Finale  
> Cervia, 4 maggio 2019 
>  
>  
> Quesiti e soluzioni

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0007
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1ykAp1CYM5aXW15eIFuXdc0-HVqlQPS5y/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum number of digits per bracelet of 20 beads*

![[src_kangourou_2019_squadre_finale__prob15.png]]

> Alice Alice composes bracelets of black and white beads, which begin and end with stoppers, following this rule: think of a number, divide it by two and if she doesn't get the remainder she inserts a black bead, if she gets the remainder she inserts a white bead; then she repeats the operation on the quotient she obtained with the previous division and goes on until she gets as quozient 1: at this point she inserts a white bead (and adds the closing stopper). For example, down here you can see the result on the left if you think 5, and the result on the right if you think 6:
>  
> (the non-circular shape on the left represents the stop he put on before starting work, the one on the right represents the stop he put on at the end). Alice has a random number generator that she can ask to provide numbers with a predetermined number of digits (significant). If you want to be sure you can make a bracelet with at least 20 beads, what is the minimum number of digits you need? O
> 
> 1
>  
> Kangourou of Mathematics 2019 Kangourou Cup to teams Final Cervia, 4 May 2019
>  
>  
> Questions and solutions

**Answer:** 0007
[[src_kangourou_2019_squadre_finale__Q15]]
