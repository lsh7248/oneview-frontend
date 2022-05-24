<template>
  <v-container class="grey" fluid>
    <v-row dense>
      <v-col cols="6">
        <v-card class="pa-3 ma-3">
          <v-card-title> 무선 - 품질 VOC 발생건수 </v-card-title>
          <v-card-actions>
            <v-btn>dd</v-btn>
            <v-combobox clearable hide-selected multiple></v-combobox>
            <v-select :items="items" label="Solo field" solo></v-select>
          </v-card-actions>
          <v-row>
            <v-col cols="6">
              <line-chart :height="200" />
            </v-col>
            <v-col cols="6">
              <line-chart :height="200" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-3 ma-3">
          <v-card-title> 무선 품질 VOC 발생건수 </v-card-title>
          <v-card-actions>
            <v-btn>dd</v-btn>
            <v-combobox clearable hide-selected multiple></v-combobox>
            <v-select :items="items" label="Solo field" solo></v-select>
          </v-card-actions>
          <line-chart :height="200" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LineChart from "@/components/chart/LineChart.vue";
// import AreaChart from "@/components/chart/AreaChart.vue";
// import BarChart from "@/components/chart/BarChart.vue";
// import PieChart from "@/components/chart/PieChart.vue";
// import RadarChart from "@/components/chart/RadarChart.vue";

export default {
  name: "DashBoard",
  components: {
    LineChart,
    // AreaChart,
    // BarChart,
    // PieChart,
    // RadarChart,
  },

  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    events: [
      {
        event_name: "품질VOC 발생건수(전주대비)",
        score: 307,
        rate: 11.2,
      },
      {
        event_name: "VoLTE 절단율(전월대비)",
        score: 307,
        rate: 11.2,
      },
      {
        event_name: "5G 오프로딩율(전주대비)",
        score: 307,
        rate: 11.2,
      },
    ],
  }),
};
</script>
