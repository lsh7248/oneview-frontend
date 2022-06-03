<template>
  <div id="kmap" class="ollehmap"></div>
</template>

<script>
import test from "@/map/ktmap-all-desktop";

/* global olleh */

export default {
  data: () => ({
    map: null,
    markers: [],
    position: [
      {
        title: "시험",
        UTMK: new olleh.maps.UTMK(958386.063532902, 1941447.5761742294),
      },
    ],
  }),
  methods: {
    initMap() {
      const container = document.getElementById("kmap");
      const options = {
        center: new olleh.maps.UTMK(958386.063532902, 1941447.5761742294),
        zoom: 9,
        mapTypeId: "ROADMAP",
      };
      console.log(options);
      this.map = new olleh.maps.Map(container, options);
      console.log("init Map completed...");
    },
    displayMarkers() {
      const marker = new olleh.maps.overlay.Marker({
        position: new olleh.maps.UTMK(958386.063532902, 1941447.5761742294),
        title: "서초IC",
        caption: "마커",
        animation: olleh.maps.overlay.Marker.BOUNCE,
        draggable: true,
        DEFAULT_ICON: {
          url: olleh.maps.env.RESOURCE_URL + "img/markers.png",
          size: new olleh.maps.Size(28, 40),
          origin: new olleh.maps.Point(0, 1107),
        },
      });
      marker.setMap(this.map);
      marker.onEvent("position_changed", function () {
        alert("위치변경");
      });
    },
  },
  mounted() {
    console.log("test: ", test);
    console.log(olleh);
    console.log(this.$refs.kmap);
    console.log("KtMap Component Mounted...");
    this.initMap();
    this.displayMarkers();
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
  height: 660px;
}
#center {
  margin-left: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
}
</style>
