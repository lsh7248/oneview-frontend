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
      this.$axios
        .get("/api/users/me")
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
