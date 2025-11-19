<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useApi } from '../composables/useApi';
import { useCart } from '../stores/cart';

const route = useRoute();
const router = useRouter();

const { request, loading, error } = useApi();
const cart = useCart();

const product = ref(null);

onMounted(async () => {
  product.value = await request(`/products/${route.params.id}`);
});

// ID seguro (porque en Mongo a veces viene _id o id)
const productId = computed(() => product.value?._id || product.value?.id);
</script>

<template>
  <section v-if="product" class="product-detail">

    <!-- Imagen -->
    <img 
      :src="product.imageUrl" 
      alt="" 
      class="main-img"
    />

    <!-- Título + Botón editar -->
    <div class="header">
      <h1>{{ product.name }}</h1>

      <!-- BOTÓN EDITAR -->
      <button class="edit-btn"
        @click="router.push(`/product/${productId}/edit`)"
      >
        ✏️ Editar
      </button>
    </div>

    <p>{{ product.description }}</p>

    <p class="price">
      <b>$ {{ Number(product.price).toFixed(2) }}</b>
    </p>

    <button class="add-btn" @click="cart.add(product)">
      Añadir al carrito
    </button>
  </section>

  <div v-else-if="loading">Cargando...</div>
  <div v-else-if="error">Error: {{ error }}</div>
</template>

<style scoped>
.product-detail {
  max-width: 720px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.main-img {
  width: 100%;
  border-radius: 12px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.edit-btn {
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #555;
  background: #eee;
  cursor: pointer;
}
.edit-btn:hover {
  background: #ddd;
}

.price {
  font-size: 1.2rem;
}

.add-btn {
  padding: 10px 12px;
  border-radius: 6px;
  background: #4caf50;
  border: none;
  color: white;
  cursor: pointer;
}
.add-btn:hover {
  background: #43a047;
}
</style>

