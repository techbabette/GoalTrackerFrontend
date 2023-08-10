import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from "../components/pages/Landing.vue";
import GoalsPage from "../components/pages/Goals.vue";
import RegisterPage from "../components/pages/Register.vue";
import LoginPage from "../components/pages/Login.vue";

Vue.use(Router);

let routes = [
    {
        path: "/", component: LandingPage, name: "Home page"
    },
    {
        path: "/goals", component: GoalsPage, name: "My goals"
    },
    {
        path: "/register", component: RegisterPage, name: "Register"
    },
    {
        path: "/login", component: LoginPage, name: "Login"
    }
]

const router = new Router({
    routes
})

export default router