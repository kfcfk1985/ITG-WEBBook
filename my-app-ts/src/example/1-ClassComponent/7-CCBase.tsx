//创建一个类组件，用于验证：
// 1.mount 时的生命周期调用情况：constructor -> getDerivedStateFromProps -> render  -> componentDidMount
// 2.有一个按钮，每点击一次，数据增加，观察更新时，生命周期的情况： getDerivedStateFromProps -> shouldComponentUpdate  ->  render  ->  componentDidUpdate

//! 完整生命周期看 ：https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

import React, { Component } from "react";
// import PropTypes from "prop-types";

interface IState {
  count: number;
}

export default class LifeCyclePage extends Component {
  public state: IState;

  constructor(props: any) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  //!该方法应返回一个对象来更新 state，如果返回 null 则表示不对state的值进行修改。常用来对state进行超范围重置操作。
  static getDerivedStateFromProps(props: any, state: IState) {
    console.log("getDerivedStateFromProps", state);
    const { count } = state;
    return count > 5 ? { count: 0 } : null;
  }

  shouldComponentUpdate(nextProps: any, nextState: IState) {
    let { count } = nextState;

    console.log("shouldComponentUpdate", nextState, this.state);

    return count !== 3; //! 返回一个布尔值，若为false，则不执行render操作；若为true，则进行render操作
  }

  setCounter = () => {
    console.log("\n\r\n\r\n\r");
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");

    let { count } = this.state;
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <button onClick={this.setCounter}>add</button>
        <p>{count}</p>
      </div>
    );
  }

  //! getSnapshotBeforeUpdate() 在最近一次渲染输出（提交到 DOM 节点）之前调用(即：render之后，componentDidUpdate 之前)。
  //! 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期方法的任何返回值将作为参数传递给 componentDidUpdate()。
  getSnapshotBeforeUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<IState>
  ): any {
    console.log("getSnapshotBeforeUpdate", prevState.count);

    return "这是传递给 componentDidUpdate 的内容";
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate?(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("componentDidUpdate", snapshot, "\n\r\n\r\n\r");
  }
}
