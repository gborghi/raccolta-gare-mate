---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022
tipo: gara
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022
family: tfjm
year: '2022'
level: TFJM²
---
<div class="atom-reader" data-gara="Quesiti/src_tfjm_2022"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,topic_combinatoria,method_simmetria,method_ricorsione,method_casework,method_estremalita,skill_ragionamento_geometrico,skill_astrazione,skill_casework_accurato,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="fr"></div>


*Folding polygons: study the flattened polygons (plies) obtainable by repeatedly folding a convex polygon with convex creases, including periodicity of resulting sequences.*

> Eulalie dispose de feuilles polygonales qu’elle plie pour obtenir d’autres polygones.
>
> Elle plie toujours les polygones selon le même procédé : elle choisit deux sommets distincts $A$ et $B$ du polygone et plie le polygone le long de la médiatrice $(d)$ du segment $[AB]$, ce qui revient à effectuer une symétrie axiale d’axe $(d)$ à la partie du polygone du même côté de $(d)$ que $A$. En particulier, le sommet $A$ est replié sur le sommet $B$.
>
> On dit qu’un polygone est convexe lorsque tous les angles internes sont inférieurs à $180^\circ$. Pour éviter de se retrouver avec des formes biscornues, Eulalie s’impose de ne plier que des polygones convexes. Un pliage est convexe si le polygone obtenu est convexe.
>
> La figure 2 illustre trois pliages, pour trois quadrilatères convexes différents. De gauche à droite les deux premiers pliages sont convexes et le troisième ne l’est pas. Le polygone obtenu pour le pliage du milieu est un quadrilatère : le point $B$ n’est plus un sommet du polygone.
>
> Une forme obtenue après avoir effectué un pli convexe à partir d’un polygone convexe de départ est appelé plié du polygone de départ.
>
> 1. Décrire tous les pliés des polygones suivants.
>    a) Les triangles équilatéraux, isocèles ou rectangles.
>    b) Les triangles quelconques.
>    c) Les polygones réguliers.
>
> 2. Soit $n \geqslant 3$ un entier.
>    a) Combien de côtés au maximum peut avoir le plié convexe d’un polygone convexe à $n$ côtés ?
>    b) Et au minimum ?
>
> 3. Dans cette question uniquement, les pliés effectués sont autorisés à ne pas être convexes, mais le polygone de départ l’est toujours. Reprendre la question 2 dans ce cadre.
>
> Deux polygones $P$ et $Q$ à $n$ côtés sont dit semblables si pour un certain agrandissement $\lambda \in \mathbb{R}_+^*$ il est possible de numéroter leurs sommets cycliquement respectivement $A_1, A_2, \cdots, A_n$ et $B_1, B_2, \cdots, B_n$ de sorte que les angles internes en $A_i$ et $B_i$ soient égaux et que $A_i A_{i-1} = \lambda B_i B_{i-1}$ pour tout $1 \leqslant i \leqslant n$, en posant $A_0 = A_n$, $B_0 = B_n$. La figure 3 illustre deux polygones qui sont semblables pour un agrandissement $\lambda = 2$.
>
> 4. Eulalie veut à présent effectuer une suite de plis à partir d’un polygone de départ, et retomber sur un polygone qui lui est semblable. On appelle suite de pliés une succession de polygones convexes $P_0, P_1, \cdots, P_k$ telle que chaque polygone est un plié du précédent. Le polygone $P_0$ est alors appelé polygone de départ de la suite, et une suite de pliés de polygone de départ $P_0$ est dite issue de $P_0$. On dit que la suite de pliés $P_0, P_1, \ldots, P_k$ est périodique lorsque $P_0$ et $P_k$ sont semblables et $k$ est le plus petit entier strictement positif vérifiant cette propriété, c’est-à-dire que $P_0$ et $P_i$ ne sont pas semblables pour tout $1 \leqslant i < k$. L’entier $k$ est appelé période de la suite. Un polygone convexe $P$ est dit de période finie s’il existe une suite périodique de pliés issue de $P$. Dans ce cas, on appelle période de $P$ la période minimale d’une suite de pliés issue de $P$.
>    a) Quelle est la période du carré ? Décrire les suites périodiques issues du carré.
>    b) Soit $n \geqslant 3$ un entier. Existe-t-il des suites périodiques issues du polygone régulier à $n$ côtés ? Si possible, donner un encadrement de la période du polygone régulier à $n$ côtés.
>
> 5. Dans cette question, on s’intéresse aux suites périodiques de pliés de période 1. Existe-t-il des polygones semblables à un de leurs pliés ? Combien de côtés peut avoir un tel polygone ? Décrire tous les polygones de la sorte.
>
> 6. Pour quels $k \geqslant 1$ existe-t-il des polygones de période $k$ ?
>
> 7. Dans cette question, on s’intéresse aux suites de pliés dont les polygones ont tous le même nombre de côtés. Une telle suite de pliés est dite à nombre de côtés constant, ou encore suite à $n$ côtés, où $n$ est le nombre de côtés des polygones de la suite. Reprendre les questions 4 et 6 en imposant aux suites périodiques d’être à nombre de côtés constant.
>
> 8. Proposer et étudier d’autres pistes de recherche.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<div class="qlang-split" data-lang="it"></div>


*Poligoni pieghevoli: studiare i poligoni piatti ottenuti piegando ripetutamente un poligono convex con pieghe convex, compresa la periodicità delle sequenze risultanti.*

> Piegare i poligoni.
> 
> Eulalie ha fogli di poligoni che piega per ottenere altri poligoni.
> 
> Pieghe sempre i poligoni con la stessa procedura: sceglie due vertici distinti $A$ e $B$ del poligono e una retta $(d)$, la mediatrice (bisettrice perpendicolare) del segmento $[AB]$; esegue quindi una simmetria assiale con asse $(d)$ sulla parte del poligono che si trova sullo stesso lato di $(d)$ come $A$. In particolare, l'immagine di $A$ è piegata sul vertice $B$.
> 
> Diciamo che un poligono è $convex$ quando tutti i suoi angoli interni sono inferiori a $180^\circ$. Per evitare di finire con forme peculiari, Eulalie si richiede di piegare solo poligoni convexi. Si dice che un poligono sia $convex$ se il poligono ottenuto è convexo.
> 
> Una forma ottenuta con un piego convexo da un poligono di partenza convexo è chiamata $pli$ (piano) del poligono di partenza.
> 
> 1. Descrivere tutte le pieghe dei seguenti poligoni. a) Equilaterali, igosceles o triangolari rettangolari. b) Quadrilaterali (arbitrari). c) Poligoni regolari.
> 
> 2. $n \ge 3$ sia un numero intero. a) Quanti lati può avere, al massimo, la strata convexa di un poligono convexo con lati $n$? b) E come minimo?
> 
> 3. Solo in questa domanda, non è necessario che le pieghe eseguite siano conveche, ma il poligono da piegare è sempre conveco. Rendi la domanda 2 in questo contesto.
> 
> Due poligoni $P$ e $Q$ con lati $n$ sono $similar$ se vi è un'ampliamento $\lambda \in \mathbb{R}_+^*$ tale da poter numerare i loro vertici ciclicamente rispettivamente $A_1, A_2, \cdots, A_n$ e $B_1, B_2, \cdots, B_n$ in modo che gli angoli interni a $A_i$ e $B_i$ siano uguali e uno abbia $A_i A_{i-1} = \lambda B_i B_{i-1}$ per tutti $1 \le i \le n$, con $A_0 = A_n$, $B_0 = B_n$. La figura 3 illustra due poligoni simili per un ingrandimento $\lambda = 2$.
> 
> 4. Eulalie vuole eseguire una successione di pieghe partendo da un poligono e poi tornare al suo poligono di partenza. Un $period$ di pie è una successione di pie convexe $P_0, P_1, \cdots, P_k$ in modo tale che ogni poligono preceda quello successivo. Il poligono $P_0$ essendo arbitrario, si ha quindi una sequenza di pieghe del poligono iniziale $P_0$, emessa da $P_0$. Si dice inoltre che una sequenza di pie $P_0, P_1, \ldots, P_k$ è $periodic$ quando $P_0$ e $P_k$ sono simili e $k$ è il numero intero più piccolo strettamente positivo che verifica questa proprietà; è quindi richiesto che $P_0$ e $P_i$ non siano simili per tutti $1 \le i < k$. Il numero intero $k$ è chiamato $period$ della sequenza. Si dice che un poligono $P$ sia di $finite period$ se esiste una sequenza periodica di pieghe emesse da $P$. In questo caso, il periodo minimo della sequenza di pieghe emesse da $P$ è denominato periodo di $P$. a) Qual è il periodo della piazza? Descrivere le sequenze periodiche di pie di quadrato. b) Il $n \ge 3$ deve essere un numero intero. Esistono sequenze periodiche di pieghe emesse da un poligono regolare con lati $n$? Se possibile, indicare un rivestimento (limitati) del periodo di un poligono regolare con lati $n$.
> 
> 5. In questa questione, si sono interessate le sequenze periodiche di pie di periodo 1. Esistono poligoni simili che hanno le proprie pieghe? Quanti lati può avere un tale poligono?
> 
> 6. Per quale $k \ge 1$ esistono poligoni del periodo $k$?
> 
> 7. In questa domanda, si interessano sequenze periodiche di piele che hanno tutte lo stesso numero di lati. Una sequenza di pieghe di poligoni con lati $n$ ha quindi un $constant number of sides$, o è un $sequence of n sides$, se tutti i poligoni della sequenza periodica hanno lati $n$. Riprendi le domande 4 e 6, imponendo ulteriormente sequenze periodiche con un numero costante di lati $n$.
> 
> 8. Proporre e studiare altre vie di ricerca.

![[src_tfjm_2022__Q01.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]], [[method_ricorsione|Ricorsione]], [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Folding polygons: study the flattened polygons (plies) obtainable by repeatedly folding a convex polygon with convex creases, including periodicity of resulting sequences.*

> Folding of polygons.
> 
> Eulalie has sheets of polygons that she folds to obtain other polygons.
> 
> She always folds the polygons by the same procedure: she chooses two distinct vertices $A$ and $B$ of the polygon and a line $(d)$, the mediatrix (perpendicular bisector) of the segment $[AB]$; she then performs an axial symmetry with axis $(d)$ on the part of the polygon lying on the same side of $(d)$ as $A$. In particular, the image of $A$ is folded onto the vertex $B$.
> 
> We say that a polygon is $convex$ when all its interior angles are less than $180^\circ$. To avoid ending up with peculiar shapes, Eulalie requires herself to fold only convex polygons. A polygon is said to be $convex$ if the polygon obtained is convex.
> 
> A shape obtained by a convex fold from a convex starting polygon is called a $pli$ (ply) of the starting polygon.
> 
> 1. Describe all the plies of the following polygons.
>   a) Equilateral, isosceles or right triangles.
>   b) Quadrilaterals (arbitrary).
>   c) Regular polygons.
> 
> 2. Let $n \ge 3$ be an integer.
>   a) At most how many sides can the convex ply of a convex polygon with $n$ sides have?
>   b) And at minimum?
> 
> 3. In this question only, the plies performed are not required to be convex, but the polygon to be folded is always convex. Redo question 2 in this setting.
> 
> Two polygons $P$ and $Q$ with $n$ sides are said to be $similar$ if there is an enlargement $\lambda \in \mathbb{R}_+^*$ such that one can number their vertices cyclically respectively $A_1, A_2, \cdots, A_n$ and $B_1, B_2, \cdots, B_n$ so that the angles internal at $A_i$ and $B_i$ are equal and one has $A_i A_{i-1} = \lambda B_i B_{i-1}$ for all $1 \le i \le n$, with $A_0 = A_n$, $B_0 = B_n$. Figure 3 illustrates two polygons that are similar for an enlargement $\lambda = 2$.
> 
> 4. Eulalie wants to perform a succession of plies starting from a polygon and then come back to her starting polygon. A $period$ of plies is a succession of convex plies $P_0, P_1, \cdots, P_k$ such that each polygon precedes the next one. The polygon $P_0$ being arbitrary, one then has a sequence of plies of starting polygon $P_0$, issued from $P_0$. One says further that a sequence of plies $P_0, P_1, \ldots, P_k$ is $periodic$ when $P_0$ and $P_k$ are similar and $k$ is the smallest strictly positive integer verifying this property; it is then required that $P_0$ and $P_i$ are not similar for all $1 \le i < k$. The integer $k$ is called the $period$ of the sequence. A polygon $P$ is said to be of $finite period$ if there exists a periodic sequence of plies issued from $P$. In this case, the minimal period of the sequence of plies issued from $P$ is called the period of $P$.
>   a) What is the period of the square? Describe the periodic sequences of plies of the square.
>   b) Let $n \ge 3$ be an integer. Do there exist periodic sequences of plies issued from a regular polygon with $n$ sides? If possible, give an enclosure (bounds) of the period of a regular polygon with $n$ sides.
> 
> 5. In this question, one is interested in periodic sequences of plies of period 1. Do there exist similar polygons that are their own plies? How many sides can such a polygon have?
> 
> 6. For which $k \ge 1$ do there exist polygons of period $k$?
> 
> 7. In this question, one is interested in periodic sequences of plies all having the same number of sides. A sequence of plies of polygons with $n$ sides then has a $constant number of sides$, or is a $sequence of n sides$, if all the polygons of the periodic sequence have $n$ sides. Redo questions 4 and 6, further imposing periodic sequences with a constant number of $n$ sides.
> 
> 8. Propose and study other avenues of research.

![[src_tfjm_2022__Q01.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,topic_algebra,topic_funzionali,method_invarianti,method_ricorsione,method_casework,method_simmetria,skill_modellizzazione,skill_riconoscimento_pattern,skill_astrazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="fr"></div>


*Swallows on electric wires sing musical themes determined by a reflection-type recurrence on their positions; study which themes appear, periodicity, sharpest themes, and generalized bird species.*

> La musicienne Elaïa donne à manger à des hirondelles posées sur des fils électriques devant sa fenêtre.
>
> Il y a $n \geqslant 1$ hirondelles posées sur les $2k+1$ fils électriques horizontaux, numérotés de bas en haut de $-k$ à $k$, avec $k \geqslant 0$. Au départ, pour chaque $i \in [\![1, n]\!]$, on note $u_i \in [\![-k, k]\!]$ le numéro du fil sur lequel est posé la $i$-ème hirondelle. Elaïa imagine les positions des hirondelles sur les fils comme des notes de musique sur une portée et elle veut s’en inspirer pour composer de nouvelles musiques. On appelle thème musical un ensemble $(u_i)_{1 \leqslant i \leqslant n} = (u_1, \ldots, u_n)$ de positions des hirondelles.
>
> Pour faire varier les positions des hirondelles, Elaïa peut lancer une graine à l’hirondelle $i$ pour qu’elle s’envole et se repose sur un autre fil. La règle est la suivante : si Elaïa lance une graine à l’hirondelle $i$, elle quittera son fil de numéro $u_i$ pour venir se poser sur le fil de numéro $v_i = u_{i-1} + u_{i+1} - u_i$ où, par convention, $u_0 = u_{n+1} = 0$. Les autres hirondelles restent à leur position : $v_j = u_j$ pour $j \neq i$. Elaïa obtient ainsi un nouveau thème musical $(v_i)_{1 \leqslant i \leqslant n}$ à partir du thème $(u_i)_{1 \leqslant i \leqslant n}$. S’il n’y a pas de fil numéroté $v_i$, l’hirondelle $i$ part définitivement et le processus s’arrête. Sinon elle continue à lancer d’autres graines.
>
> Par exemple la Figure 4 illustre ce qui se passe si une graine est lancée à l’hirondelle 2. On a dans ce cas $(u_1, u_2, u_3, u_4) = (-2, -1, 2, 0)$ et $(v_1, v_2, v_3, v_4) = (-2, 1, 2, 0)$.
>
> 1. On suppose $k$ infini et on suppose que toutes les hirondelles sont au départ sur le fil numéro 0, sauf une qui est sur le fil numéro 1. Quels thèmes musicaux Elaïa peut-elle ainsi obtenir ? On pourra commencer par les cas où $n = 1, 2, 3$.
>
> 2. On suppose dorénavant $k$ fini. Pour quels thèmes musicaux initiaux $(u_i)_{1 \leqslant i \leqslant n}$ et quels $k$ Elaïa est-elle certaine qu’aucune hirondelle ne partira définitivement, quel que soit le nombre et l’ordre dans lequel elle leur lance des graines ?
>
> 3. On dira qu’un thème musical $(u_i)_{1 \leqslant i \leqslant n}$ est plus aigu qu’un autre $(u'_i)_{1 \leqslant i \leqslant n}$ si pour chaque $i \in [\![1, n]\!]$, on a $u_i \geqslant u'_i$.
>    a) Étant donné un thème musical de départ, dans les situations où Elaïa peut s’assurer qu’aucune hirondelle ne parte définitivement, y a-t-il un thème musical plus aigu que tous les autres parmi ceux qu’elle peut atteindre en lançant des graines ?
>    b) Si oui, quel est le thème musical le plus aigu, en fonction du thème de départ ?
>    c) Si $(u_i)_{1 \leqslant i \leqslant n}$ désigne la position initiale des hirondelles, combien de graines $T((u_i)_{1 \leqslant i \leqslant n})$ Elaïa doit-elle alors utiliser au minimum pour obtenir ce thème musical le plus aigu ?
>    d) Dans les cas où Elaïa obtient le thème musical le plus aigu en lançant $T((u_i)_{1 \leqslant i \leqslant n})$ graines, combien de suites de lancers différents lui permettent d’atteindre ce thème le plus aigu en $T((u_i)_{1 \leqslant i \leqslant n})$ graines ?
>
> 4. Aglaé, une amie ornithologue de Elaïa, lui propose une nouvelle espèce d’oiseaux pour son expérience musicale. L’oiseau numéroté $m \in [\![1, n]\!]$ est maintenant une mésange : quand Elaïa lui envoie une graine, elle change sa position en $v_m = 2u_{m-1} + u_{m+1} - u_m$ au lieu de $u_{m-1} + u_{m+1} - u_m$. Les autres oiseaux sont toujours des hirondelles, leur comportement ne change pas. Reprendre les questions précédentes dans ce cadre. On pourra commencer par traiter les cas $m = 1, 2, n$ avec de petites valeurs de $n$.
>
> 5. L’oiseau à la position $m$ est maintenant d’une espèce de paramètres $(a, b) \in \mathbb{N}^2$ : quand Elaïa lui lance une graine, il viendra alors se reposer à la position $v_m = a u_{m-1} + b u_{m+1} - u_m$. Ainsi, la question 4 correspondait à un oiseau de paramètre $(a, b) = (2, 1)$. Reprendre les questions 1, 2, 3 avec cette nouvelle espèce d’oiseaux en discutant des résultats en fonction de $m$ et du couple $(a, b)$.
>
> 6. Proposer et explorer d’autres pistes de recherche. On pourra par exemple changer l’espèce de plusieurs oiseaux.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<div class="qlang-split" data-lang="it"></div>


*Le avvolte su fili elettrici cantano temi musicali determinati da una ricorrenza di tipo riflesso nelle loro posizioni; studiare quali temi appaiono, periodicità, temi più acuti e specie di uccelli generalizzate.*

> La melodia delle paludi.
> 
> La musicista Elaia dà da mangiare ai bagnoni appoggiati sui fili elettrici di fronte alla sua finestra.
> 
> Ci sono le porzioni $n \ge 1$ incastonate sui fili elettrici orizzontali $2k+1$, numerate dal basso in alto da $-k$ a $k$. All'inizio, ogni deglutione $i \in [\![1, n]\!]$ ha la nota $u_i \in [\![-k, k]\!]$, il numero del filo su cui è appeso. Elaia immagina le posizioni delle paludi sui fili come un tema musicale: un insieme $(u_i)_{1 \le i \le n} = (u_1, \ldots, u_n)$ di posizioni delle paludi.
> 
> Per ritrovare le posizioni delle bagni, Elaia lancia un grano per inghiottire $i$ appoggiato su un filo in modo che si appoggi su un altro filo. La regola è la seguente: se Elaia lancia un grano per inghiottire $i$, questo si appoggia su un altro filo e riprende a cantare prendendo la posizione $v_i = u_{i-1} + u_{i+1} - u_i$, con convenzione $u_0 = u_{n+1} = 0$. Le altre inghiottite rimangono nella loro posizione: $v_j = u_j$ per $j \ne i$. Elaia ottiene quindi un nuovo tema musicale $(v_i)_{1 \le i \le n}$ da $(u_i)_{1 \le i \le n}$ lanciando un grano per ingoiare $i$; questo riprende a cantare nella sua posizione $v_i$, e il processo ricomincia se continua a lanciare altri grani. Se una inghiottita non può più appoggiarsi su un filo (il suo filo bersaglio $v_i$ non esiste), il processo si ferma.
> 
> Per esempio, la figura 4 illustra il passaggio da un grano gettato a inghiottire 2, nel caso $n = 4$ con $k = 2$. Qui $(u_1, u_2, u_3, u_4) = (-2, -1, 2, 0)$ e $(v_1, v_2, v_3, v_4) = (-2, 1, 2, 0)$.
> 
> 1. Supponiamo che $k$ sia infinito, e supponiamo che tutti i baglioni siano all'inizio sul filo numerato 0, tranne uno che è sul filo numerato 1. Quali temi musicali può ottenere Elaia? Si inizia sempre con il caso $n = 1, 2, 3$.
> 
> 2. Supponiamo che da ora in poi $k$ sia finito. Per quali temi musicali iniziali $(u_i)_{1 \le i \le n}$ e per quali $i$ Elaia è sicura che nessun trapianto lascerà definitivamente, qualunque sia il numero di grani che lancia? (Senza tener conto dell'ordine in cui lancia i grani.)
> 
> 3. Si dice che un tema musicale $(u_i)_{1 \le i \le n}$ è $sharper$ (più aigu) rispetto ad un altro $(u'_i)_{1 \le i \le n}$ se per ogni $i \in [\![1, n]\!]$ si ha $u_i \ge u'_i$. a) Partendo da un tema musicale iniziale, in situazioni in cui Elaia è sicura che nessuna deglutia se ne andrà definitivamente, può raggiungere un tema musicale sempre più nitido di tutti gli altri temi che potrebbe raggiungere gettando cereali? b) Qual è il tema musicale più acuto, in funzione del tema iniziale? c) Se $(u_i)_{1 \le i \le n}$ indica la posizione iniziale delle paludi, quanti grani $T((u_i)_{1 \le i \le n})$ deve utilizzare Elaia almeno per ottenere il tema musicale più acuto? d) Nel caso in cui Elaia ottiene il tema musicale più acuto gettando i grani $T((u_i)_{1 \le i \le n})$, quante diverse sequenze di lanci le consentono di raggiungere il tema musicale più acuto?
> 
> 4. Aglaé, amico di Elaia in musicaologia, propone un nuovo modello di uccelli con un esperimento, numerato $m \in [\![1, n]\!]$, che quando viene lanciato un grano cambia posizione a $v_m = 2 u_{m-1} + u_{m+1} - u_m$, mentre gli altri non cambiano affatto. Ripete le domande precedenti in questo contesto. Si può iniziare con il trattamento dei casi $m = 1, 2$, quindi piccoli valori di $n$.
> 
> 5. La deglutiera in posizione $m$ è ora di una nuova specie con parametri $(a, b) \in \mathbb{N}^2$: quando Elaia lancia un grano, si trova in posizione $v_m = a u_{m-1} + b u_{m+1} - u_m$. Pertanto la domanda 4 corrisponde a una nuova specie con parametri $(a, b) = (2, 1)$. Ripetere le domande 1, 2, 3 con questa nuova specie di uccello, discutendo i risultati come funzione di $m$ e della coppia $(a, b)$.
> 
> 6. Proporre e esplorare altre vie di ricerca. Si può, ad esempio, modificare le specie di diversi uccelli.

![[src_tfjm_2022__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]], [[method_ricorsione|Ricorsione]], [[method_casework|Analisi per casi]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Swallows on electric wires sing musical themes determined by a reflection-type recurrence on their positions; study which themes appear, periodicity, sharpest themes, and generalized bird species.*

> Melody of the swallows.
> 
> The musician Elaia gives food to the swallows perched on the electric wires in front of her window.
> 
> There are $n \ge 1$ swallows perched on $2k+1$ horizontal electric wires, numbered from bottom to top from $-k$ to $k$. At the start, each swallow $i \in [\![1, n]\!]$ has note $u_i \in [\![-k, k]\!]$, the number of the wire on which it is perched. Elaia imagines the positions of the swallows on the wires as a musical theme: a set $(u_i)_{1 \le i \le n} = (u_1, \ldots, u_n)$ of positions of the swallows.
> 
> To find again the positions of the swallows, Elaia throws a grain to swallow $i$ perched on a wire so that it perches on another wire. The rule is as follows: if Elaia throws a grain to swallow $i$, this one perches on another wire and resumes singing taking the position $v_i = u_{i-1} + u_{i+1} - u_i$, with by convention $u_0 = u_{n+1} = 0$. The other swallows remain at their position: $v_j = u_j$ for $j \ne i$. Elaia obtains then a new musical theme $(v_i)_{1 \le i \le n}$ from $(u_i)_{1 \le i \le n}$ by throwing a grain to swallow $i$; this one resumes singing at its position $v_i$, and the process restarts if she continues to throw other grains. If a swallow can no longer perch on a wire (its target wire $v_i$ does not exist), the process stops.
> 
> For example, Figure 4 illustrates passing from a grain thrown to swallow 2, in the case $n = 4$ with $k = 2$. Here $(u_1, u_2, u_3, u_4) = (-2, -1, 2, 0)$ and $(v_1, v_2, v_3, v_4) = (-2, 1, 2, 0)$.
> 
> 1. Suppose $k$ infinite, and suppose all the swallows are at the start on the wire numbered 0, except one which is on the wire numbered 1. Which musical themes can Elaia obtain? One always begins with the case $n = 1, 2, 3$.
> 
> 2. Suppose henceforth $k$ finite. For which initial musical themes $(u_i)_{1 \le i \le n}$ and which $i$ is Elaia sure that no swallow will leave definitively, whatever the number of grains she throws? (Without taking into account the order in which she throws the grains.)
> 
> 3. One says that a musical theme $(u_i)_{1 \le i \le n}$ is $sharper$ (plus aigu) than another $(u'_i)_{1 \le i \le n}$ if for each $i \in [\![1, n]\!]$ one has $u_i \ge u'_i$.
>   a) Starting from a starting musical theme, in the situations where Elaia is sure that no swallow will leave definitively, can she always reach a musical theme sharper than all the other themes she could attain by throwing grains?
>   b) What is the sharpest musical theme, as a function of the starting theme?
>   c) If $(u_i)_{1 \le i \le n}$ denotes the initial position of the swallows, how many grains $T((u_i)_{1 \le i \le n})$ must Elaia at least use to obtain the sharpest musical theme?
>   d) In the case where Elaia obtains the sharpest musical theme by throwing $T((u_i)_{1 \le i \le n})$ grains, how many different sequences of throws allow her to attain the sharpest musical theme?
> 
> 4. Aglaé, a musicology friend of Elaia, proposes a new model of birds with an experiment, numbered $m \in [\![1, n]\!]$, that when thrown a grain will change position to $v_m = 2 u_{m-1} + u_{m+1} - u_m$, while the others do not change at all. Repeat the preceding questions in this setting. One may begin by treating the cases $m = 1, 2$, then small values of $n$.
> 
> 5. The swallow at position $m$ is now of a new species with parameters $(a, b) \in \mathbb{N}^2$: when Elaia throws it a grain, it perches at the position $v_m = a u_{m-1} + b u_{m+1} - u_m$. Thus question 4 corresponds to a new species with parameters $(a, b) = (2, 1)$. Repeat questions 1, 2, 3 with this new species of bird, discussing the results as a function of $m$ and the couple $(a, b)$.
> 
> 6. Propose and explore other avenues of research. One may, for example, change the species of several birds.

![[src_tfjm_2022__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_logica,method_conteggio,method_casework,method_backward,method_estremalita,skill_conteggio_sistematico,skill_modellizzazione,skill_astrazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="fr"></div>


*A confined professor wants substitute Perrine to reconstruct the seating arrangement of n pupils; find the minimal number of questions needed under several allowed question types, with adaptive answers, errors, and lying.*

> Timothé est professeur de mathématiques. Il est tombé malade et va devoir s’absenter pendant une semaine. Il demande à son amie Perrine de le remplacer.
>
> Timothé laisse le choix à Perrine de placer les $n \geqslant 1$ élèves de sa classe comme elle veut dans la salle de classe qui compte $n$ places, mais il aimerait qu’à son retour elle lui indique à quelles places étaient les élèves. Cependant, Perrine aime les devinettes et plutôt que de donner le plan de classe à Timothé, elle lui demande de lui écrire une liste de questions auxquelles elle répondra à la fin de la semaine. Timothé veut être certain qu’en lisant les réponses à son retour la semaine suivante, il puisse retrouver à coup sûr le plan de la classe durant son absence, mais il veut que cette liste soit la plus courte possible.
>
> 1. Les élèves et les places sont numérotés de 1 à $n$. Déterminer si Timothé peut déterminer à coup sûr le plan de classe, et si oui estimer le nombre minimal de questions qu’il doit poser, s’il est obligé de poser des questions de la forme :
>    a) « Où se trouvait l’élève $i$ ? » avec $1 \le i \le n$.
>    b) N’importe quelle question par laquelle Perrine peut répondre par « oui » ou « non ».
>    c) « Est-ce que l’élève $i$ se trouvait à la place $p$ ? » avec $1 \le i, p \le n$.
>    d) « Donne moi l’ensemble des élèves (pas forcément dans l’ordre) qui étaient assis aux places $p_1, p_2, \ldots, p_k$ » où $1 \leqslant k \leqslant n$ est fixé par Perrine.
>    e) « Combien d’élèves sont bien placés sur ce plan de classe ? » en proposant un plan de classe.
>
> 2. Maintenant, Timothé appelle Perrine par téléphone. Il reçoit alors la réponse à chacune de ses questions juste après l’avoir posée. Reprendre la question 1 dans ce cadre.
>
> 3. Pendant la semaine, Perrine s’est trompée de salle, et elle est allée dans une salle avec $m > n$ chaises. Timothé le sait. Reprendre les questions précédentes dans ce cadre.
>
> 4. Perrine décide de corser le jeu et s’autorise à mentir sur certaines questions. On fixe $l \in \mathbb{N}^*$, et on suppose que Perrine a le droit de mentir $l$ fois et que Timothé connait $l$. Reprendre les questions précédentes dans ce cadre.
>
> 5. Proposer et étudier d’autres pistes de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_backward|Backward]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<div class="qlang-split" data-lang="it"></div>


Un professore confinato vuole sostituire Perrine per ricostruire l'arrangamento dei posti a sedere di n alunni; trovare il numero minimo di domande necessarie sotto diversi tipi di domande consentite, con risposte adattive, errori e mentire.

> Professore rinchiuso.
> 
> Timothyé è un professore di matematica; è ammalato e deve assistere per una settimana. Chiede a un sostituto di nome Perrine di sostituirlo.
> 
> Timothy lascia a Perrine la scelta di mettere gli alunni nell'ordine che vuole nei posti della classe, dove deve rispondere alle sue domande. Fa domande a Perrine per determinare il piano di seduta della classe, ma è più pratico che le faccia in anticipo. Perrine, essendo a corto di tempo, mentre imposta il piano di posti a sedere, chiede a Timothy di scrivere una lista di domande a cui risponderà. Timothyé legge poi questa lista e restituisce, per ogni domanda che si trova nella lista, una risposta; questa lista di domande deve essere il più breve possibile.
> 
> 1. Gli alunni della classe sono numerati da 1 a $n$. Determina se Timothy può determinare il piano di seduta della classe e quale è la stima minima del numero di domande che deve porre, se è obbligato a porre domande della classe del modulo: a)  È studente $i$?  in cui $1 \le i \le n$. b) Qualsiasi domanda a cui Perrine deve rispondere con  sì  o  no . c) Si trova l'allievo $i$ al posto $p$? in cui $1 \le i, p \le n$. d) Indicare l'insieme degli alunni (non si può forzare il loro ordine) che si trovano nei luoghi $p_1, p_2, \ldots, p_k$ dove $1 \le k \le n$ è fissato in anticipo da Perrine. e) In quale luogo della classe si trova l'allievo $i$? dove $1 \le i \le n$.
> 
> 2. Timothy chiama Perrine al telefono. riceve la risposta a ciascuna delle sue domande appena dopo averla posta. Ripetere la domanda 1 in questo contesto.
> 
> 3. Durante la settimana, Perrine ha commesso un errore sulla stanza, e è andato in un'altra stanza con sedie $m > n$. Timothy non commette errori. Ripete le domande precedenti in questo contesto.
> 
> 4. Perrine decide di prendersi gioco di Timothy e si autorizza a sbagliare su alcune risposte. Corre $l \in \mathbb{N}^*$, e supponi che Perrine abbia il diritto di sbagliare $l$ volte e che Timothy sappia $l$. Ripete le domande precedenti in questo contesto.
> 
> 5. Proporre e studiare altre vie di ricerca.

![[src_tfjm_2022__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_casework|Analisi per casi]], [[method_backward|Ragionamento all'indietro]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*A confined professor wants substitute Perrine to reconstruct the seating arrangement of n pupils; find the minimal number of questions needed under several allowed question types, with adaptive answers, errors, and lying.*

> Confined professor.
> 
> Timothé is a mathematics professor; he has fallen ill and must absent himself during a week. He asks a substitute named Perrine to replace him.
> 
> Timothé leaves Perrine the choice of placing the pupils in the order she wants in the seats of the class, where she must answer his questions. He poses questions to Perrine in order to determine the seating plan of the class, but it is more practical that he poses them in advance. Perrine being short of time, while she sets up the seating plan she asks Timothé to write a list of questions to which she will answer. Timothé then reads this list and returns, for each question found in the list, an answer to it; this list of questions must be as short as possible.
> 
> 1. The pupils of the class are numbered from 1 to $n$. Determine if Timothé can determine the seating plan of the class, and what is the minimal estimate of the number of questions that he must pose, if he is obliged to pose questions of the class of the form:
>   a) « Is it pupil $i$? » where $1 \le i \le n$.
>   b) Any question to which Perrine must answer by « yes » or « no ».
>   c) Is it that pupil $i$ is found at place $p$? where $1 \le i, p \le n$.
>   d) Give the set of pupils (one cannot force their order) who are at places $p_1, p_2, \ldots, p_k$ where $1 \le k \le n$ is fixed in advance by Perrine.
>   e) Which place of the class is pupil $i$ at? where $1 \le i \le n$.
> 
> 2. Now, Timothé calls Perrine by telephone. He receives the answer to each of his questions just after having posed it. Repeat question 1 in this setting.
> 
> 3. During the week, Perrine made a mistake about the room, and went to another room with $m > n$ chairs. Timothé does not make any mistake. Repeat the preceding questions in this setting.
> 
> 4. Perrine decides to taunt Timothé and authorizes herself to make mistakes on certain answers. Fix $l \in \mathbb{N}^*$, and suppose that Perrine has the right to err $l$ times and that Timothé knows $l$. Repeat the preceding questions in this setting.
> 
> 5. Propose and study other avenues of research.

![[src_tfjm_2022__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_backward|Backward]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_combinatoria,topic_logica,method_casework,method_estremalita,method_invarianti,method_ricorsione,skill_modellizzazione,skill_conteggio_sistematico,skill_astrazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*A memoryless gold-seeker uses three tools with limited lifetimes that goblins can repair overnight; he forgets everything daily, so find a strategy minimizing total cost c_n while never losing nuggets, then generalize to k tools, lucky charms, and rescuers.*

> Le nain Alaric est un chercheur d’or. Il se rend à la mine tous les jours pour y trouver des pépites.
>
> Il a besoin chaque jour pour cela de trois outils : une pioche, un casque et une lampe. Chaque outil s’use à force d’être utilisé et a donc une durée de vie limitée : une pioche, un casque et une lampe peuvent respectivement servir au plus 2, 3 et 3 jours, après quoi ils se cassent. Le nain a la possibilité de laisser certains outils chez les gobelins le soir en sortant de la mine pour qu’ils les réparent pendant la nuit et les rendent le lendemain matin, mais il doit alors immédiatement payer une pièce par outil remis à neuf.
>
> Cependant, Alaric est victime d’une malédiction : le matin au réveil, il a tout oublié. Il ne sait plus quel jour on est, ni ce qu’il a fait les jours précédents. Il est également incapable d’observer l’usure de ses outils. Ainsi, chaque soir, au moment de choisir quels outils il laisse aux gobelins, il ne se souvient que de ceux qu’ils lui ont rendu le matin. S’il tente d’utiliser un outil un jour de plus que sa durée de vie ne le permet, il se casse. Le nain ne peut alors plus sortir, il erre dans la mine pour l’éternité.
>
> Le but du nain est donc de trouver une stratégie pour dépenser le moins d’argent possible sans jamais risquer de se perdre dans la mine. Le premier jour, les gobelins lui fournissent tous ses outils remis à neuf, mais le nain ne sait bien sûr pas que c’est le premier jour. On note $c_n$ la somme minimale que le nain doit dépenser jusqu’au $n$-ième jour inclus pour s’assurer de ne pas se perdre dans la mine jusque-là.
>
> 1. Encadrer $c_n$ aussi précisément que possible. Même question si la lampe peut servir jusqu’à 4 jours au lieu de 3.
>
> 2. Le nain a maintenant $k \geqslant 1$ outils. On note $v_1, \ldots, v_k \geqslant 1$ leurs durées de vie et $c_n(v_1, \ldots, v_k)$ la somme minimale que le nain doit dépenser jusqu’au $n$-ième jour inclus pour s’assurer de ne pas se perdre dans la mine jusque-là. Estimer $c_n(v_1, \ldots, v_k)$, en s’intéressant principalement aux cas $n > 2^k$, pour
>    a) $k = 2$ et $v_1, v_2 \geqslant 1$ quelconques.
>    b) $v_i = k$ pour tout $i \in [\![1, k]\!]$.
>    c) $v_i > k$ pour tout $i \in [\![1, k]\!]$.
>    d) $v_i = i$ pour tout $i \in [\![1, k]\!]$.
>    e) $v_i = 2^i$ pour tout $i \in [\![1, k]\!]$.
>    f) $v_1, \ldots, v_k$ quelconques. On pourra s’intéresser à d’autres valeurs particulières de $v_1, \ldots, v_k$.
>
> 3. A-t-on toujours $c_n(v_1, \ldots, v_{k+1}) \geqslant c_n(v_1, \ldots, v_k)$ pour tout $n, k, v_1, \ldots, v_k, v_{k+1} \geqslant 1$ ? Si non, donner des contre-exemples.
>
> 4. Dans cette question, Alaric peut acheter un porte-bonheur aux gobelins, qui coûte une pièce et a une durée de vie infinie. Le matin quand il se réveille, s’il a un porte-bonheur, il peut décider le soir de le jeter ou de le garder, et s’il n’en a pas, il peut décider le soir d’en acheter un ou non.
>    a) Reprendre les questions précédentes dans ce cadre. En particulier, existe-t-il des ensembles d’outils pour lesquels la présence du porte-bonheur diminue le coût minimal ? Si oui, les décrire.
>    b) Même question si les goblins proposent $m \geqslant 2$ porte-bonheur différents au nain.
>
> 5. Maintenant, si le nain casse un de ses outils dans la mine, il peut appeler à l’aide pour qu’une équipe de secouristes vienne le chercher, mais cela lui coûte alors $p \geqslant 1$ pièces. Il doit alors laisser ses outils cassés aux gobelins, et peut comme d’habitude en laisser d’autres s’il le souhaite. Les secouristes ne parlent pas la langue nain et ne peuvent donc lui communiquer aucune information. Reprendre les questions 1 à 4 dans ce cadre. En particulier, existe-t-il des ensembles d’outils pour lesquels la présence des secouristes diminue le coût ? Si oui, les décrire.
>
> 6. Proposer et étudier d’autres direction de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_invarianti|Invarianti]], [[method_ricorsione|Recursion]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<div class="qlang-split" data-lang="it"></div>


Un cercatore d'oro senza memoria utilizza tre strumenti con vite limitate che i goblin possono riparare durante la notte; dimentica tutto ogni giorno, quindi trova una strategia per ridurre al minimo il costo totale senza perdere mai le nugget, quindi generalizzatela a k strumenti, incantesimi di fortuna e salvatori.*

> Nano senza memoria.
> 
> Il nano Alaric è un cercatore di oro. Va ogni giorno alla miniera a trovare delle nugget lì.
> 
> Ogni giorno ci sono tre attrezzi: un pugnale, un casco e una lampada. Ogni strumento, utilizzato con una certa forza, ha una durata limitata: una picca, un casco e una lampada servono rispettivamente per 2, 3 e 3 giorni, dopo i quali cessano di funzionare. Alaric ha la possibilità di lasciare alcuni strumenti ai goblin la sera quando esce dalla miniera, in modo che gli vengano restituiti come nuovi la mattina dopo.
> 
> Tuttavia, Alaric è vittima di una maledizione: al risveglio, la mattina dopo, ha dimenticato tutto ciò che avrebbe potuto fare i giorni precedenti. E' anche incapace di osservare l'usura dei suoi strumenti. Così, ogni sera, nel momento in cui sceglie quali strumenti lasciare ai goblin, non è in grado di sapere quanto sono indossati, o quale gli appartiene. Domani mattina prenderà uno strumento che non è né troppo vecchio né; gli strumenti che prenderà tra quelli che troverà. Se cerca di usare uno strumento che non funziona più, allora non può scavare né raccogliere nuggets quel giorno.
> 
> L'obiettivo del nano è quello di trovare una strategia per spendere il minimo denaro possibile assicurandosi di non perdere le nugget: il primo giorno, i goblin gli forniscono tutti i suoi strumenti nuovi, ma la mattina dopo non saprà se è il primo giorno. Uno indica con $c_n$ la minima quantità possibile che la nana spenderà fino al $n$-th giorno, assicurandosi di non perdere nuggets fino al $n$-th giorno.
> 
> 1. Inserire $c_n$ con la massima precisione possibile. La stessa domanda se la lampada può servire fino a 4 giorni invece di 3.
> 
> 2. Il nano ora ha gli strumenti. Uno indica $v_1, \ldots, v_k \ge 1$ le loro vite e $c_n(v_1, \ldots, v_k)$ la quantità minima che il nano spenderà fino al $n$-th giorno assicurandosi di non perdere nuggets fino al $n$-th giorno. Valutare $c_n(v_1, \ldots, v_k)$, essendo interessato principalmente nei casi $n > 2^k$, per a) $k = 2$ e $v_1, v_2 \ge 1$ arbitrario. b) $v_i = k$ per tutti $i \in [\![1, k]\!]$. c) $v_i > k$ per tutti $i \in [\![1, k]\!]$. d) $v_i = i$ per tutti $i \in [\![1, k]\!]$. e) $v_i = 2^i$ per tutti $i \in [\![1, k]\!]$. f) $v_1, \ldots, v_k$ arbitrario. Potrebbe interessare altri valori particolari di $v_1, \ldots, v_k$.
> 
> 3. Si dispone sempre di $c_n(v_1, \ldots, v_{k+1}) \ge c_n(v_1, \ldots, v_k)$ per tutti $n, k, v_1, \ldots, v_k, v_{k+1} \ge 1$? Se non è così, date dei contro-esempi.
> 
> 4. In questa domanda, Alaric può comprare un fascino di fortuna dai goblin, che costa una moneta e ha una vita infinita. La mattina, quando si sveglia, se ha un fascino fortunato, può decidere la sera di buttarlo via o tenerlo, e se non ne ha uno, può decidere la sera di comprarlo o no. a) Ripetere le domande precedenti in questo contesto. In particolare, esistono strumenti per i quali la presenza del fascino di fortuna riduce il costo minimo? Se sì, descriverli. b) La stessa domanda se i goblin propongono diversi incantesimi di fortuna contemporaneamente.
> 
> 5. Ora, se il nano rompe uno dei suoi strumenti nella miniera, può chiamare aiuto in modo che un team di soccorritori venga a prenderlo, ma questo gli costerà monete. Deve poi lasciare i suoi strumenti rotti ai goblin, e non può comunicare alcuna informazione a loro (dal momento che non parlano la lingua nanna). Ripetere le domande da 1 a 4 in questo contesto. In particolare, esistono strumenti per i quali la presenza dei soccorritori riduce il costo? Se sì, descriverli.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2022__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]], [[method_invarianti|Invarianti / monovarianti]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*A memoryless gold-seeker uses three tools with limited lifetimes that goblins can repair overnight; he forgets everything daily, so find a strategy minimizing total cost c_n while never losing nuggets, then generalize to k tools, lucky charms, and rescuers.*

> Memoryless dwarf.
> 
> The dwarf Alaric is a seeker of gold. He goes each day to the mine to find nuggets there.
> 
> There are each day three tools: a pickaxe, a helmet and a lamp. Each tool, used with a certain force, has a limited lifetime: a pickaxe, a helmet and a lamp serve respectively during 2, 3 and 3 days, after which they cease to function. Alaric has the possibility of leaving certain tools with the goblins in the evening when leaving the mine, so that they are returned to him as new the next morning.
> 
> However, Alaric is victim of a curse: upon his waking, the next morning, he has forgotten all that he could have done the preceding days. He is also incapable of observing the wear of his tools. Thus, each evening, at the moment when he chooses which tools he is going to leave to the goblins, he is incapable of knowing either how worn they are, or which one belongs to him. He will tomorrow morning take a tool which is neither too old nor; the tools he is going to take among those he is going to find. If he attempts to use a tool that no longer works, then he cannot dig nor pick up nuggets that day.
> 
> The goal of the dwarf is to find a strategy to spend the least possible money while assuring himself of not losing nuggets: the first day, the goblins furnish him all his tools brand new, but the next morning he won't know whether it is the first day. One denotes by $c_n$ the smallest amount possible that the dwarf will spend up to the $n$-th day, while assuring himself of not losing nuggets up to the $n$-th day.
> 
> 1. Enclose $c_n$ as precisely as possible. Same question if the lamp can serve up to 4 days instead of 3.
> 
> 2. The dwarf now has $k \ge 1$ tools. One denotes $v_1, \ldots, v_k \ge 1$ their lifetimes and $c_n(v_1, \ldots, v_k)$ the minimal amount that the dwarf will spend up to the $n$-th day while assuring himself of not losing nuggets up to the $n$-th day. Estimate $c_n(v_1, \ldots, v_k)$, being interested principally in the cases $n > 2^k$, for
>   a) $k = 2$ and $v_1, v_2 \ge 1$ arbitrary.
>   b) $v_i = k$ for all $i \in [\![1, k]\!]$.
>   c) $v_i > k$ for all $i \in [\![1, k]\!]$.
>   d) $v_i = i$ for all $i \in [\![1, k]\!]$.
>   e) $v_i = 2^i$ for all $i \in [\![1, k]\!]$.
>   f) $v_1, \ldots, v_k$ arbitrary. One may be interested in other particular values of $v_1, \ldots, v_k$.
> 
> 3. Does one always have $c_n(v_1, \ldots, v_{k+1}) \ge c_n(v_1, \ldots, v_k)$ for all $n, k, v_1, \ldots, v_k, v_{k+1} \ge 1$? If not, give counter-examples.
> 
> 4. In this question, Alaric can buy a lucky charm from the goblins, which costs one coin and has an infinite lifetime. In the morning when he wakes up, if he has a lucky charm, he can decide in the evening to throw it away or to keep it, and if he has none, he can decide in the evening to buy one or not.
>   a) Repeat the preceding questions in this setting. In particular, do there exist sets of tools for which the presence of the lucky charm diminishes the minimal cost? If so, describe them.
>   b) Same question if the goblins propose $m \ge 2$ different lucky charms at once.
> 
> 5. Now, if the dwarf breaks one of his tools in the mine, he can call for help so that a team of rescuers comes to fetch him, but this then costs him $p \ge 1$ coins. He must then leave his broken tools with the goblins, and he cannot communicate any information to them (since they do not speak the dwarf language). Repeat questions 1 to 4 in this setting. In particular, do there exist sets of tools for which the presence of the rescuers diminishes the cost? If so, describe them.
> 
> 6. Propose and study other directions of research.

![[src_tfjm_2022__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_invarianti|Invarianti]], [[method_ricorsione|Recursion]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_analitica,topic_geometria_piana,topic_combinatoria,method_coordinate,method_simmetria,method_invarianti,method_casework,skill_ragionamento_geometrico,skill_astrazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="fr"></div>


*Microscopic tinkering: which line configurations Malo can reach from another using three operations (reflect a line across another, scale the whole picture by lambda, translate by a vector); study square and triangular grid configurations and interchangeability.*

> Bricolage microscopique
>
> Malo est un bricoleur particulier qui fait un travail très minutieux : il manipule des tiges métalliques très fines, qu'il observe avec son microscope.
>
> Depuis son microscope, Malo observe $n$ tiges qui forment chacune une droite sur l'écran, certaines d'entre elles pouvant être confondues. Il peut effectuer trois types de transformations pour déplacer ces droites :
>
> (i) À l'aide de rayons laser très sophistiqués, il est capable de choisir une de ces tiges et de la refléter par rapport à une autre des tiges présentes ;
>
> (ii) Il peut agrandir ou rétrécir l'image entière avec son microscope, avec n'importe quel agrandissement $\lambda \in \mathbb{R}_+^*$, c'est-à-dire que le point de coordonnées $(x, y)$ est envoyé sur le point de coordonnées $(\lambda x, \lambda y)$ (cela agit donc sur toutes les droites) ;
>
> (iii) Il peut translater toutes les droites d'un même vecteur $\vec{v}$.
>
> Il peut uniquement effectuer ces opérations, il ne lui est pas permis par exemple d'appliquer une rotation à toutes les droites. Si une droite $d$ est confondue avec une droite $d'$, Malo peut cependant bouger la droite $d$ avec l'opération (i) sans bouger la droite $d'$. Des exemples de transformations permises sont illustrés Figure 5.
>
> En appliquant ces trois types d'opérations un nombre fini de fois, il peut obtenir d'autres configurations de droites. Si Malo est capable d'obtenir une configuration $\mathcal{C}$ de droites à partir d'une configuration $\mathcal{C}'$, on dit que $\mathcal{C}'$ est accessible depuis $\mathcal{C}$.
>
> 1. Soit $n \geqslant 1$ un entier. Étant donné deux configurations de $n$ droites parallèles à l'axe des abscisses et telles que deux d'entre elles soient toujours à distance entière, à quelle condition peut-on accéder à l'une depuis l'autre ? On pourra commencer par le cas $n = 3$.
>
> 2. Une configuration de droites est dite carrée si toutes les droites appartiennent à une grille formée de carrés identiques dont les côtés sont parallèles aux axes. Une configuration de droites est dite triangulaire si toutes les droites appartiennent à une grille formée de triangles équilatéraux identiques ayant tous un côté parallèle à l'axe des abscisses. Les deux types de grilles ainsi que des exemples de configurations carrées et triangulaires sont illustrés Figure 6.
>
> (a) Soit $n \geqslant 1$ un entier. Existe-t-il un ensemble fini $E$ de configurations carrées avec $n$ droites tel que toute configuration carrée à $n$ droites soit accessible depuis une configuration de $E$ ? Si oui combien de configurations carrées faut-t-il au minimum ?
>
> (b) Étant donné deux configurations carrées, comment savoir si l'une est accessible depuis l'autre ?
>
> 3. Reprendre la question précédente en remplaçant les configurations carrées par les configurations triangulaires.
>
> Les droites sont à présent numérotées de 1 à $n$. Malo décide d'attribuer à chaque droite un nouveau numéro, qui sera noté $\sigma(i)$ pour la droite $i$. Il a cependant fait attention à ce que chaque numéro de 1 à $n$ apparaisse exactement une fois. Une configuration est interchangeable si, quelle que soit la renumérotation de Malo, il lui est possible d'effectuer des transformations de sorte qu'après ces transformations, pour tout $i \in [\![1, n]\!]$, la droite $\sigma(i)$ apparaisse exactement là où la droite $i$ était précédemment.
>
> 4. Quelles sont les configurations triangulaires et carrées qui sont interchangeables ?
>
> 5. Trouver des conditions nécessaires et suffisantes pour qu'une configuration quelconque de droites soit interchangeable. On pourra commencer par traiter le cas où les $n$ droites sont toutes parallèles.
>
> 6. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]], [[method_invarianti|Invarianti]], [[method_casework|Case analysis]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<div class="qlang-split" data-lang="it"></div>

*Bricolage microscopico: quali configurazioni di rette Malo può ottenere da un'altra con tre operazioni (riflettere una retta rispetto a un'altra, omotetia di rapporto lambda, traslazione); studio delle configurazioni a griglia quadrata e triangolare e della loro interscambiabilità.*
> Tintinatura microscopica (bricolaggio).
> 
> Malo è un tecnico che lavora molto minuziosamente: manipola bastone metalliche molto sottili, che osserva solo sotto un microscopio.
> 
> Sotto il microscopio, Malo osserva le barre $n$ che formano ciascuna una linea retta sullo schermo, alcune delle quali possibilmente si sovrappongono (confonde). Può eseguire tre tipi di trasformazioni per spostare queste barre: (i) Con l'aiuto di raggi molto sofisticati, è in grado di scegliere una di queste barre e rifletterla rispetto ad un'altra di queste barre presenti; (ii) Può ingrandire o ridurre l'intera immagine con il microscopio, con qualsiasi ingrandimento $\lambda \in \mathbb{R}_+^*$, cioè che il punto delle coordinate $(x, y)$ viene inviato al punto delle coordinate $(\lambda x, \lambda y)$ (questo per tutte le barre, che rimangono linee rette); (iii) Può tradurre tutte le barre con lo stesso vettore $\vec{v}$.
> 
> Può eseguire queste operazioni in modo unico, ma è consentito, ad esempio, di applicare una sola operazione a tutte le linee. Se una linea $d$ si sovrappone a una linea $d'$, Malo può comunque spostare la linea $d$ con l'operazione (i) senza spostare la linea $d'$. Alcuni esempi di trasformazioni consentite sono illustrati nella figura 5.
> 
> Applicando questi tre tipi di operazioni un numero finito di volte, può ottenere altre configurazioni di linee. Se Malo è in grado di ottenere una configurazione $\mathcal{C}$ di linee da una configurazione $\mathcal{C}'$, si dice che $\mathcal{C}'$ è $accessible$ da $\mathcal{C}$.
> 
> 1. $n \ge 3$ sia un numero intero. Date due configurazioni di rette $n$ parallele all'asse delle abscisse e tali che le due siano sempre a distanza di numeri interi, a quale condizione si può accedere all'una dall'altra? Si può iniziare con il caso $n = 3$.
> 
> 2. Si dice che una configurazione di linee sia $square$ (carrée) se tutte le rette appartengono a una griglia costituita da quadrati identici i cui lati sono paralleli agli assi. Si dice che una configurazione di rette sia $triangular$ se tutte le rette appartengono a una griglia costituita da triangoli equilaterali identici che hanno tutti un lato parallelo all'asse delle abscisse. Le due tipologie di griglie e gli esempi di configurazioni quadrate e triangolari sono illustrati nella figura 6. a) Il $n \ge 1$ deve essere un numero intero. Esiste un insieme finito $E$ di configurazioni quadrate con linee $n$ in modo tale che ogni configurazione quadrata con linee $n$ sia accessibile da una configurazione di $E$? Se sì, quante configurazioni sono necessarie al minimo? b) Dato che ci sono due configurazioni quadrate, come si può sapere se l'una è accessibile dall'altra?
> 
> 3. Riprendi la domanda precedente, sostituendo le configurazioni quadrate con le configurazioni triangolari.
> 
> Le rette sono ora numerate da 1 a $n$. Malo decide di attribuire a ciascuna riga un nuovo numero, che sarà indicato $\sigma(i)$ per la riga $i$. Egli ha tuttavia fatto in modo che ogni numero da 1 a $n$ appaia esattamente una volta. Una configurazione è $interchangeable$ se, qualunque sia la rinumerazione di Malo, è possibile per lui eseguire trasformazioni in modo che, dopo queste trasformazioni, per tutte le $i \in [\![1, n]\!]$, la riga $\sigma(i)$ apparisca esattamente dove la riga $i$ era precedentemente.
> 
> 4. Quali configurazioni triangolari e quadrate sono intercambiabili?
> 
> 5. Trovare le condizioni necessarie e sufficienti affinché una configurazione arbitraria di linee sia intercambiabile. Si può iniziare trattando il caso in cui le linee $n$ siano tutte parallele.
> 
> 6. Proporre e studiare altre vie di ricerca.

![[src_tfjm_2022__Q05.png]]

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_simmetria|Sfruttamento della simmetria]], [[method_invarianti|Invarianti / monovarianti]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Microscopic tinkering: which line configurations Malo can reach from another using three operations (reflect a line across another, scale the whole picture by lambda, translate by a vector); study square and triangular grid configurations and interchangeability.*

> Microscopic tinkering (bricolage).
> 
> Malo is a particular tinkerer who works very minutely: he manipulates very thin metallic rods, which he observes only under a microscope.
> 
> Under the microscope, Malo observes $n$ rods that each form a straight line on the screen, certain of them possibly overlapping (confondues). He can perform three types of transformations to displace these rods:
>   (i) With the aid of very sophisticated rays, he is capable of choosing one of these rods and reflecting it with respect to one other of these rods present;
>   (ii) He can enlarge or shrink the entire image with the microscope, with any enlargement $\lambda \in \mathbb{R}_+^*$, that is to say that the point of coordinates $(x, y)$ is sent to the point of coordinates $(\lambda x, \lambda y)$ (this for all the rods, which remain straight lines);
>   (iii) He can translate all the rods by a same vector $\vec{v}$.
> 
> He can perform these operations uniquely; he is however permitted, for example, to apply a single operation to all the lines. If a line $d$ is overlapping with a line $d'$, Malo can nonetheless move the line $d$ with operation (i) without moving the line $d'$. Some examples of permitted transformations are illustrated in Figure 5.
> 
> By applying these three types of operations a finite number of times, he can obtain other configurations of lines. If Malo is capable of obtaining a configuration $\mathcal{C}$ of lines from a configuration $\mathcal{C}'$, one says that $\mathcal{C}'$ is $accessible$ from $\mathcal{C}$.
> 
> 1. Let $n \ge 3$ be an integer. Given two configurations of $n$ lines parallel to the axis of abscissas and such that any two of them are always at integer distance, under what condition can one access one from the other? One may begin with the case $n = 3$.
> 
> 2. A configuration of lines is said to be $square$ (carrée) if all the lines belong to a grid formed of identical squares whose sides are parallel to the axes. A configuration of lines is said to be $triangular$ if all the lines belong to a grid formed of identical equilateral triangles all having a side parallel to the axis of abscissas. The two types of grids as well as examples of square and triangular configurations are illustrated in Figure 6.
>   a) Let $n \ge 1$ be an integer. Does there exist a finite set $E$ of square configurations with $n$ lines such that every square configuration with $n$ lines is accessible from a configuration of $E$? If so, how many configurations are needed at minimum?
>   b) Given two square configurations, how can one know if one is accessible from the other?
> 
> 3. Redo the preceding question, replacing the square configurations by triangular configurations.
> 
> The lines are now numbered from 1 to $n$. Malo decides to attribute to each line a new number, which will be denoted $\sigma(i)$ for line $i$. He has however taken care that each number from 1 to $n$ appears exactly once. A configuration is $interchangeable$ if, whatever Malo's renumbering, it is possible for him to perform transformations such that, after these transformations, for all $i \in [\![1, n]\!]$, the line $\sigma(i)$ appears exactly where the line $i$ was previously.
> 
> 4. Which triangular and square configurations are interchangeable?
> 
> 5. Find necessary and sufficient conditions for an arbitrary configuration of lines to be interchangeable. One may begin by treating the case where the $n$ lines are all parallel.
> 
> 6. Propose and study other avenues of research.

![[src_tfjm_2022__Q05.png]]

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]], [[method_invarianti|Invarianti]], [[method_casework|Case analysis]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,topic_logica,method_grafi,method_bigezione,method_casework,method_estremalita,skill_modellizzazione,skill_astrazione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="fr"></div>


*Twin towns: each day Aliénor picks an inhabitant of A without a correspondent and Boniface assigns one in B preserving friendship; study perfect twinnings and the maximal asymmetric/symmetric compatibility C(A,B), D(A,B) for cycle-towns and the infinite town Z.*

> Villes jumelées
>
> Aliénor et Boniface sont maires de deux villes $A$ et $B$. Boniface veut organiser un jumelage avec la ville d'Aliénor mais celle-ci cherche à faire échouer ce projet.
>
> Dans chacune des villes, certains habitants sont amis, l'amitié étant considérée comme réciproque. Un jumelage consiste à donner à chaque habitant de la ville $A$ un unique correspondant dans la ville $B$ de sorte que deux personnes différentes aient des correspondants différents. Aliénor et Boniface organisent les correspondances entre les habitants comme suit : chaque jour, Aliénor choisit un habitant de la ville $A$ qui n'a pas encore de correspondant, puis Boniface choisit son correspondant dans la ville $B$ parmi les habitants qui n'ont pas encore de correspondant. Si à un certain moment, deux habitants d'une même ville sont amis et ont tous les deux des correspondants mais ceux-ci ne sont pas amis, alors le jumelage échoue et la procédure s'arrête. Le jumelage est parfait si Boniface parvient à donner un correspondant à chaque habitant de la ville $A$.
>
> 1. À quelle condition sur les villes $A$ et $B$ est-il possible pour Boniface de s'assurer d'atteindre un jumelage parfait, quels que soient les choix d'Aliénor ? On supposera que les villes $A$ et $B$ ont un nombre fini d'habitants (mais pas forcément le même).
>
> Étant donné deux villes $A$ et $B$, leur compatibilité maximale asymétrique $C(A, B)$ est le plus grand entier $n$ tel que Boniface puisse s'assurer que la correspondance n'échoue pas après $n$ jours, quels que soient les choix d'Aliénor.
>
> Soit $k \geqslant 3$. Un $k$-cycle dans une ville est un ensemble de $k$ habitants $e_1, \cdots, e_k$ tels que les seuls amis de $e_i$ soient $e_{i-1}$ et $e_{i+1}$ pour tout $1 \leqslant i \leqslant k$, en posant $e_0 = e_k$ et $e_{k+1} = e_1$. La ville dont les $a_1 + a_2 + \cdots + a_\ell$ habitants forment un $a_1$-cycle, un $a_2$-cycle, $\ldots$, et un $a_\ell$-cycle disjoints est appelée $\mathcal{C}_{a_1, a_2, \cdots, a_\ell}$. La ville $\mathcal{Z}$ est la ville infinie avec un habitant par entier relatif, et telle que les seuls amis de l'habitant $i$ sont les habitants $i + 1$ et $i - 1$.
>
> La figure 7 illustre la ville $\mathcal{C}_6$ et la ville $\mathcal{C}_{3,3}$. Les habitants sont représentés par des cercles, et deux habitants sont amis lorsqu'un segment les rejoint.
>
> 2. En supposant qu'il y a le même nombre $n \in \mathbb{N}$ d'habitants dans la ville $A$ que dans la ville $B$, quelles valeurs peut prendre $C(A, B)$ ?
>
> 3. Estimer la valeur de $C(\mathcal{C}_n, \mathcal{Z})$ et de $C(\mathcal{Z}, \mathcal{C}_n)$. On pourra commencer par considérer de petites valeurs de $n$.
>
> 4. Estimer $C(\mathcal{C}_{a+b}, \mathcal{C}_{a,b})$ et $C(\mathcal{C}_{a,b}, \mathcal{C}_{a+b})$ pour $a, b \geqslant 1$ entiers. On pourra commencer par considérer de petites valeurs de $a$ et $b$.
>
> L'année suivante, Aliénor et Boniface s'organisent différemment : chaque jour Aliénor choisit un habitant dans la ville de son choix qui n'a pas de correspondant, puis Boniface choisit son correspondant dans l'autre ville parmi les habitants qui n'ont pas encore de correspondant. On appelle alors compatibilité maximale symétrique et on note $D(A, B)$ le plus grand entier $n$ tel que Boniface puisse s'assurer que la correspondance n'échoue pas après $n$ jours, quels que soient les choix d'Aliénor.
>
> 5. Reprendre les questions précédentes en remplaçant la compatibilité maximale asymétrique par la compatibilité maximale symétrique.
>
> 6. Proposer et étudier d'autres directions de recherche.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_bigezione|Biiezione]], [[method_casework|Casework]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<div class="qlang-split" data-lang="it"></div>


*Comuni gemelli: ogni giorno Aliénor sceglie un abitante di A senza corrispondente e Boniface ne assegna uno in B per preservare l'amicizia; studiare gemelli perfetti e la massima compatibilità asimmetrica/simmetrica C(A,B), D(A,B) per città ciclabili e la città infinita Z.*

> città gemelle (Villes jumelées).
> 
> Aliénor e Boniface sono sindaci di due città $A$ e $B$. Boniface vuole organizzare un gemellaggio con la città di Aliénor, ma quest'ultima cerca di far fallire questo progetto.
> 
> Per fare le città gemelle, alcuni abitanti saranno associati, l'amicizia considerata reciproca. Per essere gemelli si intende associare a un abitante di una città $A$ un singolo abitante corrispondente di una città $B$ in modo tale che due persone diverse abbiano corrispondenti diversi. Aliénor e Boniface organizzano le corrispondenze tra gli abitanti come segue: ogni giorno, Aliénor sceglie un abitante della città $A$ che non ha ancora un corrispondente, poi Boniface sceglie un corrispondente in città $B$ tra gli abitanti che non hanno ancora un corrispondente. Se in un certo momento due abitanti di una stessa città sono amici e entrambi hanno corrispondenti ma questi corrispondenti non hanno lo stesso amico, [la corrispondenza fallisce]; il gemellaggio è $perfect$ se Boniface riesce a dare un corrispondente a ogni abitante della città $A$.
> 
> 1. In quali condizioni nelle città $A$ e $B$ è possibile che Bonifacio si assicuri di raggiungere un gemellaggio perfetto, qualunque sia la scelta di Aliénor? Si suppone che le città $A$ e $B$ abbiano un numero finito di abitanti (ma non necessariamente la stessa).
> 
> Date le due città $A$ e $B$, il loro $maximal asymmetric compatibility$ $C(A, B)$ è il più grande numero intero $n$ in modo tale che Bonifacio può assicurarsi che la corrispondenza non fallisce dopo $n$ giorni, qualunque siano le scelte di Aliénor.
> 
> Sia $k \ge 3$. Un ciclo $k$ in una città è un insieme di abitanti $k$ $c_1, \cdots, c_k$ in modo tale che gli unici amici di $c_i$ siano $c_{i-1}$ e $c_{i+1}$ per tutti $1 \le i \le k$, impostando $c_0 = c_k$ e $c_{k+1} = c_1$. La città i cui abitanti $a_1 + a_2 + \cdots + a_l$ formano un ciclo $a_1$, ... e un ciclo $a_l$ disgiunto si chiama $\mathcal{C}_{a_1, a_2, \ldots, a_l}$. La città $\mathcal{Z}$ è la città infinita con un abitante per numero intero relativo, e tale che gli unici amici dell'abitante $i$ sono gli abitanti $i + 1$ e $i - 1$.
> 
> La figura 7 illustra la città $\mathcal{C}_6$ e la città $\mathcal{C}_{3,3}$. Gli abitanti sono rappresentati da cerchi e due amici sono uniti da un segmento quando sono legati.
> 
> 2. Supponendo che ci sia lo stesso numero di abitanti in città $n \in \mathbb{N}$ come in città $B$, quali valori può $C(A, B)$ assumere?
> 
> 3. Calcolare il valore di $C(\mathcal{C}_n, \mathcal{Z})$ e di $C(\mathcal{Z}, \mathcal{C}_n)$. Si può iniziare considerando piccoli valori di $n$.
> 
> 4. Valutare $C(\mathcal{C}_{a+b}, \mathcal{C}_{a,b})$ e $C(\mathcal{C}_{a,b}, \mathcal{C}_{a+b})$ per $a, b \ge 1$ interi. Si può iniziare considerando piccoli valori di $a$ e $b$.
> 
> L'anno successivo, Aliénor e Boniface si organizzano in modo diverso: ogni giorno Aliénor sceglie un abitante della città di sua scelta che non ha un corrispondente, poi Boniface sceglie il suo corrispondente nell'altra città tra gli abitanti che non hanno ancora un corrispondente. Si chiama poi $maximal symmetric compatibility$ e si denota $D(A, B)$ il più grande intero $n$ in modo tale che Bonifacio possa assicurarsi che la corrispondenza non fallisca dopo $n$ giorni, qualunque siano le scelte di Aliénor.
> 
> 5. Riprendi le domande precedenti, sostituendo la massima compatibilità asimmetrica con la massima compatibilità simmetrica.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2022__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_grafi|Teoria dei grafi]], [[method_bigezione|Bigezione / corrispondenza]], [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Twin towns: each day Aliénor picks an inhabitant of A without a correspondent and Boniface assigns one in B preserving friendship; study perfect twinnings and the maximal asymmetric/symmetric compatibility C(A,B), D(A,B) for cycle-towns and the infinite town Z.*

> Twin towns (Villes jumelées).
> 
> Aliénor and Boniface are mayors of two towns $A$ and $B$. Boniface wants to organize a twinning with the town of Aliénor, but the latter seeks to make this project fail.
> 
> To twin the towns, certain inhabitants will be associated, friendship being considered as reciprocal. To twin consists in associating to an inhabitant of town $A$ a single corresponding inhabitant of town $B$ in such a way that two different persons have different correspondents. Aliénor and Boniface organize the correspondences between the inhabitants as follows: each day, Aliénor chooses an inhabitant of town $A$ who does not yet have a correspondent, then Boniface chooses a correspondent in town $B$ among the inhabitants who do not yet have a correspondent. If at a certain moment two inhabitants of a same town are friends and both have correspondents but these correspondents do not have the same friend, [the correspondence fails]; the twinning is $perfect$ if Boniface manages to give a correspondent to each inhabitant of town $A$.
> 
> 1. Under what condition on the towns $A$ and $B$ is it possible for Boniface to assure himself of attaining a perfect twinning, whatever the choices of Aliénor? One will suppose that the towns $A$ and $B$ have a finite number of inhabitants (but not necessarily the same).
> 
> Given two towns $A$ and $B$, their $maximal asymmetric compatibility$ $C(A, B)$ is the largest integer $n$ such that Boniface can assure himself that the correspondence does not fail after $n$ days, whatever the choices of Aliénor.
> 
> Let $k \ge 3$. A $k$-cycle in a town is a set of $k$ inhabitants $c_1, \cdots, c_k$ such that the only friends of $c_i$ are $c_{i-1}$ and $c_{i+1}$ for all $1 \le i \le k$, setting $c_0 = c_k$ and $c_{k+1} = c_1$. The town whose $a_1 + a_2 + \cdots + a_l$ inhabitants form an $a_1$-cycle, ... and an $a_l$-cycle, disjoint, is called $\mathcal{C}_{a_1, a_2, \ldots, a_l}$. The town $\mathcal{Z}$ is the infinite town with one inhabitant per relative integer, and such that the only friends of inhabitant $i$ are the inhabitants $i + 1$ and $i - 1$.
> 
> Figure 7 illustrates the town $\mathcal{C}_6$ and the town $\mathcal{C}_{3,3}$. The inhabitants are represented by circles, and two friends are joined by a segment when they are linked.
> 
> 2. Supposing that there is the same number $n \in \mathbb{N}$ of inhabitants in town $A$ as in town $B$, what values can $C(A, B)$ take?
> 
> 3. Estimate the value of $C(\mathcal{C}_n, \mathcal{Z})$ and of $C(\mathcal{Z}, \mathcal{C}_n)$. One may begin by considering small values of $n$.
> 
> 4. Estimate $C(\mathcal{C}_{a+b}, \mathcal{C}_{a,b})$ and $C(\mathcal{C}_{a,b}, \mathcal{C}_{a+b})$ for $a, b \ge 1$ integers. One may begin by considering small values of $a$ and $b$.
> 
> The following year, Aliénor and Boniface organize themselves differently: each day Aliénor chooses an inhabitant of the town of her choice who does not have a correspondent, then Boniface chooses his correspondent in the other town among the inhabitants who do not yet have a correspondent. One then calls $maximal symmetric compatibility$ and denotes $D(A, B)$ the largest integer $n$ such that Boniface can assure himself that the correspondence does not fail after $n$ days, whatever the choices of Aliénor.
> 
> 5. Redo the preceding questions, replacing the maximal asymmetric compatibility by the maximal symmetric compatibility.
> 
> 6. Propose and study other directions of research.

![[src_tfjm_2022__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_bigezione|Biiezione]], [[method_casework|Casework]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_geometria_piana,topic_geometria_analitica,topic_funzionali,method_ricorsione,method_coordinate,method_simmetria,method_invarianti,skill_ragionamento_geometrico,skill_modellizzazione,skill_stima"></span>

<div class="qlang-switch" data-default="fr"></div>


*Dog walk: n dogs each move one unit per second toward the next dog (cyclically); Boule on a leash of length L must avoid breaking leashes whether he stays put or moves; study triangle case, universal leash lengths, and variants where a dog chases a cat on an N-gon or a line.*

> Promenade de chiens
>
> Boule décide d'aller promener ses chiens. Malheureusement pour lui, ces derniers sont très turbulents et se courent après.
>
> Boule possède $n \geqslant 2$ chiens. Pour tout $1 \leqslant i \leqslant n$, le chien numéro $i$ suit le chien numéro $i + 1$ (en considérant que le chien numéro $n + 1$ est le chien numéro 1). Les chiens se déplacent de la manière suivante : à chaque seconde, pour tout $1 \leqslant i \leqslant n$, le chien numéro $i$ fait un pas de longueur 1 en direction du chien $i + 1$. Plus précisément, pour tout $t \in \mathbb{N}$, en notant $C_i(t)$ la position du chien $i$ au bout de $t$ secondes :
>
> — si $C_i(t) \ne C_{i+1}(t)$, alors $C_i(t + 1)$ est l'unique point tel que les vecteurs $\overrightarrow{C_i(t)C_i(t + 1)}$ et $\overrightarrow{C_i(t)C_{i+1}(t)}$ aient la même direction, le même sens, et $C_i(t)C_i(t + 1) = 1$ ;
>
> — si $C_i(t) = C_{i+1}(t)$, alors $C_i(t + 1) = C_i(t)$, autrement dit le $i$-ième chien ne bouge pas.
>
> Les chiens se déplacent donc tous en même temps à chaque seconde. La figure 8 illustre un exemple avec $n = 3$.
>
> Boule a attaché une laisse de longueur $L$ au cou de chacun de ses chiens. Une laisse se brise si à un temps $t \in \mathbb{N}$, la distance entre Boule et un de ses chiens est strictement supérieure à $L$.
>
> 1. Boule est d'humeur paresseuse : il choisit un point au début de la balade en fonction des positions initiales des chiens et ne bouge plus.
>
> a) On suppose que $n = 3$ et que les trois chiens sont disposés initialement sur les sommets d'un triangle équilatéral de côté $c$. Existe-t-il une longueur $L$ telle que Boule puisse s'assurer de ne briser aucune laisse ? Si oui quelle est la plus petite longueur $L$ qui permet cela, en fonction de $c$ ?
>
> b) On suppose à présent $n$ quelconque. Est-il vrai que peu importe la configuration initiale, Boule peut toujours prévoir une longueur de laisse suffisante ? On pourra commencer par étudier les cas $n = 2, 3, 4$.
>
> 2. À partir de maintenant Boule décide de se déplacer pour éviter que les laisses ne se brisent : à chaque instant $t$ il peut se placer au point de son choix (il court très vite donc il n'a pas de limitation due à sa vitesse).
>
> a) Pour $n = 3$ chiens en position initiale quelconque, est-il vrai que Boule peut prévoir une longueur de laisse suffisante pour que la laisse ne se brise pas tant qu'il se déplace avec ses chiens ?
>
> b) Étudier le cas de $n$ chiens en position initiale quelconque.
>
> Une longueur $L_0$ est dite universelle pour $n$ chiens si quelle que soit la position initiale des chiens, il existe un temps $t_0$ à partir duquel Boule, qui se déplace, puisse remplacer ses laisses par des laisses de longueur $L_0$ sans que plus jamais elles ne se brisent.
>
> 3. Pour quels $n \geqslant 2$ existe-t-il une longueur universelle pour $n$ chiens ? Pour de tels $n$, quelle est la plus petite longueur universelle ? On pourra commencer par traiter les cas $n = 2, 3, 4$.
>
> Mylène, la voisine de Boule, possède un chat, qui se situe au point $M(t)$ au temps $t$. On suppose désormais que le chien numéro $n$ ne suit plus le chien numéro 1 mais le chat, c'est-à-dire qu'à chaque seconde il fait un pas de longueur 1 en direction du chat. Les règles de déplacement des autres chiens restent inchangées.
>
> 4. Le chat de Mylène se déplace sur les sommets d'un $N$-gone régulier de côté 1. À chaque instant, il passe d'un sommet au sommet suivant (dans le sens direct).
>
> a) Si Boule n'a qu'un seul chien, et que le chien démarre au centre du $N$-gone, estimer la longueur de laisse que Boule doit prévoir s'il ne bouge pas.
>
> b) Même question pour $n$ chiens qui commencent tous au centre.
>
> 5. Cette fois le chat se déplace sur une droite en faisant un pas de longueur 1 dans la même direction à chaque instant. Quelle longueur de laisse Boule doit-il prévoir s'il peut bouger, en fonction de la configuration initiale ?
>
> 6. Proposer et étudier d'autres pistes de recherche.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]], [[method_invarianti|Invariants / monovariants]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]]
**Area:** [[Geometria|Geometry]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<div class="qlang-split" data-lang="it"></div>

*Passeggiata dei cani: n cani si spostano ogni secondo di un'unità verso il cane successivo (ciclicamente); Boule, con un guinzaglio di lunghezza L, deve evitare che i guinzagli si rompano stando fermo o muovendosi; caso del triangolo, lunghezze universali di guinzaglio, e varianti in cui un cane insegue un gatto su un N-agono o su una retta.*
> Passeggiata per cani (Promenade de chiens).
> 
> Boule decide di fare una passeggiata ai suoi cani. Purtroppo per lui, questi ultimi sono molto turbolenti e si corrono l'uno dietro l'altro.
> 
> Boule possiede cani $n \ge 2$. Per tutti i $1 \le i \le n$, il cane del numero $i$ segue il cane del numero $i + 1$ (si considera che il numero di cane $n + 1$ sia il numero di cane 1). I cani si muovono nel modo seguente: ogni secondo, per $1 \le i \le n$, il cane $i$ si muove una lunghezza 1 nella direzione del cane $i + 1$. Più precisamente, per tutti i $t \in \mathbb{N}$, indicando $C_i(t)$ la posizione del cane $i$ alla fine di $t$ secondi:  se $C_i(t) \ne C_{i+1}(t)$, allora $C_i(t+1)$ è il punto unico in modo che i vettori $\overrightarrow{C_i(t)C_i(t+1)}$ e $\overrightarrow{C_i(t)C_{i+1}(t)}$ abbiano la stessa direzione e senso, e $C_i(t)C_i(t+1) = 1$;  se $C_i(t) = C_{i+1}(t)$, allora $C_i(t+1) = C_i(t)$, in altre parole il cane $i$-th non si muove.
> 
> I cani si muovono tutti allo stesso tempo ogni secondo. La figura 8 illustra un esempio con $n = 3$.
> 
> Boule ha attaccato un guinzaglio di $L$ al collo di ciascuno dei suoi cani. La guinzaglia si rompe se a un tempo $t \in \mathbb{N}$ la distanza tra Boule e uno dei suoi cani è strettamente superiore a $L$.
> 
> 1. Boule è di umore pigro: sceglie un punto all'inizio della passeggiata in funzione delle posizioni iniziali dei cani e non si muove più. a) Supponiamo $n = 3$ e che i tre cani siano posizionati inizialmente alle vertici di un triangolo equilaterale laterale $c$. Esiste una lunghezza $L$ tale che Boule possa assicurarsi di non rompere la guinzaglia? In tal caso, quale è la lunghezza $L$ più piccola che lo consente, come funzione di $c$? b) Supponiamo ora che $n$ sia arbitrario. E' vero che, qualunque sia la configurazione iniziale, Boule può sempre prevedere una lunghezza di guinzaglio sufficiente? Si può iniziare studiando i casi $n = 2, 3, 4$.
> 
> 2. D'ora in poi Boule decide di muoversi in modo da evitare la rottura dei guinzetti: in ogni istante $t$ può mettersi al punto di sua scelta (corre molto veloce quindi non ha limiti a causa della sua velocità). a) Per $n = 3$ con posizione iniziale arbitraria, è vero che Boule può prevedere una lunghezza di guinzaglio sufficiente affinché la guinzaglia non si rompa mentre si muove con i suoi cani? b) Studiare il caso di cani $n$ in posizione iniziale arbitraria.
> 
> Una lunghezza $L_0$ è detta $universal$ per i cani $n$ se, qualunque sia la posizione iniziale dei cani, esiste un tempo $t_0$ a partire dal quale Boule, che si muove, può sostituire le sue guinzaglie con guinzaglie di lunghezza $L_0$ senza che nessuna di queste guinzaglie si rompa più.
> 
> 3. Per quale $n \ge 2$ esiste una lunghezza universale per i cani $n$? Per tale $n$, quale è la lunghezza universale più piccola? Si può iniziare con il trattamento dei casi $n = 2, 3, 4$.
> 
> Mylène, vicina di Boule, possiede un gatto, che si trova al punto $M(t)$ al momento $t$. Si suppone che da ora in poi il numero di cane $n$ non segua più il numero di cane 1 ma il gatto, cioè che ogni secondo fa un passo di lunghezza 1 nella direzione del gatto. Le regole di movimento degli altri cani rimangono invariate.
> 
> 4. Il gatto di Mylène si muove sulle vertici di un normale $N$-gon del lato 1. Ogni istante passa da un vertice al vertice successivo (nel senso diretto). a) Se Boule ha un solo cane e il cane parte al centro del $N$-gon, quale lunghezza di guinzaglio deve prevedere Boule se non si muove? b) La stessa domanda per i cani $n$ che iniziano tutti al centro.
> 
> 5. Questa volta il gatto si muove in linea retta, facendo un passo di lunghezza 1 nella stessa direzione ogni istante. Che lunghezza di guinzaglio deve prevedere Boule se può muoversi, in funzione della configurazione iniziale?
> 
> 6. Proporre e studiare altre vie di ricerca.

![[src_tfjm_2022__Q07.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_coordinate|Metodo delle coordinate]], [[method_simmetria|Sfruttamento della simmetria]], [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_stima|Stima e approssimazione]]
**Area:** [[Geometria]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Dog walk: n dogs each move one unit per second toward the next dog (cyclically); Boule on a leash of length L must avoid breaking leashes whether he stays put or moves; study triangle case, universal leash lengths, and variants where a dog chases a cat on an N-gon or a line.*

> Dog walk (Promenade de chiens).
> 
> Boule decides to walk his dogs. Unfortunately for him, these last ones are very turbulent and run after each other.
> 
> Boule possesses $n \ge 2$ dogs. For all $1 \le i \le n$, the dog of number $i$ follows the dog of number $i + 1$ (one considers that dog number $n + 1$ is dog number 1). The dogs move in the following manner: at each second, for $1 \le i \le n$, the dog $i$ moves a length 1 in the direction of dog $i + 1$. More precisely, for all $t \in \mathbb{N}$, denoting $C_i(t)$ the position of dog $i$ at the end of $t$ seconds:
>   — if $C_i(t) \ne C_{i+1}(t)$, then $C_i(t+1)$ is the unique point such that the vectors $\overrightarrow{C_i(t)C_i(t+1)}$ and $\overrightarrow{C_i(t)C_{i+1}(t)}$ have the same direction and same sense, and $C_i(t)C_i(t+1) = 1$;
>   — if $C_i(t) = C_{i+1}(t)$, then $C_i(t+1) = C_i(t)$, in other words the $i$-th dog does not move.
> 
> The dogs thus all move at the same time at each second. Figure 8 illustrates an example with $n = 3$.
> 
> Boule has attached a leash of length $L$ to the neck of each of his dogs. A leash breaks if at a time $t \in \mathbb{N}$, the distance between Boule and one of his dogs is strictly greater than $L$.
> 
> 1. Boule is of a lazy mood: he chooses a point at the beginning of the walk as a function of the initial positions of the dogs and does not move any more.
>   a) Suppose $n = 3$ and that the three dogs are placed initially at the vertices of an equilateral triangle of side $c$. Does there exist a length $L$ such that Boule can assure himself of breaking no leash? If so, what is the smallest length $L$ that permits this, as a function of $c$?
>   b) Suppose now $n$ arbitrary. Is it true that whatever the initial configuration, Boule can always foresee a sufficient leash length? One may begin by studying the cases $n = 2, 3, 4$.
> 
> 2. From now on Boule decides to move so as to avoid the leashes breaking: at each instant $t$ he can place himself at the point of his choice (he runs very fast so he has no limitation due to his speed).
>   a) For $n = 3$ with an arbitrary initial position, is it true that Boule can foresee a sufficient leash length so that the leash does not break as long as he moves with his dogs?
>   b) Study the case of $n$ dogs in an arbitrary initial position.
> 
> A length $L_0$ is said to be $universal$ for $n$ dogs if whatever the initial position of the dogs, there exists a time $t_0$ from which Boule, who moves, can replace his leashes by leashes of length $L_0$ without any of these leashes breaking any more.
> 
> 3. For which $n \ge 2$ does there exist a universal length for $n$ dogs? For such $n$, what is the smallest universal length? One may begin by treating the cases $n = 2, 3, 4$.
> 
> Mylène, the neighbor of Boule, possesses a cat, which is situated at the point $M(t)$ at time $t$. One supposes from now on that dog number $n$ no longer follows dog number 1 but the cat, that is to say that at each second it makes a step of length 1 in the direction of the cat. The rules of movement of the other dogs remain unchanged.
> 
> 4. The cat of Mylène moves on the vertices of a regular $N$-gon of side 1. At each instant, it passes from a vertex to the following vertex (in the direct sense).
>   a) If Boule has only a single dog, and the dog starts at the center of the $N$-gon, what leash length must Boule foresee if he does not move?
>   b) Same question for $n$ dogs which all start at the center.
> 
> 5. This time the cat moves on a straight line, making a step of length 1 in the same direction at each instant. What leash length must Boule foresee if he can move, as a function of the initial configuration?
> 
> 6. Propose and study other avenues of research.

![[src_tfjm_2022__Q07.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]], [[method_invarianti|Invariants / monovariants]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]]
**Area:** [[Geometria|Geometry]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_geometria_piana,topic_geometria_analitica,topic_logica,method_coordinate,method_estremalita,method_casework,skill_ragionamento_geometrico,skill_modellizzazione,skill_astrazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="fr"></div>


*Perseus and the Gorgon: a step-by-step pursuit where each moves at most d_0 per step and the Gorgon petrifies Perseus if the segment between them avoids the obstacle O; determine admissible distances d for various obstacles (line, point, segment, disk, polygon), characterize possible admissible sets, and treat continuous-speed strategy variants.*

> Persée et la Gorgone
>
> Persée s'aventure dans la caverne de la Gorgone, et cherche à échapper à son regard pétrifiant.
>
> La caverne de la Gorgone est un plan sur lequel se trouve un obstacle $\mathcal{O}$, qui est un ensemble de points sur lesquels Persée et la Gorgone ne peuvent pas s'arrêter, mais ils sont capables de sauter par dessus. Persée et la Gorgone savent à chaque instant où l'autre se situe, mais le regard de la Gorgone ne touche Persée que si le segment entre les deux ne contient aucun point de l'obstacle. Dans ce cas Persée est pétrifié.
>
> Soit $d_0$ un réel. La Gorgone choisit initialement son point de départ en dehors de l'obstacle. Persée choisit ensuite son point de départ en fonction de celui de la Gorgone. Alors la Gorgone commence par essayer de toucher Persée de son regard. Si cela réussit elle le pétrifie. Sinon elle choisit un point qui n'est pas dans l'obstacle et qui est à distance au plus $d_0$ de là où elle est et s'y rend. Puis Persée, qui sait où la Gorgone est en train d'aller, choisit un point à distance au plus 1 de là où il est hors de l'obstacle et s'y rend. Lorsque les deux sont arrivés à leur nouveau point, la Gorgone essaye à nouveau de toucher Persée de son regard, et ainsi de suite. Le réel $d$ est dit admissible pour l'obstacle $\mathcal{O}$ si, avec cet obstacle, Persée dispose d'une stratégie qui lui permet de ne jamais être pétrifié, quoi que fasse la Gorgone, si $d_0 = d$.
>
> La figure 9 illustre un exemple de poursuite entre Persée et la Gorgone, dans le cas où l'obstacle est un triangle plein et $d_0 = 2$. Les points successifs où se situe Persée sont les points $P_0, P_1, P_2, P_3$, et les points successifs où se situe la Gorgone sont les points $G_0, G_1, G_2, G_3$. Après 3 étapes, le regard de la Gorgone touche enfin Persée : ce dernier est pétrifié.
>
> 1. Quels sont les réels admissibles si l'obstacle est une droite ? Si c'est un point ? Si c'est un segment de longueur $\ell > 0$ ?
>
> 2. L'obstacle est un disque ouvert de rayon $r > 0$. Quels sont les réels admissibles pour cet obstacle en fonction de $r$ ? On pourra commencer par le cas $r = 1$.
>
> 3. L'obstacle est un polygone plein. Quels sont les réels admissibles pour cet obstacle ? On pourra commencer par étudier des polygones particuliers.
>
> 4. Soit $A_{\mathcal{O}}$ l'ensemble des réels admissibles pour un obstacle $\mathcal{O}$. Quels sont les ensembles qui peuvent s'écrire $A_{\mathcal{O}}$ pour un certain obstacle $\mathcal{O}$ ?
>
> 5. À présent, la Gorgone doit se déplacer d'une distance exactement $d_0$ et Persée doit se déplacer d'une distance exactement 1 à chaque étape, c'est-à-dire que pour tout $i$, $G_i G_{i+1} = d_0$ et $P_i P_{i+1} = 1$. Reprendre les questions précédentes dans ce cadre.
>
> À présent, la Gorgone se déplace en permanence à vitesse au plus $v_0$ en regardant en direction de Persée, et Persée se déplace en permanence à vitesse au plus 1 pour l'éviter. Pour $v \in \mathbb{R}_+^*$, une trajectoire à vitesse au plus $v$ est une application $T$ de $\mathbb{R}_+$ dans le plan telle que :
>
> - pour $t \in \mathbb{R}_+$, $T(t)$ n'est pas dans l'obstacle ;
> - pour tous $t_1, t_2 \in \mathbb{R}_+$, la distance entre $T(t_1)$ et $T(t_2)$ est d'au plus $v \times |t_1 - t_2|$.
>
> Une stratégie pour Persée est une application $\mathcal{S}$ qui à une trajectoire $T_G$ à vitesse au plus $v_0$ associe une trajectoire $\mathcal{S}(T_G) = T_P$ à vitesse au plus 1, de sorte que pour tout $t \in \mathbb{R}_+$, la valeur $\mathcal{S}(T_G)(t) = T_P(t)$ ne dépende que des valeurs de la fonction $T_G$ entre le temps 0 et le temps $t$ (Persée ne peut pas prédire là où sera la Gorgone dans le futur). En particulier le point de départ de Persée $\mathcal{S}(T_G)(0) = T_P(0)$ ne peut dépendre que du point de départ de la Gorgone $T_G(0)$ (Persée choisit son point de départ en fonction de celui de la Gorgone).
>
> Une stratégie $\mathcal{S}$ est gagnante pour Persée si pour toute trajectoire $T_G$ à vitesse au plus $v_0$, à tout instant $t \geqslant 0$, la Gorgone ne voit pas Persée, ie. le segment entre $T_G(t)$ et $T_P(t) = \mathcal{S}(T_G)(t)$ intersecte l'obstacle.
>
> Un réel $v$ est dit admissible pour un obstacle $\mathcal{O}$ s'il existe une stratégie gagnante pour Persée si $v_0 = v$.
>
> 6. Reprendre les questions précédentes avec ces nouvelles règles.
>
> 7. Proposer et étudier d'autres directions de recherche.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_logica|Logica]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<div class="qlang-split" data-lang="it"></div>

*Perseo e la Gorgone: inseguimento a passi in cui ciascuno si sposta al più di d_0 e la Gorgone pietrifica Perseo se il segmento tra loro evita l'ostacolo O; distanze ammissibili d per vari ostacoli (retta, punto, segmento, disco, poligono), caratterizzazione degli insiemi ammissibili e varianti a velocità continua.*
> Perseo e il Gorgone (Persée et la Gorgone).
> 
> Persée si avventura nella caverna del Gorgon, e cerca di sfuggire al suo fatale sguardo petrificante.
> 
> La caverna del Gorgon è una regione piana in cui Persée vuole mettere un ostacolo $\mathcal{O}$, che è un insieme di punti su cui Persée e il Gorgon non possono fermarsi, ma che sono in grado di saltare. Persée e il Gorgon sanno in ogni istante dove si trova l'altro, ma lo sguardo del Gorgon raggiunge Persée se il segmento tra i due non contiene alcun punto dell'ostacolo. In questo caso Persée è petrificata.
> 
> Lasciate che $d_0$ sia reale. Il Gorgone deve scegliere il suo punto di partenza fuori dall'ostacolo. Persée sceglie quindi il suo punto di partenza come funzione di quella del Gorgone. Poi il Gorgone inizia cercando di toccare Persée con uno sguardo. Se questo riesce, lo pietrifica. Altrimenti sceglie un punto che non sia nell'ostacolo e che sia a una distanza massima $d_0$ da quello in cui si trovava. Persée, che sa dove sta andando il Gorgon, sceglie un punto a distanza massima $d_0$ dal punto in cui si trovava, se vuole. Quando i due sono arrivati al loro nuovo punto, il Gorgon prova di nuovo a toccare Persée con uno sguardo, e così via. Il vero $d$ è detto di essere $admissible$ per Persée con $\mathcal{O}$ se, con questo ostacolo, Persée ha una strategia che gli consente di non essere mai petrificato, qualunque cosa faccia il Gorgone, quando $d_0 = d$.
> 
> La figura 9 illustra un esempio di inseguimento tra Persée e Gorgon, nel caso in cui l'ostacolo è un triangolo completo e $d_0 = 2$. I punti successivi in cui si trova la Persée sono i punti $P_0, P_1, P_2, P_3$ e i punti successivi in cui si trova il Gorgon sono i punti $G_0, G_1, G_2, G_3$. Dopo tre passi, lo sguardo del Gorgon tocca finalmente Persée: quest'ultima è petrificata.
> 
> 1. Quali sono le realtà ammissibili se l'ostacolo è una linea? Se è un punto? Se si tratta di un segmento di lunghezza $l$?
> 
> 2. L'ostacolo è un disco aperto di raggio $r > 0$. Quali sono le realtà ammissibili per questo ostacolo come funzione di $r$? Si può iniziare con il caso $r = 1$.
> 
> 3. L'ostacolo è un poligono completo. Quali sono le realtà ammissibili di questo ostacolo? Si può iniziare studiando particolari poligoni.
> 
> 4. Il valore $A_\mathcal{O}$ deve essere l'insieme di valori reali ammissibili per un ostacolo $\mathcal{O}$. Quali sono gli insiemi che possono essere scritti $A_\mathcal{O}$ per qualche ostacolo $\mathcal{O}$?
> 
> 5. Ora, il Gorgon deve spostare una distanza esattamente $d_0$ e Persée deve spostare una distanza esattamente 1 ad ogni passo, cioè per tutti $i$, $G_i G_{i+1} = d_0$ e $P_i P_{i+1} = 1$. Riprendi le domande precedenti in questo contesto.
> 
> Ora, il Gorgon si muove permanentemente a velocità massima $v_0$ in direzione di Persée, e Persée si muove permanentemente a velocità massima 1 per evitarla. Per $v \in \mathbb{R}_+^*$, un $trajectory$ a velocità massima $v$ è un'applicazione $T$ da $\mathbb{R}_+$ nel piano in modo tale che: - per $t \in \mathbb{R}_+$, $T(t)$ non sia nell'ostacolo; - per tutti $t_1, t_2 \in \mathbb{R}_+$, la distanza tra $T(t_1)$ e $T(t_2)$ è al massimo $v \times |t_1 - t_2|$.
> 
> Una $strategy$ per Persée è un'applicazione $\mathcal{S}$ che associa a una traiettoria $T_G$ a velocità massima $v_0$ una traiettoria $\mathcal{S}(T_G) = T_P$ a velocità massima 1 in modo tale che per tutte le $t \in \mathbb{R}_+$, il valore $\mathcal{S}(T_G)(t) = T_P(t)$ dipenda solo dai valori della funzione $T_G$ tra il tempo 0 e il tempo $t$ (Persée non può prevedere dove si trova il Gorgon in futuro). In particolare, il punto di partenza di Persée $\mathcal{S}(T_G)(0) = T_P(0)$ dipende solo dal punto di partenza del Gorgon $T_G(0)$ (Persée sceglie il suo punto di partenza come funzione di quello del Gorgon).
> 
> Una strategia $\mathcal{S}$ è $winning$ per Persée se per ogni traiettoria $T_G$ a velocità massima $v_0$, in ogni istante $t \ge 0$, il Gorgon non vede Persée: il segmento tra $T_G(t)$ e $T_P(t) = \mathcal{S}(T_G)(t)$ incrocia l'ostacolo.
> 
> Un vero $v$ è detto $admissible$ con un ostacolo $\mathcal{O}$ se esiste una strategia vincente per Persée quando $v_0 = v$.
> 
> 6. Riprendi le domande precedenti con queste nuove regole.
> 
> 7. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2022__Q08.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_estremalita|Principio di estremalita]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Perseus and the Gorgon: a step-by-step pursuit where each moves at most d_0 per step and the Gorgon petrifies Perseus if the segment between them avoids the obstacle O; determine admissible distances d for various obstacles (line, point, segment, disk, polygon), characterize possible admissible sets, and treat continuous-speed strategy variants.*

> Perseus and the Gorgon (Persée et la Gorgone).
> 
> Persée ventures into the cavern of the Gorgon, and seeks to escape from her fatal petrifying gaze.
> 
> The cavern of the Gorgon is a plane region where Persée wants to put an obstacle $\mathcal{O}$, which is a set of points on which Persée and the Gorgon cannot stop, but which they are capable of jumping over. Persée and the Gorgon know at each instant where the other is situated, but the gaze of the Gorgon reaches Persée if the segment between the two does not contain any point of the obstacle. In that case Persée is petrified.
> 
> Let $d_0$ be a real. The Gorgon must initially choose her starting point outside the obstacle. Persée then chooses his starting point as a function of that of the Gorgon. Then the Gorgon begins by trying to touch Persée with a gaze. If this succeeds she petrifies him. Otherwise she chooses a point that is not in the obstacle and that is at distance at most $d_0$ from the one where she was. Persée, who knows where the Gorgon is going, chooses a point at distance at most $d_0$ from the point where he was, if he wants. When the two have arrived at their new point, the Gorgon tries again to touch Persée with a gaze, and so on. The real $d$ is said to be $admissible$ for Persée with $\mathcal{O}$ if, with this obstacle, Persée has a strategy that allows him never to be petrified, whatever the Gorgon does, when $d_0 = d$.
> 
> Figure 9 illustrates an example of a pursuit between Persée and the Gorgon, in the case where the obstacle is a full triangle and $d_0 = 2$. The successive points where Persée is situated are the points $P_0, P_1, P_2, P_3$, and the successive points where the Gorgon is situated are the points $G_0, G_1, G_2, G_3$. After 3 steps, the gaze of the Gorgon finally touches Persée: this last one is petrified.
> 
> 1. What are the admissible reals if the obstacle is a line? If it is a point? If it is a segment of length $l$?
> 
> 2. The obstacle is an open disk of radius $r > 0$. What are the admissible reals for this obstacle as a function of $r$? One may begin with the case $r = 1$.
> 
> 3. The obstacle is a full polygon. What are the admissible reals for this obstacle? One may begin by studying particular polygons.
> 
> 4. Let $A_\mathcal{O}$ be the set of admissible reals for an obstacle $\mathcal{O}$. What are the sets that can be written $A_\mathcal{O}$ for some obstacle $\mathcal{O}$?
> 
> 5. Now, the Gorgon must move a distance exactly $d_0$ and Persée must move a distance exactly 1 at each step, that is to say that for all $i$, $G_i G_{i+1} = d_0$ and $P_i P_{i+1} = 1$. Redo the preceding questions in this setting.
> 
> Now, the Gorgon moves permanently at speed at most $v_0$ looking in the direction of Persée, and Persée moves permanently at speed at most 1 to avoid her. For $v \in \mathbb{R}_+^*$, a $trajectory$ at speed at most $v$ is an application $T$ from $\mathbb{R}_+$ into the plane such that:
>   - for $t \in \mathbb{R}_+$, $T(t)$ is not in the obstacle;
>   - for all $t_1, t_2 \in \mathbb{R}_+$, the distance between $T(t_1)$ and $T(t_2)$ is at most $v \times |t_1 - t_2|$.
> 
> A $strategy$ for Persée is an application $\mathcal{S}$ which to a trajectory $T_G$ at speed at most $v_0$ associates a trajectory $\mathcal{S}(T_G) = T_P$ at speed at most 1 such that for all $t \in \mathbb{R}_+$, the value $\mathcal{S}(T_G)(t) = T_P(t)$ depends only on the values of the function $T_G$ between time 0 and time $t$ (Persée cannot predict where the Gorgon will be in the future). In particular the starting point of Persée $\mathcal{S}(T_G)(0) = T_P(0)$ depends only on the starting point of the Gorgon $T_G(0)$ (Persée chooses his starting point as a function of that of the Gorgon).
> 
> A strategy $\mathcal{S}$ is $winning$ for Persée if for every trajectory $T_G$ at speed at most $v_0$, at every instant $t \ge 0$, the Gorgon does not see Persée: the segment between $T_G(t)$ and $T_P(t) = \mathcal{S}(T_G)(t)$ intersects the obstacle.
> 
> A real $v$ is said to be $admissible$ with an obstacle $\mathcal{O}$ if there exists a winning strategy for Persée when $v_0 = v$.
> 
> 6. Redo the preceding questions with these new rules.
> 
> 7. Propose and study other directions of research.

![[src_tfjm_2022__Q08.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_logica|Logica]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Geometria|Geometry]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)
