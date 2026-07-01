---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018 — Quesito 5
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2018__Q05
parent: src_tfjm_2018
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2018
family: tfjm
year: '2018'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '5'
summary: >-
  A chain of n unit links with the oriented angle at each joint constrained to
  an interval depending on alpha; describe and compute the area of the set of
  points reachable by the free end, with variants fixing A_1 and using angles
  near pi/2.
qa_score: '2'
topics:
  - topic_geometria_piana
  - topic_trigonometria
  - topic_geometria_analitica
methods:
  - method_trigonometria
  - method_coordinate
  - method_casework
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
  - skill_astrazione
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2018
  - livello/TFJM²
  - topic/geometria_piana
  - topic/trigonometria
  - topic/geometria_analitica
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*A chain of n unit links with the oriented angle at each joint constrained to an interval depending on alpha; describe and compute the area of the set of points reachable by the free end, with variants fixing A_1 and using angles near pi/2.*

> Rolled chain. Let $n\in\mathbb{N}^*$ and $\alpha\in[0,\pi]$. Colin amuses himself with a rolled (stiff) chain. The chain consists of $n$ links $A_0A_1,A_1A_2,\ldots,A_{n-1}A_n$, joined at hinges; each segment $[A_iA_{i+1}]$ has length $1$ for $0\le i\le n-1$ (the segments may cross). The point $A_0$ is fixed. The chain being rolled, the angle at each hinge can take only certain values: for any $1\le i\le n-1$, the oriented angle $\widehat{(A_{i-1}A_i,A_iA_{i+1})}$ must remain in the interval $[-\alpha,\alpha]$ (see Figure 4). We write $\mathcal{B}_\alpha^n$ for the set of points that can be reached by the extremity $A_n$ of the chain.
> 
> 1. As a function of $n$ and $\alpha$, what is $\mathcal{B}_\alpha^n$? Treat the following cases:
>  a) $\alpha=\pi$ (the chain not rolled);
>  b) $\alpha=\frac{\pi}{2}$;
>  c) $n=2$;
>  d) $n=3$;
>  e) $n,\alpha$ arbitrary.
> 
> 2. Describe $\mathcal{B}_\alpha^n$ as precisely as possible and compute its area in the different cases of question 1.
> 
> In questions 3 and 4, suppose also that the point $A_1$ of the chain is fixed, at distance $1$ from $A_0$. We write $\mathcal{C}_\alpha^n$ for the set of points that can be reached by the extremity $A_n$ of the chain.
> 
> 3. Describe $\mathcal{C}_\alpha^n$ in the same cases as question 1.
> 
> 4. In the same cases, which are the possible values of the oriented angle $\widehat{(A_0A_1,A_1A_n)}$? Is it true that for two points $X$ and $Y$ such that $A_1X=A_1Y$, there exists an arc of circle centred at $A_1$, between $X$ and $Y$, that is entirely included in $\mathcal{C}_\alpha^n$?
> 
> 5. Let $\varepsilon\in\left[0,\frac{\pi}{2}\right]$. Suppose the chain rolled, with the angles fairly close to $\frac{\pi}{2}$: more precisely, for any $1\le i\le n-1$, the oriented angle $\widehat{(A_{i-1}A_i,A_iA_{i+1})}$ must remain in $\left[\frac{\pi}{2}-\varepsilon,\frac{\pi}{2}+\varepsilon\right]\cup\left[-\frac{\pi}{2}-\varepsilon,-\frac{\pi}{2}+\varepsilon\right]$. Redo questions 1 to 3 in this case.
> 
> 6. Propose and study other directions of research.

![[src_tfjm_2018__Q05.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_trigonometria|Trigonometria]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_trigonometria|Trigonometria]], [[method_coordinate|Coordinate]], [[method_casework|Casework]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]]
**Area:** [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/11s6VA0qcuZC6fCiR7BZhQG4Gmbsu3Kv1/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Una catena di n unità di collegamento con l'angolo orientato a ciascuna giunta limitato ad un intervallo a seconda dell'alfa; descrivere e calcolare l'area dell'insieme di punti raggiungibile dall'estremità libera, con varianti che fissano A_1 e utilizzano angoli vicini a pi/2.*

> Catenata a rotoli. Let $n\in\mathbb{N}^*$ e $\alpha\in[0,\pi]$. Colin si diverte con una catena rullata. La catena è costituita da $n$ collegamenti $A_0A_1,A_1A_2,\ldots,A_{n-1}A_n$, uniti a bisaglie; ogni segmento $[A_iA_{i+1}]$ ha lunghezza $1$ per $0\le i\le n-1$ (i segmenti possono essere incrociati). Il punto $A_0$ è fissato. Quando la catena è rotolata, l'angolo di ciascuna cerniera può assumere solo determinati valori: per qualsiasi $1\le i\le n-1$, l'angolo orientato $\widehat{(A_{i-1}A_i,A_iA_{i+1})}$ deve rimanere nell'intervallo $[-\alpha,\alpha]$ (vedi figura 4). Scriviamo $\mathcal{B}_\alpha^n$ per l'insieme di punti raggiungibili dall'estremità $A_n$ della catena.
> 
> 1. Come funzione di $n$ e $\alpha$, cosa è $\mathcal{B}_\alpha^n$? Trattare i seguenti casi: a) $\alpha=\pi$ (la catena non laminata); b) $\alpha=\frac{\pi}{2}$; c) $n=2$; d) $n=3$; e) $n,\alpha$ arbitrario.
> 
> 2. Descrivere il $\mathcal{B}_\alpha^n$ con la massima precisione possibile e calcolare la sua superficie nei diversi casi della domanda 1.
> 
> Nella domanda 3 e 4, supponiamo anche che il punto $A_1$ della catena sia fisso, a distanza $1$ da $A_0$. Scriviamo $\mathcal{C}_\alpha^n$ per l'insieme di punti raggiungibili dall'estremità $A_n$ della catena.
> 
> 3. Descrivere $\mathcal{C}_\alpha^n$ negli stessi casi della domanda 1.
> 
> 4. In questi stessi casi, quali sono i valori possibili dell'angolo orientato $\widehat{(A_0A_1,A_1A_n)}$? E' vero che per due punti $X$ e $Y$ tali che $A_1X=A_1Y$, esiste un arco di cerchio centrato a $A_1$, tra $X$ e $Y$, che è interamente incluso in $\mathcal{C}_\alpha^n$?
> 
> 5. Let < MSK0/>. Supponiamo che la catena sia rotolata, con gli angoli abbastanza vicini a $\frac{\pi}{2}$: più precisamente, per qualsiasi $1\le i\le n-1$, l'angolo orientato $\widehat{(A_{i-1}A_i,A_iA_{i+1})}$ deve rimanere in $\left[\frac{\pi}{2}-\varepsilon,\frac{\pi}{2}+\varepsilon\right]\cup\left[-\frac{\pi}{2}-\varepsilon,-\frac{\pi}{2}+\varepsilon\right]$. Redo domande da 1 a 3 in questo caso.
> 
> 6. Proporre e studiare altre direzioni di ricerca.

![[src_tfjm_2018__Q05.png]]

[[src_tfjm_2018__Q05]]
