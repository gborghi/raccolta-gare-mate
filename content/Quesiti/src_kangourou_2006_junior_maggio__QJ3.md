---
tipo: quesito
quesito_id: quesito_src_kangourou_2006_junior_maggio__QJ3
parent: src_kangourou_2006_junior_maggio
competition: Kangourou 2006 Junior finale (maggio)
family: kangourou
year: '2006'
level: kangourou
country: Italia
modalita: individuale
quesito: J3
summary: Minimo numero di colori per gli spicchi
answer: '5'
topics:
  - topic_combinatoria
methods:
  - method_colorazione
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2006
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---

# Kangourou 2006 Junior finale (maggio) — Quesito J3

*Minimo numero di colori per gli spicchi*

![[src_kangourou_2006_junior_maggio__probJ3.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \draw[line width=1pt] (0,0) circle (2);
  \draw[line width=1pt] (2,0) -- (-2,0);
  \draw[line width=1pt] (1.41421,1.41421) -- (-1.41421,-1.41421);
  \draw[line width=1pt] (0,2) -- (0,-2);
  \draw[line width=1pt] (-1.41421,1.41421) -- (1.41421,-1.41421);
\end{tikzpicture}
\end{document}
```

> Un cerchio è stato diviso in un certo numero di spicchi (almeno 4), ad esempio come in figura. Sei stato incaricato di colorare l'interno di ogni spicchio in modo che tra due spicchi di ugual colore ce ne siano sempre almeno due di colore diverso, ma non conosci il numero degli spicchi del cerchio (quello in figura è solo un esempio!). Qual è il più piccolo numero di colori che ti garantirà di riuscirci, indipendentemente dal numero degli spicchi? (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** 5
**Fonte:** apri PDF p.1
