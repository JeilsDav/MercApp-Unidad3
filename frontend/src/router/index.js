import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const ProductDetail = () => import('../views/ProductDetail.vue');
const Cart = () => import('../views/Cart.vue');
const About = () => import('../views/About.vue');
const NotFound = () => import('../views/NotFound.vue');

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/product/:id', component: ProductDetail },
    { path: '/cart', component: Cart },
    { path: '/about', component: About },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
});
