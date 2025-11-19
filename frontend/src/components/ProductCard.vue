<script setup>
const props = defineProps({ product: Object });
const emit = defineEmits(['added-to-cart']);
</script>

<template>
  <article class="card">
    <img :src="product.imageUrl" alt="" class="thumb" />
    <h3>{{ product.name }}</h3>
    <p class="desc">{{ product.description }}</p>
    <p class="price">$ {{ Number(product.price).toFixed(2) }}</p>
    <router-link :to="`/product/${product._id || product.id}`">Ver detalle</router-link>
    <button @click="$emit('added-to-cart', product)">Añadir</button>
  </article>
</template>

<style scoped>
.card { border: 1px solid #3333; padding: 12px; border-radius: 12px; display:flex; flex-direction:column; gap:8px }
.thumb { width:100%; aspect-ratio: 16/9; object-fit: cover; border-radius: 8px }
.desc { color:#666 }
.price { font-weight:700 }
</style>
