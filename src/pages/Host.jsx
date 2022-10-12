import React, { Component } from "react";
import { getHosts } from "../services/host";
class Host extends Component {
  state = {
    hosts: getHosts(),
  };

  handleDelete = (host) => {
    const hosts = this.state.hosts.filter((h) => h._id !== host._id);
    this.setState({ hosts });
  };

  dot = {
    display: "inline-block",
    width: "20px",
    height: "20px",
    backgroundColor: "green",
    borderRadius: "50%",
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Search Host</th>
            <th>Assign Host</th>
            <th>Generate Report</th>
            <th>Manage Selected</th>
            <th>Refresh</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>HostName</th>
            <th>User</th>
            <th>status</th>
            <th>LastCheckIn</th>
            <th>Assigned to</th>
            <th>Region</th>
            <th>Rating</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {this.state.hosts.map((host) => (
            <tr key={host._id}>
              <td>{host.host_name}</td>
              <td>{host.user}</td>
              <td>{host.status}</td>
              <td>{host.lastCheckIn}</td>
              <td>{host.assigned_to}</td>
              <td>{host.region}</td>
              <td>{host.rating}</td>
              <td>{host.note}</td>
              <td>
                <button
                  onClick={() => this.handleDelete(host)}
                  className="btn btn-sm"
                >
                  <img src="./delete-24.png" />
                </button>{" "}
              </td>
              <td>
                <button>
                  <img alt="" src="/terminal.png" width="20" height="20" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Host;
