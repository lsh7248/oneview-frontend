<template>
  <v-app>
    <app-bar v-if="!$route.path.includes('login')"></app-bar>
    <side-bar v-if="!$route.path.includes('login')"></side-bar>
    <v-main>
      <router-view />
    </v-main>
    <fooster-bar />
  </v-app>
</template>

<script>
import AppBar from "@/components/main/AppBar.vue";
import SideBar from "@/components/main/SideBar.vue";
import FoosterBar from "@/components/main/FoosterBar.vue";

import { mapState, mapMutations } from "vuex";
import { api } from "./api/api";
import { refreshAccessToken } from "@/utils/authUtils";
export default {
  name: "App",
  components: {
    AppBar,
    SideBar,
    FoosterBar,
  },
  data: () => ({
    //
  }),

  beforeCreate() {
    // this.$store.commit("auth/initializeStore");
    // // this.initializeStore();
    // const access = this.$store.state.auth.access;
    // if (access) {
    //   this.$axios.defaults.headers.common["Authorization"] = "Bearer " + access;
    // } else {
    //   this.$axios.defaults.headers.common["Authorization"] = "";
    // }
  },

  mounted() {
    // setInterval(() => {
    //   this.getAccess();
    // }, 10000);
    this.getUserContainer();
  },
  computed: {
    ...mapState("auth", ["access", "refresh"]),
  },

  methods: {
    ...mapMutations("auth", [
      "setAccess",
      "setRefresh",
      "initializeStore",
      "setUserContainer",
    ]),
    getAccess() {
      const refresh_token = JSON.parse(
        sessionStorage.getItem("userInfo")
      ).refresh;
      const new_access = refreshAccessToken(refresh_token);
      this.setAccess(new_access);
      console.log("Refresh And getAccess Suc!");
      // this.$axios.defaults.headers.common["Authorization"] =
      //   "Bearer " + refresh_token;
      // this.$axios
      //   .post("/api/v1/jwt/refresh")
      //   .then((res) => {
      //     const access = res.data.access;
      //     const refresh = refresh_token;
      //     console.log("New access Token: ", access);
      //     const userInfo = {
      //       access: access,
      //       refresh: refresh,
      //     };

      //     sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      //     this.setAccess(access);

      //     this.$axios.defaults.headers.common["Authorization"] =
      //       "Bearer " + access;
      //     console.log("SET HEADER TO NEW ACCESS TOKEN SUCCESS...");
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    getUserContainer() {
      console.log("Get User Infomation init...");
      api
        .getMe()
        .then((res) => {
          console.log(res);
          const userContainer = {
            userId: res.data.employee_id,
            userName: res.data.username,
            auth: res.data.auth,
            userBelong1: res.data.belong_1,
            userBelong2: res.data.belong_2,
            userBelong3: res.data.belong_3,
            userBelong4: res.data.belong_4,
          };
          console.log("GET ME DATA: ", userContainer);
          this.setUserContainer(userContainer);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
