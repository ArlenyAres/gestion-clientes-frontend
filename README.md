# Gestión de Clientes - Frontend
Este proyecto es la interfaz de usuario para la aplicación de gestión de clientes, desarrollada utilizando React. La aplicación permite a los usuarios agregar, editar, listar y eliminar clientes. Está conectada a un backend desarrollado con Spring Boot que interactúa con una base de datos MySQL.

## Tecnologías Utilizadas
React
Axios
React Router DOM
Bootstrap

### Requisitos Previos
Node.js (>= 14.x)
npm (>= 6.x)

### Instalación
Clona el repositorio:

```
git clone [https://github.com/tuusuario/gestion-clientes-frontend.git](https://github.com/ArlenyAres/gestion-clientes-frontend.git)
cd gestion-clientes-frontend
```
### Instala las dependencias:

```
npm install
```
### Configuración
Crea un archivo .env en la raíz del proyecto y agrega la siguiente configuración (ajustando el valor según sea necesario):

```
REACT_APP_API_URL=http://localhost:8080/api/v1
````

### Ejecución
Para iniciar la aplicación en modo desarrollo:

```
npm start
```
La aplicación estará disponible en http://localhost:3000.

### Estructura del Proyecto
```
src/
components/: Componentes de React utilizados en la aplicación.
services/: Servicios para realizar peticiones HTTP al backend.
App.js: Componente principal de la aplicación.
index.js: Punto de entrada de la aplicación.
```
### Funcionalidades
#### Listado de Clientes: 
Visualiza una lista de clientes registrados.
#### Agregar Cliente: 
Permite agregar un nuevo cliente.
#### Editar Cliente: 
Permite editar la información de un cliente existente.
#### Eliminar Cliente: 
Permite eliminar un cliente de la lista.


https://github.com/user-attachments/assets/2c7c134d-3466-4403-a999-1595792dbdb2




