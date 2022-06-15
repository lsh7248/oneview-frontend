<template>
  <v-container fluid>
    <v-row align-content="center" justify="center">
      <v-card style="margin: 15px; padding: 30px; width: 100%">
        <v-row>
          <v-col cols="auto">
            <v-card-title>검색창</v-card-title>
          </v-col>
          <v-col cols="2">
            <v-text-field label="고객계약번호"></v-text-field>
          </v-col>
          <v-col cols="auto">
            <v-card-text>분석시간대(VOC발생직전)</v-card-text>
          </v-col>
          <v-col cols="auto">
            <v-checkbox v-model="checkbox" :label="`1H `"></v-checkbox>
          </v-col>
          <v-col cols="auto">
            <v-checkbox v-model="checkbox" :label="`3H `"></v-checkbox>
          </v-col>
          <v-col cols="auto">
            <v-checkbox v-model="checkbox" :label="`12H `"></v-checkbox>
          </v-col>
          <v-col cols="auto">
            <v-checkbox v-model="checkbox" :label="`24H `"></v-checkbox>
          </v-col>
          <v-col cols="1">
            <v-btn class="ma-2" color="primary"> 조회 </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-card-title>VOC 목록보기</v-card-title>
          </v-col>
          <v-col cols="auto">
            <v-btn class="ma-2" color="primary"> 조회 </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-card-title>고객정보</v-card-title>
          </v-col>
          <v-col cols="auto"
            ><v-card-text>단말기명 | {{ client_voc.UE }}</v-card-text></v-col
          >
          <v-col cols="auto"
            ><v-card-text>요금제 | {{ client_voc.FEE }}</v-card-text></v-col
          >
          <v-col cols="auto"
            ><v-card-text>VOC유형 | {{ client_voc.VOCTYPE }}</v-card-text>
          </v-col>
          <v-col cols="auto"
            ><v-card-text>TT주소 | {{ client_voc.TTADD }}</v-card-text>
          </v-col>
          <v-col cols="auto">
            <v-btn class="ma-2" color="primary"> VOC 메모보기 </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
    <v-row align-content="center" justify="center">
      <v-col cols="6" md="6" sm="6" class="pa-3">
        <v-card style="margin: 5px; padding: 20px">
          <v-row>
            <v-card-title>지도분석</v-card-title>
          </v-row>
          <v-row>
            <kt-map />
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6" md="6" sm="6" class="pa-3">
        <v-card style="margin: 5px; padding: 10px">
          <v-row>
            <v-col cols="10">
              <v-card-title>VOC고객 기지국 품질 요약</v-card-title>
            </v-col>
            <v-col cols="2">
              <v-btn class="ma-2" color="primary">상세보기</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-data-table
                :headers="headers"
                :items="rulist"
                :items-per-page="10"
                class="elevation-1"
                height="575px"
              ></v-data-table>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import KtMap from "@/components/maps/KtMap.vue";

export default {
  name: "MapView",
  components: {
    KtMap,
  },
  data: () => ({
    client_voc: {
      UE: "IPHONE12 MINI",
      FEE: "LTE라이트",
      VOCTYPE: "기술TT",
      TTADD: "서울특별시 마포구 창전동 서강로 60",
    },

    headers: [
      {
        text: "기지국 명",
        align: "start",
        sortable: false,
        value: "name",
      },
      {text: "VOLTE 절단", value: "volte"},
      {text: "S1AP 불량", value: "s1ap"},
      {text: "MDT RSRP 불량", value: "rsrp"},
      {text: "MDT RIP 불량", value: "rip"},
      {text: "Iron (%)", value: "iron"},
    ],
    rulist: [
      {
        name: "우면_KT연구개발센터",

        volte: 159,
        s1ap: 6.0,
        rsrp: 24,
        rip: 4.0,
        iron: "1%",
      },
      {
        name: "우면_양재천공원",

        volte: 237,
        s1ap: 9.0,
        rsrp: 37,
        rip: 4.3,
        iron: "1%",
      },
      {
        name: "우면_한라아파트",

        volte: 262,
        s1ap: 16.0,
        rsrp: 23,
        rip: 6.0,
        iron: "7%",
      },
    ],
  }),
};
</script>
