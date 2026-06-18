---
tipo: quesito
quesito_id: quesito_src_kangourou_2019_cadet_semif__Q07
parent: src_kangourou_2019_cadet_semif
competition: Kangourou 2019 Semifinale Cadet
family: kangourou
year: '2019'
level: kangourou
country: Italia
modalita: individuale
quesito: '7'
summary: Quanti diversi decori di esagoni con triangolini colorati
answer: B
topics:
  - topic_combinatoria
methods:
  - method_conteggio
  - method_simmetria
skills:
  - skill_conteggio_sistematico
tags:
  - kg/quesito
  - paese/italia
  - comp/kangourou
  - anno/2019
  - livello/kangourou
  - topic/combinatoria
  - gara/individuale
---

# Kangourou 2019 Semifinale Cadet — Quesito 7

*Quanti diversi decori di esagoni con triangolini colorati*

![[src_kangourou_2019_cadet_semif__prob7.png]]

```tikz
\begin{document}
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (2,0);
  \coordinate (C) at (1,1.732);
  \coordinate (M) at (1,0.577);
  \fill[gray!50] (A) -- (C) -- (M) -- cycle;
  \fill[gray!50] (B) -- (C) -- (M) -- cycle;
  \fill[white] (A) -- (B) -- (M) -- cycle;
  \draw[thick] (A) -- (B) -- (C) -- cycle;
  \draw[thick] (A) -- (M);
  \draw[thick] (B) -- (M);
  \draw[thick] (C) -- (M);
\end{tikzpicture}
\end{document}
```

> (Punti 5) Accostando sei triangoli equilateri uguali si ottiene un esagono rego­
> lare. Supponi che i triangoli equilateri di partenza siano ripartiti ciascuno in tre 
> triangolini (uguali) con un vertice nel centro del triangolo equilatero, di cui due 
> grigi e uno bianco (vedi figura). Supponi di accostarli in modo che lungo ciascu­
> no dei lati di congiunzione dei triangoli equilateri compaiano sempre triangolini 
> di ugual colore. Quanti diversi “decori” di esagoni potresti ottenere?
> A) 6	
> 	
> B) 5	
> 	
> C) 4	
> 	
> D) 3	
> 	
> E) 2

**Topic:** [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_conteggio|Conteggio combinatorio]], [[method_simmetria|Sfruttamento della simmetria]]
**Abilita:** [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Risposta:** B
**Fonte:** apri PDF p.1
