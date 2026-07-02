---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025 — Quesito 6
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2025__Q06
parent: src_tfjm_2025
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025
family: tfjm
year: '2025'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '6'
summary: >-
  Optimizing bus stop spacing on a line where bus speed decreases with passenger
  count V_k = V_0/(1+ln(k+1)); minimize bunching and travel time with
  holding/skip-stop strategies.
qa_score: '2'
topics:
  - topic_algebra
  - topic_combinatoria
  - topic_probabilita
methods:
  - method_ricorsione
  - method_disuguaglianze
  - method_casework
skills:
  - skill_modellizzazione
  - skill_stima
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2025
  - livello/TFJM²
  - topic/algebra
  - topic/combinatoria
  - topic/probabilita
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Optimizing bus stop spacing on a line where bus speed decreases with passenger count V_k = V_0/(1+ln(k+1)); minimize bunching and travel time with holding/skip-stop strategies.*

> Problem 6 - The nightmare of the 20-25 line.
> 
> In a far country, traffic conditions are considerably degraded on bus line 20-25, which links an important railway gateway to the university campus, to the great displeasure of the students. In particular one witnesses spectacular scenes where a bus is so crowded that it slows down and stops, only to be caught up by the bus following it, sometimes with three consecutive buses queuing one behind another. Faced with this problem, the transport company TRAIP has tasked Antoine with carrying out an efficiency analysis and proposing improvements. The situation being rather complex, Antoine decides to work on a simplified model. He considers line 20-25 as a straight line, with the depot located at $0$, then a stop at each integer $n \ge 1$ (the depot is thus not considered a stop). After some observations, it appears to him that the buses move at an initial average speed $V_0$, but that their average speed decreases as they load passengers. Antoine observes that the average speed of a bus containing $k$ passengers (the driver does not count as a passenger) is given by the formula
> 
> $(1) \quad V_k = \frac{V_0}{1 + \ln(k + 1)}.$
> 
> (Antoine considers that the buses move constantly at their average speed, and the time spent at stops is included in this average speed. In other words, he acts as if the buses moved constantly at speed $V_k$, and when they reach a stop they board all the passengers there and change speed instantaneously.) We suppose passengers never get off, except when arriving at a terminus.
> 
> The buses cannot overtake; when a bus catches up to a predecessor, it follows it at the same speed (even if this means traveling slower than its average speed), and on arriving at a stop, the passengers are distributed equitably between the buses (if there were to be more buses than passengers, we suppose we fill first the bus that arrived first). Moreover, we suppose the buses have infinite transport capacity.
> 
> 1. First, Antoine is interested in what happens at rush hour. He considers that there are $N$ passengers at each stop. Two buses leave the depot, the first at time $t = 0$, the second starting when the first reaches the first stop. Do they end up catching each other?
> 
> 2. Antoine wonders what happens when the day begins and the buses leave the depot empty. a) Do the two buses end up catching each other? b) What happens in the case where the buses start in a block, the first at time $t = 0$, each following bus starting when the one that left before it reached the first stop?
> 
> 3. Antoine, being well aware that the preceding model does not account for small traffic hazards or unexpected passenger surges, now wishes to include them. He considers the following variants. a) At time $t = T$, the lead bus is immobilized for a time interval of $\frac{1}{10}$ due to a traffic jam, before resuming normal speed. b) At time $t = T$, a quantity $q$ of passengers arrives at the stop located at $n = 10$, in addition to the normal filling. Always in the case of the two buses separated by one unit of time, evaluate the impact of the two perturbations above on the rest of their journey. (Discuss the results as a function of $T$ and $q$.)
> 
> 4. Antoine now wishes to design a strategy to hold the buses at the stops at rush hour, to prevent them from catching each other. We now suppose that, when they arrive at the stops (and only then), the buses can stop and wait an arbitrary time before resuming their normal speed. A strategy is a function which, knowing the position of all the buses, the number of passengers they carry, and the number of passengers at each stop, tells each bus the time to wait when arriving at a stop. To add more realism, Antoine considers that the line ends at stop $n = 20$, considered as the depot at the end of the line; there are no passengers at this stop. When a bus stops at $n = 20$, it drops all its passengers and leaves in the other direction, picking up all the passengers who wish. We suppose the stops keep filling at a constant rate of $\rho$ passengers per unit time. Suppose two buses circulate on the line, both leaving the depot at $n = 0$, the first at time $t = 0$, the second when the predecessor reaches the first stop. a) Does there exist a strategy to hold the buses at the stops so as to prevent them from catching each other? b) What happens in the case of $m$ buses, each bus after the first leaving when the predecessor reached the first stop?
> 
> 5. Antoine wishes to explore one last idea to improve passenger travel time. We place ourselves again in the frame of question 2, with two buses circulating, where the stops are initially empty and fill progressively. Suppose there is a countably infinite set of stops indexed by the natural numbers. Antoine supposes the first bus serves only the odd stops, and the second only the even stops. a) Does this strategy present a gain in terms of passenger travel time? Quantify it as precisely as possible. b) To push his idea further, Antoine now supposes a bus starts at each integer time $t$, and that the buses serve the stops in steps of $k$. More precisely, the first bus serves the multiples of $k$, the next serves the multiples of $k$ plus $1$, and so on. After $k$ buses, the scheme repeats: the $(k+1)$-th bus serves the multiples of $k$, the $(k+2)$-th serves the multiples of $k$ plus $1$, and so on. Quantify the eventual gain in passenger travel time, and examine what happens as $k \to +\infty$. c) Antoine decides to push his idea even further, adding more stops to spread the passengers over more stops. He supposes there is now a stop at $\frac{n}{k}$ for each integer $n \ge 1$, and that travelers arrive at the stops at a rate of $\frac{\rho}{k}$ passengers per unit time. We always consider a bus leaves the depot at each unit of time. We are particularly interested in what happens in the limit as $k \to +\infty$.
> 
> 6. Propose and study other lines of research.

![[src_tfjm_2025__Q06.png]]

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]], [[topic_probabilita|Probabilità]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_disuguaglianze|Disuguaglianze]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_manipolazione_algebrica|Manipolazione algebrica]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Optimizzare l'intervallo tra le fermate degli autobus su una linea in cui la velocità dell'autobus diminuisce con il numero di passeggeri V_k = V_0/(1+ln(k+1)); ridurre al minimo il tempo di aggregazione e di viaggio con le strategie di tenuta/scappa-stop.*

> Problema 6 - Il incubo della linea 20-25.
> 
> In un paese lontano, le condizioni del traffico sono notevolmente degradate sulla linea di autobus 20-25, che collega un importante cancello ferroviario al campus universitario, a grande disgusto degli studenti. In particolare si assistono a spettacolari scene in cui un autobus è così affollato che rallenta e si ferma, solo per essere catturato dal bus che lo segue, a volte con tre autobus consecutivi in coda uno dietro l'altro. Di fronte a questo problema, la società di trasporto TRAIP ha incaricato Antoine di effettuare un'analisi dell'efficienza e di proporre miglioramenti. Essendo la situazione piuttosto complessa, Antoine decide di lavorare su un modello semplificato. Egli considera la linea 20-25 come una linea retta, con il deposito situato a $0$, quindi un stop a ogni numero intero $n \ge 1$ (il deposito non è quindi considerato un stop). Dopo alcune osservazioni, gli appare che gli autobus si muovono a una velocità media iniziale $V_0$, ma che la loro velocità media diminuisce con il carico dei passeggeri. Antoine osserva che la velocità media di un autobus contenente $k$ passeggeri (il conducente non conta come passeggero) è data dalla formula
> 
> $(1) \quad V_k = \frac{V_0}{1 + \ln(k + 1)}.$
> 
> (Antoine ritiene che gli autobus si muovano costantemente alla loro velocità media, e il tempo trascorso nelle fermate è incluso in questa velocità media. In altre parole, si comporta come se gli autobus si muovessero costantemente a velocità $V_k$, e quando raggiungono una fermata imbarcano tutti i passeggeri lì e cambiano velocità istantaneamente.)
> 
> Gli autobus non possono superare; quando un autobus raggiunge un predecessore, lo segue alla stessa velocità (anche se questo significa viaggiare più lentamente della sua velocità media), e all'arrivo alla fermata, i passeggeri sono distribuiti in modo equo tra gli autobus (se ci fossero più autobus dei passeggeri, supponiamo di riempire prima l'autobus che è arrivato prima). Inoltre, supponiamo che gli autobus abbiano una capacità di trasporto infinita.
> 
> 1. Innanzitutto, Antoine si interessa di quello che accade nelle ore di punta. Egli ritiene che ci siano $N$ passeggeri in ogni fermata. Due autobus usciranno dal deposito, il primo all'orario $t = 0$, il secondo partendo quando il primo raggiungerà la prima fermata. Si incastrano a vicenda?
> 
> 2. Antoine si chiede cosa succede quando inizia la giornata e gli autobus lasciano il deposito vuoto. a) I due autobus si raggiungono? b) Che cosa succede nel caso in cui gli autobus partono in un blocco, il primo al tempo $t = 0$, ogni autobus successivo partendo quando quello che è partito prima di raggiungere la prima fermata?
> 
> 3. Antoine, ben consapevole del fatto che il modello precedente non tiene conto di piccoli pericoli stradali o di un'inattesa ondata di passeggeri, desidera ora includerli. Egli considera le seguenti varianti. a) All'ora $t = T$, l'autobus principale è immobilizzato per un intervallo di tempo $\frac{1}{10}$ a causa di un ingorghi, prima di riprendere la velocità normale. b) Al momento $t = T$, una quantità $q$ di passeggeri arriva alla fermata situata a $n = 10$, oltre al normale riempimento. Sempre nel caso dei due autobus separati da un'unità di tempo, valutare l'impatto delle due perturbazioni di cui sopra sul resto del loro viaggio. (Discutere i risultati come funzione di $T$ e $q$.)
> 
> 4. Antoine ora desidera progettare una strategia per trattenere gli autobus alle fermate all'ora di punta, per evitare che si raggiungano. Ora supponiamo che, quando arrivano alle fermate (e solo allora), gli autobus possano fermarsi e aspettare un tempo arbitrario prima di riprendere la loro velocità normale. Una strategia è una funzione che, conoscendo la posizione di tutti gli autobus, il numero di passeggeri che trasportano e il numero di passeggeri a ogni fermata, indica a ogni autobus l'ora di attesa quando arriva alla fermata. Per aggiungere più realismo, Antoine ritiene che la linea finisca alla fermata $n = 20$, considerata come il deposito alla fine della linea; non ci sono passeggeri a questa fermata. Quando un autobus si ferma a $n = 20$, scende tutti i suoi passeggeri e parte nell'altra direzione, raccogliendo tutti i passeggeri che lo desiderano. Supponiamo che le fermate continuino a riempire a un ritmo costante di $\rho$ passeggeri per unità di tempo. Supponiamo che due autobus circolino sulla linea, entrambi lasciano il deposito a $n = 0$, il primo a tempo $t = 0$, il secondo quando il predecessore raggiunge la prima fermata. a) Esiste una strategia per trattenere gli autobus alle fermate in modo da evitare che si attraversino? b) Che succede nel caso degli autobus $m$, ogni autobus dopo la prima partenza quando il predecessore ha raggiunto la prima fermata?
> 
> 5. Antoine vuole esplorare un'ultima idea per migliorare il tempo di viaggio dei passeggeri. Ci riportiamo nel quadro della domanda 2, con due autobus in circolazione, dove le fermate sono inizialmente vuote e si riempiono progressivamente. Supponiamo che ci sia un insieme contabile infinito di fermate indicizzate dai numeri naturali. Antoine suppone che il primo autobus serva solo le fermate rare, e il secondo solo le fermate pari. a) Questa strategia presenta un guadagno in termini di tempo di viaggio dei passeggeri? Quantificalo il più precisamente possibile. b) Per far proseguire la sua idea, Antoine suppone ora che un autobus partisca a ogni orario intero $t$, e che gli autobus servano le fermate in passi $k$. Più precisamente, il primo autobus serve i multipli di $k$, il successivo serve i multipli di $k$ più $1$, e così via. Dopo gli autobus $k$, lo schema si ripete: il bus $(k+1)$-th serve i multipli di $k$, il $(k+2)$-th serve i multipli di $k$ più $1$, e così via. Quantificare l'eventuale guadagno nel tempo di viaggio dei passeggeri e esaminare ciò che accade come $k \to +\infty$. c) Antoine decide di spingere ancora di più la sua idea, aggiungendo più fermate per diffondere i passeggeri su più fermate. Egli suppone che ci sia ora una fermata a $\frac{n}{k}$ per ogni numero intero $n \ge 1$, e che i viaggiatori arrivano alle fermate a un tasso di $\frac{\rho}{k}$ passeggeri per unità di tempo. Consideriamo sempre che un autobus lascia il deposito a ogni unità di tempo. Siamo particolarmente interessati a ciò che accade nel limite di $k \to +\infty$.
> 
> 6. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2025__Q06.png]]

[[src_tfjm_2025__Q06]]
