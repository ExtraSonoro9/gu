---
title: Logaritmos

---


El logaritmo de un número es el **exponente** al que hay que elevar una base fija para obtener dicho número. Es la operación inversa a la exponencial.

## Definición Básica
Si tenemos la expresión:
$$\log_b(a) = c \iff b^c = a$$

Donde:
* **$b$**: es la base (siempre positiva y distinta de 1).
* **$a$**: es el argumento (siempre positivo).
* **$c$**: es el logaritmo (el resultado).



---

## Logaritmos Especiales
1.  **Logaritmo Decimal ($\log$):** Es el logaritmo de base **10**. Si no se escribe la base, se asume que es 10.
    * Ejemplo: $\log(100) = 2$ porque $10^2 = 100$.
2.  **Logaritmo Natural o Neperiano ($\ln$):** Es el logaritmo de base **$e$** ($e \approx 2,71828$). Es crucial en cálculo y procesos de crecimiento natural.
    * Ejemplo: $\ln(e) = 1$ porque $e^1 = e$.

---

## Propiedades de los Logaritmos
Estas reglas permiten simplificar expresiones complejas y resolver ecuaciones:

| Propiedad | Fórmula | Descripción |
| :--- | :--- | :--- |
| **Logaritmo de la unidad** | $\log_b(1) = 0$ | Cualquier base elevada a 0 da 1. |
| **Logaritmo de la base** | $\log_b(b) = 1$ | Cualquier base elevada a 1 da sí misma. |
| **Producto** | $\log_b(M \cdot N) = \log_b(M) + \log_b(N)$ | El logaritmo de un producto es la suma de los logaritmos. |
| **Cociente** | $\log_b(\frac{M}{N}) = \log_b(M) - \log_b(N)$ | El logaritmo de un cociente es la resta de los logaritmos. |
| **Potencia** | $\log_b(M^k) = k \cdot \log_b(M)$ | El exponente baja multiplicando al logaritmo. |



---

## Cambio de Base
A veces necesitamos calcular un logaritmo cuya base no está en nuestra calculadora. Para ello usamos la fórmula de cambio de base:

$$\log_b(a) = \frac{\log_k(a)}{\log_k(b)}$$

*(Donde $k$ suele ser 10 o $e$ para poder usar la calculadora).*

---

## Aplicación Real: El pH en Química
Como mencionamos antes, el pH es una medida logarítmica de la concentración de iones hidrógeno $[H^+]$:

$$pH = -\log[H^+]$$

Si la concentración de $[H^+]$ es $10^{-7} \text{ M}$, entonces:
$$pH = -\log(10^{-7}) = -(-7) = 7 \text{ (Neutro)}$$

Debido a que es una escala logarítmica, un cambio de **1 unidad** de pH representa un cambio de **10 veces** en la acidez.