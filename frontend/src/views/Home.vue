<script setup>
import ProductCard from '../components/ProductCard.vue';
import { useProducts } from '../composables/useProducts';
import { useCart } from '../stores/cart';

const { categories, q, categoryId, visible, loading, error } = useProducts();
const cart = useCart();
</script>

<template>
  <section>
    <h1>MercApp</h1>
    <div class="filters">
      <input v-model="q" placeholder="Buscar..." />
      <select v-model="categoryId">
        <option value="">Todas las categorías</option>
        <option v-for="c in categories" :key="c.id" :value="c.id">{{ c.name }}</option>
      </select>
    </div>

    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div class="grid">
      <ProductCard v-for="p in visible" :key="p._id || p.id" :product="p" @added-to-cart="cart.add" />
    </div>
  </section>
</template>

<style scoped>
.filters{ display:flex; gap:8px; margin-bottom:12px }
.grid{ display:grid; grid-template-columns: repeat(auto-fill, minmax(220px,1fr)); gap:12px }
</style>
