import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/todo-list',
    name: 'To-do List',
    component: () => import( '@/views/TodoView.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: "/"
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router