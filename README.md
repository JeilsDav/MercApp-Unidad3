# 🛒 MercApp – Unidad 3 (Aplicaciones Web)

Proyecto desarrollado como parte de la **Unidad 3** de la materia *Aplicaciones Web*.  
Este sistema implementa un **CRUD completo de productos**, consumo de API, manejo de estado con Pinia, filtrado, búsqueda, categorías, carrito de compras y formulario de edición.

---

## 🚀 Tecnologías utilizadas

### **Backend**
- Node.js
- Express
- MongoDB + Mongoose
- CORS
- Dotenv
- Nodemon (desarrollo)

### **Frontend**
- Vue 3 (Composition API)
- Vite
- Vue Router
- Pinia (store global)
- Fetch API para consumir backend

---

## 📦 Estructura General

```
MercApp-Unidad3/
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

---

## 🌱 Seed (Datos iniciales)

Ejecuta:

```bash
npm run seed
```

Esto crea categorías y 8 productos predeterminados con imágenes actualizadas.

---

## ▶️ Cómo ejecutar el proyecto

### **Backend**
```bash
(Click derecho en la carpeta backend y seleccionar la opcion "Abrir en terminal integrado" para poder ejecutar el backend)
npm install
npm run dev
```

Backend disponible en:
```
http://localhost:3000
```

### **Frontend**
```bash
(Click derecho en la carpeta frontend y seleccionar la opcion "Abrir en terminal integrado" para poder ejecutar el frontend)
npm install
npm run dev
```

Frontend disponible en:
```
http://localhost:5173
```

---

## 🛠 Funcionalidades Implementadas

### ✔️ Catálogo de productos
- Mostrar todos los productos
- Botón de "Ver detalle"
- Imágenes dinámicas desde base de datos

### ✔️ Buscador
- Filtra productos por nombre

### ✔️ Categorías
- Filtro por categoría desde API `/api/categories`

### ✔️ Carrito de compras
- Agregar productos
- Persistencia en estado global (Pinia)
- Vista del carrito con total acumulado

### ✔️ Vista de detalle
- Imagen grande
- Descripción
- Precio
- Botón "Añadir al carrito"

### ✔️ Formulario de edición
Incluye:
- Input de nombre
- Precio
- Descripción
- Categoría
- Imagen URL
- Stock  
- Botón “Guardar cambios” con petición PUT

### ✔️ API REST completa
- **GET** productos
- **GET** por ID
- **POST** crear
- **PUT** actualizar
- **DELETE** eliminar

---

## 👨‍💻 Autor
**David Beltrán**  
Estudiante de Ingeniería en Software  
Universidad (Aplicaciones Web – Unidad 3)

---
## REPOSITORIO
**https://github.com/JeilsDav/MercApp-Unidad3**


---
## ✔️ Licencia
Proyecto académico — libre uso educativo.
