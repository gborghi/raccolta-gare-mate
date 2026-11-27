---
title: Concours Général des Lycées 2009 — Matematica
tipo: gara
competition: Concours Général des Lycées 2009 — Matematica
family: concours_generale
year: '2009'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2009"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_funzionali,topic_trigonometria,topic_disuguaglianze,method_trigonometria,method_disuguaglianze,method_ricorsione,skill_manipolazione_algebrica,skill_astrazione,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*Functional equation f(2x)=2f(x)^2-1 with f(0)=1; show f(x)=cos(x×sqrt(2a)) using trig substitution and limits.*

> Le but de l'exercice est la recherche des fonctions $f$ définies sur $\mathbb{R}$, à valeurs dans l'intervalle $[-1, 1]$, vérifiant pour tout réel $x$ la relation $f(2x) = 2f(x)^2 - 1$, telles que $f(0) = 1$ et que $\frac{1 - f(x)}{x^2}$ admette une limite lorsque $x$ tend vers $0$, que l'on notera $a$.
>
> On rappelle que tout $x$ de $[-1, 1]$ s'écrit de façon unique $x = \cos(\theta)$ avec $\theta$ dans $[0, \pi]$.
>
> 1. a. Vérifier $\lim_{\theta \to 0} \frac{1 - \cos(\theta)}{\theta^2} = \frac{1}{2}$. (On pourra utiliser une formule donnant $\cos(2\alpha)$).
>
> b. Montrer, pour $\theta$ dans $\left[0, \frac{\pi}{2}\right]$, les relations : $\frac{2\theta}{\pi} \leqslant \sin(\theta)$ et $\cos(\theta) \leqslant 1 - \frac{\theta^2}{\pi}$.
>
> 2. Soit $f$ une fonction solution du problème. On se donne un réel $x$ et l'on pose, pour tout entier naturel $n$, $f\left(\frac{x}{2^n}\right) = \cos(\theta_n)$, avec $\theta_n$ dans $[0, \pi]$.
>
> a. Montrer que $f$ est continue en $0$ et que $\lim_{n \to +\infty} \theta_n = 0$.
>
> b. Vérifier l'existence d'un entier $N$ tel que pour $n \geqslant N$ on ait $\theta_{n+1} = \frac{\theta_n}{2}$.
>
> c. Établir que $a$ est positif et que $f(x) = \cos\left(x\sqrt{2a}\right)$.

**Topic:** [[topic_funzionali|Equazioni funzionali]], [[topic_trigonometria|Trigonometria]], [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_trigonometria|Trigonometria]], [[method_disuguaglianze|Disuguaglianze]], [[method_ricorsione|Recursion]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Geometria|Geometry]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1D68pXdGvkXbm-KXlSsEwpd843491VqiZ/view)


<div class="qlang-split" data-lang="it"></div>


*Equazione funzionale f(2x)=2f(x)^2-1 con f(0)=1; mostrare f(x)=cos(x×sqrt(2a)) utilizzando la sostituzione dei trigini e i limiti.*

> Problema 1: analisi. L'obiettivo dell'esercizio è quello di trovare le funzioni $f$ definite su $\mathbb{R}$, prendendo valori nell'intervallo $[-1,1]$, soddisfacendo per ogni $x$ reale la relazione $f(2x) = 2f(x)^2 - 1$, in modo tale che $f(0) = 1$ e in modo tale che $\frac{1-f(x)}{x^2}$ ammetta un limite come $x$ tende a $0$, che sarà indicato $a$. Ricordiamo che ogni $x$ in $[-1,1]$ può essere scritto in modo unico come $x = \cos(\theta)$ con $\theta$ in $[0,\pi]$.
> 
> 1. (a) Verificare $\lim_{\theta \to 0} \frac{1-\cos(\theta)}{\theta^2} = \frac{1}{2}$. (Si può usare una formula che dà $\cos(2\alpha)$.) (b) Indicare, per $\theta$ in $\left[0, \frac{\pi}{2}\right]$, le relazioni: $\frac{2\theta}{\pi} \le \sin(\theta)$ e $\cos(\theta) \le 1 - \frac{\theta^2}{\pi}$.
> 
> 2. Lasciate che $f$ sia una funzione di soluzione del problema. Ci viene dato un reale $x$ e impostare, per ogni intero naturale $n$, $f\left(\frac{x}{2^n}\right) = \cos(\theta_n)$, con $\theta_n$ in $[0,\pi]$. (a) Indicare che $f$ è continuo a $0$ e che $\lim_{n \to +\infty} \theta_n = 0$. b) Verificare l'esistenza di un numero intero $N$ tale che per $n \ge N$ si trovi $\theta_{n+1} = \frac{\theta_n}{2}$. c) Stabilire che $a$ è positivo e che $f(x) = \cos\left(x\sqrt{2a}\right)$.

**Topic:** [[topic_funzionali|Equazioni funzionali / successioni]], [[topic_trigonometria|Trigonometria]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_trigonometria|Tecniche trigonometriche]], [[method_disuguaglianze|Disuguaglianze classiche]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione / generalizzazione]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Algebra e Analisi]], [[Geometria]]


<div class="qlang-split" data-lang="en"></div>


*Functional equation f(2x)=2f(x)^2-1 with f(0)=1; show f(x)=cos(x×sqrt(2a)) using trig substitution and limits.*

> Problem 1: Analysis. The goal of the exercise is to find the functions $f$ defined on $\mathbb{R}$, taking values in the interval $[-1,1]$, satisfying for every real $x$ the relation $f(2x) = 2f(x)^2 - 1$, such that $f(0) = 1$ and such that $\frac{1-f(x)}{x^2}$ admits a limit as $x$ tends to $0$, which will be denoted $a$. Recall that every $x$ in $[-1,1]$ can be written in a unique way as $x = \cos(\theta)$ with $\theta$ in $[0,\pi]$.
> 
> 1. (a) Verify $\lim_{\theta \to 0} \frac{1-\cos(\theta)}{\theta^2} = \frac{1}{2}$. (One may use a formula giving $\cos(2\alpha)$.)
> (b) Show, for $\theta$ in $\left[0, \frac{\pi}{2}\right]$, the relations: $\frac{2\theta}{\pi} \le \sin(\theta)$ and $\cos(\theta) \le 1 - \frac{\theta^2}{\pi}$.
> 
> 2. Let $f$ be a solution function of the problem. We are given a real $x$ and we set, for every natural integer $n$, $f\left(\frac{x}{2^n}\right) = \cos(\theta_n)$, with $\theta_n$ in $[0,\pi]$.
> (a) Show that $f$ is continuous at $0$ and that $\lim_{n \to +\infty} \theta_n = 0$.
> (b) Verify the existence of an integer $N$ such that for $n \ge N$ one has $\theta_{n+1} = \frac{\theta_n}{2}$.
> (c) Establish that $a$ is positive and that $f(x) = \cos\left(x\sqrt{2a}\right)$.

**Topic:** [[topic_funzionali|Equazioni funzionali]], [[topic_trigonometria|Trigonometria]], [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_trigonometria|Trigonometria]], [[method_disuguaglianze|Disuguaglianze]], [[method_ricorsione|Recursion]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Geometria|Geometry]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1D68pXdGvkXbm-KXlSsEwpd843491VqiZ/view)



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_probabilita,topic_logica,method_casi_conteggio,method_conteggio,skill_conteggio_sistematico,skill_casework_accurato,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="fr"></div>


*Four 20-sided dice; score the face value if a face appears at least twice; compute probabilities, expected gain, and reroll strategies.*

> Je joue avec 4 dés à 20 faces. Chacun de ces dés, dont la forme est un icosaèdre, a ses faces numérotées de 1 à 20. Lorsqu'on le lance, chaque face apparaît sur le dessus avec la même probabilité $\frac{1}{20}$.
>
> Lorsque, parmi les 4 dés, une face apparaît au moins deux fois, je marque le nombre de points correspondant à cette face. Ainsi :
>
> - avec la combinaison $3 - 4 - 12 - 16$, je ne marque rien ;
> - avec la combinaison $2 - 8 - 11 - 11$, je marque $11$ points ;
> - avec la combinaison $4 - 9 - 9 - 9$, je marque $9$ points ;
> - avec la combinaison $7 - 7 - 14 - 14$, je marque $21$ points ;
> - avec la combinaison $2 - 2 - 2 - 2$, je marque $2$ points.
>
> 1. Quelle est la probabilité que je ne marque rien ?
>
> 2. Soit $a$ un entier compris entre $1$ et $20$. Déterminer, pour tout $k \leqslant 4$, la probabilité d'avoir exactement $k$ nombres $a$ parmi les dés lancés.
>
> 3. Pour tout $a$ on note $X_a$ la variable aléatoire qui vaut $1$ s'il y a au moins deux dés égaux à $a$ parmi les quatre du lancer, et $0$ sinon. Préciser la loi de $X_a$ et exprimer le gain $G$ à l'aide de ces variables. Combien de points puis-je espérer en moyenne ?
>
> 4. Quelle est la probabilité que je marque exactement $8$ points ?
>
> On suppose à partir de maintenant qu'après avoir lancé les 4 dés, je sois autorisé à relancer entre $0$ et $4$ dés pour améliorer mon score.
>
> 5. J'ai obtenu $11 - 7 - 2 - 2$. J'hésite entre tout relancer, garder le $11$, et garder les deux $2$. Que dois-je faire ?
>
> 6. On suppose que j'ai obtenu 4 dés différents $a_1 > a_2 > a_3 > a_4$. Quels dés dois-je relancer ?

**Topic:** [[topic_probabilita|Probabilità]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casi_conteggio|Casi e conteggio]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1D68pXdGvkXbm-KXlSsEwpd843491VqiZ/view)


<div class="qlang-split" data-lang="it"></div>

*Quattro dadi a 20 facce: si segna il valore di una faccia se essa compare almeno due volte; probabilità, vincita attesa e strategie di rilancio.*
> Problema 2: Probabilità. Gioco con 4 dadi di 20 volti. Ognuno di questi dadi, la cui forma è un icosaedro, ha le facce numerate da 1 a 20. Quando viene lanciato, ogni faccia appare in cima con la stessa probabilità $\frac{1}{20}$. Quando, tra i 4 dadi, un volto appare almeno due volte, guadagno il numero di punti corrispondenti a quella faccia. Così: - con la combinazione $3 - 4 - 12 - 16$ non guadagno nulla; - con la combinazione $2 - 8 - 11 - 11$ guadagno $11$ punti; - con la combinazione $4 - 9 - 9 - 9$ guadagno $9$ punti; - con la combinazione $7 - 7 - 14 - 14$ guadagno $21$ punti; - con la combinazione $2 - 2 - 2 - 2$ guadagno $2$ punti.
> 
> 1. Qual e' la probabilita' che non faccia niente? 2. $a$ sia un numero intero tra $1$ e $20$. Determinare, per ogni $k \le 4$, la probabilità di avere esattamente $k$ numeri $a$ tra i dadi lanciati. 3. Per ogni $a$ indichiamo con $X_a$ la variabile casuale che è uguale a $1$ se ci sono almeno due dadi uguali a $a$ tra i quattro del lancio, e $0$ altrimenti. Indicare la legge di $X_a$ ed esprimere il guadagno $G$ in termini di queste variabili. Quanti punti posso sperare in media? 4. Qual è la probabilità che guadagni esattamente $8$ punti?
> 
> Supponiamo ora che da ora in poi, dopo aver lanciato i 4 dadi, mi sia permesso di lanciare di nuovo tra $0$ e $4$ dadi per migliorare il mio punteggio. 5. Ho ottenuto $11 - 7 - 2 - 2$. Ho esitato tra gettare tutto indietro, mantenere il $11$, e mantenere i due $2$. - Cosa devo fare? 6. Supponiamo che abbia ottenuto 4 dadi diversi. Quali dadi devo gettare di nuovo?

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casi_conteggio|Conteggio per casi]], [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Four 20-sided dice; score the face value if a face appears at least twice; compute probabilities, expected gain, and reroll strategies.*

> Problem 2: Probabilities. I play with 4 dice of 20 faces. Each of these dice, whose shape is an icosahedron, has its faces numbered from 1 to 20. When it is thrown, each face appears on top with the same probability $\frac{1}{20}$. When, among the 4 dice, a face appears at least twice, I score the number of points corresponding to that face. Thus:
> - with the combination $3 - 4 - 12 - 16$, I score nothing;
> - with the combination $2 - 8 - 11 - 11$, I score $11$ points;
> - with the combination $4 - 9 - 9 - 9$, I score $9$ points;
> - with the combination $7 - 7 - 14 - 14$, I score $21$ points;
> - with the combination $2 - 2 - 2 - 2$, I score $2$ points.
> 
> 1. What is the probability that I score nothing?
> 2. Let $a$ be an integer between $1$ and $20$. Determine, for every $k \le 4$, the probability of having exactly $k$ numbers $a$ among the dice thrown.
> 3. For every $a$ we denote by $X_a$ the random variable which equals $1$ if there are at least two dice equal to $a$ among the four of the throw, and $0$ otherwise. Specify the law of $X_a$ and express the gain $G$ in terms of these variables. How many points can I hope for on average?
> 4. What is the probability that I score exactly $8$ points?
> 
> We now suppose that from now on, after having thrown the 4 dice, I am allowed to rethrow between $0$ and $4$ dice in order to improve my score.
> 5. I obtained $11 - 7 - 2 - 2$. I hesitate between rethrowing everything, keeping the $11$, and keeping the two $2$s. What should I do?
> 6. Suppose that I obtained 4 different dice $a_1 > a_2 > a_3 > a_4$. Which dice should I rethrow?

**Topic:** [[topic_probabilita|Probabilità]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casi_conteggio|Casi e conteggio]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1D68pXdGvkXbm-KXlSsEwpd843491VqiZ/view)



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,topic_combinatoria,method_congruenze,method_estremalita,method_simmetria,method_bigezione,skill_manipolazione_algebrica,skill_riconoscimento_pattern,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="fr"></div>


*Periods of finite sequences; for coprime a,b show a sequence with periods a and b of length >= a+b-1 is constant; study the 0/1 sequence V and its symmetry property.*

> Étant donné deux entiers $a$ et $b$, on désigne par $[\![a, b]\!]$ l'ensemble des nombres entiers compris au sens large entre $a$ et $b$. On considère une suite finie à $n$ termes $U = (u_1, u_2, \ldots, u_n)$. On dit qu'un entier strictement positif $p$ est une période de $U$ si l'on a $u_i = u_{i+p}$ pour tout entier $i$ tel que $1 \leqslant i \leqslant n - p$. Une suite peut avoir plusieurs périodes.
>
> 1. On considère deux entiers strictement positifs $a$ et $b$ premiers entre eux.
>
> a. On définit $r_k$ comme le reste de la division de $ka$ par $a + b$. Montrer que lorsque $k$ varie dans $[\![1, a + b - 1]\!]$, $r_k$ prend toutes les valeurs de $[\![1, a + b - 1]\!]$.
>
> b. En déduire que si $a$ et $b$ sont périodes de $U$ et si $n \geqslant a + b - 1$ alors $U$ est constante.
>
> 2. On suppose à présent que $a$ et $b$ sont des entiers strictement positifs de PGCD $d$. Montrer que si $U$ est périodique de périodes $a$ et $b$ et si $n \geqslant a + b - d$, alors $U$ est de période $d$.
>
> 3. On considère deux entiers $a$ et $b$ strictement supérieurs à $1$ et premiers entre eux.
>
> a. Montrer que l'on peut partager l'intervalle $[\![1, a + b - 2]\!]$ en deux sous-ensembles non vides $A$ et $B$ de manière que la suite $V$ égale à $1$ sur $A$ et à $0$ sur $B$ soit de périodes $a$ et $b$.
>
> b. Le partage obtenu à la question précédente est-il unique ? Montrer que, pour tout $x$ de $A$, $a + b - 1 - x$ est dans $A$. Quelle propriété de la suite $V$ traduit-on ainsi ?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_estremalita|Estremalità]], [[method_simmetria|Simmetria]], [[method_bigezione|Bijection / correspondence]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1D68pXdGvkXbm-KXlSsEwpd843491VqiZ/view)


<div class="qlang-split" data-lang="it"></div>

*Periodi di successioni finite; se a e b sono primi tra loro, una successione di lunghezza almeno a+b-1 con periodi a e b è costante; studio della successione 0-1 V e della sua simmetria.*
> Problema 3: aritmetica. Dati due integri $a$ e $b$, indichiamo con $[\![a,b]\!]$ l'insieme di integri che si trova in senso lato tra $a$ e $b$. Consideriamo una sequenza finita di termini $n$ $U = (u_1, u_2, \ldots, u_n)$. Diciamo che un intero rigorosamente positivo $p$ è un periodo di $U$ se $u_i = u_{i+p}$ per ogni intero $i$ tale che $1 \le i \le n - p$. Una sequenza può avere diversi periodi.
> 
> 1. Consideriamo due integri rigorosamente positivi $a$ e $b$ coprimo. (a) Definiremo $r_k$ come il resto della divisione di $ka$ da $a + b$. Indicare che quando $k$ varia in $[\![1, a+b-1]\!]$, $r_k$ assume tutti i valori di $[\![1, a+b-1]\!]$. b) Riduzione che se $a$ e $b$ sono periodi di $U$ e $n \ge a + b - 1$, allora $U$ è costante.
> 
> 2. Supponiamo ora che $a$ e $b$ siano numeri interi rigorosamente positivi con GCD $d$. Indicare che se $U$ è periodico dei periodi $a$ e $b$ e $n \ge a + b - d$, allora $U$ è periodico $d$.
> 
> 3. Consideriamo due integri $a$ e $b$ strettamente superiori a $1$ e coprimo. (a) Mostra che si può dividere l'intervallo $[\![1, a+b-2]\!]$ in due sottoinsiemi non vuoti $A$ e $B$ in modo tale che la sequenza $V$ pari a $1$ su $A$ e a $0$ su $B$ sia di periodi $a$ e $b$. (b) La divisione ottenuta nella domanda precedente è unica? Indicare che per ogni $x$ di $A$, $a + b - 1 - x$ è in $A$. Quale proprietà della sequenza $V$ esprime questo?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_estremalita|Principio di estremalita]], [[method_simmetria|Sfruttamento della simmetria]], [[method_bigezione|Bigezione / corrispondenza]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Periods of finite sequences; for coprime a,b show a sequence with periods a and b of length >= a+b-1 is constant; study the 0/1 sequence V and its symmetry property.*

> Problem 3: Arithmetic. Given two integers $a$ and $b$, we denote by $[\![a,b]\!]$ the set of integers lying in the broad sense between $a$ and $b$. We consider a finite sequence of $n$ terms $U = (u_1, u_2, \ldots, u_n)$. We say that a strictly positive integer $p$ is a period of $U$ if $u_i = u_{i+p}$ for every integer $i$ such that $1 \le i \le n - p$. A sequence may have several periods.
> 
> 1. We consider two strictly positive integers $a$ and $b$ coprime.
> (a) We define $r_k$ as the remainder of the division of $ka$ by $a + b$. Show that when $k$ varies in $[\![1, a+b-1]\!]$, $r_k$ takes all the values of $[\![1, a+b-1]\!]$.
> (b) Deduce that if $a$ and $b$ are periods of $U$ and $n \ge a + b - 1$ then $U$ is constant.
> 
> 2. We now suppose that $a$ and $b$ are strictly positive integers with GCD $d$. Show that if $U$ is periodic of periods $a$ and $b$ and $n \ge a + b - d$, then $U$ is of period $d$.
> 
> 3. We consider two integers $a$ and $b$ strictly greater than $1$ and coprime.
> (a) Show that one can partition the interval $[\![1, a+b-2]\!]$ into two non-empty subsets $A$ and $B$ in such a way that the sequence $V$ equal to $1$ on $A$ and to $0$ on $B$ is of periods $a$ and $b$.
> (b) Is the partition obtained in the previous question unique? Show that, for every $x$ of $A$, $a + b - 1 - x$ is in $A$. Which property of the sequence $V$ does this express?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_estremalita|Estremalità]], [[method_simmetria|Simmetria]], [[method_bigezione|Bijection / correspondence]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1D68pXdGvkXbm-KXlSsEwpd843491VqiZ/view)
