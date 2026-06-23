---
title: Kangourou 2016 Junior (gara marzo) — Quesito 23
tipo: quesito
quesito_id: quesito_src_kangourou_2016_junior_marzo__Q23
parent: src_kangourou_2016_junior_marzo
competition: Kangourou 2016 Junior (gara marzo)
family: kangourou
year: '2016'
level: kangourou
country: Italia
modalita: individuale
quesito: '23'
summary: Minimo mosse per trasformare quadrato 5x5 in scacchiera
answer: B
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_colorazione
  - method_invarianti
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2016
  - livello/kangourou
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---

*Minimo mosse per trasformare quadrato 5x5 in scacchiera*

![[src_kangourou_2016_junior_marzo__prob23.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.5]
  \draw (0,0) grid (5,5);
  \draw[->, thick] (5.5,2.5) -- (6.5,2.5);
  \fill[gray!50] (8,0) rectangle (9,1);
  \fill[gray!50] (10,0) rectangle (11,1);
  \fill[gray!50] (7,1) rectangle (8,2);
  \fill[gray!50] (9,1) rectangle (10,2);
  \fill[gray!50] (11,1) rectangle (12,2);
  \fill[gray!50] (8,2) rectangle (9,3);
  \fill[gray!50] (10,2) rectangle (11,3);
  \fill[gray!50] (7,3) rectangle (8,4);
  \fill[gray!50] (9,3) rectangle (10,4);
  \fill[gray!50] (11,3) rectangle (12,4);
  \fill[gray!50] (8,4) rectangle (9,5);
  \fill[gray!50] (10,4) rectangle (11,5);
  \draw (7,0) grid (12,5);
\end{tikzpicture}
\end{document}
```

> Immagina un quadrato diviso in 
> 25 celle uguali. All’istante iniziale tutte le celle sono bianche, come 
> mostra il disegno a sinistra. A ogni 
> mossa puoi cambiare il colore di 
> una coppia di celle aventi un lato in 
> comune: le celle bianche diventano 
> scure e viceversa. Qual è il minimo numero di mosse che permette di trasformare il 
> quadrato in una scacchiera colorata come nella figura a destra?
> A) 11	
> 	
> B) 12	
> 	
> C) 13	
> 	
> D) 14	
> 	
> E) 15

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_colorazione|Colorazione / parita]], [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** [apri PDF p.4](https://drive.google.com/file/d/1_FimVNCqMCQXAOhr2PasYRnLSdpOMrZS/view)
