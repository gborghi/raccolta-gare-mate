---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026 — Quesito 7
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2026__Q07
parent: src_tfjm_2026
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2026
family: tfjm
year: '2026'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '7'
summary: >-
  Define a 'permutative' number whose double has the same digits except one
  digit (0 to 4) replaced by its double; 'rotative' moves the first digit to
  last and 'fitatory' moves the last digit to first. Decide existence and count
  such n-digit numbers, also in other bases.
qa_score: '4'
topics:
  - topic_aritmetica
  - topic_combinatoria
methods:
  - method_congruenze
  - method_casework
  - method_conteggio
  - method_fattorizzazione
skills:
  - skill_manipolazione_algebrica
  - skill_riconoscimento_pattern
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2026
  - livello/TFJM²
  - topic/aritmetica
  - topic/combinatoria
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Define a 'permutative' number whose double has the same digits except one digit (0 to 4) replaced by its double; 'rotative' moves the first digit to last and 'fitatory' moves the last digit to first. Decide existence and count such n-digit numbers, also in other bases.*

> 7. Double and digits.
> 
> We call a permutative number (nombre permutatif) a number of $\mathbb{N}^*$ whose double is composed of the same digits in an arbitrary order, except for a single digit (between $0$ and $4$) which is replaced by its double.
> 
> For example, $2 \times 163 = 326$: its double is composed of the same digits, except the digit $1$ which is replaced by the digit $2$. Conversely, the number $11$ is not permutative, because to obtain $2 \times 11 = 22$ one would have to replace each of the digits by its double.
> 
> Among these, we distinguish:
> 
>    - a rotative number (nombre rotatif): a number such that the permutation consists in moving the first digit to last, and it is this digit that is doubled. For example, $253$ would be rotative if its double were $526$.
>    - a fitatory number (nombre fitator): a number such that the permutation consists in moving the last digit to first, and it is this digit that is doubled. For example, $253$ would be fitatory if its double were $625$.
> 
> The number $163$ is neither rotative nor fitatory. See Figure 9.
> 
> 1. Let $n \ge 2$.
>    a) Does there exist a rotative number with $n$ digits?
>    b) Determine (or bound as precisely as possible) the number of rotative numbers with $n$ digits.
> 
> 2. Let $n \ge 2$.
>    a) Does there exist a fitatory number with $n$ digits?
>    b) Determine (or bound as precisely as possible) the number of fitatory numbers with $n$ digits.
> 
> 3. Let $n \ge 2$.
>    a) Let $c \in \{0, 1, 2, \dots, 9\}$. Does there exist a permutative number with $n$ digits that ends with the digit $c$?
>    b) Determine (or bound as precisely as possible) the number of permutative numbers with $n$ digits. In particular, determine the limit of this number divided by $9 \times 10^{n-1}$, if it exists ($9 \times 10^{n-1}$ being the number of numbers with $n$ digits).
> 
> 4. Repeat the previous sub-question for other bases of numeration.
> 
> Complementary question. Propose and study other directions of research.

![[src_tfjm_2026__Q07.png]]

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_congruenze|Congruenze]], [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_fattorizzazione|Fattorizzazione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1hTiNljsWOrlAluHwBHWAaMSv1TialL48/view)


<span class="qlang-split" data-lang="it"></span>


*Definire un numero "permutativo" il cui doppio ha le stesse cifre tranne una cifra (0-4), sostituito dal doppio; "rotativo" sposta la prima cifra a durare e "fitatorio" sposta l'ultima cifra a durare. Decidere l'esistenza e contare tali numeri a n cifre, anche in altre basi.*

> 7. Doppio e cifre.
> 
> Chiamiamo un numero permutativo un numero di $\mathbb{N}^*$ il cui doppio è composto dalle stesse cifre in un ordine arbitrario, ad eccezione di una singola cifra (tra $0$ e $4$) che viene sostituita dal suo doppio.
> 
> Ad esempio, $2 \times 163 = 326$: il suo doppio è composto dalle stesse cifre, ad eccezione della cifra $1$ che viene sostituita dalla cifra $2$. Al contrario, il numero $11$ non è permutativo, perché per ottenere $2 \times 11 = 22$ si dovrebbe sostituire ciascuno dei numeri con il suo doppio.
> 
> Tra questi, distingueremo:
> 
> - un numero rotativo (nombre rotatif): un numero tale che la permutazione consiste nel spostare la prima cifra per la ultima, e è questa cifra che viene raddoppiata. Ad esempio, $253$ sarebbe rotabile se il suo doppio fosse $526$. - un numero fitatorio (nombre fitator): un numero tale che la permutazione consiste nel spostare l'ultima cifra al primo, ed è questa cifra che viene raddoppiata. Ad esempio, $253$ sarebbe fitatoria se il suo doppio fosse $625$.
> 
> Il numero $163$ non è né rotativo né fitatorio. Vedi figura 9.
> 
> 1. Let < MSK0/>. a) Esiste un numero rotativo con cifre $n$? b) Determinare (o limitare con la massima precisione possibile) il numero di numeri rotativi con cifre $n$.
> 
> 2. Let < MSK0/>. a) Esiste un numero fitatorio con cifre $n$? b) Determinare (o limitare con la massima precisione possibile) il numero di numeri di inserimento con cifre $n$.
> 
> 3. Let < MSK0/>. a) Let < MSK1/>. Esiste un numero permutativo con cifre $n$ che termina con la cifra $c$? b) Determinare (o limitare con la massima precisione possibile) il numero di numeri permutativi con cifre $n$. In particolare, determinare il limite di questo numero diviso per $9 \times 10^{n-1}$, se esiste ($9 \times 10^{n-1}$ è il numero di numeri con cifre $n$).
> 
> 4. Ripetere la precedente sottoquestione per altre basi di numerazione.
> 
> Domanda complementare. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2026__Q07.png]]

[[src_tfjm_2026__Q07]]
