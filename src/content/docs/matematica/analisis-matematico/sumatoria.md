---

title: Sumatoria
---

# La Sumatoria ($\Sigma$)

La sumatoria es un operador matemático que permite representar la suma de muchos sumandos, incluso infinitos, de manera abreviada.

---

## 1. Anatomía del Operador
El símbolo utilizado es la letra griega sigma mayúscula ($\Sigma$).

$$\sum_{i=m}^{n} a_i$$

* **$i$:** El **índice** de la suma (es como una variable contador).
* **$m$:** El **límite inferior** (donde empieza el conteo).
* **$n$:** El **límite superior** (donde termina el conteo).
* **$a_i$:** La **fórmula** o término general que se va a sumar.



---

## 2. Propiedades Fundamentales

Para manipular sumatorias en cálculos complejos, usamos estas reglas:

1.  **Propiedad Distributiva:** $\sum (a_i + b_i) = \sum a_i + \sum b_i$
2.  **Factorización de Constantes:** Si $k$ es un número que no depende de $i$, puede salir de la suma:
    $$\sum k \cdot a_i = k \cdot \sum a_i$$
3.  **Suma de una Constante:** Si sumas $k$ desde $1$ hasta $n$, el resultado es simplemente $n \cdot k$.

---

## 3. Sumas Notables (Fórmulas de Gauss)
Hay patrones que aparecen todo el tiempo en física y estadística. El joven Gauss descubrió la primera de ellas:

### Suma de los primeros $n$ números naturales:
$$1 + 2 + 3 + ... + n = \frac{n(n + 1)}{2}$$



---

## 4. Aplicación en Física: El Centro de Masa
En tu carpeta de **dinamica.md**, la sumatoria es vital para encontrar el punto de equilibrio de un objeto:

$$X_{cm} = \frac{\sum m_i x_i}{\sum m_i}$$

Esto nos dice que el centro de masa es la suma de todas las posiciones multiplicadas por su masa, dividida por la masa total.

---

## 5. El Salto al Cálculo: De $\Sigma$ a $\int$
Este es el concepto más importante para tu carpeta de **analisis-matemático**:
* Cuando la distancia entre los puntos que sumas se hace infinitamente pequeña ($\Delta x \to 0$), la **Sumatoria** se transforma en una **Integral**.

> La "S" alargada de la integral ($\int$) es, literalmente, una representación de una sumatoria continua.

[Image showing the transition from a discrete Riemann sum to a continuous definite integral]