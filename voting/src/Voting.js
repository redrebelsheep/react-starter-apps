import React, { Component } from "react";
import "./App.css";
import VotingItem from "./VotingItem";

class Voting extends Component {
  render() {
    return (
      <body>
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">Widget App Marian Kowall</span>
        </nav>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <VotingItem name="Javascript" counter={0} />
            <span class="badge badge-primary badge-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <VotingItem name="Python" counter={0} />
            <span class="badge badge-primary badge-pill">2</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <VotingItem name="Go" counter={0} />
            <span class="badge badge-primary badge-pill">1</span>
          </li>
        </ul>
      </body>
    );
  }
}
export default Voting;
