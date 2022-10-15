import { createRouter, createWebHistory } from "vue-router";
import Home from '../view/start/Home.vue'
import Login from '../view/start/Login.vue'
import Signup from '../view/start/Signup.vue'
import Screen from '../view/start/Screen.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'Signup', component: Signup },
    { path: '/screen', name: 'Screen', component: Screen },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const scrollToTopOfPage = () => window.scroll(0, 0);
router.afterEach(() => {
    scrollToTopOfPage();
});

export default router;