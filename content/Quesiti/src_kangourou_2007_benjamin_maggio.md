---
title: Kangourou 2007 Benjamin finale (maggio)
tipo: gara
competition: Kangourou 2007 Benjamin finale (maggio)
family: kangourou
year: '2007'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2007_benjamin_maggio"></div>



<span class="atom-split" id="qb1" data-atom="qb1" data-title="Quesito B1" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area del triangolo ADE (parallelogramma)*

![[src_kangourou_2007_benjamin_maggio__probB1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (5,0);
  \coordinate (D) at (1.2,2);
  \coordinate (C) at (6.2,2);
  \coordinate (E) at (3.7,2);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (E);
  \draw (E) -- (B);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[above] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> Se il parallelogramma $ABCD$ ha area $7 \ \text{cm}^2$, e il triangolo $EBC$ ha area $2 \ \text{cm}^2$, quanto misura l'area del triangolo $ADE$ in figura? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 1,5 cm^2
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbmAAkHVqbo7EOEVBYt8x1-cdr8_snEU/view)


<span class="qlang-split" data-lang="en"></span>


*area of the ADE triangle (parallelogram) *

![[src_kangourou_2007_benjamin_maggio__probB1.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (5,0);
  \coordinate (D) at (1.2,2);
  \coordinate (C) at (6.2,2);
  \coordinate (E) at (3.7,2);
  \draw (A) -- (B) -- (C) -- (D) -- cycle;
  \draw (A) -- (E);
  \draw (E) -- (B);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[above] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> If the parallelogram $ABCD$ has an area $7 \ \text{cm}^2$, and the triangle $EBC$ has an area $2 \ \text{cm}^2$, what is the area of the triangle $ADE$ in the figure? (see figure)

**Answer:** 1,5 cm^2
[[src_kangourou_2007_benjamin_maggio__QB1]]



<span class="atom-split" id="qb2" data-atom="qb2" data-title="Quesito B2" data-tags="topic_aritmetica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo monete per triangolo e quadrato*

![[src_kangourou_2007_benjamin_maggio__probB2.png]]

> Puoi appoggiare 15 monete uguali su un tavolo in modo che «formino un triangolo equilatero» (vedi figura), ma non puoi farlo in modo che «formino un quadrato» (manca una moneta). Qual è il minimo numero di monete con cui puoi formare sia un triangolo sia un quadrato?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 36
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbmAAkHVqbo7EOEVBYt8x1-cdr8_snEU/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum coins for triangles and squares *

![[src_kangourou_2007_benjamin_maggio__probB2.png]]

> You can place 15 equal coins on a table so that they form an equilateral triangle (see figure), but you can't do that so that they form a square (one coin is missing). What's the minimum number of coins you can use to form a triangle or a square?

**Answer:** 36
[[src_kangourou_2007_benjamin_maggio__QB2]]



<span class="atom-split" id="qb3" data-atom="qb3" data-title="Quesito B3" data-tags="topic_aritmetica,method_conteggio,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero allievi maschi (91 strette di mano)*

> In una classe in cui ci sono almeno due maschi e due femmine, ogni ragazzo stringe una volta la mano a ogni ragazza. In totale sono state effettuate 91 strette di mano. Se i maschi sono meno delle femmine, quanti sono gli allievi maschi di quella classe?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 7
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbmAAkHVqbo7EOEVBYt8x1-cdr8_snEU/view)


<span class="qlang-split" data-lang="en"></span>


*Number of male pupils (91 handshakes) *

> In a classroom where there are at least two males and two females, each boy shakes each girl's hand once. A total of 91 handshakes were made. If males are fewer than females, how many male students are in that class?

**Answer:** 7
[[src_kangourou_2007_benjamin_maggio__QB3]]



<span class="atom-split" id="qb4" data-atom="qb4" data-title="Quesito B4" data-tags="topic_logica,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Tipo di molecola rimasta (reazioni con invariante)*

> Reagendo tra loro, tre tipi di molecole $X$, $Y$ e $\text{Anti-X}$ si comportano in questo modo:
> - se una molecola di $X$ incontra una di $Y$, si forma una molecola di $\text{Anti-X}$ che le sostituisce;
> - se una molecola di $\text{Anti-X}$ incontra una di $Y$, si forma una molecola di $X$ che le sostituisce;
> - se una molecola di $X$ e una di $\text{Anti-X}$ si incontrano, esse esplodono, spariscono e liberano energia.
> 
> Naturalmente, nessuna molecola reagisce con molecole dello stesso tipo!
> 
> Quattro molecole di $X$, due di $Y$ e cinque di $\text{Anti-X}$ reagiscono tra loro in modo tale che alla fine rimane una molecola sola. Possiamo indovinare di quale tipo è?
> 
> [Attenzione: se rispondi positivamente, devi mostrare che non si può ottenere un altro risultato; in caso contrario, devi indicare due procedimenti ciascuno dei quali permetta di produrre una sola molecola e le due molecole prodotte siano diverse].

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** Anti-X
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbmAAkHVqbo7EOEVBYt8x1-cdr8_snEU/view)


<span class="qlang-split" data-lang="en"></span>


*Remaining molecule type (reactions with invariant) *

> By reacting with each other, three types of $X$, $Y$ and $\text{Anti-X}$ molecules behave as follows: - if a molecule of $X$ meets one of $Y$, a molecule of $\text{Anti-X}$ is formed that replaces them; - if a molecule of $\text{Anti-X}$ meets one of $Y$, a molecule of $X$ is formed that replaces them; - if a molecule of $X$ and one of $\text{Anti-X}$ meet, they explode, explode and release energy.
> 
> Of course, no molecule reacts with molecules of the same type!
> 
> Four $X$ molecules, two $Y$ and five $\text{Anti-X}$ react with each other in such a way that one molecule is eventually left. Can we guess what kind of guy he is?
> 
> [Caution: if you are positive, you must show that no other result can be obtained; otherwise, you must indicate two procedures each of which allows one molecule to be produced and the two molecules produced are different].

**Answer:** Anti-X
[[src_kangourou_2007_benjamin_maggio__QB4]]



<span class="atom-split" id="qb5" data-atom="qb5" data-title="Quesito B5" data-tags="topic_combinatoria,method_conteggio,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Triangoli di perimetro 27 con lati interi distinti*

> Il professore di educazione tecnica ha chiesto di costruire un triangolo di perimetro $27 \ \text{cm}$, con questi requisiti:
> - i lati devono misurare un numero intero di centimetri,
> - le misure dei lati devono essere tre numeri tutti diversi tra loro.
> 
> Quanti differenti triangoli possono consegnargli i suoi alunni, se si considerano uguali due triangoli quando per ogni lato di uno dei due c'è un lato dell'altro che ha la stessa misura?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 12
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbmAAkHVqbo7EOEVBYt8x1-cdr8_snEU/view)


<span class="qlang-split" data-lang="en"></span>


*Triangles of perimeter 27 with distinct whole sides*

> The professor of technical education asked to build a perimeter triangle with the following requirements: - the sides must measure an integer number of centimetres, - the dimensions of the sides must be three numbers all different from each other.
> 
> How many different triangles can his pupils give him, if you consider two triangles equal when for each side of one of the two there is a side of the other that has the same size?

**Answer:** 12
[[src_kangourou_2007_benjamin_maggio__QB5]]



<span class="atom-split" id="qb6" data-atom="qb6" data-title="Quesito B6" data-tags="topic_combinatoria,method_conteggio,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Quante caramelle (combinazioni 3 = doppio di 2)*

> Ho in tasca delle caramelle tutte diverse tra loro e il numero dei modi in cui posso sceglierne tre è il doppio del numero dei modi in cui posso sceglierne due. Quante caramelle ho in tasca?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 8
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1wbmAAkHVqbo7EOEVBYt8x1-cdr8_snEU/view)


<span class="qlang-split" data-lang="en"></span>


*How many candies (combinations 3 = double 2) *

> I have all the different candy in my pocket, and the number of ways I can choose three is twice the number of ways I can choose two. How many candies do I have in my pocket?

**Answer:** 8
[[src_kangourou_2007_benjamin_maggio__QB6]]
