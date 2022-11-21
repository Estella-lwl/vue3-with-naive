import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/pageOne'
  },
  {
    path: '/pageOne',
    // name: 'First',
    component: () => import('@/views/pageOne/index.vue')
  },
  {
    path: '/pageTwo',
    // name: 'Second',
    component: () => import('@/views/pageTwo/index.vue')
  },
  {
    path: '/',
    redirect: '/test'
  },
  // {
	// 	path: '/:catchAll(.*)',
	// 	// hidden: true,
	// 	component: () => import('@/views/error/404.vue')
	// }
]


const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default router