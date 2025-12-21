---
title: Integrales

---
# El Cálculo Integral: Conceptos, Propiedades y Métodos

La integración es el proceso inverso a la derivación. Mientras que la derivada mide la rapidez de cambio, la integral acumula esos cambios para hallar un total (como un área o un volumen).

---

## 1. Definición y el Teorema Fundamental

### La Integral como Área
Matemáticamente, la integral definida representa el área bajo la curva de una función $f(x)$ entre dos puntos $a$ y $b$.
$$\int_a^b f(x) \, dx$$

### El Teorema Fundamental del Cálculo
Establece que si $F(x)$ es la antiderivada de $f(x)$, entonces:
$$\int_a^b f(x) \, dx = F(b) - F(a)$$
*(Esto se conoce como la Regla de Barrow).*

---

## 2. Propiedades de la Integral
Estas reglas te permiten "limpiar" la operación antes de resolverla:

1.  **Linealidad (Suma/Resta):** $\int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx$
2.  **Factor constante:** $\int k \cdot f(x) \, dx = k \cdot \int f(x) \, dx$ (Las constantes salen de la integral).
3.  **Inversión de límites:** $\int_a^b f(x) \, dx = -\int_b^a f(x) \, dx$

---

## 3. Métodos de Resolución con Ejemplos

### A. Sustitución (Cambio de Variable)
Se usa cuando ves una función y su derivada dentro de la misma integral.
* **Ejemplo:** $\int \frac{\ln(x)}{x} dx$
* **Paso:** Hacemos $u = \ln(x)$, entonces $du = \frac{1}{x} dx$.
* **Resultado:** $\int u \, du = \frac{u^2}{2} + C \rightarrow \mathbf{\frac{(\ln(x))^2}{2} + C}$

### B. Integración por Partes
Para productos de funciones de distinta naturaleza (Algebraica x Logarítmica, etc.).
* **Fórmula:** $\int u \, dv = uv - \int v \, du$ (Usa el truco **LIATE** para elegir $u$).
* **Ejemplo:** $\int x \cdot \cos(x) dx$
* **Paso:** $u=x, dv=\cos(x) \rightarrow du=dx, v=\sin(x)$.
* **Resultado:** $x \sin(x) - \int \sin(x) dx = \mathbf{x \sin(x) + \cos(x) + C}$

### C. Fracciones Parciales
Para divisiones de polinomios. Descomponemos una fracción difícil en varias simples.
* **Ejemplo:** $\int \frac{1}{(x-2)(x-3)} dx$
* **Paso:** Se separa en $\frac{A}{x-2} + \frac{B}{x-3}$. Tras resolver, $A=-1$ y $B=1$.
* **Resultado:** $\int \frac{-1}{x-2} + \frac{1}{x-3} = \mathbf{\ln\left|\frac{x-3}{x-2}\right| + C}$

### D. Sustitución Trigonométrica
Para eliminar raíces de la forma $\sqrt{a^2 - x^2}$ usando el Teorema de Pitágoras.
* **Ejemplo:** $\int \sqrt{1 - x^2} dx$
* **Paso:** Hacemos $x = \sin(\theta)$, lo que convierte la raíz en $\cos(\theta)$.
* **Resultado:** $\mathbf{\frac{1}{2}(\arcsin(x) + x\sqrt{1-x^2}) + C}$

### E. Integrales Trigonométricas (Potencias)
Para potencias de seno y coseno.
* **Ejemplo:** $\int \sin^3(x) dx$
* **Paso:** Separamos en $\sin^2(x) \cdot \sin(x)$ y usamos $1-\cos^2(x)$.
* **Resultado:** $\mathbf{\frac{\cos^3(x)}{3} - \cos(x) + C}$

---

## 4. Resumen de decisión: ¿Qué método usar?

1.  **¿Es inmediata?** Revisa la tabla básica.
2.  **¿Hay una "función madre" y su derivada?** $\rightarrow$ **Sustitución**.
3.  **¿Es un producto (ej. $x \cdot e^x$)?** $\rightarrow$ **Por Partes**.
4.  **¿Es una división de polinomios?** $\rightarrow$ **Fracciones Parciales**.
5.  **¿Hay raíces cuadradas molestas?** $\rightarrow$ **Sust. Trigonométrica**.

[Image: Flowchart for choosing the correct integration method]