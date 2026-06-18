---
tipo: quesito
quesito_id: quesito_src_kangourou_2002_junior__Q28
parent: src_kangourou_2002_junior
competition: Kangourou 2002 - Junior (21 marzo)
family: kangourou
year: '2002'
level: kangourou
country: Italia
quesito: '28'
summary: V con vertice assegnato tra 7 punti
answer: E
topics:
  - topic_combinatoria
  - topic_geometria_piana
methods:
  - method_conteggio
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2002
  - livello/kangourou
  - topic/combinatoria
  - topic/geometria_piana
---

# Kangourou 2002 - Junior (21 marzo) — Quesito 28

*V con vertice assegnato tra 7 punti*

![[src_kangourou_2002_junior__prob28.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (P1) at (2,0);
  \coordinate (P2) at (1,1.732);
  \coordinate (P3) at (-1,1.732);
  \coordinate (P4) at (-2,0);
  \coordinate (P5) at (-1,-1.732);
  \coordinate (P6) at (1,-1.732);
  \coordinate (O) at (0,0);
  \foreach \p in {P1,P2,P3,P4,P5,P6,O} \fill (\p) circle (2.5pt);
\end{tikzpicture}
\end{document}
```

> Diciamo che tre punti non allineati formano una “V con vertice 
> assegnato” se uno di essi (il vertice, appunto) è equidistante dagli 
> altri due. Quante “V con vertice assegnato” si riescono ad 
> individuare in un insieme di 7 punti, 6 dei quali siano i vertici di 
> un esagono regolare e il settimo sia il centro dello stesso esagono?
>  
>  
>  
>  
> A. 6  
> B. 18  
> C. 20  
> D. 30  
> E. 36

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** E
**Fonte:** apri PDF p.6
