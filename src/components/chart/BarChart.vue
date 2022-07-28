<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    title: String,
    labels: {
      type: Array,
      default: () => [],
    },
    datasets: [],
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
            display: true,
            // position: "top",
            // position: "bottom",
            position: this.legendPosition,
            // position: "chartArea",
          },
          title: {
            display: true,
            text: this.title,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 50,
                  max: 100,
                  stepSize: 10,
                  reverse: false,
                  // beginAtZero: true,
                },
              },
            ],
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
