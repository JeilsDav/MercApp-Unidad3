// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const ProductDetail = () => import('../views/ProductDetail.vue');
const ProductForm = () => import('../views/ProductForm.vue');
const Cart = () => import('../views/Cart.vue');
const About = () => import('../views/About.vue');
const NotFound = () => import('../views/NotFound.vue');

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },

    // Detalle
    { path: '/product/:id', component: ProductDetail },

    // Nuevo producto
    { path: '/product/new', component: ProductForm },

    // Editar producto existente
    { path: '/product/:id/edit', component: ProductForm },

    { path: '/cart', component: Cart },
    { path: '/about', component: About },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
});