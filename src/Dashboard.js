import React, { PureComponent } from "react";
import "./Dashboard.css";
export default class Dashboard extends PureComponent {
  logout = () => {
                this.props.history.push("/");         
  };
  render() {
    return (
      <div>
        <a className="logout" onClick={this.logout}>
          Logout
        </a>
        <div className="dashboard">
          <h3>Welcome</h3>
        </div>
      </div>
    );
  }
}
