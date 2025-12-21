---
title: Derivadas
---

# Tabla de Derivadas y Reglas de Cálculo

Este archivo sirve como guía de referencia rápida para operar con derivadas en problemas de física y análisis.

---

## 1. Tabla de Derivadas Inmediatas

| Función $f(x)$ | Derivada $f'(x)$ | Notas |
| :--- | :--- | :--- |
| $k$ (Constante) | $0$ | El cambio de algo fijo es nulo. |
| $x$ | $1$ | La pendiente de una identidad es 1. |
| $x^n$ | $n \cdot x^{n-1}$ | **Regla de la potencia.** |
| $e^x$ | $e^x$ | Es la única función que es su propia derivada. |
| $\ln(x)$ | $\frac{1}{x}$ | Solo para $x > 0$. |
| $\sin(x)$ | $\cos(x)$ | La razón de cambio del seno es el coseno. |
| $\cos(x)$ | $-\sin(x)$ | ¡Cuidado con el signo negativo! |



---

## 2. Reglas de Operación (Álgebra de Derivadas)

Cuando las funciones no están solas, aplicamos estas propiedades:

### A. Suma y Resta
La derivada de una suma es la suma de las derivadas.
$$(f + g)' = f' + g'$$

### B. Producto (Multiplicación)
$$ (u \cdot v)' = u' \cdot v + u \cdot v' $$

### C. Cociente (División)
$$ \left( \frac{u}{v} \right)' = \frac{u' \cdot v - u \cdot v'}{v^2} $$

### D. Regla de la Cadena
Es vital para funciones compuestas (una función dentro de otra).
$$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$



---

## 3. Relación con la Optimización

Como ya tenemos documentado en el archivo de **Optimización**, el uso principal de esta tabla es encontrar los **Puntos Críticos**:

1. Se busca la derivada $f'(x)$ usando esta tabla.
2. Se iguala a cero ($f'(x) = 0$).
3. Los valores de $x$ resultantes nos indican dónde la función alcanza sus picos máximos o valles mínimos.

---

## 4. Aplicación Cinética

Recuerda que estas fórmulas son las que permiten derivar las ecuaciones de movimiento:
* Si la posición es $s(t) = \frac{1}{2}at^2$, al derivar usando la **regla de la potencia**, obtenemos la velocidad: $v(t) = at$.
* # Derivación Implícita

Normalmente, derivamos funciones **explícitas** como $y = x^2$. Pero a veces, la relación entre $x$ e $y$ está "implícita", como en:
$$x^2 + y^2 = 25$$

Para hallar la pendiente ($dy/dx$) en estos casos, usamos la derivación implícita.

---

## 1. La Regla de Oro
La clave es recordar que **$y$ es una función de $x$** ($y = f(x)$). Por lo tanto, cada vez que derives un término que tenga $y$, debes aplicar la **Regla de la Cadena** y multiplicar por $y'$ (o $\frac{dy}{dx}$).

* Si derivas $x^2$ respecto a $x$, obtienes $2x$.
* Si derivas $y^2$ respecto a $x$, obtienes $2y \cdot y'$.



---

## 2. Pasos para Derivar Implícitamente

1.  **Derivar ambos lados** de la ecuación respecto a $x$.
2.  **Seguimiento de $y$:** Cada vez que derives $y$, añade un $y'$ al lado.
3.  **Agrupar:** Coloca todos los términos que tengan $y'$ de un lado de la igualdad y los que no del otro.
4.  **Factorizar:** Saca factor común $y'$.
5.  **Despejar:** Deja sola a la $y'$.

---

## 3. Ejemplo Paso a Paso: El Círculo

Hallemos la pendiente de la recta tangente en el círculo $x^2 + y^2 = 25$.

**Paso 1: Derivamos todo respecto a $x$**
$$\frac{d}{dx}(x^2) + \frac{d}{dx}(y^2) = \frac{d}{dx}(25)$$
$$2x + 2y \cdot y' = 0$$

**Paso 2: Despejamos $y'$**
1. Movemos el $2x$: $2y \cdot y' = -2x$
2. Pasamos el $2y$ dividiendo: $y' = \frac{-2x}{2y}$
3. Simplificamos:
$$y' = -\frac{x}{y}$$



---

## 4. Ejemplo con Regla del Producto
A veces $x$ e $y$ están multiplicándose, como en $x \cdot y = 10$.

1.  **Aplicamos regla del producto:** $(derivada \, de \, x \cdot y) + (x \cdot derivada \, de \, y) = 0$
2.  $(1 \cdot y) + (x \cdot y') = 0$
3.  $y + x \cdot y' = 0$
4.  **Resultado:** $y' = -\frac{y}{x}$

---

## 5. Aplicación en Física: Movimiento Relacionado

Este método es el corazón de los problemas de **Razones de Cambio Relacionadas**. 

* **Ejemplo:** Si una escalera resbala por una pared, la distancia al suelo ($x$) y la altura ($y$) cambian al mismo tiempo. Al derivar implícitamente la ecuación de Pitágoras $x^2 + y^2 = L^2$ respecto al tiempo ($t$), podemos saber qué tan rápido cae la escalera si sabemos qué tan rápido se aleja de la pared.

$$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$

# Derivación Logarítmica

Cuando tenemos funciones de la forma $y = f(x)^{g(x)}$, las reglas comunes de potencia o de exponencial no funcionan por separado. Necesitamos bajar el exponente usando las propiedades de los logaritmos.

---

## 1. El Proceso Paso a Paso

Para derivar una función complicada $y = f(x)$:

1.  **Aplicar Logaritmo Natural ($\ln$):** Lo aplicamos a ambos lados de la igualdad: $\ln(y) = \ln(f(x))$.
2.  **Bajar el exponente:** Usamos la propiedad $\ln(a^b) = b \cdot \ln(a)$.
3.  **Derivar Implícitamente:** Derivamos ambos lados respecto a $x$. Recuerda que la derivada de $\ln(y)$ siempre es $\frac{y'}{y}$.
4.  **Despejar $y'$:** Pasamos la $y$ multiplicando al otro lado.
5.  **Sustituir $y$:** Reemplazamos $y$ por su función original.

---

## 2. Ejemplo Clásico: $y = x^x$

Este es el ejemplo que siempre aparece en los exámenes porque no se puede resolver con la regla de la potencia ($x^n$).

**Paso 1: Aplicamos $\ln$**
$$\ln(y) = \ln(x^x)$$

**Paso 2: Bajamos la $x$ del exponente**
$$\ln(y) = x \cdot \ln(x)$$

**Paso 3: Derivamos a ambos lados**
* A la izquierda: $\frac{y'}{y}$
* A la derecha (Regla del Producto): $(1 \cdot \ln(x)) + (x \cdot \frac{1}{x}) = \ln(x) + 1$
$$\frac{y'}{y} = \ln(x) + 1$$

**Paso 4: Despejamos $y'$**
$$y' = y \cdot (\ln(x) + 1)$$

**Paso 5: Sustituimos $y$ por el valor original ($x^x$)**
$$y' = x^x \cdot (\ln(x) + 1)$$



---

## 3. ¿Cuándo usar este método?

Existen dos casos principales donde este truco te salvará la vida:

### Caso A: Base y Exponente con variables
Como el ejemplo anterior ($x^x$, $(\sin x)^x$, etc.). Es la única forma de resolverlos.

### Caso B: Funciones muy largas (Simplificación)
Si tienes algo como $y = \frac{(x+1)^2 \cdot \sqrt{x-2}}{(x+3)^5}$, derivar eso por la regla del cociente es una pesadilla. Si aplicas logaritmos, las multiplicaciones se vuelven sumas y las potencias pasan a multiplicar:
$$\ln(y) = 2\ln(x+1) + \frac{1}{2}\ln(x-2) - 5\ln(x+3)$$
¡Ahora derivar es mucho más fácil!



---

## 4. Resumen de Propiedades Clave

Para este método, debes dominar estas 3 reglas de los logaritmos:
1.  **Producto:** $\ln(A \cdot B) = \ln A + \ln B$
2.  **Cociente:** $\ln(A / B) = \ln A - \ln B$
3.  **Potencia:** $\ln(A^n) = n \cdot \ln A$
   

   # Análisis de Funciones: Monotonía, Concavidad y Puntos Clave

El uso de la primera y segunda derivada nos permite conocer la "anatomía" de una función sin necesidad de graficar punto por punto.

---

## 1. El Análisis de la Primera Derivada ($f'$)
La primera derivada nos indica la **pendiente**. Su signo nos dice si la función sube o baja.

### A. Monotonía (Crecimiento y Decrecimiento)
* Si **$f'(x) > 0$**, la función es **creciente** (sube).
* Si **$f'(x) < 0$**, la función es **decreciente** (baja).

### B. Puntos Críticos y Extremos Relativos
Los puntos críticos ocurren donde **$f'(x) = 0$** (la tangente es horizontal) o donde no existe la derivada.
* **Máximo relativo:** Si la función pasa de crecer a decrecer (+ a -).
* **Mínimo relativo:** Si la función pasa de decrecer a crecer (- a +).

[Image: Graph showing intervals of increase/decrease and labeled local maxima and minima]

---

## 2. El Análisis de la Segunda Derivada ($f''$)
La segunda derivada nos indica la **curvatura** de la función.

### A. Concavidad
* Si **$f''(x) > 0$**, la función es **Cóncava hacia arriba** (forma de "U" o sonrisa).
* Si **$f''(x) < 0$**, la función es **Cóncava hacia abajo** (forma de "n" o tristeza).

### B. Puntos de Inflexión
Es el punto exacto donde la función **cambia su concavidad** (pasa de "U" a "n" o viceversa).
* Se encuentra igualando la segunda derivada a cero: **$f''(x) = 0$**.

[Image: Visual comparison of concave up vs concave down and the inflection point in between]

---

## 3. Resumen de Criterios

| Elemento | Condición | Qué nos dice |
| :--- | :--- | :--- |
| **Crecimiento** | $f'(x) > 0$ | La función sube. |
| **Decrecimiento** | $f'(x) < 0$ | La función baja. |
| **Máximo/Mínimo** | $f'(x) = 0$ | Posible cima o valle. |
| **Cóncava ($\cup$)** | $f''(x) > 0$ | Curva abierta hacia arriba. |
| **Convexa ($\cap$)** | $f''(x) < 0$ | Curva abierta hacia abajo. |
| **Pto. Inflexión** | $f''(x) = 0$ | Cambio de curvatura. |

---

## 4. Ejemplo Práctico: $f(x) = x^3 - 3x$

1. **Derivamos:** $f'(x) = 3x^2 - 3$.
2. **Puntos Críticos ($f'=0$):** $3x^2 - 3 = 0 \implies x^2 = 1 \implies x = 1, x = -1$.
3. **Segunda Derivada:** $f''(x) = 6x$.
4. **Evaluamos Concavidad:**
   * En $x = 1$: $f''(1) = 6$ (> 0). Es un **Mínimo** (cóncava hacia arriba).
   * En $x = -1$: $f''(-1) = -6$ (< 0). Es un **Máximo** (cóncava hacia abajo).
5. **Punto de Inflexión:** $6x = 0 \implies x = 0$. En el origen la curva cambia de forma.

[Image: Complete graph of x^3 - 3x with all points and concavities labeled]

---

## 5. Aplicación: ¿Para qué sirve esto?
En física y economía, esto es vital:
* El **punto de inflexión** en una curva de contagios indica cuándo la velocidad de propagación empieza a frenarse.
* En **optimización**, los máximos y mínimos nos dicen el beneficio más alto o el costo más bajo (como ya vimos en tu archivo de optimización).

# La Definición Formal de la Derivada

La derivada no es solo una fórmula; es un **límite especial** que representa la tasa de cambio instantánea. Matemáticamente, nace de intentar calcular la pendiente de una recta en un solo punto.

---

## 1. El Concepto Geométrico: De Secante a Tangente

Si tenemos dos puntos en una curva, $P(x, f(x))$ y $Q(x+h, f(x+h))$, la pendiente de la recta que los une (secante) es:
$$m = \frac{\Delta y}{\Delta x} = \frac{f(x+h) - f(x)}{h}$$

Para hallar la pendiente **en un solo punto** (tangente), hacemos que la distancia entre los puntos ($h$) sea lo más pequeña posible, es decir, que tienda a cero.



---

## 2. La Definición por Límite

La derivada de una función $f(x)$, denotada como $f'(x)$, se define como:

$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$

Esta expresión se conoce como el **Cociente de Fermat** o Cociente Diferencial.

---

## 3. Demostración Práctica: Derivada de $x^2$

Vamos a demostrar por qué la derivada de $f(x) = x^2$ es $2x$ usando la definición:

1. **Plantear el límite:**
   $$\lim_{h \to 0} \frac{(x + h)^2 - x^2}{h}$$

2. **Desarrollar el binomio:**
   $$\lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h}$$

3. **Simplificar términos ($x^2 - x^2 = 0$):**
   $$\lim_{h \to 0} \frac{2xh + h^2}{h}$$

4. **Factorizar $h$ en el numerador:**
   $$\lim_{h \to 0} \frac{h(2x + h)}{h}$$

5. **Eliminar la indeterminación ($h/h = 1$):**
   $$\lim_{h \to 0} (2x + h)$$

6. **Evaluar el límite (hacer $h = 0$):**
   $$2x + 0 = 2x$$

**Resultado:** Queda demostrado que $f'(x^2) = 2x$.

---

## 4. Interpretación de la Notación

Existen diferentes formas de escribir la derivada, todas válidas según el contexto:
* **Leibniz:** $\frac{dy}{dx}$ (Muy usada en física para indicar "cambio de $y$ respecto a $x$").
* **Lagrange:** $f'(x)$ (La más común en cálculo).
* **Newton:** $\dot{y}$ (Usada principalmente en física para derivadas respecto al tiempo).

---

## 5. ¿Cuándo NO existe la derivada?
Para que una función sea derivable en un punto, el límite debe existir y ser único. La derivada falla en:
1. **Puntos angulosos (Picos):** Donde los límites laterales son distintos (ej. $|x|$ en $x=0$).
2. **Discontinuidades:** Si la función está rota, no hay tangente.
3. **Tangentes verticales:** Donde la pendiente tiende a infinito.

[Image showing non-differentiable points: a cusp, a discontinuity, and a vertical tangent]

# Derivación Implícita

La derivación implícita se aplica a funciones donde la variable dependiente $y$ está mezclada con la independiente $x$ (ej. $x^2 + y^2 = 25$). 

La clave es recordar la **Regla de la Cadena**: cada vez que derivamos un término que contiene $y$, debemos multiplicar por $y'$ (o $\frac{dy}{dx}$), porque tratamos a $y$ como una función de $x$ que aún no conocemos.

---

## 1. El Procedimiento Estándar

Para hallar $y'$ en una ecuación implícita, seguimos estos pasos:
1. **Derivar ambos lados** de la ecuación respecto a $x$.
2. **Aplicar la Regla de la Cadena** en cada término con $y$.
3. **Agrupar** todos los términos que tengan $y'$ en un lado de la igualdad.
4. **Factorizar $y'$** y despejarlo.

---

## 2. Ejemplo Paso a Paso: La Circunferencia

Hallemos la pendiente de la recta tangente en un punto de la circunferencia $x^2 + y^2 = 25$.

**Paso 1: Derivar respecto a $x$**
* La derivada de $x^2$ es $2x$.
* La derivada de $y^2$ es $2y \cdot y'$ (aquí aplicamos la regla de la cadena).
* La derivada de $25$ es $0$.

Ecuación resultante:
$$2x + 2y \cdot y' = 0$$



**Paso 2: Despejar $y'$**
1. Restamos $2x$: $2y \cdot y' = -2x$
2. Dividimos por $2y$: $y' = \frac{-2x}{2y}$
3. Simplificamos:
$$y' = -\frac{x}{y}$$

---

## 3. Ejemplo Complejo: Regla del Producto

Derivar $x \cdot y = 1$:
1. Aplicamos la regla del producto $(u \cdot v)' = u'v + uv'$:
   $(1) \cdot y + x \cdot (y') = 0$
2. Despejamos $y'$:
   $x \cdot y' = -y$
   $y' = -\frac{y}{x}$

---

## 4. Aplicación Geométrica: Rectas Tangentes

Si queremos la pendiente en el punto $(3, 4)$ de la circunferencia $x^2 + y^2 = 25$:
* Usamos nuestra fórmula $y' = -x/y$.
* $m = -3/4$.



---

## 5. Diferencia entre Derivación Explícita e Implícita

| Característica | Derivación Explícita | Derivación Implícita |
| :--- | :--- | :--- |
| **Forma** | $y = f(x)$ | $F(x, y) = 0$ |
| **Facilidad** | Directa | Requiere despejar $y'$ |
| **Resultado** | Solo depende de $x$ | Suele depender de $x$ e $y$ |