---
title: Concours Général des Lycées 2011 — Matematica
tipo: gara
competition: Concours Général des Lycées 2011 — Matematica
family: concours_generale
year: '2011'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2011"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,topic_trigonometria,method_coordinate,method_trigonometria,skill_ragionamento_geometrico,skill_modellizzazione,skill_lettura_attenta,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*A rectangular bar of length 7 and width a is placed diagonally inside a 6 by 5 rectangular box; find which widths a are admissible.*

> **Problem 1: It fits in the box.**
> 
> The figure shows a rectangular box, drawn as a rectangle $GFEH$ with $G$ at the top-left, $F$ at the top-right, $E$ at the bottom-right and $H$ at the bottom-left. The bottom side $HE$ has length $6$ and the right side $FE$ has length $5$.
> 
> Inside this box one places a rectangular bar $ABCD$ (a long thin rectangle of width $a$), leaning diagonally so that it touches the sides of the box: its corners $A$ and $D$ lie near the bottom-left corner $H$, and its corners $C$ and $B$ lie near the top-right corner $F$. The long side of the bar has length $7$, and its width is denoted $a$ (indicated by the labelled circle $a$ pointing to the short side of the bar near $A$ and $D$). The corners of the bar are right angles.
> 
> Which values of $a$ are admissible (i.e. for which widths $a$ does the bar fit in this way)?

![[src_cgen_2011__Q01.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/163UddjoW74HzYM11ncOycs88qAZ5uQV4/view)


<div class="qlang-split" data-lang="it"></div>

*Una sbarra rettangolare di lunghezza 7 e larghezza a è disposta in diagonale in una scatola rettangolare 6 per 5: determinare le larghezze a ammissibili.*
> **Problema 1: Si inserisce nella scatola.**
> 
> La figura mostra una scatola rettangolare, disegnata come rettangolare $GFEH$ con $G$ in alto a sinistra, $F$ in alto a destra, $E$ in basso a destra e $H$ in basso a sinistra. Il lato inferiore $HE$ è lungo $6$ e il lato destro $FE$ è lungo $5$.
> 
> All'interno di questa scatola si colloca una barra rettangolare $ABCD$ (un lungo rettangolo sottile di larghezza $a$), inclinata diagonalmente in modo da toccare i lati della scatola: i suoi angoli $A$ e $D$ si trovano vicino all'angolo inferiore sinistro $H$, e i suoi angoli $C$ e $B$ si trovano vicino all'angolo superiore destro $F$. Il lato lungo della barra ha lunghezza $7$ e la sua larghezza è indicata come $a$ (indicato dal cerchio etichettato $a$ che indica il lato corto della barra vicino a $A$ e $D$). Gli angoli del bar sono angoli retti.
> 
> Quali valori di $a$ sono ammissibili (ad es. per quali larghezze $a$ la barra si adatta in questo modo)?

![[src_cgen_2011__Q01.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,topic_aritmetica,method_casework,method_conteggio,method_estremalita,method_induzione,skill_conteggio_sistematico,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Capacity of a coin purse: largest M such that every amount from 1 to M can be paid, first without change then with change; optimize the denominations.*

> **Problème 2 : Rendez la monnaie !**
>
> Un acheteur a dans son porte-monnaie $n$ pièces. Notons $a_1, \ldots, a_n$ la valeur faciale de ces pièces — ce sont des nombres entiers strictement positifs. Convenons d’appeler *capacité* de ce porte-monnaie le plus grand nombre entier $M$ tel que l’on puisse payer sans rendu de monnaie toute somme (entière) de $1$ à $M$. Notons $C(a_1, \ldots, a_n)$ la capacité du porte-monnaie contenant les pièces $a_1, \ldots, a_n$.
>
> **1. Sans rendu.** On suppose dans cette question que l’on a $a_1 = 1$ et $a_1 \leqslant a_2 \leqslant \ldots \leqslant a_n$.
>
> **a.** Calculer les capacités $C(1, 2, 4)$, $C(1, 2, 5)$ et $C(1, 2, 3, 4, 5)$.
>
> **b.** Soit $j$ un nombre entier compris entre $1$ et $n - 1$ et fixons les nombres $a_1, \ldots, a_j$. À quelle condition sur $a_{j+1}$ a-t-on $C(a_1, \ldots, a_j) \neq C(a_1, \ldots, a_j, a_{j+1})$ ?
>
> **c.** Donner une méthode pour calculer $C(a_1, \ldots, a_n)$.
>
> **d.** On fixe $n$. Comment choisir les nombres entiers $a_1, \ldots, a_n$ pour que la capacité $C(a_1, \ldots, a_n)$ soit la plus grande possible ?
>
> **2. Avec rendu de monnaie.** Le marchand chez qui notre acheteur va faire ses courses possède aussi un porte-monnaie, lui permettant de rendre la monnaie.
>
> Fixons des nombres entiers $n$ et $p$. Nommons *capacité commune* le plus grand nombre entier $M$ tel que l’on puisse payer (c’est-à-dire accomplir la transaction) toute somme qui soit un nombre entier de $1$ à $M$. Comment choisir les porte-monnaies $(a_1, \ldots, a_n)$ de l’acheteur et $(v_1, \ldots, v_p)$ du vendeur afin qu’ils offrent la plus grande capacité commune possible ?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]], [[method_induzione|Induction]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/163UddjoW74HzYM11ncOycs88qAZ5uQV4/view)


<div class="qlang-split" data-lang="it"></div>


*Capacità di una borsa di monete: M più grande in modo che ogni importo da 1 a M possa essere versato, prima senza cambiamento e poi con cambiamento; ottimizzare le denominazioni.*

> **Problema 2: Date il cambio!**
> 
> Un acquirente ha nella borsa delle monete $n$. Indichiamo $a_1, \ldots, a_n$ i valori facciali di queste monete - sono numeri interi strettamente positivi. Accordiamo di chiamare la capacità ** di questa borsa il numero intero più grande $M$ in modo che si possa pagare, senza cambiare, ogni somma (intera) da $1$ a $M$. Indichiamo $C(a_1, \ldots, a_n)$ la capacità della borsa contenente le monete $a_1, \ldots, a_n$.
> 
> **1. In questa domanda presumiamo che $a_1 = 1$ e $a_1 \le a_2 \le \ldots \le a_n$.
> 
> **a.** Calcolare le capacità $C(1,2,4)$, $C(1,2,5)$ e $C(1,2,3,4,5)$.
> 
> **b.** $j$ sia un numero intero tra $1$ e $n-1$, e fichiamo i numeri $a_1, \ldots, a_j$. In quale condizione si ha un $C(a_1, \ldots, a_j) \ne C(a_1, \ldots, a_j, a_{j+1})$ su $a_{j+1}$?
> 
> **c.** Indicare un metodo per calcolare $C(a_1, \ldots, a_n)$.
> 
> **d.** Risolvi $n$. Come si scelgono gli enti $a_1, \ldots, a_n$ in modo che la capacità $C(a_1, \ldots, a_n)$ sia il più grande possibile?
> 
> **2. Con il cambio.** Il commerciante al quale il nostro acquirente va a fare acquisti ha anche una borsa, che gli consente di dare il cambio. Fissamo gli interi $n$ e $p$. Chiamiamo *capacità comune* il numero intero più grande $M$ in modo che si possa pagare (cioè effettuare l'operazione) ogni importo intero da $1$ a $M$. Come si possono scegliere i portafogli $(a_1, \ldots, a_n)$ dell'acquirente e $(v_1, \ldots, v_p)$ del venditore, in modo da offrire la massima capacità comune possibile?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]], [[method_estremalita|Principio di estremalita]], [[method_induzione|Induzione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]


<div class="qlang-split" data-lang="en"></div>


*Capacity of a coin purse: largest M such that every amount from 1 to M can be paid, first without change then with change; optimize the denominations.*

> **Problem 2: Give the change!**
> 
> A buyer has in his purse $n$ coins. We denote $a_1, \ldots, a_n$ the face values of these coins - these are strictly positive integers. Let us agree to call the *capacity* of this purse the largest integer $M$ such that one can pay, without giving change, every (whole) sum from $1$ to $M$. We denote $C(a_1, \ldots, a_n)$ the capacity of the purse containing the coins $a_1, \ldots, a_n$.
> 
> **1. Without change.** In this question we assume that $a_1 = 1$ and $a_1 \le a_2 \le \ldots \le a_n$.
> 
> **a.** Compute the capacities $C(1,2,4)$, $C(1,2,5)$ and $C(1,2,3,4,5)$.
> 
> **b.** Let $j$ be a whole number between $1$ and $n-1$, and let us fix the numbers $a_1, \ldots, a_j$. Under what condition on $a_{j+1}$ does one have $C(a_1, \ldots, a_j) \ne C(a_1, \ldots, a_j, a_{j+1})$?
> 
> **c.** Give a method to compute $C(a_1, \ldots, a_n)$.
> 
> **d.** Fix $n$. How should one choose the integers $a_1, \ldots, a_n$ so that the capacity $C(a_1, \ldots, a_n)$ is as large as possible?
> 
> **2. With change.** The merchant at whose shop our buyer goes shopping also has a purse, allowing him to give change. Let us fix integers $n$ and $p$. Let us call *common capacity* the largest integer $M$ such that one can pay (i.e. carry out the transaction) every whole sum from $1$ to $M$. How should one choose the purses $(a_1, \ldots, a_n)$ of the buyer and $(v_1, \ldots, v_p)$ of the seller so that they offer the largest possible common capacity?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]], [[method_induzione|Induction]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/163UddjoW74HzYM11ncOycs88qAZ5uQV4/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_algebra,topic_insiemi_funzioni,topic_aritmetica,topic_funzionali,method_bigezione,method_casework,method_congruenze,skill_astrazione,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="fr"></div>


*On the m-th roots of unity U_m, study existence of f: U_{2n} -> U_{2n} with f(f(z))=z^2; analyze cases by n and construct solutions for odd n.*

> **Problème 3 : La racine du carré**
>
> On considère l’ensemble $U_m = \left\{ \exp\!\left(\dfrac{2ik\pi}{m}\right) \mid 0 \leqslant k \leqslant m - 1 \right\}$ ; on rappelle que c’est aussi l’ensemble des racines $m$-ièmes complexes de l’unité, c’est-à-dire l’ensemble des nombres complexes $z$ vérifiant $z^m = 1$.
>
> On se donne un entier strictement positif $n$ et on cherche s’il existe une fonction $f : U_{2n} \longrightarrow U_{2n}$ vérifiant $f(f(z)) = z^2$ pour tout $z$ dans $U_{2n}$.
>
> **1.** Montrer que l’ensemble $\left\{ z^2 \mid z \in U_{2n} \right\}$ est égal à $U_n$ et qu’il est inclus dans $U_{2n}$.
>
> **2.** On suppose qu’il existe une solution $f$ au problème considéré.
>
> **a.** Vérifier que $f\bigl(z^2\bigr) = \bigl(f(z)\bigr)^2$ pour tout $z$ dans $U_{2n}$.
>
> **b.** Montrer que $f(z) = f(z') \Longrightarrow z = \pm z'$ et que $f(1) = f(-1) = 1$.
>
> **3.** Selon la valeur de $n$, existe-t-il un élément $z$ de $U_{2n}$ qui vérifie $z^2 = -1$ ? Si oui, vérifier qu’alors il n’y a pas de fonction $f$ solution.
>
> **4.** Selon la valeur de $n$, existe-t-il un élément $z$ de $U_{2n}$ qui vérifie $z^3 = 1$ avec $z \neq 1$ ? Si oui, vérifier qu’alors il n’y a pas de fonction $f$ solution.
>
> **5.** On suppose dans toute la suite de l’énoncé que l’entier $n$ est impair.
>
> **a.** Vérifier que la fonction $g$ de $U_n$ dans lui-même qui à $z$ appartenant à $U_n$ associe $z^2$ est bijective.
>
> **b.** On suppose qu’il existe une solution $f$ au problème. Vérifier qu’il existe une application $\varphi : U_n \longrightarrow U_n$ telle que $\varphi \circ \varphi = g$.
>
> **c.** Réciproquement, on suppose qu’il existe une fonction $\varphi : U_n \longrightarrow U_n$ telle que $\varphi \circ \varphi = g$. Construire alors une solution $f$ au problème.
>
> **d.** Exemple : on prend $n = 5$, dire s’il existe une solution au problème, si oui en construire une.
>
> **e.** Même question avec $n = 7$ puis $n = 9$.

**Topic:** [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_bigezione|Biiezione]], [[method_casework|Casework]], [[method_congruenze|Congruenze]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/163UddjoW74HzYM11ncOycs88qAZ5uQV4/view)


<div class="qlang-split" data-lang="it"></div>


*Sulle radici m di unità U_m, studiare l'esistenza di f: U_{2n} -> U_{2n} con f(f(z))=z^2; analizzare i casi per n e costruire soluzioni per n dispari.*

> **Problema 3: La radice del quadrato.**
> 
> Consideriamo l'insieme $U_m = \left\{ \exp\!\left(\frac{2ik\pi}{m}\right) \mid 0 \le k \le m-1 \right\}$; ricordiamo che questo è anche l'insieme delle radici complesse $m$-th di unità, cioè l'insieme dei numeri complessi $z$ che soddisfano $z^m = 1$.
> 
> Ci viene dato un intero strettamente positivo $n$ e cerchiamo se esiste una funzione $f : U_{2n} \longrightarrow U_{2n}$ che soddisfi $f(f(z)) = z^2$ per tutti $z$ in $U_{2n}$.
> 
> **1.** Dimostrare che l'insieme $\{ z^2 \mid z \in U_{2n} \}$ è uguale a $U_n$ e che è incluso in $U_{2n}$.
> 
> ** 2. ** Supponiamo che esista una soluzione $f$ al problema considerato.
> 
> **a.** Verificare che $f(z^2) = (f(z))^2$ per tutti $z$ in $U_{2n}$.
> 
> **b.** Dimostrare che $f(z) = f(z') \Longrightarrow z = \pm z'$ e che $f(1) = f(-1) = 1$.
> 
> **3.** A seconda del valore di $n$, esiste un elemento $z$ di $U_{2n}$ che soddisfi $z^2 = -1$? In tal caso, verificare che non vi sia soluzione $f$.
> 
> **4.** A seconda del valore di $n$, esiste un elemento $z$ di $U_{2n}$ che soddisfi $z^3 = 1$ con $z \ne 1$? In tal caso, verificare che non vi sia soluzione $f$.
> 
> **5.** Supponiamo nel resto dell'affermazione che il numero intero $n$ sia impar.
> 
> **a.** Verificare che la funzione $g$ da $U_n$ a se stessa che appartiene a $z$ associati $U_n$ $z^2$ sia biattiva.
> 
> **b.** Supponiamo che esista una soluzione $f$ al problema. Verificare che esiste una mappa $\varphi : U_n \longrightarrow U_n$ tale da $\varphi \circ \varphi = g$.
> 
> **c.** Al contrario, supponiamo che esista una funzione $\varphi : U_n \longrightarrow U_n$ tale da $\varphi \circ \varphi = g$. Costruire quindi una soluzione $f$ al problema.
> 
> **d.** Esempio: prendere $n = 5$; dire se esiste una soluzione al problema e, se sì, costruirla.
> 
> **e.** La stessa domanda con $n = 7$ e poi $n = 9$.

**Topic:** [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_bigezione|Bigezione / corrispondenza]], [[method_casework|Analisi per casi]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]


<div class="qlang-split" data-lang="en"></div>


*On the m-th roots of unity U_m, study existence of f: U_{2n} -> U_{2n} with f(f(z))=z^2; analyze cases by n and construct solutions for odd n.*

> **Problem 3: The root of the square.**
> 
> We consider the set $U_m = \left\{ \exp\!\left(\frac{2ik\pi}{m}\right) \mid 0 \le k \le m-1 \right\}$; recall that this is also the set of the complex $m$-th roots of unity, that is, the set of complex numbers $z$ satisfying $z^m = 1$.
> 
> We are given a strictly positive integer $n$ and we seek whether there exists a function $f : U_{2n} \longrightarrow U_{2n}$ satisfying $f(f(z)) = z^2$ for all $z$ in $U_{2n}$.
> 
> **1.** Show that the set $\{ z^2 \mid z \in U_{2n} \}$ is equal to $U_n$, and that it is included in $U_{2n}$.
> 
> **2.** Suppose there exists a solution $f$ to the considered problem.
> 
> **a.** Verify that $f(z^2) = (f(z))^2$ for all $z$ in $U_{2n}$.
> 
> **b.** Show that $f(z) = f(z') \Longrightarrow z = \pm z'$ and that $f(1) = f(-1) = 1$.
> 
> **3.** Depending on the value of $n$, does there exist an element $z$ of $U_{2n}$ that satisfies $z^2 = -1$? If so, verify that there is then no solution $f$.
> 
> **4.** Depending on the value of $n$, does there exist an element $z$ of $U_{2n}$ that satisfies $z^3 = 1$ with $z \ne 1$? If so, verify that there is then no solution $f$.
> 
> **5.** We assume throughout the rest of the statement that the integer $n$ is odd.
> 
> **a.** Verify that the function $g$ from $U_n$ to itself which to $z$ belonging to $U_n$ associates $z^2$ is bijective.
> 
> **b.** Suppose there exists a solution $f$ to the problem. Verify that there exists a map $\varphi : U_n \longrightarrow U_n$ such that $\varphi \circ \varphi = g$.
> 
> **c.** Conversely, suppose there exists a function $\varphi : U_n \longrightarrow U_n$ such that $\varphi \circ \varphi = g$. Construct then a solution $f$ to the problem.
> 
> **d.** Example: take $n = 5$; say whether there exists a solution to the problem, and if so construct one.
> 
> **e.** Same question with $n = 7$ then $n = 9$.

**Topic:** [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_bigezione|Biiezione]], [[method_casework|Casework]], [[method_congruenze|Congruenze]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/163UddjoW74HzYM11ncOycs88qAZ5uQV4/view)
