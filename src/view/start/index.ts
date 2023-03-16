import { App } from "vue";
import Home from "./Home.vue";
import Login from "./Login.vue";
import Test from "./TestPage.vue";

export const myPages = {
    install(vue: App): void {
        vue.component(Home.name, Home);
        vue.component(Login.name, Login);
        vue.component(Test.name, Test);
    },
};
