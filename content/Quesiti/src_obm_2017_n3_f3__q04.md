---
title: Olimpíada Brasileira de Matemática 2017 — Nível 3 — Fase 3 — Quesito 4
tipo: quesito
lang: en
quesito_id: quesito_src_obm_2017_n3_f3__Q04
parent: src_obm_2017_n3_f3
competition: Olimpíada Brasileira de Matemática 2017 — Nível 3 — Fase 3
family: obm
year: '2017'
level: OBM Nível 3
country: Brasile
modalita: individuale
nivel: '3'
fase: '3'
quesito: '4'
summary: >-
  Phone unlock pattern on a 3x3 grid: find smallest n so any n-subset of digits
  admits a valid path
qa_score: '5'
topics:
  - topic_combinatoria
  - topic_geometria_piana
methods:
  - method_casework
  - method_conteggio
  - method_estremalita
skills:
  - skill_casework_accurato
  - skill_conteggio_sistematico
  - skill_lettura_attenta
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/brasile
  - comp/obm
  - anno/2017
  - livello/OBM-Nível-3
  - nivel/3
  - fase/3
  - topic/combinatoria
  - topic/geometria_piana
  - gara/individuale
---
<div class="qlang-switch" data-default="en"></div>


*Phone unlock pattern on a 3x3 grid: find smallest n so any n-subset of digits admits a valid path*

> In Figures 1 and 2 below we see examples of unlocking a cell-phone screen with a password that is not typed but drawn with line segments. These segments form a polygonal line whose vertices lie on a grid. While drawing the pattern corresponding to the password, the finger must stay in contact with the screen the whole time. The whole polygonal line corresponds to a sequence of digits, and this sequence is in fact the password. The drawing of the polygonal lines obeys the following rules:
> 
> i. The drawing starts at one of the highlighted points, which correspond to the digits $1$ to $9$ (Figure 3).
> 
> ii. Each segment of the pattern must have, as one of its endpoints (the one where we finish drawing the segment), a point that has not yet been used.
> 
> iii. If a segment joins two points and contains a third point (its midpoint), then the digit corresponding to that third point is included in the password. This does not happen when that point/digit has already been used.
> 
> iv. Every password has at least four digits.
> 
> Thus, every polygonal line is associated with a sequence of four or more digits, which appear in the password in the same order in which they are visited. In Figure 1 above, for example, the password is $218369$, in the case where the first point visited was $2$. Note that the segment joining the points associated with the digits $3$ and $9$ includes the point associated with the digit $6$. If the first point visited were $9$, then the password would be $963812$. If the first point visited were $6$, then the password would be $693812$. Note that $6$ would be skipped, since it could not be repeated. On the other hand, the polygonal line of Figure 2 is associated with a single password.
> 
> Determine the smallest $n$ ($n \ge 4$) such that, given any subset of $n$ digits from $1$ to $9$, it is possible to elaborate a password that involves exactly those digits in some order.

![[src_obm_2017_n3_f3__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_lettura_attenta|Lettura attenta]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Bz0b8bmD4m-IMlHbvOjFwKD5v_CZNZuA/view)


<span class="qlang-split" data-lang="it"></span>


*Modello di sblocco del telefono su una griglia 3x3: trovare il più piccolo n in modo che qualsiasi n-sottoinsieme di cifre ammetta un percorso valido*

> Nelle figure 1 e 2 di seguito vediamo esempi di sblocco di uno schermo del cellulare con una password che non viene digitata ma disegnata con segmenti di linea. Questi segmenti formano una linea poligonale le cui vertici si trovano su una griglia. Durante il disegno del modello corrispondente alla password, il dito deve rimanere in contatto con lo schermo per tutto il tempo. L'intera linea poligonale corrisponde a una sequenza di cifre, e questa sequenza è in realtà la password. Il disegno delle linee poligonali è conforme alle seguenti regole:
> 
> i. Il disegno inizia ad uno dei punti evidenziati, che corrispondono alle cifre $1$ a $9$ (figura 3).
> 
> ii. Ogni segmento del modello deve avere, come uno dei suoi punti finali (quello in cui si finisce il segmento), un punto che non è ancora stato utilizzato.
> 
> iii. Se un segmento unisce due punti e contiene un terzo punto (il suo punto medio), allora la cifra corrispondente a tale terzo punto è inclusa nella password. Questo non avviene quando tale punto/cifre è già stato utilizzato.
> 
> iv. Ogni password ha almeno quattro cifre.
> 
> Pertanto, ogni linea poligonale è associata a una sequenza di quattro o più cifre, che appaiono nella password nello stesso ordine in cui vengono visitate. Nella figura 1 sopra, ad esempio, la password è $218369$, nel caso in cui il primo punto visitato è stato $2$. Si noti che il segmento che unisce i punti associati ai numeri $3$ e $9$ include il punto associato al numero $6$. Se il primo punto visitato fosse $9$, la password sarebbe $963812$. Se il primo punto visitato fosse $6$, la password sarebbe $693812$. Si noti che $6$ sarebbe saltato, poiché non poteva essere ripetuto. D'altra parte, la linea poligonale della figura 2 è associata a una singola password.
> 
> Determinare la minima $n$ ($n \ge 4$) in modo tale che, data qualsiasi sottoinsieme di cifre $n$ da $1$ a $9$, sia possibile elaborare una password che coinvolga esattamente quelle cifre in un certo ordine.

![[src_obm_2017_n3_f3__Q04.png]]

[[src_obm_2017_n3_f3__Q04]]
