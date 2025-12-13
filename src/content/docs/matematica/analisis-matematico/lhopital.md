---
title: Regla de L'Hopital
---

### Regla de L'Hôpital

La Regla de L'Hôpital proporciona un método para calcular límites de indeterminaciones de tipo $\frac{0}{0}$ y $\frac{\infty}{\infty}$ utilizando las derivadas de las funciones.

**Teorema (Regla de L'Hôpital)**
Sean $f$ y $g$ dos funciones derivables en un entorno de $a$, y supongamos que $g'(x) \neq 0$ en ese entorno. Si el límite $\lim\_{x \rightarrow a} \frac{f(x)}{g(x)}$ presenta una indeterminación de tipo $\frac{0}{0}$ o $\frac{\infty}{\infty}$, entonces, si existe el límite del cociente de las derivadas, se cumple que:
$$\lim\_{x \rightarrow a} \frac{f(x)}{g(x)} = \lim\_{x \rightarrow a} \frac{f'(x)}{g'(x)}$$
El teorema es válido también si $a = \pm \infty$.

**Ejemplo:**
Calcular el límite $\lim\_{x \rightarrow 0} \frac{\sin(x)}{x}$.
Es una indeterminación de tipo $\frac{0}{0}$. Aplicando la Regla de L'Hôpital:
$$\lim\_{x \rightarrow 0} \frac{\sin(x)}{x} = \lim\_{x \rightarrow 0} \frac{(\sin(x))'}{(x)'} = \lim\_{x \rightarrow 0} \frac{\cos(x)}{1} = \frac{\cos(0)}{1} = 1$$

**Ejemplo:**
Calcular el límite $\lim\_{x \rightarrow 0} \frac{e^x - 1 - x}{x^2}$.
Es una indeterminación de tipo $\frac{0}{0}$. Aplicando la Regla de L'Hôpital:
$$\lim\_{x \rightarrow 0} \frac{e^x - 1 - x}{x^2} = \lim\_{x \rightarrow 0} \frac{e^x - 1}{2x}$$
Esta sigue siendo una indeterminación de tipo $\frac{0}{0}$, por lo que aplicamos de nuevo la Regla de L'Hôpital:
$$\lim\_{x \rightarrow 0} \frac{e^x - 1}{2x} = \lim\_{x \rightarrow 0} \frac{(e^x - 1)'}{(2x)'} = \lim\_{x \rightarrow 0} \frac{e^x}{2} = \frac{e^0}{2} = \frac{1}{2}$$

**Ejemplo:**
Calcular el límite $\lim\_{x \rightarrow \infty} \frac{e^x}{x}$.
Es una indeterminación de tipo $\frac{\infty}{\infty}$. Aplicando la Regla de L'Hôpital:
$$\lim\_{x \rightarrow \infty} \frac{e^x}{x} = \lim\_{x \rightarrow \infty} \frac{(e^x)'}{(x)'} = \lim\_{x \rightarrow \infty} \frac{e^x}{1} = \infty$$

**Nota sobre otras indeterminaciones**
La Regla de L'Hôpital solo se puede aplicar a indeterminaciones de tipo cociente $\frac{0}{0}$ o $\frac{\infty}{\infty}$. Las otras indeterminaciones deben transformarse primero en alguna de estas formas:

* $0 \cdot \infty$: Se transforma en $\frac{0}{0}$ o $\frac{\infty}{\infty}$ usando $f \cdot g = \frac{f}{1/g}$ o $f \cdot g = \frac{g}{1/f}$.
* $\infty - \infty$: Se transforma en cociente usando un común denominador o conjugado.
* $1^\infty, \infty^0, 0^0$: Se transforman usando logaritmos en la forma $0 \cdot \infty$, y de ahí a $\frac{0}{0}$ o $\frac{\infty}{\infty}$.

**Ejemplo:**
Calcular el límite $\lim\_{x \rightarrow 0^+} x \ln(x)$.
Es una indeterminación de tipo $0 \cdot \infty$. Lo transformamos en $\frac{\infty}{\infty}$:
$$\lim\_{x \rightarrow 0^+} x \ln(x) = \lim\_{x \rightarrow 0^+} \frac{\ln(x)}{1/x}$$
Ahora aplicamos la Regla de L'Hôpital:
$$\lim\_{x \rightarrow 0^+} \frac{(\ln(x))'}{(1/x)'} = \lim\_{x \rightarrow 0^+} \frac{1/x}{-1/x^2} = \lim\_{x \rightarrow 0^+} -x = 0$$
