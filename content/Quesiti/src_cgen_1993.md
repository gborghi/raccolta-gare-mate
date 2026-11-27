---
title: Concours Général des Lycées 1993 — Matematica
tipo: gara
competition: Concours Général des Lycées 1993 — Matematica
family: concours_generale
year: '1993'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_1993"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,topic_combinatoria,method_fattorizzazione,method_conteggio,method_casework,method_induzione,skill_manipolazione_algebrica,skill_conteggio_sistematico,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*Boîtes de poids parfaites : masses obtenues de manière unique*

> **Exercice I**
>
> On appelle « boîte de poids » tout ensemble de poids comprenant $x_1$ poids de $d_1$ grammes chacun, $x_2$ poids de $d_2$ grammes chacun, $\ldots$, $x_k$ poids de $d_k$ grammes chacun.
>
> Les nombres $x_i$ et $d_i$ (pour $1 \leqslant i \leqslant k$) sont des entiers naturels non nuls, tels que
>
> $$1 \leqslant d_1 < d_2 < \cdots < d_k.$$
>
> On pose $n = x_1 d_1 + x_2 d_2 + \cdots + x_k d_k$ et on dit que la masse totale de la boîte de poids est $n$ grammes.
>
> Cette boîte de poids est dite « parfaite » si elle permet d'obtenir, de manière unique, toute masse de $0, 1, \ldots, n$ grammes, c'est-à-dire si, pour tout entier $m$ de l'ensemble $\{0, 1, \ldots, n\}$, il existe des entiers $y_1, y_2, \ldots, y_k$ uniques tels que, pour tout indice $i$ avec $1 \leqslant i \leqslant k$, on ait
>
> $$0 \leqslant y_i \leqslant x_i \quad \text{et} \quad m = y_1 d_1 + y_2 d_2 + \cdots + y_k d_k.$$
>
> 1. Déterminer toutes les boîtes de poids de masse totale $5$ grammes. Quelles sont celles qui sont parfaites ?
> 2. Montrer que pour une boîte de poids parfaite de masse totale $n$ grammes, on a, avec les notations du préambule,
>
> $$(1 + x_1)(1 + x_2) \cdots (1 + x_k) = n + 1.$$
>
> 3. Inversement, on se donne $k$ entiers $x_1, x_2, \ldots, x_k$ strictement positifs ($k$ non nul), et on définit $n$ par
>
> $$n + 1 = (1 + x_1)(1 + x_2) \cdots (1 + x_k).$$
>
> Montrer qu'il existe des entiers $d_1, d_2, \ldots, d_k$ uniques avec $1 \leqslant d_1 < d_2 < \cdots < d_k$ tels que la boîte de poids composée de $x_1$ poids de $d_1$ grammes, $x_2$ poids de $d_2$ grammes, $\ldots$, $x_k$ poids de $d_k$ grammes soit parfaite.
> 4. Déterminer toutes les boîtes de poids parfaites de masse totale $1993$ grammes.

**Topic:** [[topic_aritmetica|Arithmétique / Théorie des nombres]], [[topic_combinatoria|Combinatoire]]
**Metodo:** [[method_fattorizzazione|Factorisation]], [[method_conteggio|Dénombrement]], [[method_casework|Disjonction de cas]], [[method_induzione|Récurrence]]
**Abilita:** [[skill_manipolazione_algebrica|Manipulation algébrique]], [[skill_conteggio_sistematico|Dénombrement systématique]], [[skill_lettura_attenta|Lecture attentive]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmétique et théorie des nombres]], [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/18H2105DhGaTVXhbRzbq_zpCWkOcMtfYO/view)


<div class="qlang-split" data-lang="it"></div>


*Scatole di pesi perfette: masse ottenute in modo unico*

> **Esercizio I**
>
> Si chiama «scatola di pesi» ogni insieme di pesi che comprende $x_1$ pesi di $d_1$ grammi ciascuno, $x_2$ pesi di $d_2$ grammi ciascuno, $\ldots$, $x_k$ pesi di $d_k$ grammi ciascuno.
>
> I numeri $x_i$ e $d_i$ (per $1 \leqslant i \leqslant k$) sono interi positivi, tali che
>
> $$1 \leqslant d_1 < d_2 < \cdots < d_k.$$
>
> Si ponga $n = x_1 d_1 + x_2 d_2 + \cdots + x_k d_k$ e si dica che la massa totale della scatola di pesi è $n$ grammi.
>
> Questa scatola di pesi si dice «perfetta» se permette di ottenere, in modo unico, ogni massa di $0, 1, \ldots, n$ grammi: cioè se, per ogni intero $m$ dell'insieme $\{0, 1, \ldots, n\}$, esistono interi $y_1, y_2, \ldots, y_k$ unici tali che, per ogni indice $i$ con $1 \leqslant i \leqslant k$,
>
> $$0 \leqslant y_i \leqslant x_i \quad \text{e} \quad m = y_1 d_1 + y_2 d_2 + \cdots + y_k d_k.$$
>
> 1. Determinare tutte le scatole di pesi di massa totale $5$ grammi. Quali sono perfette?
> 2. Dimostrare che per una scatola di pesi perfetta di massa totale $n$ grammi, con le notazioni del preambolo,
>
> $$(1 + x_1)(1 + x_2) \cdots (1 + x_k) = n + 1.$$
>
> 3. Inversamente, sono dati $k$ interi $x_1, x_2, \ldots, x_k$ strettamente positivi ($k$ non nullo), e si definisce $n$ mediante
>
> $$n + 1 = (1 + x_1)(1 + x_2) \cdots (1 + x_k).$$
>
> Dimostrare che esistono interi $d_1, d_2, \ldots, d_k$ unici con $1 \leqslant d_1 < d_2 < \cdots < d_k$ tali che la scatola di pesi composta da $x_1$ pesi di $d_1$ grammi, $x_2$ pesi di $d_2$ grammi, $\ldots$, $x_k$ pesi di $d_k$ grammi sia perfetta.
> 4. Determinare tutte le scatole di pesi perfette di massa totale $1993$ grammi.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Perfect weight boxes: masses obtained in a unique way*

> **Exercise I**
>
> A "weight box" is any set of weights comprising $x_1$ weights of $d_1$ grams each, $x_2$ weights of $d_2$ grams each, $\ldots$, $x_k$ weights of $d_k$ grams each.
>
> The numbers $x_i$ and $d_i$ (for $1 \leqslant i \leqslant k$) are positive integers, such that
>
> $$1 \leqslant d_1 < d_2 < \cdots < d_k.$$
>
> Set $n = x_1 d_1 + x_2 d_2 + \cdots + x_k d_k$, and say that the total mass of the weight box is $n$ grams.
>
> This weight box is called "perfect" if it allows one to obtain, in a unique way, every mass of $0, 1, \ldots, n$ grams: that is, if for every integer $m$ in the set $\{0, 1, \ldots, n\}$ there exist unique integers $y_1, y_2, \ldots, y_k$ such that, for every index $i$ with $1 \leqslant i \leqslant k$,
>
> $$0 \leqslant y_i \leqslant x_i \quad \text{and} \quad m = y_1 d_1 + y_2 d_2 + \cdots + y_k d_k.$$
>
> 1. Determine all weight boxes of total mass $5$ grams. Which of them are perfect?
> 2. Prove that for a perfect weight box of total mass $n$ grams, with the notation of the preamble,
>
> $$(1 + x_1)(1 + x_2) \cdots (1 + x_k) = n + 1.$$
>
> 3. Conversely, one is given $k$ strictly positive integers $x_1, x_2, \ldots, x_k$ ($k$ nonzero), and $n$ is defined by
>
> $$n + 1 = (1 + x_1)(1 + x_2) \cdots (1 + x_k).$$
>
> Prove that there exist unique integers $d_1, d_2, \ldots, d_k$ with $1 \leqslant d_1 < d_2 < \cdots < d_k$ such that the weight box made of $x_1$ weights of $d_1$ grams, $x_2$ weights of $d_2$ grams, $\ldots$, $x_k$ weights of $d_k$ grams is perfect.
> 4. Determine all perfect weight boxes of total mass $1993$ grams.

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_fattorizzazione|Factorisation / algebraic manipulation]], [[method_conteggio|Combinatorial counting]], [[method_casework|Case analysis]], [[method_induzione|Induction]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_conteggio_sistematico|Systematic counting]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,topic_algebra,topic_insiemi_funzioni,method_casework,method_fattorizzazione,skill_manipolazione_algebrica,skill_lettura_attenta,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="fr"></div>


*Existence of 2n+1 consecutive integers satisfying sum / sum-of-squares / sum-of-cubes equality*

> Soit $n$ un entier strictement positif donné.
>
> **1.** Existe-t-il $2n+1$ entiers naturels consécutifs $a_0, a_1, \ldots, a_{2n}$, rangés dans l'ordre croissant, vérifiant :
> $$a_0 + a_1 + \cdots + a_n = a_{n+1} + \cdots + a_{2n}\,?$$
>
> **2.** Existe-t-il $2n+1$ entiers naturels consécutifs $a_0, a_1, \ldots, a_{2n}$, rangés dans l'ordre croissant, vérifiant :
> $$a_0^2 + a_1^2 + \cdots + a_n^2 = a_{n+1}^2 + \cdots + a_{2n}^2\,?$$
>
> **3.** Existe-t-il $2n+1$ entiers naturels consécutifs $a_0, a_1, \ldots, a_{2n}$, rangés dans l'ordre croissant, vérifiant :
> $$a_0^3 + a_1^3 + \cdots + a_n^3 = a_{n+1}^3 + \cdots + a_{2n}^3\,?$$
>
> Pour cette question, on pourra étudier les variations de la fonction $f$ définie sur $\mathbb{R}$ par :
> $$f(x) = (x - n)^3 + (x - n + 1)^3 + \cdots + x^3 - (x + 1)^3 - \cdots - (x + n)^3.$$
> On montrera que l'équation $f(x) = 0$ admet une solution unique $x_n$ vérifiant :
> $$3n(n + 1) < x_n < 3n(n + 1) + 1.$$
> On pourra utiliser l'égalité : $1^3 + 2^3 + \cdots + n^3 = \left[\dfrac{n(n + 1)}{2}\right]^2$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_casework|Casework]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/18H2105DhGaTVXhbRzbq_zpCWkOcMtfYO/view)


<div class="qlang-split" data-lang="it"></div>

*Esistenza di 2n+1 interi naturali consecutivi per i quali la somma, la somma dei quadrati o la somma dei cubi dei primi n+1 termini uguaglia quella dei rimanenti.*
> $n$ sia un dato numero intero strettamente positivo.
> 
> Esistono $2n+1$ numeri interi naturali consecutivi $a_0, a_1, \ldots, a_{2n}$, disposti in ordine crescente, che soddisfano: $$a_0 + a_1 + \cdots + a_n = a_{n+1} + \cdots + a_{2n}?$$
> 
> Esistono $2n+1$ numeri interi naturali consecutivi $a_0, a_1, \ldots, a_{2n}$, ordinati in ordine crescente, che soddisfano: $$a_0^2 + a_1^2 + \cdots + a_n^2 = a_{n+1}^2 + \cdots + a_{2n}^2?$$
> 
> Esistono $2n+1$ numeri interi naturali consecutivi $a_0, a_1, \ldots, a_{2n}$, disposti in ordine crescente, che soddisfano: $$a_0^3 + a_1^3 + \cdots + a_n^3 = a_{n+1}^3 + \cdots + a_{2n}^3?$$
> 
> Per quest'ultima domanda, si possono studiare le variazioni della funzione $f$ definita su $\mathbb{R}$ da: $$f(x) = (x-n)^3 + (x-n+1)^3 + \cdots + x^3 - (x+1)^3 - \cdots - (x+n)^3.$$ Si mostrerà che l'equazione $f(x) = 0$ ammette una soluzione unica $x_n$ soddisfacente $3n(n+1) < x_n < 3n(n+1) + 1$.
> 
> Si può usare l'identità $1^2 + 2^2 + \cdots + n^2 = \left[\dfrac{n(n+1)}{2}\right]^2$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Existence of 2n+1 consecutive integers satisfying sum / sum-of-squares / sum-of-cubes equality*

> Let $n$ be a given strictly positive integer.
> 
> **1.** Does there exist $2n+1$ consecutive natural integers $a_0, a_1, \ldots, a_{2n}$, arranged in increasing order, satisfying:
> $$a_0 + a_1 + \cdots + a_n = a_{n+1} + \cdots + a_{2n}?$$
> 
> **2.** Does there exist $2n+1$ consecutive natural integers $a_0, a_1, \ldots, a_{2n}$, arranged in increasing order, satisfying:
> $$a_0^2 + a_1^2 + \cdots + a_n^2 = a_{n+1}^2 + \cdots + a_{2n}^2?$$
> 
> **3.** Does there exist $2n+1$ consecutive natural integers $a_0, a_1, \ldots, a_{2n}$, arranged in increasing order, satisfying:
> $$a_0^3 + a_1^3 + \cdots + a_n^3 = a_{n+1}^3 + \cdots + a_{2n}^3?$$
> 
> For this last question, one may study the variations of the function $f$ defined on $\mathbb{R}$ by:
> $$f(x) = (x-n)^3 + (x-n+1)^3 + \cdots + x^3 - (x+1)^3 - \cdots - (x+n)^3.$$
> One will show that the equation $f(x) = 0$ admits a unique solution $x_n$ satisfying $3n(n+1) < x_n < 3n(n+1) + 1$.
> 
> One may use the identity $1^2 + 2^2 + \cdots + n^2 = \left[\dfrac{n(n+1)}{2}\right]^2$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_casework|Casework]], [[method_fattorizzazione|Factorisation / algebraic manipulation]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/18H2105DhGaTVXhbRzbq_zpCWkOcMtfYO/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_insiemi_funzioni,topic_algebra,topic_funzionali,method_estremalita,method_backward,skill_manipolazione_algebrica,skill_ragionamento_geometrico,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*Fonction minorée strictement convexe sur Z : elle est constante*

> **Exercice 3**
>
> Soit $f$ une application de l'ensemble $\mathbb{Z}$ des entiers relatifs dans l'ensemble $\mathbb{R}$ des réels.
>
> On suppose que $f$ est minorée et vérifie, pour tout entier relatif $n$,
>
> $$f(n) > \frac{1}{2}\bigl(f(n+1) + f(n-1)\bigr).$$
>
> Montrer que l'application $f$ est constante.

**Topic:** [[topic_insiemi_funzioni|Ensembles et fonctions]], [[topic_algebra|Algèbre]], [[topic_funzionali|Équations fonctionnelles]]
**Metodo:** [[method_estremalita|Extrémalité]], [[method_backward|Raisonnement à rebours]]
**Abilita:** [[skill_manipolazione_algebrica|Manipulation algébrique]], [[skill_ragionamento_geometrico|Raisonnement géométrique]], [[skill_lettura_attenta|Lecture attentive]]
**Area:** [[Algebra e Analisi|Algèbre et analyse]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/18H2105DhGaTVXhbRzbq_zpCWkOcMtfYO/view)


<div class="qlang-split" data-lang="it"></div>


*Una funzione minorata e strettamente convessa su Z è costante*

> **Esercizio 3**
>
> Sia $f$ un'applicazione dall'insieme $\mathbb{Z}$ degli interi relativi nell'insieme $\mathbb{R}$ dei reali.
>
> Si supponga che $f$ sia minorata e verifichi, per ogni intero relativo $n$,
>
> $$f(n) > \frac{1}{2}\bigl(f(n+1) + f(n-1)\bigr).$$
>
> Dimostrare che l'applicazione $f$ è costante.

**Topic:** [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*A function bounded below and strictly convex on Z is constant*

> **Exercise 3**
>
> Let $f$ be a map from the set $\mathbb{Z}$ of integers to the set $\mathbb{R}$ of real numbers.
>
> Assume that $f$ is bounded from below and satisfies, for every integer $n$,
>
> $$f(n) > \frac{1}{2}\bigl(f(n+1) + f(n-1)\bigr).$$
>
> Prove that the map $f$ is constant.

**Topic:** [[topic_insiemi_funzioni|Sets and functions]], [[topic_algebra|Algebra]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_backward|Working backwards]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_geometria_piana,method_estremalita,method_coordinate,method_simmetria,skill_ragionamento_geometrico,skill_stima,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*Recouvrement d'un disque de rayon 1 par deux ou trois disques de rayon r < 1*

> **Exercice 4**
>
> Soit dans le plan un disque $D$ de rayon $1$.
>
> 1. Montrer qu'il est impossible de recouvrir le disque $D$ avec deux disques de même rayon $r$, lorsque $r$ est strictement inférieur à $1$.
> 2. Montrer que, pour certaines valeurs de $r$, avec $r < 1$, il est possible de recouvrir le disque $D$ avec trois disques de même rayon $r$. Quelle est la plus petite valeur de $r$ permettant un tel recouvrement ?

**Topic:** [[topic_geometria_piana|Géométrie plane]]
**Metodo:** [[method_estremalita|Extrémalité]], [[method_coordinate|Coordonnées]], [[method_simmetria|Symétrie]]
**Abilita:** [[skill_ragionamento_geometrico|Raisonnement géométrique]], [[skill_stima|Estimation]], [[skill_lettura_attenta|Lecture attentive]]
**Area:** [[Geometria|Géométrie]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/18H2105DhGaTVXhbRzbq_zpCWkOcMtfYO/view)


<div class="qlang-split" data-lang="it"></div>


*Ricoprire un disco di raggio 1 con due o tre dischi di raggio r < 1*

> **Esercizio 4**
>
> Sia nel piano un disco $D$ di raggio $1$.
>
> 1. Dimostrare che è impossibile ricoprire il disco $D$ con due dischi dello stesso raggio $r$, quando $r$ è strettamente minore di $1$.
> 2. Dimostrare che, per certi valori di $r$ con $r < 1$, è possibile ricoprire il disco $D$ con tre dischi dello stesso raggio $r$. Qual è il più piccolo valore di $r$ che permette un tale ricoprimento?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_coordinate|Metodo delle coordinate]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_stima|Stima e approssimazione]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Geometria]]


<div class="qlang-split" data-lang="en"></div>


*Covering a disk of radius 1 by two or three disks of radius r < 1*

> **Exercise 4**
>
> Let $D$ be a disk of radius $1$ in the plane.
>
> 1. Prove that it is impossible to cover the disk $D$ with two disks of the same radius $r$, when $r$ is strictly less than $1$.
> 2. Prove that, for some values of $r$ with $r < 1$, it is possible to cover the disk $D$ with three disks of the same radius $r$. What is the smallest value of $r$ that allows such a covering?

**Topic:** [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_coordinate|Coordinate method]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_stima|Estimation and approximation]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Geometria|Geometry]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_solida,topic_geometria_piana,topic_disuguaglianze,method_estremalita,method_disuguaglianze,method_simmetria,skill_ragionamento_geometrico,skill_stima,skill_modellizzazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*Triangles d'aire ou de périmètre extrémal ; maximum de V/L^3 pour un tétraèdre*

> **Exercice 5**
>
> 1. Soient $A$ et $B$ deux points distincts de l'espace.
>
> a. Parmi les triangles $MAB$ d'aire donnée, quels sont ceux de périmètre minimal ?
>
> b. Parmi les triangles $MAB$ de périmètre donné, quels sont ceux d'aire maximale ?
>
> 2. Soit, dans un tétraèdre de volume $V$, $a$, $b$, $c$, $d$ les longueurs de quatre arêtes telles que trois quelconques d'entre elles ne soient pas coplanaires, et $L = a + b + c + d$.
>
> Déterminer la valeur maximale du quotient
>
> $$\frac{V}{L^3}.$$

**Topic:** [[topic_geometria_solida|Géométrie dans l'espace]], [[topic_geometria_piana|Géométrie plane]], [[topic_disuguaglianze|Inégalités]]
**Metodo:** [[method_estremalita|Extrémalité]], [[method_disuguaglianze|Inégalités]], [[method_simmetria|Symétrie]]
**Abilita:** [[skill_ragionamento_geometrico|Raisonnement géométrique]], [[skill_stima|Estimation]], [[skill_modellizzazione|Modélisation]], [[skill_lettura_attenta|Lecture attentive]]
**Area:** [[Geometria|Géométrie]], [[Algebra e Analisi|Algèbre et analyse]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/18H2105DhGaTVXhbRzbq_zpCWkOcMtfYO/view)


<div class="qlang-split" data-lang="it"></div>


*Triangoli di area o perimetro estremale; massimo di V/L^3 per un tetraedro*

> **Esercizio 5**
>
> 1. Siano $A$ e $B$ due punti distinti dello spazio.
>
> a. Tra i triangoli $MAB$ di area data, quali hanno perimetro minimo?
>
> b. Tra i triangoli $MAB$ di perimetro dato, quali hanno area massima?
>
> 2. In un tetraedro di volume $V$, siano $a$, $b$, $c$, $d$ le lunghezze di quattro spigoli tali che tre qualunque di essi non siano complanari, e sia $L = a + b + c + d$.
>
> Determinare il valore massimo del quoziente
>
> $$\frac{V}{L^3}.$$

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_geometria_piana|Geometria piana]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_disuguaglianze|Disuguaglianze classiche]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_stima|Stima e approssimazione]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Geometria]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Triangles of extremal area or perimeter; maximum of V/L^3 for a tetrahedron*

> **Exercise 5**
>
> 1. Let $A$ and $B$ be two distinct points of space.
>
> a. Among the triangles $MAB$ of given area, which ones have minimal perimeter?
>
> b. Among the triangles $MAB$ of given perimeter, which ones have maximal area?
>
> 2. In a tetrahedron of volume $V$, let $a$, $b$, $c$, $d$ be the lengths of four edges such that any three of them are not coplanar, and let $L = a + b + c + d$.
>
> Determine the maximal value of the quotient
>
> $$\frac{V}{L^3}.$$

**Topic:** [[topic_geometria_solida|Solid geometry]], [[topic_geometria_piana|Plane geometry]], [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_disuguaglianze|Classical inequalities]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_stima|Estimation and approximation]], [[skill_modellizzazione|Modelling / translating the text]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Geometria|Geometry]], [[Algebra e Analisi|Algebra and analysis]]
