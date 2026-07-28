---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018
tipo: gara
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018
family: tfjm
year: '2018'
level: TFJM²
---
<div class="atom-reader" data-gara="Quesiti/src_tfjm_2018"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,topic_aritmetica,method_casework,method_conteggio,method_simmetria,skill_conteggio_sistematico,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Counting distinct jigsaw-puzzle pieces (unit squares with bumps/hollows on their sides) and characterizing singular puzzles that can be assembled in essentially one way.*

> Puzzles. Nicolas designs puzzle pieces. His pieces are squares of side $1$ cm. On each side of a piece he can either leave the side straight, add a bump, or cut a hollow. There is a single shape of hollow (and hence a single complementary shape of bump). (See Figure 1 for examples of distinct pieces: the left and centre pieces are identical up to a rotation; the centre and right pieces are identical up to a flip, i.e. an axial symmetry.)
> 
> 1. How many distinct pieces (see Figure 1) exist if:
>  a) one does not allow rotating or flipping the pieces;
>  b) one allows rotating the pieces but not flipping them;
>  c) one allows rotating and flipping the pieces?
> 
> An $m\times n$ puzzle is a puzzle one can assemble, made of $m\times n$ pieces, forming a rectangle of length $m$ cm and width $n$ cm (the pieces being placed side by side, each bump matching a hollow), such that the straight sides lie exactly on the edge of the rectangle. We say that an $m\times n$ puzzle is singular if there is essentially only one way (up to a symmetry of the rectangle) to assemble it, i.e. no exchange of pieces yields the same arrangement.
> 
> 2. For which pairs of positive integers $(m,n)$ can one:
>  a) find a singular $m\times n$ puzzle;
>  b) find a non-singular $m\times n$ puzzle?
> In other words, when can a puzzle fail to be singular, i.e. contain two identical pieces? (Reformulate question 2 if you wish.)
> 
> 3. What is the maximum number of pieces that a singular puzzle can contain?
> 
> 4. Answer question 2 if one requires the puzzle to be singular.
> 
> 5. Let an integer $k\in\mathbb{N}^*$ be fixed. One now allows $k$ shapes of hollow and as many corresponding shapes of bump, each kind of bump fitting only into its complementary hollow. Redo the previous questions.
> 
> 6. Propose and study other directions of research.

![[src_tfjm_2018__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Contare pezzi di puzzle distinti (quadrati di unità con protuberanze / buche sui loro lati) e caratterizzare puzzle singoli che possono essere assemblati in un modo essenzialmente unico.*

> Puzzli. Nicolas progetta pezzi di puzzle. I suoi pezzi sono quadrati di lato $1$ cm. Su ciascun lato di un pezzo può lasciare il lato dritto, aggiungere un bump o tagliare un buco. C'è una singola forma di buco (e quindi una singola forma complementare di bump). (Vedi la figura 1 per esempi di pezzi distinti: i pezzi a sinistra e al centro sono identici fino a una rotazione; i pezzi a centro e a destra sono identici fino a una rovescia, cioè una simmetria assiale.)
> 
> 1. Quanti pezzi distinti (vedi Figura 1) esistono se: a) non si permette di ruotare o volgere i pezzi; b) si permette di ruotare i pezzi ma non di volgere; c) si permette di ruotare e volgere i pezzi?
> 
> Un puzzle $m\times n$ è un puzzle che si può assemblare, fatto di pezzi $m\times n$, formando un rettangolo di lunghezza $m$ cm e larghezza $n$ cm (i pezzi vengono posizionati fianco a fianco, ogni urto corrispondente a un vuoto), in modo che i lati dritti si trovino esattamente sul bordo del rettangolo. Diciamo che un puzzle $m\times n$ è singolare se c'è essenzialmente solo un modo (fino a una simmetria del rettangolo) per assemblarlo, cioè Nessun scambio di pezzi produce la stessa disposizione.
> 
> 2. Per quali coppie di integri positivi $(m,n)$ si può: a) trovare un puzzle singolare $m\times n$; b) trovare un puzzle non singolare $m\times n$? In altre parole, quando un puzzle può non essere singolare, cioè contengono due pezzi identici? (Rifigura la domanda 2 se lo desideri.)
> 
> 3. Qual è il numero massimo di pezzi che un singolo puzzle può contenere?
> 
> 4. Rispondi alla domanda 2 se uno richiede che il puzzle sia singolare.
> 
> 5. Si deve fissare un numero intero $k\in\mathbb{N}^*$. Una ora consente $k$ forme di buco e molte forme corrispondenti di bump, ogni tipo di bump che si adatta solo al suo buco complementare. Riprendi le domande precedenti.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2018__Q01.png]]

[[src_tfjm_2018__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,topic_algebra,method_congruenze,method_ricorsione,method_estremalita,method_casework,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Comparing f(a,b), the number of Euclidean divisions in the standard Euclidean algorithm, with g(a,b), the minimal number using arbitrary earlier remainders, and finding lexicographically smallest pairs.*

> Faster than Euclid? Morgane wants to compute the greatest common divisor (GCD) of two integers $a$ and $b$ with $a\ge b\ge 1$. She uses the classical Euclidean algorithm, where $r(x,y)$ denotes the remainder of the Euclidean division of $x$ by $y$:
> 
> 1: $i\leftarrow 0$
> 2: $(u_{-1},u_0)\leftarrow(a,b)$
> 3: While $u_i\ge 1$:
> 4: $\quad i\leftarrow i+1$
> 5: $\quad u_i\leftarrow r(u_{i-2},u_{i-1})$
> 6: Return $u_{i-1}$.
> 
> For example, to compute the GCD of $a=34$ and $b=21$, Morgane computes successively $u_1=r(34,21)=13$, $u_2=r(21,13)=8$, $u_3=r(13,8)=5$, $u_4=r(8,5)=3$, $u_5=r(5,3)=2$, $u_6=r(3,2)=1$, $u_7=r(2,1)=0$. She then returns $u_6=1$. The value of $i$ at the end of the algorithm is here $f(34,21)=7$. We denote by $f(a,b)$ this number of Euclidean divisions performed to compute the GCD of $a$ and $b$.
> 
> We define a lexicographic order on pairs: $(a,b)$ comes strictly before $(a',b')$ if and only if $a<a'$, or $a=a'$ and $b<b'$.
> 
> 1. For an integer $k$ fixed in advance, find the smallest pair $(a,b)$ for the lexicographic order such that $f(a,b)=k$.
> 
> To save effort, Morgane has another idea: rather than always using the two most recent results $u_{i-2}$ and $u_{i-1}$, she chooses at each step any two earlier values already computed and forms the remainder of the Euclidean division of the larger by the other. She then stops when she finds a value $d$ and has checked $r(a,d)=0$ and $r(b,d)=0$, and affirms that $d$ is the GCD of $a$ and $b$. For example, to compute the GCD of $a=u_{-1}=34$ and $b=u_0=21$, she may compute $u_1=r(34,21)=13$, $u_2=r(21,13)=8$, $u_3=r(13,8)=5$, $u_4=r(21,5)=1$, $u_5=r(34,1)=0$ and $u_6=r(21,1)=0$, and then affirm that $1$ is the GCD of $34$ and $21$.
> 
> 2. In the general case, i.e. for all possible pairs $a\ge b\ge 1$, is Morgane's affirmation in such examples correct?
> 
> 3. In the general case, is it enough to verify that $r(a,d)=0$ and $r(b,d)=0$ to affirm that $d$ is the GCD of $a$ and $b$?
> 
> We write $g(a,b)$ for the minimal number of Euclidean divisions Morgane must perform (in the manner described above) to compute the GCD of $a$ and $b$, including the divisions of $a$ and $b$ by $d$. The example above shows $g(34,21)\le 6$.
> 
> 4. Compute $g(34,21)$.
> 
> 5. Does there exist an integer $A$ such that one always has $g(a,b)\le f(a,b)+A$? If yes, give the smallest such $A$.
> 
> 6. Give a necessary condition and a sufficient condition on the pair $(a,b)$ for $g(a,b)=f(a,b)$.
> 
> 7. For which integers $A\ge 1$ does there exist a pair $(a,b)$ such that $g(a,b)+A\le f(a,b)$?
> 
> 8. For an integer $k$ fixed, what is the smallest pair $(a,b)$ for the lexicographic order such that $g(a,b)=k$? One may seek to express $a$ as a function of $k$.
> 
> 9. Propose and study other directions of research.

![[src_tfjm_2018__Q02.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_ricorsione|Ricorsione]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Confrontare f(a,b), il numero di divisioni euclidiche nell'algoritmo euclidico standard, con g(a,b), il numero minimo utilizzando residui precedenti arbitrari, e trovare le coppie lessicograficamente più piccole.*

> Più veloce di Euclide? Morgane vuole calcolare il più grande divisore comune (GCD) di due integri $a$ e $b$ con $a\ge b\ge 1$. Essa utilizza l'algoritmo euclidiano classico, dove $r(x,y)$ indica il resto della divisione euclidiana di $x$ da $y$:
> 
> 1: $i\leftarrow 0$ 2: $(u_{-1},u_0)\leftarrow(a,b)$ 3: Mentre $u_i\ge 1$: 4: $\quad i\leftarrow i+1$ 5: $\quad u_i\leftarrow r(u_{i-2},u_{i-1})$ 6: Ritorna $u_{i-1}$.
> 
> Per esempio, per calcolare il GCD di $a=34$ e $b=21$, Morgane calcola successivamente $u_1=r(34,21)=13$, $u_2=r(21,13)=8$, $u_3=r(13,8)=5$, $u_4=r(8,5)=3$, $u_5=r(5,3)=2$, $u_6=r(3,2)=1$, $u_7=r(2,1)=0$. In seguito restituisce $u_6=1$. Il valore di $i$ alla fine dell'algoritmo è qui $f(34,21)=7$. Indichiamo con $f(a,b)$ questo numero di divisioni euclidiche eseguite per calcolare il GCD di $a$ e $b$.
> 
> Difiniamo un ordine lessicografico su coppie: $(a,b)$ precede rigorosamente $(a',b')$ se e solo se $a<a'$, o $a=a'$ e $b<b'$.
> 
> 1. Per un numero intero $k$ fissato in anticipo, trovare la coppia $(a,b)$ più piccola per l'ordine lessicografico tale che $f(a,b)=k$.
> 
> Per risparmiare sforzi, Morgane ha un'altra idea: invece di usare sempre i due risultati più recenti $u_{i-2}$ e $u_{i-1}$, sceglie ad ogni passo due valori precedenti già calcolati e forma il resto della divisione euclidica del più grande per l'altro. Si ferma poi quando trova un valore $d$ e ha controllato $r(a,d)=0$ e $r(b,d)=0$, e afferma che $d$ è il GCD di $a$ e $b$. Ad esempio, per calcolare il GCD di $a=u_{-1}=34$ e $b=u_0=21$, può calcolare $u_1=r(34,21)=13$, $u_2=r(21,13)=8$, $u_3=r(13,8)=5$, $u_4=r(21,5)=1$, $u_5=r(34,1)=0$ e $u_6=r(21,1)=0$, e quindi affermare che $1$ è il GCD di $34$ e $21$.
> 
> 2. Nel caso generale, cioè: per tutte le possibili coppie $a\ge b\ge 1$, l'affermazione di Morgane in tali esempi è corretta?
> 
> 3. Nel caso generale, basta verificare che $r(a,d)=0$ e $r(b,d)=0$ per affermare che $d$ è il GCD di $a$ e $b$?
> 
> Scriviamo $g(a,b)$ per il numero minimo di divisioni euclidiche che Morgane deve eseguire (nel modo descritto sopra) per calcolare il GCD di $a$ e $b$, comprese le divisioni di $a$ e $b$ da $d$. L'esempio di cui sopra mostra $g(34,21)\le 6$.
> 
> 4. Calcolare $g(34,21)$.
> 
> 5. Esiste un intero $A$ tale da avere sempre $g(a,b)\le f(a,b)+A$? In caso affermativo, indicare il minimo di tali $A$.
> 
> 6. Indicare una condizione necessaria e una condizione sufficiente sulla coppia $(a,b)$ per $g(a,b)=f(a,b)$.
> 
> 7. Per quali integri $A\ge 1$ esiste una coppia $(a,b)$ tale che $g(a,b)+A\le f(a,b)$?
> 
> 8. Per un numero intero $k$ fisso, quale è la coppia $(a,b)$ più piccola per l'ordine lessicografico tale che $g(a,b)=k$? Si può cercare di esprimere $a$ come funzione di $k$.
> 
> 9. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2018__Q02.png]]

[[src_tfjm_2018__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_logica,method_casework,method_estremalita,method_backward,skill_modellizzazione,skill_casework_accurato,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="en"></div>


*A two-player game placing buildings on n plots by the sea; a building of i floors goes on plot i, floors with a sea view score points, and one analyzes guaranteed advantage and optimal scores under several rule variants.*

> View on the sea. In the seaside resort of Vecteur-les-Bains, competition between property developers is fierce. Each wants to build buildings offering the most floors with a view of the sea. There are $n$ locations numbered from $1$ to $n$ (location $1$ is at the seaside, location $n$ farthest from it). Cécile and Eva confront each other to construct buildings. The legislation is very strict: on location $i$ one has the right to build a building of exactly $i$ floors. A floor of a building has a view of the sea if and only if it is strictly higher than every building between it and the sea (see Figure 2).
> 
> Cécile builds the first building on the location of her choice, then Eva builds in turn on a remaining location, and so on, until $k$ buildings have been placed. For each building one counts the number of floors with a view of the sea; the score of a player is the sum of the scores of her buildings.
> 
> 1. What is the best advantage Cécile can guarantee herself when:
>  a) $k=1,2,3$;
>  b) $k=n,n-1$;
>  c) $k$ arbitrary?
> 
> 2. Cécile and Eva now make peace: each seeks to maximize her own score, without worrying about the other's. When a developer can guarantee herself the same score in several ways, she chooses the option that gives the best score to the other.
>  a) What is the greatest score Cécile can guarantee herself? One may begin by studying the same particular values of $k$ as in question 1.
>  b) Same question for Eva.
> 
> 3. The legislation changes. Two integers $k_C$ and $k_E$ are now fixed such that $k_C+k_E\le n$. Cécile and Eva play respectively $k_C$ and $k_E$ times, in an order decided by the law. Redo the previous questions when:
>  a) $n=1$, $k_C$ arbitrary and Eva plays after Cécile has placed her $k_C$ buildings;
>  b) $k_C$ and $k_E$ arbitrary, Cécile places her $k_C$ buildings then Eva places her $k_E$ buildings;
>  c) $k_C$ and $k_E$ arbitrary and Cécile chooses the order in which they play.
> 
> 4. Because of global warming, the sea level has risen and Vecteur-les-Bains is now an island. The terrain is now a strip of $2n-1$ parcels bordered by the sea on both sides. At distance $k$ from the nearest arm of the sea, one can build a building of size $k$ (see Figure 3). Each floor is separated into $2$ apartments (one facing left and one facing right), and the score is the number of apartments that allow seeing the sea. Redo the previous questions in this setting.
> 
> 5. Propose and study other directions of research.

![[src_tfjm_2018__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_backward|Backward]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Un gioco per due giocatori che colloca gli edifici su n parcelli accanto al mare; un edificio di i piani si svolge su parcello i, pavimenti con punti di punteggio di vista sul mare, e si analizzano vantaggi garantiti e punteggi ottimali sotto diverse varianti di regola.*

> Vista sul mare. Nella località balneare di Vecteur-les-Bains, la concorrenza tra gli sviluppatori immobiliari è intensa. Ognuno vuole costruire edifici che offrano il maggior numero di piani con vista sul mare. Ci sono località $n$ numerate da $1$ a $n$ (località $1$ si trova sul mare, località $n$ più lontana da esso). Cécile ed Eva si confrontano per costruire edifici. La legislazione è molto rigorosa: in un luogo $i$ si ha il diritto di costruire un edificio di esattamente $i$ piani. Un pavimento di un edificio ha vista sul mare se e solo se è strettamente più alto di ogni edificio che lo separa dal mare (vedere figura 2).
> 
> Cécile costruisce il primo edificio sul luogo di sua scelta, poi Eva costruisce a sua volta su un luogo rimanente, e così via, fino a quando non sono stati posizionati gli edifici $k$. Per ogni edificio si conta il numero di piani con vista sul mare; il punteggio di un giocatore è la somma dei punteggi dei suoi edifici.
> 
> 1. Qual è il miglior vantaggio che Cécile può garantire se: a) $k=1,2,3$; b) $k=n,n-1$; c) $k$ arbitrario?
> 
> 2. Cécile ed Eva ora fanno pace: ognuna cerca di massimizzare il proprio punteggio, senza preoccuparsi dell'altro. Quando uno sviluppatore può garantire a se stesso lo stesso punteggio in diversi modi, sceglie l'opzione che dà il miglior punteggio all'altro. a) Qual è il massimo punteggio che Cécile può garantire a se stessa? Si può iniziare studiando gli stessi valori particolari di $k$ come nella domanda 1. b) La stessa domanda per Eva.
> 
> 3. La legislazione cambia. Due integri $k_C$ e $k_E$ sono ora fissati in modo tale che $k_C+k_E\le n$. Cécile ed Eva giocano rispettivamente $k_C$ e $k_E$ volte, in un ordine deciso dalla legge. Risolvi le domande precedenti quando: a) $n=1$, $k_C$ arbitrario e Eva suona dopo che Cécile ha posto i suoi edifici $k_C$; b) $k_C$ e $k_E$ arbitrario, Cécile posiziona i suoi edifici $k_C$ e Eva le posiziona i suoi edifici $k_E$; c) $k_C$ e $k_E$ arbitrario e Cécile sceglie l'ordine in cui giocano.
> 
> 4. A causa del riscaldamento globale, il livello del mare è aumentato e Vecteur-les-Bains è ora un'isola. Il terreno è ora una striscia di parcelli $2n-1$ di cui il mare confina da entrambi i lati. A distanza $k$ dal braccio più vicino del mare, si può costruire un edificio di dimensioni $k$ (vedere figura 3). Ogni piano è diviso in appartamenti $2$ (uno rivolto a sinistra e uno a destra), e il punteggio è il numero di appartamenti che consentono di vedere il mare. Riprendi le domande precedenti in questo contesto.
> 
> 5. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2018__Q03.png]]

[[src_tfjm_2018__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_probabilita,topic_combinatoria,method_casework,method_conteggio,skill_modellizzazione,skill_casework_accurato,skill_stima"></span>

<div class="qlang-switch" data-default="en"></div>


*Galettes des rois: n galettes each cut into k parts contain hidden feves with a_1<=...<=a_n feves; given how many feves were already found, decide which galette to pick to maximize (or minimize) the chance of finding a feve, and study useless galettes.*

> Galettes des rois (kings' cakes). At the high school's galette des rois, there are $n$ galettes numbered $1$ to $n$, each cut into $k$ parts, where $k$ and $n$ are strictly positive integers. Guillaume eats at random: arriving, he takes one part of one galette. Each galette may contain fèves (charms) or not. Let $a_i$ be the number of fèves in galette $i$. We suppose $a_1\le a_2\le\cdots\le a_n$.
> 
> 1. Compute $\mathbb{P}(L=\ell)$ for any integer $\ell\ge 0$, where $L$ is the number of fèves already found before Guillaume arrives. What is the expectation of $L$?
> 
> 2. Taking a part at random in galette $i$, what is the probability that Guillaume finds a fève? How should he proceed to maximize his chances of finding a fève?
> 
> Thomas, who has been there from the start, tells Guillaume that $\ell$ fèves have been found up to now, with $0\le\ell\le n-1$.
> 
> 3. As a function of $\ell$, which galette should Guillaume choose his part from to have the best chance of finding a fève? What is then the probability that he finds one? Treat the following cases:
>  a) $n=2$;
>  b) $n=3$;
>  c) $\ell=0$;
>  d) $\ell=1$;
>  e) $\ell=n-1$;
>  f) $n,\ell$ arbitrary, but all the galettes contain the same number of parts;
>  g) $k=n$ and $a_i=1$ for all $i$;
>  h) $n,\ell$ arbitrary.
> 
> 4. In this question, suppose $a_1<a_2<\cdots<a_n$. We say that a galette $i$ is useless if, whatever the value $\ell$ given by Thomas, galette $i$ is never the galette giving the best chance of finding a fève. As a function of $n$, is it possible that no galette is ever useless? Which galettes are never useless? What are the possible numbers of useless galettes?
> 
> 5. Guillaume is very full and now fears that he must at least taste the parts containing the fèves. He now wants the fewest chances possible of finding one. Redo questions 3 and 4 in this setting.
> 
> 6. Propose and study other directions of research.

![[src_tfjm_2018__Q04.png]]

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Gallettes des rois: n galettes ciascuna tagliata in k parti contengono febbre nascoste con febbre a_1<=...<=a_n; data la quantità di febbre già trovate, decidete quale galette scegliere per massimizzare (o ridurre al minimo) la possibilità di trovare una febbre, e studiate le galettes inutili.*

> Galettes des rois (torte dei re). Nella galette des rois del liceo, ci sono $n$ galettes numerate $1$ a $n$, ciascuna tagliata in parti $k$, dove $k$ e $n$ sono enti rigorosamente positivi. Guillaume mangia in modo casuale: arrivando, prende una parte di una galette. Ogni galette può contenere o meno fève (incantevoli). $a_i$ è il numero di fève nella galette $i$. Supponiamo $a_1\le a_2\le\cdots\le a_n$.
> 
> 1. Calcolare $\mathbb{P}(L=\ell)$ per qualsiasi numero intero $\ell\ge 0$, dove $L$ è il numero di fève già trovate prima dell'arrivo di Guillaume. Quali sono le aspettative di $L$?
> 
> 2. Prendendo una parte casuale in galette $i$, qual è la probabilità che Guillaume trovi una fève? Come deve procedere per massimizzare le sue possibilità di trovare una fève?
> 
> Thomas, che è stato lì fin dall'inizio, dice a Guillaume che finora sono state trovate fève $\ell$, con $0\le\ell\le n-1$.
> 
> 3. In funzione di $\ell$, quale galette deve scegliere Guillaume per avere le migliori possibilità di trovare una fève? Qual è la probabilità che ne troverà una? Trattare i seguenti casi: a) $n=2$; b) $n=3$; c) $\ell=0$; d) $\ell=1$; e) $\ell=n-1$; f) $n,\ell$ arbitrario, ma tutte le galette contengono lo stesso numero di parti; g) $k=n$ e $a_i=1$ per tutte le $i$; h) $n,\ell$ arbitrario.
> 
> 4. In questa domanda, supponiamo $a_1<a_2<\cdots<a_n$. Diciamo che una galette $i$ è inutile se, qualunque sia il valore $\ell$ dato da Thomas, la galette $i$ non è mai la galette che dà la migliore possibilità di trovare una fève. Come funzione di $n$, è possibile che nessuna galette sia mai inutile? Quali galettes non sono mai inutili? Quanti sono i possibili numeri di galletti inutili?
> 
> 5. Guillaume è molto pieno e ora teme che almeno debba assaggiare le parti contenenti le fève. Ora vuole le minime possibilita' di trovarne uno. Redo domande 3 e 4 in questo contesto.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2018__Q04.png]]

[[src_tfjm_2018__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,topic_trigonometria,topic_geometria_analitica,method_trigonometria,method_coordinate,method_casework,method_simmetria,skill_ragionamento_geometrico,skill_astrazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*A chain of n unit links with the oriented angle at each joint constrained to an interval depending on alpha; describe and compute the area of the set of points reachable by the free end, with variants fixing A_1 and using angles near pi/2.*

> Rolled chain. Let $n\in\mathbb{N}^*$ and $\alpha\in[0,\pi]$. Colin amuses himself with a rolled (stiff) chain. The chain consists of $n$ links $A_0A_1,A_1A_2,\ldots,A_{n-1}A_n$, joined at hinges; each segment $[A_iA_{i+1}]$ has length $1$ for $0\le i\le n-1$ (the segments may cross). The point $A_0$ is fixed. The chain being rolled, the angle at each hinge can take only certain values: for any $1\le i\le n-1$, the oriented angle $\widehat{(A_{i-1}A_i,A_iA_{i+1})}$ must remain in the interval $[-\alpha,\alpha]$ (see Figure 4). We write $\mathcal{B}_\alpha^n$ for the set of points that can be reached by the extremity $A_n$ of the chain.
> 
> 1. As a function of $n$ and $\alpha$, what is $\mathcal{B}_\alpha^n$? Treat the following cases:
>  a) $\alpha=\pi$ (the chain not rolled);
>  b) $\alpha=\frac{\pi}{2}$;
>  c) $n=2$;
>  d) $n=3$;
>  e) $n,\alpha$ arbitrary.
> 
> 2. Describe $\mathcal{B}_\alpha^n$ as precisely as possible and compute its area in the different cases of question 1.
> 
> In questions 3 and 4, suppose also that the point $A_1$ of the chain is fixed, at distance $1$ from $A_0$. We write $\mathcal{C}_\alpha^n$ for the set of points that can be reached by the extremity $A_n$ of the chain.
> 
> 3. Describe $\mathcal{C}_\alpha^n$ in the same cases as question 1.
> 
> 4. In the same cases, which are the possible values of the oriented angle $\widehat{(A_0A_1,A_1A_n)}$? Is it true that for two points $X$ and $Y$ such that $A_1X=A_1Y$, there exists an arc of circle centred at $A_1$, between $X$ and $Y$, that is entirely included in $\mathcal{C}_\alpha^n$?
> 
> 5. Let $\varepsilon\in\left[0,\frac{\pi}{2}\right]$. Suppose the chain rolled, with the angles fairly close to $\frac{\pi}{2}$: more precisely, for any $1\le i\le n-1$, the oriented angle $\widehat{(A_{i-1}A_i,A_iA_{i+1})}$ must remain in $\left[\frac{\pi}{2}-\varepsilon,\frac{\pi}{2}+\varepsilon\right]\cup\left[-\frac{\pi}{2}-\varepsilon,-\frac{\pi}{2}+\varepsilon\right]$. Redo questions 1 to 3 in this case.
> 
> 6. Propose and study other directions of research.

![[src_tfjm_2018__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_trigonometria|Trigonometria]], [[method_coordinate|Coordinate]], [[method_casework|Casework]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Una catena di n unità di collegamento con l'angolo orientato a ciascuna articolazione limitato ad un intervallo a seconda dell'alfa; descrivere e calcolare l'area dell'insieme di punti raggiungibile dalla fine libera, con varianti che fissano A_1 e utilizzano angoli vicini a pi/2.*

> Catenata a rotoli. Let $n\in\mathbb{N}^*$ e $\alpha\in[0,\pi]$. Colin si diverte con una catena rullata. La catena è costituita da $n$ collegamenti $A_0A_1,A_1A_2,\ldots,A_{n-1}A_n$, uniti a bisaglie; ogni segmento $[A_iA_{i+1}]$ ha lunghezza $1$ per $0\le i\le n-1$ (i segmenti possono essere incrociati). Il punto $A_0$ è fissato. Quando la catena è rotolata, l'angolo di ciascuna cerniera può assumere solo determinati valori: per qualsiasi $1\le i\le n-1$, l'angolo orientato $\widehat{(A_{i-1}A_i,A_iA_{i+1})}$ deve rimanere nell'intervallo $[-\alpha,\alpha]$ (vedi figura 4). Scriviamo $\mathcal{B}_\alpha^n$ per l'insieme di punti raggiungibili dall'estremità $A_n$ della catena.
> 
> 1. Come funzione di $n$ e $\alpha$, cosa è $\mathcal{B}_\alpha^n$? Trattare i seguenti casi: a) $\alpha=\pi$ (la catena non laminata); b) $\alpha=\frac{\pi}{2}$; c) $n=2$; d) $n=3$; e) $n,\alpha$ arbitrario.
> 
> 2. Descrivere il $\mathcal{B}_\alpha^n$ con la massima precisione possibile e calcolare la sua superficie nei diversi casi della domanda 1.
> 
> Nella domanda 3 e 4, supponiamo anche che il punto $A_1$ della catena sia fisso, a distanza $1$ da $A_0$. Scriviamo $\mathcal{C}_\alpha^n$ per l'insieme di punti raggiungibili dall'estremità $A_n$ della catena.
> 
> 3. Descrivere $\mathcal{C}_\alpha^n$ negli stessi casi della domanda 1.
> 
> 4. In questi stessi casi, quali sono i valori possibili dell'angolo orientato $\widehat{(A_0A_1,A_1A_n)}$? E' vero che per due punti $X$ e $Y$, di cui $A_1X=A_1Y$, esiste un arco di cerchio centrato a $A_1$, tra $X$ e $Y$, che è interamente incluso in $\mathcal{C}_\alpha^n$?
> 
> 5. Let $\varepsilon\in\left[0,\frac{\pi}{2}\right]$. Supponiamo che la catena sia rotolata, con gli angoli abbastanza vicini a $\frac{\pi}{2}$: più precisamente, per qualsiasi $1\le i\le n-1$, l'angolo orientato $\widehat{(A_{i-1}A_i,A_iA_{i+1})}$ deve rimanere in $\left[\frac{\pi}{2}-\varepsilon,\frac{\pi}{2}+\varepsilon\right]\cup\left[-\frac{\pi}{2}-\varepsilon,-\frac{\pi}{2}+\varepsilon\right]$. Redo domande da 1 a 3 in questo caso.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2018__Q05.png]]

[[src_tfjm_2018__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,topic_logica,method_casework,method_estremalita,method_backward,method_simmetria,skill_modellizzazione,skill_casework_accurato,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="en"></div>


*A two-player simultaneous card game with cards 1..2n; under several rules about who reveals first and how the lead passes, determine the number of points each player can guarantee, and study a card-redistribution variant.*

> Corsair battle. Igor and Sophia decide to modify the rules of the card game battle (war), which they find too dependent on luck. They have a deck of $2n$ cards numbered from $1$ to $2n$, for some $n\in\mathbb{N}^*$. At the start, Igor and Sophia each receive $n$ cards. At each turn, the two players choose at the same time one of their cards and place it on the table; the one who played the card with the higher number marks one point, and then the two played cards are removed.
> 
> 1. Igor and Sophia mark points according to the following rules. For each rule, what is the greatest number of points a player can guarantee herself? One may begin by studying small values of $n$.
>  a) Igor reveals first at each turn.
>  b) Sophia reveals first at each turn.
>  c) Igor reveals first at the first turn, then at each turn the player who has just lost reveals first.
>  d) Same thing, but Sophia reveals first at the first turn.
>  e) Igor reveals first at the first turn, then at each turn the player who has just won reveals first.
>  f) Same thing, but Sophia reveals first at the first turn.
> 
> 2. For each rule that is not equitable, the two players play, and to avoid ties one adds the following rule: at each turn when a card is played, if there is a tie, the last point is not attributed. Redo question 1 in this setting.
> 
> 3. Igor proposes a new distribution of the cards. One plays again with the cards numbered from $1$ to $2n$, but each player changes the initial distribution. Igor then wants to do strictly better than Sophia (that is, have strictly more points than her at the end of the game), but he wants the fewest turns of play possible. With the different rules of question 1, estimate this number of turns.
> 
> 4. Propose and study other directions of research.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_backward|Backward]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Un gioco di carte simultaneo per due giocatori con carte 1..2n; secondo diverse regole su chi rivela per primo e come passa il lead, determinare il numero di punti che ogni giocatore può garantire e studiare una variante di ridistribuzione delle carte.*

> Battaglia del Corsair. Igor e Sophia decidono di modificare le regole della battaglia di carte (guerra), che ritengono troppo dipendenti dalla fortuna. Hanno un mazzo di carte $2n$ numerate da $1$ a $2n$, per alcune $n\in\mathbb{N}^*$. All'inizio, Igor e Sophia ricevono ognuno delle carte $n$. A ogni turno, i due giocatori scelgono contemporaneamente una delle loro carte e la mettono sul tavolo; quella che ha giocato la carta con il numero più alto prende un punto, e poi le due carte giocate vengono rimosse.
> 
> 1. Igor e Sophia segnano i punti secondo le seguenti regole. Per ogni regola, quale è il maggior numero di punti che un giocatore può garantire? Si può iniziare studiando piccoli valori di $n$. a) Igor rivela per primo a ogni turno. b) Sophia si rivela prima a ogni turno. c) Igor rivela prima alla prima volta, poi a ogni volta il giocatore che ha appena perso rivela prima. D) La stessa cosa, ma Sophia rivela prima al primo turno. e) Igor rivela prima al primo turno, poi a ogni turno il giocatore che ha appena vinto rivela per primo. f) La stessa cosa, ma Sophia rivela prima al primo turno.
> 
> 2. Per ogni regola che non è uguale, i due giocatori giocano, e per evitare legami si aggiunge la seguente regola: a ogni turno quando si gioca una carta, se c'è un pareggio, l'ultimo punto non viene attribuito. Rendi la domanda 1 in questo contesto.
> 
> 3. Igor propone una nuova distribuzione delle carte. Si gioca di nuovo con le carte numerate da $1$ a $2n$, ma ogni giocatore cambia la distribuzione iniziale. Igor quindi vuole fare strettamente meglio di Sophia (cioè avere strettamente più punti di lei alla fine della partita), ma vuole il minor numero di giri di gioco possibile. Con le diverse regole della domanda 1, stima questo numero di giri.
> 
> 4. Proporre e studiare altre direzioni di ricerca.

[[src_tfjm_2018__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_combinatoria,topic_aritmetica,topic_geometria_analitica,method_casework,method_congruenze,method_coordinate,method_conteggio,skill_modellizzazione,skill_riconoscimento_pattern,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*A generalized knight that moves a squares then b squares perpendicular on the infinite board Z^2; determine for which (a,b) all squares are reachable, study the number reachable in k moves, the number on square (0,1), irregular squares, and an intervention-time quantity.*

> The stubborn knight. Ada plays chess. She studies the movement of her favourite piece, the knight, on an infinite chessboard (whose squares are indexed by $\mathbb{Z}^2$). More precisely, let $a$ and $b$ be two integers with $0\le a\le b$. Ada studies a piece she calls the knight of type $(a,b)$, which at each turn can move $a$ squares parallel to one axis of the board, then $b$ squares in the other, perpendicular direction. For example, the usual chess knight is the knight of type $(1,2)$. The knight starts from square $(0,0)$.
> 
> 1. As a function of $a$ and $b$, can the knight of type $(a,b)$ reach every square of the infinite board? One may consider the following values of $(a,b)$:
>  a) $(1,1)$;
>  b) $(1,2)$;
>  c) $(1,3)$;
>  d) $(2,3)$;
>  e) $(a,b)$ arbitrary.
> [Footnote: This question is studied in the article "Counting the Number of Squares Reachable in $k$ Knight's Moves", by A. Miller and B. Farnsworth. One may use the result found there but it is recommended to treat the issues of the problem.]
> 
> 2. Ada writes $u_k$ for the number of squares of the board reachable in $k$ moves (i.e. for which the minimal number of moves is $k$). Determine the sequence $(u_k)$. How does this sequence behave when $k\to+\infty$? Is it increasing?
> 
> 3. In the different cases, what is the number written on square $(0,1)$ (the minimal number of moves to reach it)? Propose an estimate.
> 
> 4. Ada says that a square $c$ is regular if, for every square $c'$ neighbouring $c$, the difference between the numbers written on $c$ and on $c'$ is always the same. How many squares are not regular? If this number is finite, estimate it. Otherwise, what is the greatest difference between two neighbouring squares that one can observe infinitely often?
> 
> 5. For an integer $n\in\mathbb{N}^*$, Ada writes $B_n$ for the set of squares of the form $(x,y)$ with $x,y\in\mathbb{Z}$ and $|x|,|y|\le n$. The intervention time of a knight in $B_n$ is the largest number written on the squares of $B_n$. For which values of $(a,b)$ is this intervention time in $B_n$ minimal? Ada writes $T_n$ for this value. Estimate $T_n$ as a function of $n$.
> 
> 6. Propose and study other directions of research.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_casework|Casework]], [[method_congruenze|Congruenze]], [[method_coordinate|Coordinate]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Un cavaliere generalizzato che muove un quadrato e poi b quadrati perpendicolari sulla tavola infinita Z^2; determinare per quale (a,b) tutti i quadrati sono raggiungibili, studiare il numero raggiungibile in k movimenti, il numero sul quadrato (0,1), quadrati irregolari e una quantità di tempo di intervento.*

> Il cavaliere testardo. Ada gioca a scacchi. Studia il movimento del suo pezzo preferito, il cavaliere, su una scacchiera infinita (le cui quadrate sono indicizzate da $\mathbb{Z}^2$). Più precisamente, $a$ e $b$ siano due integri con $0\le a\le b$. Ada studia un pezzo che chiama cavaliere di tipo $(a,b)$, che a ogni turno può spostare quadrati $a$ paralleli ad un asse della lavagna, quindi quadrati $b$ nell'altra direzione perpendicolare. Ad esempio, il solito cavaliere di scacchi è il cavaliere di tipo $(1,2)$. Il cavaliere parte dal quadrato $(0,0)$.
> 
> 1. Come funzione di $a$ e $b$, il cavaliere del tipo $(a,b)$ può raggiungere ogni quadrato della tavola infinita? Si possono considerare arbitrari i seguenti valori di $(a,b)$: a) $(1,1)$; b) $(1,2)$; c) $(1,3)$; d) $(2,3)$; e) $(a,b)$. [Nota di seguito: Questa domanda è studiata nell'articolo "Contando il numero di quadrati raggiungibili in $k$ Movimenti di Cavaliere", di A. Miller e B. Farnsworth. Si può usare il risultato trovato lì ma si raccomanda di trattare i problemi del problema.]
> 
> 2. Ada scrive $u_k$ per il numero di quadrati della scheda raggiungibili in $k$ mosse (cioè per il quale il numero minimo di mosse è $k$). Determinare la sequenza $(u_k)$. Come si comporta questa sequenza quando $k\to+\infty$? Sta aumentando?
> 
> 3. Qual è il numero scritto sul quadrato $(0,1)$ (il numero minimo di mosse per raggiungerlo)? Propone una stima.
> 
> 4. Ada dice che un quadrato $c$ è regolare se, per ogni quadrato $c'$ vicino $c$, la differenza tra i numeri scritti su $c$ e su $c'$ è sempre la stessa. Quanti quadrati non sono regolari? Se questo numero è finito, calcolalo. Altrimenti, qual è la più grande differenza tra due quadrati vicini che si può osservare infinitamente spesso?
> 
> 5. Per un intero $n\in\mathbb{N}^*$, Ada scrive $B_n$ per l'insieme di quadrati della forma $(x,y)$ con $x,y\in\mathbb{Z}$ e $|x|,|y|\le n$. Il tempo di intervento di un cavaliere in $B_n$ è il numero più grande scritto sui quadrati di $B_n$. Per quali valori di $(a,b)$ il tempo di intervento in $B_n$ è minimo? Ada scrive $T_n$ per questo valore. Valutare $T_n$ in funzione di $n$.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

[[src_tfjm_2018__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,topic_logica,method_casework,method_estremalita,method_conteggio,method_grafi,skill_conteggio_sistematico,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Scheduling a round-robin tournament of n players in the minimum number of days T(n), with 1/0 scoring; study possible point totals at each rank, the earliest day a player can be sure of being first or k-th, how many players can know their final rank, and the number of possible final rankings.*

> Championships with suspense. Let $n\ge 2$ be an integer. Vincent wants to organize a championship with suspense between $n$ players. He wants each player to play in turn against each of the others, so that the final ranking is known as late as possible. A pair never plays twice. We write $T(n)$ for the minimal number of days necessary to organize the tournament.
> 
> 1. What is $T(n)$?
> 
> Vincent decides on the following rules. The winner of a match marks $1$ point and the loser $0$. At the end of the championship, the players are ranked by decreasing number of points. In case of a tie, one proceeds at random by a draw. Tied players may be ranked in any order.
> 
> 2. Let $1\le k\le n$. What is the greatest possible number of points of the player ranked $k$-th in the final ranking? The smallest possible number of points?
> 
> Vincent does not want to waste time. In the rest of the problem, suppose the championship is always organized in exactly $T(n)$ days. Although the way of organizing the championship may vary, Vincent likes the suspense over the final ranking to last as long as possible. But he knows it is not always the case.
> 
> 3. After $j$ days, a player knows that, whatever the results of the remaining days, he will be first in the final ranking. Estimate the smallest $j$ for which this is possible.
> 
> 4. Fix $1\le k\le n$. Redo the previous question with a player who knows he will be ranked $k$-th in the final ranking.
> 
> 5. On the last day, $p$ players already know with certainty their final ranking. What is the greatest possible value of $p$? And replacing "on the last day" by "after $j$ days"?
> 
> 6. Just before the last day, Vincent makes the list of all possible final rankings, and writes $L$ for the number of these rankings. What is the greatest possible value of $L$? And the smallest?
> 
> 7. Propose and study other directions of research, for example considering the possibility of drawn matches that earn $a$ points with $0\le a\le 1$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]], [[method_grafi|Grafi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Programmare un torneo di round-robin di n giocatori nel numero minimo di giorni T(n), con punteggio di 1/0; studiare i possibili totali di punti a ciascuna classifica, il primo giorno in cui un giocatore può essere sicuro di essere primo o k-th, quanti giocatori possono conoscere la loro classifica finale, e il numero di possibili classifiche finali.*

> Campionati con sospensione. $n\ge 2$ sia un numero intero. Vincent vuole organizzare un campionato con sospensione tra i giocatori. Vuole che ogni giocatore giochi a turno contro ciascuno degli altri, in modo che la classifica finale sia conosciuta il più tardi possibile. Una coppia non gioca mai due volte. Scriviamo $T(n)$ per il numero minimo di giorni necessari per organizzare il torneo.
> 
> 1. Che cos' è $T(n)$?
> 
> Vincent decide sulle seguenti regole. Il vincitore di una partita segna $1$ punti e il perdente $0$ punti. Alla fine del campionato, i giocatori sono classificati per numero decrescente di punti. In caso di pareggio, uno procede a caso con un pareggio. I giocatori pari possono essere classificati in qualsiasi ordine.
> 
> 2. Let $1\le k\le n$. Qual è il maggior numero possibile di punti del giocatore classificato $k$-th nella classifica finale? Il minor numero possibile di punti?
> 
> Vincent non vuole perdere tempo. Nel resto del problema, supponiamo che il campionato sia sempre organizzato in giorni esatti. Sebbene il modo di organizzare il campionato possa variare, a Vincent piace il sospenso sulla classifica finale per durare il più a lungo possibile. Ma sa che non è sempre così.
> 
> 3. Dopo $j$ giorni, un giocatore sa che, qualunque sia il risultato dei giorni rimanenti, sarà il primo nella classifica finale. Calcolare il minimo $j$ per il quale ciò sia possibile.
> 
> 4. Risparmiare $1\le k\le n$. Riprendi la domanda precedente con un giocatore che sa che sarà classificato $k$-th nella classifica finale.
> 
> 5. L'ultimo giorno, i giocatori $p$ conoscono già con certezza la loro classifica finale. Qual è il massimo valore possibile di $p$? E sostituire "all'ultimo giorno" con "dopo $j$ giorni"?
> 
> 6. Poco prima dell'ultimo giorno, Vincent fa la lista di tutte le possibili classifiche finali, e scrive $L$ per il numero di queste classifiche. Qual è il massimo valore possibile di $L$? E il più piccolo?
> 
> 7. Proporre e studiare altre direzioni di ricerca, ad esempio considerando la possibilità di disegnare corrispondenze che guadagnino $a$ punti con $0\le a\le 1$.

[[src_tfjm_2018__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_combinatoria,topic_logica,method_casework,method_invarianti,method_backward,method_simmetria,skill_modellizzazione,skill_casework_accurato,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*A combinatorial game with n torches each lit or off; players alternately toggle one torch but may never repeat a configuration, and the player who cannot move loses; determine winning strategies under cooperative play, a cap of k lit torches, toggling a fixed number per turn, and asymmetric per-player toggle counts.*

> Lighting the fire. Let $n\in\mathbb{N}^*$. Gabrielle and Marie play a game. They have before them $n$ torches, each of which can be lit or extinguished. Initially, all the torches are extinguished. Each in turn, starting with Gabrielle, one of the two players touches a torch, that is, changes the state of that torch: if the torch was extinguished she lights it, and conversely. To make the game interesting, Gabrielle and Marie impose on themselves a constraint: it is forbidden to obtain a configuration already obtained previously (see Figure 5). The first who can no longer play has lost.
> 
> 1. (In this question only, Gabrielle and Marie collaborate, and one is not looking for who wins.) Is it possible for Gabrielle and Marie to obtain all the configurations possible with the $n$ torches during a single game? In the case where this is possible, on which configurations can the game end?
> 
> 2. From now on, the two players play one against the other. Which of the two has a winning strategy?
> 
> 3. Let $1\le k\le n-1$. To avoid getting too hot, the players forbid themselves from having strictly more than $k$ torches lit simultaneously. Redo question 2 in this setting.
> 
> 4. The two players must now activate (change the state of) exactly $a$ torches at each turn, for a fixed integer $a$, and may not activate any of the torches that have just changed state. Redo questions 2 and 3 in this setting. One may begin by treating the cases $a=2$ or $a=3$.
> 
> 5. Same question, but Gabrielle must now activate $a$ torches per turn, and Marie $b$ torches per turn, for two fixed integers $a$ and $b$.
> 
> 6. Propose and study other directions of research.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_invarianti|Invarianti]], [[method_backward|Backward]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Un gioco combinatorio con n torce ogni accesa o spenta; i giocatori alternatamente togliono una torcia ma non possono mai ripetere una configurazione, e il giocatore che non può muoversi perde; determinare le strategie di vincita nel gioco cooperativo, un limite di k torce accese, togliere un numero fisso per turno, e il numero di togliere asimmetrico per giocatore.*

> Accendiamo il fuoco. Let $n\in\mathbb{N}^*$. Gabrielle e Marie giocano a un gioco. Hanno davanti loro torce $n$, ognuna delle quali può essere accesa o spenta. Inizialmente, tutte le torce vengono spente. Ogni volta, a partire da Gabrielle, uno dei due giocatori tocca una torcia, cioè cambia lo stato di quella torcia: se la torcia è stata spenta la accende, e viceversa. Per rendere interessante il gioco, Gabrielle e Marie si impongono un vincolo: è proibito ottenere una configurazione già ottenuta in precedenza (vedi Figura 5). Il primo che non può più giocare ha perso.
> 
> 1. (Solo in questa domanda, Gabrielle e Marie collaborano, e non si cerca chi vince.) È possibile per Gabrielle e Marie ottenere tutte le configurazioni possibili con le torce $n$ durante una singola partita? Nel caso in cui ciò sia possibile, su quali configurazioni può finire il gioco?
> 
> 2. D'ora in poi, i due giocatori giocano l'uno contro l'altro. Chi di loro ha una strategia vincente?
> 
> 3. Let $1\le k\le n-1$. Per evitare di diventare troppo caldi, i giocatori si vietano di accendere più di $k$ torce contemporaneamente. Rendi la domanda 2 in questo contesto.
> 
> 4. I due giocatori devono ora attivare (cambiare lo stato di) esattamente $a$ torce ad ogni turno, per un numero intero fisso $a$, e non possono attivare nessuna delle torce che hanno appena cambiato stato. Redo le domande 2 e 3 in questo contesto. Si può iniziare con il trattamento dei casi $a=2$ o $a=3$.
> 
> 5. La stessa domanda, ma Gabrielle deve ora attivare le torce $a$ per turno, e le torce Marie $b$ per turno, per due integri fissi $a$ e $b$.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

[[src_tfjm_2018__Q09]]
