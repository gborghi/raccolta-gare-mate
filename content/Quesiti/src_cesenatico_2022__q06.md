---
title: Olimpiade Italiana (Cesenatico) 2022 - testi e soluzioni — Quesito 6
tipo: quesito
lang: it
quesito_id: quesito_src_cesenatico_2022__Q06
parent: src_cesenatico_2022
competition: Olimpiade Italiana (Cesenatico) 2022 - testi e soluzioni
family: archimede
year: '2022'
level: nazionale
country: Italia
modalita: individuale
quesito: '6'
summary: P su circoscritta; perimetro
answer: perimetro tra 2 e 3
topics:
  - topic_geometria_piana
  - topic_trigonometria
methods:
  - method_trigonometria
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2022
  - livello/nazionale
  - topic/geometria_piana
  - topic/trigonometria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*P su circoscritta; perimetro*

![[src_cesenatico_2022__prob6.png]]

> Sia ABC un triangolo non equilatero, e sia R il raggio della sua circonferenza circoscritta.
> La circonferenza inscritta ad ABC ha centro in I, ed è tangente al lato CA nel punto D, ed
> al lato CB nel punto E.
> Sia A1 il punto della retta EI tale che A1I = R, con I che sta tra A1 ed E. Sia B1 il punto
> della retta DI tale che B1I = R, con I che sta tra B1 e D. Sia P l’intersezione delle rette
> AA1 e BB1.
> (a) Dimostrare che P appartiene alla circonferenza circoscritta al triangolo ABC.
> (b) Supponiamo ora inoltre che AB = 1 e che P coincida con C. Determinare i possibili
> valori del perimetro di ABC.
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.2 di 16
> 
> Problema 1 – Soluzione.
> I valori di n richiesti sono tutti e soli i multipli di 3.
> Condizione necessaria
> Sia A un multiplo di 2022 la cui espressione decimale contiene esattamente n volte la cifra 7, ed eventualmente altre cifre 0. Poich´e 2022 è multiplo di 3, anche A
> deve essere multiplo di 3, e quindi (per il criterio di divisibilità per 3) la somma delle cifre di A
> deve essere a sua volta multipla di 3. Ora la somma delle cifre di A è 7n, e dunque è multipla
> di 3 solo se n è multiplo di 3.
> Condizione sufficiente
> Osserviamo che il numero 70 770 = 2022 · 35 è multiplo di 2022 e la
> sua espressione decimale contiene tre cifre 7 e due cifre 0. Questo mostra intanto che n = 3 ha
> la proprietà richiesta.
> Più in generale, per ogni intero positivo k osserviamo che il numero che si scrive ripetendo
> k volte il blocco di cinque cifre 70770, cioè il numero
> 70770 70770 . . . 70770
> |
> {z
> }
> k volte
> = 70770 · (1 + 105 + 1010 + . . . + 105(k−1)),
> è a sua volta multiplo di 2022 e la sua espressione decimale contiene 3k volte la cifra 7 e 2k
> volte la cifra 0. Questo mostra che ogni multiplo di 3 ha la proprietà richiesta.
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.3 di 16
> 
> Problema 2 – Soluzione.
> Primo metodo (angle chasing)
> Per le proprietà dell’angolo alla circonferenza (anche nel caso
> limite della tangente) la tesi è equivalente a dimostrare che ∠EGA = ∠EFG.
> Indichiamo con θ l’ampiezza di ∠GBC. Osserviamo che i punti B, E, G appartengono ad
> una stessa circonferenza con centro in A e quindi, poich´e un angolo al centro è il doppio di un
> corrispondente angolo alla circonferenza, ne deduciamo che ∠EAG = 2∠EBG = 2θ. Essendo
> il triangolo AEG isoscele sulla base EG, concludiamo che
> ∠EGA = 1
> 2(180°−∠EAG) = 1
> 2(180°−2θ) = 90°−θ.
> (1)
> Consideriamo ora il triangolo ABG. Si tratta di un triangolo isoscele sulla base BG, e la
> retta AD è la bisettrice dell’angolo al vertice. Ne segue che la retta AD è anche altezza, ed in
> particolare è perpendicolare alla retta BG. Indicato con K il punto di intersezione delle rette
> AD e BG, osserviamo che K è il punto medio di BG (in un triangolo isoscele il piede dell’altezza
> è il punto medio della base), mentre D è il punto medio di BF (per costruzione). Dal teorema
> di Talete segue allora che la retta GF è parallela alla retta AD, e dunque perpendicolare alla
> retta BG. Se ne deduce in particolare che il triangolo BGF è rettangolo in G, da cui
> ∠EFG = 90°−∠GBC = 90°−θ.
> (2)
> Confrontando la (1) e la (2) si ottiene l’uguaglianza richiesta.
> bA
> b
> B
> b C
> b
> D
> b
> b
> E
> bG
> b
> F
> b
> K
> 2θ
> θ
> Variante
> Potevamo in alternativa dimostrare che ∠FGC = ∠FEG. Per calcolare ∠FGC
> sfruttiamo il parallelismo tra AD e GF, ottenendo che
> ∠FGC = ∠DAC = α
> 2 ,
> dove α indica l’ampiezza dell’angolo in A del triangolo ABC.
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.4 di 16
> 
> Per calcolare ∠FEG, consideriamo il punto G′, simmetrico di G rispetto ad A, ed osserviamo
> che il quadrilatero BEGG′ è ciclico e ha l’angolo in G′ uguale ad α/2, perch´e il corrispondente
> angolo al centro (in A) è uguale ad α. Dalle proprietà dei quadrilateri ciclici segue allora che
> ∠FEG = 180°−∠BEG = ∠BG′G = α/2,
> come voluto.
> Secondo metodo (ciclicità metrica)
> Per il teorema della tangente e della secante, la tesi è
> equivalente a dimostrare che
> CG2 = CF · CE.
> (3)
> Per farlo calcoliamo le lunghezze dei tre segmenti in funzione delle lunghezze dei tre lati,
> per le quali utilizzeremo le notazioni standard a = BC, b = CA, c = AB.
> Poich´e AG = AB = c per costruzione, otteniamo immediatamente che
> CG = AC −AG = b −c.
> (4)
> Per una nota proprietà della bisettrice sappiamo che BD : DC = AB : AC, da cui
> BD : (BD + DC) = AB : (AB + AC).
> Ne segue che BD = ac/(b + c), e quindi
> CF = BC −BF = BC −2BD = a −2ac
> b + c = a(b −c)
> b + c .
> (5)
> Infine, indichiamo con H il piede dell’altezza di ABC uscente dal vertice A. Osserviamo
> che AH è anche altezza del triangolo isoscele ABE, e dunque H è anche il punto medio di BE,
> da cui
> CE = BC −BE = BC −2BH.
> Non resta dunque che calcolare la lunghezza di BH. Il modo classico per farlo è di porre
> BH = x e CH = y, ed osservare che x e y verificano il sistema
> x + y = a,
> c2 −x2 = b2 −y2,
> in cui la prima equazione segue dal fatto che BH + CH = BC, e la seconda equazione segue
> dall’aver calcolato in due modi AH2, applicando il teorema di Pitagora nei triangoli rettangoli
> ABH e ACH. Risolvendo il sistema si trova che
> BH = a2 + c2 −b2
> 2a
> ,
> e in conclusione
> CE = BC −2BH = a −a2 + c2 −b2
> a
> = b2 −c2
> a
> .
> (6)
> Dalle uguaglianze (4), (5) e (6) segue immediatamente la (3).
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.5 di 16
> 
> bA
> b
> B
> b C
> b
> D
> b
> b
> E
> bG
> b
> F
> b
> H
> x
> y
> Osservazione
> La lunghezza di BH si può ottenere anche come
> BH = BA · cos β = c cos β,
> dove con β abbiamo indicato l’angolo ∠ABC. A sua volta, cos β si può ricavare in funzione
> delle lunghezze dei lati utilizzando il teorema del coseno (talvolta citato in Italia come teorema
> di Carnot), secondo il quale
> b2 = a2 + c2 −2ac cos β.
> Il calcolo che abbiamo effettuato risolvendo il sistema in x e y è in fondo proprio il passo
> essenziale nella dimostrazione del teorema del coseno.
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.6 di 16
> 
> Problema 3 – Soluzione.
> Il concorrente che prende la fetta più grande è quello che si serve per 100-esimo.
> Per ogni k = 1, 2, . . . , 10 000, indichiamo con Fk la fetta che spetta al concorrente k-esimo,
> e con Tk la quantità di torta rimasta dopo che si sono serviti i primi k concorrenti. Poniamo
> per convenzione T0 = 1. Dobbiamo determinare il valore di k per cui Fk è massimo. Il testo
> del problema ci dice che
> Fk = k
> n · Tk−1
> e
> Tk = n −k
> n
> · Tk−1.
> Da queste due equazioni ricaviamo che
> Fk+1 = k + 1
> n
> · Tk = k + 1
> n
> · n −k
> n
> · Tk−1,
> e quindi
> Fk+1
> Fk
> = k + 1
> n
> · n −k
> n
> · n
> k = (k + 1)(n −k)
> nk
> = 1 −k(k + 1) −n
> kn
> .
> Questo ci dice in particolare che Fk+1 è maggiore di Fk se e solo se
> k(k + 1) < n.
> Tenendo conto che n = 10 000, questo accade se e solo se k ≤99 (basta osservare che k(k+1)
> è una funzione crescente dell’intero positivo k e valgono le disuguaglianze 99 · 100 < 10 000 e
> 100 · 101 > 10 000).
> Ne segue che il valore di Fk aumenta inizialmente fino a raggiungere il massimo quando
> k = 100, per poi diminuire da lì in poi fino al termine dei concorrenti.
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.7 di 16
> 
> Problema 4 – Soluzione.
> Per ogni k ammissibile, il minimo numero di percorsi da utilizzare per determinare con certezza
> ak è due.
> Un percorso non basta
> Consideriamo un percorso, ed indichiamo con ci il numero di caselle
> che contengono il valore ai attraversate dal percorso. Osserviamo che ci ≥1 per ogni i e la
> somma vale
> S = c1a1 + . . . + ckak + . . . + c2022a2022.
> Ora Barbara conosce i coefficienti c1, . . . , c2022, e vorrebbe determinare in maniera univoca
> il numero ak. Supponiamo di aver trovato questo valore di ak, e scegliamo un indice h ̸= k.
> Si verifica che la somma S non cambia se si sostituisce ak con ak + ch, e si sostituisce ah con
> ah −ck, lasciando tutti gli altri ai invariati. Questo mostra che non vi è mai un unico valore di
> ak che sia compatibile con la somma data.
> Due percorsi bastano quando 2 ≤k ≤2022
> Consideriamo il percorso P che percorre la prima
> riga verso destra fino ad incontrare ak, poi passa sotto nella seconda riga e torna indietro fino
> alla prima colonna, quindi si muove verso il basso fino all’ultima riga e infine verso destra fino
> al traguardo. Consideriamo anche il percorso P ′ analogo al precedente, con l’unica differenza
> che il primo “tornante” avviene una mossa prima, cioè quando il percorso arriva alla casella con
> ak−1 (nel caso k = 2 questo vuol dire che il percorso P ′ si muove direttamente verso il basso).
> La figura seguente rappresenta i due percorsi nel caso speciale k = 5 (per semplicità abbiamo
> scritto an invece di a2022).
> a1
> a2
> a2
> a3
> a3
> a3
> a4
> a4
> a4
> a4
> a5
> a5
> a5
> a5
> a5
> a2
> a2
> a3
> a3
> a3
> a4
> a4
> a4
> a4
> a5
> a5
> a5
> a5
> a5
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> . . .
> ...
> Percorso P
> a1
> a2
> a2
> a3
> a3
> a3
> a4
> a4
> a4
> a4
> a5
> a5
> a5
> a5
> a5
> a2
> a2
> a3
> a3
> a3
> a4
> a4
> a4
> a4
> a5
> a5
> a5
> a5
> a5
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> . . .
> ...
> Percorso P ′
> L’unica differenza tra i due percorsi è che P ha due caselle con ak in più. Dette quindi S
> ed S′ le somme sui due percorsi, se ne deduce che
> S −S′ = 2ak,
> da cui è immediato ricavare il valore di ak.
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.8 di 16
> 
> Due percorsi bastano quando k = 1
> Consideriamo i due percorsi P e P ′ che partono andando
> dalla casella iniziale alla casella (4, 4) in questo modo.
> • Il percorso P fa in successione due spostamenti verso destra, uno verso il basso, uno verso
> destra, e infine due verso il basso.
> • Il percorso P ′ percorre tutta la prima riga, poi scende nella seconda riga e torna indietro
> fino alle seconda casella della seconda riga, quindi fa una mossa verso il basso, una verso
> sinistra, una verso il basso, e infine percorre la quarta riga verso destra fino alla casella
> (4, 4),
> Dalla casella (4, 4) fino alla fine i due percorsi proseguono allo stesso modo, alternando
> sempre una mossa verso destra e una verso il basso. In questo modo le due somme risultano
> S = a1 + a2 + 2a3 + 3a4 + 2(a5 + . . . + a2022)
> e
> S′ = a1 + 2a2 + 4a3 + 6a4 + 4(a5 + . . . + a2022),
> da cui segue che
> 2S −S′ = a1.
> a1
> a2
> a2
> a3
> a3
> a3
> a4
> a4
> a4
> a4
> a5
> a5
> a5
> a5
> a5
> a2
> a2
> a3
> a3
> a3
> a4
> a4
> a4
> a4
> a5
> a5
> a5
> a5
> a5
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> . . .
> ...
> Percorso P
> a1
> a2
> a2
> a3
> a3
> a3
> a4
> a4
> a4
> a4
> a5
> a5
> a5
> a5
> a5
> a2
> a2
> a3
> a3
> a3
> a4
> a4
> a4
> a4
> a5
> a5
> a5
> a5
> a5
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> an
> . . .
> ...
> Percorso P ′
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.9 di 16
> 
> Problema 5 – Soluzione.
> Risolviamo direttamente il caso generale, dimostrando che un sottoinsieme S è identificabile
> se e solo se 0 ̸∈S e 101 ∈S. Al termine descriveremo una scorciatoia che funziona nel caso
> dispari.
> Condizione necessaria
> Dimostriamo intanto che le condizioni 0 ̸∈S e 101 ∈S sono necessarie.
> Se per assurdo 0 ∈S e all’inizio non ci sono palline nei bicchieri, nessun programma può fare
> comparire una pallina nel bicchiere in posizione 1, come invece sarebbe richiesto. Simmetricamente, se 101 ̸∈S e all’inizio tutti i bicchieri contengono una pallina, allora la configurazione
> resta la stessa durante tutta l’esecuzione del programma, per cui alla fine ci sarà sicuramente
> una pallina anche nel bicchiere in posizione 1, il che non dovrebbe succedere in questo caso.
> Condizione sufficiente
> Dimostriamo ora che le condizioni 0 ̸∈S e 101 ∈S sono sufficienti.
> Indichiamo con p il numero dei bicchieri che contengono una pallina.
> Come già osservato,
> se p = 0 oppure p = 101, tutte le possibili istruzioni non alterano la configurazione, che in
> entrambi i casi rispetta da subito la richiesta. Nel seguito supporremo quindi, senza perdita di
> generalità, che 1 ≤p ≤100.
> Diciamo che i bicchieri sono disposti in posizione canonica standard se i bicchieri con la
> pallina occupano le posizioni da 1 a p; diciamo che sono disposti in posizione canonica shiftata
> se occupano le posizioni da 2 a p + 1. Dimostreremo che esiste un programma eseguendo il
> quale la configurazione finale sarà quella canonica standard se p ∈S, e sarà quella canonica
> shiftata se p ̸∈S (quindi in particolare ci sarà una pallina nel bicchiere in posizione 1 se e solo
> se p ∈S).
> Dividiamo il programma richiesto in tre sottoprogrammi. Il primo sottoprogramma passa
> dalla configurazione iniziale alla configurazione canonica standard.
> Un modo di realizzare
> questo è la seguente lista di istruzioni.
> • Per ogni i che va da 1 a 101 eseguiamo l’istruzione (i; i, 1). Se da qualche parte c’è una
> pallina, al termine ci sarà una pallina anche nel bicchiere in posizione 1.
> • Per ogni i che va da 2 a 101 eseguiamo l’istruzione (i; i, 2). Se c’è almeno una pallina oltre
> a quella del bicchiere in posizione 1, al termine ci sarà una pallina anche nel bicchiere in
> posizione 2.
> • Per ogni i che va da 3 a 101 eseguiamo l’istruzione (i; i, 3). Se c’è almeno una pallina
> oltre a quelle eventualmente presenti nei bicchieri in posizione 1 e 2, al termine ci sarà
> una pallina anche nel bicchiere in posizione 3.
> • Proseguendo allo stesso modo otteniamo il risultato richiesto (più formalmente questo si
> potrebbe dimostrare per induzione).
> Il secondo sottoprogramma passa dalla configurazione canonica standard a quella canonica
> shiftata. Per far questo eseguiamo l’istruzione (i; i, i+1) per ogni i che va da 100 a 1, procedendo
> dunque al contrario. Queste istruzioni non fanno nulla fino a quando i > p. Quando i = p, il
> bicchiere con la pallina in posizione p viene spostato in posizione p + 1, poi quello in posizione
> p −1 viene spostato in posizione p, e così via finch´e il bicchiere con la pallina in posizione 1
> viene spostato in posizione 2.
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.10 di 16
> 
> Il terzo sottoprogramma parte dalla configurazione canonica shiftata. Dato un intero s, con
> 1 ≤s ≤100, definiamo s-check la coppia di istruzioni (s + 1; s + 1, 1) e (s + 2; s + 1, 1) (nel
> caso s = 100 la seconda istruzione non ha senso, per cui si esegue solo la prima). Esaminiamo
> l’effetto di un s-check in tre casi.
> • Caso 1. Se siamo nella configurazione canonica shiftata e s ̸= p, allora sostanzialmente
> non succede nulla. Più precisamente, se s > p entrambe le istruzioni non trovano la
> pallina e quindi non fanno nulla, se s < p entrambe le istruzioni trovano la pallina e
> quindi la seconda annulla l’effetto della prima.
> • Caso 2. Se siamo nella configurazione canonica shiftata e s = p, allora la prima istruzione
> porta il bicchiere con la pallina che si trova in posizione p + 1 (cioè l’ultimo bicchiere con
> pallina della fila) in posizione 1, mentre la seconda istruzione non trova la pallina e quindi
> non fa nulla. Di conseguenza, in questo caso l’s-check ha come effetto quello di passare
> dalla configurazione canonica shiftata alla configurazione canonica standard.
> • Caso 3. Se siamo nella configurazione canonica standard e s < p, allora non succede
> nulla, perch´e gli eventuali scambi avvengono tra bicchieri che contengono una pallina.
> Siamo ora pronti a descrivere il terzo sottoprogramma, che esegue l’s-check per tutti i valori
> s ∈S, procedendo dal più grande al più piccolo. Abbiamo due possibilità.
> • Se p ̸∈S, allora siamo sempre nel Caso 1.
> Pertanto non succede mai nulla, e la
> configurazione resta quella canonica shiftata, come previsto nel caso p ̸∈S.
> • Se p ∈S, allora non succede nulla fino a quando si testano i valori s > p (Caso 1), poi
> quando s = p la configurazione diventa quella canonica standard (Caso 2), e poi non
> succede di nuovo più nulla quando si testano i valori s < p (Caso 3). Pertanto al termine
> dell’esecuzione la configurazione è quella canonica standard, come previsto nel caso p ∈S.
> Scorciatoia per il caso dispari
> Nel caso in cui S è l’insieme dei numeri dispari da 1 a 101,
> allora basta eseguire il primo sottoprogramma (quello che porta i bicchieri in configurazione
> canonica standard) e poi eseguire l’istruzione (i; 1, 101) per ogni i che va da 2 a 101.
> • Se il numero di palline è dispari, lo scambio viene eseguito un numero pari di volte, e
> quindi alla fine resta la configurazione canonica standard, che ha la pallina nel bicchiere
> in posizione 1.
> • Se il numero di palline è pari, lo scambio viene eseguito un numero dispari di volte,
> e quindi alla fine il bicchiere in posizione 1 sarà quello che in configurazione canonica
> standard era in posizione 101, che era vuoto (essendo p pari).
> Osservazione
> Nella soluzione del caso generale si può passare direttamente dalla configurazione iniziale a quella canonica shiftata, senza passare attraverso la canonica standard. Basta
> eseguire una versione del primo sottoprogramma in cui tutti gli indici sono traslati ciclicamente
> 1 →2 →3 →. . . →100 →101 →1, come se la fila iniziasse della posizione 2 per terminare
> nella posizione 1 “dopo aver fatto il giro”.
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.11 di 16
> 
> Problema 6 – Soluzione.
> Domanda (a)
> Indichiamo con O il circocentro di ABC, ed indichiamo con α, β, γ gli angoli
> di ABC nei vertici A, B, C, rispettivamente.
> Il punto fondamentale è che i triangoli IAA1 e AIO sono congruenti.
> Per dimostrarlo,
> osserviamo che IA = AI in quanto si tratta dello stesso lato, e IA1 = AO per costruzione. Ci
> basta dunque dimostrare che gli angoli compresi tra queste coppie di lati sono uguali.
> Il calcolo di questi angoli è delicato, in quanto dipende dalla configurazione in cui ci troviamo, e più precisamente dalla posizione di O rispetto alle rette AI e BI (ci sono quindi quattro
> casi da esaminare). Consideriamo il caso, rappresentato nella figura di sinistra, in cui O si trova
> dalla stessa parte di C rispetto ad entrambe le rette (gli altri casi, uno dei quali è rappresentato
> nella figura di destra, si trattano in maniera sostanzialmente analoga). In tale configurazione, per calcolare ∠OAI è sufficiente osservare che ∠IAB = α/2 (perch´e AI è bisettrice) e
> ∠OAB = 90°−γ (perch´e il triangolo AOB è isoscele sulla base AB e ha l’angolo al vertice
> uguale a 2γ, essendo gli angoli al centro il doppio dei corrispondenti angoli alla circonferenza).
> Per differenza si ottiene quindi che
> ∠OAI = ∠OAB −∠IAB = 90°−γ −α
> 2 .
> Per il calcolo di ∠A1IA ricordiamo che la somma degli angoli interni del quadrilatero (non
> convesso) AIEC deve essere di 360°, da cui (qui con ∠AIE indichiamo l’angolo del quadrilatero,
> che è maggiore di 180°)
> ∠AIE = 360°−∠CAI −∠IEC −∠ECA = 360°−α
> 2 −90°−γ,
> e quindi per differenza
> ∠A1IA = ∠AIE −180°= 360°−α
> 2 −90°−γ −180°= 90°−α
> 2 −γ,
> il che completa la dimostrazione della congruenza.
> bC
> b
> A
> b
> B
> b
> I
> b
> D
> b E
> b O
> b
> A1
> b
> B1
> b
> P
> bC
> b
> A
> b B
> bI
> b
> D
> b E
> b O
> b
> A1
> bB1
> b
> P
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.12 di 16
> 
> Ragionando allo stesso modo dall’altra parte, scopriamo che i triangoli IBB1 e BIO sono
> congruenti. A questo punto, dalle due congruenze deduciamo che
> ∠IA1P + ∠IB1P = ∠IA1A + ∠IB1B = ∠AOI + ∠BOI = ∠AOB = 2γ.
> Consideriamo ora il quadrilatero A1PB1I, e osserviamo che ∠A1IB1 = ∠DIE = 180°−γ
> (per la ciclicità di CDIE, che ha due angoli opposti retti). Per differenza otteniamo quindi che
> ∠APB
> =
> ∠A1PB1
> =
> 360°−∠A1IB1 −∠IA1P −∠IB1P
> =
> 360°−(180°−γ) −2γ
> =
> 180°−γ,
> e questo mostra che, in questa configurazione, il punto P sta sulla circonferenza circoscritta al
> triangolo ABC, dalla parte opposta di C rispetto alla retta AB.
> Nella configurazione di destra la dimostrazione è analoga, ma i calcoli sono leggermente
> diversi. In questo caso avremo che
> ∠OAI = ∠IAB −∠OAB = α
> 2 −90°+ γ
> e (indicando questa volta con ∠AIE l’angolo minore di 180°)
> ∠A1IA = 180°−∠AIE = 180°−
> 
> 360°−α
> 2 −90°−γ
> 
> = α
> 2 + γ −90°,
> da cui ancora una volta la congruenza dei triangoli IAA1 e AIO.
> Dalla congruenza deduciamo nuovamente che ∠IA1P = ∠IA1A = ∠AOI. Diversamente
> da prima, ragionando dall’altra parte otteniamo ora che
> ∠IB1P = 180°−∠IB1B = 180°−∠BOI,
> da cui
> ∠IA1P + ∠IB1P = 180°−(∠BOI −∠AOI) = 180°−∠AOB = 180°−2γ.
> Consideriamo ora nuovamente il quadrilatero (questa volta non convesso) A1IB1P. Come
> prima si ha che ∠A1IB1 = ∠DIE = 180°−γ, e quindi ∠A1IB1 = 180°+ γ come angolo non
> convesso. Per differenza si ottiene quindi che
> ∠APB
> =
> ∠A1PB1
> =
> 360°−∠IA1P −∠IB1P −∠A1IB1
> =
> 360°−(180°−2γ) −(180°+ γ)
> =
> γ,
> e questo mostra che, in questa configurazione, il punto P sta sulla circonferenza circoscritta al
> triangolo ABC, dalla stessa parte di C rispetto alla retta AB.
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.13 di 16
> 
> Osservazione
> Si può scrivere la dimostrazione in maniera indipendente dalla configurazione
> utilizzando la nozione di angoli orientati modulo 180°. Ricordiamo che in tale formalismo si
> indica con ∠XYZ l’angolo che la semiretta Y X compie per andare a sovrapporsi alla semiretta
> Y Z ruotando in senso antiorario intorno al punto Y , e che tale angolo va interpretato a meno
> di multipli di 180°. Così, per esempio, ∠XYZ = −∠ZYX, e la somma degli angoli interni di
> un triangolo o di un quadrilatero è uguale a 0.
> Indichiamo i vertici di ABC in senso antiorario, come nelle figure. Si ottiene allora che (si
> noti che ora queste relazioni valgono sia nella configurazione di sinistra, sia in quella di destra)
> ∠OAI = ∠OAB −∠IAB = γ −90°+ α
> 2
> e (sfruttando che la somma degli angoli interni di AIEC è nulla)
> ∠A1IA = −∠AIE = −90°−γ −α
> 2 = 90°−γ −α
> 2 .
> Questo fatto, unito alle uguaglianze tra i lati osservate precedentemente, mostra che i triangoli IAA1 e AIO sono “inversamente congruenti”, cioè congruenti ma con i vertici che “girano
> in senso opposto”. Dalla congruenza deduciamo che
> ∠PA1I = ∠AA1I = −∠IOA = ∠AOI,
> e analogamente PB1I = BOI. Nel quadrilatero A1IB1P abbiamo ora che A1IB1 = EID = −γ
> (sempre per la ciclicità di EIDC), da cui
> ∠APB
> =
> A1PB1
> =
> −∠PB1I −∠B1IA1 −∠IA1P
> =
> −∠BOI + ∠AOI −γ
> =
> ∠AOB −γ
> =
> 2γ −γ
> =
> γ.
> Questo è equivalente a dire che P sta sulla circonferenza circoscritta al triangolo ABC,
> indipendentemente dalla sua posizione rispetto alla retta AB.
> Domanda (b)
> I possibili valori del perimetro di ABC sono tutti quelli compresi (strettamente)
> tra 2 e 3.
> Per dimostrarlo, osserviamo intanto che P può coincidere con C solo quando siamo in una
> configurazione come nella figura di destra. Inoltre, i punti A1, A, C devono essere allineati,
> il che ci dice che ∠A1AI = 180°−α/2, e di conseguenza (a causa della solita congruenza)
> anche ∠AIO = 180°−α/2. Questo implica che la retta IO è parallela alla retta AB, con I a
> sinistra di O. Esiste anche una configurazione analoga in cui A1 è compreso tra A e C e vale
> l’uguaglianza ∠A1AI = ∠AIO = α/2, che ci dice che la retta IO è parallela alla retta AB con
> I a destra di O.
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.14 di 16
> 
> In ogni caso, I e O hanno la stessa distanza dalla retta AB. Ora la distanza di I è uguale ad
> r, cioè il raggio della circonferenza inscritta, mentre la distanza di O è uguale a R cos γ (questo
> si può vedere osservando che il triangolo isoscele ABO può essere decomposto nell’unione di
> due triangoli rettangoli con angoli in O pari a γ ed ipotenusa di lunghezza R). Deve quindi
> valere l’uguaglianza
> r = R cos γ.
> (7)
> Indicando con S l’area e con p il semiperimetro, e ricordando le note formule
> r = S
> p ,
> R = abc
> 4S ,
> cos γ = a2 + b2 −c2
> 2ab
> ,
> possiamo esprimere la relazione precedente come
> 8S2 = p(a2 + b2 −c2).
> Se ora calcoliamo S con la formula di Erone, e semplifichiamo una p, alla fine otteniamo che
> (a + b −c)(b + c −a)(c + a −b) = c(a2 + b2 −c2),
> che nel caso c = 1 si riduce a
> (a + b −1)(b + 1 −a)(1 + a −b) = a2 + b2 −1.
> Ponendo s = a + b e d = a −b, possiamo riscrivere l’uguaglianza nella forma
> s2 + d2
> 2
> −1 = (s −1)(1 −d)(1 + d) = (s −1)(1 −d2),
> da cui con semplici passaggi algebrici otteniamo che
> d2 = s(2 −s)
> 2s −1 .
> Siccome d2 ≥0, da questa relazione è evidente che deve essere s < 2 (anche il caso s = 2 va
> escluso perch´e porterebbe a d = 0, cioè ad un triangolo equilatero). D’altra parte è evidente
> che deve essere anche s > 1, perch´e in ogni triangolo la somma delle lunghezze di due lati è
> maggiore della lunghezza del terzo.
> Resta da verificare che per ogni 1 < s < 2 si ottiene un triangolo ammissibile. In tal caso
> le lunghezze dei due lati BC e CA sono
> a = s + d
> 2
> ,
> b = s −d
> 2
> ,
> o viceversa. Sono questi i lati di un triangolo? Basta che ciascun lato sia minore della somma
> degli altri due. Già sappiamo che a + b > 1, ed è ovvio che a + 1 > b. Resta dunque solo
> da verificare che b + 1 > a, ma questa disuguaglianza si riduce a d < 1, da cui con semplici
> passaggi si ritrova ancora una volta la condizione s > 1.
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.15 di 16
> 
> Approcci alternativi
> Si può dedurre la relazione (7) senza passare per il parallelismo di AB e
> IO. Ad esempio, dopo aver osservato che i punti A1, A, C devono essere allineati, possiamo
> considerare il triangolo CA1E, che sappiamo essere rettangolo in E e con A1E = r + R. Dalla
> trigonometria dei triangoli rettangoli segue allora che
> R + r = CE · tan γ
> e
> r = CE tan γ
> 2.
> Rielaborando queste due identità otteniamo che
> r + R = r
> tan γ
> tan(γ/2) = r · cos γ + 1
> cos γ
> ,
> che è equivalente alla (7).
> Osserviamo infine che si può evitare del tutto l’uso della trigonometria. Ad esempio, dopo
> aver osservato il parallelismo tra AB e IO, si può calcolare la distanza di O dal lato AB in
> questo modo. Indichiamo con M il punto medio di AB (che poi è la proiezione di O su AB) e
> con H il piede dell’altezza di ABC uscente dal vertice A. Allora i triangoli AOM e CAH sono
> simili, e sappiamo calcolare le lunghezze dei lati di CAH senza usare la trigonometria (come
> abbiamo fatto nel problema 2).
> Olimpiade Italiana di Matematica 2022 -- Testi e soluzioni -- Pag.16 di 16

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** perimetro tra 2 e 3
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1TXGU5iDuDzmKc7nZ8Xbc329kdRiV6EwX/view)


<span class="qlang-split" data-lang="en"></span>


*P on a circumscribed basis; perimeter *

![[src_cesenatico_2022__prob6.png]]

> Let ABC be a non-equilateral triangle, and let R be the radius of its circumscribed circumference. The circumference inscribed in ABC is centered in I, and is tangent to the CA side at point D, and to the CB side at point E. So either A1 is the point of the line EI such that A1I = R, with I standing between A1 and E. Both B1 and B1I = R, with I standing between B1 and D. Both the AA1 and BB1 intersection. (a) Demonstrate that P belongs to the circumscribed circumference of the triangle ABC. (b) Now let's also assume that AB = 1 and P is C. Determine the possible values of the perimeter of ABC. Italian Olympic Games of Mathematics 2022 - Texts and solutions - Page 2 of 16
> 
> Problem 1  Solution The required values of n are all but multiples of 3. Necessary condition Whether A is a multiple of 2022 whose decimal expression contains exactly n times the figure 7, and possibly other figures of 0. Since 2022 is a multiple of 3, A must also be a multiple of 3, and so (for the criterion of divisibility by 3) the sum of A's digits must in turn be a multiple of 3. Now the sum of the digits of A is 7n, so it's multiple of 3 only if n is multiple of 3. Sufficient condition We observe that the number 70 770 = 2022 · 35 is multiple of 2022 and its decimal expression contains three digits 7 and two digits 0. This shows that n = 3 has the required property. More generally, for every positive integer k we see that the number that you write repeating k times the five-digit block 70770, that is the number 70770 70770. . . 70770 , k times is equal to 70770 . . . + 105(k−1)), is in turn a multiple of 2022 and its decimal expression contains 3k times the figure 7 and 2k times the figure 0. This shows that every multiple of 3 has the required property. Italian Olympic Games of Mathematics 2022 - Texts and solutions - Page 3 of 16
> 
> Problem two  Solution. First method (angle chasing) For the properties of the angle to the circumference (even in the tangent boundary case) the thesis is equivalent to showing that EGA = EFG. Let's use θ to indicate the width of GBC. Let's see that the points B, E, G belong to the same circumference with the center in A and so, because an angle in the center is twice the corresponding angle to the circumference, we deduce that EAG = 2EBG = 2θ. Since the AEG triangle isosceles on the basis of EG, we conclude that EGA = 1 2(180°−EAG) = 1 2(180°−2θ) = 90°−θ. (1) Consider now the ABG triangle. It is an isosceles triangle on the BG base, and the straight AD is the vertex of the angle at the top. It follows that the straight AD is also height, and in particular it is perpendicular to the straight BG. If K is the intersection point of the lines AD and BG, we observe that K is the middle point of BG (in an isosceles triangle the foot of the height is the middle point of the base), while D is the middle point of BF (by construction). From Talete's theorem it follows then that the straight GF is parallel to the straight AD, and therefore perpendicular to the straight BG. It follows in particular that the triangle BGF is a rectangle in G, from which EFG = 90°−GBC = 90°−θ. (2) Comparing (1) and (2) gives the required equality. We could alternatively prove that FGC = FEG. To calculate FGC we take advantage of the parallelism between AD and GF, obtaining that FGC = DAC = α 2 , where α indicates the width of the angle in A of the triangle ABC. Italian Olympic Games of Mathematics 2022 - Texts and solutions - Page 4 of 16
> 
> To calculate FEG, consider the point G′, symmetrical to G with respect to A, and observe that the quadrilateral BEGG′ is cyclic and has the angle in G′ equal to α/2, because the corresponding angle in the center (in A) is equal to α. From the properties of cyclic quadrilaterals it follows then that FEG = 180°−BEG = BG′G = α/2, as desired. Second method (metrical cyclicity) For the tangent and secant theorem, the thesis is equivalent to showing that CG2 = CF · CE. (3) To do this we calculate the lengths of the three segments according to the lengths of the three sides, for which we will use the standard notations a = BC, b = CA, c = AB. Since AG = AB = c for construction, we get immediately that CG = AC −AG = b −c. (4) For a known property of the biset we know that BD: DC = AB: AC, hence BD: (BD + DC) = AB: (AB + AC). It follows that BD = ac/(b + c), and then CF = BC −BF = BC −2BD = a −2ac b + c = a(b −c) b + c . (5) Finally, H indicates the foot of the height of ABC coming out of vertex A. We observe that AH is also the height of the isosceles triangle ABE, and so H is also the middle point of BE, where CE = BC −BE = BC −2BH. The length of BH is therefore to be calculated. The classic way to do this is to put BH = x and CH = y, and observe that x and y verify the system x + y = a, c2 −x2 = b2 −y2, where the first equation follows from the fact that BH + CH = BC, and the second equation follows from having calculated in two ways AH2, applying Pythagoras' theorem in the right triangles ABH and ACH. Solving the system finds that BH = a2 + c2 − b2 2a , and concludes that CE = BC −2BH = a − a2 + c2 − b2 a = b2 − c2 a . (6) From equations (4), (5) and (6) follows immediately (3). Italian Olympic Games of Mathematics 2022 - Texts and solutions - Page 5 of 16
> 
> bA b B b C b D b b E b G b F b H x y Observation The length of BH can also be obtained as BH = BA · cos β = c cos β, where β indicates the angle ABC. In turn, cos β can be derived as a function of the lengths of the sides using the cosine theorem (sometimes cited in Italy as Carnot's theorem), according to which b2 = a2 + c2 −2ac cos β. The calculation that we did by solving the system in x and y is basically the very essential step in proving the cosine theorem. Italian Mathematical Olympiad 2022 - Texts and solutions - Page 6 of 16
> 
> Problem three  Solution. The competitor who gets the biggest slice is the one you need for a hundredth. For every k is 1, 2, . . . , 10 000, we indicate with Fk the slice that belongs to the k-eighth competitor, and with Tk the amount of cake left after the first k competitors have been served. We'll conventionally put T0 = 1. We need to determine the value of k for which Fk is maximum. The text of the problem tells us that Fk = k n · Tk−1 and Tk = n − k n · Tk−1. From these two equations we get that Fk+1 = k + 1 n · Tk = k + 1 n · n − k n · Tk−1, and then Fk+1 Fk = k + 1 n · n − k · n k = (k + 1)(n − k) nk = 1 −k(k + 1) −n kn . This tells us in particular that Fk+1 is greater than Fk if and only if k(k+1) <n. Given that n = 10 000, this occurs if and only if k < MSK0/>99 (note that k(k+1) is an increasing function of the positive integer k and equals the inequalities 99 · 100 < 10 000 and 100 · 101 > 10 000). It follows that the value of Fk increases initially until it reaches its maximum when k = 100, and then decreases from there onwards until the end of the competitors. Italian Olympic Games in Mathematics 2022 - Texts and solutions - Page 7 of 16
> 
> Problem 4  Solution. For each eligible k, the minimum number of paths to be used to determine with certainty ak is two. Consider a path, and we indicate with it the number of boxes that contain the value of the paths crossed. Let's see that there's ≥1 for every i and the sum is S = c1a1 +. . . + ckak + . . . + c2022a2022. Now Barbara knows the c1 coefficients. . . In addition, the Commission will be able to draw up a number of proposals for a common position on the basis of the results of the study. Let's say we found this value of ak, and we pick an index h =k. It turns out that the sum S does not change if you replace ak with ak + ch, and replace ah with ah −ck, leaving all the others unchanged. This shows that there is never a single value of ak that is compatible with the given sum. Two paths are enough when 2 ≤k ≤2022 Consider the path P that runs the first line to the right until it meets ak, then goes down the second line and back up to the first column, then moves down to the last line and finally right up to the finish line. We also consider the path P ′ analogous to the previous one, with the only difference that the first tornante makes a move first, i.e. when the path arrives at the box with ak−1 (in the case of k = 2 this means that the path P ′ moves directly downwards). The following figure represents the two paths in the special case k = 5 (for simplicity we wrote an instead of a2022). a1 a2 a2 a3 a3 a3 a4 a4 a4 a4 a5 a5 a5 a5 a5 a2 a2 a3 a3 a3 a4 a4 a4 a4 a5 a5 a5 a5 a5 an an an an an an an an an an an an an . . . ... This is the first step in the development of a new approach to the management of the financial sector . . . ... Path P ′ The only difference between the two paths is that P has two boxes with additional ak. Thus, if S and S′ are the sums on the two paths, it is deduced that S −S′ = 2ak, from which the value of ak is immediately obtained. Italian Olympic Games of Mathematics 2022 - Texts and solutions - Pag.8 of 16
> 
> Two paths are enough when k = 1 Let's consider the two paths P and P ′ that start going from the initial box to the box (4, 4) this way. • Path P makes two successive movements to the right, one down, one to the right, and finally two down. • The path P ′ travels the entire first row, then descends to the second row and returns back to the second row boxes of the second row, then makes a move down, one to the left, one down, and finally travels the fourth row to the right up to the box (4, 4), From the box (4, 4) until the end the two paths continue in the same way, always alternating a move to the right and one down. So the two sums are S = a1 + a2 + 2a3 + 3a4 + 2(a5 + . . . + a2022) e S′ = a1 + 2a2 + 4a3 + 6a4 + 4(a5 + . . . + a2022), hence 2S −S′ = a1. a1 a2 a2 a3 a3 a3 a4 a4 a4 a4 a5 a5 a5 a5 a5 a2 a2 a3 a3 a3 a4 a4 a4 a4 a5 a5 a5 a5 a5 an an an an an an an an an an an an an . . . ... This is the first step in the development of a new approach to the management of the financial sector . . . ... Course P ′ Italian Olympic Games of Mathematics 2022 -- Texts and solutions -- Page 9 of 16
> 
> Problem 5  Solution We solve the general case directly by showing that a subset S is identifiable if and only if 0 ∈S and 101 ∈S. At the end, we'll describe a shortcut that works in rare cases. Condition required We show that conditions 0 ∈S and 101 ∈S are necessary. If absurdly 0 ∈S and at the beginning there are no balls in the glasses, no program can make a ball appear in the glass in position 1, as would be required instead. Symmetrically, if 101 ∈S and at the beginning all the glasses contain a ball, then the configuration remains the same throughout the entire run of the programme, so in the end there will definitely be a ball in the glass in position 1, which should not happen in this case. We now show that conditions 0 ∈S and 101 ∈S are sufficient. Let's p the number of glasses that contain a ball. As already noted, if p = 0 or p = 101, all possible instructions do not alter the configuration, which in either case immediately complies with the request. In the following we assume, without any loss of generality, that 1 < MSK8/>p < MSK9/>100. Let's say the glasses are arranged in a standard canonical position if the glasses with the ball occupy the positions from 1 to p; let's say they are arranged in a shifted canonical position if they occupy the positions from 2 to p + 1. We'll show that there's a program running which the final configuration will be the standard canonical if p ∈S, and it will be the shifted canonical if p ∈S (so in particular there will be a ball in the glass in position 1 if and only if p ∈S). Let's divide the requested program into three subprograms. The first sub-program goes from the initial configuration to the standard canonical configuration. One way to accomplish this is by following the list of instructions. • For each i from 1 to 101 we run the instruction (i; i, 1). If there's a ball somewhere, at the end there'll be a ball in the glass in position 1. • For each i from 2 to 101 we perform the instruction (i; i, 2). If there is at least one ball in addition to the glass in position 1, there will also be one ball in the glass in position 2. • For each class from 3 to 101, we perform instruction (i; i, 3). If there is at least one ball in addition to those that may be present in glasses in positions 1 and 2, there will be a ball in the glass in position 3 at the end. • By continuing the same way we achieve the desired result (more formally this could be demonstrated by induction). The second sub-program goes from the standard canonical configuration to the shifted canonical one. To do this, we run the instruction (i; i, i+1) for each i going from 100 to 1, so we go the other way around. These instructions do nothing until the > p. When i = p, the glass with the ball in position p is moved to position p + 1, then the one in position p −1 is moved to position p, and so on until the glass with the ball in position 1 is moved to position 2. Italian Olympic Games in Mathematics 2022 - Texts and solutions - Page 10 of 16
> 
> The third sub-program starts from the shifted canonical configuration. Given an integer s, with 1 ≤s ≤100, we define s-check the instruction pair (s + 1; s + 1, 1) and (s + 2; s + 1, 1) (in the case of s = 100 the second instruction makes no sense, so only the first one is executed). Let us examine the effect of a s-check in three cases. • Case one. If we're in the shifted canonical configuration and s =p, then basically nothing happens. More precisely, if both instructions do not find the ball and therefore do nothing, if both instructions find the ball and the second annul the effect of the first. • Case two. If we're in the shifted canonical configuration and s = p, then the first instruction brings the glass with the ball that is in position p + 1 (i.e. the last glass with ball in the row) to position 1, while the second instruction doesn't find the ball and so it doesn't do anything. Consequently, in this case ls-check has the effect of moving from the shifted canonical configuration to the standard canonical configuration. • Case 3. If we're in the standard canonical configuration and s < p, then nothing happens, because any exchanges happen between glasses that contain a ball. We are now ready to describe the third subprogram, which performs the s-check for all s ∈S values, going from the largest to the smallest. We have two choices. • If p ∈S, then we are still in Case 1. Therefore, nothing ever happens, and the configuration remains that canonical shift, as provided for in the case p ∈S. • If p ∈S, then nothing happens until the values s > p are tested (Case 1), then when s = p the configuration becomes that standard canonical one (Case 2), and then nothing happens again when the values s < p are tested (Case 3). Therefore, at the end of the execution the configuration is the standard canonical one, as provided for in case p ∈S. If S is the sum of the odd numbers from 1 to 101, then just run the first sub-program (the one that brings the glasses into standard canonical configuration) and then run the instruction (i; 1, 101) for each i from 2 to 101. • If the number of balls is odd, the exchange is made an equal number of times, and so in the end the standard canonical configuration remains, which has the ball in the glass in position 1. • If the number of balls is equal, the exchange is made an odd number of times, and so in the end the glass in position 1 will be the one in the standard canonical configuration that was in position 101, which was empty (being p equal). Observation In the solution of the general case one can go directly from the initial configuration to the shifted canon without going through the standard canon. It is sufficient to run a version of the first subprogram where all indices are cyclically transferred 1 →2 →3 →. . . →100 →101 →1, as if the row started at position 2 and ended at position 1 after making the turn. Italian Mathematical Olympiad 2022 - Texts and solutions - Page 11 of 16
> 
> Problem 6  Solution Question (a) Let's indicate with O the circus of ABC, and let's indicate with α, β, γ the angles of ABC at the vertices A, B, C, respectively. The key point is that the IAA1 and AIO triangles are congruent. To prove it, we'll observe that AI is AI because it's on the same side, and IA1 is AO per construction. It is therefore sufficient to demonstrate that the angles between these pairs of sides are equal. The calculation of these angles is delicate, as it depends on the configuration in which we find ourselves, and more precisely on the position of O relative to the AI and BI directions (there are therefore four cases to be examined). Consider the case, represented in the figure on the left, where O is on the same side of C with respect to both lines (the other cases, one of which is represented in the figure on the right, are treated essentially similarly). In this configuration, to calculate OAI it is sufficient to observe that IAB = α/2 (because AI is bisect) and OAB = 90°−γ (because the AOB triangle is isosceles on the base AB and has the angle at the apex equal to 2γ, being the angles at the center twice the corresponding angles at the circumference). For difference we therefore get that OAI = OAB −IAB = 90°−γ −α 2 . For the calculation of A1IA we recall that the sum of the inner angles of the quadrilateral (non-convex) AIEC must be 360°, from which (here with AIE we indicate the angle of the quadrilateral, which is greater than 180°) AIE = 360°−CAI −IEC −EC = 360°−α 2−−−90°γ, and therefore by difference A1IA = AIE −180°=α 2 −360°−−>−−−−−180°= 90°−α 2 −γ, which is the complete demonstration of congruence. bC b A b B b B B I b D b E b O b A1 b B B1 b P b C b A b B B B B B B B B B D B E b O b A1 b B 1 b P Italian Olympic Games of Mathematics 2022 -- Tests and solutions -- Pag.12 of 16
> 
> Reasoning the same way on the other side, we find that the IBB1 and BIO triangles are congruent. At this point, from the two congruences we deduce that IA1P + IB1P = IA1A + IB1B = AOI + BOI = AOB = 2γ. Now let's consider the quadrilateral A1PB1I, and we notice that A1IB1 = DIE = 180°−γ (for the cyclicity of CDIE, which has two opposite right angles). For difference we get then that APB = A1PB1 = 360°−A1IB1 −IA1P −IB1P = 360°−(180°−γ) −2γ = 180°−γ, and this shows that, in this configuration, the point P is on the circumference circumscribed to the triangle ABC, on the opposite side of C relative to the straight AB. In the right configuration the demonstration is similar, but the calculations are slightly different. In this case we'll have OAI = IAB −OAB = α 2 −90°+ γ and (indicating this time with AIE the smaller angle of 180°) A1IA = 180°−AIE = 180°− 360°−α 2 −90°−γ = α 2 + γ −90°, from which once again the congruence of the IAA1 and AIO triangles. From the congruence we deduce again that IA1P = IA1A = AOI. Unlike before, by reasoning on the other hand we now get that IB1P = 180°−IB1B = 180°−BOI, where IA1P + IB1P = 180°−(BOI −AOI) = 180°−AOB = 180°−2γ. We now consider again the quadrilateral (this time not convex) A1IB1P. As before we have that A1IB1 = DIE = 180°−γ, and then A1IB1 = 180°+ γ as a non-convex angle. For difference, it is therefore obtained that APB = A1PB1 = 360°−IA1P −IB1P −A1IB1 = 360°−(180°−2γ) −(180°+ γ) = γ, and this shows that, in this configuration, the point P is on the circumference circumscribed to the triangle ABC, on the same side of C relative to the straight AB. Italian Olympic Games in Mathematics 2022 - Texts and solutions - Page 13 of 16
> 
> Observation The demonstration can be written independently of the configuration using the notion of modulo oriented angles 180°. Recall that in this formalism XYZ indicates the angle that the semicircle Y X makes to go over the semicircle Y Z by rotating in an anti-clockwise direction around the point Y , and that this angle must be interpreted as less than multiples of 180°. So, for example, XYZ = −ZYX, and the sum of the interior angles of a triangle or a quadrilateral is equal to 0. We're going to point the ABC tops in the opposite direction, like in the figures. It is then obtained that (note that now these relationships are valid in both the left and right configurations) OAI = OAB −IAB = γ −90°+ α 2 and (taking advantage that the sum of the inner angles of AIEC is zero) A1IA = −AIE = −90°−γ −α 2 = 90°−γ −α 2 . This fact, together with the similarities between the sides previously observed, shows that the IAA1 and AIO triangles are inverse congruent, i.e. congruent but with vertices that spin in the opposite direction. From congruence we deduce that PA1I = AA1I = −IOA = AOI, and similarly PB1I = BOI. In quadrilateral A1IB1P we now have that A1IB1 = EID = −γ (always for the cyclicity of EIDC), where APB = A1PB1 = −PB1I −B1IA1 −IA1P = −BOI + AOI −γ = AOB −γ = 2γ −γ = γ. This is equivalent to saying that P is on the circumscribed circumference of the triangle ABC, regardless of its position relative to the straight AB. Question (b) The possible ABC perimeter values are all those (strictly) between 2 and 3. To prove this, let's observe that P can only match C when we're in a configuration like the figure on the right. In addition, points A1, A, C must be aligned, which tells us that A1AI = 180°−α/2, and consequently (due to the usual congruence) also AIO = 180°−α/2. This implies that the I line is parallel to the AB line, with I to the left of O. There is also an analog configuration where A1 is understood between A and C and is equal to A1AI = AIO = α/2, which tells us that the straight IO is parallel to the straight AB with I to the right of O. Italian Olympic Games of Mathematics 2022 -- Texts and solutions -- Pag.14 of 16
> 
> In any case, I and O are the same distance from straight AB. Now the distance of I is equal to r, i.e. the radius of the inscribed circumference, while the distance of O is equal to R cos γ (this can be seen by observing that the isosceles triangle ABO can be decomposed in the union of two rectangular triangles with angles in O equal to γ and hypotenuse of length R). It must therefore be equal to r = R cos γ. (7) By indicating with S the area and with p the semiperimeter, and recalling the known formulas r = S p , R = abc 4S , cos γ = a2 + b2 − c2 2ab , we can express the previous relationship as 8S2 = p(a2 + b2 − c2). If we now calculate S with Erone's formula, and we simplify a p, we finally get that (a + b − c) (b + c − a) (c + a − b) = c(a2 + b2 − c2), which in the case of c = 1 reduces to (a + b − 1) (b + 1 − a) (1 + a − b) = a2 + b2 − 1. Putting s = a + b and d = a −b, we can rewrite the equality in the form s2 + d2 2 −1 = (s −1)(1 −d)(1 + d) = (s −1)(1 −d2), from which we get that d2 = s(2 −s) 2s −1 by simple algebraic steps. Since d2 ≥0 is obvious from this ratio that it must be s < 2 (even the case of s = 2 is excluded because it would lead to d = 0, i.e. to an equilateral triangle). On the other hand, it is obvious that it must also be s > 1, because in each triangle the sum of the lengths of the two sides is greater than the length of the third. It remains to be verified that for every 1 < s < 2 an eligible triangle is obtained. In this case the lengths of the two sides BC and CA are a = s + d 2 , b = s −d 2 , or vice versa. Are these the sides of a triangle? As long as each side is less than the sum of the other two. We already know that a + b > 1, and it's obvious that a + 1 > b. So all that remains to be done is to check that b + 1 > a, but this inequality is reduced to d < 1, where, with simple steps, the condition s > 1 is again found. Italian Olympic Games in Mathematics 2022 - Texts and solutions - Page 15 of 16
> 
> Alternative approaches The relationship (7) can be deduced without going through the parallelism of AB and IO. For example, after observing that the points A1, A, C have to be aligned, we can consider the triangle CA1E, which we know is rectangle in E and with A1E = r + R. From the trigonometry of rectangular triangles it follows that R + r = CE · tan γ and r = CE tan γ 2. Reworking these two identities we get that r + R = r · tan γ tan(γ/2) = r · cos γ + 1 cos γ , which is equivalent to (7). Finally, let us note that the use of trigonometry can be completely avoided. For example, after observing the parallelism between AB and IO, you can calculate the distance of O from the side AB this way. We indicate with M the mean point of AB (which is then the projection of O on AB) and with H the foot of the height of ABC coming out of the vertex A. So the AOM and CAH triangles are similar, and we can calculate CAH side lengths without using trigonometry (as we did in problem 2). Italian Olympic Games of Mathematics 2022 - Texts and solutions - Page 16 of 16

**Answer:** perimetro tra 2 e 3
[[src_cesenatico_2022__Q06]]
