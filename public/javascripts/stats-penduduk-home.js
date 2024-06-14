const labels = ["Laki-Laki", "Perempuan"];

const data = {
    labels: labels,
    datasets: [
        {
            label: [""],
            backgroundColor: [
                "#62374E",
                "#007880",
                "#2D4263",
                "#ECDBBA",
                "#C84B31",
                "#1E5128",
                "#FFD700",

            ],

            data: [0, 0],
            hoverOffset: 4,
        },
    ],
};

const config = {
    type: "bar",
    data: data,
    options: {
      maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Grafik Data Penduduk'
            }
        }
    },
};

const config2 = {
    type: "doughnut",
    data: data,
    options: {
      maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Grafik Data Penduduk'
            }
        }
    },
};

const config3 = {
    type: "pie",
    data: data,
    options: {
      maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Grafik Data Penduduk'
            }
        }
    },
};

let myChart = new Chart(document.getElementById("penduduk-Chart"), config);

axios.get('/statistics/statistik/penduduk').then(e => {
    console.log(e);
    myChart.data.datasets[0].data = e.data.data;
    myChart.update();
});


// render init block
function ChartType1(type) {
  //destroy chart
  myChart.destroy();
  if (type === "bar") {
    myChart = new Chart(document.getElementById("penduduk-Chart"), config);
  }

  if (type === "doughnut") {
    myChart = new Chart(document.getElementById("penduduk-Chart"), config2);
  }

  if (type === "pie") {
    myChart = new Chart(document.getElementById("penduduk-Chart"), config3);
  }
}