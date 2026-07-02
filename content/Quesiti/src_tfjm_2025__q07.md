---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025 — Quesito 7
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2025__Q07
parent: src_tfjm_2025
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2025
family: tfjm
year: '2025'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '7'
summary: >-
  Road tolls between n cities labeled 1..n; toll on a road equals max of its
  endpoint labels; optimize total cost over various network graphs, plus a
  numbering game between king and ASMR.
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_grafi
  - method_estremalita
  - method_casework
skills:
  - skill_conteggio_sistematico
  - skill_ragionamento_geometrico
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2025
  - livello/TFJM²
  - topic/combinatoria
  - topic/grafi
  - topic/aritmetica
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Road tolls between n cities labeled 1..n; toll on a road equals max of its endpoint labels; optimize total cost over various network graphs, plus a numbering game between king and ASMR.*

> Problem 7 - Road taxes.
> 
> In a far country, king Louis XLIX-III wants to tax the roads to maximize his revenue. The Association of the Syndicate of Discontented Road-users (ASMR) tries to reduce the travel costs as much as possible.
> 
> In this country there are $n$ cities ($n \in \mathbb{N}^*$). Certain cities are linked by a road, thus forming the road system. The tax system is as follows: all cities are assigned a number from $1$ to $n$ (each number being used exactly once). The tax to pay for a road linking a city of number $i$ to a city of number $j$ is the maximum between $i$ and $j$. The total cost of the road system is the sum of all taxes to pay for each of the roads. The total cost depends on the way the cities are numbered. Figure 7 shows two examples. (Figure 7: on the left, an example of total cost $12$; on the right, an example of total cost $14$.)
> 
> 1. What is the maximal and minimal value of the total cost if there are $4$ cities forming a square, illustrated in Figure 8? (Figure 8: the square road system.)
> 
> 2. What is the maximal and minimal value of the total cost for the following cases (see also Figures 9 and 10)? a) Complete road system: for each pair of cities there is exactly one road. b) Pairwise road system: there are $n = 2m$ cities linked in pairs. c) Ring road system: the $n$ cities form a ring with $n \ge 3$. d) Grid road system: there are $n = k^2$ cities forming a grid. (Figure 9: complete road system with $n = 6$ (left), pairwise with $m = 3$ (middle), ring with $n = 6$ (right). Figure 10: grid road system with $k = 3$.)
> 
> 3. Find formulas or estimates for the maximal and minimal total cost of an arbitrary road system.
> 
> After many strikes, the king and the ASMR agree on the following way to assign the numbers to the cities: in turn, they assign a number between $1$ and $n$ to a city. They may not reassign a number already used, and they may not assign a number to a city that already has one. The king begins. The king's goal is to obtain the largest possible total cost, while the ASMR seeks to obtain the smallest possible total cost.
> 
> 4. Considering the road systems of the previous questions, describe the strategies of the king and the ASMR. What is the total cost of the road system when both assign the numbers optimally? What is the largest cost the king can guarantee obtaining whatever the ASMR plays? And what is the smallest cost the ASMR can guarantee obtaining whatever the king plays?
> 
> King Louis XLIX-III abuses his power to change the tax on the roads. Instead of using the maximum of the two numbers at the endpoint cities, he uses a function $f$. The total cost of the road system remains the sum of the taxes of all the roads.
> 
> 5. Repeat the previous questions where the king uses for $f$ the product of the two numbers.
> 
> 6. Repeat the previous questions where the king uses for $f$ the least common multiple of the two numbers.
> 
> 7. Propose and study other lines of research.

![[src_tfjm_2025__Q07.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_combinatoria|topic_combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_grafi|Grafi]], [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1lHouVzMpsDZ0eOZtTQ2RMXik8VTIniH-/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Tollaggi stradali tra n città etichettati 1..n; tollaggio su una strada pari al massimo delle etichette dei suoi punti di fine; ottimizzazione del costo totale su vari grafici di rete, più un gioco di numerazione tra king e ASMR.*

> Il problema 7 - tasse stradali.
> 
> In un paese lontano, il re Luigi XLIX-III vuole tassare le strade per massimizzare le sue entrate. L'Associazione degli utenti stradali insoddisfatti (ASMR) cerca di ridurre il più possibile i costi di viaggio.
> 
> In questo paese ci sono $n$ città ($n \in \mathbb{N}^*$). Alcune città sono collegate da una strada, formando così il sistema stradale. Il sistema fiscale è il seguente: a tutte le città viene assegnato un numero da $1$ a $n$ (ogni numero viene utilizzato esattamente una volta). La tassa da pagare per una strada che collega una città di numero $i$ a una città di numero $j$ è il massimo tra $i$ e $j$. Il costo totale del sistema stradale è la somma di tutte le tasse da pagare per ciascuna strada. Il costo totale dipende dal numero delle città. La figura 7 mostra due esempi. (Figura 7: a sinistra, un esempio del costo totale $12$; a destra, un esempio del costo totale $14$.)
> 
> 1. Qual è il valore massimo e minimo del costo totale se ci sono $4$ città che formano un quadrato, come illustrato nella figura 8? (Figura 8: sistema di strade quadrate.)
> 
> 2. Qual è il valore massimo e minimo del costo totale per i seguenti casi (vedere anche le figure 9 e 10)? a) Sistema stradale completo: per ogni coppia di città esiste esattamente una strada. b) Sistema stradale in coppia: ci sono città collegate in coppie. c) Sistema di strade circolare: le città $n$ formano un anello con $n \ge 3$. d) Sistema stradale di rete: ci sono $n = k^2$ città che formano una rete. (Figura 9: sistema stradale completo con $n = 6$ (a sinistra), in coppia con $m = 3$ (in mezzo), anello con $n = 6$ (a destra). Figura 10: sistema stradale di rete con $k = 3$.)
> 
> 3. Trovare formule o stime per il costo totale massimo e minimo di un sistema stradale arbitrario.
> 
> Dopo molti scioperi, il re e l'ASMR concordano sul seguente modo di assegnare i numeri alle città: a loro volta, assegnano un numero tra $1$ e $n$ a una città. Non possono assegnare nuovamente un numero già usato, e non possono assegnare un numero a una città che ne ha già uno. Il re comincia. L'obiettivo del re è quello di ottenere il costo totale più grande possibile, mentre l'ASMR cerca di ottenere il costo totale più piccolo possibile.
> 
> 4. Considerando i sistemi stradali delle domande precedenti, descrivi le strategie del re e dell'ASMR. Qual è il costo totale del sistema stradale quando entrambi assegnano i numeri in modo ottimale? Qual è il costo più alto che il re può garantire per ottenere qualsiasi cosa l'ASMR gioca? E qual è il costo più basso che l'ASMR può garantire per ottenere qualsiasi cosa il re gioca?
> 
> Il re Luigi XLIX-III abusa del suo potere per cambiare l'imposta sulle strade. Invece di utilizzare il massimo dei due numeri nelle città del punto di fine, utilizza una funzione $f$. Il costo totale del sistema stradale rimane la somma delle tasse di tutte le strade.
> 
> 5. Ripetere le domande precedenti in cui il re usa per $f$ il prodotto dei due numeri.
> 
> 6. Ripetere le domande precedenti in cui il re usa per $f$ il più piccolo comune dei due numeri.
> 
> 7. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2025__Q07.png]]

[[src_tfjm_2025__Q07]]
