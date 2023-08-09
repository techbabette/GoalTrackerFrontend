import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from "../components/pages/Landing.vue";
import GoalsPage from "../components/pages/Landing.vue";

Vue.use(Router);

let routes = [
    {
        path: "/", component: LandingPage, name: "Home page"
    },
    {
        path: "/goals", component: GoalsPage, name: "Goal page"
    }
]

const router = new Router({
    routes
})

export default router