ercApp – Unidad 3 y Unidad 4 (Aplicaciones Web)

Proyecto desarrollado como parte de la Unidad 3 y Unidad 4 de la materia Aplicaciones Web.
El sistema implementa un CRUD completo de productos (Unidad 3) y el despliegue completo del frontend y backend en servicios web (Unidad 4).

Este repositorio unifica ambas unidades para mantener la continuidad del proyecto, evitar duplicación innecesaria de código y permitir al docente revisar todo el desarrollo en un solo lugar.

1. Objetivo General

- Unidad 3: Construcción de un sistema de gestión de productos con API REST, base de datos MongoDB y frontend funcional.
- Unidad 4: Despliegue del backend en Railway y del frontend en Netlify, configurando variables de entorno, rutas de producción y build optimizado.

2. Tecnologías utilizadas

Backend:
- Node.js
- Express
- MongoDB + Mongoose
- CORS
- Dotenv
- Nodemon (solo desarrollo)

Frontend:
- Vue 3 (Composition API)
- Vite
- Vue Router
- Pinia (estado global)
- Fetch API para consumir la API REST

3. Estructura General del Proyecto

MercApp/
 ├── backend/
 │   ├── controllers/
 │   ├── models/
 │   ├── routes/
 │   ├── scripts/
 │   ├── app.js
 │   └── package.json
 ├── frontend/
 │   ├── src/
 │   ├── index.html
 │   └── package.json
 └── README.txt

4. Seed (Datos iniciales)

Para crear categorías y productos de prueba, ejecutar:
npm run seed

Esto generará categorías e insertará 8 productos base con imágenes y datos.

5. Cómo ejecutar el proyecto localmente

Backend:
npm install
npm run dev
Disponible en: http://localhost:3000

Archivo .env:
MONGODB_URI=tu_uri_de_mongo
PORT=3000

Frontend:
npm install
npm run dev
Disponible en: http://localhost:5173

Archivo .env:
VITE_BACKEND_URL=http://localhost:3000

6. Funcionalidades Implementadas

Unidad 3:
- Catálogo de productos
- Filtro por nombre
- Filtro por categoría
- Carrito de compras
- Vista de detalle
- Formulario de edición
- CRUD completo

7. Despliegue – Unidad 4

Backend (Railway):
- Variable MONGODB_URI
- Uso de process.env.PORT
URL: https://mercapp-unidad3-production.up.railway.app

Frontend (Netlify):
- Base directory: frontend/
- Build command: npm run build
- Publish directory: frontend/dist
- Variable VITE_BACKEND_URL
URL: https://ephemeral-meringue-9a1c26.netlify.app

8. Motivo de reutilizar el mismo repositorio

Ambas unidades forman un solo proyecto continuo. Esto evita duplicación de código y permite revisión completa en un mismo repositorio.

9. Enlaces importantes

Backend: https://mercapp-unidad3-production.up.railway.app
Frontend: https://ephemeral-meringue-9a1c26.netlify.app
Repositorio: https://github.com/JeilsDav/MercApp-Unidad3

10. Autor

David Beltrán
Estudiante de Ingeniería en Software

11. Licencia

Proyecto académico para uso educativo.