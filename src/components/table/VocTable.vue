<template>
  <div style="margin: 0px; padding: 0px">
    <v-row dense class="pb-0 ma-0">
      <v-col cols="0" sm="0" md="2" lg="5" class="pa-0 ma-0">
        <v-card-title> VOC 목록 </v-card-title>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="2" class="py-0 ma-0">
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
      <v-col cols="12" sm="6" md="3" lg="2" class="py-0 ma-0">
        <v-select
          :items="items_기지국사업본부"
          label="기지국사업본부"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="2" class="py-0 ma-0">
        <v-text-field
          v-model="message1"
          label="서비스계약번호"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="1" class="py-0 ma-0">
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
          :footer-props="{
            'page-text': '{0}~{1}행 / {2}행',
            'items-per-page-all-text': '모두',
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  text: "VocTable",
  data: () => ({
    search: "",
    date기준년월일: new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .substring(0, 10),
    menu: false,
    modal: false,
    menu2: false,

    items_기지국사업본부: [
      "기지국사업본부1",
      "기지국사업본부2",
      "기지국사업본부3",
      "기지국사업본부4",
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
      this.items_VOC목록 = await this.$axios
        .get("http://localhost:3000/api-v1-voc-list")
        // .get(
        //   "http://10.203.13.202:8241/api/v1/voc/list?limit=1000&team=성남엔지니어링부&start_date=20220510&end_date=20220520"
        // )
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
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
