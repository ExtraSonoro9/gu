---
title: Derivadas
---

## 7 Derivadas de funciones

En la mayoría de los problemas reales, las magnitudes que intervienen están relacionadas mediante ecuaciones o funciones. Para construir estos modelos matemáticos resulta imprescindible entender cómo varían unas magnitudes con respecto a las otras. En este capítulo abordamos el concepto de derivada, que surge de estudiar cómo varía una función cuando cambia la variable de la que depende. El concepto de derivada, junto al de integral, son los dos pilares fundamentales del Análisis Matemático, sobre los que se sostienen la mayor parte de las aplicaciones en Ciencia e Ingeniería.

## 7.1 El concepto de derivada

### 7.1.1 Tasa de variación media

### Incremento

Dada una función $y = f(x)$, se llama incremento de $f$ en un intervalo $\[a,b]$ a la diferencia entre el valor de $f$ en cada uno de los extremos del intervalo, y se nota

$\Delta y = f(b) - f(a)$.

Cuando $f$ es la función identidad $y=x$, se cumple que

$\Delta x = \Delta y = f(b) - f(a) = b - a$,

y por tanto, el incremento de $x$ en un intervalo es la amplitud del intervalo. Esto nos permite escribir el intervalo $\[a,b]$ como $\[a,a+\Delta x]$.

### Tasa de variación media

Dada una función $y=f(x)$, se llama tasa de variación media de $f$ en el intervalo $\[a,a+\Delta x]$ al cociente entre el incremento de $y$ y el incremento de $x$ en dicho intervalo, y se escribe

$\mathrm{TVM}(f,\[a,a+\Delta x]) = \dfrac{\Delta y}{\Delta x} = \dfrac{f(a+\Delta x)-f(a)}{\Delta x}$.

### Ejemplo:

Consideremos la función $y=x^2$ que mide el área de un cuadrado de chapa metálica de lado $x$.

Si en un determinado instante el lado del cuadrado es $a$, y sometemos la chapa a un proceso de calentamiento que aumenta el lado del cuadrado una cantidad $\Delta x$, ¿en cuánto se incrementará el área del cuadrado?

$\Delta y = f(a+\Delta x)-f(a) = (a+\Delta x)^2 - a^2$

$= a^2 + 2a\Delta x + (\Delta x)^2 - a^2 = 2a\Delta x + (\Delta x)^2$.

¿Cuál será la tasa de variación media del área en el intervalo $\[a,a+\Delta x]$?

$\dfrac{\Delta y}{\Delta x} = \dfrac{2a\Delta x + (\Delta x)^2}{\Delta x} = 2a + \Delta x$.

Tomando el límite cuando $\Delta x \to 0$, se obtiene la tasa de variación instantánea.

### 7.1.4 Interpretación geométrica de la tasa de variación instantánea

La tasa de variación instantánea de $f$ en el punto $a$ es la pendiente de la recta tangente a $f$ en el punto $(a,f(a))$.

imagen

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
El error de la aproximación es $|2.01 - 2| = 0.01$

**Recta tangente a la gráfica de una función**
Dado un intervalo $I \subseteq \mathbb{R}$, una función $f: I \rightarrow \mathbb{R}$ diferenciable en $a \in I$, se llama recta tangente a la gráfica de $f$ en el punto $(a, f(a))$ a la recta de ecuación:
$$y - f(a) = f'(a)(x - a)$$

## Regla de la cadena

El resultado anterior permite calcular la derivada de cualquier función algebraica. A continuación se presenta otro importante resultado que nos permitirá calcular la derivada de una composición de funciones.

### Regla de la cadena

Dados dos intervalos $I, J \subset \mathbb{R}$ y dos funciones\
$f : I \to \mathbb{R}$ y $g : J \to \mathbb{R}$ tales que $f(I) \subset J$, si $f$ es diferenciable en $a \in I$ y $g$ es diferenciable en $f(a)$, entonces $g \circ f$ es diferenciable en $a$ y

$(g \circ f)'(a) = g'(f(a)),f'(a)$.

### Demostración

Sea

$h(y) =
\begin{cases}
\dfrac{g(y)-g(f(a))}{y-f(a)} & \text{si } y \in J \text{ y } y \neq f(a), \\
g'(f(a)) & \text{si } y = f(a).
\end{cases}$

Veamos que $h$ es continua en $f(a)$. Como $g$ es diferenciable en $f(a)$, se tiene que

$\lim\_{y \to f(a)} h(y) = g'(f(a))$,

de modo que para cualquier $\varepsilon > 0$ existe $\delta > 0$ tal que, si\
$|y - f(a)| \< \delta$, entonces

$|h(y) - g'(f(a))| \< \varepsilon$.

Si $y \neq f(a)$ y $|y - f(a)| \< \delta$, entonces

$|g(y) - g(f(a)) - g'(f(a))(y - f(a))|
\= |y - f(a)|,|h(y) - g'(f(a))|
\< \varepsilon |y - f(a)|$.

Por otro lado, si $y = f(a)$, la desigualdad anterior se cumple trivialmente. Por tanto, la función $g$ es continua en $f(a)$ y

$\lim\_{x \to a} h(f(x)) = h(f(a)) = g'(f(a))$.

De la definición de derivada se tiene que

$(g \circ f)'(a)
\= \lim\_{x \to a} \dfrac{g(f(x)) - g(f(a))}{x - a}
\= \lim\_{x \to a} h(f(x)) \dfrac{f(x) - f(a)}{x - a}
\= h(f(a)),f'(a)
\= g'(f(a)),f'(a)$.

### Nota

La demostración es mucho más sencilla usando la notación diferencial de Leibniz para la derivada. Si $y = g(z)$ y $z = f(x)$, entonces

$\dfrac{dy}{dx} = \dfrac{dy}{dz}\dfrac{dz}{dx}
\= g'(z),f'(x)$.

### Ejemplo:

Si $g(x) = \sin(x)$ y $f(x) = x^2$, entonces $g \circ f(x) = \sin(x^2)$ y, aplicando la regla de la cadena, su derivada vale

$(g \circ f)'(x) = g'(f(x)),f'(x)
\= \cos(x^2),2x$.

Por otro lado, si $g(x) = (\sin(x))^2$, de nuevo aplicando la regla de la cadena, su derivada vale

$(g \circ f)'(x)
\= f'(g(x)),g'(x)
\= 2g(x)\cos(x)
\= 2\sin(x)\cos(x)$.
