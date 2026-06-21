---
title: Kangourou 2008 - Cadet (gara 28 marzo) — Quesito 16
tipo: quesito
quesito_id: quesito_src_kangourou_2008_cadet_marzo__Q16
parent: src_kangourou_2008_cadet_marzo
competition: Kangourou 2008 - Cadet (gara 28 marzo)
family: kangourou
year: '2008'
level: kangourou
country: Italia
modalita: individuale
quesito: '16'
summary: Spezzate che dividono il quadrato in due aree uguali
answer: D
topics:
  - topic_geometria_piana
  - topic_combinatoria
methods:
  - method_casework
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2008
  - livello/kangourou
  - topic/geometria_piana
  - topic/combinatoria
  - gara/individuale
---

*Spezzate che dividono il quadrato in due aree uguali*

![[src_kangourou_2008_cadet_marzo__prob16.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw[step=1,gray!60,thin] (0,0) grid (4,4);
  \draw[thick] (0,0) rectangle (4,4);
  \foreach \c/\r in {3/0, 1/1, 3/2, 1/3, 3/4}{
    \fill (\c, 4-\r) circle (5pt);
  }
\end{tikzpicture}
\end{document}
```

> Su questa griglia sono evidenziati 5 punti. Fra
> tutte le spezzate congiungenti i 5 punti formate da 4
> segmenti consecutivi, quante sono quelle che suddividono il quadrato in due regioni di uguale area?  
> A) 0 
> B) 1 
> C) 2 
> D) 3 
> E) 4
> 1
> 2
> 3
> 4
> 5
> Testi_08.qxp  9-03-2008  14:56  Pagina 18
> 
> Pag. 
> Pag. 19
> 19
> Kang 2008
> Kang 2008
> Cadet

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** D
**Fonte:** apri PDF p.3
