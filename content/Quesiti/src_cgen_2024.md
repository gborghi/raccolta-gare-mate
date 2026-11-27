---
title: Concours Général des Lycées 2024 — Matematica
tipo: gara
competition: Concours Général des Lycées 2024 — Matematica
family: concours_generale
year: '2024'
level: Concours Général
---
<div class="atom-reader" data-gara="Quesiti/src_cgen_2024"></div>



<span class="atom-split" id="q01" data-atom="q01" data-title="Quesito 1" data-tags="topic_algebra,topic_insiemi_funzioni,topic_funzionali,method_induzione,method_disuguaglianze,method_ricorsione,skill_manipolazione_algebrica,skill_lettura_attenta,skill_stima"></span>

<div class="qlang-switch" data-default="fr"></div>


*Suite $u_{n+1}=\frac{1}{n+1}+\sqrt{u_n}$ : positivité, monotonie, convergence et asymptotique*

> **Problème 1 : étude d’une suite**
>
> Pour tout réel $\alpha \ge 0$, on appelle suite associée à $\alpha$ la suite $(u_n)$ définie par $u_0 = \alpha$ et
> $$u_{n+1} = \frac{1}{n+1} + \sqrt{u_n}$$
> pour tout entier $n \ge 0$.
>
> **Partie 1 : Généralités**
>
> 1. Soit $\alpha$ un réel positif. Démontrer que la suite $(u_n)$ associée à $\alpha$ vérifie $u_n \ge 0$ pour tout entier $n \ge 0$.
>
> 2. Soient $\alpha$ et $\beta$ deux réels tels que $0 \le \alpha \le \beta$. On note $(u_n)$ la suite associée à $\alpha$ et $(v_n)$ la suite associée à $\beta$. Démontrer que $u_n \le v_n$ pour tout entier $n \ge 0$.
>
> 3. On note $(w_n)$ la suite associée à $0$. Démontrer que $w_n \ge 1$ pour tout entier $n \ge 1$.
>
> 4. Soit $\alpha$ un réel positif ou nul. On suppose que la suite $(u_n)$ associée à $\alpha$ converge vers un réel $\ell$. Déterminer la valeur de $\ell$.
>
> 5. Soit $\alpha$ un réel tel que $\alpha > \dfrac{3+\sqrt{5}}{2}$. Justifier que la suite associée à $\alpha$ est strictement décroissante. Que peut-on en déduire en termes de convergence ?
>
> **Partie 2 : Un cas particulier**
>
> Dans toute cette partie, on note $(t_n)$ la suite associée à $4$ et on définit la suite $(s_n)$ par $s_n = n(t_n - 1)$ pour tout entier $n \ge 0$.
>
> 6. Démontrer, pour tout entier $n \ge 1$, l’encadrement
> $$1 + \frac{2}{n} \le t_n \le 1 + \frac{3}{n}.$$
>
> 7. Démontrer, pour tout entier $n \ge 1$, l’encadrement
> $$2 \le s_n \le 2 + \frac{6}{n}.$$
>
> 8. Déterminer la limite de $\dfrac{t_n - 1 - \dfrac{2}{n}}{\dfrac{1}{n}}$ quand $n$ tend vers $+\infty$.
>
> **Partie 3 : Retour au cas général**
>
> 9. Soit $\alpha$ un réel positif ou nul. La suite $(u_n)$ associée à $\alpha$ est-elle convergente ?
>
> 10. Déterminer la limite de $\dfrac{u_n - 1 - \dfrac{2}{n}}{\dfrac{1}{n}}$ quand $n$ tend vers $+\infty$.

**Topic:** [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_funzionali|Équations fonctionnelles]]
**Metodo:** [[method_induzione|Induzione]], [[method_disuguaglianze|Disuguaglianze]], [[method_ricorsione|Récursion]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta]], [[skill_stima|Stima]]
**Area:** [[Algebra e Analisi|Algèbre et analyse]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1c1cSoVwqMLgL0IF4BNA5JRS_DbCgZRxy/view)


<div class="qlang-split" data-lang="it"></div>


*Successione $u_{n+1}=\frac{1}{n+1}+\sqrt{u_n}$: positività, monotonia, convergenza e asintotica*

> **Problema 1: studio di una successione**
>
> Per ogni reale $\alpha \ge 0$, si chiama successione associata a $\alpha$ la successione $(u_n)$ definita da $u_0 = \alpha$ e
> $$u_{n+1} = \frac{1}{n+1} + \sqrt{u_n}$$
> per ogni intero $n \ge 0$.
>
> **Parte 1: Generalità**
>
> 1. Sia $\alpha$ un reale positivo. Dimostrare che la successione $(u_n)$ associata a $\alpha$ verifica $u_n \ge 0$ per ogni intero $n \ge 0$.
>
> 2. Siano $\alpha$ e $\beta$ reali tali che $0 \le \alpha \le \beta$. Si indichi con $(u_n)$ la successione associata a $\alpha$ e con $(v_n)$ quella associata a $\beta$. Dimostrare che $u_n \le v_n$ per ogni intero $n \ge 0$.
>
> 3. Si indichi con $(w_n)$ la successione associata a $0$. Dimostrare che $w_n \ge 1$ per ogni intero $n \ge 1$.
>
> 4. Sia $\alpha$ un reale non negativo. Si supponga che la successione $(u_n)$ associata a $\alpha$ converga a un reale $\ell$. Determinare $\ell$.
>
> 5. Sia $\alpha$ un reale tale che $\alpha > \dfrac{3+\sqrt{5}}{2}$. Giustificare che la successione associata a $\alpha$ è strettamente decrescente. Che cosa se ne deduce sulla convergenza?
>
> **Parte 2: Un caso particolare**
>
> In questa parte $(t_n)$ è la successione associata a $4$, e $s_n = n(t_n - 1)$ per ogni intero $n \ge 0$.
>
> 6. Dimostrare che, per ogni intero $n \ge 1$,
> $$1 + \frac{2}{n} \le t_n \le 1 + \frac{3}{n}.$$
>
> 7. Dimostrare che, per ogni intero $n \ge 1$,
> $$2 \le s_n \le 2 + \frac{6}{n}.$$
>
> 8. Determinare il limite di $\dfrac{t_n - 1 - \dfrac{2}{n}}{\dfrac{1}{n}}$ quando $n$ tende a $+\infty$.
>
> **Parte 3: Ritorno al caso generale**
>
> 9. Sia $\alpha$ un reale non negativo. La successione $(u_n)$ associata a $\alpha$ è convergente?
>
> 10. Determinare il limite di $\dfrac{u_n - 1 - \dfrac{2}{n}}{\dfrac{1}{n}}$ quando $n$ tende a $+\infty$.


**Topic:** [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_funzionali|Equazioni funzionali / successioni]]
**Metodo:** [[method_induzione|Induzione]], [[method_disuguaglianze|Disuguaglianze classiche]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_stima|Stima e approssimazione]]
**Area:** [[Algebra e Analisi]]


<div class="qlang-split" data-lang="en"></div>


*Sequence $u_{n+1}=\frac{1}{n+1}+\sqrt{u_n}$: positivity, monotonicity, convergence and asymptotics*

> **Problem 1: study of a sequence**
>
> For every real number $\alpha \ge 0$, the sequence associated with $\alpha$ is the sequence $(u_n)$ defined by $u_0 = \alpha$ and
> $$u_{n+1} = \frac{1}{n+1} + \sqrt{u_n}$$
> for every integer $n \ge 0$.
>
> **Part 1: Generalities**
>
> 1. Let $\alpha$ be a positive real number. Prove that the sequence $(u_n)$ associated with $\alpha$ satisfies $u_n \ge 0$ for every integer $n \ge 0$.
>
> 2. Let $\alpha$ and $\beta$ be real numbers such that $0 \le \alpha \le \beta$. Denote by $(u_n)$ the sequence associated with $\alpha$ and by $(v_n)$ the sequence associated with $\beta$. Prove that $u_n \le v_n$ for every integer $n \ge 0$.
>
> 3. Denote by $(w_n)$ the sequence associated with $0$. Prove that $w_n \ge 1$ for every integer $n \ge 1$.
>
> 4. Let $\alpha$ be a nonnegative real number. Suppose that the sequence $(u_n)$ associated with $\alpha$ converges to a real number $\ell$. Determine $\ell$.
>
> 5. Let $\alpha$ be a real number such that $\alpha > \dfrac{3+\sqrt{5}}{2}$. Justify that the sequence associated with $\alpha$ is strictly decreasing. What can be deduced about convergence?
>
> **Part 2: A particular case**
>
> In this part, $(t_n)$ is the sequence associated with $4$, and $s_n = n(t_n - 1)$ for every integer $n \ge 0$.
>
> 6. Prove that, for every integer $n \ge 1$,
> $$1 + \frac{2}{n} \le t_n \le 1 + \frac{3}{n}.$$
>
> 7. Prove that, for every integer $n \ge 1$,
> $$2 \le s_n \le 2 + \frac{6}{n}.$$
>
> 8. Determine the limit of $\dfrac{t_n - 1 - \dfrac{2}{n}}{\dfrac{1}{n}}$ as $n$ tends to $+\infty$.
>
> **Part 3: Back to the general case**
>
> 9. Let $\alpha$ be a nonnegative real number. Does the sequence $(u_n)$ associated with $\alpha$ converge?
>
> 10. Determine the limit of $\dfrac{u_n - 1 - \dfrac{2}{n}}{\dfrac{1}{n}}$ as $n$ tends to $+\infty$.


**Topic:** [[topic_algebra|Algebra]], [[topic_insiemi_funzioni|Sets and functions]], [[topic_funzionali|Functional equations / sequences]]
**Metodo:** [[method_induzione|Induction]], [[method_disuguaglianze|Classical inequalities]], [[method_ricorsione|Recursion]]
**Abilita:** [[skill_manipolazione_algebrica|Algebraic manipulation]], [[skill_lettura_attenta|Careful reading]], [[skill_stima|Estimation and approximation]]
**Area:** [[Algebra e Analisi|Algebra and analysis]]



<span class="atom-split" id="q02" data-atom="q02" data-title="Quesito 2" data-tags="topic_probabilita,topic_combinatoria,topic_logica,method_casework,method_conteggio,method_ricorsione,skill_modellizzazione,skill_casework_accurato,skill_lettura_attenta,skill_conteggio_sistematico"></span>

<div class="qlang-switch" data-default="fr"></div>


*Probability game with opaque boxes hiding candies; Monty-Hall-style choices, optimal strategies for Sophie and Germain over n-1 rounds*

> ## Problème 2 : bonbons cachés
>
> ### Partie 1 : Sophie et Germain testent trois boîtes
>
> Germain dispose de trois boîtes opaques. Il propose un jeu à Sophie qui pourrait permettre à cette dernière de gagner un paquet de bonbons.
>
> 1. Dans un premier temps, après avoir caché un paquet de bonbons dans l’une de ces boîtes en laissant les deux autres boîtes vides, Germain propose à Sophie de choisir une de ces trois boîtes et de l’ouvrir pour en remporter le contenu éventuel.
>
> Comme les boîtes sont opaques, Sophie en choisit une au hasard.
>
> Avec quelle probabilité choisit-elle la boîte contenant le paquet de bonbons ?
>
> 2. Dans un second temps, après avoir caché à nouveau un paquet de bonbons dans l’une de ces trois boîtes en laissant les deux autres boîtes vides, Germain propose à Sophie un jeu qui comporte deux tours :
>
> - Au premier tour, Sophie choisit une des trois boîtes disposées devant elle, la désigne à Germain mais ne l’ouvre pas.
> - Au second tour, Germain élimine une boîte vide parmi les deux boîtes que Sophie n’a pas choisies, puis laisse à Sophie la possibilité de modifier son choix.
>
> Une fois ce second tour achevé, Sophie ouvre la boîte qu’elle a choisie et découvre si elle a gagné le paquet de bonbons.
>
> a. Si, au second tour, Sophie décide de conserver le choix fait au premier tour, quelle probabilité a-t-elle de gagner ?
>
> b. Si, au second tour, elle décide de modifier le choix fait au premier tour, quelle probabilité a-t-elle de gagner ?
>
> c. Quelle est la meilleure stratégie pour Sophie : conserver son choix initial, ou le modifier ?
>
> Dans toute la suite du problème, soit $n$ un entier supérieur ou égal à $3$.
>
> Germain dispose de $n$ boîtes opaques, numérotées par un entier entre $1$ et $n$. Avant le début du jeu, il cache un paquet de bonbons dans l’une de ces boîtes ; les $n-1$ autres boîtes sont vides.
>
> Sophie et Germain vont jouer selon plusieurs règles différentes.
>
> L’enjeu pour Sophie est dans tous les cas de choisir une boîte en maximisant la probabilité de gagner le paquet de bonbons.
>
> ### Partie 2 : Une stratégie pour Sophie
>
> 3. Après que Germain a caché un paquet de bonbons dans l’une de ces boîtes, un premier jeu se déroule en deux tours :
>
> - Au premier tour de jeu, Sophie choisit une boîte, la désigne à Germain mais ne l’ouvre pas.
> - Au second tour, Germain élimine $n-2$ boîtes vides parmi les $n-1$ boîtes que Sophie n’a pas choisies, et laisse à Sophie la possibilité de modifier son choix.
>
> Une fois ce second tour achevé, Sophie ouvre la boîte qu’elle a choisie et découvre si elle a gagné le paquet de bonbons.
>
> a. Avec quelle probabilité Sophie a-t-elle choisi la boîte gagnante au premier tour de jeu ?
>
> b. Au second tour, Sophie a-t-elle intérêt à conserver son choix initial ou à modifier son choix ?
>
> Pour corser la situation, Sophie et Germain inventent un second jeu qui se déroule maintenant en $n-1$ tours.
>
> Avant le début du jeu, Germain cache un paquet de bonbons dans une des boîtes.
>
> Au premier tour : Sophie choisit l’une de ces boîtes, la désigne à Germain mais ne l’ouvre pas. Pour chaque $\ell$ entier entre $2$ et $n-1$ :
>
> - Lors du $\ell$-ième tour de jeu : Germain élimine, selon son bon plaisir, une boîte parmi les boîtes vides autres que celle que Sophie a choisie au tour précédent ; puis il laisse à Sophie la possibilité de modifier son choix.
>
> Une fois ces $n-1$ tours de jeu écoulés Sophie ouvre la boîte qu’elle a choisie au dernier tour et découvre si elle a gagné le paquet de bonbons.
>
> À partir de maintenant, et jusqu’à la fin de ce problème, Sophie et Germain jouent à ce jeu.
>
> 4. a. Si Sophie décide de conserver son choix initial pendant les $n-1$ tours, quelle probabilité a-t-elle de gagner ?
>
> b. Comment peut-elle procéder pour s’assurer de gagner avec probabilité au moins $(n-1)/n$ ?
>
> ### Partie 3 : Une stratégie pour Germain
>
> Soit un entier $n \ge 3$. Germain et Sophie continuent de jouer à ce même jeu en $n-1$ tours. Germain souhaite empêcher Sophie de gagner avec une probabilité strictement supérieure à $(n-1)/n$. Pour cela, il adopte la stratégie suivante :
>
> - Avant le début du jeu, Germain sélectionne au hasard la boîte dans laquelle il cache le paquet de bonbons.
> - À partir du second tour du jeu et jusqu’à la fin, Germain élimine une boîte qu’il sélectionne au hasard parmi les boîtes vides (et non encore éliminées) autres que celle que Sophie vient de choisir.
>
> Pour un entier $\ell$ tel que $1 \le \ell \le n-1$, on note $s_\ell$ le numéro de la boîte qu’a choisie Sophie lors du $\ell$-ième tour de jeu.
>
> Pour un entier $\ell$ tel que $2 \le \ell \le n-1$, on note $g_\ell$ le numéro de la boîte qu’a éliminée Germain lors du $\ell$-ième tour de jeu.
>
> Plaçons-nous au tour $\ell$ après que Germain a éliminé la boîte numéro $g_\ell$.
>
> Soit $b$ le numéro d’une boîte non encore éliminée ; on note $p_\ell(b)$ la probabilité, connaissant les numéros $s_1, s_2, \ldots, s_{\ell-1}$ et $g_2, g_3, \ldots, g_\ell$, que la boîte numéro $b$ contienne le paquet de bonbons.
>
> 5. Donner, pour tout entier $b$ tel que $1 \le b \le n$, la probabilité $p_1(b)$.
>
> 6. Soit $\ell$ un entier tel que $2 \le \ell \le n-1$, et soit $b$ un numéro de boîte distinct de $g_2, g_3, \ldots, g_\ell$. Démontrer :
> $$\frac{p_\ell(s_{\ell-1})}{p_\ell(b)} = \frac{n-\ell}{n+1-\ell} \cdot \frac{p_{\ell-1}(s_{\ell-1})}{p_{\ell-1}(b)}.$$
>
> 7. Soit $\ell$ un entier tel que $2 \le \ell \le n-1$, et soit $b$ et $c$ deux numéros de boîtes distincts de $g_2, g_3, \ldots, g_\ell$. Démontrer :
> $$p_\ell(b) \ge \frac{n-\ell}{n-1}\, p_\ell(c).$$
>
> 8. En déduire que, si Germain applique la stratégie présentée ci-dessus, Sophie ne pourra jamais s’assurer de gagner avec une probabilité strictement supérieure à $(n-1)/n$.
>
> ### Partie 4 : Une stratégie pour Sophie et Germain
>
> Évariste, un ami de Sophie et Germain, décide de leur donner un paquet de bonbons s’ils refont une dernière partie (toujours sous les mêmes modalités) et si, à l’issue de ce jeu, Sophie trouve la bonne boîte.
>
> Germain a pour obligation de placer le paquet dans une boîte au hasard, sans avoir le droit de communiquer à Sophie la boîte où il a placé le paquet.
>
> Avant de commencer cette ultime partie, Sophie et Germain peuvent discuter d’une stratégie commune.
>
> 9. Pour quelles valeurs de $n \ge 3$, Sophie et Germain peuvent-ils mettre au point une stratégie commune qui assurera à Sophie de trouver la boîte avec le paquet ?

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1c1cSoVwqMLgL0IF4BNA5JRS_DbCgZRxy/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>

*Gioco di probabilità con scatole opache che nascondono dolci, in stile Monty Hall: strategie ottimali per Sophie e Germain su n−1 turni.*

Gioco di probabilità con scatole opache che nascondono dolci; scelte in stile Monty-Hall, strategie ottimali per Sophie e Germain su n-1 round*

> Il problema 2: dolci nascosti.
> 
> Parte 1: Sophie e Germain testano tre scatole.
> 
> Germain ha tre scatole opache. Propone a Sophie un gioco che potrebbe permetterle di vincere un pacchetto di caramelle.
> 
> 1. All'inizio, dopo aver nascosto un pacchetto di caramelle in una delle tre scatole, lascia le tre scatole chiuse davanti a Sophie, che sceglie una di queste scatole a caso per cercare di vincere il contenuto finale. Poiché Sophie non sa quale scatola nasconde i dolci, sceglie a caso. Con quale probabilità Sophie riesce a scegliere la scatola contenente il pacchetto di caramelle?
> 
> 2. In una seconda volta, dopo aver nascosto un nuovo pacchetto di caramelle in una delle tre scatole, Germain fa giocare Sophie come segue: - Al primo passo, Sophie sceglie una delle tre scatole fornite; la designa a Germain ma non cambia nulla. Al secondo passo, Germain elimina una delle scatole che Sophie non ha scelto, lasciando poi a Sophie la possibilità di modificare la sua scelta. Una volta completato questo secondo passo, Sophie apre la scatola che ha scelto e scopre se ha vinto il pacchetto di caramelle.
> 
> a. Con quale probabilità Sophie ha scelto la scatola vincente al primo passo della partita? b. Sophie ha interesse a conservare la sua scelta iniziale o a modificare la sua scelta? c. Qual e' la strategia migliore per Sophie: conservare la sua scelta iniziale, o modificarla?
> 
> In tutto il resto di questo problema, si considera un intero $n$ almeno uguale a $3$. Germain ha scatole opache $n$, numerate da $1$ a $n$. Si nasconde un pacchetto di caramelle in una di queste scatole; le altre scatole $n-1$ sono lasciate vuote. Sophie e Germain giocheranno secondo diverse regole. L'obiettivo di Sophie è, in tutti i casi, scegliere una scatola che massimi la probabilità di vincere il pacchetto di caramelle.
> 
> Parte 2: Una strategia per Sophie.
> 
> 3. Dopo che Germain ha nascosto un pacchetto di caramelle in una delle scatole, per la prima volta lascia le scatole chiuse davanti a Sophie. La partita si svolge in due round: - Al primo round della partita, Sophie sceglie una scatola, la designa a Germain ma non cambia. - Al secondo round, Germain elimina le scatole vuote $n-2$ tra le scatole $n-1$ che Sophie non ha scelto, poi propone a Sophie una delle due scatole rimanenti: la scatola che lei ha designato inizialmente, o la scatola che Germain non ha eliminato. Una volta completato questo secondo round, Sophie apre la scatola che ha scelto e scopre se ha vinto il pacchetto di caramelle.
> 
> a. Con quale probabilità Sophie ha scelto la scatola vincente al primo round della partita? b. La seconda volta, Sophie ha interesse a conservare la sua scelta iniziale o a modificare la sua scelta?
> 
> Per la situazione, Sophie e Germain inventano un secondo gioco che si svolge ora su round $n-1$. Prima dell'inizio della partita, Germain nasconde un pacchetto di caramelle in una delle scatole. Al primo round: Sophie sceglie una delle scatole $n$, la designa a Germain ma non cambia nulla. A ogni round successivo tra $2$ e $n-1$: - Al $\ell$-th round della partita: Germain elimina, a suo piacimento, una scatola tra le scatole vuote diverse da quella scelta da Sophie al round precedente; poi lascia a Sophie la possibilità di modificare la sua scelta. Una volta completati i round $n-1$, Sophie apre la scatola che ha scelto nell'ultimo round e scopre se ha vinto il pacchetto di caramelle. D'ora in poi, e fino alla fine di questo problema, Sophie e Germain giocano a questo gioco.
> 
> a. Se Sophie conserva la sua scelta iniziale durante i round, che probabilità ha di vincere? b. Come può procedere per assicurarsi di vincere con probabilità almeno $(n-1)/n$?
> 
> Parte 3: Una strategia per Germain.
> 
> $n \ge 3$ sia un numero intero. Germain e Sophie continuano a giocare la stessa partita durante i round$n-1$. Germain vuole impedire a Sophie di vincere con una probabilità strettamente superiore a $(n-1)/n$. Per questo, adotta la seguente strategia: prima dell'inizio del gioco, Germain seleziona a caso la scatola in cui nasconde il pacchetto di caramelle.
> 
> 4. Sophie non sa in quale scatola è nascosto il pacchetto di caramelle. Per un round $\ell$ con $1 \le \ell \le n-1$, $g_\ell$ deve essere il numero associato alla casella che Germain elimina al round $\ell$. (Signare $z_1, z_2, \ldots, z_{\ell-1}$ le designazioni successive di Sophie e $g_2, \ldots, g_\ell$ le scatole eliminate.) Signare $p_\ell(b)$ la probabilità, conoscendo i numeri $z_1, z_2, \ldots, z_{\ell-1}$ e $g_2, \ldots, g_\ell$, che il numero di casella $b$ contiene il pacchetto di caramelle.
> 
> 5. Date, per ogni numero intero $b$ tale da $1 \le b \le n$, la probabilità $p_1(b)$.
> 
> 6. $\ell$ sia un numero intero tale che $2 \le \ell \le n-1$, e $b$ sia un numero di casella distinto da $g_2, g_3, \ldots, g_\ell$. Dimostrare che $$\frac{p_\ell(z_{\ell-1})}{p_\ell(b)} = \frac{n-\ell}{n+1-\ell} \cdot \frac{p_{\ell-1}(z_{\ell-1})}{p_{\ell-1}(b)}.$$
> 
> 7. $\ell$ sia un numero intero tale che $2 \le \ell \le n-1$, e $b$ e $c$ siano due numeri di casella distinti da $g_2, g_3, \ldots, g_\ell$. Dimostrare che $$p_\ell(b) = \frac{n-\ell}{n-1}\, p_\ell(c).$$
> 
> 8. Da ciò si deduce che, se Germain applica la strategia sopra presentata, Sophie non può mai garantire la vittoria con una probabilità strettamente superiore a $(n-1)/n$.
> 
> Parte 4: Una strategia per Sophie e Germain.
> 
> Evariste, un'amica di Sophie e Germain, decide di dare loro un pacchetto di caramelle se giocano un'ultima partita (sempre alle stesse condizioni) e se, alla fine di questa partita, Sophie trova la scatola giusta. Germain ha l'obbligo di mettere il pacchetto in una scatola a caso, senza avere il diritto di comunicare a Sophie la scatola in cui ha messo il pacchetto. Prima di iniziare questo gioco finale, Sophie e Germain possono concordare una strategia comune?
> 
> 9. Per quali valori di $n \ge 3$ possono Sophie e Germain ideare una strategia comune che assicuri che Sophie trovi la scatola con il pacchetto?

**Topic:** [[topic_probabilita|Probabilita e statistica]], [[topic_combinatoria|Combinatoria]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_conteggio|Conteggio combinatorio]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta del testo]], [[skill_conteggio_sistematico|Conteggio sistematico]]
**Area:** [[Combinatoria, Logica e Probabilita]]


<div class="qlang-split" data-lang="en"></div>


*Probability game with opaque boxes hiding candies; Monty-Hall-style choices, optimal strategies for Sophie and Germain over n-1 rounds*

> Problem 2: Hidden candies.
> 
> Part 1: Sophie and Germain test three boxes.
> 
> Germain has three opaque boxes. He proposes a game to Sophie that could allow her to win a packet of candies.
> 
> 1. At first, after having hidden a packet of candies in one of the three boxes, he leaves the three boxes closed in front of Sophie, who chooses one of these boxes at random to try to win the eventual content. As Sophie does not know which box hides the candies, she chooses at random. With what probability does Sophie manage to choose the box containing the packet of candies?
> 
> 2. In a second time, after having hidden a new packet of candies in one of the three boxes, Germain makes Sophie play as follows:
> - At the first step, Sophie chooses one of the three boxes provided; she designates it to Germain but changes nothing.
> - At the second step, Germain eliminates one of the boxes that Sophie did not choose, then leaves Sophie the possibility of modifying her choice.
> Once this second step is completed, Sophie opens the box she chose and discovers whether she has won the packet of candies.
> 
> a. With what probability has Sophie chosen the winning box at the first step of the game?
> b. Does Sophie have interest in conserving her initial choice or in modifying her choice?
> c. What is the better strategy for Sophie: conserve her initial choice, or modify it?
> 
> In all the rest of this problem, one considers an integer $n$ at least equal to $3$. Germain has $n$ opaque boxes, numbered from $1$ to $n$. He hides one packet of candies in one of these boxes; the $n-1$ other boxes are left empty. Sophie and Germain will now play following several different rules. The goal for Sophie is, in all cases, to choose a box maximizing the probability of winning the packet of candies.
> 
> Part 2: A strategy for Sophie.
> 
> 3. After Germain has hidden a packet of candies in one of the boxes, in a first time he leaves the $n$ boxes closed in front of Sophie. The game takes place in two rounds:
> - At the first round of the game, Sophie chooses a box, she designates it to Germain but does not change.
> - At the second round, Germain eliminates $n-2$ empty boxes among the $n-1$ boxes that Sophie did not choose, then proposes to Sophie one of the two remaining boxes: the box she designated initially, or the box that Germain did not eliminate.
> Once this second round is completed, Sophie opens the box she chose and discovers whether she has won the packet of candies.
> 
> a. With what probability has Sophie chosen the winning box at the first round of the game?
> b. The second time, does Sophie have interest in conserving her initial choice or in modifying her choice?
> 
> For the situation, Sophie and Germain invent a second game which now takes place over $n-1$ rounds. Before the start of the game, Germain hides a packet of candies in one of the boxes. At the first round: Sophie chooses one of the $n$ boxes, she designates it to Germain but changes nothing. At each following round between $2$ and $n-1$:
> - At the $\ell$-th round of the game: Germain eliminates, as he pleases, one box among the empty boxes other than the one Sophie chose at the preceding round; then he leaves Sophie the possibility of modifying her choice.
> Once the $n-1$ rounds are completed, Sophie opens the box she chose at the last round and discovers whether she has won the packet of candies. From now on, and until the end of this problem, Sophie and Germain play this game.
> 
> a. If Sophie conserves her initial choice during the $n-1$ rounds, what probability does she have of winning?
> b. How can she proceed to ensure she wins with probability at least $(n-1)/n$?
> 
> Part 3: A strategy for Germain.
> 
> Let $n \ge 3$ be an integer. Germain and Sophie continue to play this same game over $n-1$ rounds. Germain wishes to prevent Sophie from winning with a probability strictly greater than $(n-1)/n$. For this, he adopts the following strategy: before the start of the game, Germain selects at random the box in which he hides the packet of candies.
> 
> 4. Sophie does not know which is the box in which the packet of candies is hidden. For a round $\ell$ with $1 \le \ell \le n-1$, let $g_\ell$ be the number associated to the box Germain eliminates at round $\ell$. (Let $z_1, z_2, \ldots, z_{\ell-1}$ denote Sophie's successive designations and $g_2, \ldots, g_\ell$ the eliminated boxes.) Let $p_\ell(b)$ be the probability, knowing the numbers $z_1, z_2, \ldots, z_{\ell-1}$ and $g_2, \ldots, g_\ell$, that the box number $b$ contains the packet of candies.
> 
> 5. Give, for every integer $b$ such that $1 \le b \le n$, the probability $p_1(b)$.
> 
> 6. Let $\ell$ be an integer such that $2 \le \ell \le n-1$, and let $b$ be a box number distinct from $g_2, g_3, \ldots, g_\ell$. Demonstrate that
> $$\frac{p_\ell(z_{\ell-1})}{p_\ell(b)} = \frac{n-\ell}{n+1-\ell} \cdot \frac{p_{\ell-1}(z_{\ell-1})}{p_{\ell-1}(b)}.$$
> 
> 7. Let $\ell$ be an integer such that $2 \le \ell \le n-1$, and let $b$ and $c$ be two box numbers distinct from $g_2, g_3, \ldots, g_\ell$. Demonstrate that
> $$p_\ell(b) = \frac{n-\ell}{n-1}\, p_\ell(c).$$
> 
> 8. Deduce from this that, if Germain applies the strategy presented above, Sophie can never ensure winning with a probability strictly greater than $(n-1)/n$.
> 
> Part 4: A strategy for Sophie and Germain.
> 
> Evariste, a friend of Sophie and Germain, decides to give them a packet of candies if they play one last game (always under the same conditions) and if, at the end of this game, Sophie finds the right box. Germain has the obligation to place the packet in a box at random, without having the right to communicate to Sophie the box where he has placed the packet. Before beginning this ultimate game, can Sophie and Germain agree on a common strategy?
> 
> 9. For which values of $n \ge 3$ can Sophie and Germain devise a common strategy that ensures Sophie finds the box with the packet?

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]], [[topic_logica|Logic, games and strategies]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]], [[method_ricorsione|Ricorsione]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]], [[skill_conteggio_sistematico|Systematic counting]]
**Area:** [[Combinatoria, Logica e Probabilita|Combinatorics, logic and probability]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1c1cSoVwqMLgL0IF4BNA5JRS_DbCgZRxy/view)

> [!warning] Estratto/tradotto da verificare con la fonte.



<span class="atom-split" id="q03" data-atom="q03" data-title="Quesito 3" data-tags="topic_aritmetica,topic_insiemi_funzioni,topic_geometria_analitica,method_casework,method_coordinate,method_estremalita,method_induzione,method_cassetti,skill_astrazione,skill_manipolazione_algebrica,skill_ragionamento_geometrico,skill_lettura_attenta"></span>

<div class="qlang-switch" data-default="fr"></div>


*Sets E(x)={ent(k/x): k in N∗} of integer parts; characterize reals alpha,beta whose sets have empty intersection (P-cap) or union N∗ (P-cup); Beatty-type theorems via a geometric lattice argument*

> ## Problème 3 : intersections et réunions
>
> Ci-dessous, on note $\mathbb{N}^*$ l’ensemble des entiers naturels non nuls.
>
> Pour tout réel $x$, on note $\mathrm{ent}(x)$ la partie entière inférieure de $x$ ; il s’agit de l’unique entier relatif $n$ tel que $n \le x < n+1$.
>
> Par exemple, $\mathrm{ent}(2) = 2$, $\mathrm{ent}(9{,}99) = 9$, $\mathrm{ent}(\pi) = 3$, $\mathrm{ent}(-2) = -2$, et $\mathrm{ent}(-e) = -3$.
>
> On note aussi $\mathrm{frac}(x)$ la partie fractionnaire de $x$ ; il s’agit du réel $x - \mathrm{ent}(x)$, qui appartient à l’intervalle $[0\,;\,1[$.
>
> Ainsi, $\mathrm{frac}(-2) = \mathrm{frac}(2) = 0$, $\mathrm{frac}(9{,}99) = 0{,}99$, $\mathrm{frac}(\pi) = \pi - 3$, et $\mathrm{frac}(-e) = 3 - e$.
>
> Pour tous les réels $x$ et $y$, on note également $\max\{x\,;\,y\}$ le plus grand des nombres $x$ et $y$, c’est-à-dire leur maximum, et $\min\{x\,;\,y\}$ le plus petit des nombres $x$ et $y$, c’est-à-dire leur minimum.
>
> On rappelle qu’un nombre réel est rationnel lorsqu’il est égal à une fraction de la forme $\dfrac{p}{q}$ où $p$ est un entier relatif, $q$ un entier naturel non nul ; lorsque $\mathrm{PGCD}(p, q) = 1$, on dit que $\dfrac{p}{q}$ est une fraction irréductible. Un réel est irrationnel lorsqu’il n’est pas rationnel.
>
> Enfin, pour tout réel $x > 0$, on note $\mathcal{E}(x)$ l’ensemble
> $$\mathcal{E}(x) = \left\{ \mathrm{ent}\!\left(\frac{n}{x}\right) : n \in \mathbb{N}^* \right\} = \left\{ \mathrm{ent}\!\left(\frac{1}{x}\right)\,;\, \mathrm{ent}\!\left(\frac{2}{x}\right)\,;\, \mathrm{ent}\!\left(\frac{3}{x}\right)\,;\, \mathrm{ent}\!\left(\frac{4}{x}\right)\,;\, \ldots \right\} ;$$
> il s’agit de l’ensemble des entiers $k \ge 0$ pour lesquels il existe un entier $n \ge 1$ tel que
> $$k \le \frac{n}{x} < k+1.$$
>
> Cet exercice vise à identifier les réels $\alpha > 0$ et $\beta > 0$ satisfaisant l’une ou l’autre des propriétés suivantes.
>
> Propriété $\mathbf{P}_\cap$ : l’intersection des deux ensembles $\mathcal{E}(\alpha)$ et $\mathcal{E}(\beta)$ est vide ;
>
> Propriété $\mathbf{P}_\cup$ : la réunion des deux ensembles $\mathcal{E}(\alpha)$ et $\mathcal{E}(\beta)$ est égale à $\mathbb{N}^*$.
>
> ### Partie 1 : Quelques cas particuliers
>
> 1. Soit $x$ un réel quelconque.
>
> a. Démontrer que $x - 1 < \mathrm{ent}(x) \le x$.
>
> b. Soit $n$ un entier relatif et $y$ un réel tel que $0 \le y < 1$. On suppose que $x = n + y$. Exprimer $n$ et $y$ en fonction de $\mathrm{ent}(x)$ et $\mathrm{frac}(x)$.
>
> 2. Soit $x$ un réel strictement positif. Calculer $\mathcal{E}(x)$.
>
> a. lorsque $x = 1$ ;
>
> b. lorsque $x > 1$.
>
> 3. Lesquelles des propriétés $\mathbf{P}_\cap$ et $\mathbf{P}_\cup$ sont satisfaites
>
> a. lorsque $\max\{\alpha\,;\,\beta\} = 1$ ?
>
> b. lorsque $\max\{\alpha\,;\,\beta\} > 1$ ?
>
> 4. Soit $x$ un réel quelconque et $n$ un entier naturel non nul.
>
> a. Démontrer, pour tout entier $k \ge 0$, que $\mathrm{ent}(n\,\mathrm{frac}(kx))$ appartient à l’ensemble $\{0\,;\,1\,;\,\ldots\,;\,n-1\}$.
>
> b. Démontrer qu’il existe deux entiers $k$ et $\ell$ tels que $0 \le k < \ell \le n$ et
> $$\mathrm{ent}(n\,\mathrm{frac}(kx)) = \mathrm{ent}(n\,\mathrm{frac}(\ell x)).$$
>
> c. On pose $m = \ell - k$. Démontrer que le nombre $\mathrm{frac}(mx)$ appartient à l’un des deux intervalles
> $$\left[0\,;\,\frac{1}{n}\right[ \quad\text{ou}\quad \left]1-\frac{1}{n}\,;\,1\right[ .$$
>
> d. On suppose dans cette question que $1 - \dfrac{1}{n} < \mathrm{frac}(mx) < 1$, et on pose
> $$u = \mathrm{ent}\!\left(\frac{1}{1-\mathrm{frac}(mx)}\right).$$
> Démontrer que $\mathrm{ent}(umx) = u\,\mathrm{ent}(mx) + u - 1$ et que $0 \le \mathrm{frac}(umx) < \dfrac{1}{n}$.
>
> e. Démontrer que, dans tous les cas, il existe un entier $v \ge 1$ pour lequel $0 \le \mathrm{frac}(vx) < \dfrac{1}{n}$.
>
> 5. On suppose dans cette question que $\max\{\alpha\,;\,\beta\} < 1$ et que $\alpha$ est égal à un rationnel $\dfrac{p}{q}$, où $p$ et $q$ sont des entiers naturels non nuls.
>
> a. Déduire de la question 4 que, pour tout réel $\varepsilon > 0$, il existe deux entiers naturels non nuls $k$ et $\ell$ tels que
> $$qk \le \frac{\ell}{\beta} < qk + \varepsilon.$$
>
> b. Lesquelles des propriétés $\mathbf{P}_\cap$ et $\mathbf{P}_\cup$ sont satisfaites ?
>
> ### Partie 2 : Partition
>
> L’objectif de cette partie est de démontrer le résultat suivant, que l’on appellera théorème A :
>
> Les propriétés $\mathbf{P}_\cap$ et $\mathbf{P}_\cup$ sont simultanément satisfaites si et seulement si $\alpha$ et $\beta$ sont deux nombres irrationnels tels que $\alpha + \beta = 1$.
>
> 6. On suppose dans cette question que $\alpha$ et $\beta$ sont deux nombres irrationnels tels que $\max\{\alpha\,;\,\beta\} < 1$.
>
> a. Démontrer, pour tout entier $n \ge 1$, que l’ensemble $\mathcal{E}(\alpha)$ compte $\mathrm{ent}(n\alpha)$ éléments compris entre $1$ et $n-1$.
>
> b. Démontrer que, si $\alpha + \beta > 1$, la propriété $\mathbf{P}_\cap$ n’est pas satisfaite.
>
> c. Démontrer que, si $\alpha + \beta < 1$, la propriété $\mathbf{P}_\cup$ n’est pas satisfaite.
>
> 7. On suppose dans cette question que $\alpha$ et $\beta$ sont deux nombres irrationnels tels que $\alpha + \beta = 1$.
>
> a. Démontrer, pour tout entier $n \ge 1$, que $\mathrm{ent}(n\alpha) + \mathrm{ent}(n\beta) = n - 1$.
>
> b. Démontrer, pour tout entier $n \ge 1$, que l’on est dans l’une des deux situations suivantes :
>
> 1. $\mathrm{ent}((n+1)\alpha) = \mathrm{ent}(n\alpha) + 1$, $\mathrm{ent}((n+1)\beta) = \mathrm{ent}(n\beta)$, $n \in \mathcal{E}(\alpha)$ et $n \notin \mathcal{E}(\beta)$ ;
>
> 2. $\mathrm{ent}((n+1)\alpha) = \mathrm{ent}(n\alpha)$, $\mathrm{ent}((n+1)\beta) = \mathrm{ent}(n\beta) + 1$, $n \notin \mathcal{E}(\alpha)$ et $n \in \mathcal{E}(\beta)$.
>
> 8. Démontrer le théorème A.
>
> ### Partie 3 : Intersection vide
>
> L’objectif de cette partie est de démontrer le résultat suivant, que l’on appellera théorème B :
>
> La propriété $\mathbf{P}_\cap$ est satisfaite si et seulement si $\alpha$ et $\beta$ sont deux nombres irrationnels pour lesquels il existe deux entiers $u \ge 1$ et $v \ge 1$ tels que $u\alpha + v\beta = 1$.
>
> 9. Démontrer que, si $\alpha$ et $\beta$ sont irrationnels et s’il existe deux entiers $u \ge 1$ et $v \ge 1$ tels que $u\alpha + v\beta = 1$, la propriété $\mathbf{P}_\cap$ est bien satisfaite.
>
> On suppose désormais, pour les questions 10 à 18, que $\alpha$ et $\beta$ sont deux réels strictement positifs pour lesquels la propriété $\mathbf{P}_\cap$ est satisfaite.
>
> 10. Démontrer que $\alpha$ et $\beta$ sont irrationnels et que $\max\{\alpha\,;\,\beta\} < 1$.
>
> On adopte maintenant un point de vue géométrique sur le problème. On identifie chaque point du plan à ses coordonnées, et chaque rectangle à un produit cartésien d’intervalles ; ainsi, lorsque $I$ et $J$ sont deux intervalles, on pourra noter $I \times J$ l’ensemble des points de coordonnées $(x\,;\,y)$ pour lesquels $x \in I$ et $y \in J$.
>
> On note $O$ l’origine du repère, et $\Omega$ l’ensemble des points du plan dont les coordonnées sont de la forme $(k\alpha + m\,;\, k\beta + n)$, où $k$, $m$ et $n$ sont des entiers relatifs.
>
> 11. a. Soit $A$ et $B$ deux points de $\Omega$. Démontrer que la translation de vecteur $\overrightarrow{AB}$ transforme tout point de $\Omega$ en un point de $\Omega$.
>
> b. Soit $\ell$ un entier relatif. Démontrer que la symétrie centrale de centre $O$ et l’homothétie de centre $O$ et de rapport $\ell$ (c’est-à-dire la transformation qui envoie tout point $X$ sur le point $Y$ tel que $\overrightarrow{OY} = \ell\,\overrightarrow{OX}$) transforment chaque point de $\Omega$ en un point de $\Omega$.
>
> 12. Démontrer que, pour chaque point $P$ dans $\Omega$, de coordonnées $(x\,;\,y)$, il existe un unique triplet d’entiers relatifs $(k\,;\,m\,;\,n)$ pour lesquels $x = k\alpha + m$ et $y = k\beta + n$ ; on notera désormais $f(P)$ l’entier $k$ ainsi défini.
>
> 13. a. Démontrer que l’ensemble $\mathcal{E}(\alpha)$ est formé des entiers $k \ge 0$ pour lesquels
> $$0 < \mathrm{frac}((k+1)\alpha) < \alpha.$$
>
> b. En déduire que le rectangle $]0\,;\,\alpha[\,\times\,]0\,;\,\beta[$ ne contient aucun point $X$ de $\Omega$ tel que $f(X) \ge 1$.
>
> c. Soit $\varepsilon$ un réel strictement positif. Démontrer que le rectangle $]-\varepsilon\,;\,\varepsilon[\,\times\,]-\varepsilon\,;\,\varepsilon[$ contient un point $Y$ de $\Omega$ tel que $f(Y) \ge 1$.
>
> d. En déduire que le rectangle $]0\,;\,\alpha[\,\times\,]0\,;\,\beta[$ ne contient aucun point de $\Omega$.
>
> 14. a. Soit $\varepsilon$ un réel tel que $0 < \varepsilon < \min\{\alpha\,;\,\beta\}$.
>
> Démontrer que le rectangle $]0\,;\,\varepsilon[\,\times\,]-\varepsilon\,;\,0[$ contient un point de $\Omega$.
>
> On note $Q$ un point ainsi obtenu lorsque $\varepsilon = \dfrac{\min\{\alpha\,;\,\beta\}}{2}$, et $(s\,;\,t)$ ses coordonnées. Pour tout point $P$ de coordonnées $(x\,;\,y)$, on note désormais $g(P)$ la quantité
> $$g(P) = \frac{x}{s} - \frac{y}{t}.$$
>
> b. Démontrer que, pour tout entier relatif $k$, le rectangle $]ks\,;\,(k+2)s]\,\times\,]kt\,;\,(k-2)t]$ ne contient aucun point de $\Omega$.
>
> c. Démontrer que $\Omega$ ne contient aucun point $P$ tel que $1 < g(P) \le 2$.
>
> d. Démontrer que tout point $P$ de $\Omega$ tel que $|g(P)| \le 2$ appartient à la droite $(OQ)$.
>
> e. Démontrer que, pour tout réel $\varepsilon > 0$, il existe un point qui appartient à la fois à la droite $(OQ)$, au rectangle $]0\,;\,\varepsilon[\,\times\,]-\varepsilon\,;\,0[$ et à l’ensemble $\Omega$.
>
> f. Démontrer que toute droite parallèle à $(OQ)$ et passant par un point du rectangle $]0\,;\,\alpha[\,\times\,]0\,;\,\beta[$ ne contient aucun point de $\Omega$.
>
> 15. Soit $x$ un réel strictement positif, et $H$ un ensemble de réels contenant $x$ mais aucun élément de l’intervalle $]0\,;\,x[$. On suppose, pour tous réels $y$ et $z$ dans $H$, que $y - z \in H$.
>
> Démontrer que $H = \{kx : k \in \mathbb{Z}\}$, c’est-à-dire que $H$ est l’ensemble des réels de la forme $kx$ où $k$ est un entier relatif.
>
> 16. On note $\Lambda$ l’ensemble des réels $x$ pour lesquels le point de coordonnées $(x\,;\,0)$ appartient à une droite parallèle à $(OQ)$ et passant par un point de $\Omega$. On pose également
> $$\lambda := \alpha - \frac{s}{t}\,\beta.$$
>
> a. Démontrer que $\Lambda$ contient $\lambda$ mais aucun élément de l’intervalle $]0\,;\,\lambda[$.
>
> b. En déduire que $\Lambda = \{k\lambda : k \in \mathbb{Z}\}$.
>
> 17. On note $\Gamma$ l’ensemble des entiers $f(P)$ obtenus lorsque $P$ est un point de $\Omega$ situé sur la droite $(OQ)$.
>
> a. Démontrer que l’ensemble $\Gamma$ contient au moins un entier naturel non nul.
>
> b. Soit $\gamma$ le plus petit entier naturel non nul tel que $\gamma \in \Gamma$. Démontrer que $\Gamma = \{k\gamma : k \in \mathbb{Z}\}$.
>
> c. En déduire que la fraction $-\dfrac{s}{t}$ est un nombre rationnel.
>
> 18. Enfin, on note $\dfrac{u}{v}$ le nombre $-\dfrac{s}{t}$ sous forme d’une fraction irréductible, puis on note $W$ l’ensemble des entiers relatifs $\ell$ tels que $\dfrac{\ell}{v} \in \Lambda$.
>
> a. Démontrer que $u$ et $v$ appartiennent à $W$.
>
> b. En déduire que $W = \mathbb{Z}$.
>
> 19. Démontrer le théorème B.
>
> ### Partie 4 : Réunion et intersections multiples
>
> 20. Démontrer que la propriété $\mathbf{P}_\cup$ est satisfaite si et seulement si $\max\{\alpha\,;\,\beta\} = 1$, ou $\alpha$ et $\beta$ sont deux irrationnels strictement plus petits que $1$ pour lesquels il existe deux entiers $u \ge 1$ et $v \ge 1$ tels que $u(1-\alpha) + v(1-\beta) = 1$.
>
> 21. Existe-t-il trois réels strictement positifs $\alpha$, $\beta$ et $\gamma$ pour lesquels les ensembles $\mathcal{E}(\alpha)$, $\mathcal{E}(\beta)$ et $\mathcal{E}(\gamma)$ sont deux à deux disjoints ?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_casework|Casework]], [[method_coordinate|Coordinate]], [[method_estremalita|Estremalità]], [[method_induzione|Induzione]], [[method_cassetti|Principio dei cassetti]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1c1cSoVwqMLgL0IF4BNA5JRS_DbCgZRxy/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<div class="qlang-split" data-lang="it"></div>

*Insiemi E(x)={⌊k/x⌋ : k intero positivo}: caratterizzare i reali α, β i cui insiemi sono disgiunti oppure ricoprono tutti gli interi positivi, con teoremi di tipo Beatty.*
> Problema 3: intersezioni e riunioni.
> 
> In seguito $\mathbb{N}^*$ indica l'insieme di interi strettamente positivi. Per ogni $x$ reale, $\mathrm{ent}(x)$ indica il numero intero più grande inferiore o uguale a $x$: è il numero intero unico $n$ tale che $n \le x < n+1$. Per esempio $\mathrm{ent}(2)=2$, $\mathrm{ent}(9{.}99)=9$, $\mathrm{ent}(-2)=-2$, $\mathrm{ent}(-3)=-3$. Si nota anche $\mathrm{frac}(x)$ la parte frazionaria di $x$, cioè il $x - \mathrm{ent}(x)$ reale, che appartiene all'intervallo $[0\,;1[$.
> 
> Per tutti i numeri reali $x$ e $y$, $\max\{x\,;y\}$ indica il più grande dei due numeri e $\min\{x\,;y\}$ il più piccolo. Un numero reale è razionale quando è uguale a una frazione $\frac{p}{q}$ dove $p$ è un intero relativo e $q$ un intero strettamente positivo; altrimenti è irrazionale.
> 
> Infine, per ogni reale $x > 0$, si nota $\mathcal{E}(x)$ l'insieme $$\mathcal{E}(x) = \left\{ \mathrm{ent}\!\left(\tfrac{k}{x}\right) : k \in \mathbb{N}^* \right\} = \left\{ \mathrm{ent}\!\left(\tfrac{1}{x}\right); \mathrm{ent}\!\left(\tfrac{2}{x}\right); \mathrm{ent}\!\left(\tfrac{3}{x}\right); \mathrm{ent}\!\left(\tfrac{4}{x}\right); \ldots \right\}.$$ È l'insieme di interi $k \ge 0$ per il quale esiste un intero $n \ge 1$ tale che $k \le \frac{n}{x} < k+1$.
> 
> L'esercizio mira a identificare i reali $\alpha > 0$ e $\beta > 0$ che soddisfano una o l'altra delle seguenti proprietà: - Proprietà $\mathbf{P}_\cap$: l'intersezione dei due set $\mathcal{E}(\alpha)$ e $\mathcal{E}(\beta)$ è vuota; - Proprietà $\mathbf{P}_\cup$: l'unione dei due set $\mathcal{E}(\alpha)$ e $\mathcal{E}(\beta)$ è uguale a $\mathbb{N}^*$.
> 
> Parte 1: Alcuni casi particolari.
> 
> 1. Lasciate che $x$ sia un reale arbitrario. a. Dimostra che $x - 1 < \mathrm{ent}(x) \le x$. b. Sia $n$ un intero relativo e $y$ un reale tale che $0 \le y < 1$. Dimostra che $\mathrm{ent}(n+y) = n$. Esprimere $n$ e $y$ in funzione di $\mathrm{ent}(x)$ e $\mathrm{frac}(x)$.
> 
> 2. Sia il $x$ un reale strettamente positivo. Calcolare $\mathcal{E}(x)$: a. quando $x = 1$; b. quando $x = 2$.
> 
> 3. Quali delle proprietà $\mathbf{P}_\cap$ e $\mathbf{P}_\cup$ sono soddisfatte: a. quando $\max\{\alpha\,;\beta\} = 1$? b. quando $\max\{\alpha\,;\beta\} > 1$?
> 
> 4. Sia $x$ un reale arbitrario e $n$ un intero naturale non zero. a. Dimostra, per ogni numero intero $k \ge 0$, che $\mathrm{ent}(n\,\mathrm{frac}(kx))$ appartiene al set $\{0\,;1\,;\ldots;n-1\}$. b. Dimostrare che esistono due interi $k$ e $\ell$ come $0 \le k < \ell \le n$ e $\mathrm{ent}(n\,\mathrm{frac}(kx)) = \mathrm{ent}(n\,\mathrm{frac}(\ell x))$. c. Un set $m = \ell - k$. Dimostra che il numero $\mathrm{frac}(mx)$ appartiene a uno dei due intervalli $\left[0\,;\tfrac{1}{n}\right[$ o $\left]1-\tfrac{1}{n}\,;1\right[$. d. Dimostrare che esiste un numero intero $\nu \ge 1$ per il quale $0 \le \mathrm{frac}(\nu x) < \frac{1}{n}$ o $1 - \frac{1}{n} < \mathrm{frac}(\nu x) < 1$. e. Dimostra che esiste un numero intero $\nu \ge 1$ per il quale $0 \le \mathrm{frac}(\nu x) < \frac{1}{n}$.
> 
> 5. In questa domanda si suppone che $\max\{\alpha\,;\beta\} < 1$ e $\alpha$ sia uguale a un $\frac{p}{q}$ razionale dove $p$ e $q$ sono due interi naturali non zero. a. Dalla domanda 4 si deduce che, per ogni $\varepsilon > 0$ reale, esistono due interi naturali non zero $k$ e $\ell$ tali che $qk \le \frac{\ell}{\beta} < qk + \varepsilon$. b. Quali delle proprietà $\mathbf{P}_\cap$ e $\mathbf{P}_\cup$ sono soddisfatte?
> 
> Parte 2: Partizione.
> 
> L'obiettivo di questa parte è dimostrare il seguente risultato, chiamato teorema A: Le proprietà $\mathbf{P}_\cap$ e $\mathbf{P}_\cup$ sono soddisfatte simultaneamente se e solo se $\alpha$ e $\beta$ sono due numeri irrazionali come $\alpha + \beta = 1$.
> 
> 6. In questa domanda si suppone che $\alpha$ e $\beta$ siano due numeri irrazionali come $\max\{\alpha\,;\beta\} < 1$. a. Dimostra, per ogni numero intero $n \ge 1$, che il set $\mathcal{E}(\alpha)$ comprende elementi $\mathrm{ent}(n\alpha)$ tra $1$ e $n-1$. b. Dimostra, per ogni numero intero $n \ge 1$, che se $\alpha + \beta = 1$, la proprietà $\mathbf{P}_\cap$ non è soddisfatta. c. Dimostra inoltre che, se $\alpha + \beta < 1$, la proprietà $\mathbf{P}_\cup$ non è soddisfatta.
> 
> 7. In questa domanda si suppone che $\alpha$ e $\beta$ siano due numeri irrazionali come $\alpha + \beta = 1$. a. Indicare, per ogni numero intero $n \ge 1$, che $\mathrm{ent}(n\alpha) + \mathrm{ent}(n\beta) = n - 1$.
> 
> 8. Dimostra il teorema A.
> 
> Parte 3: Intersezione vuota.
> 
> L'obiettivo di questa parte è dimostrare il seguente risultato, chiamato teorema B: La proprietà $\mathbf{P}_\cap$ è soddisfatta se e solo se $\alpha$ e $\beta$ sono due numeri irrazionali per i quali esistono due interi $u \ge 1$ e $v \ge 1$ tali che $u\alpha + v\beta = 1$.
> 
> 9. Dimostrare che, se $\alpha$ e $\beta$ sono irrazionali e se esistono due interi $u \ge 1$ e $v \ge 1$ in modo tale che $u\alpha + v\beta = 1$, allora la proprietà $\mathbf{P}_\cap$ è effettivamente soddisfatta.
> 
> Si suppone, da ora in poi, per le domande da 10 a 18, che $\alpha$ e $\beta$ siano due realità irrazionali per le quali è soddisfatta la proprietà $\mathbf{P}_\cap$.
> 
> 10. Dimostra che $\max\{\alpha\,;\beta\} < 1$.
> 
> Si adopta ora un punto di vista geometrico sul problema. Si identifica ogni punto del piano con le sue coordinate, e ogni rettangolo con un prodotto cartesiano di intervalli; quindi, quando $I$ e $J$ sono due intervalli, $I \times J$ è l'insieme dei punti di coordinate $(x\,;y)$ per i quali $x \in I$ e $y \in J$. Una nota $O$ l'origine del piano, e $\Omega$ l'insieme di punti del piano delle coordinate $(kp + n\,;\ldots)$ associate ad interi, come definito nella fonte (notazione $kp+n$).
> 
> 11. a. I punti $A$ e $B$ sono due punti di $\Omega$. Dimostra che la traduzione del vettore $\overrightarrow{AB}$ trasforma ogni punto di $\Omega$ in un punto di $\Omega$. b. Il $\Gamma$ è un numero intero relativo. Dimostrare che la simmetria centrale del centro $O$ e l'omogeneità del centro $O$ e il rapporto $\Gamma$ (cioè la trasformazione che trasmette ogni punto $X$ al punto $Y$ in modo tale che $\overrightarrow{OY} = \Gamma\,\overrightarrow{OX}$), trasforma ogni punto di $\Omega$ in un punto di $\Omega$.
> 
> 12. Dimostrare che, per ogni punto $P$ delle coordinate $\Omega$, esiste un triplo unico di interi relativi $(k\,;m\,;n)$ per i quali $x = kp + m$ e $y = kp + n$; da ora in poi si noterà $J(P)$ il numero intero $k$ così definito.
> 
> 13. a. Dimostrare che $\Omega$ è formato dai numeri interi $k \ge 0$ per i quali $0 < \mathrm{frac}(k\alpha) + \mathrm{frac}(k\beta) < 1$. b. Deduzione che il rettangolo $[0\,;\alpha[ \,\times\, [0\,;\beta[$ non contiene un punto $X$ di $\Omega$ tale da $J(X) = 0$. c. Sia il $x$ un reale strettamente positivo. Dimostrare che il rettangolo $]-x\,;x[ \,\times\, ]-x\,;x[$ non contiene un punto $X$ di $\Omega$ tale da $J(X) = 0$. d. Deduzione che il rettangolo $[0\,;\alpha[ \,\times\, [0\,;\beta[$ non contiene alcun punto di $\Omega$.
> 
> 14. a. Sia il $x$ un reale tale che $0 < x < \min\{\alpha\,;\beta\}$. Dimostrare che il rettangolo $]0\,;x[ \,\times\, ]-x\,;x[$ non contiene alcun punto di $\Omega$. Si nota $Q$ un punto così ottenuto quando $x = \frac{\min\{\alpha\,;\beta\}}{2}$ e $(s\,;t)$ le sue coordinate. Per ogni punto $P$ delle coordinate $(x\,;y)$, da ora in poi $g(P)$ si nota la quantità $\frac{x}{s} + \frac{y}{t}$. b. Dimostra che per ogni numero intero relativo $k$, il rettangolo $[ks\,;(k+2)s[ \,\times\, [(k-2)t\,;(k+2)t[$ non contiene alcun punto di $\Omega$. c. Dimostrare che $Q$ è il punto unico $P$ tale che $1 < g(P) < 2$ appartenga alla riga $(OQ)$. d. Dimostrare che ogni punto $P$ di $\Omega$ tale che $g(P) \le 2$ appartiene alla riga $(OQ)$. e. Dimostra che ogni punto $P$ di $\Omega$ in modo tale che $g(P) > 0$ confermi $g(P) \ge 1$. f. Dimostrare l'esistenza di un punto di $\Omega$ come descritto, relativo al rettangolo $]0\,;\alpha[ \,\times\, [0\,;\beta[$.
> 
> 15. Sia $x$ un reale strettamente positivo e $\mathcal{H}$ un insieme di reali contenenti $1$, non uguale all'intervallo $]0\,;x[$, in modo tale che per tutti i reali $y$ e $z$ in $\mathcal{H}$, $y - z \in \mathcal{H}$. Dimostrare che $\mathcal{H} = \{kx : k \in \mathbb{Z}\}$, ovvero che $\mathcal{H}$ è l'insieme dei numeri reali $kx$ in cui $k$ è un numero intero relativo.
> 
> 16. Si nota $\Lambda$ l'insieme di valori reali $x$ per i quali il punto di coordinate $(x\,;0)$ appartiene a una retta parallela a $(OQ)$ che attraversa un punto $P$ di $\Omega$. a. Dimostra che $\Lambda$ contiene un elemento dell'intervallo $]0\,;1[$. b. Riduzione di $\Lambda = \{k\delta : k \in \mathbb{Z}\}$ per alcuni $\delta > 0$ reali.
> 
> 17. Una nota $\Gamma$ l'insieme dei valori $f(P)$ ottenuti quando $P$ è un punto di $\Omega$ situato sulla linea $(OQ)$. a. Dimostrare che l'insieme $\Gamma$ contiene almeno un intero naturale non zero. b. $\gamma$ sia il numero intero naturale non zero più piccolo tale che $\gamma \in \Gamma$. Dimostra che $\Gamma = \{k\gamma : k \in \mathbb{Z}\}$. c. Deduci che la frazione $-\frac{x}{y}$ è un numero razionale.
> 
> 18. Infine, si nota $\frac{u}{v}$ il numero $-\frac{x}{y}$ in forma di frazione irriducibile, poi si nota $W$ l'insieme dei valori $f$ reali tali da $\frac{f}{v} \in \Lambda$. a. dimostrare che $u$ e $v$ appartengono a $\Lambda$. b. Riduzione di $W = \Lambda$.
> 
> 19. Dimostra il teorema B.
> 
> Parte 4: Unione e intersezioni multiple.
> 
> 20. Dimostrare che la proprietà $\mathbf{P}_\cup$ è soddisfatta se e solo se $\max\{\alpha\,;\beta\} = 1$, o $\alpha$ e $\beta$ sono due numeri irrazionali strettamente inferiori a $1$ per i quali esistono due interi $u \ge 1$ e $v \ge 1$ tali da $u(1-\alpha) + v(1-\beta) = 1$.
> 
> 21. Esistono tre valori strettamente positivi $\alpha$, $\beta$ e $\gamma$ per i quali gli insiemi $\mathcal{E}(\alpha)$, $\mathcal{E}(\beta)$ e $\mathcal{E}(\gamma)$ sono disconnessi in coppia?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_casework|Analisi per casi]], [[method_coordinate|Metodo delle coordinate]], [[method_estremalita|Principio di estremalita]], [[method_induzione|Induzione]], [[method_cassetti|Principio dei cassetti]]
**Abilita:** [[skill_astrazione|Astrazione / generalizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta del testo]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]], [[Geometria]]


<div class="qlang-split" data-lang="en"></div>


*Sets E(x)={ent(k/x): k in N∗} of integer parts; characterize reals alpha,beta whose sets have empty intersection (P-cap) or union N∗ (P-cup); Beatty-type theorems via a geometric lattice argument*

> Problem 3: Intersections and reunions.
> 
> Below, $\mathbb{N}^*$ denotes the set of strictly positive integers. For every real $x$, $\mathrm{ent}(x)$ denotes the largest integer less than or equal to $x$: it is the unique integer $n$ such that $n \le x < n+1$. For example $\mathrm{ent}(2)=2$, $\mathrm{ent}(9{.}99)=9$, $\mathrm{ent}(-2)=-2$, $\mathrm{ent}(-3)=-3$. One also notes $\mathrm{frac}(x)$ the fractional part of $x$, i.e. the real $x - \mathrm{ent}(x)$, which belongs to the interval $[0\,;1[$.
> 
> For all reals $x$ and $y$, $\max\{x\,;y\}$ denotes the larger of the two numbers and $\min\{x\,;y\}$ the smaller. A real number is rational when it equals a fraction $\frac{p}{q}$ where $p$ is a relative integer and $q$ a strictly positive integer; otherwise it is irrational.
> 
> Finally, for every real $x > 0$, one notes $\mathcal{E}(x)$ the set
> $$\mathcal{E}(x) = \left\{ \mathrm{ent}\!\left(\tfrac{k}{x}\right) : k \in \mathbb{N}^* \right\} = \left\{ \mathrm{ent}\!\left(\tfrac{1}{x}\right); \mathrm{ent}\!\left(\tfrac{2}{x}\right); \mathrm{ent}\!\left(\tfrac{3}{x}\right); \mathrm{ent}\!\left(\tfrac{4}{x}\right); \ldots \right\}.$$
> It is the set of integers $k \ge 0$ for which there exists an integer $n \ge 1$ such that $k \le \frac{n}{x} < k+1$.
> 
> This exercise aims to identify the reals $\alpha > 0$ and $\beta > 0$ satisfying one or the other of the following properties:
> - Property $\mathbf{P}_\cap$: the intersection of the two sets $\mathcal{E}(\alpha)$ and $\mathcal{E}(\beta)$ is empty;
> - Property $\mathbf{P}_\cup$: the union of the two sets $\mathcal{E}(\alpha)$ and $\mathcal{E}(\beta)$ equals $\mathbb{N}^*$.
> 
> Part 1: Some particular cases.
> 
> 1. Let $x$ be an arbitrary real.
> a. Demonstrate that $x - 1 < \mathrm{ent}(x) \le x$.
> b. Let $n$ be a relative integer and $y$ a real such that $0 \le y < 1$. Demonstrate that $\mathrm{ent}(n+y) = n$. Express $n$ and $y$ in function of $\mathrm{ent}(x)$ and $\mathrm{frac}(x)$.
> 
> 2. Let $x$ be a strictly positive real. Calculate $\mathcal{E}(x)$:
> a. when $x = 1$;
> b. when $x = 2$.
> 
> 3. Which of the properties $\mathbf{P}_\cap$ and $\mathbf{P}_\cup$ are satisfied:
> a. when $\max\{\alpha\,;\beta\} = 1$?
> b. when $\max\{\alpha\,;\beta\} > 1$?
> 
> 4. Let $x$ be an arbitrary real and $n$ a non-zero natural integer.
> a. Demonstrate, for every integer $k \ge 0$, that $\mathrm{ent}(n\,\mathrm{frac}(kx))$ belongs to the set $\{0\,;1\,;\ldots;n-1\}$.
> b. Demonstrate that there exist two integers $k$ and $\ell$ such that $0 \le k < \ell \le n$ and $\mathrm{ent}(n\,\mathrm{frac}(kx)) = \mathrm{ent}(n\,\mathrm{frac}(\ell x))$.
> c. One sets $m = \ell - k$. Demonstrate that the number $\mathrm{frac}(mx)$ belongs to one of the two intervals $\left[0\,;\tfrac{1}{n}\right[$ or $\left]1-\tfrac{1}{n}\,;1\right[$.
> d. Demonstrate that there exists an integer $\nu \ge 1$ for which $0 \le \mathrm{frac}(\nu x) < \frac{1}{n}$ or $1 - \frac{1}{n} < \mathrm{frac}(\nu x) < 1$.
> e. Demonstrate that there exists an integer $\nu \ge 1$ for which $0 \le \mathrm{frac}(\nu x) < \frac{1}{n}$.
> 
> 5. One supposes in this question that $\max\{\alpha\,;\beta\} < 1$ and that $\alpha$ is equal to a rational $\frac{p}{q}$ where $p$ and $q$ are two non-zero natural integers.
> a. Deduce from question 4 that, for every real $\varepsilon > 0$, there exist two non-zero natural integers $k$ and $\ell$ such that $qk \le \frac{\ell}{\beta} < qk + \varepsilon$.
> b. Which of the properties $\mathbf{P}_\cap$ and $\mathbf{P}_\cup$ are satisfied?
> 
> Part 2: Partition.
> 
> The objective of this part is to demonstrate the following result, called theorem A: The properties $\mathbf{P}_\cap$ and $\mathbf{P}_\cup$ are simultaneously satisfied if and only if $\alpha$ and $\beta$ are two irrational numbers such that $\alpha + \beta = 1$.
> 
> 6. One supposes in this question that $\alpha$ and $\beta$ are two irrational numbers such that $\max\{\alpha\,;\beta\} < 1$.
> a. Demonstrate, for every integer $n \ge 1$, that the set $\mathcal{E}(\alpha)$ comprises $\mathrm{ent}(n\alpha)$ elements between $1$ and $n-1$.
> b. Demonstrate, for every integer $n \ge 1$, that if $\alpha + \beta = 1$, the property $\mathbf{P}_\cap$ is not satisfied.
> c. Demonstrate also that, if $\alpha + \beta < 1$, the property $\mathbf{P}_\cup$ is not satisfied.
> 
> 7. One supposes in this question that $\alpha$ and $\beta$ are two irrational numbers such that $\alpha + \beta = 1$.
> a. Demonstrate, for every integer $n \ge 1$, that $\mathrm{ent}(n\alpha) + \mathrm{ent}(n\beta) = n - 1$.
> 
> 8. Demonstrate theorem A.
> 
> Part 3: Empty intersection.
> 
> The objective of this part is to demonstrate the following result, called theorem B: The property $\mathbf{P}_\cap$ is satisfied if and only if $\alpha$ and $\beta$ are two irrationals for which there exist two integers $u \ge 1$ and $v \ge 1$ such that $u\alpha + v\beta = 1$.
> 
> 9. Demonstrate that, if $\alpha$ and $\beta$ are irrationals and if there exist two integers $u \ge 1$ and $v \ge 1$ such that $u\alpha + v\beta = 1$, then the property $\mathbf{P}_\cap$ is indeed satisfied.
> 
> One supposes henceforth, for questions 10 to 18, that $\alpha$ and $\beta$ are two irrational reals for which the property $\mathbf{P}_\cap$ is satisfied.
> 
> 10. Demonstrate that $\max\{\alpha\,;\beta\} < 1$.
> 
> One now adopts a geometric viewpoint on the problem. One identifies each point of the plane with its coordinates, and each rectangle with a Cartesian product of intervals; thus, when $I$ and $J$ are two intervals, $I \times J$ is the set of points of coordinates $(x\,;y)$ for which $x \in I$ and $y \in J$. One notes $O$ the origin of the plane, and $\Omega$ the set of points of the plane of coordinates $(kp + n\,;\ldots)$ associated with integers, as defined in the source (notation $kp+n$).
> 
> 11. a. Let $A$ and $B$ be two points of $\Omega$. Demonstrate that the translation of vector $\overrightarrow{AB}$ transforms every point of $\Omega$ into a point of $\Omega$.
> b. Let $\Gamma$ be a relative integer. Demonstrate that the central symmetry of center $O$, and the homothety of center $O$ and ratio $\Gamma$ (i.e. the transformation sending every point $X$ to the point $Y$ such that $\overrightarrow{OY} = \Gamma\,\overrightarrow{OX}$), transform each point of $\Omega$ into a point of $\Omega$.
> 
> 12. Demonstrate that, for each point $P$ of $\Omega$ of coordinates $(x\,;y)$, there exists a unique triple of relative integers $(k\,;m\,;n)$ for which $x = kp + m$ and $y = kp + n$; one will note henceforth $J(P)$ the integer $k$ thus defined.
> 
> 13. a. Demonstrate that $\Omega$ is formed of the integers $k \ge 0$ for which $0 < \mathrm{frac}(k\alpha) + \mathrm{frac}(k\beta) < 1$.
> b. Deduce that the rectangle $[0\,;\alpha[ \,\times\, [0\,;\beta[$ contains no point $X$ of $\Omega$ such that $J(X) = 0$.
> c. Let $x$ be a strictly positive real. Demonstrate that the rectangle $]-x\,;x[ \,\times\, ]-x\,;x[$ contains no point $X$ of $\Omega$ such that $J(X) = 0$.
> d. Deduce that the rectangle $[0\,;\alpha[ \,\times\, [0\,;\beta[$ contains no point of $\Omega$.
> 
> 14. a. Let $x$ be a real such that $0 < x < \min\{\alpha\,;\beta\}$. Demonstrate that the rectangle $]0\,;x[ \,\times\, ]-x\,;x[$ contains no point of $\Omega$. One notes $Q$ a point thus obtained when $x = \frac{\min\{\alpha\,;\beta\}}{2}$, and $(s\,;t)$ its coordinates. For every point $P$ of coordinates $(x\,;y)$, one notes henceforth $g(P)$ the quantity $\frac{x}{s} + \frac{y}{t}$.
> b. Demonstrate that, for every relative integer $k$, the rectangle $[ks\,;(k+2)s[ \,\times\, [(k-2)t\,;(k+2)t[$ contains no point of $\Omega$.
> c. Demonstrate that $Q$ is the unique point $P$ such that $1 < g(P) < 2$ belonging to the line $(OQ)$.
> d. Demonstrate that every point $P$ of $\Omega$ such that $g(P) \le 2$ belongs to the line $(OQ)$.
> e. Demonstrate that every point $P$ of $\Omega$ such that $g(P) > 0$ verifies $g(P) \ge 1$.
> f. Demonstrate the existence of a point of $\Omega$ as described, related to the rectangle $]0\,;\alpha[ \,\times\, [0\,;\beta[$.
> 
> 15. Let $x$ be a strictly positive real, and $\mathcal{H}$ a set of reals containing $1$, not equal to the interval $]0\,;x[$, such that for all reals $y$ and $z$ in $\mathcal{H}$, $y - z \in \mathcal{H}$. Demonstrate that $\mathcal{H} = \{kx : k \in \mathbb{Z}\}$, i.e. that $\mathcal{H}$ is the set of reals $kx$ where $k$ is a relative integer.
> 
> 16. One notes $\Lambda$ the set of reals $x$ for which the point of coordinates $(x\,;0)$ belongs to a line parallel to $(OQ)$ passing through a point $P$ of $\Omega$.
> a. Demonstrate that $\Lambda$ contains an element of the interval $]0\,;1[$.
> b. Deduce that $\Lambda = \{k\delta : k \in \mathbb{Z}\}$ for some real $\delta > 0$.
> 
> 17. One notes $\Gamma$ the set of reals $f(P)$ obtained when $P$ is a point of $\Omega$ situated on the line $(OQ)$.
> a. Demonstrate that the set $\Gamma$ contains at least one non-zero natural integer.
> b. Let $\gamma$ be the smallest non-zero natural integer such that $\gamma \in \Gamma$. Demonstrate that $\Gamma = \{k\gamma : k \in \mathbb{Z}\}$.
> c. Deduce that the fraction $-\frac{x}{y}$ is a rational number.
> 
> 18. Finally, one notes $\frac{u}{v}$ the number $-\frac{x}{y}$ in irreducible fraction form, then one notes $W$ the set of reals $f$ such that $\frac{f}{v} \in \Lambda$.
> a. Demonstrate that $u$ and $v$ belong to $\Lambda$.
> b. Deduce that $W = \Lambda$.
> 
> 19. Demonstrate theorem B.
> 
> Part 4: Union and multiple intersections.
> 
> 20. Demonstrate that the property $\mathbf{P}_\cup$ is satisfied if and only if $\max\{\alpha\,;\beta\} = 1$, or $\alpha$ and $\beta$ are two irrationals strictly smaller than $1$ for which there exist two integers $u \ge 1$ and $v \ge 1$ such that $u(1-\alpha) + v(1-\beta) = 1$.
> 
> 21. Do there exist three strictly positive reals $\alpha$, $\beta$ and $\gamma$ for which the sets $\mathcal{E}(\alpha)$, $\mathcal{E}(\beta)$ and $\mathcal{E}(\gamma)$ are pairwise disjoint?

**Topic:** [[topic_aritmetica|Aritmetica / Teoria dei Numeri]], [[topic_insiemi_funzioni|Insiemi e funzioni]], [[topic_geometria_analitica|Geometria analitica]]
**Metodo:** [[method_casework|Casework]], [[method_coordinate|Coordinate]], [[method_estremalita|Estremalità]], [[method_induzione|Induzione]], [[method_cassetti|Principio dei cassetti]]
**Abilita:** [[skill_astrazione|Astrazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_ragionamento_geometrico|Ragionamento geometrico]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Aritmetica e Teoria dei Numeri]], [[Algebra e Analisi]], [[Geometria]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1c1cSoVwqMLgL0IF4BNA5JRS_DbCgZRxy/view)

> [!warning] Estratto/tradotto da verificare con la fonte.
