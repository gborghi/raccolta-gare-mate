---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019
tipo: gara
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019
family: tfjm
year: '2019'
level: TFJM²
---
<div class="atom-reader" data-gara="Quesiti/src_tfjm_2019"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,topic_geometria_piana,method_casework,method_conteggio,method_estremalita,method_grafi,skill_modellizzazione,skill_conteggio_sistematico,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="fr"></div>


*Maison rectangulaire cloisonnée avec des bimurs de longueur 2 : plans valides, sorties et boucles.*

> 1. Une commande disproportionnée
>
> Donald vient de construire une maison rectangulaire de taille $a \times b$, avec $a$ et $b$ des entiers $\geqslant 2$, décomposée en cases carrées de côté $1$. Il ne veut que des couloirs : chaque case interne (qui n’est pas sur un bord) doit avoir exactement deux cases voisines. Une case externe (sur un bord) peut en avoir deux, ou une seule. Dans ce dernier cas, c’est une sortie.
>
> Donald n’a que des bimurs, c’est-à-dire des cloisons de longueur $2$. Deux bimurs peuvent se croiser en un point, mais ils ne peuvent pas se superposer.
>
> Figure 1. Exemple de plan $8 \times 4$ valide.
> Figure 2. Trois plans $4 \times 3$ invalides. À gauche, la case interne orange n’a qu’une voisine ; au centre, la case externe orange en a trois ; à droite, la cloison orange ne peut pas être construite avec des bimurs.
> Figure 3. Ensemble constructible de cases externes sur un plan $8 \times 4$, réalisé par la figure 1.
> Figure 4. Plan $5 \times 3$ constructible sans bimurs consécutifs.
>
> 1. Étant donné un plan, comment déterminer s’il est constructible avec des bimurs ? Le cas échéant, de combien de manières ? Commencer par de petites valeurs de $a$ et $b$.
>
> Un ensemble de cases externes est constructible s’il existe un plan, possible avec des bimurs, dont les sorties sont exactement les cases choisies.
>
> 2. En fonction de $a$ et $b$, existe-t-il des ensembles constructibles constitués uniquement de cases dans les coins ? Si oui, les décrire.
>
> Certaines zones peuvent ne contenir aucune sortie : ce sont des boucles. Sur la figure 1, les deux boucles contiennent respectivement $4$ et $8$ cases.
>
> 3. Combien de cases une boucle peut-elle contenir ?
>
> 4. En fonction de $a$ et $b$, peut-on construire une maison où deux bimurs ne sont jamais consécutifs (ils ne forment jamais un mur de longueur $4$ ou plus) ? Le plan de la figure 4 est valide, celui de la figure 1 ne l’est plus. Proposer des constructions générales lorsque c’est possible.
>
> 5. En fonction de $a$ et $b$, quelles cases externes appartiennent à un ensemble constructible ? Combien d’éléments un ensemble constructible peut-il contenir ?
>
> 6. En fonction de $a$ et $b$, caractériser les ensembles constructibles.
>
> 7. Vladimir a commandé des trimurs, c’est-à-dire des murs de longueur $3$. Reprendre le problème dans ce cas, puis pour des $m$-murs.
>
> 8. Proposer et étudier d’autres pistes de recherche.

![[src_tfjm_2019__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoire]], [[topic_geometria_piana|Géométrie plane]]
**Metodo:** [[method_casework|Analyse par cas]], [[method_conteggio|Dénombrement]], [[method_estremalita|Principe d'extrémalité]], [[method_grafi|Théorie des graphes]]
**Abilita:** [[skill_modellizzazione|Modélisation]], [[skill_conteggio_sistematico|Dénombrement systématique]], [[skill_ragionamento_geometrico|Raisonnement géométrique]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]], [[Geometria|Géométrie]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/17R031cXNi14VUsGINAxDROVxCLgJqOX-/view)


<div class="qlang-split" data-lang="it"></div>


*Casa rettangolare tramezzata con bimuri di lunghezza 2: piante valide, uscite e anelli.*

> 1. Un ordine sproporzionato
>
> Donald ha costruito una casa rettangolare di taglia $a \times b$, con $a$ e $b$ interi $\geqslant 2$, suddivisa in quadretti di lato $1$. Vuole solo corridoi: ogni casella interna (non sul bordo) deve avere esattamente due caselle vicine. Una casella esterna (sul bordo) può averne due, oppure una sola. In quest’ultimo caso è un’uscita.
>
> Donald ha solo bimuri, cioè tramezzi di lunghezza $2$. Due bimuri possono incrociarsi in un punto, ma non possono sovrapporsi.
>
> Figura 1. Esempio di pianta $8 \times 4$ valida.
> Figura 2. Tre piante $4 \times 3$ non valide. A sinistra, la casella interna arancione ha una sola vicina; al centro, la casella esterna arancione ne ha tre; a destra, il tramezzo arancione non si può costruire con bimuri.
> Figura 3. Insieme costruibile di caselle esterne su una pianta $8 \times 4$, realizzato dalla Figura 1.
> Figura 4. Pianta $5 \times 3$ costruibile senza bimuri consecutivi.
>
> 1. Data una pianta, come stabilire se è costruibile con bimuri? In caso affermativo, in quanti modi? Cominciare da piccoli valori di $a$ e $b$.
>
> Un insieme di caselle esterne è costruibile se esiste una pianta, possibile con bimuri, le cui uscite sono esattamente le caselle scelte.
>
> 2. In funzione di $a$ e $b$, esistono insiemi costruibili formati solo da caselle d’angolo? Se sì, descriverli.
>
> Alcune zone possono non contenere alcuna uscita: sono anelli. Nella Figura 1 i due anelli contengono rispettivamente $4$ e $8$ caselle.
>
> 3. Quante caselle può contenere un anello?
>
> 4. In funzione di $a$ e $b$, si può costruire una casa in cui due bimuri non sono mai consecutivi (non formano mai un muro di lunghezza $4$ o più)? La pianta della Figura 4 è valida, quella della Figura 1 no. Proporre costruzioni generali quando è possibile.
>
> 5. In funzione di $a$ e $b$, quali caselle esterne appartengono a un insieme costruibile? Quanti elementi può contenere un insieme costruibile?
>
> 6. In funzione di $a$ e $b$, caratterizzare gli insiemi costruibili.
>
> 7. Vladimir ha ordinato trimuri, cioè muri di lunghezza $3$. Riprendere il problema in questo caso, e poi per gli $m$-muri.
>
> 8. Si propongano e si studino altre piste di ricerca.

![[src_tfjm_2019__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]], [[method_estremalita|Principio di estremalita]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]


<div class="qlang-split" data-lang="en"></div>


*A rectangular house partitioned with biwalls of length 2: valid plans, exits and loops.*

> 1. An oversized order
>
> Donald has built a rectangular house of size $a \times b$, with $a$ and $b$ integers $\geqslant 2$, tiled by unit squares. He wants only corridors: every internal square (not on the boundary) must have exactly two neighbouring squares. An external square (on the boundary) may have two, or only one. In the latter case it is an exit.
>
> Donald has only biwalls, that is, partitions of length $2$. Two biwalls may cross at a point, but they may not overlap.
>
> Figure 1. A valid plan of size $8 \times 4$.
> Figure 2. Three invalid plans of size $4 \times 3$. On the left, the orange internal square has only one neighbour; in the centre, the orange external square has three; on the right, the orange partition cannot be built from biwalls.
> Figure 3. A constructible set of external squares on an $8 \times 4$ plan, realised by Figure 1.
> Figure 4. A $5 \times 3$ plan that can be built with no two biwalls in a row.
>
> 1. Given a plan, how can one tell whether it can be built from biwalls? If so, in how many ways? Begin with small values of $a$ and $b$.
>
> A set of external squares is constructible if there is a plan, possible with biwalls, whose exits are exactly the chosen squares.
>
> 2. As a function of $a$ and $b$, are there constructible sets made only of corner squares? If so, describe them.
>
> Some regions may contain no exit: these are loops. In Figure 1 the two loops contain $4$ and $8$ squares respectively.
>
> 3. How many squares can a loop contain?
>
> 4. As a function of $a$ and $b$, can one build a house in which two biwalls are never consecutive (they never form a wall of length $4$ or more)? The plan in Figure 4 is valid; the plan in Figure 1 is not. Give general constructions when this is possible.
>
> 5. As a function of $a$ and $b$, which external squares belong to some constructible set? How many elements can a constructible set contain?
>
> 6. As a function of $a$ and $b$, characterise the constructible sets.
>
> 7. Vladimir ordered triwalls, that is, walls of length $3$. Answer the problem in that case, and then for $m$-walls.
>
> 8. Propose and study other lines of inquiry.

![[src_tfjm_2019__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_casework|Case analysis]], [[method_conteggio|Combinatorial counting]], [[method_estremalita|Extremal principle]], [[method_grafi|Graph theory]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_conteggio_sistematico|Systematic counting]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Geometria|Geometry]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_algebra,topic_combinatoria,method_estremalita,method_casework,skill_modellizzazione,skill_manipolazione_algebrica,skill_stima,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="fr"></div>


*Trois promeneurs, deux vélos : minimiser le temps de retour, puis variantes avec demi-tour, pente et trottinettes.*

> 2. Balade à vélo
>
> Martin, Anna et Carole rentrent d’une promenade, mais le vélo de Martin a été volé. Il reste deux vélos pour trois. Un promeneur à pied va à vitesse $1$, un promeneur à vélo à vitesse $v \in \mathbb{R}$, $v > 1$. Au départ, les trois amis et les deux vélos sont au point de départ, à distance $1$ de chez eux. Un promeneur peut prendre un vélo qui se trouve au même endroit que lui, ou poser son vélo et continuer à pied. On suppose d’abord qu’ils ne reviennent jamais en arrière.
>
> Pour $v = 2$, une organisation possible est la suivante. À $t = 0$, Anna et Carole partent à vélo, Martin à pied. À $t = 1/4$, à mi-chemin, Carole pose son vélo et continue à pied ; Anna continue à vélo. À $t = 1/2$, Martin récupère le vélo de Carole et Anna arrive au bout. À $t = 3/4$, Martin et Carole arrivent ensemble. Dans cet exemple, $T = 3/4$.
>
> Figure 5. Une organisation possible pour Martin, Anna et Carole.
>
> Ils cherchent à minimiser la durée $T$ pour que les trois soient arrivés. On note $T_{\min}$ ce minimum.
>
> 1. En fonction de $v$, que vaut $T_{\min}$ ? Donner une organisation telle que $T = T_{\min}$.
>
> 2. Il y a maintenant $n$ promeneurs et $k$ vélos, avec $0 < k < n$. Que vaut $T_{\min}$ en fonction de $v$, $k$ et $n$ ? Comment l’atteindre ? On pourra commencer par $k = 1$, $k = 2$ et $k = n - 1$.
>
> 3. Les promeneurs peuvent revenir en arrière, et un cycliste peut transporter un vélo supplémentaire (un seul). Reprendre les questions précédentes, si cela améliore $T_{\min}$.
>
> 4. Le chemin est en pente. Un vélo posé seul se déplace à vitesse $p \in \mathbb{R}$ : $p > 0$ si le chemin descend (le vélo avance seul), $p < 0$ s’il monte (le vélo recule seul). Reprendre les questions précédentes en fonction de $p$.
>
> 5. Il y a $k$ vélos de vitesse $v$ et $\ell$ trottinettes de vitesse $w$. Reprendre les questions précédentes.
>
> 6. Proposer et étudier d’autres pistes de recherche.

![[src_tfjm_2019__Q02.png]]

**Topic:** [[topic_algebra|Algèbre]], [[topic_combinatoria|Combinatoire]]
**Metodo:** [[method_estremalita|Principe d'extrémalité]], [[method_casework|Analyse par cas]]
**Abilita:** [[skill_modellizzazione|Modélisation]], [[skill_manipolazione_algebrica|Manipulation algébrique]], [[skill_stima|Estimation et approximation]], [[skill_casework_accurato|Analyse par cas soigneuse]]
**Area:** [[Algebra e Analisi|Algèbre et analyse]], [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/17R031cXNi14VUsGINAxDROVxCLgJqOX-/view)


<div class="qlang-split" data-lang="it"></div>


*Tre persone, due biciclette: minimizzare il tempo del ritorno, poi varianti con inversione, pendenza e monopattini.*

> 2. Gita in bicicletta
>
> Martin, Anna e Carole tornano a casa, ma la bicicletta di Martin è stata rubata. Restano due biciclette per tre. Chi va a piedi ha velocità $1$, chi va in bicicletta ha velocità $v \in \mathbb{R}$, $v > 1$. All’inizio i tre e le due biciclette sono al punto di partenza, a distanza $1$ da casa. Un pedone può prendere una bicicletta che si trova nello stesso punto, oppure posarla e continuare a piedi. Dapprima non tornano mai indietro.
>
> Per $v = 2$, un’organizzazione possibile è la seguente. A $t = 0$, Anna e Carole partono in bicicletta, Martin a piedi. A $t = 1/4$, a metà strada, Carole posa la bicicletta e continua a piedi; Anna continua in bicicletta. A $t = 1/2$, Martin recupera la bicicletta di Carole e Anna arriva. A $t = 3/4$, Martin e Carole arrivano insieme. In questo esempio, $T = 3/4$.
>
> Figura 5. Un’organizzazione possibile per Martin, Anna e Carole.
>
> Cercano di minimizzare il tempo $T$ perché tutti e tre siano arrivati. Si indica con $T_{\min}$ questo minimo.
>
> 1. In funzione di $v$, quanto vale $T_{\min}$? Dare un’organizzazione con $T = T_{\min}$.
>
> 2. Ci sono ora $n$ persone e $k$ biciclette, con $0 < k < n$. Quanto vale $T_{\min}$ in funzione di $v$, $k$ e $n$? Come ottenerlo? Si può cominciare da $k = 1$, $k = 2$ e $k = n - 1$.
>
> 3. Si può tornare indietro, e un ciclista può trasportare una bicicletta in più (una sola). Si riprendano le domande precedenti, se questo migliora $T_{\min}$.
>
> 4. Il sentiero è in pendenza. Una bicicletta lasciata sola si muove a velocità $p \in \mathbb{R}$: $p > 0$ se il sentiero scende (la bicicletta avanza da sola), $p < 0$ se sale (la bicicletta torna indietro da sola). Si riprendano le domande precedenti in funzione di $p$.
>
> 5. Ci sono $k$ biciclette di velocità $v$ e $\ell$ monopattini di velocità $w$. Si riprendano le domande precedenti.
>
> 6. Si propongano e si studino altre piste di ricerca.

![[src_tfjm_2019__Q02.png]]

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima e approssimazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Three walkers, two bicycles: minimise the time to get home, then variants with turning back, a slope, and scooters.*

> 2. A bicycle ride
>
> Martin, Anna and Carole are heading home, but Martin’s bicycle has been stolen. Two bicycles remain for three people. A walker moves at speed $1$, a cyclist at speed $v \in \mathbb{R}$, $v > 1$. At the start the three friends and the two bicycles are at the starting point, at distance $1$ from home. A walker may take a bicycle that is at the same place, or set a bicycle down and continue on foot. At first they never go backwards.
>
> For $v = 2$, one possible plan is as follows. At $t = 0$, Anna and Carole set off by bicycle, Martin on foot. At $t = 1/4$, halfway, Carole sets her bicycle down and walks on; Anna keeps cycling. At $t = 1/2$, Martin picks up Carole’s bicycle and Anna arrives. At $t = 3/4$, Martin and Carole arrive together. In this example, $T = 3/4$.
>
> Figure 5. One possible plan for Martin, Anna and Carole.
>
> They want to minimise the time $T$ until all three have arrived. Write $T_{\min}$ for this minimum.
>
> 1. As a function of $v$, what is $T_{\min}$? Give a plan with $T = T_{\min}$.
>
> 2. There are now $n$ walkers and $k$ bicycles, with $0 < k < n$. What is $T_{\min}$ as a function of $v$, $k$ and $n$? How is it achieved? One may begin with $k = 1$, $k = 2$ and $k = n - 1$.
>
> 3. The walkers may go backwards, and a cyclist may carry one extra bicycle. Answer the previous questions again, if this improves $T_{\min}$.
>
> 4. The path slopes. A bicycle left alone moves at speed $p \in \mathbb{R}$: $p > 0$ if the path goes downhill (the bicycle rolls forward), $p < 0$ if it goes uphill (the bicycle rolls back). Answer the previous questions as a function of $p$.
>
> 5. There are $k$ bicycles of speed $v$ and $\ell$ scooters of speed $w$. Answer the previous questions in this setting.
>
> 6. Propose and study other lines of inquiry.

![[src_tfjm_2019__Q02.png]]

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_estremalita|Extremal principle]], [[method_casework|Case analysis]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_stima|Estimation and approximation]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,method_casework,method_conteggio,method_estremalita,skill_modellizzazione,skill_conteggio_sistematico,skill_riconoscimento_pattern,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="fr"></div>


*Ranger des trains sur des impasses, des voies à sens unique ou à double sens, pour qu’ils repartent dans l’ordre voulu.*

> 3. Entrée en gare
>
> Julie doit ranger $n$ trains pour la nuit. Ils arrivent dans un ordre qu’elle ne choisit pas, et doivent repartir dans un ordre fixé : le train « 1 » part le premier, le « 2 » en deuxième, et ainsi de suite. À l’arrivée, Julie choisit la voie. Le lendemain, le premier train à partir doit accéder directement à la sortie, sans être bloqué, et de même pour les suivants.
>
> Chaque voie peut contenir jusqu’à $n$ trains consécutifs. Il y a trois types de voies :
> - les impasses : les trains arrivent par la gauche le soir et repartent par la gauche le matin ;
> - les voies à sens unique : ils arrivent par la gauche et repartent par la droite ;
> - les voies à double sens : ils peuvent arriver et repartir des deux côtés.
>
> Si Julie peut faire repartir tous les trains dans l’ordre avec les voies dont elle dispose, l’ordre d’arrivée est admissible. Avec une seule impasse et trois trains, $(3, 2, 1)$ est admissible, mais pas $(1, 2, 3)$.
>
> Figure 6. Exemple pour $6$ trains, une voie de chaque type. L’ordre d’arrivée $(1, 5, 3, 4, 6, 2)$ est admissible. Sur la voie à double sens, on peut entrer par la droite ou par la gauche.
>
> 1. La gare n’a qu’une seule voie. À quelle condition un ordre d’arrivée est-il admissible :
> a) si la voie est une impasse ?
> b) si elle est à sens unique ?
> c) si elle est à double sens ?
>
> Soit un entier $p \geqslant 2$ qui divise $n$. Les trains arrivent dans l’ordre
> $$(p, p-1, \ldots, 1,\ 2p, 2p-1, \ldots, 2p-(p-1),\ \ldots,\ n, n-1, \ldots, n-(p-1)).$$
>
> 2. Quel est le nombre minimal de voies pour que cet ordre soit admissible :
> a) si toutes les voies sont des impasses ?
> b) si elles sont toutes à sens unique ?
> c) si elles sont toutes à double sens ?
>
> 3. Quel est le plus petit nombre de voies pour lequel tous les ordres d’arrivée sont admissibles :
> a) si toutes les voies sont des impasses ?
> b) si elles sont toutes à sens unique ?
> c) si elles sont toutes à double sens ?
>
> 4. Il n’y a qu’une voie, à double sens. Une machine permet à un train de passer au-dessus d’un autre, en une heure. Dans le pire des cas, combien de temps faut-il pour traiter les $n$ trains ?
>
> 5. Reprendre la question précédente avec plusieurs voies, éventuellement des impasses ou des voies à sens unique.
>
> 6. Proposer et étudier d’autres pistes de recherche.

![[src_tfjm_2019__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoire]]
**Metodo:** [[method_casework|Analyse par cas]], [[method_conteggio|Dénombrement]], [[method_estremalita|Principe d'extrémalité]]
**Abilita:** [[skill_modellizzazione|Modélisation]], [[skill_conteggio_sistematico|Dénombrement systématique]], [[skill_riconoscimento_pattern|Reconnaissance de motifs]], [[skill_casework_accurato|Analyse par cas soigneuse]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/17R031cXNi14VUsGINAxDROVxCLgJqOX-/view)


<div class="qlang-split" data-lang="it"></div>


*Ricoverare treni su binari morti, a senso unico o a doppio senso, perché ripartano nell’ordine voluto.*

> 3. Ingresso in stazione
>
> Julie deve ricoverare $n$ treni per la notte. Arrivano in un ordine che lei non sceglie, e devono ripartire in un ordine fissato: il treno «1» parte per primo, il «2» per secondo, e così via. All’arrivo Julie sceglie il binario. L’indomani il primo treno a partire deve raggiungere l’uscita direttamente, senza essere bloccato, e lo stesso per i successivi.
>
> Ogni binario può contenere fino a $n$ treni consecutivi. Ci sono tre tipi di binario:
> - i binari morti: i treni arrivano da sinistra la sera e ripartono a sinistra la mattina;
> - i binari a senso unico: arrivano da sinistra e ripartono a destra;
> - i binari a doppio senso: possono arrivare e ripartire da entrambi i lati.
>
> Se Julie riesce a far ripartire tutti i treni nell’ordine con i binari di cui dispone, l’ordine di arrivo è ammissibile. Con un solo binario morto e tre treni, $(3, 2, 1)$ è ammissibile, $(1, 2, 3)$ no.
>
> Figura 6. Esempio con $6$ treni e un binario di ciascun tipo. L’ordine di arrivo $(1, 5, 3, 4, 6, 2)$ è ammissibile. Sul binario a doppio senso si può entrare da destra o da sinistra.
>
> 1. La stazione ha un solo binario. A quale condizione un ordine di arrivo è ammissibile:
> a) se il binario è morto?
> b) se è a senso unico?
> c) se è a doppio senso?
>
> Sia $p \geqslant 2$ un intero che divide $n$. I treni arrivano nell’ordine
> $$(p, p-1, \ldots, 1,\ 2p, 2p-1, \ldots, 2p-(p-1),\ \ldots,\ n, n-1, \ldots, n-(p-1)).$$
>
> 2. Qual è il minimo numero di binari perché questo ordine sia ammissibile:
> a) se tutti i binari sono morti?
> b) se sono tutti a senso unico?
> c) se sono tutti a doppio senso?
>
> 3. Qual è il minimo numero di binari per cui ogni ordine di arrivo è ammissibile:
> a) se tutti i binari sono morti?
> b) se sono tutti a senso unico?
> c) se sono tutti a doppio senso?
>
> 4. C’è un solo binario, a doppio senso. Una macchina permette a un treno di passare sopra un altro, in un’ora. Nel caso peggiore, quanto tempo serve per trattare gli $n$ treni?
>
> 5. Si riprenda la domanda precedente con più binari, eventualmente morti o a senso unico.
>
> 6. Si propongano e si studino altre piste di ricerca.

![[src_tfjm_2019__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Storing trains on dead ends, one-way tracks or two-way tracks so that they leave in the required order.*

> 3. Into the station
>
> Julie must store $n$ trains for the night. They arrive in an order she does not choose, and must leave in a fixed order: train “1” leaves first, “2” second, and so on. When a train arrives, Julie chooses the track. The next morning the first train to leave must reach the exit directly, without being blocked, and likewise for the trains that follow.
>
> Each track holds up to $n$ consecutive trains. There are three kinds of track:
> - dead ends: trains arrive from the left in the evening and leave to the left in the morning;
> - one-way tracks: they arrive from the left and leave to the right;
> - two-way tracks: they may arrive and leave from either side.
>
> If Julie can send every train out in order with the tracks she has, the arrival order is admissible. With a single dead end and three trains, $(3, 2, 1)$ is admissible, but $(1, 2, 3)$ is not.
>
> Figure 6. An example with $6$ trains and one track of each kind. The arrival order $(1, 5, 3, 4, 6, 2)$ is admissible. On the two-way track one may enter from the right or from the left.
>
> 1. The station has only one track. When is an arrival order admissible:
> a) if the track is a dead end?
> b) if it is one-way?
> c) if it is two-way?
>
> Let $p \geqslant 2$ be an integer that divides $n$. The trains arrive in the order
> $$(p, p-1, \ldots, 1,\ 2p, 2p-1, \ldots, 2p-(p-1),\ \ldots,\ n, n-1, \ldots, n-(p-1)).$$
>
> 2. What is the least number of tracks that makes this order admissible:
> a) if every track is a dead end?
> b) if every track is one-way?
> c) if every track is two-way?
>
> 3. What is the least number of tracks such that every arrival order is admissible:
> a) if every track is a dead end?
> b) if every track is one-way?
> c) if every track is two-way?
>
> 4. There is a single two-way track. A machine lets one train pass over another, and this takes one hour. In the worst case, how long does it take to handle the $n$ trains?
>
> 5. Answer the previous question with several tracks, which may include dead ends or one-way tracks.
>
> 6. Propose and study other lines of inquiry.

![[src_tfjm_2019__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_casework|Case analysis]], [[method_conteggio|Combinatorial counting]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_conteggio_sistematico|Systematic counting]], [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_combinatoria,topic_probabilita,topic_logica,method_casework,method_conteggio,method_estremalita,method_backward,skill_modellizzazione,skill_conteggio_sistematico,skill_stima"></span>

<div class="qlang-switch" data-default="fr"></div>


*Piles de boîtes à pizza : garantir une pizza végétarienne, avec une hauteur de pièce finie et une pizza placée au hasard.*

> 4. Pizzas végétariennes
>
> Sophie a devant elle $p$ piles ($p \geqslant 2$) qui contiennent respectivement $a_1, a_2, \ldots, a_p$ boîtes, chaque boîte contenant une pizza. Parmi les $n = a_1 + a_2 + \cdots + a_p$ pizzas, exactement $k$ sont végétariennes. Chaque minute, Sophie prend la boîte du dessus d’une pile, l’ouvre, puis la repose sur le dessus d’une pile (la même ou une autre). Elle ne peut pas créer une $(p+1)$-ième pile.
>
> On note $M_k(a_1, \ldots, a_p)$ le plus petit entier tel que Sophie a une stratégie qui lui garantit de trouver une pizza végétarienne en ce nombre de minutes, quelle que soit la position des pizzas végétariennes. Par exemple, $M_1(1, 2) = 3$.
>
> 1. Estimer $M_k(a_1, \ldots, a_p)$ en fonction de $p$ et de $k$. Traiter d’abord :
> a) $k = n - 1$ ;
> b) $p = 2$ et $k = 1$ ;
> c) $p$ quelconque et $k = 1$ ;
> d) $p = 2$ et $k$ quelconque ;
> e) $a_1 = a_2 = \cdots = a_p = k$ ;
> f) $a_1 = a_2 = \cdots = a_p$ et $k$ quelconque.
>
> La pièce a maintenant une hauteur $h$, avec $a_i \leqslant h$ pour tout $i$. Les boîtes ont épaisseur $1$ : Sophie ne peut pas empiler plus de $h$ boîtes sur une même pile.
>
> 2. En fonction de $p$, $n$ et $k$, pour quelles valeurs de $h$ Sophie peut-elle s’assurer de trouver une pizza végétarienne, quelle que soit la disposition initiale ? On pourra reprendre les cas de la question 1.
>
> 3. Dans le même cadre, on note $M_k^{h}(a_1, \ldots, a_p)$ le plus petit entier tel que Sophie a une stratégie qui lui garantit de trouver une pizza végétarienne en ce nombre de minutes, si une telle stratégie existe. Estimer $M_k^{h}(a_1, \ldots, a_p)$.
>
> 4. La pièce est de nouveau de hauteur infinie, et les piles sont alignées de gauche à droite. Sophie ne peut reposer une boîte que sur une pile voisine, ou sur la même pile. Reprendre les questions 1 et 3.
>
> 5. Maintenant $k = 1$, et la pizza végétarienne a été placée uniformément au hasard dans l’une des $n$ boîtes : chaque boîte la contient avec probabilité $\dfrac{1}{n}$. Sophie veut minimiser le temps moyen. Reprendre les questions précédentes.
>
> 6. Proposer et étudier d’autres pistes de recherche.

![[src_tfjm_2019__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoire]], [[topic_probabilita|Probabilités et statistique]], [[topic_logica|Logique, jeux, stratégies]]
**Metodo:** [[method_casework|Analyse par cas]], [[method_conteggio|Dénombrement]], [[method_estremalita|Principe d'extrémalité]], [[method_backward|Raisonnement à rebours]]
**Abilita:** [[skill_modellizzazione|Modélisation]], [[skill_conteggio_sistematico|Dénombrement systématique]], [[skill_stima|Estimation et approximation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/17R031cXNi14VUsGINAxDROVxCLgJqOX-/view)


<div class="qlang-split" data-lang="it"></div>


*Pile di scatole di pizza: garantirsi una pizza vegetariana, con altezza finita e una pizza messa a caso.*

> 4. Pizze vegetariane
>
> Sophie ha davanti $p$ pile ($p \geqslant 2$) che contengono rispettivamente $a_1, a_2, \ldots, a_p$ scatole, ciascuna con una pizza. Tra le $n = a_1 + a_2 + \cdots + a_p$ pizze, esattamente $k$ sono vegetariane. Ogni minuto prende la scatola in cima a una pila, la apre, e la ripone in cima a una pila (la stessa o un’altra). Non può creare una $(p+1)$-esima pila.
>
> Si indica con $M_k(a_1, \ldots, a_p)$ il minimo intero tale che Sophie ha una strategia che le garantisce di trovare una pizza vegetariana in quel numero di minuti, qualunque sia la posizione delle pizze vegetariane. Per esempio, $M_1(1, 2) = 3$.
>
> 1. Stimare $M_k(a_1, \ldots, a_p)$ in funzione di $p$ e di $k$. Trattare prima:
> a) $k = n - 1$;
> b) $p = 2$ e $k = 1$;
> c) $p$ arbitrario e $k = 1$;
> d) $p = 2$ e $k$ arbitrario;
> e) $a_1 = a_2 = \cdots = a_p = k$;
> f) $a_1 = a_2 = \cdots = a_p$ e $k$ arbitrario.
>
> La stanza ha ora altezza $h$, con $a_i \leqslant h$ per ogni $i$. Le scatole hanno spessore $1$: Sophie non può impilare più di $h$ scatole sulla stessa pila.
>
> 2. In funzione di $p$, $n$ e $k$, per quali valori di $h$ Sophie può garantirsi di trovare una pizza vegetariana, qualunque sia la disposizione iniziale? Si possono riprendere i casi della domanda 1.
>
> 3. Nello stesso quadro, si indica con $M_k^{h}(a_1, \ldots, a_p)$ il minimo intero tale che Sophie ha una strategia che le garantisce di trovare una pizza vegetariana in quel numero di minuti, se una tale strategia esiste. Stimare $M_k^{h}(a_1, \ldots, a_p)$.
>
> 4. La stanza è di nuovo di altezza infinita, e le pile sono allineate da sinistra a destra. Sophie può riporre una scatola solo su una pila vicina, o sulla stessa pila. Si riprendano le domande 1 e 3.
>
> 5. Ora $k = 1$, e la pizza vegetariana è stata messa a caso, in modo uniforme, in una delle $n$ scatole: ogni scatola la contiene con probabilità $\dfrac{1}{n}$. Sophie vuole minimizzare il tempo medio. Si riprendano le domande precedenti.
>
> 6. Si propongano e si studino altre piste di ricerca.

![[src_tfjm_2019__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilita e statistica]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]], [[method_estremalita|Principio di estremalita]], [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima e approssimazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Stacks of pizza boxes: guaranteeing a vegetarian pizza, with a finite room height and a pizza placed at random.*

> 4. Vegetarian pizzas
>
> Sophie has $p$ stacks ($p \geqslant 2$) containing $a_1, a_2, \ldots, a_p$ boxes respectively, each box holding one pizza. Among the $n = a_1 + a_2 + \cdots + a_p$ pizzas, exactly $k$ are vegetarian. Each minute she takes the top box of a stack, opens it, and puts it back on top of a stack (the same one or another). She cannot create a $(p+1)$-st stack.
>
> Write $M_k(a_1, \ldots, a_p)$ for the least integer such that Sophie has a strategy guaranteeing that she finds a vegetarian pizza in that many minutes, wherever the vegetarian pizzas are. For example, $M_1(1, 2) = 3$.
>
> 1. Estimate $M_k(a_1, \ldots, a_p)$ in terms of $p$ and $k$. Begin with:
> a) $k = n - 1$;
> b) $p = 2$ and $k = 1$;
> c) $p$ arbitrary and $k = 1$;
> d) $p = 2$ and $k$ arbitrary;
> e) $a_1 = a_2 = \cdots = a_p = k$;
> f) $a_1 = a_2 = \cdots = a_p$ and $k$ arbitrary.
>
> The room now has height $h$, with $a_i \leqslant h$ for every $i$. The boxes have thickness $1$: Sophie cannot stack more than $h$ boxes on one pile.
>
> 2. As a function of $p$, $n$ and $k$, for which values of $h$ can Sophie guarantee that she finds a vegetarian pizza, whatever the initial arrangement? One may use the cases of question 1.
>
> 3. In the same setting, write $M_k^{h}(a_1, \ldots, a_p)$ for the least integer such that Sophie has a strategy guaranteeing a vegetarian pizza in that many minutes, if such a strategy exists. Estimate $M_k^{h}(a_1, \ldots, a_p)$.
>
> 4. The room is again of infinite height, and the stacks stand in a row from left to right. Sophie may put a box back only on a neighbouring stack, or on the same stack. Answer questions 1 and 3 again.
>
> 5. Now $k = 1$, and the vegetarian pizza was placed uniformly at random in one of the $n$ boxes: each box contains it with probability $\dfrac{1}{n}$. Sophie wants to minimise the average time. Answer the previous questions again.
>
> 6. Propose and study other lines of inquiry.

![[src_tfjm_2019__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_probabilita|Probability and statistics]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]], [[method_conteggio|Combinatorial counting]], [[method_estremalita|Extremal principle]], [[method_backward|Working backwards]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_conteggio_sistematico|Systematic counting]], [[skill_stima|Estimation and approximation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,topic_combinatoria,method_casework,method_estremalita,method_simmetria,method_grafi,method_conteggio,skill_ragionamento_geometrico,skill_modellizzazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="fr"></div>


*Cloisonner un disque pour que des candidats aux sommets d’un $n$-gone ne se voient pas, avec trois types de cloisons.*

> 5. Espions sous surveillance
>
> L’épreuve a lieu dans un disque de rayon $1$. Les tables des candidats sont sur le bord et forment un $n$-gone régulier. Il faut cloisonner la salle pour que les candidats ne se voient pas. Une cloison joint deux points de la salle, sauf si elle passe exactement par la table d’un candidat. Deux cloisons se coupent lorsque les segments s’intersectent, sauf si le point d’intersection est une extrémité.
>
> Figure 7. Exemple avec $n = 7$ et des cloisons Kôrde. La cloison empêche les candidats $1$ et $3$ de se voir, mais pas $3$ et $5$.
>
> Les cloisons Kôrde sont de toutes tailles, mais elles doivent être fixées aux murs.
>
> 1. Quel est le nombre minimal de cloisons pour cloisonner la salle :
> a) si les cloisons peuvent se couper ?
> b) si elles ne peuvent pas se couper ?
>
> Désormais, deux cloisons ne peuvent pas se couper. Il y a $p$ postes et $k$ candidats par poste, soit $n = pk$ candidats, toujours aux sommets d’un $n$-gone régulier. Pour chaque poste, les $k$ candidats sont répartis de façon quelconque parmi les $n$ tables.
>
> 2. Trouver le plus petit entier $m$ tel que Tristan soit sûr d’empêcher la triche avec $m$ cloisons Kôrde, quelle que soit la répartition, dans les cas :
> a) $p = 2$ et $k$ quelconque ;
> b) $k = 2$ et $p$ quelconque ;
> c) $p$ et $k$ quelconques.
> Ici, deux candidats au même poste ne doivent pas se voir.
>
> 3. Tristan s’est trompé : deux candidats au même poste peuvent se voir, mais des candidats à des postes différents ne doivent pas se voir. Reprendre la question 2.
>
> Figure 8. Exemple avec $n = 7$ et des cloisons Tayfix. Elles empêchent les candidats $2$ et $7$ de se voir, mais pas $3$ et $5$. Les extrémités des cloisons bloquent la vue.
>
> Les cloisons Tayfix ont une longueur fixe $L \in \mathbb{R}$, et peuvent être placées n’importe où dans le disque.
>
> 4.
> a) Pour quelles valeurs de $L$ peut-on cloisonner la salle, pour $n = 2, 3, 4, 5$ ?
> b) Pour quelles valeurs de $n$ existe-t-il une longueur $L > 1$ permettant de cloisonner la salle ?
> c) En fonction de $n$, estimer le plus grand $L$ tel qu’on puisse cloisonner la salle avec des cloisons de longueur $L$. Existe-t-il un réel $L > 1$ pour lequel c’est toujours possible, quel que soit $n$ ?
>
> Figure 9. Exemple avec $n = 7$ et des piliers Unkalibr. Ils empêchent les candidats $2$ et $6$ de se voir, mais pas $1$ et $4$.
>
> Les piliers sont des disques de rayon $r \in \mathbb{R}$, inclus dans la salle, sans se recouvrir ; ils peuvent être tangents.
>
> 5. En fonction de $n$, pour quels rayons $r$ peut-on cloisonner la salle avec des piliers ? Commencer par de petites valeurs de $n$, puis borner $r$ dans le cas général.
>
> 6. Proposer et étudier d’autres pistes de recherche.

![[src_tfjm_2019__Q05.png]]

**Topic:** [[topic_geometria_piana|Géométrie plane]], [[topic_combinatoria|Combinatoire]]
**Metodo:** [[method_casework|Analyse par cas]], [[method_estremalita|Principe d'extrémalité]], [[method_simmetria|Exploitation de la symétrie]], [[method_grafi|Théorie des graphes]], [[method_conteggio|Dénombrement]]
**Abilita:** [[skill_ragionamento_geometrico|Raisonnement géométrique]], [[skill_modellizzazione|Modélisation]], [[skill_casework_accurato|Analyse par cas soigneuse]]
**Area:** [[Geometria|Géométrie]], [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/17R031cXNi14VUsGINAxDROVxCLgJqOX-/view)


<div class="qlang-split" data-lang="it"></div>


*Tramezzare un disco perché i candidati ai vertici di un $n$-gono non si vedano, con tre tipi di tramezzo.*

> 5. Spie sotto sorveglianza
>
> La prova si svolge in un disco di raggio $1$. I tavoli dei candidati stanno sul bordo e formano un $n$-gono regolare. Bisogna tramezzare la sala perché i candidati non si vedano. Un tramezzo unisce due punti della sala, salvo se passa esattamente per il tavolo di un candidato. Due tramezzi si tagliano quando i segmenti si intersecano, a meno che il punto d’intersezione sia un estremo.
>
> Figura 7. Esempio con $n = 7$ e tramezzi Kôrde. Il tramezzo impedisce ai candidati $1$ e $3$ di vedersi, ma non a $3$ e $5$.
>
> I tramezzi Kôrde hanno lunghezza qualunque, ma vanno fissati alle pareti.
>
> 1. Qual è il minimo numero di tramezzi per chiudere la sala:
> a) se i tramezzi possono tagliarsi?
> b) se non possono tagliarsi?
>
> D’ora in poi due tramezzi non possono tagliarsi. Ci sono $p$ posti e $k$ candidati per posto, cioè $n = pk$ candidati, sempre ai vertici di un $n$-gono regolare. Per ogni posto, i $k$ candidati sono disposti in modo arbitrario tra gli $n$ tavoli.
>
> 2. Trovare il minimo intero $m$ tale che Tristan sia sicuro di impedire di copiare con $m$ tramezzi Kôrde, qualunque sia la disposizione, nei casi:
> a) $p = 2$ e $k$ arbitrario;
> b) $k = 2$ e $p$ arbitrario;
> c) $p$ e $k$ arbitrari.
> Qui due candidati allo stesso posto non devono vedersi.
>
> 3. Tristan ha capito male: due candidati allo stesso posto possono vedersi, ma candidati a posti diversi non devono vedersi. Si riprenda la domanda 2.
>
> Figura 8. Esempio con $n = 7$ e tramezzi Tayfix. Impediscono ai candidati $2$ e $7$ di vedersi, ma non a $3$ e $5$. Gli estremi dei tramezzi bloccano la visuale.
>
> I tramezzi Tayfix hanno lunghezza fissa $L \in \mathbb{R}$ e possono essere posti in qualunque punto del disco.
>
> 4.
> a) Per quali valori di $L$ si può chiudere la sala, per $n = 2, 3, 4, 5$?
> b) Per quali valori di $n$ esiste una lunghezza $L > 1$ che chiude la sala?
> c) In funzione di $n$, stimare il massimo $L$ tale che si possa chiudere la sala con tramezzi di lunghezza $L$. Esiste un reale $L > 1$ per cui questo è sempre possibile, qualunque sia $n$?
>
> Figura 9. Esempio con $n = 7$ e pilastri Unkalibr. Impediscono ai candidati $2$ e $6$ di vedersi, ma non a $1$ e $4$.
>
> I pilastri sono dischi di raggio $r \in \mathbb{R}$, contenuti nella sala, senza sovrapporsi; possono essere tangenti.
>
> 5. In funzione di $n$, per quali raggi $r$ si può chiudere la sala con dei pilastri? Cominciare da piccoli $n$, poi stimare $r$ nel caso generale.
>
> 6. Si propongano e si studino altre piste di ricerca.

![[src_tfjm_2019__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]], [[method_simmetria|Sfruttamento della simmetria]], [[method_grafi|Teoria dei grafi]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Partitioning a disc so that candidates at the vertices of a regular $n$-gon cannot see one another, with three kinds of partition.*

> 5. Spies under watch
>
> The test takes place in a disc of radius $1$. The candidates’ desks lie on the boundary and form a regular $n$-gon. The room must be partitioned so that the candidates cannot see one another. A partition joins two points of the room, except if it passes exactly through a desk. Two partitions cross when the segments meet, unless the meeting point is an endpoint.
>
> Figure 7. An example with $n = 7$ and Kôrde partitions. The partition stops candidates $1$ and $3$ from seeing each other, but not $3$ and $5$.
>
> Kôrde partitions may have any length, but they must be fixed to the walls.
>
> 1. What is the least number of partitions that closes the room:
> a) if partitions may cross?
> b) if they may not cross?
>
> From now on, two partitions may not cross. There are $p$ posts and $k$ candidates for each post, so $n = pk$ candidates, still at the vertices of a regular $n$-gon. For each post, the $k$ candidates are placed arbitrarily among the $n$ desks.
>
> 2. Find the least integer $m$ such that Tristan can be sure of preventing cheating with $m$ Kôrde partitions, whatever the placement, in the cases:
> a) $p = 2$ and $k$ arbitrary;
> b) $k = 2$ and $p$ arbitrary;
> c) $p$ and $k$ arbitrary.
> Here, two candidates for the same post must not see each other.
>
> 3. Tristan misunderstood: two candidates for the same post may see each other, but candidates for different posts must not. Answer question 2 again.
>
> Figure 8. An example with $n = 7$ and Tayfix partitions. They stop candidates $2$ and $7$ from seeing each other, but not $3$ and $5$. The endpoints of a partition block the view.
>
> Tayfix partitions have a fixed length $L \in \mathbb{R}$, and may be placed anywhere in the disc.
>
> 4.
> a) For which values of $L$ can the room be closed, for $n = 2, 3, 4, 5$?
> b) For which values of $n$ is there a length $L > 1$ that closes the room?
> c) As a function of $n$, estimate the greatest $L$ such that the room can be closed with partitions of length $L$. Is there a real $L > 1$ for which this is always possible, whatever $n$?
>
> Figure 9. An example with $n = 7$ and Unkalibr pillars. They stop candidates $2$ and $6$ from seeing each other, but not $1$ and $4$.
>
> The pillars are discs of radius $r \in \mathbb{R}$, contained in the room, and they may not overlap; they may be tangent.
>
> 5. As a function of $n$, for which radii $r$ can the room be closed with pillars? Begin with small $n$, then bound $r$ in general.
>
> 6. Propose and study other lines of inquiry.

![[src_tfjm_2019__Q05.png]]

**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_casework|Case analysis]], [[method_estremalita|Extremal principle]], [[method_simmetria|Using symmetry]], [[method_grafi|Graph theory]], [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_modellizzazione|Modelling / translating the text]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,method_grafi,method_estremalita,method_casework,method_colorazione,method_invarianti,skill_modellizzazione,skill_astrazione,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="fr"></div>


*Caméléons sur un graphe : un changement de couleur se propage aux amis de même couleur, et l’on étudie $D_k(G)$.*

> 6. Caméléons
>
> Les caméléons sont les sommets d’un graphe, et les amitiés en sont les arêtes. Ils prennent $k$ couleurs, numérotées de $1$ à $k$. Un caméléon passe de la couleur $i$ à la couleur $j$ soit parce que Victor le lui demande, soit parce qu’un ami de couleur $i$ vient de passer à la couleur $j$. Quand Victor demande à un caméléon $A$ de changer de couleur, tous les amis de $A$ qui avaient la même couleur que $A$ font de même, puis leurs amis, et ainsi de suite.
>
> Soit $G$ le graphe et $C$ un coloriage initial. La difficulté de $C$ est le nombre minimal de demandes pour que tous les caméléons aient la même couleur. On note $D_k(G)$ la difficulté maximale d’un coloriage de $G$ à $k$ couleurs.
>
> Figure 10. Exemple avec $k = 3$ et $6$ caméléons. Victor demande trois changements, et à la fin tous sont de la même couleur.
>
> On note $P_n$ le chemin à $n$ sommets.
>
> Figure 11. Le segment $P_5$.
>
> 1. Déterminer ou encadrer $D_k(P_n)$ :
> a) pour $k = 2$ ;
> b) pour $k = 3$ ;
> c) pour $k$ quelconque.
>
> On note $R_{n,m}$ le réseau rectangulaire $n \times m$.
>
> 2. La suite $\bigl(D_k(R_{n,n})\bigr)_{n \in \mathbb{N}}$ est-elle croissante ?
>
> 3. Déterminer ou encadrer $D_k(R_{n,m})$ en fonction de $k$, $n$ et $m$.
>
> Figure 12. Le rectangle $R_{3,3}$.
>
> 4. Soit $G$ un graphe connexe. Dans chacun des cas suivants, $D_k$ peut-il augmenter ? Diminuer ? Si oui, de combien au maximum ?
> a) Un nouveau caméléon rompt le lien entre deux amis et devient l’ami de chacun d’eux.
> b) Deux caméléons deviennent amis.
> c) Un nouveau caméléon devient ami avec deux caméléons, pas nécessairement amis entre eux.
>
> 5. Victor ne s’adresse plus qu’à un seul caméléon, choisi au départ. Quel est l’effet de cette contrainte :
> a) pour le chemin $P_n$ ?
> b) pour le rectangle $R_{n,m}$ ?
> c) en général ?
>
> 6. Soient $s$ et $a$ deux entiers. Parmi les graphes connexes à $s$ sommets et $a$ arêtes, lesquels minimisent $D_k(G)$ ? Lesquels le maximisent ? Commencer par $a = s - 1$, $a = 2s$ et $a = \dfrac{s(s-1)}{2}$.
>
> 7. Proposer et étudier d’autres pistes de recherche.

![[src_tfjm_2019__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoire]]
**Metodo:** [[method_grafi|Théorie des graphes]], [[method_estremalita|Principe d'extrémalité]], [[method_casework|Analyse par cas]], [[method_colorazione|Coloriage / parité]], [[method_invarianti|Invariants]]
**Abilita:** [[skill_modellizzazione|Modélisation]], [[skill_astrazione|Abstraction / généralisation]], [[skill_ragionamento_geometrico|Raisonnement géométrique]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/17R031cXNi14VUsGINAxDROVxCLgJqOX-/view)


<div class="qlang-split" data-lang="it"></div>


*Camaleonti su un grafo: un cambio di colore si propaga agli amici dello stesso colore, e si studia $D_k(G)$.*

> 6. Camaleonti
>
> I camaleonti sono i vertici di un grafo, e le amicizie ne sono gli spigoli. Assumono $k$ colori, numerati da $1$ a $k$. Un camaleonte passa dal colore $i$ al colore $j$ o perché Victor glielo chiede, o perché un amico di colore $i$ è appena passato al colore $j$. Quando Victor chiede a un camaleonte $A$ di cambiare colore, tutti gli amici di $A$ che avevano lo stesso colore di $A$ fanno lo stesso, poi i loro amici, e così via.
>
> Sia $G$ il grafo e $C$ una colorazione iniziale. La difficoltà di $C$ è il minimo numero di richieste perché tutti i camaleonti abbiano lo stesso colore. Si indica con $D_k(G)$ la difficoltà massima di una colorazione di $G$ con $k$ colori.
>
> Figura 10. Esempio con $k = 3$ e $6$ camaleonti. Victor chiede tre cambiamenti, e alla fine tutti hanno lo stesso colore.
>
> Si indica con $P_n$ il cammino di $n$ vertici.
>
> Figura 11. Il segmento $P_5$.
>
> 1. Determinare o stimare $D_k(P_n)$:
> a) per $k = 2$;
> b) per $k = 3$;
> c) per $k$ arbitrario.
>
> Si indica con $R_{n,m}$ il reticolo rettangolare $n \times m$.
>
> 2. La successione $\bigl(D_k(R_{n,n})\bigr)_{n \in \mathbb{N}}$ è crescente?
>
> 3. Determinare o stimare $D_k(R_{n,m})$ in funzione di $k$, $n$ e $m$.
>
> Figura 12. Il rettangolo $R_{3,3}$.
>
> 4. Sia $G$ un grafo connesso. In ciascuno dei casi seguenti, $D_k$ può aumentare? Diminuire? Se sì, di quanto al massimo?
> a) Un nuovo camaleonte rompe il legame tra due amici e diventa amico di ciascuno dei due.
> b) Due camaleonti diventano amici.
> c) Un nuovo camaleonte diventa amico di due camaleonti, non necessariamente amici tra loro.
>
> 5. Victor si rivolge ormai a un solo camaleonte, scelto all’inizio. Qual è l’effetto di questo vincolo:
> a) per il cammino $P_n$?
> b) per il rettangolo $R_{n,m}$?
> c) in generale?
>
> 6. Siano $s$ e $a$ due interi. Tra i grafi connessi con $s$ vertici e $a$ spigoli, quali minimizzano $D_k(G)$? Quali lo massimizzano? Cominciare da $a = s - 1$, $a = 2s$ e $a = \dfrac{s(s-1)}{2}$.
>
> 7. Si propongano e si studino altre piste di ricerca.

![[src_tfjm_2019__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]], [[method_estremalita|Principio di estremalita]], [[method_casework|Analisi per casi]], [[method_colorazione|Colorazione / parita]], [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Chameleons on a graph: a colour change spreads to friends of the same colour, and one studies $D_k(G)$.*

> 6. Chameleons
>
> The chameleons are the vertices of a graph, and friendships are the edges. They take $k$ colours, numbered from $1$ to $k$. A chameleon changes from colour $i$ to colour $j$ either because Victor asks it to, or because a friend of colour $i$ has just changed to colour $j$. When Victor asks a chameleon $A$ to change colour, every friend of $A$ that had the same colour as $A$ does the same, then their friends, and so on.
>
> Let $G$ be the graph and $C$ an initial colouring. The difficulty of $C$ is the least number of requests that makes every chameleon the same colour. Write $D_k(G)$ for the greatest difficulty of a colouring of $G$ with $k$ colours.
>
> Figure 10. An example with $k = 3$ and $6$ chameleons. Victor asks for three changes, and at the end all have the same colour.
>
> Write $P_n$ for the path on $n$ vertices.
>
> Figure 11. The path $P_5$.
>
> 1. Determine or bound $D_k(P_n)$:
> a) for $k = 2$;
> b) for $k = 3$;
> c) for arbitrary $k$.
>
> Write $R_{n,m}$ for the $n \times m$ grid.
>
> 2. Is the sequence $\bigl(D_k(R_{n,n})\bigr)_{n \in \mathbb{N}}$ increasing?
>
> 3. Determine or bound $D_k(R_{n,m})$ as a function of $k$, $n$ and $m$.
>
> Figure 12. The grid $R_{3,3}$.
>
> 4. Let $G$ be a connected graph. In each of the following cases, can $D_k$ increase? Decrease? If so, by how much at most?
> a) A new chameleon breaks the link between two friends and becomes a friend of each of them.
> b) Two chameleons become friends.
> c) A new chameleon becomes a friend of two chameleons, not necessarily friends of each other.
>
> 5. Victor now speaks only to a single chameleon, chosen at the start. What is the effect of this constraint:
> a) for the path $P_n$?
> b) for the grid $R_{n,m}$?
> c) in general?
>
> 6. Let $s$ and $a$ be integers. Among the connected graphs with $s$ vertices and $a$ edges, which ones minimise $D_k(G)$? Which ones maximise it? Begin with $a = s - 1$, $a = 2s$ and $a = \dfrac{s(s-1)}{2}$.
>
> 7. Propose and study other lines of inquiry.

![[src_tfjm_2019__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_grafi|Graph theory]], [[method_estremalita|Extremal principle]], [[method_casework|Case analysis]], [[method_colorazione|Colouring / parity]], [[method_invarianti|Invariants / monovariants]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_astrazione|Abstraction / generalisation]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_conteggio,method_casework,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="fr"></div>


*Chocolats passés en ligne : quand la répartition est équilibrée, et quels lots de boîtes donnent une distribution équitable.*

> 7. Distribution de chocolats
>
> Les $n$ petits-enfants de Papi Théo sont en ligne, numérotés de $1$ à $n$. Chaque jour il ouvre une boîte. Le premier jour, l’enfant $1$ la reçoit, prend un chocolat et la passe à son voisin, et ainsi de suite. Le jour $j$, c’est l’enfant $j$ (modulo $n$, en revenant à $1$ après $n$) qui reçoit la boîte pleine. Quand la boîte arrive à l’enfant $n$, elle passe ensuite à l’enfant $1$.
>
> Le jour $j$, la boîte contient $j$ chocolats. La figure 13 montre $4$ enfants après $5$ jours : ils ont reçu respectivement $5$, $3$, $4$ et $3$ chocolats.
>
> Figure 13. Quatre petits-enfants après cinq jours.
>
> Une configuration est équilibrée si, à cet instant, tous les enfants ont reçu le même nombre de chocolats.
>
> 1. Selon $n$, la configuration est-elle équilibrée après $n$ jours ?
>
> 2. Selon $n$, existe-t-il un jour à la fin duquel la configuration est équilibrée ? Si oui, quel est le premier ?
>
> On note $b(j)$ le nombre de chocolats le jour $j$. Les questions précédentes correspondent à $b(j) = j$.
>
> 3. Tous les $d$ jours, on repart de zéro : $b(j)$ est le reste de la division euclidienne de $j$ par $d$. Selon $n$ et $d$, existe-t-il un jour à la fin duquel la configuration est équilibrée ? Si oui, quel est le premier ?
>
> Papi Théo choisit maintenant $d$ entiers $(b_1, \ldots, b_d)$ et pose $b(j) = b_\ell$, où $\ell$ est le reste de la division euclidienne de $j$ par $d$. Le cas précédent est $b_i = i$ pour $1 \leqslant i < d$ et $b_d = 0$.
>
> 4. Selon $n$, $d$ et des entiers positifs $(c_1, \ldots, c_n)$, peut-on choisir $(b_1, \ldots, b_d)$ de sorte qu’après $\mathrm{PPCM}(n, d)$ jours l’enfant $i$ ait reçu exactement $c_i$ chocolats, pour tout $1 \leqslant i \leqslant n$ ?
>
> Un mode de distribution est équitable s’il existe une infinité de jours à la fin desquels la configuration est équilibrée.
>
> Un lot $(h_1, \ldots, h_d)$ vérifie $0 \leqslant h_1 \leqslant h_2 \leqslant \cdots \leqslant h_d$. Il est raisonnable s’il existe une permutation $(b_1, \ldots, b_d)$ de ses tailles qui donne un mode équitable. Pour $n = 4$ et $d = 4$, le lot $(1, 1, 3, 3)$ est raisonnable, car $(b_1, b_2, b_3, b_4) = (1, 3, 1, 3)$ est équitable. Le lot $(0, 1, 1, 3)$ ne l’est pas.
>
> 5. Si l’on fixe $n$, pour quelles valeurs de $d$ tous les lots sont-ils raisonnables ?
>
> 6. Quelles sont les conditions nécessaires et suffisantes pour qu’un lot donné soit raisonnable ?
>
> 7. Si $b(j) = j^2$, la distribution est-elle équitable ? Et si $b(j) = j^k$ pour un autre entier $k$ ?
>
> 8. Proposer et étudier d’autres pistes de recherche.

![[src_tfjm_2019__Q07.png]]

**Topic:** [[topic_aritmetica|Arithmétique / théorie des nombres]], [[topic_combinatoria|Combinatoire]]
**Metodo:** [[method_congruenze|Arithmétique modulaire / congruences]], [[method_conteggio|Dénombrement]], [[method_casework|Analyse par cas]]
**Abilita:** [[skill_manipolazione_algebrica|Manipulation algébrique]], [[skill_riconoscimento_pattern|Reconnaissance de motifs]], [[skill_conteggio_sistematico|Dénombrement systématique]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmétique et théorie des nombres]], [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/17R031cXNi14VUsGINAxDROVxCLgJqOX-/view)


<div class="qlang-split" data-lang="it"></div>


*Cioccolatini passati in fila: quando la ripartizione è equilibrata, e quali lotti di scatole danno una distribuzione equa.*

> 7. Distribuzione di cioccolatini
>
> Gli $n$ nipoti di nonno Théo sono in fila, numerati da $1$ a $n$. Ogni giorno apre una scatola. Il primo giorno la riceve il bambino $1$, prende un cioccolatino e la passa al vicino, e così via. Il giorno $j$ la scatola piena va al bambino $j$ (modulo $n$, tornando a $1$ dopo $n$). Quando la scatola arriva al bambino $n$, passa poi al bambino $1$.
>
> Il giorno $j$ la scatola contiene $j$ cioccolatini. La Figura 13 mostra $4$ bambini dopo $5$ giorni: ne hanno ricevuti rispettivamente $5$, $3$, $4$ e $3$.
>
> Figura 13. Quattro nipoti dopo cinque giorni.
>
> Una configurazione è equilibrata se, in quell’istante, tutti i bambini hanno ricevuto lo stesso numero di cioccolatini.
>
> 1. Secondo il valore di $n$, la configurazione è equilibrata dopo $n$ giorni?
>
> 2. Secondo $n$, esiste un giorno al termine del quale la configurazione è equilibrata? Se sì, qual è il primo?
>
> Si indica con $b(j)$ il numero di cioccolatini il giorno $j$. Le domande precedenti sono il caso $b(j) = j$.
>
> 3. Ogni $d$ giorni si riparte da zero: $b(j)$ è il resto della divisione euclidea di $j$ per $d$. Secondo $n$ e $d$, esiste un giorno al termine del quale la configurazione è equilibrata? Se sì, qual è il primo?
>
> Nonno Théo sceglie ora $d$ interi $(b_1, \ldots, b_d)$ e pone $b(j) = b_\ell$, dove $\ell$ è il resto della divisione euclidea di $j$ per $d$. Il caso precedente è $b_i = i$ per $1 \leqslant i < d$ e $b_d = 0$.
>
> 4. Secondo $n$, $d$ e interi positivi $(c_1, \ldots, c_n)$, si possono scegliere $(b_1, \ldots, b_d)$ in modo che dopo $\mathrm{mcm}(n, d)$ giorni il bambino $i$ abbia ricevuto esattamente $c_i$ cioccolatini, per ogni $1 \leqslant i \leqslant n$?
>
> Un modo di distribuzione è equo se esistono infiniti giorni al termine dei quali la configurazione è equilibrata.
>
> Un lotto $(h_1, \ldots, h_d)$ verifica $0 \leqslant h_1 \leqslant h_2 \leqslant \cdots \leqslant h_d$. È ragionevole se esiste una permutazione $(b_1, \ldots, b_d)$ delle sue taglie che dà un modo equo. Per $n = 4$ e $d = 4$, il lotto $(1, 1, 3, 3)$ è ragionevole, perché $(b_1, b_2, b_3, b_4) = (1, 3, 1, 3)$ è equo. Il lotto $(0, 1, 1, 3)$ non lo è.
>
> 5. Fissato $n$, per quali valori di $d$ tutti i lotti sono ragionevoli?
>
> 6. Quali sono le condizioni necessarie e sufficienti perché un lotto dato sia ragionevole?
>
> 7. Se $b(j) = j^2$, la distribuzione è equa? E se $b(j) = j^k$ per un altro intero $k$?
>
> 8. Si propongano e si studino altre piste di ricerca.

![[src_tfjm_2019__Q07.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Chocolates passed along a line: when the share is balanced, and which batches of boxes give a fair distribution.*

> 7. Handing out chocolates
>
> Papi Théo’s $n$ grandchildren stand in a line, numbered from $1$ to $n$. Each day he opens a box. On day $1$, child $1$ receives it, takes a chocolate and passes it on, and so on. On day $j$, child $j$ (modulo $n$, returning to $1$ after $n$) receives the full box. When the box reaches child $n$, it next goes to child $1$.
>
> On day $j$ the box holds $j$ chocolates. Figure 13 shows $4$ children after $5$ days: they have received $5$, $3$, $4$ and $3$ chocolates respectively.
>
> Figure 13. Four grandchildren after five days.
>
> A configuration is balanced if, at that moment, every child has received the same number of chocolates.
>
> 1. Depending on $n$, is the configuration balanced after $n$ days?
>
> 2. Depending on $n$, is there a day at the end of which the configuration is balanced? If so, what is the first such day?
>
> Write $b(j)$ for the number of chocolates on day $j$. The previous questions are the case $b(j) = j$.
>
> 3. Every $d$ days one starts again from zero: $b(j)$ is the remainder of the Euclidean division of $j$ by $d$. Depending on $n$ and $d$, is there a day at the end of which the configuration is balanced? If so, what is the first?
>
> Papi Théo now chooses $d$ integers $(b_1, \ldots, b_d)$ and sets $b(j) = b_\ell$, where $\ell$ is the remainder of $j$ divided by $d$. The previous case is $b_i = i$ for $1 \leqslant i < d$ and $b_d = 0$.
>
> 4. Depending on $n$, $d$ and positive integers $(c_1, \ldots, c_n)$, can one choose $(b_1, \ldots, b_d)$ so that after $\mathrm{lcm}(n, d)$ days child $i$ has received exactly $c_i$ chocolates, for every $1 \leqslant i \leqslant n$?
>
> A distribution is fair if there are infinitely many days at the end of which the configuration is balanced.
>
> A batch $(h_1, \ldots, h_d)$ satisfies $0 \leqslant h_1 \leqslant h_2 \leqslant \cdots \leqslant h_d$. It is reasonable if some permutation $(b_1, \ldots, b_d)$ of its sizes gives a fair distribution. For $n = 4$ and $d = 4$, the batch $(1, 1, 3, 3)$ is reasonable, because $(b_1, b_2, b_3, b_4) = (1, 3, 1, 3)$ is fair. The batch $(0, 1, 1, 3)$ is not.
>
> 5. If $n$ is fixed, for which values of $d$ is every batch reasonable?
>
> 6. What are necessary and sufficient conditions for a given batch to be reasonable?
>
> 7. If $b(j) = j^2$, is the distribution fair? And if $b(j) = j^k$ for another integer $k$?
>
> 8. Propose and study other lines of inquiry.

![[src_tfjm_2019__Q07.png]]

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_conteggio|Combinatorial counting]], [[method_casework|Case analysis]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,topic_geometria_piana,method_colorazione,method_conteggio,method_invarianti,method_casework,skill_ragionamento_geometrico,skill_conteggio_sistematico,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Quartiers d’une grille triangulaire : losangisations, types d’immeubles et valences.*

> 8. Los Angeles
>
> La ville est une grille triangulaire infinie : chaque triangle équilatéral de côté $1$ est un immeuble. Un quartier est un ensemble fini d’immeubles. Deux immeubles qui partagent un côté sont voisins.
>
> Figure 14. Un quartier de Los Angeles.
>
> Lamia veut partitionner les quartiers en copropriétés, qui sont des losanges formés de deux immeubles voisins. Une telle partition d’un quartier $Q$ est une losangisation. On note $\mathrm{Los}(Q)$ leur nombre. Pour la figure 14, $\mathrm{Los}(Q) = 0$ : le quartier bleu ne se losangise pas. Pour la figure 15, $\mathrm{Los}(Q) = 1$.
>
> Figure 15. Losangisation d’un quartier.
>
> 1. Si $Q$ a l’une des formes suivantes, peut-on le losangiser ? Si oui, combien de losangisations ? Sinon, combien de copropriétés au maximum ?
> a) Un triangle équilatéral de côté $n$.
> b) Un losange de côté $n$.
> c) Un losange de côté $n$ dont on a retiré deux immeubles. Adapter la réponse à la position des immeubles retirés.
>
> Deux immeubles d’un même quartier $Q$ sont de même type s’ils ont la même orientation et si leurs voisins dans $Q$ sont sur les mêmes côtés. Dans la figure 16, les immeubles $1$ et $6$ sont de même type, de même que $2$ et $4$. Les autres sont uniques.
>
> Figure 16. Exemple de types d’immeubles.
>
> Lamia ne connaît pas $Q$, mais elle connaît le nombre d’immeubles de chaque type. Cette information est notée $I$.
>
> 2. Chercher des conditions nécessaires sur $I$ pour que le quartier soit losangisable, et des conditions suffisantes. Peut-on trouver des conditions nécessaires et suffisantes ?
>
> 3. Déduire de $I$ des encadrements de $\mathrm{Los}(Q)$ aussi précis que possible.
>
> La valence d’un immeuble est le nombre de ses voisins dans le quartier. Pour $0 \leqslant i \leqslant 3$, on note $V_i(Q)$ le nombre d’immeubles de valence $i$ dans $Q$.
>
> 4. Quels quadruplets $\bigl(V_0(Q), V_1(Q), V_2(Q), V_3(Q)\bigr)$ sont possibles :
> a) si $Q$ est un quartier quelconque ?
> b) si $Q$ est losangisable ?
>
> 5. Proposer et étudier d’autres pistes de recherche.

![[src_tfjm_2019__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoire]], [[topic_geometria_piana|Géométrie plane]]
**Metodo:** [[method_colorazione|Coloriage / parité]], [[method_conteggio|Dénombrement]], [[method_invarianti|Invariants / monovariants]], [[method_casework|Analyse par cas]]
**Abilita:** [[skill_ragionamento_geometrico|Raisonnement géométrique]], [[skill_conteggio_sistematico|Dénombrement systématique]], [[skill_modellizzazione|Modélisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]], [[Geometria|Géométrie]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/17R031cXNi14VUsGINAxDROVxCLgJqOX-/view)


<div class="qlang-split" data-lang="it"></div>


*Quartieri di una griglia triangolare: rombizzazioni, tipi di palazzi e valenze.*

> 8. Los Angeles
>
> La città è una griglia triangolare infinita: ogni triangolo equilatero di lato $1$ è un palazzo. Un quartiere è un insieme finito di palazzi. Due palazzi che hanno un lato in comune sono vicini.
>
> Figura 14. Un quartiere di Los Angeles.
>
> Lamia vuole suddividere i quartieri in condomini, che sono rombi formati da due palazzi vicini. Una tale partizione di un quartiere $Q$ è una rombizzazione. Si indica con $\mathrm{Los}(Q)$ il loro numero. Per la Figura 14, $\mathrm{Los}(Q) = 0$: il quartiere blu non si rombizza. Per la Figura 15, $\mathrm{Los}(Q) = 1$.
>
> Figura 15. Rombizzazione di un quartiere.
>
> 1. Se $Q$ ha una delle forme seguenti, lo si può rombizzare? Se sì, in quanti modi? Se no, quanti condomini si possono formare al massimo?
> a) Un triangolo equilatero di lato $n$.
> b) Un rombo di lato $n$.
> c) Un rombo di lato $n$ da cui si sono tolti due palazzi. Adattare la risposta alla posizione dei palazzi tolti.
>
> Due palazzi di uno stesso quartiere $Q$ sono dello stesso tipo se hanno la stessa orientazione e se i loro vicini in $Q$ stanno sugli stessi lati. Nella Figura 16 i palazzi $1$ e $6$ sono dello stesso tipo, come $2$ e $4$. Gli altri sono unici.
>
> Figura 16. Esempio di tipi di palazzi.
>
> Lamia non conosce $Q$, ma conosce il numero di palazzi di ogni tipo. Questa informazione si indica con $I$.
>
> 2. Cercare condizioni necessarie su $I$ perché il quartiere sia rombizzabile, e condizioni sufficienti. Si possono trovare condizioni necessarie e sufficienti?
>
> 3. Dedurre da $I$ stime di $\mathrm{Los}(Q)$ il più precise possibile.
>
> La valenza di un palazzo è il numero dei suoi vicini nel quartiere. Per $0 \leqslant i \leqslant 3$, si indica con $V_i(Q)$ il numero di palazzi di valenza $i$ in $Q$.
>
> 4. Quali quadruple $\bigl(V_0(Q), V_1(Q), V_2(Q), V_3(Q)\bigr)$ sono possibili:
> a) se $Q$ è un quartiere qualunque?
> b) se $Q$ è rombizzabile?
>
> 5. Si propongano e si studino altre piste di ricerca.

![[src_tfjm_2019__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_colorazione|Colorazione / parita]], [[method_conteggio|Conteggio combinatorio]], [[method_invarianti|Invarianti / monovarianti]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]


<div class="qlang-split" data-lang="en"></div>


*Districts of a triangular grid: rhombisations, building types and valences.*

> 8. Los Angeles
>
> The city is an infinite triangular grid: each equilateral triangle of side $1$ is a building. A district is a finite set of buildings. Two buildings that share a side are neighbours.
>
> Figure 14. A district of Los Angeles.
>
> Lamia wants to partition districts into condominiums, which are rhombi made of two neighbouring buildings. Such a partition of a district $Q$ is a rhombisation. Write $\mathrm{Los}(Q)$ for the number of them. For Figure 14, $\mathrm{Los}(Q) = 0$: the blue district cannot be rhombised. For Figure 15, $\mathrm{Los}(Q) = 1$.
>
> Figure 15. A rhombisation of a district.
>
> 1. If $Q$ has one of the following shapes, can it be rhombised? If so, in how many ways? If not, how many condominiums can one form at most?
> a) An equilateral triangle of side $n$.
> b) A rhombus of side $n$.
> c) A rhombus of side $n$ with two buildings removed. Adapt the answer to the position of the removed buildings.
>
> Two buildings of the same district $Q$ are of the same type if they have the same orientation and their neighbours in $Q$ lie on the same sides. In Figure 16, buildings $1$ and $6$ are of the same type, as are $2$ and $4$. The others are unique.
>
> Figure 16. An example of building types.
>
> Lamia does not know $Q$, but she knows how many buildings there are of each type. This information is written $I$.
>
> 2. Find necessary conditions on $I$ for the district to be rhombisable, and sufficient conditions. Can one find necessary and sufficient conditions?
>
> 3. Deduce from $I$ bounds on $\mathrm{Los}(Q)$ that are as sharp as possible.
>
> The valence of a building is the number of its neighbours in the district. For $0 \leqslant i \leqslant 3$, write $V_i(Q)$ for the number of buildings of valence $i$ in $Q$.
>
> 4. Which quadruples $\bigl(V_0(Q), V_1(Q), V_2(Q), V_3(Q)\bigr)$ are possible:
> a) if $Q$ is an arbitrary district?
> b) if $Q$ is rhombisable?
>
> 5. Propose and study other lines of inquiry.

![[src_tfjm_2019__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_geometria_piana|Plane geometry]]
**Metodo:** [[method_colorazione|Colouring / parity]], [[method_conteggio|Combinatorial counting]], [[method_invarianti|Invariants / monovariants]], [[method_casework|Case analysis]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_conteggio_sistematico|Systematic counting]], [[skill_modellizzazione|Modelling / translating the text]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Geometria|Geometry]]
