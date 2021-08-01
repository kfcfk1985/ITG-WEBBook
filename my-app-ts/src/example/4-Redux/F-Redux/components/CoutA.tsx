import React, { Component } from "react";

import store from "../reducers/store";
import { ActionType } from "../type.d";
const { num } = store.getState().count1;

class CoutA extends Component {
  state = {
    num,
  };
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ num: store.getState().count1.num });
    });
  }
  render() {
    return (
      <div>
        <p>CoutA组件：{this.state.num}</p>

        <button onClick={() => store.dispatch({ type: ActionType.ADD1 })}>
          CoutA组件++
        </button>

        <button
          onClick={() => store.dispatch({ type: ActionType.CUT1, num: 2 })}
        >
          CoutA组件--
        </button>
      </div>
    );
  }
}

export default CoutA;
