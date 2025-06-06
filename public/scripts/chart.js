const ctx = document.getElementById("canvas");

const chart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: [],
    datasets: [
      {
        label: "Gradifier",
        data: [],
        backgroundColor: [
          "#F0A04B",
          "#E16A54",
          "#F39E60",
          "#537D5D",
          "#4E6688",
          "#143D60",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "right",
      },
    },
  },
});

function updateChart(chart, labels, newData) {
  chart.data.labels = labels;
  chart.data.datasets[0].data = newData;
  chart.update();
}

chart.resize(400, 400);

function main() {
  setInterval(() => {
    const data = {
      "33bcp": Math.floor(Math.random() * 100),
      "30bcp": Math.floor(Math.random() * 100),
      "25bcp": Math.floor(Math.random() * 100),
      "38tr": Math.floor(Math.random() * 100),
      "36tr": Math.floor(Math.random() * 100),
      "30tr": Math.floor(Math.random() * 100),
    };

    const chartLabels = Object.keys(data);
    const chartData = Object.values(data);

    updateChart(chart, chartLabels, chartData);
  }, 1000);
}

main();
