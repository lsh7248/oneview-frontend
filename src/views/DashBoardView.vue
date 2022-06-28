<template>
  <v-container class="white pa-2" fluid>
    <v-row dense>
      <v-col md="6" lg="4">
        <v-card tile elevation="3" class="pa-0 mx-0">
          <v-list-item class="pa-0 ma-0">
            <v-list-item-content class="pa-0 ma-0">
              <v-list-item-title
                class="text-h5 text-center light-blue pa-4 ma-0 white--text"
              >
                품질 VOC 발생 건수 (전일 대비)
              </v-list-item-title>

              <v-row
                class="ma-0 pa-3 text-h4 text-center"
                style="color: orange"
              >
                <v-spacer></v-spacer>
                {{
                  briefStat.find((element) => {
                    if (element.title === "품질 VOC 발생 건수 (전일 대비)") {
                      return true;
                    }
                  }).value + "건"
                }}
                <up-down-arrow
                  class="mx-2"
                  :value="
                    briefStat.find((element) => {
                      if (element.title === '품질 VOC 발생 건수 (전일 대비)') {
                        return true;
                      }
                    })['increase rate']
                  "
                  :text="
                    briefStat.find((element) => {
                      if (element.title === '품질 VOC 발생 건수 (전일 대비)') {
                        return true;
                      }
                    })['increase rate'] + '%'
                  "
                ></up-down-arrow>
                <v-spacer></v-spacer>
              </v-row>
            </v-list-item-content>
          </v-list-item>

          <line-chart
            title="품질 VOC 일별 추이 (건)"
            :labels="
              getSequentialDates(`2022-06-08`, `2022-06-14`, date2WeekDayKor)
            "
            :datasets="[
              {
                label: `금주`,
                data: this.makeBijectiveYs(
                  getSequentialDates(`2022-06-08`, `2022-06-14`, date2yyyyMMdd),
                  `날짜`,
                  `VOC 건수`,
                  KPIDaily
                ),

                backgroundColor: `transparent`,
                borderColor: `OrangeRed`,
                pointBackgroundColor: `OrangeRed`,
              },
              {
                label: `전주 `,
                data: this.makeBijectiveYs(
                  getSequentialDates(`2022-06-01`, `2022-06-07`, date2yyyyMMdd),
                  `날짜`,
                  `VOC 건수`,
                  KPIDaily
                ),
                backgroundColor: `transparent`,
                borderColor: `DeepSkyBlue`,
                pointBackgroundColor: `DeepSkyBlue`,
              },
            ]"
            :style="{ marginTop: `-10px`, height: `210px` }"
          />
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
        </v-card>
      </v-col>

      <v-col md="6" lg="4">
        <v-card tile elevation="3" class="pa-0 mx-0">
          <v-list-item class="pa-0 ma-0">
            <v-list-item-content class="pa-0 ma-0">
              <v-list-item-title
                class="text-h5 text-center light-blue pa-4 ma-0 white--text"
              >
                VoLTE 절단율 (전일 대비)
              </v-list-item-title>
              <v-row
                class="ma-0 pa-3 text-h4 text-center"
                style="color: orange"
              >
                <v-spacer></v-spacer>
                {{
                  briefStat.find((element) => {
                    if (element.title === "VoLTE 절단율 (전일 대비)") {
                      return true;
                    }
                  }).value + "%"
                }}
                <up-down-arrow
                  class="mx-2"
                  :value="
                    briefStat.find((element) => {
                      if (element.title === 'VoLTE 절단율 (전일 대비)') {
                        return true;
                      }
                    })['increase rate']
                  "
                  :text="
                    briefStat.find((element) => {
                      if (element.title === 'VoLTE 절단율 (전일 대비)') {
                        return true;
                      }
                    })['increase rate'] + '%p'
                  "
                ></up-down-arrow>
                <v-spacer></v-spacer>
              </v-row>
            </v-list-item-content>
          </v-list-item>

          <line-chart
            title="VoLTE 절단율 일별 추이 (%)"
            :labels="
              getSequentialDates(`2022-06-08`, `2022-06-14`, date2WeekDayKor)
            "
            :datasets="[
              {
                label: `금주`,
                data: this.makeBijectiveYs(
                  getSequentialDates(`2022-06-08`, `2022-06-14`, date2yyyyMMdd),
                  `날짜`,
                  `VoLTE 절단율(%)`,
                  KPIDaily
                ),

                backgroundColor: `transparent`,
                borderColor: `OrangeRed`,
                pointBackgroundColor: `OrangeRed`,
              },
              {
                label: `전주 `,
                data: this.makeBijectiveYs(
                  getSequentialDates(`2022-06-01`, `2022-06-07`, date2yyyyMMdd),
                  `날짜`,
                  `VoLTE 절단율(%)`,
                  KPIDaily
                ),
                backgroundColor: `transparent`,
                borderColor: `DeepSkyBlue`,
                pointBackgroundColor: `DeepSkyBlue`,
              },
            ]"
            :style="{ marginTop: `-10px`, height: `210px` }"
          />

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
        </v-card>
      </v-col>

      <v-col lg="4">
        <v-card tile elevation="3" class="pa-0 mx-0">
          <v-list-item class="pa-0 ma-0">
            <v-list-item-content class="pa-0 ma-0">
              <v-list-item-title
                class="text-h5 text-center light-blue pa-4 ma-0 white--text"
              >
                5G 오프로딩율 (전주 대비)
              </v-list-item-title>
              <v-row
                class="ma-0 pa-3 text-h4 text-center"
                style="color: orange"
              >
                <v-spacer></v-spacer>
                {{
                  briefStat.find((element) => {
                    if (element.title === "5G 오프로딩율 (전주 대비)") {
                      return true;
                    }
                  }).value + "%"
                }}
                <up-down-arrow
                  class="mx-2"
                  :value="
                    briefStat.find((element) => {
                      if (element.title === '5G 오프로딩율 (전주 대비)') {
                        return true;
                      }
                    })['increase rate']
                  "
                  :text="
                    briefStat.find((element) => {
                      if (element.title === '5G 오프로딩율 (전주 대비)') {
                        return true;
                      }
                    })['increase rate'] + '%p'
                  "
                ></up-down-arrow>
                <v-spacer></v-spacer>
              </v-row>
            </v-list-item-content>
          </v-list-item>

          <bar-chart
            :style="{ marginTop: `-10px`, height: `210px` }"
          ></bar-chart>

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
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card tile elevation="3" class="pa-0 mx-0">
          <v-expansion-panels
            dark-
            tile
            class="pa-0 ma-0"
            focusable
            accordion
            popout-
            flat-
            active-class="grey lighten-4"
          >
            <v-expansion-panel>
              <v-expansion-panel-header
                v-ripple="{ class: `white--text` }"
                style="color: DeepSkyBlue"
              >
                VOC 목록
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <VocTable class="pt-3"></VocTable>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header
                v-ripple="{ class: `white--text` }"
                style="color: DeepSkyBlue"
              >
                VoLTE 절단 이벤트
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <VocTable></VocTable>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header
                v-ripple="{ class: `white--text` }"
                style="color: DeepSkyBlue"
              >
                5G 오프로딩 트래픽
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <VocTable></VocTable>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
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
  props: {},
  components: {
    LineChart,
    // AreaChart,
    BarChart,
    // PieChart,
    // RadarChart,
    UpDownArrow,
    VocTable,
  },
  data: function () {
    return {
      today: new Date(),
      briefStat: [],

      KPIDaily: [],

      items_VOC발생Top10Worst: [],
      headers_VOC발생Top10Worst: [],

      items_VoLTE절단율Top10Worst: [],
      headers_VoLTE절단율Top10Worst: [],

      items_5G오프로딩율Top10Worst: [],
      headers_5G오프로딩율Top10Worst: [],
    };
  },
  watch: {
    items_VOC발생Top10Worst: function (n) {
      var tmplst = [];
      Object.keys(n[0]).forEach((element) => {
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
      // console.log(tmplst);
    },
    items_VoLTE절단율Top10Worst: function (n) {
      var tmplst = [];
      Object.keys(n[0]).forEach((element) => {
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
      // console.log(tmplst);
    },

    items_5G오프로딩율Top10Worst: function (n) {
      var tmplst = [];
      Object.keys(n[0]).forEach((element) => {
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
      // console.log(tmplst);
    },
  },

  methods: {
    date2yyyyMMdd(d, delimiter = "-") {
      // var mm = d.getMonth() + 1;
      // mm = mm < 10 ? "0" + mm : mm;
      // var dd = d.getDate();
      // dd = dd < 10 ? "0" + dd : dd;
      // return d.getFullYear() + delimiter + mm + delimiter + dd;
      return d.toISOString().substring(0, 10).replace("-", delimiter);
    },
    date2WeekDayKor(d) {
      const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
      return WEEKDAY[d.getDay()];
    },
    getSequentialDates(
      notLessThan,
      notGreaterThan,
      formatBeforeReturn = (d) => d
    ) {
      var dates = [];
      var curr = new Date(notLessThan);
      var last = new Date(notGreaterThan);
      while (curr.getTime() <= last.getTime()) {
        dates.push(formatBeforeReturn(curr));
        curr.setDate(curr.getDate() + 1);
      }
      return dates;
    },

    makeBijectiveYs(
      xs = [],
      keyName = "날짜",
      valueName = "VOC 건수",
      d = this.KPIDaily
    ) {
      var tmp = [];
      xs.forEach((x) => {
        try {
          tmp.push(
            d.find((element) => {
              if (element[keyName] === x) {
                return true;
              }
            })[valueName]
          );
        } catch (error) {
          tmp.push(null);
        }
      });
      return tmp;
    },
    async fetch_briefStat() {
      this.briefStat = await this.$axios
        .get(this.$apiServer + "/brief-stat")
        .then(function (response) {
          // console.log(response.data.slice(0, 10));
          return response.data;
          // return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });
    },
    async fetch_KPIDaily() {
      this.KPIDaily = await this.$axios
        .get(this.$apiServer + "/kpi-daily")
        .then(function (response) {
          // console.log(response.data.slice(0, 10));
          return response.data;
          // return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });
    },
    async fetch_VOC발생Top10Worst() {
      this.items_VOC발생Top10Worst = await this.$axios
        .get(this.$apiServer + "/top10worst-voc")
        .then(function (response) {
          // console.log(response.data.slice(0, 10));
          return response.data.slice(0, 10);
          // return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });
    },
    async fetch_VoLTE절단율Top10Worst() {
      this.items_VoLTE절단율Top10Worst = await this.$axios
        .get(this.$apiServer + "/top10worst-volte")
        .then(function (response) {
          // console.log(response.data.slice(0, 10));
          return response.data.slice(0, 10);
          // return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });
    },
    async fetch_5G오프로딩율Top10Worst() {
      this.items_5G오프로딩율Top10Worst = await this.$axios
        .get(this.$apiServer + "/top10worst-offloading")
        .then(function (response) {
          // console.log(response.data.slice(0, 10));
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
    this.fetch_briefStat();
    this.fetch_KPIDaily();
    this.fetch_VOC발생Top10Worst();
    this.fetch_VoLTE절단율Top10Worst();
    this.fetch_5G오프로딩율Top10Worst();
  },
};
</script>
<style scoped>
::v-deep .v-expansion-panel--active > .v-expansion-panel-header {
  color: white !important;
  font-size: x-large !important;
  /* font-weight: bolder !important; */
  background-color: #03a9f4 !important;
}
::v-deep .v-expansion-panel-content__wrap {
  padding: 0 !important;
}
</style>
