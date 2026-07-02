---
title: Concours Général des Lycées 2017 — Matematica — Quesito 2
tipo: quesito
lang: en
quesito_id: quesito_src_cgen_2017__Q02
parent: src_cgen_2017
competition: Concours Général des Lycées 2017 — Matematica
family: concours_generale
year: '2017'
level: Concours Général
country: Francia
modalita: individuale
quesito: '2'
summary: >-
  Probability problem. Franck must pass MCQ exams where each correct answer
  gives +1 point, each wrong answer -1 point, and no answer 0 points. First
  exam: 10 questions, pass needs at least 7 points; decide which questions to
  answer given success probability p. Second exam: 50 questions, pass needs at
  least 26 points; compare strategies and find optimal as function of p.
qa_score: '2'
topics:
  - topic_probabilita
  - topic_combinatoria
methods:
  - method_casework
  - method_conteggio
skills:
  - skill_modellizzazione
  - skill_manipolazione_algebrica
  - skill_casework_accurato
  - skill_lettura_attenta
tags:
  - kg/quesito
  - paese/francia
  - comp/concours-generale
  - anno/2017
  - livello/Concours-Général
  - topic/probabilita
  - topic/combinatoria
  - gara/individuale
  - qa/da-verificare
---
<div class="qlang-switch" data-default="en"></div>


*Probability problem. Franck must pass MCQ exams where each correct answer gives +1 point, each wrong answer -1 point, and no answer 0 points. First exam: 10 questions, pass needs at least 7 points; decide which questions to answer given success probability p. Second exam: 50 questions, pass needs at least 26 points; compare strategies and find optimal as function of p.*

> \textbf{2.1 Franck takes a first exam.}
> 
> Franck must pass an exam consisting of a QCM (multiple-choice questionnaire) with questions numbered $1$ to $10$. For each question one must choose among $4$ proposed answers, exactly one of the four answers being correct (one does not prejudge that the proposed answers are all distinct, and the questions are assumed independent).
> 
> Each correct answer brings one point, each wrong answer makes one lose one point, and if one does not answer a question one neither gains nor loses a point.
> 
> Franck passes the first exam if and only if he obtains a final total of at least seven points.
> 
> Franck has answered the first three questions (numbered $1$ to $3$); for the following questions, he has a probability $p$ of finding the correct answer, with $0 < p < 1$.
> 
> \textbf{1.} Prove that Franck has interest in answering question number $9$, if he has interest in answering question number $4$ to which he has not yet answered. [Note: the exact pairing of question numbers in 2.1.1 is partly illegible in the source.]
> \textbf{2.} Does he have interest in answering question number $10$?
> \textbf{3.} Determine, according to the value of $p$, the best strategy for Franck.
> 
> \textbf{2.2 Franck takes a second exam.}
> 
> Franck must now pass a second exam, consisting again of a QCM, formed this time of $50$ questions. The rules of this exam are the same as those of the previous one. Thus Franck must respond to the $50$ questions (that is, he is not obliged to answer every question). Each correct answer brings him a point and each wrong answer makes him lose a point.
> 
> Franck passes this second exam if and only if he obtains a final total of at least $26$ points. For each question, he has a probability $p$ of finding the correct answer, with $0 < p < 1$.
> 
> For any integer $k$ such that $1 \le k \le 25$, we denote by $P_k$ the probability that Franck passes the exam by answering the first $26 + k$ questions. [Note: the exact index range and the '26+k' wording is partly illegible in the source.]
> 
> \textbf{1.} Prove that, for any integer $k$ verifying $1 \le k \le 13$, one has $P_{2k-1} \ge P_{2k}$.
> \textbf{2.} Prove that, for any integer $k$ verifying $0 \le k \le 12$, one has
> $$P_{2k+1} = \sum_{j=k+1}^{2k+1} \binom{2k+1}{j} p^j (1-p)^{2k+1-j}.$$
> \textbf{3.} Show that, for any integer $k$ verifying $0 \le k \le 11$, one has
> $$P_{2k+3} - P_{2k+1} = \binom{2k+1}{k+1} p^{k+1}(1-p)^{k+1} (\,p - (1-p)\,).$$
> One may freely use Pascal's identity: for $0 < m < n$, $\binom{n}{m} = \binom{n-1}{m} + \binom{n-1}{m-1}$. [Note: the precise right-hand side of the formula in 2.2.3 is partly illegible in the source.]
> \textbf{4.} Determine, according to the value of $p$, the best strategy for Franck.

**Topic:** [[topic_probabilita|Probabilità]], [[topic_combinatoria|Combinatoria]]
**Metodo:** [[method_casework|Casework]], [[method_conteggio|Conteggio]]
**Abilita:** [[skill_modellizzazione|Modellizzazione]], [[skill_manipolazione_algebrica|Manipolazione algebrica]], [[skill_casework_accurato|Casework accurato]], [[skill_lettura_attenta|Lettura attenta]]
**Area:** [[Combinatoria, Logica e Probabilita]]
**Fonte:** [apri PDF](https://drive.google.com/file/d/1EHAMpK1by8Xia4t4AWdCzG755ysDEYJL/view)

> [!warning] Estratto/tradotto da verificare con la fonte.


<span class="qlang-split" data-lang="it"></span>


*Problema di probabilità. Franck deve superare gli esami MCQ in cui ogni risposta corretta dà +1 punti, ogni risposta sbagliata -1 punti, e nessuna risposta 0 punti. Primo esame: 10 domande, il pass ha bisogno di almeno 7 punti; decidere quali domande rispondere data probabilità di successo p. Secondo esame: 50 domande, passaggio richiede almeno 26 punti; confronta le strategie e trova l'ottimale come funzione di p.*

> Franck fa il primo esame.
> 
> Franck deve superare un esame composto da un QCM (questionario di scelta multipla) con domande numerate da $1$ a $10$. Per ciascuna domanda si deve scegliere tra le risposte proposte, con una delle quattro risposte corrette (non si pregiudica che tutte le risposte proposte siano distinte e che le domande siano presunte come indipendenti).
> 
> Ogni risposta corretta porta un punto, ogni risposta sbagliata fa perdere un punto, e se non si risponde a una domanda non si guadagna né si perde un punto.
> 
> Franck passa il primo esame se e solo se ottiene un totale finale di almeno sette punti.
> 
> Franck ha risposto alle prime tre domande (numerate $1$ a $3$); per le seguenti domande, ha una probabilità $p$ di trovare la risposta corretta, con $0 < p < 1$.
> 
> Prova che Franck ha interesse a rispondere alla domanda numero $9$, se ha interesse a rispondere alla domanda numero $4$ a cui non ha ancora risposto. [Nota: l'accoppiamento esatto dei numeri delle domande di 2.1.1 è parzialmente illeggibile nella fonte.] \textbf{2.} Ha interesse a rispondere alla domanda di numero $10$? Determinare, in base al valore di $p$, la migliore strategia per Franck.
> 
> Franck fa un secondo esame.
> 
> Franck deve ora superare un secondo esame, costituito nuovamente da un QCM, costituito questa volta da domande $50$. Le regole di questo esame sono le stesse di quella precedente. In tal modo, Franck deve rispondere alle domande $50$ (cioè non è obbligato a rispondere a tutte le domande). Ogni risposta corretta gli porta un punto e ogni risposta sbagliata gli porta a perdere un punto.
> 
> Franck può superare il secondo esame solo se ottiene un totale finale di almeno $26$ punti. Per ogni domanda, ha una probabilità $p$ di trovare la risposta corretta, con $0 < p < 1$.
> 
> Per qualsiasi numero intero $k$ tale da $1 \le k \le 25$, indichiamo con $P_k$ la probabilità che Franck passi l'esame rispondendo alle prime domande $26 + k$. [Nota: l'intervallo esatto dell'indice e la formulazione "26+k" sono parzialmente leggibili nella fonte.]
> 
> \textbf{1.} Prova che, per qualsiasi numero intero $k$ che verifica $1 \le k \le 13$, si ha $P_{2k-1} \ge P_{2k}$. \textbf{2.} Dimostra che, per qualsiasi intero $k$ verificando $0 \le k \le 12$, si ha $$P_{2k+1} = \sum_{j=k+1}^{2k+1} \binom{2k+1}{j} p^j (1-p)^{2k+1-j}.$$ \textbf{3.} Dimostra che, per qualsiasi intero $k$ verificando $0 \le k \le 11$, si ha $$P_{2k+3} - P_{2k+1} = \binom{2k+1}{k+1} p^{k+1}(1-p)^{k+1} (\,p - (1-p)\,).$$ Si può liberamente utilizzare l'identità di Pascal: per $0 < m < n$, $\binom{n}{m} = \binom{n-1}{m} + \binom{n-1}{m-1}$. [Nota: il lato destro preciso della formula di 2.2.3 è parzialmente illeggibile nella fonte.] \textbf{4.} Determinare, in base al valore di $p$, la strategia migliore per Franck.

[[src_cgen_2017__Q02]]
