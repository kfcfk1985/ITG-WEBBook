//利用Redux存储多个数据，多个数据存在合并的情况

import React, { Component } from "react";
import { AgeActionType, NameActionType, State } from "./type.d";
import store from "./store";

class ReduxPage extends Component {
  public state: State = store.getState();

  componentDidMount() {
    store.subscribe(() => {
      console.log("state 发生变化了");

      this.setState({
        ...this.state,
        ...store.getState(),
      });
    });
  }

  add = () => {
    //! 用dispatch的时候，各个 Reducer 都会收到Action，因此，不同的 Reducer 要区分不同的type，否则，多个Reducer会同时修改数据。
    store.dispatch({
      type: AgeActionType.ADD,
    });
  };

  sub = () => {
    store.dispatch({
      type: AgeActionType.SUB,
    });
  };

  set = () => {
    const { name } = this.state;

    store.dispatch({
      type: NameActionType.SET,
      name: name === "lkt" ? "ljx" : "lkt",
    });
  };

  render() {
    const { name, age } = this.state;

    return (
      <div>
        <p>name:{name}</p>
        <p>age:{age}</p>

        <button onClick={this.add}>Add</button>
        <button onClick={this.sub}>Sub</button>
        <button onClick={this.set}>Set</button>
      </div>
    );
  }
}

export default ReduxPage;
