# MercApp - Frontend (Unidad 3 y Unidad 4)

SPA desarrollada con Vue 3 + Vite, que consume el API REST del backend.  
Incluye despliegue completo en Netlify.

## Requisitos
- Node.js 18+

## Configuración Local
1. Crear archivo `.env`:
```
VITE_BACKEND_URL=http://localhost:3000
```

2. Instalar dependencias:
```
npm install
```

3. Ejecutar modo desarrollo:
```
npm run dev
```

Abrir en navegador:
```
http://localhost:5173
```

## Consumo del Backend
El frontend utiliza `VITE_BACKEND_URL` como URL base para conectarse al backend.

## Despliegue (Unidad 4)
El frontend fue desplegado en Netlify con la siguiente configuración:

- Base directory: frontend/
- Build command: npm run build
- Publish directory: frontend/dist
- Variable de entorno:
  - VITE_BACKEND_URL="https://mercapp-unidad3-production.up.railway.app"

Frontend desplegado en:
https://ephemeral-meringue-9a1c26.netlify.app

Este frontend se conecta correctamente al backend desplegado en Railway.