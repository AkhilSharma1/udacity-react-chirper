import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Your timeline</h3>
        <ul className="dashboard-list">
          {this.props.tweetsId.map(id => {
            return (
              <li key={id}>
                <div>TWEET ID: {id}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetsId: Object.keys(tweets).sort(
      (a, b) => tweets[a].timestamp - tweets[b].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
