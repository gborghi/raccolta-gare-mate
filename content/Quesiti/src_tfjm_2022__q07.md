---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022 — Quesito 7
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2022__Q07
parent: src_tfjm_2022
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022
family: tfjm
year: '2022'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '7'
summary: >-
  Dog walk: n dogs each move one unit per second toward the next dog
  (cyclically); Boule on a leash of length L must avoid breaking leashes whether
  he stays put or moves; study triangle case, universal leash lengths, and
  variants where a dog chases a cat on an N-gon or a line.
qa_score: '3'
topics:
  - topic_geometria_piana
  - topic_geometria_analitica
methods:
  - method_ricorsione
  - method_coordinate
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
  - skill_modellizzazione
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2022
  - livello/TFJM²
  - topic/geometria_piana
  - topic/geometria_analitica
  - gara/squadre
---
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
> Boule possiede cani < MSK0/>. Per tutti i $1 \le i \le n$, il cane del numero $i$ segue il cane del numero $i + 1$ (si considera che il numero di cane $n + 1$ sia il numero di cane 1). I cani si muovono nel modo seguente: ogni secondo, per $1 \le i \le n$, il cane $i$ si muove una lunghezza 1 nella direzione del cane $i + 1$. Più precisamente, per tutti i $t \in \mathbb{N}$, indicando $C_i(t)$ la posizione del cane $i$ alla fine di $t$ secondi:  se $C_i(t) \ne C_{i+1}(t)$, allora $C_i(t+1)$ è il punto unico in modo che i vettori $\overrightarrow{C_i(t)C_i(t+1)}$ e $\overrightarrow{C_i(t)C_{i+1}(t)}$ abbiano la stessa direzione e senso, e $C_i(t)C_i(t+1) = 1$;  se $C_i(t) = C_{i+1}(t)$, allora $C_i(t+1) = C_i(t)$, in altre parole il cane $i$-th non si muove.
> 
> I cani si muovono tutti allo stesso tempo ogni secondo. La figura 8 illustra un esempio con $n = 3$.
> 
> Boule ha attaccato un guinzaglio di < MSK0/> al collo di ciascuno dei suoi cani. La guinzaglia si rompe se a un tempo < MSK1/> la distanza tra Boule e uno dei suoi cani è strettamente superiore a < MSK2/>.
> 
> 1. Boule è di umore pigro: sceglie un punto all'inizio della passeggiata in funzione delle posizioni iniziali dei cani e non si muove più. a) Supponiamo < MSK0/> e che i tre cani siano posizionati inizialmente alle vertici di un triangolo equilaterale laterale < MSK1/>. Esiste una lunghezza < MSK2/> tale che Boule possa assicurarsi di non rompere la guinzaglia? In tal caso, quale è la lunghezza $L$ più piccola che lo consente, come funzione di $c$? b) Supponiamo ora che $n$ sia arbitrario. E' vero che, qualunque sia la configurazione iniziale, Boule può sempre prevedere una lunghezza di guinzaglio sufficiente? Si può iniziare studiando i casi < MSK6/>.
> 
> 2. D'ora in poi Boule decide di muoversi in modo da evitare la rottura dei guinzetti: in ogni istante $t$ può mettersi al punto di sua scelta (corre molto veloce quindi non ha limiti a causa della sua velocità). a) Per $n = 3$ con posizione iniziale arbitraria, è vero che Boule può prevedere una lunghezza di guinzaglio sufficiente affinché la guinzaglia non si rompa mentre si muove con i suoi cani? b) Studiare il caso di cani < MSK2/> in posizione iniziale arbitraria.
> 
> Si dice che la lunghezza < MSK0/> sia < MSK1/> per i cani < MSK2/> se, qualunque sia la posizione iniziale dei cani, esiste un tempo < MSK3/> a partire dal quale Boule, che si muove, può sostituire le sue guinzaglie con guinzaglie di lunghezza < MSK4/> senza che nessuna di queste guinzaglie si rompa più.
> 
> 3. Per quale < MSK0/> esiste una lunghezza universale per i cani < MSK1/>? Per tale $n$, quale è la lunghezza universale più piccola? Si può iniziare con il trattamento dei casi < MSK3/>.
> 
> Mylène, vicina di Boule, possiede un gatto, che si trova al punto $M(t)$ al momento $t$. Si suppone che da ora in poi il numero di cane $n$ non segua più il numero di cane 1 ma il gatto, cioè che ogni secondo fa un passo di lunghezza 1 nella direzione del gatto. Le regole di movimento degli altri cani rimangono invariate.
> 
> 4. Il gatto di Mylène si muove sulle vertici di un normale < MSK0/>-gon del lato 1. Ogni istante passa da un vertice al vertice successivo (nel senso diretto). a) Se Boule ha un solo cane e il cane parte al centro del $N$-gon, quale lunghezza di guinzaglio deve prevedere Boule se non si muove? b) La stessa domanda per i cani < MSK2/> che iniziano tutti al centro.
> 
> 5. Questa volta il gatto si muove in linea retta, facendo un passo di lunghezza 1 nella stessa direzione ogni istante. Che lunghezza di guinzaglio deve prevedere Boule se può muoversi, in funzione della configurazione iniziale?
> 
> 6. Proporre e studiare altre vie di ricerca.

![[src_tfjm_2022__Q07.png]]

[[src_tfjm_2022__Q07]]
