---
title: Kangourou 2022 Student — Finale (risposta aperta) — Quesito S1
tipo: quesito
quesito_id: quesito_src_kangourou_2022_student_finale__QS1
parent: src_kangourou_2022_student_finale
competition: Kangourou 2022 Student — Finale (risposta aperta)
family: kangourou
year: '2022'
level: kangourou
country: Italia
modalita: individuale
quesito: S1
summary: Tessere 2×1 al massimo su regione di 36 quadratini
answer: '15'
topics:
  - topic_combinatoria
  - topic_geometria_piana
methods:
  - method_colorazione
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2022
  - livello/kangourou
  - topic/combinatoria
  - topic/geometria_piana
  - gara/individuale
---

*Tessere 2×1 al massimo su regione di 36 quadratini*

![[src_kangourou_2022_student_finale__probS1.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=0.5]
  % Staircase pyramid: 6 rows (1,3,5,7,9,11 squares top to bottom) = 36 total
  \foreach \i in {0,...,10} { \draw (\i,0) rectangle (\i+1,1); }
  \foreach \i in {1,...,9}  { \draw (\i,1) rectangle (\i+1,2); }
  \foreach \i in {2,...,8}  { \draw (\i,2) rectangle (\i+1,3); }
  \foreach \i in {3,...,7}  { \draw (\i,3) rectangle (\i+1,4); }
  \foreach \i in {4,...,6}  { \draw (\i,4) rectangle (\i+1,5); }
  \draw (5,5) rectangle (6,6);
  % 2x1 tile legend
  \draw (8.5,5) rectangle (9.5,6);
  \draw (9.5,5) rectangle (10.5,6);
  \node at (9.5,4.5) {\small $2{\times}1$};
\end{tikzpicture}
\end{document}
```

> In figura vedi una regione di piano ottenuta accostando 36 quadratini tutti uguali fra loro e una tessera ottenuta accostando due quadratini identici a quelli della regione. Quante tessere di questo tipo puoi disporre al massimo nella regione in modo che ognuna copra esattamente due quadratini della regione e non si sovrappongano (neppure parzialmente)? Puoi utilizzare la figura per indicare come disporre le tessere, ma ricorda che devi anche giustificare il motivo per il quale non ne puoi collocare un numero maggiore. (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_geometria_piana|Geometria piana]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Risposta:** 15
**Fonte:** apri PDF p.1
