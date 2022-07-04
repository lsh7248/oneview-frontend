<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,

  props: {
    title: String,
    labels: {
      type: Array,
      default: () => [],
    },
    datasets: [],
    yAxes: {
      type: Array,
      default: () => [],
    },
    // legendPosition: String,

    legendPosition: {
      type: String,
      default: "chartArea",
    },
  },

  watch: {
    labels: function () {
      // this.destroy();
      this.render();
    },
    datasets: function () {
      // this.destroy();
      this.render();
    },
  },
  methods: {
    render: function () {
      // console.log("labels", this.labels);
      // console.log("datasets", this.datasets);
      this.renderChart(
        {
          labels: this.labels,
          datasets: this.datasets,
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            // align: "center",
            // display: true,
            // fullWidth: true,
            // labels: {
            //   boxWidth: 40,
            //   // generateLabels: ƒ(chart),
            //   padding: 10,
            //   fontSize: 12,
            //   fontColor: "rgba(0, 0, 0, 0.6)",
            // },
            display: true,
            position: this.legendPosition,
            // position: "top",
            // position: "bottom",

            // position: "chartArea",
          },
          title: {
            display: true,
            text: this.title,
          },
          scales: {
            yAxes: this.yAxes,
          },
        }
      );
    },
  },
  mounted() {
    this.render();
  },
};
</script>
