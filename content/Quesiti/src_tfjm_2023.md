---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023
tipo: gara
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023
family: tfjm
year: '2023'
level: TFJM²
---
<div class="atom-reader" data-gara="Quesiti/src_tfjm_2023"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,topic_combinatoria,topic_geometria_analitica,method_estremalita,method_casework,method_simmetria,method_coordinate,skill_ragionamento_geometrico,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Largest axis-aligned square stamp that fits inside a package of given shape, then total area with two disjoint stamps*

> 1. Philatélie
>
> Roman est un philatéliste un peu particulier : il ne collectionne pas les timbres, mais les tampons.
>
> Il dispose d'un paquet plat d'une certaine forme, et cherche à y apposer le plus grand tampon carré possible sans déborder. On suppose que les paquets sont dans une orientation fixée, et que la tamponneuse ne peut apposer que des tampons carrés dont les côtés parallèles aux axes d'un repère orthogonal fixé.
>
> Figure 1 – Exemples de tampons dans le cas de la question 1c). Le premier est le seul valide, car le deuxième est mal orienté, le troisième déborde et le dernier n'est pas carré.
>
> 1. Quel est le plus grand tampon possible si le paquet est :
> - Un rectangle de côtés $a$ et $b$ (avec $a \neq b$), dont les côtés sont parallèles aux axes ?
> - Un disque de rayon $r$ ?
> - Un triangle isocèle rectangle dont les côtés de l'angle droit, de longueur $a$, sont parallèles aux axes ?
>
> 2. On suppose que le paquet est un polygone convexe, c'est-à-dire que tous ses angles intérieurs mesurent entre $0^\circ$ et $180^\circ$ strictement. Roman regarde le nombre de façons (potentiellement infini) d'inscrire un tampon de taille maximale sur son paquet. Quelles sont les nombres possibles ?
>
> Après réflexion, Roman se dit que son paquet aurait plus de cachet avec 2 tampons plutôt qu'un seul, pas forcément de la même taille. Il cherche à maximiser l'aire totale des tampons mais, pour que cela reste lisible, ceux-ci n'ont pas le droit de se superposer (ils peuvent néanmoins avoir un segment en commun).
>
> On note $A_g$ la plus grande aire que Roman peut obtenir s'il appose d'abord un premier tampon de taille maximale, puis un second dans la place qui reste, et $A_{\text{dis}}$ la plus grande aire qu'il peut obtenir s'il peut placer ses deux tampons comme il le souhaite, tant qu'ils sont disjoints.
>
> Figure 2 – Exemples d'une paire de tampons valide dans le cas de la question 4c) (à gauche), et d'une paire qui n'est pas valide dans le cas 4c) mais qui l'est dans le cas 6c) (à droite).
>
> 3. A-t-on toujours $A_g = A_{\text{dis}}$ ? Si non, que peut valoir le ratio $A_{\text{dis}}/A_g$ ?
>
> 4. Que vaut $A_{\text{dis}}$ si le paquet est :
> - Un rectangle de côtés $a$ et $b$ (avec $a \neq b$), dont les côtés sont parallèles aux axes ?
> - Un disque de rayon $r$ ?
> - Un triangle isocèle rectangle dont les côtés de l'angle droit, de longueur $a$, sont parallèles aux axes ?
>
> 5. On suppose que le paquet est un polygone convexe. Combien peut-il y avoir de configurations de tampons qui atteignent $A_{\text{dis}}$ ?
>
> Après quelques essais, Roman se rend compte que des tampons superposés ne rendent pas si mal. On note $A_{\text{lib}}$ la plus grande aire pour l'union de deux tampons de tailles quelconques lorsque Roman s'autorise à les superposer.
>
> 6. Que vaut $A_{\text{lib}}$ si le paquet est :
> - Un rectangle de côtés $a$ et $b$ (avec $a \neq b$), dont les côtés sont parallèles aux axes ?
> - Un disque de rayon $r$ ?
> - Un triangle isocèle rectangle dont les côtés de l'angle droit, de longueur $a$, sont parallèles aux axes ?
>
> 7. Reprendre le problème si les tampons peuvent ne pas être parallèles aux axes. En particulier, chercher des formes de paquets pour lesquelles s'autoriser à ne pas être parallèle aux axes augmente le plus possible l'aire maximale.
>
> 8. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]], [[topic_geometria_analitica|Coordinate geometry]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_simmetria|Simmetria]], [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Il più grande timbro quadrato allineato all'asse che si inserisce all'interno di un pacchetto di una determinata forma, quindi superficie totale con due timbri disgiunti*

> Pilatamente. Roman non è un collezionista di francobolli abbastanza ordinario: non raccoglie francobolli, ma francobolli di inchiostro (tamponi). Quando viene dato un pacchetto di una certa forma, cerca il più grande timbro di inchiostro per applicarlo. Il pacchetto è piatto con un orientamento fisso e i timbri di inchiostro sono quadrati i cui lati sono paralleli agli assi di un quadro di coordinate ortogonali fissi.\n\n1. Qual è il più grande timbro possibile se il pacchetto è:\n - Un rettangolo di lati $a$ e $b$ (con $a \\neq b$), i cui lati sono paralleli agli assi?\n - Un disco di raggio $r$?\n - Un triangolo rettangolo di uguali stelle le cui gambe (i lati dell'angolo giusto), di lunghezza $a$, sono paralleli agli assi?\n\n2. Supponiamo ora che il pacchetto sia un poligono converso, cioè un poligono il cui angolo interno misura rigorosamente tra $0^\\circ$ e $180^\\circ$. Roman analizza il numero di modi (potenzialmente infiniti) per posizionare il timbro di inchiostro di dimensioni massime sul confezionamento. Dopo la riflessione, Roman si dice che un pacchetto porterebbe più francobolli di inchiostro se potesse mettere due francobolli di inchiostro invece di uno; poi cerca di massimizzare la loro dimensione totale. I due timbri di inchiostro devono essere inseriti all'interno dell'imballaggio, devono essere quadrati allineati all'asse e non devono sovrapporre­si (potranno comunque toccarsi, avendo solo punti in comune). Nota con $A_p$ la superficie più grande che Roman può ottenere se prima applica un timbro di inchiostro di dimensioni massime, poi un secondo nello spazio che rimane; e con $A_{\\text{dis}}$ la superficie totale più grande che può ottenere se può posizionare i due timbri di inchiostro come desidera, a condizione che siano disconnessi.\n\n3. Abbiamo sempre $A_p = A_{\\text{dis}}$? Se no, quale può essere il rapporto $A_{\\text{dis}}/A_p$?\n\n4. Qual è il valore di $A_{\\text{dis}}$ se il pacchetto è:\n - Un rettangolo di lati $a$ e $b$ (con $a \\neq b$), i cui lati sono paralleli agli assi?\n - Un disco di raggio $r$?\n - Un triangolo rettangolare di uguali pollice le cui gambe, di lunghezza $a$, sono parallele agli assi?\n\n5. Supponiamo ora che il pacchetto sia un poligono convex. Trova, in funzione del numero di lati del poligono, i valori possibili per il rapporto $A_{\\text{dis}}/A_p$.\n\n6. Ora ci rendiamo conto che i francobolli di inchiostro non si riproducono bene se si toccano, quindi Roman impone ora che l'unione di due francobolli di inchiostro di dimensioni arbitrarie, quando li colloca, non deve essere sovrapponibile (i due francobolli di inchiostro non contano più come lo stesso mescolamento, cioè non devono sovrapporre o toccare un segmento). Qual è il valore di $A_{\\text{dis}}$ se il pacchetto è:\n - Un rettangolo di lati $a$ e $b$ (con $a \\neq b$), i cui lati sono paralleli agli assi?\n - Un disco di raggio $r$?\n - Un triangolo rettangolare di uguali braccia le cui gambe, di lunghezza $a$, sono parallele agli assi?\n\n7. Risolvi il problema se non è più possibile richiedere che i timbri di inchiostro siano allineati all'asse. In particolare, trovare le forme di confezione che consentono Roman di posizionare 2 timbri di inchiostro la cui superficie totale aumenta il più possibile.\n\n8. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2023__Q01.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_casework|Analisi per casi]], [[method_simmetria|Sfruttamento della simmetria]], [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Largest axis-aligned square stamp that fits inside a package of given shape, then total area with two disjoint stamps*

> Philately. Roman is a not-quite-ordinary stamp collector: he does not collect stamps, but ink stamps (tampons). When given a package of a certain shape, he looks for the largest ink stamp to apply to it. The package is laid flat with a fixed orientation, and the ink stamps are squares whose sides are parallel to the axes of a fixed orthogonal coordinate frame.\n\n1. What is the largest possible ink stamp if the package is:\n   - A rectangle of sides $a$ and $b$ (with $a \\neq b$), whose sides are parallel to the axes?\n   - A disk of radius $r$?\n   - An isosceles right triangle whose legs (the sides of the right angle), of length $a$, are parallel to the axes?\n\n2. We now suppose that the package is a convex polygon, that is, a polygon all of whose interior angles measure strictly between $0^\\circ$ and $180^\\circ$. Roman looks at the number of ways (potentially infinite) of placing the ink stamp of maximal size on the package. Which are the possible numbers of ways?\n\nAfter reflection, Roman tells himself a package would carry more ink stamps if he could place 2 ink stamps rather than one; he then seeks to maximize their total size. The 2 ink stamps must be placed inside the package, must be axis-aligned squares, and must not overlap (they may nonetheless touch, having only points in common). Denote by $A_p$ the largest area Roman can obtain if he first applies one ink stamp of maximal size, then a second one in the space that remains; and by $A_{\\text{dis}}$ the largest total area he can obtain if he can place the two ink stamps as he wishes, provided they are disjoint.\n\n3. Do we always have $A_p = A_{\\text{dis}}$? If not, what can the ratio $A_{\\text{dis}}/A_p$ be worth?\n\n4. What can $A_{\\text{dis}}$ be worth if the package is:\n   - A rectangle of sides $a$ and $b$ (with $a \\neq b$), whose sides are parallel to the axes?\n   - A disk of radius $r$?\n   - An isosceles right triangle whose legs, of length $a$, are parallel to the axes?\n\n5. We now suppose the package is a convex polygon. Find, as a function of the number of sides of the polygon, the possible values for the ratio $A_{\\text{dis}}/A_p$.\n\n6. We now realize that the ink stamps do not reproduce well if they touch, so Roman now imposes that the union of two ink stamps of arbitrary sizes, when he places them, must not be superposable (the two ink stamps no longer count as the same shuffle, i.e. must not overlap nor touch in a segment). What can $A_{\\text{dis}}$ be worth if the package is:\n   - A rectangle of sides $a$ and $b$ (with $a \\neq b$), whose sides are parallel to the axes?\n   - A disk of radius $r$?\n   - An isosceles right triangle whose legs, of length $a$, are parallel to the axes?\n\n7. Redo the problem if the ink stamps can no longer be required to be axis-aligned. In particular, find the package shapes that allow Roman to place 2 ink stamps whose total area increases as much as possible.\n\n8. Propose and study other lines of research.

![[src_tfjm_2023__Q01.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]], [[topic_geometria_analitica|Coordinate geometry]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_simmetria|Simmetria]], [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,method_grafi,method_conteggio,method_casework,method_casi_conteggio,method_induzione,skill_conteggio_sistematico,skill_modellizzazione,skill_astrazione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="fr"></div>


*Counting orientations of rivers between villages with assigned altitudes so water flows downhill; functions n_k(P) on graph families*

> 2. La montagne aux ruisseaux
>
> Olympe est une apprentie démiurge. On lui a confié la construction d'une montagne, sur laquelle se trouvent $v \in \mathbb{N}^*$ villages. Pour cela, elle dispose d'un plan aérien $P$ sur lequel on peut voir des villages et des ruisseaux reliant certains villages. Pour des raisons esthétiques, Olympe veut que chaque village se trouve à une altitude différente sur la montagne et qui soit un nombre entier de kilomètres : l'un se trouve à $1\text{km}$, un autre à $2\text{km}$, un autre à $3\text{km}$, et ainsi de suite jusqu'au dernier qui se trouve à $v\text{km}$. Il y a au plus un ruisseau entre deux villages donnés, mais leur sens ne figure pas sur le plan. Les croisements de ruisseaux sont autorisés, car Olympe sait construire des aqueducs.
>
> Une orientation des ruisseaux est un choix, pour tous les ruisseaux, d'un sens d'écoulement du courant. Étant donné une telle orientation des ruisseaux, il existe un certain nombre de façons d'attribuer aux $v$ villages les altitudes $1\text{km}$, $2\text{km}$, ..., $v\text{km}$, de sorte que l'eau des ruisseaux s'écoule toujours du haut vers le bas. Pour tout $k \in \mathbb{N}$, on note $n_k(P)$ le nombre d'orientations des ruisseaux de $P$ telles qu'il existe exactement $k$ manières différentes d'attribuer des altitudes aux villages de manière à respecter cette contrainte. Par exemple $n_0(P)$ est le nombre d'orientations des ruisseaux telles qu'il n'existe aucun manière d'attribuer aux $v$ villages de $P$ les altitudes $1\text{km}$, $2\text{km}$, ..., $v\text{km}$ de sorte que l'eau des ruisseaux s'écoule toujours du haut vers le bas.
>
> 1. Étant donné un plan $P$ avec $v$ villages et $r$ ruisseaux, combien d'orientations des ruisseaux existe-t-il ?
>
> 2. Quels sont les plans $P$ que Olympe peut recevoir tels que $n_0(P) = n$ pour :
>
> a) $n = 0$ ?
>
> b) $n = 1$ ?
>
> c) $n = 2$ ?
>
> d) $n = 4$ ?
>
> e) $n = 6$ ?
>
> Figure 3 – Un exemple de plan et d'orientation des ruisseaux, et une manière de choisir les altitudes des villages.
>
> Figure 4 – Des exemples de plans : le plan cycle $C_6$ avec $v = 6$ villages ; le plan quadrillage $Q_8$ avec $v = 8$ ($v$ doit être pair) ; le plan complet $K_5$ avec $v = 5$ ; le plan étoile $E_6$ avec $v = 6$ ; le plan ligne $L_4$ avec $v = 4$.
>
> 3. Pour quels entiers $n \geqslant 0$ existe-t-il un plan $P$ tel que $n_0(P) = n$ ?
>
> Pour $v \in \mathbb{N}^*$, on définit différents plans de $v$ villages : le cycle $C_v$, le quadrillage $Q_v$ (seulement pour $v$ pair), le plan complet $K_v$, l'étoiles $E_v$ et la ligne $L_v$ (voir figure 4).
>
> 4. Calculer $n_1(P)$ dans les cas suivants :
>
> a) $P$ est le cycle $C_v$,
>
> b) $P$ est le quadrillage $Q_v$.
>
> 5. Pour quels entiers $n \geqslant 0$ existe-t-il un plan $P$ tel que $n_1(P) = n$ ?
>
> 6. Calculer $n_k(P)$ pour tout $k \in \mathbb{N}$ dans les cas suivants :
>
> a) $P$ est un plan complet $K_v$,
>
> b) $P$ est un plan étoile $E_v$,
>
> c) $P$ est un plan ligne $L_v$.
>
> 7. Caractériser les couples d'entiers $(k, n)$ tels qu'il existe un plan $P$ satisfaisant $n_k(P) = n$.
>
> 8. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_casi_conteggio|Casi e conteggio]], [[method_induzione|Induction]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Conteggiamento degli orientamenti dei fiumi tra villaggi con altitudini assegnate in modo che l'acqua scorra in discesa; funzioni n_k(P) sulle famiglie di grafici*

> La montagna dei ruscelli. Olympe è un apprendista di paesaggio. Le è stato affidato il compito di costruire una montagna, su cui installa villaggi. I fiumi collegano i villaggi a due a due, e supponiamo sempre che ci sia almeno un villaggio. L'Olympe vuole che ogni villaggio sia a un'altitudine diversa e assegna ai villaggi $v$ le altitudini $1\\text{km}, 2\\text{km}, \\dots, v\\text{km}$. Un orientamento dei fiumi è una scelta, per ogni fiume, della direzione del flusso. Per un determinato orientamento, un'altitudine assegnata ai villaggi è valida se per ogni fiume l'acqua scorre dal villaggio superiore al villaggio inferiore (basso). Per $k \\in \\mathbb{N}$, $n_k(P)$ indica il numero di orientamenti dei fiumi di $P$ in modo tale che ci siano esattamente $k$ modi validi di assegnare le altitudini. Ad esempio, $n_0(P)$ è il numero di orientamenti per i quali non esiste un'assegnazione di altitudine valida.\n\n1. Dato un piano $P$ con villaggi $v$ e fiumi $r$, quanti orientamenti dei fiumi esistono?\n\n2. Quali sono i piani $P$ che Olympe può ricevere in modo tale che $n_0(P) = n$ per:\n a) $n = 0$?\n b) $n = 1$?\n c) $n = 2$?\n d) $n = 4$?\n e) $n = 6$?\n\n3. Per quali integri $n \\geqslant 0$ esiste un piano $P$ tale che $n_0(P) = n$?\n\nPer $v \\in \\mathbb{N}^*$, definiamo diversi piani dei villaggi $v$: il ciclo $C_v$, la griglia $Q_v$ (solo per $v$ pari), il piano completo $K_v$, la stella $E_v$ e la linea $L_v$ (vedi figura 4).\n\n4. Calcolare $n_1(P)$ nei seguenti casi:\n a) $P$ è il ciclo $C_v$.\n b) $P$ è la griglia $Q_v$.\n\n5. Per quali integri $n \\geqslant 0$ esiste un piano $P$ tale che $n_1(P) = n$?\n\n6. Calcolare $n_k(P)$ per tutti $k \\in \\mathbb{N}$ nei seguenti casi:\n a) $P$ è il piano completo $K_v$.\n b) $P$ è la stella $E_v$.\n c) $P$ è la linea $L_v$.\n\n7. Caratterizzare le coppie di integri $(k, n)$ in modo tale che esista un piano $P$ soddisfacente $n_k(P) = n$.\n\n8. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2023__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]], [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]], [[method_casi_conteggio|Conteggio per casi]], [[method_induzione|Induzione]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Counting orientations of rivers between villages with assigned altitudes so water flows downhill; functions n_k(P) on graph families*

> The mountain of streams. Olympe is an apprentice landscape designer. She has been entrusted with building a mountain, on which she installs villages. Rivers connect the villages two by two, and we always assume there is at least 1 village. There can be at most one river between two villages.\n\nOlympe wants each village at a different altitude and assigns to the $v$ villages the altitudes $1\\text{km}, 2\\text{km}, \\dots, v\\text{km}$. An orientation of the rivers is a choice, for each river, of a flow direction. For a given orientation, an assignment of altitudes to the villages is valid if for every river the water flows from the higher village to the lower one (downhill). For $k \\in \\mathbb{N}$, $n_k(P)$ denotes the number of orientations of the rivers of $P$ such that there are exactly $k$ valid ways of assigning altitudes. For example, $n_0(P)$ is the number of orientations for which there is no valid altitude assignment.\n\n1. Given a plan $P$ with $v$ villages and $r$ rivers, how many orientations of the rivers exist?\n\n2. Which are the plans $P$ that Olympe can receive such that $n_0(P) = n$ for:\n   a) $n = 0$?\n   b) $n = 1$?\n   c) $n = 2$?\n   d) $n = 4$?\n   e) $n = 6$?\n\n3. For which integers $n \\geqslant 0$ does there exist a plan $P$ such that $n_0(P) = n$?\n\nFor $v \\in \\mathbb{N}^*$, we define different plans of $v$ villages: the cycle $C_v$, the grid $Q_v$ (only for $v$ even), the complete plan $K_v$, the star $E_v$ and the line $L_v$ (see figure 4).\n\n4. Compute $n_1(P)$ in the following cases:\n   a) $P$ is the cycle $C_v$.\n   b) $P$ is the grid $Q_v$.\n\n5. For which integers $n \\geqslant 0$ does there exist a plan $P$ such that $n_1(P) = n$?\n\n6. Compute $n_k(P)$ for all $k \\in \\mathbb{N}$ in the following cases:\n   a) $P$ is the complete plan $K_v$.\n   b) $P$ is the star $E_v$.\n   c) $P$ is the line $L_v$.\n\n7. Characterize the pairs of integers $(k, n)$ such that there exists a plan $P$ satisfying $n_k(P) = n$.\n\n8. Propose and study other lines of research.

![[src_tfjm_2023__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Grafi]], [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_casi_conteggio|Casi e conteggio]], [[method_induzione|Induction]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,topic_combinatoria,topic_insiemi_funzioni,method_conteggio,method_casework,method_fattorizzazione,method_congruenze,method_induzione,skill_lettura_attenta,skill_casework_accurato,skill_astrazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="fr"></div>


*Monetary systems S: S-appoints (exact payments), S-primary prices, and S-decompositions; finiteness and uniqueness conditions*

> 3. Appoint monétaire
>
> Dans une galaxie lointaine, très lointaine, le petit prince se déplace de planète en planète à la recherche de marguerites qu'il souhaite acheter. Chaque planète a son propre système monétaire $S$, qui est l'ensemble des valeurs que peuvent prendre les pièces de monnaie sur cette planète. Les pièces de monnaie ont toutes des valeurs entières strictement positives. Dans cette galaxie, on ne rend pas la monnaie. Dans toute la suite, on supposera toujours que $1 \in S$ afin que tous les prix soient réalisables comme somme de valeurs dans $S$. Par exemple, le système monétaire des « pièces rouges de centimes d'euro » est $S = \{1, 2, 5\}$.
>
> Lorsque le petit prince arrive sur une planète avec une certaine somme d'argent $x \in \mathbb{N}$, il convertit son argent dans le système monétaire $S$ mais ne sait pas comment on va lui faire la monnaie, c'est-à-dire quelles pièces il va recevoir. Il ne peut acheter une marguerite que s'il est sûr d'avoir l'appoint pour le prix indiqué. Par exemple, si son argent est de $x = 4$, dans le système monétaire $S = \{1, 2, 5\}$, il peut avoir :
> - 2 pièces de valeur 2,
> - 1 pièce de valeur 2 et 2 pièces de valeur 1,
> - 4 pièces de valeur 1.
>
> Il est donc sûr d'avoir l'appoint pour les prix 0, 2 et 4 mais pas pour les prix 1 et 3. On notera $\mathcal{A}_S(x)$ l'ensemble des prix pour lesquels il est certain d'avoir l'appoint dans le système $S$ pour une quantité $x$ d'argent. Par exemple $\mathcal{A}_{\{1,2,5\}}(4) = \{0, 2, 4\}$.
>
> 1. Le petit prince est sur une planète où $S = \{1, 3, 10\}$. Pour quels prix est-il sûr d'avoir l'appoint si
>
> a) son argent est de $x = 10$ ?
>
> b) son argent est de $x = 100$ ?
>
> c) son argent est de $x = 10^n$ pour $n \in \mathbb{N}^*$ ?
>
> Les marchands de marguerites ne veulent pas négocier les prix et cherchent des prix $p \geqslant 1$ tels que si on a l'appoint pour ce prix, alors on n'est pas certain d'avoir aussi l'appoint pour un prix plus petit autre que 0 et $p$, c'est-à-dire que $\mathcal{A}_S(p) = \{0, p\}$. Un tel prix est dit $S$-primaire (par convention, 0 n'est jamais $S$-primaire).
>
> Par exemple, pour $S = \{1, 2, 5\}$, le prix 4 n'est pas $S$-primaire car si on a l'appoint pour 4 alors on est aussi certain d'avoir l'appoint pour 2. Mais 6 est $S$-primaire car $6 = 5 + 1 = 2 + 2 + 2$ donc si on a l'appoint pour 6, on n'est pas sûr d'avoir l'appoint pour 1, 2, 3, 4 ou 5. On notera $\mathcal{P}_S$ l'ensemble des prix $S$-primaires. Par exemple, $1, 2, 5, 6 \in \mathcal{P}_{\{1,2,5\}}$ mais $0, 3, 4 \notin \mathcal{P}_{\{1,2,5\}}$.
>
> 2. Quels sont les prix $S$-primaires si :
>
> a) $S = \{1, u\}$ pour $u \geqslant 2$ ?
>
> b) $S = 1 + 2\mathbb{N}$ l'ensemble des nombres impairs ?
>
> c) $S = \{2^n, n \in \mathbb{N}\}$ l'ensemble des puissances de 2 ?
>
> d) $S = \{1, v, w\}$ pour $w > v \geqslant 2$ ?
>
> e) $S$ est l'ensemble des nombres premiers ou égaux à 1 ?
>
> 3. Déterminer l'ensemble des parties $S$ de $\mathbb{N}^*$ telles que $\mathcal{P}_S$ est fini.
>
> 4. Donner un encadrement de la valeur du plus grand prix $S$-primaire lorsque $S$ est fini, en fonction des valeurs des éléments de $S$ et du nombre d'éléments de $S$. On pourra commencer par traiter les cas (a) et (d) de la question 2.
>
> 5. Trouver des conditions nécessaires et/ou suffisantes pour que $S = \mathcal{P}_S$.
>
> On dit que $p$ est un $S$-appoint de $x$ si on a toujours l'appoint pour $p$ quand on a l'appoint pour $x$. Un $m$-uplet $(p_1, \ldots, p_m)$ de prix $S$-primaires dont la somme vaut $x$ est appelé une $S$-décomposition de $x$ si pour toute partie $J \subseteq [\![1, m]\!]$, le prix $x_J = \sum_{j \in J} p_j$ est un $S$-appoint de $x$ ; autrement dit, n'importe quelle sous-somme (y compris une somme d'un seul élément) de ces prix $(p_1, \ldots, p_m)$ est un $S$-appoint de $x$.
>
> Par exemple, pour $S = \{1, 2, 5\}$ et $x = 4$, le couple $(2, 2)$ est une $S$-décomposition de $x$ mais le triplet $(1, 1, 2)$ n'en est pas une car, par exemple, $1 + 2 = 3$ n'est pas un $S$-appoint de 4. De même, $(4)$ n'est pas une $S$-décomposition de 4 car 4 n'est pas $S$-primaire.
>
> 6. Pour quels systèmes $S$ tout prix $x$ admet-il au moins une $S$-décomposition ?
>
> 7. Existe-t-il des systèmes $S$ pour lesquels :
>
> a) $S$ est fini et toute $S$-décomposition est unique (à permutation des nombres $S$-primaires près) ?
>
> b) $S$ est infini et toute $S$-décomposition est unique ?
>
> c) $S$ est de la forme $S = \{1, u, v\}$ avec $1 < u < v$ et toute $S$-décomposition est unique ?
>
> d) au moins un prix $x$ admet au moins deux $S$-décompositions qui ne sont pas permutations des termes l'une de l'autre ?
>
> 8. Trouver des conditions nécessaires et/ou suffisantes pour qu'un système $S$ vérifie la propriété a) de la question précédente.
>
> 9. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Modular arithmetic / congruences]], [[method_induzione|Induction]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Sistemi monetari S: punti S (pagamenti esatti), prezzi primari S e decomposizioni S; condizioni di finità e unicità*

> Valutazione monetaria (Appoint monétaire). In una galassia lontana, lontana, il piccolo principe si sposta da pianeta in pianeta a bordo della sua nave spaziale margarina. Ogni pianeta ha il suo sistema monetario, un insieme di valori delle monete, e il principe deve dare il cambio esatto per i suoi acquisti. Supponiamo sempre $1 \\in S$. Per esempio, il sistema monetario $S = \\{1, 2, 5\\}$.\n\nQuando il principe arriva su un nuovo pianeta con una certa quantità di denaro $x \\in \\mathbb{N}$, lo converte nel sistema $S$. Diciamo che può dare cambio (faire l'appoint) per un prezzo $p$ su un importo $x$ se può scrivere $p$ come sottosumma delle monete che costituiscono $x$. Indichiamo con $\\mathcal{A}_S(x)$ l'insieme dei prezzi per i quali può dare variazione nel sistema $S$ avendo un importo $x$ di denaro. Ad esempio $\\mathcal{A}_{\\{1,2,5\\}}(4) = \\{0, 2, 4\\}$ per una decomposizione di $x = 4$ in due monete di valore 2; con $1+1+2$ invece ottiene $\\{0,1,2,3,4\\}$.\n\n1. Il piccolo principe arriva su un pianeta dove $S = \\{1, 3, 10\\}$. Per quali prezzi è sicuro di dare cambio se: a) ha un importo $x = 10$? b) ha un importo $x = 100$? c) ha un importo $x = 10^n$ per $n \\in \\mathbb{N}^*$? n\nI commercianti di margherite/margherine addebitano un prezzo $p \\geqslant 1$ tale da essere sicuri di poter dare cambio per $p$ su qualsiasi importo di denaro: tale prezzo $p$ si chiama $S$-primario (per convenzione, $0$ non è mai $S$-primario). Per esempio, per $S = \\{1, 2, 5\\}$, il prezzo 6 è $S$-primario perché $6 = 5 + 1 = 2 + 2 + 2$, mentre non è per i prezzi 1, 2, 3, 4 o 5. L'insieme dei prezzi primari $S$ è indicato come $\\mathcal{P}_S$. Per esempio $1, 2, 5, 6 \\in \\mathcal{P}_{\\{1,2,5\\}}$ ma $0, 3, 4 \\notin \\mathcal{P}_{\\{1,2,5\\}}$.\n\n2. Quali set $S$ sono tali da poter caratterizzare i prezzi primari $S$ se:\n a) $S = \\{1, u\\}$ per $u \\geqslant 2$?\n b) $S = 1 + 2\\mathbb{N}$ l'insieme di numeri unici?\n c) $S = \\{2^n, n \\in \\mathbb{N}\\}$ l'insieme di potenze di 2?\n d) $S = \\{1, v, w\\}$ per $w > v > 2$?\n e) $S$ l'insieme di numeri primi insieme a 1?\n\n3. Determinare i sottogruppi $S$ di $\\mathbb{N}^*$ in modo tale che $\\mathcal{P}_S$ sia finito.\n\n4. Indicare una stima (frame da sotto e sopra) del valore del prezzo primario più grande $S$ quando $S$ è finito, in funzione dei valori degli elementi di $S$. Si può iniziare trattando i casi (a) e (d) della domanda 2.\n\n5. Trovare condizioni necessarie e/o sufficienti per $\\mathcal{P}_S = \\mathbb{N}^*$.\n\nDato un prezzo $x$, un $m$-tuple $(p_1, \\dots, p_m)$ di $S$-prezzi primari la cui somma è $x$ si chiama $S$-decompilazione di $x$ se per ogni sottoinsieme $J \\subseteq [\\![1, m]\\!]$, il prezzo $x_J = \\sum_{j \\in J} p_j$ è un $S$-appoint di $x$; in altre parole, ogni sottosomma (compresa la somma vuota e la somma completa) di questi prezzi è un $S$-appoint di $x$. Per esempio, per $S = \\{1, 2, 5\\}$ e $x = 4$, la decomposizione unica $S$ di $x$ è la tripletta $(1, 1, 2)$, ma non la coppia $(2, 2)$, perché $1 + 2 = 3$ non è un $S$-appoint di 4. Allo stesso modo, $(4)$ non è una decomposizione $S$ di 4 perché 4 non è $S$-primaria.\n\n6. Per quali sistemi $S$ ogni $x$ ammette almeno una decomposizione $S$?\n\n7. Esistono sistemi $S$ per i quali:\n a) $S$ è finito e ogni $S$-decomposizione è unica (fino alla permutazione dei numeri primari $S$)?\n b) $S$ è infinito e ogni $S$-decomposizione è unica?\n c) $S$ ha la forma $S = \\{1, u, v\\}$ con $1 < u < v$ e ogni $S$-decomposizione è unica?\n d) almeno un prezzo $x$ ammette almeno due $S$-decomposizioni che non sono permutazioni l'una dell'altra?\n\n8. Trovare le condizioni necessarie e/o sufficienti per un sistema $S$ per verificare la proprietà della domanda precedente.\n\n9. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2023__Q03.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_congruenze|Aritmetica modulare / congruenze]], [[method_induzione|Induzione]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Monetary systems S: S-appoints (exact payments), S-primary prices, and S-decompositions; finiteness and uniqueness conditions*

> Monetary change (Appoint monétaire). In a galaxy far, far away, the little prince moves from planet to planet aboard his margarine spaceship. Each planet has its own monetary system $S$, a set of coin values, and the prince must give exact change for his purchases. We always assume $1 \\in S$. For example, the monetary system $S = \\{1, 2, 5\\}$.\n\nWhen the prince arrives on a new planet with a certain amount of money $x \\in \\mathbb{N}$, he converts it into the system $S$. We say he can give change (faire l'appoint) for a price $p$ on an amount $x$ if he can write $p$ as a sub-sum of the coins making up $x$. We denote by $\\mathcal{A}_S(x)$ the set of prices for which he can give change in the system $S$ having an amount $x$ of money. For example $\\mathcal{A}_{\\{1,2,5\\}}(4) = \\{0, 2, 4\\}$ for one decomposition of $x = 4$ into two coins of value 2; with $1+1+2$ instead he gets $\\{0,1,2,3,4\\}$.\n\n1. The little prince arrives on a planet where $S = \\{1, 3, 10\\}$. For which prices is he sure of giving change if:\n   a) he has an amount $x = 10$?\n   b) he has an amount $x = 100$?\n   c) he has an amount $x = 10^n$ for $n \\in \\mathbb{N}^*$?\n\nThe daisy/margarine merchants charge a price $p \\geqslant 1$ such that one is sure of being able to give change for $p$ on any amount of money: such a price $p$ is called $S$-primary (by convention, $0$ is never $S$-primary). For example, for $S = \\{1, 2, 5\\}$, the price 6 is $S$-primary because $6 = 5 + 1 = 2 + 2 + 2$, whereas it is not for prices 1, 2, 3, 4 or 5. The set of $S$-primary prices is denoted $\\mathcal{P}_S$. For example $1, 2, 5, 6 \\in \\mathcal{P}_{\\{1,2,5\\}}$ but $0, 3, 4 \\notin \\mathcal{P}_{\\{1,2,5\\}}$.\n\n2. Which sets $S$ are such that one can characterize the $S$-primary prices if:\n   a) $S = \\{1, u\\}$ for $u \\geqslant 2$?\n   b) $S = 1 + 2\\mathbb{N}$ the set of odd numbers?\n   c) $S = \\{2^n, n \\in \\mathbb{N}\\}$ the set of powers of 2?\n   d) $S = \\{1, v, w\\}$ for $w > v > 2$?\n   e) $S$ the set of prime numbers together with 1?\n\n3. Determine the subsets $S$ of $\\mathbb{N}^*$ such that $\\mathcal{P}_S$ is finite.\n\n4. Give an estimate (frame from below and above) of the value of the largest $S$-primary price when $S$ is finite, as a function of the values of the elements of $S$. One may begin by treating cases (a) and (d) of question 2.\n\n5. Find necessary and/or sufficient conditions for $\\mathcal{P}_S = \\mathbb{N}^*$.\n\nGiven a price $x$, an $m$-tuple $(p_1, \\dots, p_m)$ of $S$-primary prices whose sum is $x$ is called an $S$-decomposition of $x$ if for every subset $J \\subseteq [\\![1, m]\\!]$, the price $x_J = \\sum_{j \\in J} p_j$ is an $S$-appoint of $x$; in other words, every sub-sum (including the empty sum and the full sum) of these prices is an $S$-appoint of $x$. For example, for $S = \\{1, 2, 5\\}$ and $x = 4$, the unique $S$-decomposition of $x$ is the triplet $(1, 1, 2)$ but not the pair $(2, 2)$, because $1 + 2 = 3$ is not an $S$-appoint of 4. Likewise, $(4)$ is not an $S$-decomposition of 4 because 4 is not $S$-primary.\n\n6. For which systems $S$ does every $x$ admit at least one $S$-decomposition?\n\n7. Do there exist systems $S$ for which:\n   a) $S$ is finite and every $S$-decomposition is unique (up to permutation of the $S$-primary numbers)?\n   b) $S$ is infinite and every $S$-decomposition is unique?\n   c) $S$ is of the form $S = \\{1, u, v\\}$ with $1 < u < v$ and every $S$-decomposition is unique?\n   d) at least one price $x$ admits at least two $S$-decompositions that are not permutations of one another?\n\n8. Find necessary and/or sufficient conditions for a system $S$ to verify the property of the preceding question.\n\n9. Propose and study other lines of research.

![[src_tfjm_2023__Q03.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Modular arithmetic / congruences]], [[method_induzione|Induction]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_combinatoria,topic_insiemi_funzioni,topic_aritmetica,method_casework,method_invarianti,method_conteggio,method_congruenze,skill_lettura_attenta,skill_riconoscimento_pattern,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Resolution-change operation on a strip of n notes producing m notes/silences; reachability and minimal operations, then 2D image version*

> 4. Musique déformée
>
> Perrine joue avec un logiciel de montage audio. Elle dispose initialement d'une bande son d'une minute pendant laquelle sont jouées $n \geqslant 1$ notes distinctes, chacune de durée $1/n$. Le logiciel dispose d'une fonctionnalité permettant d'augmenter ou de diminuer la résolution du son. Si Perrine choisit une nouvelle résolution $m \geqslant 1$, le logiciel crée un nouvel audio d'une minute également, constitué de $m$ notes choisies de la manière suivante : pour tout $1 \leqslant k \leqslant m$, pour trouver la $k$-ième note jouée, le logiciel regarde l'intervalle de temps pendant lequel elle doit être jouée dans le nouveau fichier, prend son milieu et choisit la note qui était jouée à cet instant dans l'ancien fichier. Si ce milieu tombe pile entre deux notes dans l'ancien fichier, le logiciel met un silence.
>
> Figure 5 – Exemple de changement de résolution.
>
> La figure 5 représente un changement de résolution où on passe de $n = 4$ à $m = 7$. Chaque case représente une note, les couleurs représentent des notes différentes, le blanc correspond à un silence.
>
> Perrine s'intéresse aux bandes son obtenues après plusieurs transformations successives de ce type.
>
> 1. Pour chacun des événements suivants, dire s'il peut arriver ou non après un nombre fini d'opérations :
>
> a) Une des notes présente dans le fichier initial disparaît.
>
> b) Les notes ne sont plus deux à deux distinctes.
>
> c) Un silence apparaît.
>
> d) Un silence disparaît.
>
> e) Toutes les notes sont les mêmes.
>
> f) La bande son ne contient que des silences.
>
> 2. Dans chacun des cas de la question précédente, quel est le nombre minimal d'opérations qui donnent ce résultat, en fonction de $n$ ?
>
> 3. On choisit $1 \leqslant k \leqslant n$. Reprendre les questions 1 et 2 si Perrine s'interdit de créer un fichier de longueur strictement plus petite que $k$, ie. avec strictement moins de $k$ notes (pas forcément distinctes) et silences.
>
> 4. Le logiciel ne peut maintenant travailler qu'avec des bandes son de longueur impaire.
>
> a) Est-il possible qu'un silence apparaisse ?
>
> b) Perrine part d'un fichier de longueur $n = 3$, fait une suite d'opérations sans passer par un fichier de longueur 1 et retombe sur un fichier de longueur 3. Est-il possible que le fichier initial et le fichier final soient différents ?
>
> c) Perrine part de $n$ notes, fait une suite d'opérations qui la ramène à $n$ notes sans que le nombre de notes ne soit jamais descendu en dessous de $n$. Combien de notes différentes peut contenir le fichier final ? Plus généralement, quels sont les fichiers finaux possibles ?
>
> 5. Reprendre la question 4 sans se restreindre aux longueurs impaires.
>
> Perrine ne manipule maintenant plus des son mais des images. Son image de 1 mètre par 1 mètre est partagée en $n \times n'$ rectangles de taille $1/n \times 1/n'$ de couleurs différentes. Le logiciel peut la transformer en une image de $m \times m'$ rectangles de taille $1/m \times 1/m'$ de la manière suivante : pour tout $1 \leqslant k \leqslant m$, $1 \leqslant k' \leqslant m'$, pour trouver la couleur du rectangle $(k, k')$, le logiciel regarde le centre du rectangle $(k, k')$ et lui attribue la couleur de ce point dans l'ancienne image. Si ce point tombe pile entre deux rectangles de l'ancienne image, le nouveau rectangle s'éteint et devient noir.
>
> 6. Reprendre toutes les questions précédentes dans ce cadre.
>
> 7. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Casework]], [[method_invarianti|Invarianti]], [[method_conteggio|Conteggio]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*operazione di variazione della risoluzione su una striscia di n note che produce m note/silenzi; operazione di accessibilità e minima, quindi versione di immagine 2D*

> Musica distorta (Musique déformée). Perrine gioca con un software audio. Si dispone di una striscia iniziale di un minuto contenente $n$ note distinte poste da capo a capo, ciascuna di durata $1/n$. Il software offre una funzione per modificare la risoluzione della striscia. Perrine sceglie una nuova risoluzione $m \\geqslant 1$ e il software crea una nuova striscia di un minuto contenente le note $m$ scelte come segue: per ogni $k$ con $1 \\leqslant k \\leqslant m$, il software guarda l'istante $k/m$ sulla vecchia striscia. Se questo istante cade strettamente all'interno di una nota vecchia, copia quella nota nella nuova striscia; se cade esattamente tra due note (dove una nota termina e la prossima inizia), mette un silenzio nella nuova striscia. Se l'istante cade dentro un vecchio silenzio, la nuova nota è anche un silenzio.\n\nLa figura 5 mostra un cambiamento di risoluzione passando da $n = 4$ a $m = 7$. Ogni cella rappresenta una nota; i colori rappresentano note diverse; il bianco corrisponde a un silenzio. Perrine è interessato alle strisce ottenute dopo diverse successive trasformazioni di questo tipo. Per ciascuno dei seguenti eventi, dire se può o non può accadere dopo un numero finito di operazioni:\n a) Una nota scompare dalla striscia.\n b) Due note che erano distinte diventano le stesse.\n c) Un silenzio appare.\n d) Un silenzio scompare.\n e) Le note non sono più tutte le stesse.\n f) La striscia non contiene più alcun silenzio.\n\n2. Per ciascuno dei casi della domanda precedente, qual è il numero minimo di operazioni che producono tale risultato, come funzione di $n$?\n\n3. Selezionare $1 \\leqslant k \\leqslant n$. Redo le domande 1 e 2 se Perrine si proibisce di creare una striscia di lunghezza strettamente inferiore a $k$, cioè con note strettamente inferiori a $k$ (non necessariamente distinte). Il software può ora lavorare solo con strisce la cui lunghezza è strana.\n a) È possibile che si verifichi un silenzio?\n b) Partendo da una striscia di lunghezza 1, Perrine esegue una sequenza di operazioni per passare da una striscia di lunghezza 1 a una striscia di lunghezza 1. È possibile che la striscia iniziale e la striscia finale siano diverse?\n c) Partendo dalle note $n$, Perrine esegue una sequenza di operazioni mantenendo il numero di note mai inferiore a $n$ e tornando a una striscia di note $n$. Quante note diverse può contenere la striscia finale? Più in generale, quali sono le possibili strisce finali? Redo domanda 4 limitarsi a lunghezze strane. Perrine ora non manipola strisce ma immagini. La sua immagine è di 1 metro su 1 metro, fatta di rettangoli $n \\times n'$ di dimensioni $1/n \\times 1/n'$ di diversi colori. Il software può trasformare un'immagine dei rettangoli $n \\times n'$ in uno dei rettangoli $m \\times m'$ di dimensioni $1/m \\times 1/m'$ come segue: per ogni $1 \\leqslant k \\leqslant m$ e $1 \\leqslant k' \\leqslant m'$, il software guarda al centro del nuovo rettangolo $(k, k')$. Se questo punto cade all'interno di un rettangolo della vecchia immagine, copia quel colore nel nuovo rettangolo. Se il punto cade esattamente tra due rettangoli della vecchia immagine, il nuovo rettangolo diventa nero. Riprendi tutte le domande precedenti in questo quadro. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2023__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_invarianti|Invarianti / monovarianti]], [[method_conteggio|Conteggio combinatorio]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]


<div class="qlang-split" data-lang="en"></div>


*Resolution-change operation on a strip of n notes producing m notes/silences; reachability and minimal operations, then 2D image version*

> Distorted music (Musique déformée). Perrine plays with an audio montage software. She arranges an initial strip of one minute holding $n$ distinct notes placed end to end, each of duration $1/n$. The software offers a feature to change the resolution of the strip. Perrine chooses a new resolution $m \\geqslant 1$, and the software creates a new strip of one minute holding $m$ notes chosen as follows: for each $k$ with $1 \\leqslant k \\leqslant m$, the software looks at the instant $k/m$ on the old strip. If this instant falls strictly inside an old note, it copies that note into the new strip; if it falls exactly between two notes (where one note ends and the next begins), it puts a silence in the new strip. If the instant falls inside an old silence, the new note is a silence too.\n\nFigure 5 shows a resolution change passing from $n = 4$ to $m = 7$. Each cell represents one note; colors represent different notes; white corresponds to a silence.\n\nPerrine is interested in the strips obtained after several successive transformations of this kind.\n\n1. For each of the following events, say whether it can or cannot happen after a finite number of operations:\n   a) A note disappears from the strip.\n   b) Two notes that were distinct become the same.\n   c) A silence appears.\n   d) A silence disappears.\n   e) The notes are no longer all the same.\n   f) The strip no longer contains any silence.\n\n2. For each of the cases of the preceding question, what is the minimal number of operations that produce that result, as a function of $n$?\n\n3. Choose $1 \\leqslant k \\leqslant n$. Redo questions 1 and 2 if Perrine forbids herself from creating a strip of length strictly less than $k$, that is, with strictly fewer than $k$ notes (not necessarily distinct).\n\n4. The software can now work only with strips whose length is odd.\n   a) Is it possible for a silence to appear?\n   b) Starting from a strip of length 1, Perrine performs a sequence of operations to go from a strip of length 1 to a strip of length 1. Is it possible that the initial strip and the final strip be different?\n   c) Starting from $n$ notes, Perrine performs a sequence of operations keeping the number of notes never below $n$ and returning to a strip of $n$ notes. How many different notes can the final strip hold? More generally, which are the possible final strips?\n\n5. Redo question 4 restricting oneself to odd lengths.\n\nPerrine now manipulates not strips but images. Her image is 1 metre by 1 metre, made of $n \\times n'$ rectangles of size $1/n \\times 1/n'$ of different colors. The software can transform an image of $n \\times n'$ rectangles into one of $m \\times m'$ rectangles of size $1/m \\times 1/m'$ as follows: for each $1 \\leqslant k \\leqslant m$ and $1 \\leqslant k' \\leqslant m'$, the software looks at the center of the new rectangle $(k, k')$. If this point falls inside a rectangle of the old image, it copies that color into the new rectangle. If the point falls exactly between two rectangles of the old image, the new rectangle becomes black.\n\n6. Redo all the preceding questions in this framework.\n\n7. Propose and study other lines of research.

![[src_tfjm_2023__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Casework]], [[method_invarianti|Invarianti]], [[method_conteggio|Conteggio]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,topic_trigonometria,topic_combinatoria,topic_aritmetica,method_casework,method_trigonometria,method_estremalita,method_congruenze,skill_ragionamento_geometrico,skill_casework_accurato,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="fr"></div>


*Sets of points/polygons with all integer-degree angles; maxima under convexity, concyclicity, collinearity, and two-line constraints*

> Angles entiers
>
> Pour passer le temps, Emmanuel aime dessiner des figures géométriques. Cependant, quand il dessine des figures quelconques, il n'arrive pas toujours à bien mesurer les angles avec son rapporteur. C'est pourquoi il se restreint aux figures possédant des angles entiers.
>
> On dit qu'un angle est entier si sa mesure, en degrés, est un nombre entier (un tour vaut $360^\circ$). On dit qu'un ensemble de points du plan est aux angles entiers s'ils sont deux à deux distincts, pas tous alignés et si pour tout triplet de points de cet ensemble, le triangle formé (éventuellement aplati) possède trois angles entiers.
>
> Figure 6 – Exemple de figure aux angles entiers, formée de deux triangles équilatéraux : les angles oranges et bleus mesurent tous $30^\circ$ et $60^\circ$ respectivement.
>
> 1. Pour quels $n \geqslant 3$ le $n$-gone régulier est-il aux angles entiers ?
>
> Un polygone est dit convexe si tous ses angles intérieurs mesurent strictement entre $0^\circ$ et $180^\circ$.
>
> 2. Quel est le $n$ maximal tel qu'il existe un $n$-gone convexe aux angles entiers ? Et en imposant que le polygone ne soit pas régulier ?
>
> 3. Reprendre la question précédente si on impose que :
>    a) Il existe quatre points qui ne sont pas sur un même cercle.
>    b) Quatre points ne sont jamais sur un même cercle.
>
> 4. On n'impose plus que les points forment un polygone convexe. Quel est le nombre maximal de points formant un ensemble aux angles entiers ? Même question en imposant à la fois que trois points ne soient jamais sur une même droite et quatre points ne soient jamais sur un même cercle.
>
> 5. Emmanuel trace maintenant deux droites parallèles distinctes et s'impose que chaque point soit sur une des deux droites. Quel est le nombre maximal de points formant un ensemble aux angles entiers sous cette contrainte ? Même question en imposant de plus qu'il y ait autant de points sur chaque droite.
>
> 6. Emmanuel ne trace plus deux droites parallèles mais deux droites formant un angle $\theta$ entier. Reprendre la question précédente en fonction de $\theta$.
>
> 7. Reprendre le problème si le rapporteur d'Emmanuel n'est plus gradué en degrés mais en grades (un tour vaut $400^g$).
>
> 8. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]], [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Casework]], [[method_trigonometria|Trigonometria]], [[method_estremalita|Estremalità]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>

*Insiemi di punti o poligoni con tutti gli angoli di ampiezza intera (in gradi); massimi sotto ipotesi di convessità, conciclicità, allineamento e vincolo a due rette.*
> Angoli interi (angoli integrali). Per passare il tempo, Emmanuel si diverte disegnando figure geometriche. Ma quando disegna cifre arbitrarie, non può sempre misurare gli angoli con un prolungatore. È fastidioso quando segnala un angolo che non è un numero intero di gradi, cioè non in $\\{0^\\circ, 1^\\circ, \\dots, 360^\\circ\\}$. Dice che un insieme di punti del piano ha angoli interi (aux angles entiers) se per qualsiasi tre punti distinti del set, sia allineati che no, il triangolo che formano (possibilmente appiattito) ha tre angoli interi.\n\n1. Per quale $n \\geqslant 3$ il normale $n$-gon ha angoli interi?\n\nUn poligono è detto convexo se i suoi angoli interni misurano rigorosamente tra $0^\\circ$ e $180^\\circ$.\n\n2. Qual è il massimo $n$ tale che esista un convex $n$-gon con angoli interi? E impone che il poligono non sia regolare? Riprendi la domanda precedente che impone questo:\n a) Quattro punti non sono mai sullo stesso cerchio.\n b) Quattro punti non sono mai contemporaneamente sullo stesso cerchio.\n\n4. Ora imponiamo che i punti formino un poligono convex. Qual è il numero massimo di punti che formano un insieme con angoli interi? La stessa domanda impone allo stesso tempo che non ci sono tre punti allineati e che non più di tre punti sono sullo stesso cerchio. Emmanuel traccia ora due linee parallele distinte e impone che ogni punto sia su una delle due linee. Qual è il numero massimo di punti che formano un insieme con angoli interi sotto questo vincolo? La stessa domanda che impone inoltre che ci siano uguali punti su ogni linea. Emmanuel traccia ora due linee che formano un angolo intero $\\theta$ invece di due linee parallele. Riprendi la domanda precedente come funzione di $\\theta$.\n\n7. Riprendi la domanda precedente se il prolungatore di Emmanuel non è graduato in gradi ma in gradi (un giro completo è $400$ gradi).\n\n8. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2023__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]], [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_trigonometria|Tecniche trigonometriche]], [[method_estremalita|Principio di estremalita]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]


<div class="qlang-split" data-lang="en"></div>


*Sets of points/polygons with all integer-degree angles; maxima under convexity, concyclicity, collinearity, and two-line constraints*

> Integer angles (Angles entiers). To pass the time, Emmanuel amuses himself drawing geometric figures. But when he draws arbitrary figures, he cannot always measure the angles with a protractor. It is annoying when he reports an angle that is not an integer number of degrees, that is, not in $\\{0^\\circ, 1^\\circ, \\dots, 360^\\circ\\}$. He says that a set of points of the plane has integer angles (aux angles entiers) if for any three distinct points of the set, whether aligned or not, the triangle they form (possibly flattened) has three integer angles.\n\n1. For which $n \\geqslant 3$ does the regular $n$-gon have integer angles?\n\nA polygon is said convex if its interior angles measure strictly between $0^\\circ$ and $180^\\circ$.\n\n2. What is the maximal $n$ such that there exists a convex $n$-gon with integer angles? And imposing that the polygon be not regular?\n\n3. Redo the preceding question imposing this:\n   a) Four points are never on the same circle.\n   b) Four points are never simultaneously on the same circle.\n\n4. We now impose that the points form a convex polygon. What is the maximal number of points forming a set with integer angles? Same question imposing at the same time that no three points are aligned and that no more than three points are on the same circle.\n\n5. Emmanuel now traces two distinct parallel lines and imposes that each point be on one of the two lines. What is the maximal number of points forming a set with integer angles under this constraint? Same question imposing moreover that there be just as many points on each line.\n\n6. Emmanuel now traces two lines forming an integer angle $\\theta$ instead of two parallel lines. Redo the preceding question as a function of $\\theta$.\n\n7. Redo the previous question if Emmanuel's protractor is not graduated in degrees but in grades (a full turn being $400$ grades).\n\n8. Propose and study other lines of research.

![[src_tfjm_2023__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]], [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Casework]], [[method_trigonometria|Trigonometria]], [[method_estremalita|Estremalità]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,topic_logica,method_grafi,method_invarianti,method_casework,skill_astrazione,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Hierarchies as oriented social-bond graphs; emeutes (riots) that flip and add bonds; stability, reachability, revolutions on complete/coherent/arbitrary tribes*

> Tribus hiérarchiques
>
> Sur un archipel lointain vivent des tribus, chacune avec un ordre social bien établi. Deux individus sont en lien social si l'un est le supérieur de l'autre. Une hiérarchie est un ensemble de liens sociaux tel qu'il y ait au plus un lien social entre deux personnes différentes. Pour deux individus différents $A$ et $B$, on note $A \to B$ si $A$ est le supérieur de $B$. On prendra garde au fait que si $A$ est hiérarchiquement supérieur à $B$ et $B$ est hiérarchiquement supérieur à $C$ alors $A$ n'est pas forcément supérieur à $C$. Autrement dit, si on a $A \to B$ et $B \to C$, alors on n'a pas nécessairement $A \to C$.
>
> Sur l'île de Tournoasis vit une tribu organisée dans une hiérarchie complète : pour toute paire d'individus $A$ et $B$, on a soit $A \to B$, soit $B \to A$.
>
> Deux personnes mécontentes de la hiérarchie peuvent déclencher une émeute. Une émeute déclenchée par $A \to B$ transforme la hiérarchie en trois étapes :
>
> a) Pour toute suite de liens sociaux $C \to A \to B \to D$ avec $C$ différent de $D$, on ajoute un lien social $C \to D$ (à ce stade, on peut avoir plusieurs liens sociaux entre deux personnes),
>
> b) On renverse la hiérarchie entre $A$ et $B$ : $B \to A$ (d'où l'émeute),
>
> c) On simplifie la hiérarchie : s'il y a plusieurs liens sociaux entre deux personnes $X$ et $Y$, alors on les remplace par le lien social majoritaire, ou bien par aucun lien social en cas d'égalité. Ainsi, $X \rightrightarrows Y$ devient $X \to Y$ et $X \rightleftarrows Y$ devient $X\ Y$.
>
> Comme la hiérarchie doit être complète sur Tournoasis, si le résultat final laisse des paires de personnes sans lien social, alors l'émeute ne peut pas avoir lieu.
>
> La figure 7 représente trois exemples d'émeute entre $A$ et $B$. La situation initiale est en haut et le résultat en bas. La configuration à gauche est cohérente, et celle à droite est complète. Sur Tournoasis, l'émeute entre $C$ et $D$ dans l'exemple à droite ne peut avoir lieu.
>
> Figure 7 – Trois exemples d'émeutes entre $A$ et $B$.
>
> 1. Existe-t-il des hiérarchies stables, dans lesquelles aucune émeute ne peut éclater ? Si oui, pour quel nombre d'individus ?
>
> Pour deux hiérarchies $H_1$ et $H_2$, on écrit $H_1 \to H_2$ s'il y a une suite finie d'émeutes qui transforme $H_1$ en $H_2$.
>
> 2. Est-il vrai que si $H_1 \to H_2$, alors on a aussi $H_2 \to H_1$ ?
>
> Une révolution est une suite d'émeutes telle que le résultat final a renversé toutes les flèches.
>
> 3. Caractériser les hiérarchies pour lesquelles une révolution est possible.
>
> 4. Pour deux hiérarchies complètes $H_1$ et $H_2$, décider si on a toujours $H_1 \to H_2$. Si non, donner des conditions nécessaires et suffisantes pour avoir $H_1 \to H_2$.
>
> Sur l'île voisine, Courtoasis, vit une tribu similaire. Chez eux, les hiérarchies ne sont pas nécessairement complètes, mais elles doivent être cohérentes, c'est-à-dire qu'il n'y a pas d'individus $A_1, A_2, \ldots, A_n$ ($n > 1$) avec $A_1 \to A_2 \to \ldots \to A_n \to A_1$. Si une émeute rend la hiérarchie non-cohérente, alors elle ne peut pas avoir lieu.
>
> 5. Reprendre les questions précédentes dans ce cadre.
>
> Sur une troisième île, Carquoisis, vit une tribu avec une hiérarchie moins stricte, pas nécessairement complète ni cohérente. Une émeute peut donc toujours avoir lieu.
>
> 6. Reprendre les questions 2, 3 et 4 dans ce cadre.
>
> 7. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_invarianti|Invarianti]], [[method_casework|Casework]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Ierarchie come grafici di legami sociali orientati; emeute (rivolti) che girano e aggiungono legami; stabilità, accessibilità, rivoluzioni sulle tribù complete/coerenti/arbitrali*

> Tribù gerarchici (Tribus hierarchiques). In un arcipelago lontano da tutti, le tribù hanno un ordine sociale ben consolidato. Due individui sono collegati socialmente se uno è socialmente superiore all'altro. Una gerarchia è un insieme di collegamenti che vanno da un individuo all'altro. Per due individui $A$ e $B$, scriviamo $A \\to B$ se $A$ è socialmente (ierarchicamente) superiore a $B$. Supponiamo che ci siano almeno due persone. La superiorità gerarchica non è transitiva: se $A \\to B$ e $B \\to C$, allora non necessariamente $A \\to C$.\n\nSulla Tournoasis Isle una tribù si organizza in una completa gerarchia: per qualsiasi coppia di individui $A$ e $B$, si ha o $A \\to B$ o $B \\to A$.\n\nDue persone insoddisfatte possono dichiarare un émeute (rivolto). Una rivolta provocata da $A \\to B$ trasforma la gerarchia in tre fasi:\n a) Per ogni collegamento sociale $C \\to A$ e $B \\to D$ con $C$ e $D$ diversi, si aggiunge un collegamento sociale $C \\to D$ (in questa fase si possono avere più collegamenti sociali tra due persone).\n b) Si inverte il collegamento $A \\to B$ in $B \\to A$.\n c) Se, tra due persone $X$ e $Y$, ci sono più collegamenti sociali, si sostituiscono con il collegamento sociale di maggioranza, o con un singolo collegamento sociale in caso di legame. Così $X \\rightrightarrows Y$ diventa $X \\to Y$, e un tie $X \\rightrightarrows Y$ lascia $X$ e $Y$ non collegati.\n\nCome la gerarchia deve rimanere completa su Tournoasis, se il risultato finale lascia una coppia di persone senza legame sociale, allora l'émeute non può avvenire.\n\nLa figura 7 mostra tre esempi di émeutes tra $A$ e $B$. La situazione iniziale è a sinistra e il risultato finale a destra. Su Tournoasis, non può avvenire l'emeute tra $C$ e $D$ nell'esempio di destra.\n\n1. Esistono gerarchie stabili, in cui non può scoppiare alcuna rivolta? In tal caso, per quali numeri di individui?\n\nPer due gerarchie $H_1$ e $H_2$, scriviamo $H_1 \\to H_2$ se c'è una sequenza finita di émeutes che trasforma $H_1$ in $H_2$.\n\n2. E' vero che se $H_1 \\to H_2$, allora anche $H_2 \\to H_1$?\n\nUna rivoluzione è una sequenza di émeutes tale che il risultato finale ha invertito tutte le frecce.\n\n3. Caratterizzare le gerarchie per le quali una rivoluzione è possibile. Per quali gerarchie complesse $H_1$ e $H_2$ esiste una sequenza di émeutes che porta $H_1 \\to H_2$? Se non sempre, dare le condizioni necessarie e sufficienti per avere $H_1 \\to H_2$.\n\nNella vicina isola, Courtoasis, vive una tribù simile. Qui, le gerarchie non sono necessariamente complete, ma devono essere coerenti, il che significa che non ci sono individui $A_1, A_2, \\dots, A_n$ ($n > 1$) con $A_1 \\to A_2 \\to \\dots \\to A_n \\to A_1$. Se una rivolta rendesse la gerarchia non coerente, allora non può avvenire. Rendiamo le domande precedenti in questo quadro. In una terza isola, Carquoisis, vive una tribù con una gerarchia meno rigorosa, non necessariamente completa né coerente. Una rivolta può quindi avvenire sempre. Redo le domande 2, 3 e 4 in questo quadro. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2023__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_grafi|Teoria dei grafi]], [[method_invarianti|Invarianti / monovarianti]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Hierarchies as oriented social-bond graphs; emeutes (riots) that flip and add bonds; stability, reachability, revolutions on complete/coherent/arbitrary tribes*

> Hierarchical tribes (Tribus hiérarchiques). On an archipelago far from everyone, the tribes each have a well-established social order. Two individuals are linked socially if one is socially superior to the other. A hierarchy is a set of links going from each individual to others. For two individuals $A$ and $B$, we write $A \\to B$ if $A$ is socially (hierarchically) superior to $B$. We assume there are at least 2 persons. Hierarchical superiority is not transitive: if $A \\to B$ and $B \\to C$, then not necessarily $A \\to C$.\n\nOn Tournoasis Isle a tribe organizes itself in a complete hierarchy: for any pair of individuals $A$ and $B$, one has either $A \\to B$ or $B \\to A$.\n\nTwo discontented persons can declare an émeute (riot). An émeute triggered by $A \\to B$ transforms the hierarchy in three steps:\n   a) For every social link $C \\to A$ and $B \\to D$ with $C$ and $D$ different, one adds a social link $C \\to D$ (at this stage one may have several social links between two persons).\n   b) One reverses the link $A \\to B$ into $B \\to A$.\n   c) If, between two persons $X$ and $Y$, there are several social links, one replaces them by the majority social link, or by a single social link in case of a tie. Thus $X \\rightrightarrows Y$ becomes $X \\to Y$, and a tie $X \\rightrightarrows Y$ leaves $X$ and $Y$ unlinked.\n\nAs the hierarchy must stay complete on Tournoasis, if the final result would leave a pair of persons with no social link, then the émeute cannot take place.\n\nFigure 7 shows three examples of émeutes between $A$ and $B$. The initial situation is on the left and the final result on the right. On Tournoasis, the émeute between $C$ and $D$ in the right-hand example cannot take place.\n\n1. Do there exist stable hierarchies, in which no émeute can break out? If so, for which numbers of individuals?\n\nFor two hierarchies $H_1$ and $H_2$, we write $H_1 \\to H_2$ if there is a finite sequence of émeutes transforming $H_1$ into $H_2$.\n\n2. Is it true that if $H_1 \\to H_2$, then also $H_2 \\to H_1$?\n\nA révolution is a sequence of émeutes such that the final result has reversed all the arrows.\n\n3. Characterize the hierarchies for which a révolution is possible.\n\n4. For which complete hierarchies $H_1$ and $H_2$ does there exist a sequence of émeutes bringing $H_1 \\to H_2$? If not always, give necessary and sufficient conditions to have $H_1 \\to H_2$.\n\nOn the neighboring isle, Courtoasis, lives a similar tribe. There, hierarchies are not necessarily complete, but they must be coherent, meaning there are no individuals $A_1, A_2, \\dots, A_n$ ($n > 1$) with $A_1 \\to A_2 \\to \\dots \\to A_n \\to A_1$. If an émeute would make the hierarchy non-coherent, then it cannot take place.\n\n5. Redo the preceding questions in this framework.\n\nOn a third isle, Carquoisis, lives a tribe with a less strict hierarchy, not necessarily complete nor coherent. An émeute can therefore always take place.\n\n6. Redo questions 2, 3 and 4 in this framework.\n\n7. Propose and study other lines of research.

![[src_tfjm_2023__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_invarianti|Invarianti]], [[method_casework|Casework]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_geometria_piana,topic_trigonometria,topic_combinatoria,method_simmetria,method_trigonometria,method_casework,method_conteggio,skill_ragionamento_geometrico,skill_astrazione,skill_riconoscimento_pattern,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="fr"></div>


*Laser reflecting inside an equilateral (then right-isosceles, then general) triangle with mirrored sides and open vertices; counting rebounds n(t)*

> Miroirs et lasers
>
> Clémence dispose d'un triangle équilatéral $ABC$ de telle sorte qu'il y ait des miroirs sur les trois côtés du triangle et qu'il y ait un trou (de taille infiniment petite) sur chacun des sommets. Elle s'amuse a envoyer un rayon laser parfait, c'est-à-dire sans épaisseur, depuis le trou qui se trouve au point $A$. Chaque tir de rayon laser est réfléchi sur les côtés du triangle en suivant les règles de la mécanique classique : l'angle rentrant que fait le laser avec la normale du miroir est le même que l'angle sortant (voir Figure 8). Il fini par ressortir du triangle ou reste emprisonné pour toujours.
>
> Pour chaque tir $t$ de rayon laser que Clémence effectue, on peut donc noter $n(t) \in \mathbb{N} \cup \{\infty\}$ le nombre de fois que le rayon laser se réfléchit sur les miroirs avant de ressortir.
>
> Figure 8 – Un exemple de réflexion d'un rayon laser (en bleu) sur un miroir (en noir).
>
> Figure 9 – Trois exemples de tirs qui se reflètent sur les parois du triangle.
>
> La figure 9 représente, de gauche à droite : un exemple de trajectoire avec 3 reflets dans un triangle à trois trous, de trajectoire à 7 reflets avec un triangle à un trou, et de deux trajectoires qui se retrouvent au même endroit après avoir parcouru exactement la même distance (voir question 3).
>
> 1. Clémence essaie de comprendre l'ensemble des valeurs que peut prendre $n(t)$.
>    a) Quelles sont les valeurs que $n(t)$ peut prendre ? On pourra commencer par s'intéresser aux petites valeurs possibles de $n(t)$ : peut-on avoir $n(t) = 1, 2, 3, 4$ ou $5$ ? Existe-t-il des tirs $t$ avec $n(t) = \infty$, c'est-à-dire que le rayon laser ne ressort jamais du triangle $ABC$ ?
>    b) Soit $n$ un entier. Trouver combien de tirs $t$ différents vérifient $n(t) = n$.
>
> 2. On suppose maintenant qu'il n'y a plus qu'un trou au sommet $A$ et que de plus les tirs que Clémence effectue ne peuvent pas passer par les sommets $B$ et $C$ pour éviter des problèmes dans la définition des rebonds. Reprendre la question 1 dans ce cadre.
>
> 3. Clémence décide d'effectuer deux tirs simultanés distincts depuis le sommet $A$ dont on suppose qu'ils ne ressortent jamais du triangle. En prenant une vitesse de la lumière finie constante, ces deux tirs progressent donc à vitesse finie au sein du triangle. Si les deux rayons sont au même endroit à un certain instant $s > 0$ (c'est-à-dire après avoir parcouru la même distance), existe-t-il forcément un instant $s' > s$ auquel les rayons sont à nouveau au même endroit ? Même question si les tirs partent de deux sommets différents $A$ et $B$.
>
> 4. Est-il possible qu'un rayon laser partant du point $A$ passe par tous les points du triangle (y compris l'intérieur) sauf les points $B$ et $C$ ? Dans cette question seulement on suppose que le rayon laser est épais, il part toujours du point $A$ mais avec un angle $\alpha > 0$, reprendre la question précédente sous cette hypothèse.
>
> 5. Reprendre les questions 1, 2 et 3 dans le cas où $ABC$ est un triangle rectangle isocèle (il y a deux cas à traiter, ou bien le segment $BC$ est l'hypoténuse ou bien il ne l'est pas).
>
> 6. Clémence s'intéresse maintenant au cas de triangles beaucoup plus généraux. Elle note maintenant $n_{ABC}(t)$ le nombre de rebonds d'un tir $t$ dans un triangle $ABC$ quelconque où seulement le sommet $A$ est troué.
>    a) Quelles sont les valeurs possibles pour $n_{ABC}(t)$ lorsque $ABC$ et $t$ sont libres ?
>    b) Existe-t-il des triangles pour lesquels $n_{ABC}(t)$ ne peut prendre que la valeur $\infty$ quel que soit le tir $t$ effectué ? Si oui, les caractériser autant que possible.
>    c) On note $S$ l'ensemble des valeurs que peut prendre $n_{ABC}(t)$ dans la question précédente. Existe-t-il un triangle $XYZ$ de telle sorte que les valeurs de $n_{XYZ}(t)$ soient exactement $S$ lorsque $t$ parcourt l'ensemble des tirs possibles ?
>    d) Reprendre les questions 1 et 2 pour des triangles quelconques.
>
> 7. Reprendre les questions 1, 2, 3 et 6 dans le cadre du carré et de l'hexagone régulier, puis des polygones réguliers quelconques.
>
> 8. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_trigonometria|Trigonometria]], [[method_casework|Casework]], [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Laser riflesso all'interno di un triangolo equilaterale (poi a destra, poi a fianco e a fianco) con lati specchiati e vertici aperti; conteggio dei rimbalzi n(t)*

> Specchi e laser (Specchi e laser). Clémence ha un triangolo equilaterale $ABC$ disposto in modo che ci siano specchi sui tre lati e in modo che il laser possa uscire solo attraverso i vertici (che sono buchi infinitamente piccoli). Si diverte a sparare un raggio laser che, da un certo punto, riflette dai lati del triangolo seguendo le regole della meccanica classica: l'angolo che il raggio fa con il normale allo specchio è uguale all'angolo tra il raggio in entrata e il raggio in uscita (vedi Figura 8). Se il raggio colpisce un vertice, viene imprigionato per sempre. Per un tiro $t$ del raggio laser che Clémence scatta, indichiamo con $n(t) \\in \\mathbb{N} \\cup \\{\\infty\\}$ il numero di volte che il raggio si riflette dagli specchi prima di tornare fuori. Clémence cerca di comprendere l'insieme dei valori che $n(t)$ può assumere.\n a) Quali sono i valori che $n(t)$ può assumere? Si possono studiare i valori più piccoli possibili di $n(t)$: si può avere $n(t) = 1, 2, 3, 4$ o 5? Esistono scatti $t$ con $n(t) = \\infty$, cioè il raggio laser non lascia mai il triangolo $ABC$?\n b) Let $n$ essere un numero intero. Trova quanti scatti distinti $t$ verificano $n(t) = n$.\n\n2. Supponiamo ora che non ci sia più un colpo che possa passare attraverso i vertici $B$ e $C$, al fine di evitare i problemi con i rimbalzi. Riprendiamo la domanda 1 in questo quadro. Clémence decide di sparare due colpi simultanei distinte dal vertice $A$, supponendo che questi due raggi viaggiino alla stessa velocità costante della luce. Quindi i due raggi usciranno nello stesso luogo in un certo istante $s > 0$ (cioè dopo aver percorso la stessa distanza). C'è necessariamente un istante $s' >$ tale che i raggi uscino di nuovo nello stesso luogo? La stessa domanda se le riprese partono da due vertici diversi $A$ e $B$.\n\n4. È possibile che un raggio laser partendo da un punto $A$ passi attraverso tutti i punti del triangolo (compreso l'interno) tranne i punti $B$ e $C$? In una nuova versione di questa domanda, supponiamo che il raggio laser sia spessore (spessore), ancora partendo dal punto $A$ ma con una larghezza angolare $\\alpha > 0$; rifacciamo la domanda precedente in base a questa ipotesi.\n\n5. Redo le domande 1, 2 e 3 nel caso in cui $ABC$ è un triangolo a piega retta (ci sono due casi da gestire, o il segmento $BC$ è l'ipotenusa o non lo è).\n\n6. Clémence considera ora i triangoli molto più generali. Indica con $n_{ABC}(t)$ il numero di rimbalzi di un colpo $t$ in un triangolo arbitrario $ABC$ dove solo il vertice $A$ è aperto.\n a) Quali sono i valori possibili per $n_{ABC}(t)$ quando $ABC$ e $t$ sono liberi?\n b) Esistono triangoli per i quali $n_{ABC}(t)$ può prendere solo il valore $\\infty$ qualunque sia il colpo $t$? In tal caso, caratterizzare il più possibile.\n c) Let $\\mathcal{S}$ essere l'insieme di valori che $n_{ABC}(t)$ può prendere nella domanda precedente. Esiste un triangolo $XYZ$ tale che i valori di $n_{XYZ}(t)$ descrivano esattamente $\\mathcal{S}$ come $t$ corre su tutti i possibili scatti?\n d) Redo domande 1 e 2 per questi triangoli.\n\n7. Redo le domande 1, 2, 3 e 6 nel caso del quadrato e dell'esagono regolare, quindi di poligoni regolari arbitrari. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2023__Q07.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]], [[method_trigonometria|Tecniche trigonometriche]], [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Laser reflecting inside an equilateral (then right-isosceles, then general) triangle with mirrored sides and open vertices; counting rebounds n(t)*

> Mirrors and lasers (Miroirs et lasers). Clémence has an equilateral triangle $ABC$ arranged so that there are mirrors on the three sides and so that the laser can exit only through the vertices (which are infinitely small holes). She amuses herself firing a laser ray that, from a certain point, reflects off the sides of the triangle following the rules of classical mechanics: the angle the ray makes with the normal to the mirror equals the angle between the incoming ray and the outgoing ray (see Figure 8). If the ray hits a vertex it is imprisoned forever.\n\nFor a shot $t$ of the laser ray that Clémence fires, we denote by $n(t) \\in \\mathbb{N} \\cup \\{\\infty\\}$ the number of times the ray reflects off the mirrors before coming back out.\n\n1. Clémence tries to understand the set of values that $n(t)$ can take.\n   a) Which are the values $n(t)$ can take? One may study the smallest possible values of $n(t)$: can one have $n(t) = 1, 2, 3, 4$ or 5? Do there exist shots $t$ with $n(t) = \\infty$, i.e. the laser ray never leaves the triangle $ABC$?\n   b) Let $n$ be an integer. Find how many distinct shots $t$ verify $n(t) = n$.\n\n2. Suppose now there is no longer a shot that can pass through the vertices $B$ and $C$, in order to avoid the problems with rebounds. Redo question 1 in this framework.\n\n3. Clémence decides to fire two simultaneous distinct shots from the vertex $A$, assuming these two rays travel at the same constant speed of light. So the two rays exit at the same place at a certain instant $s > 0$ (that is, after having travelled the same distance). Does there necessarily exist an instant $s' >$ such that the rays exit again at the same place? Same question if the shots start from two different vertices $A$ and $B$.\n\n4. Is it possible for a laser ray starting from a point $A$ to pass through all points of the triangle (including the interior) except the points $B$ and $C$? In a new version of this question, suppose the laser ray is thick (épais), still starting from point $A$ but with an angular width $\\alpha > 0$; redo the previous question under this hypothesis.\n\n5. Redo questions 1, 2 and 3 in the case where $ABC$ is a right isosceles triangle (there are two cases to handle, either the segment $BC$ is the hypotenuse or it is not).\n\n6. Clémence now considers much more general triangles. She denotes by $n_{ABC}(t)$ the number of rebounds of a shot $t$ in an arbitrary triangle $ABC$ where only the vertex $A$ is open.\n   a) Which are the possible values for $n_{ABC}(t)$ when $ABC$ and $t$ are free?\n   b) Do there exist triangles for which $n_{ABC}(t)$ can only take the value $\\infty$ whatever the shot $t$? If so, characterize them as much as possible.\n   c) Let $\\mathcal{S}$ be the set of values that $n_{ABC}(t)$ can take in the preceding question. Does there exist a triangle $XYZ$ such that the values of $n_{XYZ}(t)$ describe exactly $\\mathcal{S}$ as $t$ runs over all possible shots?\n   d) Redo questions 1 and 2 for these triangles.\n\n7. Redo questions 1, 2, 3 and 6 in the case of the square and of the regular hexagon, then of arbitrary regular polygons.\n\n8. Propose and study other lines of research.

![[src_tfjm_2023__Q07.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_trigonometria|Trigonometria]], [[method_casework|Casework]], [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,topic_algebra,topic_logica,method_conteggio,method_casework,method_invarianti,skill_conteggio_sistematico,skill_astrazione,skill_modellizzazione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="fr"></div>


*Card-deck shuffles as permutations; finding the shuffle sigma in minimum games, and realizable objectives (target partitions) per shuffle*

> Graine de deck
>
> Nicolas joue à un jeu de construction de deck de cartes et cherche à obtenir le paquet parfait, quitte à recommencer de nombreuses fois.
>
> Soient $k, n \in \mathbb{N}^*$ avec $k$ divisant $n$ et $k \geqslant 2$. Le paquet de Nicolas contient un total de $n$ cartes comportant chacune un symbole, avec éventuellement des cartes identiques. Lors de son tour, il pioche les $k$ premières cartes de son paquet et les joue dans l'ordre de son choix. Les cartes sont défaussées au fur et à mesure qu'elles sont jouées. Une fois que son deck est vide (après $n/k$ tours), sa défausse est retournée puis mélangée pour former un nouveau deck, et il joue une seconde fois toutes ses cartes de la même manière. Dans le cas particulier où $k = n$, Nicolas pioche le paquet entier en une seule fois donc l'ordre initial des cartes n'a pas d'importance. Avant d'être mélangée, la défausse contient les cartes dans l'ordre où elles ont été jouées.
>
> On suppose que le mélange effectué est toujours le même : la première carte est toujours au même endroit après mélange, la deuxième aussi, la troisième aussi... Par exemple avec quatre cartes, un mélange possible est $\sigma = \begin{pmatrix} 1234 \\ 3142 \end{pmatrix}$, c'est-à-dire que les cartes en positions $1, 2, 3, 4$ dans le paquet avant mélange se retrouvent en position $3, 1, 4, 2$ après mélange. Si avant mélange le paquet est $(A, B, A, C)$ alors après mélange il sera $(B, C, A, A)$.
>
> Nicolas connaît la composition de son deck et son ordre initial mais pas le mélange. Il peut faire autant de parties qu'il le souhaite.
>
> La figure 10 représente deux exemples de parties avec $n = 6$ cartes, 3 cartes $A$, 3 cartes $B$, qui sont initialement dans l'ordre $(A, B, A, B, A, B)$, où les cartes sont jouées $k = 3$ par 3 (donc une partie est composée de $n/k = 2$ tours) et où le mélange est $\sigma = \begin{pmatrix} 123456 \\ 152346 \end{pmatrix}$. Dans chaque exemple, la colonne de gauche est l'état du paquet en début de partie, celle du milieu est l'état du paquet après qu'il a joué toutes ses cartes une fois et celle de droite est l'état du paquet après mélange. Ces choix montrent que les objectifs $(ABABAB, (AAA, BBB))$ et $(ABABAB, (AAB, ABB))$ sont tous deux réalisables avec le mélange $\sigma$ (voir question 3). Le second choix permet de distinguer $\sigma$ de $\begin{pmatrix} 123456 \\ 153246 \end{pmatrix}$ mais pas le premier (car l'état final du paquet est le même).
>
> Figure 10 – Deux exemples de parties.
>
> 1. Dans cette question, le but de Nicolas est de trouver le mélange $\sigma$ le plus rapidement possible. L'ordre initial, avant que la partie commence, est toujours le même. De combien de parties a-t-il besoin au minimum lorsque :
>    a) $k = n$, et toutes les cartes sont différentes ?
>    b) $k = n$, et le deck est constitué de 2 cartes différentes, une unique et l'autre en $n - 1$ exemplaires ?
>    c) $k = n$, $n$ est pair et le deck est constitué de 2 cartes différentes, chacune en $n/2$ exemplaires ?
>    d) $k = 2$, $n$ est pair, le deck est constitué de 2 cartes différentes, chacune en $n/2$ exemplaires, et l'ordre initial est une alternance parfaite des deux cartes ?
>    e) $k = n$ et le deck est constitué de $a$ cartes différentes, chacune en $n/a$ exemplaires, pour un certain $a$ qui divise $n$ ?
>
> 2. En fonction de $k$ et de $n$, caractériser les compositions ordonnées initiales du paquet de départ pour lesquels Nicolas peut parvenir à coup sûr à trouver $\sigma$.
>
> Nicolas ne s'intéresse désormais plus au mélange $\sigma$ mais veut seulement obtenir la partie parfaite. Il sait quelles sont les cartes qu'il doit y piocher lors du premier tour, puis lors du deuxième tour, et ainsi de suite.
>
> On note $P_i$ l'ensemble des $k$ cartes que Nicolas souhaite piocher lors du $i$-ième tour après mélange dans une partie parfaite. On appelle objectif pour Nicolas la donnée d'une composition ordonnée initiale $O$ du deck, et d'un découpage de l'ensemble des cartes en $n/k$ parties de taille $k$, de la forme $(P_1, \ldots, P_{n/k})$. L'ordre des cartes au sein de chaque $P_i$ n'importe pas puisqu'elles sont tirées au même tour.
>
> Un objectif est dit réalisable pour un mélange $\sigma$ lorsque Nicolas peut jouer ses cartes dans un certain ordre à partir de $O$ pour, après mélange, obtenir exactement les cartes correspondant à l'ensemble $P_1$, puis à l'ensemble $P_2$, etc.
>
> 3. Quels sont les objectifs réalisables quel que soit le mélange $\sigma$ ?
>
> 4. Quels sont les $\sigma$ qui rendent réalisables le moins d'objectifs, dans les cas suivants :
>    a) $k = 2$, et toutes les cartes sont différentes ?
>    b) $k = 2$, et le deck est constitué de 2 cartes différentes, chacune en $n/2$ exemplaires, qui alternent parfaitement ?
>
> 5. Reprendre la question précédente, mais en rendant réalisable le plus d'objectifs.
>
> Nicolas veut maintenant savoir si son objectif, dont l'ordre initial est celui de la partie, est réalisable. L'ordre des cartes, avant chaque partie, est toujours le même.
>
> 6. En fonction de son objectif, de combien de parties Nicolas a-t-il besoin au minimum pour savoir s'il est réalisable dans les cas suivants :
>    a) $k = 2$, et toutes les cartes sont différentes ?
>    b) $k = 2$, et le deck est constitué de 2 cartes différentes, chacune en $n/2$ exemplaires, qui alternent parfaitement ?
>
> 7. En fonction de $k$, $n$ et de la répartition des cartes, quels sont les objectifs tels qu'il est le plus difficile de savoir s'ils sont réalisables (autrement dit tels que le nombre minimum de parties dont Nicolas a besoin pour savoir s'ils sont réalisables est le plus grand) ?
>
> 8. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Suffichi di carte come permutazioni; trovare la sigma del shuffle in giochi minimi, e obiettivi realizzabili (partizioni di obiettivo) per shuffle*

> Seme di mazzo (Graine deck). Nicolas gioca a un gioco di carte di costruzione del mazzo e cerca il mazzo perfetto, pronto a ricominciare molte volte. Let $k, n \\in \\mathbb{N}^*$ con $k$ dividendo $n$ e $k \\geqslant 2$. Il mazzo di Nicolas contiene carte $n$ in totale, ognuna con un simbolo, possibilmente identiche. Nel mazzo ci sono diversi tipi di carte distinti dal loro simbolo; alcune carte possono essere identiche (in questo caso il shuffle non cambia nulla poiché le carte hanno lo stesso aspetto). Deve dare un ordine iniziale al suo mazzo, che può fare come vuole. Il shuffle del mazzo è una permutazione $\\sigma$ che, applicata all'ordine iniziale delle carte, dà un nuovo ordine; è il shuffle. Poi, all'inizio di ogni partita $P_i$, viene tirato il mazzo il cui ordine è $\\sigma$ applicato all'ordine iniziale, le carte vengono giocate $k$ da $k$ (così un gioco ha $n/k$ giri). Quando il mazzo ha carte in $n/k$ copie, due carte identiche non possono essere distinte dopo il shuffle.\n\nPer esempio, con le carte $n = 6$, 3 carte $A$ e 3 carte $B$ inizialmente nell'ordine $(A, B, A, B, A, B)$, dove le carte vengono giocate $k = 3$ per 3 (un gioco ha $n/k = 2$ giri) e dove il shuffle è $\\sigma = \\begin{pmatrix} 123456 \\\\ 152346 \\end{pmatrix}$, gli oggetti $(ABABAB, AAABBB)$ o $(ABABAB, AAB, ABB)$ sono realizzabili per il shuffle $\\sigma$ (vedere domanda 3). La seconda scelta consente di distinguere $\\sigma$ da $\\begin{pmatrix} 123456 \\\\ 153246 \\end{pmatrix}$ ma la prima non lo fa (perché lo stato finale del mazzo è lo stesso).\n\n1. In questa domanda, l'obiettivo di Nicolas è trovare il mix $\\sigma$ il più velocemente possibile. L'ordine iniziale, prima di iniziare una partita, è sempre lo stesso. Quanti giochi ha bisogno al minimo quando:\n a) $k = n$, e tutte le carte sono diverse?\n b) $k = n$, e il mazzo è costituito da 2 carte diverse, una unica e l'altra in $n - 1$ copie?\n c) $k = n$, e il mazzo è costituito da 2 carte diverse, ciascuna in $n/2$ copie?\n d) $k = 2$, e il mazzo è costituito da 2 carte diverse, ciascuna in $n/2$ copie, e l'ordine iniziale è una perfezione di queste carte?\n e) $k = n$, e il mazzo è costituito da $a$ diverse carte, ciascuna in $n/a$ copie, per alcune $a$ che dividono <K36/n\n\n2. Come funzione di $k$ e $n$, caratterizzare le composizioni iniziali ordinate del mazzo di partenza per cui Nicolas può essere sicuro di trovare $\\sigma$.\n\nNicolas ora non è più interessato al shuffle $\\sigma$ ma vuole solo ottenere il gioco perfetto. Sa quali carte vuole disegnare alla prima volta, poi alla seconda volta, e così via. Indichiamo con $P_i$ l'insieme delle carte $k$ che Nicolas vuole disegnare al $i$-esito dopo il shuffling, in una partita. Chiamiamo obiettivo i dati di una composizione iniziale ordinata $\\mathcal{O}$ del mazzo e di una partizione del set di carte in parti di dimensioni $n/k$ $k$, del modulo $(P_1, \\dots, P_{n/k})$. L'ordine delle carte contenute in ciascuna $P_i$ non è importante poiché vengono tirate nello stesso turno. Un obiettivo è detto realizzabile per un shuffle $\\sigma$ se Nicolas può disegnare le sue carte in un certo ordine partendo da $\\mathcal{O}$ in modo che, dopo il shuffling, ottiene esattamente le carte corrispondenti al set $P_1$, quindi $P_2$, ecc.\n\n3. Quali obiettivi sono realizzabili qualunque sia il conflitto? Quali $\\sigma$ rendono realizzabili i minori obiettivi nei seguenti casi: a) $k = 2$, e tutte le carte sono diverse? b) $k = 2$, e il mazzo è costituito da 2 carte diverse, ciascuna in copie $n/2$, che si alternano perfettamente? Riprendiamo la questione precedente, ma rendendo più obiettivi realizzabili. Nicolas ora vuole sapere se il suo obiettivo, il cui ordine iniziale è quello del gioco, è realizzabile. L'ordine delle carte, prima di ogni partita, è sempre lo stesso. In funzione del suo obiettivo, a quanti giochi ha bisogno Nicolas almeno per sapere se è realizzabile nei seguenti casi: a) $k = 2$, e tutte le carte sono diverse? b) $k = 2$, e il mazzo è costituito da 2 carte diverse, ciascuna in copie $n/2$, che si alternano perfettamente? Come funzione di $k$, $n$ e della distribuzione delle carte, che sono gli obiettivi per i quali è più difficile sapere se sono realizzabili (cioè Il numero minimo di giochi che Nicolas deve sapere se sono realizzabili è il più grande). Proporre e studiare altre linee di ricerca.

![[src_tfjm_2023__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]], [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Card-deck shuffles as permutations; finding the shuffle sigma in minimum games, and realizable objectives (target partitions) per shuffle*

> Deck seed (Graine de deck). Nicolas plays a deck-construction card game and seeks the perfect deck, ready to start over many times. Let $k, n \\in \\mathbb{N}^*$ with $k$ dividing $n$ and $k \\geqslant 2$. Nicolas's deck holds $n$ cards in total, each bearing a symbol, with possibly identical cards. There are in the deck several types of cards distinguished by their symbol; some cards may be identical (in which case the shuffle does not change anything since the cards have the same appearance).\n\nAt the start of the game Nicolas knows the composition of his deck but not the shuffle. He must give an initial order to his deck, which he may do as he wishes. The shuffle of the deck is a permutation $\\sigma$ which, applied to the initial order of the cards, gives a new order; it is the shuffle. Then, at the start of each game $P_i$, the deck whose order is $\\sigma$ applied to the initial order is drawn, cards being played $k$ by $k$ (so a game has $n/k$ turns). When the deck has cards in $n/k$ copies, two identical cards cannot be distinguished after the shuffle.\n\nFor example, with $n = 6$ cards, 3 cards $A$ and 3 cards $B$ initially in order $(A, B, A, B, A, B)$, where cards are played $k = 3$ by 3 (so a game has $n/k = 2$ turns) and where the shuffle is $\\sigma = \\begin{pmatrix} 123456 \\\\ 152346 \\end{pmatrix}$, the objects $(ABABAB, AAABBB)$ or $(ABABAB, AAB, ABB)$ are realizable for the shuffle $\\sigma$ (see question 3). The second choice lets one distinguish $\\sigma$ from $\\begin{pmatrix} 123456 \\\\ 153246 \\end{pmatrix}$ but the first does not (because the final state of the deck is the same).\n\n1. In this question, Nicolas's goal is to find the shuffle $\\sigma$ as fast as possible. The initial order, before a game starts, is always the same. How many games does he need at minimum when:\n   a) $k = n$, and all the cards are different?\n   b) $k = n$, and the deck consists of 2 different cards, one unique and the other in $n - 1$ copies?\n   c) $k = n$, and the deck consists of 2 different cards, each in $n/2$ copies?\n   d) $k = 2$, and the deck consists of 2 different cards, each in $n/2$ copies, and the initial order is a perfect alternation of these cards?\n   e) $k = n$, and the deck consists of $a$ different cards, each in $n/a$ copies, for some $a$ dividing $n$?\n\n2. As a function of $k$ and $n$, characterize the ordered initial compositions of the starting deck for which Nicolas can be sure to find $\\sigma$.\n\nNicolas is now no longer interested in the shuffle $\\sigma$ but only wants to obtain the perfect game. He knows which cards he wants to draw at the first turn, then at the second turn, and so on. We denote by $P_i$ the set of $k$ cards Nicolas wants to draw at the $i$-th turn after shuffling, in a game. We call objective the data of an ordered initial composition $\\mathcal{O}$ of the deck and a partition of the set of cards into $n/k$ parts of size $k$, of the form $(P_1, \\dots, P_{n/k})$. The order of cards within each $P_i$ does not matter since they are drawn in the same turn. An objective is said realizable for a shuffle $\\sigma$ if Nicolas can draw his cards in a certain order starting from $\\mathcal{O}$ so that, after shuffling, he obtains exactly the cards corresponding to the set $P_1$, then $P_2$, etc.\n\n3. Which objectives are realizable whatever the shuffle $\\sigma$?\n\n4. Which $\\sigma$ make the fewest objectives realizable, in the following cases:\n   a) $k = 2$, and all the cards are different?\n   b) $k = 2$, and the deck consists of 2 different cards, each in $n/2$ copies, alternating perfectly?\n\n5. Redo the preceding question, but making the most objectives realizable. Nicolas now wants to know whether his objective, whose initial order is that of the game, is realizable. The order of the cards, before each game, is always the same.\n\n6. As a function of his objective, how many games does Nicolas need at minimum to know whether it is realizable in the following cases:\n   a) $k = 2$, and all the cards are different?\n   b) $k = 2$, and the deck consists of 2 different cards, each in $n/2$ copies, alternating perfectly?\n\n7. As a function of $k$, $n$ and the card distribution, which are the objectives for which it is hardest to know whether they are realizable (i.e. such that the minimum number of games Nicolas needs to know whether they are realizable is the largest)?\n\n8. Propose and study other lines of research.

![[src_tfjm_2023__Q08.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]], [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
