---
title: Bobinas


---
# Bobinas e Inducción: El Magnetismo en Acción

Una bobina es simplemente un conductor (generalmente alambre de cobre) enrollado sobre un núcleo, que puede ser de aire, ferrita o hierro. Su función principal es almacenar energía en forma de **campo magnético**.

---

## 1. El Gran Dilema: ¿Por qué no es un Cortocircuito?

Esta es la pregunta clásica: *Si es solo un cable largo uniendo el positivo con el negativo, ¿por qué no explota o quema la fuente?*

La respuesta está en la **Inductancia** y la **Ley de Lenz**:

* **En Corriente Alterna (AC):** Cuando la corriente intenta pasar, genera un campo magnético que crece y decrece constantemente. Este campo magnético genera una "fuerza contra-electromotriz" que empuja los electrones hacia atrás, creando una resistencia llamada **Reactancia Inductiva**. El cable "frena" a la corriente por magnetismo.
* **En Corriente Continua (DC):** Al principio, durante una fracción de segundo, la bobina se opone al paso. Pero una vez que el campo magnético se estabiliza, la bobina se comporta efectivamente como un cable común. Si la resistencia del cable es muy baja (pocos Ohmios), **sí puede actuar como un cortocircuito**. Por eso, los electroimanes DC deben diseñarse con muchas vueltas de cable muy fino para que la propia resistencia del cobre limite la corriente.

---


<figure style="display: block; margin: 2rem auto; max-width: 400px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/fisica/electric/bobinapequeña.jpg" alt="bobina mediana" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
  <figcaption style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee; font-family: 'Georgia', serif; font-size: 0.85rem; color: #444; line-height: 1.5; text-align: left;">
    <strong style="color: #000;"> Bobina de una fuente conmutada </strong> 
  </figcaption>
</figure>

## 2. Electroimanes: Potencia y Fuerza

Un electroimán es una bobina con un núcleo ferromagnético que concentra las líneas de campo. 

### Factores que determinan la fuerza:
La fuerza de atracción de un electroimán depende de la densidad de flujo magnético. La fórmula simplificada para la fuerza ($F$) en Newtons es:

$$F = \frac{(N \cdot I)^2 \cdot \mu \cdot A}{2 \cdot g^2}$$

Donde:
* $N$: Número de vueltas (espiras).
* $I$: Intensidad de la corriente en Amperios.
* $\mu$: Permeabilidad magnética del núcleo (el hierro es mucho mejor que el aire).
* $A$: Área de la sección transversal del núcleo.
* $g$: La distancia (gap) entre el imán y el objeto a atraer.

> **Regla de oro:** Para más potencia, o aumentas el amperaje ($I$) o aumentas el número de vueltas ($N$). Esto se conoce como **Amperios-vuelta**.



<figure style="display: block; margin: 2rem auto; max-width: 400px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/fisica/electric/bobinasmultiples.jpg" alt="bobinas smd" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
  <figcaption style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee; font-family: 'Georgia', serif; font-size: 0.85rem; color: #444; line-height: 1.5; text-align: left;">
    <strong style="color: #000;"> Bobina SMD generalmente encontrada en placas madre </strong> 
  </figcaption>
</figure>

---

## 3. Usos Cruciales en Electrónica



1.  **Filtros en Fuentes Conmutadas:** Junto con los capacitores, las bobinas (choques) eliminan el ruido de alta frecuencia, dejando pasar solo la energía limpia.
2.  **Relés (Relays):** Un electroimán mueve un contacto físico para encender un circuito de alta potencia (como un motor) usando una señal pequeña (como la de un Arduino).
3.  **Transformadores:** (Como vimos antes) son dos o más bobinas compartiendo el mismo flujo magnético.
4.  **Sistemas de Encendido de Autos:** Las "bobinas de encendido" elevan los $12$V de la batería a miles de voltios para crear la chispa en la bujía.
5.  **Carga Inalámbrica:** Tu celular tiene una bobina que recibe energía por inducción de otra bobina en la base de carga.

---



## 4. Comportamiento y Fórmulas de Energía

La unidad de medida es el **Henrio (H)**, aunque en electrónica usamos milihenrios ($mH$) o microhenrios ($\mu H$).

### Energía almacenada:
A diferencia del capacitor ($\frac{1}{2} CV^2$), la energía en una bobina depende de la corriente:
$$E = \frac{1}{2} \cdot L \cdot I^2$$
Donde $L$ es la inductancia y $I$ la corriente.

---

## 5. Formas de Medición y Diagnóstico

### A. Prueba de Continuidad y Resistencia
Una bobina sana debe tener una resistencia muy baja (casi cero en bobinas grandes, o unos pocos cientos de Ohmios en electroimanes pequeños). Si marca "infinito", el cable interno se cortó.

### B. Inductómetro
Es el aparato específico para medir Henrios. Es vital en el diseño de fuentes de alimentación para asegurar que la bobina filtrará la frecuencia correcta.

### C. El "Flyback" (Pico de Voltaje)
Cuando cortas la energía de una bobina de golpe, el campo magnético colapsa e intenta mantener la corriente fluyendo, generando un pico de voltaje altísimo que puede quemar transistores. Por eso siempre verás un **Diodo Volante** (Flyback diode) en paralelo a cualquier bobina o relé.



---

## Resumen para la Bitácora

| Característica | Detalle |
| :--- | :--- |
| **Almacena...** | Energía en campo magnético. |
| **Se opone a...** | Cambios bruscos de corriente ($I$). |
| **En DC...** | Se comporta como un cable (tras el transitorio). |
| **En AC...** | Presenta una resistencia magnética (Reactancia). |
| **Núcleo...** | Hierro (potencia), Ferrita (alta frecuencia), Aire (radio). |

> **Dato Curioso:** Sin bobinas no existiría la radio. La combinación de una bobina y un capacitor crea un "circuito tanque" que resuena a una frecuencia específica, permitiéndote sintonizar una emisora entre miles de señales.