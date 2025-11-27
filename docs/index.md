# 🛒 MercApp – Micrositio Unidad 4 (Aplicaciones Web)

Este micrositio documenta el **despliegue** de la aplicación **MercApp**, desarrollada en la Unidad 3 y publicada en la **Unidad 4** de la materia _Aplicaciones Web_.

---

## ⚙️ Arquitectura de despliegue

La arquitectura usada para la Unidad 4 es la siguiente:

- **Front-end (SPA)**  
  - Framework: Vue 3 + Vite  
  - Hosting: **Netlify**  
  - Rol: Interfaz de usuario, enrutamiento de vistas, consumo de la API.

- **Back-end (API REST)**  
  - Runtime: Node.js  
  - Framework: Express  
  - Hosting: **Railway**  
  - Rol: Exposición de endpoints HTTP para la gestión de productos y otras entidades.

- **Base de datos**  
  - Motor: MongoDB  
  - Servicio: **MongoDB Atlas**  
  - Rol: Almacenamiento persistente de los datos (productos, categorías, etc.).

- **Documentación**  
  - Servicio: **GitHub Pages**  
  - Rol: Publicación de este micrositio de documentación usando la carpeta `/docs`.

La comunicación se realiza siempre mediante **HTTPS**, aprovechando los certificados que proveen Netlify, Railway, GitHub Pages y MongoDB Atlas.

---

## 🔐 Variables de entorno

El proyecto utiliza archivos `.env` (no incluidos en el repositorio) y archivos `.env.example` (incluidos) para indicar qué variables deben configurarse.

### Backend (`backend/.env.example`)

```env
MONGODB_URI=mongodb://127.0.0.1:27017/mercapp
PORT=3000
```

En producción, `MONGODB_URI` se reemplaza por la cadena de conexión de MongoDB Atlas, configurada en Railway.

### Frontend (`frontend/.env.example`)

```env
VITE_API_BASE=http://localhost:3000/api
```

En producción, `VITE_API_BASE` se reemplaza por la URL pública de la API en Railway, configurada en Netlify como variable de entorno.

---

## 🧪 Ejecución en entorno local

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/JeilsDav/MercApp-Unidad3.git
   cd MercApp-Unidad3/MercApp_Proyecto
   ```

2. **Levantar el backend:**

   ```bash
   cd backend
   cp .env.example .env   # Ajustar si es necesario
   npm install
   npm run dev            # o npm start
   ```

   La API estará disponible en `http://localhost:3000/api`.

3. **Levantar el frontend:**

   ```bash
   cd ../frontend
   cp .env.example .env
   npm install
   npm run dev
   ```

   La SPA estará disponible en `http://localhost:5173`.

---

## 🌐 Enlaces de despliegue (para completar)

> Las siguientes URLs deben completarse con las direcciones reales una vez realizado el despliegue en cada servicio:

- **SPA (Netlify):**  
  `https://TU-SITIO-NETLIFY.netlify.app`

- **API (Railway):**  
  `https://TU-API-RAILWAY.up.railway.app`

- **Repositorio GitHub:**  
  `https://github.com/JeilsDav/MercApp-Unidad3`

- **GitHub Pages (este micrositio):**  
  `https://tu-usuario.github.io/MercApp-Unidad3/`  
  (o la ruta final que se configure en el repositorio)

---

## 📚 Endpoints principales de la API

| Método | Ruta                      | Descripción                             |
|--------|---------------------------|-----------------------------------------|
| GET    | `/api/products`           | Lista todos los productos               |
| GET    | `/api/products/:id`       | Obtiene un producto por su ID           |
| POST   | `/api/products`           | Crea un nuevo producto                  |
| PUT    | `/api/products/:id`       | Actualiza un producto existente         |
| DELETE | `/api/products/:id`       | Elimina un producto                     |

> Las rutas exactas pueden variar ligeramente según la implementación; esta tabla resume la estructura general del CRUD desarrollado en la Unidad 3.

---

## 📝 Notas finales

- Este micrositio sirve de evidencia para la **Unidad 4 – Despliegue**, mostrando la arquitectura y la forma de ejecutar el sistema.
- Las URLs de producción deben ser completadas por el estudiante una vez hecho el despliegue en los servicios indicados (MongoDB Atlas, Railway, Netlify y GitHub Pages).
