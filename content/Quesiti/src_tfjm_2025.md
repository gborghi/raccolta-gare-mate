---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025
tipo: gara
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025
family: tfjm
year: '2025'
level: TFJM²
---
<div class="atom-reader" data-gara="Quesiti/src_tfjm_2025"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_probabilita,topic_combinatoria,method_grafi,method_casework,method_ricorsione,skill_modellizzazione,skill_conteggio_sistematico,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Propagation of good mood among leprechauns on a friendship graph; a number j is realizable if good mood can spread to all leprechauns starting from one.*

> Problem 1 - A contagious good mood.
> 
> In the Marvels, the leprechauns know good and bad mood. Will a single leprechaun manage to make everyone smile?
> 
> The country of the Marvels, denoted $M$, consists of $n \ge 3$ leprechauns who can each be in good or bad mood. Each pair of leprechauns either knows each other or not, this knowledge being mutual and unchanging. Each day, a leprechaun in good mood makes a certain number of his friends smile simultaneously (the number being specified more precisely below); the others stay in their mood, good or bad. We want to put everyone in good mood. Initially, only one leprechaun is in good mood.
> 
> We say that a number $j \in \mathbb{N}$ is realizable if it is possible that all the good-mood leprechauns make exactly $j$ of their bad-mood friends smile each day, so that, starting from a single leprechaun in good mood (placed wherever we want), everyone ends up in good mood. If at some moment a good-mood leprechaun cannot make $j$ leprechauns smile, then good mood never arrives.
> 
> For example, if each leprechaun knows exactly $3$ other leprechauns (no matter who) and $M$ consists of $3$ leprechauns, then the only realizable numbers are $2$ and $3$ (the numbers $0$ and $1$ are not realizable). We denote $A(M, \ell)$ the set of realizable numbers, where $\ell$ is the starting leprechaun.
> 
> 1. From now on in this problem, a leprechaun smiles at exactly two of his friends, with priority to leprechauns in bad mood (that is, he only puts in good mood the leprechauns in bad mood if possible). Determine $A(M, \ell)$ (denoted $A_1(M, \ell)$ for question 1) when each leprechaun knows the same number $\ell$ of leprechauns and $M$ has $a \cdot b$ leprechauns arranged in a grid. Distinguish the cases: a) the leprechaun $\ell$ is at a corner; b) the leprechaun $\ell$ is on a side; c) the leprechaun $\ell$ is in the interior (neither corner nor side). (See Figure 2, the country of the Marvels for question 1, with $a = 3$ and $b = 6$.)
> 
> 2. Which sets $E$ are such that there exists a configuration $M$ and a starting leprechaun $\ell \in M$ with $A_1(M, \ell) = E$?
> 
> 3. Which sets $E$ are such that there exists a configuration $M$ such that the union over all $\ell \in M$ of $A_1(M, \ell)$ equals $E$?
> 
> 4. For this question, replace the rule of question 1 by the following: a leprechaun smiles at exactly two of his friends, with priority to those already in good mood. We denote $A_2(M, \ell)$. Answer questions 1, 2 and 3 in this case.
> 
> From now on, we drop the rules of questions 1 and 4. We fix $p \in [0, 1]$. If $\ell \in M$ is in good mood, then for any $\ell' \in M$ such that $\ell$ and $\ell'$ know each other, $\ell$ makes $\ell'$ smile with probability $p$. Let $\tau$ be the random variable equal to the number of the first day when everyone is in good mood (and $\tau = +\infty$ if it never arrives).
> 
> 5. Compute, as a function of $n$ and $p$, the expectation of $\tau$: a) if each leprechaun knows the two others; b) if the leprechauns are numbered $1$ to $n$, each leprechaun $\ell_k$ knowing $\ell_{k-1}$ and $\ell_{k+1}$ (with $\ell_1$ and $\ell_n$ also acquainted); c) if $n$ is large and the population is separated into two classes of size $n/2$, each leprechaun knowing two friends in its own class and two friends in the other class; for this question, with $p$ fixed, also determine the limit of the expectation of $\tau$ as $n \to \infty$; d) if $M$ is the country of question 1 (here the result must depend on $a$, $b$ and the starting leprechaun).
> 
> 6. For $p \in [0, 1]$, $n \ge 3$ and $k \le n - 1$, consider the country $M$ with $n$ leprechauns and $k$ pairs of friends. How large can the expectation of $\tau$ be at maximum: a) if $p = 1$? b) if $0 < p < 1$ and $k = n - 1$? c) in the general case?
> 
> 7. Repeat question 6 replacing 'maximum' with 'minimum'.
> 
> 8. Propose and study other lines of research.

![[src_tfjm_2025__Q01.png]]

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_casework|Casework]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Propagation of good mood among leprechauns on a friendship graph; a number j is realizable if good mood can spread to all leprechauns starting from one.*

> Problem 1 - A contagious good mood.
> 
> In the Marvels, the leprechauns know good and bad mood. Will a single leprechaun manage to make everyone smile?
> 
> The country of the Marvels, denoted $M$, consists of $n \ge 3$ leprechauns who can each be in good or bad mood. Each pair of leprechauns either knows each other or not, this knowledge being mutual and unchanging. Each day, a leprechaun in good mood makes a certain number of his friends smile simultaneously (the number being specified more precisely below); the others stay in their mood, good or bad. We want to put everyone in good mood. Initially, only one leprechaun is in good mood.
> 
> We say that a number $j \in \mathbb{N}$ is realizable if it is possible that all the good-mood leprechauns make exactly $j$ of their bad-mood friends smile each day, so that, starting from a single leprechaun in good mood (placed wherever we want), everyone ends up in good mood. If at some moment a good-mood leprechaun cannot make $j$ leprechauns smile, then good mood never arrives.
> 
> For example, if each leprechaun knows exactly $3$ other leprechauns (no matter who) and $M$ consists of $3$ leprechauns, then the only realizable numbers are $2$ and $3$ (the numbers $0$ and $1$ are not realizable). We denote $A(M, \ell)$ the set of realizable numbers, where $\ell$ is the starting leprechaun.
> 
> 1. From now on in this problem, a leprechaun smiles at exactly two of his friends, with priority to leprechauns in bad mood (that is, he only puts in good mood the leprechauns in bad mood if possible). Determine $A(M, \ell)$ (denoted $A_1(M, \ell)$ for question 1) when each leprechaun knows the same number $\ell$ of leprechauns and $M$ has $a \cdot b$ leprechauns arranged in a grid. Distinguish the cases: a) the leprechaun $\ell$ is at a corner; b) the leprechaun $\ell$ is on a side; c) the leprechaun $\ell$ is in the interior (neither corner nor side). (See Figure 2, the country of the Marvels for question 1, with $a = 3$ and $b = 6$.)
> 
> 2. Which sets $E$ are such that there exists a configuration $M$ and a starting leprechaun $\ell \in M$ with $A_1(M, \ell) = E$?
> 
> 3. Which sets $E$ are such that there exists a configuration $M$ such that the union over all $\ell \in M$ of $A_1(M, \ell)$ equals $E$?
> 
> 4. For this question, replace the rule of question 1 by the following: a leprechaun smiles at exactly two of his friends, with priority to those already in good mood. We denote $A_2(M, \ell)$. Answer questions 1, 2 and 3 in this case.
> 
> From now on, we drop the rules of questions 1 and 4. We fix $p \in [0, 1]$. If $\ell \in M$ is in good mood, then for any $\ell' \in M$ such that $\ell$ and $\ell'$ know each other, $\ell$ makes $\ell'$ smile with probability $p$. Let $\tau$ be the random variable equal to the number of the first day when everyone is in good mood (and $\tau = +\infty$ if it never arrives).
> 
> 5. Compute, as a function of $n$ and $p$, the expectation of $\tau$: a) if each leprechaun knows the two others; b) if the leprechauns are numbered $1$ to $n$, each leprechaun $\ell_k$ knowing $\ell_{k-1}$ and $\ell_{k+1}$ (with $\ell_1$ and $\ell_n$ also acquainted); c) if $n$ is large and the population is separated into two classes of size $n/2$, each leprechaun knowing two friends in its own class and two friends in the other class; for this question, with $p$ fixed, also determine the limit of the expectation of $\tau$ as $n \to \infty$; d) if $M$ is the country of question 1 (here the result must depend on $a$, $b$ and the starting leprechaun).
> 
> 6. For $p \in [0, 1]$, $n \ge 3$ and $k \le n - 1$, consider the country $M$ with $n$ leprechauns and $k$ pairs of friends. How large can the expectation of $\tau$ be at maximum: a) if $p = 1$? b) if $0 < p < 1$ and $k = n - 1$? c) in the general case?
> 
> 7. Repeat question 6 replacing 'maximum' with 'minimum'.
> 
> 8. Propose and study other lines of research.

![[src_tfjm_2025__Q01.png]]

[[src_tfjm_2025__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,topic_algebra,method_conteggio,method_invarianti,method_ricorsione,skill_modellizzazione,skill_manipolazione_algebrica,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="en"></div>


*Water flows down a triangular network of toboggan pipes (types I, X, Z) splitting and merging; determine which inflow/outflow distributions are achievable.*

> Problem 2 - Funny toboggans.
> 
> In his aquatic free time, the director entrusted engineer Emmy with the construction of a new pipework of toboggans of height $H \in \mathbb{N}$ meters. At the top there are $N \ge 2$ entries aligned and numbered from $1$ to $N$, and at the bottom there will be $N$ outputs aligned and numbered from $1$ to $N$. For each meter, Emmy has at her disposal the following pipes:
> 
> - the straight toboggans, called pipes of type $I$: such a pipe drains the water from input $K$ and re-drains it at output $K$;
> - pairs of neighboring toboggans that cross without meeting and exchange their outputs, called a pair of pipes of type $Z$: such a pipe takes the water in position $K$ and that in position $K + 1$, and re-drains the water of position $K$ into position $K + 1$ and the water of position $K + 1$ into position $K$;
> - pairs of neighboring toboggans where the water in positions $K$ and $K + 1$ re-drains in identical proportions, called a pair of pipes of type $X$: such a pipe takes the water in position $K$ and that in position $K + 1$, and re-drains it into positions $K$ and $K + 1$ in equal proportions (half in $K$ and half in $K + 1$). At each meter, Emmy places a row composed of one combination of her choice of such pipes.
> 
> For the show, she must enter a total quantity of $1$ liter of water into the entries, following a repartition fixed in advance. Then the water descends through the toboggans following the rules above. Finally, the water exits through the output pipes. An example is given in Figure 3. (Figure 3: A pipework of height $H = 3$ with $N = 5$ entries. The quantities of water at each stage are indicated in blue, and the type of pipe is indicated to the right of each pipe or pair of pipes.)
> 
> For the show, Emmy would like the water to come out of all the outputs.
> 
> 1. As a function of $N$ and $H$, is it possible to construct the toboggans so that water comes out of all the outputs if: a) the water enters at a single input, but Emmy can choose which one; b) the water enters in the same quantity at all the inputs; c) the water enters at input $1$; d) $1/2$ liter of water enters at input $1$ and $1/2$ liter enters at input $N$.
> 
> 2. Emmy would like the show to be grandiose: she wants the water to come out in the same quantity from all the outputs. For which values of $N$ and $H$ is it possible to construct the toboggans so that the water comes out in the same quantity from all the outputs if: a) the water enters at input $1$; b) the repartition of the entering water is arbitrary, and the construction of the toboggan is independent of the repartition. Moreover, Emmy would like to construct one pipework such that, for any choice of repartition of the water at the entry, it makes the water come out in the same quantity from all the outputs.
> 
> 3. For this question only, the decor changes slightly: when crossing a pair of pipes of type $X$, the water re-enters in position $K$ in proportion $P$ and in position $K + 1$ in proportion $(1 - P)$, with $0 \le P \le 1$. Repeat question 2 in this frame.
> 
> 4. Emmy chooses to let all the water enter only at input $1$. We call spectacle the list of quantities of water $(x_1, \ldots, x_N)$ that come out of each output. For example, the spectacle corresponding to Figure 3 is $\left(\frac{3}{8}, \frac{3}{16}, \frac{3}{16}, \frac{1}{8}, \frac{1}{8}\right)$. a) As a function of $N$ or $H$, how many different spectacles can Emmy realize? b) Emmy realizes a spectacle she finds very pretty, and decides to mix the entries (the water can enter from whichever input we want), after the construction of the pipework; is it possible to reconstruct a pipework realizing this spectacle, in function of $N$ and $H$?
> 
> 5. Emmy notices that, if the spectators are too far from the toboggans, they cannot distinguish the different pipes. She would like to know whether a spectacle is realizable when, from afar, it appears the same: we say a spectacle $(y_1, \ldots, y_N)$ effectively coming out of the toboggans verifies $|x_i - y_i| \le \varepsilon$ for all $i \in \{1, \ldots, N\}$. We always suppose Emmy makes the water enter at input $1$. a) Fix $\varepsilon > 0$ and $N$: how many spectacles can Emmy realize in appearance? b) Same question.
> 
> 6. Emmy's colleague also wants to realize the show; here again she foresees mixing the entries before the show, but the entries can be partly blocked. She has toboggans of type $Y$ to the left (denoted $\mathcal{Y}$) and to the right (denoted $\mathcal{Y}$), respectively blocking entry $K$ or entry $K + 1$ (see Figure 4, portions of pipework with the pipes $\mathcal{Y}$ and $\mathcal{Y}$). How many spectacles can Emmy realize (exactly) as a function of $N$ and $H$?
> 
> 7. Propose and study other lines of research.

![[src_tfjm_2025__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_invarianti|Invarianti]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*L'acqua scorre attraverso una rete triangolare di tubi scivoli (tipi I, X, Z) che si dividono e si fondono; determinare quali distribuzioni di ingresso/uscita sono raggiungibili.*

> Il problema 2 e' che le scivoli sono divertenti.
> 
> Nel suo tempo libero acquatico, il direttore affidò all'ingegnere Emmy la costruzione di una nuova pipa di toboggan di altezza $H \in \mathbb{N}$ metri. In alto ci sono le voci $N \ge 2$ allineate e numerate da $1$ a $N$, e in basso ci saranno le uscite $N$ allineate e numerate da $1$ a $N$. Per ogni metro, Emmy ha a sua disposizione i seguenti tubi:
> 
> - coppie di coppie vicine che attraversano senza incontrarsi e scambiare le loro uscite, chiamate coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppie di coppe di coppe di coppe di coppe di coppe di coppe A ogni metro Emmy mette una fila composta da una combinazione di tali tubi.
> 
> Per la mostra, deve inserire nelle voci una quantità totale di $1$ litri di acqua, seguendo una ripartizione fissata in anticipo. Poi l'acqua scende attraverso i toboggan seguendo le regole sopra. Infine, l'acqua esce attraverso i tubi di uscita. Un esempio è riportato nella figura 3. (Figura 3: Tubo di altezza $H = 3$ con voci $N = 5$. Le quantità di acqua in ciascuna fase sono indicate in blu e il tipo di tubo è indicato a destra di ciascun tubo o coppia di tubi.)
> 
> Per lo spettacolo, Emmy vorrebbe che uscisse l'acqua da tutte le uscite.
> 
> 1. Come funzione di $N$ e $H$, è possibile costruire le slitterie in modo che l'acqua esci da tutte le uscite se: a) l'acqua entra a un singolo ingresso, ma Emmy può scegliere quale; b) l'acqua entra nella stessa quantità a tutti gli ingressi; c) l'acqua entra a ingresso $1$; d) il litro d'acqua entra a ingresso $1$ e il litro d'acqua entra a ingresso $N$.
> 
> 2. Emmy vorrebbe che la serie fosse grandiosa: vuole che l'acqua esci nella stessa quantità da tutti i prodotti. Per i quali i valori di $N$ e $H$ è possibile costruire le toboggan in modo che l'acqua esce nella stessa quantità da tutte le uscite se: a) l'acqua entra all'ingresso $1$; b) la ripartizione dell'acqua che entra è arbitraria e la costruzione della toboggan è indipendente dalla ripartizione. Inoltre, Emmy vorrebbe costruire un tubo in modo tale che, per qualsiasi scelta di ripartizione dell'acqua all'ingresso, faccia uscire l'acqua nella stessa quantità da tutte le uscite.
> 
> 3. Solo per questa questione, l'arredamento cambia leggermente: quando si attraversa un paio di tubi di tipo $X$, l'acqua rientra nella posizione $K$ in proporzione $P$ e nella posizione $K + 1$ in proporzione $(1 - P)$, con $0 \le P \le 1$. Ripeti la domanda 2 in questo quadro.
> 
> 4. Emmy sceglie di lasciare che l'acqua entri solo all'ingresso $1$. Chiamiamo spettacolo l'elenco delle quantità d'acqua $(x_1, \ldots, x_N)$ che escono da ogni uscita. Per esempio, lo spettacolo corrispondente alla figura 3 è $\left(\frac{3}{8}, \frac{3}{16}, \frac{3}{16}, \frac{1}{8}, \frac{1}{8}\right)$. a) Come funzione di $N$ o $H$, quanti diversi spettacoli può realizzare Emmy? b) Emmy realizza uno spettacolo che trova molto bello, e decide di mescolare le voci (l'acqua può entrare da qualsiasi ingresso vogliamo), dopo la costruzione del tubo; è possibile ricostruire un tubo realizzando questo spettacolo, in funzione di $N$ e $H$?
> 
> 5. Emmy osserva che, se gli spettatori sono troppo lontani dalle lampadine, non possono distinguere i diversi tubi. Lei vorrebbe sapere se uno spettacolo è realizzabile quando, da lontano, sembra lo stesso: diciamo che uno spettacolo $(y_1, \ldots, y_N)$ che esce effettivamente dalle toboggan verifica $|x_i - y_i| \le \varepsilon$ per tutti $i \in \{1, \ldots, N\}$. Supponiamo sempre che Emmy faccia entrare l'acqua all'input $1$. a) Fissare $\varepsilon > 0$ e $N$: quante occhiali può realizzare Emmy in apparenza? b) La stessa domanda.
> 
> 6. La collega di Emmy vuole anche realizzare lo show; qui di nuovo prevede di mescolare le voci prima dello show, ma le voci possono essere parzialmente bloccate. Ha una slitta di tipo $Y$ a sinistra (indicato $\mathcal{Y}$) e a destra (indicato $\mathcal{Y}$), che blocca rispettivamente l'entrata $K$ o l'entrata $K + 1$ (vedi figura 4, parti di tubi con i tubi $\mathcal{Y}$ e $\mathcal{Y}$). Quanti spettacoli può realizzare Emmy (esattamente) come funzione di $N$ e $H$?
> 
> 7. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2025__Q02.png]]

[[src_tfjm_2025__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,topic_combinatoria,topic_geometria_piana,method_fattorizzazione,method_conteggio,method_congruenze,skill_conteggio_sistematico,skill_riconoscimento_pattern,skill_stima"></span>

<div class="qlang-switch" data-default="en"></div>


*Different families of marking schemes graduate a circular pie plate so that it can be cut into convex pieces of equal size; compare numbers of graduations needed.*

> Problem 3 - Graduated pie plates.
> 
> During a tournament of pie tarts, different families want to share their pies into equal cuts. Each family fabricates its own mold so that on the plate it can indicate the graduations corresponding to the cuts; the graduations are placed on the border (a circle) of the plate, and a cut between two graduations must give convex pieces. We denote $N \ge 2$ the number of distinct division-numbers a family wishes to graduate. (See Figure 5: in blue, the border of the pie plate and its graduations; in black, the points where one must cut depending on the number of pieces; in orange, the regular $u$-gons used to place the graduations. There are $10$ graduations on this example.)
> 
> 1. We want $N = 2$ graduations, that is $S = \{a, b\}$ with $a, b \in \mathbb{N}^*$ distinct. What is the minimal number of graduations on the pie plate so as to be able to cut the pie into either $a$ equal parts or $b$ equal parts?
> 
> 2. We want $N = 3$ graduations, that is $S = \{a, b, c\}$ with $a, b, c \in \mathbb{N}^*$ pairwise distinct. What is the minimal number of graduations so as to be able to cut the pie into either $a$ equal parts, $b$ equal parts, or $c$ equal parts?
> 
> From now on, four different families confront each other. Each family must choose $N$ distinct values to graduate, $S = \{u_1, \ldots, u_N\}$:
> - The Prime family chooses to graduate the $N$ first prime numbers, $S_N^P = \{p_1, p_2, \ldots, p_N\}$.
> - The Geometric family chooses an integer $a \ge 2$ and graduates the powers of $a$, $S_N^G = \{1, a, a^2, \ldots, a^{N-1}\}$.
> - The Complete family chooses to graduate the $N$ first natural numbers, $S_N^C = \{1, 2, \ldots, N\}$.
> - The Divided family chooses the smallest integer $\alpha_N$ admitting exactly $N$ divisors $d_{1,\alpha_N}, \ldots, d_{N,\alpha_N}$, and graduates these $N$ divisors, $S_N^D = \{d_{1,\alpha_N}, \ldots, d_{N,\alpha_N}\}$.
> 
> For example, if $N = 6$: $S_6^P = \{2, 3, 5, 7, 11, 13\}$; $S_6^G = \{1, 2, 4, 8, 16, 32\}$ for $a = 2$; $S_6^C = \{1, 2, 3, 4, 5, 6\}$; $S_6^D = \{1, 2, 3, 4, 6, 12\}$ for $\alpha_6 = 12$.
> 
> 3. The Prime (resp. Geometric, Complete, Divided) family counts the number of graduations $G_N^P$ (resp. $G_N^G$, $G_N^C$, $G_N^D$) that must appear on the border of the pie plate. Determine: a) $G_N^P$ for the Prime family; b) $G_N^G$ for the Geometric family; c) $G_N^C$ for the Complete family; d) $G_N^D$ for the Divided family. Give an exact value or an estimate (as precise as possible) of these values for the four families.
> 
> The families want to put the least possible number of graduations on the pie plate. They do not require all graduations to start from the same origin and they may place them efficiently.
> 
> 4. Can we give an example of a family $S_N = \{u_1, \ldots, u_N\}$ where it is possible to put fewer graduations when the graduations do not all start at the same point? a) if $N = 3$? b) if $N = 4$? c) for another value of $N$?
> 
> 5. When this minimum is reached, for each of the four families described above, how many graduations would one put on the same circle at minimum?
> 
> 6. Does there exist a value $N$ such that for all $n > N$, the order of optimality of the graduations placed by the four families $G_N^P, G_N^G, G_N^C, G_N^D$ ends up always being the same? If yes, what is that value?
> 
> 7. Does there exist a sequence $(u_n)_{n \in \mathbb{N}^*}$ such that for all $N \in \mathbb{N}^*$, $G_N^C \le \min(G_N^P, G_N^G, G_N^C, G_N^D)$?
> 
> 8. Propose and explore other lines of research.

![[src_tfjm_2025__Q03.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_conteggio|Conteggio]], [[method_congruenze|Congruenze]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_stima|Stima]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Diverse famiglie di schemi di marcatura graduano una piastra di torta circolare in modo da poterla tagliare in pezzi convexi di uguale dimensione; confrontano i numeri di graduation necessari.*

> Il problema 3 - piatti di torta graduati.
> 
> Durante un torneo di torte, famiglie diverse vogliono dividere le loro torte in tagli uguali. Ogni famiglia fabbrica il suo modello in modo che sulla targa possa indicare le graduazioni corrispondenti ai tagli; le graduazioni sono posizionate sul bordo (un cerchio) della targa, e una taglia tra due graduazioni deve dare pezzi convexi. Indichiamo $N \ge 2$ il numero di divisioni-numeri distinti che una famiglia desidera laureare. (Cfr. figura 5: in blu, il bordo della tarta e le sue graduazioni; in nero, i punti in cui si deve tagliare a seconda del numero di pezzi; in arancione, i normali $u$-gons utilizzati per posizionare le graduazioni. In questo esempio ci sono $10$ laureati.)
> 
> 1. Vogliamo laureati $N = 2$, cioè $S = \{a, b\}$ con $a, b \in \mathbb{N}^*$ distinto. Qual è il numero minimo di graduazioni sulla tarta per poter tagliare la tarta in parti uguali $a$ o $b$?
> 
> 2. Vogliamo laureati $N = 3$, cioè $S = \{a, b, c\}$ con $a, b, c \in \mathbb{N}^*$ separati in coppia. Qual è il numero minimo di graduazioni per poter tagliare la torta in parti uguali $a$, $b$ o $c$?
> 
> D'ora in poi, quattro famiglie diverse si affrontano. Ogni famiglia deve scegliere $N$ valori distinti per la laurea, $S = \{u_1, \ldots, u_N\}$: - La famiglia Prime sceglie di laurea i primi numeri primi $N$, $S_N^P = \{p_1, p_2, \ldots, p_N\}$. - La famiglia Geometrica sceglie un numero intero $a \ge 2$ e gradua le potenze di $a$, $S_N^G = \{1, a, a^2, \ldots, a^{N-1}\}$. - La famiglia Complete sceglie di graduare i primi numeri naturali $N$, $S_N^C = \{1, 2, \ldots, N\}$. - La famiglia Dividita sceglie il numero intero più piccolo $\alpha_N$ che ammette esattamente $N$ divisori $d_{1,\alpha_N}, \ldots, d_{N,\alpha_N}$, e gradua questi divisori $N$, $S_N^D = \{d_{1,\alpha_N}, \ldots, d_{N,\alpha_N}\}$.
> 
> Per esempio, se $N = 6$: $S_6^P = \{2, 3, 5, 7, 11, 13\}$; $S_6^G = \{1, 2, 4, 8, 16, 32\}$ per $a = 2$; $S_6^C = \{1, 2, 3, 4, 5, 6\}$; $S_6^D = \{1, 2, 3, 4, 6, 12\}$ per $\alpha_6 = 12$.
> 
> 3. Il primo ministro (resp. La famiglia Geometrica, Completa, Divisa conta il numero di laureati $G_N^P$ (resp. $G_N^G$, $G_N^C$, $G_N^D$) che devono apparire sul bordo della tarta. Determinazione: a) $G_N^P$ per la famiglia Prime; b) $G_N^G$ per la famiglia Geometric; c) $G_N^C$ per la famiglia Completa; d) $G_N^D$ per la famiglia Dividita. Indicare un valore esatto o una stima (il più preciso possibile) di questi valori per le quattro famiglie.
> 
> Le famiglie vogliono mettere il minor numero possibile di laureati sul piatto. Non richiedono che tutte le laurea siano partite dalla stessa origine e possono essere inserite in modo efficiente.
> 
> 4. Possiamo dare un esempio di famiglia in cui è possibile inserire meno laurea quando non tutte le laurea iniziano nello stesso punto? a) if $N = 3$? b) if $N = 4$? c) per un altro valore di $N$?
> 
> 5. Quando si raggiunge questo minimo, per ciascuna delle quattro famiglie sopra descritte, quante laureati si metterebbe almeno nello stesso cerchio?
> 
> 6. Esiste un valore $N$ tale che per tutte le $n > N$ l'ordine di ottimizzazione delle laureate poste dalle quattro famiglie $G_N^P, G_N^G, G_N^C, G_N^D$ finisce sempre lo stesso? Se sì, qual è il valore?
> 
> 7. Esiste una sequenza $(u_n)_{n \in \mathbb{N}^*}$ tale che per tutte le $N \in \mathbb{N}^*$, $G_N^C \le \min(G_N^P, G_N^G, G_N^C, G_N^D)$?
> 
> 8. Proporre e esplorare altre linee di ricerca.

![[src_tfjm_2025__Q03.png]]

[[src_tfjm_2025__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_algebra,topic_probabilita,topic_disuguaglianze,method_ricorsione,method_disuguaglianze,method_estremalita,skill_manipolazione_algebrica,skill_stima,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Butterfly wingspans transform by halving or scaling (median/maximal selection, branching duplication); study whether sizes stay bounded or grow, and inferring the random scaling law.*

> Problem 4 - Transformation of butterflies.
> 
> For the different tournaments of TFJM2, the national organizing committee decides to raise $N$ butterflies. At the origin, butterfly number $i$ has a wingspan equal to $x_i$ centimeters. Each day, certain butterflies undergo a transformation that modifies their wingspan.
> 
> 1. In this question only, suppose we have $2$ butterflies of initial wingspan $1$ cm. a) Each day, one of the two butterflies of maximal wingspan has its wingspan divided by two. How much time will it take for both butterflies to have a wingspan strictly inferior to $0.5$ cm? And for $0.1$ cm? b) Suppose $N$ is odd. What happens if the transformation divides by two the wingspan of one of the butterflies of median wingspan?
> 
> 2. Suppose $N$ is odd. From now on, suppose the two transformations alternate: - The first transformation applies to one of the butterflies having the median wingspan, which loses half of its wingspan. - The second transformation applies to one of the butterflies having the median wingspan, which gains half of its wingspan. Is it true that, for all $M \in \mathbb{R}$, one of the butterflies will eventually surpass the size $M$?
> 
> 3. Repeat the previous question where the second transformation instead multiplies the wingspan of the butterfly by $2$.
> 
> From now on we make the hypothesis that all the butterflies transform at the same time.
> 
> 4. Each day, each butterfly transforms into two butterflies: the first inherits $80\%$ of the wingspan of the parent, and the second $125\%$. Let $x \in \mathbb{R}_+$. Estimate the proportion of butterflies having a wingspan superior to $x$ on the $n$-th day.
> 
> 5. Each day, each butterfly transforms into two butterflies. The first inherits $80\%$ of the wingspan of the parent, and the second $125\%$ of the wingspan of the grandparent. Since there is no grandparent at the first transformation, suppose the grandparent has the same wingspan as the parent. Let $x \in \mathbb{R}_+$. What is the proportion of butterflies having a wingspan strictly superior to $x$ on the $n$-th day? (One may begin by looking at particular cases of $x$.)
> 
> 6. Each day, each butterfly transforms into two butterflies. The percentage of evolution of the wingspan of the new butterflies relative to their parents is drawn at random following a fixed discrete probability law. Can one recover this probability law by observing the evolution of the butterflies long enough?
> 
> 7. Propose and study other lines of research.

![[src_tfjm_2025__Q04.png]]

**Topic:** [[topic_algebra|Algebra]], [[topic_probabilita|Probabilità]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_disuguaglianze|Disuguaglianze]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Le larghezza delle ali delle farfalle si trasformano dimezzando o scalare (selezione media/massimale, duplicazione di ramificazione); studiare se le dimensioni rimangono limitate o crescono, e dedurre la legge di scalazione casuale.*

> Il problema 4 - Trasformazione delle farfalle.
> 
> Per i diversi tornei del TFJM2, il comitato organizzativo nazionale decide di allevare le farfalle $N$. All'origine, il numero di farfalla $i$ ha una larghezza delle ali pari a $x_i$ centimetri. Ogni giorno, alcune farfalle subiscono una trasformazione che modifica la loro larghezza delle ali.
> 
> 1. Solo in questa domanda, supponiamo di avere farfalle $2$ di larghezza iniziale $1$ cm. a) Ogni giorno, una delle due farfalle di larghezza massima ha la sua larghezza divisoria per due. Quanto tempo ci vorrà affinché entrambe le farfalle abbiano una larghezza delle ali strettamente inferiore a $0.5$ cm? E per $0.1$ cm? b) Supponiamo che $N$ sia strano. Cosa succede se la trasformazione divide per due la larghezza delle ali di una delle farfalle di larghezza media?
> 
> 2. Supponiamo che $N$ sia strano. D'ora in poi, supponiamo che le due trasformazioni si alternino: - La prima trasformazione si applica a una delle farfalle con l'ala media, che perde la metà della sua ala. - La seconda trasformazione si applica a una delle farfalle con l'apertura media delle ali, che ottiene la metà della sua apertura. È vero che, per tutti $M \in \mathbb{R}$, una delle farfalle supererà alla fine la dimensione $M$?
> 
> 3. Ripetere la domanda precedente, in cui la seconda trasformazione moltiplica invece l'espansione delle ali della farfalla di $2$.
> 
> D'ora in poi facciamo l'ipotesi che tutte le farfalle si trasformino contemporaneamente.
> 
> 4. Ogni giorno, ogni farfalla si trasforma in due farfalla: la prima eredita $80\%$ della larghezza delle ali del genitore e la seconda $125\%$. Let $x \in \mathbb{R}_+$. Calcolare la percentuale di farfalle con larghezza delle ali superiore a $x$ il giorno $n$.
> 
> 5. Ogni giorno, ogni farfalla si trasforma in due farfalla. La prima eredita $80\%$ della larghezza delle ali del genitore e la seconda $125\%$ della larghezza delle ali del nonno. Dato che non c'è nonno alla prima trasformazione, supponiamo che il nonno abbia la stessa larghezza delle ali del genitore. Let $x \in \mathbb{R}_+$. Qual è la percentuale di farfalle con una larghezza delle ali rigorosamente superiore a $x$ il giorno $n$? (Si può iniziare esaminando i casi particolari di $x$.)
> 
> 6. Ogni giorno, ogni farfalla si trasforma in due farfalla. La percentuale di evoluzione della larghezza delle ali delle nuove farfalle rispetto ai loro genitori è tracciata a caso seguendo una legge di probabilità fissa discreta. Si può recuperare questa legge di probabilità osservando l'evoluzione delle farfalle abbastanza a lungo?
> 
> 7. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2025__Q04.png]]

[[src_tfjm_2025__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_analitica,topic_geometria_piana,topic_combinatoria,method_coordinate,method_simmetria,method_casework,skill_ragionamento_geometrico,skill_modellizzazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Gerrymandering: moving district capitals within their Voronoi cell each year; characterize which capital configurations are reachable on a disk, plane, and higher dimensions.*

> Problem 5 - Gerrymandering.
> 
> In order to win the elections, Elbridge wants to move the capitals of the different districts toward positions favorable to his party, in the fewest years possible.
> 
> Let $P$ be a part of the plane representing a country, with $n \ge 2$. We call a configuration a choice of $n$ distinct points $A_1, A_2, \ldots, A_n$ representing the capitals of the $n$ districts. For a given configuration, we cut $P$ into $n$ parts $D_1, \ldots, D_n$ (the districts): district $D_i$ consists of the set of points strictly closer to $A_i$ than to all the other points $A_j$.
> 
> Each year, Elbridge can move, simultaneously, each capital $A_i$ to a new location $A_i' \in D_i$. We then say that $(A_1', \ldots, A_n')$ is realizable from $(A_1, \ldots, A_n)$ in $1$ year. Then the partition of $P$ into $n$ districts is redone for this new configuration. More generally, we say a configuration $C'$ is realizable from $C$ if there exists $a \in \mathbb{N}$ such that $C'$ is realizable from $C$ in $a$ years. See Figure 6. (Figure 6: Example where $P$ is the interior of a rectangle and $n = 3$. The third configuration is realizable from the first in $2$ years, but not in a single one.)
> 
> In a first part, we place ourselves in the case where $P$ is a circle centered at the origin. Consequently all the capitals are situated at the same distance from the center of $P$.
> 
> 1. From a given configuration, which configurations are realizable?
> 
> 2. Fix $n$. Start from the configuration $C$ where the capitals form a regular polygon centered at the origin. Is the configuration where each capital occupies the position symmetric with respect to the origin realizable? If yes, determine (as precisely as possible), as a function of $n$, the smallest value of $a$ such that it is realizable in $a$ years.
> 
> 3. Fix $n$ and a half-circle $M$ of $P$. Does there exist a value $a$ such that, for any configuration $C$, there exists a configuration realizable in $a$ years in which all the capitals belong to $M$? If yes, determine (as precisely as possible), as a function of $n$, the smallest value of $a$ that works.
> 
> 4. Fix $n$. Does there exist a value $a$ such that, for any configuration $C$ and any configuration $C'$ realizable from $C$, $C'$ is realizable in $a$ years from $C$? If yes, determine (as precisely as possible), as a function of $n$, the smallest value of $a$ that works.
> 
> 5. Reproduce the previous questions where $P$ is the whole plane. In question 3, $M$ is a half-plane.
> 
> 6. Generalize to higher dimensions.
> 
> 7. Propose and study other lines of research.

![[src_tfjm_2025__Q05.png]]

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Gerrymandering: spostamento di capitali distrettuali all'interno della loro cella Voronoi ogni anno; caratterizzare quali configurazioni di capitali sono raggiungibili su un disco, piano e dimensioni superiori.*

> Il problema 5 - Gerrymandering.
> 
> Al fine di vincere le elezioni, Elbridge vuole spostare le capitali dei diversi distretti verso posizioni favorevoli al suo partito, nel minor numero di anni possibile.
> 
> Se $P$ è parte del piano che rappresenta un paese, con $n \ge 2$. Chiamiamo una configurazione una scelta di $n$ punti distinti $A_1, A_2, \ldots, A_n$ che rappresentano le capitali dei distretti $n$. Per una data configurazione, tagliamo $P$ in $n$ parti $D_1, \ldots, D_n$ (i distretti): il distretto $D_i$ è costituito dal insieme di punti strettamente più vicini a $A_i$ che a tutti gli altri punti $A_j$.
> 
> Ogni anno, Elbridge può trasferire, contemporaneamente, ogni capitale $A_i$ in una nuova posizione $A_i' \in D_i$. Quindi diciamo che $(A_1', \ldots, A_n')$ è realizzabile da $(A_1, \ldots, A_n)$ in $1$ anno. Poi la partizione di $P$ in distretti $n$ viene rifatta per questa nuova configurazione. Più in generale, diciamo che una configurazione $C'$ è realizzabile da $C$ se esiste $a \in \mathbb{N}$ in modo tale che $C'$ è realizzabile da $C$ in $a$ anni. Cfr. figura 6. (Figura 6: Esempio in cui $P$ è l'interno di un rettangolo e $n = 3$. La terza configurazione è realizzabile a partire dalla prima in $2$ anni, ma non in una sola.)
> 
> In una prima parte, ci mettiamo nel caso in cui $P$ è un cerchio centrato all'origine. Di conseguenza, tutte le capitali sono situate alla stessa distanza dal centro di $P$.
> 
> 1. Da una data configurazione, quali configurazioni sono realizzabili?
> 
> 2. Risparmiare $n$. Partiamo dalla configurazione $C$ dove i capitali formano un poligono regolare centrato all'origine. È realizzabile la configurazione in cui ogni capitale occupa la posizione simmetrica rispetto all'origine? Se sì, determinare (con la massima precisione possibile), come funzione di $n$, il valore più piccolo di $a$ in modo tale che sia realizzabile in $a$ anni.
> 
> 3. Fissare $n$ e un semicircolo $M$ di $P$. Esiste un valore $a$ tale che, per qualsiasi configurazione $C$, esista una configurazione realizzabile in anni $a$ in cui tutti i capitali appartengono a $M$? Se sì, determinare (con la massima precisione possibile), come funzione di $n$, il valore più piccolo di $a$ che funziona.
> 
> 4. Risparmiare $n$. Esiste un valore $a$ tale che, per qualsiasi configurazione $C$ e per qualsiasi configurazione $C'$ realizzabile da $C$, $C'$ sia realizzabile in $a$ anni da $C$? Se sì, determinare (con la massima precisione possibile), come funzione di $n$, il valore più piccolo di $a$ che funziona.
> 
> 5. Riproduci le domande precedenti in cui $P$ è l'intero piano. Nella domanda 3, $M$ è un semiplano.
> 
> 6. Generalizza alle dimensioni superiori.
> 
> 7. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2025__Q05.png]]

[[src_tfjm_2025__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_algebra,topic_combinatoria,topic_probabilita,method_ricorsione,method_disuguaglianze,method_casework,skill_modellizzazione,skill_stima,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*Optimizing bus stop spacing on a line where bus speed decreases with passenger count V_k = V_0/(1+ln(k+1)); minimize bunching and travel time with holding/skip-stop strategies.*

> Problem 6 - The nightmare of the 20-25 line.
> 
> In a far country, traffic conditions are considerably degraded on bus line 20-25, which links an important railway gateway to the university campus, to the great displeasure of the students. In particular one witnesses spectacular scenes where a bus is so crowded that it slows down and stops, only to be caught up by the bus following it, sometimes with three consecutive buses queuing one behind another. Faced with this problem, the transport company TRAIP has tasked Antoine with carrying out an efficiency analysis and proposing improvements. The situation being rather complex, Antoine decides to work on a simplified model. He considers line 20-25 as a straight line, with the depot located at $0$, then a stop at each integer $n \ge 1$ (the depot is thus not considered a stop). After some observations, it appears to him that the buses move at an initial average speed $V_0$, but that their average speed decreases as they load passengers. Antoine observes that the average speed of a bus containing $k$ passengers (the driver does not count as a passenger) is given by the formula
> 
> $(1) \quad V_k = \frac{V_0}{1 + \ln(k + 1)}.$
> 
> (Antoine considers that the buses move constantly at their average speed, and the time spent at stops is included in this average speed. In other words, he acts as if the buses moved constantly at speed $V_k$, and when they reach a stop they board all the passengers there and change speed instantaneously.) We suppose passengers never get off, except when arriving at a terminus.
> 
> The buses cannot overtake; when a bus catches up to a predecessor, it follows it at the same speed (even if this means traveling slower than its average speed), and on arriving at a stop, the passengers are distributed equitably between the buses (if there were to be more buses than passengers, we suppose we fill first the bus that arrived first). Moreover, we suppose the buses have infinite transport capacity.
> 
> 1. First, Antoine is interested in what happens at rush hour. He considers that there are $N$ passengers at each stop. Two buses leave the depot, the first at time $t = 0$, the second starting when the first reaches the first stop. Do they end up catching each other?
> 
> 2. Antoine wonders what happens when the day begins and the buses leave the depot empty. a) Do the two buses end up catching each other? b) What happens in the case where the buses start in a block, the first at time $t = 0$, each following bus starting when the one that left before it reached the first stop?
> 
> 3. Antoine, being well aware that the preceding model does not account for small traffic hazards or unexpected passenger surges, now wishes to include them. He considers the following variants. a) At time $t = T$, the lead bus is immobilized for a time interval of $\frac{1}{10}$ due to a traffic jam, before resuming normal speed. b) At time $t = T$, a quantity $q$ of passengers arrives at the stop located at $n = 10$, in addition to the normal filling. Always in the case of the two buses separated by one unit of time, evaluate the impact of the two perturbations above on the rest of their journey. (Discuss the results as a function of $T$ and $q$.)
> 
> 4. Antoine now wishes to design a strategy to hold the buses at the stops at rush hour, to prevent them from catching each other. We now suppose that, when they arrive at the stops (and only then), the buses can stop and wait an arbitrary time before resuming their normal speed. A strategy is a function which, knowing the position of all the buses, the number of passengers they carry, and the number of passengers at each stop, tells each bus the time to wait when arriving at a stop. To add more realism, Antoine considers that the line ends at stop $n = 20$, considered as the depot at the end of the line; there are no passengers at this stop. When a bus stops at $n = 20$, it drops all its passengers and leaves in the other direction, picking up all the passengers who wish. We suppose the stops keep filling at a constant rate of $\rho$ passengers per unit time. Suppose two buses circulate on the line, both leaving the depot at $n = 0$, the first at time $t = 0$, the second when the predecessor reaches the first stop. a) Does there exist a strategy to hold the buses at the stops so as to prevent them from catching each other? b) What happens in the case of $m$ buses, each bus after the first leaving when the predecessor reached the first stop?
> 
> 5. Antoine wishes to explore one last idea to improve passenger travel time. We place ourselves again in the frame of question 2, with two buses circulating, where the stops are initially empty and fill progressively. Suppose there is a countably infinite set of stops indexed by the natural numbers. Antoine supposes the first bus serves only the odd stops, and the second only the even stops. a) Does this strategy present a gain in terms of passenger travel time? Quantify it as precisely as possible. b) To push his idea further, Antoine now supposes a bus starts at each integer time $t$, and that the buses serve the stops in steps of $k$. More precisely, the first bus serves the multiples of $k$, the next serves the multiples of $k$ plus $1$, and so on. After $k$ buses, the scheme repeats: the $(k+1)$-th bus serves the multiples of $k$, the $(k+2)$-th serves the multiples of $k$ plus $1$, and so on. Quantify the eventual gain in passenger travel time, and examine what happens as $k \to +\infty$. c) Antoine decides to push his idea even further, adding more stops to spread the passengers over more stops. He supposes there is now a stop at $\frac{n}{k}$ for each integer $n \ge 1$, and that travelers arrive at the stops at a rate of $\frac{\rho}{k}$ passengers per unit time. We always consider a bus leaves the depot at each unit of time. We are particularly interested in what happens in the limit as $k \to +\infty$.
> 
> 6. Propose and study other lines of research.

![[src_tfjm_2025__Q06.png]]

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_disuguaglianze|Disuguaglianze]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Optimizzare l'intervallo tra le fermate degli autobus su una linea in cui la velocità dell'autobus diminuisce con il numero di passeggeri V_k = V_0/(1+ln(k+1)); ridurre al minimo il tempo di aggregazione e di viaggio con le strategie di tenuta/scappa-stop.*

> Problema 6 - Il incubo della linea 20-25.
> 
> In un paese lontano, le condizioni del traffico sono notevolmente degradate sulla linea di autobus 20-25, che collega un importante cancello ferroviario al campus universitario, a grande disgusto degli studenti. In particolare si assistono a spettacolari scene in cui un autobus è così affollato che rallenta e si ferma, solo per essere catturato dal bus che lo segue, a volte con tre autobus consecutivi in coda uno dietro l'altro. Di fronte a questo problema, la società di trasporto TRAIP ha incaricato Antoine di effettuare un'analisi dell'efficienza e di proporre miglioramenti. Essendo la situazione piuttosto complessa, Antoine decide di lavorare su un modello semplificato. Egli considera la linea 20-25 come una linea retta, con il deposito situato a $0$, quindi un stop a ogni numero intero $n \ge 1$ (il deposito non è quindi considerato un stop). Dopo alcune osservazioni, gli appare che gli autobus si muovono a una velocità media iniziale $V_0$, ma che la loro velocità media diminuisce con il carico dei passeggeri. Antoine osserva che la velocità media di un autobus contenente $k$ passeggeri (il conducente non conta come passeggero) è data dalla formula
> 
> $(1) \quad V_k = \frac{V_0}{1 + \ln(k + 1)}.$
> 
> (Antoine ritiene che gli autobus si muovano costantemente alla loro velocità media, e il tempo trascorso nelle fermate è incluso in questa velocità media. In altre parole, si comporta come se gli autobus si muovessero costantemente a velocità $V_k$, e quando raggiungono una fermata imbarcano tutti i passeggeri lì e cambiano velocità istantaneamente.)
> 
> Gli autobus non possono superare; quando un autobus raggiunge un predecessore, lo segue alla stessa velocità (anche se questo significa viaggiare più lentamente della sua velocità media), e all'arrivo alla fermata, i passeggeri sono distribuiti in modo equo tra gli autobus (se ci fossero più autobus dei passeggeri, supponiamo di riempire prima l'autobus che è arrivato prima). Inoltre, supponiamo che gli autobus abbiano una capacità di trasporto infinita.
> 
> 1. Innanzitutto, Antoine si interessa di quello che accade nelle ore di punta. Egli ritiene che ci siano $N$ passeggeri in ogni fermata. Due autobus usciranno dal deposito, il primo all'orario $t = 0$, il secondo partendo quando il primo raggiungerà la prima fermata. Si incastrano a vicenda?
> 
> 2. Antoine si chiede cosa succede quando inizia la giornata e gli autobus lasciano il deposito vuoto. a) I due autobus si raggiungono? b) Che cosa succede nel caso in cui gli autobus partono in un blocco, il primo al tempo $t = 0$, ogni autobus successivo partendo quando quello che è partito prima di raggiungere la prima fermata?
> 
> 3. Antoine, ben consapevole del fatto che il modello precedente non tiene conto di piccoli pericoli stradali o di un'inattesa ondata di passeggeri, desidera ora includerli. Egli considera le seguenti varianti. a) All'ora $t = T$, l'autobus principale è immobilizzato per un intervallo di tempo $\frac{1}{10}$ a causa di un ingorghi, prima di riprendere la velocità normale. b) Al momento $t = T$, una quantità $q$ di passeggeri arriva alla fermata situata a $n = 10$, oltre al normale riempimento. Sempre nel caso dei due autobus separati da un'unità di tempo, valutare l'impatto delle due perturbazioni di cui sopra sul resto del loro viaggio. (Discutere i risultati come funzione di $T$ e $q$.)
> 
> 4. Antoine ora desidera progettare una strategia per trattenere gli autobus alle fermate all'ora di punta, per evitare che si raggiungano. Ora supponiamo che, quando arrivano alle fermate (e solo allora), gli autobus possano fermarsi e aspettare un tempo arbitrario prima di riprendere la loro velocità normale. Una strategia è una funzione che, conoscendo la posizione di tutti gli autobus, il numero di passeggeri che trasportano e il numero di passeggeri a ogni fermata, indica a ogni autobus l'ora di attesa quando arriva alla fermata. Per aggiungere più realismo, Antoine ritiene che la linea finisca alla fermata $n = 20$, considerata come il deposito alla fine della linea; non ci sono passeggeri a questa fermata. Quando un autobus si ferma a $n = 20$, scende tutti i suoi passeggeri e parte nell'altra direzione, raccogliendo tutti i passeggeri che lo desiderano. Supponiamo che le fermate continuino a riempire a un ritmo costante di $\rho$ passeggeri per unità di tempo. Supponiamo che due autobus circolino sulla linea, entrambi lasciano il deposito a $n = 0$, il primo a tempo $t = 0$, il secondo quando il predecessore raggiunge la prima fermata. a) Esiste una strategia per trattenere gli autobus alle fermate in modo da evitare che si attraversino? b) Che succede nel caso degli autobus $m$, ogni autobus dopo la prima partenza quando il predecessore ha raggiunto la prima fermata?
> 
> 5. Antoine vuole esplorare un'ultima idea per migliorare il tempo di viaggio dei passeggeri. Ci riportiamo nel quadro della domanda 2, con due autobus in circolazione, dove le fermate sono inizialmente vuote e si riempiono progressivamente. Supponiamo che ci sia un insieme contabile infinito di fermate indicizzate dai numeri naturali. Antoine suppone che il primo autobus serva solo le fermate rare, e il secondo solo le fermate pari. a) Questa strategia presenta un guadagno in termini di tempo di viaggio dei passeggeri? Quantificalo il più precisamente possibile. b) Per far proseguire la sua idea, Antoine suppone ora che un autobus partisca a ogni orario intero $t$, e che gli autobus servano le fermate in passi $k$. Più precisamente, il primo autobus serve i multipli di $k$, il successivo serve i multipli di $k$ più $1$, e così via. Dopo gli autobus $k$, lo schema si ripete: il bus $(k+1)$-th serve i multipli di $k$, il $(k+2)$-th serve i multipli di $k$ più $1$, e così via. Quantificare l'eventuale guadagno nel tempo di viaggio dei passeggeri e esaminare ciò che accade come $k \to +\infty$. c) Antoine decide di spingere ancora di più la sua idea, aggiungendo più fermate per diffondere i passeggeri su più fermate. Egli suppone che ci sia ora una fermata a $\frac{n}{k}$ per ogni numero intero $n \ge 1$, e che i viaggiatori arrivano alle fermate a un tasso di $\frac{\rho}{k}$ passeggeri per unità di tempo. Consideriamo sempre che un autobus lascia il deposito a ogni unità di tempo. Siamo particolarmente interessati a ciò che accade nel limite di $k \to +\infty$.
> 
> 6. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2025__Q06.png]]

[[src_tfjm_2025__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_combinatoria,topic_combinatoria,topic_aritmetica,method_grafi,method_estremalita,method_casework,skill_conteggio_sistematico,skill_ragionamento_geometrico,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Road tolls between n cities labeled 1..n; toll on a road equals max of its endpoint labels; optimize total cost over various network graphs, plus a numbering game between king and ASMR.*

> Problem 7 - Road taxes.
> 
> In a far country, king Louis XLIX-III wants to tax the roads to maximize his revenue. The Association of the Syndicate of Discontented Road-users (ASMR) tries to reduce the travel costs as much as possible.
> 
> In this country there are $n$ cities ($n \in \mathbb{N}^*$). Certain cities are linked by a road, thus forming the road system. The tax system is as follows: all cities are assigned a number from $1$ to $n$ (each number being used exactly once). The tax to pay for a road linking a city of number $i$ to a city of number $j$ is the maximum between $i$ and $j$. The total cost of the road system is the sum of all taxes to pay for each of the roads. The total cost depends on the way the cities are numbered. Figure 7 shows two examples. (Figure 7: on the left, an example of total cost $12$; on the right, an example of total cost $14$.)
> 
> 1. What is the maximal and minimal value of the total cost if there are $4$ cities forming a square, illustrated in Figure 8? (Figure 8: the square road system.)
> 
> 2. What is the maximal and minimal value of the total cost for the following cases (see also Figures 9 and 10)? a) Complete road system: for each pair of cities there is exactly one road. b) Pairwise road system: there are $n = 2m$ cities linked in pairs. c) Ring road system: the $n$ cities form a ring with $n \ge 3$. d) Grid road system: there are $n = k^2$ cities forming a grid. (Figure 9: complete road system with $n = 6$ (left), pairwise with $m = 3$ (middle), ring with $n = 6$ (right). Figure 10: grid road system with $k = 3$.)
> 
> 3. Find formulas or estimates for the maximal and minimal total cost of an arbitrary road system.
> 
> After many strikes, the king and the ASMR agree on the following way to assign the numbers to the cities: in turn, they assign a number between $1$ and $n$ to a city. They may not reassign a number already used, and they may not assign a number to a city that already has one. The king begins. The king's goal is to obtain the largest possible total cost, while the ASMR seeks to obtain the smallest possible total cost.
> 
> 4. Considering the road systems of the previous questions, describe the strategies of the king and the ASMR. What is the total cost of the road system when both assign the numbers optimally? What is the largest cost the king can guarantee obtaining whatever the ASMR plays? And what is the smallest cost the ASMR can guarantee obtaining whatever the king plays?
> 
> King Louis XLIX-III abuses his power to change the tax on the roads. Instead of using the maximum of the two numbers at the endpoint cities, he uses a function $f$. The total cost of the road system remains the sum of the taxes of all the roads.
> 
> 5. Repeat the previous questions where the king uses for $f$ the product of the two numbers.
> 
> 6. Repeat the previous questions where the king uses for $f$ the least common multiple of the two numbers.
> 
> 7. Propose and study other lines of research.

![[src_tfjm_2025__Q07.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_combinatoria|topic_combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Tollaggi stradali tra n città etichettati 1..n; tollaggio su una strada pari al massimo delle etichette dei suoi punti di fine; ottimizzazione del costo totale su vari grafici di rete, più un gioco di numerazione tra king e ASMR.*

> Il problema 7 - tasse stradali.
> 
> In un paese lontano, il re Luigi XLIX-III vuole tassare le strade per massimizzare le sue entrate. L'Associazione degli utenti stradali insoddisfatti (ASMR) cerca di ridurre il più possibile i costi di viaggio.
> 
> In questo paese ci sono $n$ città ($n \in \mathbb{N}^*$). Alcune città sono collegate da una strada, formando così il sistema stradale. Il sistema fiscale è il seguente: a tutte le città viene assegnato un numero da $1$ a $n$ (ogni numero viene utilizzato esattamente una volta). La tassa da pagare per una strada che collega una città di numero $i$ a una città di numero $j$ è il massimo tra $i$ e $j$. Il costo totale del sistema stradale è la somma di tutte le tasse da pagare per ciascuna strada. Il costo totale dipende dal numero delle città. La figura 7 mostra due esempi. (Figura 7: a sinistra, un esempio del costo totale $12$; a destra, un esempio del costo totale $14$.)
> 
> 1. Qual è il valore massimo e minimo del costo totale se ci sono $4$ città che formano un quadrato, come illustrato nella figura 8? (Figura 8: sistema di strade quadrate.)
> 
> 2. Qual è il valore massimo e minimo del costo totale per i seguenti casi (vedere anche le figure 9 e 10)? a) Sistema stradale completo: per ogni coppia di città esiste esattamente una strada. b) Sistema stradale in coppia: ci sono città collegate in coppie. c) Sistema di strade circolare: le città $n$ formano un anello con $n \ge 3$. d) Sistema stradale di rete: ci sono $n = k^2$ città che formano una rete. (Figura 9: sistema stradale completo con $n = 6$ (a sinistra), in coppia con $m = 3$ (in mezzo), anello con $n = 6$ (a destra). Figura 10: sistema stradale di rete con $k = 3$.)
> 
> 3. Trovare formule o stime per il costo totale massimo e minimo di un sistema stradale arbitrario.
> 
> Dopo molti scioperi, il re e l'ASMR concordano sul seguente modo di assegnare i numeri alle città: a loro volta, assegnano un numero tra $1$ e $n$ a una città. Non possono assegnare nuovamente un numero già usato, e non possono assegnare un numero a una città che ne ha già uno. Il re comincia. L'obiettivo del re è quello di ottenere il costo totale più grande possibile, mentre l'ASMR cerca di ottenere il costo totale più piccolo possibile.
> 
> 4. Considerando i sistemi stradali delle domande precedenti, descrivi le strategie del re e dell'ASMR. Qual è il costo totale del sistema stradale quando entrambi assegnano i numeri in modo ottimale? Qual è il costo più alto che il re può garantire per ottenere qualsiasi cosa l'ASMR gioca? E qual è il costo più basso che l'ASMR può garantire per ottenere qualsiasi cosa il re gioca?
> 
> Il re Luigi XLIX-III abusa del suo potere per cambiare l'imposta sulle strade. Invece di utilizzare il massimo dei due numeri nelle città del punto di fine, utilizza una funzione $f$. Il costo totale del sistema stradale rimane la somma delle tasse di tutte le strade.
> 
> 5. Ripetere le domande precedenti in cui il re usa per $f$ il prodotto dei due numeri.
> 
> 6. Ripetere le domande precedenti in cui il re usa per $f$ il più piccolo comune dei due numeri.
> 
> 7. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2025__Q07.png]]

[[src_tfjm_2025__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,topic_probabilita,topic_logica,method_casework,method_simmetria,method_conteggio,skill_casework_accurato,skill_modellizzazione,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="en"></div>


*Two-player game coloring 2n points on a circle (orange/blue); winner forms the longest monochromatic arc. Study strategies and winning probabilities versus random and skilled opponents.*

> Problem 8 - Colored points on a circle.
> 
> Lucie has invented a game for two players. The rules are as follows.
> 
> The game takes place on a circle. At the start, the points of the circle are uncolored. One of the two adversaries is designated to play first. In turn, Lucie and her adversary each choose a point, which is then colored in their respective color: Orange for Lucie, Blue for her adversary. When they play, it is forbidden to choose a point already colored by one of them. Lucie agrees in advance on the number of moves the game will last. Both play the same number of moves, so the number of moves is an even integer, denoted $2n$. For example, if the number of moves is $2n = 6$, they each play $n = 3$ moves. The game stops once the $2n$ moves are played.
> 
> At the end of the game, the circle is cut into arcs whose endpoints are either orange or blue. In such a configuration, a primitive arc is an arc whose two endpoints are colored (in orange or blue) and which contains no other colored point (for example, the whole circle, seen as an arc, is never primitive). Primitive arcs whose two endpoints have different colors are neutral; but the winner is the one who has formed the longest arc, not necessarily primitive, entirely colored in his own color. If there is a tie of such arcs, or if none exists, the game is declared null (a draw).
> 
> Throughout the problem, we call strategy a deterministic way of describing what to play as a function of the moves played previously. In other words, a strategy is an algorithm that indicates which move to play depending on the current situation, so that in two identical situations it always indicates the same move.
> 
> Since Lucie does not like to lose, she begins by choosing as adversary the Village Idiot, who, true to his name, plays his moves randomly, without thinking. Each move played then follows a uniform law on the circle. Lucie seeks strategies that maximize her probability of winning against this adversary. (Figure 11: two ends of game for $2n = 6$ and one for $2n = 10$. On the left, there are no colored arcs: the game is null. In the center, Lucie (orange) wins: she managed to build an arc of maximal size. On the right, the adversary (blue) wins because he formed a (non-primitive) blue arc of maximal size.)
> 
> Lucie and her adversary agree to begin by fixing $2n = 4$.
> 
> 1. If Lucie lets her adversary play first, does she have a strategy allowing her to win with certainty?
> 
> 2. After she wins a game, her adversary lets her play first. a) Does Lucie have a strategy allowing her to win whatever happens? b) Study the set of $p \in [0, 1]$ such that there exists a strategy allowing Lucie to win with probability exactly $p$. c) Same question for the probabilities of not losing.
> 
> 3. Lucie and her adversary now choose $2n > 4$. a) Repeat the previous question for $2n > 4$. One may begin with the case $2n = 6$. b) Same question for the probabilities of not losing.
> 
> Lucie proposes to change the rules. They agree on an integer $k$, and the rules are changed so that Lucie's adversary places $k$ points rather than $n$. The adversary plays all his points first. He still plays randomly on the circle, but Lucie places all her points afterward, so that she then has full liberty to choose where to place her points. Lucie thus has more information than her adversary, but in return the latter plays more points than she does.
> 
> 4. As a function of $n$ and $k$, does Lucie have a strategy allowing her to win with probability $1$?
> 
> To try, Lucie and her adversary take exactly the same configuration as before, but exchanging the roles. Lucie places $k$ points, her adversary places $n$. The latter still plays randomly, and Lucie places all her points first.
> 
> 5. Study the set of $p \in [0, 1]$ such that there exists a strategy allowing Lucie to win with probability $p$.
> 
> Tired of playing with the Village Idiot, Lucie finds an adversary of her caliber: Lucien. One of the two players is designated to play first, and $2n \in \mathbb{N}$ is fixed. The turn-by-turn rule is then applied. Lucien begins to play.
> 
> 6. Does one of the two players have a strategy allowing him to win for sure? If yes, describe one.
> 
> 7. Repeat the problem if Lucie had agreed from the start that the winner is not the one having the longest arc, but the one who managed to maximize the sum of the lengths of the primitive arcs of his color.
> 
> 8. Propose and study other lines of research.

![[src_tfjm_2025__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_simmetria|Simmetria]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Gioco per due giocatori colorando 2n punti su un cerchio (arancio/blu); il vincitore forma l'arco monocromatico più lungo. Studiare le strategie e le probabilità di vincere contro avversari casuali e qualificati.*

> Problema 8 - Punti colorati su un cerchio.
> 
> Lucie ha inventato un gioco per due giocatori. Le regole sono le seguenti.
> 
> Il gioco si svolge su un cerchio. All'inizio, i punti del cerchio sono incolori. Uno dei due avversari è designato per giocare per primo. A sua volta, Lucie e il suo avversario scelgono ognuno un punto, che viene poi colorato nel loro rispettivo colore: Orange per Lucie, Blu per il suo avversario. Quando giocano, è vietato scegliere un punto già colorato da uno di loro. Lucie accetta in anticipo il numero di mosse che durerà la partita. Entrambi giocano lo stesso numero di mosse, quindi il numero di mosse è un numero intero pari, indicato $2n$. Ad esempio, se il numero di mosse è $2n = 6$, ognuno di essi gioca $n = 3$ mosse. La partita si ferma una volta che vengono eseguite le mosse $2n$.
> 
> Alla fine del gioco, il cerchio viene tagliato in archi i cui punti terminali sono arancioni o blu. In una tale configurazione, un arco primitivo è un arco i cui due punti finali sono colorati (in arancione o blu) e che non contiene nessun altro punto colorato (ad esempio, l'intero cerchio, visto come un arco, non è mai primitivo). Gli archi primitivi i cui due punti finali hanno colori diversi sono neutrali; ma il vincitore è colui che ha formato l'arco più lungo, non necessariamente primitivo, interamente colorato nel suo colore. Se c'è una parità di tali archi, o se non esiste, la partita è dichiarata nulla (un pareggio).
> 
> In tutto il problema, chiamiamo strategia un modo deterministico di descrivere cosa giocare in funzione delle mosse eseguite in precedenza. In altre parole, una strategia è un algoritmo che indica quale mossa giocare a seconda della situazione attuale, in modo che in due situazioni identiche indica sempre la stessa mossa.
> 
> Poiché a Lucie non piace perdere, inizia scegliendo come avversario l'idiota del villaggio, che, fedele al suo nome, gioca le sue mosse in modo casuale, senza pensare. Ogni mossa giocata segue una legge uniforme sul cerchio. Lucie cerca strategie che massimizzino la sua probabilità di vincere contro questo avversario. (Figura 11: due estremità di gioco per $2n = 6$ e una per $2n = 10$. A sinistra non ci sono archi colorati: il gioco è nullo. Nel centro, Lucie (arancione) vince: riesce a costruire un arco di dimensioni massime. A destra, l'avversario (blu) vince perché ha formato un arco blu (non primitivo) di dimensioni massime.)
> 
> Lucie e il suo avversario concordano di iniziare fissando $2n = 4$.
> 
> 1. Se Lucie lascia che il suo avversario giochi per primo, ha una strategia che le permette di vincere con certezza?
> 
> 2. Dopo aver vinto una partita, il suo avversario la lascia giocare prima. a) Lucie ha una strategia che le permetta di vincere qualsiasi cosa succeda? b) Studiare l'insieme di $p \in [0, 1]$ in modo tale che esista una strategia che consente a Lucie di vincere con probabilità esattamente $p$. c) La stessa domanda per le probabilità di non perdere.
> 
> 3. Lucie e il suo avversario scelgono ora $2n > 4$. a) Ripetere la domanda precedente per $2n > 4$. Si può iniziare con il caso $2n = 6$. b) La stessa domanda per le probabilità di non perdere.
> 
> Lucie propone di cambiare le regole. Sono d'accordo su un intero $k$, e le regole sono cambiate in modo che l'avversario di Lucie collochi $k$ punti piuttosto che $n$. L'avversario gioca tutti i suoi punti prima. Lui gioca ancora a caso sul cerchio, ma Lucie mette tutti i suoi punti dopo, in modo che lei abbia poi piena libertà di scegliere dove mettere i suoi punti. Lucie ha quindi più informazioni del suo avversario, ma a sua volta quest'ultimo gioca più punti di lei.
> 
> 4. Come funzione di $n$ e $k$, Lucie ha una strategia che le consente di vincere con probabilità $1$?
> 
> Per provare, Lucie e il suo avversario assumono esattamente la stessa configurazione di prima, ma scambiando i ruoli. Lucie mette $k$ punti, il suo avversario mette $n$. Quest'ultimo gioca ancora casualmente, e Lucie mette tutti i suoi punti in primo luogo.
> 
> 5. Studiare l'insieme di $p \in [0, 1]$ in modo che esista una strategia che consente a Lucie di vincere con probabilità $p$.
> 
> Stanca di giocare con l'idiota del villaggio, Lucie trova un avversario del suo calibro: Lucien. Uno dei due giocatori è designato per giocare per primo e $2n \in \mathbb{N}$ è fissato. Si applica quindi la regola di turno a turno. Lucien comincia a suonare.
> 
> 6. Uno dei due giocatori ha una strategia che gli permette di vincere con certezza? Se sì, descrivi uno.
> 
> 7. Ripetere il problema se Lucie avesse accettato fin dall'inizio che il vincitore non è colui che ha l'arco più lungo, ma colui che è riuscito a massimizzare la somma delle lunghezze degli archi primitivi del suo colore.
> 
> 8. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2025__Q08.png]]

[[src_tfjm_2025__Q08]]
