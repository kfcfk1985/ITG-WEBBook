import React, { Component } from "react";
import store from "../reducers/store";

import { ActionType } from "../type.d";

const { num } = store.getState().count2;

class CoutB extends Component {
  state = {
    num,
  };
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ num: store.getState().count2.num });
    });
  }
  render() {
    return (
      <div>
        <p>CoutB组件：{this.state.num}</p>
        <button onClick={() => store.dispatch({ type: ActionType.ADD2 })}>
          CoutB组件++
        </button>
        <button
          onClick={() => store.dispatch({ type: ActionType.CUT2, num: 1 })}
        >
          CoutB组件--
        </button>
      </div>
    );
  }
}

export default CoutB;
