---
title: Teoremas de Continuidad


---
# Teoremas de Continuidad y Derivabilidad

Estos teoremas describen el comportamiento de funciones en intervalos cerrados $[a, b]$. Son la base para entender la optimización y el cálculo integral.

---

## 1. Teorema de Bolzano (Existencia de Raíces)
Si una función es continua en $[a, b]$ y toma valores de distinto signo en los extremos, entonces existe al menos un punto donde cruza el eje X.

* **Hipótesis:** $f(x)$ es continua en $[a, b]$ y $f(a) \cdot f(b) < 0$.
* **Tesis:** $\exists c \in (a, b)$ tal que $f(c) = 0$.



---

## 2. Teorema del Valor Intermedio
Si una función es continua en $[a, b]$, entonces la función toma todos los valores comprendidos entre $f(a)$ y $f(b)$.

* **Concepto:** No puedes pasar de una altura de 1 metro a 2 metros sin pasar por 1,5 metros si te mueves de forma continua.

---

## 3. Teorema de Weierstrass (Extremos Absolutos)
Si una función es continua en un intervalo cerrado y acotado $[a, b]$, entonces tiene garantizado un **máximo absoluto** y un **mínimo absoluto**.



---

## 4. Teorema de Rolle
Es un caso particular del Teorema del Valor Medio. Si la función empieza y termina a la misma altura, en algún punto la pendiente debe ser cero.

* **Hipótesis:** 1. $f(x)$ continua en $[a, b]$.
    2. $f(x)$ derivable en $(a, b)$.
    3. $f(a) = f(b)$.
* **Tesis:** $\exists c \in (a, b)$ tal que $f'(c) = 0$.

---

## 5. Teorema del Valor Medio (Lagrange)
Establece que en algún punto del intervalo, la **pendiente instantánea** (tangente) es igual a la **pendiente media** (secante) del intervalo.

### Demostración
Queremos probar que $\exists c \in (a, b)$ tal que:
$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

1.  **Definimos una función auxiliar $g(x)$** que represente la diferencia entre $f(x)$ y la recta secante que une $(a, f(a))$ y $(b, f(b))$:
    $$g(x) = f(x) - \left[ f(a) + \frac{f(b) - f(a)}{b - a} (x - a) \right]$$
2.  **Verificamos Rolle para $g(x)$:**
    * $g(a) = f(a) - f(a) = 0$.
    * $g(b) = f(b) - [f(a) + f(b) - f(a)] = 0$.
3.  **Aplicamos el Teorema de Rolle:** Como $g(a) = g(b)$, existe un $c$ tal que $g'(c) = 0$.
4.  **Derivamos $g(x)$:**
    $$g'(x) = f'(x) - \frac{f(b) - f(a)}{b - a}$$
5.  **Igualamos a cero:**
    $$0 = f'(c) - \frac{f(b) - f(a)}{b - a} \implies f'(c) = \frac{f(b) - f(a)}{b - a}$$
**Q.E.D.**



---

## Resumen de Requisitos

| Teorema | Requiere Continuidad | Requiere Derivabilidad | Conclusión Principal |
| :--- | :---: | :---: | :--- |
| **Bolzano** | Sí | No | Existe una raíz ($f(c)=0$) |
| **Weierstrass** | Sí | No | Existen Máximo y Mínimo |
| **Rolle** | Sí | Sí | Existe un punto con $f'(c)=0$ |
| **Lagrange** | Sí | Sí | Pendiente instantánea = Pendiente media |