---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022
tipo: gara
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022
family: tfjm
year: '2022'
level: TFJM²
---
<div class="atom-reader" data-gara="Quesiti/src_tfjm_2022"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_geometria_piana,topic_combinatoria,method_simmetria,method_ricorsione,method_casework,skill_ragionamento_geometrico,skill_astrazione,skill_casework_accurato"></span>

<div class="qlang-switch" data-default="en"></div>


*Folding polygons: study the flattened polygons (plies) obtainable by repeatedly folding a convex polygon with convex creases, including periodicity of resulting sequences.*

> Folding of polygons.
> 
> Eulalie has sheets of polygons that she folds to obtain other polygons.
> 
> She always folds the polygons by the same procedure: she chooses two distinct vertices $A$ and $B$ of the polygon and a line $(d)$, the mediatrix (perpendicular bisector) of the segment $[AB]$; she then performs an axial symmetry with axis $(d)$ on the part of the polygon lying on the same side of $(d)$ as $A$. In particular, the image of $A$ is folded onto the vertex $B$.
> 
> We say that a polygon is $convex$ when all its interior angles are less than $180^\circ$. To avoid ending up with peculiar shapes, Eulalie requires herself to fold only convex polygons. A polygon is said to be $convex$ if the polygon obtained is convex.
> 
> A shape obtained by a convex fold from a convex starting polygon is called a $pli$ (ply) of the starting polygon.
> 
> 1. Describe all the plies of the following polygons.
>   a) Equilateral, isosceles or right triangles.
>   b) Quadrilaterals (arbitrary).
>   c) Regular polygons.
> 
> 2. Let $n \ge 3$ be an integer.
>   a) At most how many sides can the convex ply of a convex polygon with $n$ sides have?
>   b) And at minimum?
> 
> 3. In this question only, the plies performed are not required to be convex, but the polygon to be folded is always convex. Redo question 2 in this setting.
> 
> Two polygons $P$ and $Q$ with $n$ sides are said to be $similar$ if there is an enlargement $\lambda \in \mathbb{R}_+^*$ such that one can number their vertices cyclically respectively $A_1, A_2, \cdots, A_n$ and $B_1, B_2, \cdots, B_n$ so that the angles internal at $A_i$ and $B_i$ are equal and one has $A_i A_{i-1} = \lambda B_i B_{i-1}$ for all $1 \le i \le n$, with $A_0 = A_n$, $B_0 = B_n$. Figure 3 illustrates two polygons that are similar for an enlargement $\lambda = 2$.
> 
> 4. Eulalie wants to perform a succession of plies starting from a polygon and then come back to her starting polygon. A $period$ of plies is a succession of convex plies $P_0, P_1, \cdots, P_k$ such that each polygon precedes the next one. The polygon $P_0$ being arbitrary, one then has a sequence of plies of starting polygon $P_0$, issued from $P_0$. One says further that a sequence of plies $P_0, P_1, \ldots, P_k$ is $periodic$ when $P_0$ and $P_k$ are similar and $k$ is the smallest strictly positive integer verifying this property; it is then required that $P_0$ and $P_i$ are not similar for all $1 \le i < k$. The integer $k$ is called the $period$ of the sequence. A polygon $P$ is said to be of $finite period$ if there exists a periodic sequence of plies issued from $P$. In this case, the minimal period of the sequence of plies issued from $P$ is called the period of $P$.
>   a) What is the period of the square? Describe the periodic sequences of plies of the square.
>   b) Let $n \ge 3$ be an integer. Do there exist periodic sequences of plies issued from a regular polygon with $n$ sides? If possible, give an enclosure (bounds) of the period of a regular polygon with $n$ sides.
> 
> 5. In this question, one is interested in periodic sequences of plies of period 1. Do there exist similar polygons that are their own plies? How many sides can such a polygon have?
> 
> 6. For which $k \ge 1$ do there exist polygons of period $k$?
> 
> 7. In this question, one is interested in periodic sequences of plies all having the same number of sides. A sequence of plies of polygons with $n$ sides then has a $constant number of sides$, or is a $sequence of n sides$, if all the polygons of the periodic sequence have $n$ sides. Redo questions 4 and 6, further imposing periodic sequences with a constant number of $n$ sides.
> 
> 8. Propose and study other avenues of research.

![[src_tfjm_2022__Q01.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<span class="qlang-split" data-lang="it"></span>


*Poligoni pieghevoli: studiare i poligoni piatti ottenuti piegando ripetutamente un poligono convex con pieghe convex, compresa la periodicità delle sequenze risultanti.*

> Piegare i poligoni.
> 
> Eulalie ha fogli di poligoni che piega per ottenere altri poligoni.
> 
> Pieghe sempre i poligoni con la stessa procedura: sceglie due vertici distinti $A$ e $B$ del poligono e una linea $(d)$, la mediatrice (bisettore perpendicolare) del segmento $[AB]$; esegue quindi una simmetria assiale con asse $(d)$ sulla parte del poligono che si trova sullo stesso lato di $(d)$ come $A$. In particolare, l'immagine di $A$ è piegata sul vertice $B$.
> 
> Diciamo che un poligono è $convex$ quando tutti i suoi angoli interni sono inferiori a $180^\circ$. Per evitare di finire con forme peculiari, Eulalie si richiede di piegare solo poligoni convexi. Si dice che un poligono sia $convex$ se il poligono ottenuto è convexo.
> 
> Una forma ottenuta con un piego convexo da un poligono di partenza convexo è chiamata $pli$ (piano) del poligono di partenza.
> 
> 1. Descrivere tutte le pieghe dei seguenti poligoni. a) Equilaterali, igosceles o triangolari rettangolari. b) Quadrilaterali (arbitrari). c) Poligoni regolari.
> 
> 2. $n \ge 3$ sia un numero intero. a) Quanti lati può avere, al massimo, la strata convexa di un poligono convexo con lati $n$? b) E come minimo?
> 
> 3. Solo in questa domanda, non è necessario che le pieghe eseguite siano conveche, ma il poligono da piegare è sempre conveco. Rendi la domanda 2 in questo contesto.
> 
> Due poligoni $P$ e $Q$ con lati $n$ sono $similar$ se vi è un'ampliamento $\lambda \in \mathbb{R}_+^*$ tale da poter numerare i loro vertici ciclicamente rispettivamente $A_1, A_2, \cdots, A_n$ e $B_1, B_2, \cdots, B_n$ in modo che gli angoli interni a $A_i$ e $B_i$ siano uguali e uno abbia $A_i A_{i-1} = \lambda B_i B_{i-1}$ per tutti $1 \le i \le n$, con $A_0 = A_n$, $B_0 = B_n$. La figura 3 illustra due poligoni simili per un ingrandimento $\lambda = 2$.
> 
> 4. Eulalie vuole eseguire una successione di pieghe partendo da un poligono e poi tornare al suo poligono di partenza. Un $period$ di pie è una successione di pie convexe $P_0, P_1, \cdots, P_k$ in modo tale che ogni poligono preceda quello successivo. Il poligono $P_0$ essendo arbitrario, si ha quindi una sequenza di pieghe del poligono iniziale $P_0$, emessa da $P_0$. Si dice inoltre che una sequenza di pie $P_0, P_1, \ldots, P_k$ è $periodic$ quando $P_0$ e $P_k$ sono simili e $k$ è il numero intero più piccolo rigorosamente positivo che verifica questa proprietà; è quindi richiesto che $P_0$ e $P_i$ non siano simili per tutti $1 \le i < k$. Il numero intero $k$ è chiamato $period$ della sequenza. Si dice che un poligono $P$ sia di $finite period$ se esiste una sequenza periodica di pieghe emesse da $P$. In questo caso, il periodo minimo della sequenza di pieghe emesse da $P$ è denominato periodo di $P$. a) Qual è il periodo della piazza? Descrivere le sequenze periodiche di pie di quadrato. b) Il $n \ge 3$ deve essere un numero intero. Esistono sequenze periodiche di pieghe emesse da un poligono regolare con lati $n$? Se possibile, indicare un rivestimento (limitati) del periodo di un poligono regolare con lati $n$.
> 
> 5. In questa questione, si sono interessate le sequenze periodiche di pie di periodo 1. Esistono poligoni simili che hanno le proprie pieghe? Quanti lati può avere un tale poligono?
> 
> 6. Per quale $k \ge 1$ esistono poligoni del periodo $k$?
> 
> 7. In questa domanda, si interessano sequenze periodiche di piele che hanno tutte lo stesso numero di lati. Una sequenza di pieghe di poligoni con lati $n$ ha quindi un $constant number of sides$, o è un $sequence of n sides$, se tutti i poligoni della sequenza periodica hanno lati $n$. Riprendi le domande 4 e 6, imponendo ulteriormente sequenze periodiche con un numero costante di lati $n$.
> 
> 8. Proporre e studiare altre vie di ricerca.

![[src_tfjm_2022__Q01.png]]

[[src_tfjm_2022__Q01]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_combinatoria,topic_algebra,method_invarianti,method_ricorsione,method_casework,skill_modellizzazione,skill_riconoscimento_pattern,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Swallows on electric wires sing musical themes determined by a reflection-type recurrence on their positions; study which themes appear, periodicity, sharpest themes, and generalized bird species.*

> Melody of the swallows.
> 
> The musician Elaia gives food to the swallows perched on the electric wires in front of her window.
> 
> There are $n \ge 1$ swallows perched on $2k+1$ horizontal electric wires, numbered from bottom to top from $-k$ to $k$. At the start, each swallow $i \in [\![1, n]\!]$ has note $u_i \in [\![-k, k]\!]$, the number of the wire on which it is perched. Elaia imagines the positions of the swallows on the wires as a musical theme: a set $(u_i)_{1 \le i \le n} = (u_1, \ldots, u_n)$ of positions of the swallows.
> 
> To find again the positions of the swallows, Elaia throws a grain to swallow $i$ perched on a wire so that it perches on another wire. The rule is as follows: if Elaia throws a grain to swallow $i$, this one perches on another wire and resumes singing taking the position $v_i = u_{i-1} + u_{i+1} - u_i$, with by convention $u_0 = u_{n+1} = 0$. The other swallows remain at their position: $v_j = u_j$ for $j \ne i$. Elaia obtains then a new musical theme $(v_i)_{1 \le i \le n}$ from $(u_i)_{1 \le i \le n}$ by throwing a grain to swallow $i$; this one resumes singing at its position $v_i$, and the process restarts if she continues to throw other grains. If a swallow can no longer perch on a wire (its target wire $v_i$ does not exist), the process stops.
> 
> For example, Figure 4 illustrates passing from a grain thrown to swallow 2, in the case $n = 4$ with $k = 2$. Here $(u_1, u_2, u_3, u_4) = (-2, -1, 2, 0)$ and $(v_1, v_2, v_3, v_4) = (-2, 1, 2, 0)$.
> 
> 1. Suppose $k$ infinite, and suppose all the swallows are at the start on the wire numbered 0, except one which is on the wire numbered 1. Which musical themes can Elaia obtain? One always begins with the case $n = 1, 2, 3$.
> 
> 2. Suppose henceforth $k$ finite. For which initial musical themes $(u_i)_{1 \le i \le n}$ and which $i$ is Elaia sure that no swallow will leave definitively, whatever the number of grains she throws? (Without taking into account the order in which she throws the grains.)
> 
> 3. One says that a musical theme $(u_i)_{1 \le i \le n}$ is $sharper$ (plus aigu) than another $(u'_i)_{1 \le i \le n}$ if for each $i \in [\![1, n]\!]$ one has $u_i \ge u'_i$.
>   a) Starting from a starting musical theme, in the situations where Elaia is sure that no swallow will leave definitively, can she always reach a musical theme sharper than all the other themes she could attain by throwing grains?
>   b) What is the sharpest musical theme, as a function of the starting theme?
>   c) If $(u_i)_{1 \le i \le n}$ denotes the initial position of the swallows, how many grains $T((u_i)_{1 \le i \le n})$ must Elaia at least use to obtain the sharpest musical theme?
>   d) In the case where Elaia obtains the sharpest musical theme by throwing $T((u_i)_{1 \le i \le n})$ grains, how many different sequences of throws allow her to attain the sharpest musical theme?
> 
> 4. Aglaé, a musicology friend of Elaia, proposes a new model of birds with an experiment, numbered $m \in [\![1, n]\!]$, that when thrown a grain will change position to $v_m = 2 u_{m-1} + u_{m+1} - u_m$, while the others do not change at all. Repeat the preceding questions in this setting. One may begin by treating the cases $m = 1, 2$, then small values of $n$.
> 
> 5. The swallow at position $m$ is now of a new species with parameters $(a, b) \in \mathbb{N}^2$: when Elaia throws it a grain, it perches at the position $v_m = a u_{m-1} + b u_{m+1} - u_m$. Thus question 4 corresponds to a new species with parameters $(a, b) = (2, 1)$. Repeat questions 1, 2, 3 with this new species of bird, discussing the results as a function of $m$ and the couple $(a, b)$.
> 
> 6. Propose and explore other avenues of research. One may, for example, change the species of several birds.

![[src_tfjm_2022__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_algebra|Algebra]]
**Metodo:** [[method_invarianti|Invarianti]], [[method_ricorsione|Ricorsione]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<span class="qlang-split" data-lang="it"></span>


*Le avvolte su fili elettrici cantano temi musicali determinati da una ricorrenza di tipo riflesso nelle loro posizioni; studiare quali temi appaiono, periodicità, temi più acuti e specie di uccelli generalizzate.*

> La melodia delle paludi.
> 
> La musicista Elaia dà da mangiare ai bagnoni appoggiati sui fili elettrici di fronte alla sua finestra.
> 
> Ci sono le porzioni $n \ge 1$ incastonate sui fili elettrici orizzontali $2k+1$, numerate dal basso in alto da $-k$ a $k$. All'inizio, ogni deglutione $i \in [\![1, n]\!]$ ha la nota $u_i \in [\![-k, k]\!]$, il numero del filo su cui è appeso. Elaia immagina le posizioni delle paludi sui fili come un tema musicale: un insieme $(u_i)_{1 \le i \le n} = (u_1, \ldots, u_n)$ di posizioni delle paludi.
> 
> Per ritrovare le posizioni delle bagni, Elaia lancia un grano per inghiottire $i$ appoggiato su un filo in modo che si appoggi su un altro filo. La regola è la seguente: se Elaia lancia un grano per inghiottire $i$, questo si appoggia su un altro filo e riprende a cantare prendendo la posizione $v_i = u_{i-1} + u_{i+1} - u_i$, con convenzione $u_0 = u_{n+1} = 0$. Le altre inghiottite rimangono nella loro posizione: $v_j = u_j$ per $j \ne i$. Elaia ottiene quindi un nuovo tema musicale $(v_i)_{1 \le i \le n}$ da $(u_i)_{1 \le i \le n}$ lanciando un grano per ingoiare $i$; questo riprende a cantare nella sua posizione $v_i$, e il processo ricomincia se continua a lanciare altri grani. Se una inghiottita non può più appoggiarsi su un filo (il suo filo bersaglio $v_i$ non esiste), il processo si ferma.
> 
> Per esempio, la figura 4 illustra il passaggio da un grano gettato a inghiottire 2, nel caso $n = 4$ con $k = 2$. Qui $(u_1, u_2, u_3, u_4) = (-2, -1, 2, 0)$ e $(v_1, v_2, v_3, v_4) = (-2, 1, 2, 0)$.
> 
> 1. Supponiamo che $k$ sia infinito, e supponiamo che tutti i baglioni siano all'inizio sul filo numerato 0, tranne uno che è sul filo numerato 1. Quali temi musicali può ottenere Elaia? Si inizia sempre con il caso $n = 1, 2, 3$.
> 
> 2. Supponiamo che da ora in poi $k$ sia finito. Per quali temi musicali iniziali $(u_i)_{1 \le i \le n}$ e per quali $i$ Elaia è sicura che nessun trapianto lascerà definitivamente, qualunque sia il numero di grani che lancia? (Senza tener conto dell'ordine in cui lancia i grani.)
> 
> 3. Si dice che un tema musicale $(u_i)_{1 \le i \le n}$ è $sharper$ (più aigu) rispetto ad un altro $(u'_i)_{1 \le i \le n}$ se per ogni $i \in [\![1, n]\!]$ si ha $u_i \ge u'_i$. a) Partendo da un tema musicale iniziale, in situazioni in cui Elaia è sicura che nessuna deglutia se ne andrà definitivamente, può raggiungere un tema musicale sempre più nitido di tutti gli altri temi che potrebbe raggiungere gettando cereali? b) Qual è il tema musicale più acuto, in funzione del tema iniziale? c) Se $(u_i)_{1 \le i \le n}$ indica la posizione iniziale delle paludi, quanti grani $T((u_i)_{1 \le i \le n})$ deve utilizzare Elaia almeno per ottenere il tema musicale più acuto? d) Nel caso in cui Elaia ottiene il tema musicale più acuto gettando i grani $T((u_i)_{1 \le i \le n})$, quante diverse sequenze di lanci le consentono di raggiungere il tema musicale più acuto?
> 
> 4. Aglaé, amico di Elaia in musicaologia, propone un nuovo modello di uccelli con un esperimento, numerato $m \in [\![1, n]\!]$, che quando viene lanciato un grano cambia posizione a $v_m = 2 u_{m-1} + u_{m+1} - u_m$, mentre gli altri non cambiano affatto. Ripete le domande precedenti in questo contesto. Si può iniziare con il trattamento dei casi $m = 1, 2$, quindi piccoli valori di $n$.
> 
> 5. La deglutiera in posizione $m$ è ora di una nuova specie con parametri $(a, b) \in \mathbb{N}^2$: quando Elaia lancia un grano, si trova in posizione $v_m = a u_{m-1} + b u_{m+1} - u_m$. Pertanto la domanda 4 corrisponde a una nuova specie con parametri $(a, b) = (2, 1)$. Ripetere le domande 1, 2, 3 con questa nuova specie di uccello, discutendo i risultati come funzione di $m$ e della coppia $(a, b)$.
> 
> 6. Proporre e esplorare altre vie di ricerca. Si può, ad esempio, modificare le specie di diversi uccelli.

![[src_tfjm_2022__Q02.png]]

[[src_tfjm_2022__Q02]]



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_combinatoria,topic_logica,method_conteggio,method_casework,method_backward,skill_conteggio_sistematico,skill_modellizzazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*A confined professor wants substitute Perrine to reconstruct the seating arrangement of n pupils; find the minimal number of questions needed under several allowed question types, with adaptive answers, errors, and lying.*

> Confined professor.
> 
> Timothé is a mathematics professor; he has fallen ill and must absent himself during a week. He asks a substitute named Perrine to replace him.
> 
> Timothé leaves Perrine the choice of placing the pupils in the order she wants in the seats of the class, where she must answer his questions. He poses questions to Perrine in order to determine the seating plan of the class, but it is more practical that he poses them in advance. Perrine being short of time, while she sets up the seating plan she asks Timothé to write a list of questions to which she will answer. Timothé then reads this list and returns, for each question found in the list, an answer to it; this list of questions must be as short as possible.
> 
> 1. The pupils of the class are numbered from 1 to $n$. Determine if Timothé can determine the seating plan of the class, and what is the minimal estimate of the number of questions that he must pose, if he is obliged to pose questions of the class of the form:
>   a) « Is it pupil $i$? » where $1 \le i \le n$.
>   b) Any question to which Perrine must answer by « yes » or « no ».
>   c) Is it that pupil $i$ is found at place $p$? where $1 \le i, p \le n$.
>   d) Give the set of pupils (one cannot force their order) who are at places $p_1, p_2, \ldots, p_k$ where $1 \le k \le n$ is fixed in advance by Perrine.
>   e) Which place of the class is pupil $i$ at? where $1 \le i \le n$.
> 
> 2. Now, Timothé calls Perrine by telephone. He receives the answer to each of his questions just after having posed it. Repeat question 1 in this setting.
> 
> 3. During the week, Perrine made a mistake about the room, and went to another room with $m > n$ chairs. Timothé does not make any mistake. Repeat the preceding questions in this setting.
> 
> 4. Perrine decides to taunt Timothé and authorizes herself to make mistakes on certain answers. Fix $l \in \mathbb{N}^*$, and suppose that Perrine has the right to err $l$ times and that Timothé knows $l$. Repeat the preceding questions in this setting.
> 
> 5. Propose and study other avenues of research.

![[src_tfjm_2022__Q03.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_conteggio|Conteggio]], [[method_casework|Casework]], [[method_backward|Backward]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<span class="qlang-split" data-lang="it"></span>


Un professore confinato vuole sostituire Perrine per ricostruire l'arrangamento dei posti a sedere di n alunni; trovare il numero minimo di domande necessarie sotto diversi tipi di domande consentite, con risposte adattive, errori e mentire.

> Professore rinchiuso.
> 
> Timothyé è un professore di matematica; è ammalato e deve assistere per una settimana. Chiede a un sostituto di nome Perrine di sostituirlo.
> 
> Timothy lascia a Perrine la scelta di mettere gli alunni nell'ordine che vuole nei posti della classe, dove deve rispondere alle sue domande. Fa domande a Perrine per determinare il piano di seduta della classe, ma è più pratico che le faccia in anticipo. Perrine, essendo a corto di tempo, mentre imposta il piano di posti a sedere, chiede a Timothy di scrivere una lista di domande a cui risponderà. Timothyé legge poi questa lista e restituisce, per ogni domanda che si trova nella lista, una risposta; questa lista di domande deve essere il più breve possibile.
> 
> 1. Gli alunni della classe sono numerati da 1 a $n$. Determina se Timothy può determinare il piano di seduta della classe e quale è la stima minima del numero di domande che deve porre, se è obbligato a porre domande della classe del modulo: a)  È studente $i$?  in cui $1 \le i \le n$. b) Qualsiasi domanda a cui Perrine deve rispondere con  sì  o  no . c) Si trova l'allievo $i$ al posto $p$? in cui $1 \le i, p \le n$. d) Indicare l'insieme degli alunni (non si può forzare il loro ordine) che si trovano nei luoghi $p_1, p_2, \ldots, p_k$ dove $1 \le k \le n$ è fissato in anticipo da Perrine. e) In quale luogo della classe si trova l'allievo $i$? dove $1 \le i \le n$.
> 
> 2. Timothy chiama Perrine al telefono. riceve la risposta a ciascuna delle sue domande appena dopo averla posta. Ripetere la domanda 1 in questo contesto.
> 
> 3. Durante la settimana, Perrine ha commesso un errore sulla stanza, e è andato in un'altra stanza con sedie $m > n$. Timothy non commette errori. Ripete le domande precedenti in questo contesto.
> 
> 4. Perrine decide di prendersi gioco di Timothy e si autorizza a sbagliare su alcune risposte. Corre $l \in \mathbb{N}^*$, e supponi che Perrine abbia il diritto di sbagliare $l$ volte e che Timothy sappia $l$. Ripete le domande precedenti in questo contesto.
> 
> 5. Proporre e studiare altre vie di ricerca.

![[src_tfjm_2022__Q03.png]]

[[src_tfjm_2022__Q03]]



<span class="atom-split" id="q04" data-atom="q04" data-title="Quesito 4" data-tags="topic_combinatoria,topic_logica,method_casework,method_estremalita,method_invarianti,skill_modellizzazione,skill_conteggio_sistematico,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*A memoryless gold-seeker uses three tools with limited lifetimes that goblins can repair overnight; he forgets everything daily, so find a strategy minimizing total cost c_n while never losing nuggets, then generalize to k tools, lucky charms, and rescuers.*

> Memoryless dwarf.
> 
> The dwarf Alaric is a seeker of gold. He goes each day to the mine to find nuggets there.
> 
> There are each day three tools: a pickaxe, a helmet and a lamp. Each tool, used with a certain force, has a limited lifetime: a pickaxe, a helmet and a lamp serve respectively during 2, 3 and 3 days, after which they cease to function. Alaric has the possibility of leaving certain tools with the goblins in the evening when leaving the mine, so that they are returned to him as new the next morning.
> 
> However, Alaric is victim of a curse: upon his waking, the next morning, he has forgotten all that he could have done the preceding days. He is also incapable of observing the wear of his tools. Thus, each evening, at the moment when he chooses which tools he is going to leave to the goblins, he is incapable of knowing either how worn they are, or which one belongs to him. He will tomorrow morning take a tool which is neither too old nor; the tools he is going to take among those he is going to find. If he attempts to use a tool that no longer works, then he cannot dig nor pick up nuggets that day.
> 
> The goal of the dwarf is to find a strategy to spend the least possible money while assuring himself of not losing nuggets: the first day, the goblins furnish him all his tools brand new, but the next morning he won't know whether it is the first day. One denotes by $c_n$ the smallest amount possible that the dwarf will spend up to the $n$-th day, while assuring himself of not losing nuggets up to the $n$-th day.
> 
> 1. Enclose $c_n$ as precisely as possible. Same question if the lamp can serve up to 4 days instead of 3.
> 
> 2. The dwarf now has $k \ge 1$ tools. One denotes $v_1, \ldots, v_k \ge 1$ their lifetimes and $c_n(v_1, \ldots, v_k)$ the minimal amount that the dwarf will spend up to the $n$-th day while assuring himself of not losing nuggets up to the $n$-th day. Estimate $c_n(v_1, \ldots, v_k)$, being interested principally in the cases $n > 2^k$, for
>   a) $k = 2$ and $v_1, v_2 \ge 1$ arbitrary.
>   b) $v_i = k$ for all $i \in [\![1, k]\!]$.
>   c) $v_i > k$ for all $i \in [\![1, k]\!]$.
>   d) $v_i = i$ for all $i \in [\![1, k]\!]$.
>   e) $v_i = 2^i$ for all $i \in [\![1, k]\!]$.
>   f) $v_1, \ldots, v_k$ arbitrary. One may be interested in other particular values of $v_1, \ldots, v_k$.
> 
> 3. Does one always have $c_n(v_1, \ldots, v_{k+1}) \ge c_n(v_1, \ldots, v_k)$ for all $n, k, v_1, \ldots, v_k, v_{k+1} \ge 1$? If not, give counter-examples.
> 
> 4. In this question, Alaric can buy a lucky charm from the goblins, which costs one coin and has an infinite lifetime. In the morning when he wakes up, if he has a lucky charm, he can decide in the evening to throw it away or to keep it, and if he has none, he can decide in the evening to buy one or not.
>   a) Repeat the preceding questions in this setting. In particular, do there exist sets of tools for which the presence of the lucky charm diminishes the minimal cost? If so, describe them.
>   b) Same question if the goblins propose $m \ge 2$ different lucky charms at once.
> 
> 5. Now, if the dwarf breaks one of his tools in the mine, he can call for help so that a team of rescuers comes to fetch him, but this then costs him $p \ge 1$ coins. He must then leave his broken tools with the goblins, and he cannot communicate any information to them (since they do not speak the dwarf language). Repeat questions 1 to 4 in this setting. In particular, do there exist sets of tools for which the presence of the rescuers diminishes the cost? If so, describe them.
> 
> 6. Propose and study other directions of research.

![[src_tfjm_2022__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<span class="qlang-split" data-lang="it"></span>


Un cercatore d'oro senza memoria utilizza tre strumenti con vite limitate che i goblin possono riparare durante la notte; dimentica tutto ogni giorno, quindi trova una strategia per ridurre al minimo il costo totale senza perdere mai le nugget, quindi generalizzatela a k strumenti, incantesimi di fortuna e salvatori.*

> Nano senza memoria.
> 
> Il nano Alaric è un cercatore di oro. Va ogni giorno alla miniera a trovare delle nugget lì.
> 
> Ogni giorno ci sono tre attrezzi: un pugnale, un casco e una lampada. Ogni strumento, utilizzato con una certa forza, ha una durata limitata: una picca, un casco e una lampada servono rispettivamente per 2, 3 e 3 giorni, dopo i quali cessano di funzionare. Alaric ha la possibilità di lasciare alcuni strumenti ai goblin la sera quando esce dalla miniera, in modo che gli vengano restituiti come nuovi la mattina dopo.
> 
> Tuttavia, Alaric è vittima di una maledizione: al risveglio, la mattina dopo, ha dimenticato tutto ciò che avrebbe potuto fare i giorni precedenti. E' anche incapace di osservare l'usura dei suoi strumenti. Così, ogni sera, nel momento in cui sceglie quali strumenti lasciare ai goblin, non è in grado di sapere quanto sono indossati, o quale gli appartiene. Domani mattina prenderà uno strumento che non è né troppo vecchio né; gli strumenti che prenderà tra quelli che troverà. Se cerca di usare uno strumento che non funziona più, allora non può scavare né raccogliere nuggets quel giorno.
> 
> L'obiettivo del nano è quello di trovare una strategia per spendere il minimo denaro possibile assicurandosi di non perdere le nugget: il primo giorno, i goblin gli forniscono tutti i suoi strumenti nuovi, ma la mattina dopo non saprà se è il primo giorno. Uno indica con $c_n$ la minima quantità possibile che la nana spenderà fino al $n$-th giorno, assicurandosi di non perdere nuggets fino al $n$-th giorno.
> 
> 1. Inserire $c_n$ con la massima precisione possibile. La stessa domanda se la lampada può servire fino a 4 giorni invece di 3.
> 
> 2. Il nano ora ha gli strumenti. Uno indica $v_1, \ldots, v_k \ge 1$ le loro vite e $c_n(v_1, \ldots, v_k)$ la quantità minima che il nano spenderà fino al $n$-th giorno assicurandosi di non perdere nuggets fino al $n$-th giorno. Valutare $c_n(v_1, \ldots, v_k)$, essendo interessato principalmente nei casi $n > 2^k$, per a) $k = 2$ e $v_1, v_2 \ge 1$ arbitrario. b) $v_i = k$ per tutti $i \in [\![1, k]\!]$. c) $v_i > k$ per tutti $i \in [\![1, k]\!]$. d) $v_i = i$ per tutti $i \in [\![1, k]\!]$. e) $v_i = 2^i$ per tutti $i \in [\![1, k]\!]$. f) $v_1, \ldots, v_k$ arbitrario. Potrebbe interessare altri valori particolari di $v_1, \ldots, v_k$.
> 
> 3. Si dispone sempre di $c_n(v_1, \ldots, v_{k+1}) \ge c_n(v_1, \ldots, v_k)$ per tutti $n, k, v_1, \ldots, v_k, v_{k+1} \ge 1$? Se non è così, date dei contro-esempi.
> 
> 4. In questa domanda, Alaric può comprare un fascino di fortuna dai goblin, che costa una moneta e ha una vita infinita. La mattina, quando si sveglia, se ha un fascino fortunato, può decidere la sera di buttarlo via o tenerlo, e se non ne ha uno, può decidere la sera di comprarlo o no. a) Ripetere le domande precedenti in questo contesto. In particolare, esistono strumenti per i quali la presenza del fascino di fortuna riduce il costo minimo? Se sì, descriverli. b) La stessa domanda se i goblin propongono diversi incantesimi di fortuna contemporaneamente.
> 
> 5. Ora, se il nano rompe uno dei suoi strumenti nella miniera, può chiamare aiuto in modo che un team di soccorritori venga a prenderlo, ma questo gli costerà monete. Deve poi lasciare i suoi strumenti rotti ai goblin, e non può comunicare alcuna informazione a loro (dal momento che non parlano la lingua nanna). Ripetere le domande da 1 a 4 in questo contesto. In particolare, esistono strumenti per i quali la presenza dei soccorritori riduce il costo? Se sì, descriverli.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2022__Q04.png]]

[[src_tfjm_2022__Q04]]



<span class="atom-split" id="q05" data-atom="q05" data-title="Quesito 5" data-tags="topic_geometria_analitica,topic_geometria_piana,topic_combinatoria,method_coordinate,method_simmetria,method_invarianti,skill_ragionamento_geometrico,skill_astrazione,skill_manipolazione_algebrica"></span>

<div class="qlang-switch" data-default="en"></div>


*Microscopic tinkering: which line configurations Malo can reach from another using three operations (reflect a line across another, scale the whole picture by lambda, translate by a vector); study square and triangular grid configurations and interchangeability.*

> Microscopic tinkering (bricolage).
> 
> Malo is a particular tinkerer who works very minutely: he manipulates very thin metallic rods, which he observes only under a microscope.
> 
> Under the microscope, Malo observes $n$ rods that each form a straight line on the screen, certain of them possibly overlapping (confondues). He can perform three types of transformations to displace these rods:
>   (i) With the aid of very sophisticated rays, he is capable of choosing one of these rods and reflecting it with respect to one other of these rods present;
>   (ii) He can enlarge or shrink the entire image with the microscope, with any enlargement $\lambda \in \mathbb{R}_+^*$, that is to say that the point of coordinates $(x, y)$ is sent to the point of coordinates $(\lambda x, \lambda y)$ (this for all the rods, which remain straight lines);
>   (iii) He can translate all the rods by a same vector $\vec{v}$.
> 
> He can perform these operations uniquely; he is however permitted, for example, to apply a single operation to all the lines. If a line $d$ is overlapping with a line $d'$, Malo can nonetheless move the line $d$ with operation (i) without moving the line $d'$. Some examples of permitted transformations are illustrated in Figure 5.
> 
> By applying these three types of operations a finite number of times, he can obtain other configurations of lines. If Malo is capable of obtaining a configuration $\mathcal{C}$ of lines from a configuration $\mathcal{C}'$, one says that $\mathcal{C}'$ is $accessible$ from $\mathcal{C}$.
> 
> 1. Let $n \ge 3$ be an integer. Given two configurations of $n$ lines parallel to the axis of abscissas and such that any two of them are always at integer distance, under what condition can one access one from the other? One may begin with the case $n = 3$.
> 
> 2. A configuration of lines is said to be $square$ (carrée) if all the lines belong to a grid formed of identical squares whose sides are parallel to the axes. A configuration of lines is said to be $triangular$ if all the lines belong to a grid formed of identical equilateral triangles all having a side parallel to the axis of abscissas. The two types of grids as well as examples of square and triangular configurations are illustrated in Figure 6.
>   a) Let $n \ge 1$ be an integer. Does there exist a finite set $E$ of square configurations with $n$ lines such that every square configuration with $n$ lines is accessible from a configuration of $E$? If so, how many configurations are needed at minimum?
>   b) Given two square configurations, how can one know if one is accessible from the other?
> 
> 3. Redo the preceding question, replacing the square configurations by triangular configurations.
> 
> The lines are now numbered from 1 to $n$. Malo decides to attribute to each line a new number, which will be denoted $\sigma(i)$ for line $i$. He has however taken care that each number from 1 to $n$ appears exactly once. A configuration is $interchangeable$ if, whatever Malo's renumbering, it is possible for him to perform transformations such that, after these transformations, for all $i \in [\![1, n]\!]$, the line $\sigma(i)$ appears exactly where the line $i$ was previously.
> 
> 4. Which triangular and square configurations are interchangeable?
> 
> 5. Find necessary and sufficient conditions for an arbitrary configuration of lines to be interchangeable. One may begin by treating the case where the $n$ lines are all parallel.
> 
> 6. Propose and study other avenues of research.

![[src_tfjm_2022__Q05.png]]

**Topic:** [[topic_geometria_analitica|Geometria analitica]], [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]], [[method_invarianti|Invarianti]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<span class="qlang-split" data-lang="it"></span>


*Tincering microscopico: quali configurazioni di linea Malo può raggiungere da un'altra utilizzando tre operazioni (riflettere una linea attraverso un'altra, scalare l'intero quadro con lambda, tradurre con un vettore); studiare le configurazioni quadrate e triangolari della griglia e l'interscambiabilità.*

> Tintinatura microscopica (bricolaggio).
> 
> Malo è un tecnico che lavora molto minuziosamente: manipola bastone metalliche molto sottili, che osserva solo sotto un microscopio.
> 
> Sotto il microscopio, Malo osserva le barre $n$ che formano ciascuna una linea retta sullo schermo, alcune delle quali possibilmente si sovrappongono (confonde). Può eseguire tre tipi di trasformazioni per spostare queste barre: (i) Con l'aiuto di raggi molto sofisticati, è in grado di scegliere una di queste barre e rifletterla rispetto ad un'altra di queste barre presenti; (ii) Può ingrandire o ridurre l'intera immagine con il microscopio, con qualsiasi ingrandimento $\lambda \in \mathbb{R}_+^*$, cioè che il punto delle coordinate $(x, y)$ viene inviato al punto delle coordinate $(\lambda x, \lambda y)$ (questo per tutte le barre, che rimangono linee rette); (iii) Può tradurre tutte le barre con lo stesso vettore $\vec{v}$.
> 
> Può eseguire queste operazioni in modo unico, ma è consentito, ad esempio, di applicare una sola operazione a tutte le linee. Se una linea $d$ si sovrappone a una linea $d'$, Malo può comunque spostare la linea $d$ con l'operazione (i) senza spostare la linea $d'$. Alcuni esempi di trasformazioni consentite sono illustrati nella figura 5.
> 
> Applicando questi tre tipi di operazioni un numero finito di volte, può ottenere altre configurazioni di linee. Se Malo è in grado di ottenere una configurazione $\mathcal{C}$ di linee da una configurazione $\mathcal{C}'$, si dice che $\mathcal{C}'$ è $accessible$ da $\mathcal{C}$.
> 
> 1. $n \ge 3$ sia un numero intero. Date due configurazioni di linee $n$ parallele all'asse delle abscisse e tali che le due siano sempre a distanza di numeri interi, a quale condizione si può accedere all'una dall'altra? Si può iniziare con il caso $n = 3$.
> 
> 2. Si dice che una configurazione di linee sia $square$ (carrée) se tutte le linee appartengono a una griglia costituita da quadrati identici i cui lati sono paralleli agli assi. Si dice che una configurazione di linee sia $triangular$ se tutte le linee appartengono a una griglia costituita da triangoli equilaterali identici che hanno tutti un lato parallelo all'asse delle abscisse. Le due tipologie di griglie e gli esempi di configurazioni quadrate e triangolari sono illustrati nella figura 6. a) Il $n \ge 1$ deve essere un numero intero. Esiste un insieme finito $E$ di configurazioni quadrate con linee $n$ in modo tale che ogni configurazione quadrata con linee $n$ sia accessibile da una configurazione di $E$? Se sì, quante configurazioni sono necessarie al minimo? b) Dato che ci sono due configurazioni quadrate, come si può sapere se l'una è accessibile dall'altra?
> 
> 3. Riprendi la domanda precedente, sostituendo le configurazioni quadrate con le configurazioni triangolari.
> 
> Le linee sono ora numerate da 1 a $n$. Malo decide di attribuire a ciascuna riga un nuovo numero, che sarà indicato $\sigma(i)$ per la riga $i$. Egli ha tuttavia fatto in modo che ogni numero da 1 a $n$ appaia esattamente una volta. Una configurazione è $interchangeable$ se, qualunque sia la rinumerazione di Malo, è possibile per lui eseguire trasformazioni in modo che, dopo queste trasformazioni, per tutte le $i \in [\![1, n]\!]$, la riga $\sigma(i)$ apparisca esattamente dove la riga $i$ era precedentemente.
> 
> 4. Quali configurazioni triangolari e quadrate sono intercambiabili?
> 
> 5. Trovare le condizioni necessarie e sufficienti affinché una configurazione arbitraria di linee sia intercambiabile. Si può iniziare trattando il caso in cui le linee $n$ siano tutte parallele.
> 
> 6. Proporre e studiare altre vie di ricerca.

![[src_tfjm_2022__Q05.png]]

[[src_tfjm_2022__Q05]]



<span class="atom-split" id="q06" data-atom="q06" data-title="Quesito 6" data-tags="topic_combinatoria,topic_logica,method_grafi,method_bigezione,method_casework,skill_modellizzazione,skill_astrazione,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="en"></div>


*Twin towns: each day Aliénor picks an inhabitant of A without a correspondent and Boniface assigns one in B preserving friendship; study perfect twinnings and the maximal asymmetric/symmetric compatibility C(A,B), D(A,B) for cycle-towns and the infinite town Z.*

> Twin towns (Villes jumelées).
> 
> Aliénor and Boniface are mayors of two towns $A$ and $B$. Boniface wants to organize a twinning with the town of Aliénor, but the latter seeks to make this project fail.
> 
> To twin the towns, certain inhabitants will be associated, friendship being considered as reciprocal. To twin consists in associating to an inhabitant of town $A$ a single corresponding inhabitant of town $B$ in such a way that two different persons have different correspondents. Aliénor and Boniface organize the correspondences between the inhabitants as follows: each day, Aliénor chooses an inhabitant of town $A$ who does not yet have a correspondent, then Boniface chooses a correspondent in town $B$ among the inhabitants who do not yet have a correspondent. If at a certain moment two inhabitants of a same town are friends and both have correspondents but these correspondents do not have the same friend, [the correspondence fails]; the twinning is $perfect$ if Boniface manages to give a correspondent to each inhabitant of town $A$.
> 
> 1. Under what condition on the towns $A$ and $B$ is it possible for Boniface to assure himself of attaining a perfect twinning, whatever the choices of Aliénor? One will suppose that the towns $A$ and $B$ have a finite number of inhabitants (but not necessarily the same).
> 
> Given two towns $A$ and $B$, their $maximal asymmetric compatibility$ $C(A, B)$ is the largest integer $n$ such that Boniface can assure himself that the correspondence does not fail after $n$ days, whatever the choices of Aliénor.
> 
> Let $k \ge 3$. A $k$-cycle in a town is a set of $k$ inhabitants $c_1, \cdots, c_k$ such that the only friends of $c_i$ are $c_{i-1}$ and $c_{i+1}$ for all $1 \le i \le k$, setting $c_0 = c_k$ and $c_{k+1} = c_1$. The town whose $a_1 + a_2 + \cdots + a_l$ inhabitants form an $a_1$-cycle, ... and an $a_l$-cycle, disjoint, is called $\mathcal{C}_{a_1, a_2, \ldots, a_l}$. The town $\mathcal{Z}$ is the infinite town with one inhabitant per relative integer, and such that the only friends of inhabitant $i$ are the inhabitants $i + 1$ and $i - 1$.
> 
> Figure 7 illustrates the town $\mathcal{C}_6$ and the town $\mathcal{C}_{3,3}$. The inhabitants are represented by circles, and two friends are joined by a segment when they are linked.
> 
> 2. Supposing that there is the same number $n \in \mathbb{N}$ of inhabitants in town $A$ as in town $B$, what values can $C(A, B)$ take?
> 
> 3. Estimate the value of $C(\mathcal{C}_n, \mathcal{Z})$ and of $C(\mathcal{Z}, \mathcal{C}_n)$. One may begin by considering small values of $n$.
> 
> 4. Estimate $C(\mathcal{C}_{a+b}, \mathcal{C}_{a,b})$ and $C(\mathcal{C}_{a,b}, \mathcal{C}_{a+b})$ for $a, b \ge 1$ integers. One may begin by considering small values of $a$ and $b$.
> 
> The following year, Aliénor and Boniface organize themselves differently: each day Aliénor chooses an inhabitant of the town of her choice who does not have a correspondent, then Boniface chooses his correspondent in the other town among the inhabitants who do not yet have a correspondent. One then calls $maximal symmetric compatibility$ and denotes $D(A, B)$ the largest integer $n$ such that Boniface can assure himself that the correspondence does not fail after $n$ days, whatever the choices of Aliénor.
> 
> 5. Redo the preceding questions, replacing the maximal asymmetric compatibility by the maximal symmetric compatibility.
> 
> 6. Propose and study other directions of research.

![[src_tfjm_2022__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_bigezione|Biiezione]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<span class="qlang-split" data-lang="it"></span>


*Comuni gemelli: ogni giorno Aliénor sceglie un abitante di A senza corrispondente e Boniface ne assegna uno in B per preservare l'amicizia; studiare gemelli perfetti e la massima compatibilità asimmetrica/simmetrica C(A,B), D(A,B) per città ciclabili e la città infinita Z.*

> città gemelle (Villes jumelées).
> 
> Aliénor e Boniface sono sindaci di due città $A$ e $B$. Boniface vuole organizzare un gemellaggio con la città di Aliénor, ma quest'ultima cerca di far fallire questo progetto.
> 
> Per fare le città gemelle, alcuni abitanti saranno associati, l'amicizia considerata reciproca. Per essere gemelli si intende associare a un abitante di una città $A$ un singolo abitante corrispondente di una città $B$ in modo tale che due persone diverse abbiano corrispondenti diversi. Aliénor e Boniface organizzano le corrispondenze tra gli abitanti come segue: ogni giorno, Aliénor sceglie un abitante della città $A$ che non ha ancora un corrispondente, poi Boniface sceglie un corrispondente in città $B$ tra gli abitanti che non hanno ancora un corrispondente. Se in un certo momento due abitanti di una stessa città sono amici e entrambi hanno corrispondenti ma questi corrispondenti non hanno lo stesso amico, [la corrispondenza fallisce]; il gemellaggio è $perfect$ se Boniface riesce a dare un corrispondente a ogni abitante della città $A$.
> 
> 1. In quali condizioni nelle città $A$ e $B$ è possibile che Bonifacio si assicuri di raggiungere un gemellaggio perfetto, qualunque sia la scelta di Aliénor? Si suppone che le città $A$ e $B$ abbiano un numero finito di abitanti (ma non necessariamente la stessa).
> 
> Date le due città $A$ e $B$, il loro $maximal asymmetric compatibility$ $C(A, B)$ è il più grande numero intero $n$ in modo tale che Bonifacio può assicurarsi che la corrispondenza non fallisce dopo $n$ giorni, qualunque siano le scelte di Aliénor.
> 
> Let $k \ge 3$. Un ciclo $k$ in una città è un insieme di abitanti $k$ $c_1, \cdots, c_k$ in modo tale che gli unici amici di $c_i$ siano $c_{i-1}$ e $c_{i+1}$ per tutti $1 \le i \le k$, impostando $c_0 = c_k$ e $c_{k+1} = c_1$. La città i cui abitanti $a_1 + a_2 + \cdots + a_l$ formano un ciclo $a_1$, ... e un ciclo $a_l$ disgiunto si chiama $\mathcal{C}_{a_1, a_2, \ldots, a_l}$. La città $\mathcal{Z}$ è la città infinita con un abitante per numero intero relativo, e tale che gli unici amici dell'abitante $i$ sono gli abitanti $i + 1$ e $i - 1$.
> 
> La figura 7 illustra la città $\mathcal{C}_6$ e la città $\mathcal{C}_{3,3}$. Gli abitanti sono rappresentati da cerchi e due amici sono uniti da un segmento quando sono legati.
> 
> 2. Supponendo che ci sia lo stesso numero di abitanti in città $n \in \mathbb{N}$ come in città $B$, quali valori può $C(A, B)$ assumere?
> 
> 3. Calcolare il valore di $C(\mathcal{C}_n, \mathcal{Z})$ e di $C(\mathcal{Z}, \mathcal{C}_n)$. Si può iniziare considerando piccoli valori di $n$.
> 
> 4. Valutare $C(\mathcal{C}_{a+b}, \mathcal{C}_{a,b})$ e $C(\mathcal{C}_{a,b}, \mathcal{C}_{a+b})$ per $a, b \ge 1$ integri. Si può iniziare considerando piccoli valori di $a$ e $b$.
> 
> L'anno successivo, Aliénor e Boniface si organizzano in modo diverso: ogni giorno Aliénor sceglie un abitante della città di sua scelta che non ha un corrispondente, poi Boniface sceglie il suo corrispondente nell'altra città tra gli abitanti che non hanno ancora un corrispondente. Si chiama poi $maximal symmetric compatibility$ e si denota $D(A, B)$ il più grande intero $n$ in modo tale che Bonifacio possa assicurarsi che la corrispondenza non fallisca dopo $n$ giorni, qualunque siano le scelte di Aliénor.
> 
> 5. Riprendi le domande precedenti, sostituendo la massima compatibilità asimmetrica con la massima compatibilità simmetrica.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2022__Q06.png]]

[[src_tfjm_2022__Q06]]



<span class="atom-split" id="q07" data-atom="q07" data-title="Quesito 7" data-tags="topic_geometria_piana,topic_geometria_analitica,method_ricorsione,method_coordinate,method_simmetria,skill_ragionamento_geometrico,skill_modellizzazione,skill_stima"></span>

<div class="qlang-switch" data-default="en"></div>


*Dog walk: n dogs each move one unit per second toward the next dog (cyclically); Boule on a leash of length L must avoid breaking leashes whether he stays put or moves; study triangle case, universal leash lengths, and variants where a dog chases a cat on an N-gon or a line.*

> Dog walk (Promenade de chiens).
> 
> Boule decides to walk his dogs. Unfortunately for him, these last ones are very turbulent and run after each other.
> 
> Boule possesses $n \ge 2$ dogs. For all $1 \le i \le n$, the dog of number $i$ follows the dog of number $i + 1$ (one considers that dog number $n + 1$ is dog number 1). The dogs move in the following manner: at each second, for $1 \le i \le n$, the dog $i$ moves a length 1 in the direction of dog $i + 1$. More precisely, for all $t \in \mathbb{N}$, denoting $C_i(t)$ the position of dog $i$ at the end of $t$ seconds:
>   — if $C_i(t) \ne C_{i+1}(t)$, then $C_i(t+1)$ is the unique point such that the vectors $\overrightarrow{C_i(t)C_i(t+1)}$ and $\overrightarrow{C_i(t)C_{i+1}(t)}$ have the same direction and same sense, and $C_i(t)C_i(t+1) = 1$;
>   — if $C_i(t) = C_{i+1}(t)$, then $C_i(t+1) = C_i(t)$, in other words the $i$-th dog does not move.
> 
> The dogs thus all move at the same time at each second. Figure 8 illustrates an example with $n = 3$.
> 
> Boule has attached a leash of length $L$ to the neck of each of his dogs. A leash breaks if at a time $t \in \mathbb{N}$, the distance between Boule and one of his dogs is strictly greater than $L$.
> 
> 1. Boule is of a lazy mood: he chooses a point at the beginning of the walk as a function of the initial positions of the dogs and does not move any more.
>   a) Suppose $n = 3$ and that the three dogs are placed initially at the vertices of an equilateral triangle of side $c$. Does there exist a length $L$ such that Boule can assure himself of breaking no leash? If so, what is the smallest length $L$ that permits this, as a function of $c$?
>   b) Suppose now $n$ arbitrary. Is it true that whatever the initial configuration, Boule can always foresee a sufficient leash length? One may begin by studying the cases $n = 2, 3, 4$.
> 
> 2. From now on Boule decides to move so as to avoid the leashes breaking: at each instant $t$ he can place himself at the point of his choice (he runs very fast so he has no limitation due to his speed).
>   a) For $n = 3$ with an arbitrary initial position, is it true that Boule can foresee a sufficient leash length so that the leash does not break as long as he moves with his dogs?
>   b) Study the case of $n$ dogs in an arbitrary initial position.
> 
> A length $L_0$ is said to be $universal$ for $n$ dogs if whatever the initial position of the dogs, there exists a time $t_0$ from which Boule, who moves, can replace his leashes by leashes of length $L_0$ without any of these leashes breaking any more.
> 
> 3. For which $n \ge 2$ does there exist a universal length for $n$ dogs? For such $n$, what is the smallest universal length? One may begin by treating the cases $n = 2, 3, 4$.
> 
> Mylène, the neighbor of Boule, possesses a cat, which is situated at the point $M(t)$ at time $t$. One supposes from now on that dog number $n$ no longer follows dog number 1 but the cat, that is to say that at each second it makes a step of length 1 in the direction of the cat. The rules of movement of the other dogs remain unchanged.
> 
> 4. The cat of Mylène moves on the vertices of a regular $N$-gon of side 1. At each instant, it passes from a vertex to the following vertex (in the direct sense).
>   a) If Boule has only a single dog, and the dog starts at the center of the $N$-gon, what leash length must Boule foresee if he does not move?
>   b) Same question for $n$ dogs which all start at the center.
> 
> 5. This time the cat moves on a straight line, making a step of length 1 in the same direction at each instant. What leash length must Boule foresee if he can move, as a function of the initial configuration?
> 
> 6. Propose and study other avenues of research.

![[src_tfjm_2022__Q07.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_coordinate|Coordinate]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<span class="qlang-split" data-lang="it"></span>


*Passeggiata di cane: n cani si muovono ogni unità al secondo verso il cane successivo (ciclicamente); Boule su un guinzaglio di lunghezza L deve evitare di rompere guinzaglio se rimane messo o si muove; studiare caso triangolare, lunghezza universale di guinzaglio e varianti in cui un cane insegue un gatto su un N-gon o una linea.*

> Passeggiata per cani (Promenade de chiens).
> 
> Boule decide di fare una passeggiata ai suoi cani. Purtroppo per lui, questi ultimi sono molto turbolenti e si corrono l'uno dietro l'altro.
> 
> Boule possiede cani $n \ge 2$. Per tutti i $1 \le i \le n$, il cane del numero $i$ segue il cane del numero $i + 1$ (si considera che il numero di cane $n + 1$ sia il numero di cane 1). I cani si muovono nel modo seguente: ogni secondo, per $1 \le i \le n$, il cane $i$ si muove una lunghezza 1 nella direzione del cane $i + 1$. Più precisamente, per tutti i $t \in \mathbb{N}$, indicando $C_i(t)$ la posizione del cane $i$ alla fine di $t$ secondi:  se $C_i(t) \ne C_{i+1}(t)$, allora $C_i(t+1)$ è il punto unico in modo che i vettori $\overrightarrow{C_i(t)C_i(t+1)}$ e $\overrightarrow{C_i(t)C_{i+1}(t)}$ abbiano la stessa direzione e senso, e $C_i(t)C_i(t+1) = 1$;  se $C_i(t) = C_{i+1}(t)$, allora $C_i(t+1) = C_i(t)$, in altre parole il cane $i$-th non si muove.
> 
> I cani si muovono tutti allo stesso tempo ogni secondo. La figura 8 illustra un esempio con $n = 3$.
> 
> Boule ha attaccato un guinzaglio di $L$ al collo di ciascuno dei suoi cani. La guinzaglia si rompe se a un tempo $t \in \mathbb{N}$ la distanza tra Boule e uno dei suoi cani è strettamente superiore a $L$.
> 
> 1. Boule è di umore pigro: sceglie un punto all'inizio della passeggiata in funzione delle posizioni iniziali dei cani e non si muove più. a) Supponiamo $n = 3$ e che i tre cani siano posizionati inizialmente alle vertici di un triangolo equilaterale laterale $c$. Esiste una lunghezza $L$ tale che Boule possa assicurarsi di non rompere la guinzaglia? In tal caso, quale è la lunghezza $L$ più piccola che lo consente, come funzione di $c$? b) Supponiamo ora che $n$ sia arbitrario. E' vero che, qualunque sia la configurazione iniziale, Boule può sempre prevedere una lunghezza di guinzaglio sufficiente? Si può iniziare studiando i casi $n = 2, 3, 4$.
> 
> 2. D'ora in poi Boule decide di muoversi in modo da evitare la rottura dei guinzetti: in ogni istante $t$ può mettersi al punto di sua scelta (corre molto veloce quindi non ha limiti a causa della sua velocità). a) Per $n = 3$ con posizione iniziale arbitraria, è vero che Boule può prevedere una lunghezza di guinzaglio sufficiente affinché la guinzaglia non si rompa mentre si muove con i suoi cani? b) Studiare il caso di cani $n$ in posizione iniziale arbitraria.
> 
> Una lunghezza $L_0$ è detta $universal$ per i cani $n$ se, qualunque sia la posizione iniziale dei cani, esiste un tempo $t_0$ a partire dal quale Boule, che si muove, può sostituire le sue guinzaglie con guinzaglie di lunghezza $L_0$ senza che nessuna di queste guinzaglie si rompa più.
> 
> 3. Per quale $n \ge 2$ esiste una lunghezza universale per i cani $n$? Per tale $n$, quale è la lunghezza universale più piccola? Si può iniziare con il trattamento dei casi $n = 2, 3, 4$.
> 
> Mylène, vicina di Boule, possiede un gatto, che si trova al punto $M(t)$ al momento $t$. Si suppone che da ora in poi il numero di cane $n$ non segua più il numero di cane 1 ma il gatto, cioè che ogni secondo fa un passo di lunghezza 1 nella direzione del gatto. Le regole di movimento degli altri cani rimangono invariate.
> 
> 4. Il gatto di Mylène si muove sulle vertici di un normale $N$-gon del lato 1. Ogni istante passa da un vertice al vertice successivo (nel senso diretto). a) Se Boule ha un solo cane e il cane parte al centro del $N$-gon, quale lunghezza di guinzaglio deve prevedere Boule se non si muove? b) La stessa domanda per i cani $n$ che iniziano tutti al centro.
> 
> 5. Questa volta il gatto si muove in linea retta, facendo un passo di lunghezza 1 nella stessa direzione ogni istante. Che lunghezza di guinzaglio deve prevedere Boule se può muoversi, in funzione della configurazione iniziale?
> 
> 6. Proporre e studiare altre vie di ricerca.

![[src_tfjm_2022__Q07.png]]

[[src_tfjm_2022__Q07]]



<span class="atom-split" id="q08" data-atom="q08" data-title="Quesito 8" data-tags="topic_geometria_piana,topic_geometria_analitica,topic_logica,method_coordinate,method_estremalita,method_casework,skill_ragionamento_geometrico,skill_modellizzazione,skill_astrazione"></span>

<div class="qlang-switch" data-default="en"></div>


*Perseus and the Gorgon: a step-by-step pursuit where each moves at most d_0 per step and the Gorgon petrifies Perseus if the segment between them avoids the obstacle O; determine admissible distances d for various obstacles (line, point, segment, disk, polygon), characterize possible admissible sets, and treat continuous-speed strategy variants.*

> Perseus and the Gorgon (Persée et la Gorgone).
> 
> Persée ventures into the cavern of the Gorgon, and seeks to escape from her fatal petrifying gaze.
> 
> The cavern of the Gorgon is a plane region where Persée wants to put an obstacle $\mathcal{O}$, which is a set of points on which Persée and the Gorgon cannot stop, but which they are capable of jumping over. Persée and the Gorgon know at each instant where the other is situated, but the gaze of the Gorgon reaches Persée if the segment between the two does not contain any point of the obstacle. In that case Persée is petrified.
> 
> Let $d_0$ be a real. The Gorgon must initially choose her starting point outside the obstacle. Persée then chooses his starting point as a function of that of the Gorgon. Then the Gorgon begins by trying to touch Persée with a gaze. If this succeeds she petrifies him. Otherwise she chooses a point that is not in the obstacle and that is at distance at most $d_0$ from the one where she was. Persée, who knows where the Gorgon is going, chooses a point at distance at most $d_0$ from the point where he was, if he wants. When the two have arrived at their new point, the Gorgon tries again to touch Persée with a gaze, and so on. The real $d$ is said to be $admissible$ for Persée with $\mathcal{O}$ if, with this obstacle, Persée has a strategy that allows him never to be petrified, whatever the Gorgon does, when $d_0 = d$.
> 
> Figure 9 illustrates an example of a pursuit between Persée and the Gorgon, in the case where the obstacle is a full triangle and $d_0 = 2$. The successive points where Persée is situated are the points $P_0, P_1, P_2, P_3$, and the successive points where the Gorgon is situated are the points $G_0, G_1, G_2, G_3$. After 3 steps, the gaze of the Gorgon finally touches Persée: this last one is petrified.
> 
> 1. What are the admissible reals if the obstacle is a line? If it is a point? If it is a segment of length $l$?
> 
> 2. The obstacle is an open disk of radius $r > 0$. What are the admissible reals for this obstacle as a function of $r$? One may begin with the case $r = 1$.
> 
> 3. The obstacle is a full polygon. What are the admissible reals for this obstacle? One may begin by studying particular polygons.
> 
> 4. Let $A_\mathcal{O}$ be the set of admissible reals for an obstacle $\mathcal{O}$. What are the sets that can be written $A_\mathcal{O}$ for some obstacle $\mathcal{O}$?
> 
> 5. Now, the Gorgon must move a distance exactly $d_0$ and Persée must move a distance exactly 1 at each step, that is to say that for all $i$, $G_i G_{i+1} = d_0$ and $P_i P_{i+1} = 1$. Redo the preceding questions in this setting.
> 
> Now, the Gorgon moves permanently at speed at most $v_0$ looking in the direction of Persée, and Persée moves permanently at speed at most 1 to avoid her. For $v \in \mathbb{R}_+^*$, a $trajectory$ at speed at most $v$ is an application $T$ from $\mathbb{R}_+$ into the plane such that:
>   - for $t \in \mathbb{R}_+$, $T(t)$ is not in the obstacle;
>   - for all $t_1, t_2 \in \mathbb{R}_+$, the distance between $T(t_1)$ and $T(t_2)$ is at most $v \times |t_1 - t_2|$.
> 
> A $strategy$ for Persée is an application $\mathcal{S}$ which to a trajectory $T_G$ at speed at most $v_0$ associates a trajectory $\mathcal{S}(T_G) = T_P$ at speed at most 1 such that for all $t \in \mathbb{R}_+$, the value $\mathcal{S}(T_G)(t) = T_P(t)$ depends only on the values of the function $T_G$ between time 0 and time $t$ (Persée cannot predict where the Gorgon will be in the future). In particular the starting point of Persée $\mathcal{S}(T_G)(0) = T_P(0)$ depends only on the starting point of the Gorgon $T_G(0)$ (Persée chooses his starting point as a function of that of the Gorgon).
> 
> A strategy $\mathcal{S}$ is $winning$ for Persée if for every trajectory $T_G$ at speed at most $v_0$, at every instant $t \ge 0$, the Gorgon does not see Persée: the segment between $T_G(t)$ and $T_P(t) = \mathcal{S}(T_G)(t)$ intersects the obstacle.
> 
> A real $v$ is said to be $admissible$ with an obstacle $\mathcal{O}$ if there exists a winning strategy for Persée when $v_0 = v$.
> 
> 6. Redo the preceding questions with these new rules.
> 
> 7. Propose and study other directions of research.

![[src_tfjm_2022__Q08.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]], [[topic_logica|Logica]]
**Metodo:** [[method_coordinate|Coordinate]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1C7JOrKkoZ1206MAEq0GAwv-ifvn_yjCd/view)


<span class="qlang-split" data-lang="it"></span>


*Perseo e il Gorgone: una ricerca passo dopo passo in cui ciascuno si muove al massimo d_0 per passo e il Gorgone pietrifica Perseo se il segmento tra loro evita l'ostacolo O; determinare le distanze ammissibili d per vari ostacoli (linea, punto, segmento, disco, poligono), caratterizzare possibili set ammissibili e trattare varianti di strategia a velocità continua.*

> Perseo e il Gorgone (Persée et la Gorgone).
> 
> Persée si avventura nella caverna del Gorgon, e cerca di sfuggire al suo fatale sguardo petrificante.
> 
> La caverna del Gorgon è una regione piana in cui Persée vuole mettere un ostacolo $\mathcal{O}$, che è un insieme di punti su cui Persée e il Gorgon non possono fermarsi, ma che sono in grado di saltare. Persée e il Gorgon sanno in ogni istante dove si trova l'altro, ma lo sguardo del Gorgon raggiunge Persée se il segmento tra i due non contiene alcun punto dell'ostacolo. In questo caso Persée è petrificata.
> 
> Lasciate che $d_0$ sia reale. Il Gorgone deve scegliere il suo punto di partenza fuori dall'ostacolo. Persée sceglie quindi il suo punto di partenza come funzione di quella del Gorgone. Poi il Gorgone inizia cercando di toccare Persée con uno sguardo. Se questo riesce, lo pietrifica. Altrimenti sceglie un punto che non sia nell'ostacolo e che sia a una distanza massima $d_0$ da quello in cui si trovava. Persée, che sa dove sta andando il Gorgon, sceglie un punto a distanza massima $d_0$ dal punto in cui si trovava, se vuole. Quando i due sono arrivati al loro nuovo punto, il Gorgon prova di nuovo a toccare Persée con uno sguardo, e così via. Il vero $d$ è detto di essere $admissible$ per Persée con $\mathcal{O}$ se, con questo ostacolo, Persée ha una strategia che gli consente di non essere mai petrificato, qualunque cosa faccia il Gorgone, quando $d_0 = d$.
> 
> La figura 9 illustra un esempio di inseguimento tra Persée e Gorgon, nel caso in cui l'ostacolo è un triangolo completo e $d_0 = 2$. I punti successivi in cui si trova la Persée sono i punti $P_0, P_1, P_2, P_3$ e i punti successivi in cui si trova il Gorgon sono i punti $G_0, G_1, G_2, G_3$. Dopo tre passi, lo sguardo del Gorgon tocca finalmente Persée: quest'ultima è petrificata.
> 
> 1. Quali sono le realtà ammissibili se l'ostacolo è una linea? Se è un punto? Se si tratta di un segmento di lunghezza $l$?
> 
> 2. L'ostacolo è un disco aperto di raggio $r > 0$. Quali sono le realtà ammissibili per questo ostacolo come funzione di $r$? Si può iniziare con il caso $r = 1$.
> 
> 3. L'ostacolo è un poligono completo. Quali sono le realtà ammissibili di questo ostacolo? Si può iniziare studiando particolari poligoni.
> 
> 4. Il valore $A_\mathcal{O}$ deve essere l'insieme di valori reali ammissibili per un ostacolo $\mathcal{O}$. Quali sono gli insiemi che possono essere scritti $A_\mathcal{O}$ per qualche ostacolo $\mathcal{O}$?
> 
> 5. Ora, il Gorgon deve spostare una distanza esattamente $d_0$ e Persée deve spostare una distanza esattamente 1 ad ogni passo, cioè per tutti $i$, $G_i G_{i+1} = d_0$ e $P_i P_{i+1} = 1$. Riprendi le domande precedenti in questo contesto.
> 
> Ora, il Gorgon si muove permanentemente a velocità massima $v_0$ in direzione di Persée, e Persée si muove permanentemente a velocità massima 1 per evitarla. Per $v \in \mathbb{R}_+^*$, un $trajectory$ a velocità massima $v$ è un'applicazione $T$ da $\mathbb{R}_+$ nel piano in modo tale che: - per $t \in \mathbb{R}_+$, $T(t)$ non sia nell'ostacolo; - per tutti $t_1, t_2 \in \mathbb{R}_+$, la distanza tra $T(t_1)$ e $T(t_2)$ è al massimo $v \times |t_1 - t_2|$.
> 
> Una $strategy$ per Persée è un'applicazione $\mathcal{S}$ che associa a una traiettoria $T_G$ a velocità massima $v_0$ una traiettoria $\mathcal{S}(T_G) = T_P$ a velocità massima 1 in modo tale che per tutte le $t \in \mathbb{R}_+$, il valore $\mathcal{S}(T_G)(t) = T_P(t)$ dipenda solo dai valori della funzione $T_G$ tra il tempo 0 e il tempo $t$ (Persée non può prevedere dove si trova il Gorgon in futuro). In particolare, il punto di partenza di Persée $\mathcal{S}(T_G)(0) = T_P(0)$ dipende solo dal punto di partenza del Gorgon $T_G(0)$ (Persée sceglie il suo punto di partenza come funzione di quello del Gorgon).
> 
> Una strategia $\mathcal{S}$ è $winning$ per Persée se per ogni traiettoria $T_G$ a velocità massima $v_0$, in ogni istante $t \ge 0$, il Gorgon non vede Persée: il segmento tra $T_G(t)$ e $T_P(t) = \mathcal{S}(T_G)(t)$ incrocia l'ostacolo.
> 
> Un vero $v$ è detto $admissible$ con un ostacolo $\mathcal{O}$ se esiste una strategia vincente per Persée quando $v_0 = v$.
> 
> 6. Riprendi le domande precedenti con queste nuove regole.
> 
> 7. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2022__Q08.png]]

[[src_tfjm_2022__Q08]]
