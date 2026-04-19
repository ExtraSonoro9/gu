---
title: Concepto, tipos y características


---

# Bases de Datos: El Almacén de la Información

Una **Base de Datos (BD)** es una colección organizada de información estructurada que normalmente se almacena de forma electrónica. Para gestionar estos datos, se utiliza un software llamado **DBMS** (Database Management System o Sistema de Gestión de Bases de Datos).

---

## 1. Conceptos Fundamentales

* **Dato:** La unidad mínima de información (un nombre, un número, una fecha).
* **Registro:** Un conjunto de datos que pertenecen a una misma entidad (ej: todos los datos de un solo usuario).
* **Tabla/Colección:** El lugar donde se agrupan muchos registros similares.
* **Consulta (Query):** Una petición específica para obtener información (ej: "muéstrame todos los productos con precio mayor a 10").



---

## 2. Tipos de Bases de Datos

Existen dos grandes familias según cómo organizan la información:

### A. Relacionales (SQL)
Organizan los datos en **tablas** con filas y columnas. Se basan en relaciones lógicas; por ejemplo, una tabla de "Ventas" se relaciona con una tabla de "Clientes" mediante un ID único.
* **Lenguaje:** Usan SQL (*Structured Query Language*).
* **Fortaleza:** Son muy precisas, seguras y excelentes para datos que no cambian de estructura (como contabilidad o inventarios).
* **Ejemplos:**
    * **MySQL:** La más popular y utilizada en la web.
    * **MariaDB:** Una versión mejorada y abierta de MySQL.
    * **PostgreSQL:** Muy potente y avanzada para proyectos complejos.
    * **SQLite:** Una base de datos pequeña que vive en un solo archivo (ideal para apps móviles).

<figure style="display: block; margin: 2rem auto; max-width: 500px; border: 1px solid #ddd; padding: 10px; background: #fff; box-shadow: 2px 2px 5px rgba(0,0,0,0.05); border-radius: 4px;">
  
  <img src="/informatica/basesdedatos/postgresmariadb.jpg" alt="Logo MariaDB y de PostgreSQL" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  
 
  
</figure>

### B. No Relacionales (NoSQL)
No usan tablas fijas. Almacenan la información de formas más flexibles, como documentos, gráficos o listas. Son ideales para manejar volúmenes masivos de datos que cambian constantemente.
* **Lenguaje:** Varía según el sistema, pero no suelen usar el SQL estándar.
* **Fortaleza:** Gran velocidad y capacidad de crecer (escalabilidad).
* **Ejemplos:**
    * **MongoDB:** Guarda la información en "documentos" (parecidos a archivos de texto tipo JSON). Es muy flexible.
    * **Redis:** Extremadamente rápida, guarda los datos en la memoria RAM para acceso instantáneo.
    * **Cassandra:** Diseñada para manejar cantidades gigantescas de datos en muchos servidores a la vez.



---

## 3. SQL vs. NoSQL: ¿Cuál elegir?

| Característica | SQL (Relacional) | NoSQL (No Relacional) |
| :--- | :--- | :--- |
| **Estructura** | Rígida (Tablas fijas). | Flexible (Documentos, Grafos). |
| **Escalabilidad** | Vertical (Necesitas un PC más potente). | Horizontal (Añades más PCs pequeños). |
| **Uso Ideal** | Transacciones bancarias, sistemas de stock. | Redes sociales, Big Data, análisis en tiempo real. |
| **Ejemplos** | MariaDB, MySQL. | MongoDB, Cassandra. |

---

## 4. Breve Historia: De las Fichas al Cloud

1.  **Años 60:** Las bases de datos eran jerárquicas (como las carpetas de una PC) y muy rígidas.
2.  **1970:** **Edgar F. Codd** propone el modelo relacional (tablas). Esto revolucionó todo porque permitía consultar datos de forma mucho más lógica.
3.  **Años 2000:** Con el auge de Facebook y Google, las bases de datos relacionales no eran suficientes para tanta información "caótica", y así nacieron las **NoSQL**.
4.  **Actualidad:** La mayoría de las bases de datos viven en la "Nube" (Cloud), permitiendo que cualquier aplicación acceda a sus datos desde cualquier lugar del mundo.

---

> "Sin bases de datos, Internet sería solo una colección de páginas estáticas; no habría perfiles de usuario, ni carritos de compra, ni historiales de búsqueda."