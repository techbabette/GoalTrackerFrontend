import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from "../components/pages/Landing.vue";

Vue.use(Router);

let routes = [
    {
        path: "/", component: LandingPage, name: "Home page"
    }
]

const router = new Router({
    routes
})

export default router