---
title: Kangourou 2007 Student finale (maggio)
tipo: gara
competition: Kangourou 2007 Student finale (maggio)
family: kangourou
year: '2007'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2007_student_maggio"></div>



<span class="atom-split" id="qs1" data-atom="qs1" data-title="Quesito S1" data-tags="topic_geometria_solida,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Percorso piu breve sulla superficie del cono*

![[src_kangourou_2007_student_maggio__probS1.png]]

> In un cono circolare retto il raggio del cerchio di base misura $3$ cm e la generatrice $6$ cm. Una formica vuole arrampicarsi sulla superficie laterale del cono dal punto $A$ sul cerchio di base al punto medio della generatrice opposta $BC$ (vedi figura). Quanto misura il percorso più breve che può fare la formica? (vedi figura)

**Topic:** [[topic_geometria_solida|Geometria solida]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 3*sqrt5 cm
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1HUfAMVLA7IpFMgDDc-PE2DVK0jJ_IXLH/view)


<span class="qlang-split" data-lang="en"></span>


*Shorter route on the cone surface*

![[src_kangourou_2007_student_maggio__probS1.png]]

> In a straight circular cone the radius of the base circle is $3$ cm and the generator $6$ cm. An ant wants to climb the lateral surface of the cone from the $A$ point on the base circle to the middle point of the opposite generator $BC$ (see figure). What is the shortest route an ant can take? (see figure)

**Answer:** 3*sqrt5 cm
[[src_kangourou_2007_student_maggio__QS1]]



<span class="atom-split" id="qs2" data-atom="qs2" data-title="Quesito S2" data-tags="topic_logica,method_invarianti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Strategia vincente nel gioco delle 52 carte*

> Ho $52$ carte su ciascuna delle quali è indicato un numero intero positivo e la somma di tutti i numeri indicati è un numero dispari. Gioco con un amico in questo modo: dopo aver messo tutte le carte in fila sul tavolo, uno rimuove una carta a un'estremità della fila e poi passa la mano all'altro che fa la stessa cosa; si itera finché non restano più carte sul tavolo. Alla fine per ogni giocatore si sommano i numeri scritti sulle carte che ha scelto; vince chi ha le carte la somma dei cui numeri è maggiore. C'è una strategia vincente per chi inizia il gioco? In caso affermativo indicane una, in caso negativo fornisci una motivazione.

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** si
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1HUfAMVLA7IpFMgDDc-PE2DVK0jJ_IXLH/view)


<span class="qlang-split" data-lang="en"></span>


Winning strategy in the 52 card game

> I have $52$ cards on each of which a positive integer is indicated and the sum of all the numbers is an odd number. I play with a friend like this: after you put all the cards in a row on the table, you remove a card at one end of the row and then you move the hand to the other one who does the same thing; you iterate until there are no more cards on the table. In the end, each player adds the numbers written on the cards he has chosen; the winner is the one with the most cards. Is there a winning strategy for whoever starts the game? If yes, indicate one, if not, provide a reason.

**Answer:** si
[[src_kangourou_2007_student_maggio__QS2]]



<span class="atom-split" id="qs3" data-atom="qs3" data-title="Quesito S3" data-tags="topic_geometria_piana,topic_disuguaglianze,method_disuguaglianze,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area minima del triangolo (altezze vincolate)*

![[src_kangourou_2007_student_maggio__probS3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (5,5);
  \coordinate (B) at (8,0);
  \coordinate (C) at (0,0);
  \coordinate (FA) at (5,0);
  \coordinate (FB) at (4,4);
  \coordinate (FC) at (5.882,3.529);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[dotted] (A) -- (FA);
  \draw[dotted] (B) -- (FB);
  \draw[dotted] (C) -- (FC);
  \node[above] at (A) {$A$};
  \node[right] at (B) {$B$};
  \node[left] at (C) {$C$};
  \node[right] at (5,1.6) {$h_A$};
  \node[above left] at (4.5,4.3) {$h_B$};
  \node[below] at (3,2.0) {$h_C$};
\end{tikzpicture}
\end{document}
```

> Sia $ABC$ un qualunque triangolo le cui altezze relative ai vertici $A$, $B$, $C$ soddisfino rispettivamente le relazioni: $h_A \geq 3$ cm, $h_B \geq 4$ cm, $h_C \geq 5$ cm. Quanti centimetri quadrati misura al minimo l'area di $ABC$?

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_disuguaglianze|Disuguaglianze classiche]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Algebra e Analisi]], [[Geometria]]
**Risposta:** 10
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1HUfAMVLA7IpFMgDDc-PE2DVK0jJ_IXLH/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum area of triangle (heights restricted) *

![[src_kangourou_2007_student_maggio__probS3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (5,5);
  \coordinate (B) at (8,0);
  \coordinate (C) at (0,0);
  \coordinate (FA) at (5,0);
  \coordinate (FB) at (4,4);
  \coordinate (FC) at (5.882,3.529);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[dotted] (A) -- (FA);
  \draw[dotted] (B) -- (FB);
  \draw[dotted] (C) -- (FC);
  \node[above] at (A) {$A$};
  \node[right] at (B) {$B$};
  \node[left] at (C) {$C$};
  \node[right] at (5,1.6) {$h_A$};
  \node[above left] at (4.5,4.3) {$h_B$};
  \node[below] at (3,2.0) {$h_C$};
\end{tikzpicture}
\end{document}
```

> Whether $ABC$ is any triangle whose heights relative to the vertices $A$, $B$, $C$ meet the following ratios: $h_A \geq 3$ cm, $h_B \geq 4$ cm, $h_C \geq 5$ cm respectively. How many square centimetres is the minimum area of $ABC$?

**Answer:** 10
[[src_kangourou_2007_student_maggio__QS3]]



<span class="atom-split" id="qs4" data-atom="qs4" data-title="Quesito S4" data-tags="topic_aritmetica,method_congruenze,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma prime 21 cifre decimali di 2^2007/7*

> Quanto vale la somma delle prime ventuno cifre dopo la virgola della divisione per $7$ di $2^{2007}$?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 88
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1HUfAMVLA7IpFMgDDc-PE2DVK0jJ_IXLH/view)


<span class="qlang-split" data-lang="en"></span>


Sum of the first 21 decimal places of 2^2007/7*

> What is the sum of the first twenty-one digits after the comma of division by $7$ of $2^{2007}$?

**Answer:** 88
[[src_kangourou_2007_student_maggio__QS4]]



<span class="atom-split" id="qs5" data-atom="qs5" data-title="Quesito S5" data-tags="topic_combinatoria,method_ricorsione,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero di sottoinsiemi porosi di {1..10}*

> Un insieme $S$ di numeri naturali positivi è detto "poroso" se è vuoto oppure non contiene tre interi consecutivi. Quanti sono i sottoinsiemi porosi dell'insieme $\{1, 2, 3, \ldots, 10\}$?

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 504
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1HUfAMVLA7IpFMgDDc-PE2DVK0jJ_IXLH/view)


<span class="qlang-split" data-lang="en"></span>


*Number of porous sub-sets of {1,10}*

> A set $S$ of positive natural numbers is called "porous" if it is empty or does not contain three consecutive integers. How many porous subsets of the $\{1, 2, 3, \ldots, 10\}$ set are there?

**Answer:** 504
[[src_kangourou_2007_student_maggio__QS5]]



<span class="atom-split" id="qs6" data-atom="qs6" data-title="Quesito S6" data-tags="topic_algebra,topic_logica,method_casework,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Trovare il sacchetto falso con tre pesate*

> $2007$ sacchetti numerati contengono ciascuno almeno $3000$ monete. Le monete di ogni singolo sacchetto sono tutte uguali tra loro per peso e forma e sono contrassegnate con il numero del sacchetto. Escluso un sacchetto che contiene monete false, tutti gli altri contengono monete ufficiali. Le monete ufficiali hanno tutte lo stesso peso, diverso dal peso delle monete false: i due pesi non sono noti. Hai a disposizione una bilancia elettronica. Trova una strategia per stabilire con tre pesate qual è il sacchetto contenente monete false, mostrandone l'efficacia.

**Topic:** [[topic_algebra|Algebra]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** strategia 3 pesate
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1HUfAMVLA7IpFMgDDc-PE2DVK0jJ_IXLH/view)


<span class="qlang-split" data-lang="en"></span>


Finding the fake bag with three weights

> $2007$ numbered bags shall each contain at least $3000$ coins. The coins in each single bag are all equal in weight and shape and are marked with the bag number. Except for one bag containing counterfeit coins, all the others contain official coins. Official coins all have the same weight, different from the weight of counterfeit coins: the two weights are unknown. You have an electronic balance sheet. Find a strategy to determine by three weights what the bag containing counterfeit coins is, showing its effectiveness.

**Answer:** strategia 3 pesate
[[src_kangourou_2007_student_maggio__QS6]]
