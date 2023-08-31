import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import TextInput from "./components/inputs/Text"
import AccessLevelDirective from './directives/AccessLevelDirective';

Vue.component("TextInput", TextInput);
Vue.directive("accesslevel", AccessLevelDirective);

router.beforeEach(function (to, from, next) {
    document.title = to.name;
    store.commit("changeCurrentlyActiveRouteName", to.name);
    next();
});

Vue.config.productionTip = false

if(localStorage.getItem("JWT")){
  store.commit("setUserToken", localStorage.getItem("JWT"));
}

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
