//创建一个 ClassComponent组件，有一个按钮，每次点击该按钮，数值自增加1，用于验证:
//在声明周期和合成事件中，setState是异步的
import React, { Component } from "react";

interface IState {
  counter: number;
}

export default class SetStatePage extends Component {
  public state: IState;

  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  changeValue = (v: number) => {
    //!1:
    //! this. setState 在合成事件和生命周期中是异步的（这里说的异步其实是批量更新（统一某个时刻才更新），达到了优化性能的目的；
    //! 否则一调用setState就渲染一次界面，若同一时间多次调用setState，就会多次渲染界面，就会很卡）
    //! 即：调用setState()不会马上执行，而是会等到某个时刻才执行)
    this.setState({
      counter: this.state.counter + v,
    });

    console.log(`this.state.counter = ${this.state.counter}`); //!2: 所以即使上面调用了this.setState(),但这里打印出来还是之前的值
  };

  //!3:
  //! 这就是生命周期
  componentDidMount() {
    this.changeValue(1);
  }

  //!5:
  //! 因为this.setCounter是在模板中使用的，所以 setCounter函数定义时要用变量赋值箭头函数，否则会报错找不到changeValue。
  //! （原因是this指向错误！）。方便起见，除了生命周期函数外，其他都用变量赋值箭头函数的形式。
  setCounter = () => {
    this.changeValue(1);
  };

  render() {
    return (
      <div>
        <h3>SetStatePage</h3>
        {/* 
            //!4:
            //! 合成事件:在react中，onClick等 都是用合成事件；
            //! 原生事件：document.getElementById("xxx").addEventListener("click",()=>{}) 形式
        */}
        <button onClick={this.setCounter}>{this.state.counter}</button>
      </div>
    );
  }
}
