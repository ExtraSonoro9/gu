---
title: Indeterminaciones
---

## 6.8 Indeterminaciones y su resolución

Al aplicar el Álgebra de límites, pueden surgir ciertas expresiones en las que el límite no queda determinado de forma directa, sino que depende de las funciones concretas que intervienen. Estas expresiones se denominan indeterminaciones.

### Tipos de indeterminaciones

Las principales indeterminaciones que pueden surgir al calcular límites son:

* De tipo cociente: $\frac{0}{0}$ y $\frac{\infty}{\infty}$
* De tipo producto: $0 \cdot \infty$
* De tipo diferencia: $\infty - \infty$
* De tipo potencia: $1^\infty$, $\infty^0$ y $0^0$

### Resolución de una indeterminación de tipo cociente

Las indeterminaciones de la forma $\frac{0}{0}$ y $\frac{\infty}{\infty}$ se resuelven dependiendo del tipo de funciones involucradas.

#### Polinomios y funciones racionales

Si $f(x) = \frac{P(x)}{Q(x)}$ es una función racional que presenta una indeterminación de tipo $\frac{0}{0}$ cuando $x \rightarrow a$, esto indica que $P(x)$ y $Q(x)$ son divisibles por $(x-a)$. La indeterminación se resuelve simplificando el factor $(x-a)$ del numerador y denominador.

**División por el término de mayor orden en funciones racionales**
Si $f(x) = \frac{P(x)}{Q(x)}$ es una función racional que presenta una indeterminación de tipo $\frac{\infty}{\infty}$ cuando $x \rightarrow \pm\infty$, se puede resolver dividiendo $P(x)$ y $Q(x)$ por el término de mayor grado de ambos polinomios\[cite: 527, 528].

**Ejemplo:**
La función $f(x) = \frac{x^3 - 3x + 2}{x^4 - 4x + 3} \rightarrow \frac{\infty}{\infty}$ cuando $x \rightarrow \infty$\[cite: 527, 528].
Para resolver la indeterminación dividimos numerador y denominador por $x^4$, que es el término de mayor grado\[cite: 527, 528]:
$$\lim\_{x \rightarrow \infty} \frac{x^3 - 3x + 2}{x^4 - 4x + 3} = \lim\_{x \rightarrow \infty} \frac{\frac{x^3}{x^4} - \frac{3x}{x^4} + \frac{2}{x^4}}{\frac{x^4}{x^4} - \frac{4x}{x^4} + \frac{3}{x^4}} = \lim\_{x \rightarrow \infty} \frac{\frac{1}{x} - \frac{3}{x^3} + \frac{2}{x^4}}{1 - \frac{4}{x^3} + \frac{3}{x^4}}$$
Como $\lim\_{x \rightarrow \infty} \frac{c}{x^n} = 0$ para $n>0$, el límite resulta:
$$\frac{0 - 0 + 0}{1 - 0 + 0} = \frac{0}{1} = 0$$

### Resolución de una indeterminación de tipo producto

La indeterminación de la forma $0 \cdot \infty$ se transforma en una indeterminación de tipo cociente $\frac{0}{0}$ o $\frac{\infty}{\infty}$. Si tenemos $\lim\_{x \rightarrow a} f(x) \cdot g(x)$ donde $f(x) \rightarrow 0$ y $g(x) \rightarrow \infty$, podemos reescribirlo como:
$$\lim\_{x \rightarrow a} \frac{f(x)}{1/g(x)} \rightarrow \frac{0}{0} \quad \text{o} \quad \lim\_{x \rightarrow a} \frac{g(x)}{1/f(x)} \rightarrow \frac{\infty}{\infty}$$

### Resolución de una indeterminación de tipo potencia

Las indeterminaciones de la forma $1^\infty$, $\infty^0$ y $0^0$ se resuelven utilizando la propiedad de los logaritmos. Si $\lim\_{x \rightarrow a} f(x)^{g(x)}$ es una indeterminación, calculamos el límite del logaritmo neperiano de la función:
$$L = \lim\_{x \rightarrow a} f(x)^{g(x)} \implies \ln(L) = \lim\_{x \rightarrow a} \ln\left(f(x)^{g(x)}\right) = \lim\_{x \rightarrow a} g(x) \ln(f(x))$$
La nueva expresión $\lim\_{x \rightarrow a} g(x) \ln(f(x))$ se convierte en una indeterminación de tipo $0 \cdot \infty$, que se resuelve según el punto anterior y, finalmente, se utiliza $L = e^{\ln(L)}$ para obtener el límite original.

### Resolución de una indeterminación de tipo diferencia

La indeterminación de la forma $\infty - \infty$ se resuelve generalmente transformándola en una indeterminación de tipo cociente $\frac{0}{0}$ o $\frac{\infty}{\infty}$ mediante la multiplicación por el conjugado, si hay raíces cuadradas, o factorizando.

**Ejemplo con funciones racionales:**
$$\lim\_{x \rightarrow \infty} \left(\frac{x^2}{x+1} - x\right)$$
Restamos las fracciones:
$$\lim\_{x \rightarrow \infty} \left(\frac{x^2 - x(x+1)}{x+1}\right) = \lim\_{x \rightarrow \infty} \left(\frac{x^2 - x^2 - x}{x+1}\right) = \lim\_{x \rightarrow \infty} \left(\frac{-x}{x+1}\right)$$
Ahora es una indeterminación $\frac{\infty}{\infty}$, que se resuelve dividiendo por el término de mayor grado ($x$):
$$\lim\_{x \rightarrow \infty} \frac{\frac{-x}{x}}{\frac{x}{x} + \frac{1}{x}} = \lim\_{x \rightarrow \infty} \frac{-1}{1 + \frac{1}{x}} = \frac{-1}{1 + 0} = -1$$

#### Cambio de variable

Si $\lim\_{x \rightarrow a} f(x)$ presenta una indeterminación, puede ser útil aplicar un cambio de variable para transformar el límite a una forma más sencilla, generalmente a un límite cuando $t \rightarrow 0$.

**Ejemplo:**
Calcular el límite $\lim\_{x \rightarrow 1} \frac{\sqrt{x} - 1}{x - 1}$.
Es una indeterminación de tipo $\frac{0}{0}$.

Hacemos el cambio de variable $t = x - 1$. Si $x \rightarrow 1$, entonces $t \rightarrow 0$.
Despejando $x$, tenemos $x = t + 1$.
$$\lim\_{x \rightarrow 1} \frac{\sqrt{x} - 1}{x - 1} = \lim\_{t \rightarrow 0} \frac{\sqrt{t + 1} - 1}{t}$$
Multiplicamos por el conjugado:
$$= \lim\_{t \rightarrow 0} \frac{(\sqrt{t + 1} - 1)(\sqrt{t + 1} + 1)}{t(\sqrt{t + 1} + 1)} = \lim\_{t \rightarrow 0} \frac{(t + 1) - 1}{t(\sqrt{t + 1} + 1)}$$
$$= \lim\_{t \rightarrow 0} \frac{t}{t(\sqrt{t + 1} + 1)} = \lim\_{t \rightarrow 0} \frac{1}{\sqrt{t + 1} + 1}$$
Sustituyendo $t=0$:
$$= \frac{1}{\sqrt{0 + 1} + 1} = \frac{1}{1 + 1} = \frac{1}{2}$$

**Nota**
Este método de cambio de variable a $t \rightarrow 0$ es especialmente útil cuando se quieren aplicar los infinitésimos equivalentes, ya que la tabla de equivalencias está definida para $x \rightarrow 0$.
