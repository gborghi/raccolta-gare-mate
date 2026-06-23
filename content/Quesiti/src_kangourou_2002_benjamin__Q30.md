---
title: Kangourou 2002 - Benjamin (21 marzo) — Quesito 30
tipo: quesito
quesito_id: quesito_src_kangourou_2002_benjamin__Q30
parent: src_kangourou_2002_benjamin
competition: Kangourou 2002 - Benjamin (21 marzo)
family: kangourou
year: '2002'
level: kangourou
country: Italia
modalita: individuale
quesito: '30'
summary: Numeri al centro con somme uguali
answer: D
topics:
  - topic_logica
  - topic_combinatoria
methods:
  - method_casework
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2002
  - livello/kangourou
  - topic/logica
  - topic/combinatoria
  - gara/individuale
---

*Numeri al centro con somme uguali*

![[src_kangourou_2002_benjamin__prob30.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw (0,0) circle (0.3);
  \foreach \angle in {0, 60, 120, 180, -60, -120} {
    \draw (0,0) -- ({1.5*cos(\angle)},{1.5*sin(\angle)});
    \draw ({1.5*cos(\angle)},{1.5*sin(\angle)}) circle (0.3);
  }
  \foreach \angle in {60, 120, -60, -120} {
    \draw[dashed] (0,0) -- ({1.5*cos(\angle)},{1.5*sin(\angle)});
  }
\end{tikzpicture}
\end{document}
```

> Si vogliono posizionare i numeri da 1 a 7 nei cerchi della figura (un numero per 
> ogni cerchio) in modo che si ottenga la stessa somma ogni volta che 3 cerchi sono 
> allineati. Quale delle seguenti affermazioni è vera? 
>  
> A. è impossibile farlo   
>  
>  
>  
>  
>      
> B. vi è un solo numero che può occupare il cerchio 
> centrale  
> C. vi sono esattamente due numeri diversi che possono 
> occupare il cerchio centrale 
> D. vi sono esattamente tre numeri diversi che possono 
> occupare il cerchio centrale 
> E. tutti i sette numeri possono occupare il cerchio centrale. 
>  
>  
> 
> Kangourou  Italia
> Gara del 21 marzo 2002
> Categoria Benjamin
> Per studenti di prima e seconda media
> Soluzioni
> La risposta corretta è segnalata tra parentesi quadre
> dopo il numero di quesito.

**Topic:** [[topic_logica|Logica, giochi, strategie]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** D
**Fonte:** [apri PDF p.6](https://drive.google.com/file/d/1jYYXJGhHffMLtALFoMgGAMJJN9-K9CZ1/view)
