import { App } from "vue";
import Home from "./Home.vue";
import Login from "./Login.vue";

export const myPages = {
    install(vue: App): void {
        vue.component(Home.name, Home);
        vue.component(Login.name, Login);
    },
};
