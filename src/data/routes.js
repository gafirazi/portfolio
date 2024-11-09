import { defineAsyncComponent } from 'vue'

const Home = defineAsyncComponent(() => import('@/pages/Home.vue'))

export default [
  {
    path: '',
    name: 'Home',
    component: Home
  }
]