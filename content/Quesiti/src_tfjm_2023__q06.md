---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023 — Quesito 6
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2023__Q06
parent: src_tfjm_2023
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023
family: tfjm
year: '2023'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '6'
summary: >-
  Hierarchies as oriented social-bond graphs; emeutes (riots) that flip and add
  bonds; stability, reachability, revolutions on complete/coherent/arbitrary
  tribes
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_grafi
  - method_invarianti
  - method_casework
skills:
  - skill_astrazione
  - skill_casework_accurato
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2023
  - livello/TFJM²
  - topic/combinatoria
  - topic/logica
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Hierarchies as oriented social-bond graphs; emeutes (riots) that flip and add bonds; stability, reachability, revolutions on complete/coherent/arbitrary tribes*

> Hierarchical tribes (Tribus hiérarchiques). On an archipelago far from everyone, the tribes each have a well-established social order. Two individuals are linked socially if one is socially superior to the other. A hierarchy is a set of links going from each individual to others. For two individuals $A$ and $B$, we write $A \\to B$ if $A$ is socially (hierarchically) superior to $B$. We assume there are at least 2 persons. Hierarchical superiority is not transitive: if $A \\to B$ and $B \\to C$, then not necessarily $A \\to C$.\n\nOn Tournoasis Isle a tribe organizes itself in a complete hierarchy: for any pair of individuals $A$ and $B$, one has either $A \\to B$ or $B \\to A$.\n\nTwo discontented persons can declare an émeute (riot). An émeute triggered by $A \\to B$ transforms the hierarchy in three steps:\n   a) For every social link $C \\to A$ and $B \\to D$ with $C$ and $D$ different, one adds a social link $C \\to D$ (at this stage one may have several social links between two persons).\n   b) One reverses the link $A \\to B$ into $B \\to A$.\n   c) If, between two persons $X$ and $Y$, there are several social links, one replaces them by the majority social link, or by a single social link in case of a tie. Thus $X \\rightrightarrows Y$ becomes $X \\to Y$, and a tie $X \\rightrightarrows Y$ leaves $X$ and $Y$ unlinked.\n\nAs the hierarchy must stay complete on Tournoasis, if the final result would leave a pair of persons with no social link, then the émeute cannot take place.\n\nFigure 7 shows three examples of émeutes between $A$ and $B$. The initial situation is on the left and the final result on the right. On Tournoasis, the émeute between $C$ and $D$ in the right-hand example cannot take place.\n\n1. Do there exist stable hierarchies, in which no émeute can break out? If so, for which numbers of individuals?\n\nFor two hierarchies $H_1$ and $H_2$, we write $H_1 \\to H_2$ if there is a finite sequence of émeutes transforming $H_1$ into $H_2$.\n\n2. Is it true that if $H_1 \\to H_2$, then also $H_2 \\to H_1$?\n\nA révolution is a sequence of émeutes such that the final result has reversed all the arrows.\n\n3. Characterize the hierarchies for which a révolution is possible.\n\n4. For which complete hierarchies $H_1$ and $H_2$ does there exist a sequence of émeutes bringing $H_1 \\to H_2$? If not always, give necessary and sufficient conditions to have $H_1 \\to H_2$.\n\nOn the neighboring isle, Courtoasis, lives a similar tribe. There, hierarchies are not necessarily complete, but they must be coherent, meaning there are no individuals $A_1, A_2, \\dots, A_n$ ($n > 1$) with $A_1 \\to A_2 \\to \\dots \\to A_n \\to A_1$. If an émeute would make the hierarchy non-coherent, then it cannot take place.\n\n5. Redo the preceding questions in this framework.\n\nOn a third isle, Carquoisis, lives a tribe with a less strict hierarchy, not necessarily complete nor coherent. An émeute can therefore always take place.\n\n6. Redo questions 2, 3 and 4 in this framework.\n\n7. Propose and study other lines of research.

![[src_tfjm_2023__Q06.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica]]
**Metodo:** [[method_grafi|Grafi]], [[method_invarianti|Invarianti]], [[method_casework|Casework]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Ierarchie come grafici di legami sociali orientati; emeute (rivolti) che girano e aggiungono legami; stabilità, accessibilità, rivoluzioni sulle tribù complete/coerenti/arbitrali*

> Tribù gerarchici (Tribus hierarchiques). In un arcipelago lontano da tutti, le tribù hanno un ordine sociale ben consolidato. Due individui sono collegati socialmente se uno è socialmente superiore all'altro. Una gerarchia è un insieme di collegamenti che vanno da un individuo all'altro. Per due individui $A$ e $B$, scriviamo $A \\to B$ se $A$ è socialmente (ierarchicamente) superiore a $B$. Supponiamo che ci siano almeno due persone. La superiorità gerarchica non è transitiva: se $A \\to B$ e $B \\to C$, allora non necessariamente $A \\to C$.\n\nSulla Tournoasis Isle una tribù si organizza in una completa gerarchia: per qualsiasi coppia di individui $A$ e $B$, si ha o $A \\to B$ o $B \\to A$.\n\nDue persone insoddisfatte possono dichiarare un émeute (rivolto). Una rivolta provocata da $A \\to B$ trasforma la gerarchia in tre fasi:\n a) Per ogni collegamento sociale $C \\to A$ e $B \\to D$ con $C$ e $D$ diversi, si aggiunge un collegamento sociale $C \\to D$ (in questa fase si possono avere più collegamenti sociali tra due persone).\n b) Si inverte il collegamento $A \\to B$ in $B \\to A$.\n c) Se, tra due persone $X$ e $Y$, ci sono più collegamenti sociali, si sostituiscono con il collegamento sociale di maggioranza, o con un singolo collegamento sociale in caso di legame. Così $X \\rightrightarrows Y$ diventa $X \\to Y$, e un tie $X \\rightrightarrows Y$ lascia $X$ e $Y$ non collegati.\n\nCome la gerarchia deve rimanere completa su Tournoasis, se il risultato finale lascia una coppia di persone senza legame sociale, allora l'émeute non può avvenire.\n\nLa figura 7 mostra tre esempi di émeutes tra $A$ e $B$. La situazione iniziale è a sinistra e il risultato finale a destra. Su Tournoasis, non può avvenire l'emeute tra $C$ e $D$ nell'esempio di destra.\n\n1. Esistono gerarchie stabili, in cui non può scoppiare alcuna rivolta? In tal caso, per quali numeri di individui?\n\nPer due gerarchie $H_1$ e $H_2$, scriviamo $H_1 \\to H_2$ se c'è una sequenza finita di émeutes che trasforma $H_1$ in $H_2$.\n\n2. E' vero che se $H_1 \\to H_2$, allora anche $H_2 \\to H_1$?\n\nUna rivoluzione è una sequenza di émeutes tale che il risultato finale ha invertito tutte le frecce.\n\n3. Caratterizzare le gerarchie per le quali una rivoluzione è possibile. Per quali gerarchie complesse $H_1$ e $H_2$ esiste una sequenza di émeutes che porta $H_1 \\to H_2$? Se non sempre, dare le condizioni necessarie e sufficienti per avere $H_1 \\to H_2$.\n\nNella vicina isola, Courtoasis, vive una tribù simile. Qui, le gerarchie non sono necessariamente complete, ma devono essere coerenti, il che significa che non ci sono individui $A_1, A_2, \\dots, A_n$ ($n > 1$) con $A_1 \\to A_2 \\to \\dots \\to A_n \\to A_1$. Se una rivolta rendesse la gerarchia non coerente, allora non può avvenire. Rendiamo le domande precedenti in questo quadro. In una terza isola, Carquoisis, vive una tribù con una gerarchia meno rigorosa, non necessariamente completa né coerente. Una rivolta può quindi avvenire sempre. Redo le domande 2, 3 e 4 in questo quadro. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2023__Q06.png]]

[[src_tfjm_2023__Q06]]
