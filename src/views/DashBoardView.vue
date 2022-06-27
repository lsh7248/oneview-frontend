<template>
  <v-container class="white" fluid>
    <v-row>
      <v-col md="6" lg="4" class="pa-0 ma-0">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title
              class="text-h5 text-center light-blue pa-3 ma-0 white--text"
            >
              품질 VOC 발생 건수 (전일 대비)
            </v-list-item-title>
            <v-btn
              width="100%"
              height="60"
              x-large
              text
              color="orange"
              class="text-h4 text-center"
              style="text-transform: initial"
            >
              {{
                briefStat.find(element => {
                  if (element.title === "품질 VOC 발생 건수 (전일 대비)") {
                    return true;
                  }
                }).value + "건"
              }}
              <up-down-arrow
                class="mx-2"
                :value="
                  briefStat.find(element => {
                    if (element.title === '품질 VOC 발생 건수 (전일 대비)') {
                      return true;
                    }
                  })['increase rate']
                "
                :text="
                  briefStat.find(element => {
                    if (element.title === '품질 VOC 발생 건수 (전일 대비)') {
                      return true;
                    }
                  })['increase rate'] + '%'
                "
              ></up-down-arrow>
            </v-btn>

            <line-chart :style="{ marginTop: '-10px' }" height="210" />

            <v-data-table
              caption="VOC 발생 Top 10 Worst"
              dense
              :headers="headers_VOC발생Top10Worst"
              :items="items_VOC발생Top10Worst"
              hide-default-footer
              class="elevation-1"
              :style="{
                marginTop: '10px',
                whiteSpace: 'nowrap',
              }"
            >
            </v-data-table>
          </v-list-item-content>
        </v-list-item>
      </v-col>

      <v-col md="6" lg="4" class="pa-0 ma-0">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title
              class="text-h5 text-center light-blue pa-3 ma-0 white--text"
            >
              VoLTE 절단율 (전일 대비)
            </v-list-item-title>
            <v-btn
              width="100%"
              height="60"
              x-large
              text
              color="orange"
              class="text-h4 text-center"
              style="text-transform: initial"
            >
              {{
                briefStat.find(element => {
                  if (element.title === "VoLTE 절단율 (전일 대비)") {
                    return true;
                  }
                }).value + "%"
              }}
              <up-down-arrow
                class="mx-2"
                :value="
                  briefStat.find(element => {
                    if (element.title === 'VoLTE 절단율 (전일 대비)') {
                      return true;
                    }
                  })['increase rate']
                "
                :text="
                  briefStat.find(element => {
                    if (element.title === 'VoLTE 절단율 (전일 대비)') {
                      return true;
                    }
                  })['increase rate'] + '%p'
                "
              ></up-down-arrow>
            </v-btn>

            <line-chart :style="{ marginTop: '-10px' }" height="210" />

            <v-data-table
              caption="VoLTE 절단율 Top 10 Worst"
              dense
              :headers="headers_VoLTE절단율Top10Worst"
              :items="items_VoLTE절단율Top10Worst"
              hide-default-footer
              class="elevation-1"
              :style="{
                marginTop: '10px',
                whiteSpace: 'nowrap',
              }"
            >
            </v-data-table>
          </v-list-item-content>
        </v-list-item>
      </v-col>

      <v-col md="12" lg="4" class="pa-0 ma-0">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title
              class="text-h5 text-center light-blue pa-3 ma-0 white--text"
            >
              5G 오프로딩율 (전주 대비)
            </v-list-item-title>
            <v-btn
              width="100%"
              height="60"
              x-large
              text
              color="orange"
              class="text-h4 text-center"
              style="text-transform: initial"
            >
              {{
                briefStat.find(element => {
                  if (element.title === "5G 오프로딩율 (전주 대비)") {
                    return true;
                  }
                }).value + "%"
              }}
              <up-down-arrow
                class="mx-2"
                :value="
                  briefStat.find(element => {
                    if (element.title === '5G 오프로딩율 (전주 대비)') {
                      return true;
                    }
                  })['increase rate']
                "
                :text="
                  briefStat.find(element => {
                    if (element.title === '5G 오프로딩율 (전주 대비)') {
                      return true;
                    }
                  })['increase rate'] + '%p'
                "
              ></up-down-arrow>
            </v-btn>

            <bar-chart :style="{ marginTop: '-10px' }" height="210" />
            <v-data-table
              caption="5G 오프로딩율 Top 10 Worst"
              dense
              :headers="headers_5G오프로딩율Top10Worst"
              :items="items_5G오프로딩율Top10Worst"
              hide-default-footer
              class="elevation-1"
              :style="{
                marginTop: '10px',
                whiteSpace: 'nowrap',
              }"
            >
            </v-data-table>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>

    <v-expansion-panels
      focusable
      accordion
      class="grey pa-0 mt-5"
      active-class="grey lighten-5"
    >
      <v-expansion-panel>
        <v-expansion-panel-header> VOC 목록 </v-expansion-panel-header>
        <v-expansion-panel-content class="grey lighten-5">
          <VocTable></VocTable>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> VoLTE 절단 이벤트 </v-expansion-panel-header>
        <v-expansion-panel-content>
          <VocTable></VocTable>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          5G 오프로딩 트래픽
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <VocTable></VocTable>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import LineChart from "@/components/chart/LineChart.vue";
// import AreaChart from "@/components/chart/AreaChart.vue";
import BarChart from "@/components/chart/BarChart.vue";
// import PieChart from "@/components/chart/PieChart.vue";
// import RadarChart from "@/components/chart/RadarChart.vue";

import UpDownArrow from "@/components/misc/UpDownArrow.vue";
import VocTable from "@/components/table/VocTable.vue";

export default {
  분석: "DashBoard",
  components: {
    LineChart,
    // AreaChart,
    BarChart,
    // PieChart,
    // RadarChart,
    UpDownArrow,
    VocTable,
  },

  watch: {
    items_VOC발생Top10Worst: function (n) {
      var tmplst = [];
      Object.keys(n[0]).forEach(element => {
        switch (element) {
          // case "순위":
          case "VOC 건수":
            tmplst.push({
              class: "light-blue lighten-5",
              text: "발생 건수",
              align: "end",
              // sortable: false,
              value: element,
            });
            break;
          default:
            tmplst.push({
              class: "light-blue lighten-5",
              text: element,
              // align: "start",
              // sortable: false,
              // value: element,
              value: element,
            });
            break;
        }
      });
      this.headers_VOC발생Top10Worst = tmplst;
      console.log(tmplst);
      console.log("tmplst");
    },
    items_VoLTE절단율Top10Worst: function (n) {
      var tmplst = [];
      Object.keys(n[0]).forEach(element => {
        switch (element) {
          // case "순위":
          case "VoLTE 절단율(%)":
            tmplst.push({
              class: "light-blue lighten-5",
              text: "절단율(%)",
              align: "end",
              // sortable: false,
              value: element,
            });
            break;
          default:
            tmplst.push({
              class: "light-blue lighten-5",
              text: element,
              // align: "start",
              // sortable: false,
              // value: element,
              value: element,
            });
            break;
        }
      });
      this.headers_VoLTE절단율Top10Worst = tmplst;
      console.log(tmplst);
      console.log("tmplst");
    },

    items_5G오프로딩율Top10Worst: function (n) {
      var tmplst = [];
      Object.keys(n[0]).forEach(element => {
        switch (element) {
          // case "순위":
          case "5G 오프로딩율 목표 대비(%p)":
            tmplst.push({
              class: "light-blue lighten-5",
              text: "목표 대비(%p)",
              align: "end",
              // sortable: false,
              value: element,
            });
            break;
          default:
            tmplst.push({
              class: "light-blue lighten-5",
              text: element,
              // align: "start",
              // sortable: false,
              // value: element,
              value: element,
            });
            break;
        }
      });
      this.headers_5G오프로딩율Top10Worst = tmplst;
      console.log(tmplst);
      console.log("tmplst");
    },
  },

  methods: {
    async getData_briefStat() {
      this.briefStat = await this.$axios
        .get("http://localhost:3000/brief-stat")
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
    async getData_KPIDaily() {
      this.KPIDaily = await this.$axios
        .get("http://localhost:3000/kpi-daily")
        // .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // console.log(response.data.slice(0, 10));
          // console.log(response.data[0].name);
          return response.data.slice(0, 10);
          // return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });
    },
    async getData_VOC발생Top10Worst() {
      this.items_VOC발생Top10Worst = await this.$axios
        .get("http://localhost:3000/top10worst-voc")
        // .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // console.log(response.data.slice(0, 10));
          // console.log(response.data[0].name);
          return response.data.slice(0, 10);
          // return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });
    },
    async getData_VoLTE절단율Top10Worst() {
      this.items_VoLTE절단율Top10Worst = await this.$axios
        .get("http://localhost:3000/top10worst-volte")
        // .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // console.log(response.data.slice(0, 10));
          // console.log(response.data[0].name);
          return response.data.slice(0, 10);
          // return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });
    },
    async getData_5G오프로딩율Top10Worst() {
      this.items_5G오프로딩율Top10Worst = await this.$axios
        .get("http://localhost:3000/top10worst-offloading")
        // .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // console.log(response.data.slice(0, 10));
          // console.log(response.data[0].name);
          return response.data.slice(0, 10);
          // return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });
    },
  },
  mounted() {
    this.getData_briefStat();
    this.getData_KPIDaily();
    this.getData_VOC발생Top10Worst();
    this.getData_VoLTE절단율Top10Worst();
    this.getData_5G오프로딩율Top10Worst();
  },

  data: function () {
    return {
      briefStat: [],
      items_VOC발생Top10Worst: [],
      headers_VOC발생Top10Worst: [],

      items_VoLTE절단율Top10Worst: [],
      headers_VoLTE절단율Top10Worst: [],

      items_5G오프로딩율Top10Worst: [],
      headers_5G오프로딩율Top10Worst: [],
    };
  },
};
</script>
