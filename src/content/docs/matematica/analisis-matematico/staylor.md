---
title: Serie y polinomio de Taylor
---



Las series de potencias nos permiten aproximar funciones mediante polinomios. Cuantos más términos agreguemos, más exacta será nuestra aproximación.

---

## 1. Definición Matemática

### Serie de Taylor
Es la expansión de una función $f(x)$ alrededor de un punto $a$:
$$f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots$$

### Serie de Maclaurin
Es un caso especial de la serie de Taylor donde el punto de aproximación es **$a = 0$**:
$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n$$

---

## 2. La Identidad de Euler: El "Milagro" de Maclaurin

La identidad de Euler, $e^{i\pi} + 1 = 0$, se demuestra expandiendo las series de Maclaurin de $e^x$, $\sin(x)$ y $\cos(x)$.

1.  **Serie de $e^x$:** $1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$
2.  **Sustituyendo $x$ por $iz$:** Al elevar la unidad imaginaria $i$ a diferentes potencias, los términos se separan en reales e imaginarios.
3.  **Resultado:** Los términos reales forman la serie del $\cos(z)$ y los imaginarios la del $\sin(z)$.
    $$e^{iz} = \cos(z) + i\sin(z)$$



---

## 3. Ejemplo en la Vida Real: Ingeniería Eléctrica (Análisis de AC)

En los sistemas de Corriente Alterna (AC), el voltaje y la corriente oscilan como ondas senoidales. 

**Problema:** Calcular la impedancia en un circuito donde el voltaje es $V(t) = V_0 e^{i\omega t}$.
* Utilizando la expansión de Taylor/Maclaurin, los ingenieros pueden convertir estas funciones exponenciales complejas en fasores.
* Esto permite sumar voltajes y corrientes como si fueran vectores simples en lugar de resolver ecuaciones diferenciales complejas cada vez que se analiza un circuito.
* **Uso:** Es la base de toda la red eléctrica que alimenta tu casa.

---

## 4. Margen de Error: El Resto de Lagrange

Como no podemos sumar infinitos términos, truncamos la serie. El error cometido se conoce como el **Resto de Taylor ($R_n$)**.

Según el Teorema de Taylor, existe un punto $c$ entre $a$ y $x$ tal que el error es:
$$R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!} (x-a)^{n+1}$$

### Factores que afectan el error:
1.  **Distancia ($x-a$):** Cuanto más lejos estés del punto de aproximación $a$, mayor será el error.
2.  **Número de términos ($n$):** A mayor cantidad de términos, el error disminuye drásticamente debido al factorial en el denominador.
3.  **Curvatura:** Funciones que cambian muy bruscamente requieren más términos para ser precisas.



---

## 5. Tabla de Aproximaciones Comunes ($a=0$)

| Función | Aproximación (Polinomio grado 3) |
| :--- | :--- |
| $\sin(x)$ | $x - \frac{x^3}{6}$ |
| $\cos(x)$ | $1 - \frac{x^2}{2}$ |
| $e^x$ | $1 + x + \frac{x^2}{2} + \frac{x^3}{6}$ |
| $\ln(1+x)$ | $x - \frac{x^2}{2} + \frac{x^3}{3}$ |