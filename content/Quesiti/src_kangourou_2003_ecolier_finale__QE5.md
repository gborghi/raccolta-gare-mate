---
tipo: quesito
quesito_id: quesito_src_kangourou_2003_ecolier_finale__QE5
parent: src_kangourou_2003_ecolier_finale
competition: Kangourou 2003 Ecolier finale nazionale
family: kangourou
year: '2003'
level: kangourou
country: Italia
quesito: E5
summary: Inserire 1..9 con somme 20 attorno ai vertici
answer: due soluzioni
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_casework
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2003
  - livello/kangourou
  - topic/combinatoria
  - topic/logica
---

# Kangourou 2003 Ecolier finale nazionale — Quesito E5

*Inserire 1..9 con somme 20 attorno ai vertici*

![[src_kangourou_2003_ecolier_finale__probE5.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
  \draw (0,0) grid (3,3);
  \filldraw (1,1) circle (3pt);
  \filldraw (2,1) circle (3pt);
  \filldraw (1,2) circle (3pt);
  \filldraw (2,2) circle (3pt);
  \node at (1.5,1.5) {\textbf{5}};
  \node at (2.5,0.5) {\textbf{3}};
\end{tikzpicture}
\end{document}
```

> La figura che ti viene proposta rappresenta un quadrato ottenuto accostando 9 quadrati più piccoli. Devi inserire tutti i numeri da $1$ a $9$, uno per ogni quadrato, in modo che la somma dei quattro numeri che circondano ciascuno dei vertici interni, segnati con un pallino nero, valga $20$. Come vedi, i numeri $3$ e $5$ sono già stati posizionati: inserisci i rimanenti. (vedi figura)

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** due soluzioni
**Fonte:** apri PDF p.1
