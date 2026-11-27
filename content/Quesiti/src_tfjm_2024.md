---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024
tipo: gara
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024
family: tfjm
year: '2024'
level: TFJM²
---
<div class="atom-reader" data-gara="Quesiti/src_tfjm_2024"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,method_conteggio,method_casework,method_casi_conteggio,method_simmetria,method_colorazione,skill_conteggio_sistematico,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Triominoes: triangular tiles bearing numbers from 1 to n on each side (then on vertices); count the tiles and find which n admit a matching configuration, a straight-line arrangement, or a full rhombus.*

> Soit $n \geqslant 1$ un entier, fixé dans la suite du problème. Alexander a des pièces triangulaires, appelées triominos. Sur chaque triomino, trois nombres entre $1$ et $n$ sont inscrits, un sur chaque côté. Un même nombre peut apparaître plusieurs fois sur un triomino.
>
> Alexander décide de placer les triominos les uns à côté des autres dans le plan, de sorte que les numéros écrits sur deux côtés adjacents coïncident toujours. On appelle cela une configuration.
>
> Deux triominos sont considérés comme identiques si on peut obtenir l'un à partir de l'autre par rotation. En revanche, on ne peut pas retourner un triomino (c'est-à-dire lui appliquer une symétrie axiale).
>
> Alexander possède un jeu complet de triominos, composé d'un unique exemplaire de chaque triomino possible en utilisant les nombres de $1$ à $n$.
>
> **1.** Combien Alexander possède-t-il de triominos ?
>
> **2.** Pour quelles valeurs de $n$ Alexander peut-il trouver une configuration utilisant toutes les pièces ?
>
> Alexander souhaite disposer ses triominos en ligne droite, de la façon suivante :
>
> **3.** Pour quelles valeurs de $n$ Alexander peut-il disposer tous les triominos en ligne droite ? On pourra commencer par traiter les cas $n = 2, 3, 4$.
>
> Désormais, les nombres ne sont plus écrits sur les côtés mais sur les sommets des triangles. Alexander souhaite donc que les nombres écrits sur deux sommets adjacents coïncident.
>
> On suppose pour commencer que parmi les trois nombres qui apparaissent sur chaque pièce, il y en a au plus deux différents (il y en a donc un qui apparaît au moins deux fois).
>
> **4.** Reprendre les questions **1.** à **3.** dans ce cadre.
>
> Maintenant les trois nombres aux sommets des pièces triangulaires sont quelconques, toujours compris entre $1$ et $n$.
>
> **5.** Reprendre les questions **1.** à **3.** dans ce cadre.
>
> **6.** Estimer, en fonction de $n$, la taille du plus grand losange plein qu'Alexander peut former avec ses triominos.
>
> **7.** Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_casi_conteggio|Casi e conteggio]], [[method_simmetria|Using symmetry]], [[method_colorazione|Colouring / parity]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)


<div class="qlang-split" data-lang="it"></div>

*Triomini: tessere triangolari con numeri da 1 a n su ciascun lato (poi sui vertici); contare le tessere e determinare per quali n esiste una configurazione compatibile, una disposizione in linea retta o un rombo completo.*
> Alessandro ha pezzi triangolari, chiamati triomini. Su ciascun triomino sono scritti tre numeri tra $1$ e $n$, uno su ciascun lato. Lo stesso numero può apparire più volte su un triomino.
> 
> Alessandro decide di posizionare i suoi triomini fianco a fianco nel piano, in modo che i numeri scritti su due lati adiacenti coincidano sempre. Questo è chiamato $\textbf{configuration}$.
> 
> Due triomini sono considerati identici se uno può essere ottenuto dall'altro mediante una rotazione. D'altra parte, un triomino non può essere girato (cioè non può essere applicata una simmetria assiale).
> 
> Alexander possiede un insieme completo di triomini, composto da una copia di ogni triomino possibile utilizzando i numeri da $1$ a $n$.
> 
> Quanti triomini ha Alexander?
> 
> Per quali valori di $n$ Alexander può trovare una configurazione utilizzando tutti i pezzi?
> 
> Alexander vuole organizzare i suoi triomini in linea retta, nel modo seguente (una striscia orizzontale di triomini alternando punti su e punti giù).
> 
> Per quali valori di$n$può Alexander organizzare tutti i triomini in linea retta? Si può iniziare con il trattamento dei casi $n = 2, 3, 4$.
> 
> D'ora in poi, i numeri non sono più scritti sui lati, ma sulle cime dei triangoli. Alexander ora desidera che i numeri scritti su due vertici adiacenti coincidano.
> 
> Si suppone in primo luogo che tra i tre numeri che appaiono su ogni pezzo, ci siano al massimo due distinti (se ci sono due, allora un numero appare almeno due volte).
> 
> $\textbf{4.}$ Ripeti le domande $\textbf{1.}$ a $\textbf{3.}$ in questa impostazione.
> 
> Ora i tre numeri sulle vertici dei pezzi triangolari sono arbitrari, tutti compresi tra $1$ e $n$.
> 
> $\textbf{5.}$ Ripeti le domande $\textbf{1.}$ a $\textbf{3.}$ in questa impostazione.
> 
> $\textbf{6.}$ Trova, come funzione di $n$, la dimensione del più grande rombo completo che Alexander può formare con i suoi triomini.
> 
> $\textbf{7.}$ Proporre e studiare altre vie di ricerca.

![[src_tfjm_2024__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]], [[method_casi_conteggio|Conteggio per casi]], [[method_simmetria|Sfruttamento della simmetria]], [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Triominoes: triangular tiles bearing numbers from 1 to n on each side (then on vertices); count the tiles and find which n admit a matching configuration, a straight-line arrangement, or a full rhombus.*

> Alexander has triangular pieces, called triominoes. On each triomino, three numbers between $1$ and $n$ are inscribed, one on each side. A same number may appear several times on a triomino.
> 
> Alexander decides to place his triominoes side by side in the plane, so that the numbers written on two adjacent sides always coincide. This is called a $\textbf{configuration}$.
> 
> Two triominoes are considered identical if one can be obtained from the other by a rotation. On the other hand, a triomino may not be turned over (that is, one may not apply an axial symmetry to it).
> 
> Alexander possesses a complete set of triominoes, composed of a single copy of each triomino possible using the numbers from $1$ to $n$.
> 
> $\textbf{1.}$ How many triominoes does Alexander have?
> 
> $\textbf{2.}$ For which values of $n$ can Alexander find a configuration using all the pieces?
> 
> Alexander wishes to arrange his triominoes in a straight line, in the following way (a horizontal strip of triominoes alternating point-up and point-down).
> 
> $\textbf{3.}$ For which values of $n$ can Alexander arrange all the triominoes in a straight line? One may begin by treating the cases $n = 2, 3, 4$.
> 
> From now on, the numbers are no longer written on the sides but on the vertices of the triangles. Alexander now wishes that the numbers written on two adjacent vertices coincide.
> 
> One supposes first that among the three numbers that appear on each piece, there are at most two distinct ones (if there are two then one number appears at least twice).
> 
> $\textbf{4.}$ Reprise questions $\textbf{1.}$ to $\textbf{3.}$ in this setting.
> 
> Now the three numbers on the vertices of the triangular pieces are arbitrary, all comprised between $1$ and $n$.
> 
> $\textbf{5.}$ Reprise questions $\textbf{1.}$ to $\textbf{3.}$ in this setting.
> 
> $\textbf{6.}$ Find, as a function of $n$, the size of the largest full rhombus that Alexander can form with his triominoes.
> 
> $\textbf{7.}$ Propose and study other avenues of research.

![[src_tfjm_2024__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_casi_conteggio|Casi e conteggio]], [[method_simmetria|Using symmetry]], [[method_colorazione|Colouring / parity]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,method_casework,method_estremalita,method_conteggio,method_doppio_conteggio,skill_conteggio_sistematico,skill_astrazione,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Mathematics gatherings: seating n=tp people at t tables of p>=2 places over r meals so that two people never share a table more than once (ideal plan); also study f-uniform plans.*

> Lors d'un tournoi de mathématiques, des jeunes mathématiciennes et mathématiciens se rencontrent. Perrine doit définir des plans de placements pour les repas, c'est-à-dire définir chaque jour qui s'assiéra où. Elle souhaite que les participants se mélangent au maximum au moment des repas donc élaborer un plan de placement des participants sur plusieurs jours de sorte que chacun ait mangé au moins une fois avec tous les autres. Un tel plan est dit idéal.
>
> Dans la salle à manger, il y a $t$ tables, chacune avec $p \geqslant 2$ places. Au total, $n = tp$ personnes participent à l'olympiade et prennent $r$ repas ensemble.
>
> **1.** Perrine peut-elle toujours trouver un plan idéal si $r = \lceil (n-1)/(p-1) \rceil$ ? Que se passe-t-il si on a $r < \lceil (n-1)/(p-1) \rceil$ ?
>
> **2.** Donner le $r$ minimal permettant de construire un plan idéal et décrire ce plan dans les cas suivants :
>
> a) si $p = 2$ et $t = 3$,
>
> b) si $t = p = 3$,
>
> c) si $t = 3$ et $p = 6$,
>
> d) si $t = 2$ et $p$ quelconque.
>
> **3.** Estimer la valeur minimale de $r$ permettant de construire un plan idéal et décrire ce plan dans les cas suivants :
>
> a) si $t = p$ (on pourra commencer par regarder les cas où $p$ est un nombre premier ou une puissance de nombre premier) ;
>
> b) si $t$ est une puissance de $p$.
>
> **4.** Proposer d'autres plans idéaux dans le cas général.
>
> Pour éviter que les participants ne se lassent, Perrine essaie d'uniformiser le plan : elle veut faire en sorte que deux participants quelconques ne se retrouvent pas plus de $f$ fois à la même table, où $f \geqslant 1$. Un tel plan est dit $f$-uniforme.
>
> **5.** Décrire les valeurs de $p$ et $t$ pour lesquelles on peut trouver un plan idéal $1$-uniforme.
>
> **6.** Existe-t-il toujours un plan idéal $2$-uniforme ? Plus généralement, existe-t-il une valeur de $f$ telle qu'il existe un plan idéal $f$-uniforme quels que soient $p$ et $t$ ?
>
> **7.** Estimer, en fonction de $p$ et $t$, la valeur minimale de $f$ pour laquelle il existe un plan idéal $f$-uniforme. On pourra reprendre les cas particuliers proposés précédemment.
>
> **8.** Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]], [[method_doppio_conteggio|Double counting]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)


<div class="qlang-split" data-lang="it"></div>


*Rivvenimenti di matematica: sedere n=tp persone a tavoli di p>=2 posti su r pasti in modo che due persone non condividano mai un tavolo più di una volta (piano ideale); studiare anche piani f-uniforme.*

> Durante un torneo di matematica, giovani matematici si incontrano. Per ogni pasto i partecipanti si dividono in gruppi, ciascun gruppo corrisponde a una tavola. Essi desiderano definire un piano diverso a ogni pasto, in modo che due partecipanti non si sedano mai più di una volta allo stesso tavolo. Un piano che lo raggiunga si chiama $\textbf{ideal}$.
> 
> Nella sala da pranzo ci sono tavoli $t$, ciascuno con posti $p \ge 2$. In totale, le persone $n = tp$ partecipano alle Olimpiadi e ci sono pasti $r$.
> 
> $\textbf{1.}$ Perrine può sempre trovare un piano ideale se $r = \lceil (n-1)/(p-1) \rceil$? E cosa succede se $r < \lceil (n-1)/(p-1) \rceil$?
> 
> $\textbf{2.}$ Indicare il minimo $r$ che consente di costruire un piano ideale e descrivere il piano nei seguenti casi: a) se $p = 2$ e $t = 3$; b) se $t = p = 3$; c) se $t = 3$ e $p = 6$; d) se $t = 2$ e $p$ sono arbitrari.
> 
> $\textbf{3.}$ Estimare il valore minimo di $r$ che consente di costruire un piano ideale e descrivere il piano nei seguenti casi: a) se $t = p$ (si può iniziare esaminando il caso in cui $p$ è un numero primo); b) se $t$ e $p$ sono potenze di $p$.
> 
> Propone altri piani ideali nel caso generale.
> 
> Per rendere i pasti piacevoli, Perrine cerca di rendere tutti uniformi: non vuole che nessun partecipante si sedi con gli stessi partecipanti più di $f$ volte allo stesso tavolo, per $f \ge 1$. Un piano che soddisfa questo è chiamato $f$-$\textbf{uniform}$.
> 
> $\textbf{5.}$ Descrivere i valori di $p$ e $t$ per i quali si può trovare un piano ideale uniforme $1$.
> 
> Esiste sempre un piano ideale uniforme? In tal caso, indicare un valore di $f$ tale che esista un piano ideale uniforme di $f$ per un dato $p$ e $t$.
> 
> $\textbf{7.}$ Estimare, in funzione di $p$ e $t$, il valore minimo di $f$ per il quale esiste un piano ideale uniforme $f$, ripetendo le stime precedentemente proposte.
> 
> $\textbf{8.}$ Proporre e studiare altre vie di ricerca.

![[src_tfjm_2024__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]], [[method_conteggio|Conteggio combinatorio]], [[method_doppio_conteggio|Doppio conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Mathematics gatherings: seating n=tp people at t tables of p>=2 places over r meals so that two people never share a table more than once (ideal plan); also study f-uniform plans.*

> During a mathematics tournament, young mathematicians meet. They define $\textbf{seating plans}$ for the meals: at each meal, the participants split into groups, each group corresponding to a table. They wish to define a different plan at each meal, so that two participants never sit at the same table more than once. A plan that achieves this is called $\textbf{ideal}$.
> 
> In the dining hall, there are $t$ tables, each with $p \ge 2$ places. In total, $n = tp$ persons participate in the olympiad, and there are $r$ meals.
> 
> $\textbf{1.}$ Can Perrine always find an ideal plan if $r = \lceil (n-1)/(p-1) \rceil$? And what happens if $r < \lceil (n-1)/(p-1) \rceil$?
> 
> $\textbf{2.}$ Give the minimal $r$ allowing to construct an ideal plan and describe the plan in the following cases:
>   a) if $p = 2$ and $t = 3$;
>   b) if $t = p = 3$;
>   c) if $t = 3$ and $p = 6$;
>   d) if $t = 2$ and $p$ arbitrary.
> 
> $\textbf{3.}$ Estimate the minimal value of $r$ allowing to construct an ideal plan and describe the plan in the following cases:
>   a) if $t = p$ (one may begin by looking at the case where $p$ is a prime number);
>   b) if $t$ and $p$ are powers of $p$.
> 
> $\textbf{4.}$ Propose other ideal plans in the general case.
> 
> For the meals to be enjoyable, Perrine tries to make everyone uniform: she wants no participant to sit with the same participants more than $f$ times at the same table, for $f \ge 1$. A plan that satisfies this is called $f$-$\textbf{uniform}$.
> 
> $\textbf{5.}$ Describe the values of $p$ and $t$ for which one can find a $1$-uniform ideal plan.
> 
> $\textbf{6.}$ Does there always exist a $2$-uniform ideal plan? If so, give a value of $f$ such that an $f$-uniform ideal plan exists for given $p$ and $t$.
> 
> $\textbf{7.}$ Estimate, as a function of $p$ and $t$, the minimal value of $f$ for which an $f$-uniform ideal plan exists, while reprising the previously proposed estimates.
> 
> $\textbf{8.}$ Propose and study other avenues of research.

![[src_tfjm_2024__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]], [[method_doppio_conteggio|Double counting]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_logica,method_invarianti,method_conteggio,method_casework,skill_conteggio_sistematico,skill_riconoscimento_pattern,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="fr"></div>


*Ping-pong tournament: 2n players on n numbered tables, winners climb a table and losers descend; study stable configurations, reachability, and which words of wins/losses are inscriptible.*

> Soit $n \geqslant 2$ un entier. Dans un club de ping-pong, il y a $2n$ joueuses numérotées de $1$ à $2n$. On suppose que les joueuses sont classées de la plus forte à la moins forte, de sorte que quand les joueuses $i$ et $j$ s'affrontent en match, si $i < j$, alors la joueuse $i$ gagne toujours contre la joueuse $j$. Les matchs ont lieu sur $n$ tables numérotées de $1$ à $n$. On appelle configuration une manière de répartir les $2n$ joueuses sur les $n$ tables de sorte qu'il y ait exactement $2$ joueuses à chaque table.
>
> Au départ, les joueuses sont dans une configuration initiale puis elles jouent par tours successifs. Un tour se déroule de la manière suivante : à chaque table, les deux joueuses présentes s'affrontent puis pour tout numéro de table $k$, la gagnante de la table $k$ monte à la table $k-1$ (sauf si $k = 1$, auquel cas elle reste à la table $1$), et la perdante de la table $k$ descend à la table $k+1$ (sauf si $k = n$, auquel cas elle reste à la table $n$). On dira qu'une table est plus haute qu'une autre si son numéro est plus petit que l'autre.
>
> Une configuration est dite stable si après deux tours, les joueuses se retrouvent dans la même configuration.
>
> **1.** On fixe $1 \leqslant i \leqslant 2n$. Quelle est la table la plus haute à laquelle peut se trouver la joueuse $i$ dans une configuration stable ? Et la plus basse ?
>
> **2.** Compter le nombre de configurations stables en fonction de $n$.
>
> **3.** Les joueuses atteignent-elles toujours une configuration stable après un nombre de tours suffisants ? Dans ce cas, donner un encadrement en fonction de $n$ du plus grand nombre possible de tours qui peuvent être nécessaires pour atteindre une configuration stable.
>
> **4.** Soient $1 \leqslant i \leqslant 2n$ et $1 \leqslant k \leqslant n$. On sait que la joueuse $i$ doit commencer à la table $k$. En supposant qu'elle puisse choisir le reste de la configuration initiale comme cela l'arrange, quelle est la plus haute table qu'elle peut espérer atteindre au moins une fois ?
>
> **5.** On se donne $1 \leqslant k < l \leqslant n$. En fonction de $k$ et $l$, est-il possible qu'une joueuse commence à la dernière table, atteigne la table $k$ puis se stabilise plus tard à la table $l$ ?
>
> **6.** Les joueuses tiennent un carnet où elles notent leurs résultats sous la forme suivante : quand elles remportent un match, elles écrivent un $V$, et quand elles perdent, elles écrivent un $D$. Par exemple, si une joueuse remporte ses deux premiers matchs puis perd les trois suivants, elle écrira le mot $VVDDD$. On dit qu'un mot formé de lettres $D$ et $V$ est inscriptible si il existe une configuration initiale à $2n$ joueuses dans laquelle une des joueuses écrira ce mot. Par exemple, le mot $VV\ldots V$ est toujours inscriptible car il sera inscrit par la joueuse $1$.
>
> a) Donner des exemples de mots inscriptibles et de mots non inscriptibles.
>
> b) En fonction de $n$, estimer le plus grand $\ell$ pour lequel tous les mots de longueur $\ell$ sont inscriptibles.
>
> c) En fonction de $n$ et $\ell$, estimer le nombre de mots inscriptibles de longueur $\ell$.
>
> **7.** Parmi toutes les configurations initiales, estimer la proportion des configurations qui font que la joueuse $3$ n'atteindra jamais la table $1$. Généraliser en changeant les numéros de la joueuse et de la table.
>
> **8.** Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_conteggio|Conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)


<div class="qlang-split" data-lang="it"></div>


*Torneo di ping-pong: 2n giocatori su tavoli numerati n, i vincitori si arrampicano su una tavola e i perdenti scendono; studiano le configurazioni stabili, la raggiungibilità e quali parole di vittorie/perdite sono iscrivibili.*

> $n \ge 2$ sia un numero intero. In un club di ping-pong, ci sono $2n$ giocatori numerati da $1$ a $2n$. Si dividono in coppie $n$ e ciascuna coppia gioca a un tavolo. Le tabelle sono numerate da $1$ a $n$. Si chiama $\textbf{configuration}$ il modo di distribuire i giocatori $2n$ sulle tabelle $n$ ($2$ giocatori per tabella).
> 
> All'inizio, i giocatori giocano una partita dalla configurazione iniziale; quindi per ogni partita i giocatori seguono queste regole: a ciascuna tavola, il vincitore sale su una tavola (passando da tavola $k$ a tavola $k-1$) e il perdente scende da una tavola (passando da tavola $k$ a tavola $k+1$). Le eccezioni: al tavolo $1$, il vincitore rimane al tavolo $1$ (e il perdente scende al tavolo $2$); al tavolo $n$, il perdente rimane al tavolo $n$ (e il vincitore sale al tavolo $n-1$). Uno dice che un gioco permette di passare da una configurazione all'altra.
> 
> Una configurazione viene detta $\textbf{stable}$ se dopo due partite consecutive si trova di nuovo la stessa configurazione.
> 
> $\textbf{1.}$ Per $1 \le i \le 2n$: in quale tabella si può trovare il numero del giocatore $i$ in configurazione stabile? E a quale tavolo giocherà?
> 
> $\textbf{2.}$ Contare il numero di configurazioni stabili come funzione di $n$.
> 
> I giocatori raggiungono sempre una configurazione stabile dopo un certo numero di giri? Dimostrare questo o, al contrario, mostrare una configurazione che non consente di raggiungere una configurazione stabile.
> 
> $\textbf{4.}$ Let $1 \le i \le 2n$ e $1 \le k \le n$. Supponiamo che il numero del giocatore $i$ inizia alla tabella $k$. Supponendo che il giocatore scelga i risultati delle sue partite (vincere le partite che vuole e perdere le altre), quale tavolo $j$ può sperare di raggiungere almeno una volta?
> 
> $\textbf{5.}$ Lasciate $1 \le k < l \le n$. Come funzione di $k$ e $l$, è possibile che un giocatore che inizia al tavolo $k$ si stabilizzi in seguito al tavolo $l$?
> 
> $\textbf{6.}$ I giocatori prendono nota in un quaderno dove registrano i loro risultati nella seguente forma: ogni volta che il giocatore vince una partita scrive $V$, e ogni volta che perde scrive $D$. Una serie di lettere $D$ e $V$ è $\textbf{inscriptible}$ se esiste una configurazione iniziale di giocatori $2n$ per i quali un giocatore ha scritto questa serie di giochi. Ad esempio, la parola $VV\dots V$ è sempre iscrivibile perché è sempre scritta dal giocatore $1$. a) Contare il numero di parole iscribili di lettere $m$ che non sono iscribili. b) Come funzione di $n$, stimare il più grande $\ell$ per il quale tutte le parole di lunghezza $\ell$ sono iscribili. c) Come funzione di $n$ e $\ell$, stimare il numero di parole iscrivibili di lunghezza $\ell$.
> 
> Tra tutte le configurazioni iniziali, stima la percentuale di configurazioni per le quali il player $3$ non raggiungerà mai la tabella $1$. Generalizza modificando i numeri del giocatore e della tavola.
> 
> $\textbf{8.}$ Proporre e studiare altre vie di ricerca.

![[src_tfjm_2024__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]], [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Ping-pong tournament: 2n players on n numbered tables, winners climb a table and losers descend; study stable configurations, reachability, and which words of wins/losses are inscriptible.*

> Let $n \ge 2$ be an integer. In a ping-pong club, there are $2n$ players numbered from $1$ to $2n$. They split into $n$ pairs and each pair plays at a table. The tables are numbered from $1$ to $n$. One calls $\textbf{configuration}$ the manner of distributing the $2n$ players over the $n$ tables ($2$ players per table).
> 
> At the start, the players play one game from the initial configuration; then for each game the players follow these rules: at each table, the winner climbs a table (passing from table $k$ to table $k-1$) and the loser descends a table (passing from table $k$ to table $k+1$). The exceptions: at table $1$, the winner stays at table $1$ (and the loser descends to table $2$); at table $n$, the loser stays at table $n$ (and the winner climbs to table $n-1$). One says that one game allows to pass from one configuration to another.
> 
> A configuration is said $\textbf{stable}$ if after two consecutive games one finds again the same configuration.
> 
> $\textbf{1.}$ For $1 \le i \le 2n$: at which table can player number $i$ be found in a stable configuration? And which table will she play at?
> 
> $\textbf{2.}$ Count the number of stable configurations as a function of $n$.
> 
> $\textbf{3.}$ Do the players always reach a stable configuration after a certain number of tours? Demonstrate this or, on the contrary, exhibit a configuration that does not allow a stable configuration to be reached.
> 
> $\textbf{4.}$ Let $1 \le i \le 2n$ and $1 \le k \le n$. Suppose player number $i$ begins at table $k$. Supposing the player chooses the results of her games (winning the games she wants and losing the others), which table $j$ can she hope to reach at least once?
> 
> $\textbf{5.}$ Let $1 \le k < l \le n$. As a function of $k$ and $l$, is it possible for a player who begins at table $k$ to stabilize later at table $l$?
> 
> $\textbf{6.}$ The players take note in a notebook where they record their results in the following form: each time the player wins a game she writes $V$, and each time she loses she writes $D$. A series of letters $D$ and $V$ is $\textbf{inscriptible}$ if there exists an initial configuration of $2n$ players for which a player wrote this series of games. For example, the word $VV\dots V$ is always inscriptible because it is always inscribed by player $1$.
>   a) Count the number of inscriptible words of $m$ letters that are not inscriptible.
>   b) As a function of $n$, estimate the largest $\ell$ for which all words of length $\ell$ are inscriptible.
>   c) As a function of $n$ and $\ell$, estimate the number of inscriptible words of length $\ell$.
> 
> $\textbf{7.}$ Among all initial configurations, estimate the proportion of configurations for which player $3$ will never reach table $1$. Generalize while changing the numbers of the player and of the table.
> 
> $\textbf{8.}$ Propose and study other avenues of research.

![[src_tfjm_2024__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_conteggio|Conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_algebra,topic_funzionali,method_ricorsione,method_casework,method_induzione,skill_manipolazione_algebrica,skill_modellizzazione,skill_stima"></span>

<div class="qlang-switch" data-default="fr"></div>


*Depollution of the Seine: a discrete dynamical model of clean vs. polluted water volumes in a basin where bacteria reproduce (factor K) and die at midnight; study the recurrence v_T under several movement rules, stirring, evaporation, and weather.*

> Pour les épreuves de natation des Jeux Olympiques de $2024$, certains bassins, alimentés par la Seine, doivent être dépollués.
>
> Une équipe de biologistes a trouvé une bactérie qui est capable de dépolluer l'eau. Initialement, le bassin, de volume $V = 2500\,\mathrm{m}^3$, ne contient que de l'eau polluée. Le matin du jour où le nettoyage commence (qu'on appelle le jour $0$), on largue des bactéries dans le bassin. Les bactéries n'occupent pas forcément toute l'eau du bassin : il y a de l'eau avec bactéries et de l'eau sans bactéries, qui ne se mélangent pas. On note $v_0 \in [0, V]$ le volume d'eau avec bactéries après le premier largage des bactéries. Pour $T \in \mathbb{N}$, on notera $v_T$ le volume occupé par les bactéries le matin du jour $T$. La population de bactéries se comporte de la manière suivante :
>
> — Les bactéries qui sont dans de l'eau polluée à midi mangent la pollution. Ainsi, l'eau polluée avec bactéries devient de l'eau propre avec bactéries.
>
> — Au coucher du soleil, les bactéries se reproduisent. Les bactéries mères meurent en se reproduisant. Les bactéries filles occupent un volume d'eau $f(v_T)$ dont on ne connaît pas la répartition dans le bassin, avec $f : [0, V] \to [0, V]$ une fonction décrite plus bas.
>
> — Jusqu'à minuit, les bactéries peuvent se déplacer dans le bassin. La manière dont elles se déplacent varie selon les questions et sera précisée.
>
> — À minuit, si une bactérie se retrouve dans de l'eau propre, alors elle meurt instantanément. Ainsi, l'eau propre avec bactéries devient de l'eau propre sans bactéries. Si la bactérie se retrouve dans de l'eau polluée, alors elle reste immobile (le volume d'eau polluée avec bactérie reste inchangé).
>
> Dans des conditions idéales, une bactérie produit en moyenne $K$ bactéries filles. En pratique, lorsqu'il y a trop de bactéries, elles se gênent mutuellement, de sorte que la moyenne est un peu plus basse. On prend donc
> $$f(v) = K\left(v - \frac{v^2}{V}\right).$$
>
> **1.** Quelles sont les valeurs possibles de $K$ qui garantissent que si $0 \leqslant v_0 \leqslant V$, alors $0 \leqslant v_T \leqslant V$ pour tout $T$ ?
>
> Désormais, pour simplifier, on prend
> $$f(v) = \begin{cases} Kv & \text{si } 0 \leqslant Kv \leqslant V, \\ V & \text{sinon,} \end{cases}$$
> où $K$ est une constante strictement positive. Autrement dit, on considère que le terme $-v^2/V$ est négligeable. Dans la question **7.**, on traitera le cadre sans cette simplification.
>
> **2.** On suppose dans cette question que les bactéries filles se déplacent en priorité dans l'eau polluée, puis dans l'eau propre pour celles qui n'ont plus de place dans l'eau polluée. Autrement dit, le volume d'eau propre avec bactéries est le plus petit possible (sachant que les volumes sont fixes lors du déplacement). Pour quelles valeurs de $K$ et de $v_0$ les bactéries nettoient-elles entièrement le bassin ? Dans ce cas-là, combien de jours faut-il pour dépolluer entièrement le bassin ?
>
> **3.** Inversement, on suppose dans cette question que les bactéries filles se déplacent en priorité dans l'eau propre, puis dans l'eau polluée pour celles qui n'ont plus de place dans l'eau propre (celles qui sont nées dans l'eau propre mourront donc à minuit sans se reproduire le lendemain midi).
>
> a) Étudier l'évolution de la suite $v_T$. A-t-elle une limite ? Si oui, laquelle ?
>
> b) Si $K \leqslant 2$, pour quelles valeurs de $v_0$ les bactéries dépolluent-elles entièrement le bassin ?
>
> c) Si $K = 4$, pour quelles valeurs de $v_0$ les bactéries dépolluent-elles entièrement le bassin ?
>
> d) Étudier les cas $K > 4$ et $2 < K < 4$.
>
> e) Dans les différents cas précédents, encadrer aussi précisément que possible le nombre de jours nécessaires pour que les bactéries dépolluent entièrement le bassin.
>
> On suppose maintenant que l'eau du bassin est brassée entre le coucher du soleil et minuit. À minuit, les bactéries se trouveront donc proportionnellement réparties dans l'eau propre et polluée : si l'eau propre et l'eau polluée occupent respectivement un volume $a_T V$ et $b_T V$ dans le bassin (où $a_T + b_T = 1$), alors les volumes de bactéries dans l'eau propre et polluée seront respectivement $f(v_T)\, a_T$ et $f(v_T)\, b_T$.
>
> **4.** Trouver des conditions nécessaires et/ou suffisantes sur $K$ et $v_0$ pour que les bactéries dépolluent entièrement le bassin.
>
> L'eau du bassin est toujours brassée mais désormais, chaque jour, entre midi et le coucher du soleil, un volume $w \in [0, V]$ d'eau s'évapore. Elle est remplacé par la même quantité d'eau polluée au coucher du soleil avant le brassage. La proportion d'eau polluée dans l'eau évaporée est la même que celle dans le bassin : si l'eau propre et l'eau polluée occupent respectivement un volume $a_T V$ et $b_T V$ dans le bassin (où $a_T + b_T = 1$) alors les volumes d'eau propre et polluée évaporés sont $a_T w$ et $b_T w$ respectivement.
>
> **5.** On note $u_T$, avec $0 \leqslant u_T \leqslant V$, le volume d'eau propre dans le bassin le matin du jour $T$. Trouver des conditions nécessaires/suffisantes sur $K$, $w$ et $v_0$ pour que :
>
> a) la suite $(u_T)$ admette une limite, et estimer la limite en fonction de $K$, $w$ et $v_0$ ;
>
> b) la suite $(u_T)$ soit périodique, et estimer la période en fonction de $K$, $w$ et $v_0$.
>
> Étudier le plus généralement possible la suite $u_T$.
>
> Pour cette question, on suppose que l'eau est brassée, qu'il n'y a plus d'évaporation mais que la reproduction des bactéries varie selon la météo. S'il fait beau, on a $f(v_T) = K_1 v_T$ et s'il pleut, on a $f(v_T) = K_2 v_T$ avec $K_1 > K_2 > 0$ (avec toujours $f(v_T) = V$ si $K_1 v_T > V$ ou $K_2 v_T > V$). Il pleut exactement un jour sur deux : s'il pleut le jour $T$, alors il fera beau le jour $T+1$ et il pleuvra le jour $T+2$. Le jour $T = 0$, il fait beau.
>
> **6.** Trouver des conditions nécessaires et/ou suffisantes sur $K_1$, $K_2$ et $v_0$ pour que le bassin soit entièrement dépollué.
>
> **7.** On revient pour finir dans le cas général exact où $f(v) = K\left(v - \frac{v^2}{V}\right)$. Décrire le comportement de la suite $v_T$ dans le contexte des questions **2.**, **3.**, **4.** selon la valeur de $K$.
>
> **8.** Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_casework|Casework]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)


<div class="qlang-split" data-lang="it"></div>


La depolluzione della Senna: un modello dinamico discreto di netto vs. Volumi di acqua inquinata in un bacino in cui i batteri si riproducono (fattore K) e muoiono a mezzanotte; studiare la ricorrenza v_T secondo diverse regole di movimento, agitazione, evaporazione e meteo.*

> Per gli eventi di nuoto delle Olimpiadi di $2024$, alcuni bacini alimentati dalla Senna devono essere depolluiti.
> 
> Un team di biologi ha trovato un batterio in grado di depollare l'acqua. Inizialmente, il bacino, di volume $V = 2500\,m^3$, contiene solo acqua inquinata. Per pulire l'acqua inquinata, i biologi versano i batteri nel bacino. I batteri si riproducono finché c'è acqua inquinata e spazio; rimangono immobili (il volume di acqua inquinata rimane invariato).
> 
> In condizioni ideali, un batterio produce in media $K$ batteri figli. In pratica, i batteri si disturbano a vicenda, in media un batterio troppo. Si prende quindi per il numero medio di batteri figli: $$f(v) = K\left(v - \frac{v^2}{V}\right),$$ dove $K$ è una costante strettamente positiva. Presto si considererà trascurabile il termine $-v^2/V$. La questione $\textbf{7.}$ si tratta di trattare il caso senza questa semplificazione.
> 
> Uno indica $v_0$ il volume di acqua inquinata all' inizio e $v_T$ il volume occupato dai batteri dopo il primo giorno. La popolazione di batteri è composta nel seguente modo:  I batteri presenti in acqua pulita rimangono lì: questo è l'inquinamento. Così l'acqua inquinata diventa acqua pulita e batteri.  A mezzogiorno, sotto il sole, i batteri si riproducono. I batteri figli occupano un volume $f(v_T)$ la cui ripartizione nel bacino non è nota, con $f : [0,V] \to [0,V]$ una funzione descritta di seguito.  Fino a mezzanotte, i batteri possono muoversi nel bacino. Il modo in cui si muovono varia a seconda delle domande e sarà preciso.  A mezzanotte, un batterio che trova acqua pulita sopravvive, altrimenti muore istantaneamente. Così l'acqua pulita diventa acqua inquinata, altrimenti il batterio rimane invariato.
> 
> Quali sono i possibili valori di $K$ che garantiscono che se $0 \le v_0 \le V$, allora $0 \le v_T \le V$ per tutti $T$? Da ora in poi, per semplificare, si prende $f(v) = \begin{cases} Kv & \text{if } 0 \le Kv \le V, \\ V & \text{otherwise.} \end{cases}$
> 
> $\textbf{2.}$ Supponiamo in questa domanda che i batteri figli si spostino in primo luogo nell'acqua inquinata, poi nei luoghi di acqua pulita dove c'era acqua inquinata. Per quali valori di $K$ e $v_0$ i batteri ripuliranno interamente il bacino? a) Studiare l'evoluzione della sequenza $v_T$. A quale valore tende, e come? b) Se $K \le 2$, per quali valori $v_0$ i batteri depolluiscono interamente il bacino? c) Se $K = 4$, per quali valori $v_0$ i batteri depolluiscono interamente il bacino? d) Studiare i casi $K > 4$ e $2 < K < 4$. e) Sulla base dei vari casi precedenti, definire con precisione il numero di giorni necessari per la depolluzione completa del bacino.
> 
> $\textbf{3.}$ Al contrario, supponiamo in questa domanda che i batteri figli si spostino in primo luogo nell'acqua pulita, poi nei luoghi inquinati in cui c'era acqua inquinata (cellule che si stabiliscono vicino all'acqua pulita). a) Studiare l'evoluzione della sequenza $v_T$. A quale valore tende, e come? b) Se $K \le 2$, per quali valori $v_0$ i batteri depolluiscono interamente il bacino? c) Se $K = 4$, per quali valori $v_0$ i batteri depolluiscono interamente il bacino? d) Studiare i casi $K > 4$ e $2 < K < 4$. e) Sulla base dei vari casi precedenti, definire con precisione il numero di giorni necessari per la depolluzione completa del bacino.
> 
> Ora si suppone che l'acqua pulita sia agitata prima di riposare sotto il sole. A mezzanotte, i batteri vengono recuperati secondo proporzioni accuratamente distribuite tra l'acqua pulita e l'acqua inquinata: se l'acqua pulita e l'acqua inquinata occupano volumi $\alpha_T V$ e $\beta_T V$ rispettivamente prima della notte (dove $\alpha_T + \beta_T = 1$), allora i volumi di batteri nell'acqua pulita e nell'acqua inquinata sono rispettivamente $f(v_T)\alpha_T$ e $f(v_T)\beta_T$.
> 
> $\textbf{4.}$ Trovare le condizioni necessarie e/o sufficienti su $K$ e $v_0$ per permettere ai batteri di depolluire completamente il bacino.
> 
> Per la domanda successiva si suppone che l'acqua sia agitata, che non ci sia più evaporazione, ma che la riproduzione dei batteri varia a seconda del tempo. Se sta bene, $f(v_T) = K_1 v_T$, e se piove, $f(v_T) = K_2 v_T$, con $K_1 > K_2 > 0$ (con sempre $f(v_T) = V$ se $K_1 v_T > V$ o $K_2 v_T > V$). Piove esattamente un giorno su due: se piove il giorno $T$, allora il giorno $T+1$ va bene e il giorno $T+2$ piove. Al giorno $T = 0$, va bene.
> 
> $\textbf{5.}$ Uno indica $w_T$, con $0 \le w_T \le V$, il volume di acqua pulita nel bacino la mattina del giorno $T$. Trovare le condizioni necessarie/suficienti su $K$, $w$ e $v_0$ in modo che: a) la sequenza $(w_T)$ ammetta un limite e stimare il limite come funzione di $K$, $w$ e $v_0$; b) la sequenza $(w_T)$ è periodica e stimare il periodo come funzione di $K$, $w$ e $v_0$. Studiare più in generale se è possibile la sequenza $w_T$.
> 
> $\textbf{6.}$ Trovare le condizioni necessarie e/o sufficienti su $K_1$, $K_2$ e $v_0$ per la depolluzione completa del bacino.
> 
> $\textbf{7.}$ Si ritorna, per finire, al caso generale esatto dove $f(v) = K\left(v - \frac{v^2}{V}\right)$. Descrivere il comportamento della sequenza $v_T$ nel contesto delle domande $\textbf{2.}$, $\textbf{3.}$, $\textbf{4.}$, secondo il valore di $K$.
> 
> $\textbf{8.}$ Proporre e studiare altre vie di ricerca.

![[src_tfjm_2024__Q04.png]]

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_casework|Analisi per casi]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_stima|Stima e approssimazione]]
**Area:** [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Depollution of the Seine: a discrete dynamical model of clean vs. polluted water volumes in a basin where bacteria reproduce (factor K) and die at midnight; study the recurrence v_T under several movement rules, stirring, evaporation, and weather.*

> For the swimming events of the Olympic Games of $2024$, certain basins, supplied by the Seine, must be depolluted.
> 
> A team of biologists has found a bacterium capable of depolluting the water. Initially, the basin, of volume $V = 2500\,m^3$, contains only polluted water. To clean the polluted water, the biologists pour the bacteria into the basin. The bacteria reproduce as long as there is polluted water and there is space; they remain immobile (the volume of polluted water remains unchanged).
> 
> Under ideal conditions, a bacterium produces on average $K$ daughter bacteria. In practice, the bacteria bother one another, on average one bacterium too many. One thus takes for the average number of daughter bacteria:
> $$f(v) = K\left(v - \frac{v^2}{V}\right),$$
> where $K$ is a strictly positive constant. Soon one will consider the term $-v^2/V$ to be negligible. In question $\textbf{7.}$ one will treat the case without this simplification.
> 
> One denotes $v_0$ the volume of polluted water at the start, and $v_T$ the volume occupied by the bacteria after the first day. The population of bacteria is composed in the following manner:
>   — The bacteria located in clean water remain there: this is pollution. Thus polluted water becomes clean water plus bacteria.
>   — At noon, under the sun, the bacteria reproduce. The daughter bacteria occupy a volume $f(v_T)$ whose repartition in the basin one does not know, with $f : [0,V] \to [0,V]$ a function described below.
>   — Until midnight, the bacteria may move in the basin. The manner in which they move varies according to the questions and will be precised.
>   — At midnight, a bacterium that finds clean water survives, otherwise it dies instantaneously. Thus clean water becomes polluted water, otherwise the bacterium remains unchanged.
> 
> $\textbf{1.}$ What are the possible values of $K$ that guarantee that if $0 \le v_0 \le V$ then $0 \le v_T \le V$ for all $T$? Henceforth, to simplify, one takes $f(v) = \begin{cases} Kv & \text{if } 0 \le Kv \le V, \\ V & \text{otherwise.} \end{cases}$
> 
> $\textbf{2.}$ Suppose in this question that the daughter bacteria move in priority into the polluted water, then into the clean water places where there was polluted water. For which values of $K$ and $v_0$ do the bacteria entirely clean the basin?
>   a) Study the evolution of the sequence $v_T$. To what value does it tend, and how?
>   b) If $K \le 2$, for which values of $v_0$ do the bacteria entirely depollute the basin?
>   c) If $K = 4$, for which values of $v_0$ do the bacteria entirely depollute the basin?
>   d) Study the cases $K > 4$ and $2 < K < 4$.
>   e) From the various preceding cases, frame precisely the number of days necessary for the bacteria to entirely depollute the basin.
> 
> $\textbf{3.}$ Inversely, suppose in this question that the daughter bacteria move in priority into the clean water, then into the polluted water places where there was polluted water (cells which settle near the clean water).
>   a) Study the evolution of the sequence $v_T$. To what value does it tend, and how?
>   b) If $K \le 2$, for which values of $v_0$ do the bacteria entirely depollute the basin?
>   c) If $K = 4$, for which values of $v_0$ do the bacteria entirely depollute the basin?
>   d) Study the cases $K > 4$ and $2 < K < 4$.
>   e) From the various preceding cases, frame precisely the number of days necessary for the bacteria to entirely depollute the basin.
> 
> Now one supposes that the clean water is stirred before resting under the sun. At midnight, the bacteria are retrieved according to proportions precisely distributed between the clean and polluted water: if the clean water and the polluted water occupy respectively volumes $\alpha_T V$ and $\beta_T V$ before the night (where $\alpha_T + \beta_T = 1$) then the volumes of bacteria in the clean water and in the polluted water are respectively $f(v_T)\alpha_T$ and $f(v_T)\beta_T$.
> 
> $\textbf{4.}$ Find the necessary and/or sufficient conditions on $K$ and $v_0$ for the bacteria to entirely depollute the basin.
> 
> For the next question one supposes the water is stirred, that there is no more evaporation, but that the reproduction of the bacteria varies according to the weather. If it is fine, $f(v_T) = K_1 v_T$, and if it rains, $f(v_T) = K_2 v_T$, with $K_1 > K_2 > 0$ (with always $f(v_T) = V$ if $K_1 v_T > V$ or $K_2 v_T > V$). It rains exactly one day out of two: if it rains on day $T$, then day $T+1$ is fine and day $T+2$ it rains. At day $T = 0$, it is fine.
> 
> $\textbf{5.}$ One denotes $w_T$, with $0 \le w_T \le V$, the volume of clean water in the basin on the morning of day $T$. Find the necessary/sufficient conditions on $K$, $w$ and $v_0$ so that:
>   a) the sequence $(w_T)$ admits a limit, and estimate the limit as a function of $K$, $w$ and $v_0$;
>   b) the sequence $(w_T)$ is periodic, and estimate the period as a function of $K$, $w$ and $v_0$.
>   Study more generally whether it is possible for the sequence $w_T$.
> 
> $\textbf{6.}$ Find necessary and/or sufficient conditions on $K_1$, $K_2$ and $v_0$ for the basin to be entirely depolluted.
> 
> $\textbf{7.}$ One returns, to finish, to the exact general case where $f(v) = K\left(v - \frac{v^2}{V}\right)$. Describe the behavior of the sequence $v_T$ in the context of questions $\textbf{2.}$, $\textbf{3.}$, $\textbf{4.}$, according to the value of $K$.
> 
> $\textbf{8.}$ Propose and study other avenues of research.

![[src_tfjm_2024__Q04.png]]

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_casework|Casework]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,topic_geometria_analitica,method_simmetria,method_coordinate,method_casework,skill_ragionamento_geometrico,skill_modellizzazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Free electron: a charged particle moves along circular arcs of radius 1 (counterclockwise), reversing direction when a button is pressed (or reflecting off mirrors); study guiding it between points, avoiding a circle, through n points, gathering k electrons, and admirable polygons.*

> Nicolas joue dans un laboratoire de physique. Il dispose d’un canon à électrons immergé dans un champ magnétique constant uniforme. Les lois de la physique classique nous renseignent alors que l’électron se déplace alors à vitesse constante en décrivant un cercle dans le sens trigonométrique, que l’on supposera de rayon $1$.
>
> Nicolas dispose également d’un bouton qui permet de faire faire demi-tour à l’électron : au moment où il appuie, la vitesse de l’électron reste la même mais dans la direction opposée. Il essaye ainsi, à l’aide de cette seule commande, de guider l’électron.
>
> La figure $7$ représente une trajectoire possible de l’électron. Le rectangle bleu est le canon à électrons, la flèche bleue est la direction initiale, les points orange sont les demi-tours provoqués par Nicolas. Les pointillés montrent le prolongement de deux arcs de cercle décrits par l’électron.
>
> **1.** Le canon à électrons est situé en un point $A$ du plan. Nicolas peut choisir sa direction initiale. Il veut amener l’électron tiré jusqu’en un autre point $B$.
>
> a) Nicolas peut-il toujours guider l’électron du point $A$ au point $B$ ? Si oui, combien de fois au minimum doit-il appuyer sur le bouton, en fonction de la distance qui sépare $A$ et $B$ ?
>
> b) Quelle est la distance minimale parcourue par l’électron pour aller de $A$ à $B$ ?
>
> Nicolas dessine un cercle de rayon $r > 0$ et place le canon à électrons sur le bord du cercle, pointé vers son centre. Il veut faire en sorte que l’électron ne touche jamais le cercle après l’instant initial.
>
> La figure $8$ représente un exemple de trajectoire dans un cercle de rayon $r = 2$. Il ne touche jamais le cercle gris et, après deux demi-tours, tourne sur lui-même indéfiniment.
>
> **2.** Pour quelles valeurs du rayon $r$ du cercle Nicolas peut-il appuyer un nombre fini de fois sur le bouton et s’assurer que l’électron ne touche jamais le cercle ? Dans ce cas, combien de fois au minimum Nicolas doit-il appuyer sur le bouton pour s’assurer que l’électron ne touche jamais le cercle, en fonction de $r$.
>
> **3.** Nicolas place $n$ points strictement à l’intérieur d’un disque de rayon $1$. Il peut choisir librement l’emplacement et la direction du canon. L’électron peut rentrer et sortir du disque, celui-ci n’a aucune influence sur sa trajectoire. Estimez le plus petit entier $N$ tel que quelle que soit la position des $n$ points, Nicolas peut s’assurer que l’électron passe par ces $n$ points en appuyant au plus $N$ fois sur le bouton. Que se passe-t-il avec un disque de rayon $R > 0$ quelconque ?
>
> **4.** Nicolas dispose, dans cette question seulement, de $k$ canons à électrons disposés de manière quelconque sur le plan, et de $k$ boutons permettant de contrôler chaque électron indépendamment. Peut-il toujours faire en sorte que, après un certain temps, les $k$ électrons se trouvent au même endroit au même moment ?
>
> Maintenant, Nicolas ne dispose plus d’un bouton pour faire faire demi-tour à l’électron mais de miroirs sur lesquels l’électron rebondit, conformément aux lois de la physique classique : les angles d’incidence et de réflexion sont les mêmes.
>
> Il les dispose de sorte à former un polygone convexe, c’est-à-dire dont tous les angles intérieurs sont de mesure strictement comprise entre $0$ et $\pi$. On suppose que l’électron est tiré de sorte qu’il ne passe jamais par un des sommets du polygone.
>
> Un polygone convexe est dit admirable si Nicolas peut faire rebondir l’électron sur les côtés du polygone dans n’importe quel ordre. Autrement dit, pour n’importe quelle numérotation des côtés du polygone avec les entiers de $1$ à $M$, il est possible de placer le canon à électrons de sorte que l’électron rebondisse sur le côté $1$ puis $2$ et ainsi de suite jusqu’à $M$.
>
> La figure $9$ représente un quatrilatère (en orange) dont on a numéroté les côtés et une trajectoire possible d’un électron qui respecte cet ordre : il rebondit successivement sur les côtés $1$ puis $2$ puis $3$ puis $4$. Pour que ce polygone soit admirable, il faudrait pouvoir faire la même chose quels que soient les numéros attribués aux côtés de ces polygones.
>
> **5.** Pour quels $M$ le polygone régulier à $M$ côtés dont les sommets sont sur un cercle de rayon $1$ est-il admirable ?
>
> **6.** Pour quels $M \geqslant 3$ Nicolas peut-il construire un polygone admirable à $M$ côtés ?
>
> **7.** Proposer et étudier d’autres pistes de recherche.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_coordinate|Coordinate]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)


<div class="qlang-split" data-lang="it"></div>


*L'elettrone libero: una particella carica si muove lungo archi circolari di raggio 1 (in senso antiorario), invertendo la direzione quando viene premuto un pulsante (o riflettendo gli specchi); studiare la guida tra i punti, evitando un cerchio, attraverso n punti, raccogliendo k elettroni e poligoni ammirevoli.*

> Nicolas lavora in un laboratorio di fisica. Ha una pistola elettronica immersa in un campo magnetico uniforme costante. Le leggi della fisica classica ci dicono poi che l'elettrone si muove a velocità costante descrivendo un cerchio nel senso trigonometrico (in senso controorario), che si suppone di raggio $1$.
> 
> Nicolas ha anche un pulsante che fa girare l'elettrone: al momento in cui lo premere, la velocità dell'elettrone rimane la stessa ma nella direzione opposta. In questo modo cerca, con questo singolo comando, di guidare l'elettrone.
> 
> La figura $7$ rappresenta una possibile traiettoria dell'elettrone: il rettangolo blu è la pistola elettronica, la freccia blu è la direzione iniziale, i punti arancioni sono le rotazioni proposte da Nicolas. Le linee puntate mostrano l'allungamento di due archi circolari descritti dall'elettrone.
> 
> $\textbf{1.}$ La pistola elettronica è situata in un punto $A$ del piano. Nicolas puo' scegliere la sua direzione iniziale. Vuole portare l'elettrone fino ad un altro punto $B$. a) Nicolas può sempre guidare l'elettrone dal punto $A$ al punto $B$? In tal caso, quante volte almeno deve premere il pulsante, in funzione della distanza tra $A$ e $B$? b) Qual è la distanza minima percorsa dall'elettrone per passare da $A$ a $B$?
> 
> Nicolas disegna un cerchio di raggio $r > 0$ e pone la pistola elettronica sul bordo del cerchio, puntata verso il suo centro. Vuole assicurarsi che l'elettrone non tocchi mai il cerchio dopo l'istante iniziale.
> 
> La figura $8$ rappresenta un esempio di traiettoria in un cerchio di raggio $r = 2$. Non tocca mai il cerchio; dopo due giri, si gira su se stesso indefinitamente.
> 
> Per quali valori del raggio può Nicolas premere il pulsante un numero finito di volte e garantire che l'elettrone non tocchi mai il cerchio? In tal caso, quante volte almeno Nicolas deve premere il pulsante per assicurarsi che l'elettrone non tocchi mai il cerchio, come funzione di $r$?
> 
> $\textbf{3.}$ Nicolas colloca i punti $n$ rigorosamente all'interno di un disco di raggio $1$. Può scegliere liberamente il posizionamento e la direzione della pistola. L'elettrone può entrare e uscire dal disco; il disco non influenza la sua traiettoria. Valutare il numero intero più piccolo $N$ in modo che, qualunque siano le posizioni dei punti $n$, Nicolas possa garantire che l'elettrone passi attraverso questi punti $n$ premendo il pulsante al massimo $N$ volte. Cosa succede con un disco di raggio arbitrario $R > 0$?
> 
> Nicolas ha, solo in questa domanda, le pistole elettroniche $k$ posizionate arbitrariamente nel piano e i pulsanti $k$ che consentono di controllare ogni elettrone in modo indipendente. Può sempre organizzare che, dopo un certo tempo, gli elettroni $k$ siano nello stesso posto nello stesso momento?
> 
> Ora Nicolas non ha più un pulsante per far girare l'elettrone, ma specchi da cui l'elettrone rimbalza, conforme alle leggi della fisica classica: gli angoli di incidenza e di riflessione sono uguali.
> 
> Li organizza in modo da formare un poligono convexo, cioè uno i cui angoli interni hanno tutti la misura strettamente tra $0$ e $\pi$. Si suppone che l'elettrone sia lanciato in modo che non attraversasse mai un vertice del poligono.
> 
> Un poligono convex viene detto $\textbf{admirable}$ se Nicolas può far rimbalzare l'elettrone dai lati del poligono in qualsiasi ordine. In altre parole, per qualsiasi numerazione dei lati del poligono con i numeri interi da $1$ a $M$, è possibile posizionare la pistola elettronica in modo che l'elettrone rimbalzi dal lato $1$, poi $2$ e così via fino a $M$.
> 
> La figura $9$ rappresenta un quadrilaterale (in arancione) i cui lati sono stati numerati e una possibile traiettoria di un elettrone rispetto a questo ordine: rimbalza successivamente dai lati $1$, poi $2$, poi $3$ e poi $4$. Per rendere questo poligono ammirevole, si dovrebbe essere in grado di fare la stessa cosa qualunque numero sia attribuito ai lati.
> 
> Per quale $M$ è ammirevole il poligono regolare con lati $M$ le cui vertici si trovano su un cerchio di raggio $1$?
> 
> Per quale $M \ge 3$ Nicolas può costruire un polygono ammirevole con i lati $M$?
> 
> $\textbf{7.}$ Proporre e studiare altre vie di ricerca.

![[src_tfjm_2024__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]], [[method_coordinate|Metodo delle coordinate]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Geometria]]


<div class="qlang-split" data-lang="en"></div>


*Free electron: a charged particle moves along circular arcs of radius 1 (counterclockwise), reversing direction when a button is pressed (or reflecting off mirrors); study guiding it between points, avoiding a circle, through n points, gathering k electrons, and admirable polygons.*

> Nicolas works in a physics laboratory. He has an electron gun immersed in a constant uniform magnetic field. The laws of classical physics then tell us that the electron moves at constant speed describing a circle in the trigonometric (counterclockwise) sense, which one will suppose of radius $1$.
> 
> Nicolas also has a button that makes the electron turn around: at the moment he presses it, the speed of the electron stays the same but in the opposite direction. He thus tries, with this single command, to guide the electron.
> 
> Figure $7$ represents a possible trajectory of the electron: the blue rectangle is the electron gun, the blue arrow is the initial direction, the orange points are the turnarounds proposed by Nicolas. The dotted lines show the prolongation of two circle arcs described by the electron.
> 
> $\textbf{1.}$ The electron gun is situated at a point $A$ of the plane. Nicolas can choose his initial direction. He wants to bring the electron all the way to another point $B$.
>   a) Can Nicolas always guide the electron from point $A$ to point $B$? If so, how many times at minimum must he press the button, as a function of the distance separating $A$ and $B$?
>   b) What is the minimal distance traveled by the electron to go from $A$ to $B$?
> 
> Nicolas draws a circle of radius $r > 0$ and places the electron gun on the edge of the circle, pointed toward its center. He wants to ensure that the electron never touches the circle after the initial instant.
> 
> Figure $8$ represents an example of a trajectory in a circle of radius $r = 2$. It never touches the circle; after two turnarounds, it turns on itself indefinitely.
> 
> $\textbf{2.}$ For which values of the radius $r$ can Nicolas press the button a finite number of times and ensure that the electron never touches the circle? In that case, how many times at minimum must Nicolas press the button to ensure the electron never touches the circle, as a function of $r$?
> 
> $\textbf{3.}$ Nicolas places $n$ points strictly inside a disk of radius $1$. He can freely choose the placement and direction of the gun. The electron may enter and exit the disk; the disk has no influence on its trajectory. Estimate the smallest integer $N$ such that, whatever the positions of the $n$ points, Nicolas can ensure the electron passes through these $n$ points by pressing the button at most $N$ times. What happens with a disk of arbitrary radius $R > 0$?
> 
> $\textbf{4.}$ Nicolas has, in this question only, $k$ electron guns placed arbitrarily in the plane, and $k$ buttons allowing to control each electron independently. Can he always arrange that, after a certain time, the $k$ electrons are at the same place at the same moment?
> 
> Now Nicolas no longer has a button to make the electron turn around but mirrors off which the electron rebounds, conforming to the laws of classical physics: the angles of incidence and reflection are equal.
> 
> He arranges them so as to form a convex polygon, that is, one whose interior angles all have measure strictly between $0$ and $\pi$. One supposes the electron is launched so that it never passes through a vertex of the polygon.
> 
> A convex polygon is said $\textbf{admirable}$ if Nicolas can make the electron rebound off the sides of the polygon in any order. In other words, for any numbering of the sides of the polygon with the integers from $1$ to $M$, it is possible to place the electron gun so that the electron rebounds off side $1$ then $2$ and so on up to $M$.
> 
> Figure $9$ represents a quadrilateral (in orange) whose sides have been numbered and a possible trajectory of an electron respecting this order: it rebounds successively off sides $1$ then $2$ then $3$ then $4$. For this polygon to be admirable, one would need to be able to do the same thing whatever numbers are attributed to the sides.
> 
> $\textbf{5.}$ For which $M$ is the regular polygon with $M$ sides whose vertices lie on a circle of radius $1$ admirable?
> 
> $\textbf{6.}$ For which $M \ge 3$ can Nicolas construct an admirable polygon with $M$ sides?
> 
> $\textbf{7.}$ Propose and study other avenues of research.

![[src_tfjm_2024__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_coordinate|Coordinate]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_probabilita,method_casework,method_conteggio,skill_modellizzazione,skill_stima,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="fr"></div>


*Rigged coins: Felix flips a coin landing heads with probability p; Clara predicts upcoming flips to maximize her guaranteed (worst-case over p) expected gain across strategies, then with two coins, guessing which coin, and a switch point K.*

> Soit $n \geqslant 1$ un entier. Félix et Clara jouent à un jeu de pile ou face. Félix possède une pièce truquée qui tombe sur pile avec probabilité $p \in [0, 1]$. Le jeu se déroule de la manière suivante : Félix lance une première fois la pièce, puis Clara essaye de prédire le résultat du lancer suivant, Félix lance à nouveau la pièce, Clara fait une prédiction et ainsi de suite. Si on numérote les lancers de $0$ à $n$, Félix lance donc $n + 1$ fois la pièce (on suppose les lancers indépendants) et Clara fait $n$ prédictions pour les lancers $1, 2, \ldots, n$. Les $n + 1$ lancers et les $n$ prédictions constituent une partie.
>
> Un exemple de partie, pour $n = 2$, est :
>
> — Félix tire pile,
>
> — Clara prédit face,
>
> — Félix tire face,
>
> — Clara prédit pile,
>
> — Félix tire face.
>
> Dans ce cas, Clara a fait une première prédiction juste et une deuxième prédiction fausse.
>
> **1.** On suppose dans cette question que Clara gagne un point par prédiction juste. Son nombre total de points à la fin de la partie est appelé son gain. Quelle est l’espérance de son gain si sa prédiction est :
>
> a) toujours pile ?
>
> b) le résultat du lancer précédent ?
>
> c) pile si le nombre de piles déjà tirés est pair, face sinon ?
>
> Maintenant Clara veut maximiser ses chances d’obtenir un bon score. Elle ne connaît pas la valeur de $p$ mais elle sait que $p \in P$ où $P$ est un sous-ensemble de $[0, 1]$.
>
> Une stratégie pour Clara est une manière de choisir quelle prédiction elle va faire avant le lancer $m$ en fonction des résultats des lancers $0, 1, 2, \ldots, m - 1$. La question **1.** donne trois exemples de stratégies. Soit $G_{S,p}$ le gain (aléatoire) obtenu pour la stratégie $S$, avec $p$ la probabilité que la pièce tombe sur pile. On définit le gain minimal espéré pour la stratégie $S$ comme $G_{S,P} = \min_{p \in P} \mathbb{E}(G_{S,p})$. Autrement dit, $G_{S,P}$ est l’espérance du gain apporté par la stratégie $S$ pour la pire des valeurs de $p \in P$, c’est-à-dire pour celle où ce gain espéré est le plus bas.
>
> **2.** Si Félicie n’a aucune information a priori sur la valeur de $p$, c’est-à-dire que $P = [0, 1]$. Quel est le gain minimal espéré pour les stratégies a), b), c) décrites dans la question **1.** ?
>
> **3.** Trouver une stratégie $S$ qui donne le plus grand gain minimal espéré $G_{S,P}$ parmi toutes les stratégies possibles (et le calculer) si :
>
> a) si $P = [0, \frac{1}{3}]$ ?
>
> b) si $P = [0, 1]$ ?
>
> c) si $P = [0, \frac{1}{4}] \cup [\frac{3}{4}, 1]$ ?
>
> À partir de maintenant, Félix possède deux pièces, d’apparences indistinguables, qui tombent sur pile avec des probabilités respectives $p_1$ et $p_2$. Avant la partie, il choisit au hasard une des deux pièces : il prend la pièce $1$ avec probabilité $q$ (donc la pièce $2$ avec probabilité $1 - q$) puis tire $n+1$ fois la pièce choisie, comme avant. On suppose que Clara connaît les probabilités $p_1$, $p_2$ et $q$ (donc les choix de prédictions qu’elle fait peuvent dépendre de $p_1$, $p_2$ et $q$).
>
> **4.** Quelle est l’espérance du gain de Clara pour les stratégie a), b), c) décrites dans la question **1.** ? Parmi toutes les stratégies possibles, en trouver une pour laquelle l’espérance du gain est la plus grande possible, et la calculer.
>
> Clara n’essaye plus de deviner les résultats des lancers mais plutôt quelle pièce a été choisie. Félix lance une première fois la pièce puis, après chaque lancer, Clara peut choisir de déclarer quelle pièce a été choisie selon elle, auquel cas le jeu s’arrête, ou de demander un lancer supplémentaire, dans une limite de $n$ lancers demandés maximum. Clara gagne $\alpha$ points si sa déclaration est correcte (et aucun point si elle se trompe) et perd $1$ point par lancer supplémentaire demandé.
>
> **5.** Quelle stratégie maximise l’espérance du gain obtenu et que vaut alors ce gain en moyenne ? Que se passe-t-il quand $n \to \infty$ (c’est-à-dire qu’on ne fixe plus de limite au nombre de lancers demandés) ?
>
> Désormais, Félix possède toujours deux pièces mais change de pièce en cours de route. Avant la partie, il choisit uniformément au hasard un nombre $K$ entre $1$ et $n$ (inclus). Il tire la pièce $1$ pour les lancers $0, \ldots, K - 1$ et la pièce $2$ pour les lancers $K, \ldots, n$. Clara connaît toujours les probabilités $p_1$, $p_2$.
>
> **6.** Clara doit deviner quel $K$ a été choisi par Félix.
>
> a) Elle annonce sa prédiction après les $n + 1$ lancers. Quelle(s) stratégie(s) lui permet(tent) de maximiser la probabilité d’avoir raison et quelle est alors cette probabilité ?
>
> b) Après chaque lancer, Clara peut décider de continuer ou d’annoncer « la pièce a déjà changé », auquel cas le jeu s’arrête. Si elle a raison, elle gagne $n - (m - K)$ points, où $m$ est le numéro du lancer après lequel l’annonce a été faite ($0$ pour le premier, $N$ pour le dernier). Autrement dit, si elle fait l’annonce après le lancer $m$, soit $m < K$ et elle ne gagne pas de point, soit $m \geqslant K$ et elle gagne $n$ points mais perd un point par tour de retard de son annonce. Quelle(s) stratégie(s) lui permet(tent) de maximiser l’espérance de son gain et que vaut alors ce gain en moyenne ?
>
> **7.** Proposer et étudier d’autres pistes de recherche.

**Topic:** [[topic_probabilita|Probabilità]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)


<div class="qlang-split" data-lang="it"></div>


*Monete rigidate: Felix lancia una moneta con probabilità di sbarco p; Clara predice i prossimi lanci per massimizzare il suo guadagno garantito (in peggiore dei casi rispetto a p) previsto tra le strategie, quindi con due monete, indovinando quale moneta, e un punto di svolta K.*

> $n \ge 1$ sia un numero intero. Felix e Clara giocano a testa o coda. Felix possiede una moneta truccata che cade sulle teste con probabilità $p \in [0,1]$. Felix lancia la moneta la prima volta, poi Clara cerca di prevedere il risultato del prossimo lancio, Felix lancia di nuovo la moneta, Clara fa una previsione, e così via. La prima previsione di Clara riguarda il numero di flip $2$; in totale Felix flips la moneta $n+1$ volte (le flips sono presumibilmente indipendenti) e Clara fa $n$ previsioni per le flips $2, 3, \dots, n+1$. I volti $n+1$ e le previsioni $n$ costituiscono un $\textbf{game}$.
> 
> Un esempio di gioco, per $n = 2$, è: Felix volte le teste; Clara predice le code; Felix volte le code; Clara predice le teste; Felix volte le code. In questo caso, Clara fece una prima previsione corretta e una seconda incorreta.
> 
> Supponiamo in questa domanda che Clara guadagni un punto per ogni predizione corretta. Il suo numero totale di punti alla fine della partita è chiamato $\textbf{gain}$. Qual è l'aspettativa del suo guadagno se la sua previsione è: a) sempre testa? b) il risultato del passaggio precedente? c) le teste, se il numero di teste già ottenuto è pari, le code altrimenti?
> 
> Ora Clara vuole massimizzare le sue possibilità di ottenere un buon punteggio. Non conosce il valore di $p$, ma sa che $p \in \mathcal{P}$ dove $\mathcal{P}$ è un sottoinsieme di $[0,1]$. Una $\textbf{strategy}$ per Clara è un modo di scegliere quale previsione fare prima di girare $m$ in funzione dei risultati di girare $1, 2, \dots, m-1$. La domanda $\textbf{1.}$ fornisce tre esempi di strategie. $G_{\mathcal{S},p}$ sia il guadagno (a casuale) ottenuto per la strategia $\mathcal{S}$, con $p$ la probabilità che la moneta crolla. Uno definisce il $\textbf{minimal expected gain}$ per la strategia $\mathcal{S}$ come $\mathcal{G}_{\mathcal{S}} = \min_{p \in \mathcal{P}} \mathbb{E}(G_{\mathcal{S},p})$. In altre parole, $\mathcal{G}_{\mathcal{S}}$ è l'aspettativa del guadagno portato dalla strategia $\mathcal{S}$ per il peggiore dei valori di $p \in \mathcal{P}$, cioè quello in cui questo guadagno previsto è il più basso.
> 
> Se Clara non dispone di informazioni a priori sul valore di $p$, cioè $\mathcal{P} = [0,1]$, quale è il guadagno minimo atteso per le strategie a), b), c) descritte nella domanda $\textbf{1.}$?
> 
> $\textbf{3.}$ Trovare una strategia $\mathcal{S}$ che dà il massimo guadagno minimo atteso $\mathcal{G}_{\mathcal{S}}$ tra tutte le strategie possibili (e calcolarla) se: a) $\mathcal{P} = [0, \frac{1}{2}]$; b) $\mathcal{P} = [0, 1]$; c) $\mathcal{P} = [0, \frac{1}{4}] \cup [\frac{3}{4}, 1]$.
> 
> Da ora in poi, Felix possiede due monete, di aspetto indistinguibile, che cadono sulle teste con probabilità $p_1$ e $p_2$. Prima di ogni partita, sceglie la moneta $1$ con probabilità $q$ (di conseguenza la moneta $2$ con probabilità $1-q$) e poi lancia la moneta scelta $n+1$ volte, come prima. Si suppone che Clara conosca le probabilità $p_1$, $p_2$ e $q$ (per cui le scelte di previsione che fa possono dipendere da $p_1$, $p_2$ e $q$).
> 
> Qual è l'aspettativa del guadagno di Clara per le strategie a), b) e c) descritte nella questione? Tra tutte le strategie possibili, trovate una per la quale l'aspettativa di guadagno è la più grande possibile, e calcolatela.
> 
> Clara non cerca più di indovinare il risultato dei lanci, ma piuttosto quale moneta è stata scelta. Felix lancia la moneta per la prima volta, quindi dopo ogni lancio Clara può scegliere di dichiarare quale moneta pensa sia stata scelta o di interrompere il gioco; guadagna $1$ punti per corretta scommessa ma perde un punto per ulteriore lancio richiesto.
> 
> Quale strategia massimizza l'aspettativa del guadagno ottenuto, e quale è quindi questo guadagno in media? Cosa succede quando $n \to \infty$ (cioè quando non si fissa più un limite sul numero di volte richieste)?
> 
> Ora Felix ha ancora due monete ma cambia le monete a metà strada. Prima della partita, sceglie uniformemente a caso un numero $K$ tra $1$ e $n$ (inclusivo). Flippe moneta $1$ per flips $0, \dots, K-1$ e moneta $2$ per flips $K, \dots, n$. Clara conosce ancora le probabilità.
> 
> Clara deve indovinare quale$K$è stato scelto da Felix. a) Clara annuncia la sua previsione dopo i passaggi $n+1$. Quale strategia le permette di massimizzare la probabilità di avere ragione, e qual è questa probabilità? b) Clara può indovinare $K$ prima della fine della partita. Se ha ragione guadagna $n - (m - K)$ punti in cui $m$ è il numero del flip dopo il quale è stato fatto l'annuncio. In altre parole, se fa l'annuncio dopo il flip $m$, o $m < K$ e non guadagna punti, o $m \ge K$ e guadagna $n$ punti ma perde un punto per ogni flip di ritardo nel suo annuncio. Quali strategie le consentono di massimizzare l'aspettativa del suo guadagno, e qual è quindi questo guadagno in media?
> 
> $\textbf{7.}$ Proporre e studiare altre vie di ricerca.

![[src_tfjm_2024__Q06.png]]

**Topic:** [[topic_probabilita|Probabilita e statistica]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_stima|Stima e approssimazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Rigged coins: Felix flips a coin landing heads with probability p; Clara predicts upcoming flips to maximize her guaranteed (worst-case over p) expected gain across strategies, then with two coins, guessing which coin, and a switch point K.*

> Let $n \ge 1$ be an integer. Felix and Clara play heads-or-tails. Felix possesses a rigged coin that falls on heads with probability $p \in [0,1]$. Felix flips the coin a first time, then Clara tries to predict the result of the next flip, Felix flips the coin again, Clara makes a prediction, and so on. The first prediction of Clara concerns flip number $2$; in total Felix flips the coin $n+1$ times (the flips are supposed independent) and Clara makes $n$ predictions for flips $2, 3, \dots, n+1$. The $n+1$ flips and the $n$ predictions constitute a $\textbf{game}$.
> 
> An example of a game, for $n = 2$, is: Felix flips heads; Clara predicts tails; Felix flips tails; Clara predicts heads; Felix flips tails. In this case, Clara made a first correct prediction and a second incorrect prediction.
> 
> $\textbf{1.}$ Suppose in this question that Clara gains one point per correct prediction. Her total number of points at the end of the game is called her $\textbf{gain}$. What is the expectation of her gain if her prediction is:
>   a) always heads?
>   b) the result of the previous flip?
>   c) heads if the number of heads already obtained is even, tails otherwise?
> 
> Now Clara wants to maximize her chances of obtaining a good score. She does not know the value of $p$ but knows that $p \in \mathcal{P}$ where $\mathcal{P}$ is a subset of $[0,1]$. A $\textbf{strategy}$ for Clara is a manner of choosing which prediction she will make before flip $m$ as a function of the results of flips $1, 2, \dots, m-1$. Question $\textbf{1.}$ gives three examples of strategies. Let $G_{\mathcal{S},p}$ be the (random) gain obtained for the strategy $\mathcal{S}$, with $p$ the probability that the coin falls heads. One defines the $\textbf{minimal expected gain}$ for the strategy $\mathcal{S}$ as $\mathcal{G}_{\mathcal{S}} = \min_{p \in \mathcal{P}} \mathbb{E}(G_{\mathcal{S},p})$. In other words, $\mathcal{G}_{\mathcal{S}}$ is the expectation of the gain brought by strategy $\mathcal{S}$ for the worst of the values of $p \in \mathcal{P}$, that is, the one where this expected gain is the lowest.
> 
> $\textbf{2.}$ If Clara has no a priori information on the value of $p$, that is $\mathcal{P} = [0,1]$, what is the minimal expected gain for strategies a), b), c) described in question $\textbf{1.}$?
> 
> $\textbf{3.}$ Find a strategy $\mathcal{S}$ that gives the greatest minimal expected gain $\mathcal{G}_{\mathcal{S}}$ among all possible strategies (and compute it) if:
>   a) $\mathcal{P} = [0, \frac{1}{2}]$;
>   b) $\mathcal{P} = [0, 1]$;
>   c) $\mathcal{P} = [0, \frac{1}{4}] \cup [\frac{3}{4}, 1]$.
> 
> From now on, Felix possesses two coins, of indistinguishable appearance, that fall on heads with probabilities $p_1$ and $p_2$. Before each game, he chooses coin $1$ with probability $q$ (hence coin $2$ with probability $1-q$) then flips the chosen coin $n+1$ times, as before. One supposes Clara knows the probabilities $p_1$, $p_2$ and $q$ (so the prediction choices she makes may depend on $p_1$, $p_2$ and $q$).
> 
> $\textbf{4.}$ What is the expectation of Clara's gain for strategies a), b), c) described in question $\textbf{1.}$? Among all possible strategies, find one for which the expectation of the gain is the greatest possible, and compute it.
> 
> Clara no longer tries to guess the results of the flips but rather which coin was chosen. Felix flips the coin a first time, then after each flip Clara may choose to declare which coin she thinks was chosen or to stop the game; she gains $1$ point per correct guess but loses one point per additional flip requested.
> 
> $\textbf{5.}$ Which strategy maximizes the expectation of the gain obtained, and what is then this gain on average? What happens when $n \to \infty$ (that is, when one no longer fixes a limit on the number of flips requested)?
> 
> Now Felix still has two coins but changes coin midway. Before the game, he chooses uniformly at random a number $K$ between $1$ and $n$ (inclusive). He flips coin $1$ for flips $0, \dots, K-1$ and coin $2$ for flips $K, \dots, n$. Clara still knows the probabilities $p_1$, $p_2$.
> 
> $\textbf{6.}$ Clara must guess which $K$ was chosen by Felix.
>   a) Clara announces her prediction after the $n+1$ flips. Which strategy(ies) allow her to maximize the probability of being right, and what is then this probability?
>   b) Clara may guess $K$ before the end of the game. If she is right she gains $n - (m - K)$ points where $m$ is the number of the flip after which the announcement was made. In other words, if she makes the announcement after flip $m$, either $m < K$ and she gains no points, or $m \ge K$ and she gains $n$ points but loses one point per flip of delay in her announcement. Which strategy(ies) allow her to maximize the expectation of her gain, and what is then this gain on average?
> 
> $\textbf{7.}$ Propose and study other avenues of research.

![[src_tfjm_2024__Q06.png]]

**Topic:** [[topic_probabilita|Probabilità]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_geometria_piana,topic_geometria_analitica,topic_insiemi_funzioni,method_coordinate,method_casework,method_estremalita,skill_ragionamento_geometrico,skill_astrazione,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Funny cookies: dough deposited along segments, each point P filling a disk of radius R(P); characterize which planar shapes (disk, rectangle, triangle, annulus) are cookies / r-cookies, the dough quantity needed, and which contours bound r-cookies.*

> Fabrice a décidé de faire des cookies aux formes mathématiques pour les goûters du $\mathrm{TFJM}^2$. Il dispose d’une poche à douille qui lui permet de déposer comme il le souhaite de la pâte à cookie dans le plan suivant un nombre fini de segments de ligne droite (le point étant accepté comme exemple de segment de longueur $0$). En chaque point $P$ de l’un de ces segments, la poche à douille permet à Fabrice de déposer de la pâte en quantité $R(P) \geqslant 0$ plus ou moins importante.
>
> Lorsqu’elle est au four, la pâte s’étale et remplit le disque de rayon $R(P)$ centré en $P$ pour chaque point $P$ où Fabrice met de la pâte. La pâte de Fabrice ne se repousse pas elle même. Par exemple si le disque de centre $P$ et de rayon $R(P)$ est contenu dans le disque de centre $P'$ et de rayon $R(P')$, alors la pâte s’étalera en un cookie de forme le disque de centre $P'$ et de rayon $R(P')$ uniquement. La forme du cookie après cuisson sera donc la réunion des disques de centre $P$ et de rayon $R(P)$ où $P$ parcourt l’ensemble des points où Fabrice a mis de la pâte.
>
> On appelle cookie du plan, ou plus simplement cookie, un ensemble de points du plan telle que la pâte de Fabrice peut s’étaler pour devenir cet ensemble en suivant ce procédé.
>
> La figure $10$ représente deux exemples de cookies. Le cookie orange est obtenu en étalant une pâte de rayon constant égal à $1$ sur un segment de longueur $1$. Le cookie bleu est obtenu à partir d’un segment de pâte de rayon variable et d’un autre point de pâte.
>
> Fabrice aimerait notamment fabriquer les formes de cookie suivantes :
>
> a) un disque de rayon $R$ ;
>
> b) un rectangle plein de côtés de longueurs $a$ et $b$ ;
>
> c) un triangle plein de côtés de longueurs $a$, $b$ et $c$ ;
>
> d) un anneau de rayon intérieur $R_1$ et de rayon extérieur $R_2$ (avec $R_2 > R_1$), les deux cercles qui constituent le bord de l’anneau étant inclus dans le cookie.
>
> **1.** La forme a) est-elle un cookie ? Même question pour chacune des formes b), c) et d).
>
> La quantité de pâte utilisée pour faire un cookie est la somme des longueurs des segments où Fabrice place de la pâte.
>
> **2.** Pour chacune des formes de la question précédente qui sont des cookies, avec quelles quantités de pâte Fabrice peut-il la réaliser ?
>
> La précision de la poche à douille de Fabrice étant limitée, la quantité de pâte qu’il dépose en $P$ ne peut pas être trop petite. Pour un $r \geqslant 0$ fixé, on dit que l’outil de Fabrice est de précision $r$ lorsque $R(P) \geqslant r$ pour tout point $P$ placé par Fabrice. On appelle $r$-cookie du plan, ou plus simplement $r$-cookie, un cookie que Fabrice peut réaliser avec un outil de précision $r$. Les réponses aux questions suivantes vont donc dépendre de $r$.
>
> En particulier, les $0$-cookies sont exactement les cookies, et tout $r$-cookie est un cookie.
>
> **3.** Reprendre les questions précédentes dans le cas des $r$-cookies, en fonction de $r$.
>
> **4.** On suppose dans cette question que Fabrice réalise un $r$-cookie sans faire de segment de longueur $0$ et tel qu’il est impossible d’obtenir la même forme en utilisant strictement moins de pâte. Est-il possible qu’une répartition différente de la même quantité de pâte permette d’obtenir le même $r$-cookie, toujous sans segment de longueur $0$ ?
>
> Fabrice s’intéresse maintenant à la forme du bord de ses $r$-cookies. Pour cela on suppose qu’il dispose de deux fonctions continues $x : \mathbb{R} \to \mathbb{R}$ et $y : \mathbb{R} \to \mathbb{R}$ qui vérifient les propriétés suivantes :
>
> — elles sont $1$-périodiques, c’est-à-dire que $x(t + 1) = x(t)$ et $y(t + 1) = y(t)$ pour tout $t$ réel,
>
> — pour toutes valeurs de $t$ et $t'$, on a simultanément $x(t) = x(t')$ et $y(t) = y(t')$ si et seulemlent si la différence $t - t'$ est entière.
>
> Fabrice trace dans le plan l’ensemble $\Gamma$ des points de coordonnées $(x(t), y(t))$, appelé contour. Il cherche maintenant à savoir si la partie du plan que le contour délimite (que l’on suppose bien définie) est un $r$-cookie.
>
> **5.** Existe-t-il un contour pour lequel $x$ et $y$ sont continues, mais pour lequel la partie délimitée n’est pas un $r$-cookie ? Si oui, est-ce possible avec $x$ et $y$ dérivables ? Deux fois dérivables ? Trois fois dérivables ?
>
> **6.** Existe-t-il un contour pour lequel $x$ et $y$ sont continues, qui soit un cookie, mais qui ne soit un $r$-cookie pour aucun $r > 0$ ? Si oui, est-ce possible avec $x$ et $y$ dérivables ? Deux fois dérivables ? Trois fois dérivables ?
>
> **7.** Donner d’autres conditions sur une forme pour que ce soit un $r$-cookie.
>
> **8.** Proposer et explorer d’autres pistes de recherche, par exemple en dimension $3$.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_casework|Casework]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Geometria]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)


<div class="qlang-split" data-lang="it"></div>


*Cookies divertenti: pasta depositata lungo i segmenti, ogni punto P riempendo un disco di raggio R(P); caratterizzare quali forme piane (disco, rettangolo, triangolo, annulo) sono cookie / r-cookies, la quantità di pasta necessaria, e quali contorni di r-cookies legati.*

> Fabrice ha deciso di produrre biscotti con forme matematiche per gli snack dei $\mathrm{TFJM}^2$. Ha un sacchetto che gli permette di depositare la pasta dei biscotti nell'aereo seguendo un modello preciso. La pasta depositata in un determinato istante si trova lungo un segmento di linea retta (un punto che viene accettato come limite di un segmento di lunghezza $0$). A ciascun punto $P$ di uno di questi segmenti, il sacchetto di tubazione consente a Fabrice di depositare una quantità più o meno grande $R(P) \ge 0$ di pasta.
> 
> Quando viene posta, la pasta si diffonde e riempie il disco di raggio $R(P)$ incentrato su $P$ per ogni punto $P$ in cui Fabrice mette la pasta. La pasta di Fabrice non si respinge da sola. Ad esempio, se il disco del centro $P$ e del raggio $R(P)$ è contenuto nel disco del centro $P'$ e del raggio $R(P')$, la pasta si diffonde in un biscotto di forma solo il disco del centro $P'$ e del raggio $R(P')$. La forma del biscotto dopo la cottura è quindi l'unione dei dischi del centro $P$ e del raggio $R(P)$, dove $P$ va oltre l'insieme dei punti in cui Fabrice mette la pasta.
> 
> Si chiama $\textbf{cookie of the plane}$ una regione ottenuta seguendo questa procedura.
> 
> La figura $10$ rappresenta due esempi di cookie. Il biscotto arancione viene ottenuto distribuendo una pasta di raggio costante pari a $1$ su un segmento di lunghezza $1$. Il biscotto blu è ottenuto da un segmento di pasta di raggio variabile e da un altro punto di pasta.
> 
> Fabrice desidera in particolare realizzare le seguenti forme di biscotto: a) un disco di raggio $R$; b) un rettangolo completo con lati di lunghezza $a$ e $b$; c) un triangolo completo con lati di lunghezza $a$, $b$ e $c$; d) un annulo di raggio interno $R_1$ e di raggio esterno $R_2$ (con $R_2 > R_1$), i due cerchi che formano il confine dell'annulo che sono inclusi nel biscotto.
> 
> $\textbf{1.}$ La forma a) è un biscotto? La stessa domanda per ciascuna delle forme b), c) e d).
> 
> Il $\textbf{quantity of dough}$ utilizzato per la preparazione di un biscotto è la somma delle lunghezze dei segmenti in cui Fabrice mette la pasta.
> 
> Per ciascuna delle forme della domanda precedente che sono biscotti, con quali quantità di pasta può Fabrice farla?
> 
> Poiché la precisione della borsa di tubi di Fabrice è limitata, la quantità di pasta che deposita a $P$ non può essere troppo piccola. Per un $r \ge 0$ fisso, si dice che lo strumento di Fabrice ha precisione $r$ quando $R(P) \ge r$ per ogni punto $P$ posizionato da Fabrice. Uno chiama $r$-$\textbf{cookie of the plane}$, più semplicemente $r$-cookie, un cookie che Fabrice può fare con uno strumento di precisione $r$. Le risposte alle seguenti domande dipenderanno quindi da $r$.
> 
> In particolare, i cookie $0$ sono esattamente i cookie e ogni cookie $r$ è un cookie.
> 
> $\textbf{3.}$ Ripetere le domande precedenti nel caso dei cookie $r$, come funzione di $r$.
> 
> $\textbf{4.}$ Supponiamo in questa domanda che Fabrice faccia un cookie $r$ senza utilizzare alcun segmento di lunghezza $0$ e che sia impossibile ottenere la stessa forma utilizzando strettamente meno pasta. È possibile che una ripartizione diversa della pasta produca lo stesso $r$-cookie, senza ancora un segmento di lunghezza $0$?
> 
> Fabrice è ora interessato alla forma del confine dei suoi cookie $r$. Il contorno di un biscotto è definito come segue. Si suppone che si abbiano due funzioni continue $x : \mathbb{R} \to \mathbb{R}$ e $y : \mathbb{R} \to \mathbb{R}$ che verificano le seguenti proprietà:  sono $1$-periodiche, cioè $x(t+1) = x(t)$ e $y(t+1) = y(t)$ per tutti i valori reali $t$;  per tutti i valori di $t$ e $t'$, si ha simultaneamente $x(t) = x(t')$ e $y(t) = y(t')$ se e solo se la differenza $t - t'$ è un numero intero.
> 
> Fabrice disegna nel piano l'insieme $\Gamma$ di punti di coordinate $(x(t), y(t))$, denominato $\textbf{contour}$. La regione del piano che il contorno delimita (che si suppone sia ben definita) può o non può essere un cookie $r$.
> 
> $\textbf{5.}$ Esiste un contorno per il quale $x$ e $y$ sono continui, ma per il quale la regione delimitata non è un cookie $r$? In tal caso, è possibile con $x$ e $y$ differenziabili? Due volte differenziabile? Tre volte differenziabile?
> 
> $\textbf{6.}$ Esiste un contorno per il quale $x$ e $y$ sono continui, che è un cookie, ma che non è un $r$-cookie per qualsiasi $r > 0$? In tal caso, è possibile con $x$ e $y$ differenziabili? Due volte differenziabile? Tre volte differenziabile?
> 
> $\textbf{7.}$ Trovare altre condizioni su una forma per essere un cookie $r$.
> 
> $\textbf{8.}$ Proporre e esplorare altre vie di ricerca, ad esempio nella dimensione $3$.

![[src_tfjm_2024__Q07.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Geometria]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Funny cookies: dough deposited along segments, each point P filling a disk of radius R(P); characterize which planar shapes (disk, rectangle, triangle, annulus) are cookies / r-cookies, the dough quantity needed, and which contours bound r-cookies.*

> Fabrice has decided to make cookies with mathematical shapes for the snacks of the $\mathrm{TFJM}^2$. He has a piping bag that lets him deposit cookie dough in the plane following a precise model. The dough deposited at a given instant lies along a straight-line segment (a point being accepted as the limit of a segment of length $0$). At each point $P$ of one of these segments, the piping bag lets Fabrice deposit a more or less large quantity $R(P) \ge 0$ of dough.
> 
> When it is laid down, the dough spreads and fills the disk of radius $R(P)$ centered at $P$ for each point $P$ where Fabrice puts dough. Fabrice's dough does not repel itself. For example, if the disk of center $P$ and radius $R(P)$ is contained in the disk of center $P'$ and radius $R(P')$, then the dough spreads into a cookie of shape the disk of center $P'$ and radius $R(P')$ only. The shape of the cookie after baking is thus the union of the disks of center $P$ and radius $R(P)$ where $P$ ranges over the set of points where Fabrice put dough.
> 
> One calls $\textbf{cookie of the plane}$ a region obtained by following this procedure.
> 
> Figure $10$ represents two examples of cookies. The orange cookie is obtained by spreading dough of constant radius equal to $1$ over a segment of length $1$. The blue cookie is obtained from a segment of dough of variable radius and another point of dough.
> 
> Fabrice would like in particular to make the following cookie shapes:
>   a) a disk of radius $R$;
>   b) a full rectangle with sides of lengths $a$ and $b$;
>   c) a full triangle with sides of lengths $a$, $b$ and $c$;
>   d) an annulus of inner radius $R_1$ and outer radius $R_2$ (with $R_2 > R_1$), the two circles forming the boundary of the annulus being included in the cookie.
> 
> $\textbf{1.}$ Is shape a) a cookie? Same question for each of the shapes b), c) and d).
> 
> The $\textbf{quantity of dough}$ used to make a cookie is the sum of the lengths of the segments where Fabrice places dough.
> 
> $\textbf{2.}$ For each of the shapes of the preceding question that are cookies, with what quantities of dough can Fabrice make it?
> 
> The precision of Fabrice's piping bag being limited, the quantity of dough he deposits at $P$ cannot be too small. For a fixed $r \ge 0$, one says Fabrice's tool has precision $r$ when $R(P) \ge r$ for every point $P$ placed by Fabrice. One calls $r$-$\textbf{cookie of the plane}$, more simply $r$-cookie, a cookie that Fabrice can make with a tool of precision $r$. The answers to the following questions will thus depend on $r$.
> 
> In particular, the $0$-cookies are exactly the cookies, and every $r$-cookie is a cookie.
> 
> $\textbf{3.}$ Reprise the preceding questions in the case of $r$-cookies, as a function of $r$.
> 
> $\textbf{4.}$ Suppose in this question that Fabrice makes an $r$-cookie without using any segment of length $0$ and that it is impossible to obtain the same shape using strictly less dough. Is it possible that a different repartition of the dough yields the same $r$-cookie, still without a segment of length $0$?
> 
> Fabrice is now interested in the shape of the boundary of his $r$-cookies. The contour of a cookie is defined as follows. One supposes one has two continuous functions $x : \mathbb{R} \to \mathbb{R}$ and $y : \mathbb{R} \to \mathbb{R}$ that verify the following properties:
>   — they are $1$-periodic, that is $x(t+1) = x(t)$ and $y(t+1) = y(t)$ for all real $t$;
>   — for all values of $t$ and $t'$, one has simultaneously $x(t) = x(t')$ and $y(t) = y(t')$ if and only if the difference $t - t'$ is an integer.
> 
> Fabrice draws in the plane the set $\Gamma$ of points of coordinates $(x(t), y(t))$, called $\textbf{contour}$. The region of the plane that the contour delimits (which one supposes well defined) may or may not be an $r$-cookie.
> 
> $\textbf{5.}$ Does there exist a contour for which $x$ and $y$ are continuous, but for which the delimited region is not an $r$-cookie? If so, is it possible with $x$ and $y$ differentiable? Twice differentiable? Three times differentiable?
> 
> $\textbf{6.}$ Does there exist a contour for which $x$ and $y$ are continuous, which is a cookie, but which is not an $r$-cookie for any $r > 0$? If so, is it possible with $x$ and $y$ differentiable? Twice differentiable? Three times differentiable?
> 
> $\textbf{7.}$ Find other conditions on a shape for it to be an $r$-cookie.
> 
> $\textbf{8.}$ Propose and explore other avenues of research, for example in dimension $3$.

![[src_tfjm_2024__Q07.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_casework|Casework]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Geometria]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,topic_aritmetica,method_congruenze,method_casework,method_fattorizzazione,method_grafi,skill_conteggio_sistematico,skill_astrazione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="fr"></div>


*Game creation: number N cards 1..N so that each authorized/forbidden pair is decided by reading the manual page indexed by the sum (or GCD, LCM, product) of the two card numbers; characterize admissible configurations and find the minimal M (>=N) making every configuration M-admissible.*

> Anaïs cherche à créer un jeu de société. Ce jeu nécessite de numéroter des cartes avec certaines contraintes. Le jeu est constitué d’un ensemble de $N \geq 2$ cartes comportant chacune un symbole différent. Chaque paire de symboles (différents) est autorisée ou interdite. On appelle configuration l’ensemble des paires autorisées.
>
> Anaïs veut permettre aux joueurs de savoir exactement quelles paires sont autorisées mais plutôt que de donner la liste exhaustive de paires autorisées, elle procède de la façon suivante : elle écrit sur chaque carte un numéro différent entre $1$ et $N$ et fournit aux joueurs un manuel avec $2N$ pages dans lequel chaque page comporte le mot « autorisée » ou « interdite » tel que pour connaître le statut d’une paire, il suffit pour les joueurs d’additionner les numéros présents sur les deux cartes et de regarder la page du manuel correspondante. Il est possible que certains numéros de page ne soient pas atteignables comme somme de numéros de cartes. Dans ce cas, ce qui est écrit dessus n’importe pas.
>
> Une configuration est admissible s’il est possible pour Anaïs d’effectuer la construction précédente, c’est-à-dire de numéroter les cartes et créer le manuel correspondant.
>
> Un exemple avec $N = 5$ est le suivant : le jeu comporte $5$ cartes $A$, $B$, $C$, $D$, $E$ et les seules paires autorisées sont $(A, D)$ et $(C, D)$. Cette configuration est admissible, car Anaïs peut faire la construction suivante : elle attribue aux cartes $A$, $B$, $C$, $D$, $E$ les numéros $3$, $5$, $2$, $1$, $4$ respectivement, et écrit « autorisée » sur les pages $3$ et $4$ de son manuel et « interdite » sur toutes les autres pages.
>
> **1.** Pour quels $N$ n’importe quelle configuration est-elle admissible ?
>
> **2.** Pour quels $N$ n’importe quelle configuration est-elle admissible parmi celles pour lesquelles :
>
> a) chaque carte appartient à au moins une paire autorisée ?
>
> b) chaque carte appartient à au plus une paire autorisée ?
>
> c) chaque carte appartient à au plus deux paires autorisées ?
>
> **3.** Reprendre les questions **1.** et **2.** si, au lieu de sommer les cartes, les joueurs calculent leur PGCD.
>
> **4.** Reprendre les questions **1.** et **2.** si, au lieu de sommer les cartes, les joueurs calculent leur PPCM (le manuel a alors $N^2$ pages).
>
> **5.** Reprendre les questions **1.** et **2.** si, au lieu de sommer les cartes, les joueurs calculent leur produit (le manuel a alors $N^2$ pages).
>
> Pour pouvoir construire son jeu quoi qu’il arrive, Anaïs s’autorise à numéroter les cartes avec des nombres deux à deux distincts de $1$ à $M$ avec $M \geqslant N$. Une configuration pour laquelle Anaïs peut construire une telle numérotation et un manuel associé est dite dite $M$-admissible.
>
> **6.** Estimer, en fonction de $N$, le $M$ minimal pour lequel toute configuration est $M$-admissible. Donner des exemples de configurations pour lesquelles on peut calculer le $M$ minimal pour lequel elles sont $M$-admissibles. On s’intéressera aux différents modes de combinaison des cartes (somme, PGCD...).
>
> **7.** Proposer et étudier d’autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]], [[method_grafi|Graph theory]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)


<div class="qlang-split" data-lang="it"></div>


*Creazione di gioco: numero N carte 1..N in modo che ogni coppia autorizzata/proibita venga decisa leggendo la pagina manuale indicizzata dalla somma (o GCD, LCM, prodotto) dei due numeri di carta; caratterizzare le configurazioni ammissibili e trovare la minima M (>=N) che rende ogni configurazione M-ammissibile.*

> Anaïs vuole creare un gioco da tavolo. Questo gioco richiede carte di numerazione con determinati vincoli. Il gioco è costituito da carte, ciascuna carta con un numero compreso tra $1$ e $N \ge 2$ e possibilmente un simbolo (distinto), insieme a un manuale di regole. Ogni coppia di simboli (distinti) è $\textbf{authorized}$ o $\textbf{forbidden}$. Uno chiama $\textbf{configuration}$ l'insieme di coppie autorizzate.
> 
> Anaïs vuole far sapere ai giocatori esattamente quali coppie sono autorizzate, ma invece di fornire un elenco esaustivo delle coppie autorizzate, procede come segue: scrive su ogni carta un numero diverso tra $1$ e $N$ e fornisce ai giocatori un manuale di regole. Per conoscere lo stato di una coppia, basta che i giocatori aggiungano i numeri scritti sulle due carte e guardano la pagina corrispondente del manuale. È possibile che alcuni numeri di pagina non siano raggiungibili come una somma di numeri di carta. In tal caso, ciò che è scritto su di loro non importa.
> 
> Una configurazione è $\textbf{admissible}$ se per Anaïs è possibile eseguire la costruzione precedente, cioè numerare le carte e creare il corrispondente manuale.
> 
> Un esempio con $N = 5$ è il seguente: il gioco ha le carte $5$ $A$, $B$, $C$, $D$, $E$ e le uniche coppie autorizzate sono $(A, D)$ e $(C, D)$. Questa configurazione è ammissibile, poiché Anaïs può fare la seguente costruzione: attribuisce alle carte $A$, $B$, $C$, $D$, $E$ i numeri $3$, $5$, $2$, $1$, $4$ rispettivamente, e scrive "autorizzato" sulle pagine $3$ e $4$ del suo manuale e "proibito" su tutte le altre pagine.
> 
> $\textbf{1.}$ Per quale $N$ è ammissibile ogni configurazione?
> 
> Per le quali è ammissibile ogni configurazione tra quelle per le quali: a) ogni carta appartiene ad almeno una coppia autorizzata? b) ciascuna carta appartiene ad un paio autorizzato? c) ciascuna carta appartiene ad un massimo di due coppie autorizzate?
> 
> $\textbf{3.}$ Ripeti le domande $\textbf{1.}$ e $\textbf{2.}$ se, invece di sommare le carte, i giocatori calcolano il loro GCD.
> 
> $\textbf{4.}$ Ripeti le domande $\textbf{1.}$ e $\textbf{2.}$ se, invece di sommare le carte, i giocatori calcolano il loro LCM (il manuale ha quindi pagine $N^2$).
> 
> $\textbf{5.}$ Ripeti le domande $\textbf{1.}$ e $\textbf{2.}$ se, invece di sommare le carte, i giocatori calcolano il loro prodotto (il manuale ha quindi pagine $N^2$).
> 
> Per poter costruire il suo gioco qualunque cosa accada, Anaïs si permette di numerare le carte con numeri distinti in coppia da $1$ a $M$ con $M \ge N$. Una configurazione per la quale Anaïs può costruire una tale numerazione e un manuale associato è detta $M$-$\textbf{admissible}$.
> 
> $\textbf{6.}$ Estimare, come funzione di $N$, il minimo $M$ per il quale ogni configurazione è $M$ ammissibile. Fornire esempi di configurazioni per le quali si può calcolare il minimo $M$ per il quale sono $M$ ammissibili. Si interesseranno le varie modalità di combinazione delle carte (somma, GCD, ...).
> 
> $\textbf{7.}$ Proporre e studiare altre vie di ricerca.

![[src_tfjm_2024__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_casework|Analisi per casi]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]


<div class="qlang-split" data-lang="en"></div>


*Game creation: number N cards 1..N so that each authorized/forbidden pair is decided by reading the manual page indexed by the sum (or GCD, LCM, product) of the two card numbers; characterize admissible configurations and find the minimal M (>=N) making every configuration M-admissible.*

> Anaïs wants to create a board game. This game requires numbering cards with certain constraints. The game consists of cards, each card bearing a number comprised between $1$ and $N \ge 2$ and possibly a (distinct) symbol, together with a rule manual. Each pair of (distinct) symbols is $\textbf{authorized}$ or $\textbf{forbidden}$. One calls $\textbf{configuration}$ the set of authorized pairs.
> 
> Anaïs wants to let the players know exactly which pairs are authorized, but rather than giving the exhaustive list of authorized pairs, she proceeds as follows: she writes on each card a different number between $1$ and $N$ and provides the players with a rule manual. To know the status of a pair, it suffices for the players to add the numbers written on the two cards and look at the corresponding page of the manual. It is possible that certain page numbers are not attainable as a sum of card numbers. In that case, what is written on them does not matter.
> 
> A configuration is $\textbf{admissible}$ if it is possible for Anaïs to carry out the preceding construction, that is, to number the cards and create the corresponding manual.
> 
> An example with $N = 5$ is the following: the game has $5$ cards $A$, $B$, $C$, $D$, $E$ and the only authorized pairs are $(A, D)$ and $(C, D)$. This configuration is admissible, because Anaïs can make the following construction: she attributes to cards $A$, $B$, $C$, $D$, $E$ the numbers $3$, $5$, $2$, $1$, $4$ respectively, and writes "authorized" on pages $3$ and $4$ of her manual and "forbidden" on all other pages.
> 
> $\textbf{1.}$ For which $N$ is every configuration admissible?
> 
> $\textbf{2.}$ For which $N$ is every configuration admissible among those for which:
>   a) each card belongs to at least one authorized pair?
>   b) each card belongs to at most one authorized pair?
>   c) each card belongs to at most two authorized pairs?
> 
> $\textbf{3.}$ Reprise questions $\textbf{1.}$ and $\textbf{2.}$ if, instead of summing the cards, the players compute their GCD.
> 
> $\textbf{4.}$ Reprise questions $\textbf{1.}$ and $\textbf{2.}$ if, instead of summing the cards, the players compute their LCM (the manual then has $N^2$ pages).
> 
> $\textbf{5.}$ Reprise questions $\textbf{1.}$ and $\textbf{2.}$ if, instead of summing the cards, the players compute their product (the manual then has $N^2$ pages).
> 
> To be able to build her game whatever happens, Anaïs allows herself to number the cards with pairwise distinct numbers from $1$ to $M$ with $M \ge N$. A configuration for which Anaïs can construct such a numbering and an associated manual is said $M$-$\textbf{admissible}$.
> 
> $\textbf{6.}$ Estimate, as a function of $N$, the minimal $M$ for which every configuration is $M$-admissible. Give examples of configurations for which one can compute the minimal $M$ for which they are $M$-admissible. One will be interested in the various modes of combining the cards (sum, GCD, ...).
> 
> $\textbf{7.}$ Propose and study other avenues of research.

![[src_tfjm_2024__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]], [[method_grafi|Graph theory]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)
