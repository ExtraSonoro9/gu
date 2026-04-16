---
title: Datasheets 


---
# Guía de Identificación de Hardware y Lectura de Datasheets

En el mundo de la electrónica, la intuición no es suficiente. Cada componente y placa base tiene una identidad única codificada en su superficie. El **Datasheet** (Hoja de Datos) es el documento oficial que define los límites y el funcionamiento de cada pieza.

---

## 1. El Idioma Técnico: La Importancia del Inglés

Es una realidad ineludible: el **99% de la documentación técnica está en inglés**. No es necesario un dominio fluido, pero sí es obligatorio comprender términos técnicos clave para no cometer errores fatales:

* **Pinout:** Diagrama que indica la función de cada pata o pin.
* **Absolute Maximum Ratings:** Los valores límite (voltaje, corriente, temperatura) que, al ser superados, destruyen el componente.
* **Operating Temperature:** Rango de temperatura en el que el componente trabaja de forma segura.
* **Package:** El tipo de encapsulado físico (ej. TO-92, SOT-23, DIP-8).
* **Typical Application:** Esquema de ejemplo sobre cómo se suele conectar el componente.

---

## 2. Cómo Buscar un Datasheet de Forma Efectiva

No busques por descripción (ej. "transistor de tres patas"), busca por el código alfanumérico grabado en el componente.

### Estrategias de Búsqueda:
* **Google Directo:** Usa el comando `[Código] + datasheet filetype:pdf`.
* **Buscadores Especializados:**
    * **Alldatasheet.com / Datasheetspdf.com:** Repositorios masivos de manuales.
    * **Mouser / Digi-Key:** Sitios de venta que incluyen el PDF oficial del fabricante.
* **Componentes SMD (Marcado de Código):** Los componentes muy pequeños tienen un código de 2 o 3 letras (ej. "A7"). Debes buscar como `[Código] + marking code` para hallar el nombre real (ej. BAV99).

---

## 3. Identificación de Componentes (Transistores e Integrados)

Los códigos suelen estar grabados con láser o tinta. Es vital limpiar la superficie con alcohol isopropílico para leerlos correctamente.

* **Transistores:** Busca secuencias como `2N`, `BC`, `TIP`, o `IRF` (ej. `IRFZ44N`). 
* **Circuitos Integrados:** El código suele ser la línea central. Ejemplo: `NE555`, `LM358`, `TL494`.
* **Fabricantes por Prefijo:**
    * **SN / TI:** Texas Instruments.
    * **MAX:** Maxim Integrated.
    * **AT / ATMEGA:** Microchip (Atmel).



---

## 4. Reconocimiento de Placas Base (Motherboards)

En equipos como netbooks o laptops, el modelo comercial del equipo (ej. "HP G42") no sirve para buscar el diagrama eléctrico. Debes buscar el **Modelo de la Placa**.

### Dónde buscar el modelo:
Suele estar impreso en la serigrafía de la placa (en el cobre o con pintura blanca), generalmente cerca de los slots de memoria RAM o bajo el teclado.

### Nomenclaturas Comunes:
* **Compal:** Empiezan con `LA-` (ej. `LA-7912P`).
* **Quanta:** Empiezan con `DA0` (ej. `DA0HK5MB6G0`).
* **Wistron:** Nombres como `Canberra` o códigos como `48.4GV01.011`.
* **HANNSTAR:** A veces verás este nombre, pero es el fabricante del PCB; el modelo real suele estar cerca.



---

## 5. Tabla de Características Críticas a Verificar

Al leer un datasheet, estos son los datos que determinan la compatibilidad en una reparación:

| Término | Significado | Importancia |
| :--- | :--- | :--- |
| **Vceo / Vds** | Voltaje máximo Soportado | Si el circuito entrega más, el componente explota. |
| **Id / Ic** | Corriente Continua Máxima | Determina si aguanta el consumo del motor/carga. |
| **Vgs(th)** | Voltaje de Umbral (Gate) | Indica con cuánto voltaje se activa el componente. |
| **Rds(on)** | Resistencia en encendido | Clave en MOSFETs para saber cuánto calor generará. |

---

## 6. Sitios Recomendados para Esquemas de Laptops

Si te dedicas a la reparación de placas (como las netbooks escolares), estos sitios son indispensables:
1.  **VinaFix:** El foro más grande de esquemas y BIOS (requiere suscripción).
2.  **BadCaps:** Foro gratuito excelente para diagnóstico de fallas comunes.
3.  **Elektrotanya:** Repositorio gratuito de manuales de servicio y diagramas.

> **Consejo Pro:** Siempre compara el logo del fabricante en el componente con el del datasheet. A veces, dos fabricantes usan el mismo número para piezas totalmente diferentes.