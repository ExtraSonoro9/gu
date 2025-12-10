---
title: Funciones y Correspondencia
---

El concepto de función es uno de los más importantes en el Análisis Matemático, ya que muchos de los fenómenos naturales en los que una magnitud depende de otra se

modelizan mediante funciones.

# Función 

Se dice que una relación binaria 𝑓 ⊆ 𝐴 × 𝐵, con 𝐴 y 𝐵

conjuntos no vacíos, es una función parcial o aplicación parcial, y se denota 𝑓 ∶ 𝐴 → 𝐵,

si 𝑓 no contiene dos pares ordenados distintos con la misma primera componente, es

decir,

∀𝑎 ∈ 𝐴, ∀𝑏1, 𝑏2 ∈ 𝐵, si (𝑎, 𝑏1) ∈ 𝑓 y (𝑎, 𝑏2) ∈ 𝑓, entonces 𝑏1 = 𝑏2.

De manera más informal podemos decir que una función es una correspondencia entre

los elementos de dos conjuntos 𝐴 y 𝐵 que asocia a cada elemento de 𝐴 un elemento, y

solo uno, de 𝐵.

Es habitual representar los pares de una función con la notación 𝑦 = 𝑓(𝑥) donde 𝑥 es la

primera componente del par e 𝑦 la segunda.

20

Ejemplo: La relación binaria 𝑓 = {(1, 𝑑), (2, 𝑐), (3, 𝑎), (4, 𝑐)} es una función, pero

la relación 𝑔 = {(1, 𝑑), (2, 𝑏), (3, 𝑎), (3, 𝑐)} no lo es porque existen dos pares cuya primera

componente es 3 (a esto se lo conoce como correspondencia).

Del mismo modo la función raíz cuadrada 𝑦 = 𝑓(𝑥) = √𝑥 no es una función en el

conjunto de los números reales, ya que, por ejemplo √1 = ±1.A B

![](/matematica/func1.png "Función")

![Correspondencia (no función)](/matematica/func2.png)

# Dominio

Dada una función 𝑓 ∶ 𝐴 → 𝐵, se llama dominio de 𝑓, y se

denota Dom(𝑓) al conjunto de las primeras componentes de los pares de 𝑓, es decir,

Dom(𝑓) = {𝑎 ∈ 𝐴 ∶ ∃𝑏 ∈ 𝐵, (𝑎, 𝑏) ∈ 𝑓}

# Imagen

 Dada una función 𝑓 ∶ 𝐴 → 𝐵, se llama imagen de 𝑓, y se

denota Im(𝑓) al conjunto de las segundas componentes de los pares de 𝑓, es decir,

Im(𝑓) = {𝑏 ∈ 𝐵 ∶ ∃𝑎 ∈ 𝐴, (𝑎, 𝑏) ∈ 𝑓}
