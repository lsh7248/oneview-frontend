import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VuetifyDialog from "vuetify-dialog";
import "vuetify-dialog/dist/vuetify-dialog.css";

import axios from "axios";
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:8000/"; // the FastAPI backend
Vue.prototype.$axios = axios;
Vue.prototype.$apiServer = "http://localhost:8000";
// Vue.prototype.$apiServer = "http://172.20.10.4:3000";
// Vue.prototype.apiServer = "https://jsonplaceholder.typicode.com:3000";
Vue.config.productionTip = false;

Vue.use(VuetifyDialog, {
  context: {
    vuetify,
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
