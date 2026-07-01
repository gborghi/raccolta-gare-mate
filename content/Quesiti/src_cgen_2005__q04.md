---
title: Concours Général des Lycées 2005 — Matematica — Quesito 4
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2005__Q04
parent: src_cgen_2005
competition: Concours Général des Lycées 2005 — Matematica
family: concours_generale
year: '2005'
level: Concours Général
country: Francia
modalita: individuale
quesito: '4'
summary: >-
  Discrete logarithm modulo a prime: primitive roots, definition and existence
  of the discrete log, an elementary algorithm, and Adleman's index-calculus
  method with a probabilistic complexity analysis.
qa_score: '2'
topics:
  - topic_aritmetica
  - topic_algebra
  - topic_probabilita
methods:
  - method_congruenze
  - method_conteggio
  - method_fattorizzazione
skills:
  - skill_manipolazione_algebrica
  - skill_conteggio_sistematico
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2005
  - livello/Concours-Général
  - topic/aritmetica
  - topic/algebra
  - topic/probabilita
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Discrete logarithm modulo a prime: primitive roots, definition and existence of the discrete log, an elementary algorithm, and Adleman's index-calculus method with a probabilistic complexity analysis.*

> If $m_1$ and $m_2$ are two integers such that $m_1\leq m_2$, we denote by $[m_1;m_2]$ the set of integers $k$ such that $m_1\leq k\leq m_2$.
> 
> If $a$, $b$ and $n$ are three integers, we note $a\equiv b\ (\mathrm{modulo}\ n)$ when $a$ and $b$ are congruent modulo $n$, that is to say when $b-a$ is a multiple of $n$.
> 
> Throughout this exercise, $p$ designates a prime number.
> 
> **4.1 Definition of the discrete logarithm**
> 
> For all $A\in\mathbb{N}$, we note $(A \bmod p)$ the remainder of the Euclidean division of $A$ by $p$. It is the unique integer of $[0;p-1]$ congruent to $A$ modulo $p$.
> 
> An integer $x\in[1;p-1]$ is called a primitive root modulo $p$ when the set of the $(x^k \bmod p)$ for $k\in N$ is the set $[1;p-1]$, that is to say when the powers of $x$, computed modulo $p$, describe $[1;p-1]$ entirely.
> 
> Thus for $p=5$:
> - $1$ is not a primitive root modulo $5$ since its powers always equal $1$.
> - $2$ is a primitive root modulo $5$, since: $(2^0 \bmod 5)=1$, $(2^1 \bmod 5)=2$, $(2^2 \bmod 5)=4$, $(2^3 \bmod 5)=3$.
> - $3$ is a primitive root modulo $5$, since: $(3^0 \bmod 5)=1$, $(3^1 \bmod 5)=3$, $(3^2 \bmod 5)=4$, $(3^3 \bmod 5)=2$.
> - $4$ is not a primitive root of $5$ since $(4^k \bmod 5)$, $k\in N$ takes alternately the value $1$ or $4$.
> 
> **1.** In this question we take $p=7$. Determine the primitive roots modulo $7$.
> 
> We admit henceforth that, whatever the prime number $p$, there exists at least one primitive root modulo $p$. In what follows, we designate by $g$ a primitive root modulo $p$.
> 
> **2. a.** Show that the set $\{g^k \bmod p\}$ for $k\in[0;p-2]$ is $[1;p-1]$.
> **b.** Let $A\in[1;p-1]$. Justify the existence and uniqueness of an integer $a\in[1;p-2]$ such that $A=(g^a \bmod p)$.
> 
> $a$ is called the logarithm of base $g$ modulo $p$ of $A$; we note it $\ell(A)$.
> 
> **c.** Let $b$ be a natural integer congruent to $a$ modulo $p$. Calculate $g^b \bmod p$.
> 
> **3.** An elementary solution to determine $\ell(A)$ consists in computing the integers $\{g^k \bmod p\}$, for $k=0,1,\ldots$, until we find $A$.
> **a.** Describe an algorithm that realizes this work.
> **b.** In this question, we take $p=53$, $A=40$, $g=20$ (we will admit that $20$ is indeed a primitive root modulo $53$). Programming the previous algorithm on a calculator, determine $\ell(A)$.
> 
> **4.2 Computation of the discrete logarithm by Adleman's method**
> 
> This part exploits the fact that the knowledge of the logarithms of a few integers allows one to rapidly determine the logarithm of any integer.
> 
> **1.** We place ourselves in the case $p=113$, $g=55$ and we give $\ell(2)=60$, $\ell(3)=5$. Find $\ell(54)$.
> 
> We suppose henceforth, for the rest of this part, the prime numbers $p_1,\ldots,p_n$ strictly less than $p$ and the integers $a_1,\ldots,a_n$ such that, for all $i\in[1;n]$, the prime factors of $(g^i \bmod p)$ belong to $[p_1;\cdots;p_n]$. For each $i\in[1;n]$, we thus have a relation $(g^{a_i} \bmod p)=p_1^{e_{i,1}}p_2^{e_{i,2}}\cdots p_n^{e_{i,n}}$ where the $e_{i,j}$ for $(i,j)\in[1;n]^2$ are natural integers.
> 
> **2.** Show that, for all $i\in[1;n]$, $a_i=e_{i,1}\ell(p_1)+e_{i,2}\ell(p_2)+\cdots+e_{i,n}\ell(p_n)\ (\mathrm{modulo}\ (p-1))$.
> 
> **3.** In this question we take $p=53$, $g=20$, $n=2$, $p_1=2$, $p_2=5$.
> **a.** With the help of $g$ and $g^3$, determine $\ell(2)$ and $\ell(5)$.
> **b.** Deduce $\ell(40)$.
> **c.** How many integers of $[1;52]$ can be written in the form $2^\alpha 5^\beta$, with $\alpha$ and $\beta$ natural integers?
> 
> **4.** Let $A\in[1;p-1]$.
> **a.** Show that the set $\{g^s A \bmod p\}$ for $s\in[0;p-2]$ is $[1;p-1]$.
> **b.** We suppose known $s\in N$ such that $(g^s A \bmod p)$ factorizes with the help of $p_1,\ldots,p_n$ uniquely. We suppose known $\ell(p_1),\ldots,\ell(p_n)$, deduce $\ell(A)$.
> **c.** With $p=53$ and $g=20$, determine $\ell(30)$.
> 
> **5.** We return to the general case.
> **a.** What is the number of integers of $[1;p-1]$ that are a power of $p_1$?
> **b.** Deduce the probability for that an integer $s\in[0;p-2]$ is such that $(g^s A \bmod p)$ is a power of $p_1$.
> **c.** Show that the probability $P$ for that an integer $s\in[0;p-2]$ is such that $(g^s A \bmod p)$ factorizes with the help of $p_1$ and $p_2$ uniquely verifies: $$\frac{(\ln(p-1))^2}{2(p-1)\big(\ln p_1\big)\big(\ln p_2\big)}\leq P\leq\frac{1}{p-1}\left(\frac{\ln(p-1)}{\ln p_1}+1\right)\left(\frac{\ln(p-1)}{\ln p_2}+1\right).$$
> **d.** Generalize the result to the case of $n$ prime numbers $p_1,\ldots,p_n$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_conteggio|Conteggio]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1rEB9uBD886_GOlWlnaWMbpsJf-6HZvT3/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Logaritmo discreto modulo a primo: radici primitive, definizione e esistenza del registro discreto, un algoritmo elementare e il metodo di calcolo dell'indice di Adleman con un'analisi di complessità probabilistica.*

> Se $m_1$ e $m_2$ sono due integri tali da $m_1\leq m_2$, indichiamo con $[m_1;m_2]$ l'insieme di integri $k$ tali da $m_1\leq k\leq m_2$.
> 
> Se $a$, $b$ e $n$ sono tre integri, si nota $a\equiv b\ (\mathrm{modulo}\ n)$ quando $a$ e $b$ sono modulo congruente $n$, cioè quando $b-a$ è un multiple di $n$.
> 
> Durante tutto questo esercizio, $p$ designa un numero primo.
> 
> **4.1 Definizione del logaritmo discreto**
> 
> Per tutti $A\in\mathbb{N}$, notiamo $(A \bmod p)$ il resto della divisione euclidiana di $A$ da $p$. È il numero intero unico di $[0;p-1]$ congruente a $A$ modulo $p$.
> 
> Un numero intero $x\in[1;p-1]$ è chiamato modulo radice primitiva $p$ quando l'insieme del $(x^k \bmod p)$ per $k\in N$ è l'insieme $[1;p-1]$, vale a dire quando le potenze di $x$, modulo calcolato $p$, descrivono interamente $[1;p-1]$.
> 
> Per $p=5$: - $1$ non è un modulo radice primitivo $5$ poiché le sue potenze sono sempre uguali a $1$. - $2$ è un modulo radice primitivo $5$, poiché: $(2^0 \bmod 5)=1$, $(2^1 \bmod 5)=2$, $(2^2 \bmod 5)=4$, $(2^3 \bmod 5)=3$. - < MSK10/> è un modulo radicale primitivo < MSK11/>, poiché: < MSK12/>, < MSK13/>, < MSK14/>, < MSK15/>. - < MSK16/> non è una radice primitiva di < MSK17/> poiché < MSK18/>, < MSK19/> prende alternativamente il valore < MSK20/> o < MSK21/>.
> 
> In questa domanda prendiamo $p=7$. Determinare le radici primitive modulo $7$.
> 
> Admettiamo che, qualunque sia il numero primo $p$, esiste almeno un modulo radice primitivo $p$. In quanto segue, indichiamo con $g$ un modulo radice primitivo $p$.
> 
> **2. a.** Indicare che l'insieme $\{g^k \bmod p\}$ per $k\in[0;p-2]$ è $[1;p-1]$. < MSK8/>b.< MSK9/> Lasciate < MSK3/>. Giustificare l'esistenza e l'unicità di un numero intero $a\in[1;p-2]$ tale che $A=(g^a \bmod p)$.
> 
> $a$ è chiamato il logaritmo di base $g$ modulo $p$ di $A$; lo notiamo $\ell(A)$.
> 
> **c.** $b$ sia un intero naturale congruente a $a$ modulo $p$. Calcolare $g^b \bmod p$.
> 
> **3.** Una soluzione elementare per determinare $\ell(A)$ consiste nel calcolare gli enti $\{g^k \bmod p\}$, per $k=0,1,\ldots$, fino a trovare $A$. **a.** Descrivere un algoritmo che realizza questo lavoro. **b.** In questa domanda, prendiamo $p=53$, $A=40$, $g=20$ (ammetteremo che $20$ è effettivamente un modulo radice primitivo $53$). Programmare l'algoritmo precedente su una calcolatrice, determinare $\ell(A)$.
> 
> **4.2 Calcolo del logaritmo discreto con il metodo di Adleman**
> 
> Questa parte sfrutta il fatto che la conoscenza dei logaritmi di alcuni numeri interi consente di determinare rapidamente il logaritmo di qualsiasi numero intero.
> 
> **1. ** Ci mettiamo nel caso $p=113$, $g=55$ e diamo $\ell(2)=60$, $\ell(3)=5$. Trova < MSK4/>.
> 
> Supponiamo da ora in poi, per il resto di questa parte, i numeri primi $p_1,\ldots,p_n$ strettamente inferiori a $p$ e gli enti $a_1,\ldots,a_n$ in modo tale che, per tutti $i\in[1;n]$, i fattori primi di $(g^i \bmod p)$ appartengono a $[p_1;\cdots;p_n]$. Per ogni $i\in[1;n]$, abbiamo quindi una relazione $(g^{a_i} \bmod p)=p_1^{e_{i,1}}p_2^{e_{i,2}}\cdots p_n^{e_{i,n}}$ in cui $e_{i,j}$ per $(i,j)\in[1;n]^2$ sono integri naturali.
> 
> < MSK2/>2. < MSK3/> Indicare che, per tutti < MSK0/>, < MSK1/>.
> 
> In questa domanda prendiamo $p=53$, $g=20$, $n=2$, $p_1=2$, $p_2=5$. < MSK16/>a.< MSK17/> Con l'aiuto di < MSK5/> e < MSK6/>, determinare < MSK7/> e < MSK8/>. < MSK18/>b.< MSK19/> Riduzione < MSK9/>. **c.** Quanti integri di $[1;52]$ possono essere scritti nella forma $2^\alpha 5^\beta$, con $\alpha$ e $\beta$ integri naturali?
> 
> < MSK12/>4. < MSK13/> Lasciate < MSK0/>. **a.** Indicare che l'insieme $\{g^s A \bmod p\}$ per $s\in[0;p-2]$ è $[1;p-1]$. **b.** Supponiamo conosciuto $s\in N$ in modo tale che $(g^s A \bmod p)$ factorizza con l'aiuto di $p_1,\ldots,p_n$ in modo unico. Supponiamo conosciuto $\ell(p_1),\ldots,\ell(p_n)$, dedurre $\ell(A)$. < MSK18/>c.< MSK19/> Con < MSK9/> e < MSK10/>, determinare < MSK11/>.
> 
> Ritorniamo al caso generale. **a.** Qual è il numero di integri di $[1;p-1]$ che sono una potenza di $p_1$? **b.** Ridurre la probabilità che un intero $s\in[0;p-2]$ sia tale che $(g^s A \bmod p)$ sia una potenza di $p_1$. **c.** Mostra che la probabilità $P$ per un intero $s\in[0;p-2]$ è tale che $(g^s A \bmod p)$ fattorizza con l'aiuto di $p_1$ e $p_2$ verifica in modo unico: $$\frac{(\ln(p-1))^2}{2(p-1)\big(\ln p_1\big)\big(\ln p_2\big)}\leq P\leq\frac{1}{p-1}\left(\frac{\ln(p-1)}{\ln p_1}+1\right)\left(\frac{\ln(p-1)}{\ln p_2}+1\right).$$ **.** Generalizza il risultato al caso di $n$ numeri primi $p_1,\ldots,p_n$.

[[src_cgen_2005__Q04]]
