const labels = ["Belum/Tidak Pernah Sekolah", "Belum/Tidak Tamat SD/SDLB/MI/Paket A", "SD/SDLB/MI/Paket A",
    "SMP/SMPLB/MTs/Paket B", "SMA/SMLB/MA/SMK/MAK/Paket C", "DI/DII/DIII",
    "DIV/S1", "S2", "S3"];

const data = {
    labels: labels,
    datasets: [
        {
            label: ["My First dataset"],
            backgroundColor: [
                "#DBFFFF",
                "#F5F0BB",
                "#E9DCFF",
                "#C4DFAA",
                "#FFD2FB",
                "#E0E0F3",
                "#7882A4",
                "#BBBBBB",
                "#CFC5A5",
                "#F8E7F8",
            ],

            data: [2, 10, 3, 5, 6, 7, 8, 5, 2, 2],
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
                text: 'Grafik Pendidikan'
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
              text: 'Grafik Pendidikan'
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
              text: 'Grafik Pendidikan'
          }
      }
  },
};

let myChart = new Chart(document.getElementById("Pendidikan-Chart"), config);
axios.get('/statistics/statistik/pendidikan').then(e => {
    console.log(e);
    myChart.data.datasets[0].data = e.data.data;
    myChart.update();
});


// render init block
function ChartType(type) {
  //destroy chart
  myChart.destroy();
  if (type === "bar") {
    myChart = new Chart(document.getElementById("Pendidikan-Chart"), config);
  }

  if (type === "doughnut") {
    myChart = new Chart(document.getElementById("Pendidikan-Chart"), config2);
  }

  if (type === "pie") {
    myChart = new Chart(document.getElementById("Pendidikan-Chart"), config3);
  }
}
