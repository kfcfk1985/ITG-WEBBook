//创建一个类组件，有一个按钮，一旦点击，多次调用setState，用于验证：
// State 的更新会被合并 的现象
import React, { Component } from "react";

class CState {
  public counter!: number;
}

export default class SetStatePage extends Component {
  public state: CState;

  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  changeValue = (v: number) => {
    this.setState(
      {
        counter: this.state.counter + v,
      },
      //! 2
      //! 解决方法：把上面的对象改为用下面函数的方式
      // (prevState: CState) => {
      //   return {
      //     counter: prevState.counter + v,
      //   };
      // },

      () => {
        console.log(`this.state.counter = ${this.state.counter}`);
      }
    );
  };

  setCounter = () => {
    //! 1
    //! 多次调用 this.setState,设置更新的值会被覆盖！通过看setState的源码(https://www.jianshu.com/p/f9373a7b2751)发现：
    //! 设置更新的值会赋值给 this.__nextState 对象，所以导致设置“加2”的值，覆盖了前面设置“加1”的值。
    this.changeValue(1);
    this.changeValue(2);
  };

  render() {
    return (
      <div>
        <h3>SetStatePage</h3>
        <button onClick={this.setCounter}>{this.state.counter}</button>
      </div>
    );
  }
}
