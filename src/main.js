import Vue from "vue";
import router from "./router";
import App from "./App.vue";

import { Input, Button, Message } from "element-ui";
Vue.use(Input);
Vue.use(Button);
Vue.prototype.$message = Message;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
