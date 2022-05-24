<template>
  <v-container fluid>
    <v-card>
      <v-row align="center">
        <v-col class="d-flex" cols="3" sm="3">
          <v-select :items="items" filled label="Filled style" dense></v-select>
        </v-col>

        <v-col class="d-flex" cols="3" sm="3">
          <v-select :items="items" filled label="Filled style" dense></v-select>
        </v-col>

        <v-col class="d-flex" cols="3" sm="2">
          <v-select :items="items" filled label="Filled style" dense></v-select>
        </v-col>

        <v-col class="d-flex" cols="4" sm="3">
          <v-select :items="items" filled label="Filled style" dense></v-select>
        </v-col>
        <v-col class="d-flex" cols="1" sm="1">
          <v-card-actions>
            <v-btn>검</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
    <v-row align-content="center" justify="center">
      <v-col cols="5" sm="5" class="pa-3 ma-3">
        <v-card>
          <v-card-title>KT MAP</v-card-title>
          <kt-map />
        </v-card>
      </v-col>
      <v-col cols="5" sm="6" class="pa-3 ma-3">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
          height="575px"
        ></v-data-table>
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
    items: ["Sample1", "Sample2", "Sample3"],
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      {text: "Calories", value: "calories"},
      {text: "Fat (g)", value: "fat"},
      {text: "Carbs (g)", value: "carbs"},
      {text: "Protein (g)", value: "protein"},
      {text: "Iron (%)", value: "iron"},
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
    ],
  }),
};
</script>
