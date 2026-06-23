---
title: Kangourou Categoria Cadet 2024 — Quesito 25
tipo: quesito
quesito_id: quesito_src_kangourou_2024_cadet__Q25
parent: src_kangourou_2024_cadet
competition: Kangourou Categoria Cadet 2024
family: kangourou
year: '2024'
level: kangourou
country: Italia
modalita: individuale
quesito: '25'
summary: In quanti modi scegliere n nel diagramma di prodotti (720)
answer: D
topics:
  - topic_aritmetica
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2024
  - livello/kangourou
  - topic/aritmetica
  - topic/combinatoria
  - gara/individuale
---

*In quanti modi scegliere n nel diagramma di prodotti (720)*

![[src_kangourou_2024_cadet__prob25.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.8]
  \draw (1,2) rectangle (2,3); \node at (1.5,2.5) {720};
  \draw (0.5,1) rectangle (1.5,2);
  \draw (1.5,1) rectangle (2.5,2);
  \draw (0,0) rectangle (1,1);
  \draw (1,0) rectangle (2,1); \node at (1.5,0.5) {$n$};
  \draw (2,0) rectangle (3,1);
\end{tikzpicture}
\end{document}
```

> Osserva la figura: sotto ogni casella A della prima e della seconda riga (dall’alto) ci sono due caselle, B e C. Daniele vuole inserire 
> un numero in ogni casella del diagramma in modo che ogni casella 
> A contenga il prodotto dei numeri contenuti nelle corrispondenti 
> caselle B e C. In particolare vuole che la casella della prima riga 
> contenga 720. In quanti diversi modi può scegliere il numero n ?
> A) 1 
>  
> B) 4 
>  
> C) 5 
>  
> D) 6 
>  
> E) 8
> n
> 720
> 

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1MSOLULdwCM2QkMs69fhcUApvbxNyfKS9/view)
