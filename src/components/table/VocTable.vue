<template>
  <div>
    <v-row class="pb-0 ma-0">
      <v-col sm="12" md="2" lg="2" class="py-0 ma-0">
        <v-card-title>
          <!-- VOC 목록  -->
        </v-card-title>
      </v-col>
      <v-col sm="12" md="3" lg="3" class="py-0 ma-0">
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="기준년월일"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            locale="ko-KR"
            v-model="date"
            @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col sm="12" md="3" lg="3" class="py-0 ma-0">
        <v-select
          :items="items_기지국사업본부"
          label="기지국사업본부"
        ></v-select>
      </v-col>
      <v-col sm="12" md="3" lg="3" class="py-0 ma-0">
        <v-text-field
          v-model="message1"
          label="서비스계약번호"
          clearable
        ></v-text-field>
      </v-col>

      <v-col sm="12" md="1" lg="1" class="py-0 ma-0">
        <v-btn
          :style="{
            marginTop: '10px',
            whiteSpace: 'nowrap',
          }"
          @click="
            () => {
              getData_VOC목록();
            }
          "
          depressed
          color="primary"
          width="100%"
          >조회</v-btn
        >
      </v-col>
    </v-row>
    <v-row dense class="pa-0 ma=0">
      <v-col cols="12">
        <v-data-table
          dense
          :headers="keys2headers(Object.keys(items_VOC목록[0]))"
          :items="items_VOC목록"
          hide-default-footer
          class="elevation-1"
          :style="{
            // marginTop: '10px',
            marginLeft: '5px',
            marginRight: '5px',
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
  data: function () {
    return {
      items_기지국사업본부: [
        "기지국사업본부1",
        "기지국사업본부2",
        "기지국사업본부3",
        "기지국사업본부4",
      ],
      items_VOC목록: [],
      headers_VOC목록: [],
    };
  },
  watch: {
    items_VOC목록: function (n) {
      var tmplst = [];
      Object.keys(n[0]).forEach(element => {
        tmplst.push({
          class: "light-blue lighten-5",
          text: element,
          // align: "start",
          // sortable: false,
          // value: element,
          value: element,
        });
      });
      this.headers_VOC목록 = tmplst;
      console.log(tmplst);
      console.log("tmplst");
    },
  },
  methods: {
    keys2headers(keys) {
      var tmplst = [];
      keys.forEach(element => {
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
    async getData_VOC목록() {
      this.items_VOC목록 = await this.$axios
        .get("http://localhost:3000/voc-list")
        // .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // console.log(response.data.slice(0, 10));
          // console.log(response.data[0].name);
          return response.data;
          // return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });
    },
  },
  mounted() {
    this.getData_VOC목록();
  },
};
</script>

<style scoped></style>
