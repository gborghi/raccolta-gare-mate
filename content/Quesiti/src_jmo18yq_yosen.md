---
title: Japan Mathematical Olympiad 2008 — Yosen (Preliminary)
tipo: gara
competition: Japan Mathematical Olympiad 2008 — Yosen (Preliminary)
family: jmo
year: '2008'
level: JMO Yosen
---
<div class="atom-reader" data-gara="Quesiti/src_jmo18yq_yosen"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,method_estremalita,method_casework,skill_conteggio_sistematico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Largest LCM of four distinct one-digit positive integers*

> There are four distinct one-digit positive integers. Find the largest value that can be taken by their least common multiple.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/16UREagT5SatT4rS1Cd1YuLPR7swGJr05/view)


<span class="qlang-split" data-lang="it"></span>


*L'LCM più grande di quattro diversi integri positivi a una cifra*

> Ci sono quattro diversi numeri interi positivi a una cifra. Trova il valore più grande che può essere preso dal loro più piccolo comune multiple.

[[src_jmo18yq_yosen__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,method_coordinate,method_trigonometria,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*Area of triangle from a tangent to the circle on a square side*

> There is a square $ABCD$ with side length $1$. Let $O$ be the circle having $AD$ as a diameter, and take a point $E$ on side $AB$ so that the line $CE$ is tangent to $O$. Find the area of triangle $CBE$.

```tikz
\begin{tikzpicture}[scale=2.2]
\coordinate (A) at (0,1);
\coordinate (B) at (0,0);
\coordinate (C) at (1,0);
\coordinate (D) at (1,1);
\coordinate (O) at (0.5,1);
\coordinate (E) at (0,0.25);
\draw (A)--(B)--(C)--(D)--cycle;
\draw (O) circle (0.5);
\draw (C)--(E);
\foreach \p/\n in {A/{above left},B/{below left},C/{below right},D/{above right},E/{left},O/{above}}{\fill (\p) circle (0.6pt) node[\n]{$\p$};}
\end{tikzpicture}
```

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/16UREagT5SatT4rS1Cd1YuLPR7swGJr05/view)


<span class="qlang-split" data-lang="it"></span>


*L'area del triangolo da una tangente al cerchio su un lato quadrato*

> C'è un quadrato $ABCD$ con lunghezza laterale $1$. Si deve $O$ essere il cerchio con $AD$ come diametro e prendere un punto $E$ sul lato $AB$ in modo che la linea $CE$ sia tangente a $O$. Trova l'area del triangolo $CBE$.

```tikz
\begin{tikzpicture}[scale=2.2]
\coordinate (A) at (0,1);
\coordinate (B) at (0,0);
\coordinate (C) at (1,0);
\coordinate (D) at (1,1);
\coordinate (O) at (0.5,1);
\coordinate (E) at (0,0.25);
\draw (A)--(B)--(C)--(D)--cycle;
\draw (O) circle (0.5);
\draw (C)--(E);
\foreach \p/\n in {A/{above left},B/{below left},C/{below right},D/{above right},E/{left},O/{above}}{\fill (\p) circle (0.6pt) node[\n]{$\p$};}
\end{tikzpicture}
```

[[src_jmo18yq_yosen__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_aritmetica,method_casework,method_conteggio,skill_casework_accurato,skill_lettura_attenta,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="en"></div>


*Count item prices for a minimal-pieces, no-shared-denomination payment*

> Taro goes shopping carrying one $1000$-yen bill, one $100$-yen coin, one $10$-yen coin and one $1$-yen coin (one of each), and he uses all four of them in making the payment for a single item. How many possible values can the price of the item take? Here it is assumed that, among the ways of paying in which the money Taro hands over and the change he receives have no denomination in common, he chooses one so that the number of pieces of money he holds after receiving the change is as small as possible. Also, the change is given using as few pieces as possible, and the change may be $0$ yen.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/16UREagT5SatT4rS1Cd1YuLPR7swGJr05/view)


<span class="qlang-split" data-lang="it"></span>


*Prezzi delle voci per un pagamento a pezzi minimi senza denominazione condivisa*

> Taro va a fare acquisti con una banconota $1000$-yen, una moneta $100$-yen, una moneta $10$-yen e una moneta $1$-yen (una di ciascuna), e le usa tutte e quattro per effettuare il pagamento per un singolo articolo. Quanti valori possibili può assumere il prezzo dell'oggetto? Qui si suppone che, tra i modi di pagamento con cui Taro consegna i soldi e il cambio che riceve non abbiano alcuna denominazione in comune, egli ne scelga una in modo che il numero di monete che detiene dopo aver ricevuto il cambio sia il più piccolo possibile. Inoltre, la variazione viene data utilizzando il minor numero possibile di pezzi, e la variazione può essere $0$ yen.

[[src_jmo18yq_yosen__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,method_fattorizzazione,method_congruenze,method_casework,skill_manipolazione_algebrica,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Positive integers whose restricted divisor sum equals 1000*

> Find all positive integers such that the sum of those of their positive divisors whose remainder upon division by $4$ is not $2$ equals $1000$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Congruenze]], [[method_casework|Casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/16UREagT5SatT4rS1Cd1YuLPR7swGJr05/view)


<span class="qlang-split" data-lang="it"></span>


*Interi positivi la cui somma di divisore limitata è uguale a 1000*

> Trova tutti gli enti positivi in modo tale che la somma di quelli dei loro divisori positivi il cui rimanente dopo la divisione per $4$ non è $2$ è uguale a $1000$.

[[src_jmo18yq_yosen__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_probabilita,topic_combinatoria,method_casework,method_conteggio,skill_conteggio_sistematico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Probability each i-th card is at least i in a random row*

> Five cards bearing the numbers $2, 3, 4, 5, 6$ (one number per card, five cards in total) are arranged in a row at random. Find the probability that, for every $i = 1, 2, 3, 4, 5$, the number written on the $i$-th card from the left is at least $i$.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/16UREagT5SatT4rS1Cd1YuLPR7swGJr05/view)


<span class="qlang-split" data-lang="it"></span>


*Probabilità che ogni i-th carta sia almeno i in una riga casuale*

> Cinque carte con i numeri $2, 3, 4, 5, 6$ (un numero per carta, cinque carte in totale) sono disposte in fila a caso. Trova la probabilità che, per ogni $i = 1, 2, 3, 4, 5$, il numero scritto sulla carta $i$-da sinistra sia almeno $i$.

[[src_jmo18yq_yosen__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,method_casework,method_fattorizzazione,skill_riconoscimento_pattern,skill_casework_accurato,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*Smallest c obtained by deleting a digit 6 from two equal-length multiples*

> For a positive integer $n$, write its decimal representation as $n_{(10)}$. Pairwise distinct positive integers $a, b, c$ satisfy all of the following conditions:
> \begin{itemize}
> \item $c_{(10)}$ coincides with the number obtained from $a_{(10)}$ by deleting one digit $6$.
> \item $c_{(10)}$ coincides with the number obtained from $b_{(10)}$ by deleting one digit $6$.
> \item $a$ and $b$ have the same number of digits, and $a$ is a multiple of $b$.
> \end{itemize}
> Find the smallest possible value of $c$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/16UREagT5SatT4rS1Cd1YuLPR7swGJr05/view)


<span class="qlang-split" data-lang="it"></span>


*C più piccolo ottenuto eliminando una cifra 6 da due moltipli di lunghezza uguale*

> Per un intero positivo $n$, scrivere la sua rappresentazione decimale come $n_{(10)}$. I numeri interi positivi $a, b, c$ separati in coppia soddisfano tutte le seguenti condizioni: \begin{itemize} \item $c_{(10)}$ coincide con il numero ottenuto da $a_{(10)}$ eliminando una cifra $6$. Il punto $c_{(10)}$ coincide con il numero ottenuto da $b_{(10)}$ eliminando una cifra $6$. \item $a$ e $b$ hanno lo stesso numero di cifre, e $a$ è un multiple di $b$. \end{itemize} Trova il minimo possibile valore di $c$.

[[src_jmo18yq_yosen__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_aritmetica,topic_combinatoria,method_casework,method_conteggio,skill_stima,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="en"></div>


*Number of possible leading three-digit blocks of six-digit squares*

> How many values are possible in total for the top three digits (the leading three-digit block) of a six-digit perfect square?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_stima|Stima]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/16UREagT5SatT4rS1Cd1YuLPR7swGJr05/view)


<span class="qlang-split" data-lang="it"></span>


*Numero di possibili blocchi a tre cifre di quadrato a sei cifre di testa*

> Quanti valori sono possibili complessivamente per le prime tre cifre (il primo blocco a tre cifre) di un quadrato perfetto a sei cifre?

[[src_jmo18yq_yosen__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_probabilita,topic_combinatoria,method_casework,method_ricorsione,method_conteggio,skill_modellizzazione,skill_casework_accurato,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Expected number of tails-up coins after a flipping process*

> Eight coins are arranged in a row, all facing heads up. We repeatedly perform the following: choose one coin uniformly at random from among those satisfying the condition below, and flip it over.
> Condition: the chosen coin has no tails-up coin anywhere to its right, or it has no heads-up coin anywhere to its left.
> We continue this operation until there is no coin satisfying the condition. Find the expected number of coins that are facing tails up at that moment.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_ricorsione|Ricorsione]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/16UREagT5SatT4rS1Cd1YuLPR7swGJr05/view)


<span class="qlang-split" data-lang="it"></span>


*Numero atteso di monete a coda dopo un processo di voltaggio*

> Otto monete sono disposte in fila, tutte rivolte a testa in su. Noi facciamo ripetutamente quanto segue: scegliamo uniformemente una moneta a caso tra quelle che soddisfano la condizione di seguito, e la voltiamo. Condizione: la moneta scelta non ha monete a destra, o non ha monete a sinistra. Continueremo questa operazione finché non ci sarà una moneta che soddisfi la condizione. Trova il numero atteso di monete che sono rivolte verso l'alto in quel momento.

[[src_jmo18yq_yosen__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_algebra,method_estremalita,method_casework,method_induzione,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Minimum sum of a recursively constrained real sequence*

> There are $2008$ real numbers $x_1, x_2, \ldots, x_{2008}$ with $|x_1| = 999$, and for every integer $n$ with $2 \le n \le 2008$ the relation $|x_n| = |x_{n-1} + 1|$ holds. Find the smallest possible value of $x_1 + x_2 + \cdots + x_{2008}$.

**Topic:** [[topic_algebra|Algebra]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/16UREagT5SatT4rS1Cd1YuLPR7swGJr05/view)


<span class="qlang-split" data-lang="it"></span>


*La somma minima di una sequenza reale con vincoli ricorsivi*

> Ci sono $2008$ numeri reali $x_1, x_2, \ldots, x_{2008}$ con $|x_1| = 999$, e per ogni numero intero $n$ con $2 \le n \le 2008$ la relazione $|x_n| = |x_{n-1} + 1|$ mantiene. Trova il minimo valore possibile di $x_1 + x_2 + \cdots + x_{2008}$.

[[src_jmo18yq_yosen__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_combinatoria,method_casework,method_conteggio,method_simmetria,skill_conteggio_sistematico,skill_modellizzazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Count seat configurations enabling a complete circular gift swap*

> $2008$ boys and $2008$ girls gather to do a present exchange. Each boy prepares a bouquet and each girl prepares a chocolate as a present, and everyone sits on chairs arranged in a circle, all facing inward. They then repeat the action "everyone simultaneously passes the present they are holding to the person on their immediate right" some number of times, after which it happens that every boy is holding a chocolate and every girl is holding a bouquet. How many configurations are possible for the set of chairs occupied by the boys?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/16UREagT5SatT4rS1Cd1YuLPR7swGJr05/view)


<span class="qlang-split" data-lang="it"></span>


*Configurazioni del sedile da contare che consentono uno scambio completo di regali circolari*

> I ragazzi e le ragazze si riuniscono per fare uno scambio presente. Ogni ragazzo prepara un bouquet e ogni ragazza prepara un cioccolato come regalo, e tutti si siedono su sedie disposte in cerchio, tutte rivolte verso l'interno. Ripetono poi l'azione "ogni persona trasmette contemporaneamente il regalo che tiene alla persona di sua destra immediata" un certo numero di volte, dopo di che succede che ogni ragazzo tiene un cioccolato e ogni ragazza tiene un bouquet. Quante configurazioni sono possibili per l'insieme delle sedie occupate dai ragazzi?

[[src_jmo18yq_yosen__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_geometria_piana,method_coordinate,method_trigonometria,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*Area of a convex quadrilateral from sides and diagonal-midpoint distance*

> A convex quadrilateral $ABCD$ satisfies $AB = BC = 2$, $CD = 2\sqrt{3}$, $DA = 2\sqrt{5}$. Also, letting $M$ and $N$ be the midpoints of $AC$ and $BD$ respectively, we have $MN = \sqrt{2}$. Find the area of quadrilateral $ABCD$. Here, $XY$ denotes the length of the segment $XY$.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/16UREagT5SatT4rS1Cd1YuLPR7swGJr05/view)


<span class="qlang-split" data-lang="it"></span>


*L'area di un quadrilaterale convesso dai lati e dalla distanza diagonale dal punto medio*

> Un quadrilaterale converso $ABCD$ soddisfa $AB = BC = 2$, $CD = 2\sqrt{3}$, $DA = 2\sqrt{5}$. Inoltre, lasciando che $M$ e $N$ siano i punti medi di $AC$ e $BD$ rispettivamente, abbiamo $MN = \sqrt{2}$. Trova l'area del quadrilaterale $ABCD$. Qui $XY$ indica la lunghezza del segmento $XY$.

[[src_jmo18yq_yosen__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_algebra,topic_combinatoria,method_estremalita,method_casework,skill_manipolazione_algebrica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Maximize the sum of prefix products of a tuple summing to 2008*

> A tuple of positive integers $(n, a_1, a_2, \ldots, a_n)$ satisfies $a_1 + a_2 + \cdots + a_n = 2008$. Setting $A_k = a_1 a_2 \cdots a_k$, find the largest possible value of $A_1 + A_2 + \cdots + A_n$.

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/16UREagT5SatT4rS1Cd1YuLPR7swGJr05/view)


<span class="qlang-split" data-lang="it"></span>


*Maximizzare la somma dei prodotti prefissi di una somma tupla a 2008*

> Un tuple di integri positivi $(n, a_1, a_2, \ldots, a_n)$ soddisfa $a_1 + a_2 + \cdots + a_n = 2008$. Impostando $A_k = a_1 a_2 \cdots a_k$, si trova il valore più grande possibile di $A_1 + A_2 + \cdots + A_n$.

[[src_jmo18yq_yosen__Q12]]
