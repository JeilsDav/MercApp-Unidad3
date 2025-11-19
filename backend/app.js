require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// --- Config ---
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mercapp';

// --- Middlewares ---
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- DB ---
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => {
    console.error('❌ Error conectando a MongoDB:', err.message);
    process.exit(1);
  });

// --- Routes ---
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Healthcheck
app.get('/', (_req, res) => res.json({ ok: true, name: 'MercApp Backend', version: '1.0.0' }));

// 404
app.use((_req, res) => res.status(404).json({ message: 'Not Found' }));

app.listen(PORT, () => console.log(`🚀 Backend escuchando en http://localhost:${PORT}`));
