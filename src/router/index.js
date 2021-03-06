import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kiosk from '../views/Kiosk.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/salter',
        name: 'Salter',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Salter.vue')
    },
    {
        path: '/kiosk/:id',
        name: 'Kiosk',
        component: Kiosk
    },
]

const router = new VueRouter({
    routes
})

export default router
