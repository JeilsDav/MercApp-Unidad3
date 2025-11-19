require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const Category = require('../models/Category');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mercapp';

async function main() {
  await mongoose.connect(MONGODB_URI);
  console.log('✅ Conectado a MongoDB');

  // Crear o asegurar categorías
  const catNames = ['Acción', 'Aventura', 'Plataformas', 'Carreras', 'RPG'];
  const catDocs = [];
  for (const name of catNames) {
    const c = await Category.findOneAndUpdate(
      { name },
      { name },
      { upsert: true, new: true }
    );
    catDocs.push(c);
  }

  // 🧹 BORRAR TODOS LOS PRODUCTOS
  await Product.deleteMany({});
  console.log('🧹 Productos antiguos eliminados');

  // 🔄 Insertar nuevos productos siempre
  const sample = [
    { name:'Zelda TotK',          price:79.99, description:'Aventura épica',           imageUrl:'https://files.catbox.moe/xkiq79.jpg' },
    { name:'Mario Kart World',    price:89.99, description:'Carreras frenéticas',      imageUrl:'https://files.catbox.moe/vpz5kg.jpg' },
    { name:'Persona 5 Royal',     price:59.99, description:'RPG estiloso',             imageUrl:'https://files.catbox.moe/hws9cl.png' },
    { name:'Donkey Kong Bananza', price:69.99, description:'Plataformas',              imageUrl:'https://files.catbox.moe/if6bh4.png' },
    { name:'Undertale',           price:9.99,  description:'Indie legendario',         imageUrl:'https://files.catbox.moe/vx0yt5.png' },
    { name:'Deltarune',           price:14.99, description:'Secuela de Undertale',     imageUrl:'https://files.catbox.moe/bwrdak.png' },
    { name:'Mario Odyssey',       price:49.99, description:'Plataformas 3D',           imageUrl:'https://files.catbox.moe/3pzmi6.png' },
    { name:'Metroid Dread',       price:59.99, description:'Acción y exploración',     imageUrl:'https://files.catbox.moe/9h85qg.png' }
  ];

  for (const s of sample) {
    const categoryId = catDocs[Math.floor(Math.random() * catDocs.length)]._id;
    const stock = Math.floor(Math.random() * 20) + 1;
    await Product.create({ ...s, categoryId, stock });
  }

  console.log('🌱 Seed: productos insertados');

  await mongoose.disconnect();
  console.log('✅ Seed completado');
}

main().catch(e => { console.error(e); process.exit(1); });

