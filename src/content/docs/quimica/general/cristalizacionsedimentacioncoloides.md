---
title: Cristalización, sedimentacion y coloides


---
# Cristalización

La cristalización es un proceso de separación sólido-líquido en el que hay transferencia de masa de un soluto desde una solución líquida a una fase cristalina sólida pura. Se basa en la formación de una estructura altamente ordenada llamada **red cristalina**.

## El Proceso de Cristalización
Para que se formen cristales, el sistema debe pasar por tres etapas principales:
1.  **Sobresaturación:** El líquido contiene más soluto del que puede disolver normalmente (mediante enfriamiento, evaporación o cambio de solvente).
2.  **Nucleación:** Formación de los primeros núcleos sólidos a partir de los átomos organizados.
3.  **Crecimiento:** Los átomos adicionales se adhieren a los núcleos existentes, expandiendo la red.



---

## El Silicio: Corazón de la Tecnología

El silicio ($Si$) es un metaloide que, aunque es abundante en la arena, debe alcanzar una pureza del **99.9999999%** (grado electrónico) para ser útil en computación. Esto se logra mediante procesos de cristalización extrema.

### El Método Czochralski (CZ)
Es el estándar industrial para fabricar monocristales de silicio.
* Se funde silicio de alta pureza en un crisol de cuarzo a unos $1425 \text{°C}$.
* Se introduce un "cristal semilla" pequeño y se hace girar mientras se retira lentamente hacia arriba.
* El silicio fundido se cristaliza en la semilla, formando un cilindro perfecto llamado **lingote o "boule"**.



---

## De Cristal a Procesador

Una vez obtenido el monocristal de silicio, el proceso sigue estos pasos de alta precisión:

1.  **Corte de Obleas (Wafers):** El lingote se corta con sierras de diamante en láminas ultra delgadas (menos de $1 \text{ mm}$).
2.  **Pulido:** Las obleas se pulen hasta obtener un acabado de espejo, eliminando cualquier defecto atómico.
3.  **Fotolitografía:** Se "imprimen" los circuitos integrados usando luz ultravioleta.
4.  **Dopaje:** Se introducen impurezas específicas (como Fósforo o Boro) para alterar las propiedades eléctricas del cristal y crear transistores.



---

## ¿Por qué es importante el Monocristal?
En un procesador, necesitamos que los electrones viajen sin chocar con obstáculos. 
* **Policristalino:** Tiene "bordes de grano" (desorden) que frenan a los electrones.
* **Monocristalino:** La red es tan perfecta que permite que los transistores funcionen a frecuencias de **GHz** (miles de millones de ciclos por segundo) sin perder eficiencia.

---

## Ejemplo de Propiedades Físicas
| Característica | Silicio Policristalino | Silicio Monocristalino (CZ) |
| :--- | :--- | :--- |
| **Estructura** | Múltiples cristales pequeños | Un solo cristal continuo |
| **Pureza** | Media | Ultra-alta |
| **Aplicación** | Paneles solares baratos | Procesadores (CPU/GPU) y RAM |

# Sedimentación

La sedimentación es un método de separación basado en la diferencia de **densidad** entre los componentes de una mezcla. En una suspensión, las partículas más densas que el fluido tienden a caer y acumularse en la base por efecto de la gravedad.

## La Ley de Stokes
La velocidad a la que una partícula sedimenta está determinada por la **Ley de Stokes**. Esta ley establece que la velocidad de caída depende del radio de la partícula, la diferencia de densidad con el fluido y la viscosidad de este último.

$$v = \frac{2r^2 g (\rho_p - \rho_f)}{9\eta}$$

Donde:
* $v$: Velocidad de sedimentación.
* $r$: Radio de la partícula.
* $g$: Aceleración de la gravedad.
* $\rho_p$ y $\rho_f$: Densidades de la partícula y del fluido.
* $\eta$: Viscosidad del fluido.



---

## Sedimentación Forzada: La Centrifugación

En muchos casos, la gravedad es demasiado débil o las partículas son demasiado pequeñas para sedimentar en un tiempo razonable. Aquí es donde entra la **centrifugación**, que sustituye la gravedad ($g$) por una **fuerza centrífuga** mucho mayor mediante la rotación a altas velocidades.

### Aplicación Médica: Centrifugadoras de Sangre
En el laboratorio clínico, la sangre se separa en sus distintos componentes mediante centrifugadoras. La sangre es un tejido vivo líquido que, al ser centrifugado, se divide en capas según su densidad:

1.  **Plasma (capa superior):** Es la parte líquida, menos densa, compuesta por agua, sales y proteínas.
2.  **Capa Leucocitaria (intermedia):** Una fina capa blanca que contiene glóbulos blancos y plaquetas.
3.  **Eritrocitos (capa inferior):** Los glóbulos rojos, que son las células más densas y pesadas, quedan en el fondo.



---

## Tipos de Centrifugadoras de Laboratorio

* **Microcentrífugas:** Utilizadas para tubos muy pequeños (Eppendorf), alcanzan velocidades altísimas para separar ADN o proteínas.
* **Centrífugas de Mesa:** Las más comunes para análisis de sangre de rutina.
* **Ultracentrífugas:** Funcionan en vacío para evitar el calentamiento por fricción del aire y pueden separar virus o componentes subcelulares.



---

## Comparativa de Métodos de Separación

| Proceso | Fuerza Impulsora | Resultado Principal |
| :--- | :--- | :--- |
| **Sedimentación Simple** | Gravedad ($g$) | Separación lenta de partículas grandes. |
| **Centrifugación** | Fuerza centrífuga ($RCF$) | Separación rápida de partículas microscópicas. |
| **Filtración** | Diferencia de presión | Retención mecánica de sólidos en un medio poroso. |

---

## Ejemplo de Cálculo: Fuerza Centrífuga Relativa (RCF)
Para comparar diferentes centrífugas, se usa el "número de g" ($RCF$):

$$RCF = 1.118 \cdot 10^{-5} \cdot r \cdot (RPM)^2$$

Donde:
* $r$: Radio del rotor en cm.
* $RPM$: Revoluciones por minuto.


# Coloides y Estabilidad Coloidal

Un **coloide** es un sistema físico-químico compuesto por dos fases: una **fase dispersa** (partículas) y una **fase dispersante** (fluido). El tamaño de las partículas coloidales suele oscilar entre $1 \text{ nm}$ y $1 \mu\text{m}$.

## El Efecto Tyndall
Es la forma más sencilla de identificar un coloide. Al hacer pasar un haz de luz a través del sistema, las partículas dispersas reflejan la luz haciéndola visible. Las disoluciones verdaderas no presentan este fenómeno.

[Image showing a laser beam invisible in a solution but visible in a colloid due to Tyndall effect]

---

## Estabilidad y Adsorción
La mayoría de los coloides se mantienen estables porque las partículas tienen **cargas eléctricas del mismo signo** en su superficie, lo que genera una repulsión electrostática que impide que se agrupen (agreguen).

---

## Formas de Precipitar o Agrupar Coloides

Cuando queremos separar la fase dispersa de la dispersante, debemos romper la estabilidad del sistema. Este proceso se llama **floculación** o **coagulación**.

### 1. Adición de Electrolitos (Coagulación)
Al añadir una sal (iones), estos neutralizan las cargas eléctricas en la superficie de las partículas coloidales. Al no haber repulsión, las partículas chocan y se unen.
* **Ejemplo:** El uso de **Alumbre** (Sulfato de Aluminio) en el tratamiento de agua para agrupar impurezas arcillosas.

### 2. Calentamiento
El aumento de temperatura incrementa la energía cinética y el número de colisiones entre partículas. Esto puede romper la capa de solvatación o la barrera eléctrica, permitiendo que se agrupen.
* **Ejemplo:** La coagulación de las proteínas del huevo al cocinarse.

### 3. Cambio de pH
Muchos coloides (especialmente proteínas) son estables solo a ciertos niveles de acidez. Al alcanzar el **punto isoeléctrico** (pH donde la carga neta es cero), las partículas dejan de repelerse y precipitan.
* **Ejemplo:** Añadir limón o vinagre a la leche para separar la caseína (hacer queso).

### 4. Mezcla de Coloides Opuestos
Si se mezclan dos coloides con cargas opuestas (uno positivo y uno negativo), se neutralizan mutuamente y precipitan.



---

## Clasificación de Sistemas Coloidales

| Fase Dispersa | Fase Dispersante | Nombre | Ejemplo |
| :--- | :--- | :--- | :--- |
| Sólido | Líquido | **Sol** | Pinturas, gelatina |
| Líquido | Líquido | **Emulsión** | Leche, mayonesa |
| Gas | Líquido | **Espuma** | Crema batida |
| Sólido | Gas | **Aerosol sólido** | Humo |
| Líquido | Gas | **Aerosol líquido** | Niebla |

---

## Aplicación: El Delta de los Ríos
Un ejemplo natural de precipitación coloidal ocurre cuando el agua dulce de los ríos (cargada de arcillas coloidales) llega al mar. Las sales del océano (electrolitos) neutralizan la carga de la arcilla, provocando su sedimentación y formando los deltas.
# Equilibrio de Solubilidad

Cuando un compuesto iónico sólido se pone en contacto con agua, se establece un equilibrio dinámico entre la fase sólida y los iones disueltos en la solución saturada.

## El Producto de Solubilidad ($K_{ps}$)

Para un compuesto genérico $A_x B_y$ que se disocia en agua, la ecuación de equilibrio es:

$$A_x B_{y(s)} \rightleftharpoons x A^{y+}_{(ac)} + y B^{x-}_{(ac)}$$

La constante de equilibrio para este proceso se llama **Constante del Producto de Solubilidad ($K_{ps}$)** y se define como:

$$K_{ps} = [A^{y+}]^x \cdot [B^{x-}]^y$$

> **Nota:** El sólido puro no se incluye en la expresión porque su concentración (densidad) es constante.



---

## Solubilidad Molar ($s$)

La solubilidad molar es la cantidad máxima de moles de soluto que se pueden disolver en un litro de solución antes de que aparezca un precipitado.

**Ejemplo: AgCl (Cloruro de Plata)**
$$AgCl_{(s)} \rightleftharpoons Ag^+_{(ac)} + Cl^-_{(ac)}$$

Si llamamos $s$ a la solubilidad molar, en el equilibrio tendremos:
* $[Ag^+] = s$
* $[Cl^-] = s$

Entonces:
$$K_{ps} = (s) \cdot (s) = s^2 \implies s = \sqrt{K_{ps}}$$

---

## Predicción de la Precipitación: El Cociente de Reacción ($Q$)

Para saber si se formará un precipitado al mezclar dos soluciones, comparamos el cociente de reacción iónico ($Q$) con la $K_{ps}$:

1.  **$Q < K_{ps}$:** La solución es insaturada. No hay precipitado y se puede disolver más sólido.
2.  **$Q = K_{ps}$:** La solución está saturada (en equilibrio).
3.  **$Q > K_{ps}$:** La solución está sobresaturada. El exceso de iones **precipitará** hasta que $Q$ iguale a $K_{ps}$.



---

## El Efecto del Ion Común

Si añadimos un ion que ya está presente en el equilibrio, según el **Principio de Le Châtelier**, el equilibrio se desplazará hacia la izquierda (formación de sólido).

**Consecuencia:** La solubilidad de una sal disminuye drásticamente si en el agua ya hay presente uno de sus iones. Este fenómeno se usa en química analítica para asegurar la precipitación completa de metales pesados.

---

## Ejemplo Práctico de Cálculo

**Problema:** El $K_{ps}$ del $Mg(OH)_2$ es $1,8 \times 10^{-11}$. Calcular su solubilidad molar en agua pura.

**Solución:**
1. Escribimos la disociación:
   $$Mg(OH)_{2(s)} \rightleftharpoons Mg^{2+} + 2OH^-$$

2. Definimos las concentraciones en función de $s$:
   * $[Mg^{2+}] = s$
   * $[OH^-] = 2s$

3. Sustituimos en la expresión del $K_{ps}$:
   $$K_{ps} = [Mg^{2+}] \cdot [OH^-]^2$$
   $$1,8 \times 10^{-11} = (s) \cdot (2s)^2$$
   $$1,8 \times 10^{-11} = 4s^3$$

4. Despejamos $s$:
   $$s = \sqrt[3]{\frac{1,8 \times 10^{-11}}{4}} \approx 1,65 \times 10^{-4} \text{ mol/L}$$

---

## Aplicaciones Médicas y Geológicas
* **Cálculos Renales:** Se forman cuando el producto de las concentraciones de calcio y oxalato en la orina supera el $K_{ps}$ del oxalato de calcio.
* **Estalactitas:** Son el resultado de cambios en el equilibrio de solubilidad del carbonato de calcio ($CaCO_3$) debido a variaciones en la presión de $CO_2$.

# Complejos de Coordinación

Un complejo de coordinación consiste en un átomo o ion metálico central (generalmente un metal de transición) que actúa como un **ácido de Lewis** (acepta pares de electrones) y está rodeado por ligandos que actúan como **bases de Lewis** (donan pares de electrones).

## Estructura de un Complejo

1.  **Átomo Central:** Suele ser un metal con orbitales *d* vacíos (como $Fe, Cu, Pt, Co$).
2.  **Ligandos:** Moléculas neutras ($NH_3, H_2O, CO$) o aniones ($Cl^-, CN^-, OH^-$) que poseen al menos un par de electrones solitarios.
3.  **Esfera de Coordinación:** Es el conjunto del metal y sus ligandos, que se escribe entre corchetes $[ \ ]$.



---

## Tipos de Ligandos y Quelación

Los ligandos se clasifican según el número de "puntos de unión" que tienen con el metal:
* **Monodentados:** Se unen por un solo punto (ej: $Cl^-, NH_3, CN^-$).
* **Polidentados (Quelantes):** Se unen por dos o más puntos simultáneamente, "atrapando" al metal como una pinza.
    * **EDTA:** Es un ligando hexadentado (6 puntos) muy usado para tratar intoxicaciones por metales pesados.



---

## Geometría y Número de Coordinación

El **número de coordinación** es el número total de enlaces entre el metal y los ligandos. Determina la forma espacial del complejo:

| N.º de Coordinación | Geometría | Ejemplo |
| :--- | :--- | :--- |
| **2** | Lineal | $[Ag(NH_3)_2]^+$ |
| **4** | Tetraédrica o Cuadrada plana | $[NiCl_4]^{2-}$, $[PtCl_4]^{2-}$ |
| **6** | Octaédrica | $[Fe(CN)_6]^{4-}$ |



---

## La Teoría del Campo Cristalino (TCC) y el Color

¿Por qué los complejos suelen tener colores tan vibrantes?
Cuando los ligandos se acercan al metal, los orbitales *d* del metal se dividen en diferentes niveles de energía. La diferencia de energía entre estos niveles ($\Delta$) corresponde a la longitud de onda de la **luz visible**.

* Al absorber un fotón, un electrón salta de un nivel a otro.
* El color que vemos es el **color complementario** al que se absorbe.



---

## Ejemplos Vitales

### 1. Hemoglobina (Complejo de Hierro)
El grupo *hemo* es un complejo de coordinación donde el $Fe^{2+}$ está coordinado por una porfirina (ligando polidentado) y puede unirse reversiblemente al $O_2$.

### 2. Cisplatino (Medicina)
El $[PtCl_2(NH_3)_2]$ es un complejo de geometría cuadrada plana que se utiliza en quimioterapia para unirse al ADN de las células cancerosas e impedir su replicación.

### 3. El Azul de Prusia
Uno de los primeros pigmentos sintéticos, es un complejo de hierro $[Fe_4[Fe(CN)_6]_3]$ con un color azul intenso debido a la transferencia de electrones entre los centros metálicos.



---

## Nomenclatura Rápida
* Se nombran primero los ligandos en orden alfabético.
* Se usa el nombre del metal (si el complejo es un anión, el metal termina en **-ato**).
* Se indica el estado de oxidación del metal en números romanos.
* **Ejemplo:** $[Co(NH_3)_6]Cl_3$ es el Cloruro de hexaamincobalto (III).