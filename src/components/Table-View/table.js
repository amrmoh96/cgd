import React from "react";

const Table = ({ data }) => {
  return (
    <div className="dashboard__table">
      <table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>label</th>
            <th>bannedwidth</th>
            <th>recived bandwidth</th>
            <th>transmit bandwidth</th>
            <th>active connection count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((T, index) => (
            <tr key={index}>
              <td>{T.label}</td>
              <td>{Math.round(T.bandwidth / 1000)} MB</td>
              <td>{Math.round(T.recived_bandwidth / 1024)} MB</td>
              <td>{Math.round(T.transmit_bandwidth / 1024)} MB</td>
              <td>{T.active_conn_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
