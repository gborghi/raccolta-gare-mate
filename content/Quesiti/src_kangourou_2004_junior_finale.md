---
title: Kangourou 2004 Junior finale nazionale
tipo: gara
competition: Kangourou 2004 Junior finale nazionale
family: kangourou
year: '2004'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2004_junior_finale"></div>



<span class="atom-split" id="qj1" data-atom="qj1" data-title="Quesito J1" data-tags="topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Esistono basi in cui 15x15=321*

> Esistono basi in cui l'espressione $15 \times 15 = 321$ risulta corretta?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** base 6
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1zhN_ZIEqgp2HEtGPhjwQn1kisd4lL2x7/view)


<span class="qlang-split" data-lang="en"></span>


There are bases where 15x15=321*

> Are there grounds on which the expression $15 \times 15 = 321$ is correct?

**Answer:** base 6
[[src_kangourou_2004_junior_finale__QJ1]]



<span class="atom-split" id="qj2" data-atom="qj2" data-title="Quesito J2" data-tags="topic_algebra,topic_aritmetica,method_casework,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Coppie intere con x^2+y^2+xy=1*

> Per quali coppie $(x, y)$ di numeri interi relativi è vero che $x^2 + y^2 + xy = 1$?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 6 coppie
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1zhN_ZIEqgp2HEtGPhjwQn1kisd4lL2x7/view)


<span class="qlang-split" data-lang="en"></span>


*Integres with x^2+y^2+xy=1*

> For which pairs of $(x, y)$ relative integers is $x^2 + y^2 + xy = 1$ true?

**Answer:** 6 coppie
[[src_kangourou_2004_junior_finale__QJ2]]



<span class="atom-split" id="qj3" data-atom="qj3" data-title="Quesito J3" data-tags="topic_algebra,topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Cinque numeri dalle somme a due a due*

> Ho scritto su 5 foglietti altrettanti numeri interi positivi. Sommandoli a due a due in tutti i modi possibili, ottengo i seguenti dieci risultati: $17, 20, 28, 14, 36, 28, 25, 31, 39$ e $42$. Quali numeri ho scritto?

**Topic:** [[topic_algebra|Algebra]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 3,11,14,17,25
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1zhN_ZIEqgp2HEtGPhjwQn1kisd4lL2x7/view)


<span class="qlang-split" data-lang="en"></span>


*Five numbers from sums of two to two*

> I wrote as many positive integers on five sheets. Adding them to two by two in every possible way, I get the following ten results: $17, 20, 28, 14, 36, 28, 25, 31, 39$ and $42$. What numbers did I write?

**Answer:** 3,11,14,17,25
[[src_kangourou_2004_junior_finale__QJ3]]



<span class="atom-split" id="qj4" data-atom="qj4" data-title="Quesito J4" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Rapporto aree A'B'C' / ABC (simmetrie)*

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (C) at (0,0);
  \coordinate (A) at (2,0);
  \coordinate (B) at (0,1.5);
  \coordinate (Ap) at (-2, 1.5);
  \coordinate (Bp) at (2, -1.5);
  \coordinate (Cp) at (2, 1.5);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw (0.15,0) -- (0.15,0.15) -- (0,0.15);
  \draw[blue, thick] (Ap) -- (Bp) -- (Cp) -- cycle;
  \draw[dotted] (Ap) -- (A);
  \draw[dotted] (Bp) -- (B);
  \draw[dotted] (Cp) -- (C);
  \node[left] at (Ap) {$A'$};
  \node[below] at (Bp) {$B'$};
  \node[above right] at (Cp) {$C'$};
  \node[right] at (A) {$A$};
  \node[above left] at (B) {$B$};
  \node[below left] at (C) {$C$};
\end{tikzpicture}
\end{document}
```

> Dato un triangolo $ABC$ rettangolo in $C$, si considerino i punti $A'$ simmetrico di $A$ rispetto a $BC$, $B'$ simmetrico di $B$ rispetto ad $AC$ e $C'$ simmetrico di $C$ rispetto ad $AB$. Quanto vale il rapporto tra l'area di $A'B'C'$ e quella di $ABC$?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 3
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1zhN_ZIEqgp2HEtGPhjwQn1kisd4lL2x7/view)


<span class="qlang-split" data-lang="en"></span>


*A/B/ABC area report (symmetry) *

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (C) at (0,0);
  \coordinate (A) at (2,0);
  \coordinate (B) at (0,1.5);
  \coordinate (Ap) at (-2, 1.5);
  \coordinate (Bp) at (2, -1.5);
  \coordinate (Cp) at (2, 1.5);
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw (0.15,0) -- (0.15,0.15) -- (0,0.15);
  \draw[blue, thick] (Ap) -- (Bp) -- (Cp) -- cycle;
  \draw[dotted] (Ap) -- (A);
  \draw[dotted] (Bp) -- (B);
  \draw[dotted] (Cp) -- (C);
  \node[left] at (Ap) {$A'$};
  \node[below] at (Bp) {$B'$};
  \node[above right] at (Cp) {$C'$};
  \node[right] at (A) {$A$};
  \node[above left] at (B) {$B$};
  \node[below left] at (C) {$C$};
\end{tikzpicture}
\end{document}
```

> Given a $ABC$ rectangle in $C$, consider the points $A'$ symmetric $A$ with respect to $BC$, $B'$ symmetric $B$ with respect to $AC$ and $C'$ symmetric $C$ with respect to $AB$. What is the ratio of $A'B'C'$ to $ABC$?

**Answer:** 3
[[src_kangourou_2004_junior_finale__QJ4]]



<span class="atom-split" id="qj5" data-atom="qj5" data-title="Quesito J5" data-tags="topic_combinatoria,topic_algebra,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Configurazione con somme righe/colonne non negative*

> Ogni casella di una tabella rettangolare formata da $m$ righe ed $n$ colonne contiene un numero intero. Le mosse consentite sono:
> - cambiare i segni degli elementi di un'intera riga
> - cambiare i segni degli elementi di un'intera colonna.
> 
> È vero che dopo un numero opportuno di queste mosse, ogni riga è formata da elementi la cui somma non è negativa ed così pure ogni colonna? Motiva.

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** si
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1zhN_ZIEqgp2HEtGPhjwQn1kisd4lL2x7/view)


<span class="qlang-split" data-lang="en"></span>


*Configuration with sums of non-negative rows/columns*

> Each box in a rectangular table consisting of $m$ rows and $n$ columns contains an integer. The permissible moves are: - change the signs of the elements of an entire row - change the signs of the elements of an entire column.
> 
> Is it true that after a number of these moves, each row is made up of elements whose sum is not negative and so is each column? I got a motive.

**Answer:** si
[[src_kangourou_2004_junior_finale__QJ5]]



<span class="atom-split" id="qj6" data-atom="qj6" data-title="Quesito J6" data-tags="topic_aritmetica,topic_combinatoria,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Permutazione di 1..9 con divisibilita progressive*

> È possibile permutare le cifre $1, 2, 3, 4, 5, 6, 7, 8, 9$ in modo che per ogni $n \in \{1, 2, \ldots, 8, 9\}$ il numero formato dalle prime $n$ cifre (partendo da sinistra) sia divisibile per $n$? In caso affermativo, la permutazione è unica?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 381654729 unica
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1zhN_ZIEqgp2HEtGPhjwQn1kisd4lL2x7/view)


<span class="qlang-split" data-lang="en"></span>


*Switching of 1.9 with progressive divisibility*

> Can the $1, 2, 3, 4, 5, 6, 7, 8, 9$ digits be exchanged so that for each $n \in \{1, 2, \ldots, 8, 9\}$ the number formed by the first $n$ digits (from left) is divisible by $n$? If so, is the permutation unique?

**Answer:** 381654729 unica
[[src_kangourou_2004_junior_finale__QJ6]]
