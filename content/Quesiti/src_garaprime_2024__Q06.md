---
tipo: quesito
quesito_id: quesito_src_garaprime_2024__Q06
parent: src_garaprime_2024
competition: IX Gara Nazionale Classi Prime 2024
family: archimede
year: '2024'
level: ''
country: Italia
quesito: '6'
summary: Lunghezza PB in triangolo rettangolo con angoli 30-60
answer: B
topics:
  - topic_geometria_piana
skills:
  - skill_ragionamento_geometrico
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2024
  - topic/geometria_piana
---

# IX Gara Nazionale Classi Prime 2024 — Quesito 6

*Lunghezza PB in triangolo rettangolo con angoli 30-60*

![[src_garaprime_2024__prob6.png]]

```tikz
\begin{document}
\begin{tikzpicture}
  \coordinate (B) at (0,0);
  \coordinate (A) at (5.196,0);
  \coordinate (C) at (0,3);
  \coordinate (P) at (1.732,0);
  \draw (A) -- (B) -- (C) -- cycle;
  \draw (C) -- (P);
  \draw (0,0.3) -- (0.3,0.3) -- (0.3,0);
  \fill (A) circle (2pt);
  \fill (B) circle (2pt);
  \fill (C) circle (2pt);
  \fill (P) circle (2pt);
  \node[below right] at (A) {$A$};
  \node[below left] at (B) {$B$};
  \node[above left] at (C) {$C$};
  \node[below] at (P) {$P$};
\end{tikzpicture}
\end{document}
```

> Sia 𝐴𝐵𝐶 un triangolo con 𝐵̂ = 90°, 𝐴̂ = 30°, e sia 𝑃 un punto di 𝐴𝐵 tale che l’angolo 𝐶𝑃̂𝐵 sia uguale a 60°. 
> Se 𝐴𝑃= 30 cm, quanto è lungo 𝑃𝐵 in cm? 
> A) 10 
> B) 15 
> C) 20 
> D) 25 
> E) 30 
> 
> La risposta corretta è la B 
> Si consideri il triangolo 𝐴𝑃𝐶. Esso è isoscele sulla base 𝐴𝐶 in quanto 𝐴̂ = 30° per 
> ipotesi, 𝐴𝑃̂𝐶= 180° −60° = 120° e quindi 𝐴𝐶̂𝑃= 30°. Il triangolo 𝐵𝑃𝐶 è la metà 
> di un triangolo equilatero, con 𝑃𝐶= 30 cm e 𝑃𝐵, essendo il lato opposto a 𝐵𝐶̂𝑃=
> 30°, è uguale a metà ipotenusa, vale a dire 15 cm.

**Topic:** [[topic_geometria_piana|Geometria piana]]
**Abilita:** [[skill_ragionamento_geometrico|Ragionamento geometrico]]
**Area:** [[Geometria]]
**Risposta:** B
**Fonte:** apri PDF p.2
