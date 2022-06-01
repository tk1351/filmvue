import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../components/pages/Main/container.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'メインページ', component: Main },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
