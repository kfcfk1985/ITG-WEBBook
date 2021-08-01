//创建一个 ClassComponent组件，有一个按钮，每次点击该按钮，数值自增加1;用于验证:
// 在原生事件和setTimeout中都是同步的

import React, { Component } from "react";

type TState = {
  counter: number;
};
export default class SetStatePage extends Component {
  public state: TState;

  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  changeValue = (v: number) => {
    //!3
    //! 一旦调用 this.setState(),将会导致  render()执行重新渲染，完成后，才会执行下面的打印语句(前提是：changeValue 在setTimeout 和 原生事件中调用)
    this.setState({
      counter: this.state.counter + v,
    });

    console.log(`this.state.counter = ${this.state.counter}`);
  };

  componentDidMount() {
    //! 1
    //! this. setState 在原生事件和setTimeout中都是同步的
    setTimeout(() => {
      this.changeValue(1);
    }, 0);

    //! 2
    //! 合成事件:在react中，onClick等 都是用合成事件；
    //! 原生事件：document.getElementById("xxx").addEventListener("click",()=>{}) 形式
    //! 注意 document.getElementById("btn")?. 这种写法，可以避免 document.getElementById("btn") 为 null 的情况
    document.getElementById("btn")?.addEventListener("click", () => {
      this.changeValue(1);
    });
  }

  onClick = () => {
    //!4
    //! 使用this. setState 的第2个参数，也可以达到同步的目的
    console.log(`1:this.state.counter = ${this.state.counter}`);
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => {
        console.log("使用this. setState 的第2个参数，也可以达到同步的目的");
        console.log(`3:this.state.counter = ${this.state.counter}`);
      }
    );
    console.log(`2:this.state.counter = ${this.state.counter}`);
  };

  showRenderLog = () => {
    console.log("render");
    return "render";
  };

  render() {
    return (
      <div>
        <p>{this.showRenderLog()}</p>
        <h3>SetStatePage</h3>
        <p>
          <button id="btn">{this.state.counter}</button>
        </p>
        <p>
          <button onClick={this.onClick}>这是按钮2</button>
        </p>
      </div>
    );
  }
}
