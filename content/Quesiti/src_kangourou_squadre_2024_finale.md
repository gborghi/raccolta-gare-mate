---
title: Kangourou Coppa a squadre 2024 - Finale 2 (Cervia)
tipo: gara
competition: Kangourou Coppa a squadre 2024 - Finale 2 (Cervia)
family: kangourou
year: '2024'
level: squadre
---
<div class="atom-reader" data-gara="Quesiti/src_kangourou_squadre_2024_finale"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Perimetro pentagono ombreggiato da triangoli equilateri annidati*

![[src_kangourou_squadre_2024_finale__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=4]
  \coordinate (A) at (0.5, 0.866);
  \coordinate (B) at (0, 0);
  \coordinate (C) at (1, 0);
  \coordinate (F) at (0.5, 0);
  \coordinate (G) at (0.75, 0);
  \coordinate (D) at (0.75, 0.433);
  \coordinate (E) at (0.625, 0.2165);
  \fill[gray!30] (A) -- (B) -- (G) -- (E) -- (D) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (E) -- (F) -- (G) -- cycle;
  \draw[thick] (D) -- (E);
  \node[above] at (A) {$A$};
  \node[left] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[left] at (E) {$E$};
  \node[below] at (F) {$F$};
  \node[below] at (G) {$G$};
\end{tikzpicture}
\end{document}
```

> Il pentagono  
> Osservate la figura. ABC e EFG sono triangoli equilateri; F è il punto medio 
> di BC, G è il punto medio di FC e D è allineato con F ed E. Il perimetro del 
> triangolo ABC è 132. Qual è il perimetro del pentagono ombreggiato ABGED?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0121
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*Pentagon perimeter shaded by nested equilateral triangles*

![[src_kangourou_squadre_2024_finale__prob1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=4]
  \coordinate (A) at (0.5, 0.866);
  \coordinate (B) at (0, 0);
  \coordinate (C) at (1, 0);
  \coordinate (F) at (0.5, 0);
  \coordinate (G) at (0.75, 0);
  \coordinate (D) at (0.75, 0.433);
  \coordinate (E) at (0.625, 0.2165);
  \fill[gray!30] (A) -- (B) -- (G) -- (E) -- (D) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (E) -- (F) -- (G) -- cycle;
  \draw[thick] (D) -- (E);
  \node[above] at (A) {$A$};
  \node[left] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above right] at (D) {$D$};
  \node[left] at (E) {$E$};
  \node[below] at (F) {$F$};
  \node[below] at (G) {$G$};
\end{tikzpicture}
\end{document}
```

> Look at the figure. ABC and EFG are equilateral triangles; F is the mean point of BC, G is the mean point of FC and D is aligned with F and E. The perimeter of the ABC triangle is 132. What is the perimeter of the shaded pentagon ABGED?

**Answer:** 0121
[[src_kangourou_squadre_2024_finale__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_aritmetica,method_congruenze,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo intero somma di 9 e di 10 interi consecutivi*

> Somme di positivi  
> Qual è il più piccolo numero intero positivo che è esprimibile come somma sia di nove interi positivi 
> consecutivi sia di dieci interi positivi consecutivi?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_congruenze|Aritmetica modulare / congruenze]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0135
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum whole sum of 9 and 10 consecutive integers*

> Positive sums What is the smallest positive integer that can be expressed as the sum of both nine consecutive positive integers and ten consecutive positive integers?

**Answer:** 0135
[[src_kangourou_squadre_2024_finale__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Lunghezza segmento PQ in un quadrato con perpendicolari note*

![[src_kangourou_squadre_2024_finale__prob3.png]]

> Il segmento PQ  
> Nella figura, l’estremo P del segmento PQ è un vertice del quadrato mentre 
> l’estremo Q è un punto interno a un lato del quadrato che non ha un estremo in 
> P. Gli altri due segmenti interni al quadrato hanno entrambi un estremo in un 
> vertice del quadrato e l’altro sul segmento PQ e sono perpendicolari a PQ. La 
> figura, che non è in scala, riporta le loro lunghezze in centimetri. Quanti 
> millimetri è lungo il segmento PQ?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0136
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*PQ segment length in a square with perpendicular notes*

![[src_kangourou_squadre_2024_finale__prob3.png]]

> The PQ segment In the figure, the P extreme of the PQ segment is a vertex of the square while the Q extreme is an internal point on one side of the square that has no extreme in P. The other two segments inside the square have both one end at one vertex of the square and the other on the PQ segment and are perpendicular to PQ. The figure, which is not in scale, shows their lengths in centimeters. How many millimeters is the PQ segment?

**Answer:** 0136
[[src_kangourou_squadre_2024_finale__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_aritmetica,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero ABC = B x CB con B e CB primi*

> Numeri primi  
> Il numero di tre cifre n = ABC (A ≠ 0) è tale che n = B × CB dove sia B sia CB sono numeri primi. 
> Quanto vale n?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0679
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*Number ABC = B x CB with B and CB prime*

> Prime numbers The three digit number n = ABC (A ≠ 0) is such that n = B × CB where both B and CB are prime numbers. How much is n?

**Answer:** 0679
[[src_kangourou_squadre_2024_finale__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_aritmetica,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Anno del primo romanzo data la somma degli anni*

> Il primo romanzo  
> In un certo periodo della sua vita, uno scrittore ha pubblicato ogni due anni un romanzo. Ne ha 
> pubblicati sicuramente più di 7 e meno di 14. Sommando gli anni nei quali sono stati pubblicati i suoi 
> romanzi, si ottiene 21.945. In quale anno ha pubblicato il suo primo romanzo?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 1985
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*Year of first novel given sum of years*

> At some point in his life, a writer published a novel every two years. He's certainly published more than 7 and less than 14. Adding up the years in which his novels were published, you get 21,945. In what year did you publish your first novel?

**Answer:** 1985
[[src_kangourou_squadre_2024_finale__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_aritmetica,topic_algebra,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Ultimo intero scritto con somma alternata uguale a 2024*

> La somma è 2024  
> Simeone ha incominciato a scrivere i numeri interi positivi, partendo da 1, ma premettendo il segno 
> meno a tutti e soli i numeri pari. Ha iniziato dunque scrivendo 1 – 2 + 3 – 4 + 5 – 6 + …. Si è fermato 
> esattamente quando la somma algebrica che risulta scritta ha dato come risultato 2024. Qual è l’ultimo 
> intero che ha scritto?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_algebra|Algebra]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Algebra e Analisi]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 4047
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*Last integer written with an alternate sum equal to 2024*

> The sum is 2024 Simeon started writing the positive integers, starting with 1, but pressing the minus sign to all and only the even numbers. So he started by writing 1  2 + 3  4 + 5  6 + .... It stopped exactly when the written algebraic sum resulted in 2024. What's the last whole he wrote?

**Answer:** 4047
[[src_kangourou_squadre_2024_finale__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_geometria_piana,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area tra due circonferenze tangenti internamente diviso pi*

![[src_kangourou_squadre_2024_finale__prob7.png]]

> La regione ombreggiata  
> La figura evidenzia due circonferenze tangenti internamente in un punto, 
> il diametro della circonferenza esterna che ha quel punto come uno degli 
> estremi e il diametro della stessa circonferenza ad esso perpendicolare. 
> Sono inoltre precisate le lunghezze in metri, 20 e 36, dei due segmenti 
> indicati. Quanto vale, in metri quadrati, l’area della regione 
> (ombreggiata) compresa tra le due circonferenze divisa per π? 
>  
> } 36 
> 20 
> }  
> P 
> Q 
> A 
> B 
> C 
> D 
> E 
> F 
> G

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 3276
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*Area between two tangent circumferences internally divided by *

![[src_kangourou_squadre_2024_finale__prob7.png]]

> The shaded region The figure highlights two inner tangent circumferences in a point, the diameter of the outer circumference having that point as one of the extremes and the diameter of the same circumference perpendicular to it. The lengths in metres, 20 and 36, of the two segments indicated are also specified. What is the area of the region (shaded) divided by π in square metres?
>  
> } 36 20 } P Q A B C D E F G

**Answer:** 3276
[[src_kangourou_squadre_2024_finale__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_algebra,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="it"></div>


*Aumento percentuale del volume di un parallelepipedo*

> La scatola  
> Una scatola ha la forma di un parallelepipedo rettangolo. Se si aumentano la lunghezza del 50% e la 
> larghezza del 40%, e si diminuisce l’altezza del 10%, di quale percentuale aumenta il volume della 
> scatola? (Rispondete senza il simbolo %.)

**Topic:** [[topic_algebra|Algebra]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]]
**Risposta:** 0089
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*Percentage increase in the volume of a parallel piped*

> The box A box is shaped like a rectangular parallel-piped. If the length is increased by 50% and the width by 40%, and the height is decreased by 10%, by what percentage does the volume of the box increase? (Answer without the % symbol.)

**Answer:** 0089
[[src_kangourou_squadre_2024_finale__Q08]]



<span class="atom-split" id="q09" data-atom="q09" data-title="Quesito 9" data-tags="topic_aritmetica,skill_modellizzazione"></span>

<div class="qlang-switch" data-default="it"></div>


*Numero di incroci tra due nuotatrici in un'ora*

> Le nuotatrici  
> Due nuotatrici si allenano in una piscina: partono da uno dei lati e, quando raggiungono il lato 
> opposto, invertono il verso del nuoto. Per raggiungere il lato opposto una impiega 45 secondi, l’altra 
> 30. Se partono contemporaneamente da lati opposti e nuotano in corsie adiacenti entrambe per un’ora 
> esatta a velocità costante, quante volte si troveranno affiancate per un incrocio o un sorpasso?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 0100
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*Number of crosses between two swimmers in one hour*

> Two swimmers train in a swimming pool: they start from one side and, when they reach the opposite side, they turn the swimmer's face. One takes 45 seconds to reach the opposite side, the other 30 seconds. If they both start from opposite sides and swim in adjacent lanes for one hour at a constant speed, how many times will they find themselves next to each other for a crossing or crossing?

**Answer:** 0100
[[src_kangourou_squadre_2024_finale__Q09]]



<span class="atom-split" id="q10" data-atom="q10" data-title="Quesito 10" data-tags="topic_aritmetica,method_fattorizzazione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="it"></div>


*Minimo intero il cui prodotto delle cifre e 540*

> Il più piccolo  
> Qual è il più piccolo numero intero positivo il prodotto delle cui cifre è 540? (Scrivete 0000 se ritenete 
> che un tale numero non esista.)

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 2569
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum whole of which the product of the digits and 540 *

> What is the smallest positive integer whose product is 540? (Write 0000 if you believe such a number does not exist.)

**Answer:** 2569
[[src_kangourou_squadre_2024_finale__Q10]]



<span class="atom-split" id="q11" data-atom="q11" data-title="Quesito 11" data-tags="topic_combinatoria,topic_aritmetica,method_colorazione,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma diagonali griglia nxn minima con celle 3 e 17*

> La griglia  
> In ogni cella di una griglia quadrata n × n, dove n è un numero intero positivo, è collocato un numero 
> intero in modo che i numeri che si trovano in due celle adiacenti (cioè che condividono un lato) 
> differiscano esattamente di 1. I numeri 3 e 17 compaiono nella griglia. Se n è il più piccolo valore 
> possibile compatibile con l’enunciato del problema, quanto vale la somma dei numeri che compaiono 
> sulle diagonali della griglia?

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0160
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*Minimum diagonal grid sum nxn with cells 3 and 17*

> The grid In each cell of a square grid n, where n is a positive integer, an integer is placed so that the numbers in two adjacent cells (i.e. they share a side) differ exactly by 1. The numbers 3 and 17 are in the grid. If n is the smallest possible value compatible with the statement of the problem, what is the sum of the numbers appearing on the diagonal of the grid?

**Answer:** 0160
[[src_kangourou_squadre_2024_finale__Q11]]



<span class="atom-split" id="q12" data-atom="q12" data-title="Quesito 12" data-tags="topic_aritmetica,skill_riconoscimento_pattern"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma dei numeri nella 25a riga di schema triangolare*

> Schema a triangolo  
> Immaginate che i numeri interi positivi siano elencati in uno 
> schema triangolare (illimitato) come suggerito dalla figura. 
> Quanto vale la somma dei numeri contenuti nella 
> venticinquesima riga?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 7825
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*sum of numbers in the 25th row of the triangular scheme*

> Triangle pattern Imagine that positive integers are listed in a triangular (unlimited) pattern as suggested by the figure. What is the sum of the numbers in the twenty-fifth row?

**Answer:** 7825
[[src_kangourou_squadre_2024_finale__Q12]]



<span class="atom-split" id="q13" data-atom="q13" data-title="Quesito 13" data-tags="topic_logica,topic_combinatoria,method_casework,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Risultato incontro A-D in torneo di calcio a 4 squadre*

![[src_kangourou_squadre_2024_finale__prob13.png]]

> Il torneo  
> Ad un torneo di calcio partecipano le quattro squadre A, B, C, D. Ognuna incontra una e una sola 
> volta ognuna delle altre tre. La classifica finale (3 punti per la vittoria, 1 
> per il pareggio, 0 per la sconfitta) è quella che vedi in figura. A e C hanno 
> incassato solo una rete ciascuna, B e C hanno segnato solo una rete 
> ciascuna, A ha segnato 3 reti. Qual è il risultato dell’incontro tra A e D?  
> Se l’incontro è terminato m per A e n per D (ad esempio 1 a 0), scrivete 
> [0m0n] (nel caso dell’esempio [0100]).

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0201
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*Result of match A-D in four-team football tournament*

![[src_kangourou_squadre_2024_finale__prob13.png]]

> The tournament A football tournament involves four teams A, B, C, D. Each meets each of the other three once and only once. The final ranking (3 points for victory, 1 for tie, 0 for defeat) is what you see in the figure. A and C only collected one network each, B and C only scored one network each, A scored three networks. What is the result of the meeting between A and D? If the meeting ends m for A and n for D (e.g. 1 to 0), write [0m0n] (in the case of the example [0100]).

**Answer:** 0201
[[src_kangourou_squadre_2024_finale__Q13]]



<span class="atom-split" id="q14" data-atom="q14" data-title="Quesito 14" data-tags="topic_logica,method_estremalita,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="it"></div>


*Somma massima dei punteggi di 24 lanci di dado vincolati*

> Il dado  
> Mauro ha lanciato un dado equo 24 volte. Tutti i punteggi da 1 a 6 sono usciti almeno una volta, ma 
> 1 è uscito più di ogni altro. La somma di tutti i punteggi ottenuti da 
> Mauro è la più alta possibile compatibilmente con quanto detto in 
> precedenza: qual è questa somma?

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_estremalita|Principio di estremalita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 0090
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*Maximum score of 24 bound dice throws*

> The Mauro dice has thrown a fair dice 24 times. All scores from 1 to 6 came out at least once, but 1 came out more than any other. The sum of all the scores obtained by Mauro is as high as possible in accordance with the above: what is this sum?

**Answer:** 0090
[[src_kangourou_squadre_2024_finale__Q14]]



<span class="atom-split" id="q15" data-atom="q15" data-title="Quesito 15" data-tags="topic_geometria_piana,method_coordinate,skill_ragionamento_geometrico"></span>

<div class="qlang-switch" data-default="it"></div>


*Area regione ombreggiata in quadrato ripartito*

![[src_kangourou_squadre_2024_finale__prob15.png]]

> Il quadrato ripartito 
> I lati del quadrato nella figura a destra sono ripartiti in segmenti delle 
> lunghezze indicate in centimetri; collegando con altri segmenti gli 
> estremi di alcuni di essi si sono ottenute le due regioni che appaiono, 
> una bianca e una ombreggiata. Qual è l’area, in centimetri quadrati, 
> della regione ombreggiata?  
> Squadra Punti 
> A 
> 7 
> B 
> 5 
> C 
> 4 
> D 
> 0 
> 1 
> 2      3 
> 4      5      6 
> 7       8      9      10 
> 11     12     13     14     15 
>   16     17     …       …                 . 
> 
> Kangourou della Matematica 2024
> Coppa Kangourou a squadre
> Finale 2
> Cervia, 4 maggio 2024
>  
> Titoli e risposte

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_coordinate|Metodo delle coordinate]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0218
**Fonte:** [apri PDF p.2](https://drive.google.com/file/d/1not-5aEYzZLue8UjzSY2ummtyUxacBCg/view)


<span class="qlang-split" data-lang="en"></span>


*Area region shaded in square divided*

![[src_kangourou_squadre_2024_finale__prob15.png]]

> The sides of the square in the figure to the right are divided into segments of lengths indicated in centimetres; connecting the ends of some of these with other segments gives rise to the two regions that appear, one white and one shaded. What is the area in square centimetres of the shaded region? Four four four four four four four four three three three three three two two two seven seven seven seven squad Points A seven B five C four D 0 one two three four five six seven eight nine ten eleven twelve thirteen four four four four four four four three three three three three three two two two two seven seven seven seven seven squad Points A seven B five four D one two three four five six seven eight nine ten eleven twelve thirteen four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four four
> 
> Kangourou of Mathematics 2024 Kangourou Cup to teams Final 2 Cervia, 4 May 2024
>  
> Securities and replies

**Answer:** 0218
[[src_kangourou_squadre_2024_finale__Q15]]
