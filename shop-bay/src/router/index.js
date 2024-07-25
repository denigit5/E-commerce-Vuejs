import { createRouter, createWebHistory } from 'vue-router'

import ProductList from '../views/ProductList.vue';
import ShoppingCart from '../views/ShoppingCart.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})

export default router
