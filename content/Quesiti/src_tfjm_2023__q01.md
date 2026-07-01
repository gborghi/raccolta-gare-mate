---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023 — Quesito 1
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2023__Q01
parent: src_tfjm_2023
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023
family: tfjm
year: '2023'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '1'
summary: >-
  Largest axis-aligned square stamp that fits inside a package of given shape,
  then total area with two disjoint stamps
qa_score: '2'
topics:
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_estremalita
  - method_casework
  - method_simmetria
skills:
  - skill_ragionamento_geometrico
  - skill_casework_accurato
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2023
  - livello/TFJM²
  - topic/geometria_piana
  - topic/combinatoria
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Largest axis-aligned square stamp that fits inside a package of given shape, then total area with two disjoint stamps*

> Philately. Roman is a not-quite-ordinary stamp collector: he does not collect stamps, but ink stamps (tampons). When given a package of a certain shape, he looks for the largest ink stamp to apply to it. The package is laid flat with a fixed orientation, and the ink stamps are squares whose sides are parallel to the axes of a fixed orthogonal coordinate frame.\n\n1. What is the largest possible ink stamp if the package is:\n   - A rectangle of sides $a$ and $b$ (with $a \\neq b$), whose sides are parallel to the axes?\n   - A disk of radius $r$?\n   - An isosceles right triangle whose legs (the sides of the right angle), of length $a$, are parallel to the axes?\n\n2. We now suppose that the package is a convex polygon, that is, a polygon all of whose interior angles measure strictly between $0^\\circ$ and $180^\\circ$. Roman looks at the number of ways (potentially infinite) of placing the ink stamp of maximal size on the package. Which are the possible numbers of ways?\n\nAfter reflection, Roman tells himself a package would carry more ink stamps if he could place 2 ink stamps rather than one; he then seeks to maximize their total size. The 2 ink stamps must be placed inside the package, must be axis-aligned squares, and must not overlap (they may nonetheless touch, having only points in common). Denote by $A_p$ the largest area Roman can obtain if he first applies one ink stamp of maximal size, then a second one in the space that remains; and by $A_{\\text{dis}}$ the largest total area he can obtain if he can place the two ink stamps as he wishes, provided they are disjoint.\n\n3. Do we always have $A_p = A_{\\text{dis}}$? If not, what can the ratio $A_{\\text{dis}}/A_p$ be worth?\n\n4. What can $A_{\\text{dis}}$ be worth if the package is:\n   - A rectangle of sides $a$ and $b$ (with $a \\neq b$), whose sides are parallel to the axes?\n   - A disk of radius $r$?\n   - An isosceles right triangle whose legs, of length $a$, are parallel to the axes?\n\n5. We now suppose the package is a convex polygon. Find, as a function of the number of sides of the polygon, the possible values for the ratio $A_{\\text{dis}}/A_p$.\n\n6. We now realize that the ink stamps do not reproduce well if they touch, so Roman now imposes that the union of two ink stamps of arbitrary sizes, when he places them, must not be superposable (the two ink stamps no longer count as the same shuffle, i.e. must not overlap nor touch in a segment). What can $A_{\\text{dis}}$ be worth if the package is:\n   - A rectangle of sides $a$ and $b$ (with $a \\neq b$), whose sides are parallel to the axes?\n   - A disk of radius $r$?\n   - An isosceles right triangle whose legs, of length $a$, are parallel to the axes?\n\n7. Redo the problem if the ink stamps can no longer be required to be axis-aligned. In particular, find the package shapes that allow Roman to place 2 ink stamps whose total area increases as much as possible.\n\n8. Propose and study other lines of research.

![[src_tfjm_2023__Q01.png]]

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]], [[method_simmetria|Simmetria]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_casework_accurato|Casework accurato]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Geometria]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Il più grande timbro quadrato allineato all'asse che si inserisce all'interno di un pacchetto di una determinata forma, quindi superficie totale con due timbri disgiunti*

> Pilatamente. Roman non è un collezionista di francobolli abbastanza ordinario: non raccoglie francobolli, ma francobolli di inchiostro (tamponi). Quando viene dato un pacchetto di una certa forma, cerca il più grande timbro di inchiostro per applicarlo. Il pacchetto è piatto con un orientamento fisso e i timbri di inchiostro sono quadrati i cui lati sono paralleli agli assi di un quadro di coordinate ortogonali fissi.\n\n1. Qual è il più grande timbro possibile se il pacchetto è:\n - Un rettangolo di lati $a$ e $b$ (con $a \\neq b$), i cui lati sono paralleli agli assi?\n - Un disco di raggio $r$?\n - Un triangolo rettangolo di uguali stelle le cui gambe (i lati dell'angolo giusto), di lunghezza $a$, sono paralleli agli assi?\n\n2. Supponiamo ora che il pacchetto sia un poligono converso, cioè un poligono il cui angolo interno misura rigorosamente tra $0^\\circ$ e $180^\\circ$. Roman analizza il numero di modi (potenzialmente infiniti) per posizionare il timbro di inchiostro di dimensioni massime sul confezionamento. Dopo la riflessione, Roman si dice che un pacchetto porterebbe più francobolli di inchiostro se potesse mettere due francobolli di inchiostro invece di uno; poi cerca di massimizzare la loro dimensione totale. I due timbri di inchiostro devono essere inseriti all'interno dell'imballaggio, devono essere quadrati allineati all'asse e non devono sovrapporre­si (potranno comunque toccarsi, avendo solo punti in comune). Nota con $A_p$ la superficie più grande che Roman può ottenere se prima applica un timbro di inchiostro di dimensioni massime, poi un secondo nello spazio che rimane; e con $A_{\\text{dis}}$ la superficie totale più grande che può ottenere se può posizionare i due timbri di inchiostro come desidera, a condizione che siano disconnessi.\n\n3. Abbiamo sempre $A_p = A_{\\text{dis}}$? Se no, quale può essere il rapporto $A_{\\text{dis}}/A_p$?\n\n4. Qual è il valore di $A_{\\text{dis}}$ se il pacchetto è:\n - Un rettangolo di lati $a$ e $b$ (con $a \\neq b$), i cui lati sono paralleli agli assi?\n - Un disco di raggio $r$?\n - Un triangolo rettangolare di uguali pollice le cui gambe, di lunghezza $a$, sono parallele agli assi?\n\n5. Supponiamo ora che il pacchetto sia un poligono convex. Trova, in funzione del numero di lati del poligono, i valori possibili per il rapporto $A_{\\text{dis}}/A_p$.\n\n6. Ora ci rendiamo conto che i francobolli di inchiostro non si riproducono bene se si toccano, quindi Roman impone ora che l'unione di due francobolli di inchiostro di dimensioni arbitrarie, quando li colloca, non deve essere sovrapponibile (i due francobolli di inchiostro non contano più come lo stesso mescolamento, cioè non devono sovrapporre o toccare un segmento). Qual è il valore di $A_{\\text{dis}}$ se il pacchetto è:\n - Un rettangolo di lati $a$ e $b$ (con $a \\neq b$), i cui lati sono paralleli agli assi?\n - Un disco di raggio $r$?\n - Un triangolo rettangolare di uguali braccia le cui gambe, di lunghezza $a$, sono parallele agli assi?\n\n7. Risolvi il problema se non è più possibile richiedere che i timbri di inchiostro siano allineati all'asse. In particolare, trovare le forme di confezione che consentono Roman di posizionare 2 timbri di inchiostro la cui superficie totale aumenta il più possibile.\n\n8. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2023__Q01.png]]

[[src_tfjm_2023__Q01]]
