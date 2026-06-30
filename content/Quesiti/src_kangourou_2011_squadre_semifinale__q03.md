---
title: Kangourou 2011 squadre semifinale turno A — Quesito 3
tipo: quesito
quesito_id: quesito_src_kangourou_2011_squadre_semifinale__Q03
parent: src_kangourou_2011_squadre_semifinale
competition: Kangourou 2011 squadre semifinale turno A
family: kangourou
year: '2011'
level: squadre
country: Italia
modalita: squadre
quesito: '3'
summary: Misura angolo X con tre quadrati nel rettangolo
answer: '41'
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2011
  - livello/squadre
  - topic/geometria_piana
  - gara/squadre
---

*Misura angolo X con tre quadrati nel rettangolo*

![[src_kangourou_2011_squadre_semifinale__prob3.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.35]
\pgfmathsetmacro{\H}{3.0}
\pgfmathsetmacro{\tI}{60}
\pgfmathsetmacro{\sI}{\H/(sin(\tI)+cos(\tI))}
\pgfmathsetmacro{\AxI}{0}
\pgfmathsetmacro{\AyI}{0}
\pgfmathsetmacro{\BxI}{\AxI+\sI*cos(\tI)}
\pgfmathsetmacro{\ByI}{\sI*sin(\tI)}
\pgfmathsetmacro{\CxI}{\BxI-\sI*sin(\tI)}
\pgfmathsetmacro{\CyI}{\H}
\pgfmathsetmacro{\DxI}{\AxI-\sI*sin(\tI)}
\pgfmathsetmacro{\DyI}{\sI*cos(\tI)}
\pgfmathsetmacro{\tII}{26}
\pgfmathsetmacro{\sII}{\H/(sin(\tII)+cos(\tII))}
\pgfmathsetmacro{\AxII}{\BxI}
\pgfmathsetmacro{\AyII}{0}
\pgfmathsetmacro{\BxII}{\AxII+\sII*cos(\tII)}
\pgfmathsetmacro{\ByII}{\sII*sin(\tII)}
\pgfmathsetmacro{\CxII}{\BxII-\sII*sin(\tII)}
\pgfmathsetmacro{\CyII}{\H}
\pgfmathsetmacro{\DxII}{\AxII-\sII*sin(\tII)}
\pgfmathsetmacro{\DyII}{\sII*cos(\tII)}
\pgfmathsetmacro{\tIII}{41}
\pgfmathsetmacro{\sIII}{\H/(sin(\tIII)+cos(\tIII))}
\pgfmathsetmacro{\AxIII}{\BxII}
\pgfmathsetmacro{\AyIII}{0}
\pgfmathsetmacro{\BxIII}{\AxIII+\sIII*cos(\tIII)}
\pgfmathsetmacro{\ByIII}{\sIII*sin(\tIII)}
\pgfmathsetmacro{\CxIII}{\BxIII-\sIII*sin(\tIII)}
\pgfmathsetmacro{\CyIII}{\H}
\pgfmathsetmacro{\DxIII}{\AxIII-\sIII*sin(\tIII)}
\pgfmathsetmacro{\DyIII}{\sIII*cos(\tIII)}
\draw[thick] (\DxI,0) rectangle (\BxIII,\H);
\draw[thick] (\AxI,\AyI)--(\BxI,\ByI)--(\CxI,\CyI)--(\DxI,\DyI)--cycle;
\draw[thick] (\AxII,\AyII)--(\BxII,\ByII)--(\CxII,\CyII)--(\DxII,\DyII)--cycle;
\draw[thick] (\AxIII,\AyIII)--(\BxIII,\ByIII)--(\CxIII,\CyIII)--(\DxIII,\DyIII)--cycle;
\draw[thin] (\AxI,0.42) arc[start angle=90, end angle=\tI, radius=0.42];
\node at (\AxI+0.30, 0.20) {$30^\circ$};
\draw[thin] (\BxI-0.42, \ByI) arc[start angle=180, end angle=180+\tI, radius=0.42];
\node at (\BxI-0.62, \ByI-0.25) {$60^\circ$};
\draw[thin] (\AxII, 0.42) arc[start angle=90, end angle=\tII, radius=0.42];
\node at (\AxII+0.38, 0.22) {$64^\circ$};
\draw[thin] (\BxII-0.42, \ByII) arc[start angle=180, end angle=180+\tII, radius=0.42];
\node at (\BxII-0.65, \ByII-0.18) {$26^\circ$};
\draw[thin] (\AxIII, 0.42) arc[start angle=90, end angle=\tIII, radius=0.42];
\node at (\AxIII+0.36, 0.22) {$49^\circ$};
\draw[thin] (\BxIII-0.42, \ByIII) arc[start angle=180, end angle=180+\tIII, radius=0.42];
\node at (\BxIII-0.60, \ByIII-0.20) {$X$};
\end{tikzpicture}
\end{document}
```

> Tre quadrati   
> All’interno di un rettangolo sono stati collocati 3 quadrati disposti come in figura. Di alcuni degli 
> angoli formati dai vari lati presenti sono  indicate le misure in gradi (la figura è puramente 
> indicativa, non rispetta esattamente le misure dichiarate). Quanto vale la misura in gradi indicata 
> con X?

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** 41
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1sDVUENqsCj11vO1wooUKYy2R9tmA16Nf/view)
