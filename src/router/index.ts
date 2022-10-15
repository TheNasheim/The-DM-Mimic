import { createRouter, createWebHistory } from "vue-router";
import Home from '../view/start/Home.vue'
import Login from '../view/start/Login.vue'
import Signup from '../view/start/Signup.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'Signup', component: Signup },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;