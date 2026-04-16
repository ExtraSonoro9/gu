---
title: Esquematicos


---
# Interpretación de Diagramas Electrónicos

Un diagrama esquemático es una representación gráfica de un circuito eléctrico. Utiliza símbolos estandarizados para que cualquier técnico o ingeniero en el mundo pueda entender el funcionamiento del sistema.

---

## 1. Simbología Técnica Fundamental

Los símbolos se dividen por categorías según la función del componente:

### Componentes Pasivos
* **Resistencia:** Un zig-zag (ANSI) o un rectángulo (DIN). Limita el paso de corriente.
* **Capacitor:** Dos líneas paralelas. Almacena energía en un campo eléctrico. (Si es electrolítico, una línea es curva o tiene un signo +).
* **Inductor (Bobina):** Una serie de semicírculos o espirales. Almacena energía en un campo magnético.
* **Potenciómetro:** Una resistencia con una flecha que indica que es variable.

### Semiconductores
* **Diodo:** Un triángulo que apunta a una línea (cátodo). Permite el flujo en un solo sentido.
* **LED:** Símbolo de diodo con dos flechas pequeñas que salen de él (emisión de luz).
* **Transistor NPN/PNP:** Círculo con tres terminales (Base, Colector, Emisor). La flecha indica el sentido de la corriente.
* **Circuito Integrado (IC):** Un bloque rectangular con pines numerados.

### Fuentes y Protección
* **Batería:** Una línea larga (positivo) y una corta (negativo).
* **Tierra (GND):** Tres líneas horizontales decrecientes o un triángulo invertido. Es el punto de referencia 0V.
* **Fusible:** Una línea con una curva o un rectángulo con una línea atravesada. Protección contra sobrecorriente.
* **Interruptor (Switch):** Una línea interrumpida que puede cerrarse para completar el circuito.

---

## 2. Modo de Lectura: ¿Cómo interpretar un esquema?

Para leer un diagrama de forma profesional, se deben seguir estas reglas no escritas:

1.  **Flujo de Izquierda a Izquierda a Derecha:** Generalmente, las entradas (sensores, alimentación) se dibujan a la izquierda y las salidas (actuadores, pantallas, parlantes) a la derecha.
2.  **Voltaje de Arriba a Abajo:** Las líneas de alimentación positiva (VCC, +5V, +12V) se ubican en la parte superior, mientras que las líneas de tierra (GND) se ubican en la parte inferior.
3.  **Cruces de Líneas:** * Si dos líneas se cruzan y hay un **punto**, significa que están conectadas eléctricamente.
    * Si dos líneas se cruzan y **no hay punto** (o hay un pequeño salto), significa que pasan una sobre la otra sin tocarse.
4.  **Etiquetas de Red (Net Names):** A veces, para no llenar el dibujo de cables, se ponen etiquetas con el mismo nombre (ej. `RESET`). Todos los puntos con el mismo nombre están conectados entre sí.

---

## 3. Características y Datos Críticos

Al analizar un diagrama, estos son los datos que determinan si el circuito funcionará o se quemará:

* **Valores de Componentes:** Las resistencias se expresan en Ohms (Ω), capacitores en Faradios (F) y bobinas en Henrios (H).
* **Tolerancia:** Algunos diagramas especifican el % de error aceptable en un componente.
* **Voltaje de Trabajo:** Crucial en capacitores (ej. 10µF / 25V). Si usas un componente de menor voltaje al del circuito, explotará.
* **Polaridad:** Los componentes como diodos, transistores y capacitores electrolíticos tienen una orientación específica. Invertirlos puede destruir el circuito.
* **Potencia (Wattage):** En resistencias de potencia, se indica si son de 1/4W, 1/2W, 1W, etc.

---

## 4. Tipos de Documentación Relacionada

* **Esquemático:** Muestra la lógica eléctrica (el "cómo funciona").
* **Layout de PCB:** Muestra la posición física de los componentes y las pistas de cobre en la placa.
* **Datasheet:** Es el manual técnico de cada componente (especialmente circuitos integrados) que explica qué hace cada pin.
* **BOM (Bill of Materials):** La lista de materiales con las cantidades y especificaciones exactas para el montaje.

---

> **Dato Clave:** En electrónica moderna, muchos diagramas son **jerárquicos**. Esto significa que un bloque en el diagrama principal puede representar todo un sub-circuito complejo que se detalla en otra página, similar a cómo una función en programación encapsula bloques de código.