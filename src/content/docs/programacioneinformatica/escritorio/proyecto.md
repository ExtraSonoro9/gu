---
title: Proyecto


---
El objetivo es crear una base de datos con una tabla de productos cada uno con un código que lo identifique que pueda ser editada y leida por un programa con GUI, openCV y zBar para leer codigo de barras a partir de una imagen y poder buscar el producto a partir del valor obtenido.

![](/informatica/escritorio/muestra.png)

Bueno para empezar tenemos el arbol del proyecto llamado GestorStock

![](/informatica/escritorio/arbol.png)

En el mainwindow.ui que es el archivo donde se maneja y diseña la interfaz gráfica tenemos los siguientes componentes:
Jerarquía de Objetos en MainWindow.ui (puedes añadirlos en QT Designer)

**MainWindow (QMainWindow)**
**centralwidget (QWidget)** -> Layout Vertical Principal

**layoutBusqueda (QHBoxLayout)**

**txtBuscar (QLineEdit):** Entrada de texto para el código a buscar.

**btnBuscar (QPushButton):** Dispara la lógica de búsqueda en la tabla.

**btnCargarImagen (QPushButton):** Abre el explorador de archivos para el escaneo con ZBar.

**layoutContenidoCentral (QHBoxLayout)**

**tablaProductos (QTableWidget):** Muestra las 5 columnas (ID, Nombre, Precio, Stock, Código).

**frameEdicion (QFrame)** -> Layout Formulario (V)

**lblImagen (QLabel):** Muestra la vista previa de la imagen cargada/escaneada.

**txtNombre (QLineEdit):** Campo para el nombre del producto.

**txtPrecio** (QLineEdit/QDoubleSpinBox): Campo para el precio unitario.

**txtCantidad (QLineEdit/QSpinBox):** Campo para el stock disponible.

**txtCodigo (QLineEdit):** Campo para el código de barras (edición manual o carga automática).

**btnAgregar (QPushButton):** Inserta un nuevo registro en MariaDB.

**btnEditar (QPushButton):** Actualiza el producto seleccionado en la tabla.

**btnEliminar (QPushButton):** Borra permanentemente el registro de la base de datos.

**btnLimpiar (QPushButton):** Vacía todos los campos de texto y el lblVideo.




Para crear la base de datos (puedes acceder a la sección de bases de datos para instalar MariaDB):

![](/informatica/escritorio/mariadb.png)

```SQL
-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS gestor_stock;

-- Seleccionarla para trabajar
USE gestor_stock;

-- Crear el usuario y darle permisos
-- Reemplaza '1234' por la clave que quieras
CREATE USER IF NOT EXISTS 'estudiante'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON gestor_stock.* TO 'estudiante'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY, -- ID único y autoincremental
    nombre VARCHAR(100) NOT NULL,      -- Nombre del producto (obligatorio)
    precio DOUBLE DEFAULT 0.0,         -- Precio con decimales
    cantidad INT DEFAULT 0,            -- Stock disponible
    codigo VARCHAR(100) DEFAULT ''      -- Código de barras (ZBar / Scanner)
);


```



Ahora el codigo de CMakeLists.txt

```
cmake_minimum_required(VERSION 3.16)
project(GestorStock VERSION 1.0)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTORCC ON)
find_path(ZBAR_INCLUDE_DIR zbar.h)
find_library(ZBAR_LIBRARY zbar)
# Buscar paquetes
find_package(Qt6 REQUIRED COMPONENTS Core Gui Widgets Sql)
find_package(OpenCV REQUIRED)
find_package(Qt6 REQUIRED COMPONENTS Sql)
find_package(OpenCV REQUIRED)

add_executable(GestorStock
    main.cpp
    mainwindow.cpp
    mainwindow.h
    mainwindow.ui


)

# Vincular librerías
target_link_libraries(GestorStock PRIVATE
    Qt6::Core
    Qt6::Gui
    Qt6::Widgets
    Qt6::Sql
    ${OpenCV_LIBS}
    ${ZBAR_LIBRARY}
)
target_include_directories(GestorStock PRIVATE ${ZBAR_INCLUDE_DIR})
```

## mainwindow.ui
```cpp
 <?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>MainWindow</class>
 <widget class="QMainWindow" name="MainWindow">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>840</width>
    <height>669</height>
   </rect>
  </property>
  <property name="windowTitle">
   <string>MainWindow</string>
  </property>
  <widget class="QWidget" name="centralwidget">
   <layout class="QVBoxLayout" name="verticalLayout_4">
    <item>
     <widget class="QFrame" name="frame">
      <property name="frameShape">
       <enum>QFrame::Shape::StyledPanel</enum>
      </property>
      <property name="frameShadow">
       <enum>QFrame::Shadow::Raised</enum>
      </property>
      <layout class="QHBoxLayout" name="horizontalLayout_5">
       <item>
        <layout class="QHBoxLayout" name="horizontalLayout">
         <item>
          <widget class="QLabel" name="lblImagen">
           <property name="minimumSize">
            <size>
             <width>200</width>
             <height>200</height>
            </size>
           </property>
           <property name="text">
            <string>imagen</string>
           </property>
          </widget>
         </item>
         <item>
          <widget class="QPushButton" name="btnCargarImagen">
           <property name="text">
            <string>cargar</string>
           </property>
          </widget>
         </item>
        </layout>
       </item>
       <item>
        <widget class="QFrame" name="frame_3">
         <property name="frameShape">
          <enum>QFrame::Shape::StyledPanel</enum>
         </property>
         <property name="frameShadow">
          <enum>QFrame::Shadow::Raised</enum>
         </property>
         <layout class="QVBoxLayout" name="verticalLayout_2">
          <item>
           <widget class="QFrame" name="frame_4">
            <property name="frameShape">
             <enum>QFrame::Shape::StyledPanel</enum>
            </property>
            <property name="frameShadow">
             <enum>QFrame::Shadow::Raised</enum>
            </property>
            <layout class="QVBoxLayout" name="verticalLayout_3">
             <item>
              <widget class="QLineEdit" name="txtBuscar"/>
             </item>
             <item>
              <widget class="QPushButton" name="btnBuscar">
               <property name="text">
                <string>Buscar</string>
               </property>
              </widget>
             </item>
            </layout>
           </widget>
          </item>
         </layout>
        </widget>
       </item>
      </layout>
     </widget>
    </item>
    <item>
     <widget class="QFrame" name="frame_2">
      <property name="frameShape">
       <enum>QFrame::Shape::StyledPanel</enum>
      </property>
      <property name="frameShadow">
       <enum>QFrame::Shadow::Raised</enum>
      </property>
      <layout class="QVBoxLayout" name="verticalLayout_5">
       <item>
        <layout class="QHBoxLayout" name="horizontalLayout_2">
         <item>
          <widget class="QLabel" name="label">
           <property name="text">
            <string>nombre</string>
           </property>
          </widget>
         </item>
         <item>
          <widget class="QLineEdit" name="txtNombre"/>
         </item>
         <item>
          <widget class="QLabel" name="label_2">
           <property name="text">
            <string>código</string>
           </property>
          </widget>
         </item>
         <item>
          <widget class="QLineEdit" name="txtCodigo"/>
         </item>
         <item>
          <widget class="QLabel" name="label_3">
           <property name="text">
            <string>stock</string>
           </property>
          </widget>
         </item>
         <item>
          <widget class="QLineEdit" name="txtCantidad"/>
         </item>
         <item>
          <widget class="QLabel" name="label_4">
           <property name="text">
            <string>precio</string>
           </property>
          </widget>
         </item>
         <item>
          <widget class="QLineEdit" name="txtPrecio"/>
         </item>
        </layout>
       </item>
       <item>
        <widget class="QTableWidget" name="tablaProductos"/>
       </item>
       <item>
        <layout class="QHBoxLayout" name="horizontalLayout_3">
         <item>
          <widget class="QPushButton" name="btnAgregar">
           <property name="text">
            <string>agregar</string>
           </property>
          </widget>
         </item>
         <item>
          <widget class="QPushButton" name="btnEditar">
           <property name="text">
            <string>editar</string>
           </property>
          </widget>
         </item>
         <item>
          <widget class="QPushButton" name="btnEliminar">
           <property name="text">
            <string>eliminar</string>
           </property>
          </widget>
         </item>
         <item>
          <widget class="QPushButton" name="btnLimpiar">
           <property name="text">
            <string>limpiar</string>
           </property>
          </widget>
         </item>
        </layout>
       </item>
      </layout>
     </widget>
    </item>
   </layout>
  </widget>
  <widget class="QMenuBar" name="menubar">
   <property name="geometry">
    <rect>
     <x>0</x>
     <y>0</y>
     <width>840</width>
     <height>30</height>
    </rect>
   </property>
  </widget>
  <widget class="QStatusBar" name="statusbar"/>
 </widget>
 <resources/>
 <connections/>
</ui>
 ```


## mainwindow.h:

```cpp
#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QTimer>
#include <QtSql/QSqlDatabase>
#include <QtSql/QSqlQuery>
#include <QtSql/QSqlError>
#include <QMessageBox>
#include <QFileDialog>
#include <QDebug>
#include <opencv2/opencv.hpp>
#include <opencv2/objdetect.hpp> // Clase para Código de Barras
#include <zbar.h>

QT_BEGIN_NAMESPACE
namespace Ui { class MainWindow; }
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private slots:
    // Gestión de Imagen/Cámara

    void on_btnAgregar_clicked(); // <-- Asegurate que el nombre esté completo aquí
    void on_tablaProductos_itemSelectionChanged();
    void actualizarTabla();
    void on_btnCargarImagen_clicked();


    // CRUD de Productos

    void on_btnEditar_clicked();
    void on_btnEliminar_clicked();


    void on_btnLimpiar_clicked();

    void on_btnBuscar_clicked();

private:
    Ui::MainWindow *ui;
    QSqlDatabase db;

    // OpenCV

    void procesarImagen(cv::Mat frame);

    // Base de Datos
    void conectarDB();
    void cargarTablaPrincipal();
    void limpiarFormulario();
    void limpiarCampos();
};

#endif // MAINWINDOW_H
```
## mainwindow.cpp

Aquí debe tomarse en cuenta que hay que cambiar los datos de 'db' con la ip, el puerto, el usuario y la contraseña de la base de datos que 
creamos anteriormente.

```cpp
#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QSqlQuery>
#include <QSqlError>
#include <QMessageBox>
#include <QDebug>
#include <QFileDialog>
#include <QSqlDatabase>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    // 1. Configuración de Tabla (5 columnas)
    ui->tablaProductos->setColumnCount(5);
    ui->tablaProductos->setHorizontalHeaderLabels({"ID", "Producto", "Precio", "Stock", "Código"});
    ui->tablaProductos->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);
    ui->tablaProductos->setSelectionBehavior(QAbstractItemView::SelectRows);

    // 2. Conexión a MariaDB
    QSqlDatabase db = QSqlDatabase::addDatabase("QMYSQL");
    db.setHostName("127.0.0.1");
    db.setDatabaseName("gestor_stock");
    db.setUserName("estudiante");
    db.setPassword("1234");

    if (!db.open()) {
        QMessageBox::critical(this, "Error Crítico", "DB no conectada: " + db.lastError().text());
    } else {
        actualizarTabla();
    }
}

MainWindow::~MainWindow() { delete ui; }

// --- REFRESCAR TABLA ---
void MainWindow::actualizarTabla() {
    ui->tablaProductos->setRowCount(0);
    QSqlQuery query("SELECT id, nombre, precio, cantidad, codigo FROM productos");

    int fila = 0;
    while (query.next()) {
        ui->tablaProductos->insertRow(fila);
        for(int i=0; i<5; ++i) {
            ui->tablaProductos->setItem(fila, i, new QTableWidgetItem(query.value(i).toString()));
        }
        fila++;
    }
}

// --- BÚSQUEDA LÓGICA ---
void MainWindow::on_btnBuscar_clicked() {
    QString buscado = ui->txtBuscar->text().trimmed();
    if (buscado.isEmpty()) return;

    bool encontrado = false;
    for (int i = 0; i < ui->tablaProductos->rowCount(); ++i) {
        // Buscamos coincidencia en la columna 'Código' (índice 4)
        if (ui->tablaProductos->item(i, 4)->text() == buscado) {
            ui->tablaProductos->selectRow(i);
            on_tablaProductos_itemSelectionChanged(); // Disparamos la carga a los campos
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        QMessageBox::information(this, "Búsqueda", "No se encontró ningún producto con ese código.");
    }
}

// --- ESCANEO CON OPENCV BARCODE ---
void MainWindow::on_btnCargarImagen_clicked() {
    QString fileName = QFileDialog::getOpenFileName(this, "Escanear", "/home/void", "Imágenes (*.png *.jpg)");
    if (fileName.isEmpty()) return;

    // Feedback visual
    QPixmap pix(fileName);
    ui->lblImagen->setPixmap(pix.scaled(ui->lblImagen->width(), ui->lblImagen->height(), Qt::KeepAspectRatio));

    // Procesamos la imagen para ZBar usando OpenCV
    cv::Mat img = cv::imread(fileName.toStdString(), cv::IMREAD_GRAYSCALE);
    if (img.empty()) return;

    zbar::ImageScanner scanner;
    scanner.set_config(zbar::ZBAR_NONE, zbar::ZBAR_CFG_ENABLE, 1);

    zbar::Image zbar_img(img.cols, img.rows, "Y800", img.data, img.cols * img.rows);

    int n = scanner.scan(zbar_img);

    if (n > 0) {
        for (zbar::Image::SymbolIterator symbol = zbar_img.symbol_begin();
             symbol != zbar_img.symbol_end(); ++symbol) {

            QString codigo = QString::fromStdString(symbol->get_data());

            // 1. Mandamos el código al cuadro de BÚSQUEDA
            ui->txtBuscar->setText(codigo);

            // 2. Ejecutamos la función de búsqueda automáticamente
            on_btnBuscar_clicked();
            break;
        }
    } else {
        QMessageBox::warning(this, "Scanner", "ZBar no detectó ningún código.");
    }
}
// --- CRUD: AGREGAR ---
void MainWindow::on_btnAgregar_clicked() {
    QSqlQuery query;
    query.prepare("INSERT INTO productos (nombre, precio, cantidad, codigo) VALUES (:n, :p, :c, :cod)");
    query.bindValue(":n", ui->txtNombre->text());
    query.bindValue(":p", ui->txtPrecio->text().toDouble());
    query.bindValue(":c", ui->txtCantidad->text().toInt());
    query.bindValue(":cod", ui->txtCodigo->text()); // Este es para el nuevo

    if (query.exec()) {
        actualizarTabla();
        limpiarCampos();
    } else {
        QMessageBox::critical(this, "Error", query.lastError().text());
    }
}

// --- CRUD: EDITAR ---
void MainWindow::on_btnEditar_clicked() {
    int fila = ui->tablaProductos->currentRow();
    if (fila < 0) return;

    QString id = ui->tablaProductos->item(fila, 0)->text();
    QSqlQuery query;
    query.prepare("UPDATE productos SET nombre=:n, precio=:p, cantidad=:c, codigo=:cod WHERE id=:id");
    query.bindValue(":n", ui->txtNombre->text());
    query.bindValue(":p", ui->txtPrecio->text().toDouble());
    query.bindValue(":c", ui->txtCantidad->text().toInt());
    query.bindValue(":cod", ui->txtCodigo->text());
    query.bindValue(":id", id);

    if (query.exec()) {
        actualizarTabla();
        QMessageBox::information(this, "Éxito", "Producto actualizado.");
    }
}

// --- CRUD: ELIMINAR ---
void MainWindow::on_btnEliminar_clicked() {
    int fila = ui->tablaProductos->currentRow();
    if (fila < 0) return;

    if (QMessageBox::question(this, "Confirmar", "¿Borrar producto?") == QMessageBox::Yes) {
        QSqlQuery query;
        query.prepare("DELETE FROM productos WHERE id = ?");
        query.addBindValue(ui->tablaProductos->item(fila, 0)->text());
        if (query.exec()) actualizarTabla();
    }
}

// --- EVENTO SELECCIÓN ---
void MainWindow::on_tablaProductos_itemSelectionChanged() {
    int fila = ui->tablaProductos->currentRow();
    if (fila >= 0) {
        ui->txtNombre->setText(ui->tablaProductos->item(fila, 1)->text());
        ui->txtPrecio->setText(ui->tablaProductos->item(fila, 2)->text());
        ui->txtCantidad->setText(ui->tablaProductos->item(fila, 3)->text());
        ui->txtCodigo->setText(ui->tablaProductos->item(fila, 4)->text());
    }
}

void MainWindow::limpiarCampos() {
    ui->txtNombre->clear();
    ui->txtPrecio->clear();
    ui->txtCantidad->clear();
    ui->txtCodigo->clear();
    ui->txtBuscar->clear();
}
void MainWindow::on_btnLimpiar_clicked()
{
    limpiarCampos();
}
```
