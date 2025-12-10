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

### Interpretación geométrica de la tasa de variación media

(El contenido de esta subsección no se pudo extraer del PDF, solo el título).

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
* $f'(a) \< 0$ indica que la tendencia es decreciente.

### Interpretación geométrica de la tasa de variación instantánea

(El contenido de esta subsección no se pudo extraer del PDF, solo el título).

**Nota**
Si en la definición anterior llamamos $h = x - a$, resulta
$$f'(a) = \lim\_{x \rightarrow a} \frac{f(x) - f(a)}{x - a} = \lim\_{h \rightarrow 0} \frac{f(a + h) - f(a)}{h}$$
que es otra definición equivalente de la derivada de $f$ en $a$.

**Función derivada**
Dada un intervalo $I \subseteq \mathbb{R}$ y una función $f: I \rightarrow \mathbb{R}$, se define la función derivada de $f$, y se denota $f'$, a la función cuyo dominio es el conjunto de los puntos de $I$ donde $f$ es diferenciable y el valor de $f'$ es el valor de la derivada en cada uno de esos puntos.

**Nota**
La notación $f'(a)$ para la derivada de $f$ se debe a... (fin del texto disponible).
