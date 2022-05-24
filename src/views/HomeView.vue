<template>
  <span :src="userInfo">{{ userInfo }}</span>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";

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
    getUserInfo() {
      console.log("me GET Start...");
      console.log(this.$axios.defaults.headers.common["Authorization"]);
      this.$axios
        .get("/api/v1/users/me")
        .then((res) => {
          console.log(res);
          this.userInfo = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
