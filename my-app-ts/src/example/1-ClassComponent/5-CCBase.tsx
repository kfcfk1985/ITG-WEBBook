//创建一个类组件，有一个按钮，一旦点击，进行加1操作，并把这个值，传递给子组件，用于验证：
// 1.子组件通过props接收父组件传递进来的参数
// 2.子组件通过 defaultProps 指定 props 的默认值

import React, { Component } from "react";

interface IState {
  count: number;
}
interface IChildProps extends IState {
  msg: string;
}

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
        <p>{count}</p>

        <button onClick={this.setCounter}>add</button>

        <div>{count % 2 ? <Child count={count}></Child> : ""}</div>
      </div>
    );
  }
}

class Child extends Component {
  //! 子组件通过 defaultProps 指定 props 的默认值
  static defaultProps: IChildProps = {
    count: 0,
    msg: "omg React",
  };
  public props!: IChildProps;

  componentWillUnmount() {
    console.log("Child：componentWillUnmount");
  }

  render() {
    let { count, msg } = this.props; //! 子组件通过props接收父组件传递进来的参数
    return (
      <div>
        <p>Child</p>
        <p>{count}</p>
        <p>{msg}</p>
      </div>
    );
  }
}
