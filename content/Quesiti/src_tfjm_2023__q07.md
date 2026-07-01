---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023 — Quesito 7
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2023__Q07
parent: src_tfjm_2023
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023
family: tfjm
year: '2023'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '7'
summary: >-
  Laser reflecting inside an equilateral (then right-isosceles, then general)
  triangle with mirrored sides and open vertices; counting rebounds n(t)
qa_score: '2'
topics:
  - topic_geometria_piana
  - topic_trigonometria
methods:
  - method_simmetria
  - method_trigonometria
  - method_casework
skills:
  - skill_ragionamento_geometrico
  - skill_astrazione
  - skill_riconoscimento_pattern
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2023
  - livello/TFJM²
  - topic/geometria_piana
  - topic/trigonometria
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Laser reflecting inside an equilateral (then right-isosceles, then general) triangle with mirrored sides and open vertices; counting rebounds n(t)*

> Mirrors and lasers (Miroirs et lasers). Clémence has an equilateral triangle $ABC$ arranged so that there are mirrors on the three sides and so that the laser can exit only through the vertices (which are infinitely small holes). She amuses herself firing a laser ray that, from a certain point, reflects off the sides of the triangle following the rules of classical mechanics: the angle the ray makes with the normal to the mirror equals the angle between the incoming ray and the outgoing ray (see Figure 8). If the ray hits a vertex it is imprisoned forever.\n\nFor a shot $t$ of the laser ray that Clémence fires, we denote by $n(t) \\in \\mathbb{N} \\cup \\{\\infty\\}$ the number of times the ray reflects off the mirrors before coming back out.\n\n1. Clémence tries to understand the set of values that $n(t)$ can take.\n   a) Which are the values $n(t)$ can take? One may study the smallest possible values of $n(t)$: can one have $n(t) = 1, 2, 3, 4$ or 5? Do there exist shots $t$ with $n(t) = \\infty$, i.e. the laser ray never leaves the triangle $ABC$?\n   b) Let $n$ be an integer. Find how many distinct shots $t$ verify $n(t) = n$.\n\n2. Suppose now there is no longer a shot that can pass through the vertices $B$ and $C$, in order to avoid the problems with rebounds. Redo question 1 in this framework.\n\n3. Clémence decides to fire two simultaneous distinct shots from the vertex $A$, assuming these two rays travel at the same constant speed of light. So the two rays exit at the same place at a certain instant $s > 0$ (that is, after having travelled the same distance). Does there necessarily exist an instant $s' >$ such that the rays exit again at the same place? Same question if the shots start from two different vertices $A$ and $B$.\n\n4. Is it possible for a laser ray starting from a point $A$ to pass through all points of the triangle (including the interior) except the points $B$ and $C$? In a new version of this question, suppose the laser ray is thick (épais), still starting from point $A$ but with an angular width $\\alpha > 0$; redo the previous question under this hypothesis.\n\n5. Redo questions 1, 2 and 3 in the case where $ABC$ is a right isosceles triangle (there are two cases to handle, either the segment $BC$ is the hypotenuse or it is not).\n\n6. Clémence now considers much more general triangles. She denotes by $n_{ABC}(t)$ the number of rebounds of a shot $t$ in an arbitrary triangle $ABC$ where only the vertex $A$ is open.\n   a) Which are the possible values for $n_{ABC}(t)$ when $ABC$ and $t$ are free?\n   b) Do there exist triangles for which $n_{ABC}(t)$ can only take the value $\\infty$ whatever the shot $t$? If so, characterize them as much as possible.\n   c) Let $\\mathcal{S}$ be the set of values that $n_{ABC}(t)$ can take in the preceding question. Does there exist a triangle $XYZ$ such that the values of $n_{XYZ}(t)$ describe exactly $\\mathcal{S}$ as $t$ runs over all possible shots?\n   d) Redo questions 1 and 2 for these triangles.\n\n7. Redo questions 1, 2, 3 and 6 in the case of the square and of the regular hexagon, then of arbitrary regular polygons.\n\n8. Propose and study other lines of research.

![[src_tfjm_2023__Q07.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]]
**Metodo:** [[method_simmetria|Simmetria]], [[method_trigonometria|Trigonometria]], [[method_casework|Casework]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Laser riflesso all'interno di un triangolo equilaterale (poi a destra, poi a fianco e a fianco) con lati specchiati e vertici aperti; conteggio dei rimbalzi n(t) *

> Specchi e laser (Specchi e laser). Clémence ha un triangolo equilaterale $ABC$ disposto in modo che ci siano specchi sui tre lati e in modo che il laser possa uscire solo attraverso i vertici (che sono buchi infinitamente piccoli). Si diverte a sparare un raggio laser che, da un certo punto, riflette dai lati del triangolo seguendo le regole della meccanica classica: l'angolo che il raggio fa con il normale allo specchio è uguale all'angolo tra il raggio in entrata e il raggio in uscita (vedi Figura 8). Se il raggio colpisce un vertice, viene imprigionato per sempre. Per un colpo $t$ del raggio laser che Clémence scatta, indichiamo con $n(t) \\in \\mathbb{N} \\cup \\{\\infty\\}$ il numero di volte che il raggio si riflette dagli specchi prima di tornare fuori. Clémence cerca di comprendere l'insieme dei valori che $n(t)$ può assumere.\n a) Quali sono i valori che $n(t)$ può assumere? Si possono studiare i valori più piccoli possibili di $n(t)$: si può avere $n(t) = 1, 2, 3, 4$ o 5? Esistono scatti < MSK7/> con < MSK8/>, cioè il raggio laser non lascia mai il triangolo $ABC$?\n b) Let $n$ essere un numero intero. Trova quanti scatti distinti $t$ verificano $n(t) = n$.\n\n2. Supponiamo ora che non ci sia più un colpo che possa passare attraverso i vertici $B$ e $C$, al fine di evitare i problemi con i rimbalzi. Riprendiamo la domanda 1 in questo quadro. Clémence decide di sparare due colpi simultanei distinte dal vertice $A$, supponendo che questi due raggi viaggiino alla stessa velocità costante della luce. Quindi i due raggi usciranno nello stesso luogo in un certo istante $s > 0$ (cioè dopo aver percorso la stessa distanza). C'è necessariamente un istante $s' >$ tale che i raggi uscino di nuovo nello stesso luogo? La stessa domanda se le riprese partono da due vertici diversi $A$ e $B$.\n\n4. È possibile che un raggio laser partendo da un punto $A$ passi attraverso tutti i punti del triangolo (compreso l'interno) tranne i punti $B$ e $C$? In una nuova versione di questa domanda, supponiamo che il raggio laser sia spessore (spessore), ancora partendo dal punto $A$ ma con una larghezza angolare $\\alpha > 0$; rifacciamo la domanda precedente in base a questa ipotesi.\n\n5. Redo le domande 1, 2 e 3 nel caso in cui $ABC$ è un triangolo a piega retta (ci sono due casi da gestire, o il segmento $BC$ è l'ipotenusa o non lo è).\n\n6. Clémence considera ora i triangoli molto più generali. Indica con $n_{ABC}(t)$ il numero di rimbalzi di un colpo $t$ in un triangolo arbitrario $ABC$ dove solo il vertice $A$ è aperto.\n a) Quali sono i valori possibili per $n_{ABC}(t)$ quando $ABC$ e $t$ sono liberi?\n b) Esistono triangoli per i quali $n_{ABC}(t)$ può prendere solo il valore $\\infty$ qualunque sia il colpo $t$? In tal caso, caratterizzare il più possibile.\n c) Let $\\mathcal{S}$ essere l'insieme di valori che $n_{ABC}(t)$ può prendere nella domanda precedente. Esiste un triangolo $XYZ$ tale che i valori di $n_{XYZ}(t)$ descrivono esattamente $\\mathcal{S}$ come $t$ corre su tutti i possibili scatti?\n d) Redo domande 1 e 2 per questi triangoli.\n\n7. Redo le domande 1, 2, 3 e 6 nel caso del quadrato e dell'esagono regolare, quindi di poligoni regolari arbitrari. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2023__Q07.png]]

[[src_tfjm_2023__Q07]]
