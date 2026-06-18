---
tipo: quesito
quesito_id: quesito_src_cesenatico_2001_squadre__Q05
parent: src_cesenatico_2001_squadre
competition: Gara Nazionale a Squadre Cesenatico 2001
family: archimede
year: '2001'
level: squadre
country: Italia
modalita: squadre
quesito: '5'
summary: Lunghezza DC in triangolo rettangolo con lati interi
answer: '0020'
topics:
  - topic_geometria_piana
methods:
  - method_fattorizzazione
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2001
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

# Gara Nazionale a Squadre Cesenatico 2001 — Quesito 5

*Lunghezza DC in triangolo rettangolo con lati interi*

![[src_cesenatico_2001_squadre__prob5.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (A) at (0,0);
  \coordinate (B) at (5,0);
  \coordinate (C) at (0,6);
  \coordinate (D) at (2.25,3.3);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (A) -- (D);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above left] at (C) {$C$};
  \node[above right] at (D) {$D$};
\end{tikzpicture}
\end{document}
```

> **Il parco** (40 punti)
> 
> Nel parco davanti al parlamento c'è un'aiuola a forma di triangolo rettangolo tagliata in due parti dalla strada che porta all'ingresso del Senato (vedi figura). I lati dell'aiuola, il tratto di strada $AD$ e i lati $BD$ e $DC$ hanno lunghezza intera e $BC$ misura 40 imometri. Quanti imometri misura $DC$ (scrivere 0 se i dati sono insufficienti a risolvere il problema)?
> 
> (vedi figura)

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_fattorizzazione|Fattorizzazione / manipolazione algebrica]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 0020
**Fonte:** apri PDF p.1
