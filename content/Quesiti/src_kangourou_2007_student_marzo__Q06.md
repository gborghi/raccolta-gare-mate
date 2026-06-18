---
tipo: quesito
quesito_id: quesito_src_kangourou_2007_student_marzo__Q06
parent: src_kangourou_2007_student_marzo
competition: Kangourou 2007 Student (marzo)
family: kangourou
year: '2007'
level: kangourou
country: Italia
quesito: '6'
summary: Rapporto lunghezze dei due percorsi semicirconferenze
answer: C
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2007
  - livello/kangourou
  - topic/geometria_piana
---

# Kangourou 2007 Student (marzo) — Quesito 6

*Rapporto lunghezze dei due percorsi semicirconferenze*

![[src_kangourou_2007_student_marzo__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (1,0);
  \coordinate (C) at (2,0);
  \coordinate (D) at (3,0);
  \coordinate (E) at (4,0);
  \draw (A) -- (E);
  \draw (B) -- ++(0,0.08) -- ++(0,-0.16);
  \draw (C) -- ++(0,0.08) -- ++(0,-0.16);
  \draw (D) -- ++(0,0.08) -- ++(0,-0.16);
  \draw (A) arc (180:0:2);
  \draw (A) arc (180:360:1.5);
  \draw (D) arc (180:360:0.5);
  \node[below left] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[below] at (C) {$C$};
  \node[below] at (D) {$D$};
  \node[below right] at (E) {$E$};
\end{tikzpicture}
\end{document}
```

> Il segmento AE è diviso in 4 parti uguali dai punti ordinati B, C e D. Si disegna al di sopra del segmento AE una
> semicirconferenza di diametro AE mentre al di sotto del
> medesimo segmento si disegnano due semicirconferenze
> di diametro rispettivamente AD e DE (v. figura).
> Considera il percorso da A ad E lungo la semicirconferenza superiore e quello lungo l’unione delle due semicirconferenze inferiori: qual
> è il rapporto tra le lunghezze dei due percorsi, presi nell’ordine?
> A) 1:2
> B) 2:3
> C) 1:1
> D) 3:2
> E)2:1

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** C
**Fonte:** apri PDF p.2
