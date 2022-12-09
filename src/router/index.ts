import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/Layout'
  },
  {
    path: '/PageOne',
    // name: 'First',
    component: () => import('@/views/pageOne/index.vue')
  },
  {
    path: '/PageTwo',
    // name: 'Second',
    component: () => import('@/views/pageTwo/index.vue')
  },
  {
    path: '/Test',
    component: () => import('@/views/test/index.vue')
  },
  {
    path: '/Layout',
    component: () => import('@/components/layout/index.vue')
  },
]


const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default router