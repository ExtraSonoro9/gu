---
title: Valor Absoluto
---


El valor absoluto de un número es su distancia respecto al cero en la recta numérica, sin importar la dirección (si es positivo o negativo).

---

## 1. Definición Formal

Se define mediante una función por partes:

$$
|x| = 
\begin{cases} 
x & \text{si } x \geq 0 \\
-x & \text{si } x < 0 
\end{cases}
$$

> **Traducción simple:** "Si el número es negativo, cámbiale el signo a positivo; si ya es positivo, déjalo igual".



---

## 2. Propiedades Fundamentales

Para operar con valor absoluto en ecuaciones complejas, usamos estas reglas:

1. **No negatividad:** $|x| \geq 0$ (El resultado siempre es positivo o cero).
2. **Simetría:** $|x| = |-x|$ (El valor absoluto de 5 es el mismo que el de -5).
3. **Producto:** $|a \cdot b| = |a| \cdot |b|$
4. **División:** $\left| \frac{a}{b} \right| = \frac{|a|}{|b|}$ (si $b \neq 0$).
5. **Raíz cuadrada de un cuadrado:** $\sqrt{x^2} = |x|$ 
   * *Ojo:* Este es un error común. $\sqrt{x^2}$ no es simplemente $x$, porque el resultado de una raíz cuadrada siempre debe ser positivo.

---

## 3. Ecuaciones con Valor Absoluto

Para resolver una ecuación del tipo $|x| = a$, debemos considerar dos casos, ya que lo que está adentro pudo haber sido positivo o negativo.

**Ejemplo:** $|2x - 3| = 7$

* **Caso 1:** $2x - 3 = 7 \implies 2x = 10 \implies x = 5$
* **Caso 2:** $2x - 3 = -7 \implies 2x = -4 \implies x = -2$

**Soluciones:** $x = \{5, -2\}$

---

## 4. Inecuaciones con Valor Absoluto

Aquí es donde el valor absoluto se vuelve una herramienta de "rango" o "margen de error":

### Caso "Menor que" ($|x| < a$)
Significa que la distancia al cero es pequeña. El número está **atrapado** entre los dos valores.
* **Regla:** $-a < x < a$
* **Ejemplo:** $|x| < 3 \implies -3 < x < 3$ (Intervalo abierto: $(-3, 3)$).

### Caso "Mayor que" ($|x| > a$)
Significa que la distancia al cero es grande. El número está en los **extremos**.
* **Regla:** $x < -a$ **o** $x > a$
* **Ejemplo:** $|x| > 3 \implies x < -3$ o $x > 3$ (Intervalo: $(-\infty, -3) \cup (3, \infty)$).



---

## 5. La Función Valor Absoluto $f(x) = |x|$

Si graficamos esta función, siempre obtendremos una forma de **"V"**. 
* El punto más bajo de la V (el vértice) está en $(0,0)$ si no hay desplazamientos.
* No tiene valores en el eje $y$ negativo.



---

## 6. Aplicación Práctica: Margen de Error
En ingeniería, si una pieza debe medir $10 \, cm$ con un error máximo de $0,05 \, cm$, lo escribimos así:
$$|L - 10| \leq 0,05$$
Esto garantiza que la longitud $L$ esté entre $9,95$ y $10,05$.