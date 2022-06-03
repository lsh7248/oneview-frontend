<template>
  <span :src="userInfo">{{ userInfo }}</span>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
import {api} from "@/api/api";
export default {
  name: "HomeView",

  components: {
    // HelloWorld,
  },

  data: () => ({
    userInfo: {},
  }),

  mounted() {
    console.log(this.$axios.defaults.headers);
    this.getUserInfo();
  },

  methods: {
    async getUserInfo() {
      console.log("me GET Start...");
      await api
        .getMe()
        .then((res) => {
          console.log(res);
          this.userInfo = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      // const sessionObj = sessionStorage.getItem("userInfo");
      // let userInfo = sessionObj ? JSON.parse(sessionObj) : null;
      // const access = userInfo ? userInfo.access : null;
      // console.log("access Token: ", access);
      // this.$axios.defaults.headers.common["Authorization"] = "Bearer " + access;
      // this.$axios
      //   .get("/api/v1/users/me")
      // .then((res) => {
      //   console.log(res);
      //   this.userInfo = res.data;
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
    },
  },
};
</script>
