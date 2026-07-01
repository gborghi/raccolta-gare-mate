---
title: Olimpiadi Italiane di Matematica 2025 - Finale Cesenatico — Quesito 6
tipo: quesito
lang: it
quesito_id: quesito_src_cesenatico_2025_nazionale__Q06
parent: src_cesenatico_2025_nazionale
competition: Olimpiadi Italiane di Matematica 2025 - Finale Cesenatico
family: archimede
year: '2025'
level: nazionale
country: Italia
modalita: individuale
quesito: '6'
summary: Fermare una formica con rotazioni di alpha e beta
topics:
  - topic_geometria_piana
  - topic_logica
methods:
  - method_invarianti
skills:
  - skill_modellizzazione
  - skill_astrazione
tags:
  - kg/quesito
  - paese/italia
  - comp/archimede
  - anno/2025
  - livello/nazionale
  - topic/geometria_piana
  - topic/logica
  - gara/individuale
---
<div class="qlang-switch" data-default="it"></div>


*Fermare una formica con rotazioni di alpha e beta*

![[src_cesenatico_2025_nazionale__prob6.png]]

> Siano α e β due angoli di ampiezza positiva e minore di 90°. Una formica alfabetaria è un
> essere che avanza in linea retta sul piano. La formica è estremamente pesante, per cui non
> può essere spostata da un posto all’altro. Può solo essere ruotata in modo che rimanga nello
> stesso punto, ma sia orientata in una diversa direzione del piano. Possiamo scegliere noi i
> punti in cui avviene la rotazione (che possono essere tanti quanti ne vogliamo) e la nuova
> direzione in cui disporla in ciascuno di essi, ma questa è l’unica operazione concessa.
> Quando viene ruotata, la formica si ferma un istante, e può decidere di mantenere la nuova
> direzione in cui è stata disposta, oppure di girare ulteriormente di α in senso orario, o di β
> in senso antiorario; poi riprende la sua marcia. Se la formica ripassa per un punto in cui è
> stata ruotata in precedenza, se ne accorge, si spaventa, si ferma e non procede più.
> Dimostrare che per ogni valore ammissibile di α e β è sempre possibile fermare una formica
> alfabetaria con un numero finito di rotazioni.
> Olimpiadi Italiane di Matematica 2025 -- Testi e soluzioni -- Pag.1 di 12
> 
> Problema 1 – Soluzione.
> Domanda (a)
> Il più piccolo n con la proprietà richiesta è 2025.
> Infatti dall’equazione segue che n è multiplo di 225, dunque in particolare multiplo di 9.
> La somma delle cifre dei numeri multipli di 9 è a sua volta multipla di 9. Ne segue che s(n) è
> multiplo di 9, e quindi n è multiplo di 225 · 9 = 2025. Poich´e già 2025 verifica la proprietà, si
> conclude che è proprio il minimo n che la verifica.
> Domanda (b)
> Il più piccolo n con la proprietà richiesta è 72 900.
> Infatti come prima deduciamo che s(n) è multiplo di 9, e di conseguenza ora n deve essere
> multiplo di 225 · 81 = 18 225, che però non verifica l’equazione. Ne segue che s(n) non può
> essere uguale a 9, e la possibilità successiva è s(n) = 18, da cui n = 225 · 182 = 72 900, che
> verifica la proprietà richiesta (e di conseguenza è il minimo intero positivo che la verifica).
> Osservazione
> In entrambi i casi si può dimostrare che 2025 e 72 900 sono gli unici numeri che
> verificano la proprietà. Per farlo serve una qualche disuguaglianza che dica che da un certo
> punto in poi n supera il prodotto a destra dell’uguale, per cui alla fine restano da testare un
> numero finito di casi. Più precisamente,
> • nel primo caso si può dimostrare che n > 225 · s(n) per ogni intero n ≥10 000, per cui è
> sufficiente testare i primi quattro multipli di 2025;
> • nel secondo caso si può dimostrare che n > 225 · s(n)2 per ogni intero n ≥1 000 000.
> Inoltre, possiamo riscrivere l’equazione come
> n = (15 · s(n))2.
> Poich´e a destra dell’uguale abbiamo un quadrato perfetto, ogni possibile soluzione è della
> forma n = (15 · 9 · h)2 con 15 · 9 · h ≤1000. È quindi sufficiente testare i valori interi di h
> che verificano questa disuguaglianza, e cioè quelli fino a 7.
> Olimpiadi Italiane di Matematica 2025 -- Testi e soluzioni -- Pag.2 di 12
> 
> Problema 2 – Soluzione.
> Gli unici valori di a per cui la disequazione ha un’unica soluzione intera sono 24, 25, 26.
> Per dimostrarlo, scriviamo la disequazione nella forma
> p(x) = x(33 −10x) ≥a.
> Osserviamo ora che il polinomio p(x) assume valori negativi o nulli quando x ≤0 oppure
> x ≥4, e quindi, al variare di x negli interi, i valori più grandi che assume il polinomio sono
> p(1) = 23, p(2) = 26 e p(3) = 9. Di conseguenza
> • se a ≥27 non ci sono soluzioni intere,
> • se a ≤23 ci sono almeno due soluzioni intere, e cioè x = 1 e x = 2,
> • per a = 24, 25, 26 l’unica soluzione intera è x = 2.

**Topic:** [[topic_geometria_piana|Geometria piana]], [[topic_logica|Logica, giochi, strategie]]
**Metodo:** [[method_invarianti|Invarianti / monovarianti]]
**Abilita:** [[skill_modellizzazione|Modellizzazione / traduzione del testo]], [[skill_astrazione|Astrazione / generalizzazione]]
**Area:** [[Combinatoria, Logica e Probabilita]], [[Geometria]]
**Fonte:** [apri PDF p.17](https://drive.google.com/file/d/1qB7eL3B9ur3wfVhNrlYiTjMkleeW6oDL/view)


<span class="qlang-split" data-lang="en"></span>


< MSK0/>Stop an ant with alpha and beta rotations< MSK1/>

![[src_cesenatico_2025_nazionale__prob6.png]]

> If the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement of the measurement. An alphabetical ant is a being that advances in a straight line on the plane. The ant is extremely heavy, so it cannot be moved from one place to another. It can only be rotated so that it remains at the same point, but is oriented in a different direction from the plane. We can choose the points where the rotation takes place (which can be as many as we want) and the new direction in which to place it in each of them, but this is the only operation allowed. When rotated, the ant stops for a moment, and may decide to keep the new direction in which it was arranged, or to rotate further from α clockwise, or β clockwise; then resume its march. If the ant goes back to a point where it was previously rotated, it notices it, is frightened, stops and stops moving. Demonstrate that for every allowable value of α and β it is always possible to stop an alphabetical ant with a finite number of rotations. Italian Mathematical Olympiads 2025 - Texts and solutions - Page 1 of 12
> 
> Problem 1  Solution Question (a) The smallest n with the required property is 2025. In fact, from the equation it follows that n is multiple of 225, so in particular multiple of 9. The sum of the digits of multiples of 9 is itself multiples of 9. It follows that s(n) is multiple of 9, and so n is multiple of 225 · 9 = 2025. Since the property is already verified in 2025, it is concluded that it is exactly the minimum n that the verification is. Question (b) The smallest n with the required property is 72 900. In fact, as before we deduce that n is a multiple of 9, and so now n must be a multiple of 225 · 81 = 18 225, which doesn't prove the equation. It follows that s(n) cannot be equal to 9, and the next possibility is s(n) = 18, where n = 225 · 182 = 72 900, which verifies the required property (and consequently is the positive integer minimum that the verification). Observation In both cases it can be shown that 2025 and 72 900 are the only numbers verifying the property. In order to do this, some inequality is needed, which says that from a certain point onwards n exceeds the product to the right of the equals, so that a finite number of cases are finally to be tested. More precisely, • in the first case it can be shown that n > 225 · s(n) for each integer n < MSK0/> 10 000, so it is sufficient to test the first four multiples of 2025; • in the second case it can be shown that n > 225 · s(n) 2 for each integer n < MSK1/> 1 000 000. Furthermore, we can rewrite the equation as n = (15 · s(n))2. Since on the right side of the equation we have a perfect square, every possible solution is of the form n = (15 · 9 · h) 2 with 15 · 9 · h ≤1000. It is therefore sufficient to test the integer values of h that verify this inequality, i.e. those up to 7. Italian Mathematical Olympiads 2025 - Texts and solutions - Page 2 of 12
> 
> Problem two  Solution. The only values of a for which the dissection has a single whole solution are 24, 25, 26. To prove this, we write the dissection in the form p(x) = x(33 −10x) ≥a. Now let's see that the polynomial p(x) takes negative or zero values when x ≤0 or x ≥4, and so, when x varies in integers, the largest values that the polynomial takes are p(1) = 23, p(2) = 26, and p(3) = 9. Consequently • if < MSK3/>27 does not have whole solutions, • if < MSK4/>23 has at least two whole solutions, i.e. x = 1 and x = 2, • if a = 24, 25, 26 the only whole solution is x = 2.

[[src_cesenatico_2025_nazionale__Q06]]
