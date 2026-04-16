---
title: Circuitos y Leyes de Kirchhoff


---

# Fundamentos de Electrónica: Circuitos y Leyes de Kirchhoff

Un circuito eléctrico es una interconexión de componentes eléctricos (resistencias, inductores, capacitores, fuentes) que forman una trayectoria cerrada, permitiendo el flujo continuo de electrones.

---

## 1. Tipos de Circuitos según su Conexión

### Circuito en Serie
Los componentes están conectados uno tras otro. La corriente ($I$) es la misma en todos los puntos, pero el voltaje ($V$) se reparte entre los componentes.
* **Resistencia Total:** $R_t = R_1 + R_2 + R_n$

### Circuito en Paralelo
Los componentes están conectados a los mismos dos nodos. El voltaje ($V$) es el mismo para todos, pero la corriente ($I$) se divide por las distintas ramas.
* **Resistencia Total:** $\frac{1}{R_t} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_n}$

### Circuito Combinado (Mixto)
Es una mezcla de ambos. Para resolverlos, se deben simplificar partes del circuito (series o paralelos locales) hasta obtener una resistencia equivalente total.



[Image of series vs parallel circuit diagrams]


---

## 2. Las Leyes de Kirchhoff desde Cero

Cuando los circuitos son complejos y no pueden simplificarse solo con serie/paralelo, usamos las Leyes de Kirchhoff.

### Primera Ley: Ley de Corrientes (Leyes de Nodos)
"La suma de las corrientes que entran a un nodo es igual a la suma de las que salen".
* **Concepto:** Es el principio de conservación de la carga. La electricidad no se acumula en un punto de unión.
* **Ecuación:** $\sum I_{entran} = \sum I_{salen}$

### Segunda Ley: Ley de Voltajes (Ley de Mallas)
"En una trayectoria cerrada (malla), la suma de todas las caídas de tensión es igual a la tensión total suministrada".
* **Concepto:** Es el principio de conservación de la energía.
* **Ecuación:** $\sum V_{fuentes} = \sum (I \cdot R)$



---

## 3. Relación con Matrices y Resolución de Sistemas

En circuitos con múltiples mallas, terminamos con un sistema de ecuaciones lineales. Aquí es donde entra el álgebra lineal.

### El Método de Mallas
Si tenemos un circuito de 3 mallas, generamos 3 ecuaciones basadas en la Ley de Voltajes:
1. $E_1 = I_1(R_1+R_2) - I_2(R_2)$
2. $0 = -I_1(R_2) + I_2(R_2+R_3+R_4) - I_3(R_4)$
3. $...$

### Representación Matricial
Este sistema se puede expresar como $A \cdot X = B$, donde:
* **A (Matriz de Resistencias):** Contiene los valores de las resistencias.
* **X (Vector de Incógnitas):** Contiene las corrientes de malla ($I_1, I_2, I_3$).
* **B (Vector de Fuentes):** Contiene los voltajes de las fuentes.

$$
\begin{bmatrix}
R_{11} & R_{12} & R_{13} \\
R_{21} & R_{22} & R_{23} \\
R_{31} & R_{32} & R_{33}
\end{bmatrix}
\cdot
\begin{bmatrix}
I_1 \\
I_2 \\
I_3
\end{bmatrix}
=
\begin{bmatrix}
V_1 \\
V_2 \\
V_3
\end{bmatrix}
$$

### ¿Por qué usar Matrices?
1. **Escalabilidad:** Resolver 2 mallas a mano es fácil, pero 10 mallas es imposible sin matrices.
2. **Algoritmos:** Se pueden usar métodos como **Eliminación de Gauss-Jordan** o la **Regla de Cramer** para hallar los valores exactos de cada corriente.
3. **Computación:** Es la forma en que los softwares de simulación (como SPICE) calculan los circuitos internamente.

---

## 4. Pasos para calcular valores con Kirchhoff

1. **Identificar Nodos y Mallas:** Marcar los puntos de unión y los caminos cerrados.
2. **Asignar Sentidos:** Dibujar una dirección arbitraria para la corriente en cada malla (usualmente horario).
3. **Plantear Ecuaciones:** Aplicar la Ley de Voltajes en cada malla.
4. **Armar la Matriz:** Trasladar los coeficientes de las ecuaciones a la matriz.
5. **Resolver:** Calcular las corrientes $I$. Si un resultado da negativo, significa que la corriente fluye en sentido opuesto al que asignamos al principio.

---

> **Nota técnica:** La precisión en el cálculo de mallas es vital en electrónica de potencia y diseño de placas (PCB), ya que un error de cálculo puede llevar a sobrecalentamiento por exceso de corriente en una pista delgada.