---
title: Concours Général des Lycées 2012 — Matematica
tipo: gara
competition: Concours Général des Lycées 2012 — Matematica
family: concours_generale
year: '2012'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2012"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,topic_algebra,topic_insiemi_funzioni,method_fattorizzazione,method_disuguaglianze,method_casework,method_ricorsione,skill_manipolazione_algebrica,skill_lettura_attenta,skill_casework_accurato,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Study the function f that swaps primes and exponents in a prime factorization, and the iterated sequences f^i(n).*

> Problem 1: The primes on top, the exponents on the bottom.
> 
> For every integer $n \ge 2$, one has the prime factorization
> $$n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$$
> where the distinct primes $p_1, p_2, \ldots p_k$ are the prime divisors of $n$, and the exponents $a_1, a_2, \ldots, a_k$ are strictly positive integers. One then sets
> $$f(n) = a_1^{p_1} a_2^{p_2} \cdots a_k^{p_k}.$$
> For example, if $n = 720 = 2^4 3^2 5^1$, then $f(n) = 4^2 2^3 1^5 = 128$. Moreover, $f(1) = 1$, since for $n = 1$ one obtains an empty function $f$, for $n \in \mathbb{N}^*$. Finally, for $n \in \mathbb{N}^*$, one defines $f^i(n)$ by recurrence over $i \in \mathbb{N}$, so that $f^0(n) = n$ and
> $$f^{i+1}(n) = f\big(f^i(n)\big) \quad \text{for all } i \in \mathbb{N}.$$
> For example: $f^0(720) = 720$, $f^1(720) = f(720) = 128$, $f^2(720) = f(128) = 49.$
> 
> The aim of this problem is to study the behavior of the function $f$ and of the sequences $\big(f^i(n)\big)_{i \in \mathbb{N}}$ for $n$ fixed.
> 
> 1. (a) Compute $f(2012)$.
> (b) Determine the numbers $f^i(36^{36})$ for $0 \le i \le 3$. What can be said about the following ones?
> 
> 2. (a) Give an example of an integer $n \ge 1$ such that, for some natural integer $i$, one has
> $$f^{i+2}(n) = f^i(n) \quad \text{and} \quad f^{i+1}(n) \ne f^i(n).$$
> (b) Show that the function $f$ is neither nondecreasing nor nonincreasing.
> 
> 3. Solve in $\mathbb{N}^*$:
> (a) the equation $f(n) = 1$;
> (b) the equation $f(n) = 2$;
> (c) the equation $f(n) = 4$.
> 
> 4. (a) For all integers $a \ge 2$ and $b \ge 0$, show that $ab \le a^b$.
> (b) Let $k \in \mathbb{N}^*$ and let $a_1, \ldots, a_k, b_1, \ldots, b_k$ be integers such that $a_i \ge 2$ and $b_i \ge 0$ for all $i$. Show that
> $$a_1 b_1 + a_2 b_2 + \cdots + a_k b_k \le a_1^{b_1} a_2^{b_2} \cdots a_k^{b_k}.$$
> (c) For all $n \in \mathbb{N}^*$, show that $f(f(n)) \le n$.
> (d) Let $n \in \mathbb{N}^*$. Show that there exists a natural integer $r$ such that, for every integer $i \ge r$, one has $f^{i+2}(n) = f^i(n).$
> 
> 5. Let $E$ be the set of integers $n \ge 2$ having only exponents strictly greater than $1$ in their decomposition into prime factors.
> (a) For every integer $a \ge 2$, show that there exist natural integers $\alpha$ and $\beta$ such that $a = 2\alpha + 3\beta.$
> (b) Deduce from this that if $n$ belongs to $E$, then there exists an element $m$ of $E$ such that $f(m) = n.$
> (c) Give an element $m$ of $E$ such that $f(m) = 2012^{2012}.$
> (d) What can be said about the converse of (b)?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_disuguaglianze|Disuguaglianze]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1vIXYHNm7Pie0N6tpc5bYOGp1UUa2qApP/view)


<span class="qlang-split" data-lang="it"></span>


*Studiare la funzione f che scambia i primi e gli esponenti in una fattorizzazione di primi, e le sequenze iterate f^i(n).*

> Problema 1: i numeri primi in cima, gli esponenti in fondo.
> 
> Per ogni numero intero $n \ge 2$, si ha la fattorizzazione dei primi $$n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$$ dove i primi distinti $p_1, p_2, \ldots p_k$ sono i divisori primi di $n$, e gli esponenti $a_1, a_2, \ldots, a_k$ sono enti rigorosamente positivi. Uno impone quindi $$f(n) = a_1^{p_1} a_2^{p_2} \cdots a_k^{p_k}.$$ Ad esempio, se $n = 720 = 2^4 3^2 5^1$, allora $f(n) = 4^2 2^3 1^5 = 128$. Inoltre, $f(1) = 1$, poiché per $n = 1$ si ottiene una funzione vuota $f$, per $n \in \mathbb{N}^*$. Infine, per $n \in \mathbb{N}^*$ si definisce $f^i(n)$ per ricorrenza su $i \in \mathbb{N}$, in modo che $f^0(n) = n$ e $$f^{i+1}(n) = f\big(f^i(n)\big) \quad \text{for all } i \in \mathbb{N}.$$ Per esempio: $f^0(720) = 720$, $f^1(720) = f(720) = 128$, $f^2(720) = f(128) = 49.$
> 
> Lo scopo di questo problema è quello di studiare il comportamento della funzione $f$ e delle sequenze $\big(f^i(n)\big)_{i \in \mathbb{N}}$ per $n$ fisso.
> 
> 1. (a) Calcolare $f(2012)$. b) Determinare i numeri $f^i(36^{36})$ per $0 \le i \le 3$. Cosa si può dire dei seguenti?
> 
> 2. (a) Date un esempio di un intero $n \ge 1$ tale che, per un intero naturale $i$, si abbia $$f^{i+2}(n) = f^i(n) \quad \text{and} \quad f^{i+1}(n) \ne f^i(n).$$ (b) Mostri che la funzione $f$ non è né non diminuente né non in aumento.
> 
> 3. Risolvere in $\mathbb{N}^*$: (a) l'equazione $f(n) = 1$; (b) l'equazione $f(n) = 2$; (c) l'equazione $f(n) = 4$.
> 
> 4. a) Per tutti gli integri $a \ge 2$ e $b \ge 0$, indicare che $ab \le a^b$. b) Che $k \in \mathbb{N}^*$ e $a_1, \ldots, a_k, b_1, \ldots, b_k$ siano integri tali che $a_i \ge 2$ e $b_i \ge 0$ per tutti $i$. Indicare che $$a_1 b_1 + a_2 b_2 + \cdots + a_k b_k \le a_1^{b_1} a_2^{b_2} \cdots a_k^{b_k}.$$ (c) Per tutti $n \in \mathbb{N}^*$, indicare che $f(f(n)) \le n$. (d) Let $n \in \mathbb{N}^*$. Mostrare che esiste un intero naturale $r$ tale che, per ogni intero $i \ge r$, si abbia $f^{i+2}(n) = f^i(n).$
> 
> 5. $E$ sia l'insieme di numeri interi $n \ge 2$ che hanno solo esponenti strettamente superiori a $1$ nella loro decomposizione in fattori primi. (a) Per ogni numero intero $a \ge 2$, indicare che esistono numeri interi naturali $\alpha$ e $\beta$ in modo tale che $a = 2\alpha + 3\beta.$ (b) dedurre da questo che se $n$ appartiene a $E$, allora esiste un elemento $m$ di $E$ in modo tale che $f(m) = n.$ (c) Indicare un elemento $m$ di $E$ in modo tale che $f(m) = 2012^{2012}.$ (d) Cosa si può dire dell'inverso di (b)?

[[src_cgen_2012__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_algebra,topic_disuguaglianze,method_disuguaglianze,method_conteggio,method_estremalita,skill_manipolazione_algebrica,skill_stima,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*For a sequence of positive reals where at least half of any initial segment is at least twice the last term, show the sequence tends to 0.*

> Problem 2: A mostly decreasing sequence.
> 
> Let $(u_n)_{n \ge 0}$ be a sequence of strictly positive real numbers such that $u_0 = 1$ and, for every integer $n \ge 1$, at least half of the terms $u_0, u_1, \ldots, u_{n-1}$ are greater than or equal to $2u_n$. Show that $u_n$ tends to $0.$

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]], [[skill_astrazione|Astrazione]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1vIXYHNm7Pie0N6tpc5bYOGp1UUa2qApP/view)


<span class="qlang-split" data-lang="it"></span>


*Per una sequenza di reali positivi in cui almeno la metà di qualsiasi segmento iniziale è almeno il doppio dell'ultimo termine, mostrare la sequenza tende a 0.*

> Problema 2: una sequenza prevalentemente in diminuzione.
> 
> Che $(u_n)_{n \ge 0}$ sia una sequenza di numeri reali rigorosamente positivi in modo tale che $u_0 = 1$ e, per ogni numero intero $n \ge 1$, almeno la metà dei termini $u_0, u_1, \ldots, u_{n-1}$ siano superiori o uguali a $2u_n$. Indicare che $u_n$ tende a $0.$

[[src_cgen_2012__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_probabilita,method_conteggio,method_casi_conteggio,method_estremalita,method_doppio_conteggio,skill_conteggio_sistematico,skill_modellizzazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*A postman visits each of n houses in a row exactly once per trip; count trips, find min and max trip lengths, and the expected length of a random trip.*

> Problem 3: The mailbox rings each time exactly once (and only once).
> 
> A postman must deliver the mail in a single street. This street is composed of a single row of houses regularly spaced and numbered $1, 2, \ldots, n$, where $n$ is an integer greater than or equal to $2$.
> 
> The postman must deliver one letter per house.
> 
> To do this, he starts by leaving on his bicycle at house $1$ and drops off the corresponding letter; then he distributes the other letters to the other houses, and finally returns to house $1$ to pick up his bicycle again.
> 
> He thus carries out a single trip, where the successive numbers of the houses to which he has delivered form a courier route.
> 
> For example, if $n = 5$, a possible trip is $1, 5, 2, 4, 3, 1.$ The total distance traveled, called the length of the trip, then equals $12$ since in this case it equals $|5-1| + |2-5| + |4-2| + |3-4| + |1-3| = 12.$ Another possible trip is $1, 3, 5, 4, 2, 1$, of length $8.$
> 
> 1. How many trips are there?
> 2. (a) Show that every trip has length greater than or equal to $2(n-1)$.
> (b) How many trips of minimal length are there?
> 3. (a) In the case $n = 5$, determine the maximal length of a trip and give an example of a trip of maximal length.
> (b) For an arbitrary $n$, determine the maximal length of a trip.
> 4. One draws a trip at random (all trips being equiprobable). What is the expected value of the length of the trip?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casi_conteggio|Casi e conteggio]], [[method_estremalita|Estremalità]], [[method_doppio_conteggio|Doppio conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1vIXYHNm7Pie0N6tpc5bYOGp1UUa2qApP/view)


<span class="qlang-split" data-lang="it"></span>


*Un postino visita ognuna delle n case in fila esattamente una volta per ogni viaggio; conta i viaggi, trova le lunghezze min e massime del viaggio e la durata attesa di un viaggio casuale.*

> Problema 3: la casella postale suona ogni volta esattamente una volta (e solo una volta).
> 
> Un postino deve consegnare la posta in una sola strada. Questa strada è composta da una singola fila di case regolarmente spaziate e numerate $1, 2, \ldots, n$, dove $n$ è un numero intero maggiore o uguale a $2$.
> 
> Il postino deve consegnare una lettera per casa.
> 
> Per fare questo, inizia a partire in bicicletta a casa $1$ e lascia cadere la lettera corrispondente; poi distribuisce le altre lettere alle altre case, e infine torna a casa $1$ per riprendere la sua bicicletta.
> 
> Egli effettua così un solo viaggio, dove i numeri successivi delle case a cui ha consegnato formano un percorso di corriere.
> 
> Ad esempio, se $n = 5$, un viaggio possibile è $1, 5, 2, 4, 3, 1.$ La distanza totale percorsa, chiamata lunghezza del viaggio, è pari a $12$ poiché in questo caso è uguale a $|5-1| + |2-5| + |4-2| + |3-4| + |1-3| = 12.$ Un altro viaggio possibile è $1, 3, 5, 4, 2, 1$, di lunghezza $8.$
> 
> 1. Quanti viaggi ci sono? 2. a) Indicare che ogni viaggio ha una lunghezza superiore o pari a $2(n-1)$. (b) Quanti viaggi di minima lunghezza ci sono? 3. a) Nel caso $n = 5$, determinare la lunghezza massima di un viaggio e fornire un esempio di un viaggio di lunghezza massima. b) Per un $n$ arbitrario, determinare la lunghezza massima di un viaggio. 4. Uno disegna un viaggio a caso (tutti i viaggi sono equiprobabili). Qual è il valore atteso della lunghezza del viaggio?

[[src_cgen_2012__Q03]]
