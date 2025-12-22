---
title: Limites
---


Un límite describe el valor al que se aproxima una función $f(x)$ a medida que la variable $x$ se acerca a un valor determinado $a$, sin llegar necesariamente a tocarlo.

Se escribe como:
$$\lim_{x \to a} f(x) = L$$

---

## 1. Definición Intuida y Gráfica
Decimos que el límite existe si, al acercarnos a $a$ por la izquierda ($x \to a^-$) y por la derecha ($x \to a^+$), la función tiende al mismo valor $L$.

* **Límites Laterales:** Para que el límite general exista, los límites laterales deben ser iguales:
  $$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L$$



---

## 2. Propiedades de los Límites
Si $\lim_{x \to a} f(x) = L$ y $\lim_{x \to a} g(x) = M$, se cumple:

1. **Suma/Resta:** $\lim (f \pm g) = L \pm M$
2. **Producto:** $\lim (f \cdot g) = L \cdot M$
3. **Cociente:** $\lim (f / g) = L / M$ (si $M \neq 0$)
4. **Potencia:** $\lim (f^g) = L^M$
5. **Constante:** $\lim (k \cdot f) = k \cdot L$

---

## 3. Indeterminaciones
A veces, al evaluar un límite directamente, obtenemos expresiones que no tienen un valor definido. Las más comunes son:

* $\frac{0}{0}$
* $\frac{\infty}{\infty}$
* $\infty - \infty$

**¿Cómo resolverlas?**
* **Factorización:** Para eliminar el término que causa el cero en el denominador.
* **Racionalización:** Si hay raíces cuadradas.
* **L'Hôpital:** (Si ya sabes derivar) para resolver $0/0$ o $\infty/\infty$.

---

## 4. Límites al Infinito
Estudian el comportamiento de la función cuando $x$ se hace extremadamente grande o pequeño. Estos límites definen las **Asíntotas Horizontales**.

* Si el grado del numerador es **menor** al del denominador, el límite es $0$.
* Si los grados son **iguales**, el límite es el cociente de los coeficientes principales.



---

## 5. Límites Trigonométricos Notables
Existen límites especiales que son la base para las derivadas de funciones trigonométricas:

$$\lim_{x \to 0} \frac{\sin(x)}{x} = 1$$
$$\lim_{x \to 0} \frac{1 - \cos(x)}{x} = 0$$

---

## 6. Ejemplo Práctico (Factorización)
Calcula $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$.

1. Al evaluar directamente: $\frac{2^2 - 4}{2 - 2} = \frac{0}{0}$ (Indeterminado).
2. Factorizamos el numerador: $\frac{(x-2)(x+2)}{x-2}$.
3. Simplificamos: $x + 2$.
4. Evaluamos de nuevo: $2 + 2 = 4$.
**Resultado:** El límite es $4$.

# Discontinuidades, Asíntotas y Rectas de la Derivada

Este capítulo conecta el concepto de límite con la forma física de las gráficas y la inclinación de las curvas.

---

## 1. Tipos de Discontinuidad (Saltos)

Una función es continua si puedes dibujarla sin levantar el lápiz. Si no, presenta una discontinuidad:

* **Evitable:** Existe el límite, pero no coincide con el valor del punto (o el punto no existe). Se ve como un "agujero".
* **Inevitable de Salto Finito:** Los límites laterales existen pero son diferentes.
* **Inevitable de Salto Infinito:** Uno o ambos límites laterales tienden a $\pm \infty$.

[Image showing point, finite jump, and infinite jump discontinuities]

---

## 2. Asíntotas: El Comportamiento Límite

Las asíntotas son rectas a las que la función se acerca infinitamente pero nunca toca (usualmente).

### A. Asíntota Vertical (A.V.)
Ocurre en valores de $x$ donde la función explota al infinito.
* **Condición:** $\lim_{x \to a} f(x) = \pm \infty$.
* Se encuentran buscando los valores que hacen cero el denominador (y no el numerador).

### B. Asíntota Horizontal (A.H.)
Describe qué hace la función cuando $x$ es muy grande.
* **Condición:** $\lim_{x \to \pm \infty} f(x) = L$.
* Si existe A.H., la recta es $y = L$.

---

## 3. Construcción de Rectas (Secante, Tangente y Normal)

Estas rectas nos permiten estudiar la pendiente de una curva en un punto $P(a, f(a))$.

### A. Recta Secante
Corta a la curva en dos puntos. Su pendiente es el cociente incremental:
$$m_{sec} = \frac{f(a+h) - f(a)}{h}$$

### B. Recta Tangente
Toca a la curva en un solo punto. Su pendiente es la **derivada** en ese punto: $m_t = f'(a)$.
* **Ecuación:** $y - f(a) = f'(a)(x - a)$

### C. Recta Normal
Es la recta **perpendicular** a la tangente en el punto de contacto.
* **Pendiente:** Es la inversa negativa de la tangente: $m_n = -\frac{1}{f'(a)}$.
* **Ecuación:** $y - f(a) = -\frac{1}{f'(a)}(x - a)$

[Image showing a curve with a tangent line and a perpendicular normal line at a point]

---

## 4. Ejemplo Práctico

Dada $f(x) = x^2$, hallar la recta tangente y normal en $x = 1$.

1. **Punto:** $f(1) = 1^2 = 1$. Punto $(1, 1)$.
2. **Derivada:** $f'(x) = 2x$. En el punto: $f'(1) = 2$. (Esta es $m_t$).
3. **Recta Tangente:**
   $y - 1 = 2(x - 1) \implies y = 2x - 1$
4. **Recta Normal:**
   $m_n = -1/2$.
   $y - 1 = -\frac{1}{2}(x - 1) \implies y = -\frac{1}{2}x + \frac{3}{2}$