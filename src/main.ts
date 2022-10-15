import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { myPages } from "./view/start";
import router from "./router";
import './style.css'

createApp(App)
    .use(router)
    .use(createPinia())
    .use(myPages)
    .mount('#the-dm-mimic')
