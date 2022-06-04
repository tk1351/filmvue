import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../components/pages/Main/container.vue'
import MovieDetail from '../components/pages/MovieDetail/container.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'メインページ', component: Main },
  { path: '/movie/:movieId', name: '映画詳細ページ', component: MovieDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
