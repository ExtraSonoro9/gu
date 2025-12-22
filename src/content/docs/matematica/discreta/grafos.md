---

title: Grafos

---
# Teoría de Grafos: Puentes y Conexiones

Un grafo es un conjunto de puntos llamados **vértices** (o nodos) unidos por líneas llamadas **aristas**. Es la herramienta matemática para modelar redes de transporte, redes sociales o circuitos integrados.

---

## 1. El Problema de los 7 Puentes de Königsberg

La ciudad de Königsberg tenía dos islas conectadas por 7 puentes. Los ciudadanos se preguntaban: *¿Es posible caminar por la ciudad cruzando todos los puentes exactamente una vez y volver al inicio?*



### La Abstracción de Euler
Euler simplificó el mapa:
1.  Las masas de tierra son **Vértices** (puntos).
2.  Los puentes son **Aristas** (líneas).

Descubrió que la clave estaba en el **Grado** de los vértices (cuántas líneas llegan a un punto).

---

## 2. Caminos y Ciclos Eulerianos

Para que puedas cruzar todos los puentes (aristas) sin repetir ninguno:

* **Camino Euleriano:** Puedes cruzar todo, pero terminas en un lugar distinto al que empezaste.
    * *Condición:* Exactamente **dos vértices** tienen grado impar (el inicio y el fin).
* **Ciclo Euleriano:** Cruzas todo y regresas al punto de partida.
    * *Condición:* **Todos los vértices** deben tener grado par.

**Resultado en Königsberg:** Como los 4 sectores de tierra tenían un número impar de puentes (3, 3, 3 y 5), Euler demostró matemáticamente que **era imposible** realizar el recorrido.

---

## 3. Clasificación de Grafos

| Tipo de Grafo | Característica | Ejemplo |
| :--- | :--- | :--- |
| **Dirigido** | Las aristas tienen una flecha (un solo sentido). | Seguidores en Instagram. |
| **No Dirigido** | Las aristas son de doble sentido. | Amistades en Facebook. |
| **Pesado** | Las aristas tienen un valor (costo, distancia, tiempo). | Google Maps (distancia en km). |
| **Bipartito** | Los vértices se dividen en dos grupos sin conexiones internas. | Conductores y Pasajeros en Uber. |



---

## 4. Algoritmos Famosos

En el 50% de tu lista de programación, estos algoritmos son esenciales:

1.  **Dijkstra:** Encuentra la ruta más corta entre dos puntos (usado en GPS).
2.  **BFS / DFS:** Métodos para explorar o buscar datos en una red.
3.  **Algoritmo de PageRank:** El algoritmo original de Google que clasifica páginas web basándose en un grafo de enlaces.

---

## 5. Aplicación: Redes Eléctricas y WiFi

* **Electricidad:** Un grafo permite calcular cómo fluye la corriente y qué pasa si un "puente" (cable) se corta.
* **WiFi Mesh:** Los nodos de tu casa forman un grafo. La señal busca el "camino" con menos saltos o interferencia para llegar a tu celular.