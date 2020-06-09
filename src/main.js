import Vue from "vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import App from "./App.vue";
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
