<template>
  <!-- <span :src="userInfo">{{ userInfo }}</span> -->
  <data-table />
</template>

<script>
// import {api} from "@/api/api";
import DataTable from "@/components/datas/DataTable.vue";
export default {
  name: "HomeView",

  components: {
    DataTable,
  },

  data: () => ({}),

  mounted() {},

  methods: {},
};
</script>
