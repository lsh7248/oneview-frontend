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

import {mapState, mapMutations} from "vuex";
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
    this.$store.commit("auth/initializeStore");
    const access = this.$store.state.auth.access;

    if (access) {
      this.$axios.defaults.headers.common["Authorization"] = "Bearer " + access;
    } else {
      this.$axios.defaults.headers.common["Authorization"] = "";
    }
  },

  mounted() {
    setInterval(() => {
      this.getAccess();
    }, 10000);
  },
  computed: {
    ...mapState("auth", ["access", "refresh"]),
  },

  methods: {
    ...mapMutations("auth", ["setAccess", "setRefresh", "initializeStore"]),
    getAccess() {
      this.$axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.$store.state.auth.refresh;
      this.$axios
        .post("/api/v1/jwt/refresh")
        .then((res) => {
          const access = res.data.access;

          console.log("New access Token: ", access);
          const userInfo = {
            access: access,
            refresh: sessionStorage.getItem("userInfo").refresh,
          };

          sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
          this.setAccess(access);

          this.$axios.defaults.headers.common["Authorization"] =
            "Bearer " + access;
          console.log("SET HEADER TO NEW ACCESS TOKEN SUCCESS...");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
