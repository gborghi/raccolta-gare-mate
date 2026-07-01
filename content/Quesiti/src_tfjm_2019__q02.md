---
title: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019 — Quesito 2
tipo: quesito
lang: en
quesito_id: quesito_src_tfjm_2019__Q02
parent: src_tfjm_2019
competition: Tournoi Français des Jeunes Mathématiciens (TFJM²) 2019
family: tfjm
year: '2019'
level: TFJM²
country: Francia
modalita: a squadre
quesito: '2'
summary: >-
  Three friends sharing two bicycles to minimize the time for all to reach the
  end of a path
qa_score: '3'
topics:
  - topic_algebra
  - topic_combinatoria
methods:
  - method_estremalita
  - method_casework
skills:
  - skill_modellizzazione
  - skill_manipolazione_algebrica
  - skill_stima
tags:
  - kg/quesito
  - paese/francia
  - comp/tfjm
  - anno/2019
  - livello/TFJM²
  - topic/algebra
  - topic/combinatoria
  - gara/squadre
---
<div class="qlang-switch" data-default="en"></div>


*Three friends sharing two bicycles to minimize the time for all to reach the end of a path*

> Martin, Anna and Carole decide to go for a walk by bicycle. They discover that Martin forgot to lock his bicycle, which was stolen. To return, they have only two bicycles for three people, and they want to reach a point. One considers a person who moves on foot at speed $1$ and on a bicycle at speed $v \in \mathbb{R}$, $v > 1$. Initially, the three friends and their two bicycles are at the starting point. At any moment, a walker may take a bicycle if and only if it is at the same point on the path (a walker may walk next to a bicycle while pushing it), and at no moment may a walker move backward. A walker who sets down a bicycle leaves it there where it is and continues on foot. One supposes the walkers never go back.\n\nLet $v=2$; one possible organization is the following. At departure ($t=0$), Anna and Carole start on bicycles; Martin starts on foot. At time $t=1/4$, at the half of the path, Carole sets down her bicycle and continues on foot, while Anna continues on bicycle. At time $t=1/2$, Martin picks up the bicycle left by Carole, and Anna arrives at the end of the path. Finally, at time $t=3/4$, Martin and Carole arrive at the same time at the end of the path. The trajectory is represented on Figure 5. The walkers seek to minimize the duration $T$ necessary so that all three arrive at the end of the path. In the example, $T=3/4$.\n\n\textbf{1.} Given $v$, what is $T_{\min}$, the smallest value possible for $T$? Give an example of an organization such that $T=T_{\min}$.\n\n\textbf{2.} Henceforth there are $n$ walkers and $k$ bicycles, with $0 < k < n$. What does $T_{\min}$ equal as a function of $v$, $k$ and $n$? How does one reach the minimum? One may begin with the cases $k=1$, $k=2$ and $k=n-1$.\n\n\textbf{3.} Henceforth, the walkers are authorized to go backward on bicycle and to transport with them an additional bicycle (but not on foot). Take up the previous questions, if this allows improving $T_{\min}$.\n\n\textbf{4.} One supposes now that there are climbs and descents. A bicycle going alone on a slope moves at speed $p \in \mathbb{R}$, with $p > 0$ on a descent and $p < 0$ on a climb, that is to say going up the bicycle rolls back. Take up the previous questions in this case, as a function of the parameter $p$.\n\n\textbf{5.} The walkers have $k$ rollerblades of speed $v$ and $\ell$ rollerblades that advance at speed $w$. Take up the previous questions in this case.\n\n\textbf{6.} Propose and study other avenues of research.

![[src_tfjm_2019__Q02.png]]

**Topic:** [[topic_algebra|Algebra]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_estremalita|Estremalità]], [[method_casework|Casework]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi]], [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/17R031cXNi14VUsGINAxDROVxCLgJqOX-/view)


<span class="qlang-split" data-lang="it"></span>


Tre amici condividono due biciclette per ridurre al minimo il tempo per raggiungere la fine di un percorso

> Martin, Anna e Carole decidono di fare una passeggiata in bicicletta. Scoprono che Martin ha dimenticato di chiudere la bicicletta, che era stata rubata. Per tornare, hanno solo due biciclette per tre persone, e vogliono raggiungere un punto. Si considera una persona che si muove a piedi a velocità $1$ e su una bicicletta a velocità $v \in \mathbb{R}$, $v > 1$. Inizialmente, i tre amici e le loro due biciclette sono al punto di partenza. In qualsiasi momento, un passeggero può prendere una bicicletta se e solo se si trova nello stesso punto del sentiero (un passeggero può camminare accanto a una bicicletta mentre la spinge), e in nessun momento può muoversi indietro. Un passeggero che scende una bicicletta la lascia lì dove è e continua a piedi. Si suppone che i camminatori non tornino mai indietro. Alla partenza ($t=0$), Anna e Carole partono in bicicletta; Martin parte a piedi. Al tempo $t=1/4$, a metà percorso, Carole scende la bicicletta e continua a piedi, mentre Anna continua a biciclare. Al tempo $t=1/2$, Martin raccoglie la bicicletta lasciata da Carole, e Anna arriva alla fine del sentiero. Infine, al tempo $t=3/4$, Martin e Carole arrivano allo stesso tempo alla fine del sentiero. La traiettoria è rappresentata nella figura 5. I passeggeri cercano di ridurre al minimo la durata $T$ necessaria per arrivare tutti e tre alla fine del percorso. Nell'esempio, $T=3/4$.\n\n\textbf{1.} Dato $v$, qual è $T_{\min}$, il valore più piccolo possibile per $T$? Fornisci un esempio di un'organizzazione tale che $T=T_{\min}$.\n\n\textbf{2.} D'ora in poi ci siano $n$ passeggeri e $k$ biciclette, con $0 < k < n$. Cosa è uguale a $T_{\min}$ come funzione di $v$, $k$ e $n$? Come si arriva al minimo? Si può iniziare con i casi $k=1$, $k=2$ e $k=n-1$.\n\n\textbf{3.} D'ora in poi, i passeggiatori sono autorizzati a tornare indietro in bicicletta e a trasportare con loro una bicicletta aggiuntiva (ma non a piedi). Prendiamo le domande precedenti, se questo consente di migliorare $T_{\min}$.\n\n\textbf{4.} Si suppone ora che ci siano alti e discendenti. Una bicicletta che va da sola su una pendenza si muove a velocità $p \in \mathbb{R}$, con $p > 0$ in discesa e $p < 0$ in salita, cioè in salita la bicicletta ruota indietro. Prendiamo le domande precedenti in questo caso, in funzione del parametro $p$.\n\n\textbf{5.} I camminatori hanno $k$ lamelle a rotazione $v$ e $\ell$ lamelle a rotazione che avanzano a velocità $w$. Prendi le domande precedenti in questo caso. Proponi e studia altre vie di ricerca.

![[src_tfjm_2019__Q02.png]]

[[src_tfjm_2019__Q02]]
