---
title: Diodos

---
## Diodos: Los Guardianes del Sentido Único

Un diodo es un componente semiconductor que permite el flujo de corriente eléctrica en **una sola dirección**. Es el equivalente electrónico a una válvula de retención en hidráulica.

---

## 1. Funcionamiento Básico

El diodo tiene dos terminales: **Ánodo (+)** y **Cátodo (-)**.

* **Polarización Directa:** Si conectas el positivo al ánodo, el diodo deja pasar la corriente (actúa como un interruptor cerrado).
* **Polarización Inversa:** Si conectas el positivo al cátodo, el diodo bloquea la corriente (actúa como un interruptor abierto).

> **La Barrera de Potencial:** Para que un diodo de silicio común empiece a conducir, necesita un "empujón" de aproximadamente **0.7V**.

<figure style="display: block; margin: 2rem auto; max-width: 400px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/fisica/electric/diodo.jpg" alt="diodo" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
  <figcaption style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee; font-family: 'Georgia', serif; font-size: 0.85rem; color: #444; line-height: 1.5; text-align: left;">
    <strong style="color: #000;"> Diodos </strong> 
  </figcaption>
</figure>


<figure style="display: block; margin: 2rem auto; max-width: 400px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/fisica/electric/diodosimbolo.jpg" alt="diodo simbolo" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
  <figcaption style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee; font-family: 'Georgia', serif; font-size: 0.85rem; color: #444; line-height: 1.5; text-align: left;">
    <strong style="color: #000;"> Símbolo de diodos en diagramas </strong> 
  </figcaption>
</figure>



---

## 2. Tipos de Diodos y sus Usos

Existen variantes especializadas según lo que necesitemos hacer con la energía:

### A. Diodo Rectificador
Es el más común. Se usa para convertir **Corriente Alterna (AC)** de los enchufes en **Corriente Continua (DC)** para dispositivos electrónicos.
* *Uso:* Puentes rectificadores en fuentes de alimentación.

### B. LED (Diodo Emisor de Luz)
Un diodo que emite fotones cuando la corriente pasa a través de él.
* *Uso:* Pantallas, indicadores y alumbrado doméstico.

<figure style="display: block; margin: 2rem auto; max-width: 400px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/fisica/electric/diodoled.jpg" alt="diodo led" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
  <figcaption style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee; font-family: 'Georgia', serif; font-size: 0.85rem; color: #444; line-height: 1.5; text-align: left;">
    <strong style="color: #000;"> Diodo led </strong> 
  </figcaption>
</figure>


### C. Diodo Zener
A diferencia de los demás, este puede conducir en sentido inverso cuando se alcanza un voltaje específico.
* *Uso:* Regulación de voltaje (mantiene un voltaje constante en un circuito).


<figure style="display: block; margin: 2rem auto; max-width: 400px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/fisica/electric/diodozener.jpg" alt="diodo zener" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
  <figcaption style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee; font-family: 'Georgia', serif; font-size: 0.85rem; color: #444; line-height: 1.5; text-align: left;">
    <strong style="color: #000;"> Diodo zener</strong> 
  </figcaption>
</figure>


### D. Fotodiodo
Sensible a la luz. Cuando recibe fotones, permite o genera el paso de corriente.
* *Uso:* Sensores de control remoto y paneles solares.



---

## 3. La Rectificación: De AC a DC

Este es el uso más importante de los diodos en tu vida diaria. Como la corriente de la pared oscila (onda senoidal), el diodo "corta" la parte negativa para que la corriente siempre vaya en un mismo sentido.

1. **Media Onda:** Usa un solo diodo para eliminar los ciclos negativos.
2. **Onda Completa (Puente de Graetz):** Usa 4 diodos para aprovechar tanto los ciclos positivos como los negativos, convirtiendo todo en pulsos positivos.



---

## 4. Curva Característica (V-I)

Si graficamos el voltaje frente a la corriente, vemos que el diodo no es un componente lineal (como una resistencia):
1. **Zona de conducción:** Después de los 0.7V, la corriente sube exponencialmente.
2. **Zona de bloqueo:** Casi no hay corriente.
3. **Voltaje de Ruptura:** Si aplicas demasiado voltaje inverso, el diodo falla y deja pasar todo (efecto avalancha).

---

## 5. Aplicación: Protección de Circuitos

Los diodos se usan a menudo para proteger equipos contra errores humanos. Por ejemplo, si pones las baterías al revés en un aparato, un **diodo de protección** impide que la corriente fluya en sentido contrario, salvando los transistores y el procesador de quemarse.