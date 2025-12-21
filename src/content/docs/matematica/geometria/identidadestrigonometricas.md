---
title: Identidades Trigonométricas


---
# Identidades Trigonométricas

Las identidades trigonométricas son igualdades que relacionan las funciones trigonométricas y se cumplen para cualquier valor del ángulo. Son herramientas esenciales para simplificar expresiones y resolver integrales.

---

## 1. Identidades Fundamentales

### Pitagóricas
Derivadas directamente del Teorema de Pitágoras en el círculo unitario ($x^2 + y^2 = 1$).

* $\sin^2 \theta + \cos^2 \theta = 1$
* $1 + \tan^2 \theta = \sec^2 \theta$
* $1 + \cot^2 \theta = \csc^2 \theta$

### De Cociente y Recíprocas
Definen las funciones en términos de Seno y Coseno o como sus inversas.

* $\tan \theta = \frac{\sin \theta}{\cos \theta}$
* $\cot \theta = \frac{\cos \theta}{\sin \theta}$
* $\sec \theta = \frac{1}{\cos \theta}$
* $\csc \theta = \frac{1}{\sin \theta}$

---

## 2. Tabla Resumen de Identidades (LaTeX)

$$
\begin{array}{|l|l|}
\hline
\mathbf{Categoría} & \mathbf{Identidad} \\ \hline
\text{Ángulo Suma} & \sin(\alpha \pm \beta) = \sin \alpha \cos \beta \pm \cos \alpha \sin \beta \\ 
& \cos(\alpha \pm \beta) = \cos \alpha \cos \beta \mp \sin \alpha \sin \beta \\ \hline
\text{Ángulo Doble} & \sin(2\theta) = 2 \sin \theta \cos \theta \\ 
& \cos(2\theta) = \cos^2 \theta - \sin^2 \theta \\ \hline
\text{Ángulo Medio} & \sin^2 \theta = \frac{1 - \cos(2\theta)}{2} \\ 
& \cos^2 \theta = \frac{1 + \cos(2\theta)}{2} \\ \hline
\text{Paridad} & \sin(-\theta) = -\sin \theta \\ 
& \cos(-\theta) = \cos \theta \\ \hline
\end{array}
$$



---

## 3. Relación con la Geometría
En un triángulo rectángulo, estas identidades permiten relacionar los lados con los ángulos sin necesidad de conocer todas las medidas. 

* **Seno:** Relaciona la altura (cateto opuesto) con la hipotenusa.
* **Coseno:** Relaciona la base (cateto adyacente) con la hipotenusa.
* **Tangente:** Relaciona directamente ambos catetos (pendiente).



---

## 4. Aplicación en Cálculo
Estas identidades son el paso previo necesario para resolver:
1.  **Integrales Trigonométricas:** Usando las identidades de ángulo medio para bajar el exponente de $\sin^2 x$ o $\cos^2 x$.
2.  **Sustitución Trigonométrica:** Para eliminar raíces cuadradas transformándolas en un solo término.


# Signos de las Funciones Trigonométricas por Cuadrante

El signo de una función trigonométrica depende del cuadrante en el que se encuentre su lado terminal. Esto se debe a que las funciones se definen según las coordenadas $(x, y)$ en el círculo unitario.

---

## 1. Regla de los Signos (Tabla)

| Cuadrante | Rango de Ángulos | Funciones Positivas | Explicación ($x, y$) |
| :--- | :--- | :--- | :--- |
| **I** | $0^\circ$ a $90^\circ$ | **Todas** ($\sin, \cos, \tan$) | $x$ es (+), $y$ es (+) |
| **II** | $90^\circ$ a $180^\circ$ | **Seno** (y $\csc$) | $x$ es (-), $y$ es (+) |
| **III** | $180^\circ$ a $270^\circ$ | **Tangente** (y $\cot$) | $x$ es (-), $y$ es (-) |
| **IV** | $270^\circ$ a $360^\circ$ | **Coseno** (y $\sec$) | $x$ es (+), $y$ es (-) |



---

## 2. Regla Mnemotécnica: "TODOS SIN TA COS"

Para memorizarlo rápidamente, usa la frase siguiendo el orden de los cuadrantes (I, II, III, IV):

1.  **TODOS**: En el 1er cuadrante, **Todos** son positivos.
2.  **SIN**: En el 2do cuadrante, solo el **Seno** es positivo.
3.  **TA**: En el 3er cuadrante, solo la **Tangente** es positiva.
4.  **COS**: En el 4to cuadrante, solo el **Coseno** es positivo.

---

## 3. ¿Por qué cambian los signos?

Las funciones están ligadas a los ejes del Plano Cartesiano:
* El **Seno** depende de la ordenada ($y$). Es positivo arriba y negativo abajo.
* El **Coseno** depende de la abscisa ($x$). Es positivo a la derecha y negativo a la izquierda.
* La **Tangente** es la división $y/x$. Es positiva cuando $x$ e $y$ tienen el mismo signo (Cuadrantes I y III).



---

## 4. Ejemplo de Aplicación

Si te piden calcular el $\cos(210^\circ)$:
1.  **Identificar cuadrante**: $210^\circ$ está en el **III Cuadrante**.
2.  **Verificar signo**: En el III, solo la Tangente es positiva, por lo tanto el **Coseno debe ser negativo**.
3.  **Reducir al primer cuadrante**: $\cos(210^\circ) = -\cos(210^\circ - 180^\circ) = -\cos(30^\circ)$.
4.  **Resultado**: $-\sqrt{3}/2$.