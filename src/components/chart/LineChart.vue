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
            position: "chartArea",
          },
          title: {
            display: true,
            text: this.title,
          },
        },
      );
    },
  },
  mounted() {
    this.render();
  },
};
</script>
