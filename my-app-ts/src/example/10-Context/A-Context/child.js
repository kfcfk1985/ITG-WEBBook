import React, { Component } from "react";
import { ThemeContext } from "./context";

class ContextTypePage extends Component {
  static contextType = ThemeContext; //!一旦这样执行后，this 就带有 context 对象。其内容就是通过 Provider 传递进来的参数
  render() {
    console.log("this", this); //sy-log
    let { themeColor } = this.context;

    return (
      <div>
        <h3>ContextTypePage</h3>
        <p>{themeColor}</p>
      </div>
    );
  }
}
//ContextTypePage.contextType = ThemeContext; //!这种方式也行，和上面的   static contextType = ThemeContext; 任选一种
export default ContextTypePage;
