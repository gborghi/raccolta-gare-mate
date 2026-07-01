---
title: Japan Junior Mathematical Olympiad 2005 — Quesito 11
tipo: quesito
lang: en
quesito_id: quesito_src_jjmo3q__Q11
parent: src_jjmo3q
competition: Japan Junior Mathematical Olympiad 2005
family: jjmo
year: '2005'
level: JJMO
country: Giappone
modalita: individuale
quesito: '11'
summary: 'Fill-in-the-blank: minimal count forcing a borrow-free subtraction'
qa_score: '3'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_cassetti
  - method_casework
  - method_conteggio
skills:
  - skill_astrazione
  - skill_conteggio_sistematico
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/giappone
  - comp/jjmo
  - anno/2005
  - livello/JJMO
  - topic/combinatoria
  - topic/aritmetica
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Fill-in-the-blank: minimal count forcing a borrow-free subtraction*

> Fill in the blanks $\boxed{\text{(a)}}$ through $\boxed{\text{(h)}}$ with numbers.
> 
> **Problem.** Find the smallest $N$ such that, if one chooses $N$ distinct integers from the integers between $0$ and $999$ inclusive, then there must always exist two of them whose difference can be computed by subtraction without any borrowing.
> 
> **Solution.** In the following, a '$3$-digit number' means a string of three digits, each from $0$ to $9$. Every integer from $0$ to $99$ is written with leading zeros, so that all integers from $0$ to $999$ are regarded as $3$-digit numbers; for example, $87$ is regarded as the $3$-digit number $087$.
> 
> The number of $3$-digit numbers whose digit sum equals $13$ is $\boxed{\text{(a)}}$. For such a number $A$, exactly one of the following three statements holds:
> 
> (1) the units digit of $A$ is at most $\boxed{\text{(b)}}$ and its tens digit is at least $\boxed{\text{(c)}}$;
> (2) the tens digit of $A$ is at most $\boxed{\text{(b)}}$ and its hundreds digit is at least $\boxed{\text{(c)}}$;
> (3) the hundreds digit of $A$ is at most $\boxed{\text{(b)}}$ and its units digit is at least $\boxed{\text{(c)}}$.
> 
> In case (1), we say that a $3$-digit number arising in the following procedure is *dominated by* $A$:
> - Increase the hundreds digit of $A$ by $1$ at a time until the sum of the hundreds and units digits becomes $9$; after that, decrease the units digit by $1$ at a time until it becomes $9$.
> - Increase the hundreds digit of $A$ by $1$ at a time until the sum of the tens and hundreds digits becomes $9$ (do not perform this step if the sum of the tens and hundreds digits of $A$ is already $9$); after that, decrease the tens digit by $1$ at a time until it becomes $9$.
> 
> Similarly, in case (2) perform the procedure with 'units' replaced by 'tens', 'tens' by 'hundreds', and 'hundreds' by 'units'; in case (3) with 'units' replaced by 'hundreds', 'tens' by 'units', and 'hundreds' by 'tens'.
> 
> For example, $439$ is dominated by $\boxed{\text{(d)}}$, and $143$ is dominated by $\boxed{\text{(e)}}$, $\boxed{\text{(f)}}$, $\boxed{\text{(g)}}$. Reasoning in the same way, one finds that every $3$-digit number is dominated by some $3$-digit number whose digit sum is $13$. On the other hand, when two distinct numbers having the same digit sum $13$ are subtracted, a borrow necessarily occurs. Therefore the required smallest value is $\boxed{\text{(h)}}$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_cassetti|Principio dei cassetti]], [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1HkqI1STeIhyrK-Nxz8XApzegeSbRZJJP/view)


<span class="qlang-split" data-lang="it"></span>


*Inserimento del vuoto: numero minimo che costringe una sottrazione senza prestito*

> Riempire i vuoti $\boxed{\text{(a)}}$ e $\boxed{\text{(h)}}$ con numeri.
> 
> **Problema.** Trovare il più piccolo $N$ in modo tale che, se si sceglie $N$ integri distinti dagli integri tra $0$ e $999$ inclusivi, allora ci devono sempre essere due di loro la cui differenza può essere calcolata mediante sottrazione senza alcun prestito.
> 
> **Soluzione.** Qui di seguito, un "numero a $3$" significa una catena di tre cifre, ciascuna da $0$ a $9$. Ogni numero intero da $0$ a $99$ è scritto con i zeri di punta, in modo che tutti i numeri interi da $0$ a $999$ siano considerati numeri a cifre $3$; ad esempio, $87$ è considerato numero a cifre $3$ $087$.
> 
> Il numero di numeri $3$ di cui la somma digitali è uguale a $13$ è $\boxed{\text{(a)}}$. Per tale numero $A$, una delle seguenti tre affermazioni è esatta:
> 
> (1) la cifra di unità di $A$ è al massimo $\boxed{\text{(b)}}$ e la sua cifra decimale è almeno $\boxed{\text{(c)}}$; (2) la cifra decimale di $A$ è al massimo $\boxed{\text{(b)}}$ e la sua cifra di centinaia è almeno $\boxed{\text{(c)}}$; (3) la cifra di centinaia di $A$ è al massimo $\boxed{\text{(b)}}$ e la sua cifra di unità è almeno $\boxed{\text{(c)}}$.
> 
> Nel caso (1), diciamo che un numero $3$ a numeri numerici derivante dalla seguente procedura è * dominato da * $A$: - Aumentare la cifra di centinaia di $A$ di $1$ in un tempo fino a che la somma delle centinaia e delle cifre di unità diventa $9$; dopo di che, diminuire le cifre di unità di $1$ in un tempo fino a che non diventa $9$. - Aumentare le centinaia di cifre di $A$ di $1$ alla volta fino a che la somma delle decine e centinaia di cifre non diventi $9$ (non eseguire questo passaggio se la somma delle decine e centinaia di cifre di $A$ è già $9$); quindi diminuire le decine di cifre di $1$ alla volta fino a che non diventi $9$.
> 
> Allo stesso modo, nel caso (2) eseguire la procedura con "unità" sostituite da "cenni", "cenni" da "cento" e "cento" da "unità"; nel caso (3) con "unità" sostituite da "cento", "cenni" da "unità" e "cento" da "cenni".
> 
> Ad esempio, $439$ è dominato da $\boxed{\text{(d)}}$, e $143$ è dominato da $\boxed{\text{(e)}}$, $\boxed{\text{(f)}}$, $\boxed{\text{(g)}}$. Ragionando allo stesso modo, si scopre che ogni numero $3$ è dominato da un certo numero $3$ di cui la somma digitale è $13$. D'altra parte, quando vengono sottratte due numeri distinti con la stessa somma $13$, si verifica necessariamente un prestito. Pertanto il valore minimo richiesto è $\boxed{\text{(h)}}$.

[[src_jjmo3q__Q11]]
