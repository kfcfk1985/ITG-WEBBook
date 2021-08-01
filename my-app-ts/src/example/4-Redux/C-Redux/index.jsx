import React, { Component } from "react";
import CoutA from "./components/CoutA";
import CoutB from "./components/CoutB";

class ReduxPage extends Component {
  render() {
    return (
      <div>
        <CoutA />
        <CoutB />
      </div>
    );
  }
}

export default ReduxPage;
