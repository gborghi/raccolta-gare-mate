---
title: IMO 2026 (LXVII International Mathematical Olympiad)
tipo: gara
competition: IMO 2026 (LXVII International Mathematical Olympiad)
family: imo
year: '2026'
level: IMO
---
<div class="atom-reader" data-gara="Quesiti/src_imho_2026"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,method_invarianti,method_fattorizzazione,skill_riconoscimento_pattern,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Blackboard of 2026 integers: gcd and lcm/gcd moves leave a unique M>1*

> There are $2026$ integers greater than $1$ written on a blackboard, not necessarily different. In a move, Confucius chooses two integers $m>1$ and $n>1$ from different places on the blackboard and replaces these two integers with
> $$\gcd(m,n)\qquad\text{and}\qquad \frac{\mathrm{lcm}(m,n)}{\gcd(m,n)}.$$
> He continues to make moves while it is possible to do so.
> 
> (a) Prove that, regardless of the choices of Confucius, after finitely many moves, exactly one integer $M$ on the blackboard is greater than $1$.
> 
> (b) Prove that the value of $M$ does not depend on the choices of Confucius.
> 
> (Note that $\gcd(x,y)$ denotes the greatest common divisor of positive integers $x$ and $y$, and $\mathrm{lcm}(x,y)$ denotes the least common multiple of $x$ and $y$.)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1HOSr8wvlL1_A8tp20DIPaeuu1fTHAVlZ/view)


<div class="qlang-split" data-lang="it"></div>


*Tabellone con 2026 interi: mosse gcd e lcm/gcd lasciano un M>1 unico*

> Sul quaderno nero sono scritti $2026$ numeri interi maggiori di $1$, non necessariamente distinti. In un movimento, Confucio sceglie due numeri $m>1$ e $n>1$ da posizioni diverse sul quaderno e li sostituisce con
> $$\gcd(m,n)\qquad\text{and}\qquad \frac{\mathrm{lcm}(m,n)}{\gcd(m,n)}.$$.
> Prosegue a effettuare mosse finché è possibile farlo.
> 
> (a) Si dimostri che, indipendentemente dalle scelte di Confucio, dopo un numero finito di mosse esattamente un intero $M$ sulla lavagna è maggiore di $1$.
> 
> (b) Si dimostri che il valore di $M$ non dipende dalle scelte di Confucio.
> 
> (Nota che $\gcd(x,y)$ indica il massimo comun divisore degli interi positivi $x$ e $y$, mentre $\mathrm{lcm}(x,y)$ indica il minimo comune multiplo di $x$ e $y$.)

[[Quesiti/src_imho_2026#q01|src_imho_2026__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,method_coordinate,method_trigonometria,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*Circumcentre of AKL equidistant from midpoints M and N*

> Let $ABC$ be a triangle and let points $M$ and $N$ be the midpoints of sides $AB$ and $AC$, respectively. Let points $K$ and $L$ be chosen strictly inside triangles $BMC$ and $BNC$, respectively, such that $K$ lies strictly inside triangle $ABL$ and $L$ lies strictly inside triangle $AKC$. Suppose that
> $$\angle KBA = \angle ACL,\qquad \angle LBK = \angle LNC,\qquad \text{and}\qquad \angle LCK = \angle BMK.$$
> Let $O$ be the circumcentre of triangle $AKL$. Prove that $OM = ON$.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1HOSr8wvlL1_A8tp20DIPaeuu1fTHAVlZ/view)


<div class="qlang-split" data-lang="it"></div>


*Circocentro di AKL equidistante dai punti medi M e N*

> Sia $ABC$ un triangolo e siano i punti $M$ e $N$ i punti medi dei lati $AB$ e $AC$, rispettivamente. Siano i punti $K$ e $L$ scelti strettamente all'interno dei triangoli $BMC$ e $BNC$, rispettivamente, in modo che il punto $K$ giaccia strettamente all'interno del triangolo $ABL$ e il punto $L$ giaccia strettamente all'interno del triangolo $AKC$. Supponiamo che
> $$\angle KBA = \angle ACL,\qquad \angle LBK = \angle LNC,\qquad \text{and}\qquad \angle LCK = \angle BMK.$$
> Sia $O$ il circocentro del triangolo $AKL$. Si dimostri che $OM = ON$.

[[Quesiti/src_imho_2026#q02|src_imho_2026__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_disuguaglianze,method_casework,method_invarianti,skill_astrazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="en"></div>


*Liu and Xiang Yu cut a stick of length 1; largest c Liu can guarantee*

> Let $n$ be a positive integer. Liu Bang and Xiang Yu have a stick of length $1$ and want to divide it between themselves. Liu marks at most $n$ points on the stick, and then Xiang marks at most $n$ points on the stick. The marked points are distinct. Then, the stick is cut at all marked points, creating a number of pieces. Afterwards, they take turns claiming any unclaimed piece of the stick, with Liu going first. Each player's goal is to maximise the total length of their own pieces.
> 
> For each $n$, determine the largest value $c$ such that Liu may guarantee a total length of at least $c$, regardless of Xiang's play.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_casework|Casework]], [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1HOSr8wvlL1_A8tp20DIPaeuu1fTHAVlZ/view)


<div class="qlang-split" data-lang="it"></div>


*Liu e Xiang Yu tagliano un bastoncino di lunghezza 1; massimo c che Liu può garantire*

> Sia $n$ un intero positivo. Liu Bang e Xiang Yu possiedono un bastone di lunghezza $1$ e vogliono dividerlo tra loro. Liu segna al massimo $n$ punti sul bastone, dopodiché Xiang segna al massimo $n$ punti sul bastone. I punti segnati sono tutti distinti. Successivamente, il bastone viene tagliato in corrispondenza di tutti i punti segnati, producendo un certo numero di pezzi. A questo punto, essi si alternano nel prendere uno qualsiasi dei pezzi non ancora presi, con Liu che inizia per primo. Ogni giocatore vuole massimizzare la lunghezza totale dei pezzi che gli appartengono.
> 
> Per ogni $n$, determinare il valore massimo di $c$ tale che Liu possa garantire una lunghezza totale almeno pari a $c$, indipendentemente dalla mossa di Xiang.

[[Quesiti/src_imho_2026#q03|src_imho_2026__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_geometria_piana,topic_combinatoria,method_invarianti,method_casework,skill_ragionamento_geometrico,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Mulan cutting paper triangles until an angle equals theta*

> Shan-Yu and Mulan are playing a game. Let $\theta$ be an angle with $0^\circ < \theta < 180^\circ$ known to both players. Initially, Shan-Yu makes a paper triangle $T$ with measurements of his choice. Then, they repeatedly perform the following steps:
> 
> - If $T$ has at least one angle measuring exactly $\theta$, then the game stops and Mulan wins.
> - Otherwise, Mulan chooses a point $P$ on the perimeter of $T$, different from its three vertices. She then makes a straight cut from $P$ to the opposite vertex of $T$, splitting it into two triangles.
> - Shan-Yu discards one of the two triangles. The remaining triangle becomes the new $T$.
> 
> For which real values of $\theta$ can Mulan guarantee her victory in finitely many steps, no matter how Shan-Yu plays?

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1HOSr8wvlL1_A8tp20DIPaeuu1fTHAVlZ/view)


<div class="qlang-split" data-lang="it"></div>


*Mulan ritaglia triangoli finché un angolo è uguale a theta*

> Shan-Yu e Mulan giocano a un gioco. Sia $\theta$ un angolo con $0^\circ < \theta < 180^\circ$, noto a entrambi i giocatori. All'inizio Shan-Yu costruisce un triangolo di carta $T$ con misure a sua scelta. Poi ripetono più volte i passi seguenti:
> 
> - Se il triangolo $T$ ha almeno un angolo che misura esattamente $\theta$, il gioco termina e Mulan vince.
> - Altrimenti, Mulan sceglie un punto $P$ sul perimetro del triangolo $T$, diverso dai suoi tre vertici. Poi effettua un taglio rettilineo dal punto $P$ al vertice opposto del triangolo $T$, dividendo così il triangolo in due triangoli.
> - Shan-Yu scarta uno dei due triangoli. Il triangolo rimanente diventa il nuovo $T$.
> 
> Per quali valori reali di $\theta$ Mulan può garantire la vittoria in un numero finito di passi, indipendentemente dalla giocata di Shan-Yu?

[[Quesiti/src_imho_2026#q04|src_imho_2026__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_funzionali,topic_disuguaglianze,method_sostituzione,method_disuguaglianze,skill_manipolazione_algebrica,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Positive functions satisfying a two-sided quadratic mean inequality*

> Let $\mathbb{R}_{>0}$ be the set of positive real numbers. Determine all functions $f\colon \mathbb{R}_{>0}\to\mathbb{R}_{>0}$ such that
> $$\frac{x^2 + f(y)^2}{2} \ge \frac{f(x)+y}{2} \ge \sqrt{x f(y)}$$
> for every $x,y\in\mathbb{R}_{>0}$.

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** Sostituzione, [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1HOSr8wvlL1_A8tp20DIPaeuu1fTHAVlZ/view)


<div class="qlang-split" data-lang="it"></div>


*Funzioni positive che soddisfano una disuguaglianza bilaterale per la media quadratica*

> Sia $\mathbb{R}_{>0}$ l'insieme dei numeri reali positivi. Determinare tutte le funzioni $f\colon \mathbb{R}_{>0}\to\mathbb{R}_{>0}$ tali che
> $$\frac{x^2 + f(y)^2}{2} \ge \frac{f(x)+y}{2} \ge \sqrt{x f(y)}$$
> per ogni $x,y\in\mathbb{R}_{>0}$.

[[Quesiti/src_imho_2026#q05|src_imho_2026__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,topic_funzionali,method_invarianti,method_fattorizzazione,skill_riconoscimento_pattern,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Sequence of integers >1 sharing a factor with all predecessors is eventually arithmetic*

> Let $a_1,a_2,a_3,\ldots$ be an infinite sequence of positive integers greater than $1$. Suppose that for all positive integers $n$, the number $a_{n+1}$ is the smallest positive integer greater than $a_n$ such that $\gcd(a_{n+1},a_i)>1$ for every $i=1,2,\ldots,n$. Prove that there exist positive integers $T$ and $L$ such that
> $$a_{n+T}=a_n+L$$
> for every positive integer $n$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1HOSr8wvlL1_A8tp20DIPaeuu1fTHAVlZ/view)


<div class="qlang-split" data-lang="it"></div>


*Successione di interi >1 che condividono un fattore con tutti i precedenti è definitivamente aritmetica*

> Sia $a_1,a_2,a_3,\ldots$ una successione infinita di interi positivi maggiori di $1$. Si supponga che per ogni intero positivo $n$, il numero $a_{n+1}$ sia il più piccolo intero positivo maggiore di $a_n$ tale che $\gcd(a_{n+1},a_i)>1$ per ogni $i=1,2,\ldots,n$. Si dimostri che esistono interi positivi $T$ e $L$ tali che
> $$a_{n+T}=a_n+L$$
> per ogni intero positivo $n$.

[[Quesiti/src_imho_2026#q06|src_imho_2026__Q06]]
