import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
console.log(process.env.NODE_ENV, "当前开发模式");
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
