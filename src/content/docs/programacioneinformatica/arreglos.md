---
title: Tipos de datos y arreglos

---
# Tipos de Datos y Estructuras (Arreglos)

Los tipos de datos definen qué tipo de información puede almacenar una variable y cuánta memoria ocupará. Los arreglos nos permiten guardar muchos de estos datos bajo un mismo nombre.

---

## 1. Tipos de Datos Primitivos

Son los ladrillos básicos de cualquier programa.

| Tipo | Descripción | C++ | Python |
| :--- | :--- | :--- | :--- |
| **Entero** | Números sin decimales ($1, -5, 100$) | `int` | `int` |
| **Decimal** | Números con coma ($3.14, 2.0$) | `float` / `double` | `float` |
| **Texto** | Un solo carácter ('A') | `char` | (No existe, usa `str`) |
| **Cadena** | Conjunto de caracteres ("Hola") | `string` | `str` |
| **Booleano**| Verdadero o Falso | `bool` | `bool` |



---

## 2. Diferencias de Declaración

### En C++ (Tipado Estático)
Debes decirle al compilador exactamente qué tipo de dato vas a guardar. Una vez declarado, no puede cambiar.

```
int cantidad = 10;
float precio = 15.50;
bool es_valido = true;
string nombre = "Sensor ESP32";
```

### En Python (Tipado Dinámico)
El intérprete deduce el tipo automáticamente y puedes cambiarlo después si quieres.
```
cantidad = 10
precio = 15.50
es_valido = True
nombre = "Sensor ESP32"
```

---

## 3. Arreglos (Arrays) y Listas

Un arreglo es una colección de elementos del mismo tipo almacenados en posiciones contiguas de memoria.

### Arreglos en C++
Tienen un tamaño fijo que debe definirse al principio.

```
int numeros[5] = {10, 20, 30, 40, 50};
// Para acceder al primer elemento: numeros[0]
```

### Listas en Python
Son mucho más potentes: pueden cambiar de tamaño y guardar diferentes tipos de datos a la vez.

```
mi_lista = [10, "Texto", 3.14, True]
mi_lista.append(100) # Añade un elemento al final
```



---

## 4. Estructuras de Datos Avanzadas

### Vectores (C++)
Es la versión moderna de los arreglos en C++. Pueden cambiar de tamaño dinámicamente como las listas de Python.

```
#include <vector>
std::vector<int> v = {1, 2, 3};
v.push_back(4);
```

### Diccionarios (Python) / Maps (C++)
Guardan información en pares de **Llave : Valor**. Es lo que mencionábamos para búsquedas rápidas.

```
# Python
precios = {"Manzana": 1.5, "Pera": 2.0}
print(precios["Manzana"])
```

---

## 5. El tipo de dato "String" (Cadenas)

Aunque parece simple, un `string` es en realidad un arreglo de caracteres (`char`).

* **En C++:** Puedes acceder a una letra específica con `nombre[0]`.
* **En Python:** Los strings son **inmutables** (no puedes cambiar una letra individualmente, tienes que crear un string nuevo).

---

## Resumen Técnico

1.  **Variable (`var`):** En lenguajes como JS se usa `var`, pero en C++ moderno se usa `auto` para que el compilador adivine el tipo, y en Python no se usa palabra clave.
2.  **Constantes:** Valores que nunca cambian. (C++: `const int PI = 3.14;` | Python: se suelen escribir en MAYÚSCULAS por convención).
3.  **Booleanos:** Fundamentales para los condicionales. En Python se escriben con mayúscula (`True`, `False`) y en C++ con minúscula (`true`, `false`).

> **Nota para la bitácora:** Los arreglos siempre empiezan a contar desde la posición **0**. Si un arreglo tiene 10 elementos, el último es el **9**. Acceder al índice 10 causará un error de "desbordamiento" (buffer overflow).