import { createWebHistory, createRouter, RouterView } from 'vue-router'

// Import components
const Home = () => import(/* webpackChunkName: "home" */'@/views/Home.vue')

const routes = [{
    path: '/',
    component: Home,
    name: 'home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { left: 0, top: 0 }
  },
  routes
})

export default router
