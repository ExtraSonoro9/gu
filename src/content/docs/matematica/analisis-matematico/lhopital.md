# Regla de L'Hôpital

Esta regla se utiliza para resolver límites que resultan en formas indeterminadas del tipo $\frac{0}{0}$ o $\frac{\infty}{\infty}$. 

---

## 1. El Teorema

Si tenemos un límite:
$$\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{0}{0} \quad \text{o} \quad \frac{\infty}{\infty}$$

Entonces, el límite es igual al límite de la derivada de la función de arriba entre la derivada de la función de abajo:
$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

> **¡Cuidado!** No es la derivada de un cociente (no uses la regla de la división). Simplemente derivas el de arriba por un lado y el de abajo por el otro.

---

## 2. Requisitos para aplicar la regla

1.  **Indeterminación:** Solo puedes usarla si al evaluar obtienes $0/0$ o $\infty/\infty$.
2.  **Derivabilidad:** Las funciones $f$ y $g$ deben ser derivables cerca del punto $a$.
3.  **$g'(x) \neq 0$:** La derivada del denominador no puede ser cero cerca de $a$.

---

## 3. Ejemplo Paso a Paso

Calcular el límite: $\lim_{x \to 0} \frac{\sin(x)}{x}$

1.  **Evaluar:** $\frac{\sin(0)}{0} = \frac{0}{0}$. (Indeterminado, ¡podemos usar L'Hôpital!).
2.  **Derivar arriba:** La derivada de $\sin(x)$ es $\cos(x)$.
3.  **Derivar abajo:** La derivada de $x$ es $1$.
4.  **Nuevo límite:**
    $$\lim_{x \to 0} \frac{\cos(x)}{1} = \frac{\cos(0)}{1} = \frac{1}{1} = 1$$



---

## 4. Otras formas indeterminadas

A veces el límite no es una fracción, pero puedes "forzarlo" para usar la regla:
* **$0 \cdot \infty$:** Reubica uno de los términos como $1/(1/x)$.
* **$1^\infty, 0^0, \infty^0$:** Se resuelven aplicando logaritmos naturales ($\ln$) para bajar el exponente y luego aplicar L'Hôpital.



---

## 5. ¿Cuántas veces se puede aplicar?
Si al derivar una vez sigues obteniendo $0/0$, puedes aplicar la regla una **segunda o tercera vez** (derivando las derivadas) hasta que la indeterminación desaparezca.

---

## 6. Resumen de uso con tu Tabla de Derivadas

Para usar L'Hôpital rápido, necesitas tener a mano tu tabla de:
* Polinomios ($x^n \to nx^{n-1}$)
* Exponenciales ($e^x \to e^x$)
* Trigonométricas ($\sin \to \cos$)