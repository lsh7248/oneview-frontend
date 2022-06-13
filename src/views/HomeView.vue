<template>
  <!-- <span :src="userInfo">{{ userInfo }}</span> -->
  <data-table />
</template>

<script>
import {api} from "@/api/api";
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
    initialize() {
      api
        .getVocs()
        .then((res) => {
          console.log(res);
          this.vocs = res.data;
          console.log("vocs: ", this.vocs);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
