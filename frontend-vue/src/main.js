import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import TextInput from "./components/inputs/Text"

Vue.component("TextInput", TextInput);

router.beforeEach(function (to, from, next) {
    document.title = to.name;
    store.commit("changeCurrentlyActiveRouteName", to.name);
    next();
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
