---
title: Sistemas Embebidos


---
# Ecosistema Arduino

Un sistema embebido es una combinación de hardware y software diseñada para controlar un dispositivo, proceso o sistema específico. A diferencia de una PC, no tiene un sistema operativo de propósito general (como Windows o Linux) para el usuario, sino que ejecuta un bucle de control infinito.

---

## 1. El Fenómeno Arduino
Arduino no es un solo componente, sino una plataforma de **código abierto (Open Source)** que incluye placas de hardware fáciles de usar y un entorno de desarrollo (IDE).

### Características Principales:
* **Hardware Libre:** Los planos de las placas son públicos; cualquiera puede fabricarlas (por eso existen las versiones "Pro" o genéricas).
* **Entradas/Salidas (I/O):** Permite leer sensores (luz, temperatura, botones) y controlar actuadores (motores, luces, relés).
* **Microcontrolador:** Es el "cerebro" de la placa. Suele ser de la familia Atmel (AVR), aunque los modelos nuevos usan procesadores ARM más potentes.



---

## 2. Tipos de Placas Comunes

| Placa | Microcontrolador | Características | Uso Ideal |
| :--- | :--- | :--- | :--- |
| **Arduino Uno** | ATmega328P | El estándar industrial. 14 pines digitales, 6 analógicos. | Aprendizaje y prototipado rápido. |
| **Arduino Nano** | ATmega328P | Igual que el Uno pero en formato miniatura para protoboard. | Proyectos con espacio reducido. |
| **Arduino Mega** | ATmega2560 | 54 pines digitales y más memoria. | Impresoras 3D, robótica compleja. |
| **Arduino Leonardo** | ATmega32u4 | Puede emular un teclado o mouse USB nativamente. | Periféricos personalizados (HID). |
| **ESP32 / ESP8266** | Xtensa Dual-Core | (No son Arduino pero compatibles). Tienen **Wi-Fi y Bluetooth**. | IoT (Internet de las Cosas), domótica. |

---

## 3. El Lenguaje de Programación

Aunque muchos dicen "lenguaje Arduino", técnicamente se programa en **C++** simplificado.

* **Estructura Básica (Sketch):**
    * `void setup()`: Se ejecuta una sola vez al encender la placa. Se usa para configurar pines.
    * `void loop()`: Se ejecuta infinitamente. Aquí va la lógica principal.
* **Bibliotecas:** Uno de los puntos fuertes es su enorme comunidad. Existen librerías para casi cualquier sensor (ej. `#include <Wire.h>` para comunicación I2C).
* **Bajo Nivel:** Los usuarios avanzados pueden programar directamente manipulando los **Registros** del microcontrolador para ganar velocidad.



---

## 4. El Entorno de Desarrollo (IDE)

El **Arduino IDE** es la herramienta de software para escribir, compilar y "subir" el código a la placa.

* **IDE 1.8.x:** La versión clásica, ligera y estable.
* **IDE 2.x:** La versión moderna basada en el motor de VS Code, que incluye **Autocompletado** y depurador (Debugger).
* **Funcionamiento:**
    1. **Compilación:** Traduce el código C++ a lenguaje de máquina (binario).
    2. **Carga (Upload):** Envía el binario a través del puerto serie (USB) a la memoria Flash del microcontrolador usando un programa llamado *Bootloader*.

---

## 5. El Concepto de "Real-Time" (Tiempo Real)
A diferencia de ejecutar un script en una PC donde el sistema operativo puede pausar tu proceso para revisar el correo, un Arduino tiene **determinismo**.

* **Determinismo:** Puedes predecir exactamente cuánto tarda en ejecutarse una instrucción. Esto es vital para controlar un motor paso a paso o un sistema de frenado, donde un retraso de milisegundos puede ser desastroso.

---

## 6. Alternativas y Evolución
Hoy en día, el ecosistema Arduino convive con potentes competidores:
* **Raspberry Pi Pico:** Basada en el chip RP2040, permite programar en **MicroPython**.
* **STM32:** Microcontroladores de grado industrial mucho más rápidos y con más periféricos, muy usados en electrónica profesional.

> **Dato Técnico:** El microcontrolador del Arduino Uno (ATmega328P) funciona a **16 MHz**. Parece poco comparado con los GHz de una PC, pero es suficiente para procesar miles de lecturas de sensores por segundo sin la sobrecarga de un sistema operativo.