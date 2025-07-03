import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'homepage', component: Home},
    {path: '/products', name: 'productspage', component: () => import('@/views/Products.vue')},
  ]
})

export default router
