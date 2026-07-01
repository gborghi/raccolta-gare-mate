---
title: Concours Général des Lycées 2020 — Matematica — Quesito 1
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2020__Q01
parent: src_cgen_2020
competition: Concours Général des Lycées 2020 — Matematica
family: concours_generale
year: '2020'
level: Concours Général
country: Francia
modalita: individuale
quesito: '1'
summary: >-
  Pointed numbers: an integer n>=2 is pointed if there exist n consecutive
  integers each having a prime factor p>n; existence, large pointed numbers,
  counting via binomial coefficients and logarithmic estimates.
qa_score: '1'
topics:
  - topic_aritmetica
  - topic_combinatoria
methods:
  - method_fattorizzazione
  - method_congruenze
  - method_conteggio
  - method_disuguaglianze
  - method_telescoping
  - method_induzione
skills:
  - skill_manipolazione_algebrica
  - skill_lettura_attenta
  - skill_conteggio_sistematico
  - skill_stima
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2020
  - livello/Concours-Général
  - topic/aritmetica
  - topic/combinatoria
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


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

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione]], [[method_congruenze|Congruenze]], [[method_conteggio|Conteggio]], [[method_disuguaglianze|Disuguaglianze]], [[method_telescoping|Telescoping]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1gqclWWaTQPwXGISec96nuFGo_EJgQbQL/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Numeri puntati: un intero n>=2 è puntato se esistono n numeri interi consecutivi ognuno con un fattore primo p>n; esistenza, grandi numeri puntati, conteggiamento tramite coefficienti binomiali e stime logaritmiche.*

> Problema 1: Numeri puntati (Nombres pointus).
> 
> $n$ sia un numero naturale con $n \geq 2$. Diciamo che $n$ è puntato se esistono $n$ numeri interi consecutivi che ciascuno di essi ammette un fattore primo $p > n$ (l'ineguaglianza $p \geq n$ non è sufficiente).
> 
> Ad esempio, $1$ è puntato, e basta che il numero intero $n$ stesso non abbia un fattore primo $p > n$; quindi $5$ non è puntato poiché $5$ non ha un fattore primo strettamente superiore a $5$. D'altra parte $4$ non è puntato. I numeri $146$, $147 = 3 \times 7^2$ e $2 + 2 \times 3$ sono puntati.
> 
> Cerchiamo di stabilire la seguente proprietà $\mathscr{P}$: per ogni numero intero $m \geq 1$, esiste un numero intero $n$ in modo tale che tutti i numeri interi consecutivi $m$ $n+1, n+2, \ldots, n+m$ siano puntati.
> 
> 1.1 Alcuni esempi. 1. Il numero $2020$ è puntato? 2. Qual è il numero naturale puntato più piccolo non uguale a $1$? 3. Quale è il numero più piccolo puntato che possiede almeno due fattori primi distinti? 4. Mostrare che esistono infiniti numeri non puntati. 5. Mostrare che esistono infinitamente molti numeri punti. 6. Indicare i numeri non indicati tra $1$ e $20$. Qual è la lunghezza massima di una sequenza di numeri consecutivi non puntati tra $1$ e $20$?
> 
> 1.2 Un po' sui numeri a grandi punte. Abbiamo impostato $0! = 1$ e $\ell! = 1 \times 2 \times \cdots \times \ell = \ell(\ell-1)!$ per ogni intero $\ell \geq 1$. $k$ e $n$ siano due numeri naturali con $k \leq n$. Ricordiamo che il numero $$\frac{n!}{k!(n-k)!}$$ è un numero intero; lo denonizziamo $F_{n,k}$. 7. a. Calcolare i valori dei numeri $F_{5,1}$ e $F_{5,k}$. b. Indicare che, se $k = 0$ o $k = n$, allora $F_{n,k} = 1$. c. Indicare che, se $1 \leq k \leq n-1$, allora $F_{n,k} = F_{n-1,k} + F_{n-1,k-1}$. d. Deduzione che per ogni numero naturale $n$ e per ogni numero naturale $k \leq n$, $F_{n,k}$ è un multiple di $2^n$. Nelle parti che seguono, per un numero naturale $n$, indichiamo con $\mathrm{P}_n$ l'insieme dei numeri primi $p$ tale che $n+1 \leq p \leq 2n$, e indichiamo con $\pi_n$ il numero di elementi di $\mathrm{P}_n$. 8. a. Indicare che per ogni numero primo $p$ appartenente al set $\mathrm{P}_n$, il numero intero $F_{2n,n}$ è divisibile da $p$. b. Mostra che < MSK29/>. c. Indicare che, se $p$ e $q$ sono due numeri primi distinti appartenenti all'insieme $\mathrm{P}_n$, allora $F_{2n,n}$ è divisibile da $d$ (il prodotto). d. Riduzione di < MSK35/>.
> 
> 1.3 Questi insieme con pochi elementi. $b$ sia un numero naturale con $b \neq 0$. $f_b : ]0,+\infty[ \to \mathbb{R}$ sia la funzione definita da $$f_b(x) = \frac{(\ln(x))^b}{x} \quad \text{for } x > 0.$$ 9. a. $x$ sia un numero reale tale che $x > 1$, e $y = \ln(x) > 0$. Mostrare che $$f_b(x) = \frac{b^b}{(\exp(y)/y)^b}.$$ b. Riduzione di < MSK12/>. In tutto il resto di questa parte, consideriamo i numeri naturali $\ell$ e $n$ con $n \geq 2$. 10. Indichiamo con $A_\ell$ l'insieme di numeri naturali non zero che hanno tutti i loro fattori primi inferiori o uguali a $2^\ell$. a. I numeri primi inferiori a $2^\ell$: qual è la cardinalità di questo insieme? b. Denotare con $p_1, p_2, \ldots, p_k$ i numeri primi inferiori o uguali a $2^\ell$, numerati in ordine crescente. Il $a$ deve essere un elemento di $A_\ell$ inferiore o uguale a $n$. Indicare che esistono numeri naturali $\alpha_1, \alpha_2, \ldots, \alpha_k$ tali da $a = p_1^{\alpha_1} \times p_2^{\alpha_2} \times \cdots \times p_k^{\alpha_k}$. c. Riduzione che $A_\ell$ abbia almeno $$\left(\frac{\ln(n)}{\ln(2)} + 1\right)^{2^\ell}$$ elementi inferiori o uguali a $n$. d. Abbiamo impostato $b = 2^\ell$. Indicare che < MSK29/> ha almeno < MSK3/> elementi inferiori o uguali a < MSK30/>. 11. a. $k$ sia un numero naturale non zero. Ricordiamo che l'insieme $\mathrm{P}_{j,k}$ designa l'insieme dei numeri primi $p$ in modo tale che $2^k + 1 \leq p \leq 2 \times 2^k$, e che $\pi_{j,k}$ sia il numero dei suoi elementi. Indichiamo con $B_{\ell,1}$ l'insieme di numeri naturali non zero che hanno tutti i loro fattori primi superiori a $2^\ell$ e inferiori o uguali a $n$. Indicare < MSK39/> b. Mostrare che qualsiasi elemento dell'insieme $B_{\ell,1}$ è... c. $\mu$ sia un numero naturale non zero. Determinare i numeri naturali non zero inferiori o uguali a $n$ che sono multipli di $\mu$ e inferiori o uguali a $n/p$. d. Deduzione che l'insieme $B_{\ell,1}$ abbia al massimo $n \times \pi_n/2^k$ elementi inferiori o uguali a $n$. e. $p_1, p_2$ siano due numeri primi distinti. Indicare che il numero di numeri naturali non zero inferiori o uguali a $n$ che sono multipli di $p_1$ e di $p_2$ è inferiore o uguale a $n/(p_1 \times p_2)$. f. Riduzione che $B_{\ell,1}$ abbia almeno $4n/4^\ell$ elementi inferiori o uguali a $n$. g. Riduzione che $B_{\ell,1}$ abbia almeno $4n/4^\ell$ elementi inferiori o uguali a $n$. 12. Per ogni intero $k \geq 2$, indichiamo anche con $C_k$ l'insieme $\{B_{k-1} \cup B_{k-2} \cup \ldots\}$ o $B_{k,2}$. a. Qual è l'elemento più grande dell'insieme $C_2$? b. Deduzione che l'insieme $C_4$ abbia al massimo $$\frac{4n}{k^2} \leq \frac{4n}{k(k-1)}$$ elementi inferiori o uguali a $n$. 13. Ora si fissa $\ell \geq 2$, e si denota con $D_\ell$ l'insieme di numeri naturali non zero che appartengono a $C_k$ per nessun $k$. a. Indicare che qualsiasi elemento di $\{1, \ldots, n\}$ appartenente a $D_\ell$ appartiene a uno degli insiemi $C_2, C_3, \ldots, C_\ell$. b. Mostrare che per ogni numero intero $k \geq 2$, uno ha $$\frac{1}{k^2} \leq \frac{1}{k(k-1)} = \frac{1}{k-1} - \frac{1}{k}.$$ c. Riduzione che $D_\ell$ abbia almeno $8n/(\ell-1)$ elementi inferiori o uguali a $n$.
> 
> 1.4 Molti numeri puntati. In questa parte, consideriamo un numero naturale fisso non zero $n$. 14. Mostrare che esiste un intero $\ell \geq 2$ tale che, per ogni intero $n \geq 1$, l'insieme $D_\ell$ abbia al massimo $n$ elementi inferiori o uguali a $3$ (inferiori o uguali a $3\delta n$). In quanto segue, consideriamo tale numero intero $\ell$. 15. a. $n$ sia un numero naturale non zero. Indicare che, se $n$ non è puntato, allora $n$ appartiene a $A_\ell$ o a $D_\ell$. b. Mostrare che esistono almeno $n/2$ numeri naturali inferiori o uguali a $n$ che non sono puntati (inferiori o uguali a $3\delta n$). 16. Indicare che esiste un numero intero $n \geq 1$ tale da $\exp(\delta n)$ per ogni $n \geq 1$. 17. Deduire che esiste un numero naturale $k$ inferiore o uguale a $2\delta n$ in modo tale che ciascuno dei numeri interi $mk+1, mk+2, \ldots, m(k+1)$ sia puntato. 18. Provare la proprietà $\mathscr{P}$ introdotta nel preambolo della dichiarazione.

[[src_cgen_2020__Q01]]
