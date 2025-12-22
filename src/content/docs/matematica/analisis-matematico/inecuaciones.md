---
title: Inecuaciones
---


Una inecuación es una desigualdad matemática entre dos expresiones. En lugar de un signo "=", usamos:
* `<` (Menor que)
* `>` (Mayor que)
* `≤` (Menor o igual que)
* `≥` (Mayor o igual que)

---

## 1. La Regla de Oro: ¿Cuándo se invierte el signo?

Esta es la propiedad más importante y donde la mayoría comete errores. 

> **Regla:** Si multiplicas o divides ambos lados de una inecuación por un **número negativo**, el sentido de la desigualdad **se invierte**.

* **Ejemplo:**
    $-2x < 10$
    Al pasar el $-2$ dividiendo (que es negativo):
    $x > \frac{10}{-2}$
    $x > -5$ 
    *(El `<` se convirtió en `>`)*.

**¿Por qué sucede esto?**
Si tenemos $2 < 5$ y multiplicamos por $-1$, nos queda $-2$ y $-5$. En la recta numérica, $-2$ es **mayor** que $-5$. Por eso debemos girar el signo.

---

## 2. Propiedades Básicas

1.  **Suma y Resta:** Puedes sumar o restar el mismo número en ambos lados y el signo **no cambia**.
    * Si $x - 3 > 5 \implies x > 8$.
2.  **Multiplicación/División Positiva:** Si el número es positivo, el signo **no cambia**.
    * Si $2x \le 10 \implies x \le 5$.

---

## 3. Métodos de Resolución

### A. Inecuaciones Lineales
Se resuelven igual que una ecuación, despejando la $x$, pero recordando la "Regla de Oro".
* **Ejemplo:** $5x - 7 \ge 2x + 8$
    1. Juntamos las $x$: $5x - 2x \ge 8 + 7$
    2. Operamos: $3x \ge 15$
    3. Despejamos: $x \ge 5$

### B. Inecuaciones Cuadráticas (Método de los Intervalos o Bolzano)
Cuando tienes una $x^2$, como $x^2 - 9 < 0$.
1. **Factorizar:** $(x-3)(x+3) < 0$.
2. **Hallar puntos críticos:** $x=3$ y $x=-3$.
3. **Probar intervalos:** Ubicamos los puntos en la recta y probamos un número de cada sección para ver si el resultado es positivo o negativo.
4. **Elegir solución:** Como buscamos `< 0`, elegimos el intervalo negativo.

[Image: Number line divided into intervals by points -3 and 3 with signs + - +]

---

## 4. Representación de la Solución

Existen tres formas de mostrar el resultado de $x > 5$:

1.  **Forma de Conjunto:** $\{x \in \mathbb{R} \mid x > 5\}$
2.  **Forma de Intervalo:** $(5, \infty)$
    * Usa **paréntesis `()`** para `<` o `>` (abierto, no incluye el número).
    * Usa **corchetes `[]`** para `≤` o `≥` (cerrado, sí incluye el número).
3.  **Representación Gráfica:** Una flecha en la recta numérica.

---

## 5. Inecuaciones con Valor Absoluto $|x|$

* **Si $|x| < a$:** El número está "atrapado" entre el negativo y el positivo: $-a < x < a$.
* **Si $|x| > a$:** El número está en los extremos: $x < -a$ o $x > a$.

**Ejemplo:** $|x| < 3$ significa que $x$ está entre $-3$ y $3$.