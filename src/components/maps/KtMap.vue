<template>
  <div id="kmap" class="ollehmap"></div>
</template>

<script>
import test from "@/map/ktmap-all-desktop";

/* global olleh */

export default {
  data: () => ({}),
  methods: {
    initMap() {
      const container = document.getElementById("kmap");
      const options = {
        center: new olleh.maps.UTMK(958386.063532902, 1941447.5761742294),
        zoom: 9,
        mapTypeId: "ROADMAP",
      };
      console.log(options);
      const map = new olleh.maps.Map(container, options);
      console.log(map);
      console.log("init Map completed...");
    },
  },
  mounted() {
    console.log("test: ", test);
    console.log(olleh);
    console.log(this.$refs.kmap);
    console.log("KtMap Component Mounted...");
    this.initMap();

    // if (!window.olleh || !window.olleh.maps) {
    //   console.log(this.map);
    //   this.initMap();
    // } else {
    //   this.initMap();
    // }
  },
};
</script>
<style>
@import "@/map/ktmap.css";
#kmap {
  /* margin-left: 8px; */
  border-color: cornflowerblue;
  border-radius: 1%;
  width: 100%;
  height: 575px;
}
#center {
  margin-left: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
}
</style>
