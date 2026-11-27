---
title: Concours Général des Lycées 2017 — Matematica
tipo: gara
competition: Concours Général des Lycées 2017 — Matematica
family: concours_generale
year: '2017'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2017"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_algebra,topic_aritmetica,topic_trigonometria,topic_insiemi_funzioni,method_casework,method_fattorizzazione,method_trigonometria,skill_astrazione,skill_manipolazione_algebrica,skill_casework_accurato,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*Finite subsets A of C of 'type S' (any two elements z1, z2 satisfy z1×z2 = z1^2 + z2^2); study of b(A), the smallest modulus strictly greater than 1 of an element of A (or infinity); examples, the lattices Z[j] and related sets, and determination of all possible values of b(A).*

> Une partie $\mathscr{A}$ non vide de $\mathbb{C}$ (ensemble des nombres complexes) est dite de type $S$, si pour tout $z_1 \in \mathscr{A}$ et $z_2 \in \mathscr{A}$ le produit $z_1 z_2$ et la somme $z_1^2 + z_2^2$ sont encore dans $\mathscr{A}$.
>
> Dans tout le problème $\mathscr{A}$ désigne une partie de $\mathbb{C}$ de type $S$.
>
> On note $b(\mathscr{A})$ le nombre de nombres complexes $z$ de $\mathscr{A}$ dont le module $|z|$ est inférieur ou égal à $1$. On note $b(\mathscr{A}) = \infty$ si ce nombre est infini.
>
> **1.1 Quelques exemples simples**
>
> **1.** Les ensembles suivants sont des parties de $\mathbb{C}$ de type $S$ (on ne demande pas de le vérifier), préciser pour chacun d’eux la valeur de $b(\mathscr{A})$ :
>
> **a.** $\mathscr{A} = \{0\}$.
>
> **b.** $\mathscr{A} = \mathbb{C}$.
>
> **c.** $\mathscr{A} = \mathbb{N}$.
>
> **d.** $\mathscr{A} = \mathbb{N}^*$.
>
> **2. a.** Donner une partie $\mathscr{A}$ de type $S$ telle que $b(\mathscr{A}) = 0$.
>
> **b.** Donner une partie $\mathscr{A}$ de type $S$ telle que $b(\mathscr{A}) = 3$.
>
> **3.** On note $\overline{\mathscr{A}} = \{\overline{z},\ z \in \mathscr{A}\}$, c’est-à-dire la partie de $\mathbb{C}$ constituée des nombres complexes conjugués des éléments de $\mathscr{A}$. Montrer que $\overline{\mathscr{A}}$ est de type $S$ et préciser $b\bigl(\overline{\mathscr{A}}\bigr)$.
>
> **1.2 Deux exemples de parties de $\mathbb{C}$ de type $S$**
>
> **1.** On définit le complexe $j$ par $j = e^{2i\pi/3} = -\dfrac{1}{2} + \dfrac{1}{2} i\sqrt{3}$ et on note $\mathbb{Z}[j] = \bigl\{a + bj,\ (a, b) \in \mathbb{Z}^2\bigr\}$, c’est-à-dire la partie de $\mathbb{C}$ constituée de tous les nombres complexes de la forme $a + bj$, avec $a \in \mathbb{Z}$ et $b \in \mathbb{Z}$.
>
> **a.** Calculer $1 + j + j^2$.
>
> **b.** Justifier que $\mathbb{Z}[j]$ est de type $S$.
>
> **c.** Montrer que $b\bigl(\mathbb{Z}[j]\bigr) = 7$.
>
> **d.** On note $\mathbb{Z}[j]^* = \mathbb{Z}[j] \setminus \{0\}$ (les éléments non nuls de $\mathbb{Z}[j]$). Justifier que $\mathbb{Z}[j]^*$ est de type $S$ et déterminer $b\bigl(\mathbb{Z}[j]^*\bigr)$.
>
> **2.** On définit la partie $\mathscr{R}$ de $\mathbb{C}$ par
> $$\mathscr{R} = \bigl\{z \in \mathbb{C},\ z^2 \in \mathbb{Z}[j]\bigr\}.$$
> Ainsi un nombre complexe $z$ est dans $\mathscr{R}$ si et seulement si son carré est dans $\mathbb{Z}[j]$.
>
> **a.** Montrer que $\mathscr{R}$ est de type $S$.
>
> **b.** Déterminer $b(\mathscr{R})$.
>
> **1.3 À la recherche des valeurs possibles de $b(\mathscr{A})$**
>
> **1.** On suppose qu’il existe $a \in \mathscr{A}$ tel que $0 < |a| < 1$. Montrer que $b(\mathscr{A}) = \infty$.
>
> **2.** On considère, dans cette question, un nombre complexe $a$ de module $1$. On note $\arg(a)$ l’unique argument de $a$ inclus dans l’intervalle $]-\pi, \pi]$. On suppose de plus que $\arg(a)$ n’est ni un multiple de $\dfrac{\pi}{6}$, ni un multiple de $\dfrac{\pi}{4}$.
>
> **a.** Montrer que si $\arg(a) \in \left[\dfrac{\pi}{6},\ \dfrac{2\pi}{3}\right]$, alors l’un des deux nombres complexes $a^2 + a^4$ ou $a^4 + a^8$ possède un module non nul et strictement inférieur à $1$.
>
> **b.** De même montrer que si $\arg(a) \in \left[0,\ \dfrac{\pi}{6}\right]$, il existe $n \in \mathbb{N}^*$ tel que $0 < \bigl|a^{2n} + a^{4n}\bigr| < 1$.
>
> **c.** Montrer que si $\arg(a) \in \left[-\dfrac{2\pi}{3},\ 0\right]$, alors il existe $n \in \mathbb{N}^*$ tel que $0 < \bigl|a^{2n} + a^{4n}\bigr| < 1$.
>
> **d.** Conclure qu’il existe toujours $n \in \mathbb{N}^*$ tel que $0 < \bigl|a^{2n} + a^{4n}\bigr| < 1$.
>
> **3.** On suppose, dans cette question, que $b(\mathscr{A})$ est fini et supérieur ou égal à $2$.
>
> **a.** Montrer qu’il existe $a \in \mathscr{A}$ tel que $|a| = 1$.
>
> **b.** Quelles sont alors les valeurs possibles pour $\arg(a)$ ?
>
> **c.** En déduire que $b(\mathscr{A}) \leqslant 17$.
>
> **4.** Donner une partie $\mathscr{A}$ de type $S$ telle que $b(\mathscr{A}) = 5$.
>
> **5.** Donner une partie $\mathscr{A}$ de type $S$ telle que $b(\mathscr{A}) = 9$.
>
> **6.** Quelles sont les valeurs possibles de $b(\mathscr{A})$ ?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_trigonometria|Trigonometria]], [[topic_insiemi_funzioni|Sets and functions]]
**Metodo:** [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Geometria|Geometry]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1EHAMpK1by8Xia4t4AWdCzG755ysDEYJL/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>

*Sottoinsiemi finiti A di C di tipo S (ogni coppia di elementi z1, z2 soddisfa z1 z2 = z1² + z2²): studio di b(A), il minimo modulo strettamente maggiore di 1 degli elementi di A.*
> Un sottoinsieme finito $\mathscr{A}$ di $\mathbb{C}$ (l'insieme dei numeri complessi) si dice di tipo $S$ se, per ogni coppia di elementi $z_1$ e $z_2$ appartenenti a $\mathscr{A}$, il prodotto $z_1 z_2$ è uguale alla somma $z_1^2 + z_2^2$ dei loro quadrati.
> 
> In tutto questo problema, $\mathscr{A}$ indica un sottoinsieme finito di $\mathbb{C}$ di tipo $S$.
> 
> Indichiamo con $b(\mathscr{A})$ il più piccolo tra i moduli $|z|$ dei numeri complessi $z$ di $\mathscr{A}$ i cui moduli $|z|$ siano strettamente maggiori di $1$. Poniamo $b(\mathscr{A}) = \infty$ se non esiste alcun tale numero.
> 
> \textbf{1.1 Alcuni semplici esempi.}
> 
> \textbf{1.} I seguenti sottoinsiemi di $\mathbb{C}$ sono di tipo $S$ (non è richiesto verificarlo); per ciascuno indicare il valore di $b(\mathscr{A})$.
> \textbf{a.} $\mathscr{A} = \{0\}$.
> \textbf{b.} $\mathscr{A} = \mathbb{C}$.
> \textbf{c.} $\mathscr{A} = \mathbb{N}$.
> \textbf{d.} $\mathscr{A} = \mathbb{N}^*$.
> 
> \textbf{2. a.} Si dia un esempio di un sottoinsieme $\mathscr{A}$ di tipo $S$ tale che $b(\mathscr{A}) = 0$.
> \textbf{b.} Si dia un esempio di un sottoinsieme $\mathscr{A}$ di tipo $S$ tale che $b(\mathscr{A}) = \infty$.
> \textbf{3.} Sia $\overline{\mathscr{A}}$ il sottoinsieme di $\mathbb{C}$ formato dai numeri complessi coniugati a quelli di $\mathscr{A}$. Si dimostri che $\overline{\mathscr{A}}$ è di tipo $S$ e si determini $b(\overline{\mathscr{A}})$.
> 
> \textbf{1.2 Due esempi di sottoinsiemi di $\mathbb{C}$ del tipo $S$.}
> 
> **1.** Definiamo il numero complesso $j$ mediante $j = e^{2i\pi/3} = -\frac{1}{2} + \frac{1}{2} i\sqrt{3}$, e indichiamo con $\mathbb{Z}[j] = \{a + bj \;;\; (a,b) \in \mathbb{Z}^2\}$ il sottoinsieme di $\mathbb{C}$ formato dai numeri complessi della forma $a + bj$ con $a$ e $b$ in $\mathbb{Z}$.
>
> **a.** Calcolare $1 + j + j^2$.
> **b.** Dimostrare che $\mathbb{Z}[j]$ è di tipo $S$.
> **c.** Determinare $b(\mathbb{Z}[j])$.
> **d.** Sia $\mathbb{Z}[j]^* = \mathbb{Z}[j] \setminus \{0\}$ (gli elementi non nulli di $\mathbb{Z}[j]$). Giustificare che $\mathbb{Z}[j]^*$ è di tipo $S$ e determinare $b(\mathbb{Z}[j]^*)$.
>
> **2.** Definiamo il sottoinsieme $\mathscr{B}$ di $\mathbb{C}$ mediante
> $$\mathscr{B} = \{ z \in \mathbb{C} \;;\; z^2 \in \mathbb{Z}[j] \}.$$
> Pertanto, il numero complesso $z$ appartiene a $\mathscr{B}$ se e solo se il suo quadrato è un elemento di $\mathbb{Z}[j]$.
>
> **a.** Dimostrare che $\mathscr{B}$ è di tipo $S$.
> **b.** Determinare $b(\mathscr{B})$.
> 
> \textbf{1.3 Alla ricerca dei possibili valori di $b(\mathscr{A})$.}
> 
> \textbf{1.} Si supponga che esista $a \in \mathscr{A}$ tale che $0 < |a| < 1$. Si dimostri che $b(\mathscr{A}) = \infty$.
>
> \textbf{2.} In questo quesito consideriamo un numero complesso $a$ di modulo $1$. Indichiamo con $\arg(a)$ l'unico argomento di $a$ nell'intervallo $[-\pi, \pi[$. Supponiamo inoltre che nessun multiplo di $\frac{\pi}{2}$ sia un argomento di $a$.
>
> \textbf{a.} Si mostri che un argomento di $a^2 + a^4$ (oppure di $a^4 + a^8$) può essere ottenuto con modulo non nullo e numero reale strettamente minore di $1$. [Nota: questo sottopunto è parzialmente illeggibile nella fonte.]
>
> \textbf{b.} Si deduca che, se un argomento di $a$ appartiene a $[0, \frac{\pi}{4}]$, allora esiste $n \in \mathbb{N}^*$ tale che $0 < |a^{2n} + a^{4n}| < 1$.
>
> \textbf{c.} Si mostri che, se un argomento di $a$ appartiene a $]-\frac{3\pi}{4}, 0]$, allora esiste $n \in \mathbb{N}^*$ tale che $0 < |a^{2n} + a^{4n}| < 1$.
>
> \textbf{d.} Si concluda che esiste sempre $n \in \mathbb{N}^*$ tale che $0 < |a^{2n} + a^{4n}| < 1$.
>
> \textbf{3.} Si supponga, in questo quesito, che $b(\mathscr{A})$ sia finito e strettamente maggiore di $2$.
>
> \textbf{a.} Si mostri che esiste $z$ in $\mathscr{A}$ tale che $|z| > 1$.
>
> \textbf{b.} Quali sono i possibili valori di $\arg(z)$?
>
> \textbf{c.} Si deduca che $b(\mathscr{A}) \le 17$.
>
> \textbf{4.} Si dia un esempio di sottoinsieme $\mathscr{A}$ di tipo $S$ tale che $b(\mathscr{A}) > 2$.
>
> \textbf{5.} Si dia un esempio di sottoinsieme $\mathscr{A}$ di tipo $S$ tale che $b(\mathscr{A}) > 8$.
>
> \textbf{6.} Quali sono i possibili valori di $b(\mathscr{A})$?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_trigonometria|Trigonometria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]], [[Geometria]]


<div class="qlang-split" data-lang="en"></div>


*Finite subsets A of C of 'type S' (any two elements z1, z2 satisfy z1×z2 = z1^2 + z2^2); study of b(A), the smallest modulus strictly greater than 1 of an element of A (or infinity); examples, the lattices Z[j] and related sets, and determination of all possible values of b(A).*

> A finite subset $\mathscr{A}$ of $\mathbb{C}$ (the set of complex numbers) is said to be of type $S$ if, for any two elements $z_1$ and $z_2$ of $\mathscr{A}$, the product $z_1 z_2$ is equal to the sum $z_1^2 + z_2^2$ of their squares.
> 
> In all of this problem, $\mathscr{A}$ denotes a finite subset of $\mathbb{C}$ of type $S$.
> 
> We denote by $b(\mathscr{A})$ the smallest of the moduli $|z|$ of the complex numbers $z$ of $\mathscr{A}$ whose modulus $|z|$ is strictly greater than $1$. We set $b(\mathscr{A}) = \infty$ if no such number exists.
> 
> \textbf{1.1 A few simple examples.}
> 
> \textbf{1.} The following subsets of $\mathbb{C}$ are of type $S$ (this is not required to be verified); specify for each the value of $b(\mathscr{A})$.
> \textbf{a.} $\mathscr{A} = \{0\}$.
> \textbf{b.} $\mathscr{A} = \mathbb{C}$.
> \textbf{c.} $\mathscr{A} = \mathbb{N}$.
> \textbf{d.} $\mathscr{A} = \mathbb{N}^*$.
> 
> \textbf{2. a.} Give an example of a subset $\mathscr{A}$ of type $S$ such that $b(\mathscr{A}) = 0$.
> \textbf{b.} Give an example of a subset $\mathscr{A}$ of type $S$ such that $b(\mathscr{A}) = \infty$.
> \textbf{3.} Let $\overline{\mathscr{A}}$ be the subset of $\mathbb{C}$ consisting of the complex numbers conjugate to those of $\mathscr{A}$. Show that $\overline{\mathscr{A}}$ is of type $S$ and determine $b(\overline{\mathscr{A}})$.
> 
> \textbf{1.2 Two examples of subsets of $\mathbb{C}$ of type $S$.}
> 
> \textbf{1.} We define the complex number $j$ by $j = e^{2i\pi/3} = -\frac{1}{2} + \frac{1}{2} i\sqrt{3}$, and we denote $\mathbb{Z}[j] = \{a + bj \;;\; (a,b) \in \mathbb{Z}^2\}$, that is the subset of $\mathbb{C}$ consisting of the complex numbers of the form $a + bj$ with $a$ and $b$ in $\mathbb{Z}$.
> \textbf{a.} Compute $1 + j + j^2$.
> \textbf{b.} Show that $\mathbb{Z}[j]$ is of type $S$.
> \textbf{c.} Determine $b(\mathbb{Z}[j])$.
> \textbf{d.} Let $\mathbb{Z}[j]^* = \mathbb{Z}[j] \setminus \{0\}$ (the non-zero elements of $\mathbb{Z}[j]$). Justify that $\mathbb{Z}[j]^*$ is of type $S$ and determine $b(\mathbb{Z}[j]^*)$.
> \textbf{2.} We define the subset $\mathscr{B}$ of $\mathbb{C}$ by
> $$\mathscr{B} = \{ z \in \mathbb{C} \;;\; z^2 \in \mathbb{Z}[j] \}.$$
> Thus the complex number $z$ belongs to $\mathscr{B}$ if and only if its square is an element of $\mathbb{Z}[j]$.
> \textbf{a.} Show that $\mathscr{B}$ is of type $S$.
> \textbf{b.} Determine $b(\mathscr{B})$.
> 
> \textbf{1.3 On the search for the possible values of $b(\mathscr{A})$.}
> 
> \textbf{1.} Suppose there exists $a \in \mathscr{A}$ such that $0 < |a| < 1$. Show that $b(\mathscr{A}) = \infty$.
> \textbf{2.} We consider, in this question, a complex number $a$ of modulus $1$. We denote by $\arg(a)$ the unique argument of $a$ in the interval $[-\pi, \pi[$. We suppose moreover that no multiple of $\frac{\pi}{2}$ is an argument of $a$.
> \textbf{a.} Show that an argument of $a^2 + a^4$ (or of $a^4 + a^8$) can be obtained, of non-zero modulus and a real number strictly less than $1$. [Note: this sub-question is partially illegible in the source.]
> \textbf{b.} Deduce that if an argument of $a$ is in $[0, \frac{\pi}{4}]$, then there exists $n \in \mathbb{N}^*$ such that $0 < |a^{2n} + a^{4n}| < 1$.
> \textbf{c.} Show that if an argument of $a$ is in $]-\frac{3\pi}{4}, 0]$, then there exists $n \in \mathbb{N}^*$ such that $0 < |a^{2n} + a^{4n}| < 1$.
> \textbf{d.} Conclude that there always exists $n \in \mathbb{N}^*$ such that $0 < |a^{2n} + a^{4n}| < 1$.
> \textbf{3.} We suppose, in this question, that $b(\mathscr{A})$ is finite and strictly greater than $2$.
> \textbf{a.} Show that there exists $z$ in $\mathscr{A}$ such that $|z| > 1$.
> \textbf{b.} What are the possible values for $\arg(z)$?
> \textbf{c.} Deduce that $b(\mathscr{A}) \le 17$.
> \textbf{4.} Give an example of a subset $\mathscr{A}$ of type $S$ such that $b(\mathscr{A}) > 2$.
> \textbf{5.} Give an example of a subset $\mathscr{A}$ of type $S$ such that $b(\mathscr{A}) > 8$.
> \textbf{6.} What are the possible values for $b(\mathscr{A})$?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_trigonometria|Trigonometria]], [[topic_insiemi_funzioni|Sets and functions]]
**Metodo:** [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]], [[method_trigonometria|Trigonometria]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Geometria|Geometry]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1EHAMpK1by8Xia4t4AWdCzG755ysDEYJL/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_probabilita,topic_combinatoria,method_casework,method_conteggio,method_disuguaglianze,skill_modellizzazione,skill_manipolazione_algebrica,skill_casework_accurato,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*Probability problem. Franck must pass MCQ exams where each correct answer gives +1 point, each wrong answer -1 point, and no answer 0 points. First exam: 10 questions, pass needs at least 7 points; decide which questions to answer given success probability p. Second exam: 50 questions, pass needs at least 26 points; compare strategies and find optimal as function of p.*

> **2.1 Franck passe un premier examen**
>
> Franck doit réussir un examen qui consiste en un Q.C.M. (questionnaire à choix multiples), de dix questions numérotées de $1$ à $10$. Il doit répondre à ces questions dans l’ordre et s’il ne répond pas à une question, on ne prendra pas en compte les réponses qu’il pourrait apporter aux questions suivantes.
>
> Chaque bonne réponse rapporte un point, chaque mauvaise réponse fait perdre un point et ne pas répondre à une question ne rapporte aucun point.
>
> Franck réussira son premier examen si sa note finale est d’au moins sept points.
>
> Franck connaît les bonnes réponses des six premières questions. Par contre, pour chacune des quatre questions suivantes, il a une probabilité $p$ de trouver la bonne réponse, avec $0 < p < 1$.
>
> **1.** Prouver que si Franck ne répond pas à la question numérotée $9$, il a intérêt à ne pas répondre à la question numérotée $8$ pour réussir son examen.
>
> **2.** Franck a-t-il intérêt à répondre à la question numérotée $10$ ?
>
> **3.** Déterminer, selon la valeur de $p$, quelle est la meilleure stratégie pour Franck.
>
> **2.2 Franck passe un second examen**
>
> Franck passe maintenant un second examen, consistant encore en un Q.C.M, formé cette fois de $50$ questions. Les modalités de cet examen sont les mêmes que celles du précédent. Ainsi Franck doit répondre à ces questions dans l’ordre et s’il ne répond pas à une question, on ne prendra pas en compte les réponses qu’il pourrait apporter aux questions suivantes. Chaque bonne réponse rapporte un point, chaque mauvaise réponse fait perdre un point et ne pas répondre à une question ne rapporte aucun point.
>
> Cependant, pour réussir cette fois, Franck doit obtenir une note finale d’au moins $25$ points. Franck connaît les réponses aux $24$ premières questions. Par contre, pour chacune des $26$ questions suivantes, il a une probabilité $p$ de trouver la bonne réponse, avec $0 < p < 1$.
>
> Pour tout entier $k$ vérifiant $1 \leqslant k \leqslant 26$, on note $P_k$ la probabilité que Franck réussisse son examen en ne répondant qu’aux seules $24 + k$ premières questions.
>
> **1.** Prouver que, pour tout entier $k$ vérifiant $1 \leqslant k \leqslant 13$, on a $P_{2k-1} > P_{2k}$.
>
> **2.** Prouver que, pour tout entier $k$ vérifiant $0 \leqslant k \leqslant 12$, on a :
> $$P_{2k+1} = \sum_{i=k+1}^{2k+1} \binom{2k+1}{i} p^i (1-p)^{2k+1-i}.$$
>
> **3.** Démontrer que, pour tout entier $k$ vérifiant $0 \leqslant k \leqslant 11$, on a :
> $$P_{2k+3} - P_{2k+1} = \binom{2k+1}{k+1} p^{k+1}(1-p)^{k+1}(2p-1).$$
> On pourra utiliser librement la formule de Pascal pour $0 < m < n$ : $\displaystyle \binom{n}{m} = \binom{n-1}{m-1} + \binom{n-1}{m}$.
>
> **4.** Déterminer, selon la valeur de $p$, quelle est la meilleure stratégie pour Franck.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_disuguaglianze|Classical inequalities]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1EHAMpK1by8Xia4t4AWdCzG755ysDEYJL/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>

*Problemi di probabilità: Franck deve superare questionari a scelta multipla in cui ogni risposta esatta vale +1, ogni errore −1 e l'omissione 0; strategie e probabilità di successo.*
> Franck fa il primo esame.
> 
> Franck deve superare un esame composto da un QCM (questionario di scelta multipla) con domande numerate da $1$ a $10$. Per ciascuna domanda si deve scegliere tra le risposte proposte, con una delle quattro risposte corrette (non si pregiudica che tutte le risposte proposte siano distinte e che le domande siano presunte come indipendenti).
> 
> Ogni risposta corretta porta un punto, ogni risposta sbagliata fa perdere un punto, e se non si risponde a una domanda non si guadagna né si perde un punto.
> 
> Franck passa il primo esame se e solo se ottiene un totale finale di almeno sette punti.
> 
> Franck ha risposto alle prime tre domande (numerate $1$ a $3$); per le seguenti domande, ha una probabilità $p$ di trovare la risposta corretta, con $0 < p < 1$.
> 
> Prova che Franck ha interesse a rispondere alla domanda numero $9$, se ha interesse a rispondere alla domanda numero $4$ a cui non ha ancora risposto. [Nota: l'accoppiamento esatto dei numeri delle domande di 2.1.1 è parzialmente illeggibile nella fonte.] \textbf{2.} Ha interesse a rispondere alla domanda di numero $10$? Determinare, in base al valore di $p$, la migliore strategia per Franck.
> 
> Franck fa un secondo esame.
> 
> Franck deve ora superare un secondo esame, costituito nuovamente da un QCM, costituito questa volta da domande $50$. Le regole di questo esame sono le stesse di quella precedente. In tal modo, Franck deve rispondere alle domande $50$ (cioè non è obbligato a rispondere a tutte le domande). Ogni risposta corretta gli porta un punto e ogni risposta sbagliata gli porta a perdere un punto.
> 
> Franck può superare il secondo esame solo se ottiene un totale finale di almeno $26$ punti. Per ogni domanda, ha una probabilità $p$ di trovare la risposta corretta, con $0 < p < 1$.
> 
> Per qualsiasi numero intero $k$ tale da $1 \le k \le 25$, indichiamo con $P_k$ la probabilità che Franck passi l'esame rispondendo alle prime domande $26 + k$. [Nota: l'intervallo esatto dell'indice e la formulazione "26+k" sono parzialmente leggibili nella fonte.]
> 
> \textbf{1.} Prova che, per qualsiasi numero intero $k$ che verifica $1 \le k \le 13$, si ha $P_{2k-1} \ge P_{2k}$. \textbf{2.} Dimostra che, per qualsiasi intero $k$ verificando $0 \le k \le 12$, si ha $$P_{2k+1} = \sum_{j=k+1}^{2k+1} \binom{2k+1}{j} p^j (1-p)^{2k+1-j}.$$ \textbf{3.} Dimostra che, per qualsiasi intero $k$ verificando $0 \le k \le 11$, si ha $$P_{2k+3} - P_{2k+1} = \binom{2k+1}{k+1} p^{k+1}(1-p)^{k+1} (\,p - (1-p)\,).$$ Si può liberamente utilizzare l'identità di Pascal: per $0 < m < n$, $\binom{n}{m} = \binom{n-1}{m} + \binom{n-1}{m-1}$. [Nota: il lato destro preciso della formula di 2.2.3 è parzialmente illeggibile nella fonte.] \textbf{4.} Determinare, in base al valore di $p$, la strategia migliore per Franck.

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]], [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Probability problem. Franck must pass MCQ exams where each correct answer gives +1 point, each wrong answer -1 point, and no answer 0 points. First exam: 10 questions, pass needs at least 7 points; decide which questions to answer given success probability p. Second exam: 50 questions, pass needs at least 26 points; compare strategies and find optimal as function of p.*

> \textbf{2.1 Franck takes a first exam.}
> 
> Franck must pass an exam consisting of a QCM (multiple-choice questionnaire) with questions numbered $1$ to $10$. For each question one must choose among $4$ proposed answers, exactly one of the four answers being correct (one does not prejudge that the proposed answers are all distinct, and the questions are assumed independent).
> 
> Each correct answer brings one point, each wrong answer makes one lose one point, and if one does not answer a question one neither gains nor loses a point.
> 
> Franck passes the first exam if and only if he obtains a final total of at least seven points.
> 
> Franck has answered the first three questions (numbered $1$ to $3$); for the following questions, he has a probability $p$ of finding the correct answer, with $0 < p < 1$.
> 
> \textbf{1.} Prove that Franck has interest in answering question number $9$, if he has interest in answering question number $4$ to which he has not yet answered. [Note: the exact pairing of question numbers in 2.1.1 is partly illegible in the source.]
> \textbf{2.} Does he have interest in answering question number $10$?
> \textbf{3.} Determine, according to the value of $p$, the best strategy for Franck.
> 
> \textbf{2.2 Franck takes a second exam.}
> 
> Franck must now pass a second exam, consisting again of a QCM, formed this time of $50$ questions. The rules of this exam are the same as those of the previous one. Thus Franck must respond to the $50$ questions (that is, he is not obliged to answer every question). Each correct answer brings him a point and each wrong answer makes him lose a point.
> 
> Franck passes this second exam if and only if he obtains a final total of at least $26$ points. For each question, he has a probability $p$ of finding the correct answer, with $0 < p < 1$.
> 
> For any integer $k$ such that $1 \le k \le 25$, we denote by $P_k$ the probability that Franck passes the exam by answering the first $26 + k$ questions. [Note: the exact index range and the '26+k' wording is partly illegible in the source.]
> 
> \textbf{1.} Prove that, for any integer $k$ verifying $1 \le k \le 13$, one has $P_{2k-1} \ge P_{2k}$.
> \textbf{2.} Prove that, for any integer $k$ verifying $0 \le k \le 12$, one has
> $$P_{2k+1} = \sum_{j=k+1}^{2k+1} \binom{2k+1}{j} p^j (1-p)^{2k+1-j}.$$
> \textbf{3.} Show that, for any integer $k$ verifying $0 \le k \le 11$, one has
> $$P_{2k+3} - P_{2k+1} = \binom{2k+1}{k+1} p^{k+1}(1-p)^{k+1} (\,p - (1-p)\,).$$
> One may freely use Pascal's identity: for $0 < m < n$, $\binom{n}{m} = \binom{n-1}{m} + \binom{n-1}{m-1}$. [Note: the precise right-hand side of the formula in 2.2.3 is partly illegible in the source.]
> \textbf{4.} Determine, according to the value of $p$, the best strategy for Franck.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_disuguaglianze|Classical inequalities]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1EHAMpK1by8Xia4t4AWdCzG755ysDEYJL/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_solida,topic_geometria_analitica,topic_aritmetica,topic_geometria_piana,topic_trigonometria,method_coordinate,method_congruenze,method_casework,method_fattorizzazione,method_trigonometria,skill_ragionamento_geometrico,skill_manipolazione_algebrica,skill_astrazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*Triangles in space E with integer-coordinate vertices in an orthonormal frame. Preliminary results on the foot of an altitude and rationality, irrationality of sqrt(n) for non-square n, and arithmetic of sums of three squares. Then study of which triangles (equilateral, isosceles 3-3-2 and 2-2-3) admit a similar copy with all integer vertices, via the tangent of angles having the form r×sqrt(k) with k square-free.*

> On rappelle qu’un nombre rationnel est un nombre qui peut s’écrire sous la forme $\dfrac{a}{b}$, où $a$ et $b$ sont des entiers, avec $b \neq 0$. En particulier, la somme, la différence, le produit et le quotient de deux nombres rationnels est un nombre rationnel.
>
> L’espace usuel $\mathscr{E}$ est rapporté à un repère orthonormé $\bigl(O;\ \vec{\imath},\ \vec{\jmath},\ \vec{k}\bigr)$. Un point $M(x; y; z)$ de $\mathscr{E}$ est dit entier lorsque ses trois coordonnées $x$, $y$ et $z$ sont des entiers.
>
> De même, un point $M(x; y)$ du plan $\mathscr{P}$ rapporté au repère $\bigl(O;\ \vec{\imath},\ \vec{\jmath}\bigr)$ sera dit entier lorsque ses deux coordonnées $x$ et $y$ sont des entiers.
>
> Dans tout le problème, les triangles seront supposés non aplatis.
>
> **3.1 Quelques résultats préliminaires**
>
> **1.** Soit $ABC$ un triangle du plan $\mathscr{P}$ rapporté au repère $\bigl(O;\ \vec{\imath},\ \vec{\jmath}\bigr)$, et $H$ le pied de sa hauteur issue de $A$ (c’est-à-dire $H$ est le point d’intersection entre la droite $(BC)$ avec la perpendiculaire passant par $A$).
>
> **a.** Prouver que :
> $$\overrightarrow{AH} = \overrightarrow{AB} + \frac{\overrightarrow{BA} \cdot \overrightarrow{BC}}{BC^2} \times \overrightarrow{BC}.$$
>
> **b.** En déduire que si $A$, $B$ et $C$ sont des points entiers du plan $\mathscr{P}$ alors les coordonnées de $H$ sont des nombres rationnels.
>
> **c.** Si $ABC$ est un triangle de l’espace $\mathscr{E}$, les résultats établis aux questions **a.** et **b.** ci-dessus sont-ils encore valables ?
>
> **2.** Existe-t-il un triangle équilatéral dont les sommets sont trois points entiers du plan $\mathscr{P}$ rapporté au repère $\bigl(O;\ \vec{\imath},\ \vec{\jmath}\bigr)$ ?
>
> **3.** Soit $n$ un entier naturel. Prouver que si $\sqrt{n}$ est un nombre rationnel alors il existe un entier $m$ tel que $n = m^2$.
>
> **4. a.** Prouver que si $x$ est un entier alors il existe un entier $t$ tel que $x^2$ soit égal à $8t$ ou à $8t + 1$ ou à $8t + 4$.
>
> **b.** Prouver que si $a$, $b$, $c$ et $d$ sont des entiers tels que $7a^2 = b^2 + c^2 + d^2$, alors $a = b = c = d = 0$.
>
> **3.2 Étude des triangles de l’espace $\mathscr{E}$ à sommets entiers**
>
> On rappelle que si $\theta$ est la mesure en radian d’un angle non droit d’un triangle (non aplati), on a $\tan(\theta) = \dfrac{\sin(\theta)}{\cos(\theta)}$.
>
> Un entier $k \geqslant 1$ est dit sans facteur carré, si $k = 1$ ou s’il peut se décomposer en un produit de nombres premiers deux à deux distincts.
>
> **1.** Donner un triangle équilatéral dont les sommets sont trois points entiers de l’espace $\mathscr{E}$.
>
> **2.** Soit $T$ un triangle dont les trois sommets sont des points entiers de l’espace $\mathscr{E}$.
>
> **a.** Prouver que, pour tout angle $\theta$ non droit de $T$, le nombre $\tan^2(\theta)$ est rationnel.
>
> **b.** Prouver qu’il existe un unique entier $k \geqslant 1$, sans facteur carré, tel que pour tout angle $\theta$ non droit de $T$, le nombre $\tan(\theta)$ puisse s’écrire sous la forme $r\sqrt{k}$, où $r$ est un nombre rationnel non nul.
>
> **c.** En utilisant la question **1.** de la partie **1**, prouver qu’il existe des entiers $a_1$, $a_2$, $a_3$, $u_1$, $u_2$ et $u_3$ non tous nuls vérifiant le système :
> $$E(3, k) : \begin{cases} k\bigl(a_1^2 + a_2^2 + a_3^2\bigr) = u_1^2 + u_2^2 + u_3^2 \\ a_1 u_1 + a_2 u_2 + a_3 u_3 = 0 \end{cases}$$
> (Remarque : L’entier $k$ est celui trouvé à la question **2.b.**)
>
> **3.** Soit $k$ un entier strictement positif et sans facteur carré. On suppose qu’il existe des entiers $a_1$, $a_2$, $a_3$, $u_1$, $u_2$ et $u_3$ non tous nuls vérifiant le système $E(3, k)$.
>
> Soit $T$ un triangle de l’espace $\mathscr{E}$. On suppose que, pour tout angle $\theta$ non droit de $T$, le nombre $\tan(\theta)$ peut s’écrire sous la forme $r\sqrt{k}$, où $r$ est un nombre rationnel non nul.
>
> Montrer qu’il existe un triangle dont les trois sommets sont entiers et ayant les mêmes angles que $T$.
>
> **4. a.** Soit $T$ un triangle isocèle de l’espace $\mathscr{E}$ dont les côtés sont de longueurs $3$, $3$ et $2$. Existe-t-il un triangle de l’espace $\mathscr{E}$ dont les trois sommets sont entiers et ayant les mêmes angles que $T$ ?
>
> **b.** Soit $T$ un triangle isocèle de l’espace $\mathscr{E}$ dont les côtés sont de longueurs $2$, $2$ et $3$. Existe-t-il un triangle de l’espace $\mathscr{E}$ dont les trois sommets sont entiers et ayant les mêmes angles que $T$ ?
>
> *Remarque :* On pourra librement utiliser l’identité suivante, valable pour tous réels $a$, $b$, $c$, $d$, $e$ et $f$ :
> $$\bigl(a^2 + b^2 + c^2\bigr)\bigl(d^2 + e^2 + f^2\bigr) - (ad + be + cf)^2 = (ae - bd)^2 + (af - cd)^2 + (bf - ce)^2.$$

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_geometria_analitica|Geometria analitica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_piana|Plane geometry]], [[topic_trigonometria|Trigonometry]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]], [[method_trigonometria|Trigonometric techniques]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria|Geometry]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1EHAMpK1by8Xia4t4AWdCzG755ysDEYJL/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>

*Triangoli nello spazio con vertici a coordinate intere rispetto a un riferimento ortonormale: piano di un'altezza, razionalità e irrazionalità di alcune lunghezze.*
> \textbf{3 Problema 3: nello spazio, tutti gli enti.}
> 
> Chiamiamo un numero razionale un numero che si può scrivere nella forma $\frac{a}{b}$, con $a$ e $b$ numeri interi relativi e $b \ne 0$. In particolare, la somma, la differenza, il prodotto e il quotiente di due numeri razionali sono numeri razionali.
> 
> Lo spazio $\mathscr{E}$ si riferisce a una cornice ortonormale $(O; \vec{\imath}, \vec{\jmath}, \vec{k})$. Per un punto $M(x; y; z)$ di $\mathscr{E}$ si denotano con $x$, $y$ e $z$ le sue coordinate.
> 
> Allo stesso modo, un punto $M(x; y)$ del piano $\mathscr{P}$ riferito a un quadro ortonormale $(O; \vec{\imath}, \vec{\jmath})$ sarà detto un punto intero quando $x$ e $y$ sono numeri interi.
> 
> In tutto questo problema, i triangoli considerati sono presunti non degenerati (non piatti).
> 
> Alcuni risultati preliminari.
> 
> \textbf{1.} Che $ABC$ sia un triangolo del piano $\mathscr{P}$ riferito a un quadro $(O; \vec{\imath}, \vec{\jmath})$, e che $H$ sia il piede dell'altitudine emessa da $A$ (cioè, $H$ è il punto di intersezione tra la linea $(BC)$ e la perpendicolare a $(BC)$ che attraversa $A$). \textbf{a.} Prova che $$\overrightarrow{AH} = \overrightarrow{AB} + \frac{\overrightarrow{BA} \cdot \overrightarrow{BC}}{BC^2} \, \overrightarrow{BC}.$$ \textbf{b.} Deduci che se $A$, $B$ e $C$ sono punti interi del piano $\mathscr{P}$, le coordinate di $H$ sono razionali. Le domande di cui sopra sono ancora valide? [Nota: la fine della domanda 3.1.1.b è parzialmente illeggibile nella fonte.] \textbf{2.} C'è un triangolo equilaterale le cui tre vertici sono punti interi del piano $\mathscr{P}$ riferito a un quadro $(O; \vec{\imath}, \vec{\jmath})$? \textbf{3.} Lasciate $n$ essere un intero naturale. Prova che $\sqrt{n}$ è un numero razionale se e solo se esiste un intero $m$ tale che $n = m^2$. - Sì, signore. a.} Prova che se $s$ è un numero intero relativo, allora esiste un numero intero $r$ tale che $s^2$ sia uguale a $8r$, o $8r + 1$, o $8r + 4$. \textbf{b.} Prova che se $a$, $b$, $c$ e $d$ sono integri tali da $2a^2 = b^2 + c^2 + d^2$, allora $a = b = c = d = 0$. [Nota: la fonte scrive la variabile come $t$ in un solo luogo; si legge come $d$ per la coerenza con l'equazione.]
> 
> \textbf{3.2 Studio dei triangoli dello spazio $\mathscr{E}$ con vertici interi.}
> 
> Indichiamo con $\theta$ la misura in radiani di un angolo non retto di un triangolo (non degenerato); uno ha $\tan(\theta) = \frac{\sin\theta}{\cos\theta}$.
> 
> Indichiamo con $k \ge 1$ un intero positivo che è libero dal quadrato, cioè $k$ è $1$ o si decompone in un prodotto di numeri primi separati in coppia.
> 
> \textbf{1.} Determina un triangolo equilaterale le cui vertici sono punti interi dello spazio $\mathscr{E}$. \textbf{2.} $T$ sia un triangolo le cui tre cime sono punti interi di $\mathscr{E}$. \textbf{a.} Prova che, per qualsiasi angolo non retto $\theta$ di $T$, il numero $\tan^2(\theta)$ è razionale. \textbf{b.} Prova che esiste un intero unico $k \ge 1$, libero da quadrati, in modo che per qualsiasi angolo $\theta$ di $T$, il numero $\tan(\theta)$ possa essere scritto nella forma $r\sqrt{k}$, dove $r$ è un numero razionale non zero. \textbf{c.} Usando la domanda \textbf{1.}, dimostrare che esistono integri $a_1, a_2, a_3, u_1, u_2$ e $u_3$, non tutti zero, soddisfacendo il sistema $$E(k,k) \;:\; \begin{cases} k\,(a_1^2 + a_2^2 + a_3^2) = u_1^2 + u_2^2 + u_3^2 \\ a_1 u_1 + a_2 u_2 + a_3 u_3 = 0 \end{cases}$$ (Ricorda: l'intero $k$ è quello trovato in questione \textbf{2.b.}) [Nota: la forma esatta del sistema $E(\cdot,\cdot)$ e i suoi parametri sono parzialmente ricostruiti da una fonte parzialmente illeggibile.] \textbf{3.} $k$ sia un intero a quadrato libero strettamente positivo. Supponiamo che esistano integri $a_1, a_2, a_3, u_1, u_2$ e $u_3$, non tutti zero, che soddisfano il sistema $E(3,k)$. $T$ sia un triangolo dello spazio $\mathscr{E}$. Supponiamo che, per qualsiasi angolo non retto $\theta$ di $T$, il numero $\tan(\theta)$ possa essere scritto nella forma $r\sqrt{k}$, dove $r$ è un numero razionale non zero. Mostrare che esiste un triangolo le cui tre vertici sono numeri interi e che hanno gli stessi angoli di $T$. - Sì, signore. a.} Il $T$ deve essere un triangolo a uguali dimensioni dello spazio $\mathscr{E}$ i cui lati sono di lunghezza $3$, $3$ e $2$. C'è un triangolo dello spazio $\mathscr{E}$ le cui tre vertici sono numeri interi e hanno gli stessi angoli di $T$? \textbf{b.} $T$ sia un triangolo a uguali dimensioni dello spazio $\mathscr{E}$ i cui lati sono di lunghezza $2$, $2$ e $3$. C'è un triangolo dello spazio $\mathscr{E}$ le cui tre vertici sono numeri interi e hanno gli stessi angoli di $T$? \textit{Rimarca:} Si può liberamente utilizzare la seguente identità, valida per tutti i veri $a$, $b$, $c$, $d$, $e$ e $f$: $$(a^2 + b^2 + c^2)(d^2 + e^2 + f^2) - (ad + be + cf)^2 = (ae - bd)^2 + (af - cd)^2 + (bf - ce)^2.$$

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_geometria_analitica|Geometria analitica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]], [[method_congruenze|Aritmetica modulare / congruenze]], [[method_casework|Analisi per casi]], [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_trigonometria|Tecniche trigonometriche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Geometria]], [[Aritmetica e Teoria dei Numeri]]


<div class="qlang-split" data-lang="en"></div>


*Triangles in space E with integer-coordinate vertices in an orthonormal frame. Preliminary results on the foot of an altitude and rationality, irrationality of sqrt(n) for non-square n, and arithmetic of sums of three squares. Then study of which triangles (equilateral, isosceles 3-3-2 and 2-2-3) admit a similar copy with all integer vertices, via the tangent of angles having the form r×sqrt(k) with k square-free.*

> \textbf{3 Problem 3: In space, all integers.}
> 
> We call a rational number a number that one can write in the form $\frac{a}{b}$, with $a$ and $b$ relative integers and $b \ne 0$. In particular, the sum, the difference, the product and the quotient of two rational numbers are rational numbers.
> 
> The space $\mathscr{E}$ is referred to an orthonormal frame $(O; \vec{\imath}, \vec{\jmath}, \vec{k})$. For a point $M(x; y; z)$ of $\mathscr{E}$ one denotes by $x$, $y$ and $z$ its coordinates.
> 
> Likewise, a point $M(x; y)$ of the plane $\mathscr{P}$ referred to an orthonormal frame $(O; \vec{\imath}, \vec{\jmath})$ will be said to be an integer point when $x$ and $y$ are integers.
> 
> In all this problem, the triangles considered are assumed non-degenerate (non-flat).
> 
> \textbf{3.1 Some preliminary results.}
> 
> \textbf{1.} Let $ABC$ be a triangle of the plane $\mathscr{P}$ referred to a frame $(O; \vec{\imath}, \vec{\jmath})$, and let $H$ be the foot of the altitude issued from $A$ (that is, $H$ is the point of intersection between the line $(BC)$ and the perpendicular to $(BC)$ passing through $A$).
> \textbf{a.} Prove that
> $$\overrightarrow{AH} = \overrightarrow{AB} + \frac{\overrightarrow{BA} \cdot \overrightarrow{BC}}{BC^2} \, \overrightarrow{BC}.$$
> \textbf{b.} Deduce that if $A$, $B$ and $C$ are integer points of the plane $\mathscr{P}$, then the coordinates of $H$ are rational. Are questions \textbf{a.} and \textbf{b.} above still valid? [Note: the end of question 3.1.1.b is partly illegible in the source.]
> \textbf{2.} Is there an equilateral triangle whose three vertices are integer points of the plane $\mathscr{P}$ referred to a frame $(O; \vec{\imath}, \vec{\jmath})$?
> \textbf{3.} Let $n$ be a natural integer. Prove that $\sqrt{n}$ is a rational number if and only if there exists an integer $m$ such that $n = m^2$.
> \textbf{4. a.} Prove that if $s$ is a relative integer, then there exists an integer $r$ such that $s^2$ is equal to $8r$, or $8r + 1$, or $8r + 4$.
> \textbf{b.} Prove that if $a$, $b$, $c$ and $d$ are integers such that $2a^2 = b^2 + c^2 + d^2$, then $a = b = c = d = 0$. [Note: the source writes the variable as $t$ in one place; read as $d$ for consistency with the equation.]
> 
> \textbf{3.2 Study of the triangles of the space $\mathscr{E}$ with integer vertices.}
> 
> We denote by $\theta$ the measure in radians of a non-right angle of a (non-degenerate) triangle; one has $\tan(\theta) = \frac{\sin\theta}{\cos\theta}$.
> 
> We denote by $k \ge 1$ a positive integer that is square-free, that is, $k$ is $1$ or is decomposed into a product of prime numbers pairwise distinct.
> 
> \textbf{1.} Determine an equilateral triangle whose vertices are integer points of the space $\mathscr{E}$.
> \textbf{2.} Let $T$ be a triangle whose three vertices are integer points of $\mathscr{E}$.
> \textbf{a.} Prove that, for any non-right angle $\theta$ of $T$, the number $\tan^2(\theta)$ is rational.
> \textbf{b.} Prove that there exists a unique integer $k \ge 1$, square-free, such that for any angle $\theta$ of $T$, the number $\tan(\theta)$ can be written in the form $r\sqrt{k}$, where $r$ is a non-zero rational number.
> \textbf{c.} Using question \textbf{1.}, prove that there exist integers $a_1, a_2, a_3, u_1, u_2$ and $u_3$, not all zero, satisfying the system
> $$E(k,k) \;:\; \begin{cases} k\,(a_1^2 + a_2^2 + a_3^2) = u_1^2 + u_2^2 + u_3^2 \\ a_1 u_1 + a_2 u_2 + a_3 u_3 = 0 \end{cases}$$
> (Remark: the integer $k$ is the one found in question \textbf{2.b.}) [Note: the exact form of the system $E(\cdot,\cdot)$ and its parameters is partly reconstructed from a partly illegible source.]
> \textbf{3.} Let $k$ be a strictly positive square-free integer. Suppose that there exist integers $a_1, a_2, a_3, u_1, u_2$ and $u_3$, not all zero, satisfying the system $E(3,k)$.
> Let $T$ be a triangle of the space $\mathscr{E}$. Suppose that, for any non-right angle $\theta$ of $T$, the number $\tan(\theta)$ can be written in the form $r\sqrt{k}$, where $r$ is a non-zero rational number.
> Show that there exists a triangle whose three vertices are integers and having the same angles as $T$.
> \textbf{4. a.} Let $T$ be an isosceles triangle of the space $\mathscr{E}$ whose sides are of lengths $3$, $3$ and $2$.
> Is there a triangle of the space $\mathscr{E}$ whose three vertices are integers and having the same angles as $T$?
> \textbf{b.} Let $T$ be an isosceles triangle of the space $\mathscr{E}$ whose sides are of lengths $2$, $2$ and $3$.
> Is there a triangle of the space $\mathscr{E}$ whose three vertices are integers and having the same angles as $T$?
> \textit{Remark:} One may freely use the following identity, valid for all reals $a$, $b$, $c$, $d$, $e$ and $f$:
> $$(a^2 + b^2 + c^2)(d^2 + e^2 + f^2) - (ad + be + cf)^2 = (ae - bd)^2 + (af - cd)^2 + (bf - ce)^2.$$

**Topic:** [[topic_geometria_solida|Geometria solida]], [[topic_geometria_analitica|Geometria analitica]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_geometria_piana|Plane geometry]], [[topic_trigonometria|Trigonometry]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_fattorizzazione|Fattorizzazione]], [[method_trigonometria|Trigonometric techniques]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Geometria|Geometry]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1EHAMpK1by8Xia4t4AWdCzG755ysDEYJL/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
