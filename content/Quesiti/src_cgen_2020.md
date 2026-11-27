---
title: Concours Général des Lycées 2020 — Matematica
tipo: gara
competition: Concours Général des Lycées 2020 — Matematica
family: concours_generale
year: '2020'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2020"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_aritmetica,topic_combinatoria,topic_disuguaglianze,method_fattorizzazione,method_congruenze,method_conteggio,method_disuguaglianze,method_telescoping,method_induzione,skill_manipolazione_algebrica,skill_lettura_attenta,skill_conteggio_sistematico,skill_stima,skill_astrazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Pointed numbers: an integer n>=2 is pointed if there exist n consecutive integers each having a prime factor p>n; existence, large pointed numbers, counting via binomial coefficients and logarithmic estimates.*

> Problème 1 : Nombres pointus
>
> Soit $n$ un entier naturel non nul. On dit que $n$ est pointu si $n$ admet au plus un facteur premier ou bien si, en notant $p$ et $q$ les deux plus grands facteurs premiers de $n$, avec $p > q$, l’inégalité $p \geqslant 2q$ est vérifiée.
>
> Par exemple, $1$ est pointu, car il n’a aucun facteur premier. De même, $25$ est pointu, car il n’a qu’un seul facteur premier, et $147$ est pointu, car $147 = 3 \times 7^2$ et $7 \geqslant 2 \times 3$. Au contraire, $105$ n’est pas pointu, puisque $105 = 3 \times 5 \times 7$ et $7 < 2 \times 5$.
>
> Dans ce problème, on cherche à démontrer qu’il existe des suites arbitrairement longues d’entiers consécutifs pointus. Plus précisément, on souhaite démontrer la propriété $\mathscr{P}$ suivante :
>
> Pour tout entier $m \geqslant 1$, il existe un entier $n \geqslant 0$ tel que les nombres $n + 1$, $n + 2$, $\ldots$, $n + m$ soient tous pointus.
>
> 1.1 Quelques exemples
>
> 1. Le nombre $2020$ est-il pointu ?
>
> 2. Quel est le plus petit entier naturel non nul qui ne soit pas pointu ?
>
> 3. Quel est le plus petit nombre pointu possédant au moins quatre facteurs premiers distincts ?
>
> 4. Démontrer qu’il existe une infinité de nombres pointus.
>
> 5. Démontrer qu’il existe une infinité d’entiers naturels non nuls qui ne sont pas pointus.
>
> 6. Établir la liste des nombres pointus entre $1$ et $20$ inclus. Quelle est la longueur maximale d’une suite de nombres pointus consécutifs entre $1$ et $20$ ?
>
> 1.2 Peu de grands nombres premiers
>
> On pose $0! = 1$, et $\ell! = 1 \times 2 \times \cdots \times \ell = \ell(\ell - 1)!$ pour tout entier $\ell \geqslant 1$. Soient alors $k$ et $n$ deux entiers naturels tels que $k \leqslant n$. On s’intéresse à la fraction
> $$\frac{n!}{k!(n - k)!}$$
> que l’on note $F_{n,k}$.
>
> 7. a. Calculer les valeurs des nombres $F_{3,1}$ et $F_{9,4}$.
>
> b. Démontrer que, si $k = 0$ ou $k = n$, alors $F_{n,k} = 1$.
>
> c. Démontrer que, si $1 \leqslant k \leqslant n - 1$, alors $F_{n,k} = F_{n-1,k} + F_{n-1,k-1}$.
>
> d. En déduire que, pour tout entier naturel $n$ et pour tout entier naturel $k \leqslant n$, $F_{n,k}$ est un entier naturel non nul inférieur ou égal à $2^n$.
>
> Dans cette question et dans les parties qui suivent, pour tout entier naturel $n$, on note $\mathrm{P}_n$ l’ensemble des nombres premiers $p$ tels que $n + 1 \leqslant p \leqslant 2n$, et on note $\pi_n$ le nombre d’éléments de $\mathrm{P}_n$.
>
> 8. a. Démontrer que, pour tout nombre premier $p$ appartenant à l’ensemble $\mathrm{P}_n$, l’entier $F_{2n,n}$ est divisible par $p$.
>
> b. Démontrer que, si $a$, $b$ et $c$ sont des entiers naturels non nuls tels que $b$ et $c$ sont premiers entre eux et divisent $a$, alors l’entier $bc$ divise $a$ lui aussi.
>
> c. Soit $d$ le produit de tous les éléments de $\mathrm{P}_n$. Démontrer que l’entier $F_{2n,n}$ est divisible par $d$.
>
> d. En déduire que $n^{\pi_n} \leqslant 2^{2n}$.
>
> 1.3 Des ensembles à peu d’éléments
>
> Soient $b$ un entier naturel non nul, et $f_b :]0; +\infty[\to \mathbb{R}$ la fonction définie par
> $$f_b(x) = \frac{(\ln(x))^b}{x} \quad \text{pour tout } x > 0.$$
>
> 9. a. Soient $x$ un nombre réel tel que $x > 1$, et soit $y = \ln(x)/b$. Démontrer que :
> $$f_b(x) = \frac{b^b}{(\exp(y)/y)^b}.$$
>
> b. En déduire que $\lim_{x \to +\infty} f_b(x) = 0$.
>
> Dans la suite de cette partie, on considérera deux entiers naturels non nuls $\ell$ et $n$ fixés, tels que $n \geqslant 2$.
>
> 10. On note $A_\ell$ l’ensemble des entiers naturels non nuls dont tous les facteurs premiers sont inférieurs ou égaux à $2^\ell$.
>
> a. Parmi les entiers compris entre $1$ et $30$ inclus, lesquels appartiennent à l’ensemble $A_2$ ?
>
> b. On note $p_1$, $p_2$, $\ldots$, $p_k$ les nombres premiers inférieurs ou égaux à $2^\ell$, numérotés dans l’ordre croissant. Soit alors $a$ un élément de $A_\ell$ qui soit inférieur ou égal à $n$. Soient $\alpha_1$, $\alpha_2$, $\ldots$, $\alpha_k$ les entiers naturels tels que :
> $$a = p_1^{\alpha_1} \times p_2^{\alpha_2} \times \cdots \times p_k^{\alpha_k}.$$
> Démontrer que les entiers naturels $\alpha_1$, $\alpha_2$, $\ldots$, $\alpha_k$ sont tous inférieurs ou égaux à $\ln(n)/\ln(2)$.
>
> c. En déduire que $A_\ell$ compte au plus
> $$\left(\frac{\ln(n)}{\ln(2)} + 1\right)^{2^\ell}$$
> éléments inférieurs ou égaux à $n$.
>
> d. On pose $b = 2^\ell$. Démontrer que $A_\ell$ compte au plus
> $$\frac{2}{(\ln(2))^b} \times f_b(2n) \times n$$
> éléments inférieurs ou égaux à $n$.
>
> 11. Soit $k$ un entier naturel non nul. On rappelle que l’ensemble $\mathrm{P}_{2^k}$ désigne l’ensemble des nombres premiers $p$ tels que $2^k + 1 \leqslant p \leqslant 2 \times 2^k$, et que $\pi_{2^k}$ est le nombre d’éléments de $\mathrm{P}_{2^k}$.
>
> a. Expliciter les ensembles $\mathrm{P}_{2^1}$ et $\mathrm{P}_{2^2}$.
>
> On note $B_{k,1}$ l’ensemble des entiers naturels non nuls ayant au moins un facteur premier dans l’ensemble $\mathrm{P}_{2^k}$, et on note $B_{k,2}$ l’ensemble des entiers naturels non nuls ayant au moins deux facteurs premiers distincts dans l’ensemble $\mathrm{P}_{2^k}$.
>
> b. Quel est le plus petit élément de l’ensemble $B_{2,2}$ ?
>
> c. Soit $p$ un nombre premier. Démontrer que le nombre d’entiers naturels non nuls inférieurs ou égaux à $n$ et multiples de $p$ est au plus de $n/p$.
>
> d. Démontrer que l’ensemble $B_{k,1}$ compte au plus $n \times \pi_{2^k}/2^k$ éléments inférieurs ou égaux à $n$.
>
> e. En déduire que l’ensemble $B_{k,1}$ compte au plus $2n/k$ éléments inférieurs ou égaux à $n$.
>
> f. Soient $p_1$ et $p_2$ deux nombres premiers distincts. Démontrer que le nombre d’entiers naturels non nuls inférieurs ou égaux à $n$ et multiples de $p_1$ et $p_2$ est au plus de $n/(p_1 \times p_2)$.
>
> g. En déduire que l’ensemble $B_{k,2}$ compte au plus $4n/k^2$ éléments inférieurs ou égaux à $n$.
>
> 12. Pour tout entier $k \geqslant 2$, on note également $C_k$ l’ensemble $B_{k-1,1} \cap B_{k,1} \cup B_{k,2}$.
>
> a. Quel est le plus petit élément de l’ensemble $C_2$ ?
>
> b. Démontrer que l’ensemble $C_k$ compte au plus
> $$\frac{4n}{k^2} + \frac{4n}{k(k - 1)}$$
> éléments inférieurs ou égaux à $n$.
>
> 13. On fixe maintenant un entier $\ell \geqslant 2$, et on note $D_\ell$ l’ensemble des entiers qui appartiennent à au moins l’un des ensembles $C_k$ tels que $k \geqslant \ell$.
>
> a. Démontrer que tout élément de $\{1, \ldots, n\}$ appartenant à l’ensemble $D_\ell$ appartient à l’un des ensembles $C_\ell, C_{\ell+1}, \ldots, C_n$.
>
> b. Démontrer, pour tout entier $k \geqslant 2$, que :
> $$\frac{1}{k^2} + \frac{1}{k(k - 1)} \leqslant \frac{1}{k - 1} - \frac{1}{k}.$$
>
> c. En déduire que $D_\ell$ compte au plus $8n/(\ell - 1)$ éléments inférieurs ou égaux à $n$.
>
> 1.4 Beaucoup de nombres pointus
>
> Dans cette partie, on considère un entier naturel non nul $m$ fixé.
>
> 14. Démontrer qu’il existe un entier $\ell \geqslant 2$ tel que, pour tout entier $n \geqslant 1$, l’ensemble $D_\ell$ compte au plus $n$ éléments inférieurs ou égaux à $3mn$.
>
> Dans la suite, on considère également un tel entier $\ell$.
>
> 15. Soit $a$ un entier naturel non nul. Démontrer que, si $a$ n’est pas pointu, alors $a$ appartient à $A_\ell$ ou à $D_\ell$.
>
> 16. Démontrer qu’il existe un entier $n \geqslant 1$ tel que l’ensemble $A_\ell$ compte au plus $n$ éléments inférieurs ou égaux à $3mn$.
>
> 17. En déduire qu’il existe un entier naturel $k$ inférieur ou égal à $2n$ et tel que chacun des entiers $mk + 1$, $mk + 2$, $\ldots$, $m(k + 1)$ soit pointu.
>
> 18. Démontrer la propriété $\mathscr{P}$ introduite en préambule de l’énoncé.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Congruenze]], [[method_conteggio|Conteggio]], [[method_disuguaglianze|Disuguaglianze]], [[method_telescoping|Telescoping]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1gqclWWaTQPwXGISec96nuFGo_EJgQbQL/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Numeri puntati: un intero n>=2 è puntato se esistono n numeri interi consecutivi ognuno con un fattore primo p>n; esistenza, grandi numeri puntati, conteggiamento tramite coefficienti binomiali e stime logaritmiche.*

> Problema 1: Numeri puntati (Nombres pointus).
> 
> $n$ sia un numero naturale con $n \geq 2$. Diciamo che $n$ è puntato se esistono $n$ numeri interi consecutivi che ciascuno di essi ammette un fattore primo $p > n$ (l'ineguaglianza $p \geq n$ non è sufficiente).
> 
> Ad esempio, $1$ è puntato, e basta che il numero intero $n$ stesso non abbia fattore primo $p > n$; quindi $5$ non è puntato poiché $5$ non ha fattore primo strettamente superiore a $5$. D'altra parte $4$ non è puntato. I numeri $146$, $147 = 3 \times 7^2$ e $2 + 2 \times 3$ sono puntati.
> 
> Cerchiamo di stabilire la seguente proprietà $\mathscr{P}$: per ogni numero intero $m \geq 1$, esiste un numero intero $n$ in modo che tutti i numeri interi consecutivi $m$ $n+1, n+2, \ldots, n+m$ siano puntati.
> 
> 1.1 Alcuni esempi. 1. Il numero $2020$ è puntato? 2. Qual è il numero naturale puntato più piccolo non uguale a $1$? 3. Quale è il numero più piccolo puntato che possiede almeno due fattori primi distinti? 4. Mostrare che esistono infiniti numeri non puntati. 5. Mostrare che esistono infinitamente molti numeri punti. 6. Indicare i numeri non indicati tra $1$ e $20$. Qual è la lunghezza massima di una sequenza di numeri consecutivi non puntati tra $1$ e $20$?
> 
> 1.2 Un po' sui numeri a grandi punte. Abbiamo impostato $0! = 1$ e $\ell! = 1 \times 2 \times \cdots \times \ell = \ell(\ell-1)!$ per ogni intero $\ell \geq 1$. $k$ e $n$ siano due numeri naturali con $k \leq n$. Ricordiamo che il numero $$\frac{n!}{k!(n-k)!}$$ è un numero intero; lo denonizziamo $F_{n,k}$. 7. a. Calcolare i valori dei numeri $F_{5,1}$ e $F_{5,k}$. b. Dimostrare che, se $k = 0$ o $k = n$, allora $F_{n,k} = 1$. c. Dimostrare che, se $1 \leq k \leq n-1$, allora $F_{n,k} = F_{n-1,k} + F_{n-1,k-1}$. d. Deduzione che per ogni numero naturale $n$ e per ogni numero naturale $k \leq n$, $F_{n,k}$ è un multiple di $2^n$. Nelle parti che seguono, per un numero naturale $n$, indichiamo con $\mathrm{P}_n$ l'insieme dei numeri primi $p$ tale che $n+1 \leq p \leq 2n$, e indichiamo con $\pi_n$ il numero di elementi di $\mathrm{P}_n$. 8. a. Mostra che per ogni numero primo $p$ appartenente al set $\mathrm{P}_n$, l'intero $F_{2n,n}$ è divisibile per $p$. b. Mostra che $\pi_n \leq n$. c. Dimostrare che, se $p$ e $q$ sono due numeri primi distinti appartenenti all'insieme $\mathrm{P}_n$, allora $F_{2n,n}$ è divisibile da $d$ (il prodotto). d. Riduzione di $n^{\pi_n} \leq 2^{2n}$.
> 
> 1.3 Questi insieme con pochi elementi. $b$ sia un numero naturale con $b \neq 0$. $f_b : ]0,+\infty[ \to \mathbb{R}$ sia la funzione definita da $$f_b(x) = \frac{(\ln(x))^b}{x} \quad \text{for } x > 0.$$ 9. a. $x$ sia un numero reale tale che $x > 1$, e $y = \ln(x) > 0$. Mostrare che $$f_b(x) = \frac{b^b}{(\exp(y)/y)^b}.$$ b. Riduzione di $\lim_{x \to +\infty} f_b(x) = 0$. In tutto il resto di questa parte, consideriamo i numeri naturali $\ell$ e $n$ con $n \geq 2$. 10. Indichiamo con $A_\ell$ l'insieme di numeri naturali non zero che hanno tutti i loro fattori primi inferiori o uguali a $2^\ell$. a. I numeri primi inferiori a $2^\ell$: qual è la cardinalità di questo insieme? b. Denotare con $p_1, p_2, \ldots, p_k$ i numeri primi inferiori o uguali a $2^\ell$, numerati in ordine crescente. Il $a$ deve essere un elemento di $A_\ell$ inferiore o uguale a $n$. Dimostrare che esistono numeri naturali $\alpha_1, \alpha_2, \ldots, \alpha_k$ tali da $a = p_1^{\alpha_1} \times p_2^{\alpha_2} \times \cdots \times p_k^{\alpha_k}$. c. Riduzione che $A_\ell$ abbia almeno $$\left(\frac{\ln(n)}{\ln(2)} + 1\right)^{2^\ell}$$ elementi inferiori o uguali a $n$. d. Abbiamo impostato $b = 2^\ell$. Dimostrare che $A_\ell$ ha almeno $$\frac{2}{(\ln(2))^{2^\ell}} = f_b(2n) \times n$$ elementi inferiori o uguali a $n$. 11. a. $k$ sia un numero naturale non zero. Ricordiamo che l'insieme $\mathrm{P}_{j,k}$ designa l'insieme dei numeri primi $p$ in modo tale che $2^k + 1 \leq p \leq 2 \times 2^k$, e che $\pi_{j,k}$ sia il numero dei suoi elementi. Indichiamo con $B_{\ell,1}$ l'insieme di numeri naturali non zero che hanno tutti i loro fattori primi superiori a $2^\ell$ e inferiori o uguali a $n$. Indicare $\mathrm{P}_{j,1} \cup \mathrm{P}_{j,2} \cup \ldots$ b. Mostrare che qualsiasi elemento dell'insieme $B_{\ell,1}$ è... c. $\mu$ sia un numero naturale non zero. Determinare i numeri naturali non zero inferiori o uguali a $n$ che sono multipli di $\mu$ e inferiori o uguali a $n/p$. d. Deduzione che l'insieme $B_{\ell,1}$ abbia al massimo $n \times \pi_n/2^k$ elementi inferiori o uguali a $n$. e. $p_1, p_2$ siano due numeri primi distinti. Dimostrare che il numero di numeri naturali non zero inferiori o uguali a $n$ che sono multipli di $p_1$ e di $p_2$ è inferiore o uguale a $n/(p_1 \times p_2)$. f. Riduzione che $B_{\ell,1}$ abbia almeno $4n/4^\ell$ elementi inferiori o uguali a $n$. g. Riduzione che $B_{\ell,1}$ abbia almeno $4n/4^\ell$ elementi inferiori o uguali a $n$. 12. Per ogni intero $k \geq 2$, indichiamo anche con $C_k$ l'insieme $\{B_{k-1} \cup B_{k-2} \cup \ldots\}$ o $B_{k,2}$. a. Qual è l'elemento più grande dell'insieme $C_2$? b. Deduzione che l'insieme $C_4$ abbia al massimo $$\frac{4n}{k^2} \leq \frac{4n}{k(k-1)}$$ elementi inferiori o uguali a $n$. 13. Ora si fissa $\ell \geq 2$, e si denota con $D_\ell$ l'insieme di numeri naturali non zero che appartengono a $C_k$ per nessun $k$. a. Dimostrare che qualsiasi elemento di $\{1, \ldots, n\}$ appartenente a $D_\ell$ appartiene a uno degli insiemi $C_2, C_3, \ldots, C_\ell$. b. Mostrare che per ogni numero intero $k \geq 2$, uno ha $$\frac{1}{k^2} \leq \frac{1}{k(k-1)} = \frac{1}{k-1} - \frac{1}{k}.$$ c. Riduzione che $D_\ell$ abbia almeno $8n/(\ell-1)$ elementi inferiori o uguali a $n$.
> 
> 1.4 Molti numeri puntati. In questa parte, consideriamo un numero naturale fisso non zero $n$. 14. Mostrare che esiste un intero $\ell \geq 2$ tale che, per ogni intero $n \geq 1$, l'insieme $D_\ell$ abbia al massimo $n$ elementi inferiori o uguali a $3$ (inferiori o uguali a $3\delta n$). In quanto segue, consideriamo tale numero intero $\ell$. 15. a. $n$ sia un numero naturale non zero. Dimostrare che, se $n$ non è puntato, allora $n$ appartiene a $A_\ell$ o a $D_\ell$. b. Mostrare che esistono almeno $n/2$ numeri naturali inferiori o uguali a $n$ che non sono puntati (inferiori o uguali a $3\delta n$). 16. Dimostrare che esiste un numero intero $n \geq 1$ tale da $\exp(\delta n)$ per ogni $n \geq 1$. 17. Deduire che esiste un numero naturale $k$ inferiore o uguale a $2\delta n$ in modo tale che ciascuno dei numeri interi $mk+1, mk+2, \ldots, m(k+1)$ sia puntato. 18. Provare la proprietà $\mathscr{P}$ introdotta nel preambolo della dichiarazione.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]], [[method_congruenze|Aritmetica modulare / congruenze]], [[method_conteggio|Conteggio combinatorio]], [[method_disuguaglianze|Disuguaglianze classiche]], [[method_telescoping|Somme telescopiche]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima e approssimazione]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Pointed numbers: an integer n>=2 is pointed if there exist n consecutive integers each having a prime factor p>n; existence, large pointed numbers, counting via binomial coefficients and logarithmic estimates.*

> Problem 1: Pointed numbers (Nombres pointus).
> 
> Let $n$ be a natural number with $n \geq 2$. We say that $n$ is pointed if there exist $n$ consecutive integers each of which admits a prime factor $p > n$ (the inequality $p \geq n$ does not suffice).
> 
> For example, $1$ is pointed, and it is enough that the integer $n$ itself has no prime factor $p > n$; thus $5$ is not pointed since $5$ has no prime factor strictly greater than $5$. On the other hand $4$ is not pointed. The numbers $146$, $147 = 3 \times 7^2$ and $2 + 2 \times 3$ are pointed.
> 
> We seek to establish the following property $\mathscr{P}$: for every integer $m \geq 1$, there exists an integer $n$ such that the $m$ consecutive integers $n+1, n+2, \ldots, n+m$ are all pointed.
> 
> 1.1 Some examples.
> 1. Is the number $2020$ pointed?
> 2. Which is the smallest pointed natural number not equal to $1$?
> 3. Which is the smallest pointed number possessing at least two distinct prime factors?
> 4. Show that there exist infinitely many non-pointed numbers.
> 5. Show that there exist infinitely many pointed numbers.
> 6. Establish the non-pointed numbers between $1$ and $20$. What is the maximal length of a sequence of consecutive non-pointed numbers between $1$ and $20$?
> 
> 1.2 A bit on large pointed numbers.
> We set $0! = 1$ and $\ell! = 1 \times 2 \times \cdots \times \ell = \ell(\ell-1)!$ for every integer $\ell \geq 1$. Let $k$ and $n$ be two natural numbers with $k \leq n$. We recall that the number
> $$\frac{n!}{k!(n-k)!}$$
> is an integer; we denote it $F_{n,k}$.
> 7. a. Compute the values of the numbers $F_{5,1}$ and $F_{5,k}$.
>    b. Show that, if $k = 0$ or $k = n$, then $F_{n,k} = 1$.
>    c. Show that, if $1 \leq k \leq n-1$, then $F_{n,k} = F_{n-1,k} + F_{n-1,k-1}$.
>    d. Deduce that, for every natural number $n$ and every natural number $k \leq n$, $F_{n,k}$ is a multiple of $2^n$.
> In the parts that follow, for a natural number $n$, we denote by $\mathrm{P}_n$ the set of prime numbers $p$ such that $n+1 \leq p \leq 2n$, and we denote by $\pi_n$ the number of elements of $\mathrm{P}_n$.
> 8. a. Show that, for every prime number $p$ belonging to the set $\mathrm{P}_n$, the integer $F_{2n,n}$ is divisible by $p$.
>    b. Show that $\pi_n \leq n$.
>    c. Show that, if $p$ and $q$ are two distinct prime numbers belonging to the set $\mathrm{P}_n$, then $F_{2n,n}$ is divisible by $d$ (the product).
>    d. Deduce that $n^{\pi_n} \leq 2^{2n}$.
> 
> 1.3 These sets with few elements.
> Let $b$ be a natural number with $b \neq 0$. Let $f_b : ]0,+\infty[ \to \mathbb{R}$ be the function defined by
> $$f_b(x) = \frac{(\ln(x))^b}{x} \quad \text{for } x > 0.$$
> 9. a. Let $x$ be a real number such that $x > 1$, and let $y = \ln(x) > 0$. Show that
> $$f_b(x) = \frac{b^b}{(\exp(y)/y)^b}.$$
>    b. Deduce that $\lim_{x \to +\infty} f_b(x) = 0$.
> In all the rest of this part, we consider natural numbers $\ell$ and $n$ with $n \geq 2$.
> 10. We denote by $A_\ell$ the set of nonzero natural numbers having all their prime factors inferior or equal to $2^\ell$.
>     a. The prime numbers inferior to $2^\ell$: what is the cardinality of this set?
>     b. Denote by $p_1, p_2, \ldots, p_k$ the prime numbers inferior or equal to $2^\ell$, numbered in increasing order. Let $a$ be an element of $A_\ell$ inferior or equal to $n$. Show that there exist natural numbers $\alpha_1, \alpha_2, \ldots, \alpha_k$ such that $a = p_1^{\alpha_1} \times p_2^{\alpha_2} \times \cdots \times p_k^{\alpha_k}$.
>     c. Deduce that $A_\ell$ has at most
> $$\left(\frac{\ln(n)}{\ln(2)} + 1\right)^{2^\ell}$$
> elements inferior or equal to $n$.
>     d. We set $b = 2^\ell$. Show that $A_\ell$ has at most
> $$\frac{2}{(\ln(2))^{2^\ell}} = f_b(2n) \times n$$
> elements inferior or equal to $n$.
> 11. a. Let $k$ be a nonzero natural number. We recall the set $\mathrm{P}_{j,k}$ designates the set of prime numbers $p$ such that $2^k + 1 \leq p \leq 2 \times 2^k$, and let $\pi_{j,k}$ be the number of its elements. We denote by $B_{\ell,1}$ the set of nonzero natural numbers having all their prime factors superior to $2^\ell$ and inferior or equal to $n$. Show $\mathrm{P}_{j,1} \cup \mathrm{P}_{j,2} \cup \ldots$
>    b. Show that any element of the set $B_{\ell,1}$ is...
>    c. Let $\mu$ be a nonzero natural number. Determine the nonzero natural numbers inferior or equal to $n$ that are multiples of $\mu$ and inferior or equal to $n/p$.
>    d. Deduce that the set $B_{\ell,1}$ has at most $n \times \pi_n/2^k$ elements inferior or equal to $n$.
>    e. Let $p_1, p_2$ be two distinct prime numbers. Show that the number of nonzero natural numbers inferior or equal to $n$ that are multiples of $p_1$ and of $p_2$ is inferior or equal to $n/(p_1 \times p_2)$.
>    f. Deduce that $B_{\ell,1}$ has at most $4n/4^\ell$ elements inferior or equal to $n$.
>    g. Deduce that $B_{\ell,1}$ has at most $4n/4^\ell$ elements inferior or equal to $n$.
> 12. For every integer $k \geq 2$, we also denote by $C_k$ the set $\{B_{k-1} \cup B_{k-2} \cup \ldots\}$ or $B_{k,2}$.
>     a. What is the largest element of the set $C_2$?
>     b. Deduce that the set $C_4$ has at most
> $$\frac{4n}{k^2} \leq \frac{4n}{k(k-1)}$$
> elements inferior or equal to $n$.
> 13. We now fix $\ell \geq 2$, and we denote by $D_\ell$ the set of nonzero natural numbers that belong to $C_k$ for no $k$.
>     a. Show that any element of $\{1, \ldots, n\}$ belonging to $D_\ell$ belongs to one of the sets $C_2, C_3, \ldots, C_\ell$.
>     b. Show that, for every integer $k \geq 2$, one has
> $$\frac{1}{k^2} \leq \frac{1}{k(k-1)} = \frac{1}{k-1} - \frac{1}{k}.$$
>     c. Deduce that $D_\ell$ has at most $8n/(\ell-1)$ elements inferior or equal to $n$.
> 
> 1.4 Many pointed numbers.
> In this part, we consider a fixed nonzero natural number $n$.
> 14. Show that there exists an integer $\ell \geq 2$ such that, for every integer $n \geq 1$, the set $D_\ell$ has at most $n$ elements inferior or equal to $3$ (inferior or equal to $3\delta n$). In what follows, we consider such an integer $\ell$.
> 15. a. Let $n$ be a nonzero natural number. Show that, if $n$ is not pointed, then $n$ belongs to $A_\ell$ or to $D_\ell$.
>     b. Show that there exist at least $n/2$ natural numbers inferior or equal to $n$ that are not pointed (inferior or equal to $3\delta n$).
> 16. Show that there exists an integer $n \geq 1$ such that $\exp(\delta n)$ for every $n \geq 1$.
> 17. Deduce that there exists a natural number $k$ inferior or equal to $2\delta n$ such that each of the integers $mk+1, mk+2, \ldots, m(k+1)$ is pointed.
> 18. Prove the property $\mathscr{P}$ introduced in the preamble of the statement.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]], [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Congruenze]], [[method_conteggio|Conteggio]], [[method_disuguaglianze|Disuguaglianze]], [[method_telescoping|Telescoping]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1gqclWWaTQPwXGISec96nuFGo_EJgQbQL/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_algebra,topic_funzionali,topic_insiemi_funzioni,method_disuguaglianze,method_estremalita,method_ricorsione,method_backward,skill_manipolazione_algebrica,skill_lettura_attenta,skill_astrazione,skill_stima"></span>

<div class="qlang-switch" data-default="fr"></div>


*An explosive number: the sequence x_{n+1}=(1+1/x_n)^n with x_1=a; the function f_n(x)=(1+1/x)^n; an explosivity criterion; proving there is a unique explosive number via a contraction argument.*

> Problème 2 : Un nombre explosif
>
> Si $\alpha$ est un réel strictement positif, on définit la suite $(x_n)$ par $x_1 = \alpha$ et
> $$x_{n+1} = \left(1 + \frac{1}{x_n}\right)^n \quad \text{pour tout entier } n \geqslant 1,$$
> que l’on appelle suite associée à $\alpha$.
>
> On dit que le nombre $\alpha$ est explosif si la suite $(x_n)$ associée à $\alpha$ diverge vers $+\infty$. Le but du problème est de prouver qu’il existe un unique nombre explosif.
>
> Pour tout entier $n \geqslant 1$, on désigne par $f_n$ la fonction définie sur $\mathbb{R}^{*+}$ par :
> $$f_n(x) = \left(1 + \frac{1}{x}\right)^n \quad \text{pour tout réel } x > 0.$$
> Ainsi, pour tout entier $n \geqslant 1$, on a :
> $$x_{n+1} = f_n(x_n).$$
> Dans tout le problème, pour tout réel $t$, l’exponentielle de $t$ sera notée $\exp(t)$.
>
> 2.1 Un encadrement de $f_n(x)$
>
> Soit $x$ un réel strictement positif.
>
> 1. Démontrer que
> $$\frac{1}{x+1} \leqslant \int_x^{x+1} \frac{1}{t}\,dt \leqslant \frac{1}{x}.$$
>
> 2. En déduire que
> $$\frac{1}{x+1} \leqslant \ln\left(1 + \frac{1}{x}\right) \leqslant \frac{1}{x}.$$
>
> 3. En déduire que, pour tout entier $n \geqslant 1$, on a :
> $$\exp\left(\frac{n}{x + 1}\right) \leqslant f_n(x) \leqslant \exp\left(\frac{n}{x}\right).$$
>
> 2.2 Un critère d’explosivité
>
> 4. Soit $\alpha$ un réel strictement positif et $(x_n)$ la suite associée à $\alpha$. La suite $(x_n)$ peut-elle être majorée ? Peut-elle être convergente ?
>
> Pour tout entier $n \geqslant 1$, on pose
> $$y_n = \frac{n+1}{\ln(n+2)} - 1.$$
>
> 5. a. Étudier les variations de la fonction $g$ définie sur $[2; +\infty[$ par
> $$g(x) = \frac{x}{\ln(x + 1)} \quad \text{pour tout réel } x \geqslant 2.$$
>
> b. En déduire que, pour tout entier $n \geqslant 8$, on a $y_n > e$.
>
> c. Démontrer que, pour tout entier $n \geqslant 2$, on a $y_n > 1$ et $y_{n-1} \leqslant \dfrac{n}{\ln(y_n)}$.$
>
> 6. Soit $\alpha$ un réel strictement positif et $(x_n)$ la suite qui lui est associée.
>
> a. Démontrer que, pour tout entier $n \geqslant 8$, si $x_n < y_{n-1}$ alors $x_{n+1} > n + 1$ et $x_{n+2} < e$.
>
> b. En déduire que, si $\alpha$ est explosif, alors $x_n \geqslant y_{n-1}$ pour tout entier $n \geqslant 8$.
>
> c. Démontrer que, si $\alpha$ est explosif, alors $x_n \leqslant \dfrac{n}{\ln(y_n)}$ pour tout entier $n \geqslant 8$.
>
> d. Démontrer que $\alpha$ est explosif si et seulement si $y_{n-1} \leqslant x_n \leqslant \dfrac{n}{\ln(y_n)}$ pour tout entier $n \geqslant 8$.
>
> 7. Soient $\alpha$, $\beta$ et $\gamma$ des réels strictement positifs tels que $\alpha \leqslant \beta \leqslant \gamma$. Démontrer que, si $\alpha$ et $\gamma$ sont explosifs, alors $\beta$ est explosif.
>
> 2.3 Un unique nombre explosif
>
> Soient $r$ et $s$ deux fonctions définies sur $\mathbb{R}^{*+}$ et telles que $s(x) > 0$ pour tout réel $x > 0$. On désigne par $r \circ s$ la fonction définie sur $\mathbb{R}^{*+}$ par :
> $$r \circ s(x) = r(s(x)) \quad \text{pour tout réel } x > 0.$$
> On pose alors $h_1 = f_1$ et
> $$h_n = f_n \circ h_{n-1} \quad \text{pour tout entier } n \geqslant 2.$$
> De plus, on note $h_n\bigl(\mathbb{R}^{*+}\bigr)$ l’ensemble des réels $h_n(x)$ lorsque $x$ décrit $\mathbb{R}^{*+}$.
>
> On admettra enfin que, pour tout entier $n \geqslant 1$, la fonction $h_n$ est continue sur $\mathbb{R}^{*+}$.
>
> 8. a. Expliciter l’expression de $h_2(x)$ pour tout réel $x > 0$.
>
> b. Soit $\alpha$ un réel strictement positif et $(x_n)$ sa suite associée. Pour tout entier $n \geqslant 1$, exprimer $x_{n+1}$ en fonction de $h_n$ et $\alpha$.
>
> 9. a. Démontrer que, pour tout entier $n \geqslant 1$, la fonction $h_n$ est strictement monotone sur $\mathbb{R}^{*+}$.
>
> b. À l’aide de la calculatrice et sans plus de justification, déterminer des valeurs approchées à $10^{-2}$ près des réels $u$ et $v$ tels que $]u; v[ = h_8\bigl(\mathbb{R}^{*+}\bigr)$. Vérifier que l’on a $u < e$ et $9 < v$.
>
> c. Démontrer que, pour tout entier $n \geqslant 9$, on a $[e; n] \subset h_{n-1}\bigl(\mathbb{R}^{*+}\bigr)$.
>
> d. En déduire que, pour tout entier $n \geqslant 9$, on a $\bigl[y_{n-1}; n/\ln(y_n)\bigr] \subset h_{n-1}\bigl(\mathbb{R}^{*+}\bigr)$.
>
> Pour tout entier $n \geqslant 9$, on pose $I_n = \bigl[y_{n-1}; n/\ln(y_n)\bigr]$ et on note $J_n$ l’ensemble des réels strictement positifs $x$ tels que $h_{n-1}(x) \in I_n$.
>
> 10. a. Démontrer que, pour tout entier $n \geqslant 9$, il existe des réels $a_n$ et $b_n$ tels que $J_n = [a_n; b_n]$.
>
> b. Démontrer que, pour tout entier $n \geqslant 9$, on a $J_{n+1} \subset J_n$.
>
> c. En déduire que les suites $(a_n)$ et $(b_n)$ convergent.
>
> Dans toute la suite, on note $\alpha$ et $\beta$ les limites respectives des suites $(a_n)$ et $(b_n)$. De plus, on désigne par $(\alpha_n)$ et $(\beta_n)$ les suites respectivement associées à $\alpha$ et $\beta$. On rappelle que cela signifie que $\alpha_1 = \alpha$ et $\beta_1 = \beta$ et que, pour tout entier $n \geqslant 1$ :
> $$\alpha_{n+1} = f_n(\alpha_n) \quad \text{et} \quad \beta_{n+1} = f_n(\beta_n).$$
>
> 11. a. Démontrer que $\alpha$ et $\beta$ sont explosifs.
>
> b. Démontrer qu’un réel $x > 0$ est explosif si et seulement si $\alpha \leqslant x \leqslant \beta$.
>
> 12. a. Démontrer que, pour tout entier $n \geqslant 9$ et tout réel $x \in I_n$, on a :
> $$\bigl|f_n'(x)\bigr| \geqslant \left|f_n'\left(\frac{n}{\ln(y_n)}\right)\right|.$$
>
> b. En déduire que, pour tout entier $n \geqslant 9$ et tout réel $x \in I_n$, on a :
> $$\bigl|f_n'(x)\bigr| \geqslant \frac{y_n\bigl(\ln(y_n)\bigr)^2}{n}\exp\left(-\frac{1 + \ln(y_n)}{n + \ln(y_n)}\ln(y_n)\right).$$
>
> c. Démontrer que $\displaystyle\lim_{n \to +\infty} \frac{y_n \ln(n)}{n} = 1$ et que $\displaystyle\lim_{n \to +\infty} \frac{\ln(y_n)}{\ln(n)} = 1$.
>
> d. En déduire qu’il existe un entier $N \geqslant 9$ tel que, pour tout entier $n \geqslant N$ et tout réel $x \in I_n$, on a :
> $$\bigl|f_n'(x)\bigr| \geqslant 2.$$
>
> 13. Dans cette question, on désigne donc par $N$ un tel entier.
>
> a. Déduire du 12.d. que, pour tout entier $n \geqslant N$ et pour tous réels $x$ et $y$ dans $I_n$, on a :
> $$\bigl|f_n(x) - f_n(y)\bigr| \geqslant 2|x - y|.$$
>
> b. Démontrer que, si $\alpha < \beta$, alors il existe un réel strictement positif $C$ tel que :
> $$\bigl|\alpha_n - \beta_n\bigr| \geqslant C \times 2^n \quad \text{pour tout entier } n \geqslant N.$$
>
> 14. a. Démontrer qu’il n’existe qu’un seul nombre explosif.
>
> b. À l’aide de la calculatrice et en indiquant l’algorithme utilisé, donner une valeur approchée de $\alpha$ à $10^{-2}$ près.

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_estremalita|Estremalità]], [[method_ricorsione|Ricorsione]], [[method_backward|Backward]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_astrazione|Astrazione]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1gqclWWaTQPwXGISec96nuFGo_EJgQbQL/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>


*Un numero esplosivo: la sequenza x_{n+1}=(1+1/x_n)^n con x_1=a; la funzione f_n(x)=(1+1/x)^n; un criterio di esplosività; dimostrando l'esistenza di un numero esplosivo unico tramite un argomento di contrazione.*

> Problema 2: Numero esplosivo (Un nombre explosif).
> 
> Se $a$ è un numero reale strettamente positivo, definiamo la sequenza $(x_n)$ da $x_1 = a$ e $$x_{n+1} = \left(1 + \frac{1}{x_n}\right)^n \quad \text{for every integer } n \geq 1,$$ che chiamiamo la sequenza associata a $a$. Diciamo che il numero $a$ è esplosivo se la sequenza $(x_n)$ associata a $a$ diverge da $+\infty$. L'obiettivo del problema è dimostrare che esiste un numero esplosivo unico.
> 
> Per ogni intero $n \geq 1$, designhiamo con $f_n$ la funzione definita su $\mathbb{R}_+^*$ da $$f_n(x) = \left(1 + \frac{1}{x}\right)^n \quad \text{for every real } x > 0,$$ in modo che per ogni intero $n \geq 1$, abbiamo $x_{n+1} = f_n(x_n)$. In tutto il problema, per ogni reale $t$, l'esponenziale di $t$ è indicato $\exp(t)$.
> 
> 2.1 Un delimitamento di $f_n(x)$. Sia il $x$ un reale strettamente positivo. 1. Mostra che $\dfrac{1}{x+1} \leq \displaystyle\int_x^{x+1} \dfrac{dt}{t} \leq \dfrac{1}{x}$. 2. Riduzione di $\dfrac{1}{x+1} \leq \ln\!\left(1 + \dfrac{1}{x}\right) \leq \dfrac{1}{x}$. 3. Deduci che, per ogni numero intero $n \geq 1$, uno ha $$\exp\!\left(\frac{n}{x+1}\right) \leq f_n(x) \leq \exp\!\left(\frac{n}{x}\right).$$
> 
> 2.2 Criterio di esplosività. 4. Sia $a$ un reale strettamente positivo e $(x_n)$ la sequenza associata a $a$. La sequenza $(x_n)$ può essere dilimitata sopra? Può essere convergente? Per ogni intero $n \geq 1$, impostamo $y_n = \dfrac{n+1}{\ln(x_{n+1})}$. 5. a. Studiare le variazioni della funzione $g$ definita su $]2,+\infty[$ da $$g(x) = \frac{x}{\ln(x+1)} \quad \text{for every real } x \geq 0.$$ b. Deduci che, per ogni numero intero $n \geq 0$, uno ha $y_n > e$. c. Mostrare che per ogni numero intero $n \geq 2$, uno ha $x_n > 1$ e $y_{n-1} \leq \dfrac{n}{\ln(x_n)}$. 6. Sia $a$ un reale strettamente positivo e $(x_n)$ la sequenza associata a esso. a. Dimostrare che, per ogni numero intero $n \geq 8$, se $x_n < y_{n-1}$ allora $x_{n+1} > 1$ e $x_{n+2} \geq e$. b. Se $a$ è esplosivo, dedurre che $x_n > 1$ e $x_{n+1} > e$ per ogni numero intero $n \geq 8$. c. Dimostrare che, se $a$ è esplosivo, allora $x_n > e$ per ogni numero intero $n \geq 8$. d. Dimostrare che $a$ è esplosivo se e solo se $y_{n-1} \leq x_n \leq \dfrac{e}{\ln(x_n)}$ per ogni numero intero $n \geq 8$. 7. Se $a$, $\beta$ e $\gamma$ sono tre valori strettamente positivi tali che $a < \beta < \gamma$. Dimostrare che, se $a$ e $\gamma$ sono esplosivi, allora anche $\beta$ lo è.
> 
> 2.3 Numero esplosivo unico. Lasciate che $r$ e $s$ siano due funzioni definite su $\mathbb{R}_+^*$ e tali che $s(x) > 0$ per tutte le $x > 0$. Indichiamo con $r \circ s$ la funzione definita su $\mathbb{R}_+^*$ con $r \circ s(x) = r(s(x))$ per tutti $x > 0$. Quindi impostamo $h_1 = f_1$ e $$h_n = f_n \circ h_{n-1} \quad \text{for every integer } n \geq 2.$$ Inoltre, indichiamo con $h_n[\mathbb{R}_+^*]$ l'insieme di reali $h_n(x)$ come $x$ corre su $\mathbb{R}_+^*$. 8. a. Indicare esplicitamente l'espressione di $h_2(x)$ per ogni $x > 0$ reale. b. Mostra che per ogni numero intero $n \geq 1$, la funzione $h_n$ è continua su $\mathbb{R}_+^*$. 9. a. Mostra che per ogni numero intero $n \geq 1$, la funzione $h_n$ è strettamente monotona su $\mathbb{R}_+^*$. b. Con l'aiuto del calcolatore e senza ulteriori giustificazioni, determinare valori approssimativi a $10^{-3}$ dei valori reali $a$ e $b$ in modo tale che $h_8[\mathbb{R}_+^*]$ sia l'intervallo corrispondente. Verificare che $a < e$ e $b > e$. c. Mostrare che per ogni intero $n \geq 9$, uno ha $e \in ]c, n] \subset h_{n-1}[\mathbb{R}_+^*]$. d. Deduci che, per ogni intero $n \geq 9$, uno ha $]a, n] \subset h_{n-1}[\mathbb{R}_+^*]$. Per ogni reale $n \geq 9$, imponiamo $J_n = [y_{n-1}, n/\ln(y_n)]$ e denonizziamo con $I_n$ l'insieme di reali strettamente positivi come $h_{n-1}(x) \in J_n$. 10. a. Mostrare che per ogni numero intero $n \geq 9$ esistono valori reali $a_n$ e $b_n$ tali da $J_n = ]a_n, b_n]$. b. Mostrare che per ogni numero intero $n \geq 9$, uno ha $J_{n+1} \subset J_n$. 11. a. Dimostrare che $a$ e $\beta$ sono esplosivi. b. Dimostrare che un singolo $x > 0$ è esplosivo se e solo se $a \leq x \leq b$. 12. a. Mostrare che per ogni intero $n \geq 9$ e per ogni reale $x \in I_n$, si ha $$|f_n'(x)| \geq \left|f_n\!\left(\frac{n}{\ln(x)}\right)\right|.$$ b. Deduci che, per ogni intero $n \geq 9$ e per ogni reale $x \in I_n$, si ha $$|f_n'(x)| \geq \frac{y_n\,[\ln(y_n)]^2}{n}\exp\!\left(-\frac{1 + \ln(y_n)}{n + \ln(y_n)}\ln(y_n)\right).$$ c. Dimostrare che $\displaystyle\lim_{n \to +\infty} \frac{y_n \ln(n)}{n} = 1$ e $\displaystyle\lim_{n \to +\infty} \frac{\ln(y_n)}{\ln(n)} = 1$. d. Deduci che esiste un $N > 9$ reale in modo tale che, per ogni intero $n \geq N$ e per ogni reale $x \in I_n$, si abbia $|f_n'(x)| \geq 2$. 13. In questa domanda, indichiamo con $N$ un tale intero. a. Dalla domanda 12.d si deduce che per ogni intero $n \geq N$ e per ogni reale $x \in I_n$ si ha $$|f_n(x) - f_n(y)| \geq 2|x - y|.$$ b. Mostrare che, se $a < \beta$, allora esiste un reale $C$ strettamente positivo tale che $|a_n - \beta_n| \geq C \times 2^n$ per ogni intero $n \geq N$. 14. a. Mostrare che esiste un numero esplosivo unico. b. Con l'aiuto del calcolatore e indicando l'algoritmo utilizzato, indicare un valore approssimativo di $a$ all'interno di $10^{-2}$.

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]], [[method_estremalita|Principio di estremalita]], [[method_ricorsione|Ricorsione]], [[method_backward|Ragionamento all'indietro]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_stima|Stima e approssimazione]]
**Area:** [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*An explosive number: the sequence x_{n+1}=(1+1/x_n)^n with x_1=a; the function f_n(x)=(1+1/x)^n; an explosivity criterion; proving there is a unique explosive number via a contraction argument.*

> Problem 2: An explosive number (Un nombre explosif).
> 
> If $a$ is a strictly positive real number, we define the sequence $(x_n)$ by $x_1 = a$ and
> $$x_{n+1} = \left(1 + \frac{1}{x_n}\right)^n \quad \text{for every integer } n \geq 1,$$
> which we call the sequence associated to $a$. We say that the number $a$ is explosive if the sequence $(x_n)$ associated to $a$ diverges to $+\infty$. The goal of the problem is to prove that there exists a unique explosive number.
> 
> For every integer $n \geq 1$, we designate by $f_n$ the function defined on $\mathbb{R}_+^*$ by
> $$f_n(x) = \left(1 + \frac{1}{x}\right)^n \quad \text{for every real } x > 0,$$
> so that for every integer $n \geq 1$, we have $x_{n+1} = f_n(x_n)$.
> Throughout the problem, for every real $t$, the exponential of $t$ is denoted $\exp(t)$.
> 
> 2.1 A bounding of $f_n(x)$.
> Let $x$ be a strictly positive real.
> 1. Show that $\dfrac{1}{x+1} \leq \displaystyle\int_x^{x+1} \dfrac{dt}{t} \leq \dfrac{1}{x}$.
> 2. Deduce that $\dfrac{1}{x+1} \leq \ln\!\left(1 + \dfrac{1}{x}\right) \leq \dfrac{1}{x}$.
> 3. Deduce that, for every integer $n \geq 1$, one has
> $$\exp\!\left(\frac{n}{x+1}\right) \leq f_n(x) \leq \exp\!\left(\frac{n}{x}\right).$$
> 
> 2.2 A criterion of explosivity.
> 4. Let $a$ be a strictly positive real and $(x_n)$ the sequence associated to $a$. Can the sequence $(x_n)$ be bounded above? Can it be convergent?
> For every integer $n \geq 1$, we set $y_n = \dfrac{n+1}{\ln(x_{n+1})}$.
> 5. a. Study the variations of the function $g$ defined on $]2,+\infty[$ by
> $$g(x) = \frac{x}{\ln(x+1)} \quad \text{for every real } x \geq 0.$$
>    b. Deduce that, for every integer $n \geq 0$, one has $y_n > e$.
>    c. Show that, for every integer $n \geq 2$, one has $x_n > 1$ and $y_{n-1} \leq \dfrac{n}{\ln(x_n)}$.
> 6. Let $a$ be a strictly positive real and $(x_n)$ the sequence associated to it.
>    a. Show that, for every integer $n \geq 8$, if $x_n < y_{n-1}$ then $x_{n+1} > 1$ and $x_{n+2} \geq e$.
>    b. Deduce that, if $a$ is explosive, then $x_n > 1$ and $x_{n+1} > e$ for every integer $n \geq 8$.
>    c. Show that, if $a$ is explosive, then $x_n > e$ for every integer $n \geq 8$.
>    d. Show that $a$ is explosive if and only if $y_{n-1} \leq x_n \leq \dfrac{e}{\ln(x_n)}$ for every integer $n \geq 8$.
> 7. Let $a$, $\beta$ and $\gamma$ be three strictly positive reals such that $a < \beta < \gamma$. Show that, if $a$ and $\gamma$ are explosive, then $\beta$ also is.
> 
> 2.3 A unique explosive number.
> Let $r$ and $s$ be two functions defined on $\mathbb{R}_+^*$ and such that $s(x) > 0$ for all $x > 0$. We designate by $r \circ s$ the function defined on $\mathbb{R}_+^*$ by $r \circ s(x) = r(s(x))$ for all $x > 0$. We then set $h_1 = f_1$ and
> $$h_n = f_n \circ h_{n-1} \quad \text{for every integer } n \geq 2.$$
> Moreover, we denote by $h_n[\mathbb{R}_+^*]$ the set of reals $h_n(x)$ as $x$ runs over $\mathbb{R}_+^*$.
> 8. a. Make explicit the expression of $h_2(x)$ for every real $x > 0$.
>    b. Show that, for every integer $n \geq 1$, the function $h_n$ is continuous on $\mathbb{R}_+^*$.
> 9. a. Show that, for every integer $n \geq 1$, the function $h_n$ is strictly monotone on $\mathbb{R}_+^*$.
>    b. With the help of the calculator and without further justification, determine approximate values to $10^{-3}$ of the reals $a$ and $b$ such that $h_8[\mathbb{R}_+^*]$ is the corresponding interval. Verify that $a < e$ and $b > e$.
>    c. Show that, for every integer $n \geq 9$, one has $e \in ]c, n] \subset h_{n-1}[\mathbb{R}_+^*]$.
>    d. Deduce that, for every integer $n \geq 9$, one has $]a, n] \subset h_{n-1}[\mathbb{R}_+^*]$.
> For every real $n \geq 9$, we set $J_n = [y_{n-1}, n/\ln(y_n)]$ and we denote by $I_n$ the set of strictly positive reals such that $h_{n-1}(x) \in J_n$.
> 10. a. Show that, for every integer $n \geq 9$, there exist reals $a_n$ and $b_n$ such that $J_n = ]a_n, b_n]$.
>     b. Show that, for every integer $n \geq 9$, one has $J_{n+1} \subset J_n$.
> 11. a. Show that $a$ and $\beta$ are explosive.
>     b. Show that a single $x > 0$ is explosive if and only if $a \leq x \leq b$.
> 12. a. Show that, for every integer $n \geq 9$ and every real $x \in I_n$, one has
> $$|f_n'(x)| \geq \left|f_n\!\left(\frac{n}{\ln(x)}\right)\right|.$$
>     b. Deduce that, for every integer $n \geq 9$ and every real $x \in I_n$, one has
> $$|f_n'(x)| \geq \frac{y_n\,[\ln(y_n)]^2}{n}\exp\!\left(-\frac{1 + \ln(y_n)}{n + \ln(y_n)}\ln(y_n)\right).$$
>     c. Show that $\displaystyle\lim_{n \to +\infty} \frac{y_n \ln(n)}{n} = 1$ and $\displaystyle\lim_{n \to +\infty} \frac{\ln(y_n)}{\ln(n)} = 1$.
>     d. Deduce that there exists a real $N > 9$ such that, for every integer $n \geq N$ and every real $x \in I_n$, one has $|f_n'(x)| \geq 2$.
> 13. In this question, we designate by $N$ such an integer.
>     a. Deduce from question 12.d that, for every integer $n \geq N$ and every real $x \in I_n$, one has
> $$|f_n(x) - f_n(y)| \geq 2|x - y|.$$
>     b. Show that, if $a < \beta$, then there exists a strictly positive real $C$ such that $|a_n - \beta_n| \geq C \times 2^n$ for every integer $n \geq N$.
> 14. a. Show that there exists a unique explosive number.
>     b. With the help of the calculator and indicating the algorithm used, give an approximate value of $a$ to within $10^{-2}$.

**Topic:** [[topic_algebra|Algebra]], [[topic_funzionali|Equazioni funzionali]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze]], [[method_estremalita|Estremalità]], [[method_ricorsione|Ricorsione]], [[method_backward|Backward]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_astrazione|Astrazione]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1gqclWWaTQPwXGISec96nuFGo_EJgQbQL/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
