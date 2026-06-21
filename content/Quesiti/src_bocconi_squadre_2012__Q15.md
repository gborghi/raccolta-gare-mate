---
title: Gara a Squadre 2012 — Quesito 15
tipo: quesito
quesito_id: quesito_src_bocconi_squadre_2012__Q15
parent: src_bocconi_squadre_2012
competition: Gara a Squadre 2012
family: bocconi
year: '2012'
level: Gara a Squadre
country: Italia
modalita: a squadre
quesito: '15'
summary: Numero nella riga 1001 e colonna 2002 di una grande matrice
qa_score: '3'
answer: '1081'
topics:
  - topic_combinatoria
  - topic_aritmetica
methods:
  - method_ricorsione
  - skill_riconoscimento_pattern
skills:
  - skill_riconoscimento_pattern
  - skill_conteggio_sistematico
  - skill_astrazione
tags:
  - kg/quesito
  - paese/italia
  - comp/gara-squadre
  - anno/2012
  - livello/gara-squadre
  - topic/combinatoria
  - topic/aritmetica
  - gara/squadre
---

*Numero nella riga 1001 e colonna 2002 di una grande matrice*

> Riempite le caselle della tabella rettangolare con dei numeri interi non negativi, rispettando le seguenti regole.
> 
> Per la prima riga:
> - in alto, a sinistra, scrivete $0$; dopo non si potrà più mettere $0$ né nella prima riga, né nella prima colonna;
> - nella casella successiva della prima riga, scrivete $1$ (il primo numero possibile); dopo, non si potrà più mettere $1$ né nella prima riga né nella seconda colonna;
> - e così via (la prima riga conterrà dunque, in ordine, tutti i numeri interi non negativi).
> 
> Per la seconda riga:
> - nella prima colonna scrivete $1$ (è il primo numero possibile, dato che $0$ figura già in quella colonna);
> - nella seconda colonna scrivete $0$ (è il primo numero possibile);
> - nella terza colonna scrivete $3$ (è il primo numero possibile, dato che $0$ e $1$ compaiono già nella stessa riga e $2$ compare già nella terza colonna);
> - e così via, andando avanti allo stesso modo nella seconda riga e in quelle successive.
> 
> **Quale numero figurerà nell'intersezione tra la 1001.esima riga e la 2002.esima colonna?**

![[src_bocconi_squadre_2012__Q15.png]]

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_aritmetica|Aritmetica / Teoria dei Numeri]]
**Metodo:** [[method_ricorsione|Ricorsione]], [[skill_riconoscimento_pattern|skill_riconoscimento_pattern]]
**Abilita:** [[skill_riconoscimento_pattern|Riconoscimento di pattern]], [[skill_conteggio_sistematico|Conteggio sistematico]], [[skill_astrazione|Astrazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Aritmetica e Teoria dei Numeri]]
**Risposta:** 1081
**Fonte:** apri PDF
