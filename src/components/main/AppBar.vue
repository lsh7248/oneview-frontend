<template>
  <v-app-bar app color="primary" dark hide-on-scroll>
    <div class="d-flex align-center">
      <v-app-bar-nav-icon
        @click.stop="drawerClick"
        v-if="!$route.path.includes('dashboard')"
      ></v-app-bar-nav-icon>

      <h1>KT OneView</h1>
    </div>

    <v-spacer></v-spacer>

    <v-menu bottom left>
      <template v-slot:activator="{on, attrs}">
        <v-btn icon color="yellow" v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in appItems" :key="i" @click="logout">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab
          v-for="(item, index) in tabItems"
          :key="index"
          link
          :to="item.to"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import {bus} from "@/event-bus";
import {mapMutations} from "vuex";
export default {
  name: "AppBar",

  data: () => ({
    drawer: false,
    appItems: [{title: "로그아웃"}],

    tabItems: [
      {
        name: "대시보드",
        to: "/dashboard",
      },
      {
        name: "VOC 분석",
        to: "/map",
      },
      {
        name: "VOC 상세분석",
        to: "/map",
      },
      {
        name: "게시판",
        to: "/home",
      },
      {
        name: "관리자",
        to: "/admin",
      },
    ],
  }),
  methods: {
    ...mapMutations("auth", ["setIsLogin"]),
    drawerClick() {
      bus.$emit("DRAWER_CLICK", this.drawer);
    },
    logout() {
      console.log("logout init...");
      this.$axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.$store.state.auth.access;

      this.$axios
        .post("/api/v1/jwt/logout/access")
        .then((res) => {
          console.log("access token revoke completed...", res);
          this.$axios.defaults.headers.common["Authorization"] =
            "Bearer " + this.$store.state.auth.refresh;
          this.$axios
            .post("/api/v1/jwt/logout/refresh")
            .then((res) => {
              console.log("refresh token revoke completed...", res);
              sessionStorage.removeItem("userInfo");
              this.$axios.defaults.headers.common["Authorization"] = "";
              this.setIsLogin(false);
              this.$router.push("/login");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
