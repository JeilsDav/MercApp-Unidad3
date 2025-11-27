# MercApp - Backend (Unidad 3 y Unidad 4)

API REST para catálogo de productos, con despliegue en Railway.

## Requisitos
- Node.js 18+
- MongoDB Atlas o instancia local

## Configuración Local
1. Copiar `.env.example` a `.env` y completar:
```
MONGODB_URI=tu_uri_de_mongo
PORT=3000
```

2. Instalar dependencias:
```
npm install
```

3. (Opcional) Poblar datos iniciales:
```
npm run seed
```

4. Ejecutar en desarrollo:
```
npm run dev
```

Backend disponible en:
```
http://localhost:3000
```

## Endpoints Principales
- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id
- GET /api/categories

## Despliegue (Unidad 4)
El backend fue desplegado en Railway con:
- Variable de entorno MONGODB_URI
- Puerto dinámico mediante process.env.PORT
- Servicio Node.js en producción

URL del backend desplegado:
https://mercapp-unidad3-production.up.railway.app

Este backend da servicio al frontend desplegado en Netlify.