---
title: Hipérbola

---

La hipérbola es el lugar geométrico de los puntos cuya diferencia de distancias a dos puntos fijos (focos) es constante. En el mundo de las funciones, representa la relación de proporcionalidad inversa.

---

## 1. Ecuaciones Matemáticas

### Forma Canónica (Centrada en el origen)
Dependiendo de hacia dónde abran sus ramas:

* **Horizontal:** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$
* **Vertical:** $\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1$

### Forma General
Se expresa como una ecuación de segundo grado donde los coeficientes de $x^2$ y $y^2$ tienen **signos distintos**:
$$Ax^2 - Cy^2 + Dx + Ey + F = 0$$



---

## 2. Elementos Clave
* **Asíntotas:** Son las líneas rectas a las que la hipérbola se acerca infinitamente pero nunca toca. Su ecuación es $y = \pm \frac{b}{a}x$.
* **Vértices ($a$):** Puntos donde la curva da la vuelta.
* **Focos ($c$):** Puntos internos que definen la curvatura, donde $c^2 = a^2 + b^2$.

---

## 3. La Hipérbola Equilátera ($xy = k$)
Cuando la hipérbola se rota $45^\circ$, su ecuación se simplifica a la forma de **proporcionalidad inversa**. Esta es la que más verás en ciencias aplicadas.



---

## 4. Relación con la Ciencia y la Ingeniería

La hipérbola describe perfectamente cualquier fenómeno donde el **producto de dos variables es constante** ($x \cdot y = k$).

### A. Densidad ($d = m/V$)
Para una masa fija, la relación entre densidad y volumen es una hipérbola.
* Si reduces el volumen a la mitad, la densidad se duplica.
* Si el volumen tiende a infinito, la densidad tiende a cero (asíntota).

### B. Ley de Ohm y Corriente ($I = V/R$)
Si mantenemos un voltaje ($V$) constante:
* La **corriente ($I$)** y la **resistencia ($R$)** tienen una relación hiperbólica.
* A mayor resistencia, menor corriente. La gráfica de $I$ frente a $R$ es una rama de hipérbola.

### C. Ley de Boyle-Mariotte ($P \cdot V = k$)
En los gases ideales, a temperatura constante, la presión y el volumen dibujan una hipérbola llamada **isoterma**.

---

## 5. Propiedades de Reflexión
Al igual que la parábola, la hipérbola tiene propiedades ópticas: un rayo de luz que se dirige hacia un foco, al chocar con la cara convexa de la hipérbola, se refleja hacia el otro foco.
* **Uso:** Telescopios Cassegrain y sistemas de navegación de largo alcance (LORAN).
* # La Parábola: Formas de la Ecuación

La parábola es la representación gráfica de las funciones cuadráticas. Dependiendo de la información que necesitemos (el vértice, las raíces o el corte con el eje Y), podemos expresarla de tres maneras:

---

## 1. Forma General
Es la expresión expandida del polinomio.
$$y = ax^2 + bx + c$$
* **$c$**: Es la ordenada al origen (punto de corte con el eje $Y$).
* **Uso**: Útil para identificar rápidamente el coeficiente principal y el término independiente.

## 2. Forma Canónica
Es la más eficiente para identificar la geometría de la curva y graficar.
$$y = a(x - h)^2 + k$$
* **Vértice $V(h, k)$**: Es el punto más bajo (mínimo) o más alto (máximo).
* **$a$**: Determina la apertura; si es positivo abre hacia arriba ($\cup$), si es negativo hacia abajo ($\cap$).

## 3. Forma Factorizada
Muestra explícitamente los puntos de intersección con el eje horizontal.
$$y = a(x - x_1)(x - x_2)$$
* **$x_1, x_2$**: Son las raíces o ceros de la función.

---

## Ejemplos de Conversión

### Ejemplo A: De Canónica a General
Dada la función $y = 3(x - 2)^2 + 4$:
1.  **Desarrollar el binomio**: $y = 3(x^2 - 4x + 4) + 4$
2.  **Distribuir el coeficiente $a$**: $y = 3x^2 - 12x + 12 + 4$
3.  **Resultado (General)**: $y = 3x^2 - 12x + 16$
    * *Corte con eje Y en 16.*

### Ejemplo B: De General a Canónica (Obtener el Vértice)
Dada la función $y = x^2 - 6x + 5$:
1.  **Hallar $h$**: $h = -\frac{b}{2a} = -\frac{-6}{2(1)} = 3$
2.  **Hallar $k$**: Evaluamos $f(3) = (3)^2 - 6(3) + 5 = 9 - 18 + 5 = -4$
3.  **Resultado (Canónica)**: $y = (x - 3)^2 - 4$
    * *El vértice se encuentra en el punto $(3, -4)$.*

---

## Relación con la Física
En el **tiro parabólico**, la forma canónica es sumamente útil porque la coordenada **$k$** del vértice nos da directamente la **altura máxima** alcanzada por el objeto, mientras que **$h$** nos indica el tiempo o distancia horizontal en la que ocurre dicha altura.
# Transpasos entre Formas de la Parábola

Dominar el cambio entre formas te permite extraer diferentes datos (vértice, raíces o corte con Y) de una misma función según lo necesites.

---

## 1. De Forma Canónica a Forma General
Este es el proceso más sencillo, basado en el **desarrollo algebraico**.

**Procedimiento:**
1.  Elevar el binomio al cuadrado: $(x - h)^2 = x^2 - 2xh + h^2$.
2.  Multiplicar todo por el coeficiente $a$.
3.  Sumar el valor de $k$.

**Fórmula:** $a(x - h)^2 + k \longrightarrow ax^2 + bx + c$

---

## 2. De Forma General a Forma Canónica
Este es el proceso inverso y existen dos caminos:

### Camino A: Por Fórmulas (El más rápido)
1.  Calculas la $x$ del vértice: $h = -\frac{b}{2a}$.
2.  Calculas la $y$ del vértice: $k = f(h)$ (sustituyes $h$ en la $x$ de la general).
3.  Escribes la forma canónica manteniendo el mismo valor de $a$.

### Camino B: Completando Cuadrados (El más analítico)
Es útil para entender la estructura de la parábola.
* **Paso 1:** Factorizar $a$ de los términos con $x$.
* **Paso 2:** Sumar y restar dentro del paréntesis $(\frac{b}{2a})^2$.
* **Paso 3:** Formar el trinomio cuadrado perfecto.



---

## 3. De Forma General a Forma Factorizada
Se basa en encontrar las **raíces** ($x_1, x_2$).

**Procedimiento:**
1.  Igualar la función a cero: $ax^2 + bx + c = 0$.
2.  Resolver mediante la **Fórmula Cuadrática (Bhaskara)**:
    $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
3.  Escribir como $y = a(x - x_1)(x - x_2)$.



---

## 4. Resumen de Transpasos

| Transformación | Método Principal | Clave |
| :--- | :--- | :--- |
| **Canónica $\rightarrow$ General** | Desarrollo del binomio | Binomio al cuadrado |
| **General $\rightarrow$ Canónica** | Vértice $(h, k)$ | $h = -b/2a$ |
| **General $\rightarrow$ Factorizada** | Factorización o Bhaskara | Hallar raíces |
| **Factorizada $\rightarrow$ General** | Propiedad Distributiva | Multiplicar binomios |

---

## Ejemplo de transpaso completo
Dada $y = 2x^2 - 8x + 6$:
1.  **A Factorizada:** Raíces son $1$ y $3 \implies y = 2(x-1)(x-3)$.
2.  **A Canónica:** $h = -(-8)/4 = 2$; $k = f(2) = 2(4)-16+6 = -2 \implies y = 2(x-2)^2 - 2$.