---
title: Gara Nazionale Classi Prime 2019 — Quesito 13
tipo: quesito
quesito_id: quesito_src_garaprime_2019__Q13
parent: src_garaprime_2019
competition: Gara Nazionale Classi Prime 2019
family: archimede
year: '2019'
level: Classi Prime
country: Italia
modalita: individuale
quesito: '13'
summary: Numero di tassellazioni 4x4 con vincolo sul segmento
answer: A
topics:
  - topic_combinatoria
methods:
  - method_conteggio
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2019
  - topic/combinatoria
  - gara/individuale
---

*Numero di tassellazioni 4x4 con vincolo sul segmento*

![[src_garaprime_2019__prob13.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.8]
  \draw (0,0) grid (4,4);
  \draw[line width=2pt] (1,2) -- (3,2);
\end{tikzpicture}
\end{document}
```

> Trovare in quanti modi diversi è possibile ricoprire completamente la seguente
> griglia 4 × 4 con tasselli 1 × 2, con la restrizione che i tasselli non possono essere
> messi a cavallo del segmento orizzontale segnato in grassetto.
> figura 2
> I tasselli possono essere ruotati ma non possono essere sovrapposti.
> A 26
> B 12
> C 32
> D 45
> E 30
> F 36

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.1](https://drive.google.com/file/d/1GTzdagqUQpCUSYBLrYJmJaKl7DQUIbtK/view)
