---
title: Concours Général des Lycées 2016 — Matematica
tipo: gara
competition: Concours Général des Lycées 2016 — Matematica
family: concours_generale
year: '2016'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2016"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,topic_algebra,method_congruenze,method_disuguaglianze,method_fattorizzazione,method_conteggio,skill_manipolazione_algebrica,skill_lettura_attenta,skill_riconoscimento_pattern,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="fr"></div>


*Sums of cubes: study of the sets S, S_d, S_i of integers expressible as sums of cubes of (distinct, distinct odd) positive integers, building arbitrarily long arithmetic progressions inside S.*

> Si $n$ est un entier, on appelle cube de $n$ l'entier $n^3$.
>
> Dans tout le problème, on note :
>
> - $S$ l'ensemble des entiers strictement positifs qui peuvent se décomposer en une somme de cubes d'entiers strictement positifs deux à deux distincts ;
> - $S_0$ l'ensemble des entiers strictement positifs qui peuvent se décomposer en une somme de cubes d'entiers pairs strictement positifs deux à deux distincts ;
> - $S_1$ l'ensemble des entiers strictement positifs qui peuvent se décomposer en une somme de cubes d'entiers impairs strictement positifs deux à deux distincts.
>
> Par exemple, $8$ et $190$ sont dans $S$ car $8 = 2^3$ et $190 = 1^3 + 4^3 + 5^3$ ; $216$ et $1072$ sont dans $S_0$ car $216 = 6^3$ et $1072 = 2^3 + 4^3 + 10^3$ ; $125$ et $2568$ sont dans $S_1$ car $125 = 5^3$ et $2568 = 1^3 + 3^3 + 7^3 + 13^3$.
>
> L'objectif du problème est de démontrer que tout entier suffisamment grand appartient à $S$.
>
> **1.** Montrer que $2016$ appartient à $S_0$.
>
> **2. a.** Montrer que, pour tout réel $x \geqslant 5$, on a $(2x + 1)^3 \leqslant 2(2x - 1)^3$.
>
> **b.** Soit $k$ un entier supérieur ou égal à $5$. Montrer, pour tout entier $p \geqslant k$,
> $$(2p + 1)^3 \leqslant (2k - 1)^3 + \sum_{j=k}^{p} (2j - 1)^3$$
> où on rappelle que $\sum_{j=k}^{p} (2j - 1)^3$ désigne la somme $(2k - 1)^3 + (2k + 1)^3 + \cdots + (2p - 1)^3$.
>
> On rappelle que si $t$, $u$ et $v$ sont des entiers, la notation $t \equiv u \,(v)$ signifie que $v$ divise $u - t$.
>
> **3.** Montrer qu'il existe $288$ entiers $s_1, \ldots, s_{288}$ appartenant à $S_1$ tels que, pour tout $i$ dans $\{1, \ldots, 288\}$, $s_i \equiv i \,[288]$.
>
> Dans la suite du problème, on fixe des entiers $s_1, \ldots, s_{288}$ appartenant à $S_1$ tels que $s_i \equiv i \,[288]$ pour tout $i$, et on note $m$ le plus grand des nombres $s_i$ :
> $$m = \max(s_1, s_2, \ldots, s_{288}).$$
>
> On rappelle que $n$ réels $u_1, \ldots, u_n$ sont dits en progression arithmétique de raison $r$ si $u_{i+1} - u_i = r$ pour tout entier $i$ tel que $1 \leqslant i < n$.
>
> **4.** Soit $n$ un entier tel que $288n \geqslant m$, et soit $u_1, \ldots, u_n$ des entiers naturels en progression arithmétique de raison $288$. Montrer que tout entier de l'intervalle $[m + u_1,\, 288n + u_1]$ peut s'écrire sous la forme $s_i + u_j$, avec $1 \leqslant i \leqslant 288$ et $1 \leqslant j \leqslant n$.
>
> **5.** On admet la relation, pour tout réel $x$,
> $$(2x + 12)^3 + (2x + 4)^3 + (2x + 2)^3 - (2x + 10)^3 - (2x + 8)^3 - (2x)^3 = 288.$$
>
> **a.** Montrer qu'il existe un entier $u$ tel que $u$, $u + 288$ et $u + 576$ appartiennent à $S_0$.
>
> **b.** Montrer que, pour tout entier $n \geqslant 2$, il existe $n$ éléments dans $S_0$ en progression arithmétique de raison $288$.
>
> **6.** Soit $k$ un entier supérieur ou égal à $5$ tel que $(2k + 1)^3 > m$.
>
> **a.** Montrer qu'il existe un entier $N \geqslant 1$ tel que tout entier de l'intervalle $\bigl[N,\, N + 2(2k - 1)^3\bigr]$ puisse s'écrire sous la forme $s_i + u$, avec $1 \leqslant i \leqslant 288$ et $u \in S_0$.
>
> **b.** Montrer que tout entier supérieur ou égal à $N$ appartient à $S$.
>
> Pour tout entier $p \geqslant k$, on pourra examiner le cas des entiers de l'intervalle $[N, N_p]$, où
> $$N_p = N + (2k - 1)^3 + \sum_{j=k}^{p} (2j - 1)^3.$$

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_disuguaglianze|Disuguaglianze]], [[method_fattorizzazione|Fattorizzazione]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1b8k3BWxLPQrKuemqOCqKmgPkVkBfx4Ea/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Summe di cubi: studio degli insiemi S, S_d, S_i di numeri interi espressi come somme di cubi di numeri interi positivi (distinti, unici distinti), costruendo progressioni aritmetiche arbitrariamente lunghe all'interno di S.*

> Problema 1: somma di cubetti.
> 
> Se $n$ è un numero intero, chiamiamo il cubo di $n$ il numero intero $n^3$.
> 
> In questo problema consideriamo: - $S$, l'insieme di enti enti strettamente positivi che possono essere decomposti come una somma di cubi di interi strettamente positivi (i cubetti non essendo necessariamente distinti); - $S_d$, l'insieme di enti enti enti strettamente positivi che possono essere decomposti come una somma di cubetti di interi strettamente positivi distinti; - $S_i$, l'insieme di enti enti enti strettamente positivi che possono essere decomposti come una somma di cubetti di enti unici unici strettamente positivi distinti.
> 
> Ad esempio, $8$ e $190$ appartengono a $S$ dal momento che $8 = 2^3$ e $190 = 1^3 + 4^3 + 5^3$; $216$ e $1072$ appartengono a $S_d$ dal momento che $216 = 6^3$ e $1072 = 2^3 + 4^3 + 10^3$; $125$ e $2568$ appartengono a $S_i$ dal momento che $125 = 5^3$ e $2568 = 1^3 + 3^3 + 7^3 + 13^3$. L'obiettivo del problema è dimostrare che esistono progressioni aritmetiche sufficientemente grandi e arbitrariamente lunghe appartenenti a $S$.
> 
> \textbf{1.} Mostra che $208$ appartiene a $S_d$.
> 
> - Sì, signore. a.} Mostra che per ogni numero intero $x$, abbiamo $(2x+1)^3 \le 2(2x-1)^3$.
> 
> \textbf{b.} Sia $k$ un numero intero maggiore o uguale a $5$. Mostra, per ogni intero $p \ge k$, che $$(2p+1)^3 \le (2k-1)^3 + \sum_{j=k}^{p}(2j-1)^3,$$ dove ricordiamo che $\sum_{j=k}^{p}(2j-1)^3$ indica la somma $(2k-1)^3 + (2k+1)^3 + \cdots + (2p-1)^3$.
> 
> \textbf{3.} Dimostrare che esistono $288$ enti $x_1, \dots, x_{288}$ appartenenti a $S_i$ in modo tale che, per ogni $i$ in $\{1, \dots, 288\}$, $x_i \equiv i \pmod{288}$.
> 
> Nella suite del problema, risolviamo tali interi $x_1, \dots, x_{288}$ come $x_i \equiv i \pmod{288}$. Indichiamo con $m$ il più grande di questi interi e con $r$ il più piccolo dei numeri $r \cdot u_i$ in modo tale che [parzialmente illeggibile]. $$m = \max(x_1, x_2, \dots, x_{288}).$$
> 
> Ricordiamo che i valori $n$ reali $u_1, \dots, u_n$ si dice siano in progressione aritmetica della differenza comune $r$ se $u_{i+1} - u_i = r$ per ogni intero $i$ tale che $1 \le i < n$.
> 
> \textbf{4.} Sia $n$ un intero tale che $288 n \ge m$, e che $u_1, \dots, u_n$ sia $n$ interi naturali nella progressione aritmetica della differenza comune $288$. Dimostrare che ogni numero intero dell'intervallo $[m + u_1, 288 m + u_1]$ può essere scritto sotto la forma $u_j + x_i$, con $1 \le i \le 288$ e $1 \le j \le n$.
> 
> \textbf{5.} Ammettiamo la relazione, per ogni reale $x$, $$(2x+12)^3 + (2x+4)^3 + (2x+2)^3 - (2x+10)^3 - (2x+6)^3 - (2x)^3 = 288.$$

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_disuguaglianze|Disuguaglianze classiche]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Sums of cubes: study of the sets S, S_d, S_i of integers expressible as sums of cubes of (distinct, distinct odd) positive integers, building arbitrarily long arithmetic progressions inside S.*

> Problem 1: Sums of cubes.
> 
> If $n$ is an integer, we call the cube of $n$ the integer $n^3$.
> 
> In this problem we consider:
> - $S$, the set of strictly positive integers that can be decomposed as a sum of cubes of strictly positive integers (the cubes not being necessarily distinct);
> - $S_d$, the set of strictly positive integers that can be decomposed as a sum of cubes of strictly positive distinct integers;
> - $S_i$, the set of strictly positive integers that can be decomposed as a sum of cubes of strictly positive distinct odd integers.
> 
> For example, $8$ and $190$ belong to $S$ since $8 = 2^3$ and $190 = 1^3 + 4^3 + 5^3$; $216$ and $1072$ belong to $S_d$ since $216 = 6^3$ and $1072 = 2^3 + 4^3 + 10^3$; $125$ and $2568$ belong to $S_i$ since $125 = 5^3$ and $2568 = 1^3 + 3^3 + 7^3 + 13^3$. The objective of the problem is to demonstrate that there exist sufficiently large arbitrarily long arithmetic progressions belonging to $S$.
> 
> \textbf{1.} Show that $208$ belongs to $S_d$.
> 
> \textbf{2. a.} Show that, for every integer $x$, we have $(2x+1)^3 \le 2(2x-1)^3$.
> 
> \textbf{b.} Let $k$ be an integer greater than or equal to $5$. Show, for every integer $p \ge k$, that
> $$(2p+1)^3 \le (2k-1)^3 + \sum_{j=k}^{p}(2j-1)^3,$$
> where we recall that $\sum_{j=k}^{p}(2j-1)^3$ denotes the sum $(2k-1)^3 + (2k+1)^3 + \cdots + (2p-1)^3$.
> 
> \textbf{3.} Show that there exist $288$ integers $x_1, \dots, x_{288}$ belonging to $S_i$ such that, for each $i$ in $\{1, \dots, 288\}$, $x_i \equiv i \pmod{288}$.
> 
> In the suite of the problem, we fix such integers $x_1, \dots, x_{288}$ such that $x_i \equiv i \pmod{288}$. We denote by $m$ the largest of these integers and by $r$ the smallest of the numbers $r \cdot u_i$ such that [partly illegible].
> $$m = \max(x_1, x_2, \dots, x_{288}).$$
> 
> We recall that $n$ reals $u_1, \dots, u_n$ are said to be in arithmetic progression of common difference $r$ if $u_{i+1} - u_i = r$ for every integer $i$ such that $1 \le i < n$.
> 
> \textbf{4.} Let $n$ be an integer such that $288 n \ge m$, and let $u_1, \dots, u_n$ be $n$ natural integers in arithmetic progression of common difference $288$. Show that every integer of the interval $[m + u_1, 288 m + u_1]$ can be written under the form $u_j + x_i$, with $1 \le i \le 288$ and $1 \le j \le n$.
> 
> \textbf{5.} We admit the relation, for every real $x$,
> $$(2x+12)^3 + (2x+4)^3 + (2x+2)^3 - (2x+10)^3 - (2x+6)^3 - (2x)^3 = 288.$$

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_disuguaglianze|Disuguaglianze]], [[method_fattorizzazione|Fattorizzazione]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1b8k3BWxLPQrKuemqOCqKmgPkVkBfx4Ea/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_analitica,topic_aritmetica,topic_geometria_piana,method_coordinate,method_congruenze,method_simmetria,method_casework,method_colorazione,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*The row of trees that hides the forest: an observer at the origin among trees (discs of radius R centred at lattice points); determine for which R every direction is blocked, using slope rationality and parity arguments.*

> Un observateur se trouve dans une forêt parfaitement régulière, dans laquelle les troncs d'arbres ont tous même diamètre. On ne tient pas compte de la hauteur, ce qui permet de se ramener à un problème dans le plan, qu'on rapporte à un repère orthonormé. L'observateur se trouve à l'origine du repère et les troncs d'arbres sont représentés par des cercles de même rayon $R > 0$, centrés aux points de coordonnées $(a, b)$, où $a$ et $b$ sont des entiers impairs. Il s'agit d'étudier ce que voit l'observateur.
>
> Pour des raisons de symétrie, on peut se restreindre au quart de plan $x > 0$, $y > 0$. On dira que l'observateur « voit à travers la forêt » s'il existe une demi-droite issue de l'origine, contenue dans le quart de plan considéré et ne rencontrant aucun des cercles.
>
> Par exemple, dans la figure ci-dessus, la demi-droite $\mathscr{D}$ rencontre un arbre, mais pas la demi-droite $\mathscr{D}'$. Pour $m \in \,]0, +\infty[$, on note $\mathscr{D}_m$ la demi-droite définie par les conditions $y = mx$ et $x > 0$.
>
> Dans ce problème, on admettra que si $m$ est un nombre irrationnel positif, alors, pour tout réel strictement positif $\varepsilon$, il existe deux entiers naturels impairs $a$ et $b$ tels que $|b - ma| \leqslant \varepsilon$.
>
> **1.** Soient $a$, $b$, $m$ des réels strictement positifs. Montrer que $\mathscr{D}_m$ rencontre le cercle de rayon $R > 0$ centré en $(a, b)$ si et seulement si $|b - ma| \leqslant R\sqrt{1 + m^2}$.
>
> **2.** En déduire que si $m$ est irrationnel, alors $\mathscr{D}_m$ rencontre un arbre.
>
> **3.** On suppose que $m = \dfrac{a}{b}$, où $a$ et $b$ sont des entiers naturels non nuls premiers entre eux.
>
> **a.** On suppose que $a$ et $b$ sont impairs. La demi-droite $\mathscr{D}_m$ rencontre-t-elle un arbre ?
>
> **b.** On suppose que $a$ et $b$ sont de parités différentes et que $\mathscr{D}_m$ rencontre un arbre. Montrer que $1 \leqslant R\sqrt{a^2 + b^2}$.
>
> **4.** En déduire que si toutes les demi-droites $\mathscr{D}_m$, avec $m > 0$, rencontrent un arbre, alors $R \geqslant \dfrac{1}{\sqrt{5}}$.
>
> **5.** On suppose réciproquement que $R \geqslant \dfrac{1}{\sqrt{5}}$. Montrer que toute demi-droite $\mathscr{D}_m$, avec $m > 0$, rencontre un arbre planté en $(\alpha, 1)$ ou en $(1, \alpha)$, où $\alpha$ est un entier naturel impair.
>
> On appelle première rangée d'arbres l'ensemble des arbres plantés aux points $(\alpha, 1)$ ou $(1, \alpha)$, où $\alpha$ est un entier naturel impair.
>
> **6.** Conclure que si l'observateur voit à travers la première rangée, alors il voit à travers la forêt.

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_congruenze|Congruenze]], [[method_simmetria|Simmetria]], [[method_casework|Casework]], [[method_colorazione|Colouring / parity]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria|Geometry]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1b8k3BWxLPQrKuemqOCqKmgPkVkBfx4Ea/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*La fila di alberi che nasconde la foresta: un osservatore all'origine tra gli alberi (dischi di raggio R centrati nei punti della griglia); determinare per quale R ogni direzione è bloccata, utilizzando la razionalità della pendenza e gli argomenti di parità.*

> Il problema 2: la fila di alberi che nasconde la foresta.
> 
> Un osservatore situato all'origine si trova in una piantagione perfettamente regolare: tronchi di alberi dello stesso diametro crescono su ogni punto della rete del piano, tranne all'origine dove l'osservatore si trova; la loro altezza è tale che si può far guardare solo a livello del terreno. Lavoriamo in un sistema di coordinate ortonormali. L'osservatore si trova all'origine e gli alberi sono dischi dello stesso raggio $R > 0$, centrati nei punti della rete delle coordinate $(a, b)$, dove $a$ e $b$ superano i numeri interi relativi, con l'eccezione dell'origine. Vogliamo studiare se l'osservatore può vedere fuori dalla foresta.
> 
> Per ragioni di simmetria si può limitare al quadrato $x > 0$, $y > 0$. Diciamo quindi che l'osservatore vede la foresta attraverso questo quarto se esiste una mezza retta che emana dall'origine, contenuta nel piano del quarto considerato, che non incontra alcun disco.
> 
> Per ogni $m > 0$ reale, indicare con $\mathscr{D}_m$ la metà della linea definita dalle condizioni $y = mx$ e $x > 0$. Ad esempio, nella figura seguente, la metà linea $\mathscr{D}$ non incontra alcun disco, ma la metà linea $\mathscr{D}'$ incontra una.
> 
> In questo problema, ammettiamo che se $m$ è un reale strettamente positivo e se $\varepsilon$ è un reale strettamente positivo, allora esistono interi naturali $a$ e $b$ in modo tale che $|b - ma| \le \varepsilon$ [dichiarazione parzialmente illeggibile].
> 
> \textbf{1.} Siano $a$, $b$, $m$ strettamente positivi reali. Dimostrare che la semilinea $\mathscr{D}_m$ incontra il disco di raggio $R > 0$ incentrato su $(a, b)$ se e solo se $\dfrac{|b - ma|}{\sqrt{1 + m^2}} \le R$.
> 
> \textbf{2.} Deduci che se $m$ è irrazionale, allora $\mathscr{D}_m$ non incontra nessun albero.
> 
> \textbf{3.} Supponiamo ora che $m = \dfrac{a}{b}$, con $a$ e $b$ coprimi interi naturali strettamente positivi.
> 
> \textbf{a.} Supponiamo che $a$ e $b$ siano entrambi pari. La semilinea $\mathscr{D}_m$ incontra un albero?
> 
> \textbf{b.} Supponiamo che $a$ e $b$ siano di parità diverse e che $\mathscr{D}_m$ incontra un albero. Mostra che $1 \le R\sqrt{a^2 + b^2}$.
> 
> \textbf{4.} Deduci che tutte le semiline $\mathscr{D}_m$, con $m > 0$, incontrino un albero se e solo se $R \ge \dfrac{1}{\sqrt{5}}$.
> 
> \textbf{5.} Supponiamo al contrario che $R \ge \dfrac{1}{\sqrt{5}}$. Dimostrare che qualsiasi semilinea $\mathscr{D}_m$, con $m > 0$, incontra un albero piantato a $(a, 1)$ o $(1, a)$, dove $a$ è un intero naturale.
> 
> Chiamiamo la prima riga di alberi l'insieme di alberi piantati nei punti $(a, 1)$ o $(1, a)$, dove $a$ è un intero naturale strettamente positivo.
> 
> Concludere che se l'osservatore vede la foresta attraverso la prima riga, allora vede fuori dalla foresta.

![[src_cgen_2016__Q02.png]]

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_congruenze|Aritmetica modulare / congruenze]], [[method_simmetria|Sfruttamento della simmetria]], [[method_casework|Analisi per casi]], [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Geometria]], [[Aritmetica e Teoria dei Numeri]]


<div class="qlang-split" data-lang="en"></div>


*The row of trees that hides the forest: an observer at the origin among trees (discs of radius R centred at lattice points); determine for which R every direction is blocked, using slope rationality and parity arguments.*

> Problem 2: The row of trees that hides the forest.
> 
> An observer located at the origin finds himself in a perfectly regular plantation: tree trunks of the same diameter grow on each lattice point of the plane, except at the origin where the observer stands; their height is such that one can only bring oneself to look at ground level. We work in an orthonormal coordinate system. The observer is at the origin and the trees are discs of the same radius $R > 0$, centred at the lattice points of coordinates $(a, b)$, where $a$ and $b$ run over the relative integers, with the exception of the origin. We wish to study whether the observer can see out of the forest.
> 
> For reasons of symmetry, one may restrict oneself to the quarter plane $x > 0$, $y > 0$. We then say that the observer sees the forest through this quarter if there exists a half-line issuing from the origin, contained in the quarter plane considered, that meets no disc.
> 
> For every real $m > 0$, denote by $\mathscr{D}_m$ the half-line defined by the conditions $y = mx$ and $x > 0$. For example, in the figure below, the half-line $\mathscr{D}$ meets no disc, but the half-line $\mathscr{D}'$ meets one.
> 
> In this problem, we admit that if $m$ is a strictly positive real and if $\varepsilon$ is a strictly positive real, then there exist natural integers $a$ and $b$ such that $|b - ma| \le \varepsilon$ [statement partly illegible].
> 
> \textbf{1.} Let $a$, $b$, $m$ be strictly positive reals. Show that the half-line $\mathscr{D}_m$ meets the disc of radius $R > 0$ centred at $(a, b)$ if and only if $\dfrac{|b - ma|}{\sqrt{1 + m^2}} \le R$.
> 
> \textbf{2.} Deduce that if $m$ is irrational, then $\mathscr{D}_m$ meets no tree.
> 
> \textbf{3.} Suppose now that $m = \dfrac{a}{b}$, with $a$ and $b$ strictly positive coprime natural integers.
> 
> \textbf{a.} Suppose that $a$ and $b$ are both odd. Does the half-line $\mathscr{D}_m$ meet a tree?
> 
> \textbf{b.} Suppose that $a$ and $b$ are of different parities and that $\mathscr{D}_m$ meets a tree. Show that $1 \le R\sqrt{a^2 + b^2}$.
> 
> \textbf{4.} Deduce that all the half-lines $\mathscr{D}_m$, with $m > 0$, meet a tree if and only if $R \ge \dfrac{1}{\sqrt{5}}$.
> 
> \textbf{5.} Suppose conversely that $R \ge \dfrac{1}{\sqrt{5}}$. Show that any half-line $\mathscr{D}_m$, with $m > 0$, meets a tree planted at $(a, 1)$ or $(1, a)$, where $a$ is a natural integer.
> 
> We call first row of trees the set of trees planted at the points $(a, 1)$ or $(1, a)$, where $a$ is a strictly positive natural integer.
> 
> \textbf{6.} Conclude that if the observer sees the forest through the first row, then he sees out of the forest.

![[src_cgen_2016__Q02.png]]

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_congruenze|Congruenze]], [[method_simmetria|Simmetria]], [[method_casework|Casework]], [[method_colorazione|Colouring / parity]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria|Geometry]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1b8k3BWxLPQrKuemqOCqKmgPkVkBfx4Ea/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_probabilita,topic_algebra,method_conteggio,method_casework,method_ricorsione,skill_conteggio_sistematico,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_astrazione,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Going into C: with j = e^{2i pi/3} and dice-based variables Z_k = j^{F_k}, study the probability p_n that S_n = Z_1+...+Z_n = 0, derive a closed form via binomials, and analyse the counting variable X_n of indices with S_k = 0.*

> Dans tout le problème, $j$ désigne le nombre complexe $e^{2\pi i/3}$.
>
> La probabilité d'un évènement $A$ est notée $P(A)$.
>
> **1. a.** Vérifier que $j^3 = 1$ et $1 + j + j^2 = 0$.
>
> **b.** Que peut-on dire du triangle dont les sommets ont pour affixes $1$, $j$, $j^2$ ?
>
> **c.** Montrer que si $a$, $b$, $c$ sont des nombres réels, alors $a + bj + cj^2 = 0$ si et seulement si $a = b = c$.
>
> On lance un dé équilibré (six faces numérotées de $1$ à $6$). On note $F$ la variable aléatoire donnant le nombre obtenu, et on note $Z$ la variable aléatoire $j^F$.
>
> **2.** Montrer que $Z$ est à valeurs dans $\{1, j, j^2\}$ et que $P(Z = 1) = P(Z = j) = P\bigl(Z = j^2\bigr) = \dfrac{1}{3}$.
>
> On considère un entier $n \geqslant 1$ et on lance le dé $n$ fois (lancers indépendants). On note $F_k$ le résultat du $k$-ième lancer et $Z_k = j^{F_k}$. On note $S_n = Z_1 + \cdots + Z_n$ et $p_n = P(S_n = 0)$. On note $U_n$ la variable aléatoire qui donne le nombre d'entiers $k \in [1, n]$ tels que $Z_k = 1$ ; on note $V_n$ celle qui donne le nombre d'entiers $k \in [1, n]$ tels que $Z_k = j$ et $W_n$ celle qui donne le nombre d'entiers $k \in [1, n]$ tels que $Z_k = j^2$.
>
> **3. a.** Déterminer $U_n + V_n + W_n$.
>
> **b.** Montrer que $S_n = U_n + jV_n + j^2 W_n$.
>
> **c.** Montrer que $S_n = 0$ si et seulement si $U_n = V_n = W_n$.
>
> **d.** En déduire que si $n$ n'est pas multiple de $3$, alors $p_n = 0$.
>
> **4.** On suppose qu'il existe un entier naturel non nul $m$ tel que $n = 3m$.
>
> **a.** Montrer que la variable aléatoire $U_n$ suit une loi binomiale dont on précisera les paramètres.
>
> **b.** En déduire que $P(U_n = m) = \dbinom{3m}{m}\dfrac{2^{2m}}{3^{3m}}$.
>
> On note $P_{U_n=m}(V_n = m)$ la probabilité conditionnelle de $V_n = m$ sachant $U_n = m$.
>
> **c.** Montrer que $P_{U_n=m}(V_n = m) = 2^{-2m}\dbinom{2m}{m}$.
>
> **d.** En déduire que $p_{3m} = 3^{-3m}\dbinom{3m}{m}\dbinom{2m}{m}$.
>
> La question précédente, combinée à une expression classique des coefficients binomiaux, entraîne pour $m$ entier naturel non nul la relation suivante, qu'on ne demande pas de démontrer :
> $$\frac{p_{3m+3}}{p_{3m}} = \frac{(3m + 2)(3m + 1)}{9(m + 1)^2}.$$
>
> **5.** Pour tout entier $m \geqslant 1$, montrer que $\dfrac{m}{m+1} \leqslant \dfrac{p_{3m+3}}{p_{3m}}$ et en déduire que $p_{3m} \geqslant \dfrac{2}{9m}$.
>
> Soit $X_n$ la variable aléatoire qui donne le nombre d'entiers $k \in [1, n]$ tels que $S_k = 0$.
>
> **6. a.** Déterminer des variables de Bernoulli $Y_k$, avec $1 \leqslant k \leqslant n$, telles que $X_n = Y_1 + \cdots + Y_n$.
>
> **b.** On note $E(X_n)$, $E(Y_1)$, $\ldots$, $E(Y_n)$ les espérances de $X_n$, $Y_1$, $\ldots$, $Y_n$. En admettant que $E(X_n) = E(Y_1) + \cdots + E(Y_n)$, montrer que $E(X_n) = p_1 + \cdots + p_n$.
>
> **c.** En déduire que $\displaystyle\lim_{n \to +\infty} E(X_n) = +\infty$.
>
> Soit $q_n$ la probabilité que l'un des $S_k$ soit nul pour $1 \leqslant k \leqslant n$, c'est-à-dire $q_n = P(X_n > 0)$.
>
> L'objectif de la question suivante est de montrer que la suite $(q_n)$ converge vers $1$.
>
> **7. a.** Montrer que la suite $(q_n)$ converge vers un réel $q$ et que $q_n \leqslant q \leqslant 1$ pour tout $n$.
>
> **b.** Pour $r$, $n$ entiers naturels non nuls, montrer que $P(X_n \geqslant r) \leqslant q^r$.
>
> **c.** En déduire, pour tout entier $n \geqslant 1$, que $E(X_n) \leqslant q + q^2 + \cdots + q^n$.
>
> **d.** Conclure.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_algebra|Algebra]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1b8k3BWxLPQrKuemqOCqKmgPkVkBfx4Ea/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Andando in C: con j = e^{2i pi/3} e variabili basate su dadi Z_k = j^{F_k}, studiare la probabilità p_n che S_n = Z_1+...+Z_n = 0, derivare una forma chiusa tramite binomi, e analizzare la variabile di conteggio X_n degli indici con S_k = 0.*

> Problema 3: Entrare in $\mathbb{C}$.
> 
> In tutto questo problema, $j$ indica il numero complesso $e^{2i\pi/3}$. La probabilità di un evento $A$ è indicata come $P(A)$.
> 
> - Sì, certo. a.} Verificare che $j^3 = 1$ e $1 + j + j^2 = 0$.
> 
> Che cosa si può dire del triangolo le cui vertici sono i tre punti con affissi $1$, $j$, $j^2$?
> 
> \textbf{c.} Mostra che, $a$, $b$, $c$ sono tre reali non zero, $a + bj + cj^2 = 0$ se e solo se $a = b = c$.
> 
> Da ora in poi $j$ designa il numero complesso sopra. Si lancia un dado equilibrato (con facce numerate $1$ a $6$) e si denota con $Z$ la variabile casuale uguale a $j^F$, dove $F$ è il risultato ottenuto [la dichiarazione è parzialmente illeggibile].
> 
> \textbf{2.} Mostra che $Z$ assume i valori $1$, $j$, $j^2$ e che $P(Z = 1) = P(Z = j) = P(Z = j^2)$.
> 
> Consideriamo un intero $n \ge 1$ e lanciamo il dado $n$ volte (lanci indipendenti). Indichiamo con $F_k$ il risultato del $k$-th lancio, per $k \in \{1, \dots, n\}$. $Z_k = j^{F_k}$ deve essere la variabile risultante al $k$-th throw, per $k \in \{1, \dots, n\}$, e impostare $S_n = Z_1 + \cdots + Z_n$ e $p_n = P(S_n = 0)$. Indichiamo con $U_n$ la variabile che dà il numero di interi $k \in \{1, \dots, n\}$ tale che $Z_k = 1$, con $V_n$ quella che dà il numero di interi $k \in \{1, \dots, n\}$ tale che $Z_k = j$, e con $W_n$ quella che dà il numero di interi $k \in \{1, \dots, n\}$ tale che $Z_k = j^2$.
> 
> - Sì, signore. a.} Determinare $U_n + V_n + W_n$.
> 
> \textbf{b.} Dimostrare che $S_n = (U_n - V_n) j^0 + (V_n - W_n) j$ [gruppo esatto parzialmente illeggibile; $S_n$ espresso attraverso le differenze $U_n - V_n$ e $V_n - W_n$].
> 
> \textbf{c.} Mostra che $S_n = 0$ se e solo se $U_n = V_n = W_n$.
> 
> \textbf{d.} Deduci che se $n$ non è un multiple di $3$, allora $p_n = 0$.
> 
> \textbf{4.} Supponiamo ora che esista un intero $m$ tale che $n = 3m$.
> 
> \textbf{a.} Mostra che la variabile $U_n$ segue una legge binomial, i cui parametri si precisano.
> 
> \textbf{b.} Deduce che $P(U_n = m) = \dbinom{3m}{m}\dfrac{2^{2m}}{3^{3m}}$.
> 
> \textbf{c.} Mostra che $P_{(U_n = m)}(V_n = m) = 2^{-2m}\dbinom{2m}{m}$.
> 
> Deduci questo $p_{3m} = 3^{-3m}\dbinom{3m}{m}\dbinom{2m}{m}$.
> 
> La domanda precedente, combinata con un'espressione classica dei coefficienti binomiali, consente di dimostrare che $p_{3m+3}$ e $p_{3m}$ soddisfano la seguente relazione, che non si chiede di dimostrare: $$\frac{p_{3m+3}}{p_{3m}} = \frac{(3m+2)(3m+1)}{9(m+1)^2}.$$
> 
> \textbf{5.} Per ogni numero intero $m \ge 1$, mostrare che $\dfrac{m}{m+1} \le \dfrac{p_{3m+3}}{p_{3m}}$ e dedurre che $p_{3m} \ge \dfrac{p_3}{2m}$.
> 
> $X_n$ sia la variabile casuale che dà il numero di interi $k \in \{1, \dots, n\}$ tale che $S_k = 0$.
> 
> - Sì, signore. a.} Determinare le variabili di Bernoulli $Y_k$, con $1 \le k \le n$, in modo tale che $X_n = Y_1 + \cdots + Y_n$.
> 
> \textbf{b.} Indicando con $E(X_n)$, $E(Y_1), \dots, E(Y_n)$ le aspettative di $X_n$, $Y_1, \dots, Y_n$, stabilisci che $E(X_n) = E(Y_1) + \cdots + E(Y_n)$, e che $E(X_n) = p_1 + \cdots + p_n$.
> 
> Deduci questo $\lim_{n \to +\infty} E(X_n) = +\infty$.
> 
> - Sì, signore. a.} Dimostrare che $\dfrac{p_{3k+3}}{p_{3k}}$ converge verso un reale $q$ e che $q_k \le q \le 1$ per tutti $n$ [notazione parzialmente illeggibile].
> 
> \textbf{b.} Per $r$, $n$ interi naturali non zero, mostrare che $P(X_n \ge r) \le q^r$.
> 
> \textbf{c.} Deduci, per ogni numero intero $n \ge 1$, che $E(X_n) \le q + q^2 + \cdots + q^n$.
> 
> Conclusione.

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_algebra|Algebra]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Going into C: with j = e^{2i pi/3} and dice-based variables Z_k = j^{F_k}, study the probability p_n that S_n = Z_1+...+Z_n = 0, derive a closed form via binomials, and analyse the counting variable X_n of indices with S_k = 0.*

> Problem 3: Going into $\mathbb{C}$.
> 
> In this whole problem, $j$ denotes the complex number $e^{2i\pi/3}$. The probability of an event $A$ is denoted $P(A)$.
> 
> \textbf{1. a.} Verify that $j^3 = 1$ and $1 + j + j^2 = 0$.
> 
> \textbf{b.} What can one say of the triangle whose vertices are the three points with affixes $1$, $j$, $j^2$?
> 
> \textbf{c.} Show that, $a$, $b$, $c$ being three nonzero reals, $a + bj + cj^2 = 0$ if and only if $a = b = c$.
> 
> From now on $j$ designates the complex number above. One throws a balanced die (with faces numbered $1$ to $6$) and one denotes by $Z$ the random variable equal to $j^F$, where $F$ is the result obtained [statement partly illegible].
> 
> \textbf{2.} Show that $Z$ takes the values $1$, $j$, $j^2$ and that $P(Z = 1) = P(Z = j) = P(Z = j^2)$.
> 
> We consider an integer $n \ge 1$ and we throw the die $n$ times (independent throws). We denote by $F_k$ the result of the $k$-th throw, for $k \in \{1, \dots, n\}$. Let $Z_k = j^{F_k}$ be the resulting variable at the $k$-th throw, for $k \in \{1, \dots, n\}$, and set $S_n = Z_1 + \cdots + Z_n$ and $p_n = P(S_n = 0)$. We denote by $U_n$ the variable giving the number of integers $k \in \{1, \dots, n\}$ such that $Z_k = 1$, by $V_n$ the one giving the number of integers $k \in \{1, \dots, n\}$ such that $Z_k = j$, and by $W_n$ the one giving the number of integers $k \in \{1, \dots, n\}$ such that $Z_k = j^2$.
> 
> \textbf{3. a.} Determine $U_n + V_n + W_n$.
> 
> \textbf{b.} Show that $S_n = (U_n - V_n) j^0 + (V_n - W_n) j$ [exact grouping partly illegible; $S_n$ expressed via the differences $U_n - V_n$ and $V_n - W_n$].
> 
> \textbf{c.} Show that $S_n = 0$ if and only if $U_n = V_n = W_n$.
> 
> \textbf{d.} Deduce that if $n$ is not a multiple of $3$, then $p_n = 0$.
> 
> \textbf{4.} Suppose now that there exists an integer $m$ such that $n = 3m$.
> 
> \textbf{a.} Show that the variable $U_n$ follows a binomial law, whose parameters one precises.
> 
> \textbf{b.} Deduce that $P(U_n = m) = \dbinom{3m}{m}\dfrac{2^{2m}}{3^{3m}}$.
> 
> \textbf{c.} Show that $P_{(U_n = m)}(V_n = m) = 2^{-2m}\dbinom{2m}{m}$.
> 
> \textbf{d.} Deduce that $p_{3m} = 3^{-3m}\dbinom{3m}{m}\dbinom{2m}{m}$.
> 
> The preceding question, combined with a classical expression of binomial coefficients, allows one to show that $p_{3m+3}$ and $p_{3m}$ satisfy the following relation, which one does not ask to demonstrate:
> $$\frac{p_{3m+3}}{p_{3m}} = \frac{(3m+2)(3m+1)}{9(m+1)^2}.$$
> 
> \textbf{5.} For every integer $m \ge 1$, show that $\dfrac{m}{m+1} \le \dfrac{p_{3m+3}}{p_{3m}}$ and deduce that $p_{3m} \ge \dfrac{p_3}{2m}$.
> 
> Let $X_n$ be the random variable giving the number of integers $k \in \{1, \dots, n\}$ such that $S_k = 0$.
> 
> \textbf{6. a.} Determine Bernoulli variables $Y_k$, with $1 \le k \le n$, such that $X_n = Y_1 + \cdots + Y_n$.
> 
> \textbf{b.} Denoting by $E(X_n)$, $E(Y_1), \dots, E(Y_n)$ the expectations of $X_n$, $Y_1, \dots, Y_n$, establish that $E(X_n) = E(Y_1) + \cdots + E(Y_n)$, and that $E(X_n) = p_1 + \cdots + p_n$.
> 
> \textbf{c.} Deduce that $\lim_{n \to +\infty} E(X_n) = +\infty$.
> 
> \textbf{7. a.} Show that $\dfrac{p_{3k+3}}{p_{3k}}$ converges towards a real $q$ and that $q_k \le q \le 1$ for all $n$ [notation partly illegible].
> 
> \textbf{b.} For $r$, $n$ nonzero natural integers, show that $P(X_n \ge r) \le q^r$.
> 
> \textbf{c.} Deduce, for every integer $n \ge 1$, that $E(X_n) \le q + q^2 + \cdots + q^n$.
> 
> \textbf{d.} Conclude.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_algebra|Algebra]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1b8k3BWxLPQrKuemqOCqKmgPkVkBfx4Ea/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
