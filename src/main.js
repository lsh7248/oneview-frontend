import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VuetifyDialog from "vuetify-dialog";
import "vuetify-dialog/dist/vuetify-dialog.css";

import axios from "axios";

import MagicGrid from "vue-magic-grid";
Vue.use(MagicGrid);

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:8000/"; // the FastAPI backend
Vue.prototype.$axios = axios;

Vue.prototype.$prefixAPIURL = "http://localhost:3000/api/v1/";
// Vue.prototype.$prefixAPIURL = "http://10.203.13.202:8241/api/v1/";

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
