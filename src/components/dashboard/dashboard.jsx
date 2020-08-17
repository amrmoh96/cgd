import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import "./dashboard.css";
import Chart from "chart.js";
const DashBoard = ({ onSignOut }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //    line chart
    const lineChart = document.getElementById("lineChart");
    new Chart(lineChart, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# numbers",
            data: [0, 1, 3, 2, 3, 5, 4, 3, 1, 2],
            backgroundColor: "#0374ff",
            borderColor: "#0374ff",
            borderWidth: 3,
            // lineTension: 0,
            fill: false,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#0374ff",
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

    // pie chart
    const pieChart = document.getElementById("pieChart");
    new Chart(pieChart, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Green"],
        datasets: [
          {
            data: [4, 2, 3],
            backgroundColor: ["Red", "Blue", "Green"],
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

    // users list
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  const addUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: "Jhon",
        username: "Jhon Doe",
        email: "JhonDoe@email.com",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setUsers([...users, json]);
      });
  };

  return (
    <React.Fragment>
      <Navbar onSignOut={onSignOut} />
      <div className="body__wrapper">
        <div className="sidebar"></div>
        <div className="dashboard">
          <div className="dashboard__charts">
            <div className="chart__container">
              <canvas id="lineChart"></canvas>
            </div>
            <div className="chart__container">
              <canvas id="pieChart"></canvas>
            </div>
          </div>
          <div className="dashboard__table">
            <div style={{ textAlign: "right", marginBottom: "10px" }}>
              <button onClick={addUser}>Add User</button>
            </div>
            <table cellPadding="0" cellSpacing="0">
              <thead>
                <tr>
                  <th>username</th>
                  <th>name</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.name}</td>
                    <td>
                      <a href={"mailto:" + user.email}>{user.email}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashBoard;
