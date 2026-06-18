---
tipo: quesito
quesito_id: quesito_src_cesenatico_2006__Q06
parent: src_cesenatico_2006
competition: XXII Olimpiade Italiana Cesenatico 2006
family: archimede
year: '2006'
level: nazionale
country: Italia
quesito: '6'
summary: Gioco di Alberto e Barbara con gettoni e strategia vincente
answer: dimostrata strategia vincente
topics:
  - topic_logica
methods:
  - method_invarianti
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2006
  - livello/nazionale
  - topic/logica
---

# XXII Olimpiade Italiana Cesenatico 2006 — Quesito 6

*Gioco di Alberto e Barbara con gettoni e strategia vincente*

> Si consideri il seguente gioco: inizialmente su un tavolo ci sono alcune pile di gettoni (il numero di gettoni può variare da pila a pila). A turno, partendo da Alberto, uno dei due giocatori fa una e una sola delle seguenti mosse:
> 
> - oppure toglie un gettone da una pila a sua scelta e lo elimina dal gioco;
> - oppure suddivide una pila in due pile più piccole, ognuna di almeno un gettone (senza aggiungere o togliere gettoni dal tavolo).
> 
> Vince chi toglie l'ultimo gettone dal tavolo. Determinare, a seconda del numero di pile presenti sul tavolo all'inizio e di quanti gettoni contengono, quale dei due giocatori ha una strategia vincente.
> 
> Siano $C_0, C_1, C_2, \ldots$ le combinazioni di pile presenti all'inizio del gioco, dopo la prima mossa, dopo la seconda mossa, e così via. Per ogni combinazione $C_i$ sia $s_i$ il numero di pile che hanno un numero di gettoni $a_1, a_2, \ldots, a_k$ maggiore di 1 ed $e_i$ il numero di pile con un solo gettone. Sia poi $m_i = (a_1 - 1) + \cdots + (a_k - 1)$. Dimostrare che Barbara ha una strategia vincente se $m_0$ ed $s_0$ sono entrambi pari e che Alberto ha una strategia vincente in tutti gli altri casi. La strategia vincente è quella di lasciare all'avversario ad ogni mossa una combinazione $C_i$ tale che $m_i$ ed $s_i$ siano entrambi pari.

**Topic:** [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** dimostrata strategia vincente
**Fonte:** apri PDF p.4
