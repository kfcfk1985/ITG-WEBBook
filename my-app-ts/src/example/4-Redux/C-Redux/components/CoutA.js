import React, { Component } from "react";

import store from "./../reducers/store";
import { ADD1, CUT1 } from "../reducers/type";
const { num } = store.getState().count1;

class CoutA extends Component {
  state = {
    num
  };
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ num: store.getState().count1.num });
    });
  }
  render() {
    return (
      <div>
        <p>CoutA组件：{this.state.num}</p>

        <button onClick={() => store.dispatch({ type: ADD1 })}>
          CoutA组件++
        </button>

        <button onClick={() => store.dispatch({ type: CUT1, num: 2 })}>
          CoutA组件--
        </button>
      </div>
    );
  }
}

export default CoutA;
