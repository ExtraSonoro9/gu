---
title: Indeterminaciones
---

 

Antes de usar L'Hôpital, existen métodos clásicos basados en manipular la expresión para "cancelar" lo que causa el problema.

---

## 1. El Truco del "Uno Inteligente" ($1 = \frac{a}{a}$)

Este es el método más potente. Consiste en multiplicar y dividir por la misma expresión. No cambias el valor del número (porque multiplicas por 1), pero sí cambias su forma.

### A. Racionalización (Multiplicar por el Conjugado)
Se usa cuando hay raíces cuadradas que generan $0/0$.
* **El truco:** Si tienes $(\sqrt{a} - b)$, multiplica y divide por $(\sqrt{a} + b)$.
* **Por qué funciona:** Usas la diferencia de cuadrados $(x-y)(x+y) = x^2 - y^2$ para eliminar la raíz.

**Ejemplo:** $\lim_{x \to 0} \frac{\sqrt{x+1}-1}{x}$
1. Multiplicamos por $\frac{\sqrt{x+1}+1}{\sqrt{x+1}+1}$.
2. Arriba queda: $(\sqrt{x+1})^2 - 1^2 = x+1-1 = x$.
3. La $x$ de arriba se cancela con la de abajo.
4. **Resultado:** Al evaluar, el límite es $1/2$.



---

## 2. Límites al Infinito ($\frac{\infty}{\infty}$)

Cuando $x$ tiende a infinito, el método normal es **dividir todos los términos por la $x$ de mayor potencia**.

* **Lógica:** Sabemos que $\lim_{x \to \infty} \frac{1}{x} = 0$.
* **Regla rápida:**
  * Si el grado de arriba es mayor: el resultado es $\infty$.
  * Si el grado de abajo es mayor: el resultado es $0$.
  * Si los grados son iguales: el resultado es el cociente de los coeficientes principales.

---

## 3. Indeterminación $1^\infty$ (El Número $e$)

Cuando un límite tiene la forma $1^\infty$, usamos la definición del número de Euler:
$$\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$$

**Método de transformación:**
Si tienes $\lim (f(x))^{g(x)}$, puedes usar la fórmula:
$$e^{\lim_{x \to a} [g(x) \cdot (f(x) - 1)]}$$



---

## 4. Factorización (Para $\frac{0}{0}$ en polinomios)

Si tienes polinomios, la indeterminación ocurre porque arriba y abajo hay un factor común que vale cero.
1. Factorizas (usando Ruffini, trinomio cuadrado perfecto, etc.).
2. Cancelas el factor conflictivo.
3. Evalúas de nuevo.

**Ejemplo:** $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$
* Factorizamos arriba: $\frac{(x-2)(x+2)}{x-2}$.
* Cancelamos $(x-2)$.
* **Resultado:** $2 + 2 = 4$.



---

## 5. Resumen de Estrategias

| Indeterminación | Método Recomendado |
| :--- | :--- |
| **$0/0$ (Polinomios)** | Factorizar y simplificar. |
| **$0/0$ (Raíces)** | Multiplicar por el conjugado. |
| **$\infty/\infty$** | Dividir por la mayor potencia de $x$. |
| **$\infty - \infty$** | Operar la fracción o usar el conjugado. |
| **$1^\infty$** | Transformar a la forma del número $e$. |