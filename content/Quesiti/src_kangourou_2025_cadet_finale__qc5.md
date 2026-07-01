---
title: Kangourou 2025 Cadet finale — Quesito C5
tipo: quesito
lang: it
quesito_id: quesito_src_kangourou_2025_cadet_finale__QC5
parent: src_kangourou_2025_cadet_finale
competition: Kangourou 2025 Cadet finale
family: kangourou
year: '2025'
level: kangourou
country: Italia
modalita: individuale
quesito: C5
summary: Quante disposizioni cavalieri/furfanti su griglia 5x5
answer: '6'
topics:
  - topic_logica
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2025
  - livello/kangourou
  - topic/logica
  - topic/combinatoria
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Quante disposizioni cavalieri/furfanti su griglia 5x5*

![[src_kangourou_2025_cadet_finale__probC5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \draw (0,0) grid (5,5);
  \foreach \x in {0,1,2,3,4} {
    \node[blue, font=\itshape\bfseries] at (\x+0.5, 0.5) {F};
  }
  \foreach \x in {0,1,2,3,4} {
    \node[blue, font=\itshape\bfseries] at (\x+0.5, 4.5) {F};
  }
  \foreach \y in {1,2,3} {
    \node[blue, font=\itshape\bfseries] at (0.5, \y+0.5) {F};
  }
  \foreach \y in {1,2,3} {
    \node[blue, font=\itshape\bfseries] at (4.5, \y+0.5) {F};
  }
\end{tikzpicture}
\end{document}
```

> In un'isola ci sono solo Cavalieri e Furfanti: i Cavalieri sono persone che dicono sempre la verità, mentre i Furfanti mentono sempre, ed è noto a tutti nell'isola chi sono i Cavalieri e chi sono i Furfanti. Oggi 25 abitanti dell'isola sono in attesa nella sala di ricevimento del Re. Questa sala è un quadrato di lato 5 metri ed è pavimentata con 25 mattonelle quadrate di lato 1 metro, numerate da 1 a 25. Ogni persona attende in piedi su una mattonella, una sola persona per mattonella. Mentre aspettano, ognuna delle 25 persone dichiara: "Nelle mattonelle adiacenti alla mia ci sono tanti furfanti quanti cavalieri". Quante diverse disposizioni di cavalieri e furfanti sono possibili?
> 
> NOTA: Due mattonelle sono adiacenti se hanno un intero lato in comune. Due disposizioni sono diverse se, per almeno un numero, la corrispondente mattonella è occupata in una disposizione da un Cavaliere, nell'altra da un Furfante.

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 6
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1PQuJedCWTXWhrFhpDRxzkn1D0caSD99m/view)


<span class="qlang-split" data-lang="en"></span>


*How many horses/hunters on a 5x5 grid*

![[src_kangourou_2025_cadet_finale__probC5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.7]
  \draw (0,0) grid (5,5);
  \foreach \x in {0,1,2,3,4} {
    \node[blue, font=\itshape\bfseries] at (\x+0.5, 0.5) {F};
  }
  \foreach \x in {0,1,2,3,4} {
    \node[blue, font=\itshape\bfseries] at (\x+0.5, 4.5) {F};
  }
  \foreach \y in {1,2,3} {
    \node[blue, font=\itshape\bfseries] at (0.5, \y+0.5) {F};
  }
  \foreach \y in {1,2,3} {
    \node[blue, font=\itshape\bfseries] at (4.5, \y+0.5) {F};
  }
\end{tikzpicture}
\end{document}
```

> On an island there are only Knights and Spheres: Knights are people who always tell the truth, while Spheres always lie, and everyone on the island knows who the Knights are and who the Spheres are. Today 25 inhabitants of the island are waiting in the King's reception hall. This room is a square side of 5 meters and is floored with 25 square bricks on the side of 1 meter, numbered from 1 to 25. Each person is standing on a brick, one person per brick. As they wait, each of the 25 people declares, "In the bricks next to mine there are as many crooks as there are knights". How many different arrangements of knights and thieves are possible?
> 
> NOTE: Two bricks are adjacent if they have an entire side in common. Two provisions are different if, for at least one number, the corresponding brick is occupied in one provision by a Knight and in the other by a Sniper.

**Answer:** 6
[[src_kangourou_2025_cadet_finale__QC5]]
