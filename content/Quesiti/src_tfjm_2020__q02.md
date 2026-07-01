---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020 — Quesito 2
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2020__Q02
parent: src_tfjm_2020
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2020
family: tfjm
year: '2020'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '2'
summary: Minimum suitcase length to pack n square tiles perfectly or near-rotationally
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_geometria_piana
methods:
  - method_casework
  - method_estremalita
  - method_conteggio
skills:
  - skill_conteggio_sistematico
  - skill_modellizzazione
  - skill_stima
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2020
  - livello/TFJM²
  - topic/combinatoria
  - topic/geometria_piana
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Minimum suitcase length to pack n square tiles perfectly or near-rotationally*

> Pauline wants to pack her belongings into the boot of her car before leaving on holidays.
> 
> She has a suitcase of real side length $L$, together with $n$ square tiles each of a certain real height and width, initially placed so that the height of each tile is parallel to a side of the suitcase. A **perfect packing** of the suitcase is an arrangement of a certain number of tiles that do not overlap inside the suitcase so that no tile has been rotated. A **near-rotation packing** is an arrangement of tiles that do not overlap inside the suitcase so that each tile has been rotated by exactly one quarter turn and no other rotation. In Figure 4, three packings with $n = 3$ tiles of dimensions $1 \times 3$, $2 \times 2$, and $3 \times 1$ are shown: a perfect packing, a near-rotation packing to the right, and an invalid packing where two tiles overlap and one exceeds the suitcase.
> 
> **1.** What is the minimum length $L$ needed to obtain a perfect packing with $n$ square tiles of side $1$? We will start by studying the cases $n \le 10$.
> 
> **2.** What is the minimum length $L$ needed to obtain a perfect packing with $n$ rectangular tiles of dimensions $1 \times h$ for a fixed $h$? We will start by studying the cases $n \le 10$.
> 
> **3.** Same question, but for a near-rotation packing. We will start by studying the case $h = 2, 3$, then the case where $h$ is any integer, and finally the case where $h$ is any real number.
> 
> **4.** Let $n$ be an integer. Pauline has a suitcase of side $L$ and takes $n$ tiles of side $1$. Then her friend Franck chooses to rotate some of the tiles. What is the smallest $L$ such that there exists a choice of tiles for Pauline for which Franck can always obtain a perfect packing? We will start by studying the cases $n \le 6$.
> 
> **5.** What is the smallest $0 \le x \le 1$ such that it is always possible to obtain a compatible packing with $n$ tiles using a fraction $x$ of the total tiles used for the packing, and $L$ is the length of the suitcase? Same question for a near-rotation packing.
> 
> **6.** Franck has a suitcase of size $1 \times h$ with $h$ fixed. His friend wants to play a turn, having placed a certain number of tiles. From what minimum suitcase size $L$ can Franck always obtain a packing? We will start by studying the cases $n = 2, 3$, then the case $h$ integer, and finally the general case $h$ real.
> 
> **7.** Propose and study other avenues of research.

![[src_tfjm_2020__Q02.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_casework|Casework]], [[method_estremalita|Estremalità]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_modellizzazione|Modellizzazione]], [[skill_stima|Stima]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1J8zHKpO1Q-BosuE3UiWvjA4Arny60DJ4/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


< MSK0/>Lunghezza minima della valigia per confezionare n piastrelle quadrate perfettamente o quasi in rotazione< MSK1/>

> Pauline vuole mettere le sue cose nella valigia della sua auto prima di partire per le vacanze.
> 
> Ha una valigia di lunghezza laterale reale $L$, insieme a piastrelle quadrate $n$ di una determinata altezza e larghezza reale, inizialmente posizionate in modo che l'altezza di ciascuna piastrella sia parallela a una parte della valigia. L'imballaggio **perfetto** della valigia è un'impostazione di un certo numero di piastrelle che non si sovrappongono all'interno della valigia in modo che nessuna piastrella sia stata rotata. L'imballaggio **pro-rotation** è un'impostazione di piastrelle che non si sovrappongono all'interno della valigia in modo che ciascuna piastrella sia stata girata esattamente un quarto di turno e senza altra rotazione. Nella figura 4 sono mostrate tre imballaggi con piastrelle $n = 3$ di dimensioni $1 \times 3$, $2 \times 2$ e $3 \times 1$: un imballaggio perfetto, un imballaggio a rotazione a destra e un imballaggio non valido in cui due piastrelle si sovrappongono e una supera la valigia.
> 
> Qual è la lunghezza minima < MSK0/> necessaria per ottenere un imballaggio perfetto con < MSK1/> piastrelle quadrate laterali < MSK2/>? Inizieremo studiando i casi < MSK3/>.
> 
> Qual è la lunghezza minima < MSK0/> necessaria per ottenere un imballaggio perfetto con piastrelle rettangolari < MSK1/> di dimensioni < MSK2/> per un < MSK3/> fisso? Inizieremo studiando i casi < MSK4/>.
> 
> **3.** La stessa domanda, ma per un imballaggio a rotazione. Inizieremo studiando il caso $h = 2, 3$, poi il caso in cui $h$ è qualsiasi numero intero, e infine il caso in cui $h$ è qualsiasi numero reale.
> 
> **4. ** $n$ sia un numero intero. Pauline ha una valigia laterale < MSK1/> e porta piastrelle laterali < MSK2/> < MSK3/>. Poi il suo amico Franck sceglie di girare alcune piastrelle. Qual è il più piccolo $L$ tale che esista una scelta di piastrelle per Pauline per le quali Franck può sempre ottenere un imballaggio perfetto? Inizieremo studiando i casi < MSK5/>.
> 
> **5.** Qual è la $0 \le x \le 1$ più piccola tale che sia sempre possibile ottenere un imballaggio compatibile con le piastrelle $n$ utilizzando una frazione $x$ del totale delle piastrelle utilizzate per l'imballaggio, e $L$ è la lunghezza della valigia? La stessa domanda per un imballaggio a quasi rotazione.
> 
> < MSK6/> 6. < MSK7/> Franck dispone di una valigia di dimensioni < MSK0/> con < MSK1/> fissata. Il suo amico vuole giocare un turno, dopo aver posto un certo numero di piastrelle. Da quale dimensione minima della valigia < MSK2/> può sempre ottenere Franck un imballaggio? Inizieremo studiando i casi $n = 2, 3$, poi il caso $h$ intero e infine il caso generale $h$ reale.
> 
> **7.** Proporre e studiare altre vie di ricerca.

![[src_tfjm_2020__Q02.png]]

[[src_tfjm_2020__Q02]]
