---
title: Polinomios y formas de encontrar sus raíces


---


Cuando tenemos un polinomio, existe una conexión directa y "mágica" entre sus coeficientes y la suma o producto de sus raíces. Estas son las llamadas **Relaciones de Vieta**.

---

## 1. El Polinomio de Segundo Grado (Cuadrático)

Sea el polinomio: $ax^2 + bx + c = 0$, con raíces $x_1$ y $x_2$.

* **Suma de las raíces:** $x_1 + x_2 = -\frac{b}{a}$
* **Producto de las raíces:** $x_1 \cdot x_2 = \frac{c}{a}$



---

## 2. El Polinomio de Tercer Grado (Cúbico)

Sea el polinomio: $ax^3 + bx^2 + cx + d = 0$, con raíces $x_1, x_2, x_3$.

1.  **Suma simple:** $x_1 + x_2 + x_3 = -\frac{b}{a}$
2.  **Suma de productos dobles:** $x_1x_2 + x_1x_3 + x_2x_3 = \frac{c}{a}$
3.  **Producto de las tres:** $x_1 \cdot x_2 \cdot x_3 = -\frac{d}{a}$

---

## 3. Regla General (Para grado $n$)

Para cualquier polinomio $P(x) = a_nx^n + a_{n-1}x^{n-1} + ... + a_0$:

* La **suma** de todas las raíces siempre es: $-\frac{a_{n-1}}{a_n}$.
* El **producto** de todas las raíces es: $(-1)^n \frac{a_0}{a_n}$.
    * *(Si el grado es par, el producto es positivo; si es impar, es negativo respecto al signo de $a_0$).*



---

## 4. Ejemplo Práctico: ¿Para qué sirve esto?

Imagina que te dan el polinomio $x^2 - 5x + 6 = 0$ y te piden hallar las raíces.

1.  Por Vieta sabemos que:
    * $x_1 + x_2 = -(-5)/1 = 5$
    * $x_1 \cdot x_2 = 6/1 = 6$
2.  **Pensamiento lógico:** ¿Qué dos números sumados dan 5 y multiplicados dan 6?
3.  **Resultado:** Las raíces son **2** y **3**. 
    *(¡Lo resolviste mentalmente sin usar la fórmula de Bhaskara!)*.

---

## 5. Otras Estrategias para obtener Raíces

Además de las relaciones de Vieta, en tu repositorio deberías considerar estos métodos clásicos:

### A. Teorema del Resto y del Factor
Si al evaluar $P(k)$ el resultado es $0$, entonces $(x - k)$ es un factor del polinomio y $k$ es una raíz.

### B. Regla de Ruffini
Ideal para dividir polinomios por $(x - k)$ y bajar el grado del polinomio original de forma rápida.

### C. Teorema de las Raíces Racionales
Si el polinomio tiene coeficientes enteros, las posibles raíces racionales son los divisores del término independiente ($a_0$) divididos por los divisores del coeficiente principal ($a_n$).

---

## 6. Utilidad en Ingeniería y Física
Estas relaciones se usan en **Teoría de Control** y **Vibraciones Mecánicas** para analizar la estabilidad de un sistema simplemente mirando los coeficientes de su "ecuación característica", sin necesidad de resolverla completamente.