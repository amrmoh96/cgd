import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import "./dashboard.css";
import Table from "../Table-View/table";
import Charts from "../charts/Charts";

const DashBoard = ({ onSignOut }) => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    // Table View
    fetch("http://128.199.0.16:3000/users/table-view", {
      method: "GET",
      headers: {
        authorization: `bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((json) => setTable(json.message));
  }, []);

  const getToken = () => {
    return window.localStorage.getItem("token");
  };

  return (
    <React.Fragment>
      <Navbar onSignOut={onSignOut} />
      <div className="body__wrapper">
        <div className="sidebar"></div>
        <div className="dashboard">
          <Charts />
            <Table data={table} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashBoard;
