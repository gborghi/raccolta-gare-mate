---
title: Concours Général des Lycées 2010 — Matematica — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2010__Q03
parent: src_cgen_2010
competition: Concours Général des Lycées 2010 — Matematica
family: concours_generale
year: '2010'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  Probabilistic/recursive model of three cell species evolving over generations:
  compatibility probability bound, and convergence of proportion sequences under
  two scenarios
qa_score: '2'
topics:
  - topic_probabilita
  - topic_algebra
  - topic_disuguaglianze
methods:
  - method_ricorsione
  - method_disuguaglianze
  - method_induzione
skills:
  - skill_manipolazione_algebrica
  - skill_modellizzazione
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2010
  - livello/Concours-Général
  - topic/probabilita
  - topic/algebra
  - topic/disuguaglianze
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Probabilistic/recursive model of three cell species evolving over generations: compatibility probability bound, and convergence of proportion sequences under two scenarios*

> Problem 3: On life on Mars!
> 
> (Narrative introduction, paraphrased from the source: a biologist, having learned of a discovery from the University of the Italian Union, has succeeded in observing what no one had managed to observe before, the cells of the 'Bouquet Royal'. It is a primitive form of life; the organisms measure no more than a millionth of a millimetre, which is part of the difficulty of observing them. With only partial information, the scientists try to observe the following facts.)
> 
> With only partial information, the scientists try to observe the following facts:
> 
> - There are three species of cells, denoted $A$, $B$ and $C$.
> - The reproduction of cells involves the participation of three 'parent' cells.
> - Reproduction happens only if the three parents are 'compatible', that is to say if more than one of them are of the same kind (at least two of the three parents belong to the same species).
> 
> 1. One observes the respective proportions $a$, $b$, $c$ of the cells of the different species, with $a + b + c = 1$.
> 
>    a. What is the probability $p$ that three cells taken at random are compatible?
> 
>    b. Show that $p \ge \frac{1}{9}$. One may first establish a fixed lower bound $a \ge \ldots$.
> 
> When the three parents are not all of the same kind, the proportions of the species may vary from one generation to the next, in particular when one species is in minority $\beta$. The scientists hesitate between two models:
> 
> - Model 1: the descendant is of the type of the majority species $\alpha$.
> - Model 2: the descendant is of the type of the minority species $\beta$.
> 
> To evaluate these models, one denotes by $a_n$, $b_n$, $c_n$ the proportions of the different species at generation $n$, with $a_n \ge b_n \ge c_n$.
> 
> 2. Study of the first scenario. One supposes in this question that the genetics of the cells follows the first scenario.
> 
>    a. Verify that:
>    $$a_{n+1} = \frac{a_n^2(3-2a_n)}{1-6a_n b_n c_n}, \quad b_{n+1} = \frac{b_n^2(3-2b_n)}{1-6a_n b_n c_n}, \quad c_{n+1} = \frac{c_n^2(3-2c_n)}{1-6a_n b_n c_n}.$$
> 
>    b. One recalls in this question and the following ones that $a_n \ge b_n \ge c_n$. Show that for all $n$ one has $a_{n+1} > a_n > b_n > c_n$. Deduce that $a_n > b_n > c_n > 0$.
> 
>    c. Verify that the sequences $(a_n - b_n)_{n \in \mathbb{N}}$ and $(b_n - c_n)_{n \in \mathbb{N}}$ are increasing.
> 
>    d. Prove that $(a_n)_{n \in \mathbb{N}}$, $(b_n)_{n \in \mathbb{N}}$ and $(c_n)_{n \in \mathbb{N}}$ converge and determine their limits.
> 
> 3. Study of the second scenario. One supposes now that it is the second scenario that is favoured.
> 
>    a. Determine $a_{n+1}$, $b_{n+1}$, $c_{n+1}$ as functions of $a_n$, $b_n$, $c_n$.
> 
>    b. One supposes from now on that $1 > a_0 > b_0 > c_0 > 0$. Show that for all $n$ one has $1 > a_n > b_n > c_n > 0$.
> 
>    c. One sets $f(c) = \frac{3}{2} - 3c + \frac{5}{2}c^2$ and $g(c) = 1 - 6c^2 + 12c^3$. Verify that $\frac{c_{n+1}}{c_n} \ge \frac{f(c_n)}{g(c_n)}$.
> 
>    d. Determine the limits of $(a_n)$, $(b_n)$, $(c_n)$.
> 
>    e. Which scenario seems to you the most pertinent?

**Topic:** [[topic_probabilita|Probabilità]], [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_disuguaglianze|Disuguaglianze]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_modellizzazione|Modellizzazione]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1un5c72q0Dhvv-U-lXEfjcCDMxsLeoLaa/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Modello probabilistico/recursivo di tre specie cellulari che evolvono nel corso delle generazioni: limite di probabilità di compatibilità e convergenza delle sequenze proporzionali in due scenari*

> Problema 3: sulla vita su Marte!
> 
> (Introduzione narrativa, parafrasata dalla fonte: un biologo, dopo aver saputo di una scoperta dell'Università dell'Unione italiana, è riuscito ad osservare ciò che nessuno aveva mai potuto osservare prima, le cellule del "Bouquet Royal". Si tratta di una forma di vita primitiva; gli organismi misurano non più di un milionesimo di millimetro, il che fa parte della difficoltà di osservarli. Con solo informazioni parziali, gli scienziati cercano di osservare i seguenti fatti.)
> 
> Con solo informazioni parziali, gli scienziati cercano di osservare i seguenti fatti:
> 
> - Esistono tre specie di cellule, denominate $A$, $B$ e $C$. - La riproduzione delle cellule comporta la partecipazione di tre cellule "padri". - La riproduzione avviene solo se i tre genitori sono "compatibili", cioè se più di uno di essi sono della stessa specie (almeno due dei tre genitori appartengono alla stessa specie).
> 
> 1. Si osservano le rispettive proporzioni $a$, $b$, $c$ delle cellule delle diverse specie, con $a + b + c = 1$.
> 
> a. Qual è la probabilità $p$ che tre cellule prese a caso siano compatibili?
> 
> b. Mostra che $p \ge \frac{1}{9}$. Si può prima stabilire un limite inferiore fisso $a \ge \ldots$.
> 
> Quando i tre genitori non sono tutti della stessa specie, le proporzioni delle specie possono variare da una generazione all'altra, in particolare quando una specie è minoritaria $\beta$. Gli scienziati esitano tra due modelli:
> 
> - Modello 1: il discendente è del tipo della specie maggioritaria $\alpha$. - Modello 2: il discendente è del tipo della specie minoritaria $\beta$.
> 
> Per valutare questi modelli, si indicano con $a_n$, $b_n$, $c_n$ le proporzioni delle diverse specie alla generazione $n$, con $a_n \ge b_n \ge c_n$.
> 
> 2. Studiare il primo scenario. In questa domanda si suppone che la genetica delle cellule segua il primo scenario.
> 
> a. Verificare che: $$a_{n+1} = \frac{a_n^2(3-2a_n)}{1-6a_n b_n c_n}, \quad b_{n+1} = \frac{b_n^2(3-2b_n)}{1-6a_n b_n c_n}, \quad c_{n+1} = \frac{c_n^2(3-2c_n)}{1-6a_n b_n c_n}.$$
> 
> b. In questa e nelle seguenti domande si ricorda che $a_n \ge b_n \ge c_n$. Mostrare che per tutti $n$ uno ha $a_{n+1} > a_n > b_n > c_n$. Riduzione di $a_n > b_n > c_n > 0$.
> 
> c. Verificare che le sequenze $(a_n - b_n)_{n \in \mathbb{N}}$ e $(b_n - c_n)_{n \in \mathbb{N}}$ aumentino.
> 
> d. Provare che $(a_n)_{n \in \mathbb{N}}$, $(b_n)_{n \in \mathbb{N}}$ e $(c_n)_{n \in \mathbb{N}}$ convergono e determinare i loro limiti.
> 
> 3. Studio del secondo scenario. Si suppone ora che si tratti del secondo scenario favorito.
> 
> a. Determinare $a_{n+1}$, $b_{n+1}$, $c_{n+1}$ come funzioni di $a_n$, $b_n$, $c_n$.
> 
> b. Da ora in poi si suppone che $1 > a_0 > b_0 > c_0 > 0$. Mostrare che per tutti $n$ uno ha $1 > a_n > b_n > c_n > 0$.
> 
> c. Un insieme $f(c) = \frac{3}{2} - 3c + \frac{5}{2}c^2$ e $g(c) = 1 - 6c^2 + 12c^3$. Verificare che $\frac{c_{n+1}}{c_n} \ge \frac{f(c_n)}{g(c_n)}$.
> 
> d. Determinare i limiti di $(a_n)$, $(b_n)$, $(c_n)$.
> 
> e. Quale scenario ti sembra più pertinente?

[[src_cgen_2010__Q03]]
