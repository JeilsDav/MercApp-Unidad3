<script setup>
import { useCart } from '../stores/cart';
const cart = useCart();
</script>

<template>
  <section>
    <h1>Carrito</h1>
    <div v-if="!cart.items.length">Tu carrito está vacío.</div>
    <ul v-else>
      <li v-for="it in cart.items" :key="it.id" style="display:flex; gap:8px; align-items:center">
        <img :src="it.imageUrl" alt="" style="width:64px;height:64px;object-fit:cover;border-radius:8px" />
        <div style="flex:1">
          <div>{{ it.name }}</div>
          <small>$ {{ Number(it.price).toFixed(2) }}</small>
        </div>
        <input type="number" min="1" :value="it.qty" @input="cart.setQty(it.id, $event.target.value)" style="width:64px" />
        <button @click="cart.remove(it.id)">Quitar</button>
      </li>
    </ul>
    <hr />
    <p><b>Total:</b> $ {{ Number(cart.total).toFixed(2) }}</p>
    <button @click="cart.clear">Vaciar carrito</button>
  </section>
</template>
