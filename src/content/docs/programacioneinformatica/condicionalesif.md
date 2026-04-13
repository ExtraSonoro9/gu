---
title: Condicionales 


---
# La Toma de Decisiones

En programación, los condicionales permiten que el software evalúe una **expresión lógica** (algo que solo puede ser Verdadero o Falso). Dependiendo del resultado, el flujo del programa toma diferentes caminos.




---

## 1. La Estructura If / Else

Es la forma más simple de decisión: "Si se cumple esto, haz A; de lo contrario, haz B".

### Ejemplo en C++
C++ utiliza paréntesis para la condición y llaves para delimitar las acciones.

```cpp
int edad = 18;

if (edad >= 18) {
    cout << "Eres mayor de edad.";
} else {
    cout << "Eres menor de edad.";
}
```

### Ejemplo en Python
Python elimina las llaves y usa dos puntos (:) junto con la sangría para agrupar el código.

```python
edad = 18

if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")
```



## 2. Decisiones Múltiples: Else If

Cuando hay más de dos caminos posibles, se encadenan las condiciones para evaluar diferentes escenarios en orden.

**En C++:**
```cpp
if (temp > 30) {
    cout << "Hace calor";
} else if (temp > 15) {
    cout << "Clima agradable";
} else {
    cout << "Hace frio";
}
```

**En Python:**
```python
if temp > 30:
    print("Hace calor")
elif temp > 15:
    print("Clima agradable")
else:
    print("Hace frio")
```

---

## 3. Operadores Lógicos (Los conectores)

Permiten evaluar varias condiciones en una sola línea.



* **AND (Y):** Ambas deben ser ciertas. (C++: `&&` | Python: `and`)
* **OR (O):** Al menos una debe ser cierta. (C++: `||` | Python: `or`)
* **NOT (No):** Invierte el valor. (C++: `!` | Python: `not`)

---

## 4. El Selector (Switch / Match)

Ideal para comparar una variable contra múltiples valores exactos.

**C++ (Switch):**
```cpp
switch (opcion) {
    case 1: cout << "Inicio"; break;
    case 2: cout << "Ajustes"; break;
    default: cout << "Salir";
}
```

**Python (Match):**
```python
match opcion:
    case 1:
        print("Inicio")
    case 2:
        print("Ajustes")
    case _:
        print("Salir")
```

---

> **Nota visual:** En un diagrama de flujo, cualquier decisión siempre se dibuja dentro de un **Rombo**.