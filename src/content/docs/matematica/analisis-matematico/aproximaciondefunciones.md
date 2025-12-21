---
title: Aproximar Funciones


---
# Aproximación de Funciones (Linealización)

La aproximación por diferenciales utiliza la recta tangente en un punto conocido $a$ para estimar el valor de una función en un punto cercano $x$. La fórmula fundamental es:

$$f(x) \approx f(a) + f'(a)(x - a)$$

Donde:
* $f(a)$: Valor exacto en el punto fácil de calcular.
* $f'(a)$: La pendiente (derivada) en ese punto.
* $(x - a)$: La distancia o error ($\Delta x$).

---

## 1. Pasos para la Aproximación

Para calcular un valor difícil (como $\sqrt{14}$):
1. **Definir la función:** $f(x) = \sqrt{x}$.
2. **Elegir un punto cercano "fácil" ($a$):** Buscamos el cuadrado perfecto más cercano a 14, que es $16$ (o 9, pero 16 está más cerca).
3. **Calcular la derivada:** $f'(x) = \frac{1}{2\sqrt{x}}$.
4. **Evaluar en el punto fácil ($a=16$):**
   * $f(16) = \sqrt{16} = 4$.
   * $f'(16) = \frac{1}{2\sqrt{16}} = \frac{1}{8} = 0.125$.
5. **Calcular la diferencia ($\Delta x$):** $x - a = 14 - 16 = -2$.

---

## 2. Ejemplo: Calcular $\sqrt{14}$ con 3 cifras significativas

Aplicamos la fórmula:
$$f(14) \approx f(16) + f'(16) \cdot (14 - 16)$$



1. **Sustituir valores:**
   $$f(14) \approx 4 + (0.125) \cdot (-2)$$
2. **Operar:**
   $$f(14) \approx 4 - 0.25$$
   $$f(14) \approx 3.75$$

**Resultado:** La aproximación es **3.75**.
*(Nota: El valor real es $\approx 3.741$. Nuestra aproximación tiene un error de apenas el 0.24%).*

---

## 3. Cifras Significativas y Error

Al trabajar con aproximaciones, debemos respetar la precisión requerida:
* **Cifras significativas:** En nuestro resultado **3.75**, tenemos tres cifras significativas.
* **Error de aproximación:** Cuanto más lejos esté $x$ de $a$, mayor será el error, ya que la curva se separa de la recta tangente.

---

## 4. Aplicación en Ingeniería

Este método es la base de:
* **Análisis de errores:** Para saber cómo se propaga el error de una medición en un diseño.
* **Algoritmos de computación:** Muchos procesadores usan métodos de aproximación (como el Método de Newton-Raphson) para resolver raíces y potencias rápidamente.