---
title: Kangourou 2022 Junior finale individuale
tipo: gara
competition: Kangourou 2022 Junior finale individuale
family: kangourou
year: '2022'
level: kangourou
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_2022_junior_finale"></div>



<span class="atom-split" id="qj1" data-atom="qj1" data-title="Quesito J1" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Ogni termine della sequenza 1007,10017,... divisibile per 53*

> Considera la sequenza di interi i cui primi due termini sono, nell'ordine, $1007$ e $10017$, e ogni termine successivo è ottenuto dal precedente inserendo un'ulteriore cifra $1$ dopo le tre cifre iniziali $100$ (dunque $1007, 10017, 100117, 1001117, \ldots$). Dimostra che ogni intero della sequenza è divisibile per $53$.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1nc-josfBQrvIVQaZGTW6I82lQMtWKEjA/view)


<span class="qlang-split" data-lang="en"></span>


Each term of the sequence 1007,10017,... Divisible by 53*

> Consider the sequence of integers whose first two terms are, in order, $1007$ and $10017$, and each subsequent term is obtained from the previous one by inserting an additional digit $1$ after the first three digits $100$ (hence $1007, 10017, 100117, 1001117, \ldots$). It shows that each whole of the sequence is divisible by $53$.

[[src_kangourou_2022_junior_finale__QJ1]]



<span class="atom-split" id="qj2" data-atom="qj2" data-title="Quesito J2" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Raggio del cerchio interno alle tre circonferenze*

![[src_kangourou_2022_junior_finale__probJ2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) circle (1);
  \draw (2,0) circle (1);
  \draw (1,1.732) circle (1);
  \draw (1,0.5774) circle (0.1547);
\end{tikzpicture}
\end{document}
```

> In figura vedi tre circonferenze di raggio $1$, ognuna passante per il centro delle altre due, e una circonferenza più piccola contenuta in ciascuna delle tre e ad esse internamente tangente. Quanto vale il raggio di quest'ultima? (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 1 - 1/raddt3
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1nc-josfBQrvIVQaZGTW6I82lQMtWKEjA/view)


<span class="qlang-split" data-lang="en"></span>


*Rage of the inner circle at three circumferences*

![[src_kangourou_2022_junior_finale__probJ2.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) circle (1);
  \draw (2,0) circle (1);
  \draw (1,1.732) circle (1);
  \draw (1,0.5774) circle (0.1547);
\end{tikzpicture}
\end{document}
```

> In the figure you can see three radius circles $1$, each passing through the centre of the other two, and a smaller circle contained in each of the three and tangent to them internally. How much is the radius of the latter? (see figure)

**Answer:** 1 - 1/raddt3
[[src_kangourou_2022_junior_finale__QJ2]]



<span class="atom-split" id="qj3" data-atom="qj3" data-title="Quesito J3" data-tags="topic_combinatoria,method_colorazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Massimo numero di tessere 2x1 nella regione di 36 quadratini*

![[src_kangourou_2022_junior_finale__probJ3.png]]

> In figura vedi una regione di piano ottenuta accostando $36$ quadratini tutti uguali fra loro, e una tessera ottenuta accostando due quadratini identici a quelli della regione (tessera $2 \times 1$). Quante tessere di questo tipo puoi disporre al massimo nella regione in modo che ognuna copra esattamente due quadratini della regione e non si sovrappongano (neppure parzialmente)? Puoi utilizzare la figura per indicare come disporre le tessere, ma ricorda che devi anche giustificare il motivo per il quale non ne puoi collocare un numero maggiore. (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 15
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nc-josfBQrvIVQaZGTW6I82lQMtWKEjA/view)


<span class="qlang-split" data-lang="en"></span>


*Maximum number of 2x1 tiles in the 36-square region*

![[src_kangourou_2022_junior_finale__probJ3.png]]

> In the figure you can see a region of the plane obtained by joining $36$ squares all equal to each other, and a card obtained by joining two squares identical to those of the region (the $2 \times 1$ table). How many tiles of this type can you have at most in the region so that each one covers exactly two squares of the region and does not overlap (even partially)? You can use the figure to indicate how to arrange the cards, but remember that you also have to justify why you can't place a larger number. (see figure)

**Answer:** 15
[[src_kangourou_2022_junior_finale__QJ3]]



<span class="atom-split" id="qj4" data-atom="qj4" data-title="Quesito J4" data-tags="topic_aritmetica,method_fattorizzazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Quante coppie (m,n) con 1/m+1/n=1/2022*

> Per quante coppie ordinate $(m, n)$ di numeri interi positivi si ha
> $$\frac{1}{m} + \frac{1}{n} = \frac{1}{2022}\,?$$

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 27
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1nc-josfBQrvIVQaZGTW6I82lQMtWKEjA/view)


<span class="qlang-split" data-lang="en"></span>


*How many pairs (m,n) with 1/m+1/n=1/2022*

> For all ordered pairs $(m, n)$ of positive integers $$\frac{1}{m} + \frac{1}{n} = \frac{1}{2022}\,?$$

**Answer:** 27
[[src_kangourou_2022_junior_finale__QJ4]]



<span class="atom-split" id="qj5" data-atom="qj5" data-title="Quesito J5" data-tags="topic_geometria_piana,method_simmetria,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Lati rossi e verdi dell'ottagono hanno somma uguale*

![[src_kangourou_2022_junior_finale__probJ5.png]]

> Due quadrati congruenti, uno con bordo rosso e l'altro con bordo verde, sono disposti nel piano in modo tale che la loro intersezione sia un ottagono (i centri dei due quadrati possono non coincidere). Dimostra che la somma delle lunghezze dei lati rossi dell'ottagono coincide con la somma delle lunghezze dei lati verdi.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1nc-josfBQrvIVQaZGTW6I82lQMtWKEjA/view)


<span class="qlang-split" data-lang="en"></span>


*The red and green sides of the octagon have the same sum*

![[src_kangourou_2022_junior_finale__probJ5.png]]

> Two congruent squares, one with a red and the other with a green edge, are arranged in the plane so that their intersection is an octagon (the centers of the two squares may not coincide). It shows that the sum of the lengths of the red sides of the octagon coincides with the sum of the lengths of the green sides.

[[src_kangourou_2022_junior_finale__QJ5]]



<span class="atom-split" id="qj6" data-atom="qj6" data-title="Quesito J6" data-tags="topic_aritmetica,method_cassetti,skill_astrazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Il numero finale di 10 cifre ha almeno due cifre uguali*

> Considera il numero $2023^{2022}$ in notazione decimale; leva la sua prima cifra da destra (quella delle unità) e sommala al numero ottenuto con le cifre rimaste. Procedi in questo modo fino ad ottenere un numero di $10$ cifre. Dimostra che questo numero che hai ottenuto possiede almeno due cifre uguali.

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_cassetti|Principio dei cassetti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF p.3](https://drive.google.com/file/d/1nc-josfBQrvIVQaZGTW6I82lQMtWKEjA/view)


<span class="qlang-split" data-lang="en"></span>


*The final 10-digit number has at least two equal digits*

> Consider the number $2023^{2022}$ in decimal notation; take its first digit from the right (the number of units) and add it to the number obtained by the remaining digits. Continue this way until you get a $10$ number. It shows that this number you got has at least two digits equal.

[[src_kangourou_2022_junior_finale__QJ6]]
