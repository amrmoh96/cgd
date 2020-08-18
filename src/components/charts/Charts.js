import React, { useEffect } from "react";
import Chart from 'chart.js'

const Charts = () => {
  const getToken = () => {
    return window.localStorage.getItem("token");
  };

  useEffect(() => {
    //    line chart
    fetch("http://128.199.0.16:3000/users/line-graph", {
      method: "GET",
      headers: {
        authorization: `bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const lineChart = document.getElementById("lineChart");
        new Chart(lineChart, {
          type: "line",
          data: {
            labels: json.message.time,
            datasets: [
              {
                label: "total",
                data: json.message.total,
                backgroundColor: "#0374ff",
                borderColor: "#0374ff",
                borderWidth: 3,
                fill: false,
                pointBackgroundColor: "#fff",
                pointBorderColor: "#0374ff",
                pointBorderWidth: 2,
              },
              {
                label: "recived",
                data: json.message.recived,
                backgroundColor: "#f00",
                borderColor: "#f00",
                borderWidth: 3,
                fill: false,
                pointBackgroundColor: "#fff",
                pointBorderColor: "#f00",
                pointBorderWidth: 2,
              },
              {
                label: "recived",
                data: json.message.transmited,
                backgroundColor: "#25c2a0",
                borderColor: "#25c2a0",
                borderWidth: 3,
                fill: false,
                pointBackgroundColor: "#fff",
                pointBorderColor: "#25c2a0",
                pointBorderWidth: 2,
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    display: false,
                  },
                },
              ],
            },
          },
        });
      });

    // pie chart
    fetch("http://128.199.0.16:3000/users/pie-chart", {
      method: "GET",
      headers: {
        authorization: `bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);

        const cpuPieChart = document.getElementById("cpuPieChart");
        new Chart(cpuPieChart, {
          type: "pie",
          data: {
            labels: ["Used CPU", "Unused CPU"],
            datasets: [
              {
                data: [
                  json.message.cpu.percent_used,
                  100 - json.message.cpu.percent_used,
                ],
                backgroundColor: ["red", "lightgrey"],
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    display: false,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    display: false,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          },
        });

        const ramPieChart = document.getElementById("ramPieChart");
        new Chart(ramPieChart, {
          type: "pie",
          data: {
            labels: ["Used RAM", "Unused RAM"],
            datasets: [
              {
                data: [
                  json.message.ram.percent_used,
                  100 - json.message.ram.percent_used,
                ],
                backgroundColor: ["red", "lightgrey"],
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    display: false,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    display: false,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          },
        });

        const diskPieChart = document.getElementById("diskPieChart");
        new Chart(diskPieChart, {
          type: "pie",
          data: {
            labels: json.message.disk.map((d) => d.path),
            datasets: [
              {
                data: json.message.disk.map((d) => d.percent_used),
                backgroundColor: ["blue", "green"],
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    display: false,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    display: false,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          },
        });
      });
  }, []);
  return (
    <div className="dashboard__charts">
      <div className="chart__container">
        <canvas id="lineChart"></canvas>
      </div>
      <div className="chart__container">
        <canvas id="cpuPieChart"></canvas>
      </div>
      <div className="chart__container">
        <canvas id="ramPieChart"></canvas>
      </div>
      <div className="chart__container">
        <canvas id="diskPieChart"></canvas>
      </div>
    </div>
  );
};

export default Charts;
