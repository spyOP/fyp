import React, { Component } from "react";
import { getHosts } from "../services/host";
import Pagination from "../components/pagination";
import { paginate } from "../ulits/paginate";

class Dashboard extends Component {
  state = {
    hosts: getHosts(),
    pageSize: 3,
    currentPage: 1,
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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.hosts;
    const { pageSize, currentPage, hosts: allHosts } = this.state;
    const hosts = paginate(allHosts, currentPage, pageSize);
    return (
      <React.Fragment>
        <div className="table-section">
          <table>
            <thead id="top">
              <tr className="top-1">
                <th>Search Host</th>
                <th>Assign Host</th>
                <th>Generate Report</th>
                <th>Manage Selected</th>
                <th>Refresh</th>
              </tr>
            </thead>
          </table>
        </div>
        <div>
          <table>
            <thead className="middle">
              <tr className="middle-1">
                <th>HostName</th>
                <th>User</th>
                <th>status</th>
                <th>LastCheckIn</th>
                <th>Assigned to</th>
                <th>Region</th>
                <th>Rating</th>
                <th>Note</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {hosts.map((host) => (
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
        </div>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Dashboard;
