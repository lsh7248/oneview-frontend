<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "충정",
            backgroundColor: "OrangeRed",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          },
          {
            label: "청량",
            backgroundColor: "DeepSkyBlue",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          },
          {
            label: "지하철",
            backgroundColor: "LawnGreen",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          },
        ],
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
          text: "5G 오프로딩율 (%)",
        },
      },
    );
  },
};
</script>
