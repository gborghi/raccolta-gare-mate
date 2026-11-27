---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018
tipo: gara
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018
family: tfjm
year: '2018'
level: TFJM²
---
<div class="atom-reader" data-gara="Quesiti/src_tfjm_2018"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,topic_aritmetica,method_casework,method_conteggio,method_simmetria,skill_conteggio_sistematico,skill_casework_accurato,skill_modellizzazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Pièces de puzzle carrées, avec une bosse ou un creux sur chaque côté : combien de pièces distinctes, et quels puzzles sont distingués ou singuliers.*

> 1. Puzzles
>
> Nicolas conçoit des pièces de puzzle. Ses pièces sont des carrés de côté $1$ cm. Sur chaque côté d’une pièce, il peut choisir soit de laisser le bord droit, soit d’ajouter une bosse, soit de tailler un creux. Il n’y a (pour le début du problème) qu’une seule forme de bosse et une seule forme de creux, qui sont complémentaires.
>
> Figure 1. Les trois pièces ci-dessus sont distinctes ; les pièces à gauche et au centre sont identiques à rotation près ; les pièces au centre et à droite sont identiques à un retournement (c’est-à-dire une symétrie axiale) près.
>
> 1. Combien de pièces distinctes (voir Figure 1) existe-t-il :
> a) en n’autorisant ni rotation, ni retournement ?
> b) si on s’autorise à tourner les pièces mais pas à les retourner ?
> c) si on s’autorise à tourner et à retourner les pièces ?
>
> On appelle puzzle de taille $m \times n$ un ensemble de $mn$ pièces qu’il est possible d’assembler, en forme de rectangle de $m$ centimètres de long et $n$ centimètres de large, sans les tourner ni les retourner, de sorte que chaque creux s’emboîte dans une bosse et réciproquement, et que les côtés plats soient uniquement sur le bord du rectangle. On dit qu’un puzzle est distingué lorsqu’il existe une unique façon d’assembler les $mn$ pièces pour former un rectangle $m \times n$ avec les contraintes ci-dessus, à un échange de pièces identiques près.
>
> 2. Pour quels couples d’entiers positifs $(m, n)$ peut-on :
> a) trouver un puzzle distingué de taille $m \times n$ ?
> b) trouver un puzzle non distingué de taille $m \times n$ ?
>
> On dit qu’un puzzle est singulier s’il ne comporte pas deux pièces identiques.
>
> 3. Quel est le nombre maximal de pièces que peut contenir un puzzle singulier ?
>
> 4. Reprendre la question 2 si l’on impose que le puzzle soit singulier.
>
> 5. Soit un entier $k \in \mathbb{N}^{*}$ fixé. On autorise maintenant $k$ formes de creux et autant de formes correspondantes de bosses, de sorte qu’une bosse ne puisse s’encastrer que dans un creux de la forme complémentaire. Reprendre les questions précédentes.
>
> 6. Reprendre les questions précédentes si l’on est désormais autorisé à tourner les pièces (mais pas à les retourner).
>
> 7. Proposer et étudier d’autres directions de recherche.

![[src_tfjm_2018__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoire]], [[topic_aritmetica|Arithmétique / théorie des nombres]]
**Metodo:** [[method_casework|Analyse par cas]], [[method_conteggio|Dénombrement]], [[method_simmetria|Exploitation de la symétrie]]
**Abilita:** [[skill_conteggio_sistematico|Dénombrement systématique]], [[skill_casework_accurato|Analyse par cas soigneuse]], [[skill_modellizzazione|Modélisation]], [[skill_astrazione|Abstraction]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]], [[Aritmetica e Teoria dei Numeri|Arithmétique et théorie des nombres]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)


<div class="qlang-split" data-lang="it"></div>


*Pezzi di puzzle quadrati, con una bozza o un incavo su ogni lato: quanti pezzi distinti, e quali puzzle sono univoci o singolari.*

> 1. Puzzle
>
> Nicolas progetta pezzi di puzzle. I pezzi sono quadrati di lato $1$ cm. Su ogni lato di un pezzo può lasciare il bordo dritto, aggiungere una bozza, oppure intagliare un incavo. All’inizio del problema c’è una sola forma di bozza e una sola forma di incavo, e sono complementari.
>
> Figura 1. I tre pezzi sopra sono distinti; i pezzi a sinistra e al centro coincidono a meno di una rotazione; i pezzi al centro e a destra coincidono a meno di un ribaltamento (cioè di una simmetria assiale).
>
> 1. Quanti pezzi distinti esistono (si veda la Figura 1):
> a) se non si ammettono né rotazioni né ribaltamenti?
> b) se si possono ruotare i pezzi, ma non ribaltarli?
> c) se si possono ruotare e ribaltare i pezzi?
>
> Si chiama puzzle di taglia $m \times n$ un insieme di $mn$ pezzi che si possono assemblare in un rettangolo lungo $m$ centimetri e largo $n$ centimetri, senza ruotarli né ribaltarli, in modo che ogni incavo si incastri in una bozza e viceversa, e che i lati piatti stiano solo sul bordo del rettangolo. Si dice che un puzzle è univoco se esiste un unico modo di assemblare gli $mn$ pezzi in un rettangolo $m \times n$ con i vincoli sopra, a meno di scambiare pezzi identici.
>
> 2. Per quali coppie di interi positivi $(m, n)$ si può:
> a) trovare un puzzle univoco di taglia $m \times n$?
> b) trovare un puzzle di taglia $m \times n$ che non è univoco?
>
> Si dice che un puzzle è singolare se non contiene due pezzi identici.
>
> 3. Qual è il massimo numero di pezzi che può contenere un puzzle singolare?
>
> 4. Si riprenda la domanda 2 imponendo che il puzzle sia singolare.
>
> 5. Sia fissato un intero $k \in \mathbb{N}^{*}$. Si ammettono ora $k$ forme di incavo e altrettante forme di bozza corrispondenti, così che una bozza si incastri solo in un incavo della forma complementare. Si riprendano le domande precedenti.
>
> 6. Si riprendano le domande precedenti se ora è permesso ruotare i pezzi (ma non ribaltarli).
>
> 7. Si propongano e si studino altre direzioni di ricerca.

![[src_tfjm_2018__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]


<div class="qlang-split" data-lang="en"></div>


*Square puzzle pieces with a bump or a hollow on each side: how many distinct pieces, and which puzzles are distinguished or singular.*

> 1. Puzzles
>
> Nicolas designs puzzle pieces. His pieces are squares of side $1$ cm. On each side of a piece he may leave the edge straight, add a bump, or cut a hollow. For the start of the problem there is only one shape of bump and one shape of hollow, and they are complementary.
>
> Figure 1. The three pieces above are distinct; the left and centre pieces are the same up to rotation; the centre and right pieces are the same up to a flip (that is, an axial symmetry).
>
> 1. How many distinct pieces are there (see Figure 1):
> a) if neither rotation nor flipping is allowed?
> b) if the pieces may be rotated but not flipped?
> c) if the pieces may be rotated and flipped?
>
> A puzzle of size $m \times n$ is a set of $mn$ pieces that can be assembled into a rectangle $m$ centimetres long and $n$ centimetres wide, without rotating or flipping them, so that every hollow fits a bump and conversely, and so that the flat sides lie only on the boundary of the rectangle. A puzzle is distinguished when there is exactly one way to assemble the $mn$ pieces into an $m \times n$ rectangle under the constraints above, up to exchanging identical pieces.
>
> 2. For which pairs of positive integers $(m, n)$ can one:
> a) find a distinguished puzzle of size $m \times n$?
> b) find a puzzle of size $m \times n$ that is not distinguished?
>
> A puzzle is singular if it does not contain two identical pieces.
>
> 3. What is the largest number of pieces a singular puzzle can contain?
>
> 4. Answer question 2 under the extra requirement that the puzzle be singular.
>
> 5. Fix an integer $k \in \mathbb{N}^{*}$. One now allows $k$ shapes of hollow and as many corresponding shapes of bump, so that a bump fits only a hollow of the complementary shape. Answer the previous questions again.
>
> 6. Answer the previous questions again if the pieces may now be rotated (but not flipped).
>
> 7. Propose and study other lines of inquiry.

![[src_tfjm_2018__Q01.png]]

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_casework|Case analysis]], [[method_conteggio|Combinatorial counting]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_casework_accurato|Careful case analysis]], [[skill_modellizzazione|Modelling / translating the text]], [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,topic_algebra,topic_funzionali,method_congruenze,method_ricorsione,method_estremalita,method_casework,method_induzione,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*Comparaison du nombre de divisions euclidiennes dans l’algorithme d’Euclide et dans une variante où l’on choisit des restes antérieurs.*

> 2. Plus rapide qu’Euclide ?
>
> Morgane veut calculer le plus grand diviseur commun de deux entiers $a$ et $b$, avec $a \geqslant b \geqslant 1$. Elle utilise l’algorithme d’Euclide classique, où l’on note $r(x, y)$ le reste de la division euclidienne de $x$ par $y$ :
>
> 1. $i \leftarrow 0$
> 2. $(u_{-1}, u_0) \leftarrow (a, b)$
> 3. Tant que $u_i \geqslant 1$ :
> 4. $i \leftarrow i + 1$
> 5. $u_i \leftarrow r(u_{i-2}, u_{i-1})$
> 6. On retourne $u_{i-1}$.
>
> Par exemple, pour le PGCD de $a = 34$ et $b = 21$, Morgane calcule successivement $u_1 = r(34, 21) = 13$, $u_2 = r(21, 13) = 8$, $u_3 = r(13, 8) = 5$, $u_4 = r(8, 5) = 3$, $u_5 = r(5, 3) = 2$, $u_6 = r(3, 2) = 1$ et $u_7 = r(2, 1) = 0$. Le PGCD est bien $1$. On note $f(a, b)$ la valeur de $i$ à la fin de l’algorithme, c’est-à-dire le nombre de divisions euclidiennes effectuées. Dans l’exemple, $f(34, 21) = 7$.
>
> Un couple $(a, b)$ d’entiers est strictement plus petit qu’un couple $(a', b')$ pour l’ordre lexicographique si $a < a'$, ou si $a = a'$ et $b < b'$.
>
> 1. Pour un entier $k$ fixé, quel est le plus petit couple $(a, b)$, pour l’ordre lexicographique, tel que $f(a, b) = k$ ?
>
> Plutôt que de n’utiliser que $u_{i-2}$ et $u_{i-1}$ pour calculer $u_i$, Morgane s’autorise à choisir deux valeurs précédentes de la suite $u$ et à prendre le reste de la division euclidienne de l’une par l’autre. Pour calculer $u_i$, elle choisit deux entiers $j_1$ et $j_2$ tels que $-1 \leqslant j_1, j_2 < i$, et pose $u_i = r(u_{j_1}, u_{j_2})$. Elle s’arrête dès qu’il existe un entier $d$ par lequel elle a divisé à la fois $a$ et $b$, avec $r(a, d) = r(b, d) = 0$. Elle affirme alors que $d$ est le PGCD de $a$ et $b$.
>
> Par exemple, pour $a = u_{-1} = 34$ et $b = u_0 = 21$, elle peut calculer $u_1 = r(34, 21) = 13$, $u_2 = r(21, 13) = 8$, $u_3 = r(13, 8) = 5$, $u_4 = r(21, 5) = 1$, $u_5 = r(34, 1) = 0$ et $u_6 = r(21, 1) = 0$, puis affirmer que $1$ est le PGCD de $34$ et $21$.
>
> 2. Dans le cas général, c’est-à-dire pour tous les entiers $a \geqslant b \geqslant 1$, l’affirmation de Morgane est-elle toujours correcte ?
>
> 3. Dans le cas général, suffit-il de vérifier que $r(a, d) = 0$ ou que $r(b, d) = 0$ pour affirmer que $d$ est le PGCD de $a$ et $b$ ?
>
> On note $g(a, b)$ le nombre minimal de divisions euclidiennes que Morgane doit effectuer avec cette méthode, y compris les deux divisions de $a$ et de $b$ par $d$. L’exemple ci-dessus montre que $g(34, 21) \leqslant 6$.
>
> 4. Calculer $g(34, 21)$.
>
> 5. Existe-t-il un entier relatif $A$ tel que l’on ait nécessairement $g(a, b) \leqslant f(a, b) + A$ ? Si oui, donner le plus petit entier $A$ possible.
>
> 6. Donner des conditions nécessaires et des conditions suffisantes sur le couple $(a, b)$ pour que $g(a, b) > f(a, b)$, et pour que $g(a, b) \geqslant f(a, b)$.
>
> 7. Pour quels entiers $A \geqslant 1$ existe-t-il des entiers $a \geqslant b \geqslant 1$ tels que $g(a, b) + A \leqslant f(a, b)$ ? Et tels que $g(a, b) \times A \leqslant f(a, b)$ ?
>
> 8. À $k$ fixé, quel est le plus petit couple $(a, b)$, pour l’ordre lexicographique, tel que $g(a, b) = k$ ? On pourra d’abord chercher à encadrer $a$ en fonction de $k$.
>
> 9. Proposer et étudier d’autres directions de recherche.

![[src_tfjm_2018__Q02.png]]

**Topic:** [[topic_aritmetica|Arithmétique / théorie des nombres]], [[topic_algebra|Algèbre]], [[topic_funzionali|Équations fonctionnelles]]
**Metodo:** [[method_congruenze|Arithmétique modulaire / congruences]], [[method_ricorsione|Récursion]], [[method_estremalita|Principe d'extrémalité]], [[method_casework|Analyse par cas]], [[method_induzione|Récurrence]]
**Abilita:** [[skill_manipolazione_algebrica|Manipulation algébrique]], [[skill_riconoscimento_pattern|Reconnaissance de motifs]], [[skill_lettura_attenta|Lecture attentive de l'énoncé]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmétique et théorie des nombres]], [[Algebra e Analisi|Algèbre et analyse]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)


<div class="qlang-split" data-lang="it"></div>


*Confronto tra il numero di divisioni euclidee nell’algoritmo di Euclide e in una variante che può usare resti precedenti.*

> 2. Più veloce di Euclide?
>
> Morgane vuole il massimo comune divisore di due interi $a$ e $b$, con $a \geqslant b \geqslant 1$. Usa l’algoritmo di Euclide classico. Si indica con $r(x, y)$ il resto della divisione euclidea di $x$ per $y$:
>
> 1. $i \leftarrow 0$
> 2. $(u_{-1}, u_0) \leftarrow (a, b)$
> 3. Finché $u_i \geqslant 1$:
> 4. $i \leftarrow i + 1$
> 5. $u_i \leftarrow r(u_{i-2}, u_{i-1})$
> 6. Si restituisce $u_{i-1}$.
>
> Per il MCD di $a = 34$ e $b = 21$ calcola $u_1 = r(34, 21) = 13$, $u_2 = r(21, 13) = 8$, $u_3 = r(13, 8) = 5$, $u_4 = r(8, 5) = 3$, $u_5 = r(5, 3) = 2$, $u_6 = r(3, 2) = 1$ e $u_7 = r(2, 1) = 0$. Il MCD è proprio $1$. Si indica con $f(a, b)$ il valore finale di $i$, cioè il numero di divisioni euclidee eseguite. Nell’esempio, $f(34, 21) = 7$.
>
> Una coppia $(a, b)$ di interi è strettamente minore di una coppia $(a', b')$ nell’ordine lessicografico se $a < a'$, oppure se $a = a'$ e $b < b'$.
>
> 1. Fissato un intero $k$, qual è la coppia $(a, b)$ minima nell’ordine lessicografico tale che $f(a, b) = k$?
>
> Invece di usare solo $u_{i-2}$ e $u_{i-1}$ per calcolare $u_i$, Morgane può scegliere due valori precedenti della successione $u$ e prendere il resto della divisione euclidea dell’uno per l’altro. Per calcolare $u_i$ sceglie due interi $j_1$ e $j_2$ tali che $-1 \leqslant j_1, j_2 < i$, e pone $u_i = r(u_{j_1}, u_{j_2})$. Si ferma appena esiste un intero $d$ per il quale ha diviso sia $a$ sia $b$, con $r(a, d) = r(b, d) = 0$. Afferma allora che $d$ è il MCD di $a$ e $b$.
>
> Per $a = u_{-1} = 34$ e $b = u_0 = 21$ può calcolare $u_1 = r(34, 21) = 13$, $u_2 = r(21, 13) = 8$, $u_3 = r(13, 8) = 5$, $u_4 = r(21, 5) = 1$, $u_5 = r(34, 1) = 0$ e $u_6 = r(21, 1) = 0$, e affermare che $1$ è il MCD di $34$ e $21$.
>
> 2. In generale, per ogni coppia di interi $a \geqslant b \geqslant 1$, l’affermazione di Morgane è sempre corretta?
>
> 3. In generale, basta verificare che $r(a, d) = 0$ oppure che $r(b, d) = 0$ per affermare che $d$ è il MCD di $a$ e $b$?
>
> Si indica con $g(a, b)$ il minimo numero di divisioni euclidee che Morgane deve eseguire con questo metodo, comprese le due divisioni di $a$ e di $b$ per $d$. L’esempio mostra che $g(34, 21) \leqslant 6$.
>
> 4. Calcolare $g(34, 21)$.
>
> 5. Esiste un intero relativo $A$ tale che si abbia necessariamente $g(a, b) \leqslant f(a, b) + A$? In caso affermativo, dare il minimo intero $A$ possibile.
>
> 6. Dare condizioni necessarie e condizioni sufficienti sulla coppia $(a, b)$ affinché $g(a, b) > f(a, b)$, e affinché $g(a, b) \geqslant f(a, b)$.
>
> 7. Per quali interi $A \geqslant 1$ esistono interi $a \geqslant b \geqslant 1$ tali che $g(a, b) + A \leqslant f(a, b)$? E tali che $g(a, b) \times A \leqslant f(a, b)$?
>
> 8. Fissato $k$, qual è la coppia $(a, b)$ minima nell’ordine lessicografico tale che $g(a, b) = k$? Si può cominciare cercando di stimare $a$ in funzione di $k$.
>
> 9. Si propongano e si studino altre direzioni di ricerca.

![[src_tfjm_2018__Q02.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_ricorsione|Ricorsione]], [[method_estremalita|Principio di estremalita]], [[method_casework|Analisi per casi]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Comparing the number of Euclidean divisions in the ordinary Euclidean algorithm with a variant that may use earlier remainders.*

> 2. Faster than Euclid?
>
> Morgane wants the greatest common divisor of two integers $a$ and $b$, with $a \geqslant b \geqslant 1$. She uses the ordinary Euclidean algorithm. Write $r(x, y)$ for the remainder of the Euclidean division of $x$ by $y$:
>
> 1. $i \leftarrow 0$
> 2. $(u_{-1}, u_0) \leftarrow (a, b)$
> 3. While $u_i \geqslant 1$:
> 4. $i \leftarrow i + 1$
> 5. $u_i \leftarrow r(u_{i-2}, u_{i-1})$
> 6. Return $u_{i-1}$.
>
> For the gcd of $a = 34$ and $b = 21$ she computes $u_1 = r(34, 21) = 13$, $u_2 = r(21, 13) = 8$, $u_3 = r(13, 8) = 5$, $u_4 = r(8, 5) = 3$, $u_5 = r(5, 3) = 2$, $u_6 = r(3, 2) = 1$ and $u_7 = r(2, 1) = 0$. The gcd is indeed $1$. Write $f(a, b)$ for the final value of $i$, that is, the number of Euclidean divisions performed. In the example, $f(34, 21) = 7$.
>
> A pair $(a, b)$ of integers is strictly smaller than a pair $(a', b')$ in lexicographic order if $a < a'$, or if $a = a'$ and $b < b'$.
>
> 1. For a fixed integer $k$, what is the lexicographically smallest pair $(a, b)$ such that $f(a, b) = k$?
>
> Instead of using only $u_{i-2}$ and $u_{i-1}$ to compute $u_i$, Morgane may choose any two earlier terms of the sequence $u$ and take the remainder of one divided by the other. To compute $u_i$ she chooses integers $j_1$ and $j_2$ with $-1 \leqslant j_1, j_2 < i$, and sets $u_i = r(u_{j_1}, u_{j_2})$. She stops as soon as there is an integer $d$ by which she has divided both $a$ and $b$, with $r(a, d) = r(b, d) = 0$. She then claims that $d$ is the gcd of $a$ and $b$.
>
> For $a = u_{-1} = 34$ and $b = u_0 = 21$ she may compute $u_1 = r(34, 21) = 13$, $u_2 = r(21, 13) = 8$, $u_3 = r(13, 8) = 5$, $u_4 = r(21, 5) = 1$, $u_5 = r(34, 1) = 0$ and $u_6 = r(21, 1) = 0$, and then claim that $1$ is the gcd of $34$ and $21$.
>
> 2. In general, for every pair of integers $a \geqslant b \geqslant 1$, is Morgane’s claim always correct?
>
> 3. In general, is it enough to check that $r(a, d) = 0$ or that $r(b, d) = 0$ in order to claim that $d$ is the gcd of $a$ and $b$?
>
> Write $g(a, b)$ for the least number of Euclidean divisions Morgane must perform with this method, including the two divisions of $a$ and of $b$ by $d$. The example shows that $g(34, 21) \leqslant 6$.
>
> 4. Compute $g(34, 21)$.
>
> 5. Is there an integer $A$ such that $g(a, b) \leqslant f(a, b) + A$ always holds? If so, give the smallest such $A$.
>
> 6. Give necessary conditions and sufficient conditions on the pair $(a, b)$ for $g(a, b) > f(a, b)$, and for $g(a, b) \geqslant f(a, b)$.
>
> 7. For which integers $A \geqslant 1$ do there exist integers $a \geqslant b \geqslant 1$ with $g(a, b) + A \leqslant f(a, b)$? And with $g(a, b) \times A \leqslant f(a, b)$?
>
> 8. For fixed $k$, what is the lexicographically smallest pair $(a, b)$ such that $g(a, b) = k$? One may begin by bounding $a$ in terms of $k$.
>
> 9. Propose and study other lines of inquiry.

![[src_tfjm_2018__Q02.png]]

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]], [[topic_algebra|Algebra]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_ricorsione|Recursion]], [[method_estremalita|Extremal principle]], [[method_casework|Case analysis]], [[method_induzione|Induction]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_lettura_attenta|Careful reading of the text]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_logica,method_casework,method_estremalita,method_backward,skill_modellizzazione,skill_casework_accurato,skill_ragionamento_geometrico"></span>

*Immeubles en bord de mer : deux promotrices placent des tours de hauteur imposée, et l’on étudie l’avantage et le score des étages qui voient la mer.*

> 3. Vue sur la mer
>
> Dans la station balnéaire de Vecteur-les-Bains, la concurrence entre promoteurs immobiliers fait rage. Chacun veut construire des immeubles offrant le plus d’étages possibles avec vue sur la mer.
>
> On fixe deux entiers $n$ et $k$ tels que $1 \leqslant k \leqslant n$. Cécile et Eva s’affrontent pour construire des immeubles sur un terrain de $n$ emplacements, numérotés de $1$ à $n$. L’emplacement $1$ est au bord de la mer, l’emplacement $2$ est juste derrière, et ainsi de suite jusqu’à l’emplacement $n$. Sur l’emplacement $i$, on a uniquement le droit de construire un immeuble d’exactement $i$ étages. Un étage d’un immeuble voit la mer si et seulement si aucun immeuble situé entre lui et la mer n’atteint la hauteur de cet étage (voir Figure 2).
>
> Figure 2. Cécile a construit un immeuble sur l’emplacement $5$, et Eva un immeuble sur l’emplacement $3$. Les trois étages de l’immeuble d’Eva ont vue sur la mer, tout comme les deux étages les plus élevés de l’immeuble de Cécile (les trois autres ont la vue bouchée par l’immeuble d’Eva).
>
> Cécile place un premier immeuble sur l’emplacement de son choix, puis Eva en place un sur un autre emplacement, puis Cécile, et ainsi de suite jusqu’à ce que $k$ immeubles aient été placés au total. Pour chaque promotrice, le score est le nombre d’étages de ses constructions qui voient la mer, et l’avantage est la différence entre son score et celui de l’autre.
>
> 1. Quel est le meilleur avantage que Cécile peut s’assurer lorsque :
> a) $k = 1, 2, 3$ ?
> b) $k = n$ et $k = n - 1$ ?
> c) $k$ est quelconque ?
>
> 2. Cécile et Eva ont fait la paix : chacune essaie désormais de maximiser son propre score, sans se préoccuper de celui de l’autre. Lorsqu’une promotrice a plusieurs façons de s’assurer le même score, elle choisit celle qui donne le plus haut score final à l’autre.
> a) Quel est le plus grand score que Cécile peut s’assurer ? On pourra commencer par les mêmes valeurs particulières de $k$ que dans la question 1.
> b) Même question pour Eva.
>
> 3. La législation change. Deux entiers naturels $k_C$ et $k_E$ sont fixés, avec $k_C + k_E \leqslant n$. Cécile et Eva jouent respectivement $k_C$ et $k_E$ coups, dans un ordre décidé par la loi. Reprendre les questions précédentes lorsque :
> a) $k_E = 1$, $k_C$ est quelconque, et Eva joue après que Cécile a placé ses $k_C$ immeubles ;
> b) $k_C$ et $k_E$ sont quelconques, Cécile place ses $k_C$ immeubles puis Eva place ses $k_E$ immeubles ;
> c) $k_C$ et $k_E$ sont quelconques et Cécile choisit l’ordre dans lequel les deux jouent.
>
> 4. À cause du réchauffement climatique, le niveau de la mer a augmenté et Vecteur-les-Bains est devenue une île. Elle est constituée d’une rangée de $2n - 1$ parcelles et elle est bordée par la mer des deux côtés. À une distance $k$ du bras de mer le plus proche, on peut construire un immeuble de taille $k$ (voir Figure 3). Chaque étage est séparé en $2$ appartements (un à gauche et un à droite), et le score d’une promotrice est le nombre d’appartements de ses constructions qui voient la mer. Reprendre les questions précédentes dans ce cadre.
>
> Figure 3. Le score de Cécile est $5$ : quatre appartements voient la mer à gauche et un à droite. Celui d’Eva est $3$ : trois appartements voient la mer à droite.
>
> 5. Proposer et étudier d’autres directions de recherche.

![[src_tfjm_2018__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoire]], [[topic_logica|Logique, jeux, stratégies]]
**Metodo:** [[method_casework|Analyse par cas]], [[method_estremalita|Principe d'extrémalité]], [[method_backward|Raisonnement à rebours]]
**Abilita:** [[skill_modellizzazione|Modélisation]], [[skill_casework_accurato|Analyse par cas soigneuse]], [[skill_ragionamento_geometrico|Raisonnement géométrique]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)



<span class="atom-split" id="q03__en" data-atom="q03__en" data-title="Q03__EN" data-tags=""></span>

---
tipo: quesito-translation
translation_of: src_tfjm_2018__Q03
lang: en
secondary: true
title: "Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018 — Question 3"
summary: "Buildings by the sea: two developers place towers of prescribed height, and one studies the advantage and the score of floors with a sea view."
topics: [topic_combinatoria, topic_logica]
methods: [method_casework, method_estremalita, method_backward]
skills: [skill_modellizzazione, skill_casework_accurato, skill_ragionamento_geometrico]
tags: [kg/translation, topic/combinatoria, topic/logica]---

*Buildings by the sea: two developers place towers of prescribed height, and one studies the advantage and the score of floors with a sea view.*

> 3. Sea view
>
> In the seaside resort of Vecteur-les-Bains, property developers compete fiercely. Each wants buildings with as many floors as possible that look out to sea.
>
> Fix integers $n$ and $k$ with $1 \leqslant k \leqslant n$. Cécile and Eva build on a plot of $n$ sites, numbered from $1$ to $n$. Site $1$ is on the seafront, site $2$ is just behind it, and so on up to site $n$. On site $i$ one may build a building of exactly $i$ floors, and nothing else. A floor sees the sea if and only if no building between it and the sea reaches the height of that floor (see Figure 2).
>
> Figure 2. Cécile has built on site $5$, and Eva on site $3$. All three floors of Eva’s building see the sea, as do the two highest floors of Cécile’s building (the other three are blocked by Eva’s building).
>
> Cécile places a first building on a site of her choice, then Eva places one on another site, then Cécile again, and so on until $k$ buildings have been placed in all. For each developer, the score is the number of floors of her buildings that see the sea, and the advantage is the difference between her score and the other’s.
>
> 1. What is the best advantage Cécile can guarantee when:
> a) $k = 1, 2, 3$?
> b) $k = n$ and $k = n - 1$?
> c) $k$ is arbitrary?
>
> 2. Cécile and Eva have made peace: each now tries to maximise her own score, and does not care about the other’s. If a developer has several ways to guarantee the same score, she chooses the one that gives the other the highest final score.
> a) What is the greatest score Cécile can guarantee? One may begin with the same special values of $k$ as in question 1.
> b) The same question for Eva.
>
> 3. The law changes. Two natural numbers $k_C$ and $k_E$ are fixed, with $k_C + k_E \leqslant n$. Cécile and Eva play $k_C$ and $k_E$ moves respectively, in an order fixed by the law. Answer the previous questions when:
> a) $k_E = 1$, $k_C$ is arbitrary, and Eva plays after Cécile has placed her $k_C$ buildings;
> b) $k_C$ and $k_E$ are arbitrary, Cécile places her $k_C$ buildings and then Eva places her $k_E$ buildings;
> c) $k_C$ and $k_E$ are arbitrary and Cécile chooses the order in which the two play.
>
> 4. Because of global warming the sea has risen, and Vecteur-les-Bains has become an island. It consists of a row of $2n - 1$ plots and is bordered by the sea on both sides. At distance $k$ from the nearer arm of the sea one may build a building of size $k$ (see Figure 3). Each floor is split into $2$ flats (one on the left and one on the right), and a developer’s score is the number of flats of her buildings that see the sea. Answer the previous questions in this setting.
>
> Figure 3. Cécile’s score is $5$: four flats see the sea on the left and one on the right. Eva’s score is $3$: three flats see the sea on the right.
>
> 5. Propose and study other lines of inquiry.

![[src_tfjm_2018__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]], [[method_estremalita|Extremal principle]], [[method_backward|Working backwards]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_casework_accurato|Careful case analysis]], [[skill_ragionamento_geometrico|Geometric reasoning]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
[[Quesiti/src_tfjm_2018#q03|src_tfjm_2018__Q03]]



<span class="atom-split" id="q03__it" data-atom="q03__it" data-title="Q03__IT" data-tags=""></span>

---
tipo: quesito-translation
translation_of: src_tfjm_2018__Q03
lang: it
secondary: true
title: "Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018, quesito 3"
summary: "Palazzi sul mare: due promotrici piazzano torri di altezza fissata, e si studia il vantaggio e il punteggio dei piani che vedono il mare."
topics: [topic_combinatoria, topic_logica]
methods: [method_casework, method_estremalita, method_backward]
skills: [skill_modellizzazione, skill_casework_accurato, skill_ragionamento_geometrico]
tags: [kg/translation, topic/combinatoria, topic/logica]---

*Palazzi sul mare: due promotrici piazzano torri di altezza fissata, e si studia il vantaggio e il punteggio dei piani che vedono il mare.*

> 3. Vista sul mare
>
> Nella località balneare di Vecteur-les-Bains la concorrenza tra i promotori immobiliari è feroce. Ciascuno vuole palazzi con il maggior numero possibile di piani che vedano il mare.
>
> Si fissano due interi $n$ e $k$ tali che $1 \leqslant k \leqslant n$. Cécile ed Eva costruiscono su un terreno di $n$ lotti, numerati da $1$ a $n$. Il lotto $1$ è sul mare, il lotto $2$ è subito dietro, e così via fino al lotto $n$. Sul lotto $i$ si può costruire soltanto un palazzo di esattamente $i$ piani. Un piano vede il mare se e solo se nessun palazzo posto tra esso e il mare raggiunge l’altezza di quel piano (si veda la Figura 2).
>
> Figura 2. Cécile ha costruito sul lotto $5$, Eva sul lotto $3$. I tre piani del palazzo di Eva vedono il mare, come i due piani più alti del palazzo di Cécile (gli altri tre sono coperti dal palazzo di Eva).
>
> Cécile piazza un primo palazzo sul lotto che sceglie, poi Eva ne piazza uno su un altro lotto, poi di nuovo Cécile, e così via finché non sono stati piazzati $k$ palazzi in tutto. Per ciascuna promotrice il punteggio è il numero di piani delle sue costruzioni che vedono il mare, e il vantaggio è la differenza tra il suo punteggio e quello dell’altra.
>
> 1. Qual è il miglior vantaggio che Cécile può garantirsi quando:
> a) $k = 1, 2, 3$?
> b) $k = n$ e $k = n - 1$?
> c) $k$ è arbitrario?
>
> 2. Cécile ed Eva hanno fatto la pace: ciascuna cerca ora di massimizzare il proprio punteggio, senza curarsi di quello dell’altra. Se una promotrice ha più modi di garantirsi lo stesso punteggio, sceglie quello che dà all’altra il punteggio finale più alto.
> a) Qual è il massimo punteggio che Cécile può garantirsi? Si può cominciare dagli stessi valori particolari di $k$ della domanda 1.
> b) La stessa domanda per Eva.
>
> 3. La normativa cambia. Si fissano due interi non negativi $k_C$ e $k_E$, con $k_C + k_E \leqslant n$. Cécile ed Eva giocano rispettivamente $k_C$ e $k_E$ mosse, in un ordine deciso dalla legge. Si riprendano le domande precedenti quando:
> a) $k_E = 1$, $k_C$ è arbitrario, ed Eva gioca dopo che Cécile ha piazzato i suoi $k_C$ palazzi;
> b) $k_C$ e $k_E$ sono arbitrari, Cécile piazza i suoi $k_C$ palazzi e poi Eva piazza i suoi $k_E$ palazzi;
> c) $k_C$ e $k_E$ sono arbitrari e Cécile sceglie l’ordine in cui le due giocano.
>
> 4. Per il riscaldamento climatico il livello del mare è salito e Vecteur-les-Bains è diventata un’isola. È formata da una fila di $2n - 1$ lotti ed è bagnata dal mare dai due lati. A distanza $k$ dal braccio di mare più vicino si può costruire un palazzo di taglia $k$ (si veda la Figura 3). Ogni piano è diviso in $2$ appartamenti (uno a sinistra e uno a destra), e il punteggio di una promotrice è il numero di appartamenti delle sue costruzioni che vedono il mare. Si riprendano le domande precedenti in questo quadro.
>
> Figura 3. Il punteggio di Cécile è $5$: quattro appartamenti vedono il mare a sinistra e uno a destra. Quello di Eva è $3$: tre appartamenti vedono il mare a destra.
>
> 5. Si propongano e si studino altre direzioni di ricerca.

![[src_tfjm_2018__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]], [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
[[Quesiti/src_tfjm_2018#q03|src_tfjm_2018__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_probabilita,topic_combinatoria,method_casework,method_conteggio,skill_modellizzazione,skill_casework_accurato,skill_stima,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="fr"></div>


*Galettes des rois : sachant combien de parts restent et combien de fèves ont déjà été trouvées, dans quelle galette piocher pour maximiser ou minimiser la probabilité d’en trouver une.*

> 4. Galettes des rois
>
> À la galette des rois du lycée, il y a $n$ galettes numérotées de $1$ à $n$, chacune découpée en $k$ parts, où $k$ et $n$ sont deux entiers $\geqslant 1$. Chaque galette contient initialement une seule fève. Guillaume est en retard : quand il arrive, pour tout $1 \leqslant i \leqslant n$, il reste $a_i$ parts dans la galette $i$. On suppose que tous ceux qui ont pris une part l’ont choisie uniformément au hasard dans une des galettes. On note $L$ le nombre de fèves déjà trouvées avant l’arrivée de Guillaume. On suppose $a_1 \leqslant a_2 \leqslant \cdots \leqslant a_n$.
>
> 1. Calculer $\mathbb{P}(L = \ell)$ pour tout entier $\ell \geqslant 0$. Quelle est l’espérance de $L$ ?
>
> 2. En prenant une part au hasard dans la galette $i$, quelle est la probabilité que Guillaume trouve une fève ? Dans quelle galette doit-il piocher pour maximiser ses chances ?
>
> Thomas, présent depuis le début, indique à Guillaume que $\ell$ fèves ont été trouvées, avec $0 \leqslant \ell \leqslant n - 1$.
>
> 3. En fonction de $\ell$, dans quelle galette Guillaume doit-il prendre une part pour avoir le plus de chances de trouver une fève ? Quelle est alors cette probabilité ? On pourra traiter les cas suivants :
> a) $n = 2$ ;
> b) $n = 3$ ;
> c) $\ell = 0$ ;
> d) $\ell = 1$ ;
> e) $\ell = n - 1$ ;
> f) $n$ et $\ell$ quelconques, mais toutes les galettes entamées contiennent le même nombre de parts ;
> g) $k = n$ et $a_i = i$ pour tout $i$ ;
> h) $n$ et $\ell$ quelconques.
>
> 4. On suppose ici $a_1 < a_2 < \cdots < a_n$. Une galette $i$ est inutile si, quelle que soit la valeur $\ell$ donnée par Thomas, la galette $i$ n’est pas celle où Guillaume a le plus de chances de trouver une fève. En fonction de $n$, est-il possible qu’aucune galette ne soit inutile ? Que toutes les galettes sauf une soient inutiles ? Quels sont les nombres possibles de galettes inutiles ?
>
> 5. Guillaume a très faim et craint qu’il y ait moins à manger dans les parts qui contiennent une fève. Il veut donc minimiser ses chances d’en trouver une. Reprendre les questions 3 et 4 dans ce cadre.
>
> 6. Proposer et étudier d’autres directions de recherche.

![[src_tfjm_2018__Q04.png]]

**Topic:** [[topic_probabilita|Probabilités et statistique]], [[topic_combinatoria|Combinatoire]]
**Metodo:** [[method_casework|Analyse par cas]], [[method_conteggio|Dénombrement]]
**Abilita:** [[skill_modellizzazione|Modélisation]], [[skill_casework_accurato|Analyse par cas soigneuse]], [[skill_stima|Estimation et approximation]], [[skill_manipolazione_algebrica|Manipulation algébrique]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)


<div class="qlang-split" data-lang="it"></div>


*Galette des rois: note quante fette restano e quante fave sono già state trovate, da quale torta pescare per massimizzare o minimizzare la probabilità di trovarne una.*

> 4. Galette des rois
>
> Alla galette des rois del liceo ci sono $n$ torte numerate da $1$ a $n$, ciascuna tagliata in $k$ fette, dove $k$ e $n$ sono interi $\geqslant 1$. Ogni torta contiene all’inizio una sola fava. Guillaume è in ritardo: quando arriva, nella torta $i$ restano $a_i$ fette, per ogni $1 \leqslant i \leqslant n$. Chi ha preso una fetta l’ha scelta in modo uniforme a caso in una delle torte. Si indica con $L$ il numero di fave già trovate prima dell’arrivo di Guillaume. Si suppone $a_1 \leqslant a_2 \leqslant \cdots \leqslant a_n$.
>
> 1. Calcolare $\mathbb{P}(L = \ell)$ per ogni intero $\ell \geqslant 0$. Qual è il valore atteso di $L$?
>
> 2. Prendendo una fetta a caso nella torta $i$, qual è la probabilità che Guillaume trovi una fava? In quale torta deve pescare per massimizzare le sue possibilità?
>
> Thomas, presente fin dall’inizio, dice a Guillaume che sono state trovate $\ell$ fave, con $0 \leqslant \ell \leqslant n - 1$.
>
> 3. In funzione di $\ell$, in quale torta Guillaume deve prendere una fetta per avere la massima probabilità di trovare una fava? Qual è allora questa probabilità? Si possono trattare i casi seguenti:
> a) $n = 2$;
> b) $n = 3$;
> c) $\ell = 0$;
> d) $\ell = 1$;
> e) $\ell = n - 1$;
> f) $n$ e $\ell$ arbitrari, ma tutte le torte già iniziate contengono lo stesso numero di fette;
> g) $k = n$ e $a_i = i$ per ogni $i$;
> h) $n$ e $\ell$ arbitrari.
>
> 4. Si suppone ora $a_1 < a_2 < \cdots < a_n$. Una torta $i$ è inutile se, qualunque sia il valore $\ell$ dato da Thomas, la torta $i$ non è mai quella in cui Guillaume ha la massima probabilità di trovare una fava. In funzione di $n$, può accadere che nessuna torta sia inutile? Che tutte le torte tranne una siano inutili? Quali sono i numeri possibili di torte inutili?
>
> 5. Guillaume ha molta fame e teme che nelle fette con la fava ci sia meno da mangiare. Vuole quindi minimizzare la probabilità di trovarne una. Si riprendano le domande 3 e 4 in questo quadro.
>
> 6. Si propongano e si studino altre direzioni di ricerca.

![[src_tfjm_2018__Q04.png]]

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]], [[skill_stima|Stima e approssimazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*King cakes: given how many slices remain and how many beans have already been found, which cake to draw from in order to maximise or minimise the chance of finding one.*

> 4. King cakes
>
> At the school king-cake party there are $n$ cakes numbered from $1$ to $n$, each cut into $k$ slices, where $k$ and $n$ are integers $\geqslant 1$. Each cake starts with a single bean. Guillaume is late: when he arrives, $a_i$ slices remain in cake $i$, for every $1 \leqslant i \leqslant n$. Everyone who took a slice chose it uniformly at random from one of the cakes. Write $L$ for the number of beans already found before Guillaume arrives. Assume $a_1 \leqslant a_2 \leqslant \cdots \leqslant a_n$.
>
> 1. Compute $\mathbb{P}(L = \ell)$ for every integer $\ell \geqslant 0$. What is the expectation of $L$?
>
> 2. If Guillaume takes a slice at random from cake $i$, what is the probability that he finds a bean? From which cake should he draw in order to maximise his chances?
>
> Thomas, who has been there from the start, tells Guillaume that $\ell$ beans have been found, with $0 \leqslant \ell \leqslant n - 1$.
>
> 3. As a function of $\ell$, from which cake should Guillaume take a slice in order to have the best chance of finding a bean? What is that probability? One may treat the following cases:
> a) $n = 2$;
> b) $n = 3$;
> c) $\ell = 0$;
> d) $\ell = 1$;
> e) $\ell = n - 1$;
> f) $n$ and $\ell$ arbitrary, but every cake that has been started has the same number of slices left;
> g) $k = n$ and $a_i = i$ for every $i$;
> h) $n$ and $\ell$ arbitrary.
>
> 4. Assume now $a_1 < a_2 < \cdots < a_n$. A cake $i$ is useless if, whatever value $\ell$ Thomas gives, cake $i$ is never the one in which Guillaume has the best chance of finding a bean. As a function of $n$, can it happen that no cake is useless? That every cake but one is useless? What are the possible numbers of useless cakes?
>
> 5. Guillaume is very hungry and fears that slices containing a bean have less to eat. He therefore wants to minimise his chance of finding one. Answer questions 3 and 4 in this setting.
>
> 6. Propose and study other lines of inquiry.

![[src_tfjm_2018__Q04.png]]

**Topic:** [[topic_probabilita|Probability and statistics]], [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_casework|Case analysis]], [[method_conteggio|Combinatorial counting]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_casework_accurato|Careful case analysis]], [[skill_stima|Estimation and approximation]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_piana,topic_trigonometria,topic_geometria_analitica,method_trigonometria,method_coordinate,method_casework,method_simmetria,skill_ragionamento_geometrico,skill_astrazione,skill_casework_accurato"></span>

*Chaîne rouillée dont les angles orientés restent dans un intervalle : ensemble des points atteints par l’extrémité libre, et variante avec des angles proches de $\pi/2$.*

> 5. Chaîne rouillée
>
> Soient $n \in \mathbb{N}^{*}$ et $\alpha \in [0, \pi]$. Colin joue avec une chaîne rouillée. La chaîne est une suite de points $A_0, \ldots, A_n$, reliés par des maillons de longueur $1$. Autrement dit, pour tout $0 \leqslant i \leqslant n - 1$, on a $A_i A_{i+1} = 1$ (les segments $[A_i A_{i+1}]$ peuvent se croiser). Elle est fixée en $A_0$. La chaîne étant rouillée, l’angle entre deux maillons consécutifs ne peut prendre que certaines valeurs. Ainsi, pour tout $1 \leqslant i \leqslant n - 1$, l’angle orienté $\left(\overrightarrow{A_{i-1} A_i}, \overrightarrow{A_i A_{i+1}}\right)$ doit rester dans l’intervalle $[-\alpha, \alpha]$ (voir Figure 4). On note $\mathcal{B}_n^{\alpha}$ l’ensemble des points que peut atteindre l’extrémité $A_n$.
>
> Figure 4. Chaîne dont les angles sont bloqués entre $-\dfrac{\pi}{4}$ et $\dfrac{\pi}{4}$, avec $n = 6$. Les arcs de cercle représentent les angles possibles pour chaque maillon.
>
> 1. En fonction de $n$ et de $\alpha$, a-t-on $A_0 \in \mathcal{B}_n^{\alpha}$ ? On pourra étudier les cas suivants :
> a) $\alpha = \pi$ (chaîne non rouillée) ;
> b) $\alpha = \dfrac{\pi}{2}$ ;
> c) $n = 2$ ;
> d) $n = 3$ ;
> e) $n$ et $\alpha$ quelconques.
>
> 2. Décrire $\mathcal{B}_n^{\alpha}$ le plus précisément possible et calculer son aire dans les cas de la question 1.
>
> Dans les questions 3 et 4, le point $A_1$ est également fixé, à distance $1$ de $A_0$. On note $\mathcal{C}_n^{\alpha}$ l’ensemble des points que peut atteindre l’autre extrémité $A_n$.
>
> 3. Décrire $\mathcal{C}_n^{\alpha}$ dans les mêmes cas que pour la question 1.
>
> 4. En fonction de $n$ et de $\alpha$, quelles sont les valeurs possibles de l’angle orienté $\left(\overrightarrow{A_0 A_1}, \overrightarrow{A_1 A_n}\right)$ ? Est-il vrai que pour tous points $X, Y \in \mathcal{C}_n^{\alpha}$ tels que $A_1 X = A_1 Y$, il existe un arc de cercle centré en $A_1$, entre $X$ et $Y$, intégralement inclus dans $\mathcal{C}_n^{\alpha}$ ?
>
> 5. Soit $\varepsilon \in \left[0, \dfrac{\pi}{2}\right]$. Lassé de sa première chaîne, Colin en trouve une autre, bloquée avec des angles proches de $\dfrac{\pi}{2}$. Plus précisément, pour tout $1 \leqslant i \leqslant n - 1$, l’angle orienté $\left(\overrightarrow{A_{i-1} A_i}, \overrightarrow{A_i A_{i+1}}\right)$ doit rester dans
> $$I_{\varepsilon} = \left[\dfrac{\pi}{2} - \varepsilon, \dfrac{\pi}{2} + \varepsilon\right] \cup \left[-\dfrac{\pi}{2} - \varepsilon, -\dfrac{\pi}{2} + \varepsilon\right].$$
> Reprendre les questions 1 à 3 dans ce cadre.
>
> 6. Proposer et étudier d’autres directions de recherche.

![[src_tfjm_2018__Q05.png]]

**Topic:** [[topic_geometria_piana|Géométrie plane]], [[topic_trigonometria|Trigonométrie]], [[topic_geometria_analitica|Géométrie analytique]]
**Metodo:** [[method_trigonometria|Techniques trigonométriques]], [[method_coordinate|Méthode des coordonnées]], [[method_casework|Analyse par cas]], [[method_simmetria|Exploitation de la symétrie]]
**Abilita:** [[skill_ragionamento_geometrico|Raisonnement géométrique]], [[skill_astrazione|Abstraction / généralisation]], [[skill_casework_accurato|Analyse par cas soigneuse]]
**Area:** [[Geometria|Géométrie]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)



<span class="atom-split" id="q05__en" data-atom="q05__en" data-title="Q05__EN" data-tags=""></span>

---
tipo: quesito-translation
translation_of: src_tfjm_2018__Q05
lang: en
secondary: true
title: "Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018 — Question 5"
summary: "A rusty chain whose oriented angles stay in an interval: the set of points reached by the free end, and a variant with angles near $\\pi/2$."
topics: [topic_geometria_piana, topic_trigonometria, topic_geometria_analitica]
methods: [method_trigonometria, method_coordinate, method_casework, method_simmetria]
skills: [skill_ragionamento_geometrico, skill_astrazione, skill_casework_accurato]
tags: [kg/translation, topic/geometria_piana, topic/trigonometria, topic/geometria_analitica]---

*A rusty chain whose oriented angles stay in an interval: the set of points reached by the free end, and a variant with angles near $\pi/2$.*

> 5. Rusty chain
>
> Let $n \in \mathbb{N}^{*}$ and $\alpha \in [0, \pi]$. Colin plays with a rusty chain. The chain is a sequence of points $A_0, \ldots, A_n$, joined by links of length $1$. That is, $A_i A_{i+1} = 1$ for every $0 \leqslant i \leqslant n - 1$ (the segments $[A_i A_{i+1}]$ may cross). It is fixed at $A_0$. Because the chain is rusty, the angle between two consecutive links can take only certain values. For every $1 \leqslant i \leqslant n - 1$, the oriented angle $\left(\overrightarrow{A_{i-1} A_i}, \overrightarrow{A_i A_{i+1}}\right)$ must stay in the interval $[-\alpha, \alpha]$ (see Figure 4). Write $\mathcal{B}_n^{\alpha}$ for the set of points that the free end $A_n$ can reach.
>
> Figure 4. A chain whose angles are locked between $-\dfrac{\pi}{4}$ and $\dfrac{\pi}{4}$, with $n = 6$. The circular arcs show the possible angles of each link.
>
> 1. As a function of $n$ and $\alpha$, does one have $A_0 \in \mathcal{B}_n^{\alpha}$? One may study the following cases:
> a) $\alpha = \pi$ (the chain is not rusty);
> b) $\alpha = \dfrac{\pi}{2}$;
> c) $n = 2$;
> d) $n = 3$;
> e) $n$ and $\alpha$ arbitrary.
>
> 2. Describe $\mathcal{B}_n^{\alpha}$ as precisely as possible and compute its area in the cases of question 1.
>
> In questions 3 and 4 the point $A_1$ is also fixed, at distance $1$ from $A_0$. Write $\mathcal{C}_n^{\alpha}$ for the set of points that the other end $A_n$ can reach.
>
> 3. Describe $\mathcal{C}_n^{\alpha}$ in the same cases as in question 1.
>
> 4. As a function of $n$ and $\alpha$, what are the possible values of the oriented angle $\left(\overrightarrow{A_0 A_1}, \overrightarrow{A_1 A_n}\right)$? Is it true that for all points $X, Y \in \mathcal{C}_n^{\alpha}$ with $A_1 X = A_1 Y$, there is a circular arc centred at $A_1$, between $X$ and $Y$, that lies entirely in $\mathcal{C}_n^{\alpha}$?
>
> 5. Let $\varepsilon \in \left[0, \dfrac{\pi}{2}\right]$. Tired of his first rusty chain, Colin finds another, locked at angles near $\dfrac{\pi}{2}$. More precisely, for every $1 \leqslant i \leqslant n - 1$ the oriented angle $\left(\overrightarrow{A_{i-1} A_i}, \overrightarrow{A_i A_{i+1}}\right)$ must stay in
> $$I_{\varepsilon} = \left[\dfrac{\pi}{2} - \varepsilon, \dfrac{\pi}{2} + \varepsilon\right] \cup \left[-\dfrac{\pi}{2} - \varepsilon, -\dfrac{\pi}{2} + \varepsilon\right].$$
> Answer questions 1 to 3 in this setting.
>
> 6. Propose and study other lines of inquiry.

![[src_tfjm_2018__Q05.png]]

**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_trigonometria|Trigonometry]], [[topic_geometria_analitica|Coordinate geometry]]
**Metodo:** [[method_trigonometria|Trigonometric techniques]], [[method_coordinate|Coordinate method]], [[method_casework|Case analysis]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_astrazione|Abstraction / generalisation]], [[skill_casework_accurato|Careful case analysis]]
**Area:** [[Geometria|Geometry]]
[[Quesiti/src_tfjm_2018#q05|src_tfjm_2018__Q05]]



<span class="atom-split" id="q05__it" data-atom="q05__it" data-title="Q05__IT" data-tags=""></span>

---
tipo: quesito-translation
translation_of: src_tfjm_2018__Q05
lang: it
secondary: true
title: "Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018, quesito 5"
summary: "Catena arrugginita i cui angoli orientati restano in un intervallo: insieme dei punti raggiunti dall’estremo libero, e variante con angoli vicini a $\\pi/2$."
topics: [topic_geometria_piana, topic_trigonometria, topic_geometria_analitica]
methods: [method_trigonometria, method_coordinate, method_casework, method_simmetria]
skills: [skill_ragionamento_geometrico, skill_astrazione, skill_casework_accurato]
tags: [kg/translation, topic/geometria_piana, topic/trigonometria, topic/geometria_analitica]---

*Catena arrugginita i cui angoli orientati restano in un intervallo: insieme dei punti raggiunti dall’estremo libero, e variante con angoli vicini a $\pi/2$.*

> 5. Catena arrugginita
>
> Siano $n \in \mathbb{N}^{*}$ e $\alpha \in [0, \pi]$. Colin gioca con una catena arrugginita. La catena è una successione di punti $A_0, \ldots, A_n$, uniti da maglie di lunghezza $1$. In altre parole, $A_i A_{i+1} = 1$ per ogni $0 \leqslant i \leqslant n - 1$ (i segmenti $[A_i A_{i+1}]$ possono incrociarsi). È fissata in $A_0$. Essendo arrugginita, l’angolo tra due maglie consecutive può assumere solo certi valori. Per ogni $1 \leqslant i \leqslant n - 1$, l’angolo orientato $\left(\overrightarrow{A_{i-1} A_i}, \overrightarrow{A_i A_{i+1}}\right)$ deve restare nell’intervallo $[-\alpha, \alpha]$ (si veda la Figura 4). Si indica con $\mathcal{B}_n^{\alpha}$ l’insieme dei punti che può raggiungere l’estremo $A_n$.
>
> Figura 4. Catena i cui angoli sono bloccati tra $-\dfrac{\pi}{4}$ e $\dfrac{\pi}{4}$, con $n = 6$. Gli archi di circonferenza indicano gli angoli possibili di ogni maglia.
>
> 1. In funzione di $n$ e di $\alpha$, si ha $A_0 \in \mathcal{B}_n^{\alpha}$? Si possono studiare i casi seguenti:
> a) $\alpha = \pi$ (catena non arrugginita);
> b) $\alpha = \dfrac{\pi}{2}$;
> c) $n = 2$;
> d) $n = 3$;
> e) $n$ e $\alpha$ arbitrari.
>
> 2. Descrivere $\mathcal{B}_n^{\alpha}$ nel modo più preciso possibile e calcolarne l’area nei casi della domanda 1.
>
> Nelle domande 3 e 4 anche il punto $A_1$ è fissato, a distanza $1$ da $A_0$. Si indica con $\mathcal{C}_n^{\alpha}$ l’insieme dei punti che può raggiungere l’altro estremo $A_n$.
>
> 3. Descrivere $\mathcal{C}_n^{\alpha}$ negli stessi casi della domanda 1.
>
> 4. In funzione di $n$ e di $\alpha$, quali sono i valori possibili dell’angolo orientato $\left(\overrightarrow{A_0 A_1}, \overrightarrow{A_1 A_n}\right)$? È vero che per tutti i punti $X, Y \in \mathcal{C}_n^{\alpha}$ tali che $A_1 X = A_1 Y$ esiste un arco di circonferenza centrato in $A_1$, tra $X$ e $Y$, interamente contenuto in $\mathcal{C}_n^{\alpha}$?
>
> 5. Sia $\varepsilon \in \left[0, \dfrac{\pi}{2}\right]$. Stanco della prima catena, Colin ne trova un’altra, bloccata con angoli vicini a $\dfrac{\pi}{2}$. Più precisamente, per ogni $1 \leqslant i \leqslant n - 1$ l’angolo orientato $\left(\overrightarrow{A_{i-1} A_i}, \overrightarrow{A_i A_{i+1}}\right)$ deve restare in
> $$I_{\varepsilon} = \left[\dfrac{\pi}{2} - \varepsilon, \dfrac{\pi}{2} + \varepsilon\right] \cup \left[-\dfrac{\pi}{2} - \varepsilon, -\dfrac{\pi}{2} + \varepsilon\right].$$
> Si riprendano le domande 1, 2 e 3 in questo quadro.
>
> 6. Si propongano e si studino altre direzioni di ricerca.

![[src_tfjm_2018__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]], [[method_coordinate|Metodo delle coordinate]], [[method_casework|Analisi per casi]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]]
[[Quesiti/src_tfjm_2018#q05|src_tfjm_2018__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,topic_logica,method_casework,method_estremalita,method_backward,method_simmetria,skill_modellizzazione,skill_casework_accurato,skill_conteggio_sistematico,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="fr"></div>


*Bataille de cartes numérotées : selon qui commence et comment passe la main, combien de points chaque joueur peut s’assurer.*

> 6. Bataille corsée
>
> Igor et Sophia jouent aux cartes. Ils modifient les règles de la bataille. Ils disposent d’un jeu de $2n$ cartes numérotées de $1$ à $2n$, pour un certain $n \in \mathbb{N}^{*}$. Au début, Igor a les cartes impaires et Sophia les cartes paires. La partie dure $n$ tours. À chaque tour, l’un des deux joueurs choisit une de ses cartes, puis l’autre fait de même. Celui qui a joué le numéro le plus élevé marque un point, et les deux cartes sont défaussées.
>
> 1. Pour chacune des règles suivantes, quel est le plus grand nombre de points qu’Igor peut s’assurer de marquer ? On pourra commencer par de petites valeurs de $n$.
> a) Igor commence à chaque tour.
> b) Sophia commence à chaque tour.
> c) Igor commence au premier tour ; ensuite, le joueur qui vient de perdre le point commence.
> d) Même règle, mais Sophia commence au premier tour.
> e) Igor commence au premier tour ; ensuite, le joueur qui vient de gagner le point commence.
> f) Même règle, mais Sophia commence au premier tour.
>
> 2. Pour rendre le jeu équitable, chaque joueur possède initialement $n$ cartes numérotées de $1$ à $n$. Pour éviter les égalités, le second à jouer n’a pas le droit de jouer la même carte que le premier. Si c’est le dernier tour et qu’il n’a pas le choix, le dernier point n’est pas attribué. Reprendre la question 1 dans ce cadre.
>
> 3. Igor propose une nouvelle répartition. On joue de nouveau avec des cartes numérotées de $1$ à $2n$, mais la répartition initiale change. Igor veut être sûr de battre Sophia (avoir strictement plus de points qu’elle à la fin), et il veut que la somme de ses $n$ cartes soit la plus petite possible. Avec les règles de la question 1, estimer cette somme.
>
> 4. Proposer et étudier d’autres directions de recherche.

**Topic:** [[topic_combinatoria|Combinatoire]], [[topic_logica|Logique, jeux, stratégies]]
**Metodo:** [[method_casework|Analyse par cas]], [[method_estremalita|Principe d'extrémalité]], [[method_backward|Raisonnement à rebours]], [[method_simmetria|Exploitation de la symétrie]]
**Abilita:** [[skill_modellizzazione|Modélisation]], [[skill_casework_accurato|Analyse par cas soigneuse]], [[skill_conteggio_sistematico|Dénombrement systématique]], [[skill_riconoscimento_pattern|Reconnaissance de motifs]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)


<div class="qlang-split" data-lang="it"></div>


*Battaglia con carte numerate: secondo chi inizia e come passa la mano, quanti punti ciascun giocatore può garantirsi.*

> 6. Battaglia rinforzata
>
> Igor e Sophia giocano a carte e modificano le regole della battaglia. Hanno un mazzo di $2n$ carte numerate da $1$ a $2n$, per un certo $n \in \mathbb{N}^{*}$. All’inizio Igor ha le carte dispari e Sophia le carte pari. La partita dura $n$ turni. A ogni turno uno dei due sceglie una delle proprie carte, poi l’altro fa lo stesso. Chi ha giocato il numero più alto segna un punto, e le due carte si scartano.
>
> 1. Per ciascuna delle regole seguenti, qual è il massimo numero di punti che Igor può garantirsi? Si può cominciare da piccoli valori di $n$.
> a) Igor inizia ogni turno.
> b) Sophia inizia ogni turno.
> c) Igor inizia il primo turno; poi inizia chi ha appena perso il punto.
> d) La stessa regola, ma Sophia inizia il primo turno.
> e) Igor inizia il primo turno; poi inizia chi ha appena vinto il punto.
> f) La stessa regola, ma Sophia inizia il primo turno.
>
> 2. Per rendere il gioco equo, ciascun giocatore ha all’inizio $n$ carte numerate da $1$ a $n$. Per evitare i pareggi, il secondo a giocare non può giocare la stessa carta del primo. Se è l’ultimo turno e non ha scelta, l’ultimo punto non viene assegnato. Si riprenda la domanda 1 in questo quadro.
>
> 3. Igor propone una nuova ripartizione. Si gioca di nuovo con carte numerate da $1$ a $2n$, ma la ripartizione iniziale cambia. Igor vuole essere sicuro di battere Sophia (avere alla fine strettamente più punti di lei) e vuole che la somma delle sue $n$ carte sia la più piccola possibile. Con le regole della domanda 1, stimare questa somma.
>
> 4. Si propongano e si studino altre direzioni di ricerca.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]], [[method_backward|Ragionamento all'indietro]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*A numbered-card battle: according to who starts and how the lead passes, how many points each player can guarantee.*

> 6. A rougher battle
>
> Igor and Sophia play cards, and they change the rules of battle. They have a deck of $2n$ cards numbered from $1$ to $2n$, for some $n \in \mathbb{N}^{*}$. At the start Igor has the odd cards and Sophia the even cards. The game lasts $n$ turns. On each turn one player chooses one of his or her cards, then the other does the same. Whoever played the higher number scores a point, and both cards are discarded.
>
> 1. For each of the following rules, what is the greatest number of points Igor can guarantee? One may begin with small values of $n$.
> a) Igor starts every turn.
> b) Sophia starts every turn.
> c) Igor starts the first turn; thereafter, the player who has just lost the point starts.
> d) The same rule, but Sophia starts the first turn.
> e) Igor starts the first turn; thereafter, the player who has just won the point starts.
> f) The same rule, but Sophia starts the first turn.
>
> 2. To make the game fair, each player starts with $n$ cards numbered from $1$ to $n$. To avoid ties, the second player may not play the same card as the first. If it is the last turn and there is no choice, the last point is not awarded. Answer question 1 in this setting.
>
> 3. Igor proposes a new deal. One plays again with cards numbered from $1$ to $2n$, but the initial deal changes. Igor wants to be sure of beating Sophia (of having strictly more points than she does at the end), and he wants the sum of his $n$ cards to be as small as possible. Under the rules of question 1, estimate this sum.
>
> 4. Propose and study other lines of inquiry.

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]], [[method_estremalita|Extremal principle]], [[method_backward|Working backwards]], [[method_simmetria|Using symmetry]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_casework_accurato|Careful case analysis]], [[skill_conteggio_sistematico|Systematic counting]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_combinatoria,topic_aritmetica,topic_geometria_analitica,method_casework,method_congruenze,method_coordinate,method_conteggio,method_grafi,skill_modellizzazione,skill_riconoscimento_pattern,skill_casework_accurato,skill_astrazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Cavalier de type $(a, b)$ sur l’échiquier $\mathbb{Z}^2$ : cases atteignables, nombre minimal de coups, et cases irrégulières.*

> 7. Le cavalier s’entête
>
> Ada étudie les déplacements de sa pièce préférée, le cavalier, sur un échiquier infini dont les cases sont indexées par $\mathbb{Z}^{2}$. Soient $a$ et $b$ deux entiers tels que $0 < a \leqslant b$. Le cavalier de type $(a, b)$ se déplace, à chaque coup, de $a$ cases parallèlement à un axe, puis de $b$ cases dans une direction perpendiculaire. Le cavalier usuel est le cavalier de type $(1, 2)$. Il part de la case $(0, 0)$.
>
> 1. En fonction de $a$ et $b$, le cavalier de type $(a, b)$ peut-il atteindre toutes les cases de l’échiquier infini ? On pourra s’intéresser aux valeurs suivantes :
> a) $(1, 1)$ ;
> b) $(1, 2)$ ;
> c) $(1, 3)$ ;
> d) $(2, 3)$ ;
> e) $(a, b)$ quelconques.
>
> La question b) est étudiée dans l’article *Counting the Number of Squares Reachable in $k$ Knight’s Moves*, de A. Miller et D. Farnsworth. Elle ne sera pas prise en compte dans l’évaluation, mais il est recommandé de la traiter pour comprendre les enjeux du problème.
>
> Sur chaque case, Ada écrit le nombre minimal de coups pour s’y rendre depuis $(0, 0)$. Si la case est inatteignable, elle écrit $\infty$. Dans les questions suivantes, on pourra commencer par les cavaliers de la question 1.
>
> 2. Ada note $u_k$ le nombre de cases portant le nombre $k$. Encadrer la suite $(u_k)$. Comment se comporte-t-elle quand $k \to +\infty$ ? Est-elle croissante ?
>
> 3. Dans les différents cas, que vaut le nombre écrit sur la case $(0, 1)$ ? Proposer un encadrement.
>
> 4. Une case $c$ est régulière si, pour toute case $c'$ voisine de $c$, la différence entre les nombres écrits sur $c$ et sur $c'$ vaut exactement $1$. Combien y a-t-il de cases qui ne sont pas régulières ? Si ce nombre est fini, l’estimer. Sinon, quelle est la plus grande différence entre deux cases voisines que l’on peut observer une infinité de fois ?
>
> 5. Pour $n \in \mathbb{N}^{*}$, Ada note $B_n$ l’ensemble des cases $(x, y)$ avec $x, y \in \mathbb{Z}$ et $|x|, |y| \leqslant n$. Le temps d’intervention dans $B_n$ d’un cavalier est le plus grand nombre écrit sur les cases de $B_n$. Pour quelles valeurs de $(a, b)$ ce temps est-il minimal ? Ada note $T_n$ cette valeur. Estimer $T_n$ en fonction de $n$.
>
> 6. Proposer et étudier d’autres directions de recherche.

**Topic:** [[topic_combinatoria|Combinatoire]], [[topic_aritmetica|Arithmétique / théorie des nombres]], [[topic_geometria_analitica|Géométrie analytique]]
**Metodo:** [[method_casework|Analyse par cas]], [[method_congruenze|Arithmétique modulaire / congruences]], [[method_coordinate|Méthode des coordonnées]], [[method_conteggio|Dénombrement]], [[method_grafi|Théorie des graphes]]
**Abilita:** [[skill_modellizzazione|Modélisation]], [[skill_riconoscimento_pattern|Reconnaissance de motifs]], [[skill_casework_accurato|Analyse par cas soigneuse]], [[skill_astrazione|Abstraction]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]], [[Aritmetica e Teoria dei Numeri|Arithmétique et théorie des nombres]], [[Geometria|Géométrie]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)


<div class="qlang-split" data-lang="it"></div>


*Cavallo di tipo $(a, b)$ sulla scacchiera $\mathbb{Z}^2$: case raggiungibili, numero minimo di mosse e case irregolari.*

> 7. Il cavallo insiste
>
> Ada studia gli spostamenti del suo pezzo preferito, il cavallo, su una scacchiera infinita le cui case sono indicizzate da $\mathbb{Z}^{2}$. Siano $a$ e $b$ due interi tali che $0 < a \leqslant b$. Il cavallo di tipo $(a, b)$ si sposta, a ogni mossa, di $a$ case parallelamente a un asse e poi di $b$ case in una direzione perpendicolare. Il cavallo usuale è quello di tipo $(1, 2)$. Parte dalla casa $(0, 0)$.
>
> 1. In funzione di $a$ e $b$, il cavallo di tipo $(a, b)$ può raggiungere tutte le case della scacchiera infinita? Si possono considerare i valori seguenti:
> a) $(1, 1)$;
> b) $(1, 2)$;
> c) $(1, 3)$;
> d) $(2, 3)$;
> e) $(a, b)$ arbitrari.
>
> La domanda b) è studiata nell’articolo *Counting the Number of Squares Reachable in $k$ Knight’s Moves*, di A. Miller e D. Farnsworth. Non sarà tenuta in conto nella valutazione, ma conviene trattarla per capire i termini del problema.
>
> Su ogni casa Ada scrive il minimo numero di mosse per arrivarci da $(0, 0)$. Se la casa non è raggiungibile, scrive $\infty$. Nelle domande seguenti si può cominciare dai cavalli della domanda 1.
>
> 2. Ada indica con $u_k$ il numero di case che portano il numero $k$. Stimare la successione $(u_k)$. Come si comporta quando $k \to +\infty$? È crescente?
>
> 3. Nei vari casi, quanto vale il numero scritto sulla casa $(0, 1)$? Proporre una stima.
>
> 4. Una casa $c$ è regolare se, per ogni casa $c'$ vicina di $c$, la differenza tra i numeri scritti su $c$ e su $c'$ vale esattamente $1$. Quante case non sono regolari? Se questo numero è finito, stimarlo. Altrimenti, qual è la massima differenza tra due case vicine che si può osservare infinite volte?
>
> 5. Per $n \in \mathbb{N}^{*}$, Ada indica con $B_n$ l’insieme delle case $(x, y)$ con $x, y \in \mathbb{Z}$ e $|x|, |y| \leqslant n$. Il tempo di intervento di un cavallo in $B_n$ è il massimo numero scritto sulle case di $B_n$. Per quali valori di $(a, b)$ questo tempo è minimo? Ada indica con $T_n$ questo valore. Stimare $T_n$ in funzione di $n$.
>
> 6. Si propongano e si studino altre direzioni di ricerca.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_congruenze|Aritmetica modulare / congruenze]], [[method_coordinate|Metodo delle coordinate]], [[method_conteggio|Conteggio combinatorio]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]], [[Geometria]]


<div class="qlang-split" data-lang="en"></div>


*A knight of type $(a, b)$ on the board $\mathbb{Z}^2$: reachable squares, minimal number of moves, and irregular squares.*

> 7. The stubborn knight
>
> Ada studies the moves of her favourite piece, the knight, on an infinite chessboard whose squares are indexed by $\mathbb{Z}^{2}$. Let $a$ and $b$ be integers with $0 < a \leqslant b$. A knight of type $(a, b)$ moves, on each turn, $a$ squares parallel to one axis and then $b$ squares in a perpendicular direction. The ordinary knight is the knight of type $(1, 2)$. It starts on the square $(0, 0)$.
>
> 1. As a function of $a$ and $b$, can a knight of type $(a, b)$ reach every square of the infinite board? One may look at the following values:
> a) $(1, 1)$;
> b) $(1, 2)$;
> c) $(1, 3)$;
> d) $(2, 3)$;
> e) $(a, b)$ arbitrary.
>
> Question b) is studied in the article *Counting the Number of Squares Reachable in $k$ Knight’s Moves*, by A. Miller and D. Farnsworth. It will not be taken into account in the marking, but it is recommended, in order to understand what is at stake.
>
> On each square Ada writes the least number of moves needed to reach it from $(0, 0)$. If the square cannot be reached, she writes $\infty$. In the following questions one may begin with the knights of question 1.
>
> 2. Ada writes $u_k$ for the number of squares labelled $k$. Bound the sequence $(u_k)$. How does it behave as $k \to +\infty$? Is it increasing?
>
> 3. In the various cases, what number is written on the square $(0, 1)$? Give a bound.
>
> 4. A square $c$ is regular if, for every square $c'$ adjacent to $c$, the numbers written on $c$ and on $c'$ differ by exactly $1$. How many squares are not regular? If that number is finite, estimate it. Otherwise, what is the greatest difference between two adjacent squares that one can observe infinitely often?
>
> 5. For $n \in \mathbb{N}^{*}$, Ada writes $B_n$ for the set of squares $(x, y)$ with $x, y \in \mathbb{Z}$ and $|x|, |y| \leqslant n$. The intervention time of a knight in $B_n$ is the greatest number written on a square of $B_n$. For which values of $(a, b)$ is this time minimal? Ada writes $T_n$ for that value. Estimate $T_n$ as a function of $n$.
>
> 6. Propose and study other lines of inquiry.

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_aritmetica|Arithmetic / Number theory]], [[topic_geometria_analitica|Coordinate geometry]]
**Metodo:** [[method_casework|Case analysis]], [[method_congruenze|Modular arithmetic / congruences]], [[method_coordinate|Coordinate method]], [[method_conteggio|Combinatorial counting]], [[method_grafi|Graph theory]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_riconoscimento_pattern|Pattern recognition]], [[skill_casework_accurato|Careful case analysis]], [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Geometria|Geometry]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_combinatoria,topic_logica,method_casework,method_estremalita,method_conteggio,method_grafi,skill_conteggio_sistematico,skill_casework_accurato,skill_modellizzazione,skill_stima"></span>

<div class="qlang-switch" data-default="fr"></div>


*Championnat aller simple en $T(n)$ journées : totaux de points possibles à chaque rang, et jusqu’à quand le classement final peut rester incertain.*

> 8. Championnats avec suspens
>
> Soit $n \geqslant 2$ un entier. Vincent veut organiser un championnat entre $n$ joueurs. Chaque joueur affronte tous les autres exactement une fois, et chaque joueur joue au plus une partie par jour. Il note $T(n)$ le nombre minimal de journées nécessaires.
>
> 1. Combien vaut $T(n)$ ?
>
> Chaque match a un gagnant et un perdant. Le gagnant marque $1$ point et le perdant $0$. À la fin, Vincent classe les joueurs par nombre de points décroissant. En cas d’égalité, un tirage au sort décide : les joueurs à égalité peuvent donc être classés dans n’importe quel ordre.
>
> 2. Soit $1 \leqslant k \leqslant n$. Quel est le plus grand nombre de points que peut avoir le $k$-ième du classement final ? Le plus petit ?
>
> Dans la suite, le championnat est toujours organisé en exactement $T(n)$ journées (la façon de l’organiser peut varier). Vincent aime que le suspens sur le classement final dure aussi longtemps que possible.
>
> 3. Après $j$ journées, un joueur sait que, quels que soient les résultats restants, il sera premier du classement final. Estimer le plus petit $j$ pour lequel c’est possible.
>
> 4. On fixe $1 \leqslant k \leqslant n$. Reprendre la question précédente pour un joueur qui sait qu’il sera classé $k$-ième.
>
> 5. Juste avant la dernière journée, $p$ joueurs connaissent déjà avec certitude leur classement final. Quelle est la plus grande valeur possible de $p$ ? Et si l’on remplace « avant la dernière journée » par « après $j$ journées » ?
>
> 6. Juste avant la dernière journée, Vincent dresse la liste de tous les classements finaux encore possibles, et note $L$ leur nombre. Quelle est la plus grande valeur possible de $L$ ? Et la plus petite ?
>
> 7. Proposer et étudier d’autres pistes. On pourra par exemple envisager des matchs nuls, qui rapportent $a$ points avec $0 \leqslant a \leqslant 1$.

**Topic:** [[topic_combinatoria|Combinatoire]], [[topic_logica|Logique, jeux, stratégies]]
**Metodo:** [[method_casework|Analyse par cas]], [[method_estremalita|Principe d'extrémalité]], [[method_conteggio|Dénombrement]], [[method_grafi|Théorie des graphes]]
**Abilita:** [[skill_conteggio_sistematico|Dénombrement systématique]], [[skill_casework_accurato|Analyse par cas soigneuse]], [[skill_modellizzazione|Modélisation]], [[skill_stima|Estimation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)


<div class="qlang-split" data-lang="it"></div>


*Campionato all’italiana in $T(n)$ giornate: punteggi possibili a ogni posto, e fino a quando la classifica finale può restare incerta.*

> 8. Campionati con il suspense
>
> Sia $n \geqslant 2$ un intero. Vincent vuole organizzare un campionato tra $n$ giocatori. Ogni giocatore affronta tutti gli altri esattamente una volta, e ogni giocatore disputa al più una partita al giorno. Si indica con $T(n)$ il minimo numero di giornate necessarie.
>
> 1. Quanto vale $T(n)$?
>
> Ogni partita ha un vincitore e un perdente. Il vincitore segna $1$ punto e il perdente $0$. Alla fine Vincent classifica i giocatori per numero di punti decrescente. In caso di parità decide un sorteggio: i giocatori a pari punti possono quindi comparire in qualunque ordine.
>
> 2. Sia $1 \leqslant k \leqslant n$. Qual è il massimo numero di punti che può avere il $k$-esimo della classifica finale? E il minimo?
>
> Nel seguito il campionato è sempre organizzato in esattamente $T(n)$ giornate (il modo di organizzarlo può variare). Vincent vuole che l’incertezza sulla classifica finale duri il più a lungo possibile.
>
> 3. Dopo $j$ giornate, un giocatore sa che, qualunque sia l’esito delle giornate restanti, sarà primo. Stimare il minimo $j$ per cui questo è possibile.
>
> 4. Si fissi $1 \leqslant k \leqslant n$. Si riprenda la domanda precedente per un giocatore che sa di arrivare $k$-esimo.
>
> 5. Appena prima dell’ultima giornata, $p$ giocatori conoscono già con certezza il proprio posto finale. Qual è il massimo valore possibile di $p$? E se si sostituisce «prima dell’ultima giornata» con «dopo $j$ giornate»?
>
> 6. Appena prima dell’ultima giornata, Vincent elenca tutte le classifiche finali ancora possibili e indica con $L$ il loro numero. Qual è il massimo valore possibile di $L$? E il minimo?
>
> 7. Si propongano e si studino altre piste. Si possono per esempio ammettere i pareggi, che danno $a$ punti con $0 \leqslant a \leqslant 1$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_estremalita|Principio di estremalita]], [[method_conteggio|Conteggio combinatorio]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_stima|Stima e approssimazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*A single round-robin in $T(n)$ days: possible point totals at each rank, and how long the final ranking can stay undecided.*

> 8. Championships with suspense
>
> Let $n \geqslant 2$ be an integer. Vincent wants to organise a championship among $n$ players. Each player meets every other player exactly once, and each player plays at most one match a day. Write $T(n)$ for the least number of days needed.
>
> 1. What is $T(n)$?
>
> Every match has a winner and a loser. The winner scores $1$ point and the loser $0$. At the end Vincent ranks the players by decreasing number of points. Ties are broken by lot: tied players may therefore appear in any order.
>
> 2. Let $1 \leqslant k \leqslant n$. What is the greatest number of points the $k$-th player in the final ranking can have? The least?
>
> From now on the championship is always organised in exactly $T(n)$ days (the schedule may vary). Vincent likes the final ranking to stay in doubt for as long as possible.
>
> 3. After $j$ days, one player knows that, whatever the remaining results, he will finish first. Estimate the least $j$ for which this is possible.
>
> 4. Fix $1 \leqslant k \leqslant n$. Answer the previous question for a player who knows that he will finish $k$-th.
>
> 5. Just before the last day, $p$ players already know their final rank with certainty. What is the greatest possible value of $p$? And if one replaces «before the last day» by «after $j$ days»?
>
> 6. Just before the last day, Vincent lists every final ranking that is still possible, and writes $L$ for the number of such rankings. What is the greatest possible value of $L$? And the least?
>
> 7. Propose and study other lines of inquiry. One may, for instance, allow draws, which score $a$ points with $0 \leqslant a \leqslant 1$.

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]], [[method_estremalita|Extremal principle]], [[method_conteggio|Combinatorial counting]], [[method_grafi|Graph theory]]
**Abilita:** [[skill_conteggio_sistematico|Systematic counting]], [[skill_casework_accurato|Careful case analysis]], [[skill_modellizzazione|Modelling / translating the text]], [[skill_stima|Estimation and approximation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_combinatoria,topic_logica,method_casework,method_invarianti,method_backward,method_simmetria,method_grafi,skill_modellizzazione,skill_casework_accurato,skill_astrazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Jeu d’allumage de torches : on ne peut pas répéter une configuration déjà vue, et l’on cherche qui a une stratégie gagnante.*

> 9. Allumer le feu
>
> Soit $n \in \mathbb{N}^{*}$. Gabrielle et Marie ont devant elles $n$ torches, chacune allumée ou éteinte. Au départ, toutes sont éteintes. À son tour, en commençant par Gabrielle, une joueuse active une torche : elle change son état. Il est interdit d’obtenir une configuration déjà obtenue. La première qui ne peut plus jouer a perdu.
>
> Figure 5. Début de partie. Au dernier dessin, c’est au tour de Marie. Elle ne peut ni éteindre la première torche ni rallumer la deuxième (on retrouverait une configuration déjà vue), mais elle peut allumer la troisième.
>
> Dans la question 1 seulement, les deux joueuses collaborent, et l’on ne cherche pas qui gagne.
>
> 1. Peuvent-elles obtenir toutes les configurations possibles des $n$ torches au cours d’une même partie ? Quand c’est possible, sur quelles configurations la partie peut-elle s’achever ?
>
> 2. Désormais elles jouent l’une contre l’autre. Laquelle a une stratégie gagnante ?
>
> 3. Soit $1 \leqslant k \leqslant n - 1$. Pour ne pas avoir trop chaud, elles s’interdisent d’avoir strictement plus de $k$ torches allumées en même temps. Reprendre la question 2 dans ce cadre.
>
> 4. Elles doivent maintenant activer exactement $a$ torches à chaque tour, pour un entier $a$ fixé, sans activer aucune des torches qui viennent de changer d’état. Reprendre les questions 2 et 3. On pourra commencer par $a = 2$ et $a = 3$.
>
> 5. Même question, mais Gabrielle active $a$ torches par tour et Marie $b$ torches par tour, pour deux entiers fixés $a$ et $b$.
>
> 6. Proposer et étudier d’autres directions de recherche.

**Topic:** [[topic_combinatoria|Combinatoire]], [[topic_logica|Logique, jeux, stratégies]]
**Metodo:** [[method_casework|Analyse par cas]], [[method_invarianti|Invariants / monovariants]], [[method_backward|Raisonnement à rebours]], [[method_simmetria|Exploitation de la symétrie]], [[method_grafi|Théorie des graphes]]
**Abilita:** [[skill_modellizzazione|Modélisation]], [[skill_casework_accurato|Analyse par cas soigneuse]], [[skill_astrazione|Abstraction / généralisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatoire, logique et probabilités]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)


<div class="qlang-split" data-lang="it"></div>


*Gioco di accensione delle torce: non si può ripetere una configurazione già vista, e si chiede chi ha una strategia vincente.*

> 9. Accendere il fuoco
>
> Sia $n \in \mathbb{N}^{*}$. Gabrielle e Marie hanno davanti $n$ torce, ciascuna accesa o spenta. All’inizio sono tutte spente. Al proprio turno, a cominciare da Gabrielle, una giocatrice attiva una torcia: ne cambia lo stato. È vietato ottenere una configurazione già vista. La prima che non può più giocare ha perso.
>
> Figura 5. Inizio di partita. Nell’ultimo disegno tocca a Marie. Non può né spegnere la prima torcia né riaccendere la seconda (si ritroverebbe una configurazione già vista), ma può accendere la terza.
>
> Solo nella domanda 1 le due giocano insieme, e non si chiede chi vince.
>
> 1. Possono ottenere tutte le configurazioni possibili delle $n$ torce nel corso di una stessa partita? Quando è possibile, su quali configurazioni la partita può chiudersi?
>
> 2. Ora giocano l’una contro l’altra. Quale delle due ha una strategia vincente?
>
> 3. Sia $1 \leqslant k \leqslant n - 1$. Per non avere troppo caldo, si vietano di avere strettamente più di $k$ torce accese nello stesso momento. Si riprenda la domanda 2 in questo quadro.
>
> 4. Devono ora attivare esattamente $a$ torce a ogni turno, per un intero $a$ fissato, senza attivare nessuna delle torce che hanno appena cambiato stato. Si riprendano le domande 2 e 3. Si può cominciare da $a = 2$ e $a = 3$.
>
> 5. La stessa domanda, ma Gabrielle attiva $a$ torce per turno e Marie $b$ torce per turno, per due interi fissati $a$ e $b$.
>
> 6. Si propongano e si studino altre direzioni di ricerca.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_invarianti|Invarianti / monovarianti]], [[method_backward|Ragionamento all'indietro]], [[method_simmetria|Sfruttamento della simmetria]], [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*A torch-lighting game: a configuration already seen may not be repeated, and one asks who has a winning strategy.*

> 9. Light the fire
>
> Let $n \in \mathbb{N}^{*}$. Gabrielle and Marie have $n$ torches in front of them, each either lit or out. At the start all are out. On her turn, Gabrielle starting, a player activates one torch: she changes its state. It is forbidden to reach a configuration already seen. The first who cannot move loses.
>
> Figure 5. The start of a game. In the last picture it is Marie’s turn. She can neither put out the first torch nor relight the second (that would repeat a configuration already seen), but she can light the third.
>
> In question 1 only, the two players cooperate, and one does not ask who wins.
>
> 1. Can they reach every possible configuration of the $n$ torches in a single game? When this is possible, on which configurations can the game end?
>
> 2. They now play against each other. Which of them has a winning strategy?
>
> 3. Let $1 \leqslant k \leqslant n - 1$. So as not to get too hot, they forbid themselves from having strictly more than $k$ torches lit at once. Answer question 2 in this setting.
>
> 4. They must now activate exactly $a$ torches on each turn, for a fixed integer $a$, and they may not activate any torch that has just changed state. Answer questions 2 and 3. One may begin with $a = 2$ and $a = 3$.
>
> 5. The same question, but Gabrielle activates $a$ torches per turn and Marie $b$ torches per turn, for two fixed integers $a$ and $b$.
>
> 6. Propose and study other lines of inquiry.

**Topic:** [[topic_combinatoria|Combinatorics]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Case analysis]], [[method_invarianti|Invariants / monovariants]], [[method_backward|Working backwards]], [[method_simmetria|Using symmetry]], [[method_grafi|Graph theory]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_casework_accurato|Careful case analysis]], [[skill_astrazione|Abstraction / generalisation]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
