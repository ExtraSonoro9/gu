---
title: Bucles


---
# Bucles: El Poder de la Repetición

Un bucle permite ejecutar una misma instrucción múltiples veces mientras se cumpla una condición específica. Esto ahorra líneas de código y permite manejar grandes volúmenes de datos.

---

## 1. Bucle While (Mientras...)

El bucle `while` se repite mientras la condición sea verdadera. Es ideal cuando no sabemos exactamente cuántas veces se debe repetir el ciclo.




### Ejemplo en C++
```
int contador = 1;
while (contador <= 5) {
    cout << "Iteracion numero: " << contador << endl;
    contador++; // Importante incrementar para no crear un bucle infinito
}
```

### Ejemplo en Python
```
contador = 1
while contador <= 5:
    print(f"Iteracion numero: {contador}")
    contador += 1
```

---

## 2. Bucle For (Para...)

El bucle `for` se usa generalmente cuando sabemos de antemano cuántas veces queremos que se ejecute el código (por ejemplo, recorrer los elementos de una lista).



### Ejemplo en C++
```
for (int i = 0; i < 5; i++) {
    cout << "Valor de i: " << i << endl;
}
```

### Ejemplo en Python
En Python, el `for` es muy potente porque recorre rangos o colecciones de forma directa.
```
for i in range(5):
    print(f"Valor de i: {i}")
```

---

## 3. Bucle Do-While (Hacer... mientras)

Este bucle es especial porque garantiza que el código se ejecute **al menos una vez**, ya que la condición se revisa al final.

### Ejemplo en C++
```cpp
int numero;
do {
    cout << "Ingresa un numero (0 para salir): ";
    cin >> numero;
} while (numero != 0);
```

### En Python
Python **no tiene** un bucle `do-while` nativo, pero se simula usando un `while True` con una interrupción.
```python
while True:
    numero = int(input("Ingresa un numero (0 para salir): "))
    if numero == 0:
        break
```


## 4. Control de Bucles: Break y Continue

A veces necesitamos alterar el flujo normal de un bucle:

* **Break:** Sale inmediatamente del bucle, sin importar la condición.
* **Continue:** Salta el resto del código en la iteración actual y pasa directamente a la siguiente vuelta.



---

## Resumen de Estructuras

| Estructura | C++ | Python |
| :--- | :--- | :--- |
| **While** | `while (cond) { ... }` | `while cond:` |
| **For** | `for (ini; cond; inc) { ... }` | `for i in elemento:` |
| **Do-While** | `do { ... } while (cond);` | No existe (se simula) |
| **Incremento**| `i++` o `i += 1` | Solo `i += 1` |

> **Nota para la bitácora:** Los bucles infinitos ocurren cuando la condición nunca llega a ser falsa. En un diagrama de flujo, esto se ve como una flecha que regresa a un punto anterior sin una salida clara.