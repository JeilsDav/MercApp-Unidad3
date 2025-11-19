# MercApp - Unidad 3 (SPA + API propia)

Proyecto completo con **backend (API REST)** y **frontend (Vue 3 SPA)** para cumplir la Tarea Unidad 3.

## Requisitos
- Node.js 18+
- MongoDB en local (o cadena de conexión de Atlas)

## Pasos para ejecutar

### 1) Backend
```bash
cd backend
cp .env.example .env   # (opcional) ajusta MONGODB_URI y PORT si deseas
npm install
npm run seed           # poblar categorías y productos de ejemplo
npm run dev            # levanta en http://localhost:3000
```

Endpoints principales:
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT/PATCH /api/products/:id`
- `DELETE /api/products/:id`
- `GET /api/categories`

### 2) Frontend
En otra terminal:
```bash
cd frontend
cp .env.example .env   # opcional, ya apunta a http://localhost:3000/api
npm install
npm run dev            # abre http://localhost:5173
```

### 3) Notas para la entrega
- Sube ambos (backend y frontend) a un repositorio público en GitHub.
- Incluye un `README.md` con instrucciones (ya provisto en cada carpeta).
- Crea un archivo `readme.txt` en la raíz con la URL del repositorio antes de comprimir.

---

## Estructura
```
MercApp-Unidad3/
├─ backend/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  ├─ scripts/
│  ├─ uploads/
│  ├─ app.js
│  └─ package.json
└─ frontend/
   ├─ src/
   ├─ index.html
   ├─ package.json
   └─ vite.config.js
```
