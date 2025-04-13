import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue'),
    },
    {
      path: '/PushFold',
      name: 'PushFold',
      component: () => import('../components/pages/PushFold.vue'),
    },
  ],
})

export default router
