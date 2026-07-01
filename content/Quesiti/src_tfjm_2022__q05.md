---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022 — Quesito 5
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2022__Q05
parent: src_tfjm_2022
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2022
family: tfjm
year: '2022'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '5'
summary: >-
  Microscopic tinkering: which line configurations Malo can reach from another
  using three operations (reflect a line across another, scale the whole picture
  by lambda, translate by a vector); study square and triangular grid
  configurations and interchangeability.
qa_score: '3'
topics:
  - topic_geometria_analitica
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_coordinate
  - method_simmetria
  - method_invarianti
skills:
  - skill_ragionamento_geometrico
  - skill_astrazione
  - skill_manipolazione_algebrica
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2022
  - livello/TFJM²
  - topic/geometria_analitica
  - topic/geometria_piana
  - topic/combinatoria
  - gara/squadre
---
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
