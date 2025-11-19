<template>
  <nav style="display:flex; gap:12px; padding:12px; border-bottom:1px solid #eee">
    <router-link to="/">Inicio</router-link>
    <router-link to="/cart">Carrito</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <main style="max-width:1100px;margin:0 auto;padding:16px">
    <Suspense>
      <router-view />
      <template #fallback> Cargando vista... </template>
    </Suspense>
  </main>
</template>

<script setup>
</script>
