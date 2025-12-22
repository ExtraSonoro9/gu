---

title: Permutaciones y Combinaciones

---
# Combinatoria: Permutaciones y Combinaciones

La combinatoria es la rama de las matemáticas que estudia las diferentes formas de agrupar o ordenar los elementos de un conjunto. La pregunta clave para diferenciar ambos conceptos es: **¿Importa el orden?**

---

## 1. Permutaciones (El orden SÍ importa)
Se usan cuando queremos saber de cuántas formas se pueden ordenar los elementos donde la posición de cada uno cambia el resultado.

### A. Permutación Simple (Sin repetición)
Si tenemos $n$ elementos y los usamos todos:
$$P_n = n!$$
*Ejemplo:* ¿De cuántas formas pueden quedar 3 corredores en un podio (1º, 2º, 3º)?
$3! = 3 \times 2 \times 1 = 6$ formas.

### B. Variación (Permutación de un subconjunto)
Si tenemos $n$ elementos pero solo elegimos $r$:
$$P(n, r) = \frac{n!}{(n - r)!}$$
*Ejemplo:* Una cerradura de 3 dígitos con números del 0 al 9. El orden "1-2-3" es distinto al "3-2-1".

[Image showing the difference in arrangements when order matters (Permutations)]

---

## 2. Combinaciones (El orden NO importa)
Se usan cuando seleccionamos elementos y no nos importa en qué posición queden, solo quiénes forman parte del grupo.

### Fórmula de Combinaciones:
$$C(n, r) = \binom{n}{r} = \frac{n!}{r!(n - r)!}$$

*Donde:*
* $n$: Total de elementos.
* $r$: Elementos seleccionados.

*Ejemplo:* Si tienes que elegir a 2 amigos de un grupo de 4 para ir al cine. Elegir a "Juan y Pedro" es lo mismo que elegir a "Pedro y Juan".

[Image showing that grouping A-B is the same as B-A in Combinations]

---

## 3. Cuadro Comparativo

| Característica | Permutación | Combinación |
| :--- | :--- | :--- |
| **¿Importa el orden?** | **SÍ** | **NO** |
| **Palabra clave** | Organizar / Clasificar | Sele
