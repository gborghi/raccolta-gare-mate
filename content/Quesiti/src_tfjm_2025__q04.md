---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025 — Quesito 4
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2025__Q04
parent: src_tfjm_2025
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025
family: tfjm
year: '2025'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '4'
summary: >-
  Butterfly wingspans transform by halving or scaling (median/maximal selection,
  branching duplication); study whether sizes stay bounded or grow, and
  inferring the random scaling law.
qa_score: '2'
topics:
  - topic_algebra
  - topic_probabilita
  - topic_disuguaglianze
methods:
  - method_ricorsione
  - method_disuguaglianze
  - method_estremalita
skills:
  - skill_manipolazione_algebrica
  - skill_stima
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2025
  - livello/TFJM²
  - topic/algebra
  - topic/probabilita
  - topic/disuguaglianze
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Butterfly wingspans transform by halving or scaling (median/maximal selection, branching duplication); study whether sizes stay bounded or grow, and inferring the random scaling law.*

> Problem 4 - Transformation of butterflies.
> 
> For the different tournaments of TFJM2, the national organizing committee decides to raise $N$ butterflies. At the origin, butterfly number $i$ has a wingspan equal to $x_i$ centimeters. Each day, certain butterflies undergo a transformation that modifies their wingspan.
> 
> 1. In this question only, suppose we have $2$ butterflies of initial wingspan $1$ cm. a) Each day, one of the two butterflies of maximal wingspan has its wingspan divided by two. How much time will it take for both butterflies to have a wingspan strictly inferior to $0.5$ cm? And for $0.1$ cm? b) Suppose $N$ is odd. What happens if the transformation divides by two the wingspan of one of the butterflies of median wingspan?
> 
> 2. Suppose $N$ is odd. From now on, suppose the two transformations alternate: - The first transformation applies to one of the butterflies having the median wingspan, which loses half of its wingspan. - The second transformation applies to one of the butterflies having the median wingspan, which gains half of its wingspan. Is it true that, for all $M \in \mathbb{R}$, one of the butterflies will eventually surpass the size $M$?
> 
> 3. Repeat the previous question where the second transformation instead multiplies the wingspan of the butterfly by $2$.
> 
> From now on we make the hypothesis that all the butterflies transform at the same time.
> 
> 4. Each day, each butterfly transforms into two butterflies: the first inherits $80\%$ of the wingspan of the parent, and the second $125\%$. Let $x \in \mathbb{R}_+$. Estimate the proportion of butterflies having a wingspan superior to $x$ on the $n$-th day.
> 
> 5. Each day, each butterfly transforms into two butterflies. The first inherits $80\%$ of the wingspan of the parent, and the second $125\%$ of the wingspan of the grandparent. Since there is no grandparent at the first transformation, suppose the grandparent has the same wingspan as the parent. Let $x \in \mathbb{R}_+$. What is the proportion of butterflies having a wingspan strictly superior to $x$ on the $n$-th day? (One may begin by looking at particular cases of $x$.)
> 
> 6. Each day, each butterfly transforms into two butterflies. The percentage of evolution of the wingspan of the new butterflies relative to their parents is drawn at random following a fixed discrete probability law. Can one recover this probability law by observing the evolution of the butterflies long enough?
> 
> 7. Propose and study other lines of research.

![[src_tfjm_2025__Q04.png]]

**Topic:** [[topic_algebra|Algebra]], [[topic_probabilita|Probabilità]], [[topic_disuguaglianze|Disuguaglianze]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[method_disuguaglianze|Disuguaglianze]], [[method_estremalita|Estremalità]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Le larghezza delle ali delle farfalle si trasformano dimezzando o scalare (selezione media/massimale, duplicazione di ramificazione); studiare se le dimensioni rimangono limitate o crescono, e dedurre la legge di scalazione casuale.*

> Il problema 4 - Trasformazione delle farfalle.
> 
> Per i diversi tornei del TFJM2, il comitato organizzativo nazionale decide di allevare le farfalle $N$. All'origine, il numero di farfalla $i$ ha una larghezza delle ali pari a $x_i$ centimetri. Ogni giorno, alcune farfalle subiscono una trasformazione che modifica la loro larghezza delle ali.
> 
> 1. Solo in questa domanda, supponiamo di avere farfalle $2$ di larghezza iniziale $1$ cm. a) Ogni giorno, una delle due farfalle di larghezza massima ha la sua larghezza divisoria per due. Quanto tempo ci vorrà affinché entrambe le farfalle abbiano una larghezza delle ali strettamente inferiore a $0.5$ cm? E per $0.1$ cm? b) Supponiamo che $N$ sia strano. Cosa succede se la trasformazione divide per due la larghezza delle ali di una delle farfalle di larghezza media?
> 
> 2. Supponiamo che $N$ sia strano. D'ora in poi, supponiamo che le due trasformazioni si alternino: - La prima trasformazione si applica a una delle farfalle con l'ala media, che perde la metà della sua ala. - La seconda trasformazione si applica a una delle farfalle con l'apertura media delle ali, che ottiene la metà della sua apertura. È vero che, per tutti $M \in \mathbb{R}$, una delle farfalle supererà alla fine la dimensione $M$?
> 
> 3. Ripetere la domanda precedente, in cui la seconda trasformazione moltiplica invece l'espansione delle ali della farfalla di $2$.
> 
> D'ora in poi facciamo l'ipotesi che tutte le farfalle si trasformino contemporaneamente.
> 
> 4. Ogni giorno, ogni farfalla si trasforma in due farfalla: la prima eredita $80\%$ della larghezza delle ali del genitore e la seconda $125\%$. Let $x \in \mathbb{R}_+$. Calcolare la percentuale di farfalle con larghezza delle ali superiore a $x$ il giorno $n$.
> 
> 5. Ogni giorno, ogni farfalla si trasforma in due farfalla. La prima eredita $80\%$ della larghezza delle ali del genitore e la seconda $125\%$ della larghezza delle ali del nonno. Dato che non c'è nonno alla prima trasformazione, supponiamo che il nonno abbia la stessa larghezza delle ali del genitore. Let $x \in \mathbb{R}_+$. Qual è la percentuale di farfalle con una larghezza delle ali rigorosamente superiore a $x$ il giorno $n$? (Si può iniziare esaminando i casi particolari di $x$.)
> 
> 6. Ogni giorno, ogni farfalla si trasforma in due farfalla. La percentuale di evoluzione della larghezza delle ali delle nuove farfalle rispetto ai loro genitori è tracciata a caso seguendo una legge di probabilità fissa discreta. Si può recuperare questa legge di probabilità osservando l'evoluzione delle farfalle abbastanza a lungo?
> 
> 7. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2025__Q04.png]]

[[src_tfjm_2025__Q04]]
