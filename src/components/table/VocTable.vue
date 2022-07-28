<template>
  <div style="margin: 0px; padding: 0px">
    <v-row dense class="pb-0 ma-0">
      <!-- <v-col cols="0" sm="0" md="2" lg="5" class="pa-0 ma-0"> -->
      <v-col cols="0" sm="0" md="3" lg="5" class="pa-0 ma-0">
        <v-card-title> VOC 목록 </v-card-title>
      </v-col>
      <!-- <v-col cols="12" sm="6" md="3" lg="2" class="py-0 ma-0"> -->
      <v-col cols="12" sm="5" md="4" lg="3" class="py-0 ma-0">
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date기준년월일"
              label="기준년월일"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            locale="ko-KR"
            v-model="date기준년월일"
            no-title
            @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <!-- <v-col cols="12" sm="6" md="3" lg="2" class="py-0 ma-0"> -->
      <v-col cols="12" sm="5" md="4" lg="3" class="py-0 ma-0">
        <v-select
          v-model="selected_주기지국센터"
          :items="items_주기지국센터"
          label="주기지국센터"
          return-object
        ></v-select>
      </v-col>
      <!-- <v-col cols="12" sm="6" md="3" lg="2" class="py-0 ma-0">
        <v-text-field
          v-model="message1"
          label="서비스계약번호"
          clearable
        ></v-text-field>
      </v-col> -->
      <!-- <v-col cols="12" sm="6" md="1" class="py-0 ma-0"> -->
      <v-col cols="12" sm="2" md="1" class="py-0 ma-0">
        <v-btn
          :style="{
            marginTop: '10px',
            whiteSpace: 'nowrap',
            marginBottom: '10px',
          }"
          @click="
            () => {
              search = '';
              fetch_VOC목록();
            }
          "
          depressed
          color="primary"
          width="100%"
          >조회</v-btn
        >
      </v-col>
    </v-row>
    <v-text-field
      v-if="items_VOC목록.length > 0"
      class="px-1 pl-4 pb-5"
      dense
      v-model="search"
      prepend-inner-icon="mdi-magnify"
      single-line
      hide-details
    >
    </v-text-field>
    <v-row class="pa-0 ma-0">
      <v-col cols="12" class="pa-0 ma-0">
        <!-- hide-default-footer -->
        <v-data-table
          v-if="items_VOC목록.length > 0"
          :footer-props="{
            'page-text': '{0}~{1}행 / {2}행',
            'items-per-page-all-text': '전체',
            'items-per-page-text': '페이지 최대 표시 행',
          }"
          :disable-items-per-page="true"
          :headers="keys2headers(Object.keys(items_VOC목록[0]))"
          :items="items_VOC목록"
          :search="search"
          dense
          class="pa-0 ma-0"
          :style="{
            // marginTop: '10px',
            // marginLeft: '5px',
            // marginRight: '5px',
            whiteSpace: 'nowrap',
          }"
        >
        </v-data-table>
        <v-row
          v-else
          class="ma-0 pa-3 text-h6 text-center"
          style="color: lightgray"
        >
          <v-spacer></v-spacer>
          No data available
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  text: "VocTable",
  data: () => ({
    search: "",
    // date기준년월일: new Date(
    //   Date.now() - new Date().getTimezoneOffset() * 60000
    // )
    date기준년월일: new Date("2022-05-14").toISOString().substring(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    selected_주기지국센터: "전체",
    items_주기지국센터: [
      "경기남부",
      "경기북부",
      "경기서부",
      "경남",
      "경북",
      "대구",
      "부산",
      "서울강남",
      "서울강북",
      "전북",
      "전남",
      "충남",
      "충북",
      "전체",
    ],
    items_VOC목록: [],
    // headers_VOC목록: [],
  }),
  // watch: {
  //   items_VOC목록: function (n) {
  //     var tmplst = [];
  //     Object.keys(n[0]).forEach((element) => {
  //       tmplst.push({
  //         class: "light-blue lighten-5",
  //         text: element,
  //         // align: "start",
  //         // sortable: false,
  //         // value: element,
  //         value: element,
  //       });
  //     });
  //     this.headers_VOC목록 = tmplst;
  //     // console.log(tmplst);
  //   },
  // },
  methods: {
    keys2headers(keys) {
      var tmplst = [];
      keys.forEach((element) => {
        tmplst.push({
          class: "light-blue lighten-5",
          // class: "grey lighten-5",
          text: element,
          // align: "start",
          // sortable: false,
          // value: element,
          value: element,
        });
      });
      return tmplst;
    },
    async fetch_VOC목록() {
      let pararg_주기지국센터 = "";
      if (this.selected_주기지국센터 !== "전체") {
        pararg_주기지국센터 = "&team=" + this.selected_주기지국센터;
      }

      this.items_VOC목록 = await this.$axios

        .get(
          this.$prefixAPIURL +
            // "voc/list?limit=1000&team=전남엔지니어링부&start_date=20220508&end_date=20220514"
            // "voc/list?limit=1000&start_date=20220514"
            // "voc/list?limit=1000&start_date=" +
            // this.date기준년월일.substring(0, 10).replace(/-/g, "")
            "voc/list?limit=1000" +
            pararg_주기지국센터 +
            "&start_date=" +
            this.date기준년월일.substring(0, 10).replace(/-/g, "")
          // "voc/list"
        )

        .then(function (response) {
          console.log("error", response.data);
          return response.data;
        })
        .catch(function (error) {
          console.log("error", error);
          return [];
        });
    },
  },
  mounted() {
    this.fetch_VOC목록();
  },
};
</script>

<style scoped></style>
