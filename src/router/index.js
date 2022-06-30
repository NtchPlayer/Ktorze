import { createWebHistory, createRouter } from 'vue-router'

// Import components
const Home = () =>
    import ( /* webpackChunkName: "home" */ '@/views/Home.vue')
const HomeOccasionnel = () =>
    import ( /* webpackChunkName: "home-occasionnel" */ '@/views/HomeOccasionnel.vue')
const HomeFamille = () =>
    import ( /* webpackChunkName: "home-famille" */ '@/views/HomeFamille.vue')

const routes = [{
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/la-randonnee-pour-tous',
        component: HomeOccasionnel,
        name: 'home-occasionnel'
    },
    {
        path: '/randonner-en-famille',
        component: HomeFamille,
        name: 'home-famille'
    },
]

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { left: 0, top: 0 }
    },
    routes
})

export default router