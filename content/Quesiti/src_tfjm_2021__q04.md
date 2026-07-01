---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021 — Quesito 4
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2021__Q04
parent: src_tfjm_2021
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2021
family: tfjm
year: '2021'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '4'
summary: >-
  Identify counterfeit chocolate coins (different mass) with a two-pan balance;
  minimum weighings in worst case under various information
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_casework
  - method_estremalita
  - method_conteggio
  - method_disuguaglianze
skills:
  - skill_casework_accurato
  - skill_conteggio_sistematico
  - skill_stima
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2021
  - livello/TFJM²
  - topic/combinatoria
  - topic/logica
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Identify counterfeit chocolate coins (different mass) with a two-pan balance; minimum weighings in worst case under various information*

> Malo, a renowned apprentice chocolatier, sometimes mistakes the recipe of chocolate coins.
> 
> Malo has prepared $n \in \mathbb{N}^*$ chocolate pieces, and has already wrapped them before realizing that one piece among them does not have the right mass: it is too small or too large, but we do not know which one, nor the mass difference. All the other pieces have the same mass.
> 
> The only thing that distinguishes the defective pieces from the good ones is their mass: all the good pieces have the same mass and a defective piece has a different mass.
> 
> Malo appeals to Marie, the chocolatier, for help to identify the defective pieces among the good ones. Unfortunately, she has at her disposal only a two-pan balance that is not very precise: it indicates only which pan is heavier. The balance is so imprecise that she also needs small masses of mass $1$.
> 
> **(1)** Suppose all the defective pieces have a mass between $1-\varepsilon$ and $1+\varepsilon$. Find a condition on $\varepsilon$ such that, if Marie places strictly more pieces and masses on one pan than on the other, then the balance will always tip toward the side with more pieces and masses. In the rest of the problem, we place ourselves in this case.
> 
> To begin, suppose $k=1$: a single piece is defective. Moreover, the remaining ingredients allow us to know whether the defective piece is heavier or lighter than the true ones.
> 
> **(2)** Malo thinks he remembers which piece is defective. In terms of $n$, what is the minimum number of weighings Marie needs to verify whether he is right?
> 
> **(3)** Malo has no idea which piece is defective. In terms of $n$, what is the minimum number of weighings Marie needs to know for sure which one is defective? Her strategy must work whatever the defective piece is.
> 
> **(4)** Revisit questions (2) and (3) if Marie has no masses at her disposal.
> 
> **(5)** Revisit questions (2) to (4) if the ingredients do not allow determining whether the defective piece is heavier or lighter. For question (2), Malo thinks he knows which piece is defective and heavier (Marie only wants to verify that it is the defective piece, but not necessarily that it is indeed heavier).
> 
> **(6)** Revisit questions (2) to (4) in the case of an arbitrary number $k > \frac{n}{2}$ of defective pieces, if these are all heavier than the good pieces and all of the same mass (respecting the constraint of question (1)). For question (2), Malo thinks he remembers exactly which the defective pieces are. One may begin with $k=2$.
> 
> **(7)** Revisit the problem in other cases. For example, one may suppose there exist two models of defective pieces, of respective masses $1+\varepsilon$ and $1-\varepsilon$ (where $\varepsilon>0$ is small enough to respect the constraint of question (1)). One may also be interested in the case where the pieces can have any mass (always respecting question (1)), or place oneself in the case where Marie does not know $k$.

![[src_tfjm_2021__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]], [[method_disuguaglianze|Disuguaglianze]]
**Abilita:** [[skill_casework_accurato|Casework accurato]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_stima|Stima]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1_SfCnSHm4hFbj_TGxa2GoahJiFYpdibk/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Identificare le monete di cioccolato contraffatte (di massa diversa) con un equilibrio di due pannelli; pesi minimi nel peggiore dei casi in base a varie informazioni*

> Malo, un noto apprendista di cioccolato, a volte sbaglia la ricetta delle monete di cioccolato.
> 
> Malo ha preparato i pezzi di cioccolato $n \in \mathbb{N}^*$ e li ha già avvolti prima di rendersi conto che un pezzo di cioccolato non ha la massa giusta: è troppo piccolo o troppo grande, ma non sappiamo quale, né la differenza di massa. Tutti gli altri pezzi hanno la stessa massa.
> 
> L'unica cosa che distingue i pezzi difettosi dai buoni è la loro massa: tutti i pezzi buoni hanno la stessa massa e un pezzo difettoso ha una massa diversa.
> 
> Malo chiede a Marie, la cioccolateria, aiuto per identificare i pezzi difettosi tra i buoni. Purtroppo ha a sua disposizione solo un equilibrio di due pannelli che non è molto preciso: indica solo quale è la pannella più pesante. L'equilibrio è così impreciso che ha bisogno anche di piccole masse di massa $1$.
> 
> **(1) ** Supponiamo che tutti i pezzi difettosi abbiano una massa tra $1-\varepsilon$ e $1+\varepsilon$. Trovare una condizione su $\varepsilon$ tale che, se Marie mette rigorosamente più pezzi e masse su una pentola che sull'altra, allora la bilancia sarà sempre inclinata verso il lato con più pezzi e masse. Nel resto del problema, ci mettiamo in questo caso.
> 
> Per cominciare, supponiamo $k=1$: un singolo pezzo è difettoso. Inoltre, gli ingredienti rimasti ci permettono di sapere se il pezzo difettoso è più pesante o più leggero di quelli veri.
> 
> Malo pensa di ricordare quale pezzo è difettoso. In termini di $n$, qual è il numero minimo di pesi che Marie ha bisogno per verificare se ha ragione?
> 
> Malo non ha idea di quale pezzo sia difettoso. In termini di $n$, qual è il numero minimo di pesi di cui Marie ha bisogno per sapere con certezza quale è difettoso? La sua strategia deve funzionare, qualunque sia il pezzo difettoso.
> 
> La domanda (2) e (3) sono riviste se Marie non dispone di massa.
> 
> **(5) ** Rivedere le domande da (2) a (4) se gli ingredienti non permettono di determinare se il pezzo difettoso è più pesante o più leggero. Per la domanda (2), Malo pensa di sapere quale pezzo è difettoso e più pesante (Marie vuole solo verificare che sia il pezzo difettoso, ma non necessariamente che sia effettivamente più pesante).
> 
> **(6) ** Rivedere le domande da (2) a (4) nel caso di un numero arbitrario $k > \frac{n}{2}$ di pezzi difettosi, se questi sono tutti più pesanti dei pezzi buoni e hanno tutti la stessa massa (rispetto al vincolo della domanda (1)). Per la domanda (2), Malo pensa di ricordare esattamente quali sono i pezzi difettosi. Si può iniziare con $k=2$.
> 
> **(7) ** Rivedi il problema in altri casi. Ad esempio, si può supporre che esistano due modelli di pezzi difettosi, rispettivamente $1+\varepsilon$ e $1-\varepsilon$ (dove $\varepsilon>0$ è abbastanza piccolo da rispettare la limitazione della domanda (1)). Si può anche interessare al caso in cui i pezzi possano avere qualsiasi massa (sempre rispettando la domanda (1)), o posizionarsi nel caso in cui Marie non conosca $k$.

![[src_tfjm_2021__Q04.png]]

[[src_tfjm_2021__Q04]]
