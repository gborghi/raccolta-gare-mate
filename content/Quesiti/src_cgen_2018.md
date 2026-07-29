---
title: Concours Général des Lycées 2018 — Matematica
tipo: gara
competition: Concours Général des Lycées 2018 — Matematica
family: concours_generale
year: '2018'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2018"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_algebra,topic_geometria_analitica,topic_probabilita,method_coordinate,method_casework,method_conteggio,skill_manipolazione_algebrica,skill_ragionamento_geometrico,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Bernstein polynomials (properties, recurrence, partition of unity, probabilistic sums) and the geometric study of degree 0/1/2 Bezier curves.*

> Problem 1: Approximations of curves.
> 
> Part 1.1 - The Bernstein polynomials.
> For every natural number $n$ and every natural number $i$ between $0$ and $n$, we denote by $B_{n,i}$ the polynomial defined, for $p$ varying in the interval $[0;1]$, by:
> $$B_{n,i}(p)=\binom{n}{i}p^i(1-p)^{n-i}$$
> with $\binom{n}{i}$ the binomial coefficient, $i$ among $n$. Thus $B_{0,0}(p)=1$, $B_{1,0}(p)=1-p$ and $B_{1,1}(p)=p$. These polynomials are called Bernstein polynomials.
> 
> 1. a. Give the expression of $B_{2,0}(p)$, $B_{2,1}(p)$ and $B_{2,2}(p)$.
>    b. Determine the expression of the Bernstein polynomials for $n=3$, namely $B_{3,0}(p)$, $B_{3,1}(p)$, $B_{3,2}(p)$ and $B_{3,3}(p)$.
> 
> 2. a. What is the expression of $B_{n,0}(p)$ and of $B_{n,n}(p)$?
>    b. Show that for all $n\ge 1$ and all $i$ between $1$ and $n-1$,
>    $$B_{n,i}(p)=(1-p)B_{n-1,i}(p)+pB_{n-1,i-1}(p)$$
> 
> 3. a. At which value(s) $p\in[0;1]$ does a Bernstein polynomial vanish? (One should reason by distinguishing cases according to the values of $n$ and of $i$.)
>    b. What about its sign on $[0;1]$?
> 
> 4. Show that the Bernstein polynomials of the same degree $n$ form a partition of unity: that is, for every natural number $n$,
> $$\sum_{i=0}^{n}B_{n,i}(p)=B_{n,0}(p)+B_{n,1}(p)+\ldots+B_{n,n-1}(p)+B_{n,n}(p)=1$$
> 
> 5. Determine the value of the sums:
> $$\sum_{i=0}^{n}i\,B_{n,i}(p)\quad\text{and}\quad\sum_{i=0}^{n}i^2\,B_{n,i}(p)$$
> What do these sums represent in probabilistic terms?
> 
> Part 1.2 - Bezier curves.
> The plane is equipped with an orthonormal frame $(O,I,J)$. Let $n$ be a natural number. We are given $n+1$ non-aligned points of the plane $P_0,P_1,\ldots,P_{n-1},P_n$. The Bezier curve of degree $n$ and of control points $P_0,P_1,\ldots,P_{n-1},P_n$ is the set of points $M(p)$ of the plane, with $p$ varying in the interval $[0;1]$, such that:
> $$\overrightarrow{OM(p)}=\sum_{i=0}^{n}B_{n,i}(p)\,\overrightarrow{OP_i}$$
> In what follows we focus on Bezier curves of degree $0$, $1$ or $2$. We fix therefore $A$, $B$, $C$ three non-aligned points of the plane.
> 
> 1. Recognize the geometric nature
>    a. of the Bezier curve of degree $0$ and control point $A$.
>    b. of the Bezier curve of degree $1$ and control points $B$ and $C$.
> 
> 2. We consider the Bezier curve of degree $2$ and control points $A$, $B$ and $C$.
>    a. Justify that the points $A$ and $C$ belong to this curve. Does the point $B$ belong to it?
>    b. In this question we take the points of coordinates $A(-2;5)$, $B(2;1)$ and $C(4;3)$. Propose a construction of the points of this curve for $p=\tfrac{1}{4}$, $p=\tfrac{1}{2}$ and $p=\tfrac{3}{4}$. Sketch the curve freehand.
> 
> 3. Show that this curve is necessarily inscribed in the triangle $ABC$.
> 
> 4. What could be the geometric nature of this Bezier curve of degree $2$? Justify your answer.

![[src_cgen_2018__Q01.png]]

**Topic:** [[topic_algebra|Algebra]], [[topic_geometria_analitica|Geometria analitica]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]]
**Area:** [[Algebra e Analisi]], [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1ndY2rTBhYsNW1k5eeouIHRqR2THD_a96/view)


<span class="qlang-split" data-lang="it"></span>


*Polinomi di Bernstein (proprietà, ricorrenza, divisione di unità, somme probabilistiche) e lo studio geometrico delle curve di Bezier di grado 0/1/2.*

> Problema 1: Approximation delle curve.
> 
> Parte 1.1 - I polinomi di Bernstein. Per ogni numero naturale $n$ e per ogni numero naturale $i$ tra $0$ e $n$, indichiamo con $B_{n,i}$ il polinomio definito, per $p$ che varia nell'intervallo $[0;1]$, da: $$B_{n,i}(p)=\binom{n}{i}p^i(1-p)^{n-i}$$ con $\binom{n}{i}$ il coefficiente binomio, $i$ tra $n$. Quindi $B_{0,0}(p)=1$, $B_{1,0}(p)=1-p$ e $B_{1,1}(p)=p$. Questi polinomi sono chiamati polinomi di Bernstein.
> 
> 1. a. Indicare l'espressione di $B_{2,0}(p)$, $B_{2,1}(p)$ e $B_{2,2}(p)$. b. Determinare l'espressione dei polinomi di Bernstein per $n=3$, vale a dire $B_{3,0}(p)$, $B_{3,1}(p)$, $B_{3,2}(p)$ e $B_{3,3}(p)$.
> 
> 2. a. Qual è l'espressione di $B_{n,0}(p)$ e di $B_{n,n}(p)$? b. Indicare che per tutti i $n\ge 1$ e tutti i $i$ tra $1$ e $n-1$, $$B_{n,i}(p)=(1-p)B_{n-1,i}(p)+pB_{n-1,i-1}(p)$$
> 
> 3. a. A quale valore (s) $p\in[0;1]$ un polinomio di Bernstein scompare? (Si deve ragionare distinguendo i casi secondo i valori di $n$ e di $i$.) b. E il suo segno su $[0;1]$?
> 
> 4. Mostrare che i polinomi di Bernstein dello stesso grado $n$ formano una partizione di unità: cioè, per ogni numero naturale $n$, $$\sum_{i=0}^{n}B_{n,i}(p)=B_{n,0}(p)+B_{n,1}(p)+\ldots+B_{n,n-1}(p)+B_{n,n}(p)=1$$
> 
> 5. Determinare il valore delle somme: $$\sum_{i=0}^{n}i\,B_{n,i}(p)\quad\text{and}\quad\sum_{i=0}^{n}i^2\,B_{n,i}(p)$$ Cosa rappresentano queste somme in termini di probabilità?
> 
> Parte 1.2 - Curve di Bezier. L'aereo è dotato di una cornice ortonormale $(O,I,J)$. $n$ sia un numero naturale. Ci sono dati $n+1$ punti non allineati del piano $P_0,P_1,\ldots,P_{n-1},P_n$. La curva di Bezier di grado $n$ e dei punti di controllo $P_0,P_1,\ldots,P_{n-1},P_n$ è l'insieme dei punti $M(p)$ del piano, con $p$ che varia nell'intervallo $[0;1]$, in modo tale che: $$\overrightarrow{OM(p)}=\sum_{i=0}^{n}B_{n,i}(p)\,\overrightarrow{OP_i}$$ In quanto segue ci concentriamo sulle curve di Bezier di grado $0$, $1$ o $2$. Quindi, fissamo $A$, $B$, $C$ tre punti non allineati del piano.
> 
> 1. Riconoscere la natura geometrica a. della curva di Bezier di grado $0$ e del punto di controllo $A$. b. della curva di Bezier di grado $1$ e dei punti di controllo $B$ e $C$.
> 
> 2. Si considera la curva di Bezier di grado $2$ e i punti di controllo $A$, $B$ e $C$. a. giustificare che i punti $A$ e $C$ appartengono a questa curva. Il punto $B$ ne appartiene? b. In questa domanda prendiamo i punti delle coordinate $A(-2;5)$, $B(2;1)$ e $C(4;3)$. Proporre una costruzione dei punti di questa curva per $p=\tfrac{1}{4}$, $p=\tfrac{1}{2}$ e $p=\tfrac{3}{4}$. Segna la curva a mano libera.
> 
> 3. Mostrare che questa curva è necessariamente inserita nel triangolo $ABC$.
> 
> 4. Qual potrebbe essere la natura geometrica di questa curva di Bezier di grado $2$? Giustifica la tua risposta.

![[src_cgen_2018__Q01.png]]

[[src_cgen_2018__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,topic_funzionali,topic_algebra,method_induzione,method_grafi,method_estremalita,method_casework,skill_astrazione,skill_modellizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*Discrete Dirichlet problem on a connected graph: assign reals to blue points so each equals the average of its neighbors, with given values at yellow points; existence (monotone iteration) and uniqueness of the solution.*

> Problem 2: A so discreet Mr. Dirichlet.
> 
> Let $\mathscr{S}$ be a non-empty finite set of points of the plane. Certain pairs of points of $\mathscr{S}$ are joined by segments, in such a way that, by following these segments, possibly in several steps, it is always possible to go from one point of $\mathscr{S}$ to any other (possible intersections between the segments are not taken into account, and a point is never joined to itself).
> 
> Two points of $\mathscr{S}$ joined by a segment are called neighbors.
> 
> If $M$ is a point of $\mathscr{S}$, we denote by $V(M)$ the set of neighbors of $M$, and we denote by $d(M)$ the number of neighbors of $M$, called the degree of $M$.
> 
> Each point of $\mathscr{S}$ has been colored either blue or yellow, and there is at least one yellow point in the set $\mathscr{S}$. To each yellow point, Gustav has assigned a real number of his choice. The mathematician Maryam then wishes to assign a real to each blue point (not necessarily the same number for one blue point as another) so as to satisfy the following property $(\mathscr{P})$:
> $(\mathscr{P})$ The number assigned to any blue point is the average of the numbers assigned to its neighbors.
> 
> Part 2.1 - Some examples to begin with.
> 1. In this question only, suppose that $\mathscr{S}=\{A,B,C\}$, with $A$ neighbor of $B$, itself neighbor of $C$ as in the drawing below. Moreover, $A$ is the only yellow point and Gustav has assigned to it the real $a$. What numbers must Maryam then assign to $B$ and to $C$ in order to satisfy the property $(\mathscr{P})$?
> 
> 2. For the three following questions suppose that $\mathscr{S}=\{A,B,C,D,E\}$. The points $A$ and $E$ are the only yellow points, and Gustav has assigned to them respectively the reals $a$ and $e$.
>    a. The links being indicated according to the following scheme, what numbers must Maryam then assign to each of the points $B$, $C$ and $D$ in order to satisfy the property $(\mathscr{P})$? (linear path $A-B-C-D-E$)
>    b. Same question for the following scheme.
>    c. Same question for the following scheme (complete-graph type, see figure).
> 
> 3. In this question only one generalizes the scheme of question 2.c with an arbitrary number of points.
> Suppose that $n\ge 1$ is an integer, that $\mathscr{S}=\{P_0,P_1,P_2,\ldots,P_n,P_{n+1}\}$ and that every point of $\mathscr{S}$ is a neighbor of every other point of $\mathscr{S}$. Moreover, $P_0$ and $P_{n+1}$ are the only yellow points, and Gustav has assigned to them respectively the reals $a$ and $b$. What numbers must Maryam then assign to each of the points $P_i$ for $i=1,\ldots,n$ in order to satisfy the property $(\mathscr{P})$?
> 
> Part 2.2 - Study of the general case.
> We denote respectively by $\mathscr{J}$ the set of yellow points, and by $\mathscr{B}$ the set of blue points. Thus $\mathscr{S}=\mathscr{J}\cup\mathscr{B}$.
> When Gustav assigns a real to each yellow point, this amounts to defining a function $k$ from $\mathscr{J}$ into $\mathbb{R}$. The objective of Maryam is therefore to construct a function $f:\mathscr{S}\to\mathbb{R}$ such that:
> $$f(M)=k(M)\ \text{if }M\text{ is yellow}\quad(1)$$
> $$f(M)=\frac{f(P_1)+\ldots+f(P_d)}{d}\ \text{if }M\text{ is blue}\quad(2)$$
> where $d=d(M)$ is the degree of $M$ (which depends on $M$) and $P_1,\ldots,P_d$ are the neighbors of $M$.
> We then say that $f$ is a solution for the attribution $k$.
> In this part, suppose given such an attribution $k$.
> We denote by $K$ the largest of the numbers $k(M)$ when $M$ ranges over the set $\mathscr{J}$.
> 
> Part 2.3 - Existence of a solution.
> 1. Suppose in this question that $k(M)\ge 0$ for every point $M\in\mathscr{J}$. We construct then, by recurrence, the following sequence $(f_n)$ of functions:
> We set $f_0(M)=k(M)$ if $M$ is yellow, and $f_0(M)=0$ if $M$ is blue. Then, for every integer $n\ge 0$, we set:
> $$f_{n+1}(M)=k(M)\ \text{if }M\text{ is yellow,}$$
> $$f_{n+1}(M)=\frac{f_n(P_1)+\ldots+f_n(P_d)}{d}\ \text{if }M\text{ is blue,}$$
> where $d=d(M)$ is the degree of $M$ and $P_1,\ldots,P_d$ are the neighbors of $M$.
>    a. Prove that, for all $n\ge 0$ and every point $M\in\mathscr{S}$, one has $0\le f_n(M)\le f_{n+1}(M)\le K$.
>    b. Deduce the existence of a solution for the attribution $k$.
> 2. Prove that if $f$ is a solution for the attribution $k$ and if $\alpha$ is a constant, then the function $f+\alpha$ is also a solution for the attribution $k+\alpha$.
> 3. Deduce that there always exists a solution to our problem in general, that is, without the hypothesis of question 1: $k(M)\ge 0$ for every point $M\in\mathscr{J}$.
> 
> Part 2.4 - Uniqueness of the solution.
> Suppose in this subpart that we have a solution $f$ for this attribution $k$.
> 4. Prove that, for every point $M\in\mathscr{S}$, one has $f(M)\le K$.
> 5. Suppose that $g$ is also a solution for the attribution $k$.
>    a. Justify that the function $f-g$ satisfies condition (2).
>    b. What is $f-g$ on $\mathscr{J}$?
>    c. Deduce that $f=g$.
> 6. What can be said about $f$ if there is only one yellow point?

![[src_cgen_2018__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_funzionali|Equazioni funzionali]], [[topic_algebra|Algebra]]
**Metodo:** [[method_induzione|Induzione]], [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1ndY2rTBhYsNW1k5eeouIHRqR2THD_a96/view)


<span class="qlang-split" data-lang="it"></span>


*Discrete Dirichlet problema su un grafico connesso: assegnare reali a punti blu in modo che ciascuno è uguale alla media dei suoi vicini, con dati valori a punti gialli; esistenza (iteration monotone) e unicità della soluzione.*

> Il problema 2: un signor così discreto . Diricletto.
> 
> $\mathscr{S}$ sia un insieme finito non vuoto di punti del piano. Alcune coppie di punti di $\mathscr{S}$ sono unite da segmenti, in modo che, seguendo questi segmenti, eventualmente in diversi passaggi, sia sempre possibile passare da un punto di $\mathscr{S}$ a un altro (le possibili intersezioni tra i segmenti non sono prese in considerazione e un punto non viene mai unito a se stesso).
> 
> Due punti di $\mathscr{S}$ uniti da un segmento sono chiamati vicini.
> 
> Se $M$ è un punto di $\mathscr{S}$, indichiamo con $V(M)$ l'insieme dei vicini di $M$, e indichiamo con $d(M)$ il numero dei vicini di $M$, chiamato il grado di $M$.
> 
> Ogni punto di $\mathscr{S}$ è stato colorato blu o giallo e nel set $\mathscr{S}$ c'è almeno un punto giallo. Ad ogni punto giallo, Gustav ha assegnato un numero reale di sua scelta. La matematica Maryam vuole poi assegnare un reale a ogni punto blu (non necessariamente lo stesso numero per un punto blu come un altro) per soddisfare la seguente proprietà $(\mathscr{P})$: $(\mathscr{P})$ Il numero assegnato a qualsiasi punto blu è la media dei numeri assegnati ai suoi vicini.
> 
> Parte 2.1 - Alcuni esempi per cominciare. 1. Solo in questa domanda, supponiamo che $\mathscr{S}=\{A,B,C\}$, con $A$ vicinato di $B$, se stesso vicinato di $C$ come nel disegno di seguito. Inoltre, $A$ è l'unico punto giallo e Gustav gli ha assegnato il vero $a$. Quali numeri Maryam deve quindi assegnare a $B$ e a $C$ per soddisfare la proprietà $(\mathscr{P})$?
> 
> 2. Per le tre domande seguenti supponiamo che $\mathscr{S}=\{A,B,C,D,E\}$. I punti $A$ e $E$ sono gli unici punti gialli, ai quali Gustav ha assegnato rispettivamente i valori $a$ e $e$. a. Se i collegamenti sono indicati secondo il seguente schema, quali numeri Maryam deve quindi assegnare a ciascuno dei punti $B$, $C$ e $D$ per soddisfare la proprietà $(\mathscr{P})$? (corso lineare $A-B-C-D-E$) b. La stessa domanda per il seguente schema. c. La stessa domanda per il seguente schema (tipo di grafico completo, cfr. figura).
> 
> 3. In questa domanda solo uno generalizza il sistema della domanda 2.c con un numero arbitrario di punti. Supponiamo che $n\ge 1$ sia un numero intero, che $\mathscr{S}=\{P_0,P_1,P_2,\ldots,P_n,P_{n+1}\}$ e che ogni punto di $\mathscr{S}$ sia un vicino di ogni altro punto di $\mathscr{S}$. Inoltre, $P_0$ e $P_{n+1}$ sono gli unici punti gialli e Gustav ha assegnato loro rispettivamente i valori $a$ e $b$. Quali numeri Maryam deve quindi assegnare a ciascuno dei punti $P_i$ per $i=1,\ldots,n$ per soddisfare la proprietà $(\mathscr{P})$?
> 
> Parte 2.2 - Studio del caso generale. Indichiamo rispettivamente con $\mathscr{J}$ l'insieme dei punti gialli e con $\mathscr{B}$ l'insieme dei punti blu. Quindi $\mathscr{S}=\mathscr{J}\cup\mathscr{B}$. Quando Gustav assegna un reale a ogni punto giallo, ciò equivale a definire una funzione $k$ da $\mathscr{J}$ a $\mathbb{R}$. L'obiettivo di Maryam è quindi quello di costruire una funzione $f:\mathscr{S}\to\mathbb{R}$ tale che: $$f(M)=k(M)\ \text{if }M\text{ is yellow}\quad(1)$$ $$f(M)=\frac{f(P_1)+\ldots+f(P_d)}{d}\ \text{if }M\text{ is blue}\quad(2)$$ dove $d=d(M)$ è il grado di $M$ (che dipende da $M$) e $P_1,\ldots,P_d$ sono i vicini di $M$. Quindi diciamo che $f$ è una soluzione per l'attribuzione $k$. In questa parte, supponiamo che, data tale attribuzione $k$. Indichiamo con $K$ il più grande dei numeri $k(M)$ quando $M$ si estende sul set $\mathscr{J}$.
> 
> Parte 2.3 - Esistenza di una soluzione. 1. Supponiamo in questa domanda che $k(M)\ge 0$ per ogni punto $M\in\mathscr{J}$. Quindi, per ricorrenza, costruiamo la seguente sequenza $(f_n)$ di funzioni: impostamo $f_0(M)=k(M)$ se $M$ è giallo, e $f_0(M)=0$ se $M$ è blu. Quindi, per ogni intero $n\ge 0$, impostamo: $$f_{n+1}(M)=k(M)\ \text{if }M\text{ is yellow,}$$ $$f_{n+1}(M)=\frac{f_n(P_1)+\ldots+f_n(P_d)}{d}\ \text{if }M\text{ is blue,}$$ dove $d=d(M)$ è il grado di $M$ e $P_1,\ldots,P_d$ sono i vicini di $M$. a. Prove che per tutti $n\ge 0$ e per ogni punto $M\in\mathscr{S}$ si ha $0\le f_n(M)\le f_{n+1}(M)\le K$. b. Riduzione dell'esistenza di una soluzione per l'attribuzione $k$. 2. Prova che se $f$ è una soluzione per l'attribuzione $k$ e se $\alpha$ è una costante, allora la funzione $f+\alpha$ è anche una soluzione per l'attribuzione $k+\alpha$. 3. Deduci che esiste sempre una soluzione al nostro problema in generale, cioè senza l'ipotesi della domanda 1: $k(M)\ge 0$ per ogni punto $M\in\mathscr{J}$.
> 
> Parte 2.4 - Unicità della soluzione. Supponiamo che in questa sottoparte abbiamo una soluzione $f$ per questa attribuzione $k$. 4. Prove che per ogni punto $M\in\mathscr{S}$, uno ha $f(M)\le K$. 5. Supponiamo che $g$ sia anche una soluzione per l'attribuzione $k$. a. giustificare che la funzione $f-g$ soddisfi la condizione (2). b. Che cos'è $f-g$ su $\mathscr{J}$? c. Riduzione di $f=g$. 6. Cosa si può dire di $f$ se c'è solo un punto giallo?

![[src_cgen_2018__Q02.png]]

[[src_cgen_2018__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,topic_algebra,topic_insiemi_funzioni,method_induzione,method_ricorsione,method_casework,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Golden-number (base-phi) representations: equivalence rule 011<->100, every natural number is golden, pure golden representations (no two consecutive 1s), golden content, bounds, existence/uniqueness, and an algorithm applied to 2018.*

> Problem 3: The golden numbers.
> 
> We denote by $\varphi$ the largest real root of the equation $x^2=x+1$. The number $\varphi$, known since Antiquity, is called the golden number. A real $x$ is said to be a golden number ('nombre en or') if there exist:
> - two natural numbers $p$ and $q$
> - integers $a_p,a_{p-1},\cdots,a_0,\ldots,a_{-q}$ taking only the values $0$ or $1$ such that:
> $$x=a_p\varphi^p+a_{p-1}\varphi^{p-1}+\ldots+a_1\varphi+a_0+a_{-1}\varphi^{-1}+\cdots+a_{-q}\varphi^{-q}$$
> In this case, we will write $x\triangleright a_p\,a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$.
> For example, if $x=\varphi^3+\varphi^2+1+\frac{1}{\varphi}+\frac{1}{\varphi^4}$, we will write $x\triangleright 1101,1001$. We will then say that $1101,1001$ is a golden representation of $x$.
> It is clear that one may add, at the beginning or at the end of the representation, as many $0$s as one wishes.
> A sequence of a representation is a string of $0$s and $1$s that appears in the representation. In the previous example, $10110$ is a sequence of the representation $1101,1001$.
> 
> Part 3.1 - All natural numbers are golden.
> 1. Show that, in the golden representation of a real $x$, one can replace any sequence $011$ by $100$ and conversely, in order to obtain another golden representation of $x$. For example the real whose golden representation is $1101,1001$ also admits $1110,0001$ and $1101,0111$ as golden representations. One will say that the two sequences $011$ and $100$ are equivalent.
> 2. More generally, give a sequence in which there are never two consecutive $1$s and which is equivalent to $011\cdots 1$ where there are $n$ occurrences of the digit $1$.
> 3. Show that the integers $2$ and $3$ are golden numbers and give a golden representation of them.
> 4. Show that every natural number admits a golden representation.
> 
> Part 3.2 - Representation golden and pure.
> We say that a representation $x\triangleright a_p a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$ of a number $x$ is pure golden ('en or pur') if for all $i$,
> $$a_i\,a_{i+1}=0$$
> In other words, a representation of $x$ is pure golden if and only if it never contains two consecutive $1$s.
> Let $x$ be a non-zero real; if $x\triangleright a_p a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$, one defines the golden content ('teneur en or') of the representation as being equal to the exponent of the largest power of $\varphi$ whose coefficient equals $1$, in the equality $x=a_p\varphi^p+\ldots+a_{-q}\varphi^{-q}$.
> For example, the golden content of the representation $1101,1001$ is equal to $3$ and that of $0,0010$ is equal to $-3$.
> 1. Give a pure golden representation of the integers $2$, $3$, $4$ and $5$.
> 2. Let $x$ be a real having a pure golden representation of golden content equal to $n$.
>    a. Show that $\varphi^n\le x<\varphi^{n+1}$.
>    b. Show that the pure golden representation of a real, if it exists, is unique.
> 3. Let $x$ be a non-zero real having a pure golden representation.
>    a. Express the golden content of the pure golden representation of $x$ with the help of the natural logarithm and integer-part functions.
>    b. Write an algorithm allowing to determine this representation.
>    c. Apply your algorithm for $x=2018$.
> 4. Show that a golden real necessarily has a pure golden representation.
> 5. Show that there exist strictly positive reals that are not golden.

![[src_cgen_2018__Q03.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1ndY2rTBhYsNW1k5eeouIHRqR2THD_a96/view)


<span class="qlang-split" data-lang="it"></span>


*Representazioni di numeri d'oro (base-phi): regola di equivalenza 011<->100, ogni numero naturale è oro, rappresentazioni d'oro puro (nessun 1 consecutivo), contenuto d'oro, confini, esistenza/unicità e un algoritmo applicato al 2018.*

> Problema 3: i numeri d'oro.
> 
> Indichiamo con $\varphi$ la radice reale più grande dell'equazione $x^2=x+1$. Il numero $\varphi$, conosciuto fin dall'antichità, è chiamato numero d'oro. Un $x$ reale si dice un numero d'oro ("nombre en or") se esiste: - due numeri naturali $p$ e $q$ - numeri interi $a_p,a_{p-1},\cdots,a_0,\ldots,a_{-q}$ che assumono solo i valori $0$ o $1$ in modo tale che: $$x=a_p\varphi^p+a_{p-1}\varphi^{p-1}+\ldots+a_1\varphi+a_0+a_{-1}\varphi^{-1}+\cdots+a_{-q}\varphi^{-q}$$ In questo caso, scriveremo $x\triangleright a_p\,a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$. Per esempio, se $x=\varphi^3+\varphi^2+1+\frac{1}{\varphi}+\frac{1}{\varphi^4}$, scriveremo $x\triangleright 1101,1001$. Diciamo quindi che $1101,1001$ è una rappresentazione dorata di $x$. È chiaro che si possono aggiungere, all'inizio o alla fine della rappresentazione, quante $0$ si desiderano. Una sequenza di una rappresentazione è una stringa di $0$s e $1$s che appare nella rappresentazione. Nel precedente esempio, $10110$ è una sequenza della rappresentazione $1101,1001$.
> 
> Parte 3.1 - Tutti i numeri naturali sono d'oro. 1. Mostrare che, nella rappresentazione dorata di un reale $x$, si può sostituire qualsiasi sequenza $011$ da $100$ e viceversa, al fine di ottenere un'altra rappresentazione dorata di $x$. Ad esempio il reale la cui rappresentazione dorata è $1101,1001$ ammette anche $1110,0001$ e $1101,0111$ come rappresentazioni dorate. Si dirà che le due sequenze $011$ e $100$ sono equivalenti. 2. Più in generale, indicare una sequenza in cui non ci sono mai due $1$ consecutive ed è equivalente a $011\cdots 1$ in cui ci sono $n$ episodi del numero $1$. 3. Indicare che i numeri interi $2$ e $3$ sono numeri d'oro e darne una rappresentazione d'oro. 4. Mostrare che ogni numero naturale ammette una rappresentazione dorata.
> 
> Parte 3.2 - Rappresentazione dorata e pura. Diciamo che una rappresentazione $x\triangleright a_p a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$ di un numero $x$ è di puro oro ('en o pur') se per tutti $i$, $$a_i\,a_{i+1}=0$$ In altre parole, una rappresentazione di $x$ è di puro oro se e solo se non contiene mai due $1$ consecutivi. Se $x$ è un reale non-zero, se $x\triangleright a_p a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$, si definisce il contenuto dorato ("teneur en or") della rappresentazione come uguale all' esponente della potenza più grande di $\varphi$ il cui coefficiente è uguale a $1$, nell'uguaglianza $x=a_p\varphi^p+\ldots+a_{-q}\varphi^{-q}$. Ad esempio, il contenuto dorato della rappresentazione $1101,1001$ è uguale a $3$ e quello di $0,0010$ è uguale a $-3$. 1. Indicare una rappresentazione in oro puro degli integri $2$, $3$, $4$ e $5$. 2. Il $x$ deve essere un reale che abbia una rappresentazione di oro puro del contenuto dorato pari a $n$. a. Mostra che $\varphi^n\le x<\varphi^{n+1}$. b. Mostrate che la pura rappresentazione d'oro di un reale, se esiste, è unica. 3. Lasciate che $x$ sia un reale non-zero con una rappresentazione di oro puro. a. Esprimere il contenuto dorato della rappresentazione dorata pura di $x$ con l'aiuto del logaritmo naturale e delle funzioni di parte integrale. b. Scrivi un algoritmo che permetta di determinare questa rappresentazione. c. Applicare l'algoritmo per $x=2018$. 4. Mostrate che una reale d'oro ha necessariamente una rappresentazione d'oro puro. 5. Mostrate che esistono realtà strettamente positive che non sono d'oro.

![[src_cgen_2018__Q03.png]]

[[src_cgen_2018__Q03]]
