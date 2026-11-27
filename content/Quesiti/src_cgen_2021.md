---
title: Concours Général des Lycées 2021 — Matematica
tipo: gara
competition: Concours Général des Lycées 2021 — Matematica
family: concours_generale
year: '2021'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2021"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_algebra,topic_combinatoria,topic_disuguaglianze,method_estremalita,method_casework,method_disuguaglianze,skill_manipolazione_algebrica,skill_casework_accurato,skill_stima,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Petits poids: for a finite sequence of n reals one defines its weight as the largest of the absolute partial-sum-type values |x_1|,|x_1+x_2|,...,|x_1+...+x_n|; Isabelle minimizes the weight over all orderings (value I), Clara uses a greedy algorithm (value C); compare I and C.*

> Probleme 1: "Petits poids" (Small weights). For every integer $n$ greater than or equal to $2$, and every finite sequence of $n$ reals $(x_1,x_2,\ldots,x_n)$, one calls weight of the sequence the largest of the values $|x_1|,|x_1+x_2|,\ldots,|x_1+x_2+\cdots+x_n|$.
> For example, for $n=4$ and $(x_1,x_2,x_3,x_4)=(4,4,0,-9)$, the weight of the sequence is equal to $8$, because $|x_1|=4$, $|x_1+x_2|=8$, $|x_1+x_2+x_3|=8$ and $|x_1+x_2+x_3+x_4|=1$.
> For $(x_1,x_2,x_3,x_4)=(-9,4,0,4)$, the weight is equal to $9$, because $|x_1|=9$, $|x_1+x_2|=5$, $|x_1+x_2+x_3|=5$ and $|x_1+x_2+x_3+x_4|=1$.
> One notes that the two finite sequences above are formed of the same numbers in a different order and that they have different weights.
> 
> 1. Determine the weights of the following finite sequences:
>    a. $(3,5,-6,-8,2)$ (and so $n=5$).
>    b. $(1,2,3,\ldots,2014,2015,-2015,-2014,\ldots,-2,-1)$ (and so $n=4030$).
>    c. In each of the two preceding examples, reorder the terms so as to obtain a smaller weight.
> 
> One gives to Isabelle and Clara the same finite sequence of $n$ reals $(x_1,x_2,\ldots,x_n)$.
> Isabelle wishes to reorder these $n$ reals so as to obtain a finite sequence of minimal weight. To do this, she considers all the possible orderings of these $n$ reals, determines for each one the weight of the corresponding sequence, and chooses an order for which the weight is minimal. One notes $I$ this minimal weight.
> For her part, Clara, more hurried than Isabelle, adopts the following algorithm. She begins by choosing among the $n$ reals one number, noted $c_1$, so that the value of $|c_1|$ is the smallest possible. She then chooses the number $c_2$ among the $n-1$ reals that remain, so that the value of $|c_1+c_2|$ is the smallest possible. More generally, after having chosen the numbers $c_1,\ldots,c_i$ among the $n$ reals given at the start, she chooses $c_{i+1}$ among the $n-i$ remaining ones so that the value of $|c_1+\cdots+c_i+c_{i+1}|$ is the smallest possible. She finally obtains a finite sequence $(c_1,\ldots,c_n)$ of $n$ reals. One notes $C$ its weight.
> 
> 2. Determine $I$ and $C$ in the two following cases.
>    a. $n=3$ and $x_1=1$, $x_2=2$, $x_3=-4$.
>    b. $n=4$ and $x_1=1$, $x_2=-1$, $x_3=2$, $x_4=-2$.
> 
> 3. If $n=2$, show that $I=C$.
> 
> 4. If $n=3$, show that $C\le\frac{3}{2}I$.
> 
> 5. Let $n$ be an integer greater than or equal to $4$ and let $(x_1,x_2,\ldots,x_n)$ be the finite sequence given to Isabelle and Clara. One sets:
> $$M=\max(|x_1|,|x_2|,\ldots,|x_n|)\qquad S=|x_1+x_2+\cdots+x_n|\qquad N=\max(M,S)$$
> In other words, $M$ is the largest of the numbers $|x_1|,|x_2|,\ldots,|x_n|$. Likewise, $N$ is the largest of the numbers $M$ and $S$.
>    a. Show that $S\le I$.
>    b. Show that $M\le2I$.
>    c. Show that $C\le N$.
>    d. Deduce that $C\le2I$.
>    e. Determine $n$ reals $x_1,x_2,\ldots,x_n$ such that $C=2I$.

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]], [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]], [[skill_stima|Stima]], [[skill_astrazione|Astrazione]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1mpuoT_Bn4czxgorxXLmkmdqsNnb4j2Av/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>

*Pesi di Petits: a una successione finita di n reali si associa il peso dato dal massimo dei valori assoluti delle somme parziali; studio di tale peso e di successioni di peso minimo.*
> Problemi 1: "Peteits weights" (piccoli pesi). Per ogni numero intero $n$ maggiore o uguale a $2$ e per ogni sequenza finita di $n$ reale $(x_1,x_2,\ldots,x_n)$, si chiama peso della sequenza il più grande dei valori $|x_1|,|x_1+x_2|,\ldots,|x_1+x_2+\cdots+x_n|$. Per esempio, per $n=4$ e $(x_1,x_2,x_3,x_4)=(4,4,0,-9)$, il peso della sequenza è uguale a $8$, perché $|x_1|=4$, $|x_1+x_2|=8$, $|x_1+x_2+x_3|=8$ e $|x_1+x_2+x_3+x_4|=1$. Per $(x_1,x_2,x_3,x_4)=(-9,4,0,4)$, il peso è uguale a $9$, perché $|x_1|=9$, $|x_1+x_2|=5$, $|x_1+x_2+x_3|=5$ e $|x_1+x_2+x_3+x_4|=1$. Si nota che le due sequenze finite di cui sopra sono formate dai medesimi numeri in un ordine diverso e che hanno pesi diversi.
> 
> 1. Determinare i pesi delle seguenti sequenze finite: a. $(3,5,-6,-8,2)$ (e quindi $n=5$). b. $(1,2,3,\ldots,2014,2015,-2015,-2014,\ldots,-2,-1)$ (e quindi $n=4030$). c. In ciascuno dei due esempi precedenti, riordinare i termini in modo da ottenere un peso minore.
> 
> Uno dà a Isabelle e Clara la stessa sequenza finita di $n$ reali $(x_1,x_2,\ldots,x_n)$. Isabelle desidera riordinare questi reali $n$ in modo da ottenere una sequenza finita di peso minimo. Per fare ciò, considera tutti gli ordini possibili di questi reali $n$, determina per ciascuno il peso della sequenza corrispondente e sceglie un ordine per il quale il peso è minimo. Si nota $I$ questo peso minimo. Per sua parte, Clara, più affrettata di Isabelle, adotta l'algoritmo seguente. Inizia scegliendo tra i reali $n$ un numero, nota $c_1$, in modo che il valore di $|c_1|$ sia il più piccolo possibile. Sceglie quindi il numero $c_2$ tra i reali $n-1$ rimasti, in modo che il valore di $|c_1+c_2|$ sia il più piccolo possibile. Più in generale, dopo aver scelto i numeri $c_1,\ldots,c_i$ tra i reali $n$ indicati all'inizio, sceglie $c_{i+1}$ tra i rimanenti $n-i$ in modo che il valore di $|c_1+\cdots+c_i+c_{i+1}|$ sia il più piccolo possibile. Finalmente ottiene una sequenza finita $(c_1,\ldots,c_n)$ di $n$ reali. Uno nota $C$ il suo peso.
> 
> 2. Determinare $I$ e $C$ nei due casi seguenti. a. $n=3$ e $x_1=1$, $x_2=2$, $x_3=-4$. b. $n=4$ e $x_1=1$, $x_2=-1$, $x_3=2$, $x_4=-2$.
> 
> 3. Se $n=2$, indicare che $I=C$.
> 
> 4. Se $n=3$, indicare che $C\le\frac{3}{2}I$.
> 
> 5. Che $n$ sia un numero intero maggiore o uguale a $4$ e che $(x_1,x_2,\ldots,x_n)$ sia la sequenza finita data a Isabelle e Clara. Un insieme: $$M=\max(|x_1|,|x_2|,\ldots,|x_n|)\qquad S=|x_1+x_2+\cdots+x_n|\qquad N=\max(M,S)$$ In altre parole, $M$ è il più grande dei numeri $|x_1|,|x_2|,\ldots,|x_n|$. Allo stesso modo, $N$ è il più grande dei numeri $M$ e $S$. a. Mostra che $S\le I$. b. Mostra che $M\le2I$. c. Mostra che $C\le N$. d. Riduzione di $C\le2I$. e. Determinare i valori $n$ $x_1,x_2,\ldots,x_n$ tali da $C=2I$.

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_estremalita|Principio di estremalita]], [[method_casework|Analisi per casi]], [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]], [[skill_stima|Stima e approssimazione]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_solida,topic_geometria_analitica,method_coordinate,method_simmetria,method_casework,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Tetrahedra: properties of a tetrahedron ABCD; existence of the centroid G and of the circumscribed sphere; concurrency of altitudes (in O, in G, necessarily) and characterisation of regular tetrahedra; a criterion for concurrency of altitudes via dot products of unit direction vectors.*

> Probleme 2: "Tetraedres" (Tetrahedra). One calls tetrahedron the data, in space, of four non-coplanar points $A$, $B$, $C$, $D$. The edges of the tetrahedron are the segments $[AB]$, $[AC]$, $[AD]$, $[BC]$, $[BD]$, $[CD]$. In questions 3 to 3., $ABCD$ designates a tetrahedron.
> 
> 1.a. Show that there exists a unique point $G$ such that $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}+\overrightarrow{GD}=\vec{0}$.
>    b. One calls median issued from $A$ the line joining $A$ to the centroid of the triangle $BCD$, and one defines analogously the three other medians, issued from $B$, $C$ and $D$. Show that the medians are concurrent at the point $G$.
> 
> 2. Show that there exists a unique sphere passing through $A$, $B$, $C$, $D$. One calls it the sphere circumscribed to the tetrahedron $ABCD$ and one notes $O$ its center.
> 
> 3. One calls altitude issued from $A$ the line passing through $A$ orthogonal to the plane $BCD$. One defines analogously the three other altitudes, issued from $B$, $C$ and $D$. One says that a tetrahedron of space is regular if all its edges are of the same length.
>    a. Is it true that the altitudes are concurrent at $O$ if and only if the tetrahedron is regular?
>    b. Are the altitudes necessarily concurrent?
>    c. Is it true that the altitudes are concurrent at $G$ if and only if the tetrahedron is regular?
> 
> 4. In what follows, the dot product of two vectors $\vec{v}$ and $\vec{w}$ is noted $\vec{v}\cdot\vec{w}$.
>    Let $\Delta_1,\ldots,\Delta_4$ be four distinct non-coplanar lines concurrent at a point $H$. For $1\le i\le4$ one chooses a unit direction vector $\vec{u}_i$ of $\Delta_i$ and, for $1\le i,j\le4$, one notes $c_{ij}=\vec{u}_i\cdot\vec{u}_j$.
>    a. One supposes that there exists a tetrahedron $A_1A_2A_3A_4$ whose altitudes are concurrent at $H$ and such that $A_j\in\Delta_j$ for all $j\in\{1,2,3,4\}$. Show that $c_{12}c_{34}=c_{13}c_{24}=c_{14}c_{23}$.
>    b. Conversely, if $c_{12}c_{34}=c_{13}c_{24}=c_{14}c_{23}\ne0$, show that there exists a tetrahedron $A_1A_2A_3A_4$ whose altitudes are concurrent at $H$ and such that $A_j\in\Delta_j$ for all $j\in\{1,2,3,4\}$.

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1mpuoT_Bn4czxgorxXLmkmdqsNnb4j2Av/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>

*Proprietà di un tetraedro ABCD: esistenza del baricentro G e della sfera circoscritta; concorrenza delle altezze e caratterizzazione dei tetraedri ortocentrici.*
> Problemi 2: "Tetraedres" (Tetraedra). Si chiama tetraedro i dati, nello spazio, di quattro punti non coplanari $A$, $B$, $C$, $D$. I bordi del tetraedro sono i segmenti $[AB]$, $[AC]$, $[AD]$, $[BC]$, $[BD]$, $[CD]$. Nella domanda da 3 a 3, $ABCD$ indica un tetraedro.
> 
> 1.a. Indicare che esiste un punto unico $G$ tale che $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}+\overrightarrow{GD}=\vec{0}$. b. Uno definisce la media emessa da $A$ la linea che unisce $A$ al centroide del triangolo $BCD$, e uno definisce in modo analogo le altre tre media emesse da $B$, $C$ e $D$. Indicare che i mediani sono simultanei al punto $G$.
> 
> 2. Mostrare che esiste una sfera unica che attraversa $A$, $B$, $C$, $D$. Uno lo chiama la sfera circoscritta al tetraedro $ABCD$ e uno nota $O$ il suo centro.
> 
> 3. Un'altitudine viene chiamata da $A$ la linea che passa attraverso $A$ ortogonale al piano $BCD$. Si definiscono in modo analogo le altre tre altitudini, emesse da $B$, $C$ e $D$. Si dice che un tetraedro di spazio sia regolare se tutti i suoi bordi sono della stessa lunghezza. a. È vero che le altitudini sono simultanee a $O$ se e solo se il tetraedro è regolare? b. Le altitudini sono necessariamente contemporanee? c. È vero che le altitudini sono simultanee a $G$ se e solo se il tetraedro è regolare?
> 
> 4. In quanto segue, il prodotto del punto di due vettori $\vec{v}$ e $\vec{w}$ è indicato $\vec{v}\cdot\vec{w}$. Le linee $\Delta_1,\ldots,\Delta_4$ devono essere quattro linee non coplanarie distinte, che sono simultanee in un punto $H$. Per $1\le i\le4$ si sceglie un vettore di direzione unitaria $\vec{u}_i$ di $\Delta_i$ e, per $1\le i,j\le4$, una nota $c_{ij}=\vec{u}_i\cdot\vec{u}_j$. a. Si suppone che esista un tetraedro $A_1A_2A_3A_4$ le cui altitudini sono simultanee a $H$ e tale che $A_j\in\Delta_j$ per tutti $j\in\{1,2,3,4\}$. Mostrare che $c_{12}c_{34}=c_{13}c_{24}=c_{14}c_{23}$. b. Al contrario, se $c_{12}c_{34}=c_{13}c_{24}=c_{14}c_{23}\ne0$, dimostrare che esiste un tetraedro $A_1A_2A_3A_4$ le cui altitudini sono simultanee a $H$ e tale che $A_j\in\Delta_j$ per tutti $j\in\{1,2,3,4\}$.

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_simmetria|Sfruttamento della simmetria]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Geometria]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_probabilita,topic_combinatoria,method_casework,method_ricorsione,method_induzione,method_conteggio,method_simmetria,skill_modellizzazione,skill_casework_accurato,skill_conteggio_sistematico,skill_stima,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="fr"></div>


*Probability problem on the number D_n of balls eliminated/remaining: study the probabilities p_j that ball number j is eliminated in the first selection, the largest probability M_n, the most probable result via property P_n (P(D_n=n)=M_n), and a chain of inequalities P(D_n=k)<=P(D_n=k+1) for k<=n-2. ONLY questions 8-17 are visible in the images (the statement/setup and questions 1-7 are not shown).*

> Problème 2 : La loi du milieu
>
> Soit $n$ un entier naturel non nul. Dans un sac, on place $2n+1$ boules indiscernables au toucher et numérotées $0,1,2,\ldots,2n$. On vide alors progressivement le sac jusqu’à n’y laisser qu’une seule boule, selon le protocole suivant :
>
> - on tire trois boules simultanément ;
> - si les trois boules tirées ont pour numéros $a$, $b$ et $c$, avec $a<b<c$, on élimine les boules de numéros $a$ et $c$ et on replace dans le sac la boule de numéro $b$ ;
> - on recommence les opérations précédentes.
>
> Au bout de $n$ tirages, il ne reste plus qu’une seule boule, et on note $D_n$ son numéro. Pour tout entier $k$, on note $\mathbb{P}[D_n=k]$ la probabilité que la dernière boule restant dans le sac soit celle de numéro $k$.
>
> 2.1 Étude des petits cas
>
> 1. Déterminer la loi de la variable aléatoire $D_1$.
>
> 2. Déterminer la loi de la variable aléatoire $D_2$.
>
> 2.2 Valeurs extrêmes et symétrie
>
> 3. Déterminer la probabilité $\mathbb{P}[D_n=0]$.
>
> 4. Déterminer la probabilité $\mathbb{P}[D_n=1]$ en fonction de $n$.
>
> 5. Soit $i$ un entier tel que $0\leqslant i\leqslant 2n$. Pourquoi a-t-on $\mathbb{P}[D_n=i]=\mathbb{P}[D_n=2n-i]$ ?
>
> 6. Calculer l’espérance de la variable aléatoire $D_n$ en fonction de $n$.
>
> 2.3 Comportement limite
>
> Dans cette partie, on souhaite étudier la loi de $D_n$ lorsque $n$ tend vers $+\infty$. Afin de faciliter cette étude, on démontre tout d’abord un résultat préliminaire.
>
> 7. On considère la suite $(u_n)_{n\geqslant 0}$ définie par $u_0=1$ et par
> $$u_n=\frac{1\times 3\times 5\times\cdots\times(2n-1)}{2\times 4\times 6\times\cdots\times 2n}$$
> pour tout $n\geqslant 1$. Démontrer que $u_n\leqslant\dfrac{1}{\sqrt{3n+1}}$ pour tout $n\geqslant 0$.
>
> Il est maintenant temps d’étudier la loi de $D_n$ elle-même.
>
> 8. Déterminer, pour tout entier $j$ tel que $0\leqslant j\leqslant 2n$, la probabilité $p_j$ que la boule de numéro $j$ soit éliminée lors de la première sélection.
>
> 9. Démontrer que, si $n\geqslant 3$, alors $p_j\geqslant\dfrac{1}{2n}$ pour tout entier $j$ tel que $0\leqslant j\leqslant 2n$.
>
> 10. On note $M_n$ la plus grande des probabilités $\mathbb{P}[D_n=j]$ lorsque $0\leqslant j\leqslant 2n$. Démontrer que $M_n$ tend vers $0$ lorsque $n$ tend vers $+\infty$.
>
> 2.4 Résultat le plus probable
>
> On rappelle que, pour deux événements $A$ et $B$, on note $A\setminus B$ l’événement selon lequel $A$ est réalisé, mais pas $B$. En outre, si $\mathbb{P}[B]\neq 0$, on note $\mathbb{P}_B[A]$ la probabilité conditionnelle de $A$ sachant $B$.
>
> On souhaite ici démontrer, pour tout entier $n\geqslant 1$, que $\mathbb{P}[D_n=n]=M_n$. Dans ce but, on va démontrer la propriété $\mathscr{P}_n$ suivante :
>
> Pour tout entier $k$ tel que $0\leqslant k\leqslant n-1$, on a $\mathbb{P}[D_n=k]\leqslant\mathbb{P}[D_n=k+1]$.
>
> 11. Démontrer que, si $\mathscr{P}_n$ est vraie, alors $\mathbb{P}[D_n=n]=M_n$.
>
> 12. Démontrer $\mathscr{P}_1$.
>
> On suppose maintenant que l’on dispose d’un entier $n\geqslant 2$ tel que $\mathscr{P}_{n-1}$ est vraie et d’un entier $k$ tel que $0\leqslant k\leqslant n-1$.
>
> 13. Pour tout entier $\ell$ compris entre $0$ et $2n$, distinct de $k$ et de $k+1$, on note $X_\ell$ l’événement selon lequel les trois boules de numéros $k$, $k+1$ et $\ell$ sont choisies dès la première sélection.
>
>     a. Pourquoi, si $\ell>k+1$, a-t-on $\mathbb{P}_{X_\ell}[D_n=k]=0$ et $\mathbb{P}_{X_\ell}[D_n=k+1]=\mathbb{P}[D_{n-1}=k]$ ?
>
>     b. Donner des résultats analogues sur $\mathbb{P}_{X_\ell}[D_n=k]$ et $\mathbb{P}_{X_\ell}[D_n=k+1]$ lorsque $\ell<k$.
>
>     c. On note maintenant $X$ l’événement selon lequel les deux boules de numéros $k$ et $k+1$ sont choisies dès la première sélection. Démontrer que $\mathbb{P}_X[D_n=k]\leqslant\mathbb{P}_X[D_n=k+1]$.
>
> 14. Soit $Y$ l’événement selon lequel l’une des boules de numéros $k$ et $k+1$ est éliminée lors de la première sélection.
>
>     a. Démontrer que $\mathbb{P}_{Y\setminus X}[D_n=k]=\mathbb{P}_{Y\setminus X}[D_n=k+1]$.
>
>     b. En déduire que $\mathbb{P}_Y[D_n=k]\leqslant\mathbb{P}_Y[D_n=k+1]$.
>
> 15. Soient $a$, $b$ et $c$ les numéros des trois boules choisies lors de la première sélection, avec $a<b<c$.
>
>     a. Soit $G$ l’événement selon lequel $c<k$. Démontrer que $\mathbb{P}_G[D_n=k]\leqslant\mathbb{P}_G[D_n=k+1]$.
>
>     b. Soit $H$ l’événement selon lequel $a<k$ et $k+1<c$. Démontrer que $\mathbb{P}_H[D_n=k]\leqslant\mathbb{P}_H[D_n=k+1]$.
>
>     c. Soit $I$ l’événement selon lequel $k+1<a$. Démontrer que, si $k\leqslant n-2$, alors $\mathbb{P}_I[D_n=k]\leqslant\mathbb{P}_I[D_n=k+1]$.
>
> 16. Démontrer que, si $k\leqslant n-2$, alors $\mathbb{P}[D_n=k]\leqslant\mathbb{P}[D_n=k+1]$.
>
> 17. Démontrer $\mathscr{P}_n$.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]], [[method_conteggio|Conteggio]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1mpuoT_Bn4czxgorxXLmkmdqsNnb4j2Av/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>

*Problema di probabilità sul numero D_n di palline eliminate o rimaste: probabilità p_j che la pallina j sia eliminata alla prima estrazione e probabilità massime o minime collegate.*
> Problemi (probabilità; titolo non visibile, riguarda una quantità $D_n$ di palle di conteggio; solo le domande 8 in poi sono visibili nelle immagini fornite). Ora è il momento di studiare la legge del $D_n$ stesso.
> 
> 8. Determinare, per ogni numero intero $j$ tale che $0\le j\le2n$, la probabilità $p_j$ che la palla di numero $j$ venga eliminata durante la prima selezione.
> 
> 9. Indicare che, se $n\ge3$, allora $p_j\ge\frac{1}{2n}$ per ogni intero $j$ tale che $0\le j\le2n$.
> 
> 10. Una nota $M_n$ la più grande delle probabilità $\mathbb{P}[D_n=j]$ quando $0\le j\le2n$. Mostra che $M_n$ tende a $0$ quando $n$ tende a $+\infty$.
> 
> 2.4 Risultato più probabile. Si ricorda che, per due eventi $A$ e $B$, si nota $A\setminus B$ l'evento secondo il quale $A$ è realizzato ma non $B$. Inoltre, se $\mathbb{P}[B]\ne0$, si nota $\mathbb{P}_B[A]$ la probabilità condizionata di $A$ conoscere $B$. Qui si desidera mostrare, per ogni numero intero $n\ge1$, che $\mathbb{P}[D_n=n]=M_n$. A tal fine, si mostrerà la seguente proprietà $\mathscr{P}_n$: Per ogni numero intero $k$ tale che $0\le k\le n-1$, si ha $\mathbb{P}[D_n=k]\le\mathbb{P}[D_n=k+1]$.
> 
> 11. Mostra che, se $\mathscr{P}_n$ è vero, allora $\mathbb{P}[D_n=n]=M_n$. Indicare $\mathscr{P}_1$.
> 
> 12. Indicare $\mathscr{P}_1$.
> 
> Si suppone ora che si abbia un intero $n\ge2$ tale che $\mathscr{P}_{n-1}$ sia vero e un intero $k$ tale che $0\le k\le n-1$.
> 
> 13. Per ogni numero intero $\ell$ tra $0$ e $2n$, distinto da $k$ e $k+1$, si nota $X_\ell$ l'evento secondo il quale le tre sfere di numeri $k$, $k+1$ e $\ell$ sono scelte nella prima selezione. a. Perché, se $\ell>k+1$, ci sono $\mathbb{P}_{X_\ell}[D_n=k]=0$ e $\mathbb{P}_{X_\ell}[D_n=k+1]=\mathbb{P}[D_{n-1}=k]$? b. Risultati analoghi per $\mathbb{P}_{X_\ell}[D_n=k]$ e $\mathbb{P}_{X_\ell}[D_n=k+1]$ quando $\ell<k$. c. Si nota ora $X$ l'evento in base al quale le due palle di numeri $k$ e $k+1$ vengono scelte alla prima selezione. Mostra che $\mathbb{P}_X[D_n=k]\le\mathbb{P}_X[D_n=k+1]$.
> 
> 14. $Y$ sia l'evento in base al quale una delle sfere di numeri $k$ e $k+1$ viene eliminata alla prima selezione. a. Mostra che $\mathbb{P}_{Y\setminus X}[D_n=k]=\mathbb{P}_{Y\setminus X}[D_n=k+1]$. b. Riduzione di $\mathbb{P}_Y[D_n=k]\le\mathbb{P}_Y[D_n=k+1]$.
> 
> 15. $a,b$ e $c$ siano i numeri delle tre palle scelte nella prima selezione, con $a<b<c$. a. $G$ sia l'evento secondo il quale $c<k$. Mostra che $\mathbb{P}_G[D_n=k]\le\mathbb{P}_G[D_n=k+1]$. b. L'evento $H$ deve essere quello secondo cui $a<k$ e $k+1<c$. Mostra che $\mathbb{P}_H[D_n=k]\le\mathbb{P}_H[D_n=k+1]$. c. Il $I$ deve essere l'evento secondo il quale $k+1<a$. Indicare che, se $k\le n-2$, allora: $\mathbb{P}_I[D_n=k]\le\mathbb{P}_I[D_n=k+1]$.
> 
> 16. Indicare che, se $k\le n-2$, allora $\mathbb{P}[D_n=k]\le\mathbb{P}[D_n=k+1]$.
> 
> 17. Indicare $\mathscr{P}_n$.

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]], [[method_conteggio|Conteggio combinatorio]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima e approssimazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Probability problem on the number D_n of balls eliminated/remaining: study the probabilities p_j that ball number j is eliminated in the first selection, the largest probability M_n, the most probable result via property P_n (P(D_n=n)=M_n), and a chain of inequalities P(D_n=k)<=P(D_n=k+1) for k<=n-2. ONLY questions 8-17 are visible in the images (the statement/setup and questions 1-7 are not shown).*

> Probleme (probability; title not visible, concerns a quantity $D_n$ counting balls; ONLY questions 8 onward are visible in the supplied images). It is now time to study the law of $D_n$ itself.
> 
> 8. Determine, for every integer $j$ such that $0\le j\le2n$, the probability $p_j$ that the ball of number $j$ is eliminated during the first selection.
> 
> 9. Show that, if $n\ge3$, then $p_j\ge\frac{1}{2n}$ for every integer $j$ such that $0\le j\le2n$.
> 
> 10. One notes $M_n$ the largest of the probabilities $\mathbb{P}[D_n=j]$ when $0\le j\le2n$. Show that $M_n$ tends to $0$ when $n$ tends to $+\infty$.
> 
> 2.4 Most probable result.
> One recalls that, for two events $A$ and $B$, one notes $A\setminus B$ the event according to which $A$ is realized but not $B$. Moreover, if $\mathbb{P}[B]\ne0$, one notes $\mathbb{P}_B[A]$ the conditional probability of $A$ knowing $B$.
> One wishes here to show, for every integer $n\ge1$, that $\mathbb{P}[D_n=n]=M_n$. To this end, one will show the following property $\mathscr{P}_n$:
>    For every integer $k$ such that $0\le k\le n-1$, one has $\mathbb{P}[D_n=k]\le\mathbb{P}[D_n=k+1]$.
> 
> 11. Show that, if $\mathscr{P}_n$ is true, then $\mathbb{P}[D_n=n]=M_n$. Show $\mathscr{P}_1$.
> 
> 12. Show $\mathscr{P}_1$.
> 
> One now supposes that one has an integer $n\ge2$ such that $\mathscr{P}_{n-1}$ is true and an integer $k$ such that $0\le k\le n-1$.
> 
> 13. For every integer $\ell$ between $0$ and $2n$, distinct from $k$ and $k+1$, one notes $X_\ell$ the event according to which the three balls of numbers $k$, $k+1$ and $\ell$ are chosen in the first selection.
>    a. Why, if $\ell>k+1$, does one have $\mathbb{P}_{X_\ell}[D_n=k]=0$ and $\mathbb{P}_{X_\ell}[D_n=k+1]=\mathbb{P}[D_{n-1}=k]$?
>    b. Give analogous results on $\mathbb{P}_{X_\ell}[D_n=k]$ and $\mathbb{P}_{X_\ell}[D_n=k+1]$ when $\ell<k$.
>    c. One notes now $X$ the event according to which the two balls of numbers $k$ and $k+1$ are chosen at the first selection. Show that $\mathbb{P}_X[D_n=k]\le\mathbb{P}_X[D_n=k+1]$.
> 
> 14. Let $Y$ be the event according to which one of the balls of numbers $k$ and $k+1$ is eliminated at the first selection.
>    a. Show that $\mathbb{P}_{Y\setminus X}[D_n=k]=\mathbb{P}_{Y\setminus X}[D_n=k+1]$.
>    b. Deduce that $\mathbb{P}_Y[D_n=k]\le\mathbb{P}_Y[D_n=k+1]$.
> 
> 15. Let $a,b$ and $c$ be the numbers of the three balls chosen at the first selection, with $a<b<c$.
>    a. Let $G$ be the event according to which $c<k$. Show that $\mathbb{P}_G[D_n=k]\le\mathbb{P}_G[D_n=k+1]$.
>    b. Let $H$ be the event according to which $a<k$ and $k+1<c$. Show that $\mathbb{P}_H[D_n=k]\le\mathbb{P}_H[D_n=k+1]$.
>    c. Let $I$ be the event according to which $k+1<a$. Show that, if $k\le n-2$, then: $\mathbb{P}_I[D_n=k]\le\mathbb{P}_I[D_n=k+1]$.
> 
> 16. Show that, if $k\le n-2$, then $\mathbb{P}[D_n=k]\le\mathbb{P}[D_n=k+1]$.
> 
> 17. Show $\mathscr{P}_n$.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]], [[method_conteggio|Conteggio]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1mpuoT_Bn4czxgorxXLmkmdqsNnb4j2Av/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_algebra,topic_disuguaglianze,topic_insiemi_funzioni,topic_trigonometria,method_disuguaglianze,method_casework,method_trigonometria,method_fattorizzazione,skill_manipolazione_algebrica,skill_astrazione,skill_riconoscimento_pattern,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="fr"></div>


*Que la force soit avec f!: a positive function f on an interval I subset of [0,+inf) is called k-strong or k-weak depending on the sign of (y^k f(y) - x^k f(x))(f(y)/y^k - f(x)/x^k); examples, equivalent criteria, monotonicity of g_k=x^k f and h_k=f/x^k, derivative criteria, products/compositions, and applications to inequalities (a,b,c power means and a sin/tan inequality).*

> Problème 3 : Que la force soit avec $f$ !
>
> Dans tout le problème, $k$ désigne un entier naturel non nul, $I$ un intervalle ouvert de $]0,+\infty[$, et $f$ une fonction définie sur $I$ et à valeurs strictement positives.
>
> On dit que la fonction $f$ est « $k$-forte » si, pour tous les réels $x$ et $y$ appartenant à $I$,
> $$\left(y^k f(y)-x^k f(x)\right)\left(\frac{f(y)}{y^k}-\frac{f(x)}{x^k}\right)\geqslant 0.$$
> On dit que $f$ est « $k$-faible » si, pour tous les réels $x$ et $y$ appartenant à $I$,
> $$\left(y^k f(y)-x^k f(x)\right)\left(\frac{f(y)}{y^k}-\frac{f(x)}{x^k}\right)\leqslant 0.$$
>
> 3.1 Quelques exemples et propriétés
>
> 1. Démontrer que la fonction $f_1$ définie sur l’intervalle $]0,+\infty[$ par $f_1(x)=x^2$ est $1$-forte et $3$-faible.
>
> 2. Démontrer que la fonction $f_2$ définie sur l’intervalle $]0,1[$ par $f_2(x)=\exp(x)$ est $1$-faible mais pas $1$-forte.
>
> 3. Démontrer que la fonction $f_3$ définie sur l’intervalle $]1,+\infty[$ par $f_3(x)=\exp(x)$ est $1$-forte mais pas $1$-faible.
>
> 4. Démontrer que la fonction $f_4$ définie sur l’intervalle $]0,+\infty[$ par $f_4(x)=\dfrac{1}{x}$ est $k$-faible pour tout entier $k\geqslant 1$.
>
> 5. Existe-t-il une fonction définie sur l’intervalle $]0,+\infty[$ qui soit $k$-forte pour tout entier $k\geqslant 1$ ?
>
> 3.2 Quelques critères de force et de faiblesse
>
> 6. Démontrer que $f$ est $k$-forte si et seulement si
> $$\frac{x^k}{y^k}+\frac{y^k}{x^k}\leqslant\frac{f(x)}{f(y)}+\frac{f(y)}{f(x)}$$
> pour tous les réels $x$ et $y$ appartenant à $I$, et que $f$ est $k$-faible si et seulement si
> $$\frac{x^k}{y^k}+\frac{y^k}{x^k}\geqslant\frac{f(x)}{f(y)}+\frac{f(y)}{f(x)}$$
> pour tous les réels $x$ et $y$ appartenant à $I$.
>
> 7. Démontrer que $f$ est $k$-forte si et seulement si
> $$\frac{\max\bigl(x^k,y^k\bigr)}{\min\bigl(x^k,y^k\bigr)}\leqslant\frac{\max\bigl(f(x),f(y)\bigr)}{\min\bigl(f(x),f(y)\bigr)}$$
> pour tous les réels $x$ et $y$ appartenant à $I$, et que $f$ est $k$-faible si et seulement si
> $$\frac{\max\bigl(x^k,y^k\bigr)}{\min\bigl(x^k,y^k\bigr)}\geqslant\frac{\max\bigl(f(x),f(y)\bigr)}{\min\bigl(f(x),f(y)\bigr)}$$
> pour tous les réels $x$ et $y$ appartenant à $I$.
>
> 8. On note $g_k$ et $h_k$ les fonctions définies sur $I$ par :
> $$g_k(x)=x^k f(x)\qquad\text{et}\qquad h_k(x)=\frac{f(x)}{x^k}.$$
>
>     a. Démontrer que, si $g_k$ et $h_k$ sont monotones, alors $f$ est $k$-forte ou $k$-faible.
>
>     b. Démontrer que, si $f$ est $k$-faible, alors $g_k$ et $h_k$ sont monotones.
>
>     c. Soit $f$ la fonction définie sur l’intervalle $I=]0,+\infty[$ par
> $$f(x)=\begin{cases} x & \text{si }0<x<1\\ 4 & \text{si }x=1\\ x & \text{si }1<x<2\\ 4x & \text{si }2\leqslant x.\end{cases}$$
> Démontrer que $f$ est $1$-forte mais que les fonctions $g_1$ et $h_1$ ne sont pas monotones.
>
> 9. On suppose dans cette question que $f$ est dérivable sur $I$ et que sa dérivée $f'$ est continue sur $I$.
>
>     a. Démontrer que, si $\bigl|f'(x)\bigr|\geqslant k\dfrac{f(x)}{x}$ pour tout réel $x\in I$, alors $f$ est $k$-forte.
>
>     b. Démontrer que, si $\bigl|f'(x)\bigr|\leqslant k\dfrac{f(x)}{x}$ pour tout réel $x\in I$, alors $f$ est $k$-faible.
>
>     c. Démontrer que les réciproques aux questions 9.a. et 9.b. sont vraies.
>
> 3.3 Une multitude de fonctions fortes et faibles
>
> On dit que la fonction $f$ est « forte » s’il existe un entier $k\geqslant 1$ pour lequel $f$ est $k$-forte, et que $f$ est « faible » s’il existe un entier $k\geqslant 1$ pour lequel $f$ est $k$-faible.
>
> 10. Démontrer que, si $f$ est faible, la fonction $F$ définie sur $I$ par $F(x)=\dfrac{1}{f(x)}$ est forte.
>
> 11. Démontrer que, si deux fonctions $f$ et $g$ définies sur $I$ sont faibles, les fonctions $f+g$, $f\times g$ et $\dfrac{f}{g}$ sont faibles.
>
> 12. Démontrer à l’aide de contre-exemples que, si deux fonctions $f$ et $g$ définies sur $I$ sont fortes, les fonctions $f+g$, $f\times g$ et $\dfrac{f}{g}$ ne sont pas nécessairement fortes.
>
> 13. Soit $f$ une fonction définie sur $I$ et à valeurs strictement positives, et $g$ une fonction définie sur $]0,+\infty[$.
>
>     a. Démontrer que, si $f$ et $g$ sont faibles, la fonction $g\circ f$ est faible.
>
>     b. Démontrer que, si $f$ et $g$ sont fortes, la fonction $g\circ f$ est forte.
>
> 3.4 Application à la démonstration d’inégalités
>
> 14. Soient $a$, $b$ et $c$ trois réels strictement positifs, et $n$ un entier naturel non nul. Démontrer que :
> $$\left(\frac{a+c}{b+c}\right)^n+\left(\frac{b+c}{a+c}\right)^n\leqslant\left(\frac{a}{b}\right)^n+\left(\frac{b}{a}\right)^n.$$
>
> 15. Dans cette question, on pourra utiliser le fait que les fonctions $\cos$ et $\sin$ sont dérivables sur $\bigl]0,\dfrac{\pi}{2}\bigr[$ de dérivées respectivement $\cos'=-\sin$ et $\sin'=\cos$. La fonction $\tan$ est définie sur $\bigl]0,\dfrac{\pi}{2}\bigr[$ par $\tan(x)=\dfrac{\sin(x)}{\cos(x)}$. Soient $a$ et $b$ deux nombres réels de l’intervalle $\bigl]0,\dfrac{\pi}{2}\bigr[$, démontrer que :
> $$\frac{\sin(a)}{\sin(b)}+\frac{\sin(b)}{\sin(a)}\leqslant\frac{a}{b}+\frac{b}{a}\leqslant\frac{\tan(a)}{\tan(b)}+\frac{\tan(b)}{\tan(a)}.$$

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_casework|Casework]], [[method_trigonometria|Trigonometria]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1mpuoT_Bn4czxgorxXLmkmdqsNnb4j2Av/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Que la force soit avec f!: una funzione positiva f su un sottoinsieme di intervalli I di [0,+inf) è chiamata k-forte o k-fragile a seconda del segno di (y^k f(y) - x^k f(x)) f(y)/y^k - f(x)/x^k); esempi, criteri equivalenti, monotonia di g_k=x^k f e h_k=f/x^k, criteri derivati, prodotti/composti e applicazioni alle disuguaglianze (a,b,c mezzi di potenza e una disuguaglianza sin/tanc).*

> Problemi 3: "Que la force soit avec $f$ !" (La forza sia con $f$!). In tutto questo problema, $k$ designa un intero naturale non zero, $I$ un intervallo incluso in $]0,+\infty[$, e $f$ una funzione definita su $I$ con valori strettamente positivi. Si dice che la funzione $f$ è "$k$-forte" se, per tutti i valori $x$ e $y$ appartenenti a $I$, $$\left(y^k f(y)-x^k f(x)\right)\left(\frac{f(y)}{y^k}-\frac{f(x)}{x^k}\right)\ge0$$ Si dice che $f$ è "$k$-debole" se, per tutti i valori $x$ e $y$ appartenenti a $I$, $$\left(y^k f(y)-x^k f(x)\right)\left(\frac{f(y)}{y^k}-\frac{f(x)}{x^k}\right)\le0$$
> 
> 3.1 Alcuni esempi e proprietà. 1. Indicare che la funzione $f_1$ definita nell'intervallo $]0,+\infty[$ da $f_1(x)=x^2$ è $1$-forte e $3$-debole. 2. Indicare che la funzione $f_2$ definita nell'intervallo $]0,1[$ da $f_2(x)=\exp(x)$ è $1$ debole ma non $1$ forte. 3. Indicare che la funzione $f_3$ definita nell'intervallo $]1,+\infty[$ da $f_3(x)=\exp(x)$ è $1$-forte ma non $1$-debole. 4. Indicare che la funzione $f_4$ definita nell'intervallo $]0,+\infty[$ da $f_4(x)=\frac{1}{x}$ è $k$ debole per ogni intero $k\ge1$. 5. Esiste una funzione definita nell'intervallo $]0,+\infty[$ che è $k$-forte per ogni numero intero $k\ge1$?
> 
> 3.2 Alcuni criteri di forza e debolezza. 6. Indicare che $f$ è $k$-forte se e solo se $$\frac{x^k}{y^k}+\frac{y^k}{x^k}\le\frac{f(x)}{f(y)}+\frac{f(y)}{f(x)}$$ per tutti i valori $x$ e $y$ appartenenti a $I$, e che $f$ è $k$-debole se e solo se $$\frac{x^k}{y^k}+\frac{y^k}{x^k}\ge\frac{f(x)}{f(y)}+\frac{f(y)}{f(x)}$$ per tutti i valori $x$ e $y$ appartenenti a $I$. 7. Indicare che $f$ è $k$-forte se e solo se $$\frac{\max(x^k,y^k)}{\min(x^k,y^k)}\le\frac{\max(f(x),f(y))}{\min(f(x),f(y))}$$ per tutti i reali $x$ e $y$ appartenenti a $I$, e che $f$ è $k$-debole se e solo se $$\frac{\max(x^k,y^k)}{\min(x^k,y^k)}\ge\frac{\max(f(x),f(y))}{\min(f(x),f(y))}$$ per tutti i reali $x$ e $y$ appartenenti a $I$. 8. Una nota $g_k$ e $h_k$ le funzioni definite su $I$ da: $$g_k(x)=x^k f(x)\qquad\text{and}\qquad h_k(x)=\frac{f(x)}{x^k}$$ a. Indicare che, se $g_k$ e $h_k$ sono monotoni, allora $f$ è $k$-forte o $k$-debole. b. Indicare che, se $f$ è $k$ debole, $g_k$ e $h_k$ sono monotoni. c. Se $f$ è la funzione definita nell'intervallo $I=]0,+\infty[$ da $$f(x)=\begin{cases}x&\text{if }0<x<1\\4&\text{if }x=1\\x&\text{if }1<x<2\\4x&\text{if }2\le x\end{cases}$$ Mostri che $f$ è $1$-forte ma che le funzioni $g_1$ e $h_1$ non sono monotone. 9. In questa domanda si suppone che $f$ sia differenziabile su $I$ e che la sua derivata $f'$ sia continua su $I$. a. Mostra che, se $|f'(x)|\ge k\frac{f(x)}{x}$ per ogni reale $x\in I$, allora $f$ è $k$-forte. b. Mostrare che, se $|f'(x)|\le k\frac{f(x)}{x}$ per ogni reale $x\in I$, allora $f$ è $k$ debole. c. Mostrare che le conversazioni delle domande 9.a. e 9.b. sono veri.
> 
> 3.3 Una moltitudine di funzioni forti e deboli. Si dice che la funzione $f$ è "forte" se esiste un intero $k\ge1$ per il quale $f$ è $k$-forte, e "debole" se esiste un intero $k\ge1$ per il quale $f$ è $k$-debole. 10. Indicare che, se $f$ è debole, la funzione $F$ definita su $I$ da $F(x)=\frac{1}{f(x)}$ è forte. 11. Indicare che, se due funzioni $f$ e $g$ definite su $I$ sono deboli, le funzioni $f+g$, $f\times g$ e $\frac{f}{g}$ sono deboli. 12. Mostrare, con l'aiuto di esempi contrastanti, che se due funzioni $f$ e $g$ definite su $I$ sono forti, le funzioni $f+g$, $f\times g$ e $\frac{f}{g}$ non sono necessariamente forti. 13. Che $f$ sia una funzione definita su $I$ con valori rigorosamente positivi, e $g$ una funzione definita su $]0,+\infty[$. a. Indicare che, se $f$ e $g$ sono deboli, la funzione $g\circ f$ è debole. b. Indicare che, se $f$ e $g$ sono forti, la funzione $g\circ f$ è forte.
> 
> 3.4 Applicazione alla dimostrazione delle disuguaglianze. 14. Lasciate che $a,b$ e $c$ siano tre reali strettamente positivi e $n$ un intero naturale non zero. Mostra che: $$\left(\frac{a+c}{b+c}\right)^n+\left(\frac{b+c}{a+c}\right)^n\le\left(\frac{a}{b}\right)^n+\left(\frac{b}{a}\right)^n$$ 15. In questa domanda si può usare il fatto che le funzioni $\cos$ e $\sin$ sono differenziabili su $]0,\frac{\pi}{2}[$ con derivati rispettivamente $\cos'=-\sin$ e $\sin'=\cos$. La funzione $\tan$ è definita su $]0,\frac{\pi}{2}[$ da $\tan(x)=\frac{\sin(x)}{\cos(x)}$. Che $a$ e $b$ siano due numeri reali dell'intervallo $]0,\frac{\pi}{2}[$, mostrando che: $$\frac{\sin(a)}{\sin(b)}+\frac{\sin(b)}{\sin(a)}\le\frac{a}{b}+\frac{b}{a}\le\frac{\tan(a)}{\tan(b)}+\frac{\tan(b)}{\tan(a)}$$

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]], [[method_casework|Analisi per casi]], [[method_trigonometria|Tecniche trigonometriche]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Geometria]]


<div class="qlang-split" data-lang="en"></div>


*Que la force soit avec f!: a positive function f on an interval I subset of [0,+inf) is called k-strong or k-weak depending on the sign of (y^k f(y) - x^k f(x))(f(y)/y^k - f(x)/x^k); examples, equivalent criteria, monotonicity of g_k=x^k f and h_k=f/x^k, derivative criteria, products/compositions, and applications to inequalities (a,b,c power means and a sin/tan inequality).*

> Probleme 3: "Que la force soit avec $f$ !" (May the force be with $f$!). In all of this problem, $k$ designates a non-zero natural integer, $I$ an interval included in $]0,+\infty[$, and $f$ a function defined on $I$ with strictly positive values.
> One says that the function $f$ is "$k$-strong" if, for all reals $x$ and $y$ belonging to $I$,
> $$\left(y^k f(y)-x^k f(x)\right)\left(\frac{f(y)}{y^k}-\frac{f(x)}{x^k}\right)\ge0$$
> One says that $f$ is "$k$-weak" if, for all reals $x$ and $y$ belonging to $I$,
> $$\left(y^k f(y)-x^k f(x)\right)\left(\frac{f(y)}{y^k}-\frac{f(x)}{x^k}\right)\le0$$
> 
> 3.1 Some examples and properties.
> 1. Show that the function $f_1$ defined on the interval $]0,+\infty[$ by $f_1(x)=x^2$ is $1$-strong and $3$-weak.
> 2. Show that the function $f_2$ defined on the interval $]0,1[$ by $f_2(x)=\exp(x)$ is $1$-weak but not $1$-strong.
> 3. Show that the function $f_3$ defined on the interval $]1,+\infty[$ by $f_3(x)=\exp(x)$ is $1$-strong but not $1$-weak.
> 4. Show that the function $f_4$ defined on the interval $]0,+\infty[$ by $f_4(x)=\frac{1}{x}$ is $k$-weak for every integer $k\ge1$.
> 5. Does there exist a function defined on the interval $]0,+\infty[$ that is $k$-strong for every integer $k\ge1$?
> 
> 3.2 Some criteria of strength and weakness.
> 6. Show that $f$ is $k$-strong if and only if
> $$\frac{x^k}{y^k}+\frac{y^k}{x^k}\le\frac{f(x)}{f(y)}+\frac{f(y)}{f(x)}$$
> for all reals $x$ and $y$ belonging to $I$, and that $f$ is $k$-weak if and only if
> $$\frac{x^k}{y^k}+\frac{y^k}{x^k}\ge\frac{f(x)}{f(y)}+\frac{f(y)}{f(x)}$$
> for all reals $x$ and $y$ belonging to $I$.
> 7. Show that $f$ is $k$-strong if and only if
> $$\frac{\max(x^k,y^k)}{\min(x^k,y^k)}\le\frac{\max(f(x),f(y))}{\min(f(x),f(y))}$$
> for all reals $x$ and $y$ belonging to $I$, and that $f$ is $k$-weak if and only if
> $$\frac{\max(x^k,y^k)}{\min(x^k,y^k)}\ge\frac{\max(f(x),f(y))}{\min(f(x),f(y))}$$
> for all reals $x$ and $y$ belonging to $I$.
> 8. One notes $g_k$ and $h_k$ the functions defined on $I$ by:
> $$g_k(x)=x^k f(x)\qquad\text{and}\qquad h_k(x)=\frac{f(x)}{x^k}$$
>    a. Show that, if $g_k$ and $h_k$ are monotone, then $f$ is $k$-strong or $k$-weak.
>    b. Show that, if $f$ is $k$-weak, then $g_k$ and $h_k$ are monotone.
>    c. Let $f$ be the function defined on the interval $I=]0,+\infty[$ by
> $$f(x)=\begin{cases}x&\text{if }0<x<1\\4&\text{if }x=1\\x&\text{if }1<x<2\\4x&\text{if }2\le x\end{cases}$$
>    Show that $f$ is $1$-strong but that the functions $g_1$ and $h_1$ are not monotone.
> 9. One supposes in this question that $f$ is differentiable on $I$ and that its derivative $f'$ is continuous on $I$.
>    a. Show that, if $|f'(x)|\ge k\frac{f(x)}{x}$ for every real $x\in I$, then $f$ is $k$-strong.
>    b. Show that, if $|f'(x)|\le k\frac{f(x)}{x}$ for every real $x\in I$, then $f$ is $k$-weak.
>    c. Show that the converses of questions 9.a. and 9.b. are true.
> 
> 3.3 A multitude of strong and weak functions.
> One says that the function $f$ is "strong" if there exists an integer $k\ge1$ for which $f$ is $k$-strong, and "weak" if there exists an integer $k\ge1$ for which $f$ is $k$-weak.
> 10. Show that, if $f$ is weak, the function $F$ defined on $I$ by $F(x)=\frac{1}{f(x)}$ is strong.
> 11. Show that, if two functions $f$ and $g$ defined on $I$ are weak, the functions $f+g$, $f\times g$ and $\frac{f}{g}$ are weak.
> 12. Show, with the help of counter-examples, that if two functions $f$ and $g$ defined on $I$ are strong, the functions $f+g$, $f\times g$ and $\frac{f}{g}$ are not necessarily strong.
> 13. Let $f$ be a function defined on $I$ with strictly positive values, and $g$ a function defined on $]0,+\infty[$.
>    a. Show that, if $f$ and $g$ are weak, the function $g\circ f$ is weak.
>    b. Show that, if $f$ and $g$ are strong, the function $g\circ f$ is strong.
> 
> 3.4 Application to the demonstration of inequalities.
> 14. Let $a,b$ and $c$ be three strictly positive reals, and $n$ a non-zero natural integer. Show that:
> $$\left(\frac{a+c}{b+c}\right)^n+\left(\frac{b+c}{a+c}\right)^n\le\left(\frac{a}{b}\right)^n+\left(\frac{b}{a}\right)^n$$
> 15. In this question, one may use the fact that the functions $\cos$ and $\sin$ are differentiable on $]0,\frac{\pi}{2}[$ with derivatives respectively $\cos'=-\sin$ and $\sin'=\cos$. The function $\tan$ is defined on $]0,\frac{\pi}{2}[$ by $\tan(x)=\frac{\sin(x)}{\cos(x)}$. Let $a$ and $b$ be two real numbers of the interval $]0,\frac{\pi}{2}[$, show that:
> $$\frac{\sin(a)}{\sin(b)}+\frac{\sin(b)}{\sin(a)}\le\frac{a}{b}+\frac{b}{a}\le\frac{\tan(a)}{\tan(b)}+\frac{\tan(b)}{\tan(a)}$$

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_casework|Casework]], [[method_trigonometria|Trigonometria]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1mpuoT_Bn4czxgorxXLmkmdqsNnb4j2Av/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
