---
title: Comandos SQL


---

# Manual de Gestión de Bases de Datos: MariaDB y SQL

MariaDB es un sistema de gestión de bases de datos relacionales (RDBMS) de código abierto. Utiliza el lenguaje SQL (Structured Query Language) para la administración de datos, permitiendo una organización eficiente mediante tablas relacionadas.

---

## 1. Acceso a la Interfaz de Línea de Comandos (CLI)

El acceso se realiza a través de la terminal del sistema operativo. El cliente de MariaDB requiere autenticación de usuario y contraseña.

* **Conexión como superusuario (root):**
  mariadb -u root -p
* **Conexión a un servidor remoto:**
  mariadb -h direccion_ip -u nombre_usuario -p
* **Finalizar sesión:**
  EXIT;

---

## 2. Administración de Bases de Datos

Antes de gestionar datos, es necesario definir el contenedor lógico.

* **Listar bases de datos disponibles:**
  SHOW DATABASES;
* **Crear una base de datos:**
  CREATE DATABASE nombre_base_de_datos;
* **Seleccionar base de datos para uso actual:**
  USE nombre_base_de_datos;
* **Eliminar una base de datos (Operación irreversible):**
  DROP DATABASE nombre_base_de_datos;

---

## 3. Definición y Alteración de Tablas (DDL)

Las tablas organizan la información en filas (registros) y columnas (campos) con tipos de datos específicos.

### Creación de una tabla básica
CREATE TABLE inventario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto VARCHAR(100) NOT NULL,
    cantidad INT DEFAULT 0,
    precio DECIMAL(10, 2),
    fecha_ingreso DATE
);

### Modificación de la estructura (Alteración)
* **Agregar una columna nueva:**
  ALTER TABLE inventario ADD COLUMN categoria VARCHAR(50);
* **Eliminar una columna existente:**
  ALTER TABLE inventario DROP COLUMN fecha_ingreso;
* **Cambiar el nombre o tipo de una columna:**
  ALTER TABLE inventario CHANGE producto nombre_item VARCHAR(150);

---

## 4. Manipulación de Registros (DML)

Corresponde a las operaciones de inserción, consulta, actualización y borrado de los datos almacenados.

* **Insertar un nuevo registro:**
  INSERT INTO inventario (nombre_item, cantidad, precio) 
  VALUES ('Procesador', 15, 250.00);
* **Editar datos existentes:**
  UPDATE inventario SET cantidad = 20 WHERE id = 1;
* **Borrar un registro específico:**
  DELETE FROM inventario WHERE id = 1;
* **Consultar y filtrar datos:**
  SELECT * FROM inventario WHERE precio > 100 ORDER BY cantidad DESC;

---

## 5. Gestión de Usuarios y Privilegios

El sistema de seguridad de MariaDB permite restringir el acceso y las acciones según el perfil del usuario.

### Gestión de Cuentas
* **Crear nuevo usuario (Acceso local):**
  CREATE USER 'tecnico'@'localhost' IDENTIFIED BY 'clave_segura_123';
* **Eliminar un usuario:**
  DROP USER 'tecnico'@'localhost';

### Control de Permisos (Privilegios)
* **Otorgar privilegios totales sobre una base:**
  GRANT ALL PRIVILEGES ON nombre_base_de_datos.* TO 'tecnico'@'localhost';
* **Otorgar privilegios de solo lectura:**
  GRANT SELECT ON nombre_base_de_datos.* TO 'tecnico'@'localhost';
* **Revocar permisos específicos:**
  REVOKE UPDATE, DELETE ON nombre_base_de_datos.* FROM 'tecnico'@'localhost';
* **Refrescar la tabla de privilegios:**
  FLUSH PRIVILEGES;

---

## 6. Comandos de Inspección y Diagnóstico

| Comando | Propósito |
| :--- | :--- |
| DESCRIBE nombre_tabla; | Muestra la estructura, tipos de datos y claves de una tabla. |
| SHOW TABLES; | Lista todas las tablas dentro de la base de datos en uso. |
| SHOW PROCESSLIST; | Visualiza las consultas activas y el estado de las conexiones. |
| SHOW GRANTS FOR 'user'@'host'; | Muestra los permisos exactos asignados a una cuenta. |

---

> **Nota de Estándar:** Por convención, las palabras clave de SQL (SELECT, INSERT, etc.) se escriben en mayúsculas para facilitar la lectura. Cada instrucción debe cerrarse con punto y coma (;).