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
        title: "title기지국1",
        caption: "caption기지국1",
        UTMK: new olleh.maps.UTMK(958386.063532902, 1941111.5761742294),
        RUID: "RRSL11111S",
        volte: "11",
        s1ap: "11",
        mdt: "11",
      },
      {
        title: "title기지국2",
        caption: "caption기지국2",
        UTMK: new olleh.maps.UTMK(958386.0635321, 1941447.5761742452),
        RUID: "RRSL22222S",
        volte: "11",
        s1ap: "11",
        mdt: "11",
      },
      {
        title: "title기지국3",
        caption: "caption기지국3",
        UTMK: new olleh.maps.UTMK(957999.0, 1941447.5761742011),
        RUID: "RRSL33333S",
        volte: "11",
        s1ap: "11",
        mdt: "11",
      },
    ],
  }),
  methods: {
    initMap() {
      const container = document.getElementById("kmap");
      const options = {
        center: this.position[0].UTMK,
        zoom: 10,
        mapTypeId: "ROADMAP",
      };
      console.log(options);
      this.map = new olleh.maps.Map(container, options);
      console.log("init Map completed...");
    },
    displayMarkers() {
      let clusterer = new olleh.maps.overlay.MarkerClusterer({
        gap: 500,
        maxZoom: 10,
        clusterOpts: {
          displaySize: true,
          displayArea: true,
          areaStyle: true,
        },
      });

      // let paths = new olleh.maps.Path(this.position);
      // let polygon = new olleh.maps.vector.Polygon({
      //   map: this.map,
      //   paths: paths,
      //   strokeColor: "blue",
      //   strokrOpacity: 1,
      //   strokeWeight: 3,
      //   fillColor: "blue",
      //   fillOpacity: 5,
      // });
      for (var i = 0; i < this.position.length; i++) {
        let marker = new olleh.maps.overlay.Marker({
          position: this.position[i].UTMK,
          title: this.position[i].title,
          caption: this.position[i].caption,

          animation: olleh.maps.overlay.Marker.BOUNCE,
          draggable: true,
          DEFAULT_ICON: {
            url: olleh.maps.env.RESOURCE_URL + "img/markers.png",
            size: new olleh.maps.Size(28, 40),
            origin: new olleh.maps.Point(0, 1107),
          },
        });
        //정보창 설정
        let tmpl =
          "<h2>#{title} (#{RUID})</h2><br><p>volte불량: #{volte}</p><p>s1ap불량: #{s1ap}</p><p>mdt불량: #{mdt}</p>";
        let info = new olleh.maps.overlay.InfoWindow({
          pixelOffset: new olleh.maps.Point(0, 0),
          position: this.position[i].UTMK,
          content: olleh.maps.util.applyTemplate(tmpl, this.position[i]),
        });
        //마커 마우스 클릭을 통한 정보창 열기
        marker.onEvent("click", function () {
          info.open(this.map, this.marker);
        });
        //마커 위치 변경
        marker.setMap(this.map);
        marker.onEvent("position_changed", function () {
          alert("위치변경");
        });
        clusterer.add(marker);
      }
      clusterer.setMap(this.map);
      // polygon.setMap(this.map);
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
