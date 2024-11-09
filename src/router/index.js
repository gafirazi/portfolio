import {
  createRouter,
  createWebHistory
} from 'vue-router'
import routes from '@/data/routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router