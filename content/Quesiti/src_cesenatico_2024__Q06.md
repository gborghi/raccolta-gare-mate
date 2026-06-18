---
tipo: quesito
quesito_id: quesito_src_cesenatico_2024__Q06
parent: src_cesenatico_2024
competition: Olimpiade Italiana (Cesenatico) 2024 - testi e soluzioni
family: archimede
year: '2024'
level: nazionale
country: Italia
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
---

# Olimpiade Italiana (Cesenatico) 2024 - testi e soluzioni — Quesito 6

*Minimo Mn per 1/a1+a1/a2+...+a(n-1)/an con interi crescenti*

> Per ogni intero positivo n, determinare il più piccolo numero reale Mn tale che
> 1
> a1
> + a1
> a2
> + a2
> a3
> + · · · + an−1
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
**Fonte:** apri PDF p.2
