<template>
  <!-- <span :src="userInfo">{{ userInfo }}</span> -->
  <data-table />
</template>

<script>
// import { api } from "@/api/api";
import DataTable from "@/components/datas/DataTable.vue";
export default {
  name: "HomeView",

  components: {
    DataTable,
  },

  data: () => ({
    vocs: [],
  }),

  mounted() {},

  methods: {
    getUserInfo() {
      console.log("me GET Start...");
      console.log(this.$axios.defaults.headers.common["Authorization"]);
      this.$axios
        .get("/api/v1/users/me")
        .then(res => {
          console.log(res);
          this.vocs = res.data;
          console.log("vocs: ", this.vocs);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>
