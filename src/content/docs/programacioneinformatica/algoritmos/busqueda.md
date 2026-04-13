---
title: Busqueda


---
# Algoritmos de Búsqueda: Localización Eficiente de Datos

Buscar un dato no siempre significa recorrer todo de principio a fin. Dependiendo de cómo estén organizados los datos, podemos usar métodos "inteligentes" para ahorrar tiempo de procesamiento.

---

## 1. Búsqueda Lineal (O Secuencial)
Es el método más básico. Revisa cada elemento uno por uno.
* **Uso:** Cuando los datos están **desordenados**.
* **Analogía:** Buscar una llave específica en un manojo de llaves desordenadas.

### Ejemplo en C++ (Array Simple)
```
int datos[] = {14, 27, 8, 55, 10};
int objetivo = 8;
for (int i = 0; i < 5; i++) {
    if (datos[i] == objetivo) {
        cout << "Encontrado en indice: " << i;
        break;
    }
}
```

---

## 2. Búsqueda Binaria (El método del "Diccionario")
 Si buscas una palabra que empieza con la letra "Z", no empiezas a buscar por los que empiezan por la "A". Este algoritmo divide la lista a la mitad en cada paso.
* **Requisito:** La lista **DEBE** estar ordenada.
* **Funcionamiento:** Mira el elemento central. Si el objetivo es mayor, descarta la mitad izquierda; si es menor, descarta la derecha. Repite hasta encontrarlo.



### Ejemplo en Python (Lista Ordenada)
```
lista = [10, 20, 30, 40, 50, 60, 70]
objetivo = 60
bajo = 0
alto = len(lista) - 1

while bajo <= alto:
    medio = (bajo + alto) // 2
    if lista[medio] == objetivo:
        print(f"Encontrado en indice {medio}")
        break
    elif lista[medio] < objetivo:
        bajo = medio + 1
    else:
        alto = medio - 1
```

---

## 3. Búsqueda en Arreglos Bidimensionales (Matrices)
Para buscar en una tabla (filas y columnas), necesitamos movernos en dos dimensiones.

### Ejemplo en C++ (Matriz)
```
int matriz[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
int buscar = 5;
for (int f = 0; f < 3; f++) {
    for (int c = 0; c < 3; c++) {
        if (matriz[f][c] == buscar) {
            cout << "Encontrado en Fila " << f << ", Columna " << c;
        }
    }
}
```

---

## 4. Búsqueda en Strings y Diccionarios

### En Strings (Cadenas de texto)
Los lenguajes modernos ya tienen funciones optimizadas para buscar sub-cadenas sin que tengas que programar el bucle manualmente.

**Python:**
```
texto = "El cianoacrilato es un pegamento potente"
if "pegamento" in texto:
    print("Palabra encontrada")
```

### En Diccionarios (Hash Maps)
Esta es la búsqueda más rápida que existe ($O(1)$). No busca por posición, sino por una **llave** única (como un índice de biblioteca).

**Python:**
```
diccionario = {"A": "Acetona", "B": "Benceno", "C": "Cloro"}
# Acceso instantáneo sin recorrer la lista
print(diccionario["B"]) 
```

---

## Comparativa de Eficiencia

| Método | Estado de Datos | Velocidad | Notas |
| :--- | :--- | :--- | :--- |
| **Lineal** | Desordenados | Lenta ($O(n)$) | Útil para listas pequeñas. |
| **Binaria** | Ordenados | Muy Rápida ($O(\log n)$) | El método del "Diccionario". |
| **Hash (Map)** | Llave/Valor | Instantánea ($O(1)$) | La base de las Bases de Datos. |



---

> **Dato para la bitácora:** La búsqueda binaria es tan eficiente que, en una lista de **un millón** de elementos ordenados, solo necesita un máximo de **20 pasos** para encontrar cualquier dato.
>
# Búsqueda por Descomposición: El Árbol de Prefijos (Trie)

Cuando buscamos una palabra como "Zapato", no es eficiente tratarla como un bloque único si tenemos millones de palabras. La búsqueda por descomposición divide la palabra en caracteres y sigue un camino lógico letra por letra.

---

## 1. Concepto de búsqueda jerárquica
En lugar de comparar "Zapato" con "Avión", "Barco", etc., el sistema hace lo siguiente:
1.  **Nivel 1:** Busca la 'Z'. Descarta instantáneamente todo lo que empieza con A-Y.
2.  **Nivel 2:** Dentro de la 'Z', busca la 'a'.
3.  **Nivel 3:** Dentro de 'Za', busca la 'p', y así sucesivamente.



---

## 2. Ejemplo de lógica en Python (Diccionarios anidados)
Python permite simular esta estructura fácilmente usando diccionarios dentro de diccionarios.

---
# Representación de un pequeño diccionario como un árbol (Trie)
```
trie = {
    'z': {
        'a': {
            'p': {
                'a': {
                    't': {
                        'o': {'final': True}
                    }
                }
            }
        }
    }
}

def buscar_palabra(palabra, arbol):
    nodo_actual = arbol
    for letra in palabra:
        if letra in nodo_actual:
            nodo_actual = nodo_actual[letra] # Baja un nivel en el árbol
        else:
            return False # La letra no existe en este camino
    return nodo_actual.get('final', False)

print(buscar_palabra("zapato", trie)) # Devuelve True
```

---

## 3. Implementación en C++ (Estructuras)
En C++ esto se hace creando un `struct` o `class` que contiene un arreglo de punteros para las siguientes letras (normalmente 26 para el alfabeto inglés).

```
struct NodoTrie {
    NodoTrie* hijos[26]; // Un puntero para cada letra de la A a la Z
    bool esFinDePalabra;

    NodoTrie() {
        esFinDePalabra = false;
        for (int i = 0; i < 26; i++) hijos[i] = nullptr;
    }
};

// Para buscar "zapato", el programa accede a:
// raiz->hijos[25] (Z) -> hijos[0] (A) -> hijos[15] (P) ...
```

---

## 4. Ventajas de este método

* **Velocidad extrema:** La búsqueda no depende de cuántas palabras tengas en total, sino de **qué tan larga es la palabra** que buscas. Buscar "Z" en un diccionario de un billón de palabras toma el mismo tiempo que en uno de diez.
* **Autocompletado:** Es el método que usan los buscadores. Cuando escribes "Zap", el sistema ya está parado en el nodo 'p' y solo tiene que mostrarte los hijos que cuelgan de ahí (zapato, zapatería, zafiro).

---

## Comparativa de Búsqueda de Texto

| Método | Funcionamiento | Ideal para... |
| :--- | :--- | :--- |
| **Búsqueda Simple** | Compara el texto completo. | Listas de nombres cortas. |
| **Búsqueda por Prefijo (Trie)** | Descompone letra por letra. | Diccionarios, Google, Autocompletado. |
| **Regex** | Busca patrones (ej: palabras que terminen en 'ato'). | Análisis de datos y filtros complejos. |

---

> **Dato para la bitácora:** Este método es como los antiguos índices de pestañas en los diccionarios físicos: primero abrías la pestaña de la 'Z', luego buscabas la sección 'Za', ahorrándote hojear todo el libro.