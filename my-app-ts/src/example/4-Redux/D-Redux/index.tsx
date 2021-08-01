import React, { Component } from "react";

import store, { Type } from "./store";

interface State {
  cnt: number;
}

class ComponentName extends Component {
  public state: State = {
    cnt: store.getState(),
  };

  add = () => {
    store.dispatch({
      type: Type.ADD,
    });
  };

  sub = () => {
    store.dispatch({
      type: Type.SUB,
    });
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        cnt: store.getState(),
      });
    });
  }

  render() {
    const { cnt } = this.state;

    return (
      <div>
        <p>{cnt}</p>
        <button onClick={this.add}>Add</button>
        <button onClick={this.sub}>Sub</button>
      </div>
    );
  }
}

export default ComponentName;
