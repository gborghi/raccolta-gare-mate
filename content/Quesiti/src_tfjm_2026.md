---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026
tipo: gara
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026
family: tfjm
year: '2026'
level: TFJM²
---
<div class="atom-reader" data-gara="Quesiti/src_tfjm_2026"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,topic_logica,method_casework,method_backward,method_ricorsione,method_estremalita,skill_conteggio_sistematico,skill_modellizzazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="fr"></div>


*Chip-eating game on a layout of n piles of n chips: two players alternate, a chip may be eaten only if its neighbours are still covered; count states and analyse optimal strategies, then repeat on a pyramid layout.*

> 1. Guerre à l'apéro
>
> Anita et Auriane prennent l'apéro ensemble. Elles ont devant elles un tas de chips natures à l'ancienne composé de $n$ piles de $n$ chips, avec $n \ge 1$ entier. Elles vont à tour de rôle manger des chips sur le tas de la manière suivante : chacune d'elles peut prendre autant de chips qu'elle veut parmi celles qui sont découvertes, c'est-à-dire sur le dessus d'une pile, au début de leur tour. Elles doivent à chaque fois prendre au moins une chips. Le jeu se poursuit jusqu'à ce qu'il n'y ait plus de chips sur la table. Anita commence.
>
> Un exemple de partie est présenté figure 1. A chaque étape, les chips en bleu sont celles qui peuvent être mangées. Au total, Anita a mangé $7$ chips et Auriane a mangé $2$ chips pendant cette partie.
>
> Figure 1. Un exemple de partie
>
> 1. Combien y a-t-il d'états possibles du tas de chips ?
>
> 2. Anita et Auriane sont gourmandes et cherchent donc à manger le plus de chips possible au cours de la partie.
>
>    a) Dans cette question, Auriane joue de manière gloutonne : à son tour, elle prend toutes les chips qu'elle peut. Combien de chips au maximum Anita peut-elle s'assurer d'avoir, en fonction de $n$ ?
>
>    b) Maintenant Auriane réfléchit avant de jouer. Combien de chips au maximum Anita peut-elle s'assurer de manger en fonction de $n$, quelle que soit la façon dont joue Auriane ?
>
> 3. Dans cette question, la chips en bas à gauche est une délicieuse chips goût barbecue que Anita et Auriane veulent absolument manger. En fonction de $n$, Anita peut-elle s'assurer de la manger ?
>
> 4. Dans cette question, la rangée numéro $k$ en partant du bas est composée de chips avec un goût spécial qui ont une valeur $v$. A la fin de la partie, pour chaque joueuse, si elle a mangé $C$ chips classiques et $S$ chips spéciales, sa satisfaction est $C + Sv$. En fonction de $n$ et $k$, quel est la satisfaction maximale qu'Anita peut s'assurer d'avoir, quelle que soit la façon dont joue Auriane, si les chips spéciales sont :
>
>    a) Des chips au vinaigre, qui ne sont pas très bonnes, donc de valeur $v = -1$ ?
>
>    b) Des chips au fromage, qui sont particulièrement bonnes, donc de valeur $v = 3$ ?
>
> Maintenant le tas de chips est une pyramide : la première couche contient $n$ chips, celle au dessus $n - 1$, celle au dessus $n - 2$, et ainsi de suite jusqu'à avoir un tas de hauteur $n$. Une chips ne peut être mangée que si elle est découverte, c'est-à-dire si la chips ou les deux chips juste au dessus ont déjà été mangées.
>
> Un exemple de partie est présenté figure 2. A chaque étape, les chips en bleu sont celles qui peuvent être mangées. Au total, Anita a mangé $6$ chips et Auriane a mangé $4$ chips pendant cette partie.
>
> Figure 2. Un exemple de partie, avec une pyramide
>
> 5. Reprendre les question 1. à 3. dans ce cadre.
>
> Question complémentaire. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_backward|Backward]], [[method_ricorsione|Ricorsione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)


<div class="qlang-split" data-lang="it"></div>


*Gioco che mangia chip su un layout di n pile di n chip: due giocatori si alternano, un chip può essere mangiato solo se i suoi vicini sono ancora coperti; contare gli stati e analizzare le strategie ottimali, quindi ripetere su un layout di piramide.*

> 1. La guerra all'aperitivo.
> 
> Anita e Auriane prendono un aperitivo insieme. Non la finiscono, ma invece hanno davanti a sé un mucchio di chip semplici antichi, composti da pile $n$ di chip $n$, con $n \ge 1$ un numero intero. Mangiano le patatine a turno, ognuno a turno svolgendo il ruolo di mangiatore. Un chip in pila o alla fine di una fila può essere mangiato solo se i chips accanto non sono ancora stati scoperti, cioè solo il chip in cima ad una pila o alla fine di una fila. Devono mangiare le patatine una alla volta, prendendo almeno una patatina e al massimo tutte le patatine scoperte. La partita continua finché ci sono i chip, ma alla fine non resta più nessun chip a tavola. Anita inizia.
> 
> Un esempio di gioco è mostrato nella figura 1. A ogni passo, le patatine in blu sono quelle che si possono mangiare. In totale, Anita ha mangiato i chip $7$ e Auriane ha mangiato i chip $2$ durante questa partita.
> 
> 1. Quanti stati possibili ci sono per la pila di chip?
> 
> 2. Anita e Auriane sono gourmand e quindi ognuno cerca di mangiare il maggior numero possibile di patatine durante il gioco.
> 
> a) In questa domanda, Auriane gioca in modo grassone: a sua volta, prende sempre tutte le patatine che può. Quante cippe al massimo può Anita garantire di mangiare, in funzione di $n$? Ora Auriane pensa prima di giocare. Quante cippe al massimo Anita può garantire di mangiare, non importa come Auriane gioca, in funzione di $n$?
> 
> 3. In questa domanda, il chip in basso a sinistra è un delizioso chip da barbecue che Anita vuole assolutamente mangiare. In funzione di $n$, come può Anita garantire di mangiarlo?
> 
> 4. In questa domanda, il numero di riga $k$ (calcolato dalla parte inferiore) è costituito da patatine con un sapore particolare. Chiamiamo soddisfazione il valore $C + S \cdot v$, dove $C$ è il numero di chip ordinari e $S$ il numero di chip speciali che Anita mangia, $v$ è il valore di un chip speciale. Come funzione di $n$ e $k$, qual è la massima soddisfazione che Anita può garantire di ottenere, indipendentemente dal modo in cui Auriane gioca, nei seguenti casi speciali:
> 
> a) i chip non sono buoni, quindi di valore $v = -1$; b) i chip sono particolarmente buoni, quindi di valore $v = 3$?
> 
> Ora i chip sono disposti come una piramide: nella riga inferiore ci sono i chip $n$, nella riga sopra $n-1$, e così via fino alla cima, dove c'è un solo chip. Un chip non può più essere mangiato come prima: un chip può essere mangiato se i due chip appena sotto di esso non ci sono più.
> 
> Un esempio di gioco è mostrato nella figura 2. A ogni passo, le patatine in blu sono quelle che si possono mangiare. In totale, Anita ha mangiato i chip $6$ e Auriane ha mangiato i chip $4$ durante questa partita.
> 
> 5. Ripetere le domande da 1 a 3 in questo contesto.
> 
> Domanda complementare. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2026__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_backward|Ragionamento all'indietro]], [[method_ricorsione|Ricorsione]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Chip-eating game on a layout of n piles of n chips: two players alternate, a chip may be eaten only if its neighbours are still covered; count states and analyse optimal strategies, then repeat on a pyramid layout.*

> 1. War at the aperitif.
> 
> Anita and Auriane take an aperitif together. They do not finish it, and instead have before them a heap of old-fashioned plain chips, composed of $n$ piles of $n$ chips, with $n \ge 1$ an integer. They eat the chips in turn, each in turn playing the role of eater. A chip in a pile or at the end of a row may be eaten only if the chips beside it have not yet been uncovered, that is, only the chip at the top of a pile, or at the end of a row. They must eat the chips one at a time, taking at least one chip and at most all the uncovered chips. The game continues as long as there are chips, but in the end no chip is left lying on the table. Anita begins.
> 
> An example of a game is shown in figure 1. At each step, the chips in blue are those that can be eaten. In total, Anita ate $7$ chips and Auriane ate $2$ chips during this game.
> 
> 1. How many different possible states are there for the heap of chips?
> 
> 2. Anita and Auriane are gourmands and each therefore seeks to eat as many chips as possible during the game.
> 
>    a) In this question, Auriane plays in a gluttonous manner: on her turn, she always takes all the chips she can. How many chips at most can Anita guarantee to eat, as a function of $n$?
>    b) Now Auriane thinks before playing. How many chips at most can Anita guarantee to eat, no matter how Auriane plays, as a function of $n$?
> 
> 3. In this question, the chip at the bottom left is a delicious barbecue chip that Anita absolutely wants to eat. As a function of $n$, how can Anita guarantee to eat it?
> 
> 4. In this question, the row number $k$ (counted from the bottom) is made of chips with a particular flavour. We call satisfaction the value $C + S \cdot v$, where $C$ is the number of ordinary chips and $S$ the number of special chips Anita eats, $v$ being the value of a special chip. As a function of $n$ and $k$, what is the maximal satisfaction Anita can guarantee to obtain, no matter how Auriane plays, in the following special cases:
> 
>    a) the chips are not good, so of value $v = -1$;
>    b) the chips are particularly good, so of value $v = 3$?
> 
> Now the chips are laid out as a pyramid: on the bottom row there are $n$ chips, on the row above $n-1$, and so on up to the top, where there is a single chip. A chip can no longer be eaten as before: a chip may be eaten if the two chips just below it are no longer there.
> 
> An example of a game is shown in figure 2. At each step, the chips in blue are those that can be eaten. In total, Anita ate $6$ chips and Auriane ate $4$ chips during this game.
> 
> 5. Repeat questions 1 to 3 in this setting.
> 
> Complementary question. Propose and study other directions of research.

![[src_tfjm_2026__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_backward|Backward]], [[method_ricorsione|Ricorsione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,topic_geometria_piana,method_grafi,method_bigezione,method_casework,method_conteggio,method_doppio_conteggio,skill_astrazione,skill_ragionamento_geometrico,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="fr"></div>


*On the Nine Men's Morris board, define a 'mill figure': points and straight segments with each segment holding 3 points and each point on 2 segments; find minimal point count, connectedness, similarity classes and counting, with a generalized variant.*

> 2. Jeu du Moulin
>
> Alphonse et Béatrice sont intrigués par le plateau du Jeu du Moulin, voir Figure 3.
>
> Figure 3. Plateau du Jeu du Moulin classique
>
> Ils remarquent que c'est une figure géométrique constituée de points et de bâtons droits, vérifiants aux conditions suivantes :
>
> a) Chaque bâton comporte exactement $3$ points.
>
> b) Chaque point appartient à exactement $2$ bâtons.
>
> c) Si deux bâtons s'intersectent, alors ils ne sont pas colinéaires.
>
> Ils se demandent s'il y a d'autres figures avec ces propriétés, qu'ils appellent figure du moulin. Pour une figure du moulin donnée, on note $p$ le nombre total de ses points.
>
> 1. Quel est le $p$ minimal tel qu'il existe une figure du moulin avec $p$ points ?
>
> On dit qu'une figure de moulin est connexe si on peut aller de n'importe quel point vers n'importe quel autre en suivant les bâtons.
>
> 2. Déterminer tous les $p \in \mathbb{N}^*$ pour lesquels il existe une figure du moulin connexe avec $p$ points.
>
> Béatrice fait remarquer que dans le jeu du moulin classique, les trois points d'un bâton sont exactement ses deux extrémités, ainsi que son milieu.
>
> 3. Reprendre la question précédente avec cette contrainte.
>
> On revient aux contraintes initiales a), b) et c). Alphonse remarque que parfois deux figures qui semblent différentes ne changent rien au jeu. On dit que deux figures sont similaires quand il existe une bijection entre les points respectant les bâtons
>
> Figure 4. Figure du moulin similaire au plateau classique
>
> Par exemple, la figure du moulin présentée en Figure 4 est similaire à la figure du moulin classique de la Figure 3.
>
> 4. Combien de figures du moulin existe-t-il avec $p$ points, en identifiant les figures similaires ?
>
> Béatrice propose de modifier les hypothèses : à présent, on veut qu'il existe exactement $k$ points par bâton (avec $k \ge 3$) et qu'exactement $\ell$ bâtons passent par chaque point (avec $\ell \ge 2$).
>
> 5. Reprendre les questions 2 et 4 dans ce cadre.
>
> Question complémentaire. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_grafi|Grafi]], [[method_bigezione|Biiezione]], [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_doppio_conteggio|Double counting]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Geometria|Geometry]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)


<div class="qlang-split" data-lang="it"></div>


*Sulla lavagna Morris dei Nove Uomini, definire una 'figura di miglio': punti e segmenti dritti con ciascun segmento che detiene 3 punti e ogni punto su 2 segmenti; trovare il numero minimo di punti, la connessione, le classi di somiglianza e il conteggio, con una variante generalizzata.*

> 2. Il gioco del mulino.
> 
> Alphonse e Beatrice sono intrigati dal consiglio del gioco del mulino, vedi figura 3.
> 
> Essi notano che si tratta di una figura geometrica fatta di punti e punti retti (segmenti), che soddisfa le condizioni:
> 
> a) Ogni bastone contiene esattamente $3$ punti. b) Ogni punto appartiene esattamente ai bastoni $2$. c) Se due bastoni distinti si incrociano, i tre punti non sono collineari.
> 
> Essi si chiedono se esistano altre figure con queste proprietà, che chiamano figura del mulino (figure du moulin). Per una figura del mulino, $p$ è il numero totale di punti.
> 
> 1. Qual è il minimo $p$ tale che esista una figura del mulino con $p$ punti?
> 
> Diciamo che una figura del mulino è connessa se si può andare da un punto all'altro seguendo i bastoni.
> 
> 2. Determinare il $p \in \mathbb{N}^*$ per il quale esiste una figura connessa del mulino con punti $p$.
> 
> Beatrice nota che per la classica figura del mulino, i tre punti di un bastone sono esattamente le sue due estremità e il suo centro.
> 
> 3. Ripetere la domanda precedente con questo vincolo.
> 
> Torniamo alle restrizioni iniziali a), b) e c). Alphonse osserva che a volte due cifre che sembrano diverse non lo sono in realtà. Diciamo che due figure sono simili quando esiste una bijezione tra i punti che riguardano i bastoni (tre punti si trovano sullo stesso bastone nella prima figura se e solo se le loro immagini si trovano sullo stesso bastone nella seconda).
> 
> Per esempio, la figura del mulino mostrata nella figura 4 è simile alla figura classica del mulino della figura 3.
> 
> 4. Quante cifre del mulino sono presenti con punti $p$, identificando cifre simili?
> 
> Beatrice desidera ora generalizzare: ogni bastone contiene esattamente $k$ punti (con $k \ge 3$) e esattamente $\ell$ bastoni passano attraverso ogni punto (con $\ell \ge 2$).
> 
> 5. Ripetere le domande 2 e 4 in questo contesto.
> 
> Domanda complementare. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2026__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_grafi|Teoria dei grafi]], [[method_bigezione|Bigezione / corrispondenza]], [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]], [[method_doppio_conteggio|Doppio conteggio]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]


<div class="qlang-split" data-lang="en"></div>


*On the Nine Men's Morris board, define a 'mill figure': points and straight segments with each segment holding 3 points and each point on 2 segments; find minimal point count, connectedness, similarity classes and counting, with a generalized variant.*

> 2. The game of the Mill.
> 
> Alphonse and Beatrice are intrigued by the board of the Game of the Mill, see Figure 3.
> 
> They notice that it is a geometric figure made of points and straight sticks (segments), satisfying the conditions:
> 
>    a) Each stick contains exactly $3$ points.
>    b) Each point belongs to exactly $2$ sticks.
>    c) If two distinct sticks intersect, the three points are not collinear.
> 
> They wonder whether there are other figures with these properties, which they call a figure of the mill (figure du moulin). For a figure of the mill, let $p$ be the total number of points.
> 
> 1. What is the minimal $p$ such that there exists a figure of the mill with $p$ points?
> 
> We say that a figure of the mill is connected if one can go from any point to any other point by following the sticks.
> 
> 2. Determine the $p \in \mathbb{N}^*$ for which there exists a connected figure of the mill with $p$ points.
> 
> Beatrice notices that for the classic mill figure, the three points of a stick are exactly its two ends and its middle.
> 
> 3. Repeat the previous question with this constraint.
> 
> We return to the initial constraints a), b) and c). Alphonse notices that sometimes two figures which seem different are in fact not. We say that two figures are similar when there exists a bijection between the points respecting the sticks (three points lie on the same stick in the first figure if and only if their images lie on the same stick in the second).
> 
> For example, the mill figure shown in Figure 4 is similar to the classic mill figure of Figure 3.
> 
> 4. How many figures of the mill are there with $p$ points, identifying similar figures?
> 
> Beatrice now wishes to generalize: each stick contains exactly $k$ points (with $k \ge 3$) and exactly $\ell$ sticks pass through each point (with $\ell \ge 2$).
> 
> 5. Repeat questions 2 and 4 in this setting.
> 
> Complementary question. Propose and study other directions of research.

![[src_tfjm_2026__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_grafi|Grafi]], [[method_bigezione|Biiezione]], [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_doppio_conteggio|Double counting]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Geometria|Geometry]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_probabilita,method_casework,method_conteggio,method_inclusione_esclusione,method_cassetti,skill_modellizzazione,skill_conteggio_sistematico,skill_stima"></span>

<div class="qlang-switch" data-default="fr"></div>


*Among N barrels, exactly k are contaminated by a lethal dye; using detectors that test mixtures of chosen barrels, find a strategy minimizing the number of detectors $D_{N,k}(S)$ under perfect, threshold-sensitive, probabilistic and dynamic detector models.*

> 3. Poison dans les boissons
>
> La Teinture Fumigée de Jais Mauve et Mauvaise (abrégée TFJM$^2$) est un colorant (fictif) incolore et inodore, mais mortel à la consommation (même en infime quantité). Lors d'un transport de marchandises, d'infimes quantités de TFJM$^2$ se sont retrouvés dans les tonneaux de jus de raisin de Nicolas. Il cherche un moyen de trouver quels sont les tonneaux empoisonnés.
>
> Soit $N \in \mathbb{N}$ un entier naturel. On suppose que Nicolas dispose de $N$ tonneaux numérotés de $1$ à $N$, on suppose aussi que Nicolas sait que exactement $k \le N$ tonneaux ont été contaminés.
>
> Une stratégie de détection $S$ est le choix d'un ou plusieurs tonneaux à tester qu'il verse (en les mélangeant ou non) dans des verres de volume unité, puis qu'il teste à l'aide de détecteurs. La stratégie est un succès si, partant de n'importe quelle configuration initiale de $k$ tonneaux empoisonnés, elle permet d'identifier les tonneaux empoisonnés et uniquement ceux-là. Sinon, la stratégie est un échec.
>
> Étant donnée une stratégie $S$, on note $D_{N,k}(S)$ le nombre de détecteurs qui ont été utilisés dans cette stratégie. Une stratégie $S$ est optimale si $D_{N,k}(S)$ est le plus petit possible.
>
> Dans toutes les questions du problème, on pourra commencer par le cas $k = 1$.
>
> 1. Dans cette question, on suppose que les détecteurs sont parfaits, c'est-à-dire qu'ils détectent la présence de TFJM$^2$ même infime dans n'importe quel mélange.
>
> Déterminer une stratégie optimale de détection $S$ et déterminer $D_{N,k}(S)$.
>
> 2. On fixe $s \in ]0, 1[$. Dans cette question, on suppose que les détecteurs sont sensibles, c'est-à-dire qu'il détecte la présence de poison si, et seulement si, sa concentration dans l'échantillon testé est supérieur ou égal à $s$.
>
> Déterminer une stratégie optimale de détection $S$ et déterminer $D_{N,k}(S)$.
>
> 3. Dans cette question, on suppose que les détecteurs ne sont plus déterministes. On fixe $p \in ]0, 1[$ et $q \in [0, 1]$ et on suppose que la probabilité que le détecteur détecte la présence de poison est $p$ et que la probabilité de faux-positif est $q$, c'est-à-dire
>
> $\mathbb{P}_{\text{présence de poison}}(\text{détection positive}) = p$ et $\mathbb{P}_{\text{absence de poison}}(\text{détection positive}) = q$.
>
> On fixe $\varepsilon > 0$. On dit qu'une stratégie $S$ est $\varepsilon$-optimale si $D_{N,k}(S)$ est le plus petit possible parmi toutes les stratégies pour lesquelles la probabilité d'échec est inférieure à $\varepsilon$.
>
>    a) Dans cette question et la suivante, on suppose que $q = 0$. Établir une stratégie de détection pour laquelle la probabilité d'échec est inférieure à $\varepsilon$.
>
>    b) Déterminer une stratégie $\varepsilon$-optimale $S$ et déterminer $D_{N,k}(S)$.
>
>    c) Mêmes questions avec $q \ne 0$.
>
> 4. Dans cette question, on suppose que les détecteurs sont non déterministes et dynamiques, c'est-à-dire que la probabilité de détection positive en présence de poison est exactement égale à la concentration de poison dans l'échantillon testé. On suppose qu'il n'y a pas de faux-positif. On fixe $\varepsilon > 0$.
>
>    a) Établir une stratégie de détection pour laquelle la probabilité d'échec est inférieure à $\varepsilon$.
>
>    b) Déterminer une stratégie $\varepsilon$-optimale $S$ et déterminer $D_{N,k}(S)$.
>
> 5. Reprendre les questions 1. et 2. en tenant compte de stratégies $\varepsilon$-optimales.
>
> 6. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_inclusione_esclusione|Inclusione-esclusione]], [[method_cassetti|Pigeonhole principle]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)


<div class="qlang-split" data-lang="it"></div>


*Tra N barili, esattamente k sono contaminati da un colorante letale; utilizzando i rilevatori che testano miscele di barili scelti, si trova una strategia che riduce al minimo il numero di rilevatori $D_{N,k}(S)$ in modelli di rilevatori perfetti, sensibili alla soglia, probabilistici e dinamici.*

> 3. Veneno nelle bevande.
> 
> La tintura Funigfle de Jais Mauve et Mauvaise (abbreviata TFJM$^2$) è un colorante fittizio, incolore o colorato, ma mortale anche a concentrazioni infinitesime. Durante un trasporto di merci, quantità infinitesime di TFJM$^2$ sono finite nei barili delle bevande di Nicolas. Cerca di sapere in quali barili si trova il veleno.
> 
> I barili sono in numero naturale: supponiamo che Nicolas abbia $N$ barili numerati da $1$ a $N$, e supponiamo esattamente che i barili $k \le N$ siano stati contaminati. Una strategia di rilevamento $S$ consiste nel scegliere, su uno o più barili, di testare (miscelando i barili scelti insieme in un volume unitario) la presenza del veleno. La strategia può avere successo o fallire, a seconda che la configurazione dei test scelta consente o meno di identificare in modo unico i barili contaminati.
> 
> Data la strategia $S$, $D_{N,k}(S)$ è il numero di sensori (testi) utilizzati dalla strategia. Cerchiamo la strategia per ridurre al minimo questo numero.
> 
> In tutte le domande del problema si può fare un commento per $k \le N$.
> 
> 1. In questa domanda, supponiamo che i sensori siano perfetti, cioè che rilevino la presenza di TFJM$^2$ (anche mescolato). Determinare una strategia di rilevamento ottimale $S$ e determinare $D_{N,k}(S)$.
> 
> 2. In questa domanda, supponiamo che i sensori non siano sensibili, cioè che rilevino la presenza di veleno se, e solo se, la sua concentrazione nel campione testato è almeno uguale a una certa soglia. Determinare una strategia ottimale di rilevamento $S$ e determinare $D_{N,k}(S)$.
> 
> 3. In questa domanda, supponiamo che i rilevatori non siano più deterministi. Impostare $p \in [0,1]$ e $q \in [0,1]$ e supporre che la probabilità che il rilevatore rileva la presenza di veleno sia $p$ e la probabilità di un falso positivo sia $q$, cioè $\mathbb{P}_{\text{poison present}}(\text{positive detection}) = p$ e $\mathbb{P}_{\text{poison absent}}(\text{positive detection}) = q$.
> 
> Set $\varepsilon > 0$. Diciamo che una strategia $S$ è $\varepsilon$-ottimale se $D_{N,k}(S)$ è la più piccola possibile tra tutte le strategie la cui probabilità di fallimento è inferiore a $\varepsilon$.
> 
> a) In questa e nella domanda successiva, supponiamo $q = 0$. stabilire una strategia di rilevamento la cui probabilità di fallimento è inferiore a $\varepsilon$. b) Determinare una strategia $\varepsilon$-ottimale $S$ e determinare $D_{N,k}(S)$. c) Le stesse domande con $q \ne 0$.
> 
> 4. In questa domanda, supponiamo che i rilevatori non siano più deterministi e siano dinamici, cioè la probabilità di rilevamento positivo in presenza di veleno è esattamente uguale alla concentrazione di veleno nel campione testato, e quella di falso positivo è $\varepsilon$. Set $\varepsilon > 0$.
> 
> a) stabilire una strategia di rilevamento la cui probabilità di fallimento è inferiore a $\varepsilon$. b) Determinare una strategia $\varepsilon$-ottimale $S$ e determinare $D_{N,k}(S)$.
> 
> 5. Ripetere le domande 1 e 2 tenendo conto delle strategie $\varepsilon$ ottimali.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2026__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilita e statistica]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]], [[method_inclusione_esclusione|Inclusione-esclusione]], [[method_cassetti|Principio dei cassetti]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima e approssimazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Among N barrels, exactly k are contaminated by a lethal dye; using detectors that test mixtures of chosen barrels, find a strategy minimizing the number of detectors $D_{N,k}(S)$ under perfect, threshold-sensitive, probabilistic and dynamic detector models.*

> 3. Poison in the beverages.
> 
> The Teinture Funigfle de Jais Mauve et Mauvaise (abbreviated TFJM$^2$) is a fictitious dye, colourless or coloured, but deadly even at infinitesimal concentration. During a transport of goods, infinitesimal quantities of TFJM$^2$ ended up in the barrels of Nicolas' beverages. He seeks to know in which barrels the poison is found.
> 
> The barrels are in natural number: suppose Nicolas has $N$ barrels numbered from $1$ to $N$, and suppose exactly $k \le N$ barrels were contaminated. A detection strategy $S$ consists in choosing, on one or several barrels, to test (mixing the chosen barrels together into one unit volume) whether the poison is present. The strategy may succeed or fail, depending on whether the chosen configuration of tests permits identifying the contaminated barrels uniquely or not.
> 
> Given a strategy $S$, let $D_{N,k}(S)$ be the number of detectors (tests) used by the strategy. We seek the strategy minimizing this number.
> 
> In all questions of the problem, one may comment for $k \le N$.
> 
> 1. In this question, suppose the detectors are perfect, that is, they detect the presence of TFJM$^2$ (even mixed in). Determine an optimal detection strategy $S$ and determine $D_{N,k}(S)$.
> 
> 2. In this question, suppose the detectors are not sensitive, that is, they detect the presence of poison if, and only if, its concentration in the tested sample is at least equal to some threshold. Determine an optimal detection strategy $S$ and determine $D_{N,k}(S)$.
> 
> 3. In this question, suppose the detectors are no longer deterministic. Set $p \in [0,1]$ and $q \in [0,1]$ and suppose the probability that the detector detects the presence of poison is $p$ and the probability of a false positive is $q$, that is $\mathbb{P}_{\text{poison present}}(\text{positive detection}) = p$ and $\mathbb{P}_{\text{poison absent}}(\text{positive detection}) = q$.
> 
> Set $\varepsilon > 0$. We say a strategy $S$ is $\varepsilon$-optimal if $D_{N,k}(S)$ is the smallest possible among all strategies whose probability of failure is less than $\varepsilon$.
> 
>    a) In this question and the following, suppose $q = 0$. Establish a detection strategy whose probability of failure is less than $\varepsilon$.
>    b) Determine an $\varepsilon$-optimal strategy $S$ and determine $D_{N,k}(S)$.
>    c) Same questions with $q \ne 0$.
> 
> 4. In this question, suppose the detectors are no longer deterministic and are dynamic, that is, the probability of positive detection in the presence of poison is exactly equal to the concentration of poison in the tested sample, and that of false positive is $\varepsilon$. Set $\varepsilon > 0$.
> 
>    a) Establish a detection strategy whose probability of failure is less than $\varepsilon$.
>    b) Determine an $\varepsilon$-optimal strategy $S$ and determine $D_{N,k}(S)$.
> 
> 5. Repeat questions 1 and 2 taking into account $\varepsilon$-optimal strategies.
> 
> 6. Propose and study other directions of research.

![[src_tfjm_2026__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_inclusione_esclusione|Inclusione-esclusione]], [[method_cassetti|Pigeonhole principle]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_combinatoria,topic_aritmetica,method_simmetria,method_conteggio,method_casework,method_congruenze,skill_conteggio_sistematico,skill_riconoscimento_pattern,skill_astrazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Necklaces of beads of length l with integer values summing to price p, considered equal up to rotation and avoiding m consecutive value-0 beads; count necklaces $C(l,p,m)$ and the restricted set $C_D(l,p,m)$ using only values in a subset D.*

> 4. Colliers de perles
>
> À la cour, un joaillier est spécialiste de fabrication de collier de perles pour les nobles gens. Ayant des problèmes de livraison, il veut adapter son offre pour cacher la rupture de stock de certaines perles.
>
> Pour faire ses colliers, le joaillier dispose de différents types de perles, un type pour chaque entier positif, appelée sa valeur (en pièces d'or). Un collier se caractérise par la succession des valeurs des perles qui le composent, formant un cercle. On définit la longueur $\ell$ d'un collier comme étant son nombre de perles et son prix $p$ comme la somme des valeurs de ses perles. On considère deux colliers comme étant les mêmes si on peut obtenir l'un à partir de l'autre via une rotation.
>
> Figure 5. Trois colliers de longueur $\ell = 5$ et de prix $p = 6$. Les colliers $A$ et $B$ sont les mêmes.
>
> Un jour, sa meilleure cliente, la marquise de Carabas, lui commande un collier avec $7$ perles, au prix de $5$ pièces d'or, qui ne contient jamais $2$ perles de valeur $0$ à la suite.
>
> 1. Combien de colliers le joaillier peut-il lui proposer ?
>
> Le joaillier souhaite anticiper les caprices de la marquise. On note $C(\ell, p, m)$ l'ensemble des colliers de longueur $\ell$, de prix $p$ et qui ne contiennent pas $m$ perles de valeur zéro à la suite.
>
> 2. À quelles conditions sur $(\ell, p, m)$ le joaillier peut-il proposer au moins un collier à la marquise ?
>
> Le joaillier rencontre un problème de livraison : seules les perles d'une valeur appartenant à un certain sous-ensemble $D \subset \mathbb{N}$ sont disponibles. On note $C_D(\ell, p, m)$, l'ensemble des colliers de $C(\ell, p, m)$ constitués uniquement de perles de valeur dans $D$.
>
> 3. Si $D$ est l'ensemble des nombres pairs, à quelle(s) condition(s) sur $(\ell, p, m)$ l'ensemble $C_D(\ell, p, m)$ est-il non-vide ?
>
> 4. Pour $D$ fixé, à quelle(s) condition(s) sur $(\ell, p, m)$ a-t-on l'égalité $C(\ell, p, m) = C_D(\ell, p, m)$ ?
>
> 5. Si $D = \{0, 1\}$, combien de colliers sont dans $C_D(\ell, p, m)$ ? On pourra distinguer les cas suivants où $d = \operatorname{pgcd}(\ell, p)$ :
>
>    a) $d = 1$,
>
>    b) $d$ est un nombre premier,
>
>    c) $d$ est quelconque.
>
> 6. Reprendre la Question 5 pour $D = \{0, 1, \ldots, k\}$ où $k$ est un entier positif quelconque.
>
> Question complémentaire. Proposer et étudier d'autres directions de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_congruenze|Congruenze]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)


<div class="qlang-split" data-lang="it"></div>


*Collane di perle di lunghezza l con valori interi sommati al prezzo p, considerati uguali fino alla rotazione e evitando m perle di valore 0 consecutivo; collane di conteggio $C(l,p,m)$ e l'insieme ristretto $C_D(l,p,m)$ utilizzando solo valori in un sottinsieme D.*

> 4. Colletti di perle.
> 
> Alla corte, un gioielliere si specializza nel fare collane di perle per il popolo nobile. Avendo problemi di consegna, desidera adattare la sua offerta alla scarsità di certe perle.
> 
> Per fare le collane, il gioielliere ha diversi tipi di perle, un tipo per ogni valore, ogni perla specificata da un valore (in pezzi d'oro). Ogni colletto è caratterizzato dalla successione di perle che lo formano, disposte in un cerchio. La lunghezza $\ell$ di una collana viene definita come il numero di perle e il prezzo $p$ come la somma dei valori delle perle. Consideriamo che due colletti siano uguali se uno può essere ottenuto dall'altro mediante una rotazione.
> 
> La figura 5 mostra tre colletti di lunghezza $\ell = 5$ e prezzo $p = 6$. Le collane $A$ e $B$ sono le stesse.
> 
> Un giorno, un cliente nobile, la marchessa di Carabas, ordina un collare con perle $7$, al prezzo di monete d'oro $5$, che non contiene mai perle di valore $0$ di fila.
> 
> 1. Quanti colletti di questo tipo può offrirle il gioielliere?
> 
> Il gioielliere desidera anticipare i capricci della marchessa. Indichiamo $C(\ell, p, m)$ l'insieme di collane di lunghezza $\ell$, di prezzo $p$, che non contengono perle di valore $m$ in fila.
> 
> 2. In quali condizioni il $(\ell, p, m)$ non è vuoto?
> 
> Il gioielliere incontra un problema di consegna: alcuni valori di perla non possono più essere consegnati. Sono disponibili solo perle il cui valore appartiene a un determinato sottoinsieme $D \subset \mathbb{N}$. Indichiamo $C_D(\ell, p, m)$ l'insieme di collane di $C(\ell, p, m)$ realizzate solo di perle di valore in $D$.
> 
> 3. Se $D$ è l'insieme dei numeri naturali, a quale condizione s) su $(\ell, p, m)$ è non vuoto l'insieme $C_D(\ell, p, m)$?
> 
> 4. Per $D$ fisso, a quale condizione (') su $(\ell, p, m)$ si ottiene l'uguaglianza $C(\ell, p, m) = C_D(\ell, p, m)$?
> 
> 5. Se $D = \{0, 1\}$, quante collane ci sono in $C_D(\ell, p, m)$? Si possono distinguere i seguenti casi, in cui $d = \gcd(\ell, p)$:
> 
> a) $d = 1$, b) $d$ un numero primo, c) $d$ arbitrario.
> 
> 6. Ripetere la domanda 5 per $D = \{0, 1, \dots, k\}$ con $k$ un intero positivo arbitrario.
> 
> Domanda complementare. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2026__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]], [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]


<div class="qlang-split" data-lang="en"></div>


*Necklaces of beads of length l with integer values summing to price p, considered equal up to rotation and avoiding m consecutive value-0 beads; count necklaces $C(l,p,m)$ and the restricted set $C_D(l,p,m)$ using only values in a subset D.*

> 4. Necklaces of pearls.
> 
> At court, a jeweller specializes in making necklaces of pearls for the noble folk. Having delivery problems, he wishes to adapt his offer to the shortage of certain pearls.
> 
> To make necklaces, the jeweller has different types of pearls, one type for each value, each pearl specified by a value (in gold pieces). Each necklace is characterized by the succession of pearls forming it, arranged in a circle. We define the length $\ell$ of a necklace as its number of pearls, and the price $p$ as the sum of the values of its pearls. We consider two necklaces to be the same if one can be obtained from the other by a rotation.
> 
> Figure 5 shows three necklaces of length $\ell = 5$ and price $p = 6$. The necklaces $A$ and $B$ are the same.
> 
> One day, a noble client, the marquise of Carabas, orders a necklace with $7$ pearls, at the price of $5$ gold pieces, that never contains $2$ pearls of value $0$ in a row.
> 
> 1. How many such necklaces can the jeweller offer her?
> 
> The jeweller wishes to anticipate the caprices of the marquise. We denote $C(\ell, p, m)$ the set of necklaces of length $\ell$, of price $p$, that do not contain $m$ pearls of value $0$ in a row.
> 
> 2. Under which conditions on $(\ell, p, m)$ is $C(\ell, p, m)$ non-empty?
> 
> The jeweller encounters a delivery problem: certain pearl values can no longer be delivered. Only pearls whose value belongs to a certain subset $D \subset \mathbb{N}$ are available. We denote $C_D(\ell, p, m)$ the set of necklaces of $C(\ell, p, m)$ made only of pearls of value in $D$.
> 
> 3. If $D$ is the set of natural numbers, under which condition(s) on $(\ell, p, m)$ is the set $C_D(\ell, p, m)$ non-empty?
> 
> 4. For $D$ fixed, under which condition(s) on $(\ell, p, m)$ does one have the equality $C(\ell, p, m) = C_D(\ell, p, m)$?
> 
> 5. If $D = \{0, 1\}$, how many necklaces are there in $C_D(\ell, p, m)$? One may distinguish the following cases, where $d = \gcd(\ell, p)$:
> 
>    a) $d = 1$,
>    b) $d$ a prime number,
>    c) $d$ arbitrary.
> 
> 6. Repeat question 5 for $D = \{0, 1, \dots, k\}$ with $k$ an arbitrary positive integer.
> 
> Complementary question. Propose and study other directions of research.

![[src_tfjm_2026__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_congruenze|Congruenze]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_analitica,topic_combinatoria,topic_trigonometria,method_coordinate,method_conteggio,method_casework,method_trigonometria,skill_ragionamento_geometrico,skill_modellizzazione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="fr"></div>


*On a climbing wall modeled in the plane, define a 'path' of n grips each at distance l from the previous, going up within angle alpha of the vertical; find conditions for two distinct paths to coexist, the minimum number of grips, and arrangements maximizing the count of distinct paths.*

> 5. Parcours d'escalade
>
> Afin de préparer des activités acrobatiques lors du prochain tournoi du TFJM$^2$, Mathis souhaite construire un mur d'escalade qui permettrait à chacun de s'amuser selon ces capacités.
>
> On appelle configuration tout ensemble fini de points du plan, appelés prises. Ces points représentent les positions des prises d'escalade disponibles sur le mur. Une configuration modélise donc la disposition géométrique fixe des prises sur la paroi.
>
> Soit $\alpha \in \left]0, \frac{\pi}{2}\right]$ un réel fixé. Pour tout $l \in \mathbb{R}_+^*$, on appelle $l$–parcours de taille $n \geqslant 1$ une succession de $n + 1$ points, $A_0, A_1, \dots, A_n$ vérifiant les conditions suivantes :
>
> - le premier point $A_0$ est situé n'importe où sur le sol (axe des abscisses), et chacun des autres points est une prise ;
> - pour tout $i \in \{0, \dots, n - 1\}$, la distance entre deux prises successives est $A_i A_{i+1} = l$ ;
> - pour tout $i \in \{0, \dots, n - 1\}$, le point $A_{i+1}$ est strictement plus haut que le point $A_i$ et l'angle entre la droite $(A_i A_{i+1})$ et la verticale est inférieur ou égal à $\alpha$.
>
> Autrement dit, le grimpeur commence où il souhaite au sol, attrape une première prise à distance $l$ et dans un angle limité à $\alpha$, puis poursuit le parcours en montant ainsi de prise en prise, pour un total de $n$ prises. La figure 6 illustre une configuration avec deux parcours différents.
>
> 1. Dans un premier temps, Mathis souhaite disposer les prises de manière à permettre deux types de parcours distincts.
>
>    a) Dans cette question, Mathis n'a le droit de placer qu'une seule prise sur le mur. Déterminer les conditions reliant $l_1, l_2 \in \mathbb{R}_+^*$ et $\alpha \in \left]0, \frac{\pi}{2}\right]$ qui lui permette de la placer de sorte à avoir à la fois un $l_1$–parcours et un $l_2$–parcours, tous deux de taille égale à $1$.
>
>    b) Soit $n > 1$. Dans cette question, Mathis n'a le droit de placer que $n$ prises sur le mur. Déterminer les conditions reliant $l_1, l_2 \in \mathbb{R}_+^*$ et $\alpha \in \left]0, \frac{\pi}{2}\right]$ qui lui permette de les placer de sorte à avoir à la fois un $l_1$–parcours de taille $n$, et $n$ $l_2$–parcours de taille $1$ qui utilisent chacun une prise différente.
>
> 2. Dans cette question, on supposera que $\alpha < \frac{\pi}{2}$. Mathis souhaite construire une configuration qui permette la coexistence de deux parcours de caractéristiques différentes : un $l_1$–parcours de taille $t_1$ et un $l_2$–parcours de taille $t_2$.
>
> Déterminer le nombre minimal de prises $N(l_1, l_2, t_1, t_2, \alpha)$ nécessaire pour obtenir une configuration comportant à la fois un $l_1$–parcours de taille $t_1$, et un $l_2$–parcours de taille $t_2$.
>
>    a) Étudier le cas où les pas sont proches, plus précisément $l_2 \leqslant l_1 < l_2$.
>
>    b) Étudier le cas où les pas sont de tailles très différentes, plus précisément $l_1 < l_2$.
>
> 3. Dans cette question, on pourra se limiter au cas $\alpha = \frac{\pi}{2}$. Afin de modéliser le fait que certains mouvements sont plus exigeants que d'autres, Mathis souhaite s'assurer qu'à chaque étape d'un parcours, le grimpeur puisse choisir entre plusieurs types de mouvements, par exemple un mouvement facile (à distance $l_1$) ou un mouvement difficile (à distance $l_2$) avec $l_1 < l_2$.
>
>    a) Soit $n > 0$. Déterminer, en fonction de $n$, $l_1$ et $l_2$, le nombre minimal de prises qu'il est nécessaire d'utiliser afin de garantir la possibilité d'effectuer $n$ mouvements à partir d'un certain point de départ $A_0$ fixé, en choisissant à chaque étape entre un mouvement facile et un mouvement difficile.
>
>    b) Reprendre la question précédente avec d'avantage de type de mouvements. On commencera par $3$ types de mouvements.
>
> 4. En ouvrant une vieille boîte, Mathis découvre $n$ prises d'escalade. Il souhaite les disposer sur le mur de manière à obtenir le plus grand nombre possible de parcours réalisables.
>
>    a) Pour un angle $\alpha$ et une longueur de pas $l > 0$ fixés, déterminer une disposition des $n$ prises qui maximise le nombre de $l$–parcours distincts possibles. Deux parcours sont considérés comme distincts s'ils ne passent pas par exactement les mêmes prises (le point de départ au sol n'importe pas).
>
>    b) Discuter le cas où plusieurs longueurs de mouvement sont autorisées (par exemple $l_1 < l_2$), et proposer des configuration qui permettent simultanément un grand nombre de parcours de différents types.
>
> Question complémentaire. Proposer et étudier d'autres directions de recherche.

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_combinatoria|Combinatoria]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)


<div class="qlang-split" data-lang="it"></div>


*Su un muro di arrampicata modellato in piano, definire un "cammino" di n afferrature ciascuna a distanza l dalla precedente, che sali all'interno dell'angolo alfa della verticale; trovare le condizioni per la coesistenza di due percorsi distinti, il numero minimo di afferrature e le disposizioni che massimizzino il numero di percorsi distinti.*

> 5. Corso di arrampicata.
> 
> Al fine di preparare le attività acrobatiche per il prossimo torneo del TFJM$^2$, Mathis desidera ricostruire un muro di arrampicata che permetterà a tutti di godersi secondo le loro capacità.
> 
> Chiamiamo una configurazione qualsiasi insieme di punti nel piano, chiamati grips. Questi punti rappresentano le posizioni delle maniglie di arrampicata disponibili sul muro. La configurazione modella il layout geometrico delle maniglie sul muro.
> 
> Lasciate che $\alpha \in \left]0, \frac{\pi}{2}\right]$ sia un reale fisso. Per un vero $l \in \mathbb{R}_+^*$, chiamiamo un corso $l$ di dimensione $n$ ($n \ge 1$) una successione di punti $n+1$ $A_0, A_1, \dots, A_n$ che verificano le seguenti condizioni:
> 
> - il primo punto $A_0$ è situato sul terreno (l'asse $x$), mentre gli altri sono gripi; - per tutti $i \in \{0, \dots, n-1\}$, la distanza tra due punti successivi è $A_i A_{i+1} = l$; - per tutti $i \in \{0, \dots, n-1\}$, il punto $A_{i+1}$ è strettamente superiore al punto $A_i$ e l'angolo tra la linea $(A_i A_{i+1})$ e la verticale è massimo $\alpha$.
> 
> Intuitivamente, l'arrampicatore inizia da dove desidera sul terreno, raggiunge una prima presa a distanza $l$ entro un angolo limitato a $\alpha$, quindi prosegue il percorso montando sempre più in alto, fino a un totale di $n$ afferri. La figura 6 illustra una configurazione con due corsi distinti di colori diversi.
> 
> 1. In primo luogo, Mathis desidera posizionare le maniglie in modo da permettere di passare diversi tipi di corsi.
> 
> A) In questa domanda, Mathis vuole mettere una singola presa sul muro. Determinare le condizioni relative a $l_1, l_2 \in \mathbb{R}_+^*$ e $\alpha \in \left]0, \frac{\pi}{2}\right]$ che consentono il posizionamento di una singola presa in modo che vi sia un corso $l_1$ e un corso $l_2$, ognuno di dimensioni uguali a $1$. b) Let $n > 1$. In questa domanda, Mathis vuole mettere le maniglie sul muro. Determinare le condizioni di $l_1, l_2 \in \mathbb{R}_+^*$ e $\alpha$ in modo che ci siano $l_1$ corsi di dimensioni $n$ e $l_2$ corsi di dimensioni $1$ (griffi $n$), ognuno utilizzando un corso diverso.
> 
> 2. In questa domanda, supponiamo $\alpha < \frac{\pi}{2}$. Mathis vuole costruire una configurazione che permetta la coesistenza di due corsi con caratteristiche distinte: un corso $l_1$ di dimensioni $t_1$ e un corso $l_2$ di dimensioni $t_2$.
> 
> Determinare il numero minimo di agganci $N(l_1, l_2, t_1, t_2, \alpha)$ necessari per ottenere una configurazione contenente contemporaneamente un corso $l_1$ di dimensioni $t_1$ e un corso $l_2$ di dimensioni $t_2$.
> 
> 3. In questa domanda si può limitare al caso $\alpha = \frac{\pi}{2}$. Al fine di modellare il fatto che alcuni movimenti sono più esigenti di altri, Mathis desidera associare ad ogni passo di un percorso un movimento scelto tra diversi tipi, ad esempio un movimento facile (a distanza $l_1$) o un movimento difficile (a distanza $l_2$) con $l_1 < l_2$.
> 
> a) Let $n > 0$. Determinare, in funzione di $n$, $l_1$ e $l_2$, il numero minimo di maniglie che sarebbe necessario utilizzare per consentire l'esecuzione di movimenti $n$ da un determinato punto di partenza fisso $A_0$, scegliendo ad ogni passo tra un movimento facile e un movimento difficile. b) Ripetere la domanda precedente con più tipi di movimenti. Uno inizia con $3$ tipi di movimenti.
> 
> 4. Aprendo una vecchia scatola, Mathis scopre alcune manovre di arrampicata. Desidera disposirli sul muro per ottenere il maggior numero possibile di corsi realizzabili.
> 
> a) Per un angolo $\alpha$ e una lunghezza $l > 0$ fissa, e per le maniglie $n$, determinare l'arredamento delle maniglie $n$ che massimizzi il numero di corsi $l$ distinti possibili. Due corsi sono considerati uguali se passano esattamente attraverso le stesse manovre (il punto di partenza non conta). b) Discutere il caso in cui sono autorizzate diverse lunghezze di movimento (ad esempio $l_1 < l_2$), e proporre la configurazione che consente contemporaneamente un gran numero di corsi di diversi tipi.
> 
> Domanda complementare. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2026__Q05.png]]

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_combinatoria|Combinatoria]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]], [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*On a climbing wall modeled in the plane, define a 'path' of n grips each at distance l from the previous, going up within angle alpha of the vertical; find conditions for two distinct paths to coexist, the minimum number of grips, and arrangements maximizing the count of distinct paths.*

> 5. Climbing course.
> 
> In order to prepare the acrobatic activities for the next tournament of the TFJM$^2$, Mathis wishes to build anew a climbing wall that will let everyone enjoy themselves according to their abilities.
> 
> We call a configuration any set of points in the plane, called grips. These points represent the positions of the climbing grips available on the wall. The configuration models the geometric layout of the grips on the wall.
> 
> Let $\alpha \in \left]0, \frac{\pi}{2}\right]$ be a fixed real. For a real $l \in \mathbb{R}_+^*$, we call an $l$-course of size $n$ ($n \ge 1$) a succession of $n+1$ points $A_0, A_1, \dots, A_n$ verifying the following conditions:
> 
>    - the first point $A_0$ is situated on the ground (the $x$-axis), and the others are grips;
>    - for all $i \in \{0, \dots, n-1\}$, the distance between two successive points is $A_i A_{i+1} = l$;
>    - for all $i \in \{0, \dots, n-1\}$, the point $A_{i+1}$ is strictly above the point $A_i$ and the angle between the line $(A_i A_{i+1})$ and the vertical is at most $\alpha$.
> 
> Intuitively, the climber begins where he wishes on the ground, reaches a first grip at distance $l$ within an angle limited to $\alpha$, then pursues the course mounting higher and higher, up to a total of $n$ grips. Figure 6 illustrates a configuration with two distinct courses of different colours.
> 
> 1. As a first step, Mathis wishes to place grips so as to allow several types of courses to pass through.
> 
>    a) In this question, Mathis wants to place a single grip on the wall. Determine the conditions relating $l_1, l_2 \in \mathbb{R}_+^*$ and $\alpha \in \left]0, \frac{\pi}{2}\right]$ that allow the placement of a single grip so that there is both an $l_1$-course and an $l_2$-course, each of size equal to $1$.
>    b) Let $n > 1$. In this question, Mathis wants to place grips on the wall. Determine the conditions on $l_1, l_2 \in \mathbb{R}_+^*$ and $\alpha$ so that there are $l_1$-courses of size $n$ and $l_2$-courses of size $1$ ($n$ grips), each using a different course.
> 
> 2. In this question, suppose $\alpha < \frac{\pi}{2}$. Mathis wishes to build a configuration that permits the coexistence of two courses with distinct characteristics: an $l_1$-course of size $t_1$ and an $l_2$-course of size $t_2$.
> 
> Determine the minimal number of grips $N(l_1, l_2, t_1, t_2, \alpha)$ necessary to obtain a configuration containing at once an $l_1$-course of size $t_1$ and an $l_2$-course of size $t_2$.
> 
> 3. In this question, one may limit to the case $\alpha = \frac{\pi}{2}$. In order to model the fact that some movements are more demanding than others, Mathis wishes to associate to each step of a course a movement chosen among several types, for example an easy movement (at distance $l_1$) or a difficult movement (at distance $l_2$) with $l_1 < l_2$.
> 
>    a) Let $n > 0$. Determine, as a function of $n$, $l_1$ and $l_2$, the minimal number of grips it would be necessary to use to make it possible to perform $n$ movements from a certain fixed starting point $A_0$, choosing at each step between an easy and a difficult movement.
>    b) Repeat the previous question with more types of movements. One begins with $3$ types of movements.
> 
> 4. Opening an old box, Mathis discovers some climbing grips. He wishes to dispose them on the wall so as to obtain the largest possible number of realisable courses.
> 
>    a) For an angle $\alpha$ and a length $l > 0$ fixed, and $n$ grips, determine the arrangement of the $n$ grips that maximises the number of distinct $l$-courses possible. Two courses are considered the same if they pass through exactly the same grips (the starting point does not matter).
>    b) Discuss the case where several movement lengths are authorised (for example $l_1 < l_2$), and propose the configuration that permits simultaneously a large number of courses of different types.
> 
> Complementary question. Propose and study other directions of research.

![[src_tfjm_2026__Q05.png]]

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_combinatoria|Combinatoria]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,topic_probabilita,method_casework,method_conteggio,method_estremalita,method_colorazione,skill_conteggio_sistematico,skill_modellizzazione,skill_stima"></span>

<div class="qlang-switch" data-default="fr"></div>


*In an m x n grid of stools, people are ill at ease near occupied neighbours; study quasi-complete seatings and the max number seated, then variants with oriented seats facing distance 1, with water fountains replacing seats, and the expected number seated under uniform random arrival E(m,n).*

> 6. Malaise dans la salle d'attente
>
> Dans un grand hôpital d'une contrée lointaine, la salle d'attente est composée de tabourets qui forment une grille $m \times n$. L'hôpital cherche à maximiser la capacité de cette salle d'attente. Le problème est que les habitants de cette contrée sont très timides : ils se sentent mal à l'aise s'il y a quelqu'un assis sur l'un des quatre tabourets adjacents.
>
> On dit que la salle est quasi-complète si personne n'est mal à l'aise, et plus personne ne peut s'asseoir sans être mal à l'aise ou rendre quelqu'un d'autre mal à l'aise.
>
> 1. Dans cette question, le personnel de l'hôpital place les gens comme il le souhaite pour placer un maximum de personnes sans que personne ne mal à l'aise. Combien de personnes peut-il placer en fonction de $m$ et $n$ ?
>
> Pour les questions suivantes, chaque siège a une orientation fixée (Nord, Sud, Est ou Ouest), et chaque personne assise sur un siège regarde dans la direction associée, à une distance égale à $1$ (elle ne voit que l'éventuel siège à côté du sien, dans la direction de son regard). Encore une fois, personne ne veut être assis dans le champ de vision de quelqu'un d'autre.
>
> On appelle configuration un tableau associant à chaque chaise une orientation. Pour $D$ est une configuration, on définit $C_{\max}(D)$ comme le nombre maximal de personnes pouvant être placées sans créer de malaise, et $C_{\min}(D)$ comme le nombre minimal de personnes nécessaires pour que la salle soit quasi-complète. Voir Figure 7.
>
> 2. a) Que peut valoir $C_{\max}(D)$ au maximum (autrement dit, si l'hôpital choisit $D$ de manière optimale) ? On pourra commencer par $n = 1, 2, 3$.
>
>    b) Reprendre la question précédente pour $C_{\min}(D)$.
>
> Une vague de chaleur s'étant emparé de la salle d'attente, l'hôpital décide de remplacer certaines chaises par des fontaines à eau. Si une chaise est orientée dans la direction d'une fontaine, une personne s'y asseyant ne regarde que la fontaine, ne mettant personne mal à l'aise.
>
> Une configuration peut donc maintenant associer à chaque emplacement une chaise dans une certaine orientation comme précédemment, ou bien une fontaine. Voir Figure 8.
>
> 3. Soit $p \in \mathbb{N}^*$. Dans cette question uniquement, on suppose que, pour installer les fontaines, l'hôpital doit choisir $p$ rangées (verticales et/ou horizontales), et l'intégralité des chaises y est remplacé par des fontaines.
>
> Reprendre la question 2b) dans ce cadre, en fonction de $p$. On pourra commencer par $p = 1$.
>
> 4. Soit $p \in \mathbb{N}^*$. Dans cette question uniquement, on suppose que l'hôpital peut au contraire remplacer les $p$ chaises de son choix par des fontaines.
>
> Reprendre la question 2b) dans ce cadre, en fonction de $p$.
>
> 5. On revient dans la situation du début du problème, où les chaises sont des tabourets. Les personnes arrivent une par une et, lorsqu'une personne arrive, elle s'assoit sur un tabouret aléatoire choisi uniformément parmi les tabourets possibles (i.e. sans être mal à l'aise). On note $E(m, n)$ l'espérance du nombre de personnes pouvant s'asseoir.
>
> Estimer la valeur de $E(m, n)$ en fonction de $m$ et $n$.
>
> Question complémentaire. Proposer et étudier d'autres directions de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]], [[method_colorazione|Colorazione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)


<div class="qlang-split" data-lang="it"></div>


*In una griglia di sgabelli m x n, le persone si sentono a proprio agio vicino ai vicini occupati; studiare i sedili quasi completi e il numero massimo di posti seduti, quindi varianti con sedili orientati verso la distanza 1, con fontane d'acqua che sostituiscono i sedili, e il numero previsto di posti seduti sotto arrivo casuale uniforme E(m,n).*

> 6. Disagio nella sala d'attesa.
> 
> In un grande ospedale di un paese lontano, la sala d'attesa è composta da feci che formano una griglia di dimensioni $m \times n$. L'ospedale cerca di massimizzare la capacità utilizzabile di questa sala d'attesa. Il problema è che gli abitanti di questo paese non si sentono a proprio agio: si sentono a proprio agio se c'è uno sgabello occupato accanto a loro, cioè sgabello adiacente.
> 
> Diciamo che una configurazione è quasi completa quando nessuno si sente a suo agio, cioè nessun altro può sedersi senza essere malato a suo agio o rendere un altro malato a suo agio.
> 
> 1. In questo caso, il personale ospedaliero siede le persone come desiderano per poter collocare il massimo di persone senza che nessuno si senta a proprio agio. Quante persone possono sedersi in un posto, in funzione di $m$ e $n$?
> 
> Per le seguenti domande, ogni sedile ha un orientamento fisso (Nord, Sud, Est o Ovest), e ogni persona seduta su un sedile guarda accanto a esso, nella direzione associata, a una distanza pari a $1$ (il caso in cui il sedile è sul lato del muro, nella direzione in cui si guarda, fa sì che non si veda nessuno nel proprio campo visivo). Chiamiamo una configurazione qualsiasi tavolo associato a ciascun sedile un orientamento. Per una configurazione $D$, si definisce $C_{\max}(D)$ come il numero massimo di persone che possono essere posizionate senza disagio e $C_{\min}(D)$ come il numero minimo di persone necessario per rendere la stanza quasi completa.
> 
> 2. a) Quale valore $C_{\max}(D)$ assume al massimo (in particolare, l'ospedale sceglie $D$ in modo ottimale)? Si può iniziare con $n = 1, 2, 3$. b) Ripetere la domanda precedente per $C_{\min}(D)$.
> 
> Un'ondata di calore si impadronisce della stanza: l'ospedale decide di sostituire alcuni posti con fontane d'acqua. Se un sedile è orientato verso una fontana, la persona che si trova lì guarda la fontana e non si sente a proprio agio.
> 
> Una configurazione può ora associare a ciascuna posizione un sedile (con il suo orientamento, come prima) o una fontana. Vedi figura 8.
> 
> 3. Let $p \in \mathbb{N}^*$. Solo in questa domanda, supponiamo che l'ospedale installa fonti $p$. Ripetere la domanda 2b) in questa impostazione, come funzione di $p$. Uno inizia con $p = 1$.
> 
> 4. Let $p \in \mathbb{N}^*$. Solo in questa questione, supponiamo che l'ospedale possa sostituire invece i sedili $p$ di sua scelta con fontane. Ripetere la domanda 2b) in questa impostazione, come funzione di $p$.
> 
> 5. Torniamo alla situazione all'inizio del problema, in cui i sedili sono sgabelli. Le persone arrivano una per una e, quando una persona arriva, si siede su uno scavo scelto uniformemente a caso tra i possibili scavi (cioè dove non si sentirà a proprio agio). Indichiamo $E(m, n)$ il numero previsto di persone che possono sedersi.
> 
> Estimare il valore di $E(m, n)$ come funzione di $m$ e $n$.
> 
> Domanda complementare. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2026__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilita e statistica]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]], [[method_estremalita|Principio di estremalita]], [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_stima|Stima e approssimazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*In an m x n grid of stools, people are ill at ease near occupied neighbours; study quasi-complete seatings and the max number seated, then variants with oriented seats facing distance 1, with water fountains replacing seats, and the expected number seated under uniform random arrival E(m,n).*

> 6. Discomfort in the waiting room.
> 
> In a large hospital of a distant country, the waiting room is composed of stools forming a grid of size $m \times n$. The hospital seeks to maximise the usable capacity of this waiting room. The problem is that the inhabitants of this country are not at ease: they feel ill at ease if there is an occupied stool next to them, that is, adjacent stools.
> 
> We say a configuration is quasi-complete when no one is ill at ease, that is, no further person can be seated without either being ill at ease himself or making someone else ill at ease.
> 
> 1. In this question, the hospital staff seats people as they wish in order to place a maximum of persons without anyone being ill at ease. How many persons can one seat, as a function of $m$ and $n$?
> 
> For the following questions, each seat has a fixed orientation (North, South, East or West), and each person seated on a seat looks beside it, in the associated direction, at a distance equal to $1$ (the case where the seat is at the side of the wall, in the direction one looks, makes it so that one does not see anyone in one's field of vision). We call a configuration any table associating to each seat an orientation. For a configuration $D$, one defines $C_{\max}(D)$ as the maximal number of persons who can be placed without discomfort, and $C_{\min}(D)$ as the minimal number of persons necessary for the room to be quasi-complete.
> 
> 2. a) What value does $C_{\max}(D)$ take at its maximum (in particular, the hospital chooses $D$ in an optimal manner)? One may begin with $n = 1, 2, 3$.
>    b) Repeat the previous question for $C_{\min}(D)$.
> 
> A wave of heat takes over the room: the hospital decides to replace certain seats with water fountains. If a seat is oriented toward the direction of a fountain, the person seated there looks at the fountain and is not put ill at ease.
> 
> A configuration may now associate to each location either a seat (with its orientation, as before) or a fountain. See Figure 8.
> 
> 3. Let $p \in \mathbb{N}^*$. In this question only, suppose the hospital installs $p$ fountains. Repeat question 2b) in this setting, as a function of $p$. One begins with $p = 1$.
> 
> 4. Let $p \in \mathbb{N}^*$. In this question only, suppose that on the contrary the hospital may replace the $p$ seats of its choice with fountains. Repeat question 2b) in this setting, as a function of $p$.
> 
> 5. We return to the situation at the start of the problem, where the seats are stools. The persons arrive one by one and, when a person arrives, she sits on a stool chosen uniformly at random among the possible stools (i.e., where she will not be ill at ease). We denote $E(m, n)$ the expected number of persons who can be seated.
> 
> Estimate the value of $E(m, n)$ as a function of $m$ and $n$.
> 
> Complementary question. Propose and study other directions of research.

![[src_tfjm_2026__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]], [[method_colorazione|Colorazione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_casework,method_conteggio,method_fattorizzazione,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="fr"></div>


*Define a 'permutative' number whose double has the same digits except one digit (0 to 4) replaced by its double; 'rotative' moves the first digit to last and 'fitatory' moves the last digit to first. Decide existence and count such n-digit numbers, also in other bases.*

> 7. Double et chiffres
>
> On appelle nombre permutatif un nombre de $\mathbb{N}^*$ dont le double est constitué des mêmes chiffres dans un ordre quelconque, sauf un unique chiffre (compris entre $0$ et $4$) qui est remplacé par son double.
>
> Par exemple, $2 \times 163 = 326$ : son double est constitué des mêmes chiffres, sauf un chiffre $1$ qui est remplacé par un chiffre $2$. En revanche, le nombre $11$ n'est pas permutatif, car pour obtenir $2 \times 11 = 22$ il faudrait remplacer deux de ses chiffres par leurs doubles.
>
> Parmi ceux-là, on appelle :
>
> - nombre rotatif un nombre tel que la permutation consiste en faire passer le premier chiffre en dernier, et c'est ce chiffre qui est doublé. Par exemple, $253$ serait rotatif si son double était $534$.
> - nombre fitator un nombre tel que la permutation consiste en faire passer le dernier chiffre en premier, et c'est ce chiffre qui est doublé. Par exemple, $253$ serait fitator si son double était $625$.
>
> Le nombre $163$ n'est ni rotatif ni fitator. Voir la figure 9.
>
> 1. Soit $n \geq 2$.
>
>    a) Existe-t-il un nombre rotatif à $n$ chiffres ?
>
>    b) Déterminer (ou encadrer aussi précisément que possible) le nombre de nombres rotatifs à $n$ chiffres.
>
> 2. Soit $n \geq 2$.
>
>    a) Existe-t-il un nombre fitator à $n$ chiffres ?
>
>    b) Déterminer (ou encadrer aussi précisément que possible) le nombre de nombres fitators à $n$ chiffres.
>
> 3. Soit $n \geq 2$.
>
>    a) Soit $c \in \{0, 1, 2, \dots, 9\}$. Existe-t-il un nombre permutatif à $n$ chiffres qui finit par le chiffre $c$ ?
>
>    b) Déterminer (ou encadrer aussi précisément que possible) le nombre de nombres permutatifs à $n$ chiffres. En particulier, déterminer la limite de ce nombre divisé par $9 \times 10^{n-1}$, si elle existe. ($9 \times 10^{n-1}$ étant le nombre de nombres à $n$ chiffres.)
>
> 4. Reprendre la sous-question précédente dans d'autres bases de numérotation.
>
> Question complémentaire. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)


<div class="qlang-split" data-lang="it"></div>


*Definire un numero "permutativo" il cui doppio ha le stesse cifre tranne una cifra (0-4), sostituito dal doppio; "rotativo" sposta la prima cifra a durare e "fitatorio" sposta l'ultima cifra a durare. Decidere l'esistenza e contare tali numeri a n cifre, anche in altre basi.*

> 7. Doppio e cifre.
> 
> Chiamiamo un numero permutativo un numero di $\mathbb{N}^*$ il cui doppio è composto dalle stesse cifre in un ordine arbitrario, ad eccezione di una singola cifra (tra $0$ e $4$) che viene sostituita dal suo doppio.
> 
> Ad esempio, $2 \times 163 = 326$: il suo doppio è composto dalle stesse cifre, ad eccezione della cifra $1$ che viene sostituita dalla cifra $2$. Al contrario, il numero $11$ non è permutativo, perché per ottenere $2 \times 11 = 22$ si dovrebbe sostituire ciascuno dei numeri con il suo doppio.
> 
> Tra questi, distingueremo:
> 
> - un numero rotativo (nombre rotatif): un numero tale che la permutazione consiste nel spostare la prima cifra per la ultima, e è questa cifra che viene raddoppiata. Ad esempio, $253$ sarebbe rotabile se il suo doppio fosse $526$. - un numero fitatorio (nombre fitator): un numero tale che la permutazione consiste nel spostare l'ultima cifra al primo, ed è questa cifra che viene raddoppiata. Ad esempio, $253$ sarebbe fitatoria se il suo doppio fosse $625$.
> 
> Il numero $163$ non è né rotativo né fitatorio. Vedi figura 9.
> 
> 1. Let $n \ge 2$. a) Esiste un numero rotativo con cifre $n$? b) Determinare (o limitare con la massima precisione possibile) il numero di numeri rotativi con cifre $n$.
> 
> 2. Let $n \ge 2$. a) Esiste un numero fitatorio con cifre $n$? b) Determinare (o limitare con la massima precisione possibile) il numero di numeri di inserimento con cifre $n$.
> 
> 3. Let $n \ge 2$. a) Let $c \in \{0, 1, 2, \dots, 9\}$. Esiste un numero permutativo con cifre $n$ che termina con la cifra $c$? b) Determinare (o limitare con la massima precisione possibile) il numero di numeri permutativi con cifre $n$. In particolare, determinare il limite di questo numero diviso per $9 \times 10^{n-1}$, se esiste ($9 \times 10^{n-1}$ è il numero di numeri con cifre $n$).
> 
> 4. Ripetere la precedente sottoquestione per altre basi di numerazione.
> 
> Domanda complementare. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2026__Q07.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Define a 'permutative' number whose double has the same digits except one digit (0 to 4) replaced by its double; 'rotative' moves the first digit to last and 'fitatory' moves the last digit to first. Decide existence and count such n-digit numbers, also in other bases.*

> 7. Double and digits.
> 
> We call a permutative number (nombre permutatif) a number of $\mathbb{N}^*$ whose double is composed of the same digits in an arbitrary order, except for a single digit (between $0$ and $4$) which is replaced by its double.
> 
> For example, $2 \times 163 = 326$: its double is composed of the same digits, except the digit $1$ which is replaced by the digit $2$. Conversely, the number $11$ is not permutative, because to obtain $2 \times 11 = 22$ one would have to replace each of the digits by its double.
> 
> Among these, we distinguish:
> 
>    - a rotative number (nombre rotatif): a number such that the permutation consists in moving the first digit to last, and it is this digit that is doubled. For example, $253$ would be rotative if its double were $526$.
>    - a fitatory number (nombre fitator): a number such that the permutation consists in moving the last digit to first, and it is this digit that is doubled. For example, $253$ would be fitatory if its double were $625$.
> 
> The number $163$ is neither rotative nor fitatory. See Figure 9.
> 
> 1. Let $n \ge 2$.
>    a) Does there exist a rotative number with $n$ digits?
>    b) Determine (or bound as precisely as possible) the number of rotative numbers with $n$ digits.
> 
> 2. Let $n \ge 2$.
>    a) Does there exist a fitatory number with $n$ digits?
>    b) Determine (or bound as precisely as possible) the number of fitatory numbers with $n$ digits.
> 
> 3. Let $n \ge 2$.
>    a) Let $c \in \{0, 1, 2, \dots, 9\}$. Does there exist a permutative number with $n$ digits that ends with the digit $c$?
>    b) Determine (or bound as precisely as possible) the number of permutative numbers with $n$ digits. In particular, determine the limit of this number divided by $9 \times 10^{n-1}$, if it exists ($9 \times 10^{n-1}$ being the number of numbers with $n$ digits).
> 
> 4. Repeat the previous sub-question for other bases of numeration.
> 
> Complementary question. Propose and study other directions of research.

![[src_tfjm_2026__Q07.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,topic_logica,method_casework,method_conteggio,method_ricorsione,method_estremalita,skill_conteggio_sistematico,skill_riconoscimento_pattern,skill_stima"></span>

<div class="qlang-switch" data-default="fr"></div>


*Gaston's insertion-by-interval sorting algorithm G inserts a_k into the k-th position whose subinterval [(k-1)/k, k/k] it falls in; study fixed points, the count N(L) of preimages, its min/max over permutations, the iterated-sort count N'(L), and worst-case number of iterations to sort.*

> 8. Tri trop rapide
>
> Gaston souhaite trier par ordre croissant une liste de $N \geq 2$ nombres de $[0 ; 1[$ tous différents. Ne s'y connaissant pas trop en informatique, il propose l'algorithme suivant :
>
> - On numérote la liste de départ $[a_1 ; a_2 ; a_3 ; \cdots ; a_N]$ et on commence avec une liste d'arrivée vide.
> - On place $a_1$ dans la liste d'arrivée.
> - On place $a_2$ dans la liste d'arrivée : s'il est dans l'intervalle $[0 ; 1/2[$, on le met en premier, et s'il est dans l'intervalle $[1/2 ; 1[$ on le met en deuxième.
> - On place $a_3$ dans la liste d'arrivée : s'il est dans l'intervalle $[0 ; 1/3[$, on le met en premier ; s'il est dans l'intervalle $[1/3 ; 2/3[$ on le met en deuxième ; et s'il est dans l'intervalle $[2/3 ; 1[$ on le met en troisième.
> - Plus généralement, on place successivement $a_n$ dans la liste d'arrivée : on le met en $k$-ième position, où $k$ est tel que $a_n \in [(k - 1)/n ; k/n[$.
>
> Par exemple, à partir de la liste $[0{,}1 ; 0{,}8 ; 0{,}7 ; 0{,}2]$, Gaston obtient successivement $[0{,}1]$, $[0{,}1 ; 0{,}8]$, $[0{,}1 ; 0{,}8 ; 0{,}7]$ et enfin $[0{,}2 ; 0{,}1 ; 0{,}8 ; 0{,}7]$.
>
> On note $G$ la fonction qui correspond à l'algorithme de Gaston : $G([0{,}1 ; 0{,}8 ; 0{,}7 ; 0{,}2]) = [0{,}2 ; 0{,}1 ; 0{,}8 ; 0{,}7]$.
>
> On observe que cet algorithme ne permet pas toujours de trier la liste. L'objectif de ce problème est d'étudier dans quelle mesure il est efficace.
>
> Dans tout le problème, une liste est dite triée si elle est ordonnée dans l'ordre croissant.
>
> 1. Quelles listes $L$ triées vérifient $G(L) = L$ ?
>
> Voyant que le comportement de son algorithme dépend beaucoup de l'ordre dans lequel la liste de départ est ordonnée, Gaston décide de commencer par mélanger la liste avant d'appliquer son algorithme.
>
> Pour une liste $L$ de longueur $n$, on note $N(L)$ le nombre de listes $L'$ telles que $G(L') = L$. Noter que si $G(L') = L$, alors $L'$ est constituée des mêmes nombre que $L$, dans un ordre potentiellement différent. L'exemple précédent démontre que $N([0{,}2 ; 0{,}1 ; 0{,}8 ; 0{,}7]) \geq 1$, car il existe au moins une liste qui fonctionne.
>
> 2. Caractériser les listes $L$ telles que, pour toute permutation $L'$ de $L$, $N(L') = 1$.
>
> 3. Parmi les listes $L$ triées de longueur $n$, déterminer (ou encadrer aussi précisément que possible) la valeur minimale de $N(L)$. En particulier, on cherchera la limite du minimum de $\dfrac{N(L)}{n!}$ quand $n \to \infty$, si elle existe. (Autrement dit, à quel point l'algorithme peut-il être mauvais ?)
>
> 4. Reprendre la question précédente pour la valeur maximale de $N(L)$. (Autrement dit, à quel point l'algorithme peut-il être bon ?)
>
> 5. Soit $L$ une liste triée de longueur $n$. Est-il possible que, pour une permutation $L'$ de $L$, $N(L') > N(L)$ ? (Autrement dit, cet algorithme a-t-il toujours tendance à trier ?)
>
> Si oui, donner des exemples pour lesquelles cette inégalité est largement mise en défaut.
>
> Si non, caractériser les listes qui atteignent l'égalité.
>
> Voyant que son algorithme a du mal à trier toutes les listes, surtout les plus longues, Gaston a l'idée suivante pour améliorer ses chances de trier sa liste :
>
> - On applique une première fois l'algorithme.
> - Si on obtient une liste triée, on s'arrête. Sinon, on recommence à partir de la nouvelle liste.
>
> Par exemple, on a vu que $G([0{,}1 ; 0{,}8 ; 0{,}7 ; 0{,}2]) = [0{,}2 ; 0{,}1 ; 0{,}8 ; 0{,}7]$. Une étape ne suffit donc pas à trier. On continue : $G([0{,}2 ; 0{,}1 ; 0{,}8 ; 0{,}7]) = [0{,}1 ; 0{,}2 ; 0{,}7 ; 0{,}8]$. On a réussi à trier la liste, donc on s'arrête.
>
> Pour une liste $L$ de longueur $n$, on note $N'(L)$ le nombre de manières de former une liste que l'algorithme finit par trier, parmi les $n!$ permutations de $L$.
>
> Par exemple, les calculs précédents assurent que $N'([0{,}1 ; 0{,}2 ; 0{,}7 ; 0{,}8]) \geq 2$ car on a vu deux ordres ($[0{,}1 ; 0{,}8 ; 0{,}7 ; 0{,}2]$ et $[0{,}2 ; 0{,}1 ; 0{,}8 ; 0{,}7]$) à partir desquels la liste est triée.
>
> 6. Est-il possible, pour une liste $L$ triée, que $N(L)$ soit égal à $N'(L)$ ? (Autrement dit, itérer peut-il être inutile ?)
>
> Si oui, caractériser les listes qui le vérifient.
>
> Si non, quantifier l'écart minimal entre $N(L)$ et $N'(L)$.
>
> 7. Parmi les listes $L$ de longueur $n$, déterminer (ou encadrer aussi précisément que possible) la valeur maximale de $N'(L)$. En particulier, on cherchera la limite du maximum de $\dfrac{N'(L)}{n!}$ quand $n \to \infty$, si elle existe. (Autrement dit, à quel point l'algorithme peut-il être bon ?)
>
> 8. Parmi les listes $L$ de longueur $n$, déterminer (ou encadrer aussi précisément que possible) le nombre maximal d'étapes à effectuer pour trier la liste, au bout duquel toute liste soit a déjà été triée soit ne le sera jamais. (Autrement dit, à quel point l'algorithme peut-il être lent ?)
>
> Question complémentaire. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_ricorsione|Ricorsione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)


<div class="qlang-split" data-lang="it"></div>


*L'algoritmo di classificazione inserimento-per-intervallo di Gaston inserisce a_k nella posizione k-th in cui il subintervallo [(k-1)/k, k/k] cade; studiare i punti fissi, il conteggio N(L) delle preimmagini, la sua min/max sulle permutazioni, il conteggio di classificazione iterata N'(L), e il numero peggiore di iterazioni da ordinare.*

> 8. Sortando troppo velocemente.
> 
> Gaston desidera ordinare in ordine crescente un elenco di numeri $N \ge 2$ in $[0,1]$, tutti distinti. Non sapendo molto di calcolo, propone l'algoritmo seguente:
> 
> - Uno numerizza la lista di partenza $[a_1; a_2; a_3; \dots; a_N]$ e l'altro inizia con una lista di arrivi vuota. - Un posto $a_1$ nella lista degli arrivi. - Un posto $a_2$ nella lista degli arrivi: se si trova nell'intervallo $[0, 1/2]$, si pone in primo luogo, e se si trova nell'intervallo $[1/2; 1]$ si pone in secondo luogo. - inserire un $a_3$ nell'elenco degli arrivi: se si trova nell'intervallo $[0, 1/3]$, si inserisce in primo luogo; se si trova nell'intervallo $[1/3; 2/3]$, si inserisce in secondo luogo; e se si trova nell'intervallo $[2/3; 1]$, si inserisce in terzo luogo. - Più in generale, si inserisce successivamente $a_n$ nella lista degli arrivi: si inserisce nella posizione $k$-th, dove $k$ è tale che $a_n \in [(k-1)/n; k/n]$.
> 
> Ad esempio, partendo dall'elenco $[0.1; 0.8; 0.7; 0.2]$, Gaston ottiene successivamente $[0.1]$, $[0.1; 0.8]$, $[0.1; 0.7; 0.8]$ e infine $[0.2; 0.1; 0.7; 0.8]$.
> 
> Indichiamo $G$ la funzione corrispondente all'algoritmo di Gaston: $G([0.1; 0.8; 0.7; 0.2]) = [0.2; 0.1; 0.7; 0.8]$.
> 
> Si osserva che questo algoritmo non classifica sempre la lista. L'obiettivo di questo problema è quello di studiare la sua efficacia. In tutto il problema, si dice che un elenco sia ordinato se viene ordinato in ordine crescente.
> 
> 1. Quali elenchi classificati $L$ soddisfano $G(L) = L$?
> 
> Quando le liste non sono ordinate, il risultato dipende in gran parte dall'ordine in cui è ordinata la lista iniziale. Per un elenco $L$ di lunghezza $n$, indichiamo $N(L)$ il numero di elenco $L'$ tale che $G(L') = L$. Si noti che se $G(L') = L$, allora $L'$ è composto dai medesimi numeri di $L$, in qualche ordine possibilmente diverso. L'esempio precedente mostra che $N([0.2; 0.1; 0.8; 0.7]) \ge 1$, poiché esiste almeno un elenco che funziona.
> 
> 2. Caratterizzare gli elenchi $L$ in modo tale che, per ogni permutazione $L'$ di $L$, $N(L') = 1$.
> 
> 3. Tra le liste ordinate $L$ di lunghezza $n$, determinare (o limitare con la massima precisione possibile) il valore minimo di $N(L)$. In particolare, si cercherà il limite di questo minimo come $n \to \infty$, se esiste. (In altre parole, quanto male può essere l'algoritmo?)
> 
> 4. Ripetere la domanda precedente per il valore massimo di $N(L)$. (In altre parole, quanto può essere buono l'algoritmo?)
> 
> 5. $L$ sia un elenco ordinato di lunghezza $n$. È possibile che, per una certa permutazione $L'$ di $L$, $N(L') > N(L)$? (In altre parole, l'algoritmo tende sempre a ordinare?)
> 
> Quando le liste non sono ordinate, si può applicare di nuovo l'algoritmo alla lista ottenuta, e così via. Per un elenco $L$ di lunghezza $n$, indichiamo $N'(L)$ il numero di modi per formare l'elenco ordinato iterando l'algoritmo finché non si ferma.
> 
> 6. È possibile, per un elenco ordinato $L$, che $N(L)$ sia uguale a $N'(L)$? (In altre parole, è inutile ripetere?) Se sì, caratterizza le liste che raggiungono l'uguaglianza. Se no, quantificare il minimo di distanza tra $N(L)$ e $N'(L)$.
> 
> 7. Tra gli elenchi $L$ di lunghezza $n$, determinare (o limitare con la massima precisione possibile) il valore massimo di $N'(L)$. In particolare, si cercherà il limite di $\frac{N'(L)}{n!}$ come $n \to \infty$, se esiste. (In altre parole, quanto può essere buono l'algoritmo?)
> 
> 8. Tra gli elenchi $L$ di lunghezza $n$, determinare (o limitare con la massima precisione possibile) il numero massimo di passi da eseguire per ordinare l'elenco, dopo i quali ogni elenco è già stato ordinato o non lo sarà mai. (In altre parole, quanto può essere lento l'algoritmo?)
> 
> Domanda complementare. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2026__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]], [[method_ricorsione|Ricorsione]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_stima|Stima e approssimazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Gaston's insertion-by-interval sorting algorithm G inserts a_k into the k-th position whose subinterval [(k-1)/k, k/k] it falls in; study fixed points, the count N(L) of preimages, its min/max over permutations, the iterated-sort count N'(L), and worst-case number of iterations to sort.*

> 8. Sorting too fast.
> 
> Gaston wishes to sort in increasing order a list of $N \ge 2$ numbers in $[0,1]$, all distinct. Not knowing much about computing, he proposes the following algorithm:
> 
>    - One numbers the starting list $[a_1; a_2; a_3; \dots; a_N]$ and one begins with an empty arrival list.
>    - One places $a_1$ in the arrival list.
>    - One places $a_2$ in the arrival list: if it is in the interval $[0, 1/2]$, one puts it first, and if it is in the interval $[1/2; 1]$ one puts it second.
>    - One places $a_3$ in the arrival list: if it is in the interval $[0, 1/3]$, one puts it first; if it is in the interval $[1/3; 2/3]$ one puts it second; and if it is in the interval $[2/3; 1]$ one puts it third.
>    - More generally, one places $a_n$ successively in the arrival list: one puts it in the $k$-th position, where $k$ is such that $a_n \in [(k-1)/n; k/n]$.
> 
> For example, starting from the list $[0.1; 0.8; 0.7; 0.2]$, Gaston obtains successively $[0.1]$, $[0.1; 0.8]$, $[0.1; 0.7; 0.8]$ and finally $[0.2; 0.1; 0.7; 0.8]$.
> 
> We denote $G$ the function corresponding to Gaston's algorithm: $G([0.1; 0.8; 0.7; 0.2]) = [0.2; 0.1; 0.7; 0.8]$.
> 
> We observe that this algorithm does not always sort the list. The aim of this problem is to study to what extent it is efficient. Throughout the problem, a list is said to be sorted if it is ordered in increasing order.
> 
> 1. Which sorted lists $L$ satisfy $G(L) = L$?
> 
> When lists are not sorted, the result depends greatly on the order in which the starting list is arranged. For a list $L$ of length $n$, we denote $N(L)$ the number of lists $L'$ such that $G(L') = L$. Note that if $G(L') = L$, then $L'$ is composed of the same numbers as $L$, in some possibly different order. The previous example shows that $N([0.2; 0.1; 0.8; 0.7]) \ge 1$, since there exists at least one list that works.
> 
> 2. Characterise the lists $L$ such that, for every permutation $L'$ of $L$, $N(L') = 1$.
> 
> 3. Among the sorted lists $L$ of length $n$, determine (or bound as precisely as possible) the minimal value of $N(L)$. In particular, one will look for the limit of this minimum as $n \to \infty$, if it exists. (In other words, how bad can the algorithm be?)
> 
> 4. Repeat the previous question for the maximal value of $N(L)$. (In other words, how good can the algorithm be?)
> 
> 5. Let $L$ be a sorted list of length $n$. Is it possible that, for some permutation $L'$ of $L$, $N(L') > N(L)$? (In other words, does the algorithm always tend to sort?)
> 
> When the lists are not sorted, one may apply the algorithm again to the obtained list, and so on. For a list $L$ of length $n$, we denote $N'(L)$ the number of ways to form the sorted list by iterating the algorithm until it stops.
> 
> 6. Is it possible, for a sorted list $L$, that $N(L)$ is equal to $N'(L)$? (In other words, is iterating useless?) If yes, characterise the lists that attain equality. If no, quantify the minimal gap between $N(L)$ and $N'(L)$.
> 
> 7. Among the lists $L$ of length $n$, determine (or bound as precisely as possible) the maximal value of $N'(L)$. In particular, one will look for the limit of $\frac{N'(L)}{n!}$ as $n \to \infty$, if it exists. (In other words, how good can the algorithm be?)
> 
> 8. Among the lists $L$ of length $n$, determine (or bound as precisely as possible) the maximal number of steps to perform to sort the list, after which every list has either already been sorted or never will be. (In other words, how slow can the algorithm be?)
> 
> Complementary question. Propose and study other directions of research.

![[src_tfjm_2026__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_ricorsione|Ricorsione]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_stima|Stima]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)
