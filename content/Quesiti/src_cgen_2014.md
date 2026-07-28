---
title: Concours Général des Lycées 2014 — Matematica
tipo: gara
competition: Concours Général des Lycées 2014 — Matematica
family: concours_generale
year: '2014'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2014"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_algebra,topic_disuguaglianze,method_telescoping,method_disuguaglianze,method_induzione,skill_manipolazione_algebrica,skill_stima,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Geometric stability: a sequence with bounded increments x_{n+1}-q x_n in [0,epsilon], expressed via telescoping, then approximated by geometric sequences for q<1 and q>1.*

> Throughout the problem, $\varepsilon$ and $q$ denote two strictly positive real numbers. We consider a sequence $(x_n)$ of real numbers such that $x_0 > 0$ and, for every natural number $n$,
> $$0 \le x_{n+1} - q\,x_n \le \varepsilon.$$
> 
> \textbf{1.} For every natural number $n$, set $b_n = x_{n+1} - q\,x_n$. Show that, for every integer $n \ge 1$,
> $$x_n = q^n x_0 + q^{n-1} b_0 + q^{n-2} b_1 + \cdots + q\,b_{n-2} + b_{n-1}.$$
> 
> \textbf{2.} In this question, assume $0 < q < 1$.
> 
> \textbf{a.} Show that there exists a geometric sequence $(y_n)$ such that, for every $n \ge 0$,
> $$|y_n - x_n| \le \frac{\varepsilon}{1-q}.$$
> 
> \textbf{b.} Show that there are in fact infinitely many such geometric sequences $(y_n)$.
> 
> \textbf{3.} In this question, assume $q > 1$. For every integer $n \ge 1$, set
> $$u_n = \frac{x_n}{q^n} = x_0 + \frac{b_0}{q} + \cdots + \frac{b_{n-1}}{q^n}.$$
> 
> \textbf{a.} Show that the sequence $(u_n)$ converges. Let $s$ denote its limit.
> 
> \textbf{b.} Show that for every $n \ge 1$, $0 \le s - u_n \le \dfrac{\varepsilon}{q^n(q-1)}$.
> 
> \textbf{c.} Show that there exists a unique geometric sequence $(y_n)$ such that, for every natural number $n$,
> $$|y_n - x_n| \le \frac{\varepsilon}{q-1}.$$

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_telescoping|Telescoping]], [[method_disuguaglianze|Disuguaglianze]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]], [[skill_astrazione|Astrazione]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1obqFZcNocFah5P6ftcXj9ue3NMcS9ZQn/view)


<span class="qlang-split" data-lang="it"></span>


*Stabilità geometrica: una sequenza con incrementi limitati x_{n+1}-q x_n in [0,epsilon], espressa tramite telescopio, successivamente approssimata con sequenze geometriche per q<1 e q>1.*

> In tutto il problema, $\varepsilon$ e $q$ indicano due numeri reali rigorosamente positivi. Consideriamo una sequenza $(x_n)$ di numeri reali come $x_0 > 0$ e, per ogni numero naturale $n$, $$0 \le x_{n+1} - q\,x_n \le \varepsilon.$$
> 
> \textbf{1.} Per ogni numero naturale $n$, imposta $b_n = x_{n+1} - q\,x_n$. Indicare che, per ogni numero intero $n \ge 1$, $$x_n = q^n x_0 + q^{n-1} b_0 + q^{n-2} b_1 + \cdots + q\,b_{n-2} + b_{n-1}.$$
> 
> \textbf{2.} In questa domanda, supponiamo $0 < q < 1$.
> 
> \textbf{a.} Mostra che esiste una sequenza geometrica $(y_n)$ tale che, per ogni $n \ge 0$, $$|y_n - x_n| \le \frac{\varepsilon}{1-q}.$$
> 
> \textbf{b.} Mostrare che ci sono in realtà infinitamente tante simili sequenze geometriche $(y_n)$.
> 
> In questa domanda, supponiamo $q > 1$. Per ogni numero intero $n \ge 1$, imposta $$u_n = \frac{x_n}{q^n} = x_0 + \frac{b_0}{q} + \cdots + \frac{b_{n-1}}{q^n}.$$
> 
> \textbf{a.} Mostra che la sequenza $(u_n)$ converge. Indicare il suo limite $s$.
> 
> \textbf{b.} Mostra che per ogni $n \ge 1$, $0 \le s - u_n \le \dfrac{\varepsilon}{q^n(q-1)}$.
> 
> \textbf{c.} Mostra che esiste una sequenza geometrica unica $(y_n)$ tale che, per ogni numero naturale $n$, $$|y_n - x_n| \le \frac{\varepsilon}{q-1}.$$

[[src_cgen_2014__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_probabilita,topic_combinatoria,method_conteggio,method_casi_conteggio,skill_modellizzazione,skill_conteggio_sistematico,skill_stima"></span>

<div class="qlang-switch" data-default="en"></div>


*Dice/coin game 'Vite, pile': each of k players flips a fair coin until heads (score = number of flips). Find probability a given player wins, probability of a unique winner (and limit as n to infinity), and expected number of winners (and limit).*

> In this problem, $k$ and $n$ are integers greater than or equal to $2$.
> 
> A group of $k$ players takes turns flipping a coin assumed to be fair, the probability of obtaining 'heads' (\textit{pile}) on a single flip being denoted $p$, with $0 < p < 1$.
> 
> Each player flips the coin until 'heads' appears. Thus a player who obtains 'heads' on the first flip scores $1$; a player whose first 'heads' appears on the second flip scores $2$; and in general a player whose first 'heads' appears on the $n$-th flip scores $n$, and so on.
> 
> Once all players have played, each player's score is compared; the winners are the players who obtained the highest score.
> 
> \textbf{1.} Determine the probability that a given player wins.
> 
> \textbf{2.} Determine the probability that there is a unique winner, then the limit of this probability as $n$ tends to infinity.
> 
> \textbf{3.} Determine the expected number of winners, then the limit of this expectation as $n$ tends to infinity.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casi_conteggio|Casi e conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1obqFZcNocFah5P6ftcXj9ue3NMcS9ZQn/view)


<span class="qlang-split" data-lang="it"></span>


*Gioco dice/monete 'Vite, pile': ciascuno dei giocatori k lancia una moneta giusta fino a che non capisce (punteggio = numero di lanci). Trova la probabilità che un determinato giocatore vinca, la probabilità di un vincitore unico (e limite come n all'infinito), e il numero previsto di vincitori (e limite).*

> In questo problema, $k$ e $n$ sono integri superiori o uguali a $2$.
> 
> Un gruppo di giocatori $k$ si alternano per lanciare una moneta presumibilmente giusta, con la probabilità di ottenere "teste" (\textit{pile}) su un singolo lancio indicato $p$, con $0 < p < 1$.
> 
> Ogni giocatore lancia la moneta finché non appaiono le "teste". Pertanto, un giocatore che ottiene "teste" nel primo turno di punteggi $1$; un giocatore la cui prima "teste" appare nel secondo turno di punteggi $2$; e in generale un giocatore la cui prima "teste" appare nel secondo turno di punteggi $n$ $n$, e così via.
> 
> Una volta che tutti i giocatori hanno giocato, il punteggio di ciascun giocatore viene confrontato; i vincitori sono i giocatori che hanno ottenuto il punteggio più alto.
> 
> Determina la probabilità che un determinato giocatore vinca.
> 
> Determinare la probabilità che ci sia un vincitore unico, quindi il limite di questa probabilità come $n$ tende all'infinito.
> 
> Determinare il numero atteso di vincitori, quindi il limite di questa aspettativa come $n$ tende all'infinito.

[[src_cgen_2014__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_casework,method_conteggio,method_fattorizzazione,skill_casework_accurato,skill_riconoscimento_pattern,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="en"></div>


*Digits behind letters: a number d is 'good' for a word of length n if some attribution (letters to distinct digits) is a multiple of d. Determine which d are good vs bad (a bad d has a 'blocker' word with no multiple), with results on 10, 8, 27, 32, primes via Fermat, 9, 18, and divisor relations.*

> A \textbf{word} of length $n$ is a sequence of letters chosen from the 10 letters $A, B, C, D, E, F, G, H, I, J$. For example, $BEC$, $JJCD$, $AFFICHAGE$, $ABCDEFGHIJ$ are words of lengths $3$, $4$, $9$, $10$ respectively.
> 
> An \textbf{attribution} of a word is the number obtained by replacing each letter with a digit, two identical letters being replaced by the same digit and two distinct letters by distinct digits (the leading letter may be replaced by $0$). For example $121 = 11^2$ and $040 = 40$ are attributions of $GAG$, but $555$ and $000$ are not.
> 
> A positive integer $d > 0$ is said to be \textbf{good} for a word if one of its attributions is a multiple of $d$; otherwise the word is a \textbf{blocker} of $d$ (no attribution is a multiple of $d$). A number $d > 0$ that admits a blocker is called \textbf{bad}; a number that admits no blocker is called \textbf{good}.
> 
> \textbf{1.} \textbf{a.} Show that the word $AB$ is a blocker of $d = 100$.
> 
> \textbf{b.} Show that the word $AB$ is not a blocker of any $d$ with at most two digits (i.e. $d \le 99$).
> 
> \textbf{2.} \textbf{a.} Show that $10$ is bad.
> 
> \textbf{b.} Show that $8$ is bad.
> 
> \textbf{c.} Show that the word $AAB$ is a blocker of $27$.
> 
> \textbf{d.} Show that the word $ABBAB$ is a blocker of $32$.
> 
> \textbf{e.} Is a positive divisor of a good number necessarily good? Is a positive divisor of a bad number necessarily bad?
> 
> If there is a strictly positive integer $k$ and a single letter $X$, we denote by $X^k$ the word $XX\ldots X$ formed of $k$ letters $X$.
> 
> \textbf{3.} \textbf{a.} Let $p$ be a prime number greater than or equal to $7$, and let $\omega$ be the word
> $$\omega = A A A^{p-2} B A^{p-2} C A^{p-2} D A^{p-2} E A^{p-2} F A^{p-2} G A^{p-2} H A^{p-2} I A^{p-2} J A^{p-2}.$$
> Show that $\omega$ is a blocker of $p$. (One may use without proof the little theorem of Fermat: if $x$ is an integer not divisible by $p$, then $x^{p-1} - 1$ is divisible by $p$.)
> 
> \textbf{b.} Show that $9$ admits at most $27$ good attributions.
> 
> \textbf{4.} Let $a$ be a word of length $n$ and $\omega$ an attribution of $a$. Denote by $a'$ the attribution obtained from $a$ by a cyclic permutation of the digits: the digits $0,1,2,3,4,5,6,7,8$ are increased by $1$, while the digit $9$ is sent to $0$. Thus the digits $0,1,2,3,4,5,6,7,8,9$ are respectively replaced by $1,2,3,4,5,6,7,8,9,0$. For example, if $n = 5$ and $a = 01789$, then $a' = 12890$. Let $k$ be the number of occurrences of the digit $9$ in the decimal writing of $a$.
> 
> \textbf{a.} If $a$ is congruent to $r$ modulo $9$, to what is $a'$ congruent modulo $9$?
> 
> \textbf{b.} Deduce that if $k$ is not congruent to $n$ modulo $3$, then there exists an attribution of $\omega$ divisible by $3$.
> 
> \textbf{c.} Show that if $k$ is congruent to $n$ modulo $3$ but not modulo $9$, then there exists an attribution of $\omega$ divisible by $9$.
> 
> \textbf{d.} Show that $9$ is bad.
> 
> \textbf{5.} Show that $18$ is bad.
> 
> \textbf{6.} Show that if $\omega$ is a bad number, then it admits an infinity of blockers.
> 
> \textit{For information, one can show that there are exactly $22$ good numbers. These are the positive divisors of the numbers $18$, $24$, $45$, $50$, $60$, $80$.}

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1obqFZcNocFah5P6ftcXj9ue3NMcS9ZQn/view)


<span class="qlang-split" data-lang="it"></span>


*Cifri dietro le lettere: un numero d è "buono" per una parola di lunghezza n se un'attribuzione (le lettere a cifre distinte) è un multiple di d. Determina quali d sono buoni vs cattivi (una cattiva d ha una parola "bloccante" senza più), con risultati su 10, 8, 27, 32, numeri primi attraverso Fermat, 9, 18 e relazioni divisori.*

> Una \textbf{word} di lunghezza $n$ è una sequenza di lettere scelte dalle 10 lettere $A, B, C, D, E, F, G, H, I, J$. Per esempio, $BEC$, $JJCD$, $AFFICHAGE$, $ABCDEFGHIJ$ sono parole di lunghezza $3$, $4$, $9$ e $10$ rispettivamente.
> 
> Una \textbf{attribution} di una parola è il numero ottenuto sostituendo ogni lettera con un numero, due lettere identiche sostituite dalla stessa cifra e due lettere distinte da numeri distinti (la lettera principale può essere sostituita da $0$). Ad esempio $121 = 11^2$ e $040 = 40$ sono attribuzioni di $GAG$, ma $555$ e $000$ non lo sono.
> 
> Un intero positivo $d > 0$ è detto \textbf{good} per una parola se una delle sue attribuzioni è un multiple di $d$; altrimenti la parola è un \textbf{blocker} di $d$ (nessuna attribuzione è un multiple di $d$). Un numero $d > 0$ che ammette un bloccante è chiamato \textbf{bad}; un numero che ammette nessun bloccante è chiamato \textbf{good}.
> 
> \textbf{1.} \textbf{a.} Mostrare che la parola $AB$ è un blocco di $d = 100$.
> 
> \textbf{b.} Mostrare che la parola $AB$ non è un bloccatore di qualsiasi $d$ con al massimo due cifre (cioè $d \le 99$).
> 
> Mostri che$10$è cattivo.
> 
> \textbf{b.} Mostrare che $8$ è cattivo.
> 
> \textbf{c.} Mostra che la parola $AAB$ è un bloccatore di $27$.
> 
> \textbf{d.} Mostra che la parola $ABBAB$ è un bloccante di $32$.
> 
> Un divisore positivo di un numero buono è necessariamente buono? Un divisore positivo di un numero negativo è necessariamente negativo?
> 
> Se c'è un intero rigorosamente positivo $k$ e una singola lettera $X$, indichiamo con $X^k$ la parola $XX\ldots X$ costituita dalle lettere $k$ $X$.
> 
> \textbf{3.} \textbf{a.} Che $p$ sia un numero primo maggiore o uguale a $7$, e che $\omega$ sia la parola $$\omega = A A A^{p-2} B A^{p-2} C A^{p-2} D A^{p-2} E A^{p-2} F A^{p-2} G A^{p-2} H A^{p-2} I A^{p-2} J A^{p-2}.$$ Mostri che $\omega$ è un bloccatore di $p$. (Si può usare senza prova il piccolo teorema di Fermat: se $x$ è un intero non divisibile da $p$, allora $x^{p-1} - 1$ è divisibile da $p$.)
> 
> \textbf{b.} Mostra che $9$ ammette al massimo $27$ buone attribuzioni.
> 
> \textbf{4.} Che $a$ sia una parola di lunghezza $n$ e $\omega$ un'attribuzione di $a$. Denotare con $a'$ l'attribuzione ottenuta da $a$ mediante una permutazione ciclica dei numeri: i numeri $0,1,2,3,4,5,6,7,8$ vengono aumentati di $1$, mentre il numero $9$ viene inviato a $0$. Le cifre $0,1,2,3,4,5,6,7,8,9$ sono quindi sostituite rispettivamente da $1,2,3,4,5,6,7,8,9,0$. Per esempio, se $n = 5$ e $a = 01789$, allora $a' = 12890$. $k$ sia il numero di occasioni della cifra $9$ nella scrittura decimale di $a$.
> 
> Se $a$ è congruente a $r$ modulo $9$, a cosa è $a'$ modulo congruente $9$?
> 
> \textbf{b.} Deduci che se $k$ non è congruente a $n$ modulo $3$, allora esiste un'attribuzione di $\omega$ divisibile da $3$.
> 
> \textbf{c.} Mostra che se $k$ è congruente a $n$ modulo $3$ ma non modulo $9$, allora esiste un'attribuzione di $\omega$ divisibile da $9$.
> 
> \textbf{d.} Mostrare che $9$ è cattivo.
> 
> \textbf{5.} Mostrare che $18$ è cattivo.
> 
> \textbf{6.} Mostrare che se $\omega$ è un numero cattivo, allora ammette un infinito di bloccanti.
> 
> \textit{Per informazioni, si può dimostrare che ci sono esattamente $22$ buoni numeri. Questi sono i divisori positivi dei numeri $18$, $24$, $45$, $50$, $60$, $80$.}

[[src_cgen_2014__Q03]]
