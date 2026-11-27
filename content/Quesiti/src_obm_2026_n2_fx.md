---
title: Olimpíada Brasileira de Matemática 2026 — Nível 2 — Fase x
tipo: gara
competition: Olimpíada Brasileira de Matemática 2026 — Nível 2 — Fase x
family: obm
year: '2026'
level: OBM Nível 2
---
<div class="atom-reader" data-gara="Quesiti/src_obm_2026_n2_fx"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_combinatoria,method_grafi,method_invarianti,method_estremalita,skill_modellizzazione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="en"></div>


*Islands with each island on exactly two routes; swapping routes to connect them; number of cycles and minimum months.*

![[src_obm_2026_n2_fx__Q01.png]]

> Maria owns $n$ islands. Some pairs of distinct islands are joined by sea routes, on which ships sail in both directions. Each island belongs to exactly two routes and there are no two routes between the same pair of islands.
>
> A *cycle* is a ship journey that starts and ends at the same island without repeating islands or routes, except for the starting island. In the map below there are the cycles $F-G-K-F$, $A-B-J-D-A$ and $C-E-H-I-C$. Cycles that differ only in the starting island or in the direction are considered equal; for example, the cycles $F-G-K-F$ and $G-F-K-G$ are equal.
>
> Maria wants to modify the routes until a ship can sail from any island to any other along the routes. Each month she chooses four distinct islands $X, Y, Z, W$ such that the routes $X-Y$ and $Z-W$ exist but the routes $X-Z$ and $Y-W$ do not. The routes $X-Y$ and $Z-W$ are then removed and replaced by the new routes $X-Z$ and $Y-W$.
>
> (a) In the case $n=11$ with the route map above, Maria makes the following replacements:
>
> | | Month 1 | Month 2 | Month 3 |
> |---|---|---|---|
> | Routes removed | $F-G$, $H-E$ | $I-C$, $G-K$ | $A-B$, $F-H$ |
> | Routes added | $F-H$, $G-E$ | $I-G$, $C-K$ | $A-F$, $B-H$ |
>
> How many cycles are there after each replacement?
>
> (b) For arbitrary $n$, explain why, in any month of the reorganisation, the routes can be split into cycles so that each route and each island belongs to exactly one of them.
>
> (c) For an arbitrary initial map with $n=2026$ and 314 cycles, what is the smallest number of months Maria needs to reach her goal? You must prove why this number suffices and why it is not possible with fewer.

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_grafi|Graph theory]], [[method_invarianti|Invariants / monovariants]], [[method_estremalita|Extremal principle]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Risposta:** nessuna soluzione ufficiale pubblicata (problema dimostrativo / a risposta aperta).
**Fonte risposta:** OBM, «Provas e gabaritos» — per la prova 2026 è pubblicato solo il testo ([pagina OBM](<https://www.obm.org.br/como-se-preparar/provas-e-gabaritos>)).
**Fonte:** [apri PDF p.1](https://www.obm.org.br/content/uploads/2026/10/Prova_2026_Nivel_2.pdf#page=1)


<div class="qlang-split" data-lang="it"></div>


*Isole, ciascuna delle quali appartiene esattamente a due percorsi; scambio dei percorsi per collegarle; numero di cicli e mesi minimi.*

![[src_obm_2026_n2_fx__Q01.png]]

> Maria possiede $n$ isole. Alcune coppie di isole distinte sono collegate da rotte marittime, lungo le quali le navi navigano in entrambe le direzioni. Ogni isola appartiene esattamente a due rotte e non esistono due rotte tra la stessa coppia di isole.
>
> Un *ciclo* è un viaggio in nave che inizia e termina sulla stessa isola, senza ripetere isole o percorsi, fatta eccezione per l'isola di partenza. Nella mappa sottostante sono presenti i cicli $F-G-K-F$, $A-B-J-D-A$ e $C-E-H-I-C$. I cicli che differiscono solo per l'isola di partenza o per la direzione sono considerati uguali; ad esempio, i cicli $F-G-K-F$ e $G-F-K-G$ sono uguali.
>
> Maria vuole modificare i percorsi finché una nave non potrà navigare da qualsiasi isola a qualsiasi altra seguendo i percorsi. Ogni mese sceglie quattro isole distinte $X, Y, Z, W$ tali che i percorsi $X-Y$ e $Z-W$ esistano, ma i percorsi $X-Z$ e $Y-W$ non esistano. I percorsi $X-Y$ e $Z-W$ vengono poi rimossi e sostituiti dai nuovi percorsi $X-Z$ e $Y-W$.
>
> (a) Nel caso $n=11$, con la mappa del percorso sopra riportata, Maria effettua le seguenti sostituzioni:
>
> | | Month 1 | Month 2 | Month 3 |
> |---|---|---|---|
> | Routes removed | $F-G$, $H-E$ | $I-C$, $G-K$ | $A-B$, $F-H$ |
> | Routes added | $F-H$, $G-E$ | $I-G$, $C-K$ | $A-F$, $B-H$ |
>
> Quanti cicli ci sono dopo ogni sostituzione?
>
> (b) Per un $n$ arbitrario, spiega perché, in qualsiasi mese della riorganizzazione, i percorsi possono essere suddivisi in cicli in modo che ciascun percorso e ciascuna isola appartengano esattamente a uno di essi.
>
> (c) Per una mappa iniziale arbitraria con $n=2026$ e 314 cicli, qual è il numero minimo di mesi di cui Maria ha bisogno per raggiungere il suo obiettivo? Devi dimostrare perché questo numero è sufficiente e perché non è possibile farlo con meno mesi.


**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]], [[method_invarianti|Invarianti / monovarianti]], [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_geometria_piana,topic_geometria_analitica,method_coordinate,skill_ragionamento_geometrico,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*Acute triangle with orthocentre H, angle PHQ = 90°, BX ∥ PH, CX ∥ QH; prove HX ⊥ PQ.*

> Let $ABC$ be an acute triangle with orthocentre $H$. Let $P$ and $Q$ be points in the interiors of sides $AB$ and $AC$, respectively, such that $\angle PHQ=90^\circ$. Let $X$ be a point such that $BX$ is parallel to $PH$ and $CX$ is parallel to $QH$. Show that $HX$ and $PQ$ are perpendicular.

**Topic:** [[topic_geometria_piana|Plane geometry]], [[topic_geometria_analitica|Coordinate geometry]]
**Metodo:** [[method_coordinate|Coordinate method]]
**Abilita:** [[skill_ragionamento_geometrico|Geometric reasoning]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Geometria|Geometry]]
**Risposta:** nessuna soluzione ufficiale pubblicata (problema dimostrativo / a risposta aperta).
**Fonte risposta:** OBM, «Provas e gabaritos» — per la prova 2026 è pubblicato solo il testo ([pagina OBM](<https://www.obm.org.br/como-se-preparar/provas-e-gabaritos>)).
**Fonte:** [apri PDF p.1](https://www.obm.org.br/content/uploads/2026/10/Prova_2026_Nivel_2.pdf#page=1)


<div class="qlang-split" data-lang="it"></div>


*Triangolo acutangolo con ortocentro H, angolo PHQ = 90°, BX ∥ PH, CX ∥ QH; dimostrare che HX ⊥ PQ.*

> Sia $ABC$ un triangolo acutangolo con ortocentro $H$. Siano $P$ e $Q$ dei punti interni ai lati $AB$ e $AC$, rispettivamente, tali che $\angle PHQ=90^\circ$. Sia $X$ un punto tale che $BX$ è parallelo a $PH$ e $CX$ è parallelo a $QH$. Dimostrare che $HX$ e $PQ$ sono perpendicolari.


**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_algebra,topic_aritmetica,topic_disuguaglianze,method_disuguaglianze,skill_stima,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*Smallest c such that floor(x√n) > floor(x√(n−1)) > … > floor(x√1) for all x ≥ c.*

> Let $n$ be a positive integer. Determine, as a function of $n$, the smallest real number $c$ such that, for every real number $x\ge c$,
>
> $$\lfloor x\sqrt n\rfloor>\lfloor x\sqrt{n-1}\rfloor>\cdots>\lfloor x\sqrt2\rfloor>\lfloor x\sqrt1\rfloor.$$
>
> *Remark:* for a real number $y$, $\lfloor y\rfloor$ denotes the largest integer less than or equal to $y$. For example, $\lfloor2\rfloor=2$, $\lfloor\sqrt5\rfloor=2$ and $\lfloor-\pi\rfloor=-4$.

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Arithmetic / Number theory]], [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_disuguaglianze|Classical inequalities]]
**Abilita:** [[skill_stima|Estimation and approximation]], [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]], [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Risposta:** nessuna soluzione ufficiale pubblicata (problema dimostrativo / a risposta aperta).
**Fonte risposta:** OBM, «Provas e gabaritos» — per la prova 2026 è pubblicato solo il testo ([pagina OBM](<https://www.obm.org.br/como-se-preparar/provas-e-gabaritos>)).
**Fonte:** [apri PDF p.1](https://www.obm.org.br/content/uploads/2026/10/Prova_2026_Nivel_2.pdf#page=1)


<div class="qlang-split" data-lang="it"></div>


*Il più piccolo c tale che, per ogni x ≥ c, valga floor(x√n) > floor(x√(n−1)) > … > floor(x√1).*

> Sia $n$ un numero intero positivo. Determina, in funzione di $n$, il più piccolo numero reale $c$ tale che, per ogni numero reale $x\ge c$,
>
> $$\lfloor x\sqrt n\rfloor>\lfloor x\sqrt{n-1}\rfloor>\cdots>\lfloor x\sqrt2\rfloor>\lfloor x\sqrt1\rfloor.$$
>
> *Osservazione:* per un numero reale $y$, $\lfloor y\rfloor$ denota il più grande intero minore o uguale a $y$. Ad esempio, $\lfloor2\rfloor=2$, $\lfloor\sqrt5\rfloor=2$ e $\lfloor-\pi\rfloor=-4$.


**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_stima|Stima e approssimazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,method_congruenze,method_colorazione,skill_casework_accurato,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="en"></div>


*2027 distinct primes around a circle: can all adjacent sums be perfect squares?*

> Agnes wrote 2027 pairwise distinct prime numbers around a circle. Is it possible that all 2027 sums of pairs of adjacent primes on the circle are perfect squares?

**Topic:** [[topic_aritmetica|Arithmetic / Number theory]]
**Metodo:** [[method_congruenze|Modular arithmetic / congruences]], [[method_colorazione|Colouring / parity]]
**Abilita:** [[skill_casework_accurato|Careful case analysis]], [[skill_riconoscimento_pattern|Pattern recognition]]
**Area:** [[Aritmetica e Teoria dei Numeri|Arithmetic and number theory]]
**Risposta:** nessuna soluzione ufficiale pubblicata (problema dimostrativo / a risposta aperta).
**Fonte risposta:** OBM, «Provas e gabaritos» — per la prova 2026 è pubblicato solo il testo ([pagina OBM](<https://www.obm.org.br/como-se-preparar/provas-e-gabaritos>)).
**Fonte:** [apri PDF p.2](https://www.obm.org.br/content/uploads/2026/10/Prova_2026_Nivel_2.pdf#page=2)


<div class="qlang-split" data-lang="it"></div>


*2027 numeri primi distinti disposti su una circonferenza: è possibile che tutte le somme di coppie adiacenti siano quadrati perfetti?*

> Agnes ha disposto in cerchio 2027 numeri primi tutti distinti a due a due. È possibile che tutte le 2027 somme delle coppie di numeri primi adiacenti sul cerchio siano quadrati perfetti?


**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]], [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_algebra,topic_disuguaglianze,method_disuguaglianze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*√(12x+13) ≥ ax + a + 1 on [−1, 1]; then prove √(12x+13) + √(12y+13) − 1 ≥ (x+y+1)².*

> (a) Determine all real numbers $a$ for which the inequality
>
> $$\sqrt{12x+13}\ge ax+a+1$$
>
> holds for every real $x$ with $-1\le x\le1$.
>
> (b) Prove that
>
> $$\sqrt{12x+13}+\sqrt{12y+13}-1\ge(x+y+1)^2$$
>
> for all real $x, y$ with $-1\le x\le1$ and $-1\le y\le1$.

**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Inequalities]]
**Metodo:** [[method_disuguaglianze|Classical inequalities]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]
**Risposta:** nessuna soluzione ufficiale pubblicata (problema dimostrativo / a risposta aperta).
**Fonte risposta:** OBM, «Provas e gabaritos» — per la prova 2026 è pubblicato solo il testo ([pagina OBM](<https://www.obm.org.br/como-se-preparar/provas-e-gabaritos>)).
**Fonte:** [apri PDF p.2](https://www.obm.org.br/content/uploads/2026/10/Prova_2026_Nivel_2.pdf#page=2)


<div class="qlang-split" data-lang="it"></div>


*√(12x+13) ≥ ax + a + 1 su [−1, 1]; poi dimostrare che √(12x+13) + √(12y+13) − 1 ≥ (x+y+1)².*

> (a) Determina tutti i numeri reali $a$ per cui la disuguaglianza
>
> $$\sqrt{12x+13}\ge ax+a+1$$
>
> Vale per ogni $x$ reale con $-1\le x\le1$.
>
> (b) Dimostrare che
>
> $$\sqrt{12x+13}+\sqrt{12y+13}-1\ge(x+y+1)^2$$
>
> per tutti i $x, y$ reali con $-1\le x\le1$ e $-1\le y\le1$.


**Topic:** [[topic_algebra|Algebra]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,method_grafi,skill_modellizzazione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="en"></div>


*100 × 100 board with 50 numbered diagonal cells; maximum number of extra cells filled with no adjacent distinct numbers.*

![[src_obm_2026_n2_fx__Q06.png]]

> On a $100\times100$ board, 50 cells are already numbered as shown in the figure.
>
> Esmeralda wants to write positive integers in some of the empty cells. She wants the final filling of the board to satisfy the following property:
>
> *"no two cells sharing a side have distinct numbers written in them".*
>
> Apart from the 50 cells already filled, what is the largest number of cells Esmeralda can fill while satisfying this rule?

**Topic:** [[topic_combinatoria|Combinatorics]]
**Metodo:** [[method_grafi|Graph theory]]
**Abilita:** [[skill_modellizzazione|Modelling / translating the text]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Risposta:** nessuna soluzione ufficiale pubblicata (problema dimostrativo / a risposta aperta).
**Fonte risposta:** OBM, «Provas e gabaritos» — per la prova 2026 è pubblicato solo il testo ([pagina OBM](<https://www.obm.org.br/como-se-preparar/provas-e-gabaritos>)).
**Fonte:** [apri PDF p.2](https://www.obm.org.br/content/uploads/2026/10/Prova_2026_Nivel_2.pdf#page=2)


<div class="qlang-split" data-lang="it"></div>


*Tavola 100 × 100 con 50 celle diagonali numerate; numero massimo di celle aggiuntive compilate senza numeri distinti adiacenti.*

![[src_obm_2026_n2_fx__Q06.png]]

> Su una tavola $100\times100$, 50 caselle sono già numerate come mostrato nella figura.
>
> Esmeralda vuole scrivere numeri interi positivi in alcune delle celle vuote. Vuole che la configurazione finale della scacchiera soddisfi la seguente proprietà:
>
> Nessuna coppia di celle che condividono un lato contiene numeri diversi.
>
> A parte le 50 celle già riempite, qual è il numero massimo di celle che Esmeralda può riempire rispettando questa regola?


**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_grafi|Teoria dei grafi]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
