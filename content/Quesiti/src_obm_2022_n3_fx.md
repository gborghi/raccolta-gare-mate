---
title: Olimpíada Brasileira de Matemática 2022 — Nível 3 — Fase x
tipo: gara
competition: Olimpíada Brasileira de Matemática 2022 — Nível 3 — Fase x
family: obm
year: '2022'
level: OBM Nível 3
---
<div class="atom-reader" data-gara="Quesiti/src_obm_2022_n3_fx"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,topic_logica,topic_aritmetica,method_invarianti,method_casework,skill_astrazione,skill_ragionamento_geometrico,skill_lettura_attenta,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Stone-pile game: prove final pile count is invariant*

> A game for one person has the following rules: initially there are ten piles of stones, with $1, 2, 3, \ldots, 10$ stones respectively. A move consists of performing one of the following two operations:
> 
> (i) Choose two piles, each with at least two stones, merge them and then add two more stones to the new pile.
> 
> (ii) Choose a pile with at least 4 stones, take two stones from it and split it into two piles, with the numbers of stones in the two new piles chosen by the player.
> 
> The game ends when no move can be made. Show that the number of piles with exactly one stone at the end of the game is always the same, regardless of how the moves are made.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logic, games and strategies]], [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_casework|Case analysis]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1zz_BBn8K4_LsZ6QfCiVpK3gqOIlQZ9ly/view)


<div class="qlang-split" data-lang="it"></div>


*Gioco delle pile di pietre: dimostrare che il numero finale delle pile è invariante*

> Un gioco per una sola persona ha le seguenti regole: inizialmente ci sono dieci mucchi di pietre, con $1, 2, 3, \ldots, 10$ pietre ciascuno. Una mossa consiste nell'eseguire una delle due operazioni seguenti:
>
> (i) Scegli due pile, ciascuna con almeno due pietre, uniscile e poi aggiungi altre due pietre alla nuova pila.
>
> (ii) Scegli un mucchio con almeno 4 pietre, prendine due e dividilo in due mucchi, scegliendo il numero di pietre nei due nuovi mucchi il giocatore.
>
> Il gioco termina quando non è possibile fare alcuna mossa. Dimostrare che, alla fine del gioco, il numero di pile che contengono esattamente una pietra è sempre lo stesso, indipendentemente da come vengono fatte le mosse.


**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_casework|Analisi per casi]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,method_coordinate,method_simmetria,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*Reflection of circumcenter midpoint lies on circumcircle ABC*

> Let $ABC$ be an acute triangle with $AB < AC$. Let $K$ be the midpoint of arc $BC$ of the circumscribed circle of $ABC$ that does not contain $A$, and let $P$ be the midpoint of side $BC$. The points $I_B$ and $I_C$ are the excenters relative to vertices $B$ and $C$, respectively. Let $Q$ be the reflection of $K$ across point $A$. Show that $P$, $Q$, $I_B$, and $I_C$ lie on the same circle.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1zz_BBn8K4_LsZ6QfCiVpK3gqOIlQZ9ly/view)


<div class="qlang-split" data-lang="it"></div>


*Il riflesso del punto medio del circocentro giace sulla circonferenza circoscritta a ABC*

> Sia $ABC$ un triangolo acuto con $AB < AC$. Sia $K$ il punto medio dell'arco $BC$ della circonferenza circoscritta a $ABC$ che non contiene $A$, e sia $P$ il punto medio del lato $BC$. I punti $I_B$ e $I_C$ sono gli escentri relativi ai vertici $B$ e $C$, rispettivamente. Sia $Q$ il riflesso di $K$ rispetto al punto $A$. Dimostrare che $P$, $Q$, $I_B$ e $I_C$ giacciono sulla stessa circonferenza.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_algebra,topic_combinatoria,topic_funzionali,method_ricorsione,method_induzione,skill_manipolazione_algebrica,skill_astrazione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*Self-referential sequence: find smallest M making it M-self-referential in 2022*

> Let $(a_n)_{n \ge 0}$ be a sequence of integers. Define $\Delta^1 a_n = a_{n+1} - a_n$ for every non-negative integer $n$. For $N \ge 2$, define $\Delta^N a_n = \Delta^{N-1} a_{n+1} - \Delta^{N-1} a_n$, and so on; that is, $\Delta^N a_n = \Delta^{N-1}(\Delta^1 a_n) = \Delta^{M-1} a_{n+1} - \Delta^{M-1} a_n$ for every non-negative integer $n$.
> 
> A sequence is called $M$-self-referential if there exist positive integers $k$ and $\ell$ such that $a_{n+k} = \Delta^M a_n$ for every non-negative integer $n$. Determine, with proof, whether there exists some sequence such that the smallest value of $M$ for which the sequence is $M$-self-referential is $2022$.

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1zz_BBn8K4_LsZ6QfCiVpK3gqOIlQZ9ly/view)


<div class="qlang-split" data-lang="it"></div>


*Sequenza autoriferita: trova il più piccolo M tale che la sequenza sia M-autoriferita nel 2022*

> Sia $(a_n)_{n \ge 0}$ una successione di interi. Definisci $\Delta^1 a_n = a_{n+1} - a_n$ per ogni intero non negativo $n$. Per $N \ge 2$, definisci $\Delta^N a_n = \Delta^{N-1} a_{n+1} - \Delta^{N-1} a_n$, e così via; vale a dire, $\Delta^N a_n = \Delta^{N-1}(\Delta^1 a_n) = \Delta^{M-1} a_{n+1} - \Delta^{M-1} a_n$ per ogni intero non negativo $n$.
>
> Una successione è detta $M$-autoriferita se esistono interi positivi $k$ e $\ell$ tali che $a_{n+k} = \Delta^M a_n$ per ogni intero non negativo $n$. Determinare, con dimostrazione, se esista una qualche successione tale che il valore minimo di $M$ per cui la successione è $M$-autoriferita sia $2022$.


**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_induzione|Induzione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,method_invarianti,method_casework,method_congruenze,skill_riconoscimento_pattern,skill_lettura_attenta,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="en"></div>


*Esmeralda erases and writes on board; find largest composite she cannot write*

> Initially a number is written on the board. Then, each minute, Esmeralda chooses a divisor $d > 1$ of the number $n$ written on the board, erases $n$, and writes $n + d$. If the initial number is $2022$, what is the largest composite number that Esmeralda can never write on the board?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_casework|Casework]], [[method_congruenze|Modular arithmetic / congruences]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_lettura_attenta|Lettura attenta]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1zz_BBn8K4_LsZ6QfCiVpK3gqOIlQZ9ly/view)


<div class="qlang-split" data-lang="it"></div>


*Esmeralda cancella e scrive sulla lavagna; trova il più grande numero composto che non riesce a scrivere*

> Inizialmente, sulla lavagna viene scritto un numero. Poi, ogni minuto, Esmeralda sceglie un divisore $d > 1$ del numero $n$ scritto sulla lavagna, cancella $n$ e scrive $n + d$. Se il numero iniziale è $2022$, qual è il più grande numero composto che Esmeralda non potrà mai scrivere sulla lavagna?


**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_casework|Casework]], [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_lettura_attenta|Lettura attenta]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_combinatoria,topic_aritmetica,topic_disuguaglianze,method_estremalita,method_disuguaglianze,skill_manipolazione_algebrica,skill_stima,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Same-parity sum function: prove growth bound with constant c*

> Let $n$ be a positive integer. Define $S(n)$ as the smallest positive integer such that $S(n)$ and $n$ have the same parity and there do **not** exist positive integers $k, x_1, x_2, \ldots, x_k$ such that $x_1 + x_2 + \cdots + x_k = n$ and $x_1^2 + x_2^2 + \cdots + x_k^2 = S(n)$. Prove that there exist a real constant $c > 0$ and a positive integer $n_0$ such that $S(n) \ge cn^{3/2}$ for every $n \ge n_0$.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]], [[Algebra e Analisi|Algebra and analysis]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1zz_BBn8K4_LsZ6QfCiVpK3gqOIlQZ9ly/view)


<div class="qlang-split" data-lang="it"></div>


*Funzione di somma a parità uguale: dimostrare il limite di crescita con costante c*

> Sia $n$ un numero intero positivo. Si definisca $S(n)$ come il più piccolo numero intero positivo tale che $S(n)$ e $n$ abbiano la stessa parità e non esistano numeri interi positivi $k, x_1, x_2, \ldots, x_k$ tali che $x_1 + x_2 + \cdots + x_k = n$ e $x_1^2 + x_2^2 + \cdots + x_k^2 = S(n)$. Si dimostri che esistono una costante reale $c > 0$ e un numero intero positivo $n_0$ tali che $S(n) \ge cn^{3/2}$ per ogni $n \ge n_0$.


**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,method_estremalita,method_doppio_conteggio,method_casework,skill_conteggio_sistematico,skill_ragionamento_geometrico,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*10x10 red-painted table: maximum n cells in no special 6-cell set*

> Some cells of a $10 \times 10$ table are painted red. A set of six cells is called **special** if the six cells are the intersection of three rows and two columns, or two rows and three columns, and all six are painted red. Find the largest value of $n$ for which it is possible to paint $n$ cells of the red table so that no special set appears.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_doppio_conteggio|Doppio conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1zz_BBn8K4_LsZ6QfCiVpK3gqOIlQZ9ly/view)


<div class="qlang-split" data-lang="it"></div>


*Tavola 10x10 dipinta di rosso: n celle massimo in nessun insieme speciale di 6 celle*

> Alcune celle di una tabella $10 \times 10$ sono dipinte di rosso. Un insieme di sei celle è detto **speciale** se le sei celle sono l'intersezione di tre righe e due colonne, oppure di due righe e tre colonne, e tutte e sei sono dipinte di rosso. Determinare il valore massimo di $n$ per cui è possibile dipingere di rosso $n$ celle della tabella rossa in modo che non compaia alcun insieme speciale.

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_doppio_conteggio|Doppio conteggio]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
