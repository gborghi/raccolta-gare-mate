---
title: Concours Général des Lycées 2018 — Matematica — Quesito 3
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2018__Q03
parent: src_cgen_2018
competition: Concours Général des Lycées 2018 — Matematica
family: concours_generale
year: '2018'
level: Concours Général
country: Francia
modalita: individuale
quesito: '3'
summary: >-
  Golden-number (base-phi) representations: equivalence rule 011<->100, every
  natural number is golden, pure golden representations (no two consecutive 1s),
  golden content, bounds, existence/uniqueness, and an algorithm applied to
  2018.
qa_score: '4'
topics:
  - topic_aritmetica
  - topic_algebra
  - topic_insiemi_funzioni
methods:
  - method_induzione
  - method_ricorsione
  - method_casework
skills:
  - skill_manipolazione_algebrica
  - skill_riconoscimento_pattern
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2018
  - livello/Concours-Général
  - topic/aritmetica
  - topic/algebra
  - topic/insiemi_funzioni
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Golden-number (base-phi) representations: equivalence rule 011<->100, every natural number is golden, pure golden representations (no two consecutive 1s), golden content, bounds, existence/uniqueness, and an algorithm applied to 2018.*

> Problem 3: The golden numbers.
> 
> We denote by $\varphi$ the largest real root of the equation $x^2=x+1$. The number $\varphi$, known since Antiquity, is called the golden number. A real $x$ is said to be a golden number ('nombre en or') if there exist:
> - two natural numbers $p$ and $q$
> - integers $a_p,a_{p-1},\cdots,a_0,\ldots,a_{-q}$ taking only the values $0$ or $1$ such that:
> $$x=a_p\varphi^p+a_{p-1}\varphi^{p-1}+\ldots+a_1\varphi+a_0+a_{-1}\varphi^{-1}+\cdots+a_{-q}\varphi^{-q}$$
> In this case, we will write $x\triangleright a_p\,a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$.
> For example, if $x=\varphi^3+\varphi^2+1+\frac{1}{\varphi}+\frac{1}{\varphi^4}$, we will write $x\triangleright 1101,1001$. We will then say that $1101,1001$ is a golden representation of $x$.
> It is clear that one may add, at the beginning or at the end of the representation, as many $0$s as one wishes.
> A sequence of a representation is a string of $0$s and $1$s that appears in the representation. In the previous example, $10110$ is a sequence of the representation $1101,1001$.
> 
> Part 3.1 - All natural numbers are golden.
> 1. Show that, in the golden representation of a real $x$, one can replace any sequence $011$ by $100$ and conversely, in order to obtain another golden representation of $x$. For example the real whose golden representation is $1101,1001$ also admits $1110,0001$ and $1101,0111$ as golden representations. One will say that the two sequences $011$ and $100$ are equivalent.
> 2. More generally, give a sequence in which there are never two consecutive $1$s and which is equivalent to $011\cdots 1$ where there are $n$ occurrences of the digit $1$.
> 3. Show that the integers $2$ and $3$ are golden numbers and give a golden representation of them.
> 4. Show that every natural number admits a golden representation.
> 
> Part 3.2 - Representation golden and pure.
> We say that a representation $x\triangleright a_p a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$ of a number $x$ is pure golden ('en or pur') if for all $i$,
> $$a_i\,a_{i+1}=0$$
> In other words, a representation of $x$ is pure golden if and only if it never contains two consecutive $1$s.
> Let $x$ be a non-zero real; if $x\triangleright a_p a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$, one defines the golden content ('teneur en or') of the representation as being equal to the exponent of the largest power of $\varphi$ whose coefficient equals $1$, in the equality $x=a_p\varphi^p+\ldots+a_{-q}\varphi^{-q}$.
> For example, the golden content of the representation $1101,1001$ is equal to $3$ and that of $0,0010$ is equal to $-3$.
> 1. Give a pure golden representation of the integers $2$, $3$, $4$ and $5$.
> 2. Let $x$ be a real having a pure golden representation of golden content equal to $n$.
>    a. Show that $\varphi^n\le x<\varphi^{n+1}$.
>    b. Show that the pure golden representation of a real, if it exists, is unique.
> 3. Let $x$ be a non-zero real having a pure golden representation.
>    a. Express the golden content of the pure golden representation of $x$ with the help of the natural logarithm and integer-part functions.
>    b. Write an algorithm allowing to determine this representation.
>    c. Apply your algorithm for $x=2018$.
> 4. Show that a golden real necessarily has a pure golden representation.
> 5. Show that there exist strictly positive reals that are not golden.

![[src_cgen_2018__Q03.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_induzione|Induzione]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1ndY2rTBhYsNW1k5eeouIHRqR2THD_a96/view)


<span class="qlang-split" data-lang="it"></span>


*Representazioni di numeri d'oro (base-phi): regola di equivalenza 011<->100, ogni numero naturale è oro, rappresentazioni d'oro puro (nessun 1 consecutivo), contenuto d'oro, confini, esistenza/unicità e un algoritmo applicato al 2018.*

> Problema 3: i numeri d'oro.
> 
> Indichiamo con $\varphi$ la radice reale più grande dell'equazione $x^2=x+1$. Il numero $\varphi$, conosciuto fin dall'antichità, è chiamato numero d'oro. Un $x$ reale si dice essere un numero dorato ('nombre en or') se esiste: - due numeri naturali $p$ e $q$ - numeri interi $a_p,a_{p-1},\cdots,a_0,\ldots,a_{-q}$ che assumono solo i valori $0$ o $1$ in modo tale che: $$x=a_p\varphi^p+a_{p-1}\varphi^{p-1}+\ldots+a_1\varphi+a_0+a_{-1}\varphi^{-1}+\cdots+a_{-q}\varphi^{-q}$$ In questo caso scriveremo $x\triangleright a_p\,a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$. Per esempio, se $x=\varphi^3+\varphi^2+1+\frac{1}{\varphi}+\frac{1}{\varphi^4}$, scriveremo $x\triangleright 1101,1001$. Diciamo quindi che $1101,1001$ è una rappresentazione dorata di $x$. È chiaro che si possono aggiungere, all'inizio o alla fine della rappresentazione, quante < MSK15/> si desiderano. Una sequenza di una rappresentazione è una stringa di $0$s e $1$s che appare nella rappresentazione. Nel precedente esempio, $10110$ è una sequenza della rappresentazione $1101,1001$.
> 
> Parte 3.1 - Tutti i numeri naturali sono d'oro. 1. Mostrare che, nella rappresentazione dorata di un reale $x$, si può sostituire qualsiasi sequenza $011$ da $100$ e viceversa, al fine di ottenere un'altra rappresentazione dorata di $x$. Ad esempio il reale la cui rappresentazione dorata è $1101,1001$ ammette anche $1110,0001$ e $1101,0111$ come rappresentazioni dorate. Si dirà che le due sequenze $011$ e $100$ sono equivalenti. 2. Più in generale, si deve indicare una sequenza in cui non ci sono mai due $1$ consecutivi ed è equivalente a $011\cdots 1$ in cui ci sono $n$ episodi del numero $1$. 3. Indicare che i numeri interi $2$ e $3$ sono numeri d'oro e darne una rappresentazione d'oro. 4. Mostrare che ogni numero naturale ammette una rappresentazione dorata.
> 
> Parte 3.2 - Rappresentazione dorata e pura. Diciamo che una rappresentazione $x\triangleright a_p a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$ di un numero $x$ è di puro oro ('en o pur') se per tutti $i$, $$a_i\,a_{i+1}=0$$ In altre parole, una rappresentazione di $x$ è di puro oro se e solo se non contiene mai due $1$ consecutivi. Se $x$ è un reale non-zero, se $x\triangleright a_p a_{p-1}\cdots a_0,a_{-1}\cdots a_{-q}$, si definisce il contenuto dorato ("teneur en or") della rappresentazione come uguale all'esponente della potenza più grande di $\varphi$ il cui coefficiente è uguale a $1$, nell'uguaglianza $x=a_p\varphi^p+\ldots+a_{-q}\varphi^{-q}$. Ad esempio, il contenuto dorato della rappresentazione $1101,1001$ è uguale a $3$ e quello di $0,0010$ è uguale a $-3$. 1. Indicare una rappresentazione in oro puro degli integri $2$, $3$, $4$ e $5$. 2. Il $x$ deve essere un reale che abbia una rappresentazione di oro puro del contenuto dorato pari a $n$. a. Mostra che < MSK21/>. b. Mostrate che la pura rappresentazione d'oro di un reale, se esiste, è unica. 3. Lasciate che $x$ sia un reale non-zero con una rappresentazione di oro puro. a. Esprimere il contenuto dorato della rappresentazione dorata pura di $x$ con l'aiuto del logaritmo naturale e delle funzioni di parte integrale. b. Scrivi un algoritmo che permetta di determinare questa rappresentazione. c. Applicare l'algoritmo per $x=2018$. 4. Mostrate che una reale d'oro ha necessariamente una rappresentazione d'oro puro. 5. Mostrate che esistono realtà strettamente positive che non sono d'oro.

![[src_cgen_2018__Q03.png]]

[[src_cgen_2018__Q03]]
