import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
Vue.prototype.$axios = axios;
// Vue.prototype.$apiServer = "http://172.20.10.4:3000";
// Vue.prototype.apiServer = "https://jsonplaceholder.typicode.com:3000";
Vue.prototype.$apiServer = "http://localhost:3000";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount("#app");
