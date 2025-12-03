---
title: Limites
---

El concepto de límite está ligado al de tendencia.

Dado un conjunto 𝐴 ⊆ ℝ, se dice que 𝑥 ∈ 𝐴 tiende a un número 𝑎 ∈ ℝ, y lo escribimos

𝑥 → 𝑎, si se pueden tomar valores de 𝑥 tan próximos a 𝑎 como se quiera, pero sin llegar

a valer 𝑎.

Para que 𝑥 ∈ 𝐴 tienda a 𝑎, es necesario que 𝑎 sea un punto de acumulación de 𝐴.

 Si la aproximación es por defecto (con valores menores que 𝑎) se dice que 𝑥 tiende a 𝑎

por la izquierda, y se escribe 𝑥 → 𝑎−, y si es por exceso (con valores mayores que 𝑎) se

dice que 𝑥 tiende a 𝑎 por la derecha, y se escribe 𝑥 → 𝑎+.

Cuando la variable 𝑥 de una función 𝑓 tiende a un valor 𝑎, cabe preguntarse si sus

imágenes mediante 𝑓 tienden a otro valor concreto:

Si 𝑓(𝑥) tiende a un valor 𝑙 cuando 𝑥 tiende a 𝑎, se dice que 𝑙 es el límite de 𝑓(𝑥) cuando

𝑥 → 𝑎, y se escribe

lim

𝑥→𝑎 𝑓(𝑥) = 𝑙

### Límites laterales

Si 𝑓(𝑥) tiende a 𝑙 cuando 𝑥 tiende a 𝑎 por la izquierda, entonces se dice que 𝑙 es el límite

por la izquierda de 𝑓(𝑥) cuando 𝑥 → 𝑎−, y se escribe

lim

𝑥→𝑎− 𝑓(𝑥) = 𝑙.

Si 𝑓(𝑥) tiende a 𝑙 cuando 𝑥 se aproxima a 𝑎 por exceso, entonces se dice que 𝑙 es el límite

por la derecha de 𝑓(𝑥) cuando 𝑥 → 𝑎−, y se escribe

lim

𝑥→𝑎+ 𝑓(𝑥) = 𝑙.

Ejemplo 6.1. Consideremos la función 𝑓(𝑥) = 𝑥2 y veamos que pasa cuando 𝑥 → 2:

### Límites que no existen

Si la función no está definida entorno a un punto, entonces no existe el límite en dicho

punto.

Cuando los límites laterales no coinciden entonces no existe el límite.

A veces, cuando 𝑥 → 𝑎 los valores de 𝑓(𝑥) crecen o decrecen infinitamente y entonces

no existe el límite. En este caso se dice que la función diverge y se escribe

### Límites en el infinito

Si 𝑓(𝑥) tiende a 𝑙 cuando 𝑥 crece infinitamente, entonces se dice que 𝑙 es el límite en el

infinito de 𝑓(𝑥) cuando 𝑥 → +∞, y se escribe

lim

𝑥→+∞ 𝑓(𝑥) = 𝑙.

Si 𝑓(𝑥) tiende a 𝑙 cuando 𝑥 decrece infinitamente, entonces se dice que 𝑙 es el límite en

el infinito de 𝑓(𝑥) cuando 𝑥 → −∞, y se escribe

lim

𝑥→−∞ 𝑓(𝑥) = 𝑙.

107

Ejemplo 6.6. Estudiemos la tendencia de 𝑓(𝑥) = 1

𝑥 cuando 𝑥 → ±∞:

### Definición

Dado un conjunto 𝐴 ⊆ ℝ, una

función 𝑓 ∶ 𝐴 → ℝ y un punto de acumulación 𝑎 de 𝐴, se dice que 𝑙 ∈ ℝ es el límite de

𝑓 en 𝑎 y se escribe

lim

𝑥→𝑎 𝑓(𝑥) = 𝑙

si para cualquier número 𝜀 > 0 existe un número 𝛿 > 0 tal que |𝑓(𝑥) − 𝑙| \< 𝜀 ∀𝑥 ∈ 𝐴  {𝑎}

con |𝑥 − 𝑎| \< 𝛿 
