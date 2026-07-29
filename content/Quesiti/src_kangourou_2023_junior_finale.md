---
title: Kangourou 2023 Junior — Finale (risposta aperta)
tipo: gara
competition: Kangourou 2023 Junior — Finale (risposta aperta)
family: kangourou
year: '2023'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2023_junior_finale"></div>



<span class="atom-split" id="qj1" data-atom="qj1" data-title="Quesito J1" data-tags="topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*media*

> Ho a disposizione una gran quantità di oggetti di ciascuno dei seguenti pesi: 1, 2, 3, 4 e 5 chili. Con questi ho composto un insieme $S$ contenente oggetti di almeno tre pesi diversi: il peso medio degli oggetti di $S$ è un numero intero di chili. Il peso medio degli oggetti di $S$ rimarrebbe comunque un numero intero di chili se sostituissi ogni oggetto di $S$ che pesi 2, 3 o 4 chili, rispettivamente con un oggetto che pesi 1, 2 o 3 chili, senza compiere ulteriori sostituzioni. Qual è il peso medio degli oggetti di $S$?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 3
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ZqUD0phTjD1vGI9FmGiQjE0m_DFPuY6r/view)


<span class="qlang-split" data-lang="en"></span>


The following information shall be provided:

> I have at my disposal a large number of items of each of the following weights: 1, 2, 3, 4 and 5 kilos. With these I have composed a set containing objects of at least three different weights: the average weight of objects of$S$ is an integer number of kilograms. However, the average weight of $S$ objects would remain an integer number of kilograms if you replaced each $S$ object weighing 2, 3 or 4 kilograms, respectively, with an object weighing 1, 2 or 3 kilograms, without making any further substitutions. What is the average weight of $S$ objects?

**Answer:** 3
[[src_kangourou_2023_junior_finale__QJ1]]



<span class="atom-split" id="qj2" data-atom="qj2" data-title="Quesito J2" data-tags="topic_probabilita,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*gioco equo o no*

> Andrea e Giulio giocano a dadi nel modo seguente. Insieme lanciano sei dadi (tradizionali, equi): se esce 3 su almeno un dado, Andrea guadagna un euro da Giulio; in caso contrario, Giulio guadagna due euro da Andrea. È un gioco equo o è vantaggioso per uno dei due? In questo secondo eventuale caso, per chi?

**Topic:** [[topic_probabilita|Probabilita e statistica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** Giulio favorito
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ZqUD0phTjD1vGI9FmGiQjE0m_DFPuY6r/view)


<span class="qlang-split" data-lang="en"></span>


*fair play or not *

> Andrea and Julius play dice as follows. Together they throw six dice (traditional, equals): if he throws 3 out of at least one dice, Andrew earns a euro from Julius; otherwise, Julius earns two euros from Andrew. Is it a fair game or is it advantageous for either of us? In this second case, for whom?

**Answer:** Giulio favorito
[[src_kangourou_2023_junior_finale__QJ2]]



<span class="atom-split" id="qj3" data-atom="qj3" data-title="Quesito J3" data-tags="topic_logica,topic_combinatoria,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*max mentitori*

![[src_kangourou_2023_junior_finale__probJ3.png]]

> Un'isola è ripartita in 15 regioni come indicato nella figura. In ogni regione vive uno e un solo abitante che o dice sempre la verità o mente sempre. Ogni abitante afferma: "Tra i miei vicini c'è almeno una persona che mente sempre". Quanti possono essere al massimo gli abitanti che mentono sempre? (Due abitanti si intendono vicini quando le loro regioni condividono un segmento del loro bordo, non necessariamente un intero lato di una delle due.) (vedi figura)

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 6
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ZqUD0phTjD1vGI9FmGiQjE0m_DFPuY6r/view)


<span class="qlang-split" data-lang="en"></span>


This is the maximum amount of lying.

![[src_kangourou_2023_junior_finale__probJ3.png]]

> One island is divided into 15 regions as shown in the figure. In every region there is one and only one inhabitant who either always tells the truth or always lies. Each resident says, "There is at least one person in my neighborhood who lies all the time". How many people can be at most lying all the time? (Two inhabitants mean neighbours when their regions share a segment of their edge, not necessarily an entire side of either one.) (see figure)

**Answer:** 6
[[src_kangourou_2023_junior_finale__QJ3]]



<span class="atom-split" id="qj4" data-atom="qj4" data-title="Quesito J4" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*lunghezza traiettoria di P*

![[src_kangourou_2023_junior_finale__probJ4.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) node[below left] {$A$} -- (3,0) node[below right] {$B$} -- (3,3) node[above right] {$C$} -- (0,3) node[above left] {$D$} -- cycle;
  \fill (1.5,0) circle (2pt) node[below] {$P$};
\end{tikzpicture}
\end{document}
```

> Osserva la figura. Il segmento $AK$ è lungo 5, il lato del quadrato $ABCD$ è lungo 1 e il punto $P$ è il punto medio del lato $AB$. Facciamo ruotare il quadrato con perno nel vertice $B$ fino a quando il vertice $C$ viene a cadere (per la prima volta) sul segmento $AK$; a partire da questa posizione del quadrato, eseguiamo ora la stessa operazione con perno in $C$ e così via fino a che il lato $AB$ torna ad essere contenuto (per la prima volta dopo la prima rotazione) nel segmento $AK$. Fornisci un disegno qualitativo della traiettoria del punto $P$ che possa chiarire come è stata determinata e calcolane la lunghezza. (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** (π/2)(1+√5)
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ZqUD0phTjD1vGI9FmGiQjE0m_DFPuY6r/view)


<span class="qlang-split" data-lang="en"></span>


*trajectory length of P*

![[src_kangourou_2023_junior_finale__probJ4.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) node[below left] {$A$} -- (3,0) node[below right] {$B$} -- (3,3) node[above right] {$C$} -- (0,3) node[above left] {$D$} -- cycle;
  \fill (1.5,0) circle (2pt) node[below] {$P$};
\end{tikzpicture}
\end{document}
```

> Look at the figure. The $AK$ segment is length 5, the side of the square $ABCD$ is length 1 and the point $P$ is the middle point of the side $AB$. Let's rotate the square with a spindle in the $B$ vertex until the $C$ vertex falls (for the first time) on the $AK$ segment; starting from this position of the square, we now perform the same operation with a spindle in $C$ and so on until the $AB$ side is contained again (for the first time after the first rotation) in the $AK$ segment. Provide a qualitative drawing of the trajectory of the point $P$ that can clarify how it was determined and calculate the length. (see figure)

**Answer:** (π/2)(1+√5)
[[src_kangourou_2023_junior_finale__QJ4]]



<span class="atom-split" id="qj5" data-atom="qj5" data-title="Quesito J5" data-tags="topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*due valori di n*

> Siano $n$ un numero intero con $0 \leq n < 40$ e $p$ un numero primo superiore a 5 tali che $p^2 + n$ sia divisibile per 40. Mostrare che $n$ può assumere solo due valori e specificare quali.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** n=39 o n=31
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ZqUD0phTjD1vGI9FmGiQjE0m_DFPuY6r/view)


<span class="qlang-split" data-lang="en"></span>


*two values of n*

> $n$ shall be an integer with $0 \leq n < 40$ and $p$ a prime number greater than 5 such that $p^2 + n$ is divisible by 40. Show that $n$ can only take two values and specify which ones.

**Answer:** n=39 o n=31
[[src_kangourou_2023_junior_finale__QJ5]]



<span class="atom-split" id="qj6" data-atom="qj6" data-title="Quesito J6" data-tags="topic_geometria_piana,topic_combinatoria,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*coppie a distanza massima ≤ n*

> Sono assegnati $n$ punti distinti nel piano ($n \geq 2$). Dimostra che, al variare di $n$, il numero delle coppie di tali punti che realizzano la massima distanza possibile è al massimo $n$ e può essere $n$.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** al più n, può essere n
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1ZqUD0phTjD1vGI9FmGiQjE0m_DFPuY6r/view)


<span class="qlang-split" data-lang="en"></span>


*pairs at maximum distance ≤ n*

> $n$ distinct points are assigned in the plan ($n \geq 2$). It shows that, when $n$ varies, the number of pairs of such points reaching the maximum possible distance is at most $n$ and may be $n$.

**Answer:** al più n, può essere n
[[src_kangourou_2023_junior_finale__QJ6]]
