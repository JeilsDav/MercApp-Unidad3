<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useApi } from '../composables/useApi';
import { useCart } from '../stores/cart';

const { params } = useRoute();
const { request, loading, error } = useApi();
const product = ref(null);
const cart = useCart();

onMounted(async () => {
  product.value = await request(`/products/${params.id}`);
});
</script>

<template>
  <section v-if="product">
    <img :src="product.imageUrl" alt="" style="width:100%;max-width:720px;border-radius:12px" />
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p><b>$ {{ Number(product.price).toFixed(2) }}</b></p>
    <button @click="cart.add(product)">Añadir al carrito</button>
  </section>
  <div v-else-if="loading">Cargando...</div>
  <div v-else-if="error">Error: {{ error }}</div>
</template>
