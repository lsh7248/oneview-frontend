<template>
  <v-card>
    <v-card-title>
      중복 VOC 발생 주기지국
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-card-actions> SELECT </v-card-actions>
    <v-data-table
      :headers="headers"
      :items="vocs"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
import { api } from "@/api/api";
export default {
  data() {
    return {
      vocs: [],
      search: "",
      headers: [
        {
          text: "순위",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "주기지국ID", value: "sbt_bts_cd" },
        { text: "주기지국명", value: "equip_nm" },
        { text: "VOC건수", value: "sr_tt_crp_no" },
        { text: "주소", value: "addr_dtl" },
        { text: "지번", value: "bld_flor" },
        { text: "센터", value: "biz_hq_nm" },
      ],
      // desserts: [
      //   {
      //     name: "Frozen Yogurt",
      //     calories: 159,
      //     fat: 6.0,
      //     carbs: 24,
      //     protein: 4.0,
      //     iron: "1%",
      //   },
      //   {
      //     name: "Ice cream sandwich",
      //     calories: 237,
      //     fat: 9.0,
      //     carbs: 37,
      //     protein: 4.3,
      //     iron: "1%",
      //   },
      //   {
      //     name: "Eclair",
      //     calories: 262,
      //     fat: 16.0,
      //     carbs: 23,
      //     protein: 6.0,
      //     iron: "7%",
      //   },
      //   {
      //     name: "Cupcake",
      //     calories: 305,
      //     fat: 3.7,
      //     carbs: 67,
      //     protein: 4.3,
      //     iron: "8%",
      //   },
      //   {
      //     name: "Gingerbread",
      //     calories: 356,
      //     fat: 16.0,
      //     carbs: 49,
      //     protein: 3.9,
      //     iron: "16%",
      //   },
      //   {
      //     name: "Jelly bean",
      //     calories: 375,
      //     fat: 0.0,
      //     carbs: 94,
      //     protein: 0.0,
      //     iron: "0%",
      //   },
      //   {
      //     name: "Lollipop",
      //     calories: 392,
      //     fat: 0.2,
      //     carbs: 98,
      //     protein: 0,
      //     iron: "2%",
      //   },
      //   {
      //     name: "Honeycomb",
      //     calories: 408,
      //     fat: 3.2,
      //     carbs: 87,
      //     protein: 6.5,
      //     iron: "45%",
      //   },
      //   {
      //     name: "Donut",
      //     calories: 452,
      //     fat: 25.0,
      //     carbs: 51,
      //     protein: 4.9,
      //     iron: "22%",
      //   },
      //   {
      //     name: "KitKat",
      //     calories: 518,
      //     fat: 26.0,
      //     carbs: 65,
      //     protein: 7,
      //     iron: "6%",
      //   },
      // ],
    };
  },
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
