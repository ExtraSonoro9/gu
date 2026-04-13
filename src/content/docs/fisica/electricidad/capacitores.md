---
title: Capacitores


---
#  Almacenes de Energía Eléctrica

Un **Capacitor** es un componente electrónico pasivo que almacena energía en forma de un campo eléctrico. Está formado por dos placas conductoras separadas por un material aislante llamado **dieléctrico**.



---

## 1. Breve Historia

* **La Botella de Leyden (1745):** El primer capacitor de la historia fue inventado de forma independiente por Ewald Georg von Kleist y Pieter van Musschenbroek. Era una botella de vidrio llena de agua con un cable, capaz de almacenar una carga estática que daba fuertes sacudidas.
* **Michael Faraday:** Los capacitores modernos se basan en sus estudios sobre el electromagnetismo. En su honor, la unidad de medida de la capacitancia es el **Faradio (F)**.

---

## 2. Tipos de Capacitores

Existen muchos tipos según su material y construcción, cada uno para una tarea específica:

* **Electrolíticos (Aluminio/Tántalo):** Tienen polaridad (un polo $+$ y uno $-$). Ofrecen mucha capacidad en poco espacio. *Cuidado: si los conectas al revés, pueden explotar.*
* **Cerámicos (Lenteja):** No tienen polaridad. Son excelentes para filtrar ruidos de alta frecuencia y son muy económicos.
* **De Poliéster/Película:** Muy estables y resistentes al calor, ideales para circuitos de audio o donde se necesite precisión.
* **Supercapacitores:** Tienen una capacidad inmensa (varios Faradios). Se usan como baterías de carga ultra rápida.



---

## 3. Usos Principales en Circuitos

1.  **Filtrado de Fuente de Alimentación:** Convierten una señal pulsante en una línea continua suave (eliminan el "ripple").
2.  **Acoplamiento y Desacoplamiento:** Permiten el paso de señales de corriente alterna (AC) bloqueando la corriente continua (DC).
3.  **Temporización:** Junto con una resistencia, crean retardos de tiempo (Circuitos RC).
4.  **Arranque de Motores:** Dan un "empujón" inicial de energía a motores eléctricos potentes.

---

## 4. Cómo Medir un Capacitor

Para saber si un capacitor está sano o ha perdido su capacidad (algo común con el tiempo), usamos estos métodos:

### A. Con Multímetro (Función Capacitímetro)
La mayoría de los multímetros modernos tienen un símbolo de dos líneas paralelas ($-||-$).
1. **Descarga el capacitor** haciendo un puente entre sus terminales con una resistencia o destornillador aislado (¡Importante por seguridad!).
2. Conecta las puntas. El multímetro inyectará una corriente y medirá el tiempo de carga para decirte el valor en microfaradios ($\mu F$), nanofaradios ($nF$) o picofaradios ($pF$).

### B. Prueba de Carga/Descarga (Modo Resistencia)
Si no tienes capacitímetro, puedes usar el modo Ohmiómetro ($\Omega$):
1. Al tocar los terminales, la resistencia debería empezar baja y subir rápidamente hasta "infinito" (OL). Esto indica que el capacitor se está cargando y no está en cortocircuito.

### C. Medidor de ESR (Equivalent Series Resistance)
Es la herramienta profesional. Mide la "salud interna" del capacitor sin necesidad de desoldarlo. Un capacitor puede tener la capacidad correcta pero una ESR alta, lo que significa que ya no sirve.

---

## Resumen de Unidades

Como el Faradio es una unidad gigante, usamos prefijos:
* **Microfaradio ($\mu F$):** $10^{-6}$ F (El más común en fuentes).
* **Nanofarad ($nF$):** $10^{-9}$ F (Usado en filtros).
* **Picofarad ($pF$):** $10^{-12}$ F (Usado en radiofrecuencia).

> **Consejo de Reparación:** Si ves un capacitor electrolítico con la parte superior "hinchada" o con líquido saliendo, cámbialo de inmediato. Es la causa número uno de fallos en fuentes de PC y monitores.