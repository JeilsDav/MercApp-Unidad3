# MercApp - Backend (Unidad 3)

API REST para catálogo de productos.

## Requisitos
- Node.js 18+
- MongoDB en local o Atlas

## Configuración
1. Copia `.env.example` a `.env` y ajusta valores si necesitas.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. (Opcional) Poblar datos:
   ```bash
   npm run seed
   ```
4. Ejecutar:
   ```bash
   npm run dev
   ```
5. Endpoints:
   - `GET /api/products`
   - `GET /api/products/:id`
   - `POST /api/products`
   - `PUT/PATCH /api/products/:id`
   - `DELETE /api/products/:id`
   - `GET /api/categories`
