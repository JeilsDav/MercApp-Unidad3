# MercApp – Unidad 3 y Unidad 4 (Aplicaciones Web)

Proyecto desarrollado como parte de la Unidad 3 y Unidad 4 de la materia Aplicaciones Web.
El sistema implementa un CRUD completo de productos (Unidad 3) y el despliegue completo del frontend y backend en servicios web (Unidad 4).

Este repositorio unifica ambas unidades para mantener la continuidad del proyecto, evitar duplicación innecesaria de código y permitir al docente revisar todo el desarrollo en un solo lugar.

## 1. Objetivo General

- Unidad 3: Construcción de un sistema de gestión de productos con API REST, base de datos MongoDB y frontend funcional.
- Unidad 4: Despliegue del backend en Railway y del frontend en Netlify, configurando variables de entorno, rutas de producción y build optimizado.

## 2. Tecnologías utilizadas

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- CORS
- Dotenv
- Nodemon (solo desarrollo)

### Frontend
- Vue 3 (Composition API)
- Vite
- Vue Router
- Pinia (estado global)
- Fetch API para consumir la API REST
- Netlify

## 3. Estructura General del Proyecto

```
MercApp/
 ├── backend/
 │   ├── controllers/
 │   ├── models/
 │   ├── routes/
 │   ├── scripts/ (seed)
 │   ├── app.js
 │   └── package.json
 ├── frontend/
 │   ├── src/
 │   │   ├── components/
 │   │   ├── views/
 │   │   ├── router/
 │   │   ├── stores/
 │   │   └── composables/
 │   ├── index.html
 │   └── package.json
 └── README.md
```

## 4. Seed (Datos iniciales)

Para crear categorías y productos de prueba, ejecutar:

```
npm run seed
```

Esto generará categorías e insertará 8 productos base con imágenes y datos listos para usar.

## 5. Cómo ejecutar el proyecto localmente

### 5.1 Backend

Desde la carpeta backend:

```
npm install
npm run dev
```

Backend disponible en:

```
http://localhost:3000
```

Archivo .env requerido:

```
MONGODB_URI=tu_uri_de_mongo
PORT=3000
```

### 5.2 Frontend

Desde la carpeta frontend:

```
npm install
npm run dev
```

Frontend disponible en:

```
http://localhost:5173
```

Archivo .env requerido:

```
VITE_BACKEND_URL=http://localhost:3000
```

## 6. Funcionalidades Implementadas

### 6.1 Funcionalidades de Unidad 3
- Catálogo de productos
- Filtro por nombre
- Filtro por categoría desde API /api/categories
- Carrito de compras con persistencia en Pinia
- Vista de detalle de producto
- Formulario de edición con método PUT
- CRUD completo desde backend:
  - GET productos
  - GET producto por ID
  - POST producto nuevo
  - PUT actualizar producto
  - DELETE eliminar producto

## 7. Despliegue – Unidad 4

### 7.1 Backend (Railway)

El backend fue desplegado en Railway con las siguientes configuraciones:

- Variable de entorno MONGODB_URI
- Puerto asignado dinámicamente con process.env.PORT
- Servicio Node.js en producción
- Conexión estable con MongoDB Atlas

Enlace del backend en producción:

https://mercapp-unidad3-production.up.railway.app

### 7.2 Frontend (Netlify)

El frontend fue desplegado en Netlify con las siguientes configuraciones:

- Base directory: frontend/
- Build command: npm run build
- Publish directory: frontend/dist
- Variable de entorno:  
  - VITE_BACKEND_URL="url_del_backend"

Enlace del frontend en producción:

https://ephemeral-meringue-9a1c26.netlify.app

## 8. Motivo de reutilizar el mismo repositorio para Unidad 3 y Unidad 4

El proyecto de Unidad 4 depende completamente del sistema construido en Unidad 3.  
Por esta razón:

1. Ambas unidades forman un solo proyecto continuo.
2. El despliegue requiere el mismo backend y frontend desarrollados previamente.
3. Evita duplicar código o crear repositorios innecesarios.
4. Permite al docente revisar todo en un solo repositorio:
   - CRUD (Unidad 3)
   - Despliegue (Unidad 4)
   - Conexión con MongoDB
   - Configuración de entorno
   - Build y hosting

Este repositorio, por lo tanto, contiene el trabajo completo.

## 9. Enlaces importantes

- Backend (Railway): https://mercapp-unidad3-production.up.railway.app
- Frontend (Netlify): https://ephemeral-meringue-9a1c26.netlify.app
- Repositorio: https://github.com/JeilsDav/MercApp-Unidad3

## 10. Autor

David Beltrán  
Estudiante de Ingeniería en Software  
Universidad – Aplicaciones Web (Unidad 3 y Unidad 4)

## 11. Licencia

Proyecto académico para uso educativo.