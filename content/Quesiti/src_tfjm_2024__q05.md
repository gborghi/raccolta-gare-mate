---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024 — Quesito 5
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2024__Q05
parent: src_tfjm_2024
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2024
family: tfjm
year: '2024'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '5'
summary: >-
  Free electron: a charged particle moves along circular arcs of radius 1
  (counterclockwise), reversing direction when a button is pressed (or
  reflecting off mirrors); study guiding it between points, avoiding a circle,
  through n points, gathering k electrons, and admirable polygons.
qa_score: '3'
topics:
  - topic_geometria_piana
  - topic_geometria_analitica
methods:
  - method_simmetria
  - method_coordinate
  - method_casework
skills:
  - skill_ragionamento_geometrico
  - skill_modellizzazione
  - skill_astrazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2024
  - livello/TFJM²
  - topic/geometria_piana
  - topic/geometria_analitica
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Free electron: a charged particle moves along circular arcs of radius 1 (counterclockwise), reversing direction when a button is pressed (or reflecting off mirrors); study guiding it between points, avoiding a circle, through n points, gathering k electrons, and admirable polygons.*

> Nicolas works in a physics laboratory. He has an electron gun immersed in a constant uniform magnetic field. The laws of classical physics then tell us that the electron moves at constant speed describing a circle in the trigonometric (counterclockwise) sense, which one will suppose of radius $1$.
> 
> Nicolas also has a button that makes the electron turn around: at the moment he presses it, the speed of the electron stays the same but in the opposite direction. He thus tries, with this single command, to guide the electron.
> 
> Figure $7$ represents a possible trajectory of the electron: the blue rectangle is the electron gun, the blue arrow is the initial direction, the orange points are the turnarounds proposed by Nicolas. The dotted lines show the prolongation of two circle arcs described by the electron.
> 
> $\textbf{1.}$ The electron gun is situated at a point $A$ of the plane. Nicolas can choose his initial direction. He wants to bring the electron all the way to another point $B$.
>   a) Can Nicolas always guide the electron from point $A$ to point $B$? If so, how many times at minimum must he press the button, as a function of the distance separating $A$ and $B$?
>   b) What is the minimal distance traveled by the electron to go from $A$ to $B$?
> 
> Nicolas draws a circle of radius $r > 0$ and places the electron gun on the edge of the circle, pointed toward its center. He wants to ensure that the electron never touches the circle after the initial instant.
> 
> Figure $8$ represents an example of a trajectory in a circle of radius $r = 2$. It never touches the circle; after two turnarounds, it turns on itself indefinitely.
> 
> $\textbf{2.}$ For which values of the radius $r$ can Nicolas press the button a finite number of times and ensure that the electron never touches the circle? In that case, how many times at minimum must Nicolas press the button to ensure the electron never touches the circle, as a function of $r$?
> 
> $\textbf{3.}$ Nicolas places $n$ points strictly inside a disk of radius $1$. He can freely choose the placement and direction of the gun. The electron may enter and exit the disk; the disk has no influence on its trajectory. Estimate the smallest integer $N$ such that, whatever the positions of the $n$ points, Nicolas can ensure the electron passes through these $n$ points by pressing the button at most $N$ times. What happens with a disk of arbitrary radius $R > 0$?
> 
> $\textbf{4.}$ Nicolas has, in this question only, $k$ electron guns placed arbitrarily in the plane, and $k$ buttons allowing to control each electron independently. Can he always arrange that, after a certain time, the $k$ electrons are at the same place at the same moment?
> 
> Now Nicolas no longer has a button to make the electron turn around but mirrors off which the electron rebounds, conforming to the laws of classical physics: the angles of incidence and reflection are equal.
> 
> He arranges them so as to form a convex polygon, that is, one whose interior angles all have measure strictly between $0$ and $\pi$. One supposes the electron is launched so that it never passes through a vertex of the polygon.
> 
> A convex polygon is said $\textbf{admirable}$ if Nicolas can make the electron rebound off the sides of the polygon in any order. In other words, for any numbering of the sides of the polygon with the integers from $1$ to $M$, it is possible to place the electron gun so that the electron rebounds off side $1$ then $2$ and so on up to $M$.
> 
> Figure $9$ represents a quadrilateral (in orange) whose sides have been numbered and a possible trajectory of an electron respecting this order: it rebounds successively off sides $1$ then $2$ then $3$ then $4$. For this polygon to be admirable, one would need to be able to do the same thing whatever numbers are attributed to the sides.
> 
> $\textbf{5.}$ For which $M$ is the regular polygon with $M$ sides whose vertices lie on a circle of radius $1$ admirable?
> 
> $\textbf{6.}$ For which $M \ge 3$ can Nicolas construct an admirable polygon with $M$ sides?
> 
> $\textbf{7.}$ Propose and study other avenues of research.

![[src_tfjm_2024__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_coordinate|Coordinate]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]], [[skill_astrazione|Astrazione]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1o8RK8czKsvWEeJStFxHt_FNsFu2sYqMy/view)


<span class="qlang-split" data-lang="it"></span>


*L'elettrone libero: una particella carica si muove lungo archi circolari di raggio 1 (in senso antiorario), invertendo la direzione quando viene premuto un pulsante (o riflettendo gli specchi); studiare la guida tra i punti, evitando un cerchio, attraverso n punti, raccogliendo k elettroni e poligoni ammirevoli.*

> Nicolas lavora in un laboratorio di fisica. Ha una pistola elettronica immersa in un campo magnetico uniforme costante. Le leggi della fisica classica ci dicono poi che l'elettrone si muove a velocità costante descrivendo un cerchio nel senso trigonometrico (in senso controorario), che si suppone di raggio $1$.
> 
> Nicolas ha anche un pulsante che fa girare l'elettrone: al momento in cui lo premere, la velocità dell'elettrone rimane la stessa ma nella direzione opposta. In questo modo cerca, con questo singolo comando, di guidare l'elettrone.
> 
> La figura $7$ rappresenta una possibile traiettoria dell'elettrone: il rettangolo blu è la pistola elettronica, la freccia blu è la direzione iniziale, i punti arancioni sono le rotazioni proposte da Nicolas. Le linee puntate mostrano l'allungamento di due archi circolari descritti dall'elettrone.
> 
> $\textbf{1.}$ La pistola elettronica è situata in un punto $A$ del piano. Nicolas puo' scegliere la sua direzione iniziale. Vuole portare l'elettrone fino ad un altro punto $B$. a) Nicolas può sempre guidare l'elettrone dal punto $A$ al punto $B$? In tal caso, quante volte almeno deve premere il pulsante, in funzione della distanza tra $A$ e $B$? b) Qual è la distanza minima percorsa dall'elettrone per passare da $A$ a $B$?
> 
> Nicolas disegna un cerchio di raggio $r > 0$ e pone la pistola elettronica sul bordo del cerchio, puntata verso il suo centro. Vuole assicurarsi che l'elettrone non tocchi mai il cerchio dopo l'istante iniziale.
> 
> La figura $8$ rappresenta un esempio di traiettoria in un cerchio di raggio $r = 2$. Non tocca mai il cerchio; dopo due giri, si gira su se stesso indefinitamente.
> 
> Per quali valori del raggio può Nicolas premere il pulsante un numero finito di volte e garantire che l'elettrone non tocchi mai il cerchio? In tal caso, quante volte almeno Nicolas deve premere il pulsante per assicurarsi che l'elettrone non tocchi mai il cerchio, come funzione di $r$?
> 
> $\textbf{3.}$ Nicolas colloca i punti $n$ rigorosamente all'interno di un disco di raggio $1$. Può scegliere liberamente il posizionamento e la direzione della pistola. L'elettrone può entrare e uscire dal disco; il disco non influenza la sua traiettoria. Valutare il numero intero più piccolo $N$ in modo che, qualunque siano le posizioni dei punti $n$, Nicolas possa garantire che l'elettrone passi attraverso questi punti $n$ premendo il pulsante al massimo $N$ volte. Cosa succede con un disco di raggio arbitrario $R > 0$?
> 
> Nicolas ha, solo in questa domanda, le pistole elettroniche $k$ posizionate arbitrariamente nel piano e i pulsanti $k$ che consentono di controllare ogni elettrone in modo indipendente. Può sempre organizzare che, dopo un certo tempo, gli elettroni $k$ siano nello stesso posto nello stesso momento?
> 
> Ora Nicolas non ha più un pulsante per far girare l'elettrone, ma specchi da cui l'elettrone rimbalza, conforme alle leggi della fisica classica: gli angoli di incidenza e di riflessione sono uguali.
> 
> Li organizza in modo da formare un poligono convexo, cioè uno i cui angoli interni hanno tutti una misura rigida tra $0$ e $\pi$. Si suppone che l'elettrone sia lanciato in modo che non attraversasse mai un vertice del poligono.
> 
> Un poligono convex viene detto $\textbf{admirable}$ se Nicolas può far rimbalzare l'elettrone dai lati del poligono in qualsiasi ordine. In altre parole, per qualsiasi numerazione dei lati del poligono con i numeri interi da $1$ a $M$, è possibile posizionare la pistola elettronica in modo che l'elettrone rimbalzi dal lato $1$, poi $2$ e così via fino a $M$.
> 
> La figura $9$ rappresenta un quadrilaterale (in arancione) i cui lati sono stati numerati e una possibile traiettoria di un elettrone rispetto a questo ordine: rimbalza successivamente fuori dai lati $1$, poi $2$, poi $3$ e poi $4$. Per rendere questo poligono ammirevole, si dovrebbe essere in grado di fare la stessa cosa qualunque numero sia attribuito ai lati.
> 
> Per quale $M$ è ammirevole il poligono regolare con lati $M$ le cui vertici si trovano su un cerchio di raggio $1$?
> 
> Per quale $M \ge 3$ Nicolas può costruire un polygono ammirevole con i lati $M$?
> 
> < MSK0/> Proporre e studiare altre vie di ricerca.

![[src_tfjm_2024__Q05.png]]

[[src_tfjm_2024__Q05]]
