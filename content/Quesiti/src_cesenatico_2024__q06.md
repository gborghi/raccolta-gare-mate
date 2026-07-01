---
title: Olimpiade Italiana (Cesenatico) 2024 - testi e soluzioni — Quesito 6
tipo: quesito
lang: it
quesito_id: quesito_src_cesenatico_2024__Q06
parent: src_cesenatico_2024
competition: Olimpiade Italiana (Cesenatico) 2024 - testi e soluzioni
family: archimede
year: '2024'
level: nazionale
country: Italia
modalita: individuale
quesito: '6'
summary: Minimo Mn per 1/a1+a1/a2+...+a(n-1)/an con interi crescenti
answer: 'M1=1/2, M2=7/6, Mn=n-1 per n>=3'
topics:
  - topic_disuguaglianze
methods:
  - method_disuguaglianze
  - method_estremalita
skills:
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2024
  - livello/nazionale
  - topic/disuguaglianze
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Minimo Mn per 1/a1+a1/a2+...+a(n-1)/an con interi crescenti*

> Per ogni intero positivo n, determinare il più piccolo numero reale Mn tale che
> 1
> a1
> + a1
> a2
> + a2
> a3
> + · · + an−1
> an
> ≤Mn
> per ogni n-upla (a1, a2, . . . , an) di numeri interi tali che 1 < a1 < a2 < . . . < an.
> Olimpiade Italiana di Matematica 2024 -- Testi e soluzioni -- Pag.2 di 14
> 
> Problema 1 – Soluzione.
> Osserviamo che, se il numero xn scritto sulla lavagna dopo n mosse è maggiore o uguale a π,
> allora al passo successivo Jack scrive xn −π. Infatti in tal caso si ha che
> xn+1 = |xn −π| = xn −π,
> dal momento che il valore assoluto di un numero positivo o nullo coincide con il numero stesso.
> In altre parole, finch´e rimane maggiore o uguale a π, il numero scritto sulla lavagna continua
> a scendere di π ad ogni mossa.
> Procedendo in questo modo, ad un certo punto il numero scritto sulla lavagna scenderà
> sotto π. Più precisamente, esisterà un intero n0 tale che 0 ≤xn0 < π. A quel punto xn0 −π
> sarà negativo, e quindi fare il valore assoluto vorrà dire cambiarne il segno, cioè
> xn0+1 = |xn0 −π| = π −xn0.
> Ma allora il numero successivo sarà
> xn0+2 = |xn0+1 −π| = |(π −xn0) −π| = | −xn0| = xn0,
> e quindi l’intero n0 ha la proprietà richiesta.
> Osservazione
> Più formalmente, si può definire n0 come la parte intera di x0/π, e dimostrare
> per induzione che
> xn = x0 −nπ
> per ogni n = 0, 1, . . . , n0.
> Dalla definizione di parte intera si deduce poi che 0 ≤xn0 < π. Infine, sempre per induzione,
> si può dimostrare che per ogni n ≥n0 Jack continuerà a scrivere sulla lavagna, alternativamente,
> solo i numeri xn0 e π −xn0, e quindi l’uguaglianza xn+2 = xn vale per ogni n ≥n0.
> Un risultato analogo vale qualunque sia il numero x0 scritto inizialmente.
> Olimpiade Italiana di Matematica 2024 -- Testi e soluzioni -- Pag.3 di 14
> 
> Problema 2 – Soluzione.
> L’insieme dei punti mediani è costituito dai due segmenti che uniscono i punti medi dei lati
> opposti del quadrato, e dai quattro archi di circonferenza ottenuti intersecando il quadrato con
> le quattro circonferenze di raggio 1/2 con centro nei vertici del quadrato.
> b
> b
> b
> b
> b
> b
> b
> b
> Per dimostrarlo, indichiamo con ABCD i vertici del quadrato, e distinguiamo due casi, a
> seconda della posizione dei punti P e Q.
> • Supponiamo che P e Q appartengano a due lati opposti del quadrato, ad esempio (senza
> perdita di generalità) che P stia sul lato AD e Q sul lato BC.
> Allora necessariamente il segmento PQ è parallelo ai lati AB e CD, perch´e se così non
> fosse sarebbe l’ipotenusa di un triangolo rettangolo con un cateto di lunghezza unitaria
> (il triangolo PP ′Q nella figura a sinistra), e quindi la sua lunghezza sarebbe maggiore
> di 1. Ma allora il punto medio M di PQ si trova necessariamente sul segmento EF che
> congiunge i punti medi dei lati AB e CD (vedi figura in centro).
> • Supponiamo che P e Q appartengano a due lati adiacenti del quadrato, ad esempio (senza
> perdita di generalità) che P stia sul lato AD e Q sul lato AB, come nella figura a destra.
> In tal caso il punto M è il punto medio dell’ipotenusa del triangolo rettangolo APQ, ed
> è ben noto che il punto medio dell’ipotenusa è il centro della circonferenza circoscritta ad
> un triangolo rettangolo. Ne segue che AM = MP = MQ = 1/2, ed in particolare M sta
> all’interno del quadrato e sulla circonferenza di raggio 1/2 con centro in A.
> b
> A
> b
> B
> b C
> b
> D
> b
> P
> b Q
> b P ′
> b
> A
> b
> B
> b C
> b
> D
> b
> E
> bF
> b
> P
> b Q
> b
> M
> b
> A
> b
> B
> b C
> b
> D
> bM
> b
> P
> b
> Q
> Finora abbiamo dimostrato che ogni punto mediano appartiene a uno dei due segmenti
> oppure ad uno dei quattro archi di cerchio.
> Per completare la dimostrazione è necessario
> verificare che tutti i punti dei due segmenti e dei quattro archi sono effettivamente dei punti
> mediani. Distinguiamo allora nuovamente i due casi.
> Olimpiade Italiana di Matematica 2024 -- Testi e soluzioni -- Pag.4 di 14
> 
> • Nel caso dei segmenti la verifica è sostanzialmente immediata. Preso per esempio un
> punto M sul segmento EF, basta costruire P e Q intersecando i lati AD e BC con la
> retta passante per M e parallela ai lati AB e CD.
> • Nel caso degli archi, prendiamo per esempio un punto M del quadrato a distanza 1/2
> da A, e tracciamo la circonferenza con centro in M e raggio 1/2.
> Tale circonferenza
> interseca nuovamente il lato AD in un punto P, ed interseca nuovamente il lato AB in un
> punto Q. Allora il triangolo PAQ è rettangolo in A ed il centro della sua circonferenza
> circoscritta, cioè il punto M, è proprio il punto medio dell’ipotenusa PQ.
> Ma allora
> PQ = 2MP = 2MA = 1, e di conseguenza il segmento PQ ha lunghezza unitaria.
> Osservazione
> Il caso in cui i punti P e Q stanno sui lati AD e AB si può trattare anche
> costruendo il punto A′ tale che APA′Q sia un rettangolo, e osservando poi che in tal caso M è
> il punto medio della diagonale PQ, e quindi anche il punto medio della diagonale AA′, che ha
> anch’essa lunghezza unitaria.
> Olimpiade Italiana di Matematica 2024 -- Testi e soluzioni -- Pag.5 di 14
> 
> Problema 3 – Soluzione.
> Ricordiamo che l’espressione frazione egizia indica una qualunque frazione che ha come numeratore 1, e come denominatore un intero positivo. Di conseguenza un numero n è egiziano se e
> solo se si può scrivere 1 come somma di frazioni egizie distinte, di cui la più piccola ha come
> denominatore n.

**Topic:** [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** M1=1/2, M2=7/6, Mn=n-1 per n>=3
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/14A3kypX3yL3mm83T1BPC_ELqWeT1zP6s/view)


<span class="qlang-split" data-lang="en"></span>


< MSK0/>Minimum Mn for 1/a1+a1/a2+...+a(n-1)/year with increasing integers< MSK1/>

> For each positive integer n, determine the smallest real number Mn such that 1 a1 + a1 a2 + a2 a3 + · · + an−1 an ≤Mn for each n-upple (a1, a2, . . . , an) of integers such as 1 < a1 < a2 < . . . < an. Italian Olympic Games of Mathematics 2024 - Texts and solutions - Page 2 of 14
> 
> Problem 1  Solution Let's observe that if the number xn written on the board after n moves is greater than or equal to π, then at the next step Jack writes xn −π. In this case, we have that xn+1 = \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ n\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ n\ \ In other words, as long as it remains greater than or equal to π, the number written on the board continues to decrease by π with each move. In doing so, at some point the number written on the board will drop to π. More precisely, there will be an integer n0 such that 0 < MSK7/>xn0 < < MSK8/>. At that point, xn0 −π will be negative, and then to do the absolute value will mean changing the sign, that is, xn0+1 = xn0 −πlain = π −xn0. But then the next number is going to be xn0+2 = xn0+1 −π khi = ➡(π -xn0) −π khi = khi −xn0 khi = xn0, and so the whole n0 has the required property. More formally, n0 can be defined as the whole of x0/π, and shown by induction that xn = x0 −nπ for each n = 0, 1, . . . , n0. From the definition of whole part it is then deduced that 0 ≤xn0 < π. Finally, always by induction, it can be shown that for each n ≥n0 Jack will continue to write on the board, alternatively, only the numbers xn0 and π −xn0, and so the equation xn+2 = xn is valid for each n ≥n0. A similar result is valid regardless of the number x0 written initially. Italian Olympic Games of Mathematics 2024 - Texts and solutions - Page 3 of 14
> 
> Problem two  Solution. The median points set consists of the two segments joining the median points of the opposite sides of the square, and the four arc of circumference obtained by intersecting the square with the four radius 1/2 circumferences centered at the vertices of the square. b b b b b b b b b b To prove this, let's use ABCD to show the vertices of the square, and let's distinguish two cases, depending on the position of the points P and Q. • Suppose that P and Q belong to two opposite sides of the square, for example (without loss of generality) that P is on the AD side and Q on the BC side. Then necessarily the PQ segment is parallel to the sides AB and CD, because if it wasn't it would be the hypotenuse of a right triangle with a unit length catet (the PP ′Q triangle in the figure to the left), and so its length would be greater than 1. But then the mean point M of PQ is necessarily on the EF segment connecting the mean points of the sides AB and CD (see figure in the centre). • Suppose that P and Q belong to two adjacent sides of the square, for example (without loss of generality) that P is on the AD side and Q on the AB side, as in the figure to the right. In this case the point M is the median point of the hypotenuse of the right triangle APQ, and it is well known that the median point of the hypotenuse is the center of the circumference surrounded by a right triangle. It follows that AM = MP = MQ = 1/2, and in particular M is within the square and on the radius circumference 1/2 centered in A. b A b B b C b D b P b Q b P ′ b A b B B B C b C b D b E b F b P b Q b M b A b B B B C b D B M b P b Q So far we have shown that each median point belongs to one of the two segments or to one of the four circle arcs. To complete the demonstration, it is necessary to verify that all the points of the two segments and the four arcs are actually the midpoints. Let us then again distinguish between the two cases. Italian Olympic Games of Mathematics 2024 - Texts and solutions - Page 4 of 14
> 
> • In the case of segments, verification is essentially immediate. Taking for example an M point on the EF segment, it is enough to construct P and Q by intersecting the sides AD and BC with the straight line passing through M and parallel to the sides AB and CD. • In the case of arcs, for example, take a point M of the square 1/2 from A, and plot the circumference with a center in M and radius 1/2. This circumference again intersects the AD side at a point P, and again intersects the AB side at a point Q. So the PAQ triangle is a rectangle in A and the center of its circumscribed circumference, that is, the point M, is just the middle point of the PQ hypotenuse. But then PQ = 2MP = 2MA = 1, and consequently the PQ segment has unit length. Observation The case where the points P and Q are on the sides AD and AB can also be dealt with by constructing the point A′ such that APA′Q is a rectangle, and then observing that in this case M is the middle point of the diagonal PQ, and therefore also the middle point of the diagonal AA′, which also has a unit length. Italian Olympic Games of Mathematics 2024 -- Texts and solutions -- Page 5 of 14
> 
> Problem three  Solution. Remember that the expression Egyptian fraction indicates any fraction that has as numerator 1, and as denominator a positive integer. Consequently, a number n is Egyptian if and only if 1 can be written as the sum of distinct Egyptian fractions, of which the smallest has as denominator n.

**Answer:** M1=1/2, M2=7/6, Mn=n-1 per n>=3
[[src_cesenatico_2024__Q06]]
