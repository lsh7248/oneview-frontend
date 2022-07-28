<template>
  <v-container fluid class="mt-n14">
    <v-row dense>
      <v-col sd="12" md="6" lg="4">
        <v-card tile elevation="3" class="pa-0 mx-0">
          <v-list-item class="pa-0 ma-0">
            <v-list-item-content class="pa-0 ma-0">
              <v-list-item-title
                class="text-h5 text-center light-blue pa-4 ma-0 white--text"
              >
                VoLTE 절 단율 (전주 대비)
                <!-- {{ api_v1_volte_kpi_day.title }} -->
                <!-- {{ title__api_v1_volte_kpi_day }} -->
              </v-list-item-title>
              <v-row
                v-if="api_v1_volte_kpi_day.score !== null"
                class="ma-0 pa-3 text-h4 text-center"
                style="color: orange"
              >
                <v-spacer></v-spacer>
                {{ api_v1_volte_kpi_day.score.toFixed(1) + "%" }}
                <up-down-arrow
                  class="mx-2"
                  :value="api_v1_volte_kpi_day.rate"
                  :text="api_v1_volte_kpi_day.rate.toFixed(1) + '%p'"
                ></up-down-arrow>

                <v-spacer></v-spacer>
              </v-row>
              <!-- <v-row
                v-else
                class="ma-0 pa-3 text-h6 text-center"
                style="color: lightgray"
              >
                <v-spacer></v-spacer>
                No data available
                <v-spacer></v-spacer>
              </v-row> -->
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col sd="12" md="6" lg="4">
        <v-card tile elevation="3" class="pa-0 mx-0">
          <v-list-item class="pa-0 ma-0">
            <v-list-item-content class="pa-0 ma-0">
              <v-list-item-title
                class="text-h5 text-center light-blue pa-4 ma-0 white--text"
              >
                VoLTE 절단율 (전주 대비)
                <!-- {{ api_v1_volte_kpi_day.title }} -->
                <!-- {{ title__api_v1_volte_kpi_day }} -->
              </v-list-item-title>
              <v-row
                v-if="api_v1_volte_kpi_day.score !== null"
                class="ma-0 pa-3 text-h4 text-center"
                style="color: orange"
              >
                <v-spacer></v-spacer>
                {{ api_v1_volte_kpi_day.score.toFixed(1) + "%" }}
                <up-down-arrow
                  class="mx-2"
                  :value="api_v1_volte_kpi_day.rate"
                  :text="api_v1_volte_kpi_day.rate.toFixed(1) + '%p'"
                ></up-down-arrow>

                <v-spacer></v-spacer>
              </v-row>
              <!-- <v-row
                v-else
                class="ma-0 pa-3 text-h6 text-center"
                style="color: lightgray"
              >
                <v-spacer></v-spacer>
                No data available
                <v-spacer></v-spacer>
              </v-row> -->
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col sd="12">
        <!-- <v-col sd="12" md="6" lg="4"> -->
        <v-card tile elevation="3" class="pa-0 mx-0">
          <v-list-item class="pa-0 ma-0">
            <v-list-item-content class="pa-0 ma-0">
              <v-list-item-title
                class="text-h5 text-center light-blue pa-4 ma-0 white--text"
              >
                5G 오프로딩율 (전주 대비)
                <!-- {{ api_v1_5g_kpi_day.title }} -->
                <!-- {{ title__api_v1_5g_kpi_day }} -->
              </v-list-item-title>

              <v-row
                v-if="api_v1_5g_kpi_day.score !== null"
                class="ma-0 pa-3 text-h4 text-center"
                style="color: orange"
              >
                <v-spacer></v-spacer>
                {{ api_v1_5g_kpi_day.score.toFixed(1) + "%" }}
                <up-down-arrow
                  class="mx-2"
                  :value="api_v1_5g_kpi_day.rate"
                  :text="api_v1_5g_kpi_day.rate.toFixed(1) + '%p'"
                ></up-down-arrow>
                <v-spacer></v-spacer>
              </v-row>
              <!-- <v-row
                v-else
                class="ma-0 pa-3 text-h6 text-center"
                style="color: lightgray"
              >
                <v-spacer></v-spacer>
                No data available
                <v-spacer></v-spacer>
              </v-row> -->
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col sd="12" md="6" lg="4">
        <v-card tile elevation="3" class="pa-0 mx-0">
          <!-- :title="chartTitle__품질_VOC_일별_추이_건" -->
          <line-chart
            v-if="false && chartTitle__품질_VOC_일별_추이_건 !== null"
            :title="chartTitle__품질_VOC_일별_추이_건"
            :labels="chartLabels__품질_VOC_일별_추이_건"
            :datasets="chartDatasets__품질_VOC_일별_추이_건"
            class="elevation-1 pa-0 ma-0"
            :style="{ marginTop: '-10px', height: '395px' }"
          />
          <v-data-table
            v-if="tableCaption__VOC_발생_Top_10_Worst !== null"
            :caption="tableCaption__VOC_발생_Top_10_Worst"
            :headers="tableHeaders__VOC_발생_Top_10_Worst"
            :items="tableItems__VOC_발생_Top_10_Worst"
            dense
            hide-default-footer
            class="elevation-1 pa-0 ma-0"
            :style="{
              marginTop: '10px',
              whiteSpace: 'nowrap',
              height: '395px',
            }"
          >
          </v-data-table>
          <!-- <v-row
            v-else
            class="ma-0 pa-3 text-h6 text-center"
            style="color: lightgray"
          >
            <v-spacer></v-spacer>
            No data available
            <v-spacer></v-spacer>
          </v-row> -->
        </v-card>
      </v-col>

      <v-col sd="12" md="6" lg="4">
        <v-card tile elevation="3" class="pa-0 mx-0">
          <line-chart
            v-if="chartTitle__VoLTE_절단율_일별_추이_percent !== null"
            :title="chartTitle__VoLTE_절단율_일별_추이_percent"
            :labels="chartLabels__VoLTE_절단율_일별_추이_percent"
            :datasets="chartDatasets__VoLTE_절단율_일별_추이_percent"
            class="elevation-1 pa-0 ma-0"
            :style="{
              marginTop: `-10px`,
              height: `395px`,
            }"
            legendPosition="bottom"
            :yAxes="[
              {
                id: 'l',
                type: 'linear',
                position: 'left',
              },
              {
                id: 'r',
                type: 'linear',
                position: 'right',
                ticks: {
                  // max: 1,
                  // min: 0,
                  stepSize: 5000,
                  // reverse: true,
                },
              },
            ]"
          />

          <v-data-table
            v-if="false && tableCaption__VoLTE_절단율_Top_10_Worst !== null"
            :caption="tableCaption__VoLTE_절단율_Top_10_Worst"
            :headers="tableHeaders__VoLTE_절단율_Top_10_Worst"
            :items="tableItems__VoLTE_절단율_Top_10_Worst"
            dense
            hide-default-footer
            class="elevation-1 pa-0 ma-0"
            :style="{
              marginTop: '10px',
              whiteSpace: 'nowrap',
              height: '395px',
            }"
          >
          </v-data-table>
          <!-- <v-row
            v-else
            class="ma-0 pa-3 text-h6 text-center"
            style="color: lightgray"
          >
            <v-spacer></v-spacer>
            No data available
            <v-spacer></v-spacer>
          </v-row> -->
        </v-card>
      </v-col>

      <!-- <v-col lg="4"> -->
      <v-col sd="12" md="6" lg="4">
        <v-card tile elevation="3" class="pa-0 mx-0">
          <bar-chart
            v-if="chartTitle__5G_오프로딩율_percent_부서별_비교 !== null"
            :title="chartTitle__5G_오프로딩율_percent_부서별_비교"
            :labels="chartLabels__5G_오프로딩율_percent_부서별_비교"
            :datasets="chartDatasets__5G_오프로딩율_percent_부서별_비교"
            class="elevation-1 pa-0 ma-0"
            legendPosition="bottom"
            :style="{
              marginTop: `-10px`,
              height: `395px`,
            }"
          >
          </bar-chart>

          <v-data-table
            v-if="false && tableCaption__5G_오프로딩율_Top_10_Worst !== null"
            :caption="tableCaption__5G_오프로딩율_Top_10_Worst"
            :headers="tableHeaders_5G_오프로딩율_Top_10_Worst"
            :items="tableItems__5G_오프로딩율_Top_10_Worst"
            dense
            hide-default-footer
            class="elevation-1 pa-0 ma-0"
            :style="{
              marginTop: '10px',
              whiteSpace: 'nowrap',
              height: '395px',
            }"
          >
          </v-data-table>
          <!-- <v-row
            v-else
            class="ma-0 pa-3 text-h6 text-center"
            style="color: lightgray"
          >
            <v-spacer></v-spacer>
            No data available
            <v-spacer></v-spacer>
          </v-row> -->
        </v-card>
      </v-col>

      <v-col v-if="count > 4" sd="12" md="6" lg="4">
        <v-card tile elevation="3" class="pa-0 mx-0">
          <bar-chart
            v-if="chartTitle__5G_오프로딩율_percent_부서별_비교 !== null"
            :title="chartTitle__5G_오프로딩율_percent_부서별_비교"
            :labels="chartLabels__5G_오프로딩율_percent_부서별_비교"
            :datasets="chartDatasets__5G_오프로딩율_percent_부서별_비교"
            class="elevation-1 pa-0 ma-0"
            legendPosition="bottom"
            :style="{
              marginTop: `10px`,
              height: `395px`,
            }"
          ></bar-chart>
        </v-card>
      </v-col>

      <v-col v-if="count > 5" sd="12" md="6" lg="4">
        <v-card tile elevation="3" class="pa-0 mx-0">
          <v-data-table
            v-if="tableCaption__5G_오프로딩율_Top_10_Worst !== null"
            :caption="tableCaption__5G_오프로딩율_Top_10_Worst"
            :headers="tableHeaders_5G_오프로딩율_Top_10_Worst"
            :items="tableItems__5G_오프로딩율_Top_10_Worst"
            dense
            hide-default-footer
            class="elevation-1 pa-0 ma-0"
            :style="{
              marginTop: '10px',
              whiteSpace: 'nowrap',
              height: '395px',
            }"
          >
          </v-data-table>
          <!-- <v-row
            v-else
            class="ma-0 pa-3 text-h6 text-center"
            style="color: lightgray"
          >
            <v-spacer></v-spacer>
            No data available
            <v-spacer></v-spacer>
          </v-row> -->
        </v-card>
      </v-col>
      <v-col>
        <!-- <v-col sd="12" md="6" lg="4"> -->
        <v-card tile elevation="3" class="pa-0 mx-0">
          <v-data-table
            v-if="tableCaption__5G_오프로딩율_Top_10_Worst !== null"
            :caption="tableCaption__5G_오프로딩율_Top_10_Worst"
            :headers="tableHeaders_5G_오프로딩율_Top_10_Worst"
            :items="tableItems__5G_오프로딩율_Top_10_Worst"
            dense
            hide-default-footer
            class="elevation-1 pa-0 ma-0"
            :style="{
              marginTop: '10px',
              whiteSpace: 'nowrap',
              height: '395px',
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
                <voc-table class="pt-3"></voc-table>
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
                <voc-table></voc-table>
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
                <voc-table></voc-table>
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
      count: 6,
      today: new Date(),

      api_v1_voc_kpi_day: {},
      // title__api_v1_voc_kpi_day: "품질 VOC 발생 건수 (전주 대비)",
      api_v1_volte_kpi_day: {},
      // title__api_v1_volte_kpi_day: "VoLTE 절단율 (전주 대비)",
      // api_v1_5g_kpi_day: {},
      api_v1_5g_kpi_day: {
        title: "5G 오프로딩율 (전주 대비)",
        score: 80.0,
        rate: 5.0,
      },
      // title__api_v1_5g_kpi_day: "5G 오프로딩율 (전주 대비)",

      api_v1_voc_trend_day: [],
      // chartTitle__품질_VOC_일별_추이_건: "품질 VOC 일별 추이 (건)",
      chartTitle__품질_VOC_일별_추이_건: null,
      chartLabels__품질_VOC_일별_추이_건: [],
      chartDatasets__품질_VOC_일별_추이_건: [],

      api_v1_volte_fc_trend_day: [],
      api_v1_volte_trend_day: [],
      // chartTitle__VoLTE_절단율_일별_추이_percent: "VoLTE 절단율 일별 추이 (%)",
      chartTitle__VoLTE_절단율_일별_추이_percent: null,
      chartLabels__VoLTE_절단율_일별_추이_percent: [],
      chartDatasets__VoLTE_절단율_일별_추이_percent: [],

      api_v1_5g_trend_day: [],
      // chartTitle__5G_오프로딩율_percent_부서별_비교: null,
      // chartLabels__5G_오프로딩율_percent_부서별_비교: [],
      // chartDatasets__5G_오프로딩율_percent_부서별_비교: [],
      chartTitle__5G_오프로딩율_percent_부서별_비교:
        "5G오프로딩율(%) 부서별 비교",
      chartLabels__5G_오프로딩율_percent_부서별_비교: [
        "충정",
        "청량",
        "지하철",
      ],
      chartDatasets__5G_오프로딩율_percent_부서별_비교: [
        {
          label: "오프로딩율",
          backgroundColor: "OrangeRed",
          data: [77, 82, 80],
        },
        {
          label: "전주 오프로딩율",
          backgroundColor: "DeepSkyBlue",
          data: [79, 80, 83],
        },
      ],

      api_v1_voc_bts_list: [],
      // tableCaption__VOC_발생_Top_10_Worst: "VOC 발생 Top 10 Worst",
      tableCaption__VOC_발생_Top_10_Worst: null,
      tableItems__VOC_발생_Top_10_Worst: [],
      tableHeaders__VOC_발생_Top_10_Worst: [],

      api_v1_volte_bts_list: [],
      // tableCaption__VoLTE_절단율_Top_10_Worst: "VoLTE 절단율 Top 10 Worst",
      tableCaption__VoLTE_절단율_Top_10_Worst: null,
      tableItems__VoLTE_절단율_Top_10_Worst: [],
      tableHeaders__VoLTE_절단율_Top_10_Worst: [],

      api_v1_5g_bts_list: [],
      // tableCaption__5G_오프로딩율_Top_10_Worst: null,
      // tableItems__5G_오프로딩율_Top_10_Worst: [],
      // tableHeaders_5G_오프로딩율_Top_10_Worst: [],
      tableCaption__5G_오프로딩율_Top_10_Worst: "5G 오프로딩율 Top 10 Worst",
      tableItems__5G_오프로딩율_Top_10_Worst: [
        {
          기지국명: "XX 사거리",
          "목표 대비(%p)": -50,
          주소: "XX동 XX번지",
          team: "XX팀",
          구분: "XX 1조",
          foo: "XX",
        },
        {
          기지국명: "XX 사거리",
          "목표 대비(%p)": -30,
          주소: "XX동 XX번지",
          team: "XX팀",
          구분: "XX 1조",
          foo: "XX",
        },
        {
          기지국명: "XX 사거리",
          "목표 대비(%p)": -20,
          주소: "XX동 XX번지",
          team: "XX팀",
          구분: "XX 1조",
          foo: "XX",
        },
        {
          기지국명: "XX 사거리",
          "목표 대비(%p)": -2,
          주소: "XX동 XX번지",
          team: "XX팀",
          구분: "XX 1조",
          foo: "XX",
        },
        {
          기지국명: "XX 사거리",
          "목표 대비(%p)": -1,
          주소: "XX동 XX번지",
          team: "XX팀",
          구분: "XX 1조",
          foo: "XX",
        },
        {
          기지국명: "XX 사거리",
          "목표 대비(%p)": -1,
          주소: "XX동 XX번지",
          team: "XX팀",
          구분: "XX 1조",
          foo: "XX",
        },
        {
          기지국명: "XX 사거리",
          "목표 대비(%p)": -1,
          주소: "XX동 XX번지",
          team: "XX팀",
          구분: "XX 1조",
          foo: "XX",
        },
        {
          기지국명: "XX 사거리",
          "목표 대비(%p)": -1,
          주소: "XX동 XX번지",
          team: "XX팀",
          구분: "XX 1조",
          foo: "XX",
        },
        {
          기지국명: "XX 사거리",
          "목표 대비(%p)": -1,
          주소: "XX동 XX번지",
          team: "XX팀",
          구분: "XX 1조",
          foo: "XX",
        },
        {
          기지국명: "XX 사거리",
          "목표 대비(%p)": -1,
          주소: "XX동 XX번지",
          team: "XX팀",
          구분: "XX 1조",
          foo: "XX",
        },
      ],

      tableHeaders_5G_오프로딩율_Top_10_Worst: [
        {
          class: "light-blue lighten-5",
          text: "기지국명",
          // align: "end",
          // sortable: false,
          value: "기지국명",
        },
        {
          class: "light-blue lighten-5",
          text: "목표 대비(%p)",
          align: "end",
          // sortable: false,
          value: "목표 대비(%p)",
        },
        {
          class: "light-blue lighten-5",
          text: "주소",
          // align: "end",
          // sortable: false,
          value: "주소",
        },
        {
          class: "light-blue lighten-5",
          text: "구분",
          // align: "end",
          // sortable: false,
          value: "구분",
        },
      ],
    };
  },
  watch: {},

  methods: {
    date2yyyyMMdd(d, delimiter = "") {
      // var mm = d.getMonth() + 1;
      // mm = mm < 10 ? "0" + mm : mm;
      // var dd = d.getDate();
      // dd = dd < 10 ? "0" + dd : dd;
      // return d.getFullYear() + delimiter + mm + delimiter + dd;
      return d.toISOString().substring(0, 10).replace(/-/g, delimiter);
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

    hunt(
      marks = ["2022-06-02", "2022-06-03"],
      keynameMark = "날짜",
      keynameTrophy = "VOC 건수",
      dataJungle = [
        {
          날짜: "2022-06-01",
          "VOC 건수": 307,
          "VoLTE 절단율(%)": 0.1,
          "5G 오프로딩율(%)": 5.5,
        },
        {
          날짜: "2022-06-02",
          "VOC 건수": 200,
          "VoLTE 절단율(%)": 0.2,
          "5G 오프로딩율(%)": 10.1,
        },
      ],
      substitute4null = null,
      shouldFFO = true,
      shouldBeSurjective = true
    ) {
      var trophies = [];
      marks.forEach((x) => {
        try {
          if (shouldFFO) {
            trophies.push(
              dataJungle.find((element) => {
                if (element[keynameMark] === x) {
                  return true;
                }
              })[keynameTrophy]
            );
          } else {
            trophies.push(
              dataJungle.filter((element) => {
                if (element[keynameMark] === x) {
                  return true;
                }
              })[keynameTrophy]
            );
          }
        } catch (error) {
          if (shouldBeSurjective) {
            trophies.push(substitute4null);
          }
        }
      });
      return trophies;
    },

    async fetch__api_v1_voc_kpi_day() {
      this.api_v1_voc_kpi_day = await this.$axios
        .get(
          this.$prefixAPIURL + "voc/kpi-day?team=전남엔지니어링부&date=20220514"
        )
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });
    },
    async fetch__api_v1_volte_kpi_day() {
      this.api_v1_volte_kpi_day = await this.$axios
        .get(
          this.$prefixAPIURL +
            "volte/kpi-day?team=전남엔지니어링부&date=20220514"
        )
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });
    },
    async fetch__api_v1_5g_kpi_day() {
      this.api_v1_5g_kpi_day = await this.$axios
        .get(
          this.$prefixAPIURL + "5g/kpi-day?team=전남엔지니어링부&date=20220514"
        )
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });
    },
    async fetch__api_v1_voc_trend_day() {
      let res = await this.$axios
        // .get("http://localhost:3000/api-v1-voc-trend-day")
        .get(
          this.$prefixAPIURL +
            "voc/trend-day?team=전남엔지니어링부&start_date=20220501&end_date=20220614"
        )
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });

      if (res.length == 0) {
        this.chartTitle__품질_VOC_일별_추이_건 = null;
        return;
      } else {
        this.chartTitle__품질_VOC_일별_추이_건 = "품질VOC(건) 일별 추이";
      }

      this.chartLabels__품질_VOC_일별_추이_건 = this.getSequentialDates(
        "2022-05-08",
        "2022-05-14",
        (d) => {
          const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
          return WEEKDAY[d.getDay()];
        }
      );

      let data0 = this.hunt(
        this.getSequentialDates("2022-05-08", "2022-05-14", (d) => {
          return d.toISOString().substring(0, 10).replace(/-/g, "");
        }),
        "date",
        "value",
        res,
        0
      );
      let data1 = this.hunt(
        this.getSequentialDates("2022-05-01", "2022-05-07", (d) => {
          return d.toISOString().substring(0, 10).replace(/-/g, "");
        }),
        "date",
        "value",
        res,
        0
      );
      this.chartDatasets__품질_VOC_일별_추이_건 = [
        {
          label: "VOC",
          data: data0,

          backgroundColor: "transparent",
          borderColor: "OrangeRed",
          pointBackgroundColor: "OrangeRed",
          pointStyle: "rectRot",
          pointRadius: 5,
        },
        {
          label: "전주 VOC ",
          data: data1,
          backgroundColor: "transparent",
          borderColor: "DeepSkyBlue",
          pointBackgroundColor: "DeepSkyBlue",
          pointStyle: "rectRot",
          pointRadius: 5,
        },
      ];
    },

    async fetch__api_v1_volte_trend_day() {
      let res = await this.$axios
        .get(
          this.$prefixAPIURL +
            "volte/trend-day?team=전남엔지니어링부&start_date=20220501&end_date=20220514"
        )
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });

      this.api_v1_volte_fc_trend_day = await this.$axios
        .get(
          this.$prefixAPIURL +
            "volte/fc/trend-day?start_date=20220501&end_date=20220514"
        )
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });

      this.api_v1_volte_fc_trend_day.forEach((element) => {
        element["FC_373&9563"] = element.fc_373 + element.fc_9563;
      });

      if (res.length == 0) {
        this.chartTitle__VoLTE_절단율_일별_추이_percent = null;
        return;
      } else {
        this.chartTitle__VoLTE_절단율_일별_추이_percent =
          // "VoLTE 절단율 일별 추이 (%)";
          "VoLTE절단율(%) FC373&9563(건) 일별 추이";
      }
      this.chartLabels__VoLTE_절단율_일별_추이_percent =
        this.getSequentialDates("2022-05-08", "2022-05-14", (d) => {
          const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
          return WEEKDAY[d.getDay()];
        });
      let data0 = this.hunt(
        this.getSequentialDates("2022-05-08", "2022-05-14", (d) => {
          return d.toISOString().substring(0, 10).replace(/-/g, "");
        }),
        "date",
        "value",
        res,
        0
      );
      let data1 = this.hunt(
        this.getSequentialDates("2022-05-08", "2022-05-14", (d) => {
          return d.toISOString().substring(0, 10).replace(/-/g, "");
        }),
        "date",
        "FC_373&9563",
        this.api_v1_volte_fc_trend_day,
        0
      );
      let data2 = this.hunt(
        this.getSequentialDates("2022-05-01", "2022-05-07", (d) => {
          return d.toISOString().substring(0, 10).replace(/-/g, "");
        }),
        "date",
        "value",
        res,
        0
      );
      let data3 = this.hunt(
        this.getSequentialDates("2022-05-01", "2022-05-07", (d) => {
          return d.toISOString().substring(0, 10).replace(/-/g, "");
        }),
        "date",
        "FC_373&9563",
        this.api_v1_volte_fc_trend_day,
        0
      );

      this.chartDatasets__VoLTE_절단율_일별_추이_percent = [
        {
          yAxisID: "l",
          label: "VoLTE절단율",
          data: data0,
          backgroundColor: "transparent",
          borderColor: "OrangeRed",
          pointBackgroundColor: "OrangeRed",
          pointStyle: "rectRot",
          pointRadius: 5,
        },
        {
          yAxisID: "r",
          label: "FC373&9563",
          data: data1,
          backgroundColor: "transparent",
          borderColor: "Pink",
          pointBackgroundColor: "Pink",
          pointStyle: "rectRot",
          pointRadius: 5,
        },
        {
          yAxisID: "l",
          label: "전주 절단율",
          data: data2,
          backgroundColor: "transparent",
          borderColor: "DeepSkyBlue",
          pointBackgroundColor: "DeepSkyBlue",
          pointStyle: "rectRot",
          pointRadius: 5,
        },
        {
          yAxisID: "r",
          label: "전주 FC",
          data: data3,
          backgroundColor: "transparent",
          borderColor: "lightBlue",
          pointBackgroundColor: "lightBlue",
          pointStyle: "rectRot",
          pointRadius: 5,
        },
      ];
    },

    async fetch__api_v1_5g_trend_day() {
      let res = await this.$axios
        .get("http://localhost:3000/api-v1-5g-trend-day")
        // .get(
        //   ""
        // )
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });

      if (res.length == 0) {
        this.chartTitle__5G_오프로딩율_percent_부서별_비교 = null;
        return;
      } else {
        this.chartTitle__5G_오프로딩율_percent_부서별_비교 =
          "5G오프로딩율(%) 부서별 비교";
      }
      this.chartLabels__5G_오프로딩율_percent_부서별_비교 = [];
      Object.keys(res[res.length - 1]).forEach((element) => {
        if (element !== "date") {
          this.chartLabels__5G_오프로딩율_percent_부서별_비교.push(element);
        }
      });

      let data0 = [];
      this.chartLabels__5G_오프로딩율_percent_부서별_비교.forEach((element) => {
        if (element !== "date") {
          data0.push(res[res.length - 1][element]);
        }
      });
      let data1 = [];
      this.chartLabels__5G_오프로딩율_percent_부서별_비교.forEach((element) => {
        if (element !== "date") {
          data1.push(res[res.length - 8][element]);
        }
      });

      this.chartDatasets__5G_오프로딩율_percent_부서별_비교 = [
        {
          label: "오프로딩율",
          backgroundColor: "OrangeRed",
          data: data0,
        },
        {
          label: "전주 오프로딩율",
          backgroundColor: "DeepSkyBlue",
          data: data1,
        },
      ];
    },

    async fetch__api_v1_voc_bts_list() {
      let res = await this.$axios
        .get(
          this.$prefixAPIURL +
            "voc/worst?limit=10&team=전남엔지니어링부&start_date=20220508&end_date=20220514"
        )
        .then(function (response) {
          return response.data.slice(0, 10);
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });

      if (res.length == 0) {
        this.tableCaption__VOC_발생_Top_10_Worst = null;
        return;
      } else {
        this.tableCaption__VOC_발생_Top_10_Worst = "VOC 발생 Top 10 Worst";
      }
      let items = [];
      res.forEach((element) => {
        items.push({
          기지국명: element["기지국명"],
          "발생 건수": element["voc_cnt"],
          주소: element["juso"],
          // 팀: element["team"],
          관할: element["jo"],
        });
      });
      this.tableItems__VOC_발생_Top_10_Worst = items;

      var headers = [];
      Object.keys(items[0]).forEach((element) => {
        switch (element) {
          case "발생 건수":
            headers.push({
              class: "light-blue lighten-5",
              text: element,
              align: "end",
              // sortable: false,
              value: element,
            });
            break;
          default:
            headers.push({
              class: "light-blue lighten-5",
              text: element,
              // align: "start",
              // sortable: false,
              value: element,
            });
            break;
        }
      });
      this.tableHeaders__VOC_발생_Top_10_Worst = headers;
    },

    async fetch__api_v1_volte_bts_list() {
      let res = await this.$axios
        .get(
          this.$prefixAPIURL +
            "volte/worst?limit=10&team=전남엔지니어링부&start_date=20220508&end_date=20220514"
        )
        .then(function (response) {
          return response.data.slice(0, 10);
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });

      if (res.length == 0) {
        this.tableCaption__VoLTE_절단율_Top_10_Worst = null;
        return;
      } else {
        this.tableCaption__VoLTE_절단율_Top_10_Worst =
          "VoLTE 절단율 Top 10 Worst";
      }
      let items = [];
      res.forEach((element) => {
        items.push({
          기지국명: element["기지국명"],
          "절단율(%)": element["cut_ratio"].toFixed(1),
          // 시도: element["sum_try"],
          // 성공: element["sum_suc"],
          // // 실패: element["sum_fail"],
          // 절단: element["sum_cut"],
          주소: element["juso"],
          // 팀: element["team"],
          관할: element["jo"],
        });
      });

      this.tableItems__VoLTE_절단율_Top_10_Worst = items;
      var headers = [];
      Object.keys(items[0]).forEach((element) => {
        switch (element) {
          case "절단율(%)":
            headers.push({
              class: "light-blue lighten-5",
              text: element,
              align: "end",
              // sortable: false,
              value: element,
            });
            break;
          default:
            headers.push({
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
      this.tableHeaders__VoLTE_절단율_Top_10_Worst = headers;
    },

    async fetch__api_v1_5g_bts_list() {
      let res = await this.$axios
        .get("http://localhost:3000/api-v1-5g-worst")
        // .get(
        //   ""
        // )
        .then(function (response) {
          return response.data.slice(0, 10);
        })
        .catch(function (error) {
          console.log(error);
          return [];
        });

      if (res.length == 0) {
        this.tableCaption__5G_오프로딩율_Top_10_Worst = null;
        return;
      } else {
        this.tableCaption__5G_오프로딩율_Top_10_Worst =
          "5G 오프로딩율 Top 10 Worst";
      }

      let items = [];
      res.forEach((element) => {
        items.push({
          기지국명: element["기지국명"],
          "목표 대비(%p)": element["5G 오프로딩율 목표 대비(%p)"].toFixed(1),
          주소: element["juso"],
          // 팀: element["team"],
          // 관할: element["jo"],
          구분: element["foo"],
        });
      });
      this.tableItems__5G_오프로딩율_Top_10_Worst = items;
      var headers = [];
      Object.keys(items[0]).forEach((element) => {
        switch (element) {
          case "목표 대비(%p)":
            headers.push({
              class: "light-blue lighten-5",
              text: element,
              align: "end",
              // sortable: false,
              value: element,
            });
            break;
          default:
            headers.push({
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
      this.tableHeaders_5G_오프로딩율_Top_10_Worst = headers;
    },
  },

  mounted() {
    this.fetch__api_v1_voc_kpi_day();
    this.fetch__api_v1_volte_kpi_day();
    // this.fetch__api_v1_5g_kpi_day();

    this.fetch__api_v1_voc_trend_day();
    this.fetch__api_v1_volte_trend_day();
    // this.fetch__api_v1_5g_trend_day();

    this.fetch__api_v1_voc_bts_list();
    this.fetch__api_v1_volte_bts_list();
    // this.fetch__api_v1_5g_bts_list();
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
