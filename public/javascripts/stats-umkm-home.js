const labels1 = ["Usaha Mikro", "Usaha Menengah", "Usaha Kecil"];

const data1 = {
  labels: labels1,
  datasets: [
    {
      labels: ["My First dataset"],
      backgroundColor: ["#ECDBBA", "#C84B31", "#2D4263"],

      data: [4, 4, 4],
      hoverOffset: 4,
    },
  ],
};

const config11 = {
  type: "bar",
  data: data1,
  options: {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Grafik Kategori Usaha",
      },
    },
  },
};

const config22 = {
  type: "doughnut",
  data: data1,
  options: {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Grafik Kategori Usaha",
      },
    },
  },
};


const config33 = {
  type: "pie",
  data: data1,
  options: {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Grafik Kategori Usaha",
      },
    },
  },
};

let myChart1 = new Chart(document.getElementById("Usaha-Mikro-Chart"), config11);
axios.get("/statistics/statistik/umkm").then((e) => {
  console.log(e);
  myChart1.data.datasets[0].data = e.data.data;
  myChart1.update();
});



// render init block
function ChartType(type) {
  //destroy chart
  myChart1.destroy();
  if (type === "bar") {
    myChart1 = new Chart(document.getElementById("Usaha-Mikro-Chart"), config11);
  }

  if (type === "doughnut") {
    myChart1 = new Chart(document.getElementById("Usaha-Mikro-Chart"), config22);
  }

  if (type === "pie") {
    myChart1 = new Chart(document.getElementById("Usaha-Mikro-Chart"), config33);
  }
}
