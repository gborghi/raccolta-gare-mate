---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020
tipo: gara
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020
family: tfjm
year: '2020'
level: TFJM²
---
<div class="atom-reader" data-gara="Quesiti/src_tfjm_2020"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,method_casework,method_conteggio,method_invarianti,method_colorazione,skill_conteggio_sistematico,skill_modellizzazione,skill_ragionamento_geometrico,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="fr"></div>


*Domino puzzle tiling completion on k×n grids*

> Laetitia est une experte en jeu de grilles. Pour changer du Sudoku, elle crée des puzzles.
>
> Dans une grille $k \times n$ dont les lignes sont numérotées de $1$ à $k$ et les colonnes de $1$ à $n$ avec $k \geqslant 2$, elle positionne (horizontalement ou verticalement) des dominos rectangulaires de taille $k \times 1$. Les dominos ne peuvent pas se chevaucher et ne doivent pas dépasser de la grille. Ainsi la figure 1 ne représente pas une grille valide car le domino orange dépasse de la grille, et les dominos bleus et verts se superposent.
>
> Ensuite, le joueur doit essayer de compléter la grille, toujours avec des dominos $k \times 1$ et en respectant les mêmes règles.
>
> Figure 1. Un exemple de grille non valide avec $k = 3$, $n = 9$.
>
> La figure 2 montre un exemple de grille sur laquelle Laetitia a posé deux dominos. Cette grille peut être complétée de trois manières différentes : l'une d'entre elles est illustrée en pointillés.
>
> Figure 2. Un exemple de grille valide avec $k = 3$, $n = 9$.
>
> **1.** Laetitia décide de laisser libre au moins un carré de taille $k \times k$ et de faire en sorte qu'il soit possible de compléter la grille. Est-il certain, quelles que soient les positions des pièces posées et quelle que soit la position de ce carré dans la grille, qu'il y aura au moins deux manières de compléter la grille ? Si non, pour quelles valeurs de $n$ et de $k$ peut-il n'y en avoir qu'une seule ?
>
> **2.** Soient $k$ et $n$ deux entiers fixés. Combien Laetitia doit-elle placer de dominos au minimum pour que le joueur ne puisse compléter la grille que d'une seule manière ?
>
> **3.** Soient $k$ et $n$ deux entiers fixés. Combien Laetitia peut-elle placer de dominos au maximum pour que le joueur puisse compléter la grille d'au moins deux manières ?
>
> À partir de maintenant, la grille est de taille $n \times n$, et $k \geqslant 2$ est un diviseur de $n$.
>
> **4.** Reprendre les questions précédentes dans ce cas.
>
> **5.** Laetitia colorie les cases de la grille dont les deux coordonnées sont des multiples de $k$. Elle s'impose de positionner l'extrémité d'un domino sur chacune de ces cases, comme illustré par la figure 3. Pour quelles valeurs de $n$ et $k$ peut-elle faire en sorte qu'il y ait plusieurs manières de compléter la grille ?
>
> Figure 3. Un exemple de grille que peut proposer Laetitia pour $k = 3$, $n = 6$.
>
> **6.** Laetitia colorie de nouveau les mêmes cases et positionne un domino sur chacune mais, cette fois, elle ne s'impose pas que ce soit une extrémité qui recouvre la case. Pour quelles valeurs de $n$ et $k$ peut-elle faire en sorte qu'il y ait plusieurs manières de compléter la grille ?
>
> **7.** Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_invarianti|Invarianti]], [[method_colorazione|Colorazione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Puzzle di domino per completare griglie k×n*

> Laetitia è un'esperta di giochi di griglia. Per cambiare dal Sudoku, crea enigmi.
>
> Considera una griglia $k \times n$ le cui righe sono numerate da $1$ a $k$ e le cui colonne sono numerate da $1$ a $n$, con $k \ge 2$. Vi posiziona (orizzontalmente o verticalmente) domino rettangolari di dimensione $k \times 1$. I domino non devono sovrapporsi e non devono andare oltre le colonne $1$ a $n$. Nella Figura 1, il domino arancione rappresenta una posizione valida della griglia, e i domino blu e verde si sovrappongono.
>
> Poi, il giocatore deve cercare di completare la griglia, sempre con domino $k \times 1$ e rispettando le stesse regole.
>
> La Figura 2 mostra un esempio di griglia valida con $k=3$, $n=9$ in cui Laetitia ha posizionato due domino. Questa griglia può essere completata in tre modi diversi; uno di essi è mostrato con linee tratteggiate.
>
> **1.** Laetitia decide di lasciare almeno un quadrato $k \times k$ libero e di disporre le cose in modo che sia possibile completare la griglia. Quali sono le possibili posizioni di questo quadrato nella griglia, e quali sono le possibili modalità di completamento della griglia? Se possibile, per quali valori di $n$ e $k$ può esserci un'unica modalità?
>
> **2.** Siano $k$ e $n$ due interi fissati. Qual è il numero minimo di domino che Laetitia deve posizionare affinché il giocatore non possa completare la griglia in almeno due modi diversi?
>
> **3.** Siano $k$ e $n$ due interi positivi. Qual è il numero massimo di posizioni che un domino può occupare? Studiare i casi in cui $n$ e $k$ si dividono a vicenda.
>
> **4.** Da ora in poi la griglia ha dimensione $n \times n$, e $k \ge 2$ è un divisore di $n$. Riprendere le domande precedenti in questo caso.
>
> **5.** Laetitia colora le celle della griglia le cui due coordinate sono multipli di $k$. Impone che un'estremità di un domino cada su una di queste celle colorate, come illustrato dalla Figura 3. Per quali valori di $n$ e $k$ può disporre le cose in modo che ci sia almeno un modo per completare la griglia? C'è al massimo un modo?
>
> **6.** Laetitia colora ora le stesse celle anche sui suoi domino, ma questa volta non richiede che sia l'estremità a coprire la cella colorata. Per quali valori di $n$ e $k$ può disporre le cose in modo che ci sia almeno un modo per completare la griglia?
>
> **7.** Proporre e studiare altri percorsi di ricerca.

![[src_tfjm_2020__Q01.png]]


**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]], [[method_invarianti|Invarianti / monovarianti]], [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Domino puzzle tiling completion on k×n grids*

> Laetitia is an expert at grid games. To change from Sudoku, she creates puzzles.
> 
> She considers a $k \times n$ grid whose rows are numbered from $1$ to $k$ and whose columns are numbered from $1$ to $n$, with $k \ge 2$. She places (horizontally or vertically) rectangular dominoes of size $k \times 1$ in it. The dominoes must not overlap and must not go beyond columns $1$ to $n$. In Figure 1, the orange domino represents a valid grid position, and the blue and green dominoes overlap.
> 
> Then, the player must try to complete the grid, always with $k \times 1$ dominoes and respecting the same rules.
> 
> Figure 2 shows an example of a valid grid with $k=3$, $n=9$ in which Laetitia placed two dominoes. This grid can be completed in three different ways; one of them is shown with dotted lines.
> 
> **1.** Laetitia decides to leave at least one $k \times k$ square free and to arrange things so that it is possible to complete the grid. What are the possible positions of this square in the grid, and which are the possible ways to complete the grid? If so, for which values of $n$ and $k$ can there be only one way?
> 
> **2.** Let $k$ and $n$ be two fixed integers. What is the minimum number of dominoes Laetitia must place so that the player cannot complete the grid in at least two different ways?
> 
> **3.** Let $k$ and $n$ be two positive integers. What is the maximum number of positions a domino can occupy? Study the cases where $n$ and $k$ divide each other.
> 
> **4.** From now on the grid has size $n \times n$, and $k \ge 2$ is a divisor of $n$. Revisit the previous questions in this case.
> 
> **5.** Laetitia colours the cells of the grid whose both coordinates are multiples of $k$. She imposes that an extremity of a domino lands on one of these coloured cells, as illustrated by Figure 3. For which values of $n$ and $k$ can she arrange things so that there is at least one way to complete the grid? Is there at most one?
> 
> **6.** Laetitia now colours the same cells on her dominoes as well, but this time she does not require that it is the extremity that covers the coloured cell. For which values of $n$ and $k$ can she arrange things so that there is at least one way to complete the grid?
> 
> **7.** Propose and study other avenues of research.

![[src_tfjm_2020__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_invarianti|Invarianti]], [[method_colorazione|Colorazione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,topic_geometria_piana,method_casework,method_estremalita,method_conteggio,skill_conteggio_sistematico,skill_modellizzazione,skill_stima,skill_lettura_attenta,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="fr"></div>


*Minimum suitcase length to pack n square tiles perfectly or near-rotationally*

> Pauline cherche à ranger ses affaires dans le coffre de sa voiture avant de partir en vacances.
>
> Elle dispose pour cela d'un coffre qui est un carré de côté réel $L$, ainsi que de $n$ valises qui sont des rectangles d'une certaine hauteur et largeur réelle, et initialement placés de sorte que la hauteur de chaque valise soit parallèle au même côté du carré.
>
> Un remplissage parfait du coffre est une disposition d'un certain nombre de valises qui ne se superposent pas dans le coffre de sorte qu'aucune valise n'ait été tournée. Un remplissage à rotation près est une disposition de valises qui ne se superposent pas dans le coffre de sorte que chaque valise ait subi une rotation d'un quart de tour ou n'ait pas été tournée.
>
> Dans la figure 4 on observe trois remplissages d'un coffre de côté $5 \times 5$ avec des valises de dimensions respectives $1 \times 3$, $2 \times 2$ et $3 \times 1$. On observe un remplissage parfait et à rotation près à gauche, un remplissage à rotation près à droite et un remplissage qui n'est pas valide au centre car deux valises se superposent et une valise dépasse du coffre.
>
> Figure 4. Trois exemples de remplissages avec $n = 3$ valises.
>
> **1.** Quelle est la longueur $L$ minimale nécessaire pour obtenir un remplissage parfait avec $n$ valises carrées de côté $1$ ? On commencera par étudier les cas où $n \leqslant 10$.
>
> **2.** Quelle est la longueur $L$ minimale nécessaire pour obtenir un remplissage parfait avec $n$ valises rectangulaires de longueur $1$ et hauteur $h$ pour un certain $h$ fixé ?
>
> **3.** Même question, mais pour un remplissage à rotation près. On commencera par étudier le cas où $h = 2, 3$ puis le cas où $h$ est un entier quelconque et enfin le cas où $h$ est un réel quelconque.
>
> **4.** Soit $n$ un entier. Pauline dispose d'un coffre de côté $L$ et prend $n$ valises d'aire $1$ dont elle choisit les hauteurs et longueurs. Ensuite son ami Franck choisit d'en tourner certaines d'un quart de tour pour l'embêter. Pauline doit obtenir un remplissage parfait de son coffre de côté $L$ quelles que soient les valises tournées par Franck. Quel est le plus petit $L$ tel qu'il existe un choix de valises pour Pauline pour lequel cela est possible quelles que soient les valises retournées par Franck ? On commencera par étudier les cas où $n \leqslant 6$.
>
> Un coffre de côté $L$ et un ensemble de $n$ valises sont dits compatibles si l'aire du coffre est égale à la somme des aires des valises, et si les hauteurs et longueurs des valises ne dépassent pas $L$.
>
> Pour un coffre et un ensemble de valises compatibles un remplissage utilisant une partie des valises a pour efficacité le rapport $\dfrac{A}{L^2}$ où $A$ est l'aire totale des valises utilisées pour le remplissage et $L$ la longueur du côté du coffre.
>
> **5.** Quel est le plus grand réel $0 \leqslant x \leqslant 1$ tel qu'il soit toujours possible d'obtenir une efficacité au moins égale à $x$ pour n'importe quel coffre et ensemble de valises compatibles avec un remplissage parfait ? Même question pour un remplissage à rotation près.
>
> **6.** Pauline dispose de $n$ valises de taille $1 \times h$ avec $h$ un réel fixé. Cependant, son ami Franck veut lui jouer un tour et il a tourné certaines valises. De quelle taille de coffre minimale $L$ Pauline aura-t-elle besoin pour être certaine de pouvoir obtenir un remplissage parfait ? On commencera par étudier le cas $h = 2, 3$ puis le cas $h$ entier, et enfin le cas $h$ quelconque.
>
> **7.** Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_lettura_attenta|Lettura attenta]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Geometria|Geometry]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Lunghezza minima della valigia per impacchettare n piastrelle quadrate perfettamente o quasi-ruotate*

> Pauline vuole impacchettare i suoi effetti personali nel bagagliaio della sua auto prima di partire per le vacanze.
>
> Ha una valigia di lato reale $L$, insieme a $n$ piastrelle quadrate ciascuna di una certa altezza e larghezza reale, inizialmente posizionate in modo che l'altezza di ciascuna piastrella sia parallela a un lato della valigia. Un **impacchettamento perfetto** della valigia è un'arrangiamento di un certo numero di piastrelle che non si sovrappongono all'interno della valigia in modo che nessuna piastrella sia stata ruotata. Un **impacchettamento quasi-ruotato** è un'arrangiamento di piastrelle che non si sovrappongono all'interno della valigia in modo che ciascuna piastrella sia stata ruotata di esattamente un quarto di giro e nessuna altra rotazione. Nella Figura 4, tre impacchettamenti con $n = 3$ piastrelle di dimensioni $1 \times 3$, $2 \times 2$ e $3 \times 1$ sono mostrati: un impacchettamento perfetto, un impacchettamento quasi-ruotato a destra e un impacchettamento non valido in cui due piastrelle si sovrappongono e una supera la valigia.
>
> **1.** Qual è la lunghezza minima $L$ necessaria per ottenere un impacchettamento perfetto con $n$ piastrelle quadrate di lato $1$? Inizieremo a studiare i casi $n \le 10$.
>
> **2.** Qual è la lunghezza minima $L$ necessaria per ottenere un impacchettamento perfetto con $n$ piastrelle rettangolari di dimensioni $1 \times h$ per un $h$ fisso? Inizieremo a studiare i casi $n \le 10$.
>
> **3.** Stessa domanda, ma per un impacchettamento quasi-ruotato. Inizieremo a studiare il caso $h = 2, 3$, poi il caso in cui $h$ è un intero qualsiasi, e infine il caso in cui $h$ è un numero reale qualsiasi.
>
> **4.** Sia $n$ un intero. Pauline ha una valigia di lato $L$ e prende $n$ piastrelle di lato $1$. Poi il suo amico Franck sceglie di ruotare alcune delle piastrelle. Qual è il più piccolo $L$ tale che esista una scelta di piastrelle per Pauline per cui Franck possa sempre ottenere un impacchettamento perfetto? Inizieremo a studiare i casi $n \le 6$.
>
> **5.** Qual è il più piccolo $0 \le x \le 1$ tale che sia sempre possibile ottenere un impacchettamento compatibile con $n$ piastrelle usando una frazione $x$ delle piastrelle totali usate per l'impacchettamento, e $L$ è la lunghezza della valigia? Stessa domanda per un impacchettamento quasi-ruotato.
>
> **6.** Franck ha una valigia di dimensioni $1 \times h$ con $h$ fisso. Il suo amico vuole giocare un turno, avendo posizionato un certo numero di piastrelle. Da quale dimensione minima di valigia $L$ può Franck sempre ottenere un impacchettamento? Inizieremo a studiare i casi $n = 2, 3$, poi il caso in cui $h$ è intero, e infine il caso generale in cui $h$ è reale.
>
> **7.** Proporre e studiare altri percorsi di ricerca.

![[src_tfjm_2020__Q02.png]]


**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_stima|Stima e approssimazione]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]


<div class="qlang-split" data-lang="en"></div>


*Minimum suitcase length to pack n square tiles perfectly or near-rotationally*

> Pauline wants to pack her belongings into the boot of her car before leaving on holidays.
> 
> She has a suitcase of real side length $L$, together with $n$ square tiles each of a certain real height and width, initially placed so that the height of each tile is parallel to a side of the suitcase. A **perfect packing** of the suitcase is an arrangement of a certain number of tiles that do not overlap inside the suitcase so that no tile has been rotated. A **near-rotation packing** is an arrangement of tiles that do not overlap inside the suitcase so that each tile has been rotated by exactly one quarter turn and no other rotation. In Figure 4, three packings with $n = 3$ tiles of dimensions $1 \times 3$, $2 \times 2$, and $3 \times 1$ are shown: a perfect packing, a near-rotation packing to the right, and an invalid packing where two tiles overlap and one exceeds the suitcase.
> 
> **1.** What is the minimum length $L$ needed to obtain a perfect packing with $n$ square tiles of side $1$? We will start by studying the cases $n \le 10$.
> 
> **2.** What is the minimum length $L$ needed to obtain a perfect packing with $n$ rectangular tiles of dimensions $1 \times h$ for a fixed $h$? We will start by studying the cases $n \le 10$.
> 
> **3.** Same question, but for a near-rotation packing. We will start by studying the case $h = 2, 3$, then the case where $h$ is any integer, and finally the case where $h$ is any real number.
> 
> **4.** Let $n$ be an integer. Pauline has a suitcase of side $L$ and takes $n$ tiles of side $1$. Then her friend Franck chooses to rotate some of the tiles. What is the smallest $L$ such that there exists a choice of tiles for Pauline for which Franck can always obtain a perfect packing? We will start by studying the cases $n \le 6$.
> 
> **5.** What is the smallest $0 \le x \le 1$ such that it is always possible to obtain a compatible packing with $n$ tiles using a fraction $x$ of the total tiles used for the packing, and $L$ is the length of the suitcase? Same question for a near-rotation packing.
> 
> **6.** Franck has a suitcase of size $1 \times h$ with $h$ fixed. His friend wants to play a turn, having placed a certain number of tiles. From what minimum suitcase size $L$ can Franck always obtain a packing? We will start by studying the cases $n = 2, 3$, then the case $h$ integer, and finally the general case $h$ real.
> 
> **7.** Propose and study other avenues of research.

![[src_tfjm_2020__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_lettura_attenta|Lettura attenta]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Geometria|Geometry]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_logica,method_casework,method_estremalita,method_backward,method_grafi,method_simmetria,skill_modellizzazione,skill_ragionamento_geometrico,skill_conteggio_sistematico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="fr"></div>


*Strategic pizza-sharing game: maximising gain on circular and square pizzas*

> Lily et Hadrien se retrouvent pour un festin, et ils veulent tous les deux manger le plus possible.
>
> Une pizza est découpée en $n$ parts, et chacune a un certain poids qui est un réel positif ou nul correspondant à la quantité de garniture sur la part. On note $S$ la somme de tous les poids, que l'on suppose strictement positive.
>
> Lily commence par prendre la part de son choix. Ensuite, à tour de rôle en commençant par Hadrien, les deux amis prennent une part parmi les deux qui sont voisines d'une part déjà prise jusqu'à ce qu'il ne reste plus de pizza. Le gain d'un joueur est la somme des poids de ses parts, divisé par $S$.
>
> Figure 5. Un exemple de pizza à $n = 5$ parts et de poids total $S = 7$.
>
> Avec par exemple la pizza illustrée sur la figure 5, Lily peut commencer par prendre la part de poids $3$. Dans ce cas, Hadrien peut prendre une des deux parts de poids $1$, par exemple celle de droite. Ensuite Lily peut prendre la part de poids $2$ puis Hadrien l'autre de poids $1$ et enfin Lily finit en prenant la part de poids $0$. Dans ce cas le gain de Lily est de $\dfrac{3+2+0}{S} = \dfrac{5}{7}$.
>
> Étant donné une répartition des poids sur la pizza, on note $g_{\max}$ le plus grand gain que Lily peut s'assurer à coup sûr quelle que soit la manière de jouer de Hadrien.
>
> Néanmoins, elle décide parfois de moins réfléchir et de jouer de la manière suivante : elle prend la part la plus lourde au premier tour, puis à chaque étape la part la plus lourde parmi les deux parts qu'elle peut prendre. Lorsqu'il y a une égalité elle peut choisir la part qu'elle souhaite. Le gain maximal qu'elle peut s'assurer en suivant ces règles est noté $g_{\text{glouton}}$. En particulier, $g_{\max} \geqslant g_{\text{glouton}}$.
>
> **1.** Lorsque $n = 2, 3, 4, 5$, quelles sont les valeurs possibles de $g_{\max}$ ?
>
> **2.** Pour quels entiers $n$ peut-on avoir $g_{\max} > g_{\text{glouton}}$, c'est-à-dire qu'il existe une stratégie strictement meilleure que toute stratégie gloutonne ?
>
> **3.** Pour quels entiers $n$ a-t-on nécessairement $g_{\max} \geqslant \dfrac{1}{2}$ ?
>
> **4.** Soit $n$ un entier. Encadrer aussi précisément que possible la plus petite valeur possible pour $g_{\max}$.
>
> À partir de maintenant, Lily et Hadrien jouent sur un brownie carré, découpé en $n \times n$ parts carrées. En commençant par Lily, chacun peut à son tour prendre une part si au moins deux de ses bords sont libres.
>
> **5.** Des bougies sont posées sur une part sur deux (dans le cas où $n$ est impair, il peut y avoir $\left\lceil \dfrac{n^2}{2} \right\rceil$ ou $\left\lfloor \dfrac{n^2}{2} \right\rfloor$ bougies). Combien Lily peut-elle s'assurer d'obtenir de parts contenant des bougies ?
>
> Figure 6. Un Brownie découpé en $4 \times 4$ parts, avec $8$ bougies.
>
> **6.** Hadrien possède $k$ bougies, avec $k \leqslant n^2$ et peut les placer où il le souhaite avant le début de la partie. Selon les valeurs de $k$ et $n$, combien Lily peut-elle s'assurer d'obtenir de parts contenant des bougies ?
>
> **7.** Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_backward|Backward]], [[method_grafi|Grafi]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Strategia di condivisione di pizza: massimizzazione del guadagno su pizze circolari e quadrate*

> Lily e Hadrien si incontrano per un banchetto e entrambi vogliono mangiare il più possibile.
>
> Una pizza è tagliata in $n$ parti, e ciascuna parte ha un certo peso positivo pari alla quantità di condimento su di essa. Denotiamo con $S$ la somma di tutti i pesi.
>
> Lily va per prima e prende una parte a sua scelta. Poi, a partire da Hadrien, i due amici si alternano: ogni giocatore prende una parte che è vicina a una parte già presa, finché non resta più pizza. Il guadagno di un giocatore è la somma dei pesi delle sue parti divisa per $S$.
>
> Ad esempio, con la pizza illustrata nella Figura 5 ($n = 5$, peso totale $S = 7$), Lily inizia prendendo la parte di peso $3$. Poi Hadrien prende una delle due parti adiacenti, qui per esempio quella a destra. Poi Lily prende la parte di peso $2$, poi la parte di peso $1$, e infine Lily finisce prendendo la parte di peso $0$. In questo caso il guadagno di Lily è $\frac{3+2+0}{7} = \frac{5}{7}$.
>
> Data una distribuzione delle parti della pizza, denotiamo con $g_{\max}$ il guadagno massimo che Lily può garantire per certo, qualunque sia il modo di giocare di Hadrien.
>
> Tuttavia, a volte decide di pensare meno e di giocare nel seguente modo: prende la parte più pesante al primo turno, poi a ogni passo prende la più pesante delle (al massimo due) parti che può prendere; in caso di parità può scegliere la parte che desidera. Il guadagno massimo che può garantire seguendo queste regole è denotato $g_{\text{glouton}}$. In particolare, $g_{\max} \ge g_{\text{glouton}}$.
>
> **1.** Quando $n = 2, 3, 4, 5$, quali sono i valori possibili di $g_{\max}$?
>
> **2.** Per quali interi $n$ si può avere $g_{\max} > g_{\text{glouton}}$, cioè esiste una strategia strettamente migliore di qualsiasi strategia greedy?
>
> **3.** Per quali interi $n$ abbiamo necessariamente $g_{\max} \ge \frac{1}{2}$?
>
> **4.** Sia $n$ un intero. Stima il più precisamente possibile il valore minimo possibile di $g_{\max}$.
>
> Da ora in poi, Lily e Hadrien giocano su un brownie quadrato tagliato in parti quadrate $n \times n$. Studiamo inizialmente il caso in cui $n$ parti sono libere.
>
> **5.** Ora vengono posizionate delle candele, una per parte (nel caso in cui $n$ sia dispari, devono esserci $\left\lceil \frac{n^2}{2} \right\rceil$ o $\left\lfloor \frac{n^2}{2} \right\rfloor$ candele). Quante parti contenenti candele può Lily garantire di ottenere?
>
> **6.** Hadrien ha $k$ candele, con $k \le n^2$, e le posiziona dove vuole prima dell'inizio del gioco. A seconda dei valori di $k$ e $n$, quante parti contenenti candele può Lily garantire di ottenere?
>
> **7.** Proporre e studiare altri percorsi di ricerca.

![[src_tfjm_2020__Q03.png]]


**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]], [[method_backward|Ragionamento all'indietro]], [[method_grafi|Teoria dei grafi]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Strategic pizza-sharing game: maximising gain on circular and square pizzas*

> Lily and Hadrien meet for a feast, and they both want to eat as much as possible.
> 
> A pizza is cut into $n$ parts, and each part has a certain positive weight equal to the quantity of topping on it. We denote by $S$ the sum of all the weights.
> 
> Lily goes first and takes a part of her choice. Then, starting from Hadrien, the two friends alternate turns: each player takes a part that is a neighbour of a part already taken, until there is no pizza left. The gain of a player is the sum of the weights of their parts divided by $S$.
> 
> For example, with the pizza illustrated in Figure 5 ($n = 5$, total weight $S = 7$), Lily starts by taking the part of weight $3$. Then Hadrien takes one of the two adjacent parts, here for example the one on the right. Then Lily takes the part of weight $2$, then the part of weight $1$, and finally Lily finishes by taking the part of weight $0$. In this case Lily's gain is $\frac{3+2+0}{7} = \frac{5}{7}$.
> 
> Given a distribution of the pizza parts, we denote by $g_{\max}$ the largest gain that Lily can guarantee for sure, whatever Hadrien's way of playing.
> 
> Nevertheless, she sometimes decides to think less and to play in the following way: she takes the heaviest part on the first turn, then at each step takes the heaviest of the (at most two) parts she may take; in case of a tie she may choose whichever part she wishes. The maximum gain she can guarantee by following these rules is denoted $g_{\text{glouton}}$. In particular, $g_{\max} \ge g_{\text{glouton}}$.
> 
> **1.** When $n = 2, 3, 4, 5$, what are the possible values of $g_{\max}$?
> 
> **2.** For which integers $n$ can one have $g_{\max} > g_{\text{glouton}}$, i.e., does there exist a strategy strictly better than any greedy strategy?
> 
> **3.** For which integers $n$ do we necessarily have $g_{\max} \ge \frac{1}{2}$?
> 
> **4.** Let $n$ be an integer. Bound as precisely as possible the smallest possible value of $g_{\max}$.
> 
> From now on, Lily and Hadrien play on a square brownie cut into $n \times n$ square parts. We begin by studying the case where $n$ parts are free.
> 
> **5.** Candles are now placed one per part (in the case where $n$ is odd, there must be $\left\lceil \frac{n^2}{2} \right\rceil$ or $\left\lfloor \frac{n^2}{2} \right\rfloor$ candles). How many parts containing candles can Lily ensure to obtain?
> 
> **6.** Hadrien has $k$ candles, with $k \le n^2$, and they are placed where he wishes before the start of the game. According to the values of $k$ and $n$, how many parts containing candles can Lily ensure to obtain?
> 
> **7.** Propose and study other avenues of research.

![[src_tfjm_2020__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_backward|Backward]], [[method_grafi|Grafi]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_combinatoria,topic_logica,method_casework,method_invarianti,method_backward,method_grafi,method_estremalita,skill_modellizzazione,skill_casework_accurato,skill_ragionamento_geometrico,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*Two-player furniture-moving game in a 1D and 2D warehouse*

> Olivier essaie de coincer des meubles dans l'entrepôt d'Animath, mais Chloé cherche à les défendre.
>
> Soit $d \geqslant 2$ un entier. On considère des meubles de taille $1 \times d$ et $d \times 1$ que l'on stocke dans un entrepôt.
>
> **1.** On se place dans un entrepôt de taille $(d + 1) \times (d + 1)$. L'entrepôt est dit rempli si on ne peut pas placer de nouveau meuble comme illustré sur la figure 7. Quel est le nombre minimal de meubles nécessaire pour qu'un entrepôt soit rempli ? Combien peut-il y avoir de meubles au maximum ?
>
> Figure 7. Un entrepôt $4 \times 4$ rempli pour $d = 3$.
>
> Soit $n \in \mathbb{N}^*$. On considère un entrepôt de taille $1 \times n$. Olivier et Chloé agissent tour à tour de la façon suivante :
>
> - à son tour, Olivier pose un meuble dans l'entrepôt si cela est possible ;
> - à son tour, Chloé peut déplacer horizontalement un meuble de son choix.
>
> Un meuble ne peut être déplacé par Chloé que sur des emplacements vides, et ne peut pas traverser un autre meuble lors d'un déplacement. Un meuble est dit coincé lorsque Chloé ne peut pas le déplacer.
>
> Olivier gagne si à un moment de la partie un meuble est coincé. Il perd s'il ne peut pas placer de meuble.
>
> La figure 8 montre un exemple de partie. Olivier place un meuble tout à droite, puis Chloé le déplace de trois cases vers la gauche. Olivier place alors un meuble tout à gauche. Il a gagné car le meuble tout à gauche est coincé.
>
> Figure 8. Un exemple de partie dans un entrepôt de longueur $n = 7$ avec $d = 2$.
>
> **2.** Soient $n$ et $d$ fixés, Olivier peut-il s'assurer de gagner ? On commencera par les cas $d = 2, 3$.
>
> Après une courte rénovation, l'entrepôt est maintenant une bande infinie de largeur $1$. Chloé gagne si elle parvient à faire durer indéfiniment la partie, c'est-à-dire s'il n'y a jamais de meuble coincé.
>
> **3.** Pour quels entiers $d$ Olivier peut-il s'assurer de gagner ? On commencera par les cas $d = 2, 3$.
>
> Après une rénovation à peine plus longue, l'entrepôt est maintenant un plan infini. Chloé ne peut déplacer les meubles que dans le sens de leur plus long côté. Par exemple dans la figure 9, à gauche, si c'est le tour de Olivier, il peut gagner en plaçant un meuble collé à l'extrémité gauche du meuble horizontal. Mais si c'est le tour de Chloé, elle peut l'empêcher de gagner à ce tour, par exemple en déplaçant le meuble horizontal d'une case vers la gauche, donnant la figure à droite.
>
> Figure 9. Deux configurations de meubles dans l'entrepôt en deux dimensions pour $d = 2$.
>
> **4.** Pour quels entiers $d$ Olivier peut-il s'assurer de gagner ? On commencera par les cas $d = 2, 3$.
>
> **5.** Pour faire face à la diversification de ses activités, Animath a désormais besoin de meubles de longueurs variées (au moins $2$) et toujours une largeur $1$. Reprendre la question précédente si :
>
> a) à chaque tour, Olivier choisit la taille du meuble qu'il va poser ;
>
> b) à chaque tour, Chloé choisit la taille du meuble que va poser Olivier ;
>
> c) au début de la partie, Olivier choisit la suite des tailles de meubles qu'il va poser ;
>
> d) au début de la partie, Chloé choisit la suite des tailles de meubles que va poser Olivier.
>
> Les meubles nouvelle génération sont de taille $d \times d$ et peuvent se déplacer dans les deux directions. Dans la figure 10, si c'est au tour d'Olivier, il peut gagner en plaçant par exemple le meuble en pointillés.
>
> Figure 10. Une configuration avec les nouveaux meubles.
>
> **6.** Reprendre les questions précédentes dans ce cas.
>
> **7.** Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Casework]], [[method_invarianti|Invarianti]], [[method_backward|Backward]], [[method_grafi|Grafi]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Gioco a due giocatori di spostamento di mobili in un magazzino 1D e 2D*

> Olivier cerca di sistemare mobili nel magazzino di Animath, mentre Chloé cerca di difenderlo.
>
> Sia $d \ge 2$ un intero. Consideriamo mobili di dimensioni $1 \times d$ e $d \times 1$ stoccati in un magazzino.
>
> **1.** Posizioniamo pezzi in un magazzino di dimensioni $(d+1) \times (d+1)$. Il magazzino si dice **pieno** se non è possibile aggiungere alcun nuovo pezzo di mobile, come illustrato dalla Figura 7. Qual è il numero minimo di pezzi di mobile necessari per riempire un magazzino? Qual è il numero massimo?
>
> Sia $n \in \mathbb{N}^*$. Consideriamo un magazzino di dimensioni $1 \times n$. Olivier e Chloé agiscono a turno nel modo seguente:
> - Al suo turno, Olivier posiziona un pezzo di mobile nel magazzino se possibile.
> - Al suo turno, Chloé può spostare un pezzo di mobile orizzontalmente di una cella.
>
> Un pezzo di mobile non può essere spostato oltre spazi vuoti, né può attraversare un altro pezzo durante uno spostamento. Un pezzo di mobile si dice **bloccato** quando Chloé non può spostarlo. Lei lo perde se non può posizionarlo. Olivier vince se in un certo momento un pezzo di mobile è bloccato.
>
> La Figura 8 mostra un esempio di gioco in un magazzino di lunghezza $n = 7$ con $d = 2$: Olivier posiziona un pezzo tutto a destra, poi Chloé lo sposta di tre celle verso sinistra, Olivier posiziona un pezzo tutto a sinistra. Olivier ha vinto posizionando un pezzo a sinistra, che è bloccato.
>
> **2.** Siano $n$ e $d$ fissati. Può Olivier assicurarsi di vincere? Studieremo inizialmente i casi $d = 2, 3$.
>
> **3.** Dopo una breve ristrutturazione, il magazzino è ora una striscia infinita di larghezza $1$. Chloé può spostare i pezzi lungo questa striscia indefinitamente, il che significa che non esiste mai un pezzo bloccato. Siano $n$ e $d$ fissati. Può Olivier sempre garantire una vittoria? Studieremo inizialmente i casi $d = 2, 3$.
>
> Dopo una ristrutturazione più lunga, il magazzino è ora un piano infinito. Chloé non può più spostare mobili che si trovano lungo il bordo del lato più lungo di mobili orizzontali. Come nella Figura 9, sono mostrate due configurazioni in un magazzino bidimensionale per $d = 2$.
>
> **4.** Per quali interi $d$ può Olivier assicurarsi di vincere? Studieremo inizialmente i casi $d = 2, 3$.
>
> **5.** Per far fronte alla diversificazione delle sue attività, Animath ha ora bisogno di mobili di varie lunghezze (almeno $2$) e sempre di larghezza $1$. Riprendere la domanda precedente nelle seguenti condizioni:
> a) A ogni turno, Olivier sceglie la dimensione del pezzo che desidera posizionare;
> b) A ogni turno, Chloé sceglie la dimensione del pezzo che Olivier deve posizionare;
> c) A ogni turno, Olivier sceglie la sequenza di dimensioni che posizionerà;
> d) All'inizio del gioco, Chloé sceglie la sequenza di dimensioni dei pezzi che Olivier posizionerà.
>
> I nuovi mobili sono di dimensioni $d \times d$ e possono muoversi in due direzioni. Nella Figura 10 è mostrata una configurazione con i nuovi mobili.
>
> **6.** Riprendere le domande precedenti per questo caso.
>
> **7.** Proporre e studiare altri percorsi di ricerca.

![[src_tfjm_2020__Q04.png]]


**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_invarianti|Invarianti / monovarianti]], [[method_backward|Ragionamento all'indietro]], [[method_grafi|Teoria dei grafi]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Two-player furniture-moving game in a 1D and 2D warehouse*

> Olivier tries to fit furniture in the storage warehouse of Animath, while Chloé tries to defend it.
> 
> Let $d \ge 2$ be an integer. We consider furniture of size $1 \times d$ and $d \times 1$ stored in a warehouse.
> 
> **1.** We place pieces in a warehouse of size $(d+1) \times (d+1)$. The warehouse is said to be **full** if no new piece of furniture can be added, as illustrated by Figure 7. What is the minimum number of pieces of furniture needed to fill a warehouse? What is the maximum number?
> 
> Let $n \in \mathbb{N}^*$. We consider a warehouse of size $1 \times n$. Olivier and Chloé act in turn as follows:
> - On his turn, Olivier places a piece of furniture in the warehouse if possible.
> - On her turn, Chloé can move a piece of furniture horizontally by one cell.
> 
> A piece of furniture cannot be moved beyond empty spaces, and cannot cross another piece during a move. A piece of furniture is said to be **blocked** when Chloé cannot move it. She loses it if she cannot place it. Olivier wins if at some point a piece of furniture is blocked.
> 
> Figure 8 shows an example of a game in a warehouse of length $n = 7$ with $d = 2$: Olivier places a piece all the way to the right, then Chloé moves three cells to the left, Olivier places a piece all the way to the left. Olivier has won by placing a piece to the left, which is blocked.
> 
> **2.** Let $n$ and $d$ be fixed. Can Olivier ensure to win? We will start by studying the cases $d = 2, 3$.
> 
> **3.** After a short renovation, the warehouse is now an infinite strip of width $1$. Chloé can move pieces along this strip indefinitely, meaning there is never a blocked piece. Let $n$ and $d$ be fixed. Can Olivier always guarantee a win? We will start by studying the cases $d = 2, 3$.
> 
> After a longer renovation, the warehouse is now an infinite plane. Chloé can no longer move furniture that is along the border of the longest side of horizontal furniture. As in Figure 9, two configurations in a two-dimensional warehouse for $d = 2$ are shown.
> 
> **4.** For which integers $d$ can Olivier ensure to win? We will start by studying the cases $d = 2, 3$.
> 
> **5.** To cope with the diversification of her activities, Animath now needs furniture of various lengths (at least $2$) and always of width $1$. Revisit the previous question under the following conditions:
> a) At each turn, Olivier chooses the size of the piece he wishes to place;
> b) At each turn, Chloé chooses the size of the piece that Olivier must place;
> c) At each turn, Olivier chooses the sequence of sizes he will place;
> d) At the beginning of the game, Chloé chooses the sequence of sizes of pieces that Olivier will place.
> 
> The new-generation furniture is of size $d \times d$ and can move in two directions. In Figure 10, a configuration with the new furniture is shown.
> 
> **6.** Revisit the previous questions for this case.
> 
> **7.** Propose and study other avenues of research.

![[src_tfjm_2020__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Casework]], [[method_invarianti|Invarianti]], [[method_backward|Backward]], [[method_grafi|Grafi]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,method_casework,method_estremalita,method_induzione,skill_ragionamento_geometrico,skill_modellizzazione,skill_casework_accurato,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*Peeling polygonal labels by removing triangles with a unit ruler*

> 5. Prêt à décoller ?
>
> Julien souhaite décoller une étiquette récalcitrante, de forme polygonale.
>
> Il dispose pour cela d'une règle de longueur $1$, qu'il va utiliser pour décoller successivement des petits bouts triangulaires. Pour décoller un bout triangulaire, il doit choisir deux points, à distance au plus $1$ l'un de l'autre, et situés sur des côtés adjacents formant un angle aigu ou droit. Le triangle décollé doit être entièrement contenu dans ce qu'il reste de l'étiquette.
>
> Par exemple, si l'étiquette est le pentagone représenté figure 11, alors il peut positionner sa règle sur l'un des deux traits oranges pleins, mais il ne peut pas positionner sa règle sur les segments en pointillés : celui de gauche est trop long, celui de droite relie deux côtés qui ne touchent pas le même sommet, et celui du haut relie deux côtés qui forment un angle obtus. Si Julien décolle l'étiquette en plaçant sa règle sur le segment plein à gauche, alors il obtient l'étiquette à six côtés représentée plus bas.
>
> Julien s'arrête lorsqu'il a pu décoller toute l'étiquette, c'est-à-dire qu'il ne reste plus qu'un triangle avec un angle aigu et son côté opposé de longueur inférieure à $1$, ou s'il ne peut plus rien décoller, c'est à dire que tous les angles de l'étiquette sont obtus. Dans le premier cas, on dit que étiquette initiale est entièrement décollable.
>
> **1.** Existe-t-il un polygone à $n$ côtés entièrement décollable pour les valeurs suivantes de $n$ :
>
> a) $n = 3$ ou $n = 4$ ?
>
> b) $n = 5$ ?
>
> c) $n \geqslant 6$ ?
>
> **2.** On s'intéresse maintenant à des polygones particuliers.
>
> a) Pour quelles valeurs de $c$ un carré de côté $c$ est-il entièrement décollable ?
>
> b) Pour quelles valeurs de $c$ un triangle équilatéral de côté $c$ est-il entièrement décollable ?
>
> c) Pour quelles valeurs de $c$ est-ce que pour tout $a > 0$, le rectangle $c \times a$ est-il entièrement décollable ?
>
> **3.** Un quadrilatère les côtés sont tous plus petits que $1$ est-il toujours entièrement décollable ?
>
> **4.** Existe-t-il un réel $R > 0$ tel que tout polygone qui contient un disque de rayon $R$ ne soit pas entièrement décollable ?
>
> **5.** Reprendre les questions précédentes où l'on remplace la contrainte sur l'angle par le fait qu'il doit être inférieur ou égal à un certain angle fixé $\alpha$ (les questions précédents correspondent au cas $\alpha = 90$ degrés).
>
> **6.** Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_induzione|Induzione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Pelare etichette poligonali strappando triangoli con un righello unitario*

> Julien vuole pelare un'etichetta poligonale ostinata.
>
> Ha un righello di lunghezza $1$ che usa per strappare successivamente piccoli triangoli dall'etichetta. Per strappare un triangolo, deve scegliere due punti a distanza al più $1$ l'uno dall'altro, situati su lati adiacenti dell'etichetta che formano un angolo acuto o retto. Il triangolo da strappare deve essere interamente contenuto in ciò che rimane dell'etichetta.
>
> Ad esempio, se l'etichetta è il pentagono della Figura 11, può posizionare il righello su uno dei due lati arancioni pieni, ma non può posizionarlo sui lati tratteggiati: il lato sinistro è troppo lungo, il lato destro collega due lati che formano un angolo ottuso, e i due lati superiori formano un angolo ottuso. Quando il triangolo strappato soddisfa tutte le condizioni, la pelata è **valida**.
>
> Julien si ferma quando l'intera etichetta è stata pelata, cioè quando resta solo un triangolo con un angolo acuto e la cui lato opposto ha lunghezza al più $1$, oppure quando non può più strappare alcun triangolo. Nel primo caso diciamo che l'etichetta iniziale è **interamente pelabile**.
>
> **1.** Esiste un poligono con $n$ lati interamente pelabile per i seguenti valori di $n$:
> a) $n = 3$ o $n = 4$?
> b) $n = 5$?
> c) $n \ge 6$?
>
> **2.** Ci concentriamo ora su poligoni particolari:
> a) Per quali valori di $c$ un quadrato di lato $c$ è interamente pelabile?
> b) Per quali valori di $c$ un triangolo equilatero di lato $c$ è interamente pelabile?
> c) Per ogni $a > 0$, per quali valori di $c$ il rettangolo $c \times a$ è interamente pelabile?
>
> **3.** In un quadrilatero, supponiamo che tutti i lati abbiano lunghezza minore di $1$. È sempre interamente pelabile?
>
> **4.** Esiste un reale $R > 0$ tale che qualsiasi poligono contenente un disco di raggio $R$ non sia interamente pelabile?
>
> **5.** Riprendere le domande precedenti sostituendo il vincolo che l'angolo sia acuto o retto con il vincolo che sia al più un angolo fisso $\alpha$ (le domande precedenti corrispondono al caso $\alpha = 90^\circ$).
>
> **6.** Proporre e studiare altri percorsi di ricerca.

![[src_tfjm_2020__Q05.png]]


**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]], [[method_induzione|Induzione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Geometria]]


<div class="qlang-split" data-lang="en"></div>


*Peeling polygonal labels by removing triangles with a unit ruler*

> Julien wants to peel off a stubborn polygonal label.
> 
> He has a ruler of length $1$ that he uses to peel off successive small triangles from the label. To peel off a triangle, he must choose two points at distance at most $1$ from each other, situated on adjacent sides of the label that form an acute or right angle. The triangle to be peeled off must be entirely contained in what remains of the label.
> 
> For example, if the label is the pentagon of Figure 11, he can position his ruler on one of the two full orange sides, but he cannot position his ruler on the dotted sides: the left side is too long, the right side connects two sides that form an obtuse angle, and the top two sides form an obtuse angle. When the peeled triangle satisfies all the conditions, the peel is **valid**.
> 
> Julien stops when the entire label has been peeled off, i.e., only a triangle with an acute angle and whose opposite side has length at most $1$ remains, or when he can no longer peel any triangle. In the first case we say the initial label is **entirely peelable**.
> 
> **1.** Does there exist a polygon with $n$ sides that is entirely peelable for the following values of $n$:
> a) $n = 3$ or $n = 4$?
> b) $n = 5$?
> c) $n \ge 6$?
> 
> **2.** We now focus on particular polygons:
> a) For which values of $c$ is a square of side $c$ entirely peelable?
> b) For which values of $c$ is an equilateral triangle of side $c$ entirely peelable?
> c) For any $a > 0$, for which values of $c$ is the rectangle $c \times a$ entirely peelable?
> 
> **3.** In a quadrilateral, suppose all sides have length less than $1$. Is it always entirely peelable?
> 
> **4.** Does there exist a real $R > 0$ such that any polygon containing a disk of radius $R$ is not entirely peelable?
> 
> **5.** Revisit the previous questions replacing the constraint that the angle be acute or right by the constraint that it be at most a fixed angle $\alpha$ (the previous questions correspond to the case $\alpha = 90^\circ$).
> 
> **6.** Propose and study other avenues of research.

![[src_tfjm_2020__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_induzione|Induzione]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,topic_logica,method_grafi,method_casework,method_induzione,method_estremalita,skill_modellizzazione,skill_ragionamento_geometrico,skill_conteggio_sistematico,skill_astrazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Drone police capture thief on city graph in minimum days*

> 6. Ils nous espionnent !
>
> Winston est commissaire de Police. Il cherche à capturer un voleur à l'aide de ses nouveaux drones.
>
> La ville où travaille Winston est composée de quartiers, et certains quartiers sont reliés entre eux par des routes à double sens. Winston possède un nombre illimité de drones et $n$ agents de police.
>
> Un premier jour à minuit, un voleur apparaît dans un quartier de la ville, mais Winston ne sait pas lequel.
>
> - Chaque matin, il choisit autant de quartiers qu'il le souhaite, dans lesquels il envoie un drone.
> - À midi, sa montre sonne si un de ses drones a été envoyé dans le quartier où est caché le voleur. Cependant il ne sait pas lequel de ses drones a détecté le voleur.
> - L'après-midi, Winston peut envoyer ses agents dans au plus $n$ quartiers. Cependant, pour faire cela il doit être certain qu'au moins l'un de ses agents va se rendre dans le quartier où se cache le voleur pour l'arrêter. Si Winston ne peut pas arrêter le voleur avec certitude il n'envoie pas ses agents.
> - Enfin, chaque nuit excepté la première, le voleur se déplace d'un quartier en suivant une route.
>
> On suppose dans un premier temps que le voleur ne peut pas rester dans le même quartier deux jours consécutifs.
>
> **1.** La ville de Londres est composée de $N$ quartiers $q_1, q_2, \cdots, q_N$ disposés en cercle, avec des routes reliant les sommets voisins sur le cercle, comme dans la figure 12. En fonction de $N$, pour quels nombres $n$ d'agents Winston peut-il arrêter le voleur avec certitude après un certain nombre de jours ?
>
> **2.** Soient $N$ et $n$ deux entiers tels que Winston peut s'assurer de capturer le voleur. Combien de jours lui faut-il au minimum pour être certain de le capturer ?
>
> **3.** On dit qu'une ville n'a pas de boucle s'il n'existe pas d'entier $b \geqslant 3$ et de quartiers distincts $q_1, q_2, \cdots, q_b$ tels qu'il y ait une route entre $q_i$ et $q_{i+1}$ pour $1 \leqslant i < b$ et entre $q_1$ et $q_b$. Par exemple, Londres a une boucle de taille $b = N$. Quel est le plus petit nombre $n$ d'agents suffisant pour pouvoir attraper le voleur dans n'importe quelle ville qui n'a pas de boucle ?
>
> **4.** La ville de New-York est une grille carrée de côté $N$. De combien d'agents Winston a-t-il besoin au minimum pour attraper le voleur ?
>
> **5.** Une ville est dite planaire si, dessinée dans le plan, les routes ne se croisent pas. Par exemple la figure 13 représente une ville planaire, mais si on ajoute une route entre $q_1$ et $q_4$ elle ne pourra plus être planaire. Soit $n$ un entier. Existe-t-il une ville telle que Winston ne peut pas capturer le voleur à l'aide de $n$ agents ? Existe-t-il une telle ville planaire ?
>
> **6.** Suite à des réductions budgétaires, Winston peut à présent envoyer uniquement un nombre de drones entre $1$ et $d$ chaque jour, pour un certain entier $d$ fixé. Reprendre les questions précédentes dans ce cas.
>
> **7.** Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_casework|Casework]], [[method_induzione|Induzione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Polizia con droni cattura un ladro su un grafo cittadino in un minimo di giorni*

> Winston è un commissario di polizia. Tenta di catturare un ladro usando i suoi nuovi droni.
>
> La città di Winston è composta da $N$ distretti, e alcune coppie di distretti sono collegate da strade a doppio senso. Winston ha un numero illimitato di droni e $n$ agenti di polizia.
>
> Ogni giorno procede come segue:
> - Ogni mattina, Winston invia droni a tanti distretti quanti desidera.
> - A mezzogiorno, il suo display mostra se uno dei suoi droni è stato inviato al distretto in cui il ladro si nasconde.
> - Nel pomeriggio, Winston può inviare i suoi agenti a al massimo $n$ distretti; se i suoi agenti vanno al distretto in cui si trova il ladro, il ladro viene arrestato con certezza.
> - Infine, ogni notte (tranne la prima), il ladro si sposta da un distretto a un distretto vicino.
>
> Si assume che, dall'inizio, il ladro non possa rimanere più di una notte nello stesso distretto.
>
> **1.** La città di Londra è composta da $N$ distretti $q_1, q_2, \ldots, q_N$ disposti in un cerchio, con strade che collegano i vicini sul cerchio, come nella Figura 12. Come funzione di $N$, quanti agenti di polizia Winston ha bisogno di arrestare il ladro con certezza dopo un certo numero di giorni?
>
> **2.** Siano $n$ e $N$ due interi tali che Winston possa garantire la cattura del ladro. Qual è il numero minimo di giorni di cui ha bisogno per essere certo di catturarlo?
>
> **3.** Diciamo che una città non ha **loop** se non esiste un ciclo di $b \ge 3$ distretti distinti. Qual è il numero minimo di agenti sufficiente a catturare il ladro in qualsiasi città senza loop?
>
> **4.** La città di New York è una griglia quadrata di lato $N$. Quanti agenti Winston ha bisogno al minimo per catturare il ladro?
>
> **5.** Una città si dice **planare** se può essere disegnata nel piano senza che le strade si incrocino. Ad esempio, la Figura 13 mostra una città planare. Per ogni intero $n$, esiste una città planare tale che Winston non possa catturare il ladro con $n$ agenti?
>
> **6.** A seguito dei tagli di bilancio, Winston può ora inviare solo tra $1$ e $d$ droni al giorno, per un certo intero fisso $d$. Riprendere le precedenti domande per questo caso.
>
> **7.** Proporre e studiare altre vie di ricerca.

![[src_tfjm_2020__Q06.png]]


**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_grafi|Teoria dei grafi]], [[method_casework|Analisi per casi]], [[method_induzione|Induzione]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Drone police capture thief on city graph in minimum days*

> Winston is a police commissioner. He tries to capture a thief using his new drones.
> 
> The city of Winston is made up of $N$ districts, and certain pairs of districts are connected by two-way roads. Winston has an unlimited number of drones and $n$ police officers.
> 
> Each day proceeds as follows:
> - Each morning, Winston sends drones to as many districts as he wishes.
> - At noon, his display shows whether one of his drones has been sent to the district where the thief is hiding.
> - In the afternoon, Winston can send his officers to at most $n$ districts; if his officers go to the district where the thief is, the thief is arrested with certainty.
> - Finally, each night (except the first), the thief moves from one district to a neighbouring district.
> 
> It is assumed that from the start the thief cannot stay more than one night in the same district.
> 
> **1.** The city of London is composed of $N$ districts $q_1, q_2, \ldots, q_N$ arranged in a circle, with roads connecting neighbours on the circle, as in Figure 12. As a function of $N$, how many police officers does Winston need to arrest the thief with certainty after a certain number of days?
> 
> **2.** Let $n$ and $N$ be two integers such that Winston can guarantee capturing the thief. What is the minimum number of days he needs to be certain of capturing him?
> 
> **3.** We say that a city has no **loop** if there is no cycle of $b \ge 3$ distinct districts. What is the minimum number of officers sufficient to capture the thief in any city without a loop?
> 
> **4.** The city of New York is a square grid of side $N$. How many officers does Winston need at a minimum to catch the thief?
> 
> **5.** A city is said to be **planar** if it can be drawn in the plane with no roads crossing. For example, Figure 13 shows a planar city. For any integer $n$, is there a planar city such that Winston cannot catch the thief with $n$ officers?
> 
> **6.** Following budget cuts, Winston can now only send between $1$ and $d$ drones each day, for a certain fixed integer $d$. Revisit the previous questions for this case.
> 
> **7.** Propose and study other avenues of research.

![[src_tfjm_2020__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_casework|Casework]], [[method_induzione|Induzione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_geometria_piana,topic_geometria_analitica,method_casework,method_coordinate,method_estremalita,skill_ragionamento_geometrico,skill_modellizzazione,skill_stima,skill_astrazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Moving objects in Chambord forest of integer-lattice trees via translations and rotations*

> 7. De joyeux bûcherons
>
> Deux bûcherons essaient de déplacer des souches et des troncs dans une forêt.
>
> La forêt de Chambord vue du haut est un plan infini dans lequel chaque point à coordonnées entières est un arbre ponctuel. Les bûcherons déplacent un objet, en lui appliquant une des deux opérations suivantes.
>
> - **(Translation)** Choisir un vecteur $\vec{v}$ et appliquer à leur objet une translation de vecteur $\vec{v}$.
> - **(Rotation)** Fixer un point $O$ de l'objet, choisir un angle $\theta \in [0, \pi]$ et appliquer à leur objet une rotation de centre $O$ et d'angle $\theta$ dans le sens direct ou indirect.
>
> Ce n'est possible que si l'objet ne rencontre pas d'arbre sur son passage, c'est à dire :
>
> - **(Translation)** Il n'existe pas de réel $0 \leqslant t \leqslant 1$ tel que l'objet translaté par un vecteur $t\vec{v}$ touche un arbre.
> - **(Rotation)** Il n'existe pas d'angle $0 \leqslant \phi \leqslant \theta$ tel que si on applique une rotation de centre $O$ d'angle $\phi$ dans le sens direct ou indirect (selon le sens de la rotation choisie) à l'objet, il touche un arbre.
>
> **1.** Avant de se rendre dans la forêt, les bûcherons s'exercent dans un petit bosquet constitué d'un nombre fini d'arbres disposé de manière quelconque. L'objet qu'ils transportent est un tronc fin de longueur $L$, c'est à dire un segment de longueur $L$ ouvert (les deux extrémités peuvent toucher les arbres). Étant donné deux positions possibles pour ce tronc, est-il toujours possible pour les bûcherons de le déplacer d'une position à l'autre ? Si oui, comment ?
>
> On dit qu'un objet est libre si, pour toute position initiale et pour toute position finale qui ne rencontrent pas d'arbres, les bûcherons peuvent déplacer l'objet de l'une à l'autre.
>
> Les bûcherons travaillent à présent dans la forêt de Chambord.
>
> **2.** Ils cherchent à déplacer une souche, qui est un disque de rayon $r_0$ ouvert (le bord du disque peut toucher les arbres). Pour quels rayons $r_0$ la souche est-elle libre ?
>
> **3.** Ils cherchent à déplacer un tronc fin de longueur $L$. Pour quelles longueurs $L$ le tronc fin est-il libre ?
>
> **4.** Ils cherchent à déplacer un tronc épais, à savoir un rectangle ouvert (les côtés du rectangle peuvent toucher les arbres) $E \times L$ avec $0 < E \leqslant L$. Pour valeurs de $E$ et $L$ le tronc épais est-il libre ?
>
> Le temps total nécessaire pour effectuer une suite d'opérations est la distance parcourue par un point particulier de l'objet en question qui sera appelé centre de l'objet.
>
> **5.** Quel le temps minimal nécessaire pour déplacer, lorsque cela est possible :
>
> - Une souche de rayon $r_0$ centrée au point $\left(\frac{1}{2}, \frac{1}{2}\right)$ vers une position où elle est centrée en $\left(n + \frac{1}{2}, m + \frac{1}{2}\right)$, avec $n, m$ entiers ? Le centre de la souche est le centre du disque.
> - Un tronc fin de longueur $L$ vers la même position après avoir effectué un demi-tour ? Le centre du tronc est le milieu du segment.
> - Un tronc épais de longueur $L$ et épaisseur $E$ vers la même position après avoir effectué un demi-tour ? Le centre du tronc est l'intersection des diagonales du rectangle.
>
> On cherchera à encadrer ces quantités aussi précisément que possible.
>
> **6.** Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_casework|Casework]], [[method_coordinate|Coordinate]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Oggetti in movimento nel bosco di Chambord di alberi a reticolo intero tramite traslazioni e rotazioni*

> Due taglialegna cercano di spostare ceppi e tronchi in un bosco.
>
> Il bosco di Chambord è un piano infinito in cui ogni punto con coordinate intere è un albero puntuale (a punto). I taglialegna spostano un oggetto applicando ad esso due operazioni di base:
>
> - **(Traslazione)** Scegliere un vettore $\vec{v}$ e applicare all'oggetto una traslazione di vettore $\vec{v}$.
> - **(Rotazione)** Fissare un punto $O$ dell'oggetto e un angolo $\theta \in [0, \pi]$, e applicare all'oggetto una rotazione di centro $O$ e angolo $\theta$ nel senso diretto o indiretto.
>
> Questo è possibile solo se l'oggetto non incontra alcun albero durante il movimento, cioè:
> - **(Traslazione)** Non esiste alcun reale $0 \le t \le 1$ tale che l'oggetto traslato di vettore $t\vec{v}$ tocchi un albero.
> - **(Rotazione)** Non esiste alcun angolo $0 \le \phi \le \theta$ tale che, dopo aver ruotato di $\phi$ attorno a $O$, l'oggetto tocchi un albero.
>
> Un oggetto si dice **libero** se, per ogni posizione iniziale e ogni posizione finale che non toccano alberi, i taglialegna possono spostare l'oggetto da una all'altra.
>
> I taglialegna stanno attualmente lavorando nel bosco di Chambord.
>
> **1.** Prima di entrare nel bosco, i taglialegna si muovono all'interno di un piccolo boschetto costituito da un numero finito di alberi disposti in qualsiasi configurazione. L'oggetto che trasportano è un **tronco sottile**, cioè un segmento aperto di lunghezza $L$ (i due estremi possono toccare gli alberi). Dati due possibili posizioni per questo tronco, è sempre possibile per i taglialegna spostarlo da una all'altra? Se sì, come?
>
> **2.** Cercano di spostare un **ceppo**, cioè un disco aperto di raggio $r_0$ (il bordo del disco non tocca alcun albero). Per quali raggi $r_0$ il ceppo è libero?
>
> **3.** Cercano di spostare un **tronco sottile** di lunghezza $L$. Per quali lunghezze $L$ il tronco sottile è libero?
>
> **4.** Cercano di spostare un **tronco spesso**, vale a dire un rettangolo aperto (i lati del rettangolo possono toccare alberi) $E \times L$ con $0 < E \le L$. Per quali valori di $E$ e $L$ il tronco spesso è libero?
>
> Il tempo totale minimo necessario per eseguire una sequenza di operazioni è la distanza percorsa da un punto specifico dell'oggetto, chiamato **centro** dell'oggetto.
>
> **5.** Qual è il tempo minimo necessario per spostare, quando possibile:
> - Un ceppo di raggio $r_0$ centrato in $\left(\frac{1}{2}, \frac{1}{2}\right)$ in una posizione centrata in $\left(n + \frac{1}{2}, m + \frac{1}{2}\right)$, con $n, m$ interi? Il centro del ceppo è il centro del disco.
> - Un tronco sottile di lunghezza $L$ alla stessa posizione dopo aver eseguito una mezza rotazione? Il centro del tronco è il punto medio del segmento.
> - Un tronco spesso di lunghezza $L$ e spessore $E$ alla stessa posizione dopo una mezza rotazione? Il centro del tronco è l'intersezione delle diagonali del rettangolo.
>
> Cercheremo di limitare queste quantità il più precisamente possibile.
>
> **6.** Proporre e studiare altri percorsi di ricerca.

![[src_tfjm_2020__Q07.png]]


**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_coordinate|Metodo delle coordinate]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_stima|Stima e approssimazione]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Geometria]]


<div class="qlang-split" data-lang="en"></div>


*Moving objects in Chambord forest of integer-lattice trees via translations and rotations*

> Two woodcutters try to move stumps and trunks in a forest.
> 
> The forest of Chambord is an infinite plane in which every point with integer coordinates is a punctual (point-like) tree. The woodcutters move an object by applying to it two basic operations:
> 
> - **(Translation)** Choose a vector $\vec{v}$ and apply to the object a translation by vector $\vec{v}$.
> - **(Rotation)** Fix a point $O$ of the object and an angle $\theta \in [0, \pi]$, and apply to the object a rotation of centre $O$ and angle $\theta$ in the direct or indirect sense.
> 
> This is only possible if the object does not encounter any tree during the motion, meaning:
> - **(Translation)** There is no real $0 \le t \le 1$ such that the object translated by vector $t\vec{v}$ touches a tree.
> - **(Rotation)** There is no angle $0 \le \phi \le \theta$ such that after rotating by $\phi$ about $O$, the object touches a tree.
> 
> An object is said to be **free** if, for every initial position and every final position that do not touch trees, the woodcutters can move the object from one to the other.
> 
> The woodcutters are currently working in the forest of Chambord.
> 
> **1.** Before entering the forest, the woodcutters move inside a small copse made up of a finite number of trees placed in any configuration. The object they transport is a **thin trunk**, i.e., an open segment of length $L$ (the two endpoints may touch the trees). Given two possible positions for this trunk, is it always possible for the woodcutters to move it from one to the other? If yes, how?
> 
> **2.** They seek to move a **stump**, which is an open disk of radius $r_0$ (the boundary of the disk does not touch any tree). For which radii $r_0$ is the stump free?
> 
> **3.** They seek to move a **thin trunk** of length $L$. For which lengths $L$ is the thin trunk free?
> 
> **4.** They seek to move a **thick trunk**, namely an open rectangle (the sides of the rectangle can touch trees) $E \times L$ with $0 < E \le L$. For which values of $E$ and $L$ is the thick trunk free?
> 
> The minimum total time needed to perform a sequence of operations is the distance covered by a specific point of the object, called the **centre** of the object.
> 
> **5.** What is the minimum time needed to move, when possible:
> - A stump of radius $r_0$ centred at $\left(\frac{1}{2}, \frac{1}{2}\right)$ to a position centred at $\left(n + \frac{1}{2}, m + \frac{1}{2}\right)$, with $n, m$ integers? The centre of the stump is the centre of the disk.
> - A thin trunk of length $L$ to the same position after performing a half-turn? The centre of the trunk is the midpoint of the segment.
> - A thick trunk of length $L$ and thickness $E$ to the same position after a half-turn? The centre of the trunk is the intersection of the diagonals of the rectangle.
> 
> We will try to bound these quantities as precisely as possible.
> 
> **6.** Propose and study other avenues of research.

![[src_tfjm_2020__Q07.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_casework|Casework]], [[method_coordinate|Coordinate]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_aritmetica,topic_combinatoria,topic_algebra,topic_funzionali,method_induzione,method_ricorsione,method_congruenze,method_invarianti,method_grafi,skill_modellizzazione,skill_astrazione,skill_riconoscimento_pattern,skill_conteggio_sistematico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="fr"></div>


*Self-replicating robots on modular planet galaxies and improper distributions*

> 8. Robots auto-réplicateurs
>
> Dans la galaxie TF-J-1000, la technologie est bien plus avancée que dans la nôtre : des robots auto-réplicateurs ont été mis au point, et ils se propagent de planète en planète.
>
> La galaxie est constituée d'un ensemble de planètes. Chacune peut être atteinte depuis certaines autres et, tous les siècles, chaque robot produit un robot pour chaque planète accessible depuis sa planète avant d'expédier les nouveaux robots et de s'autodétruire.
>
> Un exemple d'évolution du nombre de robots dans une galaxie est donné par la figure 16. Dans cette exemple la planète en haut à droite est accessible depuis la planète en haut à gauche, mais pas l'inverse.
>
> **1.** On suppose que la galaxie est constituée d'une planète pour chaque nombre de $\mathbb{Z}$, et chaque planète est accessible depuis ses deux voisines. Au départ, il y a un unique robot en $0$. Combien y a-t-il de robots actifs sur la planète $k$ au siècle $s$ ?
>
> **2.** Reprendre la question précédente si la galaxie a une planète pour chaque élément de $\mathbb{Z}^2$, et chaque planète est accessible depuis ses quatre voisines.
>
> **3.** Reprendre la question précédente si la galaxie a une planète pour chaque élément de $[[1, p]]$, et chaque planète est accessible depuis sa ou ses voisines. Le robot initial peut être sur n'importe quelle planète. On pourra se limiter aux cas $p = 3, 4, 5$, et éventuellement $6$.
>
> Soit $g \in \mathbb{N}^*$. On suppose désormais que, si au moins $g$ robots se trouvent en même temps sur une même planète, une guerre se déclare et $g$ des robots sont détruits. Plus généralement, pour tout $k$, s'il y en a plus de $kg$, alors $kg$ sont détruits, de sorte que seulement le reste de la division euclidienne du nombre de robots par $g$ demeurent et peuvent s'auto-répliquer.
>
> On suppose également que la galaxie ne contient qu'un nombre fini de planètes.
>
> Une galaxie est dite impropice lorsque, quelle que soit la répartition initiale des robots, ils finiront par tous disparaître.
>
> **4.** Dans cette question uniquement, on suppose $g = 2$. Soit $p \in \mathbb{N}^*$.
>
> a) On suppose que la galaxie a une planète pour chaque élément de $[[0, p - 1]]$, et chaque planète est accessible depuis ses deux voisines : ici, $0$ et $p - 1$ sont voisines comme sur la figure 17. Pour quels $p$ la galaxie est-elle impropice ?
>
> b) Reprendre la question si la galaxie a une planète pour chaque élément de $[[0, p - 1]]^2$, et chaque planète est accessible depuis ses quatre voisines : de même, on considère que les planètes $(0, k)$ et $(p - 1, k)$ sont voisines, ainsi que les planètes $(k, 0)$ et $(k, p - 1)$, comme illustré sur la figure 18.
>
> c) Reprendre la question pour d'autres galaxies de votre choix.
>
> **5.** Soit $g \in \mathbb{N}^*$.
>
> a) Proposer des exemples de galaxie impropice. On essaiera de trouver des galaxies ayant un grand nombre de liaisons.
>
> b) Existe-t-il une galaxie telle que, quelle que soit la répartition de départ avec entre $1$ et $g - 1$ robots par planète, on est assuré qu'une planète contiendra un jour exactement $1$ robot ?
>
> c) Reprendre la question b) où l'on veut qu'il y ait une certaine planète qui, pour tout $0 \leq r \leq g - 1$, contiendra un jour $r$ robots exactement.
>
> d) Reprendre la question b) où l'on remplace la supposition sur la répartition initiale par le fait qu'au moins une planète contient entre $1$ et $g - 1$ robots.
>
> **6.** Proposer et étudier d'autres directions de recherche.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]], [[method_congruenze|Congruenze]], [[method_invarianti|Invarianti]], [[method_grafi|Graph theory]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Galassie improprie e robot auto-replicanti su galassie planetarie modulari*

> Nella galassia TF-J-1000, la tecnologia è molto più avanzata che nella nostra: sono stati sviluppati robot auto-replicanti, e si propagano da pianeta a pianeta.
>
> Una galassia è costituita da un insieme di pianeti. Ogni pianeta può essere raggiunto da certi altri e, ogni secolo, ogni robot produce un robot per ogni pianeta accessibile dal suo pianeta, poi spedisce i nuovi robot e si autodistrugge.
>
> Un esempio dell'evoluzione del numero di robot in una galassia è dato nella Figura 16. In questo esempio il pianeta in alto a destra è accessibile dal pianeta in alto a sinistra, ma non viceversa.
>
> **1.** Supponiamo che la galassia consista di un pianeta per ogni intero di $\mathbb{Z}$, e che ogni pianeta sia accessibile dai suoi due vicini. All'inizio c'è un singolo robot su $0$. Quanti robot sono attivi sul pianeta $k$ al secolo $s$?
>
> **2.** Riprendiamo la domanda precedente se la galassia ha un pianeta per ogni elemento di $\mathbb{Z}^2$, con ogni pianeta accessibile dai suoi quattro vicini.
>
> **3.** Riprendiamo la domanda precedente se la galassia ha un pianeta per ogni elemento di $[1, p]$, e ogni pianeta è accessibile dai suoi due vicini. Il robot iniziale può trovarsi su qualsiasi pianeta. Ci restringiamo ai casi $p = 3, 4, 5$ e infine $6$.
>
> Sia $g \in \mathbb{N}^*$. Supponiamo ora che, se almeno $g$ robot sono sullo stesso pianeta, scoppi una guerra e $g$ robot siano distrutti. Più in generale, per ogni $k$, se ci sono tra $kg$ e $(k+1)g$ robot, $kg$ sono distrutti, in modo che sopravviva solo il resto della divisione euclidea del numero di robot per $g$ e possa auto-replicarsi. Supponiamo inoltre che la galassia contenga solo un numero finito di pianeti.
>
> Una galassia è detta **impropria** quando, qualunque sia la distribuzione iniziale di robot, essi scompariranno tutti alla fine.
>
> **4.** In questa domanda solo, supponiamo $g = 2$. Sia $p \in \mathbb{N}^*$.
> a) Supponiamo che la galassia abbia un pianeta per ogni elemento di $[0, p-1]$, e che ogni pianeta sia accessibile dai suoi due vicini: qui $0$ e $p-1$ sono vicini, come nella Figura 17. Per quali interi $p$ la galassia è impropria?
> b) Riprendiamo la domanda se la galassia ha un pianeta per ogni elemento di $[0, p-1]^2$, e ogni pianeta è accessibile dai suoi quattro vicini: analogamente, i pianeti $(0,k)$ e $(p-1,k)$ sono considerati vicini, come anche i pianeti $(k,0)$ e $(k, p-1)$, come illustrato nella Figura 18.
> c) Riprendiamo la domanda per altre galassie a nostra scelta.
>
> **5.** Sia $g \in \mathbb{N}^*$.
> a) Proponiamo esempi di galassie improprie. Cercheremo di trovare galassie con un gran numero di collegamenti.
> b) Esiste una galassia tale che, qualunque sia la distribuzione iniziale con tra $1$ e $g - 1$ robot per pianeta, siamo certi che un giorno qualche pianeta conterrà esattamente $1$ robot?
> c) Esiste una galassia tale che sappiamo che c'è un certo pianeta che, per ogni $0 \le r \le g - 1$, un giorno conterrà esattamente $r$ robot?
> d) Esiste una galassia se sostituiamo l'ipotesi sulla distribuzione iniziale con il fatto che almeno un pianeta contiene tra $1$ e $g - 1$ robot?
>
> **6.** Proponiamo e studiamo altre direzioni di ricerca.

![[src_tfjm_2020__Q08.png]]


**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]], [[method_congruenze|Aritmetica modulare / congruenze]], [[method_invarianti|Invarianti / monovarianti]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Self-replicating robots on modular planet galaxies and improper distributions*

> In the TF-J-1000 galaxy, technology is far more advanced than in ours: self-replicating robots have been developed, and they propagate from planet to planet.
> 
> A galaxy is made up of a set of planets. Each one can be reached from certain others and, every century, each robot produces one robot for each planet accessible from its planet, then sends off the new robots and self-destructs.
> 
> An example of the evolution of the number of robots in a galaxy is given in Figure 16. In this example the planet at the top right is accessible from the planet at the top left, but not the other way round.
> 
> **1.** Suppose the galaxy consists of one planet for each integer of $\mathbb{Z}$, and each planet is accessible from its two neighbours. At the start there is a single robot at $0$. How many robots are active on planet $k$ at century $s$?
> 
> **2.** Revisit the previous question if the galaxy has one planet for each element of $\mathbb{Z}^2$, with each planet accessible from its four neighbours.
> 
> **3.** Revisit the previous question if the galaxy has one planet for each element of $[1, p]$, and each planet is accessible from its two neighbours. The initial robot may be on any planet. We restrict to the cases $p = 3, 4, 5$ and eventually $6$.
> 
> Let $g \in \mathbb{N}^*$. We now suppose that, if at least $g$ robots are on the same planet, a war breaks out and $g$ robots are destroyed. More generally, for any $k$, if there are between $kg$ and $(k+1)g$ robots, $kg$ are destroyed, so that only the remainder of the Euclidean division of the number of robots by $g$ survives and may self-replicate. We also suppose the galaxy contains only finitely many planets.
> 
> A galaxy is said to be **improper** when, whatever the initial distribution of robots, they will all eventually disappear.
> 
> **4.** In this question only, suppose $g = 2$. Let $p \in \mathbb{N}^*$.
> a) Suppose the galaxy has one planet for each element of $[0, p-1]$, and each planet is accessible from its two neighbours: here $0$ and $p-1$ are neighbours, as in Figure 17. For which integers $p$ is the galaxy improper?
> b) Revisit the question if the galaxy has one planet for each element of $[0, p-1]^2$, and each planet is accessible from its four neighbours: likewise, planets $(0,k)$ and $(p-1,k)$ are considered neighbours, as are planets $(k,0)$ and $(k, p-1)$, as illustrated in Figure 18.
> c) Revisit the question for other galaxies of your choice.
> 
> **5.** Let $g \in \mathbb{N}^*$.
> a) Propose examples of improper galaxies. We will try to find galaxies with a large number of links.
> b) Does there exist a galaxy such that, whatever the starting distribution with between $1$ and $g - 1$ robots per planet, we are guaranteed that some planet will one day contain exactly $1$ robot?
> c) Does there exist a galaxy such that we know there is a certain planet which, for every $0 \le r \le g - 1$, will one day contain exactly $r$ robots?
> d) Does there exist a galaxy if we replace the assumption on the initial distribution by the fact that at least one planet contains between $1$ and $g - 1$ robots?
> 
> **6.** Propose and study other directions of research.

![[src_tfjm_2020__Q08.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]], [[method_congruenze|Congruenze]], [[method_invarianti|Invarianti]], [[method_grafi|Graph theory]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
