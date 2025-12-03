---
title: Conjuntos
---

Un conjunto es a una colección o agrupación bien definida de objetos que puede considerarse en sí misma otro objeto. Para representar un conjunto se indican sus elementos entre llaves y normalmente se utilizarán letras mayúsculas para referirse a ellos.

Algunos ejemplos de conjuntos son:

• El conjunto de los días de la semana es 𝐴 = {L, M, X, J, V, S, D}.

• El conjunto de los colores básicos es 𝐵 = {rojo, verde, azul}.

• El conjunto de los puntos de un dado 𝐶 = {1, 2, 3, 4, 5, 6}.

• El conjunto de los números naturales pares: 𝐷 = {2, 4, 6, …}.

#### Elementos

Los objetos que componen un conjunto se llaman elementos o miembros del conjunto.

Los elementos de un conjunto pueden ser cualquier cosa (días, colores, personas, etc), pero en este curso nos centraremos los conjuntos numéricos, es decir, los conjuntos cuyos elementos son números, ya que son los que se estudian en el Análisis Matemático.

Existen dos formas de definir un conjunto: por extensión o por comprensión. La definición

extensiva consiste en listar de manera explícita todos sus elementos, como por ejemplo

{1, 2, 3}, mientras que la intensiva o por comprensión, consiste en dar una propiedad

que cumplen los elementos del conjunto y solo ellos, como por ejemplo el conjunto de los números naturales menores que 4. En este último caso se suele utilizar la notación

{𝑥 ∶ 𝑃 (𝑥)}, donde 𝑃 (𝑥) es la propiedad que cumple 𝑥.

Mientras que las definiciones por extensión no presentan problemas, hay que tener cuida-

do con las definiciones por comprensión, pues no todas las propiedades definen conjuntos

válidos, tal y como demostró Bertrand Russell con su famosa paradoja del barbero.

#### Pertenencia

Si 𝑎 es un elemento de un conjunto 𝐴, se dice que 𝑎

pertenece a 𝐴 y se denota 𝑎 ∈ 𝐴. Por el contrario, si 𝑎 no es un elemento del conjunto

𝐴, se dice que no pertenece a 𝐴 y se denota 𝑎 ∉ 𝐴.

Ejemplo: Si 𝐴 es el conjunto de los números naturales pares, 2 ∈ 𝐴, pero 1 ∉ 𝐴.

Definición 1.4 (Igualdad). Se dice que dos conjuntos 𝐴 y 𝐵 son iguales, y se denota

𝐴 = 𝐵, si tienen exactamente los mismos elementos. En caso contrario se escribe 𝐴 ≠ 𝐵.

Conviene remarcar que en un conjunto no puede haber elementos repetidos y tampoco

importa el orden en que se listan los elementos.

Ejemplo 1.3. {1, 2, 3} = {3, 1, 2}.

La igualdad de conjuntos es una relación de equivalencia, es decir,

satisface las propiedades:

1\. Reflexiva: 𝐴 = 𝐴.

2\. Simétrica: Si 𝐴 = 𝐵 entonces 𝐵 = 𝐴.

3\. Transitiva: 𝐴 = 𝐵 y 𝐵 = 𝐶, entonces 𝐴 = 𝐶.

#### Subconjunto

Se dice que un conjunto 𝐴 es un subconjunto o está

incluído en otro conjunto 𝐵, y se denota 𝐴 ⊆ 𝐵, si todos los elementos de 𝐴 pertenecen

a 𝐵, es decir,

∀𝑥 ∈ 𝐴, 𝑥 ∈ 𝐵

Cuando 𝐴 ⊆ 𝐵 pero 𝐴 ≠ 𝐵 se dice que 𝐴 está estríctamente incluido en 𝐵 o que 𝐴 es

un subconjunto propio de 𝐵 y se escribe 𝐴 ⊊ 𝐵.

Ejemplo: {1, 2, 3} ⊆ {3, 1, 2} y {1, 3} ⊊ {3, 1, 2}.

Proposición: La inclusión de conjuntos es una relación de orden parcial, es decir,

satisface las propiedades:

1\. Reflexiva: 𝐴 ⊆ 𝐴.

2\. Antisimétrica: Si 𝐴 ⊆ 𝐵 y 𝐵 ⊆ 𝐴, entonces 𝐴 = 𝐵.

3\. Transitiva: 𝐴 ⊆ 𝐵 y 𝐵 ⊆ 𝐶, entonces 𝐴 ⊆ 𝐶.

Definición 1.6 (Conjunto vacío). El conjunto que no tiene ningún elemento se llama

conjunto vacío y se denota ∅

### Álgebra de conjuntos

A continuación se definen las principales operaciones sobre conjuntos y sus propiedades.

#### Unión

Dados dos conjuntos 𝐴 y 𝐵, se llama unión de 𝐴 y 𝐵, y se

denota 𝐴 ∪ 𝐵, al conjunto de todos los elementos que pertenecen al menos a uno de los

conjuntos 𝐴 y 𝐵.

𝐴 ∪ 𝐵 = {𝑥 ∶ 𝑥 ∈ 𝐴 o 𝑥 ∈ 𝐵}.

![](/conjuntos3.png)

Ejemplo: Dado el conjunto de los números que contiene un dado, Ω =

{1, 2, 3, 4, 5, 6} y sus subconjuntos 𝐴 = {2, 4, 6} y 𝐵 = {1, 2, 3, 4},la unión de 𝐴 y 𝐵 es

𝐴 ∪ 𝐵 = {1, 2, 3, 4, 6}.

#### Intersección

 Dados dos conjuntos 𝐴 y 𝐵, se llama intersección de 𝐴

y 𝐵, y se denota 𝐴 ∩ 𝐵, al conjunto de todos los elementos comunes a 𝐴 y 𝐵.

𝐴 ∩ 𝐵 = {𝑥 ∶ 𝑥 ∈ 𝐴 y 𝑥 ∈ 𝐵}.

![](/conjunto.png)

Ejemplo: Dado el conjunto de los números que contiene un dado, Ω =

{1, 2, 3, 4, 5, 6} y sus subconjuntos 𝐴 = {2, 4, 6} y 𝐵 = {1, 2, 3, 4},la intersección de 𝐴 y

𝐵 es 𝐴 ∩ 𝐵 = {2, 4}.
