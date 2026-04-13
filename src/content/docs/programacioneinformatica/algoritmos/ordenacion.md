---
title: Ordenación


---
# Algoritmos de Ordenación: Del Caos al Orden

Ordenar consiste en reorganizar los elementos de una lista en una secuencia lógica (numérica o alfabética). Dependiendo de la cantidad de datos (2,000 números o 1,000 palabras), algunos métodos son mucho mejores que otros.

---

## 1. Métodos Simples (Para pocos datos)

Son fáciles de programar pero lentos si la lista es grande.

### A. Ordenamiento de Burbuja (Bubble Sort)
Compara parejas de elementos adyacentes y los intercambia si están en el orden incorrecto. Los valores más grandes "flotan" hacia el final.
* **Uso:** Solo con fines educativos.
* **Para 2,000 valores:** Haría unos 4 millones de comparaciones. Muy ineficiente.



### B. Inserción (Insertion Sort)
Funciona como cuando ordenas cartas en tu mano: tomas un elemento y lo insertas en la posición correcta entre los que ya revisaste.
* **Uso:** Muy rápido si la lista ya está "casi" ordenada.

---

## 2. Métodos Complejos (Para grandes volúmenes)

Utilizan la técnica de **"Divide y Vencerás"**, rompiendo el problema en partes pequeñas.

### A. QuickSort (Ordenamiento Rápido)
Elige un número llamado "pivote" y mueve todos los menores a un lado y los mayores al otro. Luego repite el proceso en cada lado.
* **Para 2,000 valores:** Es extremadamente rápido. Es el estándar en la mayoría de los lenguajes de programación.

### B. Merge Sort (Por Mezcla)
Divide la lista a la mitad repetidamente hasta tener elementos individuales, y luego los vuelve a juntar (mezclar) ya ordenados.
* **Para un Diccionario de 1,000+ palabras:** Es excelente porque es muy estable y maneja bien grandes cadenas de texto.



---

## 3. Ejemplos de Código

### Ordenar 2,000 números en C++ (Usando la librería estándar que usa QuickSort/IntroSort)
```
#include <algorithm>
#include <vector>

std::vector<int> valores(2000);
// ... llenar vector ...
std::sort(valores.begin(), valores.end()); 
```

### Ordenar 1,000+ palabras en Python (Usando Timsort, un híbrido de Merge e Inserción)
---
palabras = ["zapato", "arbol", "cloro", ...] # 1000+ palabras
palabras.sort() # Ordena alfabéticamente de forma automática
---

---

## 4. Relación con las Bases de Datos (SQL)

En las bases de datos (como MariaDB o MySQL), no ordenamos los datos físicamente cada vez que hacemos una consulta, ya que sería muy lento. En su lugar, usamos **Índices**.

1.  **Índices (B-Trees):** La base de datos crea un "mapa" ordenado (similar a un árbol de búsqueda) que apunta a la ubicación real de los datos.
2.  **ORDER BY:** Cuando haces un `SELECT * FROM usuarios ORDER BY nombre`, la base de datos consulta el índice. Si el índice ya existe, la respuesta es instantánea.
3.  **Costo de Inserción:** Tener muchos índices hace que las búsquedas sean rápidas, pero que **insertar** datos nuevos sea más lento, porque la base de datos tiene que actualizar todos los mapas ordenados.



---

## Resumen de Eficiencia

| Cantidad de Datos | Método Recomendado | Razón |
| :--- | :--- | :--- |
| **Pequeña (< 50)** | Inserción | Muy simple y bajo consumo de memoria. |
| **Mediana (2,000)** | QuickSort | El más rápido en la práctica para memoria RAM. |
| **Grande (Millones)** | Merge Sort / Heap Sort | Estabilidad y manejo eficiente de memoria externa. |
| **Bases de Datos** | Índices (B-Tree) | Evita tener que re-ordenar la tabla completa. |

---

> **Dato para la bitácora:** Ordenar 1,000 elementos con un método simple toma 1,000,000 de operaciones. Con un método complejo como QuickSort, solo toma unas 10,000. ¡La diferencia es masiva!
>
# Ejemplo Práctico de Sort en C++

En C++, el manejo de arreglos y vectores es muy flexible. Para ordenar 2,000 valores de menor a mayor, lo más eficiente es usar las herramientas que ya vienen en el lenguaje.

---

## 1. Ordenamiento Manual (Método de Burbuja)
Este es el código que escribirías si quisieras ver paso a paso cómo se intercambian los números. No es el más rápido, pero es el más fácil de entender.

```
#include <iostream>
using namespace std;

int main() {
    int numeros[] = {45, 2, 89, 12, 7};
    int n = 5;

    // Lógica de intercambio
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                // Intercambio de valores
                int aux = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = aux;
            }
        }
    }
    
    return 0;
}
```



---

## 2. Ordenamiento Profesional (std::sort)
Para ordenar grandes cantidades de datos (como los 2,000 valores que mencionabas), se utiliza la librería `<algorithm>`. Esta función usa un algoritmo híbrido llamado **Introsort** (mezcla de QuickSort y HeapSort), que es extremadamente rápido.

```
#include <iostream>
#include <algorithm> // Librería necesaria
#include <vector>

using namespace std;

int main() {
    // Creamos un vector dinámico
    vector<int> datos = {100, 5, 23, 9, 40, 1};

    // Ordenamos de principio a fin
    // std::sort ajusta automáticamente el algoritmo según el tamaño de los datos
    sort(datos.begin(), datos.end());

    // Mostrar resultados
    for (int n : datos) {
        cout << n << " ";
    }

    return 0;
}
```

---

## 3. ¿Por qué usar std::sort en lugar de uno manual?

* **Eficiencia:** Mientras que el método de burbuja tarda mucho más conforme crece la lista, `std::sort` mantiene una velocidad constante y alta.
* **Seguridad:** Está probado y optimizado para no consumir memoria de más.
* **Versatilidad:** Puedes ordenar números, letras o incluso objetos complejos (como una lista de "Items" de un juego) con solo una línea de código.

---

| Método | Líneas de Código | Velocidad para 2,000 datos |
| :--- | :--- | :--- |
| **Burbuja Manual** | ~10 líneas | Lento (milisegundos perceptibles) |
| **std::sort** | 1 línea | Instantáneo (microsegundos) |

> **Tip para la bitácora:** Si quieres ordenar de **mayor a menor**, solo tienes que añadir un parámetro extra: `sort(datos.begin(), datos.end(), greater<int>());`
>
# Ordenación de Cadenas (Strings) en C++

Ordenar palabras alfabéticamente es ligeramente distinto a ordenar números, ya que el compilador debe comparar el valor ASCII de cada letra una por una hasta encontrar una diferencia.

---

## 1. Usando std::sort con Vectores de Palabras
Esta es la forma más eficiente de ordenar un diccionario. `std::sort` reconoce automáticamente que se trata de texto y aplica una comparación lexicográfica (alfabética).

```
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

int main() {
    // Un vector de strings (equivalente a tu diccionario)
    vector<string> palabras = {"Zapato", "Arbol", "Manzana", "Cloro", "Zorro"};

    // Ordenar alfabéticamente (A-Z)
    sort(palabras.begin(), palabras.end());

    cout << "Diccionario ordenado:" << endl;
    for (const string& p : palabras) {
        cout << "- " << p << endl;
    }

    return 0;
}
```

---

## 2. El problema de las Mayúsculas
Es vital notar que para la computadora, las **MAYÚSCULAS** van antes que las **minúsculas** en la tabla ASCII. 

* **Resultado estándar:** `["Zapato", "arbol"]` -> La 'Z' saldría primero por ser mayúscula.
* **Solución:** Para un diccionario real, se suele convertir todo a minúsculas antes de ordenar o usar una función de comparación personalizada.

---

## 3. Ejemplo con Arreglos Estáticos (Estilo Clásico)
Si no usas vectores y prefieres arreglos de toda la vida:

```
#include <iostream>
#include <algorithm>
#include <string>

using namespace std;

int main() {
    string diccionario[] = {"quimica", "fisica", "biologia", "astronomia"};
    int n = 4;

    sort(diccionario, diccionario + n);
    
    // El diccionario ahora está: astronomia, biologia, fisica, quimica
    return 0;
}
```

---

## 4. ¿Cómo lo hace la computadora por dentro?

Cuando el algoritmo compara "Zapato" con "Zorro":
1. Compara la 'Z' con la 'Z' -> Son iguales, pasa a la siguiente.
2. Compara la 'a' con la 'o'.
3. Como la 'a' tiene un valor menor en el código ASCII (97) que la 'o' (111), determina que "Zapato" va antes.



---

## Resumen para la Bitácora

| Concepto | Detalle en C++ |
| :--- | :--- |
| **Librería** | `<algorithm>` |
| **Función** | `std::sort(inicio, fin)` |
| **Tipo de dato** | `std::string` (mucho mejor que `char*`) |
| **Criterio** | Basado en el valor ASCII de los caracteres. |

> **Nota importante:** En las **Bases de Datos**, el ordenamiento de palabras depende del "Collation" (Cotejamiento). Esto define si el sistema debe ignorar tildes o distinguir entre 'ñ' y 'n', algo que en C++ base tendrías que programar manualmente.