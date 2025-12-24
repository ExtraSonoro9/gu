---
title: Número de Euler
---



El número $e$ es un número irracional y trascendente. Su valor aproximado es:

$$e \approx 2,718281828459...$$

Es conocido como la **base de los logaritmos naturales** y es fundamental en el cálculo, ya que describe procesos de crecimiento exponencial y decaimiento.

---

## El Origen: El Interés Compuesto
El número $e$ fue descubierto por Jacob Bernoulli al estudiar el interés compuesto. 

Imagina que tienes \$1 en el banco con un interés del $100\%$ anual:
* Si se paga **una vez** al año: tendrás \$2.
* Si se paga **cada mes**: tendrás $(1 + 1/12)^{12} \approx 2,61$.
* Si se paga **cada día**: tendrás $(1 + 1/365)^{365} \approx 2,714$.

Si los periodos de tiempo se vuelven infinitamente pequeños (interés continuo), el límite de esa ganancia es exactamente $e$.

$$e = \lim_{n \to \infty} \left( 1 + \frac{1}{n} \right)^n$$

![Euler](/mat/euler.png)



---

## La Función Exponencial $f(x) = e^x$

En cálculo, $e^x$ es una función única y "mágica" por una razón: **es su propia derivada**.
Esto significa que en cualquier punto de la curva, la pendiente (la inclinación) y el área bajo la curva son iguales al valor de la función en ese punto.

$$\frac{d}{dx}(e^x) = e^x$$



---

## La Identidad de Euler
Considerada por muchos matemáticos como "la ecuación más bella de la historia", la Identidad de Euler relaciona los cinco números más importantes de las matemáticas en una sola expresión:

$$e^{i\pi} + 1 = 0$$

* $e$: La base del crecimiento.
* $i$: La unidad de los números imaginarios ($\sqrt{-1}$).
* $\pi$: La razón de la circunferencia.
* $1$ y $0$: Las bases de la aritmética (identidad y elemento neutro).

---

## Aplicaciones en el Mundo Real

1.  **Crecimiento Biológico:** El crecimiento de poblaciones de bacterias en condiciones ideales sigue una curva exponencial de base $e$.
2.  **Datación por Carbono-14:** El decaimiento radiactivo utilizado para medir la edad de fósiles se calcula con: $N(t) = N_0 \cdot e^{-\lambda t}$.
3.  **Probabilidad:** La "Campana de Gauss" (distribución normal), que describe desde las estaturas de las personas hasta los errores de medición, utiliza $e$ en su fórmula.



---

## ¿Cómo calcular e rápidamente?
Además del límite, $e$ se puede calcular como la suma de una serie infinita de factoriales:

$$e = \frac{1}{0!} + \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \frac{1}{4!} + \dots$$
$$e = 1 + 1 + 0,5 + 0,1666 + 0,0416...$$