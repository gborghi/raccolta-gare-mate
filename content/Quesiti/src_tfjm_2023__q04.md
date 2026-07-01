---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023 — Quesito 4
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2023__Q04
parent: src_tfjm_2023
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2023
family: tfjm
year: '2023'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '4'
summary: >-
  Resolution-change operation on a strip of n notes producing m notes/silences;
  reachability and minimal operations, then 2D image version
qa_score: '2'
topics:
  - topic_combinatoria
  - topic_insiemi_funzioni
methods:
  - method_casework
  - method_invarianti
  - method_conteggio
skills:
  - skill_lettura_attenta
  - skill_riconoscimento_pattern
  - skill_modellizzazione
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2023
  - livello/TFJM²
  - topic/combinatoria
  - topic/insiemi_funzioni
  - gara/squadre
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Resolution-change operation on a strip of n notes producing m notes/silences; reachability and minimal operations, then 2D image version*

> Distorted music (Musique déformée). Perrine plays with an audio montage software. She arranges an initial strip of one minute holding $n$ distinct notes placed end to end, each of duration $1/n$. The software offers a feature to change the resolution of the strip. Perrine chooses a new resolution $m \\geqslant 1$, and the software creates a new strip of one minute holding $m$ notes chosen as follows: for each $k$ with $1 \\leqslant k \\leqslant m$, the software looks at the instant $k/m$ on the old strip. If this instant falls strictly inside an old note, it copies that note into the new strip; if it falls exactly between two notes (where one note ends and the next begins), it puts a silence in the new strip. If the instant falls inside an old silence, the new note is a silence too.\n\nFigure 5 shows a resolution change passing from $n = 4$ to $m = 7$. Each cell represents one note; colors represent different notes; white corresponds to a silence.\n\nPerrine is interested in the strips obtained after several successive transformations of this kind.\n\n1. For each of the following events, say whether it can or cannot happen after a finite number of operations:\n   a) A note disappears from the strip.\n   b) Two notes that were distinct become the same.\n   c) A silence appears.\n   d) A silence disappears.\n   e) The notes are no longer all the same.\n   f) The strip no longer contains any silence.\n\n2. For each of the cases of the preceding question, what is the minimal number of operations that produce that result, as a function of $n$?\n\n3. Choose $1 \\leqslant k \\leqslant n$. Redo questions 1 and 2 if Perrine forbids herself from creating a strip of length strictly less than $k$, that is, with strictly fewer than $k$ notes (not necessarily distinct).\n\n4. The software can now work only with strips whose length is odd.\n   a) Is it possible for a silence to appear?\n   b) Starting from a strip of length 1, Perrine performs a sequence of operations to go from a strip of length 1 to a strip of length 1. Is it possible that the initial strip and the final strip be different?\n   c) Starting from $n$ notes, Perrine performs a sequence of operations keeping the number of notes never below $n$ and returning to a strip of $n$ notes. How many different notes can the final strip hold? More generally, which are the possible final strips?\n\n5. Redo question 4 restricting oneself to odd lengths.\n\nPerrine now manipulates not strips but images. Her image is 1 metre by 1 metre, made of $n \\times n'$ rectangles of size $1/n \\times 1/n'$ of different colors. The software can transform an image of $n \\times n'$ rectangles into one of $m \\times m'$ rectangles of size $1/m \\times 1/m'$ as follows: for each $1 \\leqslant k \\leqslant m$ and $1 \\leqslant k' \\leqslant m'$, the software looks at the center of the new rectangle $(k, k')$. If this point falls inside a rectangle of the old image, it copies that color into the new rectangle. If the point falls exactly between two rectangles of the old image, the new rectangle becomes black.\n\n6. Redo all the preceding questions in this framework.\n\n7. Propose and study other lines of research.

![[src_tfjm_2023__Q04.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_insiemi_funzioni|Insiemi e funzioni]]
**Metodo:** [[method_casework|Casework]], [[method_invarianti|Invarianti]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_lettura_attenta|Lettura attenta]], [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_modellizzazione|Modellizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Algebra e Analisi]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1Zgbgw16aZEai2bo8kAUFHAI-ffQz7IA5/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*operazione di variazione della risoluzione su una striscia di n note che produce m note/silenzi; operazione di accessibilità e minima, quindi versione di immagine 2D*

> Musica distorta (Musique déformée). Perrine gioca con un software audio. Si dispone di una striscia iniziale di un minuto contenente $n$ note distinte poste da capo a capo, ciascuna di durata $1/n$. Il software offre una funzione per modificare la risoluzione della striscia. Perrine sceglie una nuova risoluzione $m \\geqslant 1$ e il software crea una nuova striscia di un minuto contenente le note $m$ scelte come segue: per ogni $k$ con $1 \\leqslant k \\leqslant m$, il software guarda l'istante $k/m$ sulla vecchia striscia. Se questo istante cade strettamente all'interno di una nota vecchia, copia quella nota nella nuova striscia; se cade esattamente tra due note (dove una nota termina e la prossima inizia), mette un silenzio nella nuova striscia. Se l'istante cade dentro un vecchio silenzio, la nuova nota è anche un silenzio.\n\nLa figura 5 mostra un cambiamento di risoluzione passando da $n = 4$ a $m = 7$. Ogni cella rappresenta una nota; i colori rappresentano note diverse; il bianco corrisponde a un silenzio. Perrine è interessato alle strisce ottenute dopo diverse successive trasformazioni di questo tipo. Per ciascuno dei seguenti eventi, dire se può o non può accadere dopo un numero finito di operazioni:\n a) Una nota scompare dalla striscia.\n b) Due note che erano distinte diventano le stesse.\n c) Un silenzio appare.\n d) Un silenzio scompare.\n e) Le note non sono più tutte le stesse.\n f) La striscia non contiene più alcun silenzio.\n\n2. Per ciascuno dei casi della domanda precedente, qual è il numero minimo di operazioni che producono tale risultato, come funzione di $n$?\n\n3. Selezionare < MSK10/>. Redo le domande 1 e 2 se Perrine si proibisce di creare una striscia di lunghezza strettamente inferiore a $k$, cioè con note strettamente inferiori a $k$ (non necessariamente distinte). Il software può ora lavorare solo con strisce la cui lunghezza è strana.\n a) È possibile che si verifichi un silenzio?\n b) Partendo da una striscia di lunghezza 1, Perrine esegue una sequenza di operazioni per passare da una striscia di lunghezza 1 a una striscia di lunghezza 1. È possibile che la striscia iniziale e la striscia finale siano diverse?\n c) Partendo dalle note $n$, Perrine esegue una sequenza di operazioni mantenendo il numero di note mai inferiore a $n$ e tornando a una striscia di note $n$. Quante note diverse può contenere la striscia finale? Più in generale, quali sono le possibili strisce finali? Redo domanda 4 limitarsi a lunghezze strane. Perrine ora non manipola strisce ma immagini. La sua immagine è di 1 metro su 1 metro, fatta di rettangoli $n \\times n'$ di dimensioni $1/n \\times 1/n'$ di diversi colori. Il software può trasformare un'immagine dei rettangoli $n \\times n'$ in uno dei rettangoli $m \\times m'$ di dimensioni $1/m \\times 1/m'$ come segue: per ogni $1 \\leqslant k \\leqslant m$ e $1 \\leqslant k' \\leqslant m'$, il software guarda al centro del nuovo rettangolo $(k, k')$. Se questo punto cade all'interno di un rettangolo della vecchia immagine, copia quel colore nel nuovo rettangolo. Se il punto cade esattamente tra due rettangoli della vecchia immagine, il nuovo rettangolo diventa nero. Riprendi tutte le domande precedenti in questo quadro. Proporre e studiare altre linee di ricerca.

![[src_tfjm_2023__Q04.png]]

[[src_tfjm_2023__Q04]]
