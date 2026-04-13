---
title: Instalación de MariaDB


---



## Para Windows

Entra a: https://mariadb.org/download/?t=mariadb&p=mariadb&r=12.2.2&os=windows&cpu=x86_64&pkg=msi&mirror=insacom


## Para Ubuntu y algunos derivados de Debian
```
sudo apt-get mariadb-server

```
luego:
```
sudo mariadb_secure_installation

```
y o
```
sudo mysql_secure_installation

```
## Void Linux

```
sudo xbps-install -S mariadb

```
luego
```
sudo mariadb-secure-installation

```

## Extra: DBeaver

Es un editor de bases de datos con interfaz gráfica: https://dbeaver.io/