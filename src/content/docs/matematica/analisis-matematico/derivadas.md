---
title: Derivadas
---

## 7.1 El concepto de derivada

En la mayoría de los problemas reales, las magnitudes que intervienen están relacionadas mediante ecuaciones o funciones. Para construir estos modelos matemáticos resulta imprescindible entender cómo varían unas magnitudes con respecto a las otras. En este capítulo abordamos el concepto de derivada, que surge de estudiar cómo varía una función cuando cambia la variable de la que depende. El concepto de derivada, junto al de integral, son los dos pilares fundamentales del Análisis Matemático, sobre los que se sostienen la mayor parte de las aplicaciones en Ciencia e Ingeniería.

### Tasa de variación media

**Incremento**
Dada una función $y=f(x)$ y un punto $a \in I$, se llama incremento de $x$ a cualquier número $\Delta x$ tal que $a + \Delta x \in I$, y se denota $\Delta x = x - a$.

**Tasa de variación media**
Dados una función $y=f(x)$ y un intervalo $\[a, a + \Delta x] \subseteq I$, se llama incremento de $y$ a $\Delta y = f(a + \Delta x) - f(a)$. La tasa de variación media de $f$ en el intervalo $\[a, a + \Delta x]$, se denota $TVM(f, \[a, a + \Delta x])$ y se define como el cociente:
$$TVM(f, \[a, a + \Delta x]) = \frac{\Delta y}{\Delta x} = \frac{f(a + \Delta x) - f(a)}{\Delta x}$$
imagen

### Interpretación geométrica de la tasa de variación media

Geométricamente, la tasa de variación media $TVM(f,\[a, a + \Delta x])$ representa la **pendiente de la recta secante** a la gráfica de la función $f$ que pasa por los puntos $(a, f(a))$ y $(a + \Delta x, f(a + \Delta x))$. Esta pendiente mide la variación promedio de la función a lo largo de ese intervalo.

### Tasa de variación instantánea

**Tasa de variación instantánea**
Dada una función $y=f(x)$ y un punto $a \in I$, se llama tasa de variación instantánea de $f$ en el punto $a$, y se denota $TVI(f, a)$, al límite de la tasa de variación media en el intervalo $\[a, a + \Delta x]$ cuando $\Delta x \rightarrow 0$, es decir,
$$TVI(f, a) = \lim\_{\Delta x \rightarrow 0} TVM(f, \[a, a + \Delta x]) = \lim\_{\Delta x \rightarrow 0} \frac{\Delta y}{\Delta x} = \lim\_{\Delta x \rightarrow 0} \frac{f(a + \Delta x) - f(a)}{\Delta x}$$

**Derivada**
Cuando este límite existe, se dice que la función $f$ es derivable en el punto $a$, y al valor del mismo se le llama derivada de $f$ en $a$, y se nota como $f'(a)$ o bien $\frac{df}{dx}(a)$.

**Ejemplo:**
Consideremos de nuevo la función $y = x^2$ que mide el área de un cuadrado de chapa metálica de lado $x$. Si en un determinado instante el lado del cuadrado es $a$, y sometemos la chapa a un proceso de calentamiento que aumenta el lado del cuadrado, ¿cuál es la tasa de variación instantánea del área del cuadrado en dicho instante?
$$TVI(f(a)) = \lim\_{\Delta x \rightarrow 0} \frac{\Delta y}{\Delta x} = \lim\_{\Delta x \rightarrow 0} \frac{f(a + \Delta x) - f(a)}{\Delta x}$$
$$= \lim\_{\Delta x \rightarrow 0} \frac{(a + \Delta x)^2 - a^2}{\Delta x} = \lim\_{\Delta x \rightarrow 0} \frac{a^2 + 2a\Delta x + \Delta x^2 - a^2}{\Delta x}$$
$$= \lim\_{\Delta x \rightarrow 0} \frac{2a\Delta x + \Delta x^2}{\Delta x} = \lim\_{\Delta x \rightarrow 0} (2a + \Delta x) = 2a$$
Así pues, $f'(a) = 2a$, lo que indica que la tendencia de crecimiento el área es del doble del valor del lado. El signo de $f'(a)$ indica la tendencia de crecimiento de $f$ en el punto $a$:

* $f'(a) > 0$ indica que la tendencia es creciente.
* $f'(a)\< 0$ indica que la tendencia es decreciente.

### Interpretación geométrica de la tasa de variación instantánea

Geométricamente, la derivada $f'(a)$ representa la **pendiente de la recta tangente** a la gráfica de la función $f$ en el punto $(a, f(a))$. Es el valor al que tiende la pendiente de la recta secante cuando el incremento $\Delta x$ se acerca a cero.
imagen

**Nota**
Si en la definición anterior llamamos $h = x - a$, resulta
$$f'(a) = \lim\_{x \rightarrow a} \frac{f(x) - f(a)}{x - a} = \lim\_{h \rightarrow 0} \frac{f(a + h) - f(a)}{h}$$
que es otra definición equivalente de la derivada de $f$ en $a$.

**Función derivada**
Dada un intervalo $I \subseteq \mathbb{R}$ y una función $f: I \rightarrow \mathbb{R}$, se define la función derivada de $f$, y se denota $f'$, a la función cuyo dominio es el conjunto de los puntos de $I$ donde $f$ es diferenciable y el valor de $f'$ es el valor de la derivada en cada uno de esos puntos.

**Nota**
La notación $f'(a)$ para la derivada de $f$ se debe a

## 7.2 Diferenciabilidad

El concepto de derivada surge del límite de la tasa de variación media de una función en un intervalo. Un concepto íntimamente ligado es el de función diferenciable.

**Diferenciable**
Dado un intervalo $I \subseteq \mathbb{R}$ y una función $f: I \rightarrow \mathbb{R}$, se dice que $f$ es diferenciable en el punto $a \in I$ si existe el límite
$$f'(a) = \lim\_{h \rightarrow 0} \frac{f(a + h) - f(a)}{h}$$
El valor del límite se llama derivada de $f$ en $a$ y se denota $f'(a)$. Si $f$ es diferenciable en todos los puntos de un conjunto $S \subseteq I$, se dice que $f$ es diferenciable en $S$.

**Ejemplo:**
\[cite\_start]La función $f(x) = |x|$ no es diferenciable en $x=0$, ya que los límites laterales no coinciden\[cite: 1558]:
$$\lim\_{x \rightarrow 0^{-}} \frac{f(x) - f(0)}{x - 0} = \lim\_{x \rightarrow 0^{-}} \frac{|x|}{x} = \lim\_{x \rightarrow 0^{-}} \frac{-x}{x} = -1$$
$$\lim\_{x \rightarrow 0^{+}} \frac{f(x) - f(0)}{x - 0} = \lim\_{x \rightarrow 0^{+}} \frac{|x|}{x} = \lim\_{x \rightarrow 0^{+}} \frac{x}{x} = 1$$

### Relación entre diferenciabilidad y continuidad

Existe una estrecha relación entre la diferenciabilidad y la continuidad de una función.

**Teorema**
Si una función $f$ es diferenciable en un punto $a$, entonces $f$ es continua en $a$.

**Demostración**
Para probar que $f$ es continua en $a$, debemos demostrar que $\lim\_{x \rightarrow a} f(x) = f(a)$, o equivalentemente, que $\lim\_{x \rightarrow a} (f(x) - f(a)) = 0$.
Consideremos la expresión:
$$f(x) - f(a) = \frac{f(x) - f(a)}{x - a} \cdot (x - a)$$
Aplicando el límite cuando $x \rightarrow a$ a ambos lados, y teniendo en cuenta que el límite de un producto es el producto de los límites (si existen):
$$\lim\_{x \rightarrow a} (f(x) - f(a)) = \lim\_{x \rightarrow a} \left( \frac{f(x) - f(a)}{x - a} \right) \cdot \lim\_{x \rightarrow a} (x - a)$$
Como $f$ es diferenciable en $a$, $\lim\_{x \rightarrow a} \frac{f(x) - f(a)}{x - a} = f'(a)$ (existe). Además, $\lim\_{x \rightarrow a} (x - a) = a - a = 0$.
Por lo tanto:
$$\lim\_{x \rightarrow a} (f(x) - f(a)) = f'(a) \cdot 0 = 0$$
Lo que demuestra que $f$ es continua en $a$.

**Nota**
El recíproco del teorema anterior no es cierto. Es decir, una función puede ser continua en un punto $a$ pero no ser diferenciable en $a$. El ejemplo típico es $f(x) = |x|$ en $x=0$.

### Diferenciales

**Diferencial**
Dado un intervalo $I \subseteq \mathbb{R}$ y una función $f: I \rightarrow \mathbb{R}$ diferenciable en $a \in I$, se define el diferencial de $f$ en $a$, y se denota $df(a)$, a la aplicación lineal:
$$df(a): \mathbb{R} \rightarrow \mathbb{R}$$
$$h \mapsto f'(a)h$$
De esta manera, el diferencial de $f$ en $a$ puede utilizarse para aproximar el incremento de $f$ en un entorno de $a$:
$$\Delta y = f(a + h) - f(a) \approx f'(a)h$$
Si tomamos la función identidad $y = x$, su derivada es $f'(x) = 1$. Por tanto, el diferencial de $y=x$ es $dx(a): h \mapsto 1 \cdot h = h$. Se tiene así que:
$$\Delta y \approx f'(a) \Delta x$$

**Ejemplo:**
Consideremos la función $f(x) = x^2$. Queremos aproximar el incremento que sufre $f$ cuando $x$ pasa de $a=10$ a $x=10.1$, es decir, $\Delta x = 0.1$.
La derivada es $f'(x) = 2x$, por lo que $f'(10) = 2(10) = 20$.
El incremento real es $\Delta y = f(10.1) - f(10) = (10.1)^2 - 10^2 = 102.01 - 100 = 2.01$.
La aproximación con el diferencial es $\Delta y \approx f'(10) \Delta x = 20(0.1) = 2$.
El error de la aproximación es $|2.01 - 2| = 0.01$.

**Recta tangente a la gráfica de una función**
Dado un intervalo $I \subseteq \mathbb{R}$, una función $f: I \rightarrow \mathbb{R}$ diferenciable en $a \in I$, se llama recta tangente a la gráfica de $f$ en el punto $(a, f(a))$ a la recta de ecuación:
$$y - f(a) = f'(a)(x - a)$$
