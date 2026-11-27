---
title: Olimpíada Brasileira de Matemática 2024 — Nível 1 — Fase x
tipo: gara
competition: Olimpíada Brasileira de Matemática 2024 — Nível 1 — Fase x
family: obm
year: '2024'
level: OBM Nível 1
---
<div class="atom-reader" data-gara="Quesiti/src_obm_2024_n1_fx"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,method_casework,method_estremalita,skill_lettura_attenta,skill_conteggio_sistematico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="pt"></div>


*Special numbers: digit-sum supera condition, find smallest exceeding 2024*

> Uma potência de 2 é um número da forma $2^k$ em que $k$ é um inteiro não negativo. Por exemplo, as três menores potências de 2 são $2^0 = 1$, $2^1 = 2$ e $2^2 = 4$. Um número é chamado especial quando a soma dos seus algarismos é uma potência de 2. Por exemplo, 2024 é especial, pois $2 + 0 + 2 + 4 = 8 = 2^3$. Dizemos que um número supera outro quando o primeiro é maior que o segundo e a soma dos algarismos do primeiro é maior que a soma dos algarismos do segundo. Por exemplo, 2029 supera 2024, pois $2029 > 2024$ e $2 + 0 + 2 + 9 > 2 + 0 + 2 + 4$.
>
> a) Qual é o menor inteiro positivo que é especial e supera 2024?
>
> b) Qual é o menor inteiro positivo que é especial e supera a resposta correta do item anterior?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1SMFA1YxpKz5Gw3k7ra45Thbg-GPJnX_8/view)


<div class="qlang-split" data-lang="it"></div>


*Numeri speciali: la somma delle cifre supera la condizione; trovare il più piccolo che superi 2024*

> Una potenza di 2 è un numero della forma $2^k$, dove $k$ è un intero non negativo. Ad esempio, le tre potenze di 2 più piccole sono $2^0 = 1$, $2^1 = 2$ e $2^2 = 4$. Un numero viene definito potenza di 2 se è una potenza di 2. Ad esempio, 2024 è speciale, perché $2^0 + 2 + 0 + 2 + 4 = 8 = 2^3$. Diciamo che un numero $A$ \emph{supera} (batte) un altro quando il primo è maggiore del secondo e la somma delle cifre del primo è maggiore della somma delle cifre del secondo. Ad esempio, 2029 batte 2024, perché $2029 > 2024$ e $2 + 0 + 2 + 9 = 13 > 2 + 0 + 2 + 4 = 8$.
>
> a) Qual è il più piccolo numero intero positivo che sia speciale e superi 2024?
>
> b) Qual è il più piccolo intero positivo che sia speciale e superi la risposta corretta al quesito precedente?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]



<div class="qlang-split" data-lang="en"></div>


*Special numbers: digit-sum supera condition, find smallest exceeding 2024*

> A power of 2 is a number of the form $2^k$ where $k$ is a non-negative integer. For example, the three smallest powers of 2 are $2^0 = 1$, $2^1 = 2$ and $2^2 = 4$. A number is called a power of 2 if it is a power of 2. For example, 2024 is special, because $2^0 + 2 + 0 + 2 + 4 = 8 = 2^3$. We say that a number $A$ \emph{supera} (beats) another when the first is greater than the second and the sum of the digits of the first is greater than the sum of the digits of the second. For example, 2029 beats 2024, because $2029 > 2024$ and $2 + 0 + 2 + 9 = 13 > 2 + 0 + 2 + 4 = 8$.
> 
> a) What is the smallest positive integer that is special and beats 2024?
> 
> b) What is the smallest positive integer that is special and beats the correct answer to the previous item?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1SMFA1YxpKz5Gw3k7ra45Thbg-GPJnX_8/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,topic_logica,method_casework,method_conteggio,skill_conteggio_sistematico,skill_ragionamento_geometrico,skill_casework_accurato,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="pt"></div>


*Chess pieces (knight and rook) on 3x3 board, complete configurations*

> Nesse problema usaremos algumas peças do jogo de xadrez.
>
> - O cavalo (C) é uma peça que ataca quadrados que estão a um movimento em L da sua casa atual. Esse movimento percorre dois quadrados numa direção e um quadrado na direção perpendicular. Uma propriedade importante é que o cavalo consegue pular peças, ou seja, ele pode atacar uma casa mesmo que existam peças no caminho. Veja a primeira figura abaixo em que temos um cavalo no canto inferior esquerdo que ataca 2 quadradinhos (•).
>
> - A torre (T) é uma peça que ataca todos os quadradinhos que estão na mesma linha ou na mesma coluna. Diferentemente do cavalo, a torre não pode pular peças. Na segunda figura a seguir, temos uma torre atacando 4 quadradinhos (•).
>
> Ao colocar algumas peças de xadrez num tabuleiro $3 \times 3$, dizemos que essa configuração é completa quando cada um dos 9 quadradinhos está ocupado por exatamente uma peça ou está sendo atacado por pelo menos uma das peças. Não é permitido colocar mais de uma peça em um mesmo quadradinho.
>
> No primeiro exemplo a seguir, temos uma configuração completa com 3 torres. No segundo, uma configuração que não é completa usando 3 torres.
>
> a) Qual é o número mínimo de cavalos necessários para fazer uma configuração completa em um tabuleiro $3 \times 3$ apenas com cavalos? Lembre-se de mostrar um exemplo com esse número mínimo de cavalos e demonstrar que não existe configuração completa com menos cavalos.
>
> b) Quantas configurações completas diferentes existem em um tabuleiro $3 \times 3$ usando apenas uma torre e dois cavalos? Configurações obtidas com rotações ou reflexões devem ser consideradas diferentes. Por exemplo, as quatro configurações a seguir são consideradas todas distintas.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1SMFA1YxpKz5Gw3k7ra45Thbg-GPJnX_8/view)


<div class="qlang-split" data-lang="it"></div>


*Pezzi degli scacchi (cavallo e torre) su una scacchiera 3x3, configurazioni complete*

> In questo problema utilizziamo alcuni pezzi del gioco degli scacchi.
>
> - Il \emph{cavallo} (C) è un pezzo che attacca le case che si trovano a 1 mossa in una direzione e a 1 casa nella direzione perpendicolare. Una proprietà importante è che il cavallo può saltare sopra i pezzi, cioè può attaccare una casa anche se tra esso e la casa ci sono dei pezzi. Si veda la prima figura qui sotto: abbiamo un cavallo nell'angolo in basso a sinistra che attacca esattamente 2 case ($\bullet$).
>
> - La \emph{torre} (T) è un pezzo che attacca tutte le case che si trovano sulla stessa traversa o sulla stessa colonna di essa. A differenza del cavallo, la torre non può saltare sopra i pezzi. Nella seconda figura qui sotto, abbiamo una torre che attacca 4 case ($\bullet$).
>
> Quando si posizionano alcuni pezzi degli scacchi su una scacchiera $3 \times 3$, si dice che questa configurazione è \emph{completa} quando ciascuna delle 9 caselle è occupata da esattamente un pezzo oppure è attaccata da almeno uno dei pezzi. Non è consentito posizionare più di un pezzo sulla stessa casella.
>
> Nel primo esempio qui sotto, una configurazione completa con 3 torri. Nel secondo, una configurazione non completa con 3 torri.
>
> a) Qual è il numero minimo di cavalli necessari per realizzare una configurazione completa su una scacchiera $3 \times 3$ utilizzando soltanto cavalli? Ricorda di mostrare un esempio con questo numero minimo di cavalli e di dimostrare che non esiste alcuna configurazione completa con un numero inferiore di cavalli.
>
> b) Quante configurazioni complete distinte esistono su una scacchiera $3 \times 3$ utilizzando esattamente una torre e due cavalli? Le configurazioni che si ottengono l'una dall'altra mediante rotazioni o riflessioni sono considerate diverse. Ad esempio, le quattro configurazioni mostrate di seguito sono tutte considerate distinte.

![[src_obm_2024_n1_fx__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]



<div class="qlang-split" data-lang="en"></div>


*Chess pieces (knight and rook) on 3x3 board, complete configurations*

> In this problem we use some pieces from the game of chess.
> 
> - The \emph{knight} (C) is a piece that attacks squares that are 1 move in one direction and 1 square in the perpendicular direction. An important property is that the knight can jump over pieces, that is, it can attack a square even if there are pieces between it and the square. See the first figure below: we have a knight in the bottom-left corner that attacks exactly 2 squares ($\bullet$).
> 
> - The \emph{rook} (T) is a piece that attacks all squares on the same row or column as it. Unlike the knight, the rook cannot jump over pieces. In the second figure below, we have a rook attacking 4 squares ($\bullet$).
> 
> When placing some chess pieces on a $3 \times 3$ board, we say this configuration is \emph{complete} when each of the 9 squares is occupied by exactly one piece or is being attacked by at least one of the pieces. It is not allowed to place more than one piece on the same square.
> 
> In the first example below, a complete configuration with 3 towers. In the second, a configuration that is not complete using 3 towers.
> 
> a) What is the minimum number of knights needed to make a complete configuration on a $3 \times 3$ board using only knights? Remember to show an example with this minimum number of knights and to demonstrate that there is no complete configuration with fewer knights.
> 
> b) How many different complete configurations exist on a $3 \times 3$ board using exactly one rook and two knights? Configurations obtained from each other by rotations or reflections are considered different. For example, the four configurations shown below are all considered distinct.

![[src_obm_2024_n1_fx__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1SMFA1YxpKz5Gw3k7ra45Thbg-GPJnX_8/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,topic_aritmetica,method_coordinate,method_casework,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="pt"></div>


*Regular octagon with midpoints and intersections, find segment lengths and squares*

> Na figura a seguir, $ABCDEFGH$ é um octógono regular de lado 6 cm e centro $O$. Os pontos $M$ e $N$ são os pontos médios de $AB$ e $CD$, respectivamente. O ponto $T$ é a interseção das retas $AB$ e $CD$. Deste modo, $OMTN$ é um quadrado. Além disso, os comprimentos de $BP$ e $CQ$ são iguais a 5 cm. Sabe-se que um octógono regular tem ângulos internos de medida $135^\circ$ e lados todos de mesma medida.
>
> a) Determine a medida do segmento $MP$.
>
> b) Determine o quadrado da medida do segmento $BT$, ou seja, $BT^2$.
>
> c) Determine o quadrado da medida do segmento $PQ$, ou seja, $PQ^2$.
>
> Nesse problema, você pode querer utilizar o Teorema de Pitágoras: em todo triângulo retângulo com lados $a$ e $b$ formando ângulo de $90^\circ$ (catetos) e lado $c$ oposto ao ângulo de $90^\circ$ (hipotenusa), vale a relação $a^2 + b^2 = c^2$.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1SMFA1YxpKz5Gw3k7ra45Thbg-GPJnX_8/view)


<div class="qlang-split" data-lang="it"></div>


*Ottagono regolare con punti medi e intersezioni: trovare le lunghezze dei segmenti e i quadrati*

> Nella figura sottostante, $ABCDEFGH$ è un ottagono regolare con lato di 6 cm. I punti $M$ e $N$ sono rispettivamente i punti medi di $AB$ e $CD$. Il punto $T$ è l'intersezione delle rette $AB$ e $CD$. In questo modo, $OMTN$ è un quadrato. Inoltre, le lunghezze di $BP$ e $CQ$ sono entrambe di 5 cm. Si sa che un ottagono regolare ha angoli interni di $135^\circ$ e tutti i lati di uguale lunghezza.
>
> a) Determina la lunghezza del segmento $MP$.
>
> b) Determina il quadrato della lunghezza del segmento $BT$, cioè $BT^2$.
>
> c) Determina il quadrato della lunghezza del segmento $PQ$, cioè $PQ^2$.
>
> \emph{In questo problema, potresti voler utilizzare il teorema di Pitagora: in un triangolo rettangolo con i cateti $a$ e $b$ e l'ipotenusa $c$ (il lato opposto all'angolo $90^\circ$), vale la relazione $a^2 + b^2 = c^2$.}

![[src_obm_2024_n1_fx__Q03.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria]], [[Aritmetica e Teoria dei Numeri]]



<div class="qlang-split" data-lang="en"></div>


*Regular octagon with midpoints and intersections, find segment lengths and squares*

> In the figure below, $ABCDEFGH$ is a regular octagon with side 6 cm. The points $M$ and $N$ are the midpoints of $AB$ and $CD$, respectively. The point $T$ is the intersection of lines $AB$ and $CD$. In this way, $OMTN$ is a square. Furthermore, the lengths of $BP$ and $CQ$ are both 5 cm. It is known that a regular octagon has interior angles of $135^\circ$ and all sides of equal length.
> 
> a) Determine the length of segment $MP$.
> 
> b) Determine the square of the length of segment $BT$, that is, $BT^2$.
> 
> c) Determine the square of the length of segment $PQ$, that is, $PQ^2$.
> 
> \emph{In this problem, you may wish to use the Pythagorean Theorem: in a right triangle with legs $a$ and $b$ and hypotenuse $c$ (the side opposite the $90^\circ$ angle), the relation $a^2 + b^2 = c^2$ holds.}

![[src_obm_2024_n1_fx__Q03.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1SMFA1YxpKz5Gw3k7ra45Thbg-GPJnX_8/view)



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,topic_algebra,topic_funzionali,method_fattorizzazione,method_congruenze,method_ricorsione,skill_riconoscimento_pattern,skill_manipolazione_algebrica,skill_ragionamento_geometrico,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="pt"></div>


*Sequence built by repeatedly replacing largest prime factor; properties and initial term*

> Considere uma sequência cujo primeiro termo é um inteiro positivo dado $N > 1$. Considere a fatoração de $N$ em primos. Se $N$ é uma potência de 2, a sequência é formada por um único termo: $N$. Caso contrário, o segundo termo da sequência é obtido trocando o maior fator primo $p$ de $N$ por $p + 1$ na fatoração em primos. Se o novo número não é uma potência de 2, repetimos o mesmo procedimento com ele, lembrando de fatorá-lo novamente em primos. Caso contrário, a sequência numérica termina. E assim sucessivamente.
>
> Por exemplo, se o primeiro termo da sequência é $N = 300 = 2^2 \cdot 3 \cdot 5^2$, como o seu maior fator primo é $p = 5$, o segundo termo é $2^2 \cdot 3 \cdot (5 + 1)^2 = 2^4 \cdot 3^3$. Repetindo o procedimento, o maior fator primo do segundo termo é $p = 3$ e então o terceiro termo é $2^4 \cdot (3 + 1)^3 = 2^{10}$. Como obtivemos uma potência de 2, a sequência tem 3 termos: $2^2 \cdot 3 \cdot 5^2$, $2^4 \cdot 3^3$ e $2^{10}$.
>
> a) Quantos termos tem a sequência cujo primeiro termo é $N = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 \cdot 17 \cdot 19 \cdot 23$?
>
> b) Mostre que se um fator primo $p$ deixa resto 1 na divisão por 3, então $\frac{p+1}{2}$ é um número inteiro que também deixa resto 1 na divisão por 3.
>
> c) Apresente um termo inicial $N$ menor do que 1.000.000 (um milhão) tal que a sequência iniciada por $N$ tem exatamente 11 termos.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Congruenze]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1SMFA1YxpKz5Gw3k7ra45Thbg-GPJnX_8/view)


<div class="qlang-split" data-lang="it"></div>


*Successione costruita sostituendo ripetutamente il più grande fattore primo; proprietà e termine iniziale*

> Si consideri una successione il cui primo termine è un numero intero positivo $N > 1$. Si consideri la scomposizione in fattori primi di $N$. Se $N$ è una potenza di 2, la successione è costituita da un unico termine: $N$. Altrimenti, il secondo termine della successione si ottiene sostituendo, nella scomposizione in fattori primi di $N$, il più grande fattore primo $p$ con $p + 1$. Se il numero risultante non è una potenza di 2, si ripete lo stesso procedimento con esso: si sostituisce il più grande fattore primo con il suo valore aumentato di 1. Se il numero risultante è una potenza di 2, la successione numerica termina. E così via, in successione.
>
> Ad esempio, se il primo termine della successione è $N = 300 = 2^2 \cdot 3 \cdot 5^2$, poiché il più grande fattore primo è $p = 5$, il secondo termine è $2^2 \cdot 3 \cdot (5+1)^2 = 2^2 \cdot 3 \cdot 6^2 = 2^4 \cdot 3^3$. Ripetendo il processo, il più grande fattore primo è ora $p = 3$, quindi il terzo termine è $2^4 \cdot (3+1)^3 = 2^4 \cdot 4^3 = 2^4 \cdot 2^6 = 2^{10}$. Poiché $2^{10}$ è una potenza di 2, la successione ha 3 termini: $2^2 \cdot 3 \cdot 5^2$, $2^4 \cdot 3^3$, $2^{10}$.
>
> a) Quali sono i termini della successione quando $N = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 \cdot 17 \cdot 19 \cdot 23$?
>
> b) Dimostrare che, se un numero primo $p$ lascia resto 1 alla divisione per 3, allora $\frac{p+1}{3}$ è un numero intero positivo anch'esso divisibile per 3.
>
> c) Trova un valore iniziale $N$ minore di $1{,}000{,}000$ (un milione) tale che la successione che parte da $N$ abbia esattamente 10 termini.


**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Congruenze]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Sequence built by repeatedly replacing largest prime factor; properties and initial term*

> Consider a sequence whose first term is a positive integer $N > 1$. Consider the prime factorization of $N$ into primes. If $N$ is a power of 2, the sequence consists of a single term: $N$. Otherwise, the second term of the sequence is obtained by replacing the largest prime factor $p$ of $N$ by $p + 1$ in the factorization. If the resulting number is not a power of 2, repeat the same process with it: replace the largest prime factor by its value plus 1. If the resulting number is a power of 2, the numerical sequence ends. And so on successively.
> 
> For example, if the first term of the sequence is $N = 300 = 2^2 \cdot 3 \cdot 5^2$, since the largest prime factor is $p = 5$, the second term is $2^2 \cdot 3 \cdot (5+1)^2 = 2^2 \cdot 3 \cdot 6^2 = 2^4 \cdot 3^3$. Repeating the process, the largest prime factor is now $p = 3$, so the third term is $2^4 \cdot (3+1)^3 = 2^4 \cdot 4^3 = 2^4 \cdot 2^6 = 2^{10}$. Since $2^{10}$ is a power of 2, the sequence has 3 terms: $2^2 \cdot 3 \cdot 5^2$, $2^4 \cdot 3^3$, $2^{10}$.
> 
> a) What are the terms of the sequence when $N = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 \cdot 17 \cdot 19 \cdot 23$?
> 
> b) Show that if a prime $p$ leaves remainder 1 when divided by 3, then $\frac{p+1}{3}$ is a positive integer that is also divisible by 3.
> 
> c) Find an initial value $N$ less than $1{,}000{,}000$ (one million) such that the sequence starting from $N$ has exactly 10 terms.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Congruenze]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1SMFA1YxpKz5Gw3k7ra45Thbg-GPJnX_8/view)



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,topic_aritmetica,method_casework,method_estremalita,method_conteggio,skill_modellizzazione,skill_conteggio_sistematico,skill_stima,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="pt"></div>


*Six-team football championship, find minimum possible highest score*

> Um campeonato é realizado entre seis times de futebol, em que cada um joga com cada um dos outros exatamente uma vez. Em uma partida de futebol, o vencedor ganha três pontos e o perdedor, zero ponto; caso a partida termine empatada, os dois times ganham um ponto. Sabe-se que, no final do campeonato, os seis times tiveram pontuações diferentes. Qual é o menor valor possível da quantidade de pontos do time que fez mais pontos?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1SMFA1YxpKz5Gw3k7ra45Thbg-GPJnX_8/view)


<div class="qlang-split" data-lang="it"></div>


*Campionato di calcio a sei squadre: trova il punteggio massimo minimo possibile*

> Un campionato si disputa tra sei squadre di calcio, e ciascuna squadra affronta ciascuna delle altre cinque esattamente una volta. La vincitrice di ogni partita ottiene 3 punti, la sconfitta 0 punti; in caso di pareggio, entrambe le squadre ottengono 1 punto. Si sa che, al termine del campionato, i totali di punti delle sei squadre erano tutti diversi tra loro. Qual è il valore minimo possibile del numero di punti della squadra con il maggior numero di punti?


**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]


<div class="qlang-split" data-lang="en"></div>


*Six-team football championship, find minimum possible highest score*

> A championship is played among six football teams, with each team playing each of the other five teams exactly once. The winner of each match earns 3 points and the loser earns 0 points; if the match ends in a draw, both teams earn 1 point. It is known that, at the end of the championship, the six teams had pairwise different point totals. What is the smallest possible value for the number of points of the team with the most points?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1SMFA1YxpKz5Gw3k7ra45Thbg-GPJnX_8/view)
