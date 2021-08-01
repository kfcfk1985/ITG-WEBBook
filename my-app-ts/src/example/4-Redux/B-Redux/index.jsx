//利用Redux存储多个数据，多个数据存在合并的情况

import React, { Component } from "react";
import store, { TYPE } from "./store";

class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log("state 发生变化了");
      this.forceUpdate();
    });
  }

  add = () => {
    //! 用dispatch的时候，各个 Reducer 都会收到Action，因此，不同的 Reducer 要区分不同的type，否则，多个Reducer会同时修改数据。
    store.dispatch({
      type: TYPE.AGE.ADD,
    });
  };

  sub = () => {
    store.dispatch({
      type: TYPE.AGE.SUB,
    });
  };

  set = () => {
    const name = store.getState().name;

    store.dispatch({
      type: TYPE.NAME.SET,
      name: name === "lkt" ? "ljx" : "lkt",
    });
  };

  render() {
    return (
      <div>
        <p>name:{store.getState().name}</p>
        <p>age:{store.getState().age}</p>

        <button onClick={this.add}>Add</button>
        <button onClick={this.sub}>Sub</button>
        <button onClick={this.set}>Set</button>
      </div>
    );
  }
}

export default ReduxPage;
