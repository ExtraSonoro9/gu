---
title: Poleas


---


Estos sistemas son la base de la ingeniería mecánica. Su función principal es transformar las variables de un movimiento circular: **Velocidad ($n$)** y **Par motor o Torque ($M$)**.

---

## 1. Poleas y Correas: Transmisión Flexible

Las poleas transmiten movimiento entre ejes distantes mediante una correa. Son ideales porque absorben vibraciones y actúan como "fusible" mecánico (si el sistema se bloquea, la correa patina en lugar de romper el motor).

### A. La Relación de Diámetros
La velocidad de giro es inversamente proporcional al diámetro de la polea:
$$D_1 \cdot n_1 = D_2 \cdot n_2$$

* Si la polea motriz es más pequeña que la conducida, tenemos un **sistema reductor**: ganamos fuerza pero perdemos velocidad.

### B. Polipastos: Multiplicadores de Fuerza
En elevación de cargas, el polipasto es el rey. La ventaja mecánica depende de cuántos tramos de cuerda sostienen la carga móvil.

* **Aparejo Factorial:** Combinación de $n$ poleas fijas y $n$ móviles en ejes distintos.
  $$F = \frac{R}{2n}$$
* **Aparejo Potencial:** Una polea fija y varias móviles "en cascada". Es mucho más potente.
  $$F = \frac{R}{2^n}$$



---

## 2. Engranajes: Transmisión Rígida y Precisa

Los engranajes se utilizan cuando se requiere una transmisión exacta sin deslizamiento y para transmitir grandes esfuerzos.

### A. Conceptos Técnicos Clave
Para que dos engranajes engranen, deben tener el mismo **Módulo ($m$)**, que es la relación entre el diámetro y el número de dientes.

* **Piñón:** El engranaje más pequeño de un par.
* **Corona:** El engranaje más grande.
* **Distancia entre ejes:** $L = \frac{D_1 + D_2}{2}$

### B. Tipos de Engranajes según su forma

| Tipo | Aplicación Principal | Ventaja |
| :--- | :--- | :--- |
| **Cilíndricos Rectos** | Relojería, juguetes, cajas de cambio simples. | Fáciles de fabricar, no generan fuerzas axiales. |
| **Helicoidales** | Cajas de cambio de coches modernos. | Más silenciosos y transmiten más potencia (dientes en diagonal). |
| **Cónicos** | Diferenciales de vehículos (ejes a 90°). | Permiten cambiar la dirección del giro a ejes perpendiculares. |
| **Tornillo Sin Fin** | Ascensores, tensores de guitarra. | Gran reducción de velocidad en poco espacio y son **irreversibles** (el peso no puede mover al motor). |



---

## 3. Dinámica: Intercambio entre Velocidad y Torque

Existe una ley de conservación en la mecánica: **No puedes ganar fuerza sin perder velocidad.**

Si despreciamos las pérdidas por rozamiento, la potencia ($P$) se mantiene constante:
$$P = Torque (M) \cdot Velocidad (w)$$

Esto significa que:
1. Si un engranaje **reduce la velocidad** a la mitad ($n_2 = 1/2 n_1$), el **torque se duplica** ($M_2 = 2 M_1$).
2. Por eso, las marchas cortas de un coche (1ª velocidad) tienen engranajes grandes: tienen poca velocidad pero mucha fuerza para sacar el coche del reposo.

---

## 4. Trenes de Engranajes Compuestos

Cuando la reducción necesaria es muy grande, no basta con dos ruedas (el engranaje sería gigante). Se usan ejes intermedios con dos ruedas solidarias.

La relación de transmisión total ($i_{total}$) es el producto de las relaciones de cada etapa:
$$i_{total} = i_1 \cdot i_2 \cdot i_3 ...$$



---

## 5. Otros Sistemas de Transmisión

* **Piñón-Cremallera:** Convierte movimiento circular en lineal (ej: dirección de un coche, puertas correderas).
* **Cadena y Piñones:** Como en la moto o bici. No hay deslizamiento (como en engranajes) pero permite separar los ejes (como en poleas).
* **Biela-Manivela:** Convierte movimiento circular en lineal alternativo (ej: pistones de un motor de combustión).