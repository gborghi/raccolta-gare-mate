---
title: Kangourou 2016 Student (gara marzo) — Quesito 29
tipo: quesito
quesito_id: quesito_src_kangourou_2016_student_marzo__Q29
parent: src_kangourou_2016_student_marzo
competition: Kangourou 2016 Student (gara marzo)
family: kangourou
year: '2016'
level: kangourou
country: Italia
modalita: individuale
quesito: '29'
summary: Minimo mosse per scacchiera 5x5 con triple consecutive
answer: A
topics:
  - topic_combinatoria
  - topic_logica
methods:
  - method_colorazione
skills:
  - skill_casework_accurato
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2016
  - livello/kangourou
  - topic/combinatoria
  - topic/logica
  - gara/individuale
---

*Minimo mosse per scacchiera 5x5 con triple consecutive*

![[src_kangourou_2016_student_marzo__prob29.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \def\s{0.5}
  \foreach \i in {0,...,4} {
    \foreach \j in {0,...,4} {
      \draw (\i*\s, \j*\s) rectangle (\i*\s+\s, \j*\s+\s);
    }
  }
  \draw[->, very thick] (2.8, 1.25) -- (3.5, 1.25);
  \begin{scope}[xshift=4cm]
    \foreach \i in {0,...,4} {
      \foreach \j in {0,...,4} {
        \pgfmathparse{int(mod(\i+\j,2))}
        \ifnum\pgfmathresult=1
          \fill[gray!50] (\i*\s, \j*\s) rectangle (\i*\s+\s, \j*\s+\s);
        \fi
        \draw (\i*\s, \j*\s) rectangle (\i*\s+\s, \j*\s+\s);
      }
    }
  \end{scope}
\end{tikzpicture}
\end{document}
```

> Immaginate un quadrato suddiviso in 25 celle uguali. All’istante 
> iniziale tutte le celle sono bianche. 
> Con ogni mossa si può cambiare il 
> colore delle celle di un blocco di tre 
> celle consecutive su una fila o su una 
> colonna: ogni cella bianca diventa 
> scura e viceversa. È possibile trasformare il quadrato in una scacchiera colorata come 
> in figura e in tal caso qual è il minimo numero di mosse necessarie? 
> A) Sì e il numero minimo è minore di 10.	
> 	
> B) Sì e il numero minimo è 10. 	
> 	
> C) Sì e il numero minimo è 12. 	
> 	
> 	
> D) Sì e il numero minimo è maggiore di 12.  	
> 	
> E) Non è possibile.
> A
> M
> D
> B
> C
> A
> D
> N
> B’
> C’
> A’
> D’
> B’
> C’
> 
> Kangourou 2016
> pagina 31
> STUDENT

**Topic:** [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_colorazione|Colorazione / parita]]
**Abilita:** [[skill_casework_accurato|Casework accurato]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** A
**Fonte:** [apri PDF p.5](https://drive.google.com/file/d/1zFNaB4eXTmk_79yqwwb93XC49Kv8Vke-/view)
