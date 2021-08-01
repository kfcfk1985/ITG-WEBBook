import React, { Component } from "react";

interface IState {
  count: number;
}
type TChildProps = IState;

export default class LifeCyclePage extends Component {
  public state: IState;

  constructor(props: any) {
    super(props);
    this.state = { count: 0 };
  }

  setCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <button onClick={this.setCounter}>add</button>
        <p>{count}</p>

        <Child count={count}></Child>
      </div>
    );
  }
}

class Child extends Component {
  public props!: TChildProps;
  //! componentWillReceiveProps的生命周期(16.3以下的版本才有，不建议再使用这个生命周期)：
  componentWillReceiveProps(nextProps: TChildProps) {
    console.log("componentWillReceiveProps", nextProps);
  }

  render() {
    let { count } = this.props;
    return (
      <div>
        <p>Child:{count}</p>
      </div>
    );
  }
}
